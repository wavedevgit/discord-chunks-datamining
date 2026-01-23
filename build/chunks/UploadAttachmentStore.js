/** Chunk was on web.js **/
/** chunk id: 522602, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => R
}), require("./896048.js"), require("./321073.js"), require("./228524.js");
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk157559 = require("./157559.js"),
  Chunk743445 = require("./743445.js"),
  Chunk972711 = require("./972711.js"),
  Chunk31717 = require("./31717.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = new Map,
  m = [];

function g(e, t) {
  var n, r;
  return null != (n = null == (r = E(e)) ? true : r.get(t)) ? n : m
}

function E(e) {
  var t;
  return null != (t = h.get(e)) ? t : new Map
}

function y(e, t, n) {
  let r = E(e);
  r.set(t, n), h.set(e, r)
}

function b(e) {
  let {
    channelId: t
  } = e, n = [...g(t, d.C.ChannelMessage)];
  n.shift(), y(t, d.C.ChannelMessage, n)
}
let O = e => {
  let {
    files: t,
    channelId: n,
    draftType: r,
    allowOptimization: i
  } = e, s = [...g(n, r)];
  s.length + t.length > f.XgB && r !== d.C.SlashCommand && r !== d.C.ApplicationLauncherCommand ? l.A.show({
    title: p.intl.string(p.t.wOr6hB),
    body: p.intl.formatToPlainString(p.t["qqyp/e"], {
      limit: f.XgB
    })
  }) : (a().forEach(t, e => {
    let t = new c.bK(e, n, s.length, i);
    t.upload(), s.push(t)
  }), y(n, r, s))
};

function v(e) {
  let {
    channelId: t,
    id: n,
    draftType: r
  } = e, i = [...g(t, r)], a = i.findIndex(e => (0, u.ph)({
    uri: n,
    filename: n
  }, e));
  a > false && (i.splice(a, 1)[0].removeFromMsgDraft(), y(t, r, i))
}

function A(e) {
  let {
    channelId: t,
    attachmentIds: n,
    draftType: r
  } = e, i = [...g(t, r)];
  n.forEach(e => {
    let t = i.findIndex(t => e === t.id);
    t > false && i.splice(t, 1)[0].removeFromMsgDraft()
  }), y(t, r, i)
}

function I(e) {
  let {
    channelId: t,
    id: n,
    filename: r,
    description: i,
    spoiler: a,
    thumbnail: s,
    draftType: o
  } = e, l = [...g(t, o)].map(e => (e.id === n && (true !== r && (e.filename = r), true !== a && (e.spoiler = a), true !== i && (e.description = i), true !== s && (e.isThumbnail = s)), e));
  y(t, o, l)
}

function S(e) {
  let {
    channelId: t,
    id: n,
    file: r,
    draftType: i,
    allowOptimization: a
  } = e, s = [...g(t, i)].filter(e => e.id !== n), o = new c.bK(r, t, true, a);
  o.upload(), s.push(o), y(t, i, s)
}

function T(e) {
  let {
    channelId: t,
    uploads: n,
    draftType: r
  } = e;
  y(t, r, n)
}

function C(e) {
  let {
    channelId: t,
    draftType: n
  } = e;
  y(t, n, [])
}

function N(e) {
  let {
    baseChannelId: t
  } = e;
  y(t, d.C.FirstThreadMessage, [])
}
class w extends(r = Chunk311907.Ay.Store) {
  getFirstUpload(e, t) {
    let n = g(e, t);
    return n.length > 0 ? n[0] : null
  }
  hasAdditionalUploads(e, t) {
    var n;
    return (null != (n = g(e, t).length) ? n : 0) > 1
  }
  getUploads(e, t) {
    return g(e, t)
  }
  getUploadCount(e, t) {
    var n;
    return null != (n = g(e, t).length) ? n : 0
  }
  getUpload(e, t, n) {
    return g(e, n).find(e => e.id === t)
  }
  findUpload(e, t, n) {
    return g(e, t).find(n)
  }
}
_(w, "displayName", "UploadAttachmentStore");
let R = new w(Chunk73153.h, {
  UPLOAD_ATTACHMENT_POP_FILE: b,
  UPLOAD_ATTACHMENT_ADD_FILES: O,
  UPLOAD_ATTACHMENT_UPDATE_FILE: I,
  UPLOAD_ATTACHMENT_REMOVE_FILE: v,
  UPLOAD_ATTACHMENT_REMOVE_FILES: A,
  UPLOAD_ATTACHMENT_CLEAR_ALL_FILES: C,
  UPLOAD_ATTACHMENT_SET_UPLOADS: T,
  UPLOAD_ATTACHMENT_SET_FILE: S,
  SIDEBAR_CLOSE: N
})