/** Chunk was on web.js **/
/** chunk id: 410061, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./853839.js"), require("./570086.js"), require("./479048.js");
var Chunk473749 = require("./473749.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      i(e, t, n[t])
    })
  }
  return e
}

function o(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function s(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
async function l(e, t) {
  let n = await fetch(e, {
      signal: t
    }),
    r = await n.blob();
  null == t || t.throwIfAborted();
  let i = URL.createObjectURL(r);
  try {
    let e = new Image;
    return e.src = i, await Promise.race([e.decode(), new Promise((e, n) => {
      null != t && t.addEventListener("abort", () => {
        n(new DOMException("Aborted", "AbortError"))
      }, {
        once: true
      })
    })]), e
  } catch (e) {
    throw URL.revokeObjectURL(i), e
  }
}

function c(e) {
  URL.revokeObjectURL(e)
}

function u(e) {
  for (let t of e.values())
    if (2 !== t) returnfalse;
  returntrue
}
let d = (e, t) => {
  let n = r.useRef(0),
    [i, o] = r.useState(false),
    [d, f] = r.useState({}),
    p = r.useRef(new AbortController),
    [_, m] = r.useState(t),
    h = r.useRef(new Map),
    g = r.useRef(new Map),
    E = r.useRef(null == e ? true : e.skuId);
  return r.useEffect(() => {
    t && !_ && m(true)
  }, [t, _]), r.useEffect(() => {
    if ((null == e ? true : e.skuId) !== E.current) {
      var r;
      E.current = null == e ? true : e.skuId, m(t);
      let i = null != (r = null == e ? true : e.config.effects.every(e => {
        let {
          src: t
        } = e;
        return g.current.has(t)
      })) && r;
      if (o(i), n.current = 0, !i && null != e)
        for (let {
            src: t
          }
          of e.config.effects) h.current.has(t) || h.current.set(t, 0)
    }
  }, [e, t]), r.useEffect(() => {
    if (null == e || 0 === e.config.effects.length || false === _ || 0 !== n.current) return;
    n.current = 1;
    let t = p.current;
    e.config.effects.forEach(async e => {
      if (g.current.has(e.src)) h.current.set(e.src, 2), u(h.current) && (o(true), n.current = 2);
      else try {
        let r = await l(e.src, t.signal);
        if (t.signal.aborted) return;
        h.current.set(e.src, 2), g.current.set(e.src, r.src), f(t => s(a({}, t), {
          [e.src]: r
        })), u(h.current) && (o(true), n.current = 2)
      } catch (e) {}
    })
  }, [e, _]), r.useEffect(() => {
    let e = g.current,
      t = p.current;
    return () => {
      Array.from(e.values()).forEach(c), t.abort()
    }
  }, []), {
    loaded: i,
    layerData: d
  }
}