/** Chunk was on web.js **/
/** chunk id: 618373, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ae: () => g,
  QR: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk8280 = require("./8280.js");

function h(e, t, n) {
  let {
    highlightAdminWarningIfElevated: i,
    useFlexboxLayout: a,
    keybindClassName: o
  } = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
  return (0, r.jsx)(E, {
    keybind: e,
    message: t,
    messageWithoutKeybind: n,
    highlightAdminWarningIfElevated: i,
    useFlexboxLayout: a,
    keybindClassName: o
  })
}
let g = (e, t) => (0, r.jsx)(r.Fragment, {
  children: _.intl.format(t, {
    keybind: e,
    keybindHook: (t, n) => (0, r.jsx)(a.M2$, {
      shortcut: e,
      className: m.keyCombo,
      keyClassName: m.keyComboKey
    }, n)
  })
});

function E(e) {
  let {
    keybind: t,
    message: n,
    messageWithoutKeybind: h,
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
    children: v ? _.intl.format(_.t.MVS9pV, {
      onSettingsClick: e => {
        e.stopPropagation(), (0, s.Z)(true, true), (0, u.openUserSettings)(c.n.OVERLAY_PANEL, {
          section: p.oAB.OVERLAY
        })
      }
    }) : _.intl.string(_.t.PIeSHF)
  }) : y ? E ? (0, r.jsx)("div", {
    className: m.keybindFlexboxLayout,
    children: _.intl.format(n, {
      keybind: t,
      keybindHook: e => (0, r.jsx)(f.l, {
        keybind: t,
        className: b
      }, t.join("+"))
    })
  }) : (0, r.jsx)(r.Fragment, {
    children: _.intl.format(n, {
      keybind: t,
      keybindHook: e => (0, r.jsx)(f.t, {
        keybind: t
      }, t.join("+"))
    })
  }) : h
}