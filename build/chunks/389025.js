/** Chunk was on 47841 **/
/** chunk id: 389025, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk34457 = require("./34457.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk2242 = require("./2242.js"),
  Chunk652215 = require("./652215.js");

function d(e) {
  let t = (0, i.bG)([a.A, s.A], () => {
      let t = a.A.getGuild(e);
      return null != t ? s.A.getEveryoneRole(t) : true
    }),
    n = r.useMemo(() => null == t || (0, l._m)(t, o.xBc.VIEW_CHANNEL) ? c.c4.SOME_CHANNELS : c.c4.ALL_CHANNELS, [t]),
    d = n === c.c4.ALL_CHANNELS;
  return {
    format: n,
    isFullServerGating: d
  }
}