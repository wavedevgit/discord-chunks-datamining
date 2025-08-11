/** Chunk was on 52030 **/
/** chunk id: 124860, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Cd: () => g,
  YR: () => p
}), require("./388685.js"), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk447097 = require("./447097.js"),
  Chunk873124 = require("./873124.js"),
  Chunk248902 = require("./248902.js"),
  Chunk160511 = require("./160511.js"),
  Chunk51693 = require("./51693.jsx"),
  Chunk973810 = require("./973810.js"),
  Chunk388032 = require("./388032.js");

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

function m(e, t) {
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

function g(e) {
  var t, n;
  let {
    mfaChallenge: h,
    mfaFinish: g,
    onEarlyClose: x,
    onClose: p,
    headerAlignStart: S,
    width: j = 440
  } = e, [b, y] = r.useState(null != (n = null == (t = h.methods[0]) ? true : t.type) ? n : "select"), [v, C] = r.useState(b), Z = async e => {
    let {
      mfaType: t,
      data: n
    } = e;
    await g({
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
  return <i.MyZ activeSlide={b} width={j} onSlideReady={C}>{<i.Mi4 id={"select"}><o.Z{...f({}, w)} /></i.Mi4>}{<i.Mi4 id={"webauthn"}><u.Z{...f({}, w)} /></i.Mi4>}{<i.Mi4 id={"totp"}><c.Z{...m(f({}, w), {
        isSlideReady: "totp" === v
      })} /></i.Mi4>}{<i.Mi4 id={"sms"}><d.Z{...m(f({}, w), {
        isSlideReady: "sms" === v
      })} /></i.Mi4>}{<i.Mi4 id={"backup"}><s.Z{...m(f({}, w), {
        isSlideReady: "backup" === v
      })} /></i.Mi4>}{<i.Mi4 id={"password"}><a.Z{...m(f({}, w), {
        isSlideReady: "password" === v
      })} /></i.Mi4>}</i.MyZ>
}

function x(e) {
  let {
    mfaChallenge: t,
    finish: n,
    transitionState: r,
    onClose: s
  } = e;
  return <i.Y0X transitionState={r} size={i.CgR.SMALL} aria-label={h.intl.string(h.t.saHocH)} parentComponent={"MFAModal"}><g mfaChallenge={t} mfaFinish={n} onClose={s} onEarlyClose={s} /></i.Y0X>
}

function p(e, t, n) {
  (0, i.h7j)(n => <x{...f({
    finish: t,
    mfaChallenge: e
  }, n)} />, {
    onCloseCallback: () => {
      n(Error(h.intl.string(h.t.N2yb9f)))
    }
  })
}