/** Chunk was on web.js **/
/** chunk id: 56744, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
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
let p = Chunk473749.memo(function(e) {
  let {
    baseMessage: t,
    channel: n,
    referencedMessage: _,
    compact: p = false
  } = e, h = _.state === l.Y.LOADED ? _.message : true, m = (0, s.p)(), g = o.d.useExperiment({
    location: "repliedMessage"
  }).enabled, E = i.useMemo(() => (null == h ? true : h.content) != null && "" !== h.content ? (0, u.ZP)(h, {
    formatInline: true,
    allowGameMentions: g,
    shouldFilterKeywords: m
  }).content : null, [h, m, g]), {
    isReplyAuthorBlocked: b,
    isReplyAuthorIgnored: y
  } = (0, a.cj)([c.Z], () => ({
    isReplyAuthorBlocked: null != h && c.Z.isBlockedForMessage(h),
    isReplyAuthorIgnored: null != h && c.Z.isIgnoredForMessage(h)
  }), [h]), O = (0, d.Uj)(h), v = (0, d.Uj)(t);
  return (0, r.jsx)(f.Z, {
    repliedAuthor: O,
    baseAuthor: v,
    baseMessage: t,
    channel: n,
    referencedMessage: _,
    content: E,
    compact: p,
    isReplyAuthorBlocked: b,
    isReplyAuthorIgnored: y,
    isReplySpineClickable: false,
    showReplySpine: true
  })
});

function h(e, t, n, i, a) {
  return e.type !== _.uaV.REPLY || null == n ? null : (0, r.jsx)(p, {
    baseMessage: e,
    channel: t,
    referencedMessage: i,
    compact: a
  })
}