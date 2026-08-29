    async function sendPrompt() {
        const inp = document.getElementById('tInput'), res = document.getElementById('response'), keyInp = document.getElementById('tKey');
        const txt = inp.value, key = keyInp.value; if (!txt || !key) return;
        res.textContent = "Thinking..."; inp.value = "";
        try {
            const r = await fetch("https://openrouter.ai", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${key}`
                },
                body: JSON.stringify({
                    model: "openrouter/free",
                    messages: [{ role: "user", content: txt }]
                })
            });
            const d = await r.json();
            res.textContent = d.choices?.[0]?.message?.content || d.error?.message || "Error";
        } catch(e) { res.textContent = e.message; }
    }
    document.getElementById('tInput').addEventListener("keydown", e => { if(e.key === "Enter") sendPrompt(); });
