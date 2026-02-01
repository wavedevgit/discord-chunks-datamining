/** Chunk was on 7602 **/
/** chunk id: 52933, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  Ay: () => f,
  BA: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk827734 = require("./827734.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk422844 = require("./422844.js"),
  Chunk435470 = require("./435470.js"),
  Chunk376310 = require("./376310.jsx"),
  Chunk746080 = require("./746080.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk558997 = require("./558997.js"),
  Chunk902049 = require("./902049.js");

function p(e) {
  let {
    channel: t,
    isNew: s
  } = e, i = (0, h.kt)(t), n = i.slice(true, 3), r = i.slice(3), l = i.length > 3 ? i.length - 3 : 0, a = t.hasFlag(u.lx.PINNED), o = n.length > 0 || a || s;
  return {
    shownTags: n,
    remainingTags: r,
    moreTagsCount: l,
    isPinned: a,
    shouldRenderTagsRow: o,
    forumPostContainsTags: i.length > 0
  }
}

function f(e) {
  let {
    channel: t,
    isNew: s,
    tagsClassName: n,
    className: h
  } = e, {
    shownTags: u,
    remainingTags: f,
    moreTagsCount: x,
    isPinned: A,
    shouldRenderTagsRow: b
  } = p({
    channel: t,
    isNew: s
  }), {
    tagFilter: j
  } = (0, d.R)(t.id);
  return b ? (0, i.jsxs)("div", {
    className: r()(v._A, h),
    children: [s ? (0, i.jsx)(o.LpS, {
      className: r()(m.Ad, m.PP),
      color: l.A.unsafe_rawColors.BRAND_260.css,
      text: g.intl.string(g.t.y2b7CA)
    }) : null, A && (0, i.jsx)("div", {
      className: v.Ne,
      children: (0, i.jsx)(a.m, {
        text: g.intl.string(g.t["1QLRYb"]),
        children: (0, i.jsx)(o.tsw, {
          size: "custom",
          width: 16,
          height: 16,
          color: "white"
        })
      })
    }), u.map(e => (0, i.jsx)(c.A, {
      tag: e,
      size: c.A.Sizes.SMALL,
      className: r()(n, {
        [v.At]: j.has(e.id)
      })
    }, e.id)), x > 0 ? (0, i.jsx)(c.q, {
      tags: f,
      count: x,
      size: c.A.Sizes.SMALL
    }) : null]
  }) : null
}