$.createComponent("navbar", $.html`
    <div id="navTool">
        <a href="https://vexcess.github.io/" target="_self" style="padding: 13px; padding-left: 18px;">
            <img src="./images/logo.png" width="16" height="16" style="transform: scale(2); display: inline-block; margin-top: 2px; margin-right: 4px;">
            <strong style="display: inline-block; margin-left: 6px; margin-top: 6px;">VExcess</strong>
        </a>
    </div>
`);

$.createComponent("navitem", $.html`
    <a href="javascript:changePage(\{i});">\{label}</a>
`);

$.createComponent("skill", $.html`
    <div style="background-color: rgb(0, 0, 0, 0.8); border-radius: 8px; padding: 12px; margin: 6px; width: 200px;">
        <div style="display: flex;">
            <img src="\{img}" width="55px" height="55px" style="display: inline-block;">
            <strong style="display: inline-block; margin-left: 16px; line-height: 55px; font-size: 22px; transform: translate(0px, 2px);">\{name}</strong>
        </div>
    </div>
`);

$.createComponent("project", $.html`
    <a href="\{link}" target="_blank" class="resource-box hover-glow">
        <strong style="text-decoration: underline;">\{name}</strong>
        <br><br>
        \{description}
    </a>
`);

$.createComponent("resource", $.html`
    <a href="\{link}" target="_blank" class="resource-box hover-glow">
        <strong style="text-decoration: underline;">\{name}</strong>
        <br><br>
        \{description}
    </a>
`);

$.createComponent("contact", $.html`
    <div style="padding: 10px; background-color: transparent;">
        <a class="contact-box hover-glow" href="\{link}" target="_blank">
            <img src="\{img}" height="95px" style="\{imgStyle}">
            <strong>\{site}<strong>
            <div style="height: 14px;"></div>
            <strong style="font-family: Consolas, monospace;">@\{tag}<strong>
        </a>
    </div>
`);