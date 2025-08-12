/** Chunk was on web.js **/
/** chunk id: 827313, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk531301 = require("./531301.js"),
  Chunk475413 = require("./475413.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk584870 = require("./584870.js");

function u(e) {
  let {
    userId: t,
    isHovering: n,
    onOpenProfile: u
  } = e, {
    note: d
  } = (0, o.Z)(t), f = null != d && "" !== d;
  return (0, r.jsx)(a.y, {
    action: "PRESS_ADD_NOTE",
    icon: f ? i.hH0 : i.Wos,
    tooltipText: f ? d : l.intl.string(l.t["1ZZttr"]),
    tooltipClassName: f ? c.tooltip : true,
    isHovering: n,
    onClick: () => null == u ? true : u({
      subsection: s.Tb.NOTE
    })
  })
}