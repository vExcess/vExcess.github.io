<script>
	import Navbar from './Navbar.svelte';
	import Skill from './Skill.svelte';
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
			name: "WebGL",
			img: "./images/webgl.png"
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
			name: "Rust",
			img: "./images/rust.png"
		},
		{
			name: "MongoDB",
			img: "./images/mongodb.png"
		},
		{
			name: "Docker",
			img: "./images/docker.png"
		},
		{
			name: "Svelte",
			img: "./images/svelte.png"
		}
	];

	const projects = [
		{
			link: "https://vxsacademy.org/",
			name: "Vexcess Academy",
			description: "A website where anyone can learn to code for free. Users can create projects in multiple different programming languages and then share them with the community. This is the main project I've been working on recently."
		},
		{
			link: "https://github.com/vExcess/Drawlite",
			name: "Drawlite",
			description: "Processing.js is decent graphics library, however it hasn't been updated since 2017 and is extremely slow. p5.js is the modern alternative, however p5 is an extremely bloated and overengineered library. Drawlite aims to solve the issues of both of the former. Drawlite is capable of doing nearly everything Processing can, however Drawlite weighs in at a mere 0.03 MB compared to the 1 MB Processing and the 4 MB p5. In addition benchmarks have proven Drawlite to be nearly 10x faster than Processing."
		},
		{
			link: "https://github.com/vExcess/Barbequery",
			name: "Barbequery",
			description: "A library that combines the best features from both jQuery and React while being faster than either of the two. Barbequery has very simple and elegant syntax and pretty much all the websites I've made including this one have been created using Barbequery."
		},
		// {
		// 	link: "https://github.com/vExcess/JITLang",
		// 	name: "JITLang",
		// 	description: "JavaScript is my favorite language, however JS has many stupid features that make the language worse. In addition, JS  lacks many features that would make it better. JITLang is a Just In Time compiled Language that aims to be JavaScript the way that JS ought to have been designed. Not only can JITLang be JIT compiled, but with the use of compiler flags it will be able to be compiled to native binaries. The main target for this is being able to dynamically compile JITLang code to WebAssembly on the fly. The language is still in development and is far from completion however you can run the latest version here: https://vxsacademy.org/computer-programming/new/jitlang"
		// },
		{
			link: "https://vxsacademy.org/computer-programming/op21YXlmoae7fl",
			name: "Flappy Bird Clone",
			description: "I've made multiple video games, but this is probably my most polished one."
		},
		// {
		//     link: "https://khancraft.vexcess.repl.co",
		//     name: "Khancraft",
		//     description: "It's Minecraft, but written in JavaScript instead of Java. This project is a collaboration with Dat and NoahCoder. Due to being busy we haven't gotten to the point of it being playable yet..."
		// },
		{
			link: "https://github.com/vExcess/ka-monitor",
			name: "VexTron (previously KA Monitor)",
			description: "A Discord bot that has extremely an extremely good swear filter along with analytics features. It includes useful commands such as dictionary and translation commands and fun commands such as 'would you rather' questions"
		},
		// {
		//     link: "https://music.vexcess.repl.co",
		//     name: "Vexcess Music",
		//     description: "I don't know why would you use this when you could use Spotify instead, but hey it exists. Also it's far from being completed."
		// },
	];

	const resources = [
		{
			link: "https://vexcess.github.io/blog/zig-for-webassembly-guide",
			name: "Zig for WebAssembly guide",
			description: "Tutorial on how to use Zig for web assembly. Guide is outdated, but most concepts still apply. If you want me to update it just let me know."
		},
		{
			link: "https://vexcess.github.io/blog/creating-a-native-app-in-typescript",
			name: "I Tried Creating a Native App in TypeScript",
			description: "The story of how I tried and failed to compile a program in TypeScript to native code. This blog contains useful information on using Static Hermes in addition to details about shermes' faults. Lastly this blog contains my thought processes and rants about various softwares."
		},
		{
			link: "https://github.com/ka-extension/ka-extension-ts",
			name: "The Khan Academy Extension",
			description: "I've contributed to the creation of The Khan Academy Extension which is a browser extension that has over 20,000 users and its purpose is to add features to Khan Academy that make it more user friendly and customizable."
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
			imgStyle: "transform: translate(4px, 0px) scale(0.82);margin-top: -60px;margin-bottom: 5px;filter: invert(1);",
			site: "Github",
			tag: "vExcess"
		},
		{
			link: "https://discord.com",
			img: "./images/discord.png",
			imgStyle: "margin-top: -60px;margin-bottom: 3px;transform: scale(1.2);",
			site: "Discord",
			tag: "vexcess"
		},
		{
			link: "https://replit.com/@vexcess",
			img: "./images/replit.png",
			imgStyle: "transform: scale(0.6);margin-top: -62px;margin-bottom: 4px;",
			site: "Replit",
			tag: "vexcess"
		},
		{
			link: "https://vxsacademy.org/profile/vexcess",
			img: "./images/logo.png",
			imgStyle: "transform: scale(0.75);margin-top: -62px;margin-bottom: 4px;",
			site: "VExcess Academy",
			tag: "vexcess"
		}
	];
</script>

<!-- sick background -->
<Background/>

<Navbar/>

<!-- ABOUT -->
<div class="page">
	<h1 style="margin-top: 10px;">VExcess</h1>
	
	<pre><code class="language-javascript" style="font-size: 14px;">let VExcess = &#123;
	name: "Vincent S.",
	location: "United States",
	description: `
		Full stack web developer;
		Been web developing since 2012;
		if (performanceCrucial) use(Zig) else use(JavaScript);
	`
};</code></pre>
	
	<br><br>
	
	<h2 style="margin-bottom: 12px; margin-top: 0px;">Tooling:</h2>
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
			width: min(730px, 100%);
			margin: auto;
		}
	
		.tooling h2 {
			margin-left: 20px;
			margin-bottom: 12px;
			margin-top: 10px;
		}
	
		.tooling div {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}
	</style>
</div>

<!-- SHOWCASE -->
<div class="page">
	<h1>Showcase</h1>
	<p>I have about 450 different programming projects I've started, but here are some of my more interesting ones. For useful projects check out the Resources tab</p>

	{#each projects as projectInfo}
		<Project {...projectInfo}/>
	{/each}
</div>

<!-- RESOURCES -->
<div class="page">
	<h2>Resources</h2>
	
	{#each resources as projectInfo}
		<Project {...projectInfo}/>
	{/each}
</div>

<!-- CONTACT -->
<div class="page">
	<h1 style="margin-bottom: 0px; margin-top: 0px;">Contacts:</h1>
	<br><br>
	
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
        let pages = document.getElementsByClassName('page');
        function changePage(index) {
            for (let i = 0; i < pages.length; i++) {
                pages[i].style.display = 'none';
            }
            pages[index].style.display = 'block';
            window.scroll(0, 0);
        }
        changePage(0);
    </script>
</div>