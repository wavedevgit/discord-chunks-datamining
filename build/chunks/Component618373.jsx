/** Chunk was on web.js **/
/** chunk id: 618373, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594190 = require("./594190.js"),
  Chunk865066 = require("./865066.js"),
  Chunk809357 = require("./809357.js"),
  Chunk44359 = require("./44359.jsx"),
  Chunk388032 = require("./388032.jsx");

function d(e, t, n, i) {
  return (0, r.jsx)(f, {
    keybind: e,
    message: t,
    messageWithoutKeybind: n,
    highlightAdminWarningIfElevated: i
  })
}

function f(e) {
  let {
    keybind: t,
    message: n,
    messageWithoutKeybind: d,
    highlightAdminWarningIfElevated: f = false
  } = e, _ = (0, l.o)(), p = (0, i.e7)([o.ZP], () => {
    let e = o.ZP.getVisibleGame();
    return null != e && e.elevated && o.ZP.canShowAdminWarning
  }), h = (0, s.hi)();
  return p ? (0, r.jsx)(a.Text, {
    variant: "text-xxs/semibold",
    color: f ? "text-feedback-warning" : "text-muted",
    children: h ? u.intl.string(u.t.rqNDQk) : u.intl.string(u.t.PIeSHB)
  }) : _ ? (0, r.jsx)(r.Fragment, {
    children: u.intl.format(n, {
      keybind: t,
      keybindHook: e => (0, r.jsx)(c.Z, {
        keybind: t
      }, t.join("+"))
    })
  }) : d
}