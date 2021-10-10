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
<ul id="f9f81354-f857-47d4-a0f6-ad9ec41241ff" class="bulleted-list">
					<li style="list-style-type: disc">Qubic Bézier</li>
				</ul>
				<ul id="3f124232-270c-4354-bf3e-ede08ac080fd" class="bulleted-list">
					<li style="list-style-type: disc">Quadratic Bézier</li>
				</ul>
				<ul id="13f39914-14f1-426c-810e-7847bf0ee0b4" class="bulleted-list">
					<li style="list-style-type: disc">Interactivity</li>
				</ul>
				<ul id="f9f78572-9643-4027-b523-e9bbd939aa8a" class="bulleted-list">
					<li style="list-style-type: disc">Animation</li>
				</ul>

<h2 id="dcbe8f21-c5e5-4a34-aef2-6b30b93add11" class="">The challenges</h2>
<ul id="8ef08023-4ee8-4e9c-a53e-f0d49785a98a" class="bulleted-list">
					<li style="list-style-type: disc">
						Really understanding the functionality of Bézier Curves
						<ul id="e18f71c2-0dfc-418a-907d-f1e9a491292c" class="bulleted-list">
							<li style="list-style-type: circle">I used GeoGebra to play around with the formula</li>
						</ul>
					</li>
				</ul>
				<ul id="ab4ce7e1-fcb6-4b81-97d2-7a2ac0603c07" class="bulleted-list">
					<li style="list-style-type: disc">
						Automatically inreasing t until t === 1 and then decreasing until t === 0.
						<ul id="576a786c-9515-497f-a6e5-43f6fe352964" class="bulleted-list">
							<li style="list-style-type: circle">
								Due to JavaScript using double-precision floating numbers, t initially often ended up being something like 0.0001000100, after I fixed this (pretty easy), I had to
								implement a way of knowing if t &quot;came from&quot; 1 or 0. To fix this, I added an origin state, which was updated whenever t hit either 0 or 1.
							</li>
						</ul>
					</li>
				</ul>

<h2 id="dcbe8f21-c5e5-4a34-aef2-6b30b93add11" class="">The critics</h2>
<p id="091ded7f-b3a4-41ff-9d7f-5c545c96c02d" class="">If I would have had more time I would have added following features:</p>
				<ul id="3b201b93-3c12-41b7-bd3a-51b062678230" class="bulleted-list">
					<li style="list-style-type: disc">Displaying the vector A: <code>(1-t)</code> A and the vector B <code>t*B</code></li>
				</ul>
				<ul id="7091187c-828e-4955-96dd-15277e9d6e1e" class="bulleted-list">
					<li style="list-style-type: disc">Bézier Curves for n points</li>
				</ul>
				<p id="e4aacdb5-abda-4c54-8657-b0e1079132b7" class="">Maybe I will add these features in the future, but for now, this project is finished.</p>


		
