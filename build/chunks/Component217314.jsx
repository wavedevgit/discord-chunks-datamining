/** Chunk was on 29446 **/
/** chunk id: 217314, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk399606 = require("./399606.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk7284 = require("./7284.js"),
  Chunk210975 = require("./210975.js"),
  Chunk158776 = require("./158776.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk984370 = require("./984370.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk97009 = require("./97009.js");

function g(e) {
  let t = e.channel.getRecipientId(),
    n = e.channel.isSystemDM(),
    g = (0, l.e7)([d.default], () => d.default.getUser(t)),
    v = (0, l.e7)([c.Z], () => c.Z.getStatus(t)),
    b = (0, l.e7)([c.Z], () => c.Z.isMobileOnline(t)),
    j = (0, l.e7)([u.Z], () => u.Z.getNickname(t)),
    y = p.ZP.useUserTag(g),
    O = (0, s.j)({
      displayNameStyles: null == g ? true : g.displayNameStyles
    }),
    x = (0, o.m$)({
      channelId: e.channel.id
    });
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(a.nn4, {
      children: f.intl.string(f.t.EJRzg7)
    }), null != g && !n && (0, i.jsx)("div", {
      children: (0, i.jsx)(a.qEK, {
        status: v,
        isMobile: b,
        className: m.avatar,
        size: a.EFr.SIZE_20,
        "aria-label": p.ZP.getName(g),
        src: g.getAvatarURL(true, 20)
      })
    }), (0, i.jsx)(h.Z.Title, {
      level: e.level,
      onClick: e.handleClick,
      onContextMenu: e.handleContextMenu,
      className: null != e.handleClick ? m.cursorPointer : null,
      children: (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(a.jSM, {
          text: y,
          position: "bottom",
          className: O,
          children: null != j ? j : p.ZP.getName(g)
        }), x && (0, i.jsx)(r.u, {
          text: f.intl.string(f.t.QyZ4Td),
          children: (0, i.jsx)(a.tQf, {
            size: "xs",
            "aria-label": f.intl.string(f.t.VHXh8a),
            color: a.TVs.colors.INTERACTIVE_NORMAL,
            className: m.secureFramesIcon
          })
        })]
      })
    })]
  })
}