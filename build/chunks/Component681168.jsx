/** Chunk was on 20941 **/
/** chunk id: 681168, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
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

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function x(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e) {
  let {
    className: t,
    clickableClassName: n,
    clickable: l,
    children: s
  } = e, o = (0, m.GV)();
  if (null != l && "href" in l) {
    let {
      ariaDescription: e,
      href: c
    } = l;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(i.AC4, {
        id: o,
        children: e
      }), (0, r.jsx)(i.MzZ, {
        className: a()(t, n),
        href: c,
        "aria-describedby": o,
        children: s
      })]
    })
  }
  let {
    onClick: c,
    ariaDescription: u
  } = null != l ? l : {};
  return (0, r.jsxs)(i.gmh.Provider, {
    value: null == c,
    children: [null != c && null != u && (0, r.jsx)(i.AC4, {
      id: o,
      children: u
    }), (0, r.jsx)(i.DUT, {
      onClick: c,
      "aria-describedby": null == c ? true : o,
      className: a()(t, null != c && n),
      children: s
    })]
  })
}

function v(e) {
  let {
    clickable: t
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, r, l, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
      return a
    }
    if (a = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          a = Object.getOwnPropertyNames(e);
        for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }(e, ["clickable"]);
  return (0, r.jsx)(y, x(g({}, n), {
    clickable: x(g({}, t), {
      ariaDescription: ""
    }),
    clickableClassName: b.v
  }))
}

function j(e) {
  let {
    entry: t,
    channel: n,
    title: l,
    subtitle: b,
    thumbnailUrl: x,
    titleClickable: j,
    subtitleClickable: C,
    thumbnailClickable: _,
    providerIconProps: A,
    style: O = {}
  } = e, E = (0, m.GV)(), {
    primaryColor: S,
    secondaryColor: N
  } = (0, u.A)(x);
  return null != x && (O.background = "linear-gradient(45deg, ".concat(S, ", ").concat(N, ")")), (0, r.jsx)(i.NPJ, {
    theme: f.NJ.DARK,
    disableAdaptiveTheme: true,
    children: e => (0, r.jsxs)("figure", {
      "aria-roledescription": p.intl.string(p.t.zFfUhF),
      "aria-labelledby": E,
      className: a()(h.kL, e),
      style: O,
      children: [(0, r.jsx)(y, {
        className: h.iT,
        clickableClassName: h.vk,
        clickable: _,
        children: (0, r.jsx)(o.V, {
          src: x,
          constrain: "width",
          size: 64,
          "aria-hidden": true
        })
      }), (0, r.jsxs)("div", {
        className: h.op,
        children: [(0, r.jsx)(s.A, {
          channel: n,
          entry: t,
          className: h.VV
        }), (0, r.jsx)(i.hKd, {
          size: 2
        }), (0, r.jsx)(v, {
          clickable: j,
          className: h.sd,
          children: (0, r.jsx)(i.Heading, {
            id: E,
            variant: "heading-md/medium",
            lineClamp: 1,
            className: a()(h.ek, h.IY),
            scaleFontToUserSetting: true,
            children: l
          })
        }), null != b ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(i.hKd, {
            size: 2
          }), (0, r.jsx)(v, {
            clickable: C,
            className: h.sd,
            children: (0, r.jsx)(i.Text, {
              variant: "text-sm/normal",
              className: a()(h.c1, h.IY),
              lineClamp: 1,
              scaleFontToUserSetting: true,
              children: b
            })
          })]
        }) : null, (0, r.jsx)(d.iT, {
          className: h.jp,
          entry: t,
          location: d.N5.EMBED
        })]
      }), (0, r.jsx)("div", {
        className: h.Y,
        children: null != A ? (0, r.jsx)(c.A, g({}, A)) : null
      })]
    })
  })
}