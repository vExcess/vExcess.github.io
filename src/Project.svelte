<script>
    const { link, name, description } = $props();
</script>

<a href="{link}" target="_blank" class="resource-box hover-glow">
    <strong style="text-decoration: underline;">{name}</strong>
    <br><br>
    {description}
</a>

<style>
    .resource-box {
        display: block;
        background-color: rgb(0, 0, 0, 0.7);
        border: 3px solid rgb(15, 110, 40);
        border-radius: 10px;
        margin-bottom: 6px;
        padding: 20px;
        text-decoration: none;
        color: white;
        margin-bottom: 18px;
    }
</style>