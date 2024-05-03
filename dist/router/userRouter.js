"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signup_1 = __importDefault(require("../controllers/signup"));
const login_1 = __importDefault(require("../controllers/login"));
const userRouter = express_1.default.Router();
userRouter.post("/register", signup_1.default);
userRouter.post("/login", login_1.default);
exports.default = userRouter;
