/** Chunk was on 66946 **/
/** chunk id: 361588, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk136722 = require("./136722.js"),
  Chunk488926 = require("./488926.js"),
  Chunk652215 = require("./652215.js");

function s(e, t) {
  let n = {
    [t.id]: t
  };
  return e.filter(e => {
    let t = l.aH({
        forceRoles: n,
        context: e
      }),
      s = r.xBc.VIEW_CHANNEL;
    return e.isGuildVocal() && (s = i.WQ(s, r.xBc.CONNECT)), i.zy(t, s) && !l.MJ(s, e)
  })
}