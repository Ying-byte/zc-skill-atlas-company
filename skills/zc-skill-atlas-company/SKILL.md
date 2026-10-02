---
name: zc-skill-atlas-company
description: >-
  按研究框架整理公司业务、融资、竞品与风险，不确定处须标注。
  Use in any Agent Host that can mount stdio MCP. Pair with zc-skill-atlas-company.
---

# 目标公司背调 · Skill

## When to use

- User asks for: 目标公司背调
- 按研究框架整理公司业务、融资、竞品与风险，不确定处须标注。

## Tools (`zc-skill-atlas-company`)

| Tool | Args |
|------|------|
| `research_company` | query, jdText, profileText, location, notes, limit |

## Example

```json
{
  "query": "Frontend Engineer",
  "location": "remote",
  "jdText": "<paste JD>",
  "profileText": "<paste profile>"
}
```

## Limits

- Do not invent employers, dates, or numbers
- Do not apply or send email unless the user confirms
- Unknown facts must be marked unknown

## Host install

Mount this repo as stdio MCP (see README). Not Zhencheng-only.
