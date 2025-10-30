/** Chunk was on 39297 **/
/** chunk id: 512313, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./642613.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk131051 = require("./131051.js"),
  Chunk28682 = require("./28682.js"),
  Chunk920952 = require("./920952.js"),
  Chunk544651 = require("./544651.jsx"),
  Chunk546697 = require("./546697.js"),
  Chunk547481 = require("./547481.js");

function m(e) {
  var t;
  let {
    setting: n,
    depth: l,
    highlight: i
  } = e, o = null == (t = r.useContext(h)) ? true : t.get(n), s = null;
  return null != o && o.length > 0 && (s = o.sort((e, t) => e.localeCompare(t)).map(e => (0, a.jsx)(m, {
    setting: e,
    depth: l + 1,
    highlight: i
  }, e))), (0, a.jsx)(c.r, {
    title: n,
    initExpanded: l <= 2,
    highlight: i,
    children: s
  })
}

function p(e) {
  let {
    setting: t,
    depth: n
  } = e, r = (0, o.Lk)(t) && (t.type === o.Jq.SIDEBAR_ITEM && t.layout.some(e => null == e ? true : e.layout.some(e => null != e.render)) || t.type === o.Jq.PANEL && t.layout.some(e => null != e.render) || t.type === o.Jq.PANE && null != t.render), l = null;
  if ((0, o.Lk)(t)) {
    var i, s;
    0 === t.layout.length && (null == (s = t.parent) || null == (i = s.parent) ? true : i.legacySearchKey) != null ? l = (0, a.jsx)(m, {
      setting: t.parent.parent.legacySearchKey,
      depth: n + 1,
      highlight: true
    }) : t.layout.length > 0 && (l = t.layout.map(e => (0, a.jsx)(p, {
      setting: e,
      depth: n + 1
    }, e.key)))
  }
  return (0, a.jsx)(c.r, {
    title: t.key,
    initExpanded: n <= 2,
    highlight: r,
    children: l
  })
}
let h = Chunk647438.createContext(null);

function x() {
  let [e, t] = Chunk647438.useState(false), {
    legacySettingDirectory: n
  } = (0, Chunk546697.q)(), {
    node: o
  } = (0, Chunk131051.Z)(Chunk920952.Z, "");
  return (0, Chunk951288.jsxs)(Chunk481060.zJl, {
    className: Chunk547481.root,
    children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
      variant: "heading-lg/bold",
      children: "Settings Tree"
    }), (0, Chunk951288.jsx)(Chunk481060.rsf, {
      checked: module,
      onChange: e => t(e),
      label: "Show Legacy Settings Tree"
    }), (0, Chunk951288.jsx)(h.Provider, {
      value: require,
      children: (0, Chunk951288.jsxs)("div", {
        className: Chunk547481.tree,
        children: [module && (0, Chunk951288.jsx)(m, {
          setting: "root",
          depth: 1
        }, "root"), !module && (0, Chunk951288.jsx)(p, {
          setting: Chunk28682,
          depth: 1
        }, Chunk28682.key)]
      })
    })]
  })
}