/** Chunk was on web.js **/
/** chunk id: 216572, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cv: () => h,
  HL: () => _,
  KK: () => m,
  Q_: () => f,
  nw: () => p
});
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk904245 = require("./904245.js"),
  Chunk232567 = require("./232567.js"),
  Chunk430824 = require("./430824.js"),
  Chunk375954 = require("./375954.js"),
  Chunk982168 = require("./982168.js"),
  Chunk893908 = require("./893908.js"),
  Chunk953252 = require("./953252.js");

function f(e) {
  return (0, i.e7)([s.Z], () => {
    if (null == e) returnfalse;
    let t = s.Z.getGuild(e);
    return null != t && (0, d.Z)(t) && null != (0, u.Z)(t)
  })
}

function _(e) {
  return (0, c.P0)(e)
}

function p(e) {
  return (0, c.gT)(e)
}

function h(e) {
  let {
    messageReference: t
  } = e, n = (0, i.e7)([l.Z], () => null != t ? l.Z.getMessage(t.channel_id, t.message_id) : null);
  (0, r.useEffect)(() => {
    null == n && null != t && o.Z.fetchMessages({
      channelId: t.channel_id,
      jump: {
        messageId: t.message_id
      },
      limit: 10
    })
  }, [n, t])
}

function m(e) {
  var t, n;
  let r = null == e || null == (n = e.messageSnapshots[0]) || null == (t = n.moderatorReport) ? true : t.reported_user_id;
  null != r && (0, a.PR)(r)
}