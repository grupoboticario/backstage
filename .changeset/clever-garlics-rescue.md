---
'@backstage/plugin-catalog-backend': minor
---

**BREAKING**: Removed `GithubDiscoveryProcessor`, `GithubMultiOrgReaderProcessor`, `GitHubOrgEntityProvider`, `GithubOrgReaderProcessor`, and `GithubMultiOrgConfig` which now instead should be imported from `@backstage/plugin-catalog-backend-module-github`. NOTE THAT the `GithubDiscoveryProcessor` and `GithubOrgReaderProcessor` were part of the default set of processors in the catalog backend, and if you are a user of discovery or location based org ingestion on GitLab, you MUST now add them manually in the catalog initialization code of your backend.

```diff
// In packages/backend/src/plugins/catalog.ts
+import {
+  GithubDiscoveryProcessor,
+  GithubOrgReaderProcessor,
+} from '@backstage/plugin-catalog-backend-module-github';
+import {
+  ScmIntegrations,
+  DefaultGithubCredentialsProvider
+} from '@backstage/integration';

 export default async function createPlugin(
   env: PluginEnvironment,
 ): Promise<Router> {
   const builder = await CatalogBuilder.create(env);
+  const integrations = ScmIntegrations.fromConfig(config);
+  const githubCredentialsProvider =
+    DefaultGithubCredentialsProvider.fromIntegrations(integrations);
+  builder.addProcessor(
+    GithubDiscoveryProcessor.fromConfig(config, {
+      logger,
+      githubCredentialsProvider,
+    }),
+    GithubOrgReaderProcessor.fromConfig(config, {
+      logger,
+      githubCredentialsProvider,
+    }),
+  );
```

**BREAKING**: Removed `GitLabDiscoveryProcessor`, which now instead should be imported from `@backstage/plugin-catalog-backend-module-gitlab`. NOTE THAT this processor was part of the default set of processors in the catalog backend, and if you are a user of discovery on GitLab, you MUST now add it manually in the catalog initialization code of your backend.

```diff
// In packages/backend/src/plugins/catalog.ts
+import { GitLabDiscoveryProcessor } from '@backstage/plugin-catalog-backend-module-gitlab';

 export default async function createPlugin(
   env: PluginEnvironment,
 ): Promise<Router> {
   const builder = await CatalogBuilder.create(env);
+  builder.addProcessor(
+    GitLabDiscoveryProcessor.fromConfig(env.config, { logger: env.logger })
+  );
```

**BREAKING**: Removed `AzureDevOpsDiscoveryProcessor`, which now instead should be imported from `@backstage/plugin-catalog-backend-module-azure`. This processor was not part of the set of default processors. If you were using it, you should already have a reference to it in your backend code and only need to update the import.
