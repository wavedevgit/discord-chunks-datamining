/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  b: () => s
});
let r = "application/font-woff",
  i = "image/jpeg",
  o = {
    woff: r,
    woff2: r,
    ttf: "application/font-truetype",
    eot: "application/vnd.ms-fontobject",
    png: "image/png",
    jpg: i,
    jpeg: i,
    gif: "image/gif",
    tiff: "image/tiff",
    svg: "image/svg+xml",
    webp: "image/webp"
  };

function a(e) {
  let t = /\.([^./]*?)$/g.exec(e);
  return t ? t[1] : ""
}

function s(e) {
  return o[a(e).toLowerCase()] || ""
}