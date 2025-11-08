# Git Commit Best Practices

This guide outlines **best practices for writing Git commit messages**, based on the **Conventional Commits** specification. Following this makes your commit history clean, readable, and useful for changelogs and automation.

---

## 1. Commit Message Structure

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

- **type** → type of change (**required**)
- **scope** → optional, usually the module, feature, or component affected
- **subject** → short summary (imperative mood, ~50 chars max)
- **body** → optional, more detailed explanation (wrap at ~72 chars)
- **footer** → optional, for breaking changes or issue references

---

## 2. Common Types

| Type     | When to use                                             |
| -------- | ------------------------------------------------------- |
| feat     | A new feature                                           |
| fix      | A bug fix                                               |
| docs     | Documentation only                                      |
| style    | Code style changes (formatting, semicolons, etc.)       |
| refactor | Code changes that neither fix a bug nor add a feature   |
| perf     | Performance improvements                                |
| test     | Adding or fixing tests                                  |
| chore    | Build process, tooling, dependencies, scripts           |
| ci       | Changes to CI/CD config or scripts                      |
| build    | Changes affecting build system or external dependencies |
| revert   | Reverts a previous commit                               |

---

## 3. Examples

**Feature addition:**

```text
feat(auth): add JWT login endpoint
```

**Bug fix:**

```text
fix(api): handle null response from posts endpoint

Previously, the app crashed when API returned null. Now we check for null
and return an empty array instead.

Closes #23
```

**Documentation:**

```text
docs(readme): update installation instructions
```

**Chore (dependency upgrade):**

```text
chore: upgrade pnpm to v8
```

**Refactor code:**

```text
refactor(user-profile): extract avatar component
```

---

## 4. Tips for Good Commits

1. Use **imperative mood**: “Add feature” instead of “Added feature”
2. Keep the **subject ≤ 50 characters**
3. Separate **subject from body with a blank line**
4. Include **issue numbers** in the footer if relevant (`Closes #123`)
5. Be **specific about what changed and why**
6. One **logical change per commit** — avoid mixing unrelated changes

---

## 5. Optional Footer Usage

- **Breaking change**:

```text
feat(auth): update password hashing algorithm

BREAKING CHANGE: passwords now use Argon2 instead of bcrypt
```

- **Issue references**:

```text
fix(api): correct query parameters for posts

Closes #45
```

---

By following this guide, your Git history will be **clear, maintainable, and compatible with automation tools** like semantic-release or conventional-changelog.
