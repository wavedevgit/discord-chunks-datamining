/** Chunk was on web.js **/
/** chunk id: 323873, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk752305 = require("./752305.js"),
  Chunk957730 = require("./957730.js"),
  Chunk695346 = require("./695346.js"),
  Chunk375954 = require("./375954.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let _ = {},
  m = {};

function h(e) {
  let {
    channelId: t,
    messageId: n,
    content: r,
    source: i
  } = e, a = l.dN.getSetting(), c = s.ZP.unparse(r, t);
  _[t] = {
    channelId: t,
    messageId: n,
    textValue: c,
    richValue: (0, o.JM)(a ? c : r)
  }, m[t] = i
}

function g(e) {
  let {
    channelId: t,
    textValue: n,
    richValue: r
  } = e, i = _[t];
  if (null == i) returnfalse;
  _[t] = p(d({}, i), {
    textValue: n,
    richValue: r
  })
}

function E(e) {
  let {
    channelId: t
  } = e;
  if (null == t || null == _[t]) returnfalse;
  delete _[t], delete m[t]
}

function b(e) {
  var t;
  let {
    channelId: n,
    id: r
  } = e;
  (null == (t = _[n]) ? true : t.messageId) === r && (delete _[n], delete m[n])
}
class y extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk375954.Z)
  }
  isEditing(e, t) {
    var n;
    return (null == (n = _[e]) ? true : n.messageId) === t
  }
  isEditingAny(e) {
    return null != _[e]
  }
  getEditingTextValue(e) {
    var t;
    return null == (t = _[e]) ? true : t.textValue
  }
  getEditingRichValue(e) {
    var t;
    return null == (t = _[e]) ? true : t.richValue
  }
  getEditingMessageId(e) {
    var t;
    return null == (t = _[e]) ? true : t.messageId
  }
  getEditingMessage(e) {
    let t = _[e];
    return null != t && null != t.messageId ? c.Z.getMessage(e, t.messageId) : null
  }
  getEditActionSource(e) {
    return m[e]
  }
}
u(y, "displayName", "EditMessageStore");
let O = new y(Chunk570140.Z, {
  MESSAGE_START_EDIT: h,
  MESSAGE_UPDATE_EDIT: g,
  MESSAGE_END_EDIT: E,
  MESSAGE_DELETE: b
})