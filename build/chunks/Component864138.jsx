/** Chunk was on web.js **/
/** chunk id: 864138, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => o
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk206295 = require("./206295.js"),
  Chunk126278 = require("./126278.js");

function o(e) {
  let {
    children: t,
    imageUrl: n
  } = e, {
    primaryColor: o,
    secondaryColor: s
  } = (0, i.Z)("".concat(n, "?forColors"));
  return (0, r.jsxs)("div", {
    className: a.heroContainer,
    style: {
      backgroundImage: "linear-gradient(180deg, ".concat(o, " 0%, ").concat(s, " 100%), radial-gradient(99.17% 98.53% at 0% 1.47%, #deca7b 0%, #c89b3c 30.5%, #785a28 100%)")
    },
    children: [(0, r.jsx)("img", {
      src: n,
      alt: "",
      className: a.heroSplash
    }), t]
  })
}