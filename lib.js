import { CreateMLCEngine } from "https://esm.run/@mlc-ai/web-llm";
const engine = await CreateMLCEngine("Llama-3.2-3B-Instruct-q4f16_1-MLC");
tInput.onkeydown = async e => {
  if (e.key !== "Enter") return;
  response.innerText = "Thinking...";
  const x = await engine.chat.completions.create({
    messages: [{ role: "user", content: tInput.value }]
  });
  response.innerText = x.choices[0].message.content;
};
