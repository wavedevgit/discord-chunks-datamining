/** Chunk was on web.js **/
/** chunk id: 580745, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk408018 = require("./408018.js"),
  Chunk451909 = require("./451909.js"),
  Chunk253932 = require("./253932.js"),
  Chunk320501 = require("./320501.js");

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
  h = {};

function m(e) {
  let {
    channelId: t,
    messageId: n,
    content: r,
    source: i
  } = e, a = l.D_.getSetting(), c = o.Ay.unparse(r, t);
  _[t] = {
    channelId: t,
    messageId: n,
    textValue: c,
    richValue: (0, s.x7)(a ? c : r)
  }, h[t] = i
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
  delete _[t], delete h[t]
}

function y(e) {
  var t;
  let {
    channelId: n,
    id: r
  } = e;
  (null == (t = _[n]) ? true : t.messageId) === r && (delete _[n], delete h[n])
}
class b extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(c.A)
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
    return null != t && null != t.messageId ? c.A.getMessage(e, t.messageId) : null
  }
  getEditActionSource(e) {
    return h[e]
  }
}
u(b, "displayName", "EditMessageStore");
let O = new b(Chunk73153.h, {
  MESSAGE_START_EDIT: m,
  MESSAGE_UPDATE_EDIT: g,
  MESSAGE_END_EDIT: E,
  MESSAGE_DELETE: y
})