import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";

const apiKey = prompt();
const input_prompt = prompt();
const model = new OpenAI({ temperature: 0.9, openAIApiKey: apiKey });

const template = input_prompt;
const prompt_from_template = new PromptTemplate({
  template: template,
  inputVariables: ["product"],
});

const chain = new LLMChain({ llm: model, prompt: prompt_from_template });

async function asyncCall() {
  console.log("calling");
  const result = await chain.call({ product: "colorful socks" });
  console.log(result);
}

asyncCall();
