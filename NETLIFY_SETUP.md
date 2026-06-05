# Netlify Deployment Configuration

## Quick Setup

Your portfolio is configured as a **static site deployment** on Netlify. The pre-built `client/dist` folder is served directly.

## Configuration Files

### netlify.toml
The main configuration file that controls:
- ✅ Publish directory: `client/dist`
- ✅ No build command (empty)
- ✅ SPA routing to `index.html`
- ✅ Cache headers for optimized performance

## Netlify Dashboard Setup

### Step 1: Connect Repository
1. Go to [Netlify](https://app.netlify.com)
2. Click **"New site from Git"**
3. Select **GitHub** and authorize
4. Choose your `my-portfolio-main` repository

### Step 2: Configure Build Settings
1. Navigate to your site dashboard
2. Go to **Site settings** → **Build & deploy** → **Build settings**
3. Click **Edit settings**

### Step 3: Clear Build Command
**IMPORTANT:** Clear any build command that might be set:
1. Find **Build command** field
2. **Delete** `cd client && npm install && npm run build` if present
3. Leave it **empty**

### Step 4: Verify Settings
- **Build command:** (empty/blank)
- **Publish directory:** `client/dist`
- **Node.js version:** 18 (optional, for consistency)

### Step 5: Save and Deploy
1. Click **Save**
2. Netlify will automatically use `netlify.toml` configuration
3. Your site will deploy from the `client/dist` folder

## What netlify.toml Does

```toml
[build]
publish = "client/dist"        # Serves this folder
command = ""                    # No build step needed

[[redirects]]
from = "/*"
to = "/index.html"
status = 200                    # SPA routing for React

[[headers]]
for = "/assets/*"
Cache-Control = "public, max-age=31536000, immutable"  # Cache forever

[[headers]]
for = "/"
Cache-Control = "public, max-age=3600"  # Cache 1 hour
```

## Troubleshooting

### ❌ Still getting "package.json not found"
**Solution:** 
1. Clear browser cache
2. Go to **Deploys** → **Trigger deploy** → **Clear cache and redeploy**
3. Verify the build command is empty in Dashboard (not `cd client && npm install && npm run build`)

### ❌ Site showing "Page Not Found"
**Solution:** The SPA redirect in `netlify.toml` should handle this. Verify redirects are configured.

### ✅ Successful Deployment
- Build shows as "Published"
- Site URL is live and working
- All routes redirect to `index.html` for React routing

## Future Updates

When you update your portfolio:
1. Rebuild locally: `npm run build` in the client folder
2. Commit and push the updated `client/dist` folder
3. Netlify automatically deploys (no build step needed)

**Or** if you have source code later:
1. Update `netlify.toml` with proper build command
2. Push source files (package.json, src/, etc.)
3. Netlify will build automatically
