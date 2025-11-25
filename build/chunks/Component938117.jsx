/** Chunk was on web.js **/
/** chunk id: 938117, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk2052 = require("./2052.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk716161 = require("./716161.js"),
  Chunk634041 = require("./634041.js"),
  Chunk647177 = require("./647177.js"),
  Chunk672339 = require("./672339.js"),
  Chunk898531 = require("./898531.js"),
  Chunk636188 = require("./636188.jsx"),
  Chunk678916 = require("./678916.js"),
  Chunk981631 = require("./981631.js"),
  Chunk869783 = require("./869783.js"),
  Chunk388032 = require("./388032.jsx");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T(e) {
  let {
    onLearnMore: t,
    selectedBackgroundOption: y,
    onSelectBackgroundOption: v,
    currentDeviceId: T,
    responsiveBackgroundOptions: S,
    className: A
  } = e, C = (0, a.e7)([l.default], () => l.default.getCurrentUser()), [N, R] = i.useState(null), P = (0, p.Z)(), D = c.ZP.canUseCustomBackgrounds(C);
  i.useEffect(() => {
    (0, u.XV)()
  }, []);
  let w = (0, a.cj)([d.Z], () => D ? d.Z.videoFilterAssets : {}),
    L = i.useMemo(() => Object.values(w).filter(e => e.type === m.xV.BACKGROUND), [w]),
    x = (0, s.O)(),
    M = {
      isVideoBackgroundSupported: P,
      onSelectBackgroundOption: v,
      selectedBackgroundOption: y
    },
    k = i.useRef(M);
  i.useEffect(() => {
    k.current = M
  }), i.useEffect(() => {
    let {
      isVideoBackgroundSupported: e,
      onSelectBackgroundOption: t,
      selectedBackgroundOption: n
    } = k.current;
    e ? (0, _.FU)(n, T, {
      track: false
    }).catch(() => t(null)) : null != n && t(null)
  }, [T]);
  let j = function(e, t) {
      let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
      return new Promise(async r => {
        try {
          let r = await (0, u.Ff)(e, m.xV.BACKGROUND);
          U(r), (0, f.g5)(r, t.type === E.m.MP4, n), R(null)
        } catch (e) {
          R(e.message)
        }
        r()
      })
    },
    U = e => {
      v(e), (0, _.FU)(e, T, {
        location: x.location
      }).then(() => R(null)).catch(() => {
        R(b.intl.string(b.t.ejrSLe)), (0, _.FU)(null, T, {
          location: x.location
        })
      })
    },
    G = () => {
      (0, o.ZDy)(async () => {
        let {
          default: e
        } = await n.e("87200").then(n.bind(n, 592163));
        return n => (0, r.jsx)(e, I(O({}, n), {
          onLearnMore: t,
          analyticsSource: I(O({}, x.location), {
            object: g.qAy.BUTTON_CTA
          })
        }))
      })
    };
  return P ? (0, r.jsx)("div", {
    className: A,
    children: (0, r.jsx)(o.gNt, {
      label: b.intl.string(b.t.lZTUPs),
      errorMessage: N,
      children: (0, r.jsx)(h.Z, {
        canUseCustomBackgrounds: D,
        customBackgroundOptions: L,
        selectedOption: y,
        onSelectOption: U,
        onUpsellClick: G,
        onAddBackgroundImage: j,
        responsive: S
      })
    })
  }) : null
}