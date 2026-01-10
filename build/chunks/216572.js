/** Chunk was on 94207 **/
/** chunk id: 216572, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Cv: () => h,
  HL: () => p,
  KK: () => m,
  Q_: () => f,
  nw: () => b
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk904245 = require("./904245.js"),
  Chunk232567 = require("./232567.js"),
  Chunk430824 = require("./430824.js"),
  Chunk375954 = require("./375954.js"),
  Chunk982168 = require("./982168.js"),
  Chunk893908 = require("./893908.js"),
  Chunk953252 = require("./953252.js");

function f(e) {
  return (0, r.e7)([o.Z], () => {
    if (null == e) returnfalse;
    let n = o.Z.getGuild(e);
    return null != n && (0, d.Z)(n) && null != (0, u.Z)(n)
  })
}

function p(e) {
  return (0, s.P0)(e)
}

function b(e) {
  return (0, s.gT)(e)
}

function h(e) {
  let {
    messageReference: n
  } = e, t = (0, r.e7)([c.Z], () => null != n ? c.Z.getMessage(n.channel_id, n.message_id) : null);
  (0, l.useEffect)(() => {
    null == t && null != n && a.Z.fetchMessages({
      channelId: n.channel_id,
      jump: {
        messageId: n.message_id
      },
      limit: 10
    })
  }, [t, n])
}

function m(e) {
  var n, t;
  let l = null == e || null == (t = e.messageSnapshots[0]) || null == (n = t.moderatorReport) ? true : n.reported_user_id;
  null != l && (0, i.PR)(l)
}