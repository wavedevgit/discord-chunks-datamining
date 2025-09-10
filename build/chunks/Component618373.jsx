/** Chunk was on web.js **/
/** chunk id: 618373, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594190 = require("./594190.js"),
  Chunk809357 = require("./809357.js"),
  Chunk44359 = require("./44359.jsx"),
  Chunk388032 = require("./388032.jsx");

function u(e, t, n, i) {
  return (0, r.jsx)(d, {
    keybind: e,
    message: t,
    messageWithoutKeybind: n,
    highlightAdminWarningIfElevated: i
  })
}

function d(e) {
  let {
    keybind: t,
    message: n,
    messageWithoutKeybind: u,
    highlightAdminWarningIfElevated: d = false
  } = e, f = (0, s.o)();
  return (0, i.e7)([o.ZP], () => {
    let e = o.ZP.getVisibleGame();
    return null != e && e.elevated && o.ZP.canShowAdminWarning
  }) ? (0, r.jsx)(a.Text, {
    variant: "text-xxs/semibold",
    color: d ? "text-feedback-warning" : "text-muted",
    children: c.intl.string(c.t.PIeSHB)
  }) : f ? (0, r.jsx)(r.Fragment, {
    children: c.intl.format(n, {
      keybind: t,
      keybindHook: e => (0, r.jsx)(l.Z, {
        keybind: t
      }, t.join("+"))
    })
  }) : u
}