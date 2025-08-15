/** Chunk was on web.js **/
/** chunk id: 715547, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk655922 = require("./655922.js"),
  Chunk420660 = require("./420660.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk475413 = require("./475413.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let {
    activity: t,
    onAction: n
  } = e, {
    themeType: d
  } = (0, s.z)(), f = (0, a.Z)(t);
  if (!(0, o.Z)(t) || null == f) return null;
  let _ = e => (e.stopPropagation(), null == n || n({
    action: "PRESS_WATCH_BUTTON"
  }), window.open(f));
  return d === c.lY.MODAL_V2 ? (0, r.jsx)(l.tG, {
    text: u.intl.string(u.t["I6JG4+"]),
    size: i.Ph.TINY,
    themeColor: "secondary",
    onClick: _
  }) : (0, r.jsx)(l.tG, {
    text: u.intl.string(u.t["I6JG4+"]),
    size: i.Ph.SMALL,
    fullWidth: true,
    themeColor: "secondary",
    onClick: _
  })
}