export const templates = {
  apiReference: `
## API Reference
            
#### Get all items
            
\`\`\`http
    GET /api/items
\`\`\`
            
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| \`api_key\` | \`string\` | **Required**. Your API key |
`,
  pullRequest: `
### Problems
      
### How would the reviewers verify the solutions
      
### Preflight checklist
      
- [ ] **Manual testing** has been performed according to the acceptance criteria.
- [ ] **Unit testing** and/or end-to-end testing has got covered.
`,
  contributing: `
## Contributing
  
If you're interested in contributing, please read our contributing docs before submitting a pull request.

`,
  codeExample: `
## Example
\`\`\`
    function helloWorld() {
        return 'Hello world'
    }
\`\`\`
`,
  collapsible: `
<details>
  <summary>Click to expand</summary>
  
  ### Title
</details>

`,
}
