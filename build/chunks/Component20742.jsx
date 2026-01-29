/** Chunk was on web.js **/
/** chunk id: 20742, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V6: () => D,
  rQ: () => w
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk827734 = require("./827734.js"),
  Chunk508770 = require("./508770.jsx"),
  Chunk815021 = require("./815021.jsx"),
  Chunk315629 = require("./315629.jsx"),
  Chunk608250 = require("./608250.jsx"),
  Chunk978495 = require("./978495.js"),
  Chunk534514 = require("./534514.jsx"),
  Chunk911608 = require("./911608.jsx"),
  Chunk331322 = require("./331322.jsx"),
  Chunk834730 = require("./834730.jsx"),
  Chunk22856 = require("./22856.js"),
  Chunk22789 = require("./22789.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = I(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function S(e) {
  let {
    shouldColorMix: t = false
  } = e, {
    dismissable: n,
    onClose: i
  } = (0, g.k)();
  returnfalse === n ? null : (0, r.jsx)(c.J, {
    onClick: i,
    variant: t ? "color-mix" : true
  })
}

function T(e) {
  let {
    leading: t,
    trailing: n,
    hasGradient: i,
    children: a
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [null != t && (0, r.jsx)("div", {
      className: E.headerLeading,
      children: t
    }), a, (0, r.jsxs)("div", {
      className: E.headerTrailing,
      children: [null != n && n, (0, r.jsx)(S, {
        shouldColorMix: i
      })]
    })]
  })
}

function C(e) {
  let {
    leading: t,
    trailing: n,
    hasGradient: i,
    children: a
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [null != t && (0, r.jsx)("div", {
      className: o()(E.headerLeading, E.headerLeadingAbsolute),
      children: t
    }), a, (0, r.jsxs)("div", {
      className: o()(E.headerTrailing, E.headerTrailingAbsolute),
      children: [null != n && n, (0, r.jsx)(S, {
        shouldColorMix: i
      })]
    })]
  })
}

function N(e) {
  let {
    leading: t,
    trailing: n,
    hasGradient: a,
    children: s
  } = e, [l, c] = i.useState(24), [u, d] = i.useState(24), f = i.useRef(null), p = i.useRef(null);
  return i.useLayoutEffect(() => {
    let e = new ResizeObserver(() => {
      let e = 0,
        t = 0;
      if (null != f && null != f.current) {
        let n = f.current.getBoundingClientRect();
        e = Math.max(e, n.height), t = Math.max(t, n.width)
      }
      if (null != p && null != p.current) {
        let n = p.current.getBoundingClientRect();
        e = Math.max(e, n.height), t = Math.max(t, n.width)
      }
      d(Math.ceil(t)), c(Math.ceil(e))
    });
    return null != f.current && e.observe(f.current), null != p.current && e.observe(p.current), () => e.disconnect()
  }, []), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      ref: f,
      className: o()(E.headerLeading, E.headerLeadingAbsolute),
      children: t
    }), (0, r.jsx)("div", {
      className: E.headerLeadingSpacer,
      style: {
        height: l,
        width: u
      }
    }), s, (0, r.jsx)("div", {
      className: E.headerTrailingSpacer,
      style: {
        height: l,
        width: u
      }
    }), (0, r.jsxs)("div", {
      ref: p,
      className: o()(E.headerTrailing, E.headerTrailingAbsolute),
      children: [null != n && n, (0, r.jsx)(S, {
        shouldColorMix: a
      })]
    })]
  })
}

function w(e) {
  let {
    gradientColor: t,
    graphic: n,
    badge: i,
    badgePosition: a = "top",
    title: s,
    titleTextVariant: l,
    subtitle: c,
    alignCenter: m = false,
    leading: y,
    trailing: O,
    progressBarProps: v
  } = e, {
    headingId: A
  } = (0, g.k)(), I = null != t, S = (0, f.Oy)(n), w = m ? S ? C : N : T, D = null != n && (0, r.jsx)("div", {
    className: o()(E.headerGraphic, {
      [E.headerGraphicAnimated]: S
    }),
    children: (0, r.jsx)("div", {
      className: E.headerGraphicContainer,
      children: (0, r.jsx)(d.v, b({}, n))
    })
  }), L = (0, r.jsx)(p.D, {
    className: E.headerTitle,
    id: A,
    variant: null != l ? l : "heading-lg/semibold",
    color: "text-strong",
    children: s
  });
  "end" === a && (L = (0, r.jsxs)(h.B, {
    direction: "horizontal",
    gap: 8,
    align: "center",
    children: [L, (0, r.jsx)(R, {
      badge: i,
      position: a
    })]
  }));
  let x = null != n ? D : L,
    M = (0, r.jsx)("header", {
      className: o()(E.section, E.header, {
        [E.headerCentered]: m
      }),
      children: (0, r.jsxs)(h.B, {
        gap: 8,
        children: [(0, r.jsx)("div", {
          className: E.headerLayout,
          children: (0, r.jsx)(w, {
            leading: y,
            trailing: O,
            hasGradient: I,
            children: (0, r.jsxs)("div", {
              className: E.headerMain,
              children: [null != v && (0, r.jsx)("div", {
                className: E.headerStepIndicator,
                children: (0, r.jsx)(_.z, b({}, v))
              }), x]
            })
          })
        }), "top" === a && (0, r.jsx)(R, {
          badge: i,
          position: a
        }), null != n && null != s && L, null != c && (0, r.jsx)(P, {
          subtitle: c
        })]
      })
    });
  return I ? (0, r.jsx)(u.h, {
    color: t,
    className: E.headerGradient,
    children: M
  }) : M
}

function R(e) {
  let {
    badge: t,
    position: n
  } = e;
  if (null == t) return null;
  let i = (0, l.U)(t);
  return (0, r.jsx)("div", {
    className: E.headerBadge,
    "data-position": n,
    children: (0, r.jsx)(l.E, b({}, i))
  })
}

function P(e) {
  let {
    subtitle: t
  } = e;
  if (null == t) return null;
  let n = (0, r.jsx)(m.E, {
      className: E.headerSubtitle,
      variant: "text-md/normal",
      color: "text-subtle",
      children: "object" == typeof t && "text" in t ? t.text : t
    }),
    i = "object" == typeof t && "leadingIcon" in t ? t.leadingIcon : true;
  return (0, r.jsxs)("div", {
    className: E.headerSubtitleWrapper,
    children: [null != i && (0, r.jsx)(i, {
      className: E.headerSubtitleIcon,
      color: s.A.colors.TEXT_SUBTLE,
      size: "sm"
    }), n]
  })
}

function D(e) {
  let {
    gradientColor: t,
    graphic: n,
    badge: i,
    title: a,
    subtitle: o
  } = e, s = A(e, ["gradientColor", "graphic", "badge", "title", "subtitle"]);
  return (0, r.jsx)(w, v(b({}, s), {
    gradientColor: t,
    graphic: n,
    badge: i,
    title: a,
    titleTextVariant: "heading-xl/semibold",
    subtitle: o,
    alignCenter: true
  }))
}