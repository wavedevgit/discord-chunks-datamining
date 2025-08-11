/** Chunk was on web.js **/
/** chunk id: 56744, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk905405 = require("./905405.js"),
  Chunk869765 = require("./869765.js"),
  Chunk699516 = require("./699516.js"),
  Chunk937889 = require("./937889.js"),
  Chunk739566 = require("./739566.js"),
  Chunk267128 = require("./267128.jsx"),
  Chunk981631 = require("./981631.js");
let _ = Chunk73800.memo(function(e) {
  let {
    baseMessage: t,
    channel: n,
    referencedMessage: f,
    compact: _ = false
  } = e, p = f.state === s.Y.LOADED ? f.message : true, h = (0, a.p)(), m = i.useMemo(() => (null == p ? true : p.content) != null && "" !== p.content ? (0, c.ZP)(p, {
    formatInline: true,
    shouldFilterKeywords: h
  }).content : null, [p, h]), {
    isReplyAuthorBlocked: g,
    isReplyAuthorIgnored: E
  } = (0, o.cj)([l.Z], () => ({
    isReplyAuthorBlocked: null != p && l.Z.isBlockedForMessage(p),
    isReplyAuthorIgnored: null != p && l.Z.isIgnoredForMessage(p)
  }), [p]), b = (0, u.Uj)(p), y = (0, u.Uj)(t);
  return (0, r.jsx)(d.Z, {
    repliedAuthor: b,
    baseAuthor: y,
    baseMessage: t,
    channel: n,
    referencedMessage: f,
    content: m,
    compact: _,
    isReplyAuthorBlocked: g,
    isReplyAuthorIgnored: E,
    isReplySpineClickable: false,
    showReplySpine: true
  })
});

function p(e, t, n, i, o) {
  return e.type !== f.uaV.REPLY || null == n ? null : (0, r.jsx)(_, {
    baseMessage: e,
    channel: t,
    referencedMessage: i,
    compact: o
  })
}