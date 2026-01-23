/** Chunk was on web.js **/
/** chunk id: 681168, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk769840 = require("./769840.jsx"),
  Chunk263577 = require("./263577.jsx"),
  Chunk156603 = require("./156603.jsx"),
  Chunk176563 = require("./176563.js"),
  Chunk506326 = require("./506326.jsx"),
  Chunk915089 = require("./915089.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk787226 = require("./787226.js"),
  Chunk16312 = require("./16312.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = v(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function A(e) {
  let {
    className: t,
    clickableClassName: n,
    clickable: i,
    children: o
  } = e, l = (0, f.GV)();
  if (null != i && "href" in i) {
    let {
      ariaDescription: e,
      href: c
    } = i;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(s.AC4, {
        id: l,
        children: e
      }), (0, r.jsx)(s.MzZ, {
        className: a()(t, n),
        href: c,
        "aria-describedby": l,
        children: o
      })]
    })
  }
  let {
    onClick: c,
    ariaDescription: u
  } = null != i ? i : {};
  return (0, r.jsxs)(s.gmh.Provider, {
    value: null == c,
    children: [null != c && null != u && (0, r.jsx)(s.AC4, {
      id: l,
      children: u
    }), (0, r.jsx)(s.DUT, {
      onClick: c,
      "aria-describedby": null == c ? true : l,
      className: a()(t, null != c && n),
      children: o
    })]
  })
}

function I(e) {
  let {
    clickable: t
  } = e, n = O(e, ["clickable"]);
  return (0, r.jsx)(A, b(E({}, n), {
    clickable: b(E({}, t), {
      ariaDescription: ""
    }),
    clickableClassName: m.v
  }))
}

function S(e) {
  let {
    entry: t,
    channel: n,
    title: i,
    subtitle: m,
    thumbnailUrl: g,
    titleClickable: y,
    subtitleClickable: b,
    thumbnailClickable: O,
    providerIconProps: v,
    style: S = {}
  } = e, T = (0, f.GV)(), {
    primaryColor: C,
    secondaryColor: N
  } = (0, u.A)(g);
  return null != g && (S.background = "linear-gradient(45deg, ".concat(C, ", ").concat(N, ")")), (0, r.jsx)(s.NPJ, {
    theme: p.NJ.DARK,
    disableAdaptiveTheme: true,
    children: e => (0, r.jsxs)("figure", {
      "aria-roledescription": _.intl.string(_.t.zFfUhF),
      "aria-labelledby": T,
      className: a()(h.kL, e),
      style: S,
      children: [(0, r.jsx)(A, {
        className: h.iT,
        clickableClassName: h.vk,
        clickable: O,
        children: (0, r.jsx)(l.V, {
          src: g,
          constrain: "width",
          size: 64,
          "aria-hidden": true
        })
      }), (0, r.jsxs)("div", {
        className: h.op,
        children: [(0, r.jsx)(o.A, {
          channel: n,
          entry: t,
          className: h.VV
        }), (0, r.jsx)(s.hKd, {
          size: 2
        }), (0, r.jsx)(I, {
          clickable: y,
          className: h.sd,
          children: (0, r.jsx)(s.Heading, {
            id: T,
            variant: "heading-md/medium",
            lineClamp: 1,
            className: a()(h.ek, h.IY),
            scaleFontToUserSetting: true,
            children: i
          })
        }), null != m ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(s.hKd, {
            size: 2
          }), (0, r.jsx)(I, {
            clickable: b,
            className: h.sd,
            children: (0, r.jsx)(s.Text, {
              variant: "text-sm/normal",
              className: a()(h.c1, h.IY),
              lineClamp: 1,
              scaleFontToUserSetting: true,
              children: m
            })
          })]
        }) : null, (0, r.jsx)(d.iT, {
          className: h.jp,
          entry: t,
          location: d.N5.EMBED
        })]
      }), (0, r.jsx)("div", {
        className: h.Y,
        children: null != v ? (0, r.jsx)(c.A, E({}, v)) : null
      })]
    })
  })
}