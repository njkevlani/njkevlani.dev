---
title: "Kubernetes"
---

# Tips and tricks for Kubernetes

## Saving secret with `kubectl`

There are multiple ways to save secret in `k8s` cluster. One of the simple ways
to do this with `kubectl` is:

```shell
echo 'apiVersion: v1
kind: Secret
type: Opaque
metadata:
  namespace: backend
  name: database-credentials
stringData:
  password: super-secret
' | kubectl apply -f -
```

Instead of using `echo`, the `k8s` object can be store in file and secret can be
created with `kubectl apply -f /path/to/file.yaml` as well.

Adding new secrets into `k8s` object and applying it will results in new secret
getting added or older one's getting updated if same key is used.

For example,

```yaml
apiVersion: v1
kind: Secret
type: Opaque
metadata:
  namespace: backend
  name: database-credentials
stringData:
  password: super-secret-new
  username: super-user
```

With applying this secret, the following two things will happen.

1. `username` key will be added.
2. Value for `password` key will be updated.

Note that, removing keys from the `secret.yaml` file does not result in removal
of secret from the object in k8s cluster. For removal, `kubectl edit secret ...`
can be used.
