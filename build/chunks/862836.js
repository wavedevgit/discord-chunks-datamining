/** Chunk was on web.js **/
/** chunk id: 862836, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ig: () => o,
  vX: () => a
});
var Chunk297987 = require("./297987.js"),
  Chunk241827 = require("./241827.js");

function a(e) {
  let t = l((0, r.TW)(e));
  t !== e && (t && s(t, e), e && o(e, t))
}

function s(e, t) {
  e.dispatchEvent(new FocusEvent("blur", {
    relatedTarget: t
  })), e.dispatchEvent(new FocusEvent("focusout", {
    bubbles: true,
    relatedTarget: t
  }))
}

function o(e, t) {
  e.dispatchEvent(new FocusEvent("focus", {
    relatedTarget: t
  })), e.dispatchEvent(new FocusEvent("focusin", {
    bubbles: true,
    relatedTarget: t
  }))
}

function l(e) {
  let t = (0, i.bq)(e),
    n = null == t ? true : t.getAttribute("aria-activedescendant");
  return n && e.getElementById(n) || t
}