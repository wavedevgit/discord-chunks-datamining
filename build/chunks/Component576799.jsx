/** Chunk was on 66866 **/
/** chunk id: 576799, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk616780 = require("./616780.js"),
  Chunk905405 = require("./905405.js"),
  Chunk937889 = require("./937889.js"),
  Chunk267128 = require("./267128.jsx"),
  Chunk123145 = require("./123145.jsx"),
  Chunk699516 = require("./699516.js"),
  Chunk217702 = require("./217702.js"),
  Chunk724913 = require("./724913.js");

function f(e) {
  let {
    message: t,
    channel: n
  } = e, {
    isBlocked: f,
    isIgnored: _
  } = (0, l.cj)([d.Z], () => ({
    isBlocked: d.Z.isBlockedForMessage(t),
    isIgnored: d.Z.isIgnoredForMessage(t)
  }), [t]), g = (0, o.p)(), h = i.useMemo(() => ({
    [n.guild_id]: [t.author.id]
  }), [n.guild_id, t.author.id]);
  (0, a.$)(h);
  let b = i.useMemo(() => null != t.content && "" !== t.content ? (0, s.ZP)(t, {
    formatInline: true,
    shouldFilterKeywords: g
  }).content : null, [t, g]);
  return (0, r.jsxs)("div", {
    className: m.threadMessageAccessory,
    children: [(0, r.jsx)("img", {
      alt: "",
      src: t.author.getAvatarURL(n.guild_id, 16),
      className: m.threadMessageAccessoryAvatar
    }), (0, r.jsx)(u.Z, {
      message: t,
      channel: n,
      compact: true
    }), (0, r.jsx)("div", {
      className: m.threadMessageAccessoryPreview,
      children: function(e, t, n, i) {
        let {
          contentPlaceholder: l,
          renderedContent: a,
          leadingIcon: o,
          trailingIcon: s
        } = (0, c.f)(e, t, n, i, m.threadMessageAccessoryContent, {
          trailingIconClass: m.threadMessageAccessoryContentTrailingIcon,
          leadingIconClass: m.threadMessageAccessoryContentLeadingIcon,
          iconSize: p.WW
        });
        return (0, r.jsxs)(r.Fragment, {
          children: [o, null != a ? a : (0, r.jsx)("span", {
            className: m.threadMessageAccessoryPlaceholder,
            children: l
          }), s]
        })
      }(t, b, f, _)
    })]
  })
}