/** Chunk was on web.js **/
/** chunk id: 697568, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk544891 = require("./544891.js"),
  Chunk900849 = require("./900849.js"),
  Chunk981631 = require("./981631.js");
let a = e => r.tn.get({
  url: o.ANM.STICKER_GUILD_DATA(e),
  oldFormErrors: true,
  rejectWithError: true
}).then(e => (null == e ? true : e.body) != null ? (0, i.PP)(e.body) : null).catch(() => null)