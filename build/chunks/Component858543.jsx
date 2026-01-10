/** Chunk was on 87646 **/
/** chunk id: 858543, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  DM: () => p,
  ZP: () => v
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk109434 = require("./109434.js"),
  Chunk456269 = require("./456269.js"),
  Chunk479099 = require("./479099.jsx"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk112021 = require("./112021.js"),
  Chunk458681 = require("./458681.js");

function p(e) {
  let {
    channel: t,
    isNew: n
  } = e, i = (0, u.eV)(t), s = i.slice(true, 3), r = i.slice(3), l = i.length > 3 ? i.length - 3 : 0, a = t.hasFlag(h.zZ.PINNED), o = s.length > 0 || a || n;
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
    className: u
  } = e, {
    shownTags: h,
    remainingTags: v,
    moreTagsCount: b,
    isPinned: x,
    shouldRenderTagsRow: O
  } = p({
    channel: t,
    isNew: n
  }), {
    tagFilter: j
  } = (0, c.H)(t.id);
  return O ? (0, i.jsxs)("div", {
    className: r()(f.tags, u),
    children: [n ? (0, i.jsx)(o.IGR, {
      className: r()(m.newBadge, m.inTagsRow),
      color: l.Z.unsafe_rawColors.BRAND_260.css,
      text: g.intl.string(g.t.y2b7CA)
    }) : null, x && (0, i.jsx)("div", {
      className: f.pinIcon,
      children: (0, i.jsx)(a.u, {
        text: g.intl.string(g.t["1QLRYb"]),
        children: (0, i.jsx)(o.qQX, {
          size: "custom",
          width: 16,
          height: 16,
          color: "white"
        })
      })
    }), h.map(e => (0, i.jsx)(d.Z, {
      tag: e,
      size: d.Z.Sizes.SMALL,
      className: r()(s, {
        [f.tagFiltered]: j.has(e.id)
      })
    }, e.id)), b > 0 ? (0, i.jsx)(d.f, {
      tags: v,
      count: b,
      size: d.Z.Sizes.SMALL
    }) : null]
  }) : null
}