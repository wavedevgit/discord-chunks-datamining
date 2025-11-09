/** Chunk was on web.js **/
/** chunk id: 618373, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594190 = require("./594190.js"),
  Chunk174609 = require("./174609.js"),
  Chunk865066 = require("./865066.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk809357 = require("./809357.js"),
  Chunk44359 = require("./44359.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk438540 = require("./438540.js");

function m(e, t, n) {
  let {
    highlightAdminWarningIfElevated: i,
    useFlexboxLayout: a,
    keybindClassName: o
  } = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
  return (0, r.jsx)(g, {
    keybind: e,
    message: t,
    messageWithoutKeybind: n,
    highlightAdminWarningIfElevated: i,
    useFlexboxLayout: a,
    keybindClassName: o
  })
}

function g(e) {
  let {
    keybind: t,
    message: n,
    messageWithoutKeybind: m,
    highlightAdminWarningIfElevated: g = false,
    useFlexboxLayout: E = false,
    keybindClassName: b
  } = e, y = (0, d.o)(), O = (0, i.e7)([o.ZP], () => {
    let e = o.ZP.getVisibleGame();
    return null != e && e.elevated && o.ZP.canShowAdminWarning
  }), v = (0, l.hi)();
  return O ? (0, r.jsx)(a.Text, {
    variant: "text-xxs/semibold",
    color: g ? "text-feedback-warning" : "text-muted",
    children: v ? p.intl.format(p.t.MVS9pV, {
      onSettingsClick: e => {
        e.stopPropagation(), (0, s.Z)(true, true), (0, u.openUserSettings)(c.n.OVERLAY_PANEL, {
          section: _.oAB.OVERLAY
        })
      }
    }) : p.intl.string(p.t.PIeSHF)
  }) : y ? E ? (0, r.jsx)("div", {
    className: h.keybindFlexboxLayout,
    children: p.intl.format(n, {
      keybind: t,
      keybindHook: e => (0, r.jsx)(f.l, {
        keybind: t,
        className: b
      }, t.join("+"))
    })
  }) : (0, r.jsx)(r.Fragment, {
    children: p.intl.format(n, {
      keybind: t,
      keybindHook: e => (0, r.jsx)(f.t, {
        keybind: t
      }, t.join("+"))
    })
  }) : m
}