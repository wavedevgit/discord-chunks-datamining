/** Chunk was on web.js **/
/** chunk id: 37148, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => m,
  x: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk313666 = require("./313666.jsx"),
  Chunk793030 = require("./793030.js"),
  Chunk751334 = require("./751334.jsx"),
  Chunk587272 = require("./587272.js"),
  Chunk159691 = require("./159691.js"),
  Chunk667137 = require("./667137.js"),
  Chunk525751 = require("./525751.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e) {
  let {
    shouldColorMix: t = false
  } = e, {
    dismissable: n,
    onClose: i
  } = (0, f.v)();
  returnfalse === n ? null : (0, r.jsx)(d.PZ7, {
    onClick: i,
    variant: t ? "color-mix" : true
  })
}

function g(e) {
  let {
    leading: t,
    trailing: n,
    hasGradient: i,
    children: a
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [null != t && (0, r.jsx)("div", {
      className: _.headerLeading,
      children: t
    }), a, (0, r.jsxs)("div", {
      className: _.headerTrailing,
      children: [null != n && n, (0, r.jsx)(m, {
        shouldColorMix: i
      })]
    })]
  })
}

function E(e) {
  let {
    leading: t,
    trailing: n,
    hasGradient: i,
    children: a
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [null != t && (0, r.jsx)("div", {
      className: o()(_.headerLeading, _.headerLeadingAbsolute),
      children: t
    }), a, (0, r.jsxs)("div", {
      className: o()(_.headerTrailing, _.headerTrailingAbsolute),
      children: [null != n && n, (0, r.jsx)(m, {
        shouldColorMix: i
      })]
    })]
  })
}

function b(e) {
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
      className: o()(_.headerLeading, _.headerLeadingAbsolute),
      children: t
    }), (0, r.jsx)("div", {
      className: _.headerLeadingSpacer,
      style: {
        height: l,
        width: u
      }
    }), s, (0, r.jsx)("div", {
      className: _.headerTrailingSpacer,
      style: {
        height: l,
        width: u
      }
    }), (0, r.jsxs)("div", {
      ref: p,
      className: o()(_.headerTrailing, _.headerTrailingAbsolute),
      children: [null != n && n, (0, r.jsx)(m, {
        shouldColorMix: a
      })]
    })]
  })
}

function y(e) {
  let {
    gradientColor: t,
    graphic: n,
    badge: i,
    title: a,
    titleTextVariant: s,
    subtitle: d,
    alignCenter: p = false,
    leading: m,
    trailing: y
  } = e, {
    headingId: v
  } = (0, f.v)(), I = null != t, T = (0, u.MW)(n), S = p ? T ? E : b : g, A = null != n && (0, r.jsx)("div", {
    className: o()(_.headerGraphic, {
      [_.headerGraphicAnimated]: T
    }),
    children: (0, r.jsx)("div", {
      className: _.headerGraphicContainer,
      children: (0, r.jsx)(c.z, h({}, n))
    })
  }), C = (0, r.jsx)(l.X6q, {
    className: _.headerTitle,
    id: v,
    variant: null != s ? s : "heading-lg/semibold",
    color: "text-primary",
    children: a
  }), N = (0, r.jsx)(l.xvT, {
    className: _.headerSubtitle,
    variant: "text-md/normal",
    color: "text-secondary",
    children: d
  }), R = null != n ? A : C, P = (0, r.jsx)("header", {
    className: o()(_.section, _.header, {
      [_.headerCentered]: p
    }),
    children: (0, r.jsxs)(l.Kqy, {
      gap: 8,
      children: [(0, r.jsx)("div", {
        className: _.headerLayout,
        children: (0, r.jsx)(S, {
          leading: m,
          trailing: y,
          hasGradient: I,
          children: (0, r.jsx)("div", {
            className: _.headerMain,
            children: R
          })
        })
      }), (0, r.jsx)(O, {
        badge: i
      }), null != n && null != a && C, null != d && N]
    })
  });
  return I ? (0, r.jsx)(l.$1m, {
    color: t,
    className: _.headerGradient,
    children: P
  }) : P
}

function O(e) {
  let {
    badge: t
  } = e;
  if (null == t) return null;
  let n = (0, s.R)(t);
  return (0, r.jsx)("div", {
    className: _.headerBadge,
    children: (0, r.jsx)(s.C, h({}, n))
  })
}