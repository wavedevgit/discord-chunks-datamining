/** Chunk was on 88474 **/
/** chunk id: 738080, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk556445 = require("./556445.jsx"),
  Chunk833349 = require("./833349.js"),
  Chunk90644 = require("./90644.js"),
  Chunk652215 = require("./652215.js");

function s(e) {
  let {
    activity: t,
    user: n,
    guildId: s,
    channelId: c,
    source: u,
    onAction: d
  } = e;
  return null != t && (0, l.A)(t, o.jUm.SYNC) && (0, a.A)(t) ? (0, r.jsx)(i.A, {
    size: "sm",
    variant: "secondary",
    user: n,
    activity: t,
    guildId: null != s ? s : true,
    channelId: c,
    source: u,
    onAction: d
  }) : null
}