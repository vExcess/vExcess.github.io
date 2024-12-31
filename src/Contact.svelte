<script>
    const { link, img, imgStyle, site, tag } = $props();
</script>

<div style="padding: 10px; background-color: transparent;">
    <a class="contact-box hover-glow" href="{link}" target="_blank">
        <img src="{img}" height="95px" style="{imgStyle}" alt="">
        <strong>{site}<strong>
        <div style="height: 14px;"></div>
        <strong style="font-family: Consolas, monospace;">@{tag}<strong>
    </a>
</div>

<style>
    .contact-box {
        display: block;
        border-radius: 10px;
        overflow: hidden;
        border: 3px solid rgb(15, 110, 40);
        width: 150px;
        height: 85px;
        background-color: rgb(0, 0, 0, 0.7);
        background-size: cover;
        background-repeat: no-repeat;
        padding: 10px;
        padding-top: 65px;
        text-align: center;
        text-decoration: none;
        position: relative;
        font-size: 20px;
        color: white;
    }
    .contact-box strong {
        display: block;
        position: relative;
        top: -8px;
        margin: auto;
    }
</style>