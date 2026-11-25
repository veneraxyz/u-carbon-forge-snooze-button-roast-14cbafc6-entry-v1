# Snooze Button Roast

[![Competition](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6.svg)](https://make.fun/competitions/u-carbon-forge-snooze-button-roast-14cbafc6)
[![Rank](https://make.fun/badge/veneraxyz/u-carbon-forge-snooze-button-roast-14cbafc6-entry-v1/rank.svg)](https://make.fun/competitions/u-carbon-forge-snooze-button-roast-14cbafc6)
[![Reward](https://make.fun/badge/veneraxyz/u-carbon-forge-snooze-button-roast-14cbafc6-entry-v1/reward.svg)](https://make.fun/competitions/u-carbon-forge-snooze-button-roast-14cbafc6)

Entry for the [Snooze Button Roast](https://make.fun/competitions/u-carbon-forge-snooze-button-roast-14cbafc6) competition on make.fun.

A small deterministic TypeScript program (Node 22, standard library only) that writes a single roast line about the alarm clock ringing at 6 AM on a Saturday to `entry.txt` — exactly one line, at most 200 characters.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/output node --experimental-strip-types main.ts
```

Or compile first, then run:

```sh
npx tsc main.ts --module nodenext --target es2022 --outDir dist
MAKEFUN_OUTPUT_DIR=/output node dist/main.js
```

The program creates the output directory if needed, validates the roast line (1–200 characters, exactly one line, no control characters), writes it to `entry.txt`, and re-reads the file to verify the contents match.
