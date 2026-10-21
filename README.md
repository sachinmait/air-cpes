# AIR-CPES 2027 — Official Conference Website

**1st International Conference on Artificial Intelligence for Resilient Cyber-Physical Energy Systems (AIR-CPES 2027)**  
**Dates:** March 8–9, 2027 (Hybrid Mode — Parallel Sessions in India & UK)  
**Organisers:** Maharaja Agrasen Institute of Technology (MAIT), Delhi, India & Birmingham City University (BCU), United Kingdom (under the IEEE Smart Cities Initiative)  
**Proceedings:** Two-Volume Springer *Lecture Notes in Electrical Engineering (LNEE)*

---

## Project Structure (100% Frontend / Zero Database / GitHub Pages Ready)

- `index.html` — Main responsive conference portal with SEO, OpenGraph, Schema.org `EducationEvent` JSON-LD, Microsoft CMT submission modal, and print-ready CFP brochure layout.
- `styles.css` — Modern CSS (`@layer`, CSS Grid, dark/light theme variables, responsive breakpoints, and `@media print` brochure stylesheet).
- `data.js` — **Single-file configuration store** for updating the Microsoft CMT link, dates, keynote speakers, registration fees, tracks, and committees without touching HTML layout code.
- `app.js` — Client-side interactivity (live countdown timer, interactive smart-grid hero canvas, track filter/search, searchable 200+ committee & 112-reviewer directory with `hidden="until-found"`, dual-currency fee switcher, dual-timezone IST/GMT schedule toggle, and `.ics` calendar invite generator).
- `CNAME` — Pre-configured for GitHub Pages custom domain (`www.air-cpes.com`).
- `.nojekyll` — Ensures fast, direct static file serving on GitHub Pages.

---

## 1. How to Update the Microsoft CMT Submission Link & Placeholders

Open [`data.js`](./data.js) and edit the top `window.CONFERENCE_CONFIG` object:

```js
  // Replace with your live Microsoft CMT URL once approved:
  cmtSubmissionUrl: "https://cmt3.research.microsoft.com/AIRCPES2027",
```

In the same [`data.js`](./data.js) file, you can also update:
- `window.KEYNOTE_SPEAKERS` — Replace placeholder speaker photos (`image`), bios, and keynote titles.
- `window.REGISTRATION_FEES` — Adjust Early-Bird and Standard INR / USD / GBP registration fees.
- `window.SCHEDULE_DATA` — Update session room numbers and exact talk slots.

---

## 2. Hosting on GitHub Pages + Connecting Your GoDaddy Domain

### Step A: Push to GitHub & Enable GitHub Pages
1. Create a new public repository on GitHub (e.g., `air-cpes-2027`).
2. Upload or push all files in this folder (`index.html`, `styles.css`, `data.js`, `app.js`, `CNAME`, `.nojekyll`, `README.md`) to the `main` branch.
3. If your GoDaddy domain is different from `www.air-cpes.com`, edit the [`CNAME`](./CNAME) file so it contains your exact domain name on line 1.
4. In your GitHub repository, go to **Settings → Pages**:
   - Under **Build and deployment**, select **Deploy from a branch** → Branch: `main` / `/ (root)` → **Save**.

### Step B: Configure GoDaddy DNS Records
1. Log in to your **GoDaddy Domain Control Center** and open **DNS Management** for your domain.
2. Delete any conflicting parked `A` record for `@` or `CNAME` record for `www`.
3. Add the **4 official GitHub Pages `A` records** for your apex domain (`@`):
   - **Type:** `A` | **Name:** `@` | **Value:** `185.199.108.153` | **TTL:** 1 Hour
   - **Type:** `A` | **Name:** `@` | **Value:** `185.199.109.153` | **TTL:** 1 Hour
   - **Type:** `A` | **Name:** `@` | **Value:** `185.199.110.153` | **TTL:** 1 Hour
   - **Type:** `A` | **Name:** `@` | **Value:** `185.199.111.153` | **TTL:** 1 Hour
4. Add a **`CNAME` record** for `www`:
   - **Type:** `CNAME` | **Name:** `www` | **Value:** `<your-github-username>.github.io` | **TTL:** 1 Hour
5. Return to **GitHub Repository → Settings → Pages → Custom domain**, enter your domain (e.g., `www.air-cpes.com`), click **Save**, and once DNS verification finishes (usually 10–30 minutes), check **Enforce HTTPS**.
