"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAuth = exports.loginToken = void 0;
const express_1 = require("express");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const loginToken = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return jsonwebtoken_1.default.sign({ user }, process.env.SECRET_KEY, { expiresIn: '2h' });
    }
    catch (error) {
        console.log(process.env.SECRET_KEY);
    }
});
exports.loginToken = loginToken;
const verifyAuth = (token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const decodedToken = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
        if (decodedToken) {
            express_1.response.status(200).json(decodedToken);
        }
        else {
            express_1.response.status(200).json('expired');
        }
    }
    catch (error) {
        throw Error('failed to verify token');
    }
});
exports.verifyAuth = verifyAuth;
