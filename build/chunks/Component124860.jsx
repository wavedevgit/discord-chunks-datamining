/** Chunk was on 52030 **/
/** chunk id: 124860, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Cd: () => m,
  YR: () => p
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk447097 = require("./447097.jsx"),
  Chunk873124 = require("./873124.jsx"),
  Chunk248902 = require("./248902.jsx"),
  Chunk160511 = require("./160511.jsx"),
  Chunk51693 = require("./51693.jsx"),
  Chunk973810 = require("./973810.jsx"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e) {
  var t, n;
  let {
    mfaChallenge: h,
    mfaFinish: m,
    onEarlyClose: x,
    onClose: p,
    headerAlignStart: S,
    width: j = 440
  } = e, [b, y] = r.useState(null != (n = null == (t = h.methods[0]) ? true : t.type) ? n : "select"), [v, C] = r.useState(b), Z = async e => {
    let {
      mfaType: t,
      data: n
    } = e;
    await m({
      mfaType: t,
      data: n,
      ticket: h.ticket
    }), null != p && p()
  }, w = {
    mfaChallenge: h,
    finish: Z,
    setSlide: y,
    onClose: x,
    headerAlignStart: S
  };
  return (0, l.jsxs)(i.MyZ, {
    activeSlide: b,
    width: j,
    onSlideReady: C,
    children: [(0, l.jsx)(i.Mi4, {
      id: "select",
      children: (0, l.jsx)(o.Z, f({}, w))
    }), (0, l.jsx)(i.Mi4, {
      id: "webauthn",
      children: (0, l.jsx)(u.Z, f({}, w))
    }), (0, l.jsx)(i.Mi4, {
      id: "totp",
      children: (0, l.jsx)(c.Z, g(f({}, w), {
        isSlideReady: "totp" === v
      }))
    }), (0, l.jsx)(i.Mi4, {
      id: "sms",
      children: (0, l.jsx)(d.Z, g(f({}, w), {
        isSlideReady: "sms" === v
      }))
    }), (0, l.jsx)(i.Mi4, {
      id: "backup",
      children: (0, l.jsx)(s.Z, g(f({}, w), {
        isSlideReady: "backup" === v
      }))
    }), (0, l.jsx)(i.Mi4, {
      id: "password",
      children: (0, l.jsx)(a.Z, g(f({}, w), {
        isSlideReady: "password" === v
      }))
    })]
  })
}

function x(e) {
  let {
    mfaChallenge: t,
    finish: n,
    transitionState: r,
    onClose: s
  } = e;
  return (0, l.jsx)(i.Y0X, {
    transitionState: r,
    size: i.CgR.SMALL,
    "aria-label": h.intl.string(h.t.saHocH),
    parentComponent: "MFAModal",
    children: (0, l.jsx)(m, {
      mfaChallenge: t,
      mfaFinish: n,
      onClose: s,
      onEarlyClose: s
    })
  })
}

function p(e, t, n) {
  (0, i.h7j)(n => (0, l.jsx)(x, f({
    finish: t,
    mfaChallenge: e
  }, n)), {
    onCloseCallback: () => {
      n(Error(h.intl.string(h.t.N2yb9f)))
    }
  })
}