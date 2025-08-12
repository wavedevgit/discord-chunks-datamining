/** Chunk was on 9646 **/
/** chunk id: 618373, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594190 = require("./594190.js"),
  Chunk809357 = require("./809357.js"),
  Chunk44359 = require("./44359.jsx"),
  Chunk388032 = require("./388032.jsx");

function u(e, t, n, r) {
  return (0, i.jsx)(d, {
    keybind: e,
    message: t,
    messageWithoutKeybind: n,
    highlightAdminWarningIfElevated: r
  })
}

function d(e) {
  let {
    keybind: t,
    message: n,
    messageWithoutKeybind: u,
    highlightAdminWarningIfElevated: d = false
  } = e, p = (0, a.o)();
  return (0, r.e7)([l.ZP], () => {
    let e = l.ZP.getVisibleGame();
    return null != e && e.elevated && l.ZP.canShowAdminWarning
  }) ? (0, i.jsx)(o.Text, {
    variant: "text-xxs/semibold",
    color: d ? "text-feedback-warning" : "text-muted",
    children: c.intl.string(c.t.PIeSHB)
  }) : p ? (0, i.jsx)(i.Fragment, {
    children: c.intl.format(n, {
      keybind: t,
      keybindHook: e => (0, i.jsx)(s.Z, {
        keybind: t
      }, t.join("+"))
    })
  }) : u
}