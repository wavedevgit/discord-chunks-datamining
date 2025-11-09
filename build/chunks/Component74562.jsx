/** Chunk was on 56236 **/
/** chunk id: 74562, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434404 = require("./434404.js"),
  Chunk939863 = require("./939863.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk102497 = require("./102497.js");

function p(e) {
  let {
    guildId: n,
    onClose: t
  } = e, p = (0, i.e7)([o.Z, s.Z], () => {
    let e = o.Z.getGuild(n);
    return s.Z.can(u.Plq.MANAGE_ROLES, e)
  }, [n]);
  return (0, r.jsxs)("div", {
    className: g.container,
    children: [(0, r.jsx)(c.Z, {
      children: (0, r.jsx)("div", {
        className: g.circle,
        children: (0, r.jsx)(l.Que, {
          size: "custom",
          color: "currentColor",
          height: 40,
          width: 40,
          className: g.icon
        })
      })
    }), (0, r.jsx)(l.Heading, {
      color: "header-primary",
      variant: "heading-xl/semibold",
      className: g.title,
      children: d.intl.string(d.t["WgZ+3D"])
    }), (0, r.jsx)(l.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: g.subtitle,
      children: d.intl.string(d.t["v/S/PG"])
    }), p && (0, r.jsx)(l.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: g.roleTip,
      children: d.intl.format(d.t["K+DH2o"], {
        onClick: () => {
          a.Z.open(n, u.pNK.ROLES), t()
        }
      })
    })]
  })
}