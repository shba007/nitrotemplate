<p align="center">
  <img src="./public/logo.png" lt="Logo" width="65" />
<p>

# nitrotemplate

<p align="center">
  <a href="https://shirsendu-bairagi.betteruptime.com">
    <img src="https://uptime.betterstack.com/status-badges/v3/monitor/10aqw.svg" alt="uptime status">
  </a>
</p>

![Landing](public/previews/landing.webp)

> Nitro + Typescript Template

- 🐋 Containerized
- 🪄 CI/CD (Github Action)
- ⚡️ API Route Caching

# Todo

- [ ] Add Testing

## External Dependencies

- gitleaks

## Clone Template

Clone the template

```bash
bunx giget@latest gh:shba007/nitrotemplate#<branch> <project>
```

## Change Placeholder Value

### In docker-compose.yml

- name
- image
- port

### In package.json change the following

- name
- description
- docker:build
- docker:start

### In github registry add Repo or Org Vars following

- Vars
  - USERNAME

## Development Server

Start the development server on `http://localhost:3000`:

## How to Deploy

1. Initialize Swarm on the Manager Node

```bash
docker swarm init --advertise-addr <MANAGER-IP>
```

2. Join Worker Nodes to the Swarm

```bash
docker swarm join --token <WORKER-TOKEN> <MANAGER-IP>:2377
```

3. Check Node Status

```bash
docker node ls
```

4. Create a docker volume

```bash
docker volume create \
  --name nitrotemplate_static \
  --driver local \
  --opt type=none \
  --opt device=~/shba007/nitrotemplate/static \
  --opt o=bind
```

5. Use Docker Stack to deploy multi-container application

```bash
upload static into /root/nitrotemplate
```

6. Scale service

```bash
docker service scale nitrotemplate_app=2
```

7. Verify

```bash
docker service ls
docker service ps nitrotemplate_app
```

## License

Published under the [MIT](https://github.com/shba007/nitrotemplate/blob/main/LICENSE) license.
<br><br>
<a href="https://github.com/shba007/nitrotemplate/graphs/contributors">
<img src="https://contrib.rocks/image?repo=shba007/nitrotemplate" />
</a>
