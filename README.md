## lazy load testing
![react-badge.svg](public/images/react-badge.svg)
![vitejs-badge.svg](public/images/vitejs-badge.svg)

I am learning about React lazy and suspense. My first use case was testing some photos 
at the bottom of the page. we would have to scroll down to get them into view. Before we scroll all the way down
We don't want to load 10MB of images if the user may not ever even scroll down there and see it, what a waste of bandwidth!
This was made easy with the 
[react-lazy-load-image-component](https://www.npmjs.com/package/react-lazy-load-image-component) package.

As I learned about *lazy* and *suspense* it became hard to tell why I needed this at first. I use the same 
api to get 10MB worth of images from before. Now they are not at the bottom of the page, but on a separate page route.

```
<Routes>
    <Route path={"/"} element={<Home/>}/>
    <Route path={"/photos"} element={<Photos/>}/>
</Routes>
```
The photos page currently has nothing big on it except 10MB worth of images to load, My expectation was that these images are loading by default and lazy loading would solve this live we had to lazy load by scrolling, which is way different
than not loading at all until we're on the page. 

Here is loading on the home page, we see our 10MB of photos are NOT loaded, what a shock. why do I need
to lazy load again? Remember we have not tried optimizing with lazy load yet.
375KB - 345ms

![test](https://i.imgur.com/PfM1iXx.png)

After learning more, this is for reducing load time of all our dependencies. So if we
have many pages, and each of those have big packages that run. The user may 
not even visit those. So why use the bandwidth loading it when they're only on the home page?

remember before I was shocked it loaded so fast, well our Images will not load if we're not on that page.
Now I need to test with some big dependencies. So I go and find react charts.

```
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
```
What a massive difference from simply importing and using a chart on Photos.jsx, and I've never visited it! 2.9MB 625ms

![img](https://i.imgur.com/qQAQZYv.png)

Now I check the Lighthouse stats, there's certainly room for improvement!

![img](https://i.imgur.com/Z7qUO6D.png)

Now it's on to lazy and suspense. Instead of the regular import, we have lazy,
then you can see the difference in wrapping Photos in suspense vs above.
```
const Photos = lazy(() => import('./components/Photos.jsx'));
<Route path={"/photos"} element={
    <Suspense fallback={<div>loading...</div>}>
        <Photos/>
    </Suspense>
}/>
```
Below is with lazy and suspense optimized, so easily with the fix above. We see
such a huge time and bandwidth savings off that alone because Photos dependencies
, are not being loaded until we get there.

I like to compare this with the very first image up top, before react charts 
was installed and imported. we now have even less space and faster loading
than that, because it's as if those dependencies don't exist. And we have 1kb less than the first image
because we're not even loading the Photo components code.
374KB - 269ms

![img](https://i.imgur.com/9T9Avfh.png)

Now onto lighthouse for lazy and suspense optimized. 

![img](https://i.imgur.com/YB5ZYGt.png)

### verdict
I'm very impressed that a few lines did all of this. Our speed has improved so much, yet we haven't even learned
 server side rendering like nextjs yet, or a backend language. 
 
![img](https://i.imgur.com/3s0Nwk8.png)





























