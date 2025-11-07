/** Chunk was on web.js **/
/** chunk id: 533379, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => o
});
var Chunk442837 = require("./442837.js"),
  Chunk998698 = require("./998698.js"),
  Chunk873387 = require("./873387.js");

function o(e) {
  var t, n;
  let {
    channel: o,
    chatInputType: s
  } = e, l = null != (n = null == (t = s.commands) ? true : t.enabled) && n, c = (0, a.g)(o), {
    activeCommand: u
  } = (0, r.cj)([i.Z], () => ({
    activeCommand: l ? i.Z.getActiveCommand(o.id) : null
  }));
  return l && c && null == u
}