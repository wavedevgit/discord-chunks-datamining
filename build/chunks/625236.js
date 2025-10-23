/** Chunk was on 1272 **/
/** chunk id: 625236, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => u
}), require("./388685.js");
var Chunk786761 = require("./786761.js"),
  Chunk23750 = require("./23750.js"),
  Chunk306680 = require("./306680.js"),
  Chunk709054 = require("./709054.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class u {
  isLatest(e, t) {
    return this.messageGeneration(e, t) === t
  }
  messageGeneration(e, t) {
    let n = this.messages.get(e);
    return null == n ? false / 0 : n.generation !== t && null != n.message && n.message.id === l.ZP.lastMessageId(e) ? (this.messages.set(e, c(o({}, n), {
      generation: t
    })), t) : n.generation
  }
  messageId(e) {
    var t, n;
    let r = this.messages.get(e);
    return null != (n = null == r || null == (t = r.message) ? true : t.id) ? n : null
  }
  messageRecord(e) {
    var t;
    let n = this.messages.get(e);
    return null == n || null == n.message || n.message instanceof i.ZP || (n.message = (0, r.e5)(n.message)), null != (t = null == n ? true : n.message) ? t : null
  }
  has(e) {
    return this.messages.has(e)
  }
  put(e, t, n) {
    this.messages.set(e, {
      message: t,
      generation: n
    })
  }
  putNew(e, t, n) {
    var r, i, l;
    let s = this.messages.get(e);
    null != t && (i = t.id, null == (l = null == s || null == (r = s.message) ? true : r.id) || a.default.compare(i, l) > 0) && this.put(e, t, n)
  }
  putMany(e, t) {
    for (let n of e) this.put(n.channel_id, n, t)
  }
  update(e) {
    var t;
    if (null == e.id || null == e.channel_id) return;
    let n = e.channel_id,
      l = this.messages.get(n);
    if ((null == l || null == (t = l.message) ? true : t.id) !== e.id) return;
    let a = l.message instanceof i.ZP ? (0, r.wi)(l.message, e) : (0, r.gx)(l.message, e);
    this.messages.set(n, c(o({}, l), {
      message: a
    }))
  }
  delete(e) {
    this.messages.delete(e)
  }
  constructor() {
    s(this, "localNeeded", true), s(this, "messages", new Map)
  }
}