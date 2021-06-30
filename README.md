


# Coding Challenge: Sunset Valley

**Introduction**
this is a personal challenge for myself, and I found this challenge somewhere (I actually lost the link) in YouTube.      
The rules of this is that there is a set of columns, and the sun is setting in the west.

**Motivations**
after years of deleting everything I make on GitHub because of being ashamed of what it looks like, I am going to change my ways. My mindset was that I have to be putting out things as perfect, but now I believe I can just keep updating this as if it was a seed, and that it will grow eventually to be a beautiful plant  
I am looking to maintain this project long term, continuously working on making it beautiful in time.
Being able to finish this project is going to be a great achievement for myself.
As of writing, I have been avoiding canvas for a long time, and I want to actually understand it.

**Wireframe** https://www.figma.com/file/Kx0MhtUO3BFTRgib7pOijq/Sunset-Valley?node-id=0%3A1

**Project Preview**
[sunset-valley.netlify.app](http://sunset-valley.netlify.app)

**How to run project**


npm install npm start


**To Do**
- [x] Prototype of the towers with lighting
- [x] A Wireframe at least
- [x] Color Scheme for towers
- [ ] to create towers depending on screen size
- [ ] Color Scheme  for entire website
- [ ] low-fi drawings of what I imagine it should look like
- [ ] Hero Page  component
- [ ] Main Content component
- [ ] CTA Component
- [ ] Footer Component


**Progress**
* **July 1, 2021**    
  Moved from using just a div with react-rnd elements and used canvas.    
  Took a while to get used to, and learn, especially the quirks of the coloring on it, but I am quite satisfied with it.    
  I think the experience on canvas is much smoother than it was on just the normal divs that can be resized.    
  Using react-rnd is not very complicated at first, but it gets harder to scale up especially when I started adding a hero-page.    
  By using canvas, It can be placed anywhere and the coordinates are only within the canvas element (although I still have not fully understood it)    
  One disadvantage that made it difficult is the lack of debugging tools, where I had to make my own way of testing things. One is by creating points in the canvas so I could visualize where the gradients are being applied.    
  Also that canvasContent.tsx became a monstrosity of code. Looking to change that soon to make it more understandable.  
  ![Progress as of July 1](progress_photos/070121_progress.png)
