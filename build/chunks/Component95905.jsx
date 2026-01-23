/** Chunk was on 46875 **/
/** chunk id: 95905, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk763754 = require("./763754.js"),
  Chunk447215 = require("./447215.jsx");
let s = e => {
  var t, n;
  let {
    message: s,
    originalAuthor: o,
    channel: c
  } = e, d = (0, i.d8)(o, c), u = null != (t = null != (n = null == d ? true : d.nick) ? n : null == o ? true : o.username) ? t : "", m = (0, a.P)({
    user: null != o ? o : true,
    channelId: c.id,
    guildId: c.guild_id,
    messageId: null == s ? true : s.id,
    stopPropagation: true
  })(null != d ? d : true)(u, c.id);
  return (0, l.jsx)(r.Text, {
    variant: "text-md/semibold",
    children: m
  })
}