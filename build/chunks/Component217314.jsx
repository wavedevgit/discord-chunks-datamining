/** Chunk was on 82477 **/
/** chunk id: 217314, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk978966 = require("./978966.js");

function b(e) {
  let t = e.channel.getRecipientId(),
    n = e.channel.isSystemDM(),
    b = (0, i.e7)([d.default], () => d.default.getUser(t)),
    m = (0, i.e7)([c.Z], () => c.Z.getStatus(t)),
    y = (0, i.e7)([c.Z], () => c.Z.isMobileOnline(t)),
    O = (0, i.e7)([u.Z], () => u.Z.getNickname(t)),
    v = f.ZP.useUserTag(b),
    j = (0, o.j)({
      displayNameStyles: null == b ? true : b.displayNameStyles
    }),
    C = (0, s.m$)({
      channelId: e.channel.id
    });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.nn4, {
      children: p.intl.string(p.t.EJRzg7)
    }), null != b && !n && (0, r.jsx)("div", {
      children: (0, r.jsx)(a.qEK, {
        status: m,
        isMobile: y,
        className: g.avatar,
        size: a.EFr.SIZE_20,
        "aria-label": f.ZP.getName(b),
        src: b.getAvatarURL(true, 20)
      })
    }), (0, r.jsx)(h.Z.Title, {
      level: e.level,
      onClick: e.handleClick,
      onContextMenu: e.handleContextMenu,
      className: null != e.handleClick ? g.cursorPointer : null,
      children: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.u, {
          text: v,
          position: "bottom",
          children: (0, r.jsx)("span", {
            className: j,
            children: null != O ? O : f.ZP.getName(b)
          })
        }), C && (0, r.jsx)(l.u, {
          text: p.intl.string(p.t.QyZ4Td),
          children: (0, r.jsx)(a.tQf, {
            size: "xs",
            "aria-label": p.intl.string(p.t.VHXh8a),
            color: a.TVs.colors.INTERACTIVE_TEXT_DEFAULT,
            className: g.secureFramesIcon
          })
        })]
      })
    })]
  })
}