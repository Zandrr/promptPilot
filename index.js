<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>PromptPilot</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      font-family: 'Inter', sans-serif;
      background-color: #0f0f0f;
      color: #f2f2f2;
      padding: 40px;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
    }
    h1 {
      font-size: 3rem;
      margin-bottom: 0.5rem;
    }
    h2 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-top: 2.5rem;
      margin-bottom: 0.75rem;
    }
    p {
      line-height: 1.6;
      margin-bottom: 1.25rem;
    }
    .quote {
      font-style: italic;
      color: #999;
      margin: 2rem 0;
    }
    .cta {
      margin-top: 3rem;
    }
    .cta input {
      padding: 12px;
      border: none;
      border-radius: 6px;
      width: 250px;
      margin-right: 10px;
      font-size: 1rem;
    }
    .cta button {
      padding: 12px 20px;
      font-size: 1rem;
      border: none;
      border-radius: 6px;
      background-color: #32b67a;
      color: white;
      cursor: pointer;
    }
    .cta button:hover {
      background-color: #2ca86e;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>PromptPilot</h1>
    <p><strong>The fastest way to optimize LLM prompts with your own data</strong></p>

    <h2>🧩 Upload your data</h2>
    <p>Bring your JSON dump — chat logs, user events, feedback, whatever. PromptPilot ingests it and slices it into usable context snippets.</p>

    <h2>🤖 Auto-generate prompt variants</h2>
    <p>We test strategies like: last 3 messages, emotionally intense moments, longest threads, topic-matched logs, and more.</p>

    <h2>📈 Pick the best, instantly</h2>
    <p>PromptPilot evaluates all responses using LLM self-ratings, example matching, or your own scoring rules. It picks the best one and lets you tweak or ship it.</p>

    <h2>⚡ Iterate faster. Spend less.</h2>
    <p>Why guess the right prompt when you can test 5 and pick the best? Speed up dev cycles and optimize for value per token.</p>

    <div class="quote">
      “I just want to drop in my data and say: ‘Hey GPT, show me the best 4 options — now tweak #2 and deploy.’”<br>
      — You, probably
    </div>

    <div class="cta">
      <input type="email" placeholder="you@email.com" />
      <button>Join Waitlist</button>
    </div>
  </div>
</body>
</html>
