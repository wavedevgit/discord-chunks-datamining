/** Chunk was on web.js **/
/** chunk id: 520999, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S
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

function A(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e) {
  let {
    onLearnMore: t,
    selectedBackgroundOption: y,
    onSelectBackgroundOption: A,
    currentDeviceId: S,
    responsiveBackgroundOptions: I,
    className: T
  } = e, C = (0, a.bG)([l.default], () => l.default.getCurrentUser()), [N, R] = i.useState(null), w = (0, _.A)(), P = c.Ay.canUseCustomBackgrounds(C);
  i.useEffect(() => {
    (0, u.HR)()
  }, []);
  let D = (0, a.cf)([d.A], () => P ? d.A.videoFilterAssets : {}),
    x = i.useMemo(() => Object.values(D).filter(e => e.type === m.yZ.BACKGROUND), [D]),
    L = (0, o.p)(),
    j = {
      isVideoBackgroundSupported: w,
      onSelectBackgroundOption: A,
      selectedBackgroundOption: y
    },
    M = i.useRef(j);
  i.useEffect(() => {
    M.current = j
  }), i.useEffect(() => {
    let {
      isVideoBackgroundSupported: e,
      onSelectBackgroundOption: t,
      selectedBackgroundOption: n
    } = M.current;
    e ? (0, p.S1)(n, S, {
      track: false
    }).catch(() => t(null)) : null != n && t(null)
  }, [S]);
  let k = function(e, t) {
      let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
      return new Promise(async r => {
        try {
          let r = await (0, u.F9)(e, m.yZ.BACKGROUND);
          U(r), (0, f.D1)(r, t.type === E.a.MP4, n), R(null)
        } catch (e) {
          R(e.message)
        }
        r()
      })
    },
    U = e => {
      A(e), (0, p.S1)(e, S, {
        location: L.location
      }).then(() => R(null)).catch(() => {
        R(b.intl.string(b.t.ejrSLe)), (0, p.S1)(null, S, {
          location: L.location
        })
      })
    },
    G = () => {
      (0, s.mMO)(async () => {
        let {
          default: e
        } = await n.e("95743").then(n.bind(n, 210402));
        return n => (0, r.jsx)(e, v(O({}, n), {
          onLearnMore: t,
          analyticsSource: v(O({}, L.location), {
            object: g.ZSU.BUTTON_CTA
          })
        }))
      })
    };
  return w ? (0, r.jsx)("div", {
    className: T,
    children: (0, r.jsx)(s.D0$, {
      label: b.intl.string(b.t.lZTUPs),
      errorMessage: N,
      children: (0, r.jsx)(h.A, {
        canUseCustomBackgrounds: P,
        customBackgroundOptions: x,
        selectedOption: y,
        onSelectOption: U,
        onUpsellClick: G,
        onAddBackgroundImage: k,
        responsive: I
      })
    })
  }) : null
}