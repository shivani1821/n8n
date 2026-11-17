# AI Lead Classifier for Website Contact Forms

Automatically captures website enquiries, classifies them as Hot/Warm/Cold
using AI, and alerts the business owner instantly when a lead is Hot.

## Demo
▶️ Watch the 90-second demo: [https://www.loom.com/share/d7b7850f12a5480fab535471726a0ef9]

## The Problem
Small businesses (like a bakery) receive enquiries through their website
but reply late or never, and lose bulk orders to competitors. Nobody has
time to read, sort and prioritise every message.

## The Solution
Form → Google Sheet → AI classification → Alert if Hot → Confirmation email

## Tech Stack
- Lovable: website and contact form
- n8n Cloud: workflow automation (webhook trigger)
- OpenAI: lead classification
- Google Sheets: lead database
- Gmail: alerts and confirmations

## How It Works
**1. Capture contact submission**
The website form sends a POST request to an n8n webhook. The workflow
responds to the website, cleans the fields (name, phone, email, query),
and saves a new row to Google Sheets.

**2. Qualify the lead**
An AI chain reads the message and returns a label (Hot/Warm/Cold) and a
one-line summary in a fixed JSON format. The same sheet row is updated.

**3. Follow up**
An IF node checks the label. Hot leads trigger an alert email to the
owner.


## Live Demo Status
The website and n8n instance were on free trials and are no longer
active. The full flow is shown in the demo video and screenshots. To
recreate it, import `workflow/website-contact-lead-classifier.json` into
any n8n instance.

## Future Improvements
- Add a dashboard (Looker Studio) for leads per day and label split
- Error-handling workflow with failure alerts
