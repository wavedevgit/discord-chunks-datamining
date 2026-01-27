/** Chunk was on 41727 **/
/** chunk id: 849205, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
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

function m(e) {
  let t = e.channel.getRecipientId(),
    n = e.channel.isSystemDM(),
    m = (0, l.bG)([d.default], () => d.default.getUser(t)),
    b = (0, l.bG)([c.A], () => c.A.getStatus(t)),
    A = (0, l.bG)([c.A], () => c.A.isMobileOnline(t)),
    y = (0, l.bG)([u.A], () => u.A.getNickname(t)),
    _ = p.Ay.useUserTag(m),
    O = (0, a.a)({
      displayNameStyles: null == m ? true : m.displayNameStyles
    }),
    j = (0, o.bG)({
      channelId: e.channel.id
    });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.AC4, {
      children: f.intl.string(f.t.EJRzg7)
    }), null != m && !n && (0, r.jsx)("div", {
      children: (0, r.jsx)(s.euF, {
        status: b,
        isMobile: A,
        className: g.my,
        size: s._3J.SIZE_20,
        "aria-label": p.Ay.getName(m),
        src: m.getAvatarURL(true, 20)
      })
    }), (0, r.jsx)(h.A.Title, {
      level: e.level,
      onClick: e.handleClick,
      onContextMenu: e.handleContextMenu,
      className: null != e.handleClick ? g.or : null,
      children: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(i.m, {
          text: _,
          position: "bottom",
          children: (0, r.jsx)("span", {
            className: O,
            children: null != y ? y : p.Ay.getName(m)
          })
        }), j && (0, r.jsx)(i.m, {
          text: f.intl.string(f.t.QyZ4Td),
          children: (0, r.jsx)(s.m5V, {
            size: "xs",
            "aria-label": f.intl.string(f.t.VHXh8a),
            color: s.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
            className: g.vW
          })
        })]
      })
    })]
  })
}