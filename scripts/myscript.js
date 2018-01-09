// NO MODIFY ON THIS FILE
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("list-item1").addEventListener("click", () => {
        document.getElementById("description-link").href = "任天堂Switch"
        document.getElementById("description-image").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/NintendoSwitchLogo.svg/512px-NintendoSwitchLogo.svg.png"
        document.getElementById("description-paragraph").textContent = "任天堂Switch（日语：ニンテンドースイッチ，英语：Nintendo Switch）是任天堂出品的电子游戏机，于2017年3月3日在日本、北美、欧洲和香港发售，同年12月1日在韩国与台湾发售。拥有可拆卸控制器和可分离式主机，游戏载体使用了专用卡带。"
    })
    document.getElementById("list-item2").addEventListener("click", () => {
        document.getElementById("description-link").href = "任天堂3DS"
        document.getElementById("description-image").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Nintendo-3DS-AquaOpen.png/800px-Nintendo-3DS-AquaOpen.png"
        document.getElementById("description-paragraph").textContent = "任天堂3DS（日语：ニンテンドー3DS，英语：Nintendo 3DS，简称“N3DS”或“3DS”），是任天堂于2011年推出的便携式游戏机，是任天堂DS的后续机种。最大特点是利用了视差障壁技术，让使用者不需配戴任何特殊眼镜即可裸眼感受到立体3D图像效果。该平台向下兼容任天堂DS和任天堂DSi的软件。"
    })
})