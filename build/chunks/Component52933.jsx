/** Chunk was on 48898 **/
/** chunk id: 52933, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => v,
  BA: () => f
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

function f(e) {
  let {
    channel: t,
    isNew: n
  } = e, i = (0, d.kt)(t), s = i.slice(true, 3), r = i.slice(3), l = i.length > 3 ? i.length - 3 : 0, a = t.hasFlag(h.lx.PINNED), o = s.length > 0 || a || n;
  return {
    shownTags: s,
    remainingTags: r,
    moreTagsCount: l,
    isPinned: a,
    shouldRenderTagsRow: o,
    forumPostContainsTags: i.length > 0
  }
}

function v(e) {
  let {
    channel: t,
    isNew: n,
    tagsClassName: s,
    className: d
  } = e, {
    shownTags: h,
    remainingTags: v,
    moreTagsCount: b,
    isPinned: A,
    shouldRenderTagsRow: O
  } = f({
    channel: t,
    isNew: n
  }), {
    tagFilter: x
  } = (0, c.R)(t.id);
  return O ? (0, i.jsxs)("div", {
    className: r()(p._A, d),
    children: [n ? (0, i.jsx)(o.LpS, {
      className: r()(m.Ad, m.PP),
      color: l.A.unsafe_rawColors.BRAND_260.css,
      text: g.intl.string(g.t.y2b7CA)
    }) : null, A && (0, i.jsx)("div", {
      className: p.Ne,
      children: (0, i.jsx)(a.m, {
        text: g.intl.string(g.t["1QLRYb"]),
        children: (0, i.jsx)(o.tsw, {
          size: "custom",
          width: 16,
          height: 16,
          color: "white"
        })
      })
    }), h.map(e => (0, i.jsx)(u.A, {
      tag: e,
      size: u.A.Sizes.SMALL,
      className: r()(s, {
        [p.At]: x.has(e.id)
      })
    }, e.id)), b > 0 ? (0, i.jsx)(u.q, {
      tags: v,
      count: b,
      size: u.A.Sizes.SMALL
    }) : null]
  }) : null
}