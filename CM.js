/*
    AVATAR MAKER
    CREATED BY: VITRUVIAN
    APRIL 14, 2018
*/
body {
    font-family: arial, helvetica;
    font-size:16px;
    margin:0;
    background-color:#ffffff;
}
svg {
    position:absolute;
    top:0;
    left:0;
    width:360px;
    height:360px;
}
#avatar {
    position:relative;
    margin:auto;
    width:360px;
    height:460px;
}
#footer {
    position:absolute;
    top:360px;
    left:0;
    width:361px;
    height:99px;
    border-top:1px solid #707070;
}
#menu {
    position:absolute;
    bottom:0;
    left:0;
    width:60px;
    height:99px;
    background-color:#ffffff;
    border-right:1px solid #707070;
    z-index:200;
    overflow:hidden;
}
#menu_lines div {
    position:absolute;
    left:10px;
    width:40px;
    height:7px;
    background-color:#707070;
    -webkit-transition: all 0.35s cubic-bezier(0.75, 0.25, 0.10, 0.95);
    transition: all 0.35s cubic-bezier(0.75, 0.25, 0.10, 0.95);
}
#menu.active #menu1 {
    top: 22px;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transition: all 0.5s cubic-bezier(0.75, 0.25, 0.10, 0.95);
    transition: all 0.5s cubic-bezier(0.75, 0.25, 0.10, 0.95);
}
#menu.active #menu2 {
    opacity: 0;
    -webkit-transition: opacity 0.5s cubic-bezier(0.75, 0.25, 0.10, 0.95);
    transition: opacity 0.5s cubic-bezier(0.75, 0.25, 0.10, 0.95);
}
#menu.active #menu3 {
    top: 22px;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transition: all 0.5s cubic-bezier(0.75, 0.25, 0.10, 0.95);
    transition: all 0.5s cubic-bezier(0.75, 0.25, 0.10, 0.95);
}
#options {
    position:absolute;
    top:0;
    left:61px;
    width:299px;
    height:99px;
}
#options_title {
    font-size:17px;
    font-weight:bold;
    text-align:center;
    padding-top:8px;
}
#options_div {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    position:absolute;
    top:34px;
    left:0;
    width:299px;
    height:65px;
    overflow-y:hidden;
}
.skins,.eyes,.eyebrows,.mouths,.hairstyles,.haircolors,.facialhairs,.clothes,.fabriccolors,.backgroundcolors,.glasses,.glassopacity,.tattoos,.accesories {
    flex: 0 0 auto;
    top:0;
    width:53px;
    height:53px;
    margin:5px;
    border:1px solid #707070;
    cursor:pointer;
    border-radius:10px;
    background-color:#ffdbb4;
}
.eyes,.eyebrows,.mouths,.hairstyles,.facialhairs,.clothes,.glasses,.tattoos,.accesories {
    background-image:url(https://i.imgur.com/q0DdlUI.png);
}
.glassopacity {
    text-align:center;
    font-size:21px;
    font-weight:bold;
    height:43px;
    padding-top:10px;
    color:#707070;
}
#menu_list {
    position:absolute;
    bottom:10px;
    left:70px;
    width:250px;
    height:auto;
    text-align:center;
}
.btn {
    padding:8px;
    font-weight:bold;
    margin-bottom:7px;
}
#menu_list div {
    width:100%;
    cursor:pointer;
    padding:7px 0 7px 0;
    font-size:19px;
    font-weight:bold;
    color:#707070;
}
