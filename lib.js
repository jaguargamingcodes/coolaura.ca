async function sendPrompt() {
    const inp = document.getElementById('tInput'), res = document.getElementById('response');
    if (!inp || !res) return;

    const txt = inp.value.trim();
    if (!txt) return;

    let key = localStorage.getItem("or_key");
    if (!key) {
        key = prompt("Please paste your OpenRouter API Key (sk-or-...) to use the AI features on this site:");
        if (!key) {
            res.textContent = "Error: An API key is required to send prompts.";
            return;
        }
        localStorage.setItem("or_key", key.trim());
    }

    res.textContent = "Thinking...";
    inp.value = "";

    try {
        const r = await fetch("https://openrouter.ai", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + key
            },
            body: JSON.stringify({
                model: "openrouter/free",
                messages: [{ role: "user", content: txt }]
            })
        });

        const d = await r.json();

        if (d && d.choices && d.choices.length > 0 && d.choices[0].message) {
            res.textContent = d.choices[0].message.content;
        } else if (d && d.error) {
            res.textContent = "API Error: " + d.error.message;
        } else {
            res.textContent = "Error: Invalid response framework received.";
        }
    } catch (e) {
        res.textContent = "Network Error: " + e.message;
    }
}

document.getElementById('tInput')?.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        sendPrompt();
    }
});

