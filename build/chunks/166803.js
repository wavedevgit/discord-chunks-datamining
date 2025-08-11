/** Chunk was on 31667 **/
/** chunk id: 166803, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk149765 = require("./149765.js"),
  Chunk700785 = require("./700785.js"),
  Chunk981631 = require("./981631.js");

function o(e, t) {
  let n = {
    [t.id]: t
  };
  return e.filter(e => {
    let t = l.I0({
        forceRoles: n,
        context: e
      }),
      o = r.Plq.VIEW_CHANNEL;
    return e.isGuildVocal() && (o = i.IH(o, r.Plq.CONNECT)), i.e$(t, o) && !l.Uu(o, e)
  })
}