/** Chunk was on web.js **/
/** chunk id: 430561, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GY: () => L,
  PI: () => A,
  RT: () => M,
  XM: () => D,
  bc: () => C,
  ls: () => x,
  xZ: () => N
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk765250 = require("./765250.js"),
  Chunk13245 = require("./13245.js"),
  Chunk493773 = require("./493773.js"),
  Chunk355863 = require("./355863.js"),
  Chunk237997 = require("./237997.js"),
  Chunk145597 = require("./145597.js"),
  Chunk444295 = require("./444295.js"),
  Chunk333031 = require("./333031.jsx"),
  Chunk618373 = require("./618373.jsx"),
  Chunk620954 = require("./620954.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk962967 = require("./962967.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function A(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: O.titleWrapper,
    children: (0, r.jsx)(c.Text, {
      variant: "text-xs/semibold",
      color: "header-primary",
      children: t
    })
  })
}
let C = 7e3;

function N(e, t) {
  return P((0, s.e7)([_.Z], () => _.Z.getWidget(e), [e]), t)
}
let R = (e, t) => Date.now() - e < t;

function P(e, t) {
  let n = i.useRef(null == e ? true : e.showExtrasHintTimestamp),
    [r, a] = i.useState(false),
    o = (0, s.e7)([p.default], () => p.default.isLocked((0, h.getPID)())),
    l = i.useRef(true);
  return i.useEffect(() => {
    let r = null == e ? true : e.showExtrasHintTimestamp;
    r !== n.current && (n.current = r, a(true), l.current = setTimeout(() => {
      a(false)
    }, t))
  }, [t, null == e ? true : e.showExtrasHintTimestamp]), (0, f.ZP)(() => {
    let n = null == e ? true : e.showExtrasHintTimestamp;
    return null != n && R(n, t) && (a(true), l.current = setTimeout(() => {
      a(false)
    }, t)), () => {
      null != l.current && clearTimeout(l.current)
    }
  }), r && o
}
let w = 8e3;

function D(e) {
  let {
    children: t,
    widgetId: n
  } = e, i = (0, s.e7)([_.Z], () => _.Z.getWidget(n), [n]), a = P(i, w), o = () => (0, E.Q)((0, b.P)(), y.t["1XA04e"], y.intl.string(y.t.uZZGzc), {
    useFlexboxLayout: true,
    highlightAdminWarningIfElevated: false,
    keybindClassName: O.keybind
  });
  return a ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(g.Z, {
      className: O.titleWrapperWithHint,
      children: (0, r.jsx)(c.P3F, {
        className: O.titleWrapperClickable,
        onClick: () => {
          null != i && (d.Z.setInputLocked(false, (0, h.getPID)()), (0, m.Ws)(i.type, {
            type: m.Qu.KEYBIND_HINT,
            value: m.bk.OVERLAY_UNLOCKED
          }))
        },
        children: (0, r.jsx)(c.Text, {
          variant: "text-xs/semibold",
          color: "header-primary",
          children: o()
        })
      })
    }), (0, r.jsx)("div", {
      className: O.extrasEmptySpace
    })]
  }) : (0, r.jsx)("div", {
    className: O.titleWrapper,
    children: (0, r.jsx)(c.Text, {
      variant: "text-xs/semibold",
      color: "header-primary",
      children: t
    })
  })
}

function x(e) {
  let {
    onClick: t
  } = e;
  if ((0, s.e7)([p.default], () => p.default.isLocked((0, h.getPID)()))) return null;
  let n = y.intl.string(y.t["3D5yo6"]);
  return (0, r.jsx)(c.ua7, {
    "data-migration-pending": true,
    text: n,
    "aria-label": n,
    children: e => (0, r.jsx)(c.P3F, S(I({}, e), {
      className: O.button,
      onClick: t,
      children: (0, r.jsx)(c.ewm, {
        size: "xxs",
        color: l.Z.colors.INTERACTIVE_ACTIVE
      })
    }))
  })
}

function L(e) {
  let {
    widgetId: t,
    showAllStreams: n
  } = e, i = n ? y.intl.string(y.t.q2B3rq) : y.intl.string(y.t.JKGi6u), a = () => {
    (0, u.zG)(t, {
      showAllStreams: !n
    })
  };
  return (0, s.e7)([p.default], () => p.default.isLocked((0, h.getPID)())) ? null : (0, r.jsx)(c.ua7, {
    "data-migration-pending": true,
    text: i,
    "aria-label": i,
    children: e => (0, r.jsx)(c.P3F, S(I({}, e), {
      className: o()(O.button, n && O.active),
      onClick: a,
      children: (0, r.jsx)(c.pzj, {
        size: "xxs",
        color: n ? l.Z.colors.BG_BRAND : l.Z.colors.INTERACTIVE_ACTIVE
      })
    }))
  })
}

function M(e) {
  let {
    id: t,
    pinned: n
  } = e, i = n ? y.intl.string(y.t.cSu80t) : y.intl.string(y.t.cM8Vnp), a = (0, s.e7)([p.default], () => p.default.isLocked((0, h.getPID)()));
  return (0, r.jsx)(c.ua7, {
    "data-migration-pending": true,
    text: i,
    "aria-label": i,
    children: e => (0, r.jsx)("div", S(I({}, e), {
      children: (0, r.jsx)(c.P3F, {
        className: o()(O.button, n && O.active),
        onClick: () => {
          a || (0, u.xh)(t)
        },
        children: (0, r.jsx)(c.k5M, {
          size: "xxs",
          color: n ? l.Z.colors.BG_BRAND : l.Z.colors.INTERACTIVE_ACTIVE
        })
      })
    }))
  })
}