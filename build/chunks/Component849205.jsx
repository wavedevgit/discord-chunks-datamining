/** Chunk was on 97492 **/
/** chunk id: 849205, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk417597 = require("./417597.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk73392 = require("./73392.js"),
  Chunk665691 = require("./665691.js"),
  Chunk290863 = require("./290863.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk427262 = require("./427262.js"),
  Chunk742589 = require("./742589.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk638990 = require("./638990.js");

function g(e) {
  let t = e.channel.getRecipientId(),
    n = e.channel.isSystemDM(),
    g = (0, l.bG)([d.default], () => d.default.getUser(t)),
    m = (0, l.bG)([c.A], () => c.A.getStatus(t)),
    A = (0, l.bG)([c.A], () => c.A.isMobileOnline(t)),
    y = (0, l.bG)([u.A], () => u.A.getNickname(t)),
    O = f.Ay.useUserTag(g),
    j = (0, s.a)({
      displayNameStyles: null == g ? true : g.displayNameStyles
    }),
    v = (0, o.bG)({
      channelId: e.channel.id
    });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.AC4, {
      children: h.intl.string(h.t.EJRzg7)
    }), null != g && !n && (0, r.jsx)("div", {
      children: (0, r.jsx)(a.euF, {
        status: m,
        isMobile: A,
        className: b.my,
        size: a._3J.SIZE_20,
        "aria-label": f.Ay.getName(g),
        src: g.getAvatarURL(true, 20)
      })
    }), (0, r.jsx)(p.A.Title, {
      level: e.level,
      onClick: e.handleClick,
      onContextMenu: e.handleContextMenu,
      className: null != e.handleClick ? b.or : null,
      children: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(i.m, {
          text: O,
          position: "bottom",
          children: (0, r.jsx)("span", {
            className: j,
            children: null != y ? y : f.Ay.getName(g)
          })
        }), v && (0, r.jsx)(i.m, {
          text: h.intl.string(h.t.QyZ4Td),
          children: (0, r.jsx)(a.m5V, {
            size: "xs",
            "aria-label": h.intl.string(h.t.VHXh8a),
            color: a.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
            className: b.vW
          })
        })]
      })
    })]
  })
}