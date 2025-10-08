/** Chunk was on web.js **/
/** chunk id: 938117, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk388032 = require("./388032.jsx"),
  Chunk104544 = require("./104544.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e) {
  let {
    onLearnMore: t,
    selectedBackgroundOption: O,
    onSelectBackgroundOption: I,
    currentDeviceId: S,
    smallerBackgroundOptions: A,
    className: C
  } = e, N = (0, a.e7)([l.default], () => l.default.getCurrentUser()), [R, P] = i.useState(null), w = (0, p.Z)(), D = c.ZP.canUseCustomBackgrounds(N);
  i.useEffect(() => {
    (0, u.XV)()
  }, []);
  let L = (0, a.cj)([d.Z], () => D ? d.Z.videoFilterAssets : {}),
    x = i.useMemo(() => Object.values(L).filter(e => e.type === m.xV.BACKGROUND), [L]),
    M = (0, s.O)(),
    j = {
      isVideoBackgroundSupported: w,
      onSelectBackgroundOption: I,
      selectedBackgroundOption: O
    },
    k = i.useRef(j);
  i.useEffect(() => {
    k.current = j
  }), i.useEffect(() => {
    let {
      isVideoBackgroundSupported: e,
      onSelectBackgroundOption: t,
      selectedBackgroundOption: n
    } = k.current;
    e ? (0, _.FU)(n, S, {
      track: false
    }).catch(() => t(null)) : null != n && t(null)
  }, [S]);
  let U = function(e, t) {
      let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
      return new Promise(async r => {
        try {
          let r = await (0, u.Ff)(e, m.xV.BACKGROUND);
          G(r), (0, f.g5)(r, t.type === E.m.MP4, n), P(null)
        } catch (e) {
          P(e.message)
        }
        r()
      })
    },
    G = e => {
      I(e), (0, _.FU)(e, S, {
        location: M.location
      }).then(() => P(null)).catch(() => {
        P(b.intl.string(b.t.ejrSLS)), (0, _.FU)(null, S, {
          location: M.location
        })
      })
    },
    B = () => {
      (0, o.ZDy)(async () => {
        let {
          default: e
        } = await n.e("87200").then(n.bind(n, 592163));
        return n => (0, r.jsx)(e, T(v({}, n), {
          onLearnMore: t,
          analyticsSource: T(v({}, M.location), {
            object: g.qAy.BUTTON_CTA
          })
        }))
      })
    };
  return w ? (0, r.jsxs)(o.xJW, {
    title: b.intl.string(b.t.lZTUPj),
    className: C,
    children: [null != R ? (0, r.jsx)(o.kzN, {
      className: y.videoBackgroundError,
      children: R
    }) : null, (0, r.jsx)(h.Z, {
      canUseCustomBackgrounds: D,
      customBackgroundOptions: x,
      selectedOption: O,
      onSelectOption: G,
      onUpsellClick: B,
      onAddBackgroundImage: U,
      smallerOptions: A
    })]
  }) : null
}