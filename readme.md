# Pheagey's Fiero

## Background
Website for my first car, an '88 Pontiac Fiero.

## Features
 - Single Window Application (pre single page app)
 - Fully themed experience

## Goal
Code base refresh. 

## Requirements
 - Docker
 - Command prompt of some sort
 
## Road map
None; this project repository is for historic reference only.

## Usage
Clone the repository locally:
```
cd /project/root/parent
git clone https://github.com/davidjeddy/pheageys-fiero.git
cd ./pheageys-fiero
```

Then build and start the image via:

```
docker build -t pheageys-fiero . --rm
docker run -d -h localhost -p 80:80 --name pheageys_fiero_web -v "$PWD":/var/www/html pheageys-fiero:latest --rm
docker logs -f pheageys_fiero_web
```

Finally, if all went well, you should be able to visit `localhost` in your client browser of choice and see the 
application running.


## Warning
This project inception was pre-framework or best practice abeyance. If anything this is an example of hobbiest level web
development in the 2001.

Though recently wrapped in a docker container for portability and hosted in a GiT repo; neither of which existed when
the site was made, this site IS NOT:
 - Secure
 - Pragmatic
 - Best practice adhering
 - An example of any sort of decent practices; if anything this is what you should NOT be doing
