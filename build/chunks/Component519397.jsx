/** Chunk was on 92917 **/
/** chunk id: 519397, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
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

function m(e) {
  let {
    message: t,
    channel: n
  } = e, {
    isBlocked: m,
    isIgnored: f
  } = (0, l.cf)([u.A], () => ({
    isBlocked: u.A.isBlockedForMessage(t),
    isIgnored: u.A.isIgnoredForMessage(t)
  }), [t]), g = i.useMemo(() => ({
    [n.guild_id]: [t.author.id]
  }), [n.guild_id, t.author.id]);
  (0, a.E)(g, "ThreadMessageAccessoryMessage");
  let h = i.useMemo(() => null != t.content && "" !== t.content ? (0, s.Ay)(t, {
    formatInline: true
  }).content : null, [t]);
  return (0, r.jsxs)("div", {
    className: p.up,
    children: [(0, r.jsx)("img", {
      alt: "",
      src: t.author.getAvatarURL(n.guild_id, 16),
      className: p.FJ
    }), (0, r.jsx)(c.A, {
      message: t,
      channel: n,
      compact: true
    }), (0, r.jsx)("div", {
      className: p.Au,
      children: function(e, t, n, i) {
        let {
          contentPlaceholder: l,
          renderedContent: a,
          leadingIcon: s,
          trailingIcon: c
        } = (0, o.o)(e, t, n, i, p.tP, {
          trailingIconClass: p._v,
          leadingIconClass: p.a5,
          iconSize: d.eJ
        });
        return (0, r.jsxs)(r.Fragment, {
          children: [s, null != a ? a : (0, r.jsx)("span", {
            className: p.dp,
            children: l
          }), c]
        })
      }(t, h, m, f)
    })]
  })
}