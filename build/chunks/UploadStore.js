/** Chunk was on web.js **/
/** chunk id: 399263, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => L
}), require("./747238.js"), require("./896048.js"), require("./142703.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk320501 = require("./320501.js");

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
let d = Object.freeze([]),
  f = {},
  p = {},
  _ = {},
  h = {},
  m = {};

function g(e, t) {}

function E() {
  m = {}
}

function y(e, t) {
  let n = f[e];
  return null != n && (f[e] = n.filter(e => e.id !== t), delete p[t], delete _[t], n.length !== f[e].length)
}

function b() {
  E()
}

function O() {
  E()
}

function v(e) {
  var t, n;
  let {
    channelId: r,
    file: i,
    uploader: a,
    message: o
  } = e;
  if (a._aborted || a._errored) return;
  let s = null != (t = f[r]) ? t : d;
  if (p[i.id] = a, f[r] = [...s, i], null == o) return;
  _[i.id] = o;
  let {
    items: c
  } = i;
  null != c && (h[o.id] = u(l({}, i), {
    items: c
  })), null != (n = o.nonce) || o.id
}

function A(e) {
  let {
    channelId: t,
    file: n
  } = e;
  S(t, n)
}

function I(e) {
  let {
    channelId: t,
    file: n
  } = e;
  S(t, n)
}

function S(e, t) {
  let n = f[e];
  if (null == n) returnfalse;
  f[e] = n.map(e => e.id === t.id ? l({}, e, t) : e);
  let r = _[t.id];
  null != r && null != h[r.id] && (h[r.id] = l({}, h[r.id], t))
}

function T(e) {
  let {
    channelId: t,
    file: n
  } = e;
  return y(t, n.id)
}

function C(e) {
  let {
    channelId: t,
    file: n
  } = e;
  return y(t, n.id)
}

function N(e) {
  let {
    file: t
  } = e, n = p[t.id];
  if (null == n) returnfalse;
  setImmediate(() => {
    var e;
    return null == (e = n.cancel) ? true : e.call(n)
  })
}

function w(e) {
  let {
    file: t,
    itemId: n
  } = e, r = p[t.id];
  if (null == r) returnfalse;
  setImmediate(() => r.cancelItem(n))
}

function R(e) {
  let {
    channelId: t,
    file: n
  } = e, r = _[n.id];
  if (null != r) {
    var i;
    null != (i = r.nonce) || r.id
  }
  S(t, n)
}

function P(e) {
  let {
    file: t,
    messageId: n
  } = e;
  h[n] = t
}
class D extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(o.A)
  }
  getFiles(e) {
    var t;
    return null != (t = f[e]) ? t : d
  }
  getMessageForFile(e) {
    return _[e]
  }
  getUploaderFileForMessageId(e) {
    return h[e]
  }
  getUploadAttachments(e) {
    if (null != e) return m[e]
  }
}
s(D, "displayName", "UploadStore");
let L = new D(Chunk73153.h, {
  CONNECTION_OPEN: b,
  LOGOUT: O,
  UPLOAD_START: v,
  UPLOAD_COMPRESSION_PROGRESS: I,
  UPLOAD_PROGRESS: A,
  UPLOAD_COMPLETE: T,
  UPLOAD_FAIL: C,
  UPLOAD_CANCEL_REQUEST: N,
  UPLOAD_ITEM_CANCEL_REQUEST: w,
  UPLOAD_FILE_UPDATE: R,
  UPLOAD_RESTORE_FAILED_UPLOAD: P
})