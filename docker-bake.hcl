# docker-bake.hcl
# Build the backend image exactly like the Compose file does.
target "backend" {
  context    = "."
  dockerfile = "Dockerfile"
  tags       = ["ilussisuhaldus-backend:local"]
  # uncomment if you need multi‑arch
  # platforms = ["linux/arm64", "linux/amd64"]
}

# Bake needs a default group; put your targets in it.
group "default" {
  targets = ["backend"]
}
