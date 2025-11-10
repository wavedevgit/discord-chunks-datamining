/** Chunk was on 57336 **/
/** chunk id: 931056, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./539854.js"), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk417438 = require("./417438.js"),
  Chunk360787 = require("./360787.js"),
  Chunk158776 = require("./158776.js");
let s = [],
  c = [],
  u = [];

function d(e, t) {
  let [n, d] = function(e, t) {
    let [n, l] = i.useMemo(() => (function(e, t) {
      if (!t.isPrivate()) return [u, c];
      let n = e.filter(e => {
          var t, n;
          return (null == (t = e.application) ? true : t.id) != null && (null == (n = e.activity) ? true : n.party_id) != null
        }),
        i = n.map(e => e.id);
      return [n, i]
    })(e, t), [e, t]), a = (0, r.Wu)([o.Z], () => {
      let e = [];
      return n.forEach(t => {
        null != o.Z.findActivity(t.author.id, e => {
          var n, i, r;
          return e.application_id === (null == (n = t.application) ? true : n.id) && (null == (i = e.party) ? true : i.id) === (null == (r = t.activity) ? true : r.party_id)
        }, null, true) && e.push(t.id)
      }), e
    }, [n]);
    return [l, i.useMemo(() => (function(e, t) {
      if (0 === e.length) return s;
      let n = [];
      return e.forEach(e => {
        var i, r;
        let l = null == (i = e.application) ? true : i.id,
          a = null == (r = e.activity) ? true : r.party_id;
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
  return i.useEffect(() => {
    for (let e of d) a.Z.isSubscribed(e) || (0, l.L)(e)
  }, [d]), [n, d]
}