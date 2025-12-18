/** Chunk was on 67000 **/
/** chunk id: 207913, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => K
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk828700 = require("./828700.js"),
  Chunk442837 = require("./442837.js"),
  Chunk194983 = require("./194983.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk884338 = require("./884338.jsx"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk978003 = require("./978003.js"),
  Chunk245216 = require("./245216.jsx"),
  Chunk739566 = require("./739566.js"),
  Chunk930282 = require("./930282.jsx"),
  Chunk318713 = require("./318713.jsx"),
  Chunk47930 = require("./47930.jsx"),
  Chunk123145 = require("./123145.jsx"),
  Chunk25015 = require("./25015.jsx"),
  Chunk178480 = require("./178480.js"),
  Chunk518950 = require("./518950.js"),
  Chunk131704 = require("./131704.js"),
  Chunk601964 = require("./601964.js"),
  Chunk592125 = require("./592125.js"),
  Chunk720202 = require("./720202.js"),
  Chunk430824 = require("./430824.js"),
  Chunk821020 = require("./821020.js"),
  Chunk948154 = require("./948154.js"),
  Chunk804932 = require("./804932.jsx"),
  Chunk993609 = require("./993609.js"),
  Chunk987889 = require("./987889.jsx"),
  Chunk586694 = require("./586694.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk975114 = require("./975114.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk834401 = require("./834401.js");

function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function F(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function V(e) {
  let {
    message: t,
    channel: n,
    focusProps: l,
    isSelected: o,
    isUnread: s,
    groupedMessages: f
  } = e, h = n.type === L.d4z.UNKNOWN ? d.VL1 : (0, g.KS)(n, null), b = (0, p.ZP)(n, false), m = (0, c.e7)([Z.Z], () => Z.Z.getGuild(n.getGuildId())), {
    nick: O,
    colorString: v
  } = (0, y.ZP)(t), {
    avatarSrc: x,
    eventHandlers: E
  } = (0, S.Z)({
    userId: t.author.id,
    size: d.EFr.SIZE_32,
    guildId: null == m ? true : m.id,
    animateOnHover: true
  }), I = n.type !== L.d4z.GUILD_ANNOUNCEMENT || null == m, P = (0, j.x)({
    channel: n,
    message: t,
    user: t.author,
    compact: true,
    isRepliedMessage: true
  }), w = (0, r.jsx)("div", {
    className: U.usernameTagContainer,
    inert: true,
    children: (0, r.jsx)(C.Z, {
      channel: n,
      message: t,
      hideGuildTag: true,
      hideSystemTag: true,
      className: U.username
    })
  });
  return (0, i.useEffect)(() => {
    null != m && N.Z.requestMember(m.id, t.author.id)
  }, [m, t.author.id]), (0, r.jsx)(d.tEY, F(B({}, l), {
    children: (0, r.jsxs)("div", {
      onMouseLeave: E.onMouseLeave,
      onMouseEnter: E.onMouseEnter,
      className: U.messageContainer,
      children: [s && !o && (0, r.jsx)("div", {
        className: U.unreadDot
      }), (0, r.jsx)(d.Kqy, {
        align: "start",
        style: {
          width: "fit-content",
          marginTop: "4px"
        },
        children: I ? (0, r.jsx)(M.q, {
          "aria-label": "User Avatar",
          src: x,
          size: d.EFr.SIZE_32,
          cornerIconUrl: null != m ? (0, _.EB)(m, 24) : true,
          cornerIconOffsetX: 4,
          cornerIconOffsetY: 3
        }) : (0, r.jsx)(M.E, {
          "aria-label": "Guild Icon",
          src: (0, _.EB)(m, 32),
          size: d.EFr.SIZE_32,
          cornerIconUrl: t.author.getAvatarURL(m.id, 24),
          cornerIconOffsetX: 4,
          cornerIconOffsetY: 3
        })
      }), (0, r.jsxs)(d.Kqy, {
        gap: 0,
        style: {
          minWidth: 0
        },
        children: [(0, r.jsxs)(d.Kqy, {
          direction: "horizontal",
          gap: 4,
          style: {
            whiteSpace: "nowrap",
            minWidth: 0,
            justifyContent: "space-between"
          },
          children: [I ? (0, r.jsxs)("div", {
            className: U.usernameOuterContainer,
            children: [(0, r.jsx)("div", {
              className: U.username,
              style: {
                color: null != v ? v : true
              },
              children: (0, r.jsx)(u.Z, {
                children: w
              })
            }), P]
          }) : (0, r.jsx)(u.Z, {
            children: (0, r.jsx)(d.Heading, {
              variant: "text-md/semibold",
              style: {
                color: null != v ? v : true
              },
              className: U.username,
              children: m.name
            })
          }), (0, r.jsxs)(d.Kqy, {
            direction: "horizontal",
            gap: 4,
            align: "center",
            style: {
              width: "fit-content"
            },
            children: [(0, r.jsx)(D.Z, {
              message: t,
              channel: n,
              isUnread: s
            }), t.mentioned && s ? (0, r.jsx)(d.mAB, {
              className: U.mentionBadge,
              count: 1
            }) : (0, r.jsx)(W, {
              message: t
            })]
          })]
        }), (0, r.jsxs)(d.Kqy, {
          direction: "horizontal",
          align: "center",
          gap: 4,
          inert: true,
          className: a()(U.channelName, {
            [U.unread]: s,
            [U.selected]: o
          }),
          children: [null !== h && (0, r.jsx)(h, {
            size: "xxs",
            className: U.inlineIcon
          }), (0, r.jsxs)(d.Text, {
            variant: "text-sm/medium",
            lineClamp: 1,
            className: a()(U.channelName, {
              [U.unread]: s,
              [U.selected]: o
            }),
            children: [b, !I && " \xb7 ".concat(O)]
          })]
        }), (0, r.jsx)(z, {
          message: t,
          isUnread: s,
          isSelected: o,
          channel: n
        }), f.length > 0 && (0, r.jsx)(d.Kqy, {
          gap: 4,
          style: {
            minWidth: 0,
            marginTop: 4,
            marginBottom: 4
          },
          children: (0, r.jsx)(H, {
            overflowMessages: f
          })
        })]
      })]
    })
  }))
}

function H(e) {
  let {
    overflowMessages: t
  } = e, n = (0, o.uniqBy)(t.map(e => e.author), e => e.id).slice(0, 3);
  return (0, r.jsxs)(d.Kqy, {
    direction: "horizontal",
    gap: 4,
    inert: true,
    children: [(0, r.jsx)(h.ZP, {
      users: n,
      useFallbackUserForPopout: true,
      size: h.u8.SIZE_16
    }), (0, r.jsx)(d.Text, {
      variant: "text-sm/medium",
      className: U.overflowText,
      children: G.intl.formatToPlainString(k.default.NzUuLD, {
        count: t.length
      })
    })]
  })
}

function W(e) {
  let {
    message: t
  } = e, n = (0, E.a3)(t.timestamp.getTime());
  return (0, r.jsx)(v.Z, {
    timestamp: t.timestamp,
    className: U.timestamp,
    isEdited: t.isEdited(),
    isInline: true,
    children: n
  })
}

function z(e) {
  let {
    message: t,
    channel: n,
    isUnread: l,
    isSelected: o
  } = e, {
    previewContent: s,
    Icon: c
  } = function(e) {
    let {
      message: t,
      isUnread: n,
      isSelected: l
    } = e, {
      content: o
    } = (0, x.Z)(t, {
      hideSimpleEmbedContent: true,
      allowList: false,
      allowHeading: true,
      allowLinks: true,
      previewLinkTarget: false,
      formatInline: true,
      noStyleAndInteraction: true
    });
    return (0, i.useMemo)(() => {
      let e = "" === t.content,
        i = t.embeds.some(e => e.type === L.hBH.GIFV),
        s = function(e) {
          let t = e.embeds.some(e => e.type === L.hBH.GIFV);
          return e.attachments.length + +!!t
        }(t),
        c = (0, b.Z)(t),
        u = t.stickerItems.length > 0,
        f = t.isPoll(),
        h = t.type === L.uaV.POLL_RESULT,
        p = t.hasFlag(L.iLy.IS_VOICE_MESSAGE),
        g = t.type === L.uaV.USER_JOIN,
        y = null;
      1 === s ? y = d.XBm : s > 1 ? y = d.Ka2 : c ? y = m.Z : f || h ? y = d.QDj : u ? y = d.SlE : p && (y = d.gj8);
      let v = true,
        j = null;
      if (e)
        if (c) j = G.intl.string(G.t["9ddYKt"]);
        else if (f) {
        var C;
        v = false, j = null == (C = t.poll) ? true : C.question.text
      } else j = h ? G.intl.string(G.t.sad2PH) : i ? G.intl.string(G.t.p0oZmy) : s > 1 ? G.intl.formatToPlainString(G.t.rtfTKp, {
        count: s
      }) : 1 === s ? G.intl.string(G.t.tCcq5p) : u ? G.intl.format(G.t.zY4v1B, {
        stickerName: t.stickerItems[0].name
      }) : p ? G.intl.string(G.t.slFYgi) : g ? G.intl.string(G.t.Yvvfw9) : G.intl.string(G.t.sDqZHL);
      else v = false, j = (0, r.jsx)(O.ZP, {
        content: o,
        message: t,
        compact: false,
        className: a()(U.message, {
          [U.unread]: n,
          [U.selected]: l
        })
      });
      return e && (j = (0, r.jsx)("div", {
        className: a()(U.message, {
          [U.unread]: n,
          [U.selected]: l,
          [U.descriptionMessage]: v
        }),
        children: j
      })), {
        previewContent: j,
        Icon: y
      }
    }, [t, o, n, l])
  }({
    message: t,
    channel: n,
    isUnread: l,
    isSelected: o
  });
  return (0, r.jsxs)(d.Kqy, {
    direction: "horizontal",
    gap: 4,
    align: "center",
    inert: true,
    children: [null != c && (0, r.jsx)(c, {
      size: "xxs",
      className: U.inlineIcon
    }), (0, r.jsx)(d.Text, {
      variant: "text-sm/normal",
      lineClamp: 1,
      className: U.message,
      children: s
    })]
  })
}
let K = (0, Chunk473749.memo)(function(e) {
  var t;
  let {
    message: l,
    groupedMessages: o,
    isUnread: u
  } = e, h = l.message, p = (0, A.fJ)(), {
    params: g
  } = (0, s.$B)(), b = (0, c.e7)([P.Z], () => {
    if (null == h) return null;
    let e = P.Z.getChannel(l.channelId);
    return null != e ? e : new I.nl({
      id: l.channelId,
      guild_id: l.guildId,
      type: L.d4z.UNKNOWN,
      name: G.intl.string(G.t.J90oLW)
    })
  }), m = (0, R.z)(e => {
    var t;
    return e.isMenuOpenForMessage(null != (t = null == h ? true : h.id) ? t : null)
  }), {
    notificationCenterVariant: y
  } = (0, w.pN)({
    location: "NotificationsInboxMessageUnit"
  }), O = i.useMemo(() => "".concat(null == h ? true : h.author.username, ": ").concat(null == b ? true : b.name), [null == h ? true : h.author.username, null == b ? true : b.name]), v = null != (t = null == o ? true : o.map(e => e.message).filter(e => null != e)) ? t : [];
  return null == h || null == b ? null : (0, r.jsx)(d.kL8, {
    "aria-label": O,
    className: a()(U.messageClickableContainer, {
      [U.selected]: h.id === g.messageId,
      [U.actionMenuOpen]: m
    }),
    onClick: () => {
      T.Z.inboxItemClick({
        message: h,
        channel: b,
        isUnread: u,
        isSidebar: y === w.jP.SIDEBAR,
        viewId: p
      })
    },
    onContextMenu: e => {
      e.preventDefault(), (0, A.Qz)({
        interactionType: A.s_.CONTEXT_MENU,
        message: h,
        viewId: p
      }), (0, f.jW)(e, async () => {
        let {
          default: e
        } = await n.e("74922").then(n.bind(n, 550265));
        return t => (0, r.jsx)(e, F(B({}, t), {
          channel: b
        }))
      }, {
        disableClickTrap: true
      })
    },
    children: (0, r.jsx)(V, {
      message: h,
      channel: b,
      isSelected: h.id === g.messageId,
      groupedMessages: v,
      isUnread: u
    })
  })
}, (e, t) => {
  var n, r;
  return e.isUnread === t.isUnread && e.message.id === t.message.id && (null == (n = e.groupedMessages) ? true : n.length) === (null == (r = t.groupedMessages) ? true : r.length)
})