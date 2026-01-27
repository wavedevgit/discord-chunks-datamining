/** Chunk was on web.js **/
/** chunk id: 252453, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk708418 = require("./708418.js"),
  Chunk747243 = require("./747243.js"),
  Chunk582754 = require("./582754.js"),
  Chunk425763 = require("./425763.js"),
  Chunk647245 = require("./647245.js");
let c = (0, Chunk747243.eV)("keydown", e => !!(0, l.fR)(e) && (e.preventDefault(), true)),
  u = (0, Chunk747243.eV)("mousedown", e => false === e.type.indexOf("touch") && false !== e.type.indexOf("mouse") && ((0, s.ef)(false), true)),
  d = {
    backends: [{
      id: "html5",
      backend: Chunk708418.t,
      transition: u
    }, {
      id: "keyboard",
      backend: Chunk647245.Ay,
      context: {
        window,
        document
      },
      options: {
        onDndModeChanged: Chunk425763.ef,
        announcer: Chunk582754.OR
      },
      preview: true,
      transition: c
    }]
  };

function f(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)(a.QP, {
    options: d,
    children: t
  })
}