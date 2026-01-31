/** Chunk was on 17534 **/
/** chunk id: 81435, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => z
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  Chunk960488 = require("./960488.js"),
  Chunk311907 = require("./311907.js"),
  Chunk3026 = require("./3026.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk104171 = require("./104171.jsx"),
  Chunk47167 = require("./47167.js"),
  Chunk713654 = require("./713654.js"),
  Chunk427930 = require("./427930.js"),
  Chunk427209 = require("./427209.jsx"),
  Chunk763754 = require("./763754.js"),
  Chunk291812 = require("./291812.jsx"),
  Chunk449859 = require("./449859.jsx"),
  Chunk812299 = require("./812299.jsx"),
  Chunk943220 = require("./943220.jsx"),
  Chunk538355 = require("./538355.jsx"),
  Chunk995273 = require("./995273.js"),
  Chunk854627 = require("./854627.js"),
  Chunk95701 = require("./95701.js"),
  Chunk260509 = require("./260509.js"),
  Chunk734057 = require("./734057.js"),
  Chunk256587 = require("./256587.js"),
  Chunk71393 = require("./71393.js"),
  Chunk851109 = require("./851109.js"),
  Chunk706341 = require("./706341.js"),
  Chunk932883 = require("./932883.jsx"),
  Chunk654795 = require("./654795.js"),
  Chunk559873 = require("./559873.jsx"),
  Chunk346061 = require("./346061.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk228160 = require("./228160.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk471135 = require("./471135.js");

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

function H(e, t) {
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
    focusProps: i,
    isSelected: a,
    isUnread: o,
    groupedMessages: h
  } = e, p = n.type === G.rbe.UNKNOWN ? d.N$i : (0, f.gU)(n, null), m = (0, g.Ay)(n, false), b = (0, c.bG)([T.A], () => T.A.getGuild(n.getGuildId())), {
    nick: y,
    colorString: O
  } = (0, A.Ay)(t), {
    avatarSrc: x,
    eventHandlers: v
  } = (0, E.A)({
    userId: t.author.id,
    size: d._3J.SIZE_32,
    guildId: null == b ? true : b.id,
    animateOnHover: true
  }), C = n.type !== G.rbe.GUILD_ANNOUNCEMENT || null == b, I = (0, _.y)({
    channel: n,
    message: t,
    user: t.author,
    compact: true,
    isRepliedMessage: true
  }), P = (0, r.jsx)("div", {
    className: V.Ys,
    inert: true,
    children: (0, r.jsx)(j.A, {
      channel: n,
      message: t,
      hideGuildTag: true,
      hideSystemTag: true,
      className: V.Xh
    })
  });
  return (0, l.useEffect)(() => {
    null != b && N.A.requestMember(b.id, t.author.id)
  }, [b, t.author.id]), (0, r.jsx)(d.vN3, H(B({}, i), {
    children: (0, r.jsxs)("div", {
      onMouseLeave: v.onMouseLeave,
      onMouseEnter: v.onMouseEnter,
      className: V.zC,
      children: [o && !a && (0, r.jsx)("div", {
        className: V.Zm
      }), (0, r.jsx)(d.BJc, {
        align: "start",
        style: {
          width: "fit-content",
          marginTop: "4px"
        },
        children: C ? (0, r.jsx)(M.e, {
          "aria-label": "User Avatar",
          src: x,
          size: d._3J.SIZE_32,
          cornerIconUrl: null != b ? (0, S.Iv)(b, 24) : true,
          cornerIconOffsetX: 4,
          cornerIconOffsetY: 3
        }) : (0, r.jsx)(M.h, {
          "aria-label": "Guild Icon",
          src: (0, S.Iv)(b, 32),
          size: d._3J.SIZE_32,
          cornerIconUrl: t.author.getAvatarURL(b.id, 24),
          cornerIconOffsetX: 4,
          cornerIconOffsetY: 3
        })
      }), (0, r.jsxs)(d.BJc, {
        gap: 0,
        style: {
          minWidth: 0
        },
        children: [(0, r.jsxs)(d.BJc, {
          direction: "horizontal",
          gap: 4,
          style: {
            whiteSpace: "nowrap",
            minWidth: 0,
            justifyContent: "space-between"
          },
          children: [C ? (0, r.jsxs)("div", {
            className: V.ZR,
            children: [(0, r.jsx)("div", {
              className: V.Xh,
              style: {
                color: null != O ? O : true
              },
              children: (0, r.jsx)(u.A, {
                children: P
              })
            }), I]
          }) : (0, r.jsx)(u.A, {
            children: (0, r.jsx)(d.Heading, {
              variant: "text-md/semibold",
              style: {
                color: null != O ? O : true
              },
              className: V.Xh,
              children: b.name
            })
          }), (0, r.jsxs)(d.BJc, {
            direction: "horizontal",
            gap: 4,
            align: "center",
            style: {
              width: "fit-content"
            },
            children: [(0, r.jsx)(L.A, {
              message: t,
              channel: n,
              isUnread: o
            }), t.mentioned && o ? (0, r.jsx)(d.hVq, {
              className: V.WK,
              count: 1
            }) : (0, r.jsx)(Y, {
              message: t
            })]
          })]
        }), (0, r.jsxs)(d.BJc, {
          direction: "horizontal",
          align: "center",
          gap: 4,
          inert: true,
          className: s()(V.HA, {
            [V.gy]: o,
            [V.wH]: a
          }),
          children: [null !== p && (0, r.jsx)(p, {
            size: "xxs",
            className: V.p4
          }), (0, r.jsxs)(d.Text, {
            variant: "text-sm/medium",
            lineClamp: 1,
            className: s()(V.HA, {
              [V.gy]: o,
              [V.wH]: a
            }),
            children: [m, !C && " \xb7 ".concat(y)]
          })]
        }), (0, r.jsx)(W, {
          message: t,
          isUnread: o,
          isSelected: a,
          channel: n
        }), h.length > 0 && (0, r.jsx)(d.BJc, {
          gap: 4,
          style: {
            minWidth: 0,
            marginTop: 4,
            marginBottom: 4
          },
          children: (0, r.jsx)(K, {
            overflowMessages: h
          })
        })]
      })]
    })
  }))
}

function K(e) {
  let {
    overflowMessages: t
  } = e, n = (0, a.uniqBy)(t.map(e => e.author), e => e.id).slice(0, 3);
  return (0, r.jsxs)(d.BJc, {
    direction: "horizontal",
    gap: 4,
    inert: true,
    children: [(0, r.jsx)(p.Ay, {
      users: n,
      useFallbackUserForPopout: true,
      size: p.DN.SIZE_16
    }), (0, r.jsx)(d.Text, {
      variant: "text-sm/medium",
      className: V.gD,
      children: U.intl.formatToPlainString(k.default.NzUuLD, {
        count: t.length
      })
    })]
  })
}

function Y(e) {
  let {
    message: t
  } = e, n = (0, v.jb)(t.timestamp.getTime());
  return (0, r.jsx)(O.A, {
    timestamp: t.timestamp,
    className: V.vE,
    isEdited: t.isEdited(),
    isInline: true,
    children: n
  })
}

function W(e) {
  let {
    message: t,
    channel: n,
    isUnread: i,
    isSelected: a
  } = e, {
    previewContent: o,
    Icon: c
  } = function(e) {
    let {
      message: t,
      isUnread: n,
      isSelected: i
    } = e, {
      content: a
    } = (0, x.A)(t, {
      hideSimpleEmbedContent: true,
      allowList: false,
      allowHeading: true,
      allowLinks: true,
      previewLinkTarget: false,
      formatInline: true,
      noStyleAndInteraction: true
    });
    return (0, l.useMemo)(() => {
      var e;
      let l, o = "" === t.content,
        c = t.embeds.some(e => e.type === G.Auw.GIFV),
        u = (l = t.embeds.some(e => e.type === G.Auw.GIFV), t.attachments.length + +!!l),
        h = (0, m.A)(t),
        p = t.stickerItems.length > 0,
        g = t.isPoll(),
        f = t.type === G.lAJ.POLL_RESULT,
        A = t.hasFlag(G.pr7.IS_VOICE_MESSAGE),
        O = t.type === G.lAJ.USER_JOIN,
        _ = null;
      1 === u ? _ = d.xfq : u > 1 ? _ = d.sYc : h ? _ = b.A : g || f ? _ = d.YRe : p ? _ = d.tEP : A && (_ = d.HKD);
      let j = true,
        x = null;
      return o ? h ? x = U.intl.string(U.t["9ddYKt"]) : g ? (j = false, x = null == (e = t.poll) ? true : e.question.text) : x = f ? U.intl.string(U.t.sad2PH) : c ? U.intl.string(U.t.p0oZmy) : u > 1 ? U.intl.formatToPlainString(U.t.rtfTKp, {
        count: u
      }) : 1 === u ? U.intl.string(U.t.tCcq5p) : p ? U.intl.format(U.t.zY4v1B, {
        stickerName: t.stickerItems[0].name
      }) : A ? U.intl.string(U.t.slFYgi) : O ? U.intl.string(U.t.Yvvfw9) : U.intl.string(U.t.sDqZHL) : (j = false, x = (0, r.jsx)(y.Ay, {
        content: a,
        message: t,
        compact: false,
        className: s()(V.iU, {
          [V.gy]: n,
          [V.wH]: i
        })
      })), o && (x = (0, r.jsx)("div", {
        className: s()(V.iU, {
          [V.gy]: n,
          [V.wH]: i,
          [V.QP]: j
        }),
        children: x
      })), {
        previewContent: x,
        Icon: _
      }
    }, [t, a, n, i])
  }({
    message: t,
    channel: n,
    isUnread: i,
    isSelected: a
  });
  return (0, r.jsxs)(d.BJc, {
    direction: "horizontal",
    gap: 4,
    align: "center",
    inert: true,
    children: [null != c && (0, r.jsx)(c, {
      size: "xxs",
      className: V.p4
    }), (0, r.jsx)(d.Text, {
      variant: "text-sm/normal",
      lineClamp: 1,
      className: V.iU,
      children: o
    })]
  })
}
let z = (0, Chunk64700.memo)(function(e) {
  var t;
  let {
    message: i,
    groupedMessages: a,
    isUnread: u
  } = e, p = i.message, g = (0, R.op)(), {
    params: f
  } = (0, o.W5)(), m = (0, c.bG)([I.A], () => {
    if (null == p) return null;
    let e = I.A.getChannel(i.channelId);
    return null != e ? e : new C.jb({
      id: i.channelId,
      guild_id: i.guildId,
      type: G.rbe.UNKNOWN,
      name: U.intl.string(U.t.J90oLW)
    })
  }), b = (0, D.s)(e => {
    var t;
    return e.isMenuOpenForMessage(null != (t = null == p ? true : p.id) ? t : null)
  }), {
    notificationCenterVariant: A
  } = (0, P.X8)({
    location: "NotificationsInboxMessageUnit"
  }), y = l.useMemo(() => "".concat(null == p ? true : p.author.username, ": ").concat(null == m ? true : m.name), [null == p ? true : p.author.username, null == m ? true : m.name]), O = null != (t = null == a ? true : a.map(e => e.message).filter(e => null != e)) ? t : [];
  return null == p || null == m ? null : (0, r.jsx)(d.sqX, {
    "aria-label": y,
    className: s()(V.FJ, {
      [V.wH]: p.id === f.messageId,
      [V.Yj]: b
    }),
    onClick: () => {
      w.A.inboxItemClick({
        message: p,
        channel: m,
        isUnread: u,
        isSidebar: A === P.U5.SIDEBAR,
        viewId: g
      })
    },
    onContextMenu: e => {
      e.preventDefault(), (0, R.Ml)({
        interactionType: R.X8.CONTEXT_MENU,
        message: p,
        viewId: g
      }), (0, h.L3)(e, async () => {
        let {
          default: e
        } = await n.e("48118").then(n.bind(n, 594005));
        return t => (0, r.jsx)(e, H(B({}, t), {
          channel: m
        }))
      }, {
        disableClickTrap: true
      })
    },
    children: (0, r.jsx)(F, {
      message: p,
      channel: m,
      isSelected: p.id === f.messageId,
      groupedMessages: O,
      isUnread: u
    })
  })
}, (e, t) => {
  var n, r;
  return e.isUnread === t.isUnread && e.message.id === t.message.id && (null == (n = e.groupedMessages) ? true : n.length) === (null == (r = t.groupedMessages) ? true : r.length)
})