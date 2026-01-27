/** Chunk was on web.js **/
/** chunk id: 576757, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk287809 = require("./287809.js"),
  Chunk403362 = require("./403362.js");
let s = [];

function l(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 3,
    n = (0, i.yK)([a.default], () => {
      let t = e.participants.map(e => a.default.getUser(e)).filter(o.Vq),
        n = t.find(t => t.id === e.author_id),
        r = t.filter(t => t.id !== e.author_id);
      return null == n ? s : [...r, n]
    }, [e]),
    l = r.useMemo(() => n.slice(-t), [t, n]),
    c = l[l.length - 1],
    u = l[l.length - 2],
    d = Math.max(n.length - 1, 0);
  return {
    orderedParticipants: n,
    displayParticipants: l,
    participant1: c,
    participant2: u,
    numOtherParticipants: d
  }
}