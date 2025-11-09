/** Chunk was on 26494 **/
/** chunk id: 588632, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk629498 = require("./629498.js");

function u(e) {
  return null != e && (null != e.id || null != e.name)
}

function d(e) {
  let {
    options: t,
    value: n,
    onChange: d,
    canBeNew: m,
    memberCounts: p
  } = e, h = i.useMemo(() => {
    let e = new Map;
    return t.forEach(t => {
      e.set(t.id, t)
    }), e
  }, [t]), f = i.useMemo(() => {
    let e = [];
    return t.forEach(t => {
      e.push({
        value: t.id,
        label: t.title,
        key: t.id
      })
    }), e
  }, [t]), g = i.useCallback(e => {
    var t, n, i, r;
    if (null == e) return;
    let o = h.get(e.value);
    if (null != o && u(o.emoji)) return (0, l.jsx)(a.Z, {
      emojiId: null == (t = o.emoji) ? true : t.id,
      emojiName: null == (n = o.emoji) ? true : n.name,
      animated: null != (r = null == (i = o.emoji) ? true : i.animated) && r
    })
  }, [h]), j = i.useCallback((e, t) => {
    if (null == e || t.inPill) return;
    let n = h.get(e.value);
    if (null == n || !u(n.emoji)) return;
    let i = null == p || null == n.roleIds ? 0 : Math.max(...n.roleIds.map(e => p[e])),
      a = null != p && i > 0;
    return (0, l.jsxs)("div", {
      className: s.suffix,
      children: [m && n.isUnseen && (0, l.jsx)(o.IGR, {
        color: r.Z.unsafe_rawColors.BRAND_260.css,
        text: c.intl.string(c.t.y2b7CA),
        className: s.newBadge
      }), a && (0, l.jsx)("div", {
        className: s.memberCount,
        "data-hover": true,
        children: (0, l.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "always-white",
          children: c.intl.format(c.t.EgKsZA, {
            memberCount: i
          })
        })
      })]
    })
  }, [m, p, h]), v = i.useCallback(e => {
    let t = [];
    e.forEach(e => {
      let n = h.get(e);
      null != n && t.push(n)
    }), d(t)
  }, [d, h]);
  return (0, l.jsx)(o.VcW, {
    multi: true,
    options: f,
    onChange: v,
    value: n,
    closeOnSelect: false,
    renderOptionSuffix: j,
    renderOptionPrefix: g
  })
}