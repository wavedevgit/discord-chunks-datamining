/** Chunk was on 30202 **/
/** chunk id: 706060, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./642613.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk772848 = require("./772848.js"),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk991346 = require("./991346.js"),
  Chunk321523 = require("./321523.js");

function d(e) {
  let {
    setting: t,
    hasChildren: n
  } = e;
  return (0, i.jsx)(a.Text, {
    variant: n ? "text-md/bold" : "text-md/normal",
    children: t
  })
}

function u(e) {
  let {
    setting: t,
    children: n,
    depth: o
  } = e, [m, p] = r.useState(1 === o), g = r.useCallback(() => {
    p(!m)
  }, [m, p]);
  if (0 === n.length) return (0, i.jsx)("div", {
    style: {
      marginLeft: 8 * o
    },
    className: c.settingNode,
    children: (0, i.jsx)(d, {
      setting: t,
      hasChildren: false
    })
  }, (0, s.Z)());
  let h = m ? (0, i.jsx)("div", {
    className: c.settingNodeChildren,
    children: n.sort((e, t) => e.setting.localeCompare(t.setting)).sort((e, t) => e.children.length - t.children.length).map(e => (0, i.jsx)(u, {
      setting: e.setting,
      children: e.children,
      depth: o + 1
    }, (0, s.Z)()))
  }) : null;
  return (0, i.jsxs)("div", {
    style: {
      marginLeft: 8 * o
    },
    className: c.settingNode,
    children: [(0, i.jsxs)(a.P3F, {
      className: c.headerBar,
      onClick: g,
      children: [(0, i.jsx)(d, {
        setting: t,
        hasChildren: n.length > 0
      }), (0, i.jsx)(l.Z, {
        direction: m ? l.Z.Directions.DOWN : l.Z.Directions.RIGHT,
        className: c.headerCaret
      })]
    }), h]
  }, (0, s.Z)())
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
  for (; Chunk73800.length > 0;) {
    let e = Chunk73800.shift();
    if (null == module) continue;
    let t = require.filter(t => t.parent === e.setting).map(e => ({
      setting: e.setting,
      children: []
    }));
    module.children = exports, Chunk73800.push(...exports)
  }
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk321523.root,
    children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
      variant: "heading-lg/bold",
      children: "Settings Tree"
    }), (0, Chunk255367.jsx)("div", {
      className: Chunk321523.tree,
      children: exports.sort((e, t) => e.setting.localeCompare(t.setting)).map(e => (0, i.jsx)(u, {
        setting: e.setting,
        children: e.children,
        depth: 1
      }, (0, s.Z)()))
    })]
  })
}