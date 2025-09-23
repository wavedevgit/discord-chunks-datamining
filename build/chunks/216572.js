/** Chunk was on 50803 **/
/** chunk id: 216572, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  Cv: () => I,
  HL: () => f,
  KK: () => g,
  Q_: () => _,
  nw: () => p
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

function _(n) {
  return (0, o.e7)([l.Z], () => {
    if (null == n) returnfalse;
    let e = l.Z.getGuild(n);
    return null != e && (0, d.Z)(e) && null != (0, r.Z)(e)
  })
}

function f(n) {
  return (0, u.P0)(n)
}

function p(n) {
  return (0, u.gT)(n)
}

function I(n) {
  let {
    messageReference: e
  } = n, t = (0, o.e7)([s.Z], () => null != e ? s.Z.getMessage(e.channel_id, e.message_id) : null);
  (0, i.useEffect)(() => {
    null == t && null != e && a.Z.fetchMessages({
      channelId: e.channel_id,
      jump: {
        messageId: e.message_id
      },
      limit: 10
    })
  }, [t, e])
}

function g(n) {
  var e, t;
  let i = null == n || null == (t = n.messageSnapshots[0]) || null == (e = t.moderatorReport) ? true : e.reported_user_id;
  null != i && (0, c.PR)(i)
}