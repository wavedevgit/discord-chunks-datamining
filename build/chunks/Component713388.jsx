/** Chunk was on 53950 **/
/** chunk id: 713388, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./642613.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk131051 = require("./131051.js"),
  Chunk28682 = require("./28682.js"),
  Chunk920952 = require("./920952.js"),
  Chunk206412 = require("./206412.jsx"),
  Chunk617810 = require("./617810.js"),
  Chunk211339 = require("./211339.js");

function m(e) {
  var t;
  let {
    setting: n,
    depth: i,
    highlight: l
  } = e, s = null == (t = r.useContext(h)) ? true : t.get(n), o = null;
  return null != s && s.length > 0 && (o = s.sort((e, t) => e.localeCompare(t)).map(e => (0, a.jsx)(m, {
    setting: e,
    depth: i + 1,
    highlight: l
  }, e))), (0, a.jsx)(c.r, {
    title: n,
    initExpanded: i <= 2,
    highlight: l,
    children: o
  })
}

function p(e) {
  let {
    setting: t,
    depth: n
  } = e, r = (0, s.Lk)(t) && (t.type === s.Jq.SIDEBAR_ITEM && t.layout.some(e => null == e ? true : e.layout.some(e => null != e.StronglyDiscouragedCustomComponent)) || t.type === s.Jq.PANEL && t.layout.some(e => null != e.StronglyDiscouragedCustomComponent) || t.type === s.Jq.PANE && null != t.StronglyDiscouragedCustomComponent), i = null;
  if ((0, s.Lk)(t)) {
    var l, o, d;
    let e = null == (d = t.parent) || null == (o = d.parent) || null == (l = o.getLegacySearchKey) ? true : l.call(o);
    0 === t.layout.length && null != e ? i = (0, a.jsx)(m, {
      setting: e,
      depth: n + 1,
      highlight: true
    }) : t.layout.length > 0 && (i = t.layout.map(e => (0, a.jsx)(p, {
      setting: e,
      depth: n + 1
    }, e.key)))
  }
  return (0, a.jsx)(c.r, {
    title: t.key,
    initExpanded: n <= 2,
    highlight: r,
    children: i
  })
}
let h = Chunk473749.createContext(null);

function x() {
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
    }), (0, Chunk54381.jsx)(h.Provider, {
      value: require,
      children: (0, Chunk54381.jsxs)("div", {
        className: Chunk211339.tree,
        children: [module && (0, Chunk54381.jsx)(m, {
          setting: "root",
          depth: 1
        }, "root"), !module && (0, Chunk54381.jsx)(p, {
          setting: Chunk28682,
          depth: 1
        }, Chunk28682.key)]
      })
    })]
  })
}