/** Chunk was on web.js **/
/** chunk id: 994102, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk206074 = require("./206074.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk475413 = require("./475413.jsx"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let {
    application: t,
    onAction: n,
    onClose: d
  } = e, {
    themeType: f
  } = (0, s.z)(), _ = (0, o.Z)({
    application: t,
    location: "User Profile Activity"
  });
  return null == _ ? null : (0, r.jsx)(l.tG, {
    icon: a.v3n,
    text: u.intl.string(u.t["jaYS/v"]),
    size: f === c.l.MODAL_V2 ? i.Ph.TINY : i.Ph.SMALL,
    fullWidth: f !== c.l.MODAL_V2,
    themeColor: "secondary",
    onClick: e => {
      e.stopPropagation(), null == n || n({
        action: "PRESS_CLOUD_PLAY_BUTTON"
      }), _(), null == d || d()
    }
  })
}