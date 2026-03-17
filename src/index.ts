import { Agent, setDefaultOpenAIKey } from "@openai/agents";
import "dotenv/config"; //.envしか読み込まれないらしい.env.localは自動では読み込まれない

const key = process.env.OPENAI_API_KEY;

// if (!key) throw new Error("OPENAI_API_KEY is missing");
if (!key) {
    throw new Error("OPENAI_API_KEY is missing");
} else {
    console.log("success")
}

setDefaultOpenAIKey(key);


