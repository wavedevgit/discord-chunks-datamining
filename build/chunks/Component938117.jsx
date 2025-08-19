/** Chunk was on 66181 **/
/** chunk id: 938117, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
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

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e) {
  let {
    onLearnMore: t,
    selectedBackgroundOption: O,
    onSelectBackgroundOption: v,
    currentDeviceId: S,
    smallerBackgroundOptions: T,
    className: N
  } = e, I = (0, s.e7)([o.default], () => o.default.getCurrentUser()), [y, A] = r.useState(null), P = (0, g.Z)(), R = c.ZP.canUseCustomBackgrounds(I);
  r.useEffect(() => {
    (0, d.XV)()
  }, []);
  let D = (0, s.cj)([u.Z], () => R ? u.Z.videoFilterAssets : {}),
    Z = r.useMemo(() => Object.values(D).filter(e => e.type === f.xV.BACKGROUND), [D]),
    w = (0, l.O)(),
    k = {
      isVideoBackgroundSupported: P,
      onSelectBackgroundOption: v,
      selectedBackgroundOption: O
    },
    L = r.useRef(k);
  r.useEffect(() => {
    L.current = k
  }), r.useEffect(() => {
    let {
      isVideoBackgroundSupported: e,
      onSelectBackgroundOption: t,
      selectedBackgroundOption: n
    } = L.current;
    e ? (0, p.FU)(n, S, {
      track: false
    }).catch(() => t(null)) : null != n && t(null)
  }, [S]);
  let B = e => {
    v(e), (0, p.FU)(e, S, {
      location: w.location
    }).then(() => A(null)).catch(() => {
      A(_.intl.string(_.t.ejrSLS)), (0, p.FU)(null, S, {
        location: w.location
      })
    })
  };
  return P ? (0, i.jsxs)(a.xJW, {
    title: _.intl.string(_.t.lZTUPj),
    className: N,
    children: [null != y ? (0, i.jsx)(a.kzN, {
      className: j.videoBackgroundError,
      children: y
    }) : null, (0, i.jsx)(h.Z, {
      canUseCustomBackgrounds: R,
      customBackgroundOptions: Z,
      selectedOption: O,
      onSelectOption: B,
      onUpsellClick: () => {
        (0, a.ZDy)(async () => {
          let {
            default: e
          } = await n.e("87200").then(n.bind(n, 592163));
          return n => (0, i.jsx)(e, C(E({}, n), {
            onLearnMore: t,
            analyticsSource: C(E({}, w.location), {
              object: b.qAy.BUTTON_CTA
            })
          }))
        })
      },
      onAddBackgroundImage: function(e, t) {
        let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
        return new Promise(async i => {
          try {
            let i = await (0, d.Ff)(e, f.xV.BACKGROUND);
            B(i), (0, m.g5)(i, t.type === x.m.MP4, n), A(null)
          } catch (e) {
            A(e.message)
          }
          i()
        })
      },
      smallerOptions: T
    })]
  }) : null
}