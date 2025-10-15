/** Chunk was on web.js **/
/** chunk id: 168463, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk502762 = require("./502762.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk982629 = require("./982629.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let h = false;

function m(e) {
  let {
    variant: t = "vertical"
  } = e, [d, _] = i.useState(false), m = "vertical" === t, g = i.useCallback(() => {
    o.default.track(l.rMx.USER_PROFILE_REPORT_GAME_DETECTION, {
      game_detected: false,
      game_detection_correct: true,
      application_id: null
    }), _(true)
  }, []), E = i.useCallback(() => {
    o.default.track(l.rMx.USER_PROFILE_REPORT_GAME_DETECTION, {
      game_detected: false,
      game_detection_correct: false,
      application_id: null
    }), (0, a.ZDy)(async () => {
      let {
        default: e
      } = await n.e("82077").then(n.bind(n, 953848));
      return t => (0, r.jsx)(e, p(f({}, t), {
        onSubmitted: () => _(true)
      }))
    })
  }, []);
  return (i.useEffect(() => () => {
    d && (h = true)
  }, [d]), d) ? (0, r.jsx)(s.Z.Overlay, {
    className: u.container,
    children: (0, r.jsx)("div", {
      className: m ? u.contentVertical : u.contentHorizontal,
      children: (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: u.description,
        children: c.intl.string(c.t.X0TrNQ)
      })
    })
  }) : (0, r.jsx)(s.Z.Overlay, {
    className: u.container,
    children: (0, r.jsxs)("div", {
      className: m ? u.contentVertical : u.contentHorizontal,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: u.description,
        children: c.intl.string(c.t.bHpUca)
      }), (0, r.jsxs)("div", {
        className: m ? u.buttonsVertical : u.buttonsHorizontal,
        children: [(0, r.jsx)(a.Button, {
          text: c.intl.string(c.t.p89ACt),
          size: "sm",
          variant: "secondary",
          onClick: g,
          fullWidth: m
        }), (0, r.jsx)(a.Button, {
          text: c.intl.string(c.t.gm1Vej),
          size: "sm",
          variant: "secondary",
          onClick: E,
          fullWidth: m
        })]
      })]
    })
  })
}

function g(e) {
  let {
    variant: t
  } = e;
  return h ? null : (0, r.jsx)(m, {
    variant: t
  })
}