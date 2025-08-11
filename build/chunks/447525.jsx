/** Chunk was on web.js **/
/** chunk id: 447525, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./704826.js"), require("./35282.js"), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk660199 = require("./660199.js"),
  Chunk738286 = require("./738286.js");

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

function d(e, t) {
  return "type" in e && "timestamp" === e.type ? <f{...u(l({}, t), {
    timestamp: e.parsed
  })} /> : null
}

function f(e) {
  var t;
  let {
    timestamp: n,
    replace: s
  } = e, l = e => {
    let {
      timestamp: t,
      format: r
    } = e, i = null != t ? Math.floor(t.getTime() / 1e3) : n.timestamp, a = null != r ? r : n.format;
    s((0, o.He)(i, a))
  };
  return <div className={a.container}>{<i.Wrb value={n.parsed} onSelect={e => {
        l({
          timestamp: e.toDate()
        })
      }} />}{<i.MGJ value={n.parsed} onChange={e => {
        l({
          timestamp: e.toDate()
        })
      }} />}{<i.FXm options={Object.entries(o.Qh).map(e => {
        let [t, r] = e;
        return {
          name: r(n.parsed),
          value: t
        }
      })} value={null != (t = n.format) ? t : o.K_} size={i.FXm.Sizes.SMALL} onChange={e => {
        let {
          value: t
        } = e;
        l({
          format: t
        })
      }} />}</div>
}