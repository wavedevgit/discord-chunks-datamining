/** Chunk was on web.js **/
/** chunk id: 56744, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk627050 = require("./627050.js"),
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
    referencedMessage: f,
    compact: p = false
  } = e, _ = f.state === s.Y.LOADED ? f.message : true, m = o.d.useExperiment({
    location: "repliedMessage"
  }).enabled, h = i.useMemo(() => (null == _ ? true : _.content) != null && "" !== _.content ? (0, c.ZP)(_, {
    formatInline: true,
    allowGameMentions: m
  }).content : null, [_, m]), {
    isReplyAuthorBlocked: g,
    isReplyAuthorIgnored: E
  } = (0, a.cj)([l.Z], () => ({
    isReplyAuthorBlocked: null != _ && l.Z.isBlockedForMessage(_),
    isReplyAuthorIgnored: null != _ && l.Z.isIgnoredForMessage(_)
  }), [_]), b = (0, u.Uj)(_), y = (0, u.Uj)(t);
  return (0, r.jsx)(d.Z, {
    repliedAuthor: b,
    baseAuthor: y,
    baseMessage: t,
    channel: n,
    referencedMessage: f,
    content: h,
    compact: p,
    isReplyAuthorBlocked: g,
    isReplyAuthorIgnored: E,
    isReplySpineClickable: false,
    showReplySpine: true
  })
});

function _(e, t, n, i, a) {
  return e.type !== f.uaV.REPLY || null == n ? null : (0, r.jsx)(p, {
    baseMessage: e,
    channel: t,
    referencedMessage: i,
    compact: a
  })
}