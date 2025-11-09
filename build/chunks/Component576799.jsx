/** Chunk was on web.js **/
/** chunk id: 576799, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk616780 = require("./616780.js"),
  Chunk905405 = require("./905405.js"),
  Chunk937889 = require("./937889.js"),
  Chunk267128 = require("./267128.jsx"),
  Chunk123145 = require("./123145.jsx"),
  Chunk699516 = require("./699516.js"),
  Chunk217702 = require("./217702.js"),
  Chunk136907 = require("./136907.js");

function p(e) {
  let {
    message: t,
    channel: n
  } = e, {
    isBlocked: c,
    isIgnored: f
  } = (0, a.cj)([d.Z], () => ({
    isBlocked: d.Z.isBlockedForMessage(t),
    isIgnored: d.Z.isIgnoredForMessage(t)
  }), [t]), p = (0, s.p)(), m = i.useMemo(() => ({
    [n.guild_id]: [t.author.id]
  }), [n.guild_id, t.author.id]);
  (0, o.$)(m, "ThreadMessageAccessoryMessage");
  let g = i.useMemo(() => null != t.content && "" !== t.content ? (0, l.ZP)(t, {
    formatInline: true,
    shouldFilterKeywords: p
  }).content : null, [t, p]);
  return (0, r.jsxs)("div", {
    className: _.threadMessageAccessory,
    children: [(0, r.jsx)("img", {
      alt: "",
      src: t.author.getAvatarURL(n.guild_id, 16),
      className: _.threadMessageAccessoryAvatar
    }), (0, r.jsx)(u.Z, {
      message: t,
      channel: n,
      compact: true
    }), (0, r.jsx)("div", {
      className: _.threadMessageAccessoryPreview,
      children: h(t, g, c, f)
    })]
  })
}

function h(e, t, n, i) {
  let {
    contentPlaceholder: a,
    renderedContent: o,
    leadingIcon: s,
    trailingIcon: l
  } = (0, c.f)(e, t, n, i, _.threadMessageAccessoryContent, {
    trailingIconClass: _.threadMessageAccessoryContentTrailingIcon,
    leadingIconClass: _.threadMessageAccessoryContentLeadingIcon,
    iconSize: f.WW
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [s, null != o ? o : (0, r.jsx)("span", {
      className: _.threadMessageAccessoryPlaceholder,
      children: a
    }), l]
  })
}