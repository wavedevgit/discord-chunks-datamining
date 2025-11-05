/** Chunk was on web.js **/
/** chunk id: 430561, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GY: () => w,
  PI: () => I,
  RT: () => D,
  XM: () => R,
  bc: () => T,
  ls: () => P,
  xZ: () => S
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk765250 = require("./765250.js"),
  Chunk13245 = require("./13245.js"),
  Chunk493773 = require("./493773.js"),
  Chunk355863 = require("./355863.js"),
  Chunk444295 = require("./444295.js"),
  Chunk333031 = require("./333031.jsx"),
  Chunk610394 = require("./610394.js"),
  Chunk618373 = require("./618373.jsx"),
  Chunk620954 = require("./620954.js"),
  Chunk985149 = require("./985149.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk962967 = require("./962967.js");

function I(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: v.titleWrapper,
    children: (0, r.jsx)(u.Text, {
      variant: "text-xs/semibold",
      color: "header-primary",
      children: t
    })
  })
}
let T = 7e3;

function S(e, t) {
  return C((0, s.e7)([p.Z], () => p.Z.getWidget(e), [e]), t)
}
let A = (e, t) => Date.now() - e < t;

function C(e, t) {
  let n = i.useRef(null == e ? true : e.showExtrasHintTimestamp),
    [r, a] = i.useState(false),
    o = (0, y.Z)(),
    s = i.useRef(true);
  return i.useEffect(() => {
    let r = null == e ? true : e.showExtrasHintTimestamp;
    r !== n.current && (n.current = r, a(true), s.current = setTimeout(() => {
      a(false)
    }, t))
  }, [t, null == e ? true : e.showExtrasHintTimestamp]), (0, _.ZP)(() => {
    let n = null == e ? true : e.showExtrasHintTimestamp;
    return null != n && A(n, t) && (a(true), s.current = setTimeout(() => {
      a(false)
    }, t)), () => {
      null != s.current && clearTimeout(s.current)
    }
  }), r && o
}
let N = 8e3;

function R(e) {
  let {
    children: t,
    widgetId: n
  } = e, i = (0, s.e7)([p.Z], () => p.Z.getWidget(n), [n]), a = C(i, N), o = () => (0, E.Q)((0, b.P)(), O.t["1XA04X"], O.intl.string(O.t.uZZGzf), {
    useFlexboxLayout: true,
    highlightAdminWarningIfElevated: false,
    keybindClassName: v.keybind
  });
  return a ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(m.Z, {
      className: v.titleWrapperWithHint,
      children: (0, r.jsx)(u.P3F, {
        className: v.titleWrapperClickable,
        onClick: () => {
          null != i && (f.Z.setInputLocked(false, g.Z.getTargetPID()), (0, h.Ws)(i.type, {
            type: h.Qu.KEYBIND_HINT,
            value: h.bk.OVERLAY_UNLOCKED
          }))
        },
        children: (0, r.jsx)(u.Text, {
          variant: "text-xs/semibold",
          color: "header-primary",
          children: o()
        })
      })
    }), (0, r.jsx)("div", {
      className: v.extrasEmptySpace
    })]
  }) : (0, r.jsx)("div", {
    className: v.titleWrapper,
    children: (0, r.jsx)(u.Text, {
      variant: "text-xs/semibold",
      color: "header-primary",
      children: t
    })
  })
}

function P(e) {
  let {
    onClick: t
  } = e;
  if ((0, y.Z)()) return null;
  let n = O.intl.string(O.t["3D5yo/"]);
  return (0, r.jsx)(c.u, {
    text: n,
    "aria-label": n,
    children: (0, r.jsx)(u.P3F, {
      className: v.button,
      onClick: t,
      children: (0, r.jsx)(u.ewm, {
        size: "xxs",
        color: l.Z.colors.INTERACTIVE_ACTIVE
      })
    })
  })
}

function w(e) {
  let {
    widgetId: t,
    showAllStreams: n
  } = e, i = n ? O.intl.string(O.t.q2B3rh) : O.intl.string(O.t.JKGi6o), a = () => {
    (0, d.zG)(t, {
      showAllStreams: !n
    })
  };
  return (0, y.Z)() ? null : (0, r.jsx)(c.u, {
    text: i,
    "aria-label": i,
    children: (0, r.jsx)(u.P3F, {
      className: o()(v.button, n && v.active),
      onClick: a,
      children: (0, r.jsx)(u.pzj, {
        size: "xxs",
        color: n ? l.Z.colors.BG_BRAND : l.Z.colors.INTERACTIVE_ACTIVE
      })
    })
  })
}

function D(e) {
  let {
    id: t,
    pinned: n
  } = e, i = n ? O.intl.string(O.t.cSu80j) : O.intl.string(O.t.cM8Vnm), a = (0, y.Z)();
  return (0, r.jsx)(c.u, {
    text: i,
    "aria-label": i,
    asContainer: true,
    children: (0, r.jsx)(u.P3F, {
      className: o()(v.button, n && v.active),
      onClick: () => {
        a || (0, d.xh)(t)
      },
      children: (0, r.jsx)(u.k5M, {
        size: "xxs",
        color: n ? l.Z.colors.BG_BRAND : l.Z.colors.INTERACTIVE_ACTIVE
      })
    })
  })
}