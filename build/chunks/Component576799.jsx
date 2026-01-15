/** Chunk was on web.js **/
/** chunk id: 576799, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk616780 = require("./616780.js"),
  Chunk937889 = require("./937889.js"),
  Chunk267128 = require("./267128.jsx"),
  Chunk123145 = require("./123145.jsx"),
  Chunk699516 = require("./699516.js"),
  Chunk217702 = require("./217702.js"),
  Chunk549578 = require("./549578.js");

function p(e) {
  let {
    message: t,
    channel: n
  } = e, {
    isBlocked: l,
    isIgnored: d
  } = (0, a.cj)([u.Z], () => ({
    isBlocked: u.Z.isBlockedForMessage(t),
    isIgnored: u.Z.isIgnoredForMessage(t)
  }), [t]), p = i.useMemo(() => ({
    [n.guild_id]: [t.author.id]
  }), [n.guild_id, t.author.id]);
  (0, o.$)(p, "ThreadMessageAccessoryMessage");
  let h = i.useMemo(() => null != t.content && "" !== t.content ? (0, s.ZP)(t, {
    formatInline: true
  }).content : null, [t]);
  return (0, r.jsxs)("div", {
    className: f.threadMessageAccessory,
    children: [(0, r.jsx)("img", {
      alt: "",
      src: t.author.getAvatarURL(n.guild_id, 16),
      className: f.threadMessageAccessoryAvatar
    }), (0, r.jsx)(c.Z, {
      message: t,
      channel: n,
      compact: true
    }), (0, r.jsx)("div", {
      className: f.threadMessageAccessoryPreview,
      children: _(t, h, l, d)
    })]
  })
}

function _(e, t, n, i) {
  let {
    contentPlaceholder: a,
    renderedContent: o,
    leadingIcon: s,
    trailingIcon: c
  } = (0, l.f)(e, t, n, i, f.threadMessageAccessoryContent, {
    trailingIconClass: f.threadMessageAccessoryContentTrailingIcon,
    leadingIconClass: f.threadMessageAccessoryContentLeadingIcon,
    iconSize: d.WW
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [s, null != o ? o : (0, r.jsx)("span", {
      className: f.threadMessageAccessoryPlaceholder,
      children: a
    }), c]
  })
}