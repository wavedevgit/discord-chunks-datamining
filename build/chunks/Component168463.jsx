/** Chunk was on web.js **/
/** chunk id: 168463, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk502762 = require("./502762.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk982629 = require("./982629.js");

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
let m = false;

function g(e) {
  let {
    variant: t = "vertical"
  } = e, [f, p] = i.useState(false), g = "vertical" === t, E = i.useCallback(() => {
    s.default.track(c.rMx.USER_PROFILE_REPORT_GAME_DETECTION, {
      game_detected: false,
      game_detection_correct: true,
      application_id: null
    }), p(true)
  }, []), b = i.useCallback(() => {
    s.default.track(c.rMx.USER_PROFILE_REPORT_GAME_DETECTION, {
      game_detected: false,
      game_detection_correct: false,
      application_id: null
    }), (0, o.ZDy)(async () => {
      let {
        default: e
      } = await n.e("82077").then(n.bind(n, 953848));
      return t => (0, r.jsx)(e, h(_({}, t), {
        onSubmitted: () => p(true)
      }))
    })
  }, []);
  return (i.useEffect(() => () => {
    f && (m = true)
  }, [f]), f) ? (0, r.jsx)(l.Z.Overlay, {
    className: d.container,
    children: (0, r.jsx)("div", {
      className: g ? d.contentVertical : d.contentHorizontal,
      children: (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: d.description,
        children: u.intl.string(u.t.X0TrNT)
      })
    })
  }) : (0, r.jsx)(l.Z.Overlay, {
    className: d.container,
    children: (0, r.jsxs)("div", {
      className: g ? d.contentVertical : d.contentHorizontal,
      children: [(0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: d.description,
        children: u.intl.string(u.t.bHpUcX)
      }), (0, r.jsxs)("div", {
        className: g ? d.buttonsVertical : d.buttonsHorizontal,
        children: [(0, r.jsx)(a.zx, {
          size: a.zx.Sizes.SMALL,
          look: a.zx.Looks.FILLED,
          color: a.zx.Colors.PRIMARY,
          onClick: E,
          className: g ? d.buttonVertical : d.buttonHorizontal,
          children: u.intl.string(u.t.p89ACg)
        }), (0, r.jsx)(a.zx, {
          size: a.zx.Sizes.SMALL,
          look: a.zx.Looks.FILLED,
          color: a.zx.Colors.PRIMARY,
          onClick: b,
          className: g ? d.buttonVertical : d.buttonHorizontal,
          children: u.intl.string(u.t.gm1Ven)
        })]
      })]
    })
  })
}

function E(e) {
  let {
    variant: t
  } = e;
  return m ? null : (0, r.jsx)(g, {
    variant: t
  })
}