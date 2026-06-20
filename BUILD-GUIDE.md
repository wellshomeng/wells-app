# Wells Android App — Build Guide

You have a complete, ready-to-build Android app project (`wells-android-project.zip`). The app screens are bundled inside, and it talks to your live wellshome.ng backend for listings, accounts, messages and payments — exactly like the website.

This guide gets you a real `.apk` you can install and share, **without installing any software on your computer.**

---

## What's in the project

- A native Android app named **Wells** (package id `ng.wellshome.app`)
- Your full marketplace bundled inside (with the new Jiji-style bottom navigation)
- A navy splash screen
- Camera/photo permissions for listing uploads

---

## Step 1 — Add your logo (optional but recommended)

The app currently uses a default icon. To use your own logo:

**Easiest way — a free online icon generator:**
1. Go to **https://icon.kitchen** (free, no signup).
2. Upload your logo image (square works best, at least 512×512 px).
3. Set the background to your navy colour `#0C2340` if you like.
4. Click **Download** — you'll get a zip of Android icons.
5. In the project, replace the folders inside `wells-app/android/app/src/main/res/` (the `mipmap-*` folders) with the ones from the download.

If you skip this, the app still builds — it just uses a placeholder icon you can change later.

---

## Step 2 — Build the APK (no software to install)

You need a one-time **free** account at a cloud build service. The most beginner-friendly is **Codemagic** (free tier is enough for this).

**Option A — Codemagic (recommended, browser only):**
1. Put the project on GitHub:
   - Create a free account at **github.com**.
   - Create a new repository (e.g. `wells-app`).
   - Upload the **contents** of the unzipped project folder to it (GitHub lets you upload files in the browser).
2. Go to **codemagic.io**, sign up (free), and connect your GitHub.
3. Pick the `wells-app` repository.
4. Choose **Android** → build type **Debug** (for a shareable test APK) for your first build.
5. Click **Start build**. In a few minutes it produces an `app-debug.apk` you can download.

**Option B — If you prefer no GitHub:**
Use a service that accepts a direct zip upload (e.g. **AppCircle** free tier or a Capacitor cloud build). Upload `wells-android-project.zip`, select Android, build, download the APK.

> The **debug** APK is perfect for installing on your own phone and sharing with people to test. For the Play Store you'll later make a **signed release** build (see Step 4).

---

## Step 3 — Install the APK on a phone

1. Send yourself the `app-debug.apk` (WhatsApp, email, or copy to the phone).
2. On the phone, tap the file to install.
3. Android will warn "install from unknown sources" — allow it for this once (Settings → Apps → Special access → Install unknown apps → your browser/file manager → Allow).
4. The **Wells** app installs with its icon. Open it — you'll see the splash, then your marketplace with the bottom nav.

You can share this same APK file with anyone to install directly — no Play Store needed.

---

## Step 4 — Google Play Store (when you're ready)

To publish on Play:
1. Pay the one-time **$25** Google Play Developer registration.
2. Build a **signed release** (`.aab`) instead of debug. Cloud builders have a "release" option; they'll help you create a **keystore** (your app's signing key — keep it safe forever; you need it for every update).
3. In Play Console: create the app, fill in store listing (name, description, screenshots, privacy policy — you already have a Privacy page at app.wellshome.ng), upload the `.aab`, and submit for review.

---

## Updating the app later

Because the screens are **bundled inside** the APK, when you change `index.html` you'll need to rebuild:
1. Replace `wells-app/www/index.html` with your new version.
2. Run the build again (Step 2). 
3. Distribute the new APK / upload to Play.

(Your *backend* changes — listings, prices, plugin updates — take effect immediately and do NOT need an app rebuild. Only front-end screen changes do.)

---

## Quick reference

| Thing | Value |
|---|---|
| App name | Wells |
| Package id | ng.wellshome.app |
| Backend | https://wellshome.ng (live) |
| Bundled screens | yes (www/index.html) |
| Min build step | upload to cloud builder → download APK |
