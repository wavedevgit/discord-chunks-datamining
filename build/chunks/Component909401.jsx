/** Chunk was on 90850 **/
/** chunk id: 909401, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  default: () => S
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk843472 = require("./843472.js"),
  Chunk997509 = require("./997509.js"),
  Chunk734057 = require("./734057.js"),
  Chunk258671 = require("./258671.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk378720 = require("./378720.js");

function S(e) {
  let {
    channelId: l,
    messageId: t,
    transitionState: S,
    onClose: h
  } = e, F = (0, i.bG)([u.A], () => u.A.getChannel(l)), [b, m] = (0, c.A)(l), f = null == F ? true : F.guild_id;
  return (0, s.jsx)(n.ConfirmModal, {
    title: g.intl.string(g.t.aIz1oV),
    confirmText: g.intl.string(g.t["cY+Oob"]),
    onConfirm: () => a.A.crosspostMessage(l, t),
    transitionState: S,
    onClose: h,
    variant: "primary",
    children: (0, s.jsx)(o.Text, {
      variant: "text-md/normal",
      className: _.YK,
      children: m ? (0, s.jsx)(o.y$y, {}) : null != b && null != b.guildsFollowing && b.guildsFollowing > 0 ? (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(o.Text, {
          className: _.YK,
          variant: "text-sm/normal",
          children: g.intl.format(g.t.GCGrNP, {
            numGuildsFollowing: b.guildsFollowing
          })
        }), (0, s.jsx)(o.Text, {
          variant: "text-sm/normal",
          children: g.intl.format(g.t.IMhGZz, {
            onClick: () => {
              null != f && null != h && (h(), r.A.open(f, d.BEX.ANALYTICS))
            }
          })
        })]
      }) : g.intl.string(g.t["8FpqOs"])
    })
  })
}