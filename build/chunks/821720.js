/** Chunk was on 17869 **/
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
    let [n, i] = l.useMemo(() => (function(e, t) {
      if (!t.isPrivate()) return [u, c];
      let n = e.filter(e => {
          var t, n;
          return (null == (t = e.application) ? true : t.id) != null && (null == (n = e.activity) ? true : n.party_id) != null
        }),
        l = n.map(e => e.id);
      return [n, l]
    })(e, t), [e, t]), a = (0, r.yK)([s.A], () => {
      let e = [];
      return n.forEach(t => {
        null != s.A.findActivity(t.author.id, e => {
          var n, l, r;
          return e.application_id === (null == (n = t.application) ? true : n.id) && (null == (l = e.party) ? true : l.id) === (null == (r = t.activity) ? true : r.party_id)
        }, null, true) && e.push(t.id)
      }), e
    }, [n]);
    return [i, l.useMemo(() => (function(e, t) {
      if (0 === e.length) return o;
      let n = [];
      return e.forEach(e => {
        var l, r;
        let i = null == (l = e.application) ? true : l.id,
          a = null == (r = e.activity) ? true : r.party_id;
        if (e.id in t || null == i || null == a) return;
        let s = e.timestamp.getTime(),
          o = {
            userId: e.author.id,
            applicationId: i,
            partyId: a,
            messageId: e.id,
            channelId: e.channel_id,
            inviteTime: s
          };
        n.push(o)
      }), n
    })(n, a), [n, a])]
  }(e, t);
  return l.useEffect(() => {
    for (let e of d) a.A.isSubscribed(e) || (0, i.B)(e)
  }, [d]), [n, d]
}