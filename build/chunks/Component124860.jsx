/** Chunk was on 52030 **/
/** chunk id: 124860, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => b,
  MFAModal: () => p,
  Y: () => j
}), require("./388685.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk949399 = require("./949399.jsx"),
  Chunk447097 = require("./447097.jsx"),
  Chunk873124 = require("./873124.jsx"),
  Chunk248902 = require("./248902.jsx"),
  Chunk160511 = require("./160511.jsx"),
  Chunk51693 = require("./51693.jsx"),
  Chunk973810 = require("./973810.jsx"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e) {
  var t, n;
  let {
    mfaChallenge: h,
    mfaFinish: b,
    onEarlyClose: p,
    onClose: j,
    headerAlignStart: x,
    width: y = 440
  } = e, [S, v] = l.useState(null != (n = null == (t = h.methods[0]) ? true : t.type) ? n : "select"), [C, O] = l.useState(S), Z = async e => {
    let {
      mfaType: t,
      data: n
    } = e;
    await b({
      mfaType: t,
      data: n,
      ticket: h.ticket
    }), null != j && j()
  }, w = {
    mfaChallenge: h,
    finish: Z,
    setSlide: v,
    onClose: p,
    headerAlignStart: x
  };
  return (0, r.jsxs)(i.MyZ, {
    activeSlide: S,
    width: y,
    onSlideReady: O,
    children: [(0, r.jsx)(i.Mi4, {
      id: "select",
      children: (0, r.jsx)(c.Z, g({}, w))
    }), (0, r.jsx)(i.Mi4, {
      id: "webauthn",
      children: (0, r.jsx)(f.Z, g({}, w))
    }), (0, r.jsx)(i.Mi4, {
      id: "totp",
      children: (0, r.jsx)(d.Z, m(g({}, w), {
        isSlideReady: "totp" === C
      }))
    }), (0, r.jsx)(i.Mi4, {
      id: "sms",
      children: (0, r.jsx)(u.Z, m(g({}, w), {
        isSlideReady: "sms" === C
      }))
    }), (0, r.jsx)(i.Mi4, {
      id: "backup",
      children: (0, r.jsx)(s.Z, g({}, w))
    }), (0, r.jsx)(i.Mi4, {
      id: "backup_ack",
      children: (0, r.jsx)(a.Z, m(g({}, w), {
        isSlideReady: "backup_ack" === C
      }))
    }), (0, r.jsx)(i.Mi4, {
      id: "password",
      children: (0, r.jsx)(o.Z, m(g({}, w), {
        isSlideReady: "password" === C
      }))
    })]
  })
}

function p(e) {
  let {
    mfaChallenge: t,
    finish: n,
    transitionState: l,
    onClose: s
  } = e;
  return (0, r.jsx)(i.Y0X, {
    transitionState: l,
    size: i.CgR.SMALL,
    "aria-label": h.intl.string(h.t.saHocI),
    parentComponent: "MFAModal",
    children: (0, r.jsx)(b, {
      mfaChallenge: t,
      mfaFinish: n,
      onClose: s,
      onEarlyClose: s
    })
  })
}

function j(e, t, n) {
  (0, i.h7j)(n => (0, r.jsx)(p, g({
    finish: t,
    mfaChallenge: e
  }, n)), {
    onCloseCallback: () => {
      n(Error(h.intl.string(h.t.N2yb9a)))
    }
  })
}