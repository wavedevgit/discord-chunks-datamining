/** Chunk was on web.js **/
/** chunk id: 299206, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk695346 = require("./695346.js"),
  Chunk572004 = require("./572004.js");

function c(e) {
  let {
    id: t,
    label: n,
    onSuccess: i,
    shiftId: c,
    showIconFirst: u,
    showWithoutDeveloperMode: d,
    focusedClassName: f
  } = e, _ = s.Sb.useSetting();

  function p(e) {
    let n = null != c && e.shiftKey ? c : t;
    o()(null != n, "cannot copy null text"), (0, l.JG)(n, i)
  }
  let h = d || _;
  if (__OVERLAY__ || !h || !l.wS || null == t) return null;
  let m = "devmode-copy-id-".concat(t);
  return (0, r.jsx)(a.sNh, {
    id: m,
    label: n,
    action: p,
    icon: u ? true : a.VuL,
    iconLeft: u ? a.VuL : true,
    focusedClassName: f
  }, m)
}