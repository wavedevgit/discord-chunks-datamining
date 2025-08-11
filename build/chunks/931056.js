/** Chunk was on web.js **/
/** chunk id: 931056, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./539854.js"), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk417438 = require("./417438.js"),
  Chunk360787 = require("./360787.js"),
  Chunk158776 = require("./158776.js");
let l = [],
  c = [],
  u = [];

function d(e, t) {
  if (!t.isPrivate()) return [u, c];
  let n = e.filter(e => {
      var t, n;
      return (null == (t = e.application) ? true : t.id) != null && (null == (n = e.activity) ? true : n.party_id) != null
    }),
    r = n.map(e => e.id);
  return [n, r]
}

function f(e, t) {
  if (0 === e.length) return l;
  let n = [];
  return e.forEach(e => {
    var r, i;
    let o = null == (r = e.application) ? true : r.id,
      a = null == (i = e.activity) ? true : i.party_id;
    if (e.id in t || null == o || null == a) return;
    let s = e.timestamp.getTime(),
      l = {
        userId: e.author.id,
        applicationId: o,
        partyId: a,
        messageId: e.id,
        channelId: e.channel_id,
        inviteTime: s
      };
    n.push(l)
  }), n
}

function _(e, t) {
  let [n, o] = r.useMemo(() => d(e, t), [e, t]), a = (0, i.Wu)([s.Z], () => {
    let e = [];
    return n.forEach(t => {
      null != s.Z.findActivity(t.author.id, e => {
        var n, r, i;
        return e.application_id === (null == (n = t.application) ? true : n.id) && (null == (r = e.party) ? true : r.id) === (null == (i = t.activity) ? true : i.party_id)
      }, null, true) && e.push(t.id)
    }), e
  }, [n]);
  return [o, r.useMemo(() => f(n, a), [n, a])]
}

function p(e, t) {
  let [n, i] = _(e, t);
  return r.useEffect(() => {
    for (let e of i) a.Z.isSubscribed(e) || (0, o.L)(e)
  }, [i]), [n, i]
}