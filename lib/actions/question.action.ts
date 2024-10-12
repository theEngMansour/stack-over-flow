"use server";

import {connectToDatabase} from "@/lib/mongoose";
import Question from "@/database/question.model";
import Tag from "@/database/tag.model";
import User from '@/database/user.model';
import {GetQuestionsParams} from '@/lib/actions/shared.type'
import {revalidatePath} from 'next/cache';

export async function getQuestions(params: GetQuestionsParams) {
    try {
        await connectToDatabase();
        const questions = await Question.find()
            .populate({
                path: "tags",
                model: Tag,
            })
            .populate({
                path: "author",
                model: User
            })
            .sort({createdAt: -1})
        ;
        return {questions}
    } catch (error) {
        console.log(error);
    }
}

export async function createQuestion(params: { author: any; title: any; explanation: any; tags: any; path: any }) {
    try {
        await connectToDatabase();

        const {title, explanation, tags, author, path} = params;

        // Create the question
        const question = await Question.create({
            title,
            explanation,
            author,
        });
        const tagDocuments = [];

        // Create the tags or get them if they already exist
        for (const tag of tags) {
            const existingTag = await Tag.findOneAndUpdate(
                {name: {$regex: new RegExp(`^${tag}$`, "i")}},
                {$setOnInsert: {name: tag}, $push: {questions: question._id}},
                {upsert: true, new: true},
            );

            tagDocuments.push(existingTag._id);
        }

        await Question.findByIdAndUpdate(question._id, {
            $push: {tags: {$each: tagDocuments}},
        });
        revalidatePath(path)
    } catch (error) {
        console.log(error);
    }
}
