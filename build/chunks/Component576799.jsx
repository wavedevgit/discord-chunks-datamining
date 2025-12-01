/** Chunk was on web.js **/
/** chunk id: 576799, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk616780 = require("./616780.js"),
  Chunk905405 = require("./905405.js"),
  Chunk937889 = require("./937889.js"),
  Chunk267128 = require("./267128.jsx"),
  Chunk123145 = require("./123145.jsx"),
  Chunk699516 = require("./699516.js"),
  Chunk217702 = require("./217702.js"),
  Chunk724913 = require("./724913.js");

function _(e) {
  let {
    message: t,
    channel: n
  } = e, {
    isBlocked: c,
    isIgnored: f
  } = (0, a.cj)([d.Z], () => ({
    isBlocked: d.Z.isBlockedForMessage(t),
    isIgnored: d.Z.isIgnoredForMessage(t)
  }), [t]), _ = (0, s.p)(), h = i.useMemo(() => ({
    [n.guild_id]: [t.author.id]
  }), [n.guild_id, t.author.id]);
  (0, o.$)(h, "ThreadMessageAccessoryMessage");
  let g = i.useMemo(() => null != t.content && "" !== t.content ? (0, l.ZP)(t, {
    formatInline: true,
    shouldFilterKeywords: _
  }).content : null, [t, _]);
  return (0, r.jsxs)("div", {
    className: p.threadMessageAccessory,
    children: [(0, r.jsx)("img", {
      alt: "",
      src: t.author.getAvatarURL(n.guild_id, 16),
      className: p.threadMessageAccessoryAvatar
    }), (0, r.jsx)(u.Z, {
      message: t,
      channel: n,
      compact: true
    }), (0, r.jsx)("div", {
      className: p.threadMessageAccessoryPreview,
      children: m(t, g, c, f)
    })]
  })
}

function m(e, t, n, i) {
  let {
    contentPlaceholder: a,
    renderedContent: o,
    leadingIcon: s,
    trailingIcon: l
  } = (0, c.f)(e, t, n, i, p.threadMessageAccessoryContent, {
    trailingIconClass: p.threadMessageAccessoryContentTrailingIcon,
    leadingIconClass: p.threadMessageAccessoryContentLeadingIcon,
    iconSize: f.WW
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [s, null != o ? o : (0, r.jsx)("span", {
      className: p.threadMessageAccessoryPlaceholder,
      children: a
    }), l]
  })
}