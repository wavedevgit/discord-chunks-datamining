/** Chunk was on 22173 **/
/** chunk id: 858543, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  DM: () => x,
  ZP: () => j
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk109434 = require("./109434.js"),
  Chunk456269 = require("./456269.js"),
  Chunk479099 = require("./479099.jsx"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk586301 = require("./586301.js"),
  Chunk240778 = require("./240778.js");

function x(e) {
  let {
    channel: n,
    isNew: t
  } = e, s = (0, u.eV)(n), l = s.slice(true, 3), a = s.slice(3), r = s.length > 3 ? s.length - 3 : 0, i = n.hasFlag(m.zZ.PINNED), o = l.length > 0 || i || t;
  return {
    shownTags: l,
    remainingTags: a,
    moreTagsCount: r,
    isPinned: i,
    shouldRenderTagsRow: o,
    forumPostContainsTags: s.length > 0
  }
}

function j(e) {
  let {
    channel: n,
    isNew: t,
    tagsClassName: l,
    className: u
  } = e, {
    shownTags: m,
    remainingTags: j,
    moreTagsCount: b,
    isPinned: v,
    shouldRenderTagsRow: p
  } = x({
    channel: n,
    isNew: t
  }), {
    tagFilter: N
  } = (0, c.H)(n.id);
  return p ? (0, s.jsxs)("div", {
    className: a()(f.tags, u),
    children: [t ? (0, s.jsx)(o.IGR, {
      className: a()(g.newBadge, g.inTagsRow),
      color: r.Z.unsafe_rawColors.BRAND_260.css,
      text: h.intl.string(h.t.y2b7CA)
    }) : null, v && (0, s.jsx)("div", {
      className: f.pinIcon,
      children: (0, s.jsx)(i.u, {
        text: h.intl.string(h.t["1QLRYb"]),
        children: (0, s.jsx)(o.qQX, {
          size: "custom",
          width: 16,
          height: 16,
          color: "white"
        })
      })
    }), m.map(e => (0, s.jsx)(d.Z, {
      tag: e,
      size: d.Z.Sizes.SMALL,
      className: a()(l, {
        [f.tagFiltered]: N.has(e.id)
      })
    }, e.id)), b > 0 ? (0, s.jsx)(d.f, {
      tags: j,
      count: b,
      size: d.Z.Sizes.SMALL
    }) : null]
  }) : null
}