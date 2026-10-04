<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep CampusFlow sample content in a client-safe data module and use shared presentation components across route pages, so a future data source can replace the mocks without changing page structure.
- Use TanStack file routes for each campus section and route-local metadata, so pages remain shareable and searchable.
