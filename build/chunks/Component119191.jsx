/** Chunk was on web.js **/
/** chunk id: 119191, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  bi: () => g,
  sI: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk15285 = require("./15285.js"),
  Chunk523527 = require("./523527.js"),
  Chunk942405 = require("./942405.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk994322 = require("./994322.js"),
  Chunk22802 = require("./22802.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk352143 = require("./352143.js");

function m(e, t, n) {
  let {
    highlightAdminWarningIfElevated: i,
    useFlexboxLayout: a,
    keybindClassName: s
  } = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
  return (0, r.jsx)(E, {
    keybind: e,
    message: t,
    messageWithoutKeybind: n,
    highlightAdminWarningIfElevated: i,
    useFlexboxLayout: a,
    keybindClassName: s
  })
}
let g = (e, t) => (0, r.jsx)(r.Fragment, {
  children: _.intl.format(t, {
    keybind: e,
    keybindHook: (t, n) => (0, r.jsx)(a.e7I, {
      shortcut: e,
      className: h.w,
      keyClassName: h.bx
    }, n)
  })
});

function E(e) {
  let {
    keybind: t,
    message: n,
    messageWithoutKeybind: m,
    highlightAdminWarningIfElevated: g = false,
    useFlexboxLayout: E = false,
    keybindClassName: y
  } = e, b = (0, d.F)(), O = (0, i.bG)([s.Ay], () => {
    let e = s.Ay.getVisibleGame();
    return null != e && e.elevated && s.Ay.canShowAdminWarning
  }), v = (0, l.NP)();
  return O ? (0, r.jsx)(a.Text, {
    variant: "text-xxs/semibold",
    color: g ? "text-feedback-warning" : "text-muted",
    children: v ? _.intl.format(_.t.MVS9pV, {
      onSettingsClick: e => {
        e.stopPropagation(), (0, o.A)(true, true), (0, u.openUserSettings)(c.X.OVERLAY_PANEL, {
          section: p.nc_.OVERLAY
        })
      }
    }) : _.intl.string(_.t.PIeSHF)
  }) : b ? E ? (0, r.jsx)("div", {
    className: h.FH,
    children: _.intl.format(n, {
      keybind: t,
      keybindHook: e => (0, r.jsx)(f.G, {
        keybind: t,
        className: y
      }, t.join("+"))
    })
  }) : (0, r.jsx)(r.Fragment, {
    children: _.intl.format(n, {
      keybind: t,
      keybindHook: e => (0, r.jsx)(f.b, {
        keybind: t
      }, t.join("+"))
    })
  }) : m
}