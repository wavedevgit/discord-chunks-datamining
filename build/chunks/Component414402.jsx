/** Chunk was on web.js **/
/** chunk id: 414402, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk755721 = require("./755721.js"),
  Chunk620662 = require("./620662.js"),
  Chunk710845 = require("./710845.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk475413 = require("./475413.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  let {
    user: t,
    activity: n,
    onAction: f
  } = e, {
    themeType: _
  } = (0, s.z)();
  if (!(0, o.Z)(n, u.xjy.INSTANCE)) return null;
  let p = e => {
    e.stopPropagation(), null == f || f({
      action: "PRESS_NOTIFY_BUTTON"
    }), new a.Z("UserActivityActions").log("notify", t.id, n)
  };
  return _ === c.lY.MODAL_V2 ? (0, r.jsx)(l.tG, {
    text: d.intl.string(d.t.vwl1PD),
    size: i.Ph.TINY,
    themeColor: "secondary",
    onClick: p
  }) : (0, r.jsx)(l.tG, {
    text: d.intl.string(d.t.vwl1PD),
    size: i.Ph.SMALL,
    themeColor: "secondary",
    fullWidth: true,
    onClick: p
  })
}