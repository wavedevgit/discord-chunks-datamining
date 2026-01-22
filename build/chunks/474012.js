/** Chunk was on web.js **/
/** chunk id: 474012, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => o
}), require("./321073.js");
var Chunk575593 = require("./575593.js"),
  Chunk898461 = require("./898461.js"),
  Chunk837015 = require("./837015.js"),
  Chunk203632 = require("./203632.js");
let o = e => null == e ? [] : e.reduce((e, t) => (t.type === r.R.AVATAR_DECORATION && e.push(i.A.fromServer(t)), t.type === r.R.PROFILE_EFFECT && e.push(s.A.fromServer(t)), t.type === r.R.NAMEPLATE && e.push(a.A.fromServer(t)), e), [])