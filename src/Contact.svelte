<script>
    const { link, img, imgStyle, site, tag } = $props();
</script>

<div style="padding: 10px; background-color: transparent;">
    <a class="contact-box hover-glow" href="{link}" target="_blank">
        <div style="height: 95px; margin-bottom: 10px;">
            <img src="{img}" height="95px" style="{imgStyle}" alt="">
        </div>
        <div>
            <strong>{site}<strong>
            <div style="height: 14px;"></div>
            <strong style="font-family: Consolas, monospace;">{tag}<strong>
        </div>
    </a>
</div>

<style>
    .contact-box {
        display: block;
        border-radius: 10px;
        overflow: hidden;
        border: 3px solid rgb(15, 110, 40);
        width: 225px;
        height: 150px;
        background-color: rgb(0, 0, 0, 0.75);
        padding: 10px;
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