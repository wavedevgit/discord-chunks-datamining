/** Chunk was on web.js **/
/** chunk id: 29338, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk739566 = require("./739566.js"),
  Chunk834129 = require("./834129.js"),
  Chunk388032 = require("./388032.js"),
  Chunk40450 = require("./40450.js");

function u(e) {
  let {
    message: t,
    compact: n,
    usernameHook: u
  } = e, d = (0, a.ZP)(t), f = u(d), _ = l.intl.format(l.t["Rv+TSE"], {
    username: d.nick,
    usernameHook: f,
    topic: t.content
  });
  return <s.Z className={c.stageSystemMessage} iconNode={(0, r.jsx)(o.ewx, {
      size: "md",
      color: i.Z.unsafe_rawColors.GREEN_360.css
    })} iconContainerClassName={c.iconContainer} timestamp={t.timestamp} compact={n}>{_}</s.Z>
}