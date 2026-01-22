/** Chunk was on web.js **/
/** chunk id: 315069, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function i(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      r(e, t, n[t])
    })
  }
  return e
}

function a(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : a(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
require.d(exports, {
  A: () => o
}), require("./896048.js");
class o {
  toJS() {
    return i({}, this)
  }
  set(e, t) {
    let n = this,
      r = n[e];
    return t instanceof Date && r instanceof Date && t.getTime() === r.getTime() ? this : r !== t ? new this.constructor(s(i({}, this), {
      [e]: t
    })) : this
  }
  merge(e) {
    let t = this,
      n = null;
    for (let r in e) {
      if (!e.hasOwnProperty(r)) continue;
      let a = t[r],
        s = e[r];
      s instanceof Date && a instanceof Date && s.getTime() === a.getTime() || a !== s && (null == n && (n = i({}, this)), n[r] = e[r])
    }
    return null != n ? new this.constructor(n) : this
  }
  update(e, t, n) {
    null == n && (n = t, t = true);
    let r = this,
      a = r[e];
    return a instanceof o || (a instanceof Array ? a = [...a] : a instanceof Object && (a = i({}, a))), true === a && (a = t), this.set(e, n(a))
  }
}