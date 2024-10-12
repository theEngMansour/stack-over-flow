"use server";
import {CreateUserParams, DeleteUserParams} from '@/lib/actions/shared.type'
import {connectToDatabase} from "@/lib/mongoose";
import User from "@/database/user.model";
import {UpdateUserParams} from '@clerk/types';
import {revalidatePath} from 'next/cache';

export async function getUserById(params: any) {
    try {
        await connectToDatabase();

        const {userId} = params;

        return await User.findOne({clerkId: userId});
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function createUser(userData: CreateUserParams) {
    try {
        connectToDatabase();
        const newUser = await User.create(userData);
        return newUser;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function updateUser(params: UpdateUserParams) {
    try {
        connectToDatabase();

        const {clerkId, updateData, path} = params;

        await User.findOneAndUpdate({clerkId}, updateData, {
            new: true,
        });

        revalidatePath(path);
    } catch (error) {
        console.log(error);
        throw error;
    }
}


export async function deleteUser(params: DeleteUserParams) {
    try {
        connectToDatabase();

        const {clerkId} = params;

        const user = await User.findOneAndDelete({clerkId});

        if (!user) {
            throw new Error('User not found');
        }
        
        const deletedUser = await User.findByIdAndDelete(user._id);

        return deletedUser;
    } catch (error) {
        console.log(error);
        throw error;
    }
}