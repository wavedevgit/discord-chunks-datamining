/** Chunk was on web.js **/
/** chunk id: 56744, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk627050 = require("./627050.js"),
  Chunk905405 = require("./905405.js"),
  Chunk869765 = require("./869765.js"),
  Chunk699516 = require("./699516.js"),
  Chunk937889 = require("./937889.js"),
  Chunk739566 = require("./739566.js"),
  Chunk267128 = require("./267128.jsx"),
  Chunk981631 = require("./981631.js");
let _ = Chunk473749.memo(function(e) {
  let {
    baseMessage: t,
    channel: n,
    referencedMessage: p,
    compact: _ = false
  } = e, m = p.state === l.Y.LOADED ? p.message : true, h = (0, s.p)(), g = o.d.useExperiment({
    location: "repliedMessage"
  }).enabled, E = i.useMemo(() => (null == m ? true : m.content) != null && "" !== m.content ? (0, u.ZP)(m, {
    formatInline: true,
    allowGameMentions: g,
    shouldFilterKeywords: h
  }).content : null, [m, h, g]), {
    isReplyAuthorBlocked: b,
    isReplyAuthorIgnored: y
  } = (0, a.cj)([c.Z], () => ({
    isReplyAuthorBlocked: null != m && c.Z.isBlockedForMessage(m),
    isReplyAuthorIgnored: null != m && c.Z.isIgnoredForMessage(m)
  }), [m]), O = (0, d.Uj)(m), v = (0, d.Uj)(t);
  return (0, r.jsx)(f.Z, {
    repliedAuthor: O,
    baseAuthor: v,
    baseMessage: t,
    channel: n,
    referencedMessage: p,
    content: E,
    compact: _,
    isReplyAuthorBlocked: b,
    isReplyAuthorIgnored: y,
    isReplySpineClickable: false,
    showReplySpine: true
  })
});

function m(e, t, n, i, a) {
  return e.type !== p.uaV.REPLY || null == n ? null : (0, r.jsx)(_, {
    baseMessage: e,
    channel: t,
    referencedMessage: i,
    compact: a
  })
}