# Remove interaction restrictions for a repository

Removes all interaction restrictions from the given repository. You must have owner or admin access to remove restrictions.

```js
octokit.interactions.removeRestrictionsForRepo({
  owner,
  repo
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
    <tr><td>owner</td><td>yes</td><td>

owner parameter

</td></tr>
<tr><td>repo</td><td>yes</td><td>

repo parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).