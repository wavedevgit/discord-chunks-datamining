/** Chunk was on 81985 **/
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

function H(e) {
  let {
    message: t,
    channel: n,
    focusProps: l,
    isSelected: o,
    isUnread: s,
    groupedMessages: p
  } = e, f = n.type === k.d4z.UNKNOWN ? d.VL1 : (0, g.KS)(n, null), m = (0, h.ZP)(n, false), b = (0, c.e7)([N.Z], () => N.Z.getGuild(n.getGuildId())), {
    nick: v,
    colorString: O
  } = (0, y.ZP)(t), {
    avatarSrc: C,
    eventHandlers: E
  } = (0, S.Z)({
    userId: t.author.id,
    size: d.EFr.SIZE_32,
    guildId: null == b ? true : b.id,
    animateOnHover: true
  }), _ = n.type !== k.d4z.GUILD_ANNOUNCEMENT || null == b, P = (0, j.x)({
    channel: n,
    message: t,
    user: t.author,
    compact: true,
    isRepliedMessage: true
  }), T = (0, r.jsx)("div", {
    className: G.usernameTagContainer,
    inert: true,
    children: (0, r.jsx)(x.Z, {
      channel: n,
      message: t,
      hideGuildTag: true,
      hideSystemTag: true,
      className: G.username
    })
  });
  return (0, i.useEffect)(() => {
    null != b && Z.Z.requestMember(b.id, t.author.id)
  }, [b, t.author.id]), (0, r.jsx)(d.tEY, F(B({}, l), {
    children: (0, r.jsxs)("div", {
      onMouseLeave: E.onMouseLeave,
      onMouseEnter: E.onMouseEnter,
      className: G.messageContainer,
      children: [s && !o && (0, r.jsx)("div", {
        className: G.unreadDot
      }), (0, r.jsx)(d.Kqy, {
        align: "start",
        style: {
          width: "fit-content",
          marginTop: "4px"
        },
        children: _ ? (0, r.jsx)(M.q, {
          "aria-label": "User Avatar",
          src: C,
          size: d.EFr.SIZE_32,
          cornerIconUrl: null != b ? (0, I.EB)(b, 24) : true,
          cornerIconOffsetX: 4,
          cornerIconOffsetY: 3
        }) : (0, r.jsx)(M.E, {
          "aria-label": "Guild Icon",
          src: (0, I.EB)(b, 32),
          size: d.EFr.SIZE_32,
          cornerIconUrl: t.author.getAvatarURL(b.id, 24),
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
          children: [_ ? (0, r.jsxs)("div", {
            className: G.usernameOuterContainer,
            children: [(0, r.jsx)("div", {
              className: G.username,
              style: {
                color: null != O ? O : true
              },
              children: (0, r.jsx)(u.Z, {
                children: T
              })
            }), P]
          }) : (0, r.jsx)(u.Z, {
            children: (0, r.jsx)(d.Heading, {
              variant: "text-md/semibold",
              style: {
                color: null != O ? O : true
              },
              className: G.username,
              children: b.name
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
              className: G.mentionBadge,
              count: 1
            }) : (0, r.jsx)(z, {
              message: t
            })]
          })]
        }), (0, r.jsxs)(d.Kqy, {
          direction: "horizontal",
          align: "center",
          gap: 4,
          inert: true,
          className: a()(G.channelName, {
            [G.unread]: s,
            [G.selected]: o
          }),
          children: [null !== f && (0, r.jsx)(f, {
            size: "xxs",
            className: G.inlineIcon
          }), (0, r.jsxs)(d.Text, {
            variant: "text-sm/medium",
            lineClamp: 1,
            className: a()(G.channelName, {
              [G.unread]: s,
              [G.selected]: o
            }),
            children: [m, !_ && " \xb7 ".concat(v)]
          })]
        }), (0, r.jsx)(W, {
          message: t,
          isUnread: s,
          isSelected: o,
          channel: n
        }), p.length > 0 && (0, r.jsx)(d.Kqy, {
          gap: 4,
          style: {
            minWidth: 0,
            marginTop: 4,
            marginBottom: 4
          },
          children: (0, r.jsx)(V, {
            overflowMessages: p
          })
        })]
      })]
    })
  }))
}

function V(e) {
  let {
    overflowMessages: t
  } = e, n = (0, o.uniqBy)(t.map(e => e.author), e => e.id).slice(0, 3);
  return (0, r.jsxs)(d.Kqy, {
    direction: "horizontal",
    gap: 4,
    inert: true,
    children: [(0, r.jsx)(f.ZP, {
      users: n,
      useFallbackUserForPopout: true,
      size: f.u8.SIZE_16
    }), (0, r.jsx)(d.Text, {
      variant: "text-sm/medium",
      className: G.overflowText,
      children: U.intl.formatToPlainString(L.default.NzUuLD, {
        count: t.length
      })
    })]
  })
}

