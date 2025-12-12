/** Chunk was on web.js **/
/** chunk id: 206557, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk979714 = require("./979714.js"),
  Chunk87446 = require("./87446.js"),
  Chunk780384 = require("./780384.js"),
  Chunk79320 = require("./79320.js"),
  Chunk600795 = require("./600795.js");
let c = (0, Chunk87446.vQ)("keydown", e => !!(0, l.Tm)(e) && (e.preventDefault(), true)),
  u = (0, Chunk87446.vQ)("mousedown", e => false === e.type.indexOf("touch") && false !== e.type.indexOf("mouse") && ((0, s.Yk)(false), true)),
  d = {
    backends: [{
      id: "html5",
      backend: Chunk979714.PD,
      transition: u
    }, {
      id: "keyboard",
      backend: Chunk600795.ZP,
      context: {
        window,
        document
      },
      options: {
        onDndModeChanged: Chunk79320.Yk,
        announcer: Chunk780384.uv
      },
      preview: true,
      transition: c
    }]
  };

function f(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)(o.WG, {
    options: d,
    children: t
  })
}