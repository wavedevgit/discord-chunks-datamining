/** Chunk was on 58121 **/
/** chunk id: 588632, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk870269 = require("./870269.js");

function d(e) {
  return null != e && (null != e.id || null != e.name)
}

function u(e) {
  let {
    options: n,
    value: t,
    onChange: u,
    canBeNew: m,
    memberCounts: h
  } = e, p = r.useMemo(() => {
    let e = new Map;
    return n.forEach(n => {
      e.set(n.id, n)
    }), e
  }, [n]), f = r.useMemo(() => {
    let e = [];
    return n.forEach(n => {
      e.push({
        value: n.id,
        label: n.title,
        key: n.id
      })
    }), e
  }, [n]), g = r.useCallback(e => {
    var n, t, r, i;
    if (null == e) return;
    let a = p.get(e.value);
    if (null != a && d(a.emoji)) return (0, l.jsx)(o.Z, {
      emojiId: null == (n = a.emoji) ? true : n.id,
      emojiName: null == (t = a.emoji) ? true : t.name,
      animated: null != (i = null == (r = a.emoji) ? true : r.animated) && i
    })
  }, [p]), x = r.useCallback((e, n) => {
    if (null == e || n.inPill) return;
    let t = p.get(e.value);
    if (null == t || !d(t.emoji)) return;
    let r = null == h || null == t.roleIds ? 0 : Math.max(...t.roleIds.map(e => h[e])),
      o = null != h && r > 0;
    return (0, l.jsxs)("div", {
      className: c.suffix,
      children: [m && t.isUnseen && (0, l.jsx)(a.IGR, {
        color: i.Z.unsafe_rawColors.BRAND_260.css,
        text: s.intl.string(s.t.y2b7CA),
        className: c.newBadge
      }), o && (0, l.jsx)("div", {
        className: c.memberCount,
        "data-hover": true,
        children: (0, l.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "always-white",
          children: s.intl.format(s.t.EgKsZA, {
            memberCount: r
          })
        })
      })]
    })
  }, [m, h, p]), _ = r.useCallback(e => {
    let n = [];
    e.forEach(e => {
      let t = p.get(e);
      null != t && n.push(t)
    }), u(n)
  }, [u, p]);
  return (0, l.jsx)(a.VcW, {
    multi: true,
    options: f,
    onChange: _,
    value: t,
    closeOnSelect: false,
    renderOptionSuffix: x,
    renderOptionPrefix: g
  })
}