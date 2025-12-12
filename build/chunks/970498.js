/** Chunk was on web.js **/
/** chunk id: 970498, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => s,
  W: () => l
});
var Chunk267116 = require("./267116.js");
let i = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])', "permission"],
  a = i.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
i.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
let o = i.join(':not([hidden]):not([tabindex="-1"]),');

function s(e) {
  return e.matches(a) && (0, r.J)(e) && !c(e)
}

function l(e) {
  return e.matches(o) && (0, r.J)(e) && !c(e)
}

function c(e) {
  let t = e;
  for (; null != t;) {
    if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) returntrue;
    t = t.parentElement
  }
  returnfalse
}