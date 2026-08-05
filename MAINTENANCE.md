# Profile Maintenance

This profile is an evidence index, not a static autobiography. Update a claim only after its source, scope, and date are recorded.

## Automated structural check

Run locally:

```bash
node scripts/verify-profile.mjs
```

The check fails when:

- the role, three flagships, recognition, or AI-assistance disclosure disappears;
- a known overclaim, location, email, or phone-number pattern enters the public README;
- a relative Markdown link no longer resolves;
- the English profile exceeds the scanability guardrails of 9,000 characters or 14 headings.

GitHub Actions runs the same check on pushes, pull requests, manual dispatch, and the first day of each month.

## Monthly manual check

Automation does not prove that an external page still contains the same claim. Once a month:

1. Open the public GitHub profile in a signed-out view.
2. Open every live demo, official result, LinkedIn, and repository link.
3. Confirm each project's visible status: `Public Demo`, `Prototype`, `Release Verified`, `Locally Verified`, `Prerelease`, or `External Validation Pending`.
4. Compare recognition and performance wording with `PUBLIC-CLAIM-MATRIX.md` in the local career workspace.
5. Remove a stale link or downgrade a status immediately; do not wait for a replacement success story.

## Milestone update rule

Before adding a milestone, record:

```text
Claim
Source URL or private evidence ID
Scope boundary
Last-verified date
```

Do not publish the milestone when one of these fields is missing.

## Pin review

Pins are reviewed quarterly. A repository earns a pin when it has all five:

1. A memorable product name.
2. A clear problem and system contract.
3. Reproducible or inspectable evidence.
4. A visible limitation.
5. Clear ownership or contribution attribution.

Recency, repository count, stars, and activity volume are not sufficient by themselves.
