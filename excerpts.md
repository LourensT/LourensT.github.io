---
layout: excerpts
title: Excerpts
permalink: /excerpts/
---

# Excerpts

<blockquote>
    <p> [...] a tendency to hide behind intellectual asceticism. He feared the world, yet he was attracted to it. </p>
    <figcaption>Man and his symbols, Carl Jung, quote by Jolanda Jacobi. Read summer 2020.</figcaption>
</blockquote>

Whenever I'm reading a good book, I find myself archiving the passages that especially resonate with me. Depending on the quality of my complementary writing, I might decide to share this blog. The quote above introduced me to the term "intellectual asceticism". Asceticism, meaning the self-denial of sensual pleasures, for the purpose of pursuing spiritual goals, can be interpreted in two ways here, and without the context it is difficult to conclude which one is meant:
1. Asceticism by committing to intellectual pursuits, suppressing the subconscious, to find answers in life without looking inward.
2. *Intellectual* ascetism, the self-denial of intellectual pursuits. This makes little sense, as it hard to see how denying ones self of knowledge would help attaining spiritual goals. But skepticism towards intellectual endeavors could hint to the fear of the world which he does not understand.

Point being, I have a collection of excerpts that I like, but if I do not document why I like them, they will just age poorly. So that explains this blog. The first meaning is probably correct, and if not, I must've misunderstood while reading, as I cannot see myself resonating with the second.

{% for item in collections.excerpts %}
<div>
  <h2>
    <button 
    class="toggle-button"
    onclick="toggleContent('content-{{ item.fileSlug }}', this)">
        &gt; {{ item.fileSlug }}
    </button>
  </h2>
  <div id="content-{{ item.fileSlug }}" style="display: none; margin-left: 20px;">
    {{item.templateContent}}
  </div>
</div>
{% endfor %}
