<h1 align="center">
A interactive visualization of Bézier curves
</h1>

<p align="center">
<a align="center" href="https://beziercurves.vercel.app/">Visit Website</a>
 </p>
<p align="center">
<img src="https://user-images.githubusercontent.com/70843626/132389170-fb2514bd-04ca-4bfc-a80f-c0ec745c4c81.png" width=500/>
 </p>

<p align="center"> 
I was scrolling through YouTube when the video <a href="https://www.youtube.com/watch?v=aVwxzDHniEw&t=462s">The Beauty of Bézier Curves</a> popped up in my recommended feed. After I watched the video I had to agree with Freya Holmér. Bézier curves truly are beautiful. After the I had finished the video I immediately started the project and worked on it everyday for 3 days after school.</p>


<h2 id="dcbe8f21-c5e5-4a34-aef2-6b30b93add11" class="">The features</h2>
* Qubic Bézier
* Quadratic Bézier
* Interactivity
* Animation

<h2 id="dcbe8f21-c5e5-4a34-aef2-6b30b93add11" class="">The challenges</h2>
* Really understanding the functionality of Bézier Curves
    - I used GeoGebra to play around with the formula
* Automatically inreasing t until t === 1 and then decreasing until t === 0.
   - Due to JavaScript using double-precision floating numbers, t initially often ended up being something like 0.0001000100, after I fixed this (pretty easy), I had to implement a way of knowing if t "came from" 1 or 0. To fix this, I added an origin state, which was updated whenever t hit either 0 or 1. 

<h2 id="dcbe8f21-c5e5-4a34-aef2-6b30b93add11" class="">The critics</h2>
If I would have had more time I would have added following features:
- Displaying the vector A: `(1-t)` A and the vector B `t*B`
- Bézier Curves for n points

Maybe I will add these features in the future, but for now, this project is finished.
