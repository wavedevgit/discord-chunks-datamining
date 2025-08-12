/** Chunk was on 26628 **/
/** chunk id: 207913, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => K
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk114858 = require("./114858.js"),
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
  Chunk144717 = require("./144717.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk893848 = require("./893848.js");

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

function V(e, t) {
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

function F(e) {
  let {
    message: t,
    channel: n,
    focusProps: l,
    isSelected: s,
    isUnread: a,
    groupedMessages: d
  } = e, h = n.type === M.d4z.UNKNOWN ? u.VL1 : (0, f.KS)(n, null), m = (0, p.ZP)(n, false), b = (0, c.e7)([w.Z], () => w.Z.getGuild(n.getGuildId())), {
    nick: _,
    colorString: y
  } = (0, O.ZP)(t), {
    avatarSrc: j,
    eventHandlers: E
  } = (0, S.Z)({
    userId: t.author.id,
    size: u.EFr.SIZE_32,
    guildId: null == b ? true : b.id,
    animateOnHover: true
  }), x = n.type !== M.d4z.GUILD_ANNOUNCEMENT || null == b, P = (0, C.x)({
    channel: n,
    message: t,
    user: t.author,
    compact: true,
    isRepliedMessage: true
  }), Z = (0, r.jsx)("div", {
    className: G.usernameTagContainer,
    inert: true,
    children: (0, r.jsx)(v.Z, {
      channel: n,
      message: t,
      hideGuildTag: true,
      hideSystemTag: true,
      className: G.username
    })
  });
  return (0, i.useEffect)(() => {
    null != b && N.Z.requestMember(b.id, t.author.id)
  }, [b, t.author.id]), (0, r.jsx)(u.tEY, V(B({}, l), {
    children: (0, r.jsxs)("div", {
      onMouseLeave: E.onMouseLeave,
      onMouseEnter: E.onMouseEnter,
      className: G.messageContainer,
      children: [a && !s && (0, r.jsx)("div", {
        className: G.unreadDot
      }), (0, r.jsx)(u.Kqy, {
        align: "start",
        style: {
          width: "fit-content",
          marginTop: "4px"
        },
        children: x ? (0, r.jsx)(L.q, {
          "aria-label": "User Avatar",
          src: j,
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
          children: [x ? (0, r.jsxs)("div", {
            className: G.usernameOuterContainer,
            children: [(0, r.jsx)("div", {
              className: G.username,
              style: {
                color: null != y ? y : true
              },
              children: (0, r.jsx)(g.Z, {
                children: Z
              })
            }), P]
          }) : (0, r.jsx)(g.Z, {
            children: (0, r.jsx)(u.X6q, {
              variant: "text-md/semibold",
              style: {
                color: null != y ? y : true
              },
              className: G.username,
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
              isUnread: a
            }), t.mentioned && a ? (0, r.jsx)(u.mAB, {
              className: G.mentionBadge,
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
          className: o()(G.channelName, {
            [G.unread]: a,
            [G.selected]: s
          }),
          children: [null !== h && (0, r.jsx)(h, {
            size: "xxs",
            className: G.inlineIcon
          }), (0, r.jsxs)(u.Text, {
            variant: "text-sm/medium",
            lineClamp: 1,
            className: o()(G.channelName, {
              [G.unread]: a,
              [G.selected]: s
            }),
            children: [m, !x && " \xb7 ".concat(_)]
          })]
        }), (0, r.jsx)(W, {
          message: t,
          isUnread: a,
          isSelected: s,
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
  } = e, n = (0, s.uniqBy)(t.map(e => e.author), e => e.id).slice(0, 3);
  return (0, r.jsxs)(u.Kqy, {
    direction: "horizontal",
    gap: 4,
    inert: true,
    children: [(0, r.jsx)(h.ZP, {
      users: n,
      useFallbackUserForPopout: true,
      size: h.u8.SIZE_16
    }), (0, r.jsx)(u.Text, {
      variant: "text-sm/medium",
      className: G.overflowText,
      children: U.intl.formatToPlainString(k.default.NzUuLC, {
        count: t.length
      })
    })]
  })
}

function z(e) {
  let {
    message: t
  } = e, n = (0, E.a3)(t.timestamp.getTime());
  return (0, r.jsx)(y.Z, {
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
    isSelected: s
  } = e, {
    previewContent: a,
    Icon: c
  } = function(e) {
    let {
      message: t,
      isUnread: n,
      isSelected: l
    } = e, {
      content: s
    } = (0, j.Z)(t, {
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
        a = function(e) {
          let t = e.embeds.some(e => e.type === M.hBH.GIFV);
          return e.attachments.length + +!!t
        }(t),
        c = (0, m.Z)(t),
        d = t.stickerItems.length > 0,
        h = t.isPoll(),
        p = t.type === M.uaV.POLL_RESULT,
        f = t.hasFlag(M.iLy.IS_VOICE_MESSAGE),
        g = t.type === M.uaV.USER_JOIN,
        O = null;
      1 === a ? O = u.XBm : a > 1 ? O = u.Ka2 : c ? O = b.Z : h || p ? O = u.QDj : d ? O = u.SlE : f && (O = u.gj8);
      let y = true,
        C = null;
      if (e)
        if (c) C = U.intl.string(U.t["9ddYKi"]);
        else if (h) {
        var v;
        y = false, C = null == (v = t.poll) ? true : v.question.text
      } else C = p ? U.intl.string(U.t.sad2PD) : i ? U.intl.string(U.t.p0oZm5) : a > 1 ? U.intl.formatToPlainString(U.t.rtfTKi, {
        count: a
      }) : 1 === a ? U.intl.string(U.t.tCcq5u) : d ? U.intl.format(U.t.zY4v1N, {
        stickerName: t.stickerItems[0].name
      }) : f ? U.intl.string(U.t.slFYgo) : g ? U.intl.string(U.t.Yvvfw8) : U.intl.string(U.t.sDqZHB);
      else y = false, C = (0, r.jsx)(_.ZP, {
        content: s,
        message: t,
        compact: false,
        className: o()(G.message, {
          [G.unread]: n,
          [G.selected]: l
        })
      });
      return e && (C = (0, r.jsx)("div", {
        className: o()(G.message, {
          [G.unread]: n,
          [G.selected]: l,
          [G.descriptionMessage]: y
        }),
        children: C
      })), {
        previewContent: C,
        Icon: O
      }
    }, [t, s, n, l])
  }({
    message: t,
    channel: n,
    isUnread: l,
    isSelected: s
  });
  return (0, r.jsxs)(u.Kqy, {
    direction: "horizontal",
    gap: 4,
    align: "center",
    inert: true,
    children: [null != c && (0, r.jsx)(c, {
      size: "xxs",
      className: G.inlineIcon
    }), (0, r.jsx)(u.Text, {
      variant: "text-sm/normal",
      lineClamp: 1,
      className: G.message,
      children: a
    })]
  })
}
let K = (0, Chunk73800.memo)(function(e) {
  var t;
  let {
    message: l,
    groupedMessages: s,
    isUnread: h
  } = e, p = l.message, f = (0, A.fJ)(), {
    params: g
  } = (0, a.$B)(), m = (0, c.e7)([P.Z], () => {
    if (null == p) return null;
    let e = P.Z.getChannel(l.channelId);
    return null != e ? e : new x.nl({
      id: l.channelId,
      guild_id: l.guildId,
      type: M.d4z.UNKNOWN,
      name: U.intl.string(U.t.J90oLS)
    })
  }), b = (0, R.z)(e => {
    var t;
    return e.isMenuOpenForMessage(null != (t = null == p ? true : p.id) ? t : null)
  }), {
    notificationCenterVariant: O
  } = (0, Z.pN)({
    location: "NotificationsInboxMessageUnit"
  }), _ = i.useMemo(() => "".concat(null == p ? true : p.author.username, ": ").concat(null == m ? true : m.name), [null == p ? true : p.author.username, null == m ? true : m.name]), y = null != (t = null == s ? true : s.map(e => e.message).filter(e => null != e)) ? t : [];
  return null == p || null == m ? null : (0, r.jsx)(u.kL8, {
    "aria-label": _,
    className: o()(G.messageClickableContainer, {
      [G.selected]: p.id === g.messageId,
      [G.actionMenuOpen]: b
    }),
    onClick: () => {
      T.Z.inboxItemClick({
        message: p,
        channel: m,
        isUnread: h,
        isSidebar: O === Z.jP.SIDEBAR,
        viewId: f
      })
    },
    onContextMenu: e => {
      e.preventDefault(), (0, A.Qz)({
        interactionType: A.s_.CONTEXT_MENU,
        message: p,
        viewId: f
      }), (0, d.jW)(e, async () => {
        let {
          default: e
        } = await n.e("74922").then(n.bind(n, 550265));
        return t => (0, r.jsx)(e, V(B({}, t), {
          channel: m
        }))
      }, {
        disableClickTrap: true
      })
    },
    children: (0, r.jsx)(F, {
      message: p,
      channel: m,
      isSelected: p.id === g.messageId,
      groupedMessages: y,
      isUnread: h
    })
  })
}, (e, t) => {
  var n, r;
  return e.isUnread === t.isUnread && e.message.id === t.message.id && (null == (n = e.groupedMessages) ? true : n.length) === (null == (r = t.groupedMessages) ? true : r.length)
})