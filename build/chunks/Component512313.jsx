/** Chunk was on 76349 **/
/** chunk id: 512313, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./642613.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk772848 = require("./772848.js"),
  Chunk481060 = require("./481060.js"),
  Chunk991346 = require("./991346.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk547481 = require("./547481.js");

function d(e) {
  let {
    setting: t,
    hasChildren: n
  } = e;
  return (0, a.jsx)(l.Text, {
    variant: n ? "text-md/bold" : "text-md/normal",
    children: t
  })
}

function u(e) {
  let {
    setting: t,
    children: n,
    depth: s
  } = e, [m, h] = r.useState(1 === s), p = r.useCallback(() => {
    h(!m)
  }, [m, h]);
  if (0 === n.length) return (0, a.jsx)("div", {
    style: {
      marginLeft: 8 * s
    },
    className: c.settingNode,
    children: (0, a.jsx)(d, {
      setting: t,
      hasChildren: false
    })
  }, (0, i.Z)());
  let x = m ? (0, a.jsx)("div", {
    className: c.settingNodeChildren,
    children: n.sort((e, t) => e.setting.localeCompare(t.setting)).sort((e, t) => e.children.length - t.children.length).map(e => (0, a.jsx)(u, {
      setting: e.setting,
      children: e.children,
      depth: s + 1
    }, (0, i.Z)()))
  }) : null;
  return (0, a.jsxs)("div", {
    style: {
      marginLeft: 8 * s
    },
    className: c.settingNode,
    children: [(0, a.jsxs)(l.P3F, {
      className: c.headerBar,
      onClick: p,
      children: [(0, a.jsx)(d, {
        setting: t,
        hasChildren: n.length > 0
      }), (0, a.jsx)(o.Z, {
        direction: m ? o.Z.Directions.DOWN : o.Z.Directions.RIGHT,
        className: c.headerCaret
      })]
    }), x]
  }, (0, i.Z)())
}

function m() {
  let e = (0, Chunk991346.Pt)(),
    t = [],
    n = Object.keys(module).filter(t => {
      let n = e[t];
      return null == n.predicate || null != n.predicate && n.predicate()
    }).map(t => {
      var n;
      return {
        setting: t,
        parent: null != (n = e[t].parent) ? n : null
      }
    });
  require.filter(e => null === e.parent).forEach(e => {
    t.push({
      setting: e.setting,
      children: []
    })
  });
  let r = [...exports];
  for (; Chunk647438.length > 0;) {
    let e = Chunk647438.shift();
    if (null == module) continue;
    let t = require.filter(t => t.parent === e.setting).map(e => ({
      setting: e.setting,
      children: []
    }));
    module.children = exports, Chunk647438.push(...exports)
  }
  return (0, Chunk951288.jsxs)(Chunk481060.zJl, {
    className: Chunk547481.root,
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-lg/bold",
      children: "Settings Tree"
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk547481.tree,
      children: exports.sort((e, t) => e.setting.localeCompare(t.setting)).map(e => (0, a.jsx)(u, {
        setting: e.setting,
        children: e.children,
        depth: 1
      }, (0, i.Z)()))
    })]
  })
}