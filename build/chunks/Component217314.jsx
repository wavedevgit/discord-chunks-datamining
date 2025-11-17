/** Chunk was on 65354 **/
/** chunk id: 217314, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
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
  Chunk97009 = require("./97009.js");

function m(e) {
  let t = e.channel.getRecipientId(),
    n = e.channel.isSystemDM(),
    m = (0, i.e7)([d.default], () => d.default.getUser(t)),
    b = (0, i.e7)([c.Z], () => c.Z.getStatus(t)),
    _ = (0, i.e7)([c.Z], () => c.Z.isMobileOnline(t)),
    y = (0, i.e7)([u.Z], () => u.Z.getNickname(t)),
    O = p.ZP.useUserTag(m),
    v = (0, a.j)({
      displayNameStyles: null == m ? true : m.displayNameStyles
    }),
    j = (0, s.m$)({
      channelId: e.channel.id
    });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.nn4, {
      children: h.intl.string(h.t.EJRzg7)
    }), null != m && !n && (0, r.jsx)("div", {
      children: (0, r.jsx)(o.qEK, {
        status: b,
        isMobile: _,
        className: g.avatar,
        size: o.EFr.SIZE_20,
        "aria-label": p.ZP.getName(m),
        src: m.getAvatarURL(true, 20)
      })
    }), (0, r.jsx)(f.Z.Title, {
      level: e.level,
      onClick: e.handleClick,
      onContextMenu: e.handleContextMenu,
      className: null != e.handleClick ? g.cursorPointer : null,
      children: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.u, {
          text: O,
          position: "bottom",
          children: (0, r.jsx)("span", {
            className: v,
            children: null != y ? y : p.ZP.getName(m)
          })
        }), j && (0, r.jsx)(l.u, {
          text: h.intl.string(h.t.QyZ4Td),
          children: (0, r.jsx)(o.tQf, {
            size: "xs",
            "aria-label": h.intl.string(h.t.VHXh8a),
            color: o.TVs.colors.INTERACTIVE_NORMAL,
            className: g.secureFramesIcon
          })
        })]
      })
    })]
  })
}