function z(e) {
  let {
    message: t
  } = e, n = (0, E.a3)(t.timestamp.getTime());
  return (0, r.jsx)(O.Z, {
    timestamp: t.timestamp,
    className: G.timestamp,
    isEdited: t.isEdited(),
    isInline: true,
    children: n
  })
}

function W(e) {
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
    } = (0, C.Z)(t, {
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
        i = t.embeds.some(e => e.type === k.hBH.GIFV),
        s = function(e) {
          let t = e.embeds.some(e => e.type === k.hBH.GIFV);
          return e.attachments.length + +!!t
        }(t),
        c = (0, m.Z)(t),
        u = t.stickerItems.length > 0,
        p = t.isPoll(),
        f = t.type === k.uaV.POLL_RESULT,
        h = t.hasFlag(k.iLy.IS_VOICE_MESSAGE),
        g = t.type === k.uaV.USER_JOIN,
        y = null;
      1 === s ? y = d.XBm : s > 1 ? y = d.Ka2 : c ? y = b.Z : p || f ? y = d.QDj : u ? y = d.SlE : h && (y = d.gj8);
      let O = true,
        j = null;
      if (e)
        if (c) j = U.intl.string(U.t["9ddYKt"]);
        else if (p) {
        var x;
        O = false, j = null == (x = t.poll) ? true : x.question.text
      } else j = f ? U.intl.string(U.t.sad2PH) : i ? U.intl.string(U.t.p0oZmy) : s > 1 ? U.intl.formatToPlainString(U.t.rtfTKp, {
        count: s
      }) : 1 === s ? U.intl.string(U.t.tCcq5p) : u ? U.intl.format(U.t.zY4v1B, {
        stickerName: t.stickerItems[0].name
      }) : h ? U.intl.string(U.t.slFYgi) : g ? U.intl.string(U.t.Yvvfw9) : U.intl.string(U.t.sDqZHL);
      else O = false, j = (0, r.jsx)(v.ZP, {
        content: o,
        message: t,
        compact: false,
        className: a()(G.message, {
          [G.unread]: n,
          [G.selected]: l
        })
      });
      return e && (j = (0, r.jsx)("div", {
        className: a()(G.message, {
          [G.unread]: n,
          [G.selected]: l,
          [G.descriptionMessage]: O
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
      className: G.inlineIcon
    }), (0, r.jsx)(d.Text, {
      variant: "text-sm/normal",
      lineClamp: 1,
      className: G.message,
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
  } = e, f = l.message, h = (0, w.fJ)(), {
    params: g
  } = (0, s.$B)(), m = (0, c.e7)([P.Z], () => {
    if (null == f) return null;
    let e = P.Z.getChannel(l.channelId);
    return null != e ? e : new _.nl({
      id: l.channelId,
      guild_id: l.guildId,
      type: k.d4z.UNKNOWN,
      name: U.intl.string(U.t.J90oLW)
    })
  }), b = (0, R.z)(e => {
    var t;
    return e.isMenuOpenForMessage(null != (t = null == f ? true : f.id) ? t : null)
  }), {
    notificationCenterVariant: y
  } = (0, T.pN)({
    location: "NotificationsInboxMessageUnit"
  }), v = i.useMemo(() => "".concat(null == f ? true : f.author.username, ": ").concat(null == m ? true : m.name), [null == f ? true : f.author.username, null == m ? true : m.name]), O = null != (t = null == o ? true : o.map(e => e.message).filter(e => null != e)) ? t : [];
  return null == f || null == m ? null : (0, r.jsx)(d.kL8, {
    "aria-label": v,
    className: a()(G.messageClickableContainer, {
      [G.selected]: f.id === g.messageId,
      [G.actionMenuOpen]: b
    }),
    onClick: () => {
      A.Z.inboxItemClick({
        message: f,
        channel: m,
        isUnread: u,
        isSidebar: y === T.jP.SIDEBAR,
        viewId: h
      })
    },
    onContextMenu: e => {
      e.preventDefault(), (0, w.Qz)({
        interactionType: w.s_.CONTEXT_MENU,
        message: f,
        viewId: h
      }), (0, p.jW)(e, async () => {
        let {
          default: e
        } = await n.e("74922").then(n.bind(n, 550265));
        return t => (0, r.jsx)(e, F(B({}, t), {
          channel: m
        }))
      }, {
        disableClickTrap: true
      })
    },
    children: (0, r.jsx)(H, {
      message: f,
      channel: m,
      isSelected: f.id === g.messageId,
      groupedMessages: O,
      isUnread: u
    })
  })
}, (e, t) => {
  var n, r;
  return e.isUnread === t.isUnread && e.message.id === t.message.id && (null == (n = e.groupedMessages) ? true : n.length) === (null == (r = t.groupedMessages) ? true : r.length)
})