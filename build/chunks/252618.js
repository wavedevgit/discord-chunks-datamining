/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  EM: () => v,
  PR: () => g,
  Tt: () => O,
  ZD: () => N,
  yY: () => S
}), n(47120);
var r = n(192379),
  i = n(232713),
  o = n(65400),
  a = n(731965);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
    base: n(358085).isPlatformEmbedded ? void 0 : "Discord"
  },
  f = 0,
  p = {
    count: 3,
    onlyWhenBlurred: !1,
    interval: 1e3
  },
  _ = (0, o.F)(() => ({
    titles: [d],
    notificationCount: void 0,
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
  (0, a.j)(() => _.setState({
    notificationCount: e
  }))
}

function E(e) {
  return (0, a.j)(() => _.setState(t => ({
    titles: [e, ...t.titles]
  }))), () => {
    (0, a.j)(() => _.setState(t => ({
      titles: t.titles.filter(t => t !== e)
    })))
  }
}

function v(e) {
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

function y() {
  _.setState({
    flashQueue: []
  })
}

function O(e) {
  r.useEffect(() => E(e), [...Object.values(e)])
}

function S(e) {
  return O(e), null
}

function I() {
  let [e, t] = _(e => {
    let {
      flashQueue: t
    } = e, n = h(e).filter(e => null != e).join(" | "), r = m(e);
    return ["".concat(r).concat(n), t[0]]
  }, i.X), [n, o] = r.useState(!1), a = r.useRef(0), s = null == t ? void 0 : t.messages[a.current % t.messages.length];
  return r.useEffect(() => {
    if (null == t) {
      a.current = 0, o(!1);
      return
    }
    if (document.hasFocus() && t.onlyWhenBlurred) {
      b(t.id), o(!1);
      return
    }
    let e = setInterval(() => {
      if (a.current >= t.count) {
        b(t.id), o(!1);
        return
      }
      o(e => !e || (a.current += 1, !1))
    }, t.interval);
    return () => clearInterval(e)
  }, [t]), n ? s : e
}

function T() {
  r.useEffect(() => {
    function e() {
      y()
    }
    return document.addEventListener("focusin", e, {
      capture: !0
    }), () => document.removeEventListener("focusin", e, {
      capture: !0
    })
  }, [])
}

function N() {
  let {
    skipsSettingDefaultPageTitle: e
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  T();
  let t = I();
  r.useEffect(() => {
    let n = t === d.base;
    (!e || !n) && (document.title = t)
  }, [e, t])
}