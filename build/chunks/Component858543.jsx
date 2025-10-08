/** Chunk was on 22173 **/
/** chunk id: 858543, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  DM: () => x,
  ZP: () => j
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk109434 = require("./109434.js"),
  Chunk456269 = require("./456269.js"),
  Chunk479099 = require("./479099.jsx"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk262008 = require("./262008.js"),
  Chunk521630 = require("./521630.js");

function x(e) {
  let {
    channel: t,
    isNew: n
  } = e, l = (0, u.eV)(t), a = l.slice(true, 3), s = l.slice(3), r = l.length > 3 ? l.length - 3 : 0, i = t.hasFlag(m.zZ.PINNED), o = a.length > 0 || i || n;
  return {
    shownTags: a,
    remainingTags: s,
    moreTagsCount: r,
    isPinned: i,
    shouldRenderTagsRow: o,
    forumPostContainsTags: l.length > 0
  }
}

function j(e) {
  let {
    channel: t,
    isNew: n,
    tagsClassName: a,
    className: u
  } = e, {
    shownTags: m,
    remainingTags: j,
    moreTagsCount: b,
    isPinned: p,
    shouldRenderTagsRow: v
  } = x({
    channel: t,
    isNew: n
  }), {
    tagFilter: N
  } = (0, c.H)(t.id);
  return v ? (0, l.jsxs)("div", {
    className: s()(f.tags, u),
    children: [n ? (0, l.jsx)(o.IGR, {
      className: s()(g.newBadge, g.inTagsRow),
      color: r.Z.unsafe_rawColors.BRAND_260.css,
      text: h.intl.string(h.t.y2b7CA)
    }) : null, p && (0, l.jsx)("div", {
      className: f.pinIcon,
      children: (0, l.jsx)(i.u, {
        text: h.intl.string(h.t["1QLRYW"]),
        children: (0, l.jsx)(o.qQX, {
          size: "custom",
          width: 16,
          height: 16,
          color: "white"
        })
      })
    }), m.map(e => (0, l.jsx)(d.Z, {
      tag: e,
      size: d.Z.Sizes.SMALL,
      className: s()(a, {
        [f.tagFiltered]: N.has(e.id)
      })
    }, e.id)), b > 0 ? (0, l.jsx)(d.f, {
      tags: j,
      count: b,
      size: d.Z.Sizes.SMALL
    }) : null]
  }) : null
}