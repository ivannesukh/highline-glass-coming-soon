# Highline Glass Group — Coming Soon

A one-page "coming soon" site for **highlineglassgroup.com**, built with Next.js
(App Router, static export) so it deploys cleanly on Netlify with a working
email-capture form (via Netlify Forms — no backend needed).

---

## 1. Preview it locally

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

Open http://localhost:3000 — you should see the page with the animated bronze
"highline" and the glass-grid background.

To build the static site exactly as Netlify will:

```bash
npm run build
```

This outputs static files to the `out/` folder.

---

## 2. Push it to GitHub

This folder is already a git repo with one commit. From inside this folder:

```bash
# create a new empty repo on GitHub first (github.com/new), don't add a
# README/license there — then run:
git remote add origin https://github.com/<your-username>/highline-glass-coming-soon.git
git branch -M main
git push -u origin main
```

(Swap in the real GitHub URL for your repo, or use `gh repo create` if you
have the GitHub CLI installed.)

---

## 3. Deploy on Netlify

1. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** →
   **Import an existing project**.
2. Connect GitHub and pick the `highline-glass-coming-soon` repo.
3. Build settings (Netlify will likely auto-detect these from `netlify.toml`,
   but confirm):
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
4. Click **Deploy site**. You'll get a `random-name.netlify.app` URL first —
   that's normal.

### Connect highlineglassgroup.com

1. In the Netlify site → **Domain management** → **Add a domain** →
   enter `highlineglassgroup.com`.
2. Netlify will show you DNS records to add at your domain registrar
   (wherever you bought highlineglassgroup.com):
   - Easiest: point your registrar's nameservers to Netlify DNS (Netlify
     walks you through this), **or**
   - Keep your current registrar's DNS and just add the **A record** /
     **ALIAS/ANAME** record Netlify gives you for the root domain, plus a
     **CNAME** for `www` → `<your-site>.netlify.app`.
3. Netlify auto-provisions a free HTTPS certificate once DNS is pointed
   correctly (can take a few minutes to a few hours to propagate).

### Turn on the email signup notifications

The "Notify Me" form uses **Netlify Forms**, which works automatically once
deployed (no extra setup for the form to start collecting submissions). To
get an email every time someone signs up:

1. Site settings → **Forms** → **Form notifications** → **Add notification**
   → **Email notification**.
2. Enter the email you want submissions sent to.
3. Submissions also show up anytime in Site → **Forms** → `coming-soon`.

---

## What's in here

- `app/page.tsx` — the page content/copy
- `app/ComingSoonForm.tsx` — the email capture form (Netlify Forms)
- `app/globals.css` — all styling (palette, type, the animated grid + line)
- `app/layout.tsx` — fonts (Archivo + IBM Plex Sans) and page metadata
- `netlify.toml` — tells Netlify how to build and publish the site

## Editing the copy

Open `app/page.tsx` — the headline, subhead, and footer text are plain
strings near the top of the file, easy to change without touching any CSS.
