/** Chunk was on 66866 **/
/** chunk id: 56744, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk627050 = require("./627050.js"),
  Chunk905405 = require("./905405.js"),
  Chunk869765 = require("./869765.js"),
  Chunk699516 = require("./699516.js"),
  Chunk937889 = require("./937889.js"),
  Chunk739566 = require("./739566.js"),
  Chunk267128 = require("./267128.jsx"),
  Chunk981631 = require("./981631.js");
let f = Chunk647438.memo(function(e) {
  let {
    baseMessage: t,
    channel: n,
    referencedMessage: m,
    compact: f = false
  } = e, _ = m.state === s.Y.LOADED ? m.message : true, g = (0, o.p)(), h = a.d.useExperiment({
    location: "repliedMessage"
  }).enabled, b = i.useMemo(() => (null == _ ? true : _.content) != null && "" !== _.content ? (0, u.ZP)(_, {
    formatInline: true,
    allowGameMentions: h,
    shouldFilterKeywords: g
  }).content : null, [_, g, h]), {
    isReplyAuthorBlocked: E,
    isReplyAuthorIgnored: C
  } = (0, l.cj)([c.Z], () => ({
    isReplyAuthorBlocked: null != _ && c.Z.isBlockedForMessage(_),
    isReplyAuthorIgnored: null != _ && c.Z.isIgnoredForMessage(_)
  }), [_]), v = (0, d.Uj)(_), O = (0, d.Uj)(t);
  return (0, r.jsx)(p.Z, {
    repliedAuthor: v,
    baseAuthor: O,
    baseMessage: t,
    channel: n,
    referencedMessage: m,
    content: b,
    compact: f,
    isReplyAuthorBlocked: E,
    isReplyAuthorIgnored: C,
    isReplySpineClickable: false,
    showReplySpine: true
  })
});

function _(e, t, n, i, l) {
  return e.type !== m.uaV.REPLY || null == n ? null : (0, r.jsx)(f, {
    baseMessage: e,
    channel: t,
    referencedMessage: i,
    compact: l
  })
}