/** Chunk was on 6310 **/
/** chunk id: 706923, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => S
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk399606 = require("./399606.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk904245 = require("./904245.js"),
  Chunk434404 = require("./434404.js"),
  Chunk592125 = require("./592125.js"),
  Chunk812545 = require("./812545.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk498004 = require("./498004.js");

function S(e) {
  let {
    channelId: n,
    messageId: t,
    transitionState: S,
    onClose: h
  } = e, F = (0, l.e7)([c.Z], () => c.Z.getChannel(n)), [f, m] = (0, u.Z)(n), p = null == F ? true : F.guild_id;
  return (0, s.jsx)(i.ConfirmModal, {
    header: g.intl.string(g.t.aIz1oa),
    confirmText: g.intl.string(g.t["cY+Ooa"]),
    cancelText: g.intl.string(g.t["ETE/oK"]),
    confirmButtonColor: o.zx.Colors.BRAND,
    onConfirm: () => a.Z.crosspostMessage(n, t),
    transitionState: S,
    onClose: h,
    children: (0, s.jsx)(i.Text, {
      variant: "text-md/normal",
      className: _.spacing,
      children: m ? (0, s.jsx)(i.$jN, {}) : null != f && null != f.guildsFollowing && f.guildsFollowing > 0 ? (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(i.Text, {
          className: _.spacing,
          variant: "text-sm/normal",
          children: g.intl.format(g.t.GCGrND, {
            numGuildsFollowing: f.guildsFollowing
          })
        }), (0, s.jsx)(i.Text, {
          variant: "text-sm/normal",
          children: g.intl.format(g.t.IMhGZ2, {
            onClick: () => {
              null != p && null != h && (h(), r.Z.open(p, d.pNK.ANALYTICS))
            }
          })
        })]
      }) : g.intl.string(g.t["8FpqOj"])
    })
  })
}