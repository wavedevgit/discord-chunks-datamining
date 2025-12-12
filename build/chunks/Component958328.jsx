/** Chunk was on 23736 **/
/** chunk id: 958328, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
  Chunk295532 = require("./295532.js"),
  Chunk663618 = require("./663618.js");

function v(e) {
  let {
    title: t,
    can: n
  } = e, r = n ? o.dz2 : o.Dio, l = (0, a.jsx)("div", {
    className: i()(b.iconOuter, n ? b.iconCheck : b.iconCross),
    children: (0, a.jsx)(r, {
      className: b.icon
    })
  });
  return (0, a.jsxs)("div", {
    className: b.scope,
    children: [l, (0, a.jsx)("div", {
      className: b.scopeInner,
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
    r = (0, Chunk442837.e7)([Chunk430824.Z], () => Chunk430824.Z.getGuild(exports)),
    j = (0, Chunk442837.e7)([Chunk496675.Z], () => Chunk496675.Z.computePermissions(require)),
    y = (0, Chunk442837.e7)([Chunk496675.Z], () => Chunk496675.Z.computePermissions(Chunk120356)),
    C = (0, Chunk933557.ZP)(require, true),
    _ = null != require ? (0, Chunk71080.IG)(require, false) : null,
    S = null != Chunk120356 ? Chunk233608.Z.getGuildPermissionSpecMap(Chunk120356) : null,
    E = Object.values(null != _ ? _ : {}).map(e => {
      let {
        title: t,
        flag: n
      } = e, r = l.e$(j, n);
      return (0, a.jsx)(v, {
        title: t,
        can: r
      }, t)
    }),
    O = Object.values(null != S ? S : {}).map(e => {
      let {
        title: t,
        flag: n
      } = e, r = l.e$(y, n);
      return (0, a.jsx)(v, {
        title: t,
        can: r
      }, t)
    });
  return (0, Chunk54381.jsx)("div", {
    className: i()(Chunk663618.panel, Chunk295532.panel),
    children: (0, Chunk54381.jsxs)("div", {
      className: Chunk295532.panelInner,
      children: [(0, Chunk54381.jsxs)("section", {
        className: Chunk295532.section,
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: "heading-md/semibold",
          children: null != C ? "Permissions in ".concat(C) : "No channel selected"
        }), E]
      }), (0, Chunk54381.jsxs)("section", {
        className: Chunk295532.section,
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: "heading-md/semibold",
          children: null != Chunk120356 ? "Permissions in ".concat(Chunk120356.name) : "No guild selected"
        }), O]
      })]
    })
  })
}