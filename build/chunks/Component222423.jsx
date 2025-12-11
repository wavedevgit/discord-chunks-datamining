/** Chunk was on web.js **/
/** chunk id: 222423, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk410030 = require("./410030.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk30878 = require("./30878.js");
let u = "https://cdn.discordapp.com/assets/content/f814e4be3c27004f4e60c1bdad648ee24acfa9716c0be8048cc63b5b869e56a4.png",
  d = "https://cdn.discordapp.com/assets/content/e4ec02f7af5d01c8c168eb814823a94a6bf1ce440e70e35e5a6f18b0fdad3321.png";

function f(e) {
  let {
    className: t,
    size: n = "md"
  } = e, i = (0, o.ZP)() === s.BR.LIGHT ? d : u;
  return (0, r.jsx)("img", {
    className: a()(t, {
      [c.sm]: "sm" === n,
      [c.md]: "md" === n
    }),
    src: i,
    alt: l.intl.string(l.t.htEhYu)
  })
}