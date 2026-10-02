#!/usr/bin/env node
import { createFirstpartyMcp } from '../_shared/create-firstparty-mcp.mjs';

const mcp = createFirstpartyMcp({
  "id": "atlas-company",
  "titleZh": "目标公司背调",
  "summary": "按研究框架整理公司业务、融资、竞品与风险，不确定处须标注。",
  "tools": [
    "research_company"
  ],
  "proxyTools": {
    "research_company": "zc_atlas_search"
  },
  "localKind": "research"
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
