/** Chunk was on 16939 **/
/** chunk id: 839447, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk827734 = require("./827734.js"),
  Chunk444550 = require("./444550.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk745939 = require("./745939.js");

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
  } = e, f = r.useMemo(() => {
    let e = new Map;
    return t.forEach(t => {
      e.set(t.id, t)
    }), e
  }, [t]), g = r.useMemo(() => {
    let e = [];
    return t.forEach(t => {
      e.push({
        value: t.id,
        label: t.title,
        key: t.id
      })
    }), e
  }, [t]), v = r.useCallback(e => {
    var t, n, r, i;
    if (null == e) return;
    let a = f.get(e.value);
    if (null != a && d(a.emoji)) return (0, l.jsx)(c.A, {
      emojiId: null == (n = a.emoji) ? true : n.id,
      emojiName: null == (r = a.emoji) ? true : r.name,
      animated: null != (t = null == (i = a.emoji) ? true : i.animated) && t
    })
  }, [f]), y = r.useCallback((e, t) => {
    if (null == e || t.inPill) return;
    let n = f.get(e.value);
    if (null == n || !d(n.emoji)) return;
    let r = null == h || null == n.roleIds ? 0 : Math.max(...n.roleIds.map(e => h[e])),
      a = null != h && r > 0;
    return (0, l.jsxs)("div", {
      className: u.ei,
      children: [p && n.isUnseen && (0, l.jsx)(o.LpS, {
        color: i.A.unsafe_rawColors.BRAND_260.css,
        text: s.intl.string(s.t.y2b7CA),
        className: u.Ad
      }), a && (0, l.jsx)("div", {
        className: u.Kl,
        "data-hover": true,
        children: (0, l.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "always-white",
          children: s.intl.format(s.t.EgKsZA, {
            memberCount: r
          })
        })
      })]
    })
  }, [p, h, f]), j = r.useCallback(e => {
    let t = [];
    e.forEach(e => {
      let n = f.get(e);
      null != n && t.push(n)
    }), m(t)
  }, [m, f]);
  return (0, l.jsx)(a.p, {
    multi: true,
    options: g,
    onChange: j,
    value: n,
    closeOnSelect: false,
    renderOptionSuffix: y,
    renderOptionPrefix: v,
    "data-migration-pending": true
  })
}