---
layout: default
---

<img src="{{ 'assets/images/avatar.png' | relative_url }}" class="avatar" />

## Vasilis Voyiadjis

Hi there 👋

My name is Vasilis and I'm currently pursuing my bachelor's in Computer Science and Telecommunications
at <a href="https://www.uth.gr/en" target="_blank">UTH</a>, while working full-time as a web engineer at
<a href="https://flarmio.com" target="_blank">Flarmio 🪽</a>.

I'm also into music production and composition, take a look at my Soundcloud.

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
