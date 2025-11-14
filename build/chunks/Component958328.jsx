/** Chunk was on 99904 **/
/** chunk id: 958328, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
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

function v(e) {
  let {
    title: t,
    can: n
  } = e, l = n ? o.dz2 : o.Dio, i = (0, a.jsx)("div", {
    className: r()(f.iconOuter, n ? f.iconCheck : f.iconCross),
    children: (0, a.jsx)(l, {
      className: f.icon
    })
  });
  return (0, a.jsxs)("div", {
    className: f.scope,
    children: [i, (0, a.jsx)("div", {
      className: f.scopeInner,
      children: (0, a.jsx)(o.Text, {
        variant: "text-md/normal",
        children: t
      })
    })]
  })
}

function j() {
  let e = (0, Chunk442837.e7)([Chunk944486.Z], () => Chunk944486.Z.getChannelId()),
    t = (0, Chunk442837.e7)([Chunk914010.Z], () => Chunk914010.Z.getGuildId()),
    n = (0, Chunk442837.e7)([Chunk592125.Z], () => Chunk592125.Z.getChannel(module)),
    l = (0, Chunk442837.e7)([Chunk430824.Z], () => Chunk430824.Z.getGuild(exports)),
    j = (0, Chunk442837.e7)([Chunk496675.Z], () => Chunk496675.Z.computePermissions(require)),
    _ = (0, Chunk442837.e7)([Chunk496675.Z], () => Chunk496675.Z.computePermissions(Chunk120356)),
    y = (0, Chunk933557.ZP)(require, true),
    C = null != require ? (0, Chunk71080.IG)(require, false) : null,
    S = null != Chunk120356 ? Chunk233608.Z.getGuildPermissionSpecMap(Chunk120356) : null,
    E = Object.values(null != C ? C : {}).map(e => {
      let {
        title: t,
        flag: n
      } = e, l = i.e$(j, n);
      return (0, a.jsx)(v, {
        title: t,
        can: l
      }, t)
    }),
    O = Object.values(null != S ? S : {}).map(e => {
      let {
        title: t,
        flag: n
      } = e, l = i.e$(_, n);
      return (0, a.jsx)(v, {
        title: t,
        can: l
      }, t)
    });
  return (0, Chunk951288.jsx)("div", {
    className: r()(Chunk451429.panel, Chunk989295.panel),
    children: (0, Chunk951288.jsxs)("div", {
      className: Chunk989295.panelInner,
      children: [(0, Chunk951288.jsxs)("section", {
        className: Chunk989295.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
          variant: "heading-md/semibold",
          children: null != y ? "Permissions in ".concat(y) : "No channel selected"
        }), E]
      }), (0, Chunk951288.jsxs)("section", {
        className: Chunk989295.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
          variant: "heading-md/semibold",
          children: null != Chunk120356 ? "Permissions in ".concat(Chunk120356.name) : "No guild selected"
        }), O]
      })]
    })
  })
}