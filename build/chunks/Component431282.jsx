/** Chunk was on web.js **/
/** chunk id: 431282, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V4: () => b,
  XE: () => y,
  gp: () => O
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk25441 = require("./25441.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk657707 = require("./657707.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk209613 = require("./209613.js"),
  Chunk475413 = require("./475413.jsx"),
  Chunk54482 = require("./54482.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = E(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function b(e) {
  var {
    id: t,
    label: n,
    sublabel: u,
    icon: _,
    hint: h,
    renderSubmenu: E
  } = e, b = g(e, ["id", "label", "sublabel", "icon", "hint", "renderSubmenu"]);
  let y = (0, o.JA)(t),
    {
      onFocus: O
    } = y,
    v = g(y, ["onFocus"]),
    {
      id: I
    } = (0, o.f$)(),
    T = i.useRef(null),
    [S, A] = i.useState(false),
    C = null != E;
  i.useLayoutEffect(() => {
    if (C) return (0, a.N)(I, e => {
      A(e === t)
    })
  }, [t, I, C]);
  let N = e => (0, r.jsxs)(d.kF, m(p({}, e, v, b), {
    ref: T,
    role: "button",
    look: l.zx.Looks.BLANK,
    size: l.zx.Sizes.NONE,
    innerClassName: f.menuItemInner,
    color: f.menuItemColor,
    themeColor: "none",
    fullWidth: true,
    onMouseEnter: () => {
      var t;
      null == e || null == (t = e.onMouseEnter) || t.call(e), O()
    },
    children: [(0, r.jsx)("div", {
      className: f.menuItemIcon,
      children: (0, r.jsx)(_, {
        size: "xs",
        color: "currentColor"
      })
    }), (0, r.jsxs)("div", {
      className: f.menuItemLabel,
      children: [(0, r.jsxs)("div", {
        children: [n, u]
      }), h]
    }), C && (0, r.jsx)(s.Fbu, {
      size: "xs",
      color: "currentColor"
    })]
  }));
  return C ? (0, r.jsx)(c.yRy, {
    targetElementRef: T,
    spacing: 0,
    renderPopout: E,
    shouldShow: S,
    onRequestClose: () => A(true),
    children: N
  }) : N()
}

function y(e) {
  let {
    id: t,
    children: n
  } = e, i = (0, u.Z)(t);
  return (0, r.jsx)(o.bG, {
    navigator: i,
    children: (0, r.jsx)(o.SJ, {
      children: e => {
        var {
          ref: t
        } = e, a = g(e, ["ref"]);
        return (0, r.jsx)("div", m(p({}, a), {
          ref: t,
          onMouseLeave: () => i.setFocus(null),
          children: n
        }))
      }
    })
  })
}

function O(e) {
  return (0, r.jsx)("div", {
    className: f.submenuPaddingContainer,
    children: (0, r.jsx)(c.v2r, p({
      variant: "fixed",
      hideScroller: true,
      onSelect: true
    }, e))
  })
}