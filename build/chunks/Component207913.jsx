/** Chunk was on 69310 **/
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
  Chunk997998 = require("./997998.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk66449 = require("./66449.js");

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
  } = e, p = n.type === L.d4z.UNKNOWN ? u.VL1 : (0, h.KS)(n, null), m = (0, f.ZP)(n, false), b = (0, c.e7)([w.Z], () => w.Z.getGuild(n.getGuildId())), {
    nick: O,
    colorString: y
  } = (0, _.ZP)(t), {
    avatarSrc: x,
    eventHandlers: C
  } = (0, E.Z)({
    userId: t.author.id,
    size: u.EFr.SIZE_32,
    guildId: null == b ? true : b.id,
    animateOnHover: true
  }), S = n.type !== L.d4z.GUILD_ANNOUNCEMENT || null == b, I = (0, v.x)({
    channel: n,
    message: t,
    user: t.author,
    compact: true,
    isRepliedMessage: true
  }), Z = (0, r.jsx)("div", {
    className: G.usernameTagContainer,
    inert: true,
    children: (0, r.jsx)(j.Z, {
      channel: n,
      message: t,
      hideGuildTag: true,
      hideSystemTag: true,
      className: G.username
    })
  });
  return (0, i.useEffect)(() => {
    null != b && N.Z.requestMember(b.id, t.author.id)
  }, [b, t.author.id]), (0, r.jsx)(u.tEY, F(B({}, l), {
    children: (0, r.jsxs)("div", {
      onMouseLeave: C.onMouseLeave,
      onMouseEnter: C.onMouseEnter,
      className: G.messageContainer,
      children: [s && !a && (0, r.jsx)("div", {
        className: G.unreadDot
      }), (0, r.jsx)(u.Kqy, {
        align: "start",
        style: {
          width: "fit-content",
          marginTop: "4px"
        },
        children: S ? (0, r.jsx)(M.q, {
          "aria-label": "User Avatar",
          src: x,
          size: u.EFr.SIZE_32,
          cornerIconUrl: null != b ? (0, P.EB)(b, 24) : true,
          cornerIconOffsetX: 4,
          cornerIconOffsetY: 3
        }) : (0, r.jsx)(M.E, {
          "aria-label": "Guild Icon",
          src: (0, P.EB)(b, 32),
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
            className: G.usernameOuterContainer,
            children: [(0, r.jsx)("div", {
              className: G.username,
              style: {
                color: null != y ? y : true
              },
              children: (0, r.jsx)(g.Z, {
                children: Z
              })
            }), I]
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
              isUnread: s
            }), t.mentioned && s ? (0, r.jsx)(u.mAB, {
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
            [G.unread]: s,
            [G.selected]: a
          }),
          children: [null !== p && (0, r.jsx)(p, {
            size: "xxs",
            className: G.inlineIcon
          }), (0, r.jsxs)(u.Text, {
            variant: "text-sm/medium",
            lineClamp: 1,
            className: o()(G.channelName, {
              [G.unread]: s,
              [G.selected]: a
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
  } = e, n = (0, C.a3)(t.timestamp.getTime());
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
        c = (0, m.Z)(t),
        d = t.stickerItems.length > 0,
        p = t.isPoll(),
        f = t.type === L.uaV.POLL_RESULT,
        h = t.hasFlag(L.iLy.IS_VOICE_MESSAGE),
        g = t.type === L.uaV.USER_JOIN,
        _ = null;
      1 === s ? _ = u.XBm : s > 1 ? _ = u.Ka2 : c ? _ = b.Z : p || f ? _ = u.QDj : d ? _ = u.SlE : h && (_ = u.gj8);
      let y = true,
        v = null;
      if (e)
        if (c) v = U.intl.string(U.t["9ddYKi"]);
        else if (p) {
        var j;
        y = false, v = null == (j = t.poll) ? true : j.question.text
      } else v = f ? U.intl.string(U.t.sad2PD) : i ? U.intl.string(U.t.p0oZm5) : s > 1 ? U.intl.formatToPlainString(U.t.rtfTKi, {
        count: s
      }) : 1 === s ? U.intl.string(U.t.tCcq5u) : d ? U.intl.format(U.t.zY4v1N, {
        stickerName: t.stickerItems[0].name
      }) : h ? U.intl.string(U.t.slFYgo) : g ? U.intl.string(U.t.Yvvfw8) : U.intl.string(U.t.sDqZHB);
      else y = false, v = (0, r.jsx)(O.ZP, {
        content: a,
        message: t,
        compact: false,
        className: o()(G.message, {
          [G.unread]: n,
          [G.selected]: l
        })
      });
      return e && (v = (0, r.jsx)("div", {
        className: o()(G.message, {
          [G.unread]: n,
          [G.selected]: l,
          [G.descriptionMessage]: y
        }),
        children: v
      })), {
        previewContent: v,
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
      className: G.inlineIcon
    }), (0, r.jsx)(u.Text, {
      variant: "text-sm/normal",
      lineClamp: 1,
      className: G.message,
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
  } = (0, s.$B)(), m = (0, c.e7)([I.Z], () => {
    if (null == f) return null;
    let e = I.Z.getChannel(l.channelId);
    return null != e ? e : new S.nl({
      id: l.channelId,
      guild_id: l.guildId,
      type: L.d4z.UNKNOWN,
      name: U.intl.string(U.t.J90oLS)
    })
  }), b = (0, R.z)(e => {
    var t;
    return e.isMenuOpenForMessage(null != (t = null == f ? true : f.id) ? t : null)
  }), {
    notificationCenterVariant: _
  } = (0, Z.pN)({
    location: "NotificationsInboxMessageUnit"
  }), O = i.useMemo(() => "".concat(null == f ? true : f.author.username, ": ").concat(null == m ? true : m.name), [null == f ? true : f.author.username, null == m ? true : m.name]), y = null != (t = null == a ? true : a.map(e => e.message).filter(e => null != e)) ? t : [];
  return null == f || null == m ? null : (0, r.jsx)(u.kL8, {
    "aria-label": O,
    className: o()(G.messageClickableContainer, {
      [G.selected]: f.id === g.messageId,
      [G.actionMenuOpen]: b
    }),
    onClick: () => {
      T.Z.inboxItemClick({
        message: f,
        channel: m,
        isUnread: p,
        isSidebar: _ === Z.jP.SIDEBAR,
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