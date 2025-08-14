/** Chunk was on 6310 **/
/** chunk id: 706923, original params: n,t,l (module,exports,require) **/
require.d(exports, {
  default: () => m
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk399606 = require("./399606.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk904245 = require("./904245.js"),
  Chunk434404 = require("./434404.js"),
  Chunk592125 = require("./592125.js"),
  Chunk812545 = require("./812545.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk477425 = require("./477425.js");

function m(n) {
  let {
    channelId: t,
    messageId: l,
    transitionState: m,
    onClose: x
  } = n, f = (0, i.e7)([c.Z], () => c.Z.getChannel(t)), [p, C] = (0, u.Z)(t), Z = null == f ? true : f.guild_id;
  return (0, e.jsx)(s.ConfirmModal, {
    header: g.intl.string(g.t.aIz1oa),
    confirmText: g.intl.string(g.t["cY+Ooa"]),
    cancelText: g.intl.string(g.t["ETE/oK"]),
    confirmButtonColor: o.zx.Colors.BRAND,
    onConfirm: () => a.Z.crosspostMessage(t, l),
    transitionState: m,
    onClose: x,
    children: (0, e.jsx)(s.Text, {
      variant: "text-md/normal",
      className: h.spacing,
      children: C ? (0, e.jsx)(s.$jN, {}) : null != p && null != p.guildsFollowing && p.guildsFollowing > 0 ? (0, e.jsxs)(e.Fragment, {
        children: [(0, e.jsx)(s.Text, {
          className: h.spacing,
          variant: "text-sm/normal",
          children: g.intl.format(g.t.GCGrND, {
            numGuildsFollowing: p.guildsFollowing
          })
        }), (0, e.jsx)(s.Text, {
          variant: "text-sm/normal",
          children: g.intl.format(g.t.IMhGZ2, {
            onClick: () => {
              null != Z && null != x && (x(), r.Z.open(Z, d.pNK.ANALYTICS))
            }
          })
        })]
      }) : g.intl.string(g.t["8FpqOj"])
    })
  })
}