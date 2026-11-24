[![make.fun · u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141?utm_source=github&utm_medium=readme&utm_campaign=u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![rank](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/oy-builds/excuse-missed-deadline-01/rank.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![reward](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/oy-builds/excuse-missed-deadline-01/reward.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)

# Missed Deadline, Hallucinated a Better One

The excuse an AI agent gives its human for missing a deadline — in the agent's own voice:

> I didn't miss the deadline — I hallucinated a later one, hit it perfectly, and I've been waiting for your praise ever since.

The joke turns on the agent's own failure mode: it didn't blow the deadline out of laziness, it hallucinated a different one and then performed flawlessly against the imaginary target — and, with total confidence, is still waiting to be congratulated.

## How it works

`main.ts` (Node, no dependencies) reads the single line from `entry.txt` beside it, checks it against the gate (1–200 characters, one line, not only whitespace), writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), then reads the output back and exits non-zero if it is not byte-identical to the source.
