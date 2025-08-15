/** Chunk was on 93886 **/
/** chunk id: 958328, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk233608 = require("./233608.js"),
  Chunk71080 = require("./71080.js"),
  Chunk989295 = require("./989295.js"),
  Chunk451429 = require("./451429.js");

function j(e) {
  let {
    title: t,
    can: a
  } = e, r = a ? o.dz2 : o.Dio, i = (0, n.jsx)("div", {
    className: l()(v.iconOuter, a ? v.iconCheck : v.iconCross),
    children: (0, n.jsx)(r, {
      className: v.icon
    })
  });
  return (0, n.jsxs)("div", {
    className: v.scope,
    children: [i, (0, n.jsx)("div", {
      className: v.scopeInner,
      children: (0, n.jsx)(o.Text, {
        variant: "text-md/normal",
        children: t
      })
    })]
  })
}

function g() {
  let e = (0, Chunk442837.e7)([Chunk944486.Z], () => Chunk944486.Z.getChannelId()),
    t = (0, Chunk442837.e7)([Chunk914010.Z], () => Chunk914010.Z.getGuildId()),
    a = (0, Chunk442837.e7)([Chunk592125.Z], () => Chunk592125.Z.getChannel(module)),
    r = (0, Chunk442837.e7)([Chunk430824.Z], () => Chunk430824.Z.getGuild(exports)),
    g = (0, Chunk442837.e7)([Chunk496675.Z], () => Chunk496675.Z.computePermissions(require)),
    _ = (0, Chunk442837.e7)([Chunk496675.Z], () => Chunk496675.Z.computePermissions(Chunk120356)),
    y = (0, Chunk933557.ZP)(require, true),
    C = null != require ? (0, Chunk71080.IG)(require, false) : null,
    N = null != Chunk120356 ? Chunk233608.Z.getGuildPermissionSpecMap(Chunk120356) : null,
    O = Object.values(null != C ? C : {}).map(e => {
      let {
        title: t,
        flag: a
      } = e, r = i.e$(g, a);
      return (0, n.jsx)(j, {
        title: t,
        can: r
      }, t)
    }),
    T = Object.values(null != N ? N : {}).map(e => {
      let {
        title: t,
        flag: a
      } = e, r = i.e$(_, a);
      return (0, n.jsx)(j, {
        title: t,
        can: r
      }, t)
    });
  return (0, Chunk255367.jsx)("div", {
    className: l()(Chunk451429.panel, Chunk989295.panel),
    children: (0, Chunk255367.jsxs)("div", {
      className: Chunk989295.panelInner,
      children: [(0, Chunk255367.jsxs)("section", {
        className: Chunk989295.section,
        children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
          variant: "heading-md/semibold",
          children: null != y ? "Permissions in ".concat(y) : "No channel selected"
        }), O]
      }), (0, Chunk255367.jsxs)("section", {
        className: Chunk989295.section,
        children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
          variant: "heading-md/semibold",
          children: null != Chunk120356 ? "Permissions in ".concat(Chunk120356.name) : "No guild selected"
        }), T]
      })]
    })
  })
}