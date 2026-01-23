/** Chunk was on web.js **/
/** chunk id: 726249, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  HI: () => A,
  HU: () => v,
  cu: () => T,
  iA: () => y,
  sF: () => g
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk942381 = require("./942381.js"),
  Chunk265690 = require("./265690.js"),
  Chunk121894 = require("./121894.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let d = {
    base: require("./723702.js").isPlatformEmbedded ? true : "Discord"
  },
  f = 0,
  p = {
    count: 3,
    onlyWhenBlurred: false,
    interval: 1e3
  },
  _ = (0, Chunk265690.h)(() => ({
    titles: [d],
    notificationCount: true,
    flashQueue: []
  }));

function h(e) {
  let t, n, r;
  for (let i of e.titles) {
    if (null != t && null != n) break;
    t = null != t ? t : i.base, n = null != n ? n : i.location, r = null != r ? r : i.subsection
  }
  return [t, r, n]
}

function m(e) {
  let {
    notificationCount: t
  } = e;
  return null == t || 0 === t ? "" : t < 0 ? "• " : "(".concat(t, ") ")
}

function g(e) {
  (0, s.r)(() => _.setState({
    notificationCount: e
  }))
}

function E(e) {
  return (0, s.r)(() => _.setState(t => ({
    titles: [e, ...t.titles]
  }))), () => {
    (0, s.r)(() => _.setState(t => ({
      titles: t.titles.filter(t => t !== e)
    })))
  }
}

function y(e) {
  let t = u(l({}, p, e), {
    id: f++
  });
  return t.count = Math.max(t.count, t.messages.length), _.setState(e => ({
    flashQueue: [...e.flashQueue, t]
  })), () => b(t.id)
}

function b(e) {
  _.setState(t => ({
    flashQueue: t.flashQueue.filter(t => t.id !== e)
  }))
}

function O() {
  _.setState({
    flashQueue: []
  })
}

function v(e) {
  r.useEffect(() => E(e), [...Object.values(e)])
}

function A(e) {
  return v(e), null
}

function I() {
  let [e, t] = _(e => {
    let {
      flashQueue: t
    } = e, n = h(e).filter(e => null != e).join(" | "), r = m(e);
    return ["".concat(r).concat(n), t[0]]
  }, i.x), [n, a] = r.useState(false), s = r.useRef(0), o = null == t ? true : t.messages[s.current % t.messages.length];
  return r.useEffect(() => {
    if (null == t) {
      s.current = 0, a(false);
      return
    }
    if (document.hasFocus() && t.onlyWhenBlurred) {
      b(t.id), a(false);
      return
    }
    let e = setInterval(() => {
      if (s.current >= t.count) {
        b(t.id), a(false);
        return
      }
      a(e => !e || (s.current += 1, false))
    }, t.interval);
    return () => clearInterval(e)
  }, [t]), n ? o : e
}

function S() {
  r.useEffect(() => {
    function e() {
      O()
    }
    return document.addEventListener("focusin", e, {
      capture: true
    }), () => document.removeEventListener("focusin", e, {
      capture: true
    })
  }, [])
}

function T() {
  let {
    skipsSettingDefaultPageTitle: e
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
  S();
  let t = I();
  r.useEffect(() => {
    let n = t === d.base;
    e && n || (document.title = t)
  }, [e, t])
}