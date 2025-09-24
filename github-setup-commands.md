# GitHub Repository Setup Commands

After creating your GitHub repository, run these commands in the eb-fm directory:

## 1. Add the remote origin (replace YOUR_USERNAME with your GitHub username)
```bash
git remote add origin https://github.com/YOUR_USERNAME/eb-fm.git
```

## 2. Set the main branch name
```bash
git branch -M main
```

## 3. Push your code to GitHub
```bash
git push -u origin main
```

## Alternative: If you want to use SSH instead of HTTPS
```bash
git remote add origin git@github.com:YOUR_USERNAME/eb-fm.git
git branch -M main
git push -u origin main
```

## After pushing, you can:
- View your repository at: https://github.com/YOUR_USERNAME/eb-fm
- Clone it elsewhere with: `git clone https://github.com/YOUR_USERNAME/eb-fm.git`
- Continue development by making changes and using `git add .`, `git commit -m "message"`, `git push`
