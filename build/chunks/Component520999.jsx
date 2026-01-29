/** Chunk was on 95782 **/
/** chunk id: 520999, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk212245 = require("./212245.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js"),
  Chunk987384 = require("./987384.js"),
  Chunk912630 = require("./912630.js"),
  Chunk965162 = require("./965162.js"),
  Chunk413339 = require("./413339.js"),
  Chunk952572 = require("./952572.js"),
  Chunk144830 = require("./144830.jsx"),
  Chunk577718 = require("./577718.js"),
  Chunk652215 = require("./652215.js"),
  Chunk693591 = require("./693591.js"),
  Chunk985018 = require("./985018.jsx");

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      s = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), s.forEach(function(t) {
      var s;
      s = n[t], t in e ? Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = s
    })
  }
  return e
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      n.push.apply(n, s)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e) {
  let {
    onLearnMore: t,
    selectedBackgroundOption: h,
    onSelectBackgroundOption: v,
    currentDeviceId: N,
    className: E
  } = e, _ = (0, l.bG)([a.default], () => a.default.getCurrentUser()), [S, P] = r.useState(null), D = (0, O.A)(), I = c.Ay.canUseCustomBackgrounds(_);
  r.useEffect(() => {
    (0, u.HR)()
  }, []);
  let T = (0, l.cf)([d.A], () => I ? d.A.videoFilterAssets : {}),
    k = r.useMemo(() => Object.values(T).filter(e => e.type === j.yZ.BACKGROUND), [T]),
    C = (0, o.p)(),
    w = {
      isVideoBackgroundSupported: D,
      onSelectBackgroundOption: v,
      selectedBackgroundOption: h
    },
    U = r.useRef(w);
  r.useEffect(() => {
    U.current = w
  }), r.useEffect(() => {
    let {
      isVideoBackgroundSupported: e,
      onSelectBackgroundOption: t,
      selectedBackgroundOption: n
    } = U.current;
    e ? (0, m.S1)(n, N, {
      track: false
    }).catch(() => t(null)) : null != n && t(null)
  }, [N]);
  let B = e => {
    v(e), (0, m.S1)(e, N, {
      location: C.location
    }).then(() => P(null)).catch(() => {
      P(x.intl.string(x.t.ejrSLe)), (0, m.S1)(null, N, {
        location: C.location
      })
    })
  };
  return D ? (0, s.jsx)("div", {
    className: E,
    children: (0, s.jsx)(i.D0$, {
      label: x.intl.string(x.t.lZTUPs),
      errorMessage: S,
      children: (0, s.jsx)(f.A, {
        canUseCustomBackgrounds: I,
        customBackgroundOptions: k,
        selectedOption: h,
        onSelectOption: B,
        onUpsellClick: () => {
          (0, i.mMO)(async () => {
            let {
              default: e
            } = await n.e("95743").then(n.bind(n, 210402));
            return n => (0, s.jsx)(e, A(y({}, n), {
              onLearnMore: t,
              analyticsSource: A(y({}, C.location), {
                object: g.ZSU.BUTTON_CTA
              })
            }))
          })
        },
        onAddBackgroundImage: function(e, t) {
          let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
          return new Promise(async s => {
            try {
              let s = await (0, u.F9)(e, j.yZ.BACKGROUND);
              B(s), (0, p.D1)(s, t.type === b.a.MP4, n), P(null)
            } catch (e) {
              P(e.message)
            }
            s()
          })
        }
      })
    })
  }) : null
}