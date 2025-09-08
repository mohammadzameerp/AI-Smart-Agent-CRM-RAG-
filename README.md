# 🤖 RAG-CRM Agent

## 🔹 Overview
The **RAG Agent** is an AI-driven system designed to manage, monitor, and improve the company’s operations. It functions as a virtual manager — tracking sales progress, guiding employees, and ensuring daily targets are met.

This agent is trained specifically on **Company internal processes, goals, and requirements**, ensuring alignment with company strategy.

---

## 🔹 Core Responsibilities

### Sales Management
- Tracks daily, weekly, and monthly client closures.  
- Reminds the sales team of minimum daily targets (**2 closures/day**).  
- Provides scripts, objection-handling responses, and negotiation strategies.  

### Employee Management
- Assigns tasks and reminds employees of their deliverables.  
- Collects updates and progress reports from Client Assistance Executives (CAs) and Team Leads.  
- Provides training resources (sales, communication, technical).  

### Progress Tracking
- Maintains a live dashboard of:
  - Total Leads Contacted
  - Closures (Today / This Week / This Month)
  - Pending Clients
  - Employee performance  
- Generates automated reports for management review.

### Client Handling
- Guides CAs with correct call scripts.  
- Suggests pricing strategy (Starter Plan / Standard Plan) based on client objections.  
- Tracks which clients received proposals, follow-ups, and confirmations.  

---

## 🔹 Agent Functions

### Daily Check-In
- Asks:  
  *“How many leads are planned today? Where are we sourcing them from?”*

### Sales Pressure Check
- If the daily target (**2 closures/day**) isn’t reached, prompts:  
  *“Why not? Is the problem in leads, conversion, or follow-ups?”*  
- Suggests solutions to address gaps.

### Employee Updates
- Collects end-of-day status from employees:  
  - Number of calls made  
  - Responses updated  

### Training Mode
- Provides quick refreshers on:  
  - Sales scripts  
  - Negotiation tips  
  - Technical basics  

---

## 🔹 Tech Stack & Setup

- **Core AI:** Trained with FiNix Digital’s playbooks, scripts, and company policies.  
- **Integrations:**
  - Google Sheets → Lead & client tracking  
  - WhatsApp / Email → Client communication  
  - Dashboard (Notion / Airtable) → Employee & progress tracking  
- **Automation Tools:** n8n / Zapier for reminders, task automation, and reporting  

---

## 🔹 Usage Guidelines

### For Sales Team
- Use agent-provided scripts for consistency.  
- Update leads in Google Sheets immediately after each call.  
- Report objections so the agent can refine future strategies.  

### For Management
- Review agent reports weekly.  
- Use insights to decide focus areas (more leads, better training, or pricing changes).  
- Approve or disapprove new automation ideas suggested by the agent.  

### For Client Assistance Executives (CA)
- Follow instructions provided by the agent daily.  
- Confirm all updates in sheets are accurate.  
- Reach out to Team Lead if stuck.  

---

## 🔹 Roadmap
- Setup full AI integration with WhatsApp and calling systems.  
- Train agent with objection-handling database.  
- Automate weekly performance reviews.  
- Add reward/penalty system for employees based on agent feedback.  
- Expand to automated website content generation & delivery.  

---

## Preview 
![WhatsApp Image 2025-08-18 at 22 03 12_c4bab462](https://github.com/user-attachments/assets/68f2b8a8-022c-418e-9dbf-67a75d64ac20)
![WhatsApp Image 2025-08-18 at 22 04 43_affdff66](https://github.com/user-attachments/assets/8b34cc56-6d89-4c62-823f-0a4f86c45aca)
![WhatsApp Image 2025-08-18 at 22 05 18_2f4cd37f](https://github.com/user-attachments/assets/18901823-3f70-40da-9581-794b50aa1111)
![WhatsApp Image 2025-08-18 at 22 05 41_cd115515](https://github.com/user-attachments/assets/1cee9d8a-7f21-43bf-98c9-a069a08c8c0a)
![WhatsApp Image 2025-08-18 at 22 06 25_e1c21b7a](https://github.com/user-attachments/assets/fc1e69ca-bb17-4835-a62e-4bea9c8edc75)
![WhatsApp Image 2025-08-18 at 22 07 17_05116a57](https://github.com/user-attachments/assets/cb03db49-2623-40a9-af0c-59eae3a825bc)

