/** Chunk was on 59569 **/
/** chunk id: 617086, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk205184 = require("./205184.js"),
  Chunk287809 = require("./287809.js"),
  Chunk403362 = require("./403362.js"),
  Chunk939496 = require("./939496.jsx");

function s(e) {
  let {
    userId: t
  } = (0, o.E)(), n = (0, l.s)(e);
  return (0, r.yK)([i.default], () => {
    let e = i.default.getCurrentUser(),
      r = new Set;
    return n.forEach(e => {
      r.add(e.author_id), e.participants.forEach(e => {
        r.add(e)
      })
    }), Array.from(r).filter(n => n !== (null == e ? true : e.id) && n !== t).map(e => i.default.getUser(e)).filter(a.Vq)
  }, [n, t])
}