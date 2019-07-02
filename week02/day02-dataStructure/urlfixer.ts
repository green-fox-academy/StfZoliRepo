"use strict";
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url: string = "https//www.reddit.com/r/nevertellmethebots";
function missingPart(e: string): string {
  let x: string[] = e.split("");
  x.splice(5, 0, ":");
  return x.join("").replace("bots", "odds");
}
console.log(missingPart(url));
