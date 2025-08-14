/** Chunk was on 44799 **/
/** chunk id: 105529, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
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
  Chunk838708 = require("./838708.js");

function f(e) {
  let {
    guildId: t,
    perk: n,
    markAsDismissed: f
  } = e, _ = u._k[n], x = async () => {
    let e = a.Z.getSortedRoles(t).find(c.YB);
    await s.Z.open(t, d.pNK.ROLES), null != e && await s.Z.selectRole(e.id), f(p.L.SECONDARY)
  };
  return (0, r.jsxs)("div", {
    className: m.container,
    children: [(0, r.jsx)("img", {
      alt: "",
      src: _.assetUrl,
      className: m.image
    }), (0, r.jsx)(l.olH, {
      className: m.close,
      innerClassName: m.innerClose,
      onClick: () => {
        f(p.L.USER_DISMISS)
      }
    }), (0, r.jsx)(o.xv, {
      color: "text-primary",
      variant: "text-md/semibold",
      children: _.title
    }), (0, r.jsx)(o.xv, {
      className: m.description,
      color: "text-muted",
      variant: "text-sm/medium",
      children: _.description
    }), (0, r.jsx)(i.zx, {
      className: m.button,
      onClick: x,
      children: _.cta
    })]
  })
}