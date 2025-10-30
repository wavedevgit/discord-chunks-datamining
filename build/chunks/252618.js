/** Chunk was on web.js **/
/** chunk id: 252618, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  EM: () => b,
  PR: () => g,
  Tt: () => v,
  ZD: () => A,
  yY: () => I
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk574583 = require("./574583.js"),
  Chunk51835 = require("./51835.js"),
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
  _ = {
    count: 3,
    onlyWhenBlurred: false,
    interval: 1e3
  },
  p = (0, Chunk51835.F)(() => ({
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
  (0, o.j)(() => p.setState({
    notificationCount: e
  }))
}

function E(e) {
  return (0, o.j)(() => p.setState(t => ({
    titles: [e, ...t.titles]
  }))), () => {
    (0, o.j)(() => p.setState(t => ({
      titles: t.titles.filter(t => t !== e)
    })))
  }
}

function b(e) {
  let t = u(l({}, _, e), {
    id: f++
  });
  return t.count = Math.max(t.count, t.messages.length), p.setState(e => ({
    flashQueue: [...e.flashQueue, t]
  })), () => y(t.id)
}

function y(e) {
  p.setState(t => ({
    flashQueue: t.flashQueue.filter(t => t.id !== e)
  }))
}

function O() {
  p.setState({
    flashQueue: []
  })
}

function v(e) {
  r.useEffect(() => E(e), [...Object.values(e)])
}

function I(e) {
  return v(e), null
}

function S() {
  let [e, t] = p(e => {
    let {
      flashQueue: t
    } = e, n = h(e).filter(e => null != e).join(" | "), r = m(e);
    return ["".concat(r).concat(n), t[0]]
  }, Chunk574583.X), [n, a] = Chunk647438.useState(false), o = Chunk647438.useRef(0), s = null == exports ? true : exports.messages[Chunk731965.current % exports.messages.length];
  return Chunk647438.useEffect(() => {
    if (null == exports) {
      Chunk731965.current = 0, Chunk51835(false);
      return
    }
    if (document.hasFocus() && exports.onlyWhenBlurred) {
      y(exports.id), Chunk51835(false);
      return
    }
    let e = setInterval(() => {
      if (Chunk731965.current >= exports.count) {
        y(exports.id), Chunk51835(false);
        return
      }
      Chunk51835(e => !e || (o.current += 1, false))
    }, exports.interval);
    return () => clearInterval(module)
  }, [exports]), require ? s : module
}

function T() {
  Chunk647438.useEffect(() => {
    function e() {
      O()
    }
    return document.addEventListener("focusin", module, {
      capture: true
    }), () => document.removeEventListener("focusin", module, {
      capture: true
    })
  }, [])
}

function A() {
  let {
    skipsSettingDefaultPageTitle: e
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
  T();
  let t = S();
  Chunk647438.useEffect(() => {
    let n = exports === d.base;
    module && require || (document.title = exports)
  }, [module, exports])
}