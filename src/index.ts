import { Agent, run, setDefaultOpenAIKey } from "@openai/agents";
import "dotenv/config"; //.envしか読み込まれないらしい.env.localは自動では読み込まれない

const key = process.env.OPENAI_API_KEY;

// if (!key) throw new Error("OPENAI_API_KEY is missing");
if (!key) {
    throw new Error("OPENAI_API_KEY is missing");
} else {
    console.log("success")
}

setDefaultOpenAIKey(key);

const agent = new Agent({
    name: 'haiku',
    instructions: '俳句を生成する',
    model: 'gpt-4.1'
})

const result = await run(
    agent,
    '俳句を生成して下さい'
);

console.log(result.finalOutput)