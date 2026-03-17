import { Agent, run, setDefaultOpenAIKey, webSearchTool } from "@openai/agents";
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
    instructions: '有名な人の俳句を検索してそれを取得して出力をする',
    model: 'gpt-4.1',
    tools: [ 
        webSearchTool({ searchContextSize: "medium" })
    ]
})

const result = await run(
    agent,
    '俳句を教えてください'
);

console.log(result.finalOutput)