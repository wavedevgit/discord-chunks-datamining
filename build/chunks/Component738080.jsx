/** Chunk was on 78572 **/
/** chunk id: 738080, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk556445 = require("./556445.jsx"),
  Chunk833349 = require("./833349.js"),
  Chunk90644 = require("./90644.js"),
  Chunk652215 = require("./652215.js");

function o(e) {
  let {
    activity: t,
    user: n,
    guildId: o,
    channelId: c,
    source: u,
    onAction: d
  } = e;
  return null != t && (0, l.A)(t, s.jUm.SYNC) && (0, a.A)(t) ? (0, r.jsx)(i.A, {
    size: "sm",
    variant: "secondary",
    user: n,
    activity: t,
    guildId: null != o ? o : true,
    channelId: c,
    source: u,
    onAction: d
  }) : null
}