---
title: "From Zero to Insights: Dive into GA4"
slug: introducing-to-ga4
date: 2025-03-21
description: >
  This is the description section for Introduction to GA4 blog.
category: "Google Analytics"
tags: "Marketing"
image: "From_Zero_to_Insights_Dive_into_GA4_sen91a"
---

<div class="articleStyle custom-ul">

![GA4 Dashboard](https://res.cloudinary.com/dz8qxptav/image/upload/v1742547012/From_Zero_to_Insights_Dive_into_GA4_sen91a.png)

# From Zero to Insights: Dive into GA4

March 21, 2025

Discover what your website is trying to tell you with Google Analytics 4 (GA4) so you can be more informed about website traffic and make better data-driven decisions.

Marketing and technology change so often it sometimes feels like just when you finally have a grasp on your tools something changes. You’re now having to scramble to understand the new features. At least that’s how a lot of us felt when Google said we had to move from Universal Analytics to GA4.

What doesn’t often change are the core concepts and that’s what I want to cover and help you understand. Find a cozy spot, sip your favorite beverage (coffee for me) and let’s dig in\!

## TLDR

- Google Analytics (GA4) is a free analytics tool and a better way to track user interactions across websites and apps than the previous Universal Analytics version.
- Instead of using session data like Universal Analytics, GA4 uses events to track website interactions.
- Use GA4 and Google Tag Manager (GTM) to track things like what users are searching for on your site, segment audiences, unique engagements, and track important actions like form submissions.
- There are a couple of ways to set up GA4 on your website. I prefer using GTM, but do what works best for you.

## Here’s what we’ll cover

- [Introduction to Google Analytics 4](#introduction-to-google-analytics-4)
- [Setup and Installation](#setup-and-installation)
- [Understanding Reports](#understanding-reports)
- [Event Tracking](#event-tracking)
- [GA4 Use Cases](#ga4-use-cases)
- [Start Tracking with GA4](#start-tracking-with-ga4)

### Introduction to Google Analytics 4

What is Google Analytics and how do you use it?

GA4 is a free analytics tool that helps you track performance, user behaviour, and a number of other data points that happen on your website.

- Want to know how many users visited your blog?
- How long did they spend on that one article?
- How many people signed up for our newsletter?

You can answer all these questions and more. It’s worth noting there’s an enterprise version for large businesses. I’ve seen conflicting price points online so the best bet is to review the Google Marketing Platform’s page about [Analytics 360](https://marketingplatform.google.com/about/analytics-360/) and contact sales.

### Setup and Installation

**Part 1: Create a Google Analytics Account**

When you’re ready, go to the [Google Marketing Platform analytics page](https://marketingplatform.google.com/about/analytics/).

![Person at computer using Google Analytics](https://res.cloudinary.com/dz8qxptav/image/upload/v1742547339/900_500_get_started_zhtsch.png)

A quick explanation about what you’re looking at.

- Get started today (Navbar) – If you’re already signed into the Google account you want to have associated with your GA4 account, then you can click the “Get started today” and it will take you straight to the analytics dashboard.
- Sign in to Analytics – You can click this button if you already have a profile setup.
- Get started today (On Page) – Look under the headline “Get essential customer insights” and you’ll see this button. Same button text as the one in the navbar but sends you to a page that helps you create an account.

We’re going to start by clicking the “Get started today” button in the navbar.

Next, if it’s your first time logging in, you might be asked about your email preferences. After that, click on Admin (gear icon) at the bottom left. Then, click the create button.

![Google Analytics admin dashboard](https://res.cloudinary.com/dz8qxptav/image/upload/v1742547990/1080_1080_settings_vfkhzb.png)

At this point, you’ll see a screen that asks you to **Create an account** which will contain your property or multiple properties. It’s typically recommended that you use your business name.

![Account creation page](https://res.cloudinary.com/dz8qxptav/image/upload/v1742547851/900_500_create_account_rehcpv.png)

The **Account Data Sharing Settings** section allows you to adjust how you want to share data with Google. After reviewing, click next.

![Account data sharing settings](https://res.cloudinary.com/dz8qxptav/image/upload/v1742548376/900_600_create_account_cbzsrx.png)

**Part 2: Create a property**

Now we need to create a property. Click Admin, click Create, and then click Property.

<p>
  <img 
    src="https://res.cloudinary.com/dz8qxptav/image/upload/v1742548474/1080_1080_create_property_jfoypz.png"
    alt="Creating a property"
    class="w-74 h-auto"
  />
</p>

Your property name could be your business name, website, a unique identifier/internal naming convention, etc.

Next, pick your reporting time zone and currency. Choosing the right time zone is critical for accurate data reporting, especially time-sensitive data. When you’re done, click next.

![Adding property details](https://res.cloudinary.com/dz8qxptav/image/upload/v1742548575/980_680_property_name_tl3ave.png)

Select the category that most closely aligns with your business and then select the appropriate business size. Once you’re finished, click next.

![Describe your business](https://res.cloudinary.com/dz8qxptav/image/upload/v1742548866/1180_1080_create_property_khxidz.png)

Now we’ll need to pick a business objective. Whatever you choose will determine the reports you see in the interface. When you’re ready, click Create.

![Choosing your business objectives](https://res.cloudinary.com/dz8qxptav/image/upload/v1742548938/1080_1380_business_objectives_anv8yk.png)

**_FYI_**: _One account can have multiple properties. For example, if your company has three websites (clothing, electronics, homegoods), you can create a property for each under your existing GA4 account. This helps keep the data separate, allows for individual reporting for each site, and keeps everything organized under one central account._

**Part 3: Set up Your Data Stream**

You created your account, built your property, but there’s no data flowing in until you set up your data stream.

Think of your new GA4 property as a reservoir and the data stream is a river or stream flowing into it. The river (data stream) brings in data from a source (website or app) and the reservoir (GA4 property) holds all of the water (data).

For our example, we’re going to choose **Web**.

![Start collecting data by choosing a platform](https://res.cloudinary.com/dz8qxptav/image/upload/v1742549010/1480_500_data_stream_zwig4i.png)

**_FYI_**: _You can have multiple data sources in a single property. You could have a website, Android app, and IOS app that track events across these different platforms. Most of the time a single property for a website is going to be enough._

Now you’ll need to:

1. Add your website’s URL
2. Create a stream name
3. Make sure Enhanced Measurement is turned on. Gives you a number of event tracking reports out of the box without needing a developer or doing custom work on your own.
4. Click Create & continue

![Reviewing data streams page](https://res.cloudinary.com/dz8qxptav/image/upload/v1742549205/1280_1080_data_stream_steps_ijzwd0.png)

You’ve got your account, property, data stream, and now you’re ready to install Google Analytics on your website.

**Part 4: Install Google Analytics on Your Website**

When you’re done creating your property you’ll see details about your data stream. At the top, click the **View tag instructions**.

![Viewing tag instructions section](https://res.cloudinary.com/dz8qxptav/image/upload/v1742549274/1380_300_install_get_started_nx720i.png)

On this screen, Google Analytics will automatically try to recognize what platform you’re using for your website. You can also select your platform by clicking the pencil icon.

You have three options:

1. Use the **Install with a website builder or CMS** option which uses a plugin.
2. Manually copy and paste the code immediately after the \<head\> element in your code.
3. Install GA4 with Google Tag Manager

For our example, we’re going to use Google Tag Manager (GTM).

If you don’t already have an account you’ll need to set one up. This tutorial won’t cover the basics of GTM, instead we’re going to only focus on using GTM to set up GA4.

Go to tagmanager.google.com and create a new account. Then add an account name and country.

<p>
  <img 
    src="https://res.cloudinary.com/dz8qxptav/image/upload/v1742549418/1080_1080_gtm_new_account_nx22ly.png"
    alt="Add a new Google Tag Manager account"
    class="w-74 h-auto"
  />
</p>

Next, set up your container by adding a **Container name**, your target platform (we’ll choose **Web**), and when you’re ready click **Create**.

<p>
  <img 
    src="https://res.cloudinary.com/dz8qxptav/image/upload/v1742549544/1080_1080_gtm_container_nfxcca.png"
    alt="Google Tag Manager container set up"
    class="w-74 h-auto"
  />
</p>

Now that you’ve created your GTM account and set up your container, you need to add GTM to your website’s code. You can either do this yourself by following the instructions or have a developer help you.

You’ll need to copy the first code snippet and paste it in the \<head\> tag. Then, you’ll need to copy and paste the second code snippet right after the opening \<body\> tag.

For more information, you can use the official [Quick Start guide](https://support.google.com/tagmanager/answer/14842164).

![Google Tag Manager code snippet with instructions](https://res.cloudinary.com/dz8qxptav/image/upload/v1742550747/1080_1080_gtm_code_snippet_ojcgq4.png)

**_FYI_**: _You can always find your code snippet at the top right next to where it says Workspace Changes._

![Reviewing where to find your Google Tag Manager code snippet in platform](https://res.cloudinary.com/dz8qxptav/image/upload/v1742550829/1680_480_create_account_e6k0eu.png)

Go to your Google Tag Manager Account and follow these steps.

1. Click **Tags** on the left side
2. Click **New**
3. Click **Tag Configuration**
4. Click **Google Tag**

You’ll need to copy and paste your Measurement ID from your data stream. To find the ID follow these steps.

1. Go to your Google Analytics account
2. Click **Admin**
3. Click **Data stream** under “Data collection and modification”
4. Click your data stream
5. At the top you’ll see Stream details and within that section you’ll see the **Measurement ID** that you’ll need to copy

![Google Analytics Measurement ID location](https://res.cloudinary.com/dz8qxptav/image/upload/v1742560800/1680_480_ga4_measurement_id_m95yc1.png)

Now paste your Measurement ID into the field that says **Tag ID** in Google Tag Manager. Select **Initialization \- All Pages** and name the tag whatever you’d like. For example, I’ve named it Google Tag.

![Creating a tag configuration](https://res.cloudinary.com/dz8qxptav/image/upload/v1742560704/1080_1080_tag_config_jp899j.png)

Almost there\! Let’s test to make sure everything works.

We’re going to make sure this is working with both Google Tag manager and Google Analytics. We’ll use the **GTM Preview mode** and the **GA4 Debug Mode** to ensure everything is set up properly.

For real-time debugging and validation, I like to keep Google Tag Manager, the site preview, and the Google Analytics DebugView simultaneously visible. So I might use one screen or multiple screens to do this, but it’s totally up to you.

1. In Google Analytics, go to **Admin** and click **DebugView**. Once that’s running, move to step 2\.
2. In GTM, click the Preview button at the top right corner of GTM

When the GTM preview mode is live you should see your Initialization tag was fired. You should also see a pageview event in your GA4 DebugView.

Google Tag Manager

![Google Tag Fired](https://res.cloudinary.com/dz8qxptav/image/upload/v1742560949/gtm_google_tag_fired_pjju6f.png)

Google Analytics 4 DebugView

![Google Analytics debug view](https://res.cloudinary.com/dz8qxptav/image/upload/v1742561014/1680_680_ga4_debug_pageview_ivoamx.png)

If you click **page_view** it will list a bunch of parameters with additional information about the event. You can click **page_location** to double check it’s pulling in the correct page. You can spot check another page or two to make sure everything looks good to you.

Once you’ve confirmed your data is being pulled into Google Analytics, you’ll need to submit your updates. Go to GTM and click **Submit**.

![Google tag manager submit changes button](https://res.cloudinary.com/dz8qxptav/image/upload/v1742561264/1680_480_gtm_submit_changes_zgbtyk.png)

I like to give each version a name and description. That way I know what was changed/updated and so does anyone else on my team. Another benefit is if something goes wrong in a future implementation, you can rollback to a previous version so having a good naming structure in place can be helpful.

Congratulations\! You have GA4 and GTM set up and you’re ready to start working with your data. In the next section, we’ll cover reporting.

### Understanding Reports

You connected everything, you’re pulling in data, but how do you read it? Where do you find the data to help you answer your business critical questions?

**Standard Reports**

Standard Reports is a good starting point when you want to know how your website is performing. There’s a lot to unpack here so I’ll only be covering some of the reports.

\#1 Real-time Reports

Real-time reports give you insights into how your users are interacting with your website in real time. So if you just launched a campaign and you want to make sure everything is working properly, you can use real-time reports to monitor. Or maybe you want to see the impact of your most recent marketing campaigns and verify the traffic in real time.

\#2 Traffic Acquisition Reports

Want to know where your visitors are coming from? Use the Traffic acquisition report to dive into which channels are driving the most traffic, engagement, and conversions. You’ll find metrics (engagement rate, session duration, etc.) that help determine the quality of the traffic as well so you can make more informed decisions around your marketing campaigns.

\# 3 Events Reports

GA4 tracks user actions through “events” which is one of the main differences between Universal Analytics (UA) and GA4. UA focused more on session-based tracking while GA4 uses an events-based model.

We can see these events in the Events report. This is where you can see data around your events and what events are driving revenue. There are many use cases but I typically use this report when I’m looking for something specific or debugging.

\# 4 Landing Pages Reports

This is a nice report that shows you data about your landing pages. Maybe you want to see data around landing pages you’re using for paid media campaigns and how users are interacting with those pages. This landing page data can be used to provide insights into user behavior and help with Conversion Rate Optimization (CRO) efforts by understanding what’s working and what’s not.

\# 5 Tech Details

Use the Tech details section to help you identify which technologies users are using to access your website. The Tech details report is essential for understanding your audience's device preferences, allowing for the strategic allocation of optimization resources to maximize impact and minimize time spent on platforms that are not as popular.

For example, you might analyze device usage to prioritize mobile or desktop optimization, or dive into engagement metrics to troubleshoot performance issues on specific device types.

While we didn’t go over everything, I hope you found at least one actionable take away or learned something you didn’t know before.

**Exploration Reports**

Exploration reports are a good way to dig into your site data and build custom reports. There are templates ready to use but for this example I’m going to use a blank exploration report.

<p>
  <img 
    src="https://res.cloudinary.com/dz8qxptav/image/upload/v1742561359/explore_report_vydz4r.png"
    alt="Where to find the explore reports in Google Analytics 4"
    class="w-74 h-auto"
  />
</p>

There are a handful of reports ready to use, but for this example I’m going to just use a blank report. Below are some of my preferred templates, but I encourage you to experiment and find what works best for you.

1. Blank
2. Free form
3. Funnel exploration
4. Path exploration

![exploration reports page](https://res.cloudinary.com/dz8qxptav/image/upload/v1742561452/1680_680_exploration_templates_jmgpwq.png)
exploration_templates

On the left side of the reporting dashboard you’ll be able to name your report, set a date range, and start pulling in data from Segments, Dimensions, and Metrics.

<p>
  <img 
    src="https://res.cloudinary.com/dz8qxptav/image/upload/v1742561501/1080_1280_lef_side_reporting_mfbzh5.png"
    alt="Review of the left side of the exploration reporting dashboard"
    class="w-74 h-auto"
  />
</p>

Segments – this is where you can segment your users and view things like users by country, mobile users, paid users, and so on.  
Dimensions – this is where you can find answers to common questions like where your users are coming from by using session source/medium.  
Metrics – is where you can find things like conversions, event count, and more. Maybe you want to know which channels are bringing in new users and this is where you can do that.

This section could be a whole separate blog so I’m not going to go deep into the weeds here. Just know that if you’re not able to find the data you’re looking for in the Standard Reports section, your next place to look should be in the Exploration Reports.

### Event Tracking

All the data we send to Google Analytics are considered events and there are four event categories you should know about.

**Automatically Collected Events** – these are events automatically tracked when you set up GA4.

**Enhanced Measurement Events** – these events are collected when you set up GA4 on your website and can be found in the Data Stream section of the admin.

**Recommended Events** – you should send recommended events with their prescribed parameters/names to get the most details in your reports. [Google’s official documentation](https://support.google.com/analytics/answer/9267735) has a handy list in case you need to reference it.

**Custom Events** – if you need something more custom that isn’t mentioned in the automatically tracked events, then you can create your own event.

You can name your custom event pretty much anything you’d like following the usual naming convention. For example, if you wanted to call your newsletter_form, form_submission, or newsletter_contact_form that’s acceptable to GA4.

For more information about these categories, I recommend checking out [Google’s documentation about events](https://support.google.com/analytics/answer/9322688?hl=en#zippy=%2Crealtime-report%2Cdebugview-report).

**Custom Event Example**

Here's how custom event tracking works in Google Analytics 4\.

Let’s say I have a website that sells custom t-shirts, hoodies, and other accessories. I noticed our hoodies page hasn’t been getting a lot of visits so I decided to add a hoodies menu item to the navbar.

This is where GTM comes into play\!

I added the new menu item but now I want to know how much interaction or how many people are clicking on the hoodies menu item in the navbar.

Since there doesn’t seem to be an event name from [Google’s official documentation](https://support.google.com/analytics/answer/9267735) that fits my use case, I’ll need to create a custom event.

First, in Google Tag Manager, click Variables, click configure, and check all the click variables.

<p>
  <img 
    src="https://res.cloudinary.com/dz8qxptav/image/upload/v1742561737/1080_1080_click_variables_zjzuxb.png"
    alt="Google tag manager click variables"
    class="w-74 h-auto"
  />
</p>

Next, click the **Preview** button, enter your website, and then once everything is loaded click on the menu item you want to track. In my case, it’s going to be the hoodies menu item in the navbar. You should see there was a **Link Click** event that fired. Click that and then click the **Variables** tab.

<p>
  <img 
    src="https://res.cloudinary.com/dz8qxptav/image/upload/v1742561905/1080_1280_link_click_1_gtbqbp.png"
    alt="Link click event in Google Tag Manager"
    class="w-74 h-auto"
  />
</p>

Now we want to look at what we can use as the trigger for our link click because we don’t want to track all link clicks, just a specific one.

Remember when I said to check all the click variables? This is why\! We should see all those variables in the variables tab. See if there’s something you can use to identify the clicked menu item. In my case, “hoodies” is a string that’s connected to a Click Text variable so that’s what I’m going to use.

Next, go to the **Triggers** section in Google Tag Manager and click **New**.

![Creating a new trigger in google tag manager](https://res.cloudinary.com/dz8qxptav/image/upload/v1742562015/1680_680_click_trigger_z2jha3.png)

Now click into the box that says **Trigger Configuration** and select **Just Links**.

![Just clicks section of google tag manager](https://res.cloudinary.com/dz8qxptav/image/upload/v1742562664/1480_980_just_links_ufgdww.png)

Select **Some Link Clicks**, choose **Click Text** (or whatever click variable you decided on), select **contains**, and add the variable name. Be sure to give your trigger a good name. For me, I like to include as much detail as needed so I can easily identify what it is and its purpose. Save the trigger.

![Trigger configuration in google tag manager](https://res.cloudinary.com/dz8qxptav/image/upload/v1742562721/1780_980_trigger_configuration_fnezut.png)

Now we’re ready to create the tag.

1. Go to **Tags**
2. Click **New**
3. Click on **Tag Configuration**
4. Select **Google Analytics: GA4 Event**
5. Name your tag
6. Add your **Measurement ID**
7. Name your event

<br>

Google Analytics: GA4 Event

<p>
  <img 
    src="https://res.cloudinary.com/dz8qxptav/image/upload/v1742562795/1480_980_new_tag_1_wffnzy.png"
    alt="New tag selection using GA4 event"
    class="w-74 h-auto"
  />
</p>

GTM Tag Configuration

<p>
  <img 
    src="https://res.cloudinary.com/dz8qxptav/image/upload/v1742562857/1080_1080_creating_the_tag_smeqrs.png"
    alt="Creating and configuring a tag in google tag manager"
    class="w-74 h-auto"
  />
</p>

Now, let’s add a couple of event parameters to help us identify that the tracking is pulling in the right data.

1. Click **Event Parameters**
2. Add a custom name for the event parameter
   1. You have the option to send up to [25 event parameters](https://support.google.com/analytics/answer/9267744) per custom event
3. Click the brick icon and search for **{{Click URL}}**
4. Click **Add parameter**
5. Add a custom name
6. Click the brick icon and search for **{{Click Text}}**
7. Select the trigger we made before this
8. Click **Save**

![Creating event parameters in Google Tag Manager](https://res.cloudinary.com/dz8qxptav/image/upload/v1742563124/1080_1080_event_parameters_fqojvz.png)

Once you’ve saved your tag, it will take you back to your main Workspace. I like to click refresh on my browser just for good measure. There have been times where things didn’t work properly for me but when I hit the refresh button everything seemed to work fine. So I just make this part of my process.

Click **Preview** and once the site is loaded, click on the menu item you’re tracking. In GTM click on “**Link Click**” and you should see your tag was fired.

![Reviewing Google Tag Manager for proper setup](https://res.cloudinary.com/dz8qxptav/image/upload/v1742563186/1680_1080_tags_fired_rkohya.png)

Next, go to the GA4 **DebugView** and check to see if the custom event name was recorded. When you see your custom name, you can click on it and verify the event parameters you added are pulled through properly.

**Register Your Custom Event**

The last thing you should do is register your custom event parameters because you can’t actually see it in the GA4 reports, just the realtime reporting.

In the admin, on the left side, click on **Custom definitions**.

![Creating a custom dimension](https://res.cloudinary.com/dz8qxptav/image/upload/v1742563296/1680_680_custom_dimension_phlcgi.png)

When naming anything, I usually try to be as short and descriptive as possible. If the name ends up being long, then that’s fine as long as it’s easily recognizable or within the naming structure of your organization.

Once you add the name, the **Scope** should be Event because we want event data, and then add a **Description**. The description is optional but whenever I have a chance to add a little extra context I like to do so.

For the **Event Parameter**, you have to type the name of the event parameter exactly like you did in GTM. For example, if you named the parameter test_example_one, then that’s how you need to type it in here. So for me, I would need to type nav_menu_click_url in the Event parameter field and save. I also had a second parameter called nav_menu_click_text so I would need to follow the same process for that.

![Register custom dimension](https://res.cloudinary.com/dz8qxptav/image/upload/v1742563601/1280_680_register_custom_event_kegz5x.png)

You’re all set\! You should start seeing your data in the Events report within 24–48 hours.

### GA4 Use Cases

Stop guessing, start knowing. GA4 provides the actionable insights you need to understand user behavior, enabling you to optimize every marketing touchpoint and drive conversions that directly impact your bottom line. It's time to turn data into measurable results.

**Google Analytics for SaaS**

Example 1: Project Management

As a project management tool, maybe your goal as a marketer is to track how many users sign up for a free trial. You can use Google Analytics and Google Tag Manager to help by

- Setting up event tracking for sign-up form submissions
- Create a funnel report to analyze where there’s user drop off during the sign-up journey
- Create and track UTM parameters for your marketing campaigns to see which drive the most sign-ups

Example 2: Monitor User Engagement and Retention

Let’s say you’re marketing SaaS products and you want to know if your users are truly engaging with your core features. This is where data meets discovery, revealing the insights that will redefine your SaaS success.

- Create custom events to track interactions with core features
- Analyze engagement reports to see how much time users spend on the app
- Use the Retention report to measure retention

Example 3: Monitor Churn and Improve Retention

Is your B2B SaaS business seeing a drop in users after 90 days? That sounds like a deep dive into your Google Analytics data is needed.

- Create a funnel analysis in GA4 using built-in events or custom events
- Use the Funnel Exploration report based on the events you define
- Look for stages where users drop off the most and create an audience segment for users at risk of churn

These are just some of the ways you can incorporate Google Analytics into your SaaS marketing strategy.

**Google Analytics for Web Development**

Example 1: Track and Optimize Lead Gen

If you’re a web development agency and you want to know how many visitors fill out your contact form then GA4 is a good place to start.

- Set up event tracking for form submissions using Google Tag Manager
- Review the submission event in the GA4 reports
- If users are dropping off before filling out the form, create a funnel analysis

Example 2: Monitor Performance and Engagement

Want to understand which pages are truly captivating your potential clients? GA4 provides the detailed insights you need to pinpoint engagement hotspots and strategically optimize your content.

- Track events like pageviews and scroll depth
- Use engagement reports to measure time spent on your services pages
- Review which case studies get the most views

Example 3: Improve Organic Reach

Want to drive more targeted traffic from Google search? GA4 provides the insights you need to optimize your strategy and achieve significant growth.

- Use default channel groups or traffic sources to see how much organic traffic you’re getting
- Connect Google Search Console to you GA4 account and track which queries are bringing in the most traffic
- Set up conversion tracking to measure how SEO and organic search impacts lead generation

## Start Tracking with GA4

Whether you’re just starting or a seasoned pro, Google Analytics can be a lot to take in. Don’t feel like you need to remember every little detail in this guide or the official docs. From my experience, the most important thing is to know where to find your most important reports and how to analyze that data. Everything else can be researched with your favorite web browser, YouTube, books, and guides like this one.

</div>
