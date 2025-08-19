/** Chunk was on 31978 **/
/** chunk id: 453687, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Dv: () => c,
  Gq: () => a,
  Gx: () => m,
  XX: () => s,
  bX: () => d,
  bY: () => u,
  iG: () => p,
  ut: () => i
}), require("./781311.js");
var Chunk446108 = require("./446108.js"),
  Chunk901461 = require("./901461.js"),
  Chunk981631 = require("./981631.js");

function i(e) {
  return "message-content-".concat(e.id)
}

function a(e) {
  return "message-reply-context-".concat(e.id)
}

function s(e, t) {
  let n = null != t ? t : e.id;
  return "message-username-".concat(n)
}

function c(e) {
  return "message-timestamp-".concat(e.id)
}

function u(e) {
  return "message-reactions-".concat(e.id)
}

function d(e) {
  return "message-accessories-".concat(e.id)
}

function p(e, t, n) {
  let u = e.type === o.uaV.REPLY && null != e.messageReference,
    p = e.embeds.length > 0,
    m = e.attachments.length > 0,
    g = e.stickerItems.length > 0,
    f = e.codedLinks.length > 0,
    b = e.components.length > 0,
    h = e.hasFlag(o.iLy.HAS_THREAD),
    O = p || m || g || f || h || b || e.type === o.uaV.THREAD_CREATED,
    y = p && e.content === e.embeds[0].url && e.embeds[0].type === o.hBH.GIFV,
    v = e.type !== o.uaV.DEFAULT || !y && "" !== e.content,
    j = (0, l.Z)(e),
    P = !j && (null == n ? true : n.hasTimestamp) !== false,
    x = s(e, t),
    w = a(e),
    C = j ? "" : "".concat(u ? w : x, " ").concat(r.Z0);
  if (v) {
    let t = i(e);
    C += " ".concat(t)
  }
  if (O) {
    let t = d(e);
    C += " ".concat(t)
  }
  if (P) {
    let t = c(e);
    C += " ".concat(r.fy, " ").concat(t)
  }
  return C.trim()
}

function m(e) {
  if (0 === e.reactions.length) return;
  let t = u(e);
  return "".concat(r.Mb, " ").concat(t)
}