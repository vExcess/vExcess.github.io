<script>
    const { link, name, description } = $props();
</script>

<a href="{link}" target="_blank" class="resource-box hover-glow">
    <strong style="text-decoration: underline;">{name}</strong>
    <br><br>
    <div>{description}</div>
</a>

<style>
    .resource-box {
        display: block;
        background-color: rgb(0, 0, 0, 0.75);
        border: 3px solid rgb(15, 110, 40);
        border-radius: 10px;
        margin-bottom: 6px;
        padding: 20px;
        text-decoration: none;
        color: white;
        margin-bottom: 18px;
    }

    .resource-box div {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif, Helvetica, sans-serif;
        font-size: 0.9em;
    }
</style>