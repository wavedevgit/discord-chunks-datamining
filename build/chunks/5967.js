/** Chunk was on web.js **/
/** chunk id: 5967, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  VG: () => a,
  uB: () => s
}), require("./388685.js"), require("./35282.js");
let r = /input/i,
  i = /textarea/i,
  o = new Set(["text", "password", "number", "date", "datetime-local", "time", "week", "month", "email", "search", "tel", "url"]);

function a(e) {
  if (null == e) returnfalse;
  if ("true" === e.getAttribute("contenteditable") || i.test(e.tagName)) returntrue;
  if (r.test(e.tagName)) {
    var t;
    let n = null != (t = e.getAttribute("type")) ? t : "text";
    if (o.has(n)) returntrue
  }
  returnfalse
}

function s(e) {
  let {
    target: t
  } = e;
  return null == t ? null : "ownerDocument" in t ? t.ownerDocument : "document" in t ? t.document : (console.warn("Unable to get owner document from event", e.type), null)
}