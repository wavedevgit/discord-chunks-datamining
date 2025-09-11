/** Chunk was on web.js **/
/** chunk id: 430561, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GY: () => D,
  PI: () => S,
  RT: () => x,
  XM: () => P,
  ls: () => w,
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
  Chunk355863 = require("./355863.js"),
  Chunk237997 = require("./237997.js"),
  Chunk145597 = require("./145597.js"),
  Chunk444295 = require("./444295.js"),
  Chunk333031 = require("./333031.jsx"),
  Chunk618373 = require("./618373.jsx"),
  Chunk620954 = require("./620954.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk246722 = require("./246722.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: y.titleWrapper,
    children: (0, r.jsx)(c.Text, {
      variant: "text-xs/semibold",
      color: "header-primary",
      children: t
    })
  })
}

function A() {
  let e = (0, Chunk442837.e7)([Chunk237997.default], () => Chunk237997.default.isLocked((0, Chunk145597.getPID)())),
    [t, n] = Chunk647438.useState(false === module);
  return Chunk647438.useEffect(() => {
    false === module && require(true)
  }, [module]), exports
}
let C = 6e3;

function N(e) {
  let t = (0, s.e7)([f.Z], () => f.Z.getWidget(e), [e]),
    n = i.useRef(null == t ? true : t.showExtrasHintTimestamp),
    [r, a] = i.useState(false),
    o = (0, s.e7)([_.default], () => _.default.isLocked((0, p.getPID)())),
    l = A();
  return i.useEffect(() => {
    let e = null == t ? true : t.showExtrasHintTimestamp;
    if (null != e && e !== n.current) {
      n.current = e, a(true);
      let t = setTimeout(() => {
        a(false)
      }, C);
      return () => clearTimeout(t)
    }
    a(false)
  }, [null == t ? true : t.showExtrasHintTimestamp]), r && o && !l
}

function R(e) {
  let t = i.useRef(null == e ? true : e.showExtrasHintTimestamp),
    n = (null == e ? true : e.showExtrasHintTimestamp) !== t.current,
    r = (0, s.e7)([_.default], () => _.default.isLocked((0, p.getPID)())),
    a = A();
  return n && r && !a
}

function P(e) {
  let {
    children: t,
    widgetId: n
  } = e, i = (0, s.e7)([f.Z], () => f.Z.getWidget(n), [n]), a = R(i), o = () => (0, g.Q)((0, E.P)(), b.t["1XA04e"], b.intl.string(b.t.uZZGzc), false);
  return a ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(m.Z, {
      className: y.titleWrapper,
      children: (0, r.jsx)(c.P3F, {
        className: y.titleWrapperClickable,
        onClick: () => {
          null != i && (d.Z.setInputLocked(false, (0, p.getPID)()), (0, h.Ws)(i.type, {
            type: h.Qu.KEYBIND_HINT,
            value: h.bk.OVERLAY_UNLOCKED
          }))
        },
        children: (0, r.jsx)(c.Text, {
          variant: "text-xs/semibold",
          color: "header-primary",
          children: o()
        })
      })
    }), (0, r.jsx)("div", {
      className: y.extrasEmptySpace
    })]
  }) : (0, r.jsx)("div", {
    className: y.titleWrapper,
    children: (0, r.jsx)(c.Text, {
      variant: "text-xs/semibold",
      color: "header-primary",
      children: t
    })
  })
}

function w(e) {
  let {
    onClick: t
  } = e;
  if ((0, s.e7)([_.default], () => _.default.isLocked((0, p.getPID)()))) return null;
  let n = b.intl.string(b.t["3D5yo6"]);
  return (0, r.jsx)(c.ua7, {
    text: n,
    "aria-label": n,
    children: e => (0, r.jsx)(c.P3F, T(v({}, e), {
      className: y.button,
      onClick: t,
      children: (0, r.jsx)(c.ewm, {
        size: "xxs",
        color: l.Z.colors.INTERACTIVE_ACTIVE
      })
    }))
  })
}

function D(e) {
  let {
    widgetId: t,
    showAllStreams: n
  } = e, i = n ? b.intl.string(b.t.q2B3rq) : b.intl.string(b.t.JKGi6u), a = () => {
    (0, u.zG)(t, {
      showAllStreams: !n
    })
  };
  return (0, s.e7)([_.default], () => _.default.isLocked((0, p.getPID)())) ? null : (0, r.jsx)(c.ua7, {
    text: i,
    "aria-label": i,
    children: e => (0, r.jsx)(c.P3F, T(v({}, e), {
      className: o()(y.button, n && y.active),
      onClick: a,
      children: (0, r.jsx)(c.pzj, {
        size: "xxs",
        color: n ? l.Z.colors.BG_BRAND : l.Z.colors.INTERACTIVE_ACTIVE
      })
    }))
  })
}

function x(e) {
  let {
    id: t,
    pinned: n
  } = e, i = n ? b.intl.string(b.t.cSu80t) : b.intl.string(b.t.cM8Vnp), a = (0, s.e7)([_.default], () => _.default.isLocked((0, p.getPID)()));
  return (0, r.jsx)(c.ua7, {
    text: i,
    "aria-label": i,
    children: e => (0, r.jsx)(c.P3F, T(v({}, e), {
      className: o()(y.button, n && y.active),
      onClick: () => {
        a || (0, u.xh)(t)
      },
      children: (0, r.jsx)(c.k5M, {
        size: "xxs",
        color: n ? l.Z.colors.BG_BRAND : l.Z.colors.INTERACTIVE_ACTIVE
      })
    }))
  })
}