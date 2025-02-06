"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// sanityClient.ts
// If sanityClient.js is in the same directory as importData.cjs
const { client } = require('./sanityClient.js');
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.client = (0, client_1.createClient)({
    projectId:"6xoqn3ql" , // Replace with your project ID
    dataset: 'production', // Or your dataset name
    apiVersion: '2024-01-04', // Today's date or latest API version
    useCdn: false, // Disable CDN for real-time updates
    token:"skSmHhemslgTa4AxlmlMJGSkpBt6BVuseGOIspKRRqCzN4Fm0TJcXi9oModhF6d2bP1CYOYqWeeMHjbjTrIuZCn13yEyN9qcsLWcrhUjhvjWJ4yNZZNvt3kEvSTK1eoe1Zq4riqnFJ1iTVUbBs7NgeGAUus5tTBLLG4RvDyCrNBUYySPdhxG" ,
});