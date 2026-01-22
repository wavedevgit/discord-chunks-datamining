/** Chunk was on web.js **/
/** chunk id: 988665, original params: e,t,n (module,exports,re quire) **/
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
  Ay: () => u,
  dL: () => a,
  ou: () => c
}), require("./747238.js"), require("./896048.js"), require("./591487.js"), require("./727858.js"), require("./938796.js"), require("./321073.js");
let i = /.+/g,
  a = "NON_TOKEN";

function s(e, t, n) {
  if (null == t) return null;
  for (let r = 0; r < t.length; r++) {
    let i, a = t[r],
      s = o(e.match(a.regex), n);
    if (null != s) {
      let {
        cache: e
      } = a;
      if (null != e && null != (i = e.get(s[0])) && ((i = new c(i)).start = s.index), null == i) {
        if (i = new c(s, a.type), null != a.validator && !a.validator(i)) continue;
        null == e || (null == e ? true : e.has(s[0])) || e.set(s[0], i)
      }
      return i
    }
  }
  return null
}

function o(e, t) {
  if (null == e) return null;
  let n = [...e];
  return n.index = t, n
}
class l {
  reset() {
    this._rules = [], this._followers = {}, this._nonTokenType = a
  }
  addRule(e) {
    let t, {
        type: n,
        follows: r,
        validator: i
      } = e,
      {
        regex: a
      } = e;
    ("^" !== a.source.charAt(0) && (a = new RegExp("^".concat(a.source), a.flags)), null != i && (t = new Map), null == r) ? this._rules.push({
      regex: a,
      type: n,
      validator: i,
      cache: t
    }): r.forEach(e => {
      null == this._followers[e] && (this._followers[e] = []), this._followers[e].push({
        regex: a,
        type: n,
        validator: i,
        cache: t
      })
    })
  }
  tokenize(e) {
    let t, n = e,
      r = "",
      a = 0,
      s = [];
    for (; n.length > 0;) {
      let e = this._getMatch(n, t, a + r.length);
      null != e ? (null != r && "" !== r && s.push(new c(o(r.match(i), a), this._nonTokenType)), t = e, s.push(e), a += t.length + r.length, n = n.substring(t.length), r = "") : (r += n[0], n = n.substring(1))
    }
    return null != r && "" !== r && s.push(new c(o(r.match(i), a), this._nonTokenType)), s
  }
  clearCache() {
    for (let e in this._rules.forEach(e => {
        var t;
        return null == (t = e.cache) ? true : t.clear()
      }), this._followers) this._followers[e].forEach(e => {
      var t;
      return null == (t = e.cache) ? true : t.clear()
    })
  }
  _getMatch(e, t, n) {
    let r, i = null != t ? t.type : null;
    return (null == t ? true : t.end) === n && (r = s(e, this._followers[String(i)], n)), null == r && (r = s(e, this._rules, n)), r
  }
  constructor(e = []) {
    r(this, "_rules", []), r(this, "_followers", {}), r(this, "_nonTokenType", a), this.reset(), e.forEach(e => this.addRule(e))
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
    return this.match[e]
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
l.NON_TOKEN_TYPE = a, l.Token = c;
let u = l