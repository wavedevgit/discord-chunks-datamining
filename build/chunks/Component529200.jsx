/** Chunk was on 48330 **/
/** chunk id: 529200, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => P
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
let f = e => {
    let {
      text: t,
      extra: n
    } = e;
    return (0, l.jsxs)(a.Heading, {
      variant: "heading-md/semibold",
      className: N.header,
      children: [t, n]
    })
  },
  y = e => {
    let {
      resolving: t,
      children: n
    } = e;
    return (0, l.jsx)("div", {
      className: N.content,
      children: t ? (0, l.jsxs)("div", {
        className: N.resolvingWrapper,
        children: [(0, l.jsx)("div", {
          className: N.resolving,
          children: (0, l.jsx)("div", {
            className: N.resolvingBackground
          })
        }), (0, l.jsx)("div", {
          className: N.resolvingFakeButton,
          children: (0, l.jsx)("div", {
            className: N.resolvingBackground
          })
        })]
      }) : n
    })
  },
  E = e => {
    var t;
    let {
      application: n,
      guild: r,
      channel: i,
      onClick: u,
      expired: d = false,
      user: p,
      className: g
    } = e, h = null != (t = (0, o.Ay)(i)) ? t : "", f = x.kt.useSetting();
    if (d) return (0, l.jsx)("div", {
      className: N.guildIconExpired
    });
    let y = null == r || null != r.icon,
      E = s()((0, j.t)(N, "guildIcon", y ? "Image" : "", null != u ? "Joined" : ""), g);
    return null != n ? (0, l.jsx)(m.A, {
      game: n,
      onClick: u,
      size: N.applicationIcon,
      className: E
    }) : null != r ? (0, l.jsx)(v.A, {
      onClick: u,
      active: true,
      guild: r,
      className: E,
      animate: f
    }) : null != i ? (0, l.jsx)(a.euF, {
      onClick: u,
      src: (0, c.Y)(i),
      size: a._3J.SIZE_56,
      className: E,
      "aria-label": h
    }) : null != p ? (0, l.jsx)(a.euF, {
      onClick: u,
      src: p.getAvatarURL(null, 56),
      size: a._3J.SIZE_56,
      className: E,
      "aria-label": h
    }) : null
  },
  b = e => {
    let {
      title: t,
      onClick: n,
      expired: r,
      children: i
    } = e, s = (0, l.jsx)(a.Heading, {
      variant: "heading-md/semibold",
      className: (0, j.t)(N, "inviteDestination", r ? "Expired" : null != n ? "Joined" : ""),
      children: t
    });
    return (0, l.jsxs)(d.A, {
      className: N.guildInfo,
      direction: d.A.Direction.VERTICAL,
      justify: d.A.Justify.CENTER,
      children: [null == n ? s : (0, l.jsx)(a.DUT, {
        onClick: n,
        children: s
      }), (0, l.jsx)(a.Text, {
        tag: "strong",
        className: N.guildDetail,
        variant: "text-sm/normal",
        children: i
      })]
    })
  },
  I = e => {
    let {
      membersOnline: t,
      members: n
    } = e, r = [];
    return null != t && t > 0 && r.push((0, l.jsxs)("div", {
      className: N.statusWrapper,
      children: [(0, l.jsx)("i", {
        className: N.statusOnline
      }), (0, l.jsx)("span", {
        className: N.count,
        children: h.intl.format(h.t["LC+S+m"], {
          membersOnline: t
        })
      })]
    }, "onlineCount")), null != n && r.push((0, l.jsxs)("div", {
      className: N.statusWrapper,
      children: [(0, l.jsx)("i", {
        className: N.statusOffline
      }), (0, l.jsx)("span", {
        className: N.count,
        children: h.intl.format(h.t.zRl6XR, {
          count: n
        })
      })]
    }, "memberCount")), (0, l.jsx)("div", {
      className: N.statusCounts,
      children: r
    })
  },
  A = e => {
    let {
      channel: t,
      guild: n
    } = e, r = (0, u.gU)(t, n);
    return null == t || null == r ? null : (0, l.jsxs)("div", {
      className: N.channel,
      children: [(0, l.jsx)(r, {
        className: N.channelIcon,
        color: "currentColor",
        size: "custom",
        width: 20,
        height: 20
      }), (0, l.jsx)("span", {
        className: N.channelName,
        children: t.name
      })]
    })
  },
  C = e => {
    let {
      children: t,
      className: n,
      containerRef: r
    } = e;
    return (0, l.jsx)("div", {
      ref: r,
      className: s()(N.wrapper, n),
      children: t
    })
  },
  O = e => {
    let {
      guild: t
    } = e, [n, i] = r.useState(false), a = g.Ay.getGuildSplashURL({
      id: t.id,
      splash: t.splash,
      size: 400 * (0, p.mZ)()
    });
    return null == a ? null : (0, l.jsx)("div", {
      className: N.inviteSplash,
      children: (0, l.jsx)("img", {
        src: a,
        alt: "",
        className: s()(N.inviteSplashImage, {
          [N.inviteSplashImageLoaded]: n
        }),
        onLoad: () => i(true)
      })
    })
  },
  T = e => {
    let {
      guild: t,
      ref: n
    } = e;
    return (0, l.jsx)("div", {
      className: N.guildNameWrapper,
      ref: n,
      children: (0, l.jsx)("span", {
        className: N.guildName,
        children: t.name
      })
    })
  },
  S = e => {
    let {
      guildTemplate: t
    } = e;
    return (0, l.jsx)("div", {
      className: N.guildNameWrapper,
      children: (0, l.jsx)("span", {
        className: N.guildName,
        children: t.serializedSourceGuild.name
      })
    })
  };
C.Header = f, C.Body = y, C.Icon = E, C.Info = b, C.Data = I, C.Channel = A, C.GuildSplash = O, C.GuildName = T, C.GuildTemplateName = S, f.displayName = "InviteButton.Header", y.displayName = "InviteButton.Body", E.displayName = "InviteButton.Icon", b.displayName = "InviteButton.Info", I.displayName = "InviteButton.Data", A.displayName = "InviteButton.Channel", O.displayName = "InviteButton.GuildSplash", T.displayName = "InviteButton.GuildName", S.displayName = "InviteButton.GuildTemplateName";
let P = C