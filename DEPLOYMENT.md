# GitHub Pages & GoDaddy Domain Deployment Guide

## Part 1: GitHub Pages Setup (Automated)

### ✅ What We've Done:
1. **Installed `gh-pages`** - Package to deploy to GitHub Pages
2. **Updated `package.json`**:
   - Added `"homepage": "https://henly.co/"`
   - Added `"deploy"` script: `npm run build && gh-pages -d dist`
   - Added `"predeploy"` script: `npm run build`
3. **Created GitHub Actions Workflow** (`.github/workflows/deploy.yml`):
   - Automatically builds and deploys on every push to main branch
   - Runs TypeScript type-checking and ESLint before build
   - Uploads build artifacts and deploys to GitHub Pages
4. **Added SPA routing fix** (`public/404.html` and `index.html` update):
   - GitHub Pages SPA routing fallback for React Router

### 📋 Manual GitHub Settings (Do This Now):

Follow these steps in your GitHub repository:

1. **Go to Repository Settings:**
   - Navigate to: https://github.com/ahsan1o/henly-website/settings
   - Click on **"Pages"** in left sidebar

2. **Configure GitHub Pages:**
   - **Source:** Select "Deploy from a branch"
   - **Branch:** Select `gh-pages` (this will auto-create after first deploy)
   - **Folder:** Select `/ (root)` 
   - Click **Save**

3. **Enable GitHub Actions:**
   - Go to **"Actions"** tab at top of repository
   - Click "I understand my workflows, go ahead and enable them"

4. **Set Custom Domain:**
   - Still in Pages settings, find **"Custom domain"** section
   - Enter: `henly.co`
   - GitHub will create a `CNAME` file automatically
   - **IMPORTANT:** A checkmark ✓ should appear confirming DNS configured
   - Check **"Enforce HTTPS"** checkbox (wait a few minutes before doing this)

## Part 2: Manual Deploy Option

If you want to deploy manually before automating:

```bash
cd /home/ahsan1o/projects/henly-website
npm run deploy
```

This will:
- Build the project
- Deploy to `gh-pages` branch
- Push to GitHub automatically

---

## Part 3: GoDaddy DNS Configuration

### 🌐 DNS Records Setup at GoDaddy:

1. **Log in to GoDaddy:**
   - Go to https://www.godaddy.com/account
   - Navigate to **"My Products"**
   - Find **henly.co** domain
   - Click **"Manage DNS"** or **"Manage"**

2. **Find DNS Management Page:**
   - Look for **"DNS"** or **"Name Servers"** section
   - You should see current DNS records

3. **Add/Update A Records (for domain root @):**
   You need to add GitHub Pages IP addresses. Update/Add these records:

   **A Records (Point to GitHub Pages):**
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   TTL: 1 hour
   
   Type: A
   Name: @
   Value: 185.199.109.153
   TTL: 1 hour
   
   Type: A
   Name: @
   Value: 185.199.110.153
   TTL: 1 hour
   
   Type: A
   Name: @
   Value: 185.199.111.153
   TTL: 1 hour
   ```

4. **Add CNAME Record (for www subdomain):**
   ```
   Type: CNAME
   Name: www
   Value: ahsan1o.github.io
   TTL: 1 hour
   ```

5. **OPTIONAL: Add AAAA Records (IPv6):**
   ```
   Type: AAAA
   Name: @
   Value: 2606:50c0:8000::153
   TTL: 1 hour
   
   Type: AAAA
   Name: @
   Value: 2606:50c0:8001::153
   TTL: 1 hour
   
   Type: AAAA
   Name: @
   Value: 2606:50c0:8002::153
   TTL: 1 hour
   
   Type: AAAA
   Name: @
   Value: 2606:50c0:8003::153
   TTL: 1 hour
   ```

### ⚠️ Remove Old DNS Records (if any):
- Delete any old A records pointing to old servers
- Delete any old CNAME records that might conflict
- Keep only the records specified above

### ⏱️ Wait for DNS Propagation:
- DNS changes can take **24-48 hours** to propagate globally
- You can check status at: https://www.whatsmydns.net/?q=henly.co
- Look for your A records pointing to `185.199.108.153` etc.

---

## Part 4: Verification Steps

### ✅ Verify GitHub Pages:
1. Go to: https://ahsan1o.github.io
   - Should show your website
2. All routes should work: `/privacy`, `/contact`, `/account-deletion`

### ✅ Verify Custom Domain:
1. **After DNS propagates (24-48 hours):**
   - Visit: https://henly.co
   - Should show your website
   - Check HTTPS works: https://henly.co (green lock icon)

2. **Check www redirect:**
   - Visit: https://www.henly.co
   - Should redirect to https://henly.co

3. **Test routing:**
   - https://henly.co/privacy
   - https://henly.co/contact
   - https://henly.co/account-deletion
   - All should work without 404 errors

### ✅ Verify SSL/HTTPS:
- In GitHub Pages settings, wait 5-10 minutes after adding custom domain
- Then check "Enforce HTTPS" box
- Should have green lock icon for all pages

---

## Part 5: Continuous Deployment Workflow

### 🚀 How It Works Now:

1. **You make changes locally**
2. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "your message"
   git push origin main
   ```

