/** Chunk was on 6043 **/
/** chunk id: 713388, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./642613.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk131051 = require("./131051.js"),
  Chunk28682 = require("./28682.js"),
  Chunk920952 = require("./920952.js"),
  Chunk206412 = require("./206412.jsx"),
  Chunk617810 = require("./617810.js"),
  Chunk478152 = require("./478152.js");

function m(e) {
  if (e.type === s.Jq.PANEL && null != e.StronglyDiscouragedCustomComponent || (0, s.Lk)(e) && e.type === s.Jq.SIDEBAR_ITEM && e.layout.some(e => (null == e ? true : e.StronglyDiscouragedCustomComponent) != null)) returntrue;
  if ((0, s.Lk)(e) && 0 === e.layout.length) {
    var t, n, a;
    if (null != (null == (a = e.parent) || null == (n = a.parent) || null == (t = n.getLegacySearchKey) ? true : t.call(n))) returntrue
  }
  returnfalse
}

function p(e) {
  return !!m(e) || !!(0, s.Lk)(e) && e.layout.some(e => p(e))
}

function f(e) {
  var t;
  let {
    setting: n,
    depth: i,
    highlightMode: l
  } = e, s = null == (t = r.useContext(x)) ? true : t.get(n), o = null;
  return null != s && s.length > 0 && (o = s.sort((e, t) => e.localeCompare(t)).map(e => (0, a.jsx)(f, {
    setting: e,
    depth: i + 1,
    highlightMode: l
  }, e))), (0, a.jsx)(c.r, {
    title: n,
    initExpanded: i <= 2,
    highlightMode: l,
    children: o
  })
}

function h(e) {
  let {
    setting: t,
    depth: n,
    inheritedHighlightMode: r
  } = e, i = function(e, t) {
    if ("migrated" === t) return "migrated";
    switch (e.type) {
      case s.Jq.ROOT:
        return p(e) ? "root" : "migrated-root";
      case s.Jq.SECTION:
        return p(e) ? "none" : "migrated";
      case s.Jq.PANEL:
      case s.Jq.SIDEBAR_ITEM:
        return m(e) ? "legacy" : "migrated";
      default:
        return null != t ? t : "migrated"
    }
  }(t, r), l = "migrated" === i ? "migrated" : true, o = null;
  if ((0, s.Lk)(t)) {
    var d, u, x;
    let e = null == (x = t.parent) || null == (u = x.parent) || null == (d = u.getLegacySearchKey) ? true : d.call(u);
    0 === t.layout.length && null != e ? o = (0, a.jsx)(f, {
      setting: e,
      depth: n + 1,
      highlightMode: null != l ? l : "legacy"
    }) : t.layout.length > 0 && (o = t.layout.map(e => (0, a.jsx)(h, {
      setting: e,
      depth: n + 1,
      inheritedHighlightMode: l
    }, e.key)))
  }
  return (0, a.jsx)(c.r, {
    title: t.key,
    initExpanded: n <= 2,
    highlightMode: i,
    children: o
  })
}
let x = Chunk473749.createContext(null);

function b() {
  let [e, t] = Chunk473749.useState(false), {
    legacySettingDirectory: n
  } = (0, Chunk617810.q)(), {
    node: s
  } = (0, Chunk131051.ZP)(Chunk920952.E, ""), c = (0, Chunk131051.ZA)();
  return (0, Chunk54381.jsxs)(Chunk481060.C3N, {
    label: "Settings Tree",
    children: [(0, Chunk54381.jsx)(Chunk481060.rsf, {
      label: "Bypass Predicates",
      description: "Forces all migrated settings to be visible.",
      checked: Chunk206412,
      onChange: Chunk131051.go
    }), (0, Chunk54381.jsx)(Chunk481060.rsf, {
      checked: module,
      onChange: e => t(e),
      label: "Show Legacy Settings Tree"
    }), (0, Chunk54381.jsx)(x.Provider, {
      value: require,
      children: (0, Chunk54381.jsxs)("div", {
        className: Chunk478152.tree,
        children: [module && (0, Chunk54381.jsx)(f, {
          setting: "root",
          depth: 1
        }, "root"), !module && (0, Chunk54381.jsx)(h, {
          setting: Chunk28682,
          depth: 1
        }, Chunk28682.key)]
      })
    })]
  })
}