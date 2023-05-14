"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    try {
        res.json({
            status: true,
            message: " You are welcome comrade"
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            status: false,
            message: "You've got some errors"
        });
    }
});
app.listen("5000", () => {
    console.log('server running! ');
});
