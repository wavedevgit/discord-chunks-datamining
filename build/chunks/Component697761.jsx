/** Chunk was on web.js **/
/** chunk id: 697761, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk710845 = require("./710845.js"),
  Chunk620662 = require("./620662.js"),
  Chunk915863 = require("./915863.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let {
    activity: t,
    user: n,
    look: c,
    color: u,
    onAction: d
  } = e;
  if (!(0, o.Z)(t, s.xjy.INSTANCE)) return null;
  let f = () => {
    null == d || d(), new i.Z("UserActivityActions").log("notify", n.id, t)
  };
  return (0, r.jsx)(a.Z, {
    look: c,
    color: u,
    onClick: f,
    fullWidth: true,
    children: l.intl.string(l.t.vwl1PD)
  }, "notify")
}