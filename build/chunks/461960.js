/** Chunk was on web.js **/
/** chunk id: 461960, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Jv: () => s,
  q6: () => o
});
var Chunk477232 = require("./477232.js"),
  Chunk297808 = require("./297808.js");

function o(e) {
  let t = l((0, r.r3)(e));
  t !== e && (t && a(t, e), e && s(e, t))
}

function a(e, t) {
  e.dispatchEvent(new FocusEvent("blur", {
    relatedTarget: t
  })), e.dispatchEvent(new FocusEvent("focusout", {
    bubbles: true,
    relatedTarget: t
  }))
}

function s(e, t) {
  e.dispatchEvent(new FocusEvent("focus", {
    relatedTarget: t
  })), e.dispatchEvent(new FocusEvent("focusin", {
    bubbles: true,
    relatedTarget: t
  }))
}

function l(e) {
  let t = (0, i.vY)(e),
    n = null == t ? true : t.getAttribute("aria-activedescendant");
  return n && e.getElementById(n) || t
}