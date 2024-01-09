# Quote Generator
 A generator for motivational  or inspirational quotes

Created for freeCodeCamp's FrontEnd Development Libraries Certification

Library's used:
- Bootstrap
- jQuery

API's used:
- Quotable: https://api.quotable.io/random
- Lorem Picsum: https://picsum.photos

## Notes:
This project was pretty interesting and a very good learning experience when it came to using bootstrap and jQuery. I didn't find much use in using React or Redux, but I thought about using SCSS for bootstrap customization. I decided not to in order to finish the project, but then continued to make things harder for me...

### In regards to the API... (rant)
Using Luke Peavey's Quotable API was amazing. Super detailed and easy to use for a beginner like me. I had less issues with this one than I did the PokeFinder one. 

The API that gave me issues was the image one for the background. I first used unsplash's photo API. Was a more than I was expecting and very information heavy. I figured it out after a while and made sure to give proper credit and follow the API ToS. 

But then realized that due to it using an API key, and myself using vanilla JS that the API key would be visible to anyone that had a F12 key. That was a big no-no...

I then decided to move onto one that would not require an API key... this was more difficult. I almost used a couple musuem's APIs (very cool btw!) but decided the picture quality and "stock photo"iness would not work. I then found Lorum Picsum!

It was super easy to use! All you have to do is figure out your desired size, put it in the url and you can directly put it into a css file for background-image. I decided to be done after doing this, but then looking at the documenation a little more, you could get author information!

To get author information, you HAVE to search it up via photo ID. Didn't seem to hard, but the image you generate only returns the picsum-id is 2 methods. The http header response OR EXIF metadata. This was a pain in the butt, since I found out you can't get header data values in vanilla JS.

EXCEPT YOU CAN! Just... not in a good way...

You can only get http header information by reader the header.entries() which returns an iterable. Afaik, this is one of probably few methods in order to get this information. I just iterate over it, put each value of the pairs into an array, and just grab the one I want.

```JS
for (var pair of data.headers.entries()) {
    console.log(pair[0]+ ': '+ pair[1]);
    arr.push(pair[1]);
}
```

I then have to make another GET request in order to get the author information, and pretty much get the exact same image again. It's a bit messed up, but hey, it works. 
