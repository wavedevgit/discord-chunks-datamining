/** Chunk was on 26494 **/
/** chunk id: 588632, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk692547 = require("./692547.js"),
  Chunk668339 = require("./668339.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk870269 = require("./870269.js");

function d(e) {
  return null != e && (null != e.id || null != e.name)
}

function m(e) {
  let {
    options: t,
    value: n,
    onChange: m,
    canBeNew: p,
    memberCounts: h
  } = e, f = i.useMemo(() => {
    let e = new Map;
    return t.forEach(t => {
      e.set(t.id, t)
    }), e
  }, [t]), g = i.useMemo(() => {
    let e = [];
    return t.forEach(t => {
      e.push({
        value: t.id,
        label: t.title,
        key: t.id
      })
    }), e
  }, [t]), j = i.useCallback(e => {
    var t, n, i, r;
    if (null == e) return;
    let o = f.get(e.value);
    if (null != o && d(o.emoji)) return (0, l.jsx)(c.Z, {
      emojiId: null == (t = o.emoji) ? true : t.id,
      emojiName: null == (n = o.emoji) ? true : n.name,
      animated: null != (r = null == (i = o.emoji) ? true : i.animated) && r
    })
  }, [f]), x = i.useCallback((e, t) => {
    if (null == e || t.inPill) return;
    let n = f.get(e.value);
    if (null == n || !d(n.emoji)) return;
    let i = null == h || null == n.roleIds ? 0 : Math.max(...n.roleIds.map(e => h[e])),
      o = null != h && i > 0;
    return (0, l.jsxs)("div", {
      className: u.suffix,
      children: [p && n.isUnseen && (0, l.jsx)(a.IGR, {
        color: r.Z.unsafe_rawColors.BRAND_260.css,
        text: s.intl.string(s.t.y2b7CA),
        className: u.newBadge
      }), o && (0, l.jsx)("div", {
        className: u.memberCount,
        "data-hover": true,
        children: (0, l.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "always-white",
          children: s.intl.format(s.t.EgKsZA, {
            memberCount: i
          })
        })
      })]
    })
  }, [p, h, f]), v = i.useCallback(e => {
    let t = [];
    e.forEach(e => {
      let n = f.get(e);
      null != n && t.push(n)
    }), m(t)
  }, [m, f]);
  return (0, l.jsx)(o.d, {
    multi: true,
    options: g,
    onChange: v,
    value: n,
    closeOnSelect: false,
    renderOptionSuffix: x,
    renderOptionPrefix: j
  })
}