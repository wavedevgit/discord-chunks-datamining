/** Chunk was on web.js **/
/** chunk id: 234957, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk352505 = require("./352505.js"),
  Chunk9842 = require("./9842.js"),
  Chunk994500 = require("./994500.js"),
  Chunk465364 = require("./465364.js"),
  Chunk763754 = require("./763754.js"),
  Chunk448368 = require("./448368.jsx"),
  Chunk652215 = require("./652215.js");
let p = Chunk64700.memo(function(e) {
  let {
    baseMessage: t,
    channel: n,
    referencedMessage: f,
    compact: p = false
  } = e, _ = f.state === o.a.LOADED ? f.message : true, h = s.m.useExperiment({
    location: "repliedMessage"
  }).enabled, m = i.useMemo(() => (null == _ ? true : _.content) != null && "" !== _.content ? (0, c.Ay)(_, {
    formatInline: true,
    allowGameMentions: h
  }).content : null, [_, h]), {
    isReplyAuthorBlocked: g,
    isReplyAuthorIgnored: E
  } = (0, a.cf)([l.A], () => ({
    isReplyAuthorBlocked: null != _ && l.A.isBlockedForMessage(_),
    isReplyAuthorIgnored: null != _ && l.A.isIgnoredForMessage(_)
  }), [_]), y = (0, u.X4)(_), b = (0, u.X4)(t);
  return (0, r.jsx)(d.A, {
    repliedAuthor: y,
    baseAuthor: b,
    baseMessage: t,
    channel: n,
    referencedMessage: f,
    content: m,
    compact: p,
    isReplyAuthorBlocked: g,
    isReplyAuthorIgnored: E,
    isReplySpineClickable: false,
    showReplySpine: true
  })
});

function _(e, t, n, i, a) {
  return e.type !== f.lAJ.REPLY || null == n ? null : (0, r.jsx)(p, {
    baseMessage: e,
    channel: t,
    referencedMessage: i,
    compact: a
  })
}