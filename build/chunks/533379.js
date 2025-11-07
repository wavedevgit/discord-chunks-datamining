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
  let {
    channel: t,
    chatInputType: n
  } = e, o = (0, a.g)(t), {
    activeCommand: s
  } = (0, r.cj)([i.Z], () => {
    var e;
    return {
      activeCommand: (null == (e = n.commands) ? true : e.enabled) ? i.Z.getActiveCommand(t.id) : null
    }
  });
  return null == s && o
}