/** Chunk was on web.js **/
/** chunk id: 132979, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  nG: () => o
});
var Chunk610063 = require("./610063.js"),
  Chunk88058 = require("./88058.js");
require("./647438.js");
let a = null;

function o(e, t, n = true) {
  var a, s;
  let {
    metaKey: l,
    ctrlKey: c,
    altKey: u,
    shiftKey: d
  } = t;
  (0, i.vU)() && (null == (s = window.event) || null == (a = s.type) ? true : a.startsWith("key")) && "_blank" === e.target && ((0, i.V5)() ? l = true : c = true);
  let f = (0, i.Pf)() && (0, i.V5)() && !(0, i.zc)() && 1 ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey: l,
    ctrlKey: c,
    altKey: u,
    shiftKey: d
  }) : new MouseEvent("click", {
    metaKey: l,
    ctrlKey: c,
    altKey: u,
    shiftKey: d,
    bubbles: true,
    cancelable: true
  });
  o.isOpening = n, (0, r.A)(e), e.dispatchEvent(f), o.isOpening = false
}
o.isOpening = false