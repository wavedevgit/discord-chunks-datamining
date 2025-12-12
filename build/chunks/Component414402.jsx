/** Chunk was on web.js **/
/** chunk id: 414402, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk620662 = require("./620662.js"),
  Chunk710845 = require("./710845.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk732380 = require("./732380.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let {
    user: t,
    activity: n,
    onAction: d
  } = e, {
    themeType: f
  } = (0, a.z)(), p = f === c.l.MODAL_V2;
  if (!(0, i.Z)(n, l.xjy.INSTANCE)) return null;
  let _ = e => {
    e.stopPropagation(), null == d || d({
      action: "PRESS_NOTIFY_BUTTON"
    }), new o.Z("UserActivityActions").log("notify", t.id, n)
  };
  return (0, r.jsx)(s.O1, {
    text: u.intl.string(u.t.vwl1PK),
    fullWidth: !p,
    onClick: _
  })
}