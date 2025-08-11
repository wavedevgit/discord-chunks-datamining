/** Chunk was on 66317 **/
/** chunk id: 976845, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  D2: () => h,
  ZP: () => C,
  eg: () => O
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk60488 = require("./60488.jsx"),
  Chunk934248 = require("./934248.jsx"),
  Chunk780384 = require("./780384.js"),
  Chunk410030 = require("./410030.js"),
  Chunk738134 = require("./738134.js");

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function b(e, t) {
  if (null == e) return {};
  var r, n, a = function(e, t) {
    if (null == e) return {};
    var r, n, a = {},
      l = Object.keys(e);
    for (n = 0; n < l.length; n++) r = l[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
    return a
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
  }
  return a
}
let f = {
    width: 60,
    height: 60
  },
  h = 3e3,
  O = {
    EARN: .25,
    SPEND: .3
  },
  y = e => {
    let {
      currentAnimationType: t,
      animationTypeRef: r,
      onSetAnimationDurationMS: n,
      play: l,
      getDuration: i
    } = e, o = i(), u = null != o ? 1e3 * o : h;
    (0, a.useEffect)(() => {
      null !== t && t !== r.current && (r.current = t, l())
    }, [t, l, r]), (0, a.useEffect)(() => {
      n(u)
    }, [n, u])
  },
  p = e => {
    var {
      currentAnimationType: t
    } = e, r = b(e, ["currentAnimationType"]);
    let a = (0, i.D)(null != t ? t : "earn"),
      {
        Component: l
      } = a;
    return y(s({
      currentAnimationType: t
    }, r, b(a, ["Component"]))), <l{...d(s({}, f), {
      size: "custom",
      className: c.orbsLottie,
      useLottieDefaultColors: true
    })} />
  },
  m = e => {
    var {
      currentAnimationType: t
    } = e, r = b(e, ["currentAnimationType"]);
    let a = (0, l.v)(null != t ? t : "earn"),
      {
        Component: i
      } = a;
    return y(s({
      currentAnimationType: t
    }, r, b(a, ["Component"]))), <i{...d(s({}, f), {
      size: "custom",
      className: c.orbsLottie,
      useLottieDefaultColors: true
    })} />
  },
  C = e => {
    let t = (0, u.ZP)();
    return (0, o.ap)(t) ? <m{...s({}, e)} /> : <p{...s({}, e)} />
  }