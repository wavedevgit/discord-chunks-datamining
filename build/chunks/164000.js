/** Chunk was on 384 **/
/** chunk id: 164000, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk345162 = require("./345162.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk293810 = require("./293810.js"),
  Chunk981631 = require("./981631.js");

function u(e) {
  let t = (0, i.e7)([a.Z, s.Z], () => {
      let t = a.Z.getGuild(e);
      return null != t ? s.Z.getEveryoneRole(t) : true
    }),
    n = r.useMemo(() => null == t || (0, l.Fs)(t, c.Plq.VIEW_CHANNEL) ? o.e3.SOME_CHANNELS : o.e3.ALL_CHANNELS, [t]),
    u = n === o.e3.ALL_CHANNELS;
  return {
    format: n,
    isFullServerGating: u
  }
}