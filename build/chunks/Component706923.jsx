/** Chunk was on 6310 **/
/** chunk id: 706923, original params: e,n,s (module,exports,require) **/
require.d(exports, {
  default: () => f
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
  Chunk625221 = require("./625221.js");

function f(e) {
  let {
    channelId: n,
    messageId: s,
    transitionState: f,
    onClose: S
  } = e, h = (0, l.e7)([c.Z], () => c.Z.getChannel(n)), [C, F] = (0, u.Z)(n), m = null == h ? true : h.guild_id;
  return (0, t.jsx)(o.ConfirmModal, {
    header: g.intl.string(g.t.aIz1oV),
    confirmText: g.intl.string(g.t["cY+Oob"]),
    cancelText: g.intl.string(g.t["ETE/oC"]),
    confirmButtonColor: i.zx.Colors.BRAND,
    onConfirm: () => a.Z.crosspostMessage(n, s),
    transitionState: f,
    onClose: S,
    children: (0, t.jsx)(o.Text, {
      variant: "text-md/normal",
      className: _.spacing,
      children: F ? (0, t.jsx)(o.$jN, {}) : null != C && null != C.guildsFollowing && C.guildsFollowing > 0 ? (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(o.Text, {
          className: _.spacing,
          variant: "text-sm/normal",
          children: g.intl.format(g.t.GCGrNP, {
            numGuildsFollowing: C.guildsFollowing
          })
        }), (0, t.jsx)(o.Text, {
          variant: "text-sm/normal",
          children: g.intl.format(g.t.IMhGZz, {
            onClick: () => {
              null != m && null != S && (S(), r.Z.open(m, d.pNK.ANALYTICS))
            }
          })
        })]
      }) : g.intl.string(g.t["8FpqOs"])
    })
  })
}