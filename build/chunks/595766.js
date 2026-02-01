/** Chunk was on 57010 **/
/** chunk id: 595766, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => d
}), require("./896048.js");
var Chunk141468 = require("./141468.js"),
  Chunk383233 = require("./383233.js"),
  Chunk222823 = require("./222823.js"),
  Chunk661191 = require("./661191.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}

function o(e, t) {
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
class d {
  isLatest(e, t) {
    return this.messageGeneration(e, t) === t
  }
  messageGeneration(e, t) {
    let n = this.messages.get(e);
    return null == n ? false / 0 : n.generation !== t && null != n.message && n.message.id === l.Ay.lastMessageId(e) ? (this.messages.set(e, o(u({}, n), {
      generation: t
    })), t) : n.generation
  }
  messageId(e) {
    var t, n;
    let r = this.messages.get(e);
    return null != (t = null == r || null == (n = r.message) ? true : n.id) ? t : null
  }
  messageRecord(e) {
    var t;
    let n = this.messages.get(e);
    return null == n || null == n.message || n.message instanceof i.Ay || (n.message = (0, r.rh)(n.message)), null != (t = null == n ? true : n.message) ? t : null
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
    let a = this.messages.get(e);
    null != t && (i = t.id, null == (l = null == a || null == (r = a.message) ? true : r.id) || s.default.compare(i, l) > 0) && this.put(e, t, n)
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
    let s = l.message instanceof i.Ay ? (0, r.IU)(l.message, e) : (0, r.SP)(l.message, e);
    this.messages.set(n, o(u({}, l), {
      message: s
    }))
  }
  delete(e) {
    this.messages.delete(e)
  }
  constructor() {
    a(this, "localNeeded", true), a(this, "messages", new Map)
  }
}