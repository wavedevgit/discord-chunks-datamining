/** Chunk was on web.js **/
/** chunk id: 151200, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk328731 = require("./328731.js"),
  Chunk442550 = require("./442550.js"),
  Chunk435439 = require("./435439.js"),
  Chunk206295 = require("./206295.js"),
  Chunk297781 = require("./297781.js"),
  Chunk313201 = require("./313201.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.js"),
  Chunk217440 = require("./217440.js"),
  Chunk72378 = require("./72378.js");

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
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function I(e) {
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
    return <r.Fragment>{<a.nn4 id={l}>{e}</a.nn4>}{<a.eee className={o()(t, n)} href={c} aria-describedby={l}>{s}</a.eee>}</r.Fragment>
  }
  let {
    onClick: c,
    ariaDescription: u
  } = null != i ? i : {};
  return <a.g$b.Provider value={null == c}>{null != c && null != u && <a.nn4 id={l}>{u}</a.nn4>}{<a.P3F onClick={c} aria-describedby={null == c ? true : l} className={o()(t, null != c && n)}>{s}</a.P3F>}</a.g$b.Provider>
}

function T(e) {
  var {
    clickable: t
  } = e, n = O(e, ["clickable"]);
  return <I{...y(E({}, n), {
    clickable: y(E({}, t), {
      ariaDescription: ""
    }),
    clickableClassName: m.clickable
  })} />
}

function S(e) {
  let {
    entry: t,
    channel: n,
    title: i,
    subtitle: m,
    thumbnailUrl: g,
    titleClickable: b,
    subtitleClickable: y,
    thumbnailClickable: O,
    providerIconProps: v,
    style: S = {}
  } = e, A = (0, f.Dt)(), {
    primaryColor: N,
    secondaryColor: C
  } = (0, u.Z)(g);
  return null != g && (S.background = "linear-gradient(45deg, ".concat(N, ", ").concat(C, ")")), <a.f6W theme={_.BR.DARK} disableAdaptiveTheme={true}>{e => (0, r.jsxs)("figure", {
      "aria-roledescription": p.intl.string(p.t.zFfUhI),
      "aria-labelledby": A,
      className: o()(h.container, e),
      style: S,
      children: [(0, r.jsx)(I, {
        className: h.thumbnailContainer,
        clickableClassName: h.clickable,
        clickable: O,
        children: (0, r.jsx)(l.f, {
          src: g,
          constrain: "width",
          size: 64,
          "aria-hidden": true
        })
      }), (0, r.jsxs)("div", {
        className: h.infoContainer,
        children: [(0, r.jsx)(s.Z, {
          channel: n,
          entry: t,
          className: h.users
        }), (0, r.jsx)(a.LZC, {
          size: 2
        }), (0, r.jsx)(T, {
          clickable: b,
          className: h.clickableText,
          children: (0, r.jsx)(a.X6q, {
            id: A,
            variant: "heading-md/medium",
            lineClamp: 1,
            className: o()(h.textPrimary, h.truncatedText),
            scaleFontToUserSetting: true,
            children: i
          })
        }), null != m ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(a.LZC, {
            size: 2
          }), (0, r.jsx)(T, {
            clickable: y,
            className: h.clickableText,
            children: (0, r.jsx)(a.Text, {
              variant: "text-sm/normal",
              className: o()(h.textSecondary, h.truncatedText),
              lineClamp: 1,
              scaleFontToUserSetting: true,
              children: m
            })
          })]
        }) : null, (0, r.jsx)(d.PZ, {
          className: h.badges,
          entry: t,
          location: d.Gt.EMBED
        })]
      }), (0, r.jsx)("div", {
        className: h.headerIcons,
        children: null != v ? (0, r.jsx)(c.Z, E({}, v)) : null
      })]
    })}</a.f6W>
}