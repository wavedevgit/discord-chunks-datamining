/** Chunk was on web.js **/
/** chunk id: 299206, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
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
  } = e, p = s.Sb.useSetting();

  function _(e) {
    let n = null != c && e.shiftKey ? c : t;
    a()(null != n, "cannot copy null text"), (0, l.JG)(n, i)
  }
  let h = d || p;
  if (__OVERLAY__ || !h || !l.wS || null == t) return null;
  let m = "devmode-copy-id-".concat(t);
  return (0, r.jsx)(o.sNh, {
    id: m,
    label: n,
    action: _,
    icon: u ? true : o.VuL,
    iconLeft: u ? o.VuL : true,
    focusedClassName: f
  }, m)
}