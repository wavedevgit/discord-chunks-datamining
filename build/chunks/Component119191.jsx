/** Chunk was on 88474 **/
/** chunk id: 119191, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  bi: () => h,
  sI: () => y
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

function y(e, t, n) {
  let {
    highlightAdminWarningIfElevated: i,
    useFlexboxLayout: l,
    keybindClassName: a
  } = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
  return (0, r.jsx)(b, {
    keybind: e,
    message: t,
    messageWithoutKeybind: n,
    highlightAdminWarningIfElevated: i,
    useFlexboxLayout: l,
    keybindClassName: a
  })
}
let h = (e, t) => (0, r.jsx)(r.Fragment, {
  children: m.intl.format(t, {
    keybind: e,
    keybindHook: (t, n) => (0, r.jsx)(l.e7I, {
      shortcut: e,
      className: g.w,
      keyClassName: g.bx
    }, n)
  })
});

function b(e) {
  let {
    keybind: t,
    message: n,
    messageWithoutKeybind: y,
    highlightAdminWarningIfElevated: h = false,
    useFlexboxLayout: b = false,
    keybindClassName: A
  } = e, _ = (0, d.F)(), v = (0, i.bG)([a.Ay], () => {
    let e = a.Ay.getVisibleGame();
    return null != e && e.elevated && a.Ay.canShowAdminWarning
  }), O = (0, s.NP)();
  return v ? (0, r.jsx)(l.Text, {
    variant: "text-xxs/semibold",
    color: h ? "text-feedback-warning" : "text-muted",
    children: O ? m.intl.format(m.t.MVS9pV, {
      onSettingsClick: e => {
        e.stopPropagation(), (0, o.A)(true, true), (0, u.openUserSettings)(c.X.OVERLAY_PANEL, {
          section: p.nc_.OVERLAY
        })
      }
    }) : m.intl.string(m.t.PIeSHF)
  }) : _ ? b ? (0, r.jsx)("div", {
    className: g.FH,
    children: m.intl.format(n, {
      keybind: t,
      keybindHook: e => (0, r.jsx)(f.G, {
        keybind: t,
        className: A
      }, t.join("+"))
    })
  }) : (0, r.jsx)(r.Fragment, {
    children: m.intl.format(n, {
      keybind: t,
      keybindHook: e => (0, r.jsx)(f.b, {
        keybind: t
      }, t.join("+"))
    })
  }) : y
}