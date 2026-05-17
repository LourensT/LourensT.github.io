---
layout: excerpts
title: Excerpts
permalink: /excerpts/
---

<h1>Excerpts</h1>

<blockquote>
    <p> [...] a tendency to hide behind intellectual asceticism. He feared the world, yet he was attracted to it. </p>
    <figcaption>Jolanda Jacobi, as quoted in Man and his symbols by Carl Jung.</figcaption>
</blockquote>

Whatever I'm reading, I occasionally archive passages that resonate with me. I think I came across the term “intellectual asceticism” for the first time in the excerpt above. Asceticism is the self-denial of wordly pleasure for the purpose of pursuing spiritual goals. Here, it can mean two things.
1. Asceticism by committing to intellectual pursuits and abstaining from simple pleasures, or
2. *intellectual* ascetism, the self-denial of the pleasure of intellectual pursuits. An aversion towards intellectual endeavors to avoid the world which he does not understand.

Point being, I have a collection of excerpts, which without documentation will just age poorly. The first meaning is probably most sensible, and if not, I don't relate to the second. 

{% for item in collections.excerpts %}
<div>
  <h2>
    <button 
    class="toggle-button"
    id="button-{{ item.fileSlug }}"
    onclick="toggleContent('content-{{ item.fileSlug }}', this)">
        &gt; {{ item.fileSlug }}.
    </button>
    <span class="date">{{ item.data.dateCreated | formatISODate: "%Y-%m-%d" }}</span>
  </h2>
  <div id="content-{{ item.fileSlug }}" style="display: none; margin-left: 20px;">
    {{item.templateContent}}
  </div>
</div>
{% endfor %}
