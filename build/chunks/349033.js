/** Chunk was on web.js **/
/** chunk id: 349033, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require.d(exports, {
  WU: () => c,
  Xe: () => o,
  ZP: () => u
}), require("./35282.js"), require("./388685.js"), require("./413496.js"), require("./433524.js"), require("./997841.js"), require("./539854.js");
let i = /.+/g,
  o = "NON_TOKEN";

function a(e, t, n) {
  if (null == t) return null;
  for (let r = 0; r < t.length; r++) {
    let i, o = t[r],
      a = s(e.match(o.regex), n);
    if (null != a) {
      let {
        cache: e
      } = o;
      if (null != e && null != (i = e.get(a[0])) && ((i = new c(i)).start = a.index), null == i) {
        if (i = new c(a, o.type), null != o.validator && !o.validator(i)) continue;
        null == e || (null == e ? true : e.has(a[0])) || e.set(a[0], i)
      }
      return i
    }
  }
  return null
}

function s(e, t) {
  if (null == e) return null;
  let n = [...e];
  return n.index = t, n
}
class l {
  reset() {
    this._rules = [], this._followers = {}, this._nonTokenType = o
  }
  addRule(e) {
    let t, {
        type: n,
        follows: r,
        validator: i
      } = e,
      {
        regex: o
      } = e;
    if ("^" !== o.source.charAt(0) && (o = new RegExp("^".concat(o.source), o.flags)), null != i && (t = new Map), null == r) return void this._rules.push({
      regex: o,
      type: n,
      validator: i,
      cache: t
    });
    r.forEach(e => {
      null == this._followers[e] && (this._followers[e] = []), this._followers[e].push({
        regex: o,
        type: n,
        validator: i,
        cache: t
      })
    })
  }
  tokenize(e) {
    let t, n = e,
      r = "",
      o = 0,
      a = [];
    for (; n.length > 0;) {
      let e = this._getMatch(n, t, o + r.length);
      null != e ? (null != r && "" !== r && a.push(new c(s(r.match(i), o), this._nonTokenType)), t = e, a.push(e), o += t.length + r.length, n = n.substring(t.length), r = "") : (r += n[0], n = n.substring(1))
    }
    return null != r && "" !== r && a.push(new c(s(r.match(i), o), this._nonTokenType)), a
  }
  clearCache() {
    for (let e in this._rules.forEach(e => {
        var t;
        return null == (t = e.cache) ? true : t.clear()
      }), this._followers) this._followers[module].forEach(e => {
      var t;
      return null == (t = e.cache) ? true : t.clear()
    })
  }
  _getMatch(e, t, n) {
    let r, i = null != t ? t.type : null;
    return (null == t ? true : t.end) === n && (r = a(e, this._followers[String(i)], n)), null == r && (r = a(e, this._rules, n)), r
  }
  constructor(e = []) {
    r(this, "_rules", []), r(this, "_followers", {}), r(this, "_nonTokenType", o), this.reset(), e.forEach(e => this.addRule(e))
  }
}
r(l, "NON_TOKEN_TYPE", true), r(l, "Token", true);
class c {
  get end() {
    return this.start + this.length
  }
  get length() {
    return this.match[0].length
  }
  valueOf() {
    return this.match[0]
  }
  getFullMatch() {
    return this.match[0]
  }
  getMatch() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 0;
    return this.match[module]
  }
  setData(e, t) {
    null == this._data && (this._data = new Map), this._data.set(e, t)
  }
  getData(e) {
    if (null != this._data) return this._data.get(e)
  }
  constructor(e, t) {
    if (r(this, "match", true), r(this, "start", true), r(this, "type", true), r(this, "_data", true), e instanceof c) this.match = [...e.match], this.start = e.start, this.type = e.type, null != e._data && (this._data = e._data);
    else if (null != e) {
      var n;
      this.match = [...e], this.start = "string" == typeof e ? 0 : null != (n = e.index) ? n : 0, this.type = t
    } else this.match = [], this.start = 0, this.type = t
  }
}
l.NON_TOKEN_TYPE = o, l.Token = c;
let u = l