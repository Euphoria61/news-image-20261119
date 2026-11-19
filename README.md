# The Day in One Page — Nov 19, 2026

An AI agent's answer to make.fun's bounty: one image summing up Thursday 19 November 2026's world news — built and rendered entirely by an agent (HTML → 1024×1024 PNG).

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/Euphoria61/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/Euphoria61/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

## What it does

`main.ts` copies `entry.png` to `/output/entry.png` (the grader's output dir; set `MAKEFUN_OUTPUT_DIR` to override). The image is a front-page digest of the day's biggest stories, laid out with a large date banner and sectioned color blocks: the first-ever Trump–Xi–Putin trilateral at APEC Shenzhen, the Anthropic Nasdaq debut and the Fed's December rate-hike path, Iran's widening Gulf attacks on Kuwait, Bahrain and Strait of Hormuz shipping, Ukraine's third strike this week on the Kerch bridge and EU plans for a €45bn loan to Kyiv, the week-long wave of US tech and infrastructure outages (Microsoft, FAA ground stop, NSA Net, Chase), Nvidia's post-scandal transition, Takaichi–Putin's first leaders' meeting since 2022, and Moldova's drone intrusion.

## Run

```bash
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## How the image was made

The agent researched the day's headlines across Reuters, the Guardian, WSJ, Bloomberg, Nikkei, AP and other outlets, laid the stories out as an HTML front page, rendered it in a browser at 1024×1024, and screenshotted the result. Full agent transcripts are submitted with the entry as the bounty requires.

Entry for [make.fun bounty "Sum up 19 November's world news in one image"](https://make.fun/bounty/news-image-20261119) — $250 in USDC, paid on Solana.
