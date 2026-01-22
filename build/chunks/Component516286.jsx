/** Chunk was on 22477 **/
/** chunk id: 516286, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./638769.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk669550 = require("./669550.js"),
  Chunk963935 = require("./963935.js"),
  Chunk921854 = require("./921854.js"),
  Chunk522958 = require("./522958.jsx"),
  Chunk983078 = require("./983078.js"),
  Chunk159452 = require("./159452.js");

function m(e) {
  if (e.type === s.Z6.PANEL && null != e.StronglyDiscouragedCustomComponent || (0, s.nW)(e) && e.type === s.Z6.SIDEBAR_ITEM && e.layout.some(e => (null == e ? true : e.StronglyDiscouragedCustomComponent) != null)) returntrue;
  if ((0, s.nW)(e) && 0 === e.layout.length) {
    var t, n, a;
    if (null != (null == (a = e.parent) || null == (n = a.parent) || null == (t = n.getLegacySearchKey) ? true : t.call(n))) returntrue
  }
  returnfalse
}

function p(e) {
  return !!m(e) || !!(0, s.nW)(e) && e.layout.some(e => p(e))
}

function h(e) {
  var t;
  let {
    setting: n,
    depth: i,
    highlightMode: r
  } = e, s = null == (t = l.useContext(x)) ? true : t.get(n), o = null;
  return null != s && s.length > 0 && (o = s.sort((e, t) => e.localeCompare(t)).map(e => (0, a.jsx)(h, {
    setting: e,
    depth: i + 1,
    highlightMode: r
  }, e))), (0, a.jsx)(c.n, {
    title: n,
    initExpanded: i <= 2,
    highlightMode: r,
    children: o
  })
}

function f(e) {
  let {
    setting: t,
    depth: n,
    inheritedHighlightMode: l
  } = e, i = function(e, t) {
    if ("migrated" === t) return "migrated";
    switch (e.type) {
      case s.Z6.ROOT:
        return p(e) ? "root" : "migrated-root";
      case s.Z6.SECTION:
        return p(e) ? "none" : "migrated";
      case s.Z6.PANEL:
      case s.Z6.SIDEBAR_ITEM:
        return m(e) ? "legacy" : "migrated";
      default:
        return null != t ? t : "migrated"
    }
  }(t, l), r = "migrated" === i ? "migrated" : true, o = null;
  if ((0, s.nW)(t)) {
    var d, u, x;
    let e = null == (x = t.parent) || null == (u = x.parent) || null == (d = u.getLegacySearchKey) ? true : d.call(u);
    0 === t.layout.length && null != e ? o = (0, a.jsx)(h, {
      setting: e,
      depth: n + 1,
      highlightMode: null != r ? r : "legacy"
    }) : t.layout.length > 0 && (o = t.layout.map(e => (0, a.jsx)(f, {
      setting: e,
      depth: n + 1,
      inheritedHighlightMode: r
    }, e.key)))
  }
  return (0, a.jsx)(c.n, {
    title: t.key,
    initExpanded: n <= 2,
    highlightMode: i,
    children: o
  })
}
let x = Chunk64700.createContext(null);

function b() {
  let [e, t] = l.useState(false), {
    legacySettingDirectory: n
  } = (0, d.B)(), {
    node: s
  } = (0, r.Ay)(o.D, ""), c = (0, r.KA)();
  return (0, a.jsxs)(i.nVY, {
    label: "Settings Tree",
    children: [(0, a.jsx)(i.dOG, {
      label: "Bypass Predicates",
      description: "Forces all migrated settings to be visible.",
      checked: c,
      onChange: r.jL
    }), (0, a.jsx)(i.dOG, {
      checked: e,
      onChange: e => t(e),
      label: "Show Legacy Settings Tree"
    }), (0, a.jsx)(x.Provider, {
      value: n,
      children: (0, a.jsxs)("div", {
        className: u.B2,
        children: [e && (0, a.jsx)(h, {
          setting: "root",
          depth: 1
        }, "root"), !e && (0, a.jsx)(f, {
          setting: s,
          depth: 1
        }, s.key)]
      })
    })]
  })
}