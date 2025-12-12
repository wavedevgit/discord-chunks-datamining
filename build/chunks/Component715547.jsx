/** Chunk was on web.js **/
/** chunk id: 715547, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk655922 = require("./655922.js"),
  Chunk420660 = require("./420660.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk732380 = require("./732380.jsx"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    activity: t,
    onAction: n
  } = e, {
    themeType: u
  } = (0, o.z)(), d = u === l.l.MODAL_V2, f = (0, i.Z)(t);
  if (!(0, a.Z)(t) || null == f) return null;
  let p = e => (e.stopPropagation(), null == n || n({
    action: "PRESS_WATCH_BUTTON"
  }), window.open(f));
  return (0, r.jsx)(s.O1, {
    text: c.intl.string(c.t.I6JG46),
    fullWidth: !d,
    onClick: p
  })
}