/** Chunk was on web.js **/
/** chunk id: 529200, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => R
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk571694 = require("./571694.js"),
  Chunk47167 = require("./47167.js"),
  Chunk713654 = require("./713654.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk769015 = require("./769015.jsx"),
  Chunk263063 = require("./263063.jsx"),
  Chunk776231 = require("./776231.js"),
  Chunk253932 = require("./253932.js"),
  Chunk486020 = require("./486020.js"),
  Chunk821589 = require("./821589.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk485366 = require("./485366.js");
let b = e => {
    let {
      text: t,
      extra: n
    } = e;
    return (0, r.jsxs)(o.Heading, {
      variant: "heading-md/semibold",
      className: y.header,
      children: [t, n]
    })
  },
  O = e => {
    let {
      resolving: t,
      children: n
    } = e;
    return (0, r.jsx)("div", {
      className: y.content,
      children: t ? (0, r.jsxs)("div", {
        className: y.resolvingWrapper,
        children: [(0, r.jsx)("div", {
          className: y.resolving,
          children: (0, r.jsx)("div", {
            className: y.resolvingBackground
          })
        }), (0, r.jsx)("div", {
          className: y.resolvingFakeButton,
          children: (0, r.jsx)("div", {
            className: y.resolvingBackground
          })
        })]
      }) : n
    })
  },
  v = e => {
    var t;
    let {
      application: n,
      guild: i,
      channel: a,
      onClick: u,
      expired: d = false,
      user: _,
      className: m
    } = e, E = null != (t = (0, c.Ay)(a)) ? t : "", b = h.kt.useSetting();
    if (d) return (0, r.jsx)("div", {
      className: y.guildIconExpired
    });
    let O = null == i || null != i.icon,
      v = s()((0, g.t)(y, "guildIcon", O ? "Image" : "", null != u ? "Joined" : ""), m);
    return null != n ? (0, r.jsx)(f.A, {
      game: n,
      onClick: u,
      size: y.applicationIcon,
      className: v
    }) : null != i ? (0, r.jsx)(p.A, {
      onClick: u,
      active: true,
      guild: i,
      className: v,
      animate: b
    }) : null != a ? (0, r.jsx)(o.euF, {
      onClick: u,
      src: (0, l.Y)(a),
      size: o._3J.SIZE_56,
      className: v,
      "aria-label": E
    }) : null != _ ? (0, r.jsx)(o.euF, {
      onClick: u,
      src: _.getAvatarURL(null, 56),
      size: o._3J.SIZE_56,
      className: v,
      "aria-label": E
    }) : null
  },
  A = e => {
    let {
      title: t,
      onClick: n,
      expired: i,
      children: a
    } = e, s = (0, r.jsx)(o.Heading, {
      variant: "heading-md/semibold",
      className: (0, g.t)(y, "inviteDestination", i ? "Expired" : null != n ? "Joined" : ""),
      children: t
    });
    return (0, r.jsxs)(d.A, {
      className: y.guildInfo,
      direction: d.A.Direction.VERTICAL,
      justify: d.A.Justify.CENTER,
      children: [null == n ? s : (0, r.jsx)(o.DUT, {
        onClick: n,
        children: s
      }), (0, r.jsx)(o.Text, {
        tag: "strong",
        className: y.guildDetail,
        variant: "text-sm/normal",
        children: a
      })]
    })
  },
  I = e => {
    let {
      membersOnline: t,
      members: n
    } = e, i = [];
    return null != t && t > 0 && i.push((0, r.jsxs)("div", {
      className: y.statusWrapper,
      children: [(0, r.jsx)("i", {
        className: y.statusOnline
      }), (0, r.jsx)("span", {
        className: y.count,
        children: E.intl.format(E.t["LC+S+m"], {
          membersOnline: t
        })
      })]
    }, "onlineCount")), null != n && i.push((0, r.jsxs)("div", {
      className: y.statusWrapper,
      children: [(0, r.jsx)("i", {
        className: y.statusOffline
      }), (0, r.jsx)("span", {
        className: y.count,
        children: E.intl.format(E.t.zRl6XR, {
          count: n
        })
      })]
    }, "memberCount")), (0, r.jsx)("div", {
      className: y.statusCounts,
      children: i
    })
  },
  S = e => {
    let {
      channel: t,
      guild: n
    } = e, i = (0, u.gU)(t, n);
    return null == t || null == i ? null : (0, r.jsxs)("div", {
      className: y.channel,
      children: [(0, r.jsx)(i, {
        className: y.channelIcon,
        color: "currentColor",
        size: "custom",
        width: 20,
        height: 20
      }), (0, r.jsx)("span", {
        className: y.channelName,
        children: t.name
      })]
    })
  },
  T = e => {
    let {
      children: t,
      className: n,
      containerRef: i
    } = e;
    return (0, r.jsx)("div", {
      ref: i,
      className: s()(y.wrapper, n),
      children: t
    })
  },
  C = e => {
    let {
      guild: t
    } = e, [n, a] = i.useState(false), o = m.Ay.getGuildSplashURL({
      id: t.id,
      splash: t.splash,
      size: 400 * (0, _.mZ)()
    });
    return null == o ? null : (0, r.jsx)("div", {
      className: y.inviteSplash,
      children: (0, r.jsx)("img", {
        src: o,
        alt: "",
        className: s()(y.inviteSplashImage, {
          [y.inviteSplashImageLoaded]: n
        }),
        onLoad: () => a(true)
      })
    })
  },
  N = e => {
    let {
      guild: t,
      ref: n
    } = e;
    return (0, r.jsx)("div", {
      className: y.guildNameWrapper,
      ref: n,
      children: (0, r.jsx)("span", {
        className: y.guildName,
        children: t.name
      })
    })
  },
  w = e => {
    let {
      guildTemplate: t
    } = e;
    return (0, r.jsx)("div", {
      className: y.guildNameWrapper,
      children: (0, r.jsx)("span", {
        className: y.guildName,
        children: t.serializedSourceGuild.name
      })
    })
  };
T.Header = b, T.Body = O, T.Icon = v, T.Info = A, T.Data = I, T.Channel = S, T.GuildSplash = C, T.GuildName = N, T.GuildTemplateName = w, b.displayName = "InviteButton.Header", O.displayName = "InviteButton.Body", v.displayName = "InviteButton.Icon", A.displayName = "InviteButton.Info", I.displayName = "InviteButton.Data", S.displayName = "InviteButton.Channel", C.displayName = "InviteButton.GuildSplash", N.displayName = "InviteButton.GuildName", w.displayName = "InviteButton.GuildTemplateName";
let R = T