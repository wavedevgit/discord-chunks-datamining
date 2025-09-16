/** Chunk was on web.js **/
/** chunk id: 555830, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk483517 = require("./483517.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk571818 = require("./571818.js");

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

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let m = new Set;

function g(e) {
  var t;
  let {
    activity: f,
    variant: p = "vertical"
  } = e, [g, E] = i.useState(false), b = "vertical" === p, y = i.useCallback(e => {
    var t, n;
    e.stopPropagation(), s.default.track(c.rMx.USER_PROFILE_REPORT_GAME_DETECTION, {
      game_detected: true,
      game_detection_correct: true,
      application_id: null != (t = f.application_id) ? t : null
    }), (null != f.application_id || "" !== f.name) && m.add(null != (n = f.application_id) ? n : f.name), E(true)
  }, [f.application_id, f.name]), O = i.useCallback(e => {
    var t;
    e.stopPropagation(), s.default.track(c.rMx.USER_PROFILE_REPORT_GAME_DETECTION, {
      game_detected: true,
      game_detection_correct: false,
      application_id: null != (t = f.application_id) ? t : null
    }), (0, o.ZDy)(async () => {
      let {
        default: e
      } = await n.e("82077").then(n.bind(n, 953848));
      return t => (0, r.jsx)(e, h(_({}, t), {
        detectedActivity: f,
        onSubmitted: () => {
          if (null != f.application_id || "" !== f.name) {
            var e;
            m.add(null != (e = f.application_id) ? e : f.name)
          }
          E(true)
        }
      }))
    })
  }, [f]);
  return g ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.Z, {}), (0, r.jsx)("div", {
      className: d.container,
      children: (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: d.thankYouText,
        children: u.intl.string(u.t.X0TrNT)
      })
    })]
  }) : m.has(null != (t = f.application_id) ? t : f.name) ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.Z, {}), (0, r.jsx)("div", {
      className: d.container,
      children: (0, r.jsxs)("div", {
        className: b ? d.contentVertical : d.contentHorizontal,
        children: [(0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          className: d.prompt,
          children: u.intl.string(u.t["9g7v6e"])
        }), (0, r.jsxs)("div", {
          className: b ? d.buttonsVertical : d.buttonsHorizontal,
          children: [(0, r.jsx)(a.zx, {
            size: a.zx.Sizes.SMALL,
            look: a.zx.Looks.FILLED,
            color: a.zx.Colors.PRIMARY,
            onClick: y,
            className: b ? d.buttonVertical : d.buttonHorizontal,
            children: u.intl.string(u.t.p89ACg)
          }), (0, r.jsx)(a.zx, {
            size: a.zx.Sizes.SMALL,
            look: a.zx.Looks.FILLED,
            color: a.zx.Colors.PRIMARY,
            onClick: O,
            className: b ? d.buttonVertical : d.buttonHorizontal,
            children: u.intl.string(u.t.gm1Ven)
          })]
        })]
      })
    })]
  })
}