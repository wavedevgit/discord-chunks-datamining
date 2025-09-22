/** Chunk was on web.js **/
/** chunk id: 804970, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q6: () => a
});
var Chunk253231 = require("./253231.js"),
  Chunk571670 = require("./571670.js");

function a(e) {
  let t = l((0, r.r3)(e));
  t !== e && (t && o(t, e), e && s(e, t))
}

function o(e, t) {
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