/** Chunk was on 24358 **/
/** chunk id: 216572, original params: t,i,e (module,exports,require) **/
require.d(exports, {
  Cv: () => L,
  HL: () => _,
  KK: () => h,
  Q_: () => u,
  nw: () => S
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk904245 = require("./904245.js"),
  Chunk232567 = require("./232567.js"),
  Chunk430824 = require("./430824.js"),
  Chunk375954 = require("./375954.js"),
  Chunk982168 = require("./982168.js"),
  Chunk893908 = require("./893908.js"),
  Chunk953252 = require("./953252.js");

function u(t) {
  return (0, l.e7)([r.Z], () => {
    if (null == t) returnfalse;
    let i = r.Z.getGuild(t);
    return null != i && (0, g.Z)(i) && null != (0, c.Z)(i)
  })
}

function _(t) {
  return (0, o.P0)(t)
}

function S(t) {
  return (0, o.gT)(t)
}

function L(t) {
  let {
    messageReference: i
  } = t, e = (0, l.e7)([d.Z], () => null != i ? d.Z.getMessage(i.channel_id, i.message_id) : null);
  (0, n.useEffect)(() => {
    null == e && null != i && s.Z.fetchMessages({
      channelId: i.channel_id,
      jump: {
        messageId: i.message_id
      },
      limit: 10
    })
  }, [e, i])
}

function h(t) {
  var i, e;
  let n = null == t || null == (e = t.messageSnapshots[0]) || null == (i = e.moderatorReport) ? true : i.reported_user_id;
  null != n && (0, a.PR)(n)
}