/** Chunk was on 13140 **/
/** chunk id: 533379, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => a
});
var Chunk442837 = require("./442837.js"),
  Chunk998698 = require("./998698.js"),
  Chunk873387 = require("./873387.js");

function a(e) {
  let {
    channel: t,
    chatInputType: n
  } = e, a = (0, l.g)(t), {
    activeCommand: o
  } = (0, r.cj)([i.Z], () => {
    var e;
    return {
      activeCommand: (null == (e = n.commands) ? true : e.enabled) ? i.Z.getActiveCommand(t.id) : null
    }
  });
  return null == o && a
}