3. **GitHub Actions automatically:**
   - ✅ Checks out code
   - ✅ Installs dependencies
   - ✅ Runs TypeScript type-checking
   - ✅ Runs ESLint linter
   - ✅ Builds the project (Vite)
   - ✅ Deploys to GitHub Pages
   - ✅ Updates your domain henly.co

4. **Website is live** within 2-3 minutes

### 📊 Monitor Deployment:
- Go to: https://github.com/ahsan1o/henly-website/actions
- Watch the deployment progress
- Green checkmark ✓ means success
- Red X means there was an error (check logs)

---

## Part 6: Troubleshooting

### ❌ DNS Not Working After 48 Hours?

1. **Check GoDaddy DNS:**
   ```bash
   nslookup henly.co
   ```
   Should show: `185.199.108.153` (one of the GitHub IPs)

2. **Verify CNAME file exists:**
   - Go to: https://github.com/ahsan1o/henly-website/blob/gh-pages/CNAME
   - Should contain: `henly.co`

3. **Check GitHub Pages status:**
   - Go to: https://github.com/ahsan1o/henly-website/settings/pages
   - Look for error messages in "Custom domain" section

### ❌ Getting 404 on routes like /privacy?

- This means GitHub Pages setup is working but routing isn't
- Check that `public/404.html` exists in your repo
- Verify the workflow deployed successfully (check Actions tab)

### ❌ HTTPS not working?

- Wait 5-10 minutes after setting custom domain
- Then check "Enforce HTTPS" in GitHub Pages settings
- Can take up to 24 hours for SSL certificate to generate

---

## Part 7: Rollback Plan

If something goes wrong:

1. **Revert to GitHub Pages default URL:**
   - Remove custom domain from GitHub Pages settings
   - Site will be available at: https://ahsan1o.github.io

2. **Update package.json homepage back:**
   ```json
   "homepage": "https://ahsan1o.github.io/"
   ```

3. **Redeploy:**
   ```bash
   npm run deploy
   ```

---

## Summary of Actions Required:

### ✅ DONE (Code changes implemented):
- [x] Install gh-pages package
- [x] Update package.json with homepage and deploy scripts
- [x] Create GitHub Actions workflow
- [x] Add 404.html for SPA routing
- [x] Update index.html with meta tags

### 📋 TO DO (Manual steps in GitHub):
- [ ] Go to GitHub Pages settings
- [ ] Select "Deploy from a branch" → `gh-pages` branch
- [ ] Add custom domain: `henly.co`
- [ ] Enable HTTPS enforcement

### 🌐 TO DO (GoDaddy Dashboard):
- [ ] Log into GoDaddy account
- [ ] Find henly.co domain → Manage DNS
- [ ] Update A records (4x) to point to GitHub Pages IPs
- [ ] Add CNAME record for www → ahsan1o.github.io
- [ ] (Optional) Add AAAA records (IPv6)
- [ ] Save changes and wait 24-48 hours for propagation

---

## Next Steps:

1. **Commit these changes:**
   ```bash
   git add .
   git commit -m "feat: Setup GitHub Pages deployment with CI/CD pipeline"
   git push origin main
   ```

2. **Watch GitHub Actions** at https://github.com/ahsan1o/henly-website/actions

3. **Configure GitHub Pages settings** (see Part 1, step 4)

4. **Configure GoDaddy DNS** (see Part 3)

5. **Verify domain** after DNS propagates (24-48 hours)

Good luck! 🎉
