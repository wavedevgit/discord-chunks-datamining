/** Chunk was on 6043 **/
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
  let e = (0, s.e7)([p.Z], () => p.Z.getChannelId()),
    t = (0, s.e7)([f.Z], () => f.Z.getGuildId()),
    n = (0, s.e7)([d.Z], () => d.Z.getChannel(e)),
    r = (0, s.e7)([u.Z], () => u.Z.getGuild(t)),
    j = (0, s.e7)([m.Z], () => m.Z.computePermissions(n)),
    C = (0, s.e7)([m.Z], () => m.Z.computePermissions(r)),
    y = (0, c.ZP)(n, true),
    _ = null != n ? (0, x.IG)(n, false) : null,
    S = null != r ? h.Z.getGuildPermissionSpecMap(r) : null,
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
    T = Object.values(null != S ? S : {}).map(e => {
      let {
        title: t,
        flag: n
      } = e, r = l.e$(C, n);
      return (0, a.jsx)(v, {
        title: t,
        can: r
      }, t)
    });
  return (0, a.jsx)("div", {
    className: i()(g.panel, b.panel),
    children: (0, a.jsxs)("div", {
      className: b.panelInner,
      children: [(0, a.jsxs)("section", {
        className: b.section,
        children: [(0, a.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          children: null != y ? "Permissions in ".concat(y) : "No channel selected"
        }), E]
      }), (0, a.jsxs)("section", {
        className: b.section,
        children: [(0, a.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          children: null != r ? "Permissions in ".concat(r.name) : "No guild selected"
        }), T]
      })]
    })
  })
}