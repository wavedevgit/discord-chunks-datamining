/** Chunk was on 47841 **/
/** chunk id: 777705, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");
let l = {};
class s extends Chunk311907.Ay.Store {
  hasFetched(e) {
    return null != l[e]
  }
  getTopChannelIds(e) {
    return "874345844743213126" === e ? ["1041887225819955252", "985996080107892776", "1035280727610241166"] : l[e]
  }
}
let a = new s(Chunk73153.h, {
  GUILD_TOP_READ_CHANNELS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      topChannelIds: n
    } = e;
    l[t] = n
  }
})