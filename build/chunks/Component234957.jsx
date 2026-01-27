/** Chunk was on 92917 **/
/** chunk id: 234957, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
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
let m = Chunk64700.memo(function(e) {
  let {
    baseMessage: t,
    channel: n,
    referencedMessage: p,
    compact: m = false
  } = e, f = p.state === s.a.LOADED ? p.message : true, g = a.m.useExperiment({
    location: "repliedMessage"
  }).enabled, h = i.useMemo(() => (null == f ? true : f.content) != null && "" !== f.content ? (0, c.Ay)(f, {
    formatInline: true,
    allowGameMentions: g
  }).content : null, [f, g]), {
    isReplyAuthorBlocked: _,
    isReplyAuthorIgnored: b
  } = (0, l.cf)([o.A], () => ({
    isReplyAuthorBlocked: null != f && o.A.isBlockedForMessage(f),
    isReplyAuthorIgnored: null != f && o.A.isIgnoredForMessage(f)
  }), [f]), A = (0, u.X4)(f), y = (0, u.X4)(t);
  return (0, r.jsx)(d.A, {
    repliedAuthor: A,
    baseAuthor: y,
    baseMessage: t,
    channel: n,
    referencedMessage: p,
    content: h,
    compact: m,
    isReplyAuthorBlocked: _,
    isReplyAuthorIgnored: b,
    isReplySpineClickable: false,
    showReplySpine: true
  })
});

function f(e, t, n, i, l) {
  return e.type !== p.lAJ.REPLY || null == n ? null : (0, r.jsx)(m, {
    baseMessage: e,
    channel: t,
    referencedMessage: i,
    compact: l
  })
}