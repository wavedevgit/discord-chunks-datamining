/** Chunk was on web.js **/
/** chunk id: 198620, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B_: () => P,
  MO: () => b,
  _M: () => y,
  k5: () => C,
  q5: () => O
}), require("./35282.js"), require("./388685.js");
var r, i, a, Chunk544891 = require("./544891.js"),
  Chunk70956 = require("./70956.js"),
  Chunk591759 = require("./591759.js"),
  Chunk981631 = require("./981631.js");
let u = e => null == e ? true : e.split(":")[0];

function d(e) {
  return "localhost" === e || "127.0.0.1" === e
}
let f = new Set(["/attachments/", "/ephemeral-attachments/"]),
  p = new Set(["/external/"]),
  _ = +Chunk70956.Z.Millis.HOUR,
  m = new Set([window.GLOBAL_ENV.CDN_HOST, null == (r = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) ? true : r.substring(2)].map(u).filter(Boolean)),
  h = new Set((null != (a = null == (i = window.GLOBAL_ENV.IMAGE_PROXY_ENDPOINTS) ? true : i.split(",")) ? a : []).map(e => e.substring(2)).map(u).filter(Boolean)),
  g = false,
  E = false;

function b(e) {
  let t = m.has(e.hostname),
    n = g && d(e.hostname),
    r = Array.from(f).some(t => e.pathname.startsWith(t));
  return (t || n) && r
}

function y(e) {
  var t;
  let n = h.has(e.hostname),
    r = E && d(null != (t = e.hostname) ? t : ""),
    i = Array.from(p).some(t => e.pathname.startsWith(t));
  return (n || r) && i
}

function O(e) {
  let t = l.Z.toURLSafe(e);
  if (null == t) return e;
  for (let e of ["ex", "is", "hm"]) t.searchParams.delete(e);
  return t
}

function v(e) {
  let t = e.searchParams.get("ex"),
    n = parseInt(null != t ? t : "", 16);
  return isNaN(n) ? true : n * s.Z.Millis.SECOND
}

function S(e) {
  let t = v(e);
  return null == t || t <= Date.now() + _
}

function I(e) {
  let t = l.Z.toURLSafe(e.url);
  return null != t && S(t)
}

function T(e) {
  if (null == e) returnfalse;
  let t = l.Z.toURLSafe(e.url);
  return null != t && !!b(t) && S(t)
}

function A(e) {
  var t;
  return T(e.image) || (null == (t = e.images) ? true : t.some(T)) || T(e.video)
}

function C(e) {
  return e.attachments.some(I) || e.embeds.some(A)
}
async function N(e) {
  let t = await o.tn.post({
    url: c.ANM.ATTACHMENTS_REFRESH_URLS,
    body: {
      attachment_urls: [e]
    },
    rejectWithError: false
  });
  return t.ok ? t.body.refreshed_urls[0].refreshed : true
}
async function P(e) {
  let t = l.Z.toURLSafe(e);
  if (null == t || !S(t)) return e;
  let n = await N(e);
  return null != n ? n : e
}