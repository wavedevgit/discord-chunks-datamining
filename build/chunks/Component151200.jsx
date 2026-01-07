/** Chunk was on web.js **/
/** chunk id: 151200, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk328731 = require("./328731.jsx"),
  Chunk442550 = require("./442550.jsx"),
  Chunk435439 = require("./435439.jsx"),
  Chunk206295 = require("./206295.js"),
  Chunk297781 = require("./297781.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk151296 = require("./151296.js"),
  Chunk713012 = require("./713012.js");

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

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i = v(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function S(e) {
  let {
    className: t,
    clickableClassName: n,
    clickable: i,
    children: s
  } = e, l = (0, f.Dt)();
  if (null != i && "href" in i) {
    let {
      ariaDescription: e,
      href: c
    } = i;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.nn4, {
        id: l,
        children: e
      }), (0, r.jsx)(o.eee, {
        className: a()(t, n),
        href: c,
        "aria-describedby": l,
        children: s
      })]
    })
  }
  let {
    onClick: c,
    ariaDescription: u
  } = null != i ? i : {};
  return (0, r.jsxs)(o.g$b.Provider, {
    value: null == c,
    children: [null != c && null != u && (0, r.jsx)(o.nn4, {
      id: l,
      children: u
    }), (0, r.jsx)(o.P3F, {
      onClick: c,
      "aria-describedby": null == c ? true : l,
      className: a()(t, null != c && n),
      children: s
    })]
  })
}

function I(e) {
  var {
    clickable: t
  } = e, n = O(e, ["clickable"]);
  return (0, r.jsx)(S, y(E({}, n), {
    clickable: y(E({}, t), {
      ariaDescription: ""
    }),
    clickableClassName: h.clickable
  }))
}

function T(e) {
  let {
    entry: t,
    channel: n,
    title: i,
    subtitle: h,
    thumbnailUrl: g,
    titleClickable: b,
    subtitleClickable: y,
    thumbnailClickable: O,
    providerIconProps: v,
    style: T = {}
  } = e, C = (0, f.Dt)(), {
    primaryColor: A,
    secondaryColor: N
  } = (0, u.Z)(g);
  return null != g && (T.background = "linear-gradient(45deg, ".concat(A, ", ").concat(N, ")")), (0, r.jsx)(o.f6W, {
    theme: p.BR.DARK,
    disableAdaptiveTheme: true,
    children: e => (0, r.jsxs)("figure", {
      "aria-roledescription": _.intl.string(_.t.zFfUhF),
      "aria-labelledby": C,
      className: a()(m.container, e),
      style: T,
      children: [(0, r.jsx)(S, {
        className: m.thumbnailContainer,
        clickableClassName: m.clickable,
        clickable: O,
        children: (0, r.jsx)(l.f, {
          src: g,
          constrain: "width",
          size: 64,
          "aria-hidden": true
        })
      }), (0, r.jsxs)("div", {
        className: m.infoContainer,
        children: [(0, r.jsx)(s.Z, {
          channel: n,
          entry: t,
          className: m.users
        }), (0, r.jsx)(o.LZC, {
          size: 2
        }), (0, r.jsx)(I, {
          clickable: b,
          className: m.clickableText,
          children: (0, r.jsx)(o.Heading, {
            id: C,
            variant: "heading-md/medium",
            lineClamp: 1,
            className: a()(m.textPrimary, m.truncatedText),
            scaleFontToUserSetting: true,
            children: i
          })
        }), null != h ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(o.LZC, {
            size: 2
          }), (0, r.jsx)(I, {
            clickable: y,
            className: m.clickableText,
            children: (0, r.jsx)(o.Text, {
              variant: "text-sm/normal",
              className: a()(m.textSecondary, m.truncatedText),
              lineClamp: 1,
              scaleFontToUserSetting: true,
              children: h
            })
          })]
        }) : null, (0, r.jsx)(d.PZ, {
          className: m.badges,
          entry: t,
          location: d.Gt.EMBED
        })]
      }), (0, r.jsx)("div", {
        className: m.headerIcons,
        children: null != v ? (0, r.jsx)(c.Z, E({}, v)) : null
      })]
    })
  })
}