/** Chunk was on web.js **/
/** chunk id: 29338, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk739566 = require("./739566.js"),
  Chunk834129 = require("./834129.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk519824 = require("./519824.js");

function u(e) {
  let {
    message: t,
    compact: n,
    usernameHook: u
  } = e, d = (0, o.ZP)(t), f = u(d), _ = l.intl.format(l.t["Rv+TSM"], {
    username: d.nick,
    usernameHook: f,
    topic: t.content
  });
  return (0, r.jsx)(s.Z, {
    className: c.stageSystemMessage,
    iconNode: (0, r.jsx)(a.ewx, {
      size: "md",
      color: i.Z.unsafe_rawColors.GREEN_360.css
    }),
    iconContainerClassName: c.iconContainer,
    timestamp: t.timestamp,
    compact: n,
    children: _
  })
}