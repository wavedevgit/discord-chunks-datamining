/** Chunk was on 97887 **/
/** chunk id: 821720, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./321073.js"), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk573695 = require("./573695.js"),
  Chunk911411 = require("./911411.js"),
  Chunk290863 = require("./290863.js");
let o = [],
  c = [],
  u = [];

function d(e, t) {
  let [n, d] = function(e, t) {
    let [n, i] = r.useMemo(() => (function(e, t) {
      if (!t.isPrivate()) return [u, c];
      let n = e.filter(e => {
          var t, n;
          return (null == (t = e.application) ? true : t.id) != null && (null == (n = e.activity) ? true : n.party_id) != null
        }),
        r = n.map(e => e.id);
      return [n, r]
    })(e, t), [e, t]), s = (0, l.yK)([a.A], () => {
      let e = [];
      return n.forEach(t => {
        null != a.A.findActivity(t.author.id, e => {
          var n, r, l;
          return e.application_id === (null == (n = t.application) ? true : n.id) && (null == (r = e.party) ? true : r.id) === (null == (l = t.activity) ? true : l.party_id)
        }, null, true) && e.push(t.id)
      }), e
    }, [n]);
    return [i, r.useMemo(() => (function(e, t) {
      if (0 === e.length) return o;
      let n = [];
      return e.forEach(e => {
        var r, l;
        let i = null == (r = e.application) ? true : r.id,
          s = null == (l = e.activity) ? true : l.party_id;
        if (e.id in t || null == i || null == s) return;
        let a = e.timestamp.getTime(),
          o = {
            userId: e.author.id,
            applicationId: i,
            partyId: s,
            messageId: e.id,
            channelId: e.channel_id,
            inviteTime: a
          };
        n.push(o)
      }), n
    })(n, s), [n, s])]
  }(e, t);
  return r.useEffect(() => {
    for (let e of d) s.A.isSubscribed(e) || (0, i.B)(e)
  }, [d]), [n, d]
}