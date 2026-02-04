/** Chunk was on 7685 **/
/** chunk id: 595766, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => c
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

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class c {
  isLatest(e, t) {
    return this.messageGeneration(e, t) === t
  }
  messageGeneration(e, t) {
    let n = this.messages.get(e);
    return null == n ? false / 0 : n.generation !== t && null != n.message && n.message.id === i.Ay.lastMessageId(e) ? (this.messages.set(e, u(o({}, n), {
      generation: t
    })), t) : n.generation
  }
  messageId(e) {
    var t, n;
    let l = this.messages.get(e);
    return null != (t = null == l || null == (n = l.message) ? true : n.id) ? t : null
  }
  messageRecord(e) {
    var t;
    let n = this.messages.get(e);
    return null == n || null == n.message || n.message instanceof r.Ay || (n.message = (0, l.rh)(n.message)), null != (t = null == n ? true : n.message) ? t : null
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
    var l, r, i;
    let a = this.messages.get(e);
    null != t && (r = t.id, null == (i = null == a || null == (l = a.message) ? true : l.id) || s.default.compare(r, i) > 0) && this.put(e, t, n)
  }
  putMany(e, t) {
    for (let n of e) this.put(n.channel_id, n, t)
  }
  update(e) {
    var t;
    if (null == e.id || null == e.channel_id) return;
    let n = e.channel_id,
      i = this.messages.get(n);
    if ((null == i || null == (t = i.message) ? true : t.id) !== e.id) return;
    let s = i.message instanceof r.Ay ? (0, l.IU)(i.message, e) : (0, l.SP)(i.message, e);
    this.messages.set(n, u(o({}, i), {
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