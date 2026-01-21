/** Chunk was on 82124 **/
/** chunk id: 931056, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./539854.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk417438 = require("./417438.js"),
  Chunk360787 = require("./360787.js"),
  Chunk158776 = require("./158776.js");
let s = [],
  c = [],
  u = [];

function d(e, t) {
  let [n, d] = function(e, t) {
    let [n, l] = r.useMemo(() => (function(e, t) {
      if (!t.isPrivate()) return [u, c];
      let n = e.filter(e => {
          var t, n;
          return (null == (t = e.application) ? true : t.id) != null && (null == (n = e.activity) ? true : n.party_id) != null
        }),
        r = n.map(e => e.id);
      return [n, r]
    })(e, t), [e, t]), a = (0, i.Wu)([o.Z], () => {
      let e = [];
      return n.forEach(t => {
        null != o.Z.findActivity(t.author.id, e => {
          var n, r, i;
          return e.application_id === (null == (n = t.application) ? true : n.id) && (null == (r = e.party) ? true : r.id) === (null == (i = t.activity) ? true : i.party_id)
        }, null, true) && e.push(t.id)
      }), e
    }, [n]);
    return [l, r.useMemo(() => (function(e, t) {
      if (0 === e.length) return s;
      let n = [];
      return e.forEach(e => {
        var r, i;
        let l = null == (r = e.application) ? true : r.id,
          a = null == (i = e.activity) ? true : i.party_id;
        if (e.id in t || null == l || null == a) return;
        let o = e.timestamp.getTime(),
          s = {
            userId: e.author.id,
            applicationId: l,
            partyId: a,
            messageId: e.id,
            channelId: e.channel_id,
            inviteTime: o
          };
        n.push(s)
      }), n
    })(n, a), [n, a])]
  }(e, t);
  return r.useEffect(() => {
    for (let e of d) a.Z.isSubscribed(e) || (0, l.L)(e)
  }, [d]), [n, d]
}