<script>
    const { name, description } = $props();
</script>

<a href="/games/{name.toLowerCase().replaceAll(" ", "-")}/index.html" target="_blank" class="resource-box hover-glow">
    <strong style="text-decoration: underline;">{name}</strong>
    <br>
    <div>{description}</div>
    <br>
    <div class="resource-image-wrapper">
        <img src="/games/{name.toLowerCase().replaceAll(" ", "-")}/thumbnail.png" alt="thumbnail">
    </div>
</a>

<style>
    .resource-box {
        display: flex;
        flex-direction: column;
        background-color: rgb(0, 0, 0, 0.75);
        border: 3px solid rgb(15, 110, 40);
        border-radius: 10px;
        padding: 20px;
        margin: 10px;
        text-decoration: none;
        color: white;
    }

    .resource-box div {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif, Helvetica, sans-serif;
        font-size: 0.9em;
    }

    .resource-image-wrapper {
        position: relative;
        width: 100%;
        padding-top: 100%;
        display: block;
        aspect-ratio: 1:1;
    }

    .resource-image-wrapper img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%; 
        height: 100%;
        object-fit: contain;
        object-position: center;
    }
</style>
