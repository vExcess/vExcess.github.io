<script>
    import NavItem from "./NavItem.svelte";
</script>

<div id="navTool">
    <a href="https://vexcess.github.io/" target="_self" style="padding: 13px; padding-left: 18px;">
        <img src="./images/logo.png" width="16" height="16" style="transform: scale(2); display: inline-block; margin-top: 2px; margin-right: 4px;" alt="">
        <strong style="display: inline-block; margin-left: 6px; margin-top: 6px;">VExcess</strong>
    </a>

    <style>
        .navitem-selected {
            border-bottom: 2px solid green;
        }
    </style>

    {#each ["About", "Games", "Projects", "Tools", "Blog", "Contact"] as tabLabel, i}
        <NavItem label={tabLabel} pageId={i}/>
    {/each}
</div>

<style>
    #navTool {
        display: flex;
        position: fixed;
        z-index: 10;
        top: 0px;
        left: 0px;
        right: 0px;
        background-color: rgba(0, 0, 0, 0.9);
        border-bottom: 1px solid rgb(0, 0, 0);
        font-size: 22px;
        font-family: cyborg, sans-serif;
    }
    #navTool :global(a) {
        color: white;
        text-decoration: none;
        padding: 25px;
        padding-top: 20px;
        padding-bottom: 15px;
        background-color: rgb(0, 0, 0);
    }
    #navTool :global(a:hover) {
        background-color: rgb(50, 50, 50);
    }
</style>