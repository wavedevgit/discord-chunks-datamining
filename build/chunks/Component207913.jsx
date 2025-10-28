/** Chunk was on 36925 **/
/** chunk id: 207913, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => K
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk843611 = require("./843611.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk884338 = require("./884338.jsx"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk111028 = require("./111028.jsx"),
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
  Chunk400705 = require("./400705.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk361584 = require("./361584.js");

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
    isSelected: a,
    isUnread: s,
    groupedMessages: d
  } = e, p = n.type === M.d4z.UNKNOWN ? u.VL1 : (0, h.KS)(n, null), m = (0, f.ZP)(n, false), b = (0, c.e7)([Z.Z], () => Z.Z.getGuild(n.getGuildId())), {
    nick: O,
    colorString: y
  } = (0, _.ZP)(t), {
    avatarSrc: C,
    eventHandlers: x
  } = (0, E.Z)({
    userId: t.author.id,
    size: u.EFr.SIZE_32,
    guildId: null == b ? true : b.id,
    animateOnHover: true
  }), S = n.type !== M.d4z.GUILD_ANNOUNCEMENT || null == b, P = (0, j.x)({
    channel: n,
    message: t,
    user: t.author,
    compact: true,
    isRepliedMessage: true
  }), T = (0, r.jsx)("div", {
    className: U.usernameTagContainer,
    inert: true,
    children: (0, r.jsx)(v.Z, {
      channel: n,
      message: t,
      hideGuildTag: true,
      hideSystemTag: true,
      className: U.username
    })
  });
  return (0, i.useEffect)(() => {
    null != b && N.Z.requestMember(b.id, t.author.id)
  }, [b, t.author.id]), (0, r.jsx)(u.tEY, F(B({}, l), {
    children: (0, r.jsxs)("div", {
      onMouseLeave: x.onMouseLeave,
      onMouseEnter: x.onMouseEnter,
      className: U.messageContainer,
      children: [s && !a && (0, r.jsx)("div", {
        className: U.unreadDot
      }), (0, r.jsx)(u.Kqy, {
        align: "start",
        style: {
          width: "fit-content",
          marginTop: "4px"
        },
        children: S ? (0, r.jsx)(L.q, {
          "aria-label": "User Avatar",
          src: C,
          size: u.EFr.SIZE_32,
          cornerIconUrl: null != b ? (0, I.EB)(b, 24) : true,
          cornerIconOffsetX: 4,
          cornerIconOffsetY: 3
        }) : (0, r.jsx)(L.E, {
          "aria-label": "Guild Icon",
          src: (0, I.EB)(b, 32),
          size: u.EFr.SIZE_32,
          cornerIconUrl: t.author.getAvatarURL(b.id, 24),
          cornerIconOffsetX: 4,
          cornerIconOffsetY: 3
        })
      }), (0, r.jsxs)(u.Kqy, {
        gap: 0,
        style: {
          minWidth: 0
        },
        children: [(0, r.jsxs)(u.Kqy, {
          direction: "horizontal",
          gap: 4,
          style: {
            whiteSpace: "nowrap",
            minWidth: 0,
            justifyContent: "space-between"
          },
          children: [S ? (0, r.jsxs)("div", {
            className: U.usernameOuterContainer,
            children: [(0, r.jsx)("div", {
              className: U.username,
              style: {
                color: null != y ? y : true
              },
              children: (0, r.jsx)(g.Z, {
                children: T
              })
            }), P]
          }) : (0, r.jsx)(g.Z, {
            children: (0, r.jsx)(u.Heading, {
              variant: "text-md/semibold",
              style: {
                color: null != y ? y : true
              },
              className: U.username,
              children: b.name
            })
          }), (0, r.jsxs)(u.Kqy, {
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
            }), t.mentioned && s ? (0, r.jsx)(u.mAB, {
              className: U.mentionBadge,
              count: 1
            }) : (0, r.jsx)(z, {
              message: t
            })]
          })]
        }), (0, r.jsxs)(u.Kqy, {
          direction: "horizontal",
          align: "center",
          gap: 4,
          inert: true,
          className: o()(U.channelName, {
            [U.unread]: s,
            [U.selected]: a
          }),
          children: [null !== p && (0, r.jsx)(p, {
            size: "xxs",
            className: U.inlineIcon
          }), (0, r.jsxs)(u.Text, {
            variant: "text-sm/medium",
            lineClamp: 1,
            className: o()(U.channelName, {
              [U.unread]: s,
              [U.selected]: a
            }),
            children: [m, !S && " \xb7 ".concat(O)]
          })]
        }), (0, r.jsx)(W, {
          message: t,
          isUnread: s,
          isSelected: a,
          channel: n
        }), d.length > 0 && (0, r.jsx)(u.Kqy, {
          gap: 4,
          style: {
            minWidth: 0,
            marginTop: 4,
            marginBottom: 4
          },
          children: (0, r.jsx)(H, {
            overflowMessages: d
          })
        })]
      })]
    })
  }))
}

function H(e) {
  let {
    overflowMessages: t
  } = e, n = (0, a.uniqBy)(t.map(e => e.author), e => e.id).slice(0, 3);
  return (0, r.jsxs)(u.Kqy, {
    direction: "horizontal",
    gap: 4,
    inert: true,
    children: [(0, r.jsx)(p.ZP, {
      users: n,
      useFallbackUserForPopout: true,
      size: p.u8.SIZE_16
    }), (0, r.jsx)(u.Text, {
      variant: "text-sm/medium",
      className: U.overflowText,
      children: G.intl.formatToPlainString(k.default.NzUuLD, {
        count: t.length
      })
    })]
  })
}

function z(e) {
  let {
    message: t
  } = e, n = (0, x.a3)(t.timestamp.getTime());
  return (0, r.jsx)(y.Z, {
    timestamp: t.timestamp,
    className: U.timestamp,
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
    isSelected: a
  } = e, {
    previewContent: s,
    Icon: c
  } = function(e) {
    let {
      message: t,
      isUnread: n,
      isSelected: l
    } = e, {
      content: a
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
        i = t.embeds.some(e => e.type === M.hBH.GIFV),
        s = function(e) {
          let t = e.embeds.some(e => e.type === M.hBH.GIFV);
          return e.attachments.length + +!!t
        }(t),
        c = (0, m.Z)(t),
        d = t.stickerItems.length > 0,
        p = t.isPoll(),
        f = t.type === M.uaV.POLL_RESULT,
        h = t.hasFlag(M.iLy.IS_VOICE_MESSAGE),
        g = t.type === M.uaV.USER_JOIN,
        _ = null;
      1 === s ? _ = u.XBm : s > 1 ? _ = u.Ka2 : c ? _ = b.Z : p || f ? _ = u.QDj : d ? _ = u.SlE : h && (_ = u.gj8);
      let y = true,
        j = null;
      if (e)
        if (c) j = G.intl.string(G.t["9ddYKt"]);
        else if (p) {
        var v;
        y = false, j = null == (v = t.poll) ? true : v.question.text
      } else j = f ? G.intl.string(G.t.sad2PH) : i ? G.intl.string(G.t.p0oZmy) : s > 1 ? G.intl.formatToPlainString(G.t.rtfTKp, {
        count: s
      }) : 1 === s ? G.intl.string(G.t.tCcq5p) : d ? G.intl.format(G.t.zY4v1B, {
        stickerName: t.stickerItems[0].name
      }) : h ? G.intl.string(G.t.slFYgi) : g ? G.intl.string(G.t.Yvvfw9) : G.intl.string(G.t.sDqZHL);
      else y = false, j = (0, r.jsx)(O.ZP, {
        content: a,
        message: t,
        compact: false,
        className: o()(U.message, {
          [U.unread]: n,
          [U.selected]: l
        })
      });
      return e && (j = (0, r.jsx)("div", {
        className: o()(U.message, {
          [U.unread]: n,
          [U.selected]: l,
          [U.descriptionMessage]: y
        }),
        children: j
      })), {
        previewContent: j,
        Icon: _
      }
    }, [t, a, n, l])
  }({
    message: t,
    channel: n,
    isUnread: l,
    isSelected: a
  });
  return (0, r.jsxs)(u.Kqy, {
    direction: "horizontal",
    gap: 4,
    align: "center",
    inert: true,
    children: [null != c && (0, r.jsx)(c, {
      size: "xxs",
      className: U.inlineIcon
    }), (0, r.jsx)(u.Text, {
      variant: "text-sm/normal",
      lineClamp: 1,
      className: U.message,
      children: s
    })]
  })
}
let K = (0, Chunk647438.memo)(function(e) {
  var t;
  let {
    message: l,
    groupedMessages: a,
    isUnread: p
  } = e, f = l.message, h = (0, A.fJ)(), {
    params: g
  } = (0, s.$B)(), m = (0, c.e7)([P.Z], () => {
    if (null == f) return null;
    let e = P.Z.getChannel(l.channelId);
    return null != e ? e : new S.nl({
      id: l.channelId,
      guild_id: l.guildId,
      type: M.d4z.UNKNOWN,
      name: G.intl.string(G.t.J90oLW)
    })
  }), b = (0, R.z)(e => {
    var t;
    return e.isMenuOpenForMessage(null != (t = null == f ? true : f.id) ? t : null)
  }), {
    notificationCenterVariant: _
  } = (0, T.pN)({
    location: "NotificationsInboxMessageUnit"
  }), O = i.useMemo(() => "".concat(null == f ? true : f.author.username, ": ").concat(null == m ? true : m.name), [null == f ? true : f.author.username, null == m ? true : m.name]), y = null != (t = null == a ? true : a.map(e => e.message).filter(e => null != e)) ? t : [];
  return null == f || null == m ? null : (0, r.jsx)(u.kL8, {
    "aria-label": O,
    className: o()(U.messageClickableContainer, {
      [U.selected]: f.id === g.messageId,
      [U.actionMenuOpen]: b
    }),
    onClick: () => {
      w.Z.inboxItemClick({
        message: f,
        channel: m,
        isUnread: p,
        isSidebar: _ === T.jP.SIDEBAR,
        viewId: h
      })
    },
    onContextMenu: e => {
      e.preventDefault(), (0, A.Qz)({
        interactionType: A.s_.CONTEXT_MENU,
        message: f,
        viewId: h
      }), (0, d.jW)(e, async () => {
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
    children: (0, r.jsx)(V, {
      message: f,
      channel: m,
      isSelected: f.id === g.messageId,
      groupedMessages: y,
      isUnread: p
    })
  })
}, (e, t) => {
  var n, r;
  return e.isUnread === t.isUnread && e.message.id === t.message.id && (null == (n = e.groupedMessages) ? true : n.length) === (null == (r = t.groupedMessages) ? true : r.length)
})