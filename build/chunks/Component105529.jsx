/** Chunk was on 44799 **/
/** chunk id: 105529, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk793030 = require("./793030.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434404 = require("./434404.js"),
  Chunk485386 = require("./485386.js"),
  Chunk944888 = require("./944888.js"),
  Chunk234368 = require("./234368.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk808353 = require("./808353.js");

function m(e) {
  let {
    guildId: t,
    perk: n,
    markAsDismissed: m
  } = e, g = u._k[n], x = async () => {
    let e = a.Z.getSortedRoles(t).find(c.YB);
    await s.Z.open(t, d.pNK.ROLES), null != e && await s.Z.selectRole(e.id), m(p.L.SECONDARY)
  };
  return (0, r.jsxs)("div", {
    className: f.container,
    children: [(0, r.jsx)("img", {
      alt: "",
      src: g.assetUrl,
      className: f.image
    }), (0, r.jsx)(l.olH, {
      className: f.close,
      innerClassName: f.innerClose,
      onClick: () => {
        m(p.L.USER_DISMISS)
      }
    }), (0, r.jsx)(o.xv, {
      color: "text-primary",
      variant: "text-md/semibold",
      children: g.title
    }), (0, r.jsx)(o.xv, {
      className: f.description,
      color: "text-muted",
      variant: "text-sm/medium",
      children: g.description
    }), (0, r.jsx)(i.zx, {
      className: f.button,
      onClick: x,
      children: g.cta
    })]
  })
}