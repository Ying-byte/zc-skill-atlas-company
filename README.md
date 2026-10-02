# 目标公司背调

Standard **MCP + Skill** for any Agent Host (Cursor / Claude Code / Codex / Zhencheng).

按研究框架整理公司业务、融资、竞品与风险，不确定处须标注。

> One capability = one GitHub project. This folder is the sellable unit.

## Quick start

```bash
cd zc-skill-atlas-company
npm i
node stdio_mcp_server.mjs
```

## Cursor (`~/.cursor/mcp.json`)

```json
{
  "mcpServers": {
    "zc-skill-atlas-company": {
      "command": "node",
      "args": ["/ABS/PATH/zc-skill-atlas-company/stdio_mcp_server.mjs"]
    }
  }
}
```

Optional (use Zhencheng live tools):

```json
"env": {
  "ZC_AGENT_API_URL": "https://your-zhencheng-host",
  "ZC_MCP_TOKEN": "your-token"
}
```

## Tools

| Tool | Args |
|------|------|
| `research_company` | `query?` `jdText?` `profileText?` `location?` `notes?` `limit?` (number) |

## Skill

See `skills/zc-skill-atlas-company/SKILL.md`.

## License

MIT — see `LICENSE`.
