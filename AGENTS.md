# Agent instructions — lib.public.game-currency

A shared knowledge vault (Obsidian markdown) lives at `/Users/laurent/Documents/GitHub/Claude Memory/`.

1. Read `Claude Memory/Agent/session-start.md` first — top gotchas, conventions, what's in flight.
2. Read `Claude Memory/Repos/lib.public.game-currency.md` — architecture, test commands, gotchas for this repo.
3. Need more? Search the vault: `rg -n "<term>" "/Users/laurent/Documents/GitHub/Claude Memory"` and read only the files surfaced. Do not bulk-read it.

Write findings back: session logs go to `Claude Memory/Log/YYYY-MM-DD-<topic>.md`; add non-obvious quirks you discover to this repo's hub note under Gotchas.

Working style: keep changes small and scoped to what was asked; no opportunistic refactors; never commit without an explicit request.

Delegating to sub-agents: these rules apply to them too, but sub-agents start without this file or the session context — brief each one in its prompt with the exact files/notes to read, the applicable gotchas pasted inline, and the return format (conclusions + file:line refs, not file dumps). The coordinating agent does any writes to shared docs. Full version: team-knowledge/conventions.md, "Sub-agent delegation".
