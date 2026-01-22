/** Chunk was on 90850 **/
/** chunk id: 909401, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk417597 = require("./417597.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk843472 = require("./843472.js"),
  Chunk997509 = require("./997509.js"),
  Chunk734057 = require("./734057.js"),
  Chunk258671 = require("./258671.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk378720 = require("./378720.js");

function h(e) {
  let {
    channelId: l,
    messageId: t,
    transitionState: h,
    onClose: S
  } = e, _ = (0, s.bG)([c.A], () => c.A.getChannel(l)), [f, C] = (0, u.A)(l), F = null == _ ? true : _.guild_id;
  return (0, n.jsx)(i.VoidConfirmModal, {
    header: g.intl.string(g.t.aIz1oV),
    confirmText: g.intl.string(g.t["cY+Oob"]),
    cancelText: g.intl.string(g.t["ETE/oC"]),
    confirmButtonColor: o.$n.Colors.BRAND,
    onConfirm: () => r.A.crosspostMessage(l, t),
    transitionState: h,
    onClose: S,
    children: (0, n.jsx)(i.Text, {
      variant: "text-md/normal",
      className: b.YK,
      children: C ? (0, n.jsx)(i.y$y, {}) : null != f && null != f.guildsFollowing && f.guildsFollowing > 0 ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(i.Text, {
          className: b.YK,
          variant: "text-sm/normal",
          children: g.intl.format(g.t.GCGrNP, {
            numGuildsFollowing: f.guildsFollowing
          })
        }), (0, n.jsx)(i.Text, {
          variant: "text-sm/normal",
          children: g.intl.format(g.t.IMhGZz, {
            onClick: () => {
              null != F && null != S && (S(), a.A.open(F, d.BEX.ANALYTICS))
            }
          })
        })]
      }) : g.intl.string(g.t["8FpqOs"])
    })
  })
}