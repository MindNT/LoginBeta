# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

4
4 5555 666  77
77
@ToyLikePeopleMakeMeBoyLike ➜ /workspaces/codespaces-blank (main) $ cd login-page
@ToyLikePeopleMakeMeBoyLike ➜ /workspaces/codespaces-blank/login-page (main) $ ssh-keygen -t rsa -b 4096 -C "luislous123@hotmail.com"
Generating public/private rsa key pair.
Enter file in which to save the key (/home/codespace/.ssh/id_rsa): 
Created directory '/home/codespace/.ssh'.
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /home/codespace/.ssh/id_rsa
Your public key has been saved in /home/codespace/.ssh/id_rsa.pub
The key fingerprint is:
SHA256:x3Y9Z97zj89xxWxjq3ravRdZZ43gwYrZIatDcZi0WVs luislous123@hotmail.com
The key's randomart image is:
+---[RSA 4096]----+
|     ..o. E.     |
|      ++oo. +    |
|      oo.* + o ..|
|      . +.o ...o=|
|     . .S + . o+@|
|      o  o .  .O=|
|       .       +=|
|            ..oo*|
|           o+o.+O|
+----[SHA256]-----+
@ToyLikePeopleMakeMeBoyLike ➜ /workspaces/codespaces-blank/login-page (main) $ eval "$(ssh-agent -s)"
Agent pid 5857
@ToyLikePeopleMakeMeBoyLike ➜ /workspaces/codespaces-blank/login-page (main) $ ssh-add ~/.ssh/id_rsa
Identity added: /home/codespace/.ssh/id_rsa (luislous123@hotmail.com)
@ToyLikePeopleMakeMeBoyLike ➜ /workspaces/codespaces-blank/login-page (main) $ cat ~/.ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDa4MJDhwTs5Lb6/s5cruvpSLgom6zww4MymkZ4uxQzW1w+2Kwf0NfZaoVQrUqMa7f9oNJrOF1BIe3hODQodh9wI...........................
@ToyLikePeopleMakeMeBoyLike ➜ /workspaces/codespaces-blank/login-page (main) $ ^C
@ToyLikePeopleMakeMeBoyLike ➜ /workspaces/codespaces-blank/login-page (main) $ ssh -T git@github.com
The authenticity of host 'github.com (140.82.114.3)' can't be established.
ECDSA key fingerprint is SHA256:p2QAMXNIC1TJYWeIOttrVc98/R1BUFWu3/LiyKgUfQM.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added 'github.com,140.82.114.3' (ECDSA) to the list of known hosts.
Hi MindNT/LoginBeta! You've successfully authenticated, but GitHub does not provide shell access.
@ToyLikePeopleMakeMeBoyLike ➜ /workspaces/codespaces-blank/login-page (main) $ git remote add origin git@github.com:MindNT/LoginBeta.gi
error: remote origin already exists.
@ToyLikePeopleMakeMeBoyLike ➜ /workspaces/codespaces-blank/login-page (main) $ git branch -M main
@ToyLikePeopleMakeMeBoyLike ➜ /workspaces/codespaces-blank/login-page (main) $ git push -u origin main
remote: Permission to MindNT/LoginBeta.git denied to ToyLikePeopleMakeMeBoyLike.
fatal: unable to access 'https://github.com/MindNT/LoginBeta.git/': The requested URL returned error: 403
@ToyLikePeopleMakeMeBoyLike ➜ /workspaces/codespaces-blank/login-page (main) $ git credential-cache exit
@ToyLikePeopleMakeMeBoyLike ➜ /workspaces/codespaces-blank/login-page (main) $ nano ~/.ssh/config
@ToyLikePeopleMakeMeBoyLike ➜ /workspaces/codespaces-blank/login-page (main) $ nano ~/.ssh/config
@ToyLikePeopleMakeMeBoyLike ➜ /workspaces/codespaces-blank/login-page (main) $ git remote set-url origin git@github.com-MindNT:MindNT/LoginBeta.git
@ToyLikePeopleMakeMeBoyLike ➜ /workspaces/codespaces-blank/login-page (main) $ ssh -T git@github.com-MindNT
/home/codespace/.ssh/config line 4: garbage at end of line; "#".
@ToyLikePeopleMakeMeBoyLike ➜ /workspaces/codespaces-blank/login-page (main) $ ssh -T git@github.com-MindNT
/home/codespace/.ssh/config line 4: garbage at end of line; "#".
@ToyLikePeopleMakeMeBoyLike ➜ /workspaces/codespaces-blank/login-page (main) $ ssh -T git@github.com-MindNT
/home/codespace/.ssh/config line 4: garbage at end of line; "#".
@ToyLikePeopleMakeMeBoyLike ➜ /workspaces/codespaces-blank/login-page (main) $ 
@ToyLikePeopleMakeMeBoyLike ➜ /workspaces/codespaces-blank/login-page (main) $ ssh -T git@github.com-MindNT
/home/codespace/.ssh/config line 4: garbage at end of line; "#".
@ToyLikePeopleMakeMeBoyLike ➜ /workspaces/codespaces-blank/login-page (main) $ nano ~/.ssh/config
@ToyLikePeopleMakeMeBoyLike ➜ /workspaces/codespaces-blank/login-page (main) $ ssh -T git@github.com-MindNT
Warning: Permanently added the ECDSA host key for IP address '140.82.112.3' to the list of known hosts.
Hi MindNT/LoginBeta! You've successfully authenticated, but GitHub does not provide shell access.
@ToyLikePeopleMakeMeBoyLike ➜ /workspaces/codespaces-blank/login-page (main) $ git push -u origin main
Enumerating objects: 33, done.
Counting objects: 100% (33/33), done.
Delta compression using up to 2 threads
Compressing objects: 100% (33/33), done.
Writing objects: 100% (33/33), 183.81 KiB | 7.35 MiB/s, done.
Total 33 (delta 3), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (3/3), done.
To github.com-MindNT:MindNT/LoginBeta.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.