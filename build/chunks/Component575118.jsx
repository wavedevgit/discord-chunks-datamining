/** Chunk was on web.js **/
/** chunk id: 575118, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  iM: () => D,
  xB: () => P
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk313666 = require("./313666.jsx"),
  Chunk307267 = require("./307267.jsx"),
  Chunk797202 = require("./797202.jsx"),
  Chunk950292 = require("./950292.jsx"),
  Chunk151108 = require("./151108.js"),
  Chunk409794 = require("./409794.jsx"),
  Chunk402453 = require("./402453.jsx"),
  Chunk821541 = require("./821541.jsx"),
  Chunk777207 = require("./777207.jsx"),
  Chunk624653 = require("./624653.js"),
  Chunk51766 = require("./51766.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
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

function S(e, t) {
  if (null == e) return {};
  var n, r, i = I(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function T(e) {
  let {
    shouldColorMix: t = false
  } = e, {
    dismissable: n,
    onClose: i
  } = (0, g.v)();
  returnfalse === n ? null : (0, r.jsx)(c.P, {
    onClick: i,
    variant: t ? "color-mix" : true
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
      className: E.headerLeading,
      children: t
    }), a, (0, r.jsxs)("div", {
      className: E.headerTrailing,
      children: [null != n && n, (0, r.jsx)(T, {
        shouldColorMix: i
      })]
    })]
  })
}

function A(e) {
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
      children: [null != n && n, (0, r.jsx)(T, {
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
      children: [null != n && n, (0, r.jsx)(T, {
        shouldColorMix: a
      })]
    })]
  })
}

function P(e) {
  let {
    gradientColor: t,
    graphic: n,
    badge: i,
    title: a,
    titleTextVariant: s,
    subtitle: l,
    alignCenter: c = false,
    leading: m,
    trailing: b,
    stepNumber: O,
    stepCount: v
  } = e, {
    headingId: S
  } = (0, g.v)(), {
    i18n: I
  } = (0, _.ZF)(), T = null != t, P = (0, f.MW)(n), D = c ? P ? A : N : C, x = null != n && (0, r.jsx)("div", {
    className: o()(E.headerGraphic, {
      [E.headerGraphicAnimated]: P
    }),
    children: (0, r.jsx)("div", {
      className: E.headerGraphicContainer,
      children: (0, r.jsx)(d.z, y({}, n))
    })
  }), L = (0, r.jsx)(p.X, {
    className: E.headerTitle,
    id: S,
    variant: null != s ? s : "heading-lg/semibold",
    color: "text-strong",
    children: a
  }), j = null != n ? x : L, M = (0, r.jsx)("header", {
    className: o()(E.section, E.header, {
      [E.headerCentered]: c
    }),
    children: (0, r.jsxs)(h.K, {
      gap: 8,
      children: [(0, r.jsx)("div", {
        className: E.headerLayout,
        children: (0, r.jsx)(D, {
          leading: m,
          trailing: b,
          hasGradient: T,
          children: (0, r.jsxs)("div", {
            className: E.headerMain,
            children: [null != O && null != v && (0, r.jsx)("div", {
              className: E.headerStepIndicator,
              children: (0, r.jsx)("span", {
                className: E.progressBar,
                style: {
                  width: "".concat(O / (v + 1) * 100, "%")
                },
                role: "progressbar",
                "aria-valuenow": O,
                "aria-valuemin": 1,
                "aria-valuemax": v,
                "aria-label": I.STEP_INDICATOR(O, v)
              })
            }), j]
          })
        })
      }), (0, r.jsx)(w, {
        badge: i
      }), null != n && null != a && L, null != l && (0, r.jsx)(R, {
        subtitle: l
      })]
    })
  });
  return T ? (0, r.jsx)(u.$, {
    color: t,
    className: E.headerGradient,
    children: M
  }) : M
}

function w(e) {
  let {
    badge: t
  } = e;
  if (null == t) return null;
  let n = (0, l.R)(t);
  return (0, r.jsx)("div", {
    className: E.headerBadge,
    children: (0, r.jsx)(l.C, y({}, n))
  })
}

function R(e) {
  let {
    subtitle: t
  } = e;
  if (null == t) return null;
  let n = (0, r.jsx)(m.x, {
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
      color: s.Z.colors.TEXT_SUBTLE,
      size: "sm"
    }), n]
  })
}

function D(e) {
  var {
    gradientColor: t,
    graphic: n,
    badge: i,
    title: a,
    subtitle: o
  } = e, s = S(e, ["gradientColor", "graphic", "badge", "title", "subtitle"]);
  return (0, r.jsx)(P, v(y({}, s), {
    gradientColor: t,
    graphic: n,
    badge: i,
    title: a,
    titleTextVariant: "heading-xl/semibold",
    subtitle: o,
    alignCenter: true
  }))
}