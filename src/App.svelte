<script>
	import Navbar from './Navbar.svelte';
	import Skill from './Skill.svelte';
	import Game from './Game.svelte';
	import Project from './Project.svelte';
	import Contact from './Contact.svelte';
    import Background from './Background.svelte';

	const proficientSkills = [
		{
			name: "HTML",
			img: "./images/html.png"
		},
		{
			name: "JavaScript",
			img: "./images/js.png"
		},
		{
			name: "CSS",
			img: "./images/css.png"
		},
		{
			name: "Node JS",
			img: "./images/nodejs.png"
		},
		{
			name: "Dart",
			img: "./images/dart.webp"
		},
		{
			name: "WebAssembly",
			img: "./images/webassembly.png"
		}
	];

	const experienceSkills = [
		{
			name: "Zig",
			img: "./images/zig.png"
		},
		{
			name: "Java",
			img: "./images/java.png"
		},
		{
			name: "WebGL",
			img: "./images/webgl.png"
		},
		{
			name: "MongoDB",
			img: "./images/mongodb.png"
		},
		{
			name: "Podman",
			img: "./images/podman.png"
		},
		{
			name: "Svelte",
			img: "./images/svelte.png"
		}
	];

	const games = [
		{
			name: "Flappy Bird",
			description: "Knock-off flappy bird. Endlessly fly through pipes."
		},
		{
			name: "Explosive Atari Breakout",
			description: "Atari Breakout but BOOM."
		},
		{
			name: "Tic Tac Glow",
			description: "Play tic tac toe against another person on the same machine or play singleplayer against the minimax algorithm."
		},
		{
			name: "Tappy Ring",
			description: "Similiar to the mobile game \"Circle\". Created by the KA Boys team led by me."
		},
		{
			name: "Ice Dodge",
			description: "A classic dodge game with powerups. Created by the KA Boys team led by me."
		},
	];

	const projects = [
		{
			link: "https://vxsacademy.org/",
			name: "Vexcess Academy",
			description: "A website where anyone can learn to code for free. Users can create projects in multiple different programming languages and then share them with the community."
		},
		{
			link: "https://github.com/librepaint/drawlite",
			name: "Drawlite",
			description: "Processing.js is decent graphics library, however it hasn't been updated since 2017 and is extremely slow. p5.js is the modern alternative, however p5 is an extremely bloated and overengineered library. Drawlite aims to solve the issues of both of the former. Drawlite is capable of doing nearly everything Processing can, however Drawlite weighs in at a mere 0.03 MB compared to the 1 MB Processing and the 4 MB p5. In addition benchmarks have proven Drawlite to be nearly 10x faster than Processing. Lastly Drawlite is cross platform and can run natively."
		},
		{
		    link: "https://github.com/librepaint/librepaint-3d",
		    name: "LibrePaint 3D",
		    description: "Paint 3D was removed from the Microsoft Store on November 4, 2024. Because Microsoft killed Paint 3D I am creating a free and open source implementation of MS Paint 3D."
		},
		{
			link: "https://github.com/vExcess/svquery",
			name: "SvQuery",
			description: "SvQuery is essentially a subset of Svelte mixed together with jQuery."
		},
		// {
		// 	link: "https://github.com/vExcess/JITLang",
		// 	name: "JITLang",
		// 	description: "JavaScript is my favorite language, however JS has many stupid features that make the language worse. In addition, JS  lacks many features that would make it better. JITLang is a Just In Time compiled Language that aims to be JavaScript the way that JS ought to have been designed. Not only can JITLang be JIT compiled, but with the use of compiler flags it will be able to be compiled to native binaries. The main target for this is being able to dynamically compile JITLang code to WebAssembly on the fly. The language is still in development and is far from completion however you can run the latest version here: https://vxsacademy.org/computer-programming/new/jitlang"
		// },
		{
			link: "https://github.com/vExcess/ka-monitor",
			name: "VexTron (previously KA Monitor)",
			description: "A Discord bot that has a sophisticated swear filter along with analytics features. It includes useful commands such as dictionary and translation commands and fun commands such as 'would you rather' questions"
		},
		// {
		//     link: "https://music.vexcess.repl.co",
		//     name: "Vexcess Music",
		//     description: "I don't know why would you use this when you could use Spotify instead, but hey it exists. Also it's far from being completed."
		// },
	];

	const blog = [
		{
			link: "https://vexcess.github.io/blog/creating-a-native-app-in-typescript",
			name: "I Tried Creating a Native App in TypeScript",
			description: "The story of how I tried and failed to compile a program in TypeScript to native code. This blog contains useful information on using Static Hermes in addition to details about shermes' faults. Lastly this blog contains my thought processes and rants about various softwares."
		},
		{
			link: "https://vexcess.github.io/blog/nullpointerexception",
			name: "WHY? NullPointerException while assigning to field of non-null object",
			description: "Why does nearly every language throw a null pointer exception when assigning to a field on a non-null object if the right side of the assignment is the initializer for the left???"
		},
		{
			link: "https://vexcess.github.io/blog/imagedata-tutorials.html",
			name: "ImageData Tutorials",
			description: "More of a mini book than a blog post. ImageData tutorials for beginners."
		},
		{
			link: "https://vexcess.github.io/blog/updating-lenovo-bios",
			name: "Updating Lenovo Bios",
			description: "My rant about doing a BIOS update turning into a 6 hour adventure. Hope this helps if you ever run into the same issues."
		},
		{
			link: "https://vexcess.github.io/blog/zig-for-webassembly-guide",
			name: "Zig for WebAssembly guide",
			description: "Tutorial on how to use Zig for web assembly. Guide is outdated, but most concepts still apply. If you want me to update it just let me know."
		},
	];

	const tools = [
		{
			link: "https://tildegit.org/matthias/ka-extension-ts",
			name: "Extension for Khan Academy",
			description: "I've contributed to the creation of the Extension for Khan Academy (formerly \"The Khan Academy Extension\") which is a browser extension that has over 600 users. It adds features to Khan Academy that make it more user friendly and customizable."
		},
		// {
		//     link: "https://YouTube-Save.vexcess.repl.co",
		//     name: "Youtube Save",
		//     description: "Now you can download Youtube videos without having Youtube premium."
		// },
		{
			link: "https://vexcess.github.io/imagenator",
			name: "Imagenator",
			description: "Convert images to embedabble JavaScript code that can be run on Khan Academy. This is basically the result of my obsession with compression theory and image encoding."
		},
		{
			link: "https://vexcess.github.io/RankedPairsVoting",
			name: "Ranked Pairs Voting Calculator",
			description: "Calculates results from a ranked pairs voting election given CSV file"
		},
	];

	const contacts = [
		{
			link: "https://www.github.com/vExcess",
			img: "./images/github.png",
			imgStyle: "transform: translate(1px, -2px) scale(0.75); filter: invert(1);",
			site: "Github",
			tag: "@vExcess"
		},
		{
			link: "https://discord.com",
			img: "./images/discord.png",
			imgStyle: "transform: translate(0px, -1px) scale(1.2);",
			site: "Discord",
			tag: "@vexcess"
		},
		// {
		// 	link: "https://replit.com/@vexcess",
		// 	img: "./images/replit.png",
		// 	imgStyle: "transform: translate(0px, -1px) scale(0.6);",
		// 	site: "Replit",
		// 	tag: "@vexcess"
		// },
		{
			link: "https://vxsacademy.org/profile/vexcess",
			img: "./images/logo.png",
			imgStyle: "transform: translate(0px, -1px) scale(0.75);",
			site: "VExcess Academy",
			tag: "@vexcess"
		},
		{
			link: "https://proton.me/mail",
			img: "./images/protonmail.png",
			imgStyle: "transform: translate(0px, -1px) scale(0.63);",
			site: "Email",
			tag: "vexcess@proton.me"
		},
	];

	
