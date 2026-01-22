/** Chunk was on web.js **/
/** chunk id: 477712, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk562465 = require("./562465.js"),
  Chunk449054 = require("./449054.js"),
  Chunk652215 = require("./652215.js");
let s = e => r.Bo.get({
  url: a.Rsh.STICKER_GUILD_DATA(e),
  oldFormErrors: true,
  rejectWithError: true
}).then(e => (null == e ? true : e.body) != null ? (0, i.jE)(e.body) : null).catch(() => null)