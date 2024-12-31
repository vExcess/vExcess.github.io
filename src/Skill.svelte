<script>
    const { img, name } = $props();
</script>

<div style="background-color: rgb(0, 0, 0, 0.8); border-radius: 8px; padding: 12px; margin: 6px; width: 200px;">
    <div style="display: flex;">
        <img src="{img}" width="55px" height="55px" style="display: inline-block;" alt="">
        <strong style="display: inline-block; margin-left: 16px; line-height: 55px; font-size: 22px; transform: translate(0px, 2px);">{name}</strong>
    </div>
</div>
