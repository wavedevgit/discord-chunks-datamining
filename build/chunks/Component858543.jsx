/** Chunk was on 22173 **/
/** chunk id: 858543, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  DM: () => f,
  ZP: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk109434 = require("./109434.js"),
  Chunk456269 = require("./456269.js"),
  Chunk479099 = require("./479099.jsx"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk586301 = require("./586301.js"),
  Chunk240778 = require("./240778.js");

function f(e) {
  let {
    channel: t,
    isNew: n
  } = e, r = (0, c.eV)(t), a = r.slice(true, 3), s = r.slice(3), l = r.length > 3 ? r.length - 3 : 0, i = t.hasFlag(d.zZ.PINNED), o = a.length > 0 || i || n;
  return {
    shownTags: a,
    remainingTags: s,
    moreTagsCount: l,
    isPinned: i,
    shouldRenderTagsRow: o,
    forumPostContainsTags: r.length > 0
  }
}

function b(e) {
  let {
    channel: t,
    isNew: n,
    tagsClassName: a,
    className: c
  } = e, {
    shownTags: d,
    remainingTags: b,
    moreTagsCount: p,
    isPinned: j,
    shouldRenderTagsRow: x
  } = f({
    channel: t,
    isNew: n
  }), {
    tagFilter: v
  } = (0, o.H)(t.id);
  return x ? (0, r.jsxs)("div", {
    className: s()(g.tags, c),
    children: [n ? (0, r.jsx)(i.IGR, {
      className: s()(h.newBadge, h.inTagsRow),
      color: l.Z.unsafe_rawColors.BRAND_260.css,
      text: m.intl.string(m.t.y2b7CA)
    }) : null, j && (0, r.jsx)("div", {
      className: g.pinIcon,
      children: (0, r.jsx)(i.ua7, {
        text: m.intl.string(m.t["1QLRYW"]),
        children: e => {
          var t, n;
          return (0, r.jsx)(i.qQX, (t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                var r;
                r = n[t], t in e ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = r
              })
            }
            return e
          }({
            size: "custom"
          }, e), n = n = {
            width: 16,
            height: 16,
            color: "white"
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
          }), t))
        }
      })
    }), d.map(e => (0, r.jsx)(u.Z, {
      tag: e,
      size: u.Z.Sizes.SMALL,
      className: s()(a, {
        [g.tagFiltered]: v.has(e.id)
      })
    }, e.id)), p > 0 ? (0, r.jsx)(u.f, {
      tags: b,
      count: p,
      size: u.Z.Sizes.SMALL
    }) : null]
  }) : null
}