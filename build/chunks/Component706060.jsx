/** Chunk was on web.js **/
/** chunk id: 706060, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js"), require("./642613.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk772848 = require("./772848.js"),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk991346 = require("./991346.js"),
  Chunk822214 = require("./822214.js");

function u(e) {
  let {
    setting: t,
    hasChildren: n
  } = e;
  return (0, r.jsx)(o.Text, {
    variant: n ? "text-md/bold" : "text-md/normal",
    children: t
  })
}

function d(e) {
  let {
    setting: t,
    children: n,
    depth: l
  } = e, [f, _] = i.useState(1 === l), p = i.useCallback(() => {
    _(!f)
  }, [f, _]);
  if (0 === n.length) return (0, r.jsx)("div", {
    style: {
      marginLeft: 8 * l
    },
    className: c.settingNode,
    children: (0, r.jsx)(u, {
      setting: t,
      hasChildren: false
    })
  }, (0, a.Z)());
  let h = f ? (0, r.jsx)("div", {
    className: c.settingNodeChildren,
    children: n.sort((e, t) => e.setting.localeCompare(t.setting)).sort((e, t) => e.children.length - t.children.length).map(e => (0, r.jsx)(d, {
      setting: e.setting,
      children: e.children,
      depth: l + 1
    }, (0, a.Z)()))
  }) : null;
  return (0, r.jsxs)("div", {
    style: {
      marginLeft: 8 * l
    },
    className: c.settingNode,
    children: [(0, r.jsxs)(o.P3F, {
      className: c.headerBar,
      onClick: p,
      children: [(0, r.jsx)(u, {
        setting: t,
        hasChildren: n.length > 0
      }), (0, r.jsx)(s.Z, {
        direction: f ? s.Z.Directions.DOWN : s.Z.Directions.RIGHT,
        className: c.headerCaret
      })]
    }), h]
  }, (0, a.Z)())
}

function f() {
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
  let i = [...exports];
  for (; Chunk647438.length > 0;) {
    let e = Chunk647438.shift();
    if (null == module) continue;
    let t = require.filter(t => t.parent === e.setting).map(e => ({
      setting: e.setting,
      children: []
    }));
    module.children = exports, Chunk647438.push(...exports)
  }
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk822214.root,
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-lg/bold",
      children: "Settings Tree"
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk822214.tree,
      children: exports.sort((e, t) => e.setting.localeCompare(t.setting)).map(e => (0, r.jsx)(d, {
        setting: e.setting,
        children: e.children,
        depth: 1
      }, (0, a.Z)()))
    })]
  })
}