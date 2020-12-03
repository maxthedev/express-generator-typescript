v1.0.0

## Prerequisite

- git
- git flow

## Installation

1. Clone this repo in your project folder :

    `git clone https://github.com/max-2309/express-generator-typescript.git`

2. Install :

    `npm install`
    
3. Init your repo :

    `git flow init`
    
4. Add develop remote
    
    `git remote add origin git@github.com:YOUR_PRIVATE_DEV_REPO`
    
    If you get an error, try :
    
    `git remote set-url origin git@github.com:YOUR_PRIVATE_DEV_REPO`
    
    Your you can push your update to your private dev repo (develop branch) & easily manage the staging stage throw git flow (using the release function)
    

5. Add production remote
    
    `git remote add prod__ git@github.com:YOUR_PRODUCTION_REPO`
    
    Your you can push your fresh public update to your public repo (see usage).

    
## Usage

### Run the server :

`npm run start`


### Development

Use git flow command to create hot fix, release...

To push any update to your private development repo :

`npm run push:dev`


### Production

To push to your public production repo :

`npm run push:prod`
