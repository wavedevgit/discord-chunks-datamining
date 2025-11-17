/** Chunk was on 9456 **/
/** chunk id: 724739, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk739566 = require("./739566.js"),
  Chunk942951 = require("./942951.jsx");
let s = e => {
  var t, n;
  let {
    message: s,
    originalAuthor: o,
    channel: c
  } = e, d = (0, a.Sw)(o, c), u = null != (n = null != (t = null == d ? true : d.nick) ? t : null == o ? true : o.username) ? n : "", m = (0, l.l)({
    user: null != o ? o : true,
    channelId: c.id,
    guildId: c.guild_id,
    messageId: null == s ? true : s.id,
    stopPropagation: true
  })(null != d ? d : true)(u, c.id);
  return (0, r.jsx)(i.Text, {
    variant: "text-md/semibold",
    children: m
  })
}