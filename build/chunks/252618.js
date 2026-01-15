/** Chunk was on web.js **/
/** chunk id: 252618, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  EM: () => b,
  PR: () => g,
  Tt: () => v,
  ZD: () => C,
  yY: () => S
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk55160 = require("./55160.js"),
  Chunk748521 = require("./748521.js"),
  Chunk731965 = require("./731965.js");

function s(e, t, n) {
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
      s(e, t, n[t])
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
    base: require("./358085.js").isPlatformEmbedded ? true : "Discord"
  },
  f = 0,
  p = {
    count: 3,
    onlyWhenBlurred: false,
    interval: 1e3
  },
  _ = (0, Chunk748521.F)(() => ({
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
  (0, o.j)(() => _.setState({
    notificationCount: e
  }))
}

function E(e) {
  return (0, o.j)(() => _.setState(t => ({
    titles: [e, ...t.titles]
  }))), () => {
    (0, o.j)(() => _.setState(t => ({
      titles: t.titles.filter(t => t !== e)
    })))
  }
}

function b(e) {
  let t = u(l({}, p, e), {
    id: f++
  });
  return t.count = Math.max(t.count, t.messages.length), _.setState(e => ({
    flashQueue: [...e.flashQueue, t]
  })), () => y(t.id)
}

function y(e) {
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

function S(e) {
  return v(e), null
}

function I() {
  let [e, t] = _(e => {
    let {
      flashQueue: t
    } = e, n = h(e).filter(e => null != e).join(" | "), r = m(e);
    return ["".concat(r).concat(n), t[0]]
  }, i.X), [n, a] = r.useState(false), o = r.useRef(0), s = null == t ? true : t.messages[o.current % t.messages.length];
  return r.useEffect(() => {
    if (null == t) {
      o.current = 0, a(false);
      return
    }
    if (document.hasFocus() && t.onlyWhenBlurred) {
      y(t.id), a(false);
      return
    }
    let e = setInterval(() => {
      if (o.current >= t.count) {
        y(t.id), a(false);
        return
      }
      a(e => !e || (o.current += 1, false))
    }, t.interval);
    return () => clearInterval(e)
  }, [t]), n ? s : e
}

function T() {
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

function C() {
  let {
    skipsSettingDefaultPageTitle: e
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
  T();
  let t = I();
  r.useEffect(() => {
    let n = t === d.base;
    e && n || (document.title = t)
  }, [e, t])
}