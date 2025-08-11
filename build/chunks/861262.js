/** Chunk was on web.js **/
/** chunk id: 861262, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => a
}), require("./388685.js"), require("./442837.js");
var Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk981631 = require("./981631.js");

function a(e) {
  let [t, n] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [r.Z, i.Z];
  if (null == e);
  else if (e === o.aib.DMS) return o.aib.DMS;
  else if (e === o.I_8) return o.aib.FAVORITES;
  else if (null != n.getGuild(e)) return o.aib.GUILD;
  else if (null != t.getChannel(e)) return o.aib.CHANNEL;
  return null
}