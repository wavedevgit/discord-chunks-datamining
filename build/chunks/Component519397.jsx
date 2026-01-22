/** Chunk was on web.js **/
/** chunk id: 519397, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk80682 = require("./80682.js"),
  Chunk465364 = require("./465364.js"),
  Chunk448368 = require("./448368.jsx"),
  Chunk943220 = require("./943220.jsx"),
  Chunk994500 = require("./994500.js"),
  Chunk838541 = require("./838541.js"),
  Chunk679740 = require("./679740.js");

function p(e) {
  let {
    message: t,
    channel: n
  } = e, {
    isBlocked: l,
    isIgnored: d
  } = (0, a.cf)([u.A], () => ({
    isBlocked: u.A.isBlockedForMessage(t),
    isIgnored: u.A.isIgnoredForMessage(t)
  }), [t]), p = i.useMemo(() => ({
    [n.guild_id]: [t.author.id]
  }), [n.guild_id, t.author.id]);
  (0, s.E)(p, "ThreadMessageAccessoryMessage");
  let h = i.useMemo(() => null != t.content && "" !== t.content ? (0, o.Ay)(t, {
    formatInline: true
  }).content : null, [t]);
  return (0, r.jsxs)("div", {
    className: f.up,
    children: [(0, r.jsx)("img", {
      alt: "",
      src: t.author.getAvatarURL(n.guild_id, 16),
      className: f.FJ
    }), (0, r.jsx)(c.A, {
      message: t,
      channel: n,
      compact: true
    }), (0, r.jsx)("div", {
      className: f.Au,
      children: _(t, h, l, d)
    })]
  })
}

function _(e, t, n, i) {
  let {
    contentPlaceholder: a,
    renderedContent: s,
    leadingIcon: o,
    trailingIcon: c
  } = (0, l.o)(e, t, n, i, f.tP, {
    trailingIconClass: f._v,
    leadingIconClass: f.a5,
    iconSize: d.eJ
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [o, null != s ? s : (0, r.jsx)("span", {
      className: f.dp,
      children: a
    }), c]
  })
}