---
layout: default
---

<img src="{{ 'assets/images/avatar.png' | relative_url }}" class="avatar" />

## Vasilis Voyiadjis

Hi there 👋

I'm Vasilis, a Computer Science and Telecommunications student at <a href="https://www.uth.gr/en" target="_blank">UTH</a> with a background in web development.

I enjoy building things, exploring new technologies, and experimenting with personal projects, particularly around web development and AI.

Outside of tech, I'm passionate about music composition and production. Feel free to check out my SoundCloud.

📍 Lamia, Greece <br />
👨‍🎓 Computer Science and Telecommunications <br />
🔌 Let's connect:
<a href="https://github.com/billvog" target="_blank">GitHub</a> \|
<a href="https://linkedin.com/in/vasilis-voyiadjis" target="_blank">LinkedIn</a> \|
<a href="https://soundcloud.com/billvog" target="_blank">Soundcloud</a> <br />
📩️ Or just a hey: <a href="mailto:hey@billvog.com" target="_blank">hey@billvog.com</a>

### Projects

<ul class="projects-list">
{% for project in site.data.projects %}
  <li>
    <div class="title">
      <a href="https://github.com/{{ project.github_repo }}" target="_blank" title="GitHub Repository">
        {{ project.name }}
      </a>
    </div>
    <p class="small">{{ project.description }}</p>
    <p class="small">{{ project.tech_description }}</p>
  </li>
{% endfor %}
</ul>
