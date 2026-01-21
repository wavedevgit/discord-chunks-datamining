/** Chunk was on 68294 **/
/** chunk id: 216572, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Cv: () => S,
  HL: () => _,
  KK: () => E,
  Q_: () => g,
  nw: () => f
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

function g(t) {
  return (0, l.e7)([r.Z], () => {
    if (null == t) returnfalse;
    let e = r.Z.getGuild(t);
    return null != e && (0, c.Z)(e) && null != (0, u.Z)(e)
  })
}

function _(t) {
  return (0, d.P0)(t)
}

function f(t) {
  return (0, d.gT)(t)
}

function S(t) {
  let {
    messageReference: e
  } = t, n = (0, l.e7)([o.Z], () => null != e ? o.Z.getMessage(e.channel_id, e.message_id) : null);
  (0, i.useEffect)(() => {
    null == n && null != e && a.Z.fetchMessages({
      channelId: e.channel_id,
      jump: {
        messageId: e.message_id
      },
      limit: 10
    })
  }, [n, e])
}

function E(t) {
  var e, n;
  let i = null == t || null == (n = t.messageSnapshots[0]) || null == (e = n.moderatorReport) ? true : e.reported_user_id;
  null != i && (0, s.PR)(i)
}