</script>

<!-- sick background -->
<Background/>

<Navbar/>

<!-- ABOUT -->
<div class="page crop-center">
	<h1>VExcess</h1>
	
	<pre><code class="language-javascript" style="font-size: 0.8em;">let VExcess = &#123;
	name: "Vincent S.",
	location: "California, U.S.A",
	description: `
		Open-Source full-stack web developer;
		Enjoys programming in JavaScript, Dart, and Zig;
		Choice Softwares
			OS: Linux Mint
			IDE: VS Code
			Web Framework: Svelte
		My current passion project is creating a FOSS clone of MS 
		Paint 3D;
	`
};</code></pre>
	
	<br><br>
	
	<div class="tooling">
		<h2>Much Experience With:</h2>
		<div id="proficient">
			{#each proficientSkills as skillInfo}
				<Skill {...skillInfo}/>
			{/each}
		</div>
	</div>
	<br><br>
	<div class="tooling">
		<h2>Some Experience With:</h2>
		<div id="has-experience">
			{#each experienceSkills as skillInfo}
				<Skill {...skillInfo}/>
			{/each}
		</div>
	</div>
	
	<style>
		.tooling {
			background-color: rgb(15, 140, 50);
			padding: 10px;
			border-radius: 12px;
			width: min(770px, calc(100% - 25px));
			margin: auto;
		}
	
		.tooling h2 {
			margin-left: 20px;
			margin-bottom: 12px;
			margin-top: 10px;
		}
	
		.tooling div {
			display: grid;
      grid-template-columns: repeat(auto-fill, minmax(min(250px, calc(100vw - 35px)), 1fr));
			justify-content: center;
			align-content: center;
		}
	</style>
</div>

<!-- GAMES -->
<div class="page">
	<h1>Games</h1>
	<div class="crop-center page-content">
		<p>I've started many games. Here are some that I've bothered porting to Drawlite.</p>
	</div>

	<div id="games" class="page-content">
		{#each games as gameInfo}
			<Game {...gameInfo}/>
		{/each}
	</div>

	<style>
		#games {
			display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
			justify-content: center;
		}
	</style>
</div>

<!-- PROJECTS -->
<div class="page crop-center">
	<h1>Projects</h1>
	<div class="page-content">
		<p>I have about 450 different programming projects I've started, but here are some of my more interesting ones. For useful projects check out the Tools tab</p>
		{#each projects as projectInfo}
			<Project {...projectInfo}/>
		{/each}
	</div>
</div>

<!-- TOOLS -->
<div class="page crop-center">
	<h1>Tools</h1>
	<div class="page-content">
		{#each tools as projectInfo}
			<Project {...projectInfo}/>
		{/each}
	</div>
</div>

<!-- BLOG -->
<div class="page crop-center">
	<h1>Blog</h1>
	<div class="page-content">
		{#each blog as projectInfo}
			<Project {...projectInfo}/>
		{/each}
	</div>
</div>

<!-- CONTACT -->
<div class="page crop-center">
	<h1 style="margin-bottom: 40px;">Contacts</h1>
	
	<div id="contacts-table">
		{#each contacts as contactInfo}
			<Contact {...contactInfo}/>
		{/each}
	</div>

	<style>
		#contacts-table {
			background-color: transparent;
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
		}
	</style>
</div>

<div>
	<script>
		const pageHashes = [
			"about",
			"games",
			"projects",
			"tools",
			"blog",
			"contact"
		];

		let pages = document.getElementsByClassName('page');
		let navItems = document.getElementsByClassName('navitem');
		function changePage(index) {
			window.location.hash = pageHashes[index];

			for (let i = 0; i < navItems.length; i++) {
				navItems[i].classList.remove("navitem-selected");
			}
			
			for (let i = 0; i < pages.length; i++) {
				pages[i].style.display = 'none';
			}

			navItems[index].classList.add("navitem-selected");
			pages[index].style.display = 'block';
			
			// gotta wait for page to rerender before scrolling
			setTimeout(() => {
				window.scrollTo({
					left: 0,
					top: 0,
					behavior: "smooth"
				});
			}, 100);
		}

		let firstPageIndex = pageHashes.indexOf(window.location.hash.slice(1));
		if (firstPageIndex === -1) {
			firstPageIndex = 0;
		}
		changePage(firstPageIndex);
	</script>
</div>
