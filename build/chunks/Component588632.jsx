/** Chunk was on 26494 **/
/** chunk id: 588632, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk870269 = require("./870269.js");

function c(e) {
  return null != e && (null != e.id || null != e.name)
}

function d(e) {
  let {
    options: n,
    value: t,
    onChange: d,
    canBeNew: m,
    memberCounts: h
  } = e, x = i.useMemo(() => {
    let e = new Map;
    return n.forEach(n => {
      e.set(n.id, n)
    }), e
  }, [n]), f = i.useMemo(() => {
    let e = [];
    return n.forEach(n => {
      e.push({
        value: n.id,
        label: n.title,
        key: n.id
      })
    }), e
  }, [n]), g = i.useCallback(e => {
    var n, t, i, a;
    if (null == e) return;
    let o = x.get(e.value);
    if (null != o && c(o.emoji)) return (0, l.jsx)(r.Z, {
      emojiId: null == (n = o.emoji) ? true : n.id,
      emojiName: null == (t = o.emoji) ? true : t.name,
      animated: null != (a = null == (i = o.emoji) ? true : i.animated) && a
    })
  }, [x]), p = i.useCallback((e, n) => {
    if (null == e || n.inPill) return;
    let t = x.get(e.value);
    if (null == t || !c(t.emoji)) return;
    let i = null == h || null == t.roleIds ? 0 : Math.max(...t.roleIds.map(e => h[e])),
      r = null != h && i > 0;
    return (0, l.jsxs)("div", {
      className: u.suffix,
      children: [m && t.isUnseen && (0, l.jsx)(o.IGR, {
        color: a.Z.unsafe_rawColors.BRAND_260.css,
        text: s.intl.string(s.t.y2b7CA),
        className: u.newBadge
      }), r && (0, l.jsx)("div", {
        className: u.memberCount,
        "data-hover": true,
        children: (0, l.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "always-white",
          children: s.intl.format(s.t.EgKsZA, {
            memberCount: i
          })
        })
      })]
    })
  }, [m, h, x]), v = i.useCallback(e => {
    let n = [];
    e.forEach(e => {
      let t = x.get(e);
      null != t && n.push(t)
    }), d(n)
  }, [d, x]);
  return (0, l.jsx)(o.VcW, {
    multi: true,
    options: f,
    onChange: v,
    value: t,
    closeOnSelect: false,
    renderOptionSuffix: p,
    renderOptionPrefix: g
  })
}