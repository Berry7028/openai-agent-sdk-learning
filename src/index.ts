import { setDefaultOpenAIKey } from "@openai/agents";
import "dotenv/config";

const key = process.env.OPENAI_API_KEY;

// if (!key) throw new Error("OPENAI_API_KEY is missing");
if (!key) {
    throw new Error("OPENAI_API_KEY is missing");
} else {
    console.log("success")
}


setDefaultOpenAIKey(key);