---
title: "Building A Social Media Updates Tool"
slug: building-a-social-media-updates-tool
date: 2026-07-01
description: >
  A social media tool that gives weekly updates.
category: "Projects"
tags: "Projects"
image: "https://res.cloudinary.com/dz8qxptav/image/upload/v1782841750/social_pulse_tool_qv2a4l.png"
---

<div class="articleStyle custom-ul">

![hero image](https://res.cloudinary.com/dz8qxptav/image/upload/v1782841750/social_pulse_tool_qv2a4l.png)

# Building A Social Media Updates Tool

As a social media manager, who also wears many other hats, it’s hard to keep up with all the platform releases, trends, and other things I should care about. I mean, at some point I know I’m going to miss something and I’ve accepted that. Then I wondered, what if I could build a tool that helps keep me stay updated with the platforms I care about?

The idea was to build a web app that I could see what happened the week before so I can be prepared going into the current week’s meetings and not be caught off guard.

There are probably a bunch of solutions out there both paid and free. That’s great, but not the point here. I wanted to take a problem I had and see if I could build something with my knowledge, AI, and GitLab.

<br>

## TLDR

I built a custom tool that keeps me updated on the latest social media platform releases and news each week. This is important for me so that I have confidence going into the week knowing what’s going on in social for my specific platforms and how that affects my strategy.

- [There Was An Idea](#there-was-an-idea)
- [Cursor Vibes](#cursor-vibes)
- [Introducing GitLab](#introducing-gitlab)
- [What I Didn’t Expect](#what-i-didnt-expect)
- [Final Words](#final-words)

<br>

## There Was An Idea

Like technology, marketing changes every month, every week, and every day. As a social media manager, I know it can be hard to keep up with all the changes. Especially if social media management is only one part of your job. I’ve held positions where I’ve been the social media manager, marketing analyst, paid media specialist, and SEO specialist. That’s a lot for one person to take on.

That said, I do like being a generalist. It forces me to stay on top of different areas of marketing. The tradeoff is having to know what’s changing and how to adjust strategies.

Since I enjoy learning about different technologies, I thought a fun project would be to make a social media tool that gives me the latest platform updates and news each week.

I typically like starting with ChatGPT to outline and think through what I’m about to build. Once I settled on a strong outline, I used Cursor to help me build the web app.

<br>

## Cursor Vibes

Astro is my framework of choice, but I know there are plenty out there so it’s not the only one you could use. I like Astro because I find it easy to build with and you can do a lot or just a little depending on your project scope. Once I had Astro installed it was on to Cursor.

Full transparency, I definitely allowed Cursor to take the wheel on this one. This was a choice from the beginning though. This was always meant to be a small test project and I didn’t want it to take longer than a few days. If I was doing this for a client or my actual 9-5 job, I would have taken more time to review the code myself.

I didn’t have a specific design in my mind so I honestly didn’t focus or care too much how it looked initially. The most important part was to get v1 up and running, see what it looked like, and make adjustments after.

<br>

## Introducing GitLab

For this project, I'm using GitLab to automate my workflow. Every time I make a change, GitLab automatically checks my project, builds the site, and preps it for deployment which saves me from doing those steps manually. I highly recommend signing up for a GitLab account and spending a little time understanding how it works.

I’m using GitLab CI/CD for two jobs:

1. Every push to “main” runs “astro check” and a production build
2. A weekly scheduled pipeline fetches RSS news, AI enriches it, and commits updated content back to “main”.

<br>

API keys stay in GitLab variables and Netlify picks up the push to redeploy the site so there’s no manual updates needed. Basically it looks like this:

Schedule → Fetch RSS → AI enrich copy → Publish to JSON → Check & build → Commit & push → Netlify deploy → Live digest updates

<br>

## What I Didn’t Expect

I was cruising along and then I hit an error in GitLab. The pipeline failed because of some reason that looked really confusing. I eventually discovered it was because of the AI enrichment part of my pipeline.

The idea was to use ChatGPT to take the news from official sources and help create the Why It Matters and Recommended Action sections of each card.

Apparently I needed to set up an account and billing with the OpenAI Platform ([platform.openai.com](http://platform.openai.com)). This is where developers and creators can access OpenAI’s models via APIs in order to build custom apps, websites, and other tools.

I’ve never used this before and I thought it was exhausting to have to pay for another thing. FYI it was only $5, but still. Nobody wants another subscription to have to pay for, am I right?

Once that was hooked up I was good to go, but I hit another error. The pipeline was good, but the content on the page was still showing the initial seed data. Netlify wasn’t pushing the new content live. I ran a manual deploy and it worked. However, I’m still working on automating this part.

<br>

## Final Words

To be clear, this is a small portfolio project, not intended for a massive amount of users. There’s still seed data from the initial build, the design is a bit rough, and the domain is the random one I got from Netlify because I didn’t want to pay for a custom domain.

I’m looking forward to seeing how this works week over week and if I still think it’s useful a month from now. The name [Social Update Tracker](https://social-update-tracker.netlify.app/) is not the best either, but like I said, it’s a quick project for fun.

If you find this kind of tool helpful, let me know and I’d be happy to keep it going.
