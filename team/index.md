---
title: Team
nav:
  order: 5
  tooltip: About our Team
---

{% include section.html %}
# Group Leader
{% include list.html data="members" component="portrait" filters="role: lead" %}
# Supervisors
{% include list.html data="members" component="portrait" filters="role: supervisor" %}
# Current PhD Students
{% include list.html data="members" component="portrait" filters="role: phd" %}
# Postdoc Research Fellows
{% include list.html data="members" component="portrait" filters="role: postdoc" %}
# Research Assistants
{% include list.html data="members" component="portrait" filters="role: assistant" %}
# External Collaborators
{% include list.html data="members" component="portrait" filters="role: external-member" %}
# Past Visiting Students
{% include list.html data="members" component="portrait" filters="role: past-visiting-student" %}
# Master Students
{% include list.html data="members" component="portrait" filters="role: master" %}
# Alumnus
{% include list.html data="members" component="portrait" filters="role: alumni" %}

{% include section.html %}

{% capture content %}

{% include figure.html image="images/members/group2021.png" %}
{% include figure.html image="images/members/group2020.jpg" %}
{% include figure.html image="images/members/group20202.jpg" %}

{% endcapture %}

{% include grid.html style="square" content=content %}
