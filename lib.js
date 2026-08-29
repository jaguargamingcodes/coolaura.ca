    async function sendPrompt() {
        const inp = document.getElementById('tInput');
        const res = document.getElementById('response');
        const keyInp = document.getElementById('tKey');
        
        if (!inp || !keyInp || !res) return;
        
        const txt = inp.value;
        const key = keyInp.value;
        
        if (!txt || !key) {
            res.textContent = "Error: Please fill in both the Key and Message boxes.";
            return;
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
                res.textContent = "Error: Invalid response from OpenRouter.";
            }
        } catch(e) { 
            res.textContent = "Network Error: " + e.message; 
        }
    }

    document.getElementById('tInput').addEventListener("keydown", function(e) { 
        if (e.key === "Enter") {
            e.preventDefault();
            sendPrompt(); 
        }
    });