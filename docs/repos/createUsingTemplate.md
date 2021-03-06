# Create a repository using a template

Creates a new repository using a repository template. Use the `template_owner` and `template_repo` route parameters to specify the repository to use as the template. The authenticated user must own or be a member of an organization that owns the repository. To check if a repository is available to use as a template, get the repository's information using the [Get a repository](https://developer.github.com/v3/repos/#get-a-repository) endpoint and check that the `is_template` key is `true`.

**OAuth scope requirements**

When using [OAuth](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:

- `public_repo` scope or `repo` scope to create a public repository
- `repo` scope to create a private repository

\`

```js
octokit.repos.createUsingTemplate({
  template_owner,
  template_repo,
  name,
});
```

## Parameters

<table>
  <thead>
    <tr>
      <th>name</th>
      <th>required</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>template_owner</td><td>yes</td><td>

template_owner parameter

</td></tr>
<tr><td>template_repo</td><td>yes</td><td>

template_repo parameter

</td></tr>
<tr><td>owner</td><td>no</td><td>

The organization or person who will own the new repository. To create a new repository in an organization, the authenticated user must be a member of the specified organization.

</td></tr>
<tr><td>name</td><td>yes</td><td>

The name of the new repository.

</td></tr>
<tr><td>description</td><td>no</td><td>

A short description of the new repository.

</td></tr>
<tr><td>private</td><td>no</td><td>

Either `true` to create a new private repository or `false` to create a new public one.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/#create-a-repository-using-a-template).
