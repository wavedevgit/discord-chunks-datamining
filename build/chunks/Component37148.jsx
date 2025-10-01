/** Chunk was on web.js **/
/** chunk id: 37148, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => p,
  x: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk313666 = require("./313666.jsx"),
  Chunk793030 = require("./793030.js"),
  Chunk159691 = require("./159691.js"),
  Chunk667137 = require("./667137.js"),
  Chunk525751 = require("./525751.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function p(e) {
  let {
    shouldColorMix: t = false
  } = e, {
    dismissable: n,
    onClose: i
  } = (0, u.v)();
  returnfalse === n ? null : (0, r.jsx)(c.PZ7, {
    onClick: i,
    variant: t ? "color-mix" : true
  })
}

function h(e) {
  let {
    leading: t,
    trailing: n,
    hasGradient: i,
    children: a
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [null != t && (0, r.jsx)("div", {
      className: d.headerLeading,
      children: t
    }), a, (0, r.jsxs)("div", {
      className: d.headerTrailing,
      children: [null != n && n, (0, r.jsx)(p, {
        shouldColorMix: i
      })]
    })]
  })
}

function m(e) {
  let {
    leading: t,
    trailing: n,
    hasGradient: i,
    children: a
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [null != t && (0, r.jsx)("div", {
      className: o()(d.headerLeading, d.headerLeadingAbsolute),
      children: t
    }), a, (0, r.jsxs)("div", {
      className: o()(d.headerTrailing, d.headerTrailingAbsolute),
      children: [null != n && n, (0, r.jsx)(p, {
        shouldColorMix: i
      })]
    })]
  })
}

function g(e) {
  let {
    leading: t,
    trailing: n,
    hasGradient: a,
    children: s
  } = e, [l, c] = i.useState(24), [u, f] = i.useState(24), _ = i.useRef(null), h = i.useRef(null);
  return i.useLayoutEffect(() => {
    let e = new ResizeObserver(() => {
      let e = 0,
        t = 0;
      if (null != _ && null != _.current) {
        let n = _.current.getBoundingClientRect();
        e = Math.max(e, n.height), t = Math.max(t, n.width)
      }
      if (null != h && null != h.current) {
        let n = h.current.getBoundingClientRect();
        e = Math.max(e, n.height), t = Math.max(t, n.width)
      }
      f(Math.ceil(t)), c(Math.ceil(e))
    });
    return null != _.current && e.observe(_.current), null != h.current && e.observe(h.current), () => e.disconnect()
  }, []), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      ref: _,
      className: o()(d.headerLeading, d.headerLeadingAbsolute),
      children: t
    }), (0, r.jsx)("div", {
      className: d.headerLeadingSpacer,
      style: {
        height: l,
        width: u
      }
    }), s, (0, r.jsx)("div", {
      className: d.headerTrailingSpacer,
      style: {
        height: l,
        width: u
      }
    }), (0, r.jsxs)("div", {
      ref: h,
      className: o()(d.headerTrailing, d.headerTrailingAbsolute),
      children: [null != n && n, (0, r.jsx)(p, {
        shouldColorMix: a
      })]
    })]
  })
}

function E(e) {
  let {
    gradientColor: t,
    graphic: n,
    badge: i,
    title: a,
    titleTextVariant: s,
    subtitle: c,
    alignCenter: f = false,
    leading: p,
    trailing: E
  } = e, {
    headingId: y
  } = (0, u.v)(), O = null != t, v = (0, l.MWt)(n), I = f ? v ? m : g : h, T = null != n && (0, r.jsx)("div", {
    className: o()(d.headerGraphic, {
      [d.headerGraphicAnimated]: v
    }),
    children: (0, r.jsx)("div", {
      className: d.headerGraphicContainer,
      children: (0, r.jsx)(l.zsu, _({}, n))
    })
  }), S = (0, r.jsx)(l.X6q, {
    className: d.headerTitle,
    id: y,
    variant: null != s ? s : "heading-lg/semibold",
    color: "text-primary",
    children: a
  }), A = (0, r.jsx)(l.xvT, {
    className: d.headerSubtitle,
    variant: "text-md/normal",
    color: "text-secondary",
    children: c
  }), C = null != n ? T : S, N = (0, r.jsx)("header", {
    className: o()(d.section, d.header, {
      [d.headerCentered]: f
    }),
    children: (0, r.jsxs)(l.Kqy, {
      gap: 8,
      children: [(0, r.jsx)("div", {
        className: d.headerLayout,
        children: (0, r.jsx)(I, {
          leading: p,
          trailing: E,
          hasGradient: O,
          children: (0, r.jsx)("div", {
            className: d.headerMain,
            children: C
          })
        })
      }), (0, r.jsx)(b, {
        badge: i
      }), null != n && null != a && S, null != c && A]
    })
  });
  return O ? (0, r.jsx)(l.$1m, {
    color: t,
    className: d.headerGradient,
    children: N
  }) : N
}

function b(e) {
  let {
    badge: t
  } = e;
  if (null == t) return null;
  let n = (0, s.R)(t);
  return (0, r.jsx)("div", {
    className: d.headerBadge,
    children: (0, r.jsx)(s.C, _({}, n))
  })
}