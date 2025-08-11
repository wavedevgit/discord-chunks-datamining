/** Chunk was on web.js **/
/** chunk id: 67390, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk410030 = require("./410030.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.js"),
  Chunk150481 = require("./150481.js");
let u = "https://cdn.discordapp.com/assets/content/f814e4be3c27004f4e60c1bdad648ee24acfa9716c0be8048cc63b5b869e56a4.png",
  d = "https://cdn.discordapp.com/assets/content/e4ec02f7af5d01c8c168eb814823a94a6bf1ce440e70e35e5a6f18b0fdad3321.png";

function f(e) {
  let {
    className: t,
    size: n = "md"
  } = e, i = (0, a.ZP)() === s.BR.LIGHT ? d : u;
  return <img className={o()(t, {
      [c.sm]: "sm" === n,
      [c.md]: "md" === n
    })} src={i} alt={l.intl.string(l.t.htEhYm)} />
}