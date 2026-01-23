/** Chunk was on web.js **/
/** chunk id: 202803, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $r: () => C,
  AN: () => R,
  BX: () => b,
  fr: () => y,
  w6: () => O
}), require("./747238.js"), require("./896048.js");
var r, i, a, Chunk562465 = require("./562465.js"),
  Chunk927813 = require("./927813.js"),
  Chunk998218 = require("./998218.js"),
  Chunk652215 = require("./652215.js");
let u = e => null == e ? true : e.split(":")[0];

function d(e) {
  return "localhost" === e || "127.0.0.1" === e
}
let f = new Set(["/attachments/", "/ephemeral-attachments/"]),
  p = new Set(["/external/"]),
  _ = +Chunk927813.A.Millis.HOUR,
  h = new Set([window.GLOBAL_ENV.CDN_HOST, null == (i = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) ? true : i.substring(2)].map(u).filter(Boolean)),
  m = new Set((null != (r = null == (a = window.GLOBAL_ENV.IMAGE_PROXY_ENDPOINTS) ? true : a.split(",")) ? r : []).map(e => e.substring(2)).map(u).filter(Boolean)),
  g = false,
  E = false;

function y(e) {
  let t = h.has(e.hostname),
    n = g && d(e.hostname),
    r = Array.from(f).some(t => e.pathname.startsWith(t));
  return (t || n) && r
}

function b(e) {
  var t;
  let n = m.has(e.hostname),
    r = E && d(null != (t = e.hostname) ? t : ""),
    i = Array.from(p).some(t => e.pathname.startsWith(t));
  return (n || r) && i
}

function O(e) {
  let t = l.A.toURLSafe(e);
  if (null == t) return e;
  for (let e of ["ex", "is", "hm"]) t.searchParams.delete(e);
  return t
}

function v(e) {
  let t = e.searchParams.get("ex"),
    n = parseInt(null != t ? t : "", 16);
  return isNaN(n) ? true : n * o.A.Millis.SECOND
}

function A(e) {
  let t = v(e);
  return null == t || t <= Date.now() + _
}

function I(e) {
  let t = l.A.toURLSafe(e.url);
  return null != t && A(t)
}

function S(e) {
  if (null == e) returnfalse;
  let t = l.A.toURLSafe(e.url);
  return null != t && !!y(t) && A(t)
}

function T(e) {
  var t;
  return S(e.image) || (null == (t = e.images) ? true : t.some(S)) || S(e.video)
}

function C(e) {
  return e.attachments.some(I) || e.embeds.some(T)
}
async function N(e) {
  let t = await s.Bo.post({
    url: c.Rsh.ATTACHMENTS_REFRESH_URLS,
    body: {
      attachment_urls: [e]
    },
    rejectWithError: false
  });
  return t.ok ? t.body.refreshed_urls[0].refreshed : true
}
async function R(e) {
  let t = l.A.toURLSafe(e);
  if (null == t || !A(t)) return e;
  let n = await N(e);
  return null != n ? n : e
}