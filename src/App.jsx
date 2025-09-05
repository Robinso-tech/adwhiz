import React, { useState } from "react";

export default function App() {
  const [productName, setProductName] = useState("");
  const [audience, setAudience] = useState("");
  const [result, setResult] = useState(null);

  // Simple generator function
  function handleGenerate() {
    if (!productName || !audience) {
      alert("Please fill out all fields");
      return;
    }

    const hooks = [
      `POV: ${audience} trying ${productName} for the first time...`,
      `${productName} in 5 seconds: life-changing results.`,
      `${audience}, here’s why you need ${productName}!`
    ];

    const script30 = `
[0-2s] Hook: ${hooks[0]}
[2-6s] Introduce ${productName}
[6-14s] Show how it solves a problem for ${audience}
[14-22s] Quick testimonial or proof
[22-27s] Offer: free shipping / discount
[27-30s] Call to Action: Get yours today!
`;

    const script15 = `
[0-2s] Hook: ${hooks[1]}
[2-8s] Demo before/after using ${productName}
[8-12s] Show key benefit
[12-15s] Call to Action: Order now!
`;

    const shotlist = `
1. Close-up of ${productName}
2. ${audience} using ${productName}
3. Quick demo montage
4. Overlay social proof (stars/quote)
5. End frame: logo + “Order today”
`;

    setResult({ hooks, script30, script15, shotlist });
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>AdWhiz AI (Beginner MVP)</h1>
      <p>Generate ad hooks and scripts in seconds.</p>

      <div style={{ marginBottom: "10px" }}>
        <label>Product name:</label><br />
        <input
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="e.g., HeatWave Hair Curler"
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Audience:</label><br />
        <input
          value={audience}
          onChange={(e) => setAudience(e.target.value)}
          placeholder="e.g., busy college students"
        />
      </div>

      <button onClick={handleGenerate}>Generate Ads</button>

      {result && (
        <div style={{ marginTop: "20px" }}>
          <h2>Hooks</h2>
          <ul>
            {result.hooks.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>

          <h2>30-Second Script</h2>
          <pre>{result.script30}</pre>

          <h2>15-Second Script</h2>
          <pre>{result.script15}</pre>

          <h2>Shot List</h2>
          <pre>{result.shotlist}</pre>
        </div>
      )}
    </div>
  );
}
