# SECURITY — Ardham Shastra

## Design posture
This campus is a **static, offline-first HTML document**. It contains:
- No network calls
- No external scripts or fonts
- No user data collection
- No accounts, no logins, no tracking

That is the security model: **nothing to exploit, nothing to steal.**

## Reporting a vulnerability
This project has almost no attack surface. If you find something (malformed HTML, a broken link, an injection vector in the offline page), please:

1. **Do not** open a public issue with exploit details
2. Email the maintainer privately or open a GitHub Security Advisory
3. Include: file, line, impact, and a minimal reproduction

## Best practices for forks
- Keep the MIT license and attribution
- Do not add external scripts (breaks offline promise and adds risk)
- If you add interactive features, keep them local and dependency-free

## Proof habit
Every claim in this campus should be verifiable: run it, trace it, measure it, artifact it. That honesty is itself a security practice.
