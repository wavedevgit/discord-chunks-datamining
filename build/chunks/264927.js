/** Chunk was on web.js **/
/** chunk id: 264927, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z7: () => c,
  l2: () => l,
  l6: () => o,
  lW: () => a,
  oz: () => s
});
var Chunk915089 = require("./915089.js"),
  Chunk985018 = require("./985018.jsx");
let a = (0, Chunk915089.Ld)(),
  o = (0, Chunk915089.Ld)(),
  s = (0, Chunk915089.Ld)(),
  l = (0, Chunk915089.Ld)();

function c() {
  [{
    id: a,
    text: ","
  }, {
    id: o,
    text: ","
  }, {
    id: s,
    text: i.intl.string(i.t.gHp0C4)
  }, {
    id: l,
    text: i.intl.string(i.t.SO93uu)
  }].forEach(e => {
    let {
      id: t,
      text: n
    } = e, r = document.getElementById(t);
    null == r && ((r = document.createElement("div")).setAttribute("id", t), r.innerText = n, r.style.display = "none", document.body.appendChild(r))
  })
}