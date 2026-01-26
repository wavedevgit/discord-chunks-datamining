/** Chunk was on web.js **/
/** chunk id: 50268, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk397927 = require("./397927.js"),
  Chunk253932 = require("./253932.js"),
  Chunk957565 = require("./957565.js");

function c(e) {
  let {
    id: t,
    label: n,
    onSuccess: i,
    shiftId: c,
    showIconFirst: u,
    showWithoutDeveloperMode: d,
    focusedClassName: f
  } = e, p = o.Q_.useSetting();

  function _(e) {
    let n = null != c && e.shiftKey ? c : t;
    a()(null != n, "cannot copy null text"), (0, l.C)(n, i)
  }
  let h = d || p;
  if (__OVERLAY__ || !h || !l.p5 || null == t) return null;
  let m = "devmode-copy-id-".concat(t);
  return (0, r.jsx)(s.Drp, {
    id: m,
    label: n,
    action: _,
    icon: u ? true : s.L9S,
    iconLeft: u ? s.L9S : true,
    leadingAccessory: {
      type: "icon",
      icon: s.L9S
    },
    focusedClassName: f
  }, m)
}