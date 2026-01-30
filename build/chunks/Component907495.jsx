/** Chunk was on 1113 **/
/** chunk id: 907495, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => ec
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk111956 = require("./111956.js"),
  o = require.n(Chunk111956),
  Chunk311283 = require("./311283.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk775602 = require("./775602.js"),
  Chunk812930 = require("./812930.js"),
  Chunk822123 = require("./822123.js"),
  Chunk7584 = require("./7584.js"),
  Chunk635222 = require("./635222.js"),
  Chunk969043 = require("./969043.js"),
  Chunk843626 = require("./843626.js"),
  Chunk427209 = require("./427209.jsx"),
  Chunk93474 = require("./93474.js"),
  Chunk296043 = require("./296043.js"),
  Chunk857071 = require("./857071.js"),
  Chunk649963 = require("./649963.js"),
  Chunk815807 = require("./815807.js"),
  Chunk429433 = require("./429433.jsx"),
  Chunk517997 = require("./517997.js"),
  Chunk966597 = require("./966597.js"),
  Chunk85109 = require("./85109.js"),
  Chunk406704 = require("./406704.js"),
  Chunk253932 = require("./253932.js"),
  Chunk961350 = require("./961350.js"),
  Chunk580745 = require("./580745.js"),
  Chunk71393 = require("./71393.js"),
  Chunk834942 = require("./834942.js"),
  Chunk576705 = require("./576705.js"),
  Chunk954571 = require("./954571.js"),
  Chunk957565 = require("./957565.js"),
  Chunk690521 = require("./690521.js"),
  Chunk403362 = require("./403362.js"),
  Chunk628691 = require("./628691.js"),
  Chunk697470 = require("./697470.js"),
  Chunk492841 = require("./492841.js"),
  Chunk143413 = require("./143413.js"),
  Chunk707985 = require("./707985.js"),
  Chunk194085 = require("./194085.jsx"),
  Chunk519222 = require("./519222.js"),
  Chunk427868 = require("./427868.jsx"),
  Chunk547983 = require("./547983.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk307731 = require("./307731.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk127999 = require("./127999.js");

function ee(e) {
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
let et = [Chunk7584.Ay.getByName("100"), Chunk7584.Ay.getByName("laughing"), Chunk7584.Ay.getByName("sparkling_heart")].filter(Chunk403362.Vq);

function en(e) {
  e.stopPropagation()
}

function er(e) {
  let {
    message: t,
    channel: n,
    canReport: r,
    onClose: l,
    updatePosition: i
  } = e;
  return (0, X.c)({
    message: t,
    channel: n,
    textSelection: "",
    favoriteableType: null,
    favoriteableId: null,
    favoriteableName: null,
    itemHref: true,
    itemSrc: true,
    itemSafeSrc: true,
    itemTextContent: true,
    canReport: r,
    onHeightUpdate: i,
    onClose: l,
    navId: "message-actions",
    ariaLabel: Z.intl.string(Z.t.Lv7LxN)
  })
}
let el = Chunk64700.memo(function(e) {
  let {
    channel: t,
    message: n
  } = e, l = (0, f.QZ)(t.guild_id).filter(e => !U.Ay.isEmojiFilteredOrLocked({
    emoji: e,
    channel: t,
    intention: Q.b_.REACTION,
    guildId: t.guild_id
  })), i = (l.length >= 3 ? l : [...(0, b.A)(l.concat(et)).values()]).slice(0, 3), s = n.reactions.filter(e => e.me);
  return (0, r.jsx)(r.Fragment, {
    children: i.map(e => {
      var l;
      let i = s.find(t => (0, E.i6)(t.emoji, (0, E.jq)(e))),
        a = null != i ? Z.intl.string(Z.t.wunKKA) : Z.intl.string(Z.t.XVx5BN),
        o = null == e.id ? e.uniqueName : e.name,
        c = null != i ? Z.intl.formatToPlainString(Z.t.vjeruO, {
          emojiName: o
        }) : Z.intl.formatToPlainString(Z.t.L1JQwE, {
          emojiName: o
        });
      return (0, r.jsx)(W.qv, {
        tooltipText: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(d.Text, {
            variant: "text-sm/medium",
            color: "text-strong",
            className: $.zM,
            children: ":".concat(e.name, ":")
          }), (0, r.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "text-default",
            className: $.zM,
            children: a
          })]
        }),
        label: c,
        onClick: () => ea({
          type: null != i ? "remove" : "add",
          emoji: e,
          channel: t,
          message: n,
          location: v.qN.MESSAGE_HOVER_BAR
        }),
        children: (0, r.jsx)(h.A, {
          emojiId: e.id,
          emojiName: null == e.id ? e.surrogates : e.name,
          animated: e.animated,
          size: "reaction",
          alt: "",
          className: $.Zg,
          canSelect: false
        })
      }, "".concat(null != (l = e.id) ? l : 0, ":").concat(e.name))
    })
  })
});

function ei(e) {
  let {
    channel: t,
    message: n,
    canCopy: i,
    canPin: s,
    canDelete: a,
    canReport: o,
    canEdit: h,
    canPublish: f,
    canReact: m,
    canConfigureJoin: b,
    canReply: _,
    canStartThread: j,
    canViewThread: v,
    canForward: E,
    isExpanded: C,
    showMoreUtilities: R,
    showEmojiPicker: U,
    showMessageBookmarksActions: V,
    isMessageBookmark: X,
    setPopout: Q,
    hasDeveloperMode: $,
    isFocused: et
  } = function(e) {
    let {
      channel: t,
      message: n,
      showEmojiPicker: r,
      showEmojiBurstPicker: l,
      showMoreUtilities: i,
      messageWindow: s,
      setPopout: a,
      isFocused: o
    } = e, {
      author: d
    } = n, h = (0, u.bG)([D.A], () => D.A.getGuild(t.guild_id), [t.guild_id]), f = (0, u.bG)([w.default], () => w.default.getId()), m = (0, T.Id)(t), b = (0, T.s5)(t), {
      firstMessage: O
    } = (0, u.bG)([A.A], () => A.A.getMessage(t.id), [t.id]), _ = P.jW.useSetting(), j = P.Q_.useSetting(), v = (0, u.bG)([L.A], () => null == t.guild_id || L.A.canChatInGuild(t.guild_id), [t]), {
      canManageMessages: E,
      canAddNewReactions: C
    } = (0, u.cf)([M.A], () => ({
      canAddNewReactions: v && M.A.can(J.xBc.ADD_REACTIONS, t),
      canManageMessages: M.A.can(J.xBc.MANAGE_MESSAGES, t)
    }), [t, v]), R = (0, S.u)(t, n), G = (0, T.n)(t, n), U = (0, T.R)(n), V = (0, u.bG)([x.A], () => null != t.guild_id && x.A.isLurking(t.guild_id), [t]), W = d.id === f, z = (E || n.canDeleteOwnMessage(f)) && m && !J.MRS.UNDELETABLE.has(n.type);
    n.type === J.lAJ.AUTO_MODERATION_ACTION && (z = z && E), t.isModeratorReportChannel() && (z = z && n.id !== (null == O ? true : O.id) && !(0, K.A)(n));
    let q = (0, B.ul)(n),
      X = (0, F.A)(n, t),
      Q = !t.isSystemDM() && (0, H.A)(n, f) && m && !b,
      {
        disableReactionCreates: Z
      } = (0, Y.A)({
        channel: t,
        canChat: v,
        renderReactions: _,
        canAddNewReactions: C,
        isLurking: V,
        isActiveChannelOrUnarchivableThread: m
      }),
      $ = t.type === J.rbe.GUILD_ANNOUNCEMENT && null != h && h.features.has(J.GuildFeatures.NEWS) && (W || E) && (0, g.A)(n),
      ee = t.getGuildId(),
      et = null != ee && n.type === J.lAJ.USER_JOIN && M.A.canWithPartialContext(J.xBc.MANAGE_GUILD, {
        guildId: ee
      }),
      en = (0, y.m)(n),
      {
        enabled: er
      } = I.A.useExperiment({
        location: "message_utilities"
      }),
      el = (0, u.bG)([N.A], () => null != N.A.getSavedMessage(t.id, n.id)),
      ei = (0, c.A)(s),
      es = (0, u.bG)([p.A], () => p.A.keyboardModeEnabled);
    return {
      channel: t,
      message: n,
      canPin: X,
      canEdit: Q,
      canDelete: z,
      canReport: q,
      canReply: R,
      canStartThread: G,
      canViewThread: U,
      canForward: en,
      canCopy: k.p5,
      hasDeveloperMode: j,
      canReact: !Z && _,
      canPublish: $,
      canConfigureJoin: et,
      isExpanded: ei && !es && !r && !l && !i,
      showEmojiPicker: r,
      showEmojiBurstPicker: l,
      showMoreUtilities: i,
      showMessageBookmarksActions: er,
      isMessageBookmark: el,
      setPopout: a,
      isFocused: o
    }
  }(e), en = l.useRef(null), ei = l.useCallback(() => {
    R || G.default.track(J.HAw.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
      message_id: n.id,
      channel: n.channel_id,
      location: "expanding_buttons"
    }), Q({
      moreUtilities: !R
    })
  }, [R, Q, n]), es = l.useCallback(() => {
    Q({
      emojiPicker: !U
    })
  }, [U, Q]), ea = (0, T.Id)(t), ec = n.hasFlag(J.pr7.CROSSPOSTED);
  return (0, r.jsxs)(r.Fragment, {
    children: [C ? (0, r.jsxs)(r.Fragment, {
      children: [i && $ ? (0, r.jsx)(W.qv, {
        label: Z.intl.string(Z.t.zBoHlf),
        icon: d.L9S,
        onClick: e => (0, z.DT)(t, n, e)
      }, "copy-id") : null, i ? (0, r.jsx)(W.qv, {
        label: Z.intl.string(Z.t.WqhZss),
        icon: d.qYV,
        onClick: () => (0, z.S)(t, n)
      }, "copy-link") : null, b ? (0, r.jsx)(W.qv, {
        label: Z.intl.string(Z.t.NpHUi1),
        icon: d.cBN,
        onClick: () => (0, z.vc)(t)
      }, "configure") : null, ea ? (0, r.jsx)(W.qv, {
        label: Z.intl.string(Z.t.RpE9k7),
        icon: d.QTh,
        onClick: () => (0, z.cl)(t, n)
      }, "mark-unread") : null, V ? (0, r.jsx)(W.qv, {
        label: X ? Z.intl.string(Z.t.LHUP9D) : Z.intl.string(Z.t["9p3D9p"]),
        icon: X ? d.cFy : d.c$8,
        onClick: () => X ? (0, z.r7)(t, n) : (0, z.wF)(t, n)
      }, "bookmark") : null, s ? (0, r.jsx)(W.qv, {
        label: n.pinned ? Z.intl.string(Z.t["Bse+F/"]) : Z.intl.string(Z.t.CvQ18w),
        icon: d.tsw,
        onClick: e => (0, z.rS)(t, n, e)
      }, "pin") : null, j && E ? (0, r.jsx)(W.qv, {
        label: Z.intl.string(Z.t.rBIGBL),
        icon: d.ysw,
        onClick: () => (0, z.Nw)(t, n)
      }, "thread") : null, _ && h ? (0, r.jsx)(W.qv, {
        label: Z.intl.string(Z.t["5IEsGx"]),
        icon: d.W4J,
        onClick: e => (0, z.$b)(t, n, e)
      }, "reply-self") : null]
    }) : null, m ? (0, r.jsxs)(r.Fragment, {
      children: [C ? null : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(el, {
          channel: t,
          message: n
        }), (0, r.jsx)(W.$$, {})]
      }), (0, r.jsx)(q.A, {
        togglePopout: es,
        renderEmojiPicker: eo,
        shouldShow: U,
        isFocused: et,
        channel: t,
        message: n
      })]
    }) : null, _ && !h ? (0, r.jsx)(W.qv, {
      label: Z.intl.string(Z.t["5IEsGx"]),
      icon: d.W4J,
      onClick: e => (0, z.$b)(t, n, e)
    }, "reply-other") : null, h ? (0, r.jsx)(W.qv, {
      label: Z.intl.string(Z.t.bt75uw),
      icon: d.R2l,
      onClick: () => (0, z.u_)(t, n)
    }, "edit") : null, E ? (0, r.jsx)(W.qv, {
      label: Z.intl.string(Z.t.I3ltXO),
      icon: O.A,
      onClick: () => (0, z.Z4)(t, n)
    }, "forward") : null, j && !E ? (0, r.jsx)(W.qv, {
      label: Z.intl.string(Z.t.rBIGBL),
      icon: d.ysw,
      onClick: () => (0, z.Nw)(t, n)
    }, "thread") : null, !j && v ? (0, r.jsx)(W.qv, {
      label: Z.intl.string(Z.t["39d0Wj"]),
      icon: d.ysw,
      onClick: () => (0, z.mF)(t, n)
    }, "view-thread") : null, f ? (0, r.jsx)(W.qv, {
      label: ec ? Z.intl.string(Z.t["1kWJAr"]) : Z.intl.string(Z.t.MFGE51),
      icon: d.koX,
      onClick: () => (0, z.Le)(t, n),
      disabled: ec
    }, "publish") : null, a && C ? (0, r.jsx)(W.qv, {
      label: Z.intl.string(Z.t.oyYWHE),
      icon: d.ucK,
      onClick: e => (0, z.RC)(t, n, e),
      dangerous: true,
      separator: !C
    }, "delete") : null, C && a ? null : (0, r.jsx)(d.YNO, {
      targetElementRef: en,
      renderPopout: e => {
        let {
          updatePosition: l,
          closePopout: i
        } = e;
        return (0, r.jsx)(er, {
          channel: t,
          message: n,
          canReport: o,
          onClose: i,
          updatePosition: l
        })
      },
      shouldShow: R,
      onRequestClose: ei,
      position: "left",
      align: "top",
      animation: d.YNO.Animation.NONE,
      children: (e, t) => {
        let [n, ...l] = [e, t], {
          onClick: i
        } = n, s = function(e, t) {
          if (null == e) return {};
          var n, r, l, i = {};
          if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i
          }
          if (i = function(e, t) {
              if (null == e) return {};
              var n, r, l = {},
                i = Object.getOwnPropertyNames(e);
              for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
              return l
            }(e, t), Object.getOwnPropertySymbols)
            for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
          return i
        }(n, ["onClick"]), [{
          isShown: a
        }] = l;
        return (0, r.jsx)(W.qv, ee({
          ref: en,
          label: Z.intl.string(Z.t["UKOtz+"]),
          icon: d.jNK,
          selected: a,
          onClick: ei
        }, s), "more")
      }
    })]
  })
}

function es(e) {
  let {
    channel: t,
    message: n
  } = e, l = (0, u.bG)([_.A], () => null != _.A.getMessage(n.id), [n.id]), i = null == n.interaction || null != n.interactionData && (0, j.Bl)(n.interactionData);
  return (0, r.jsxs)(r.Fragment, {
    children: [!l && i && (0, r.jsx)(W.qv, {
      label: Z.intl.string(Z.t["5911Lb"]),
      icon: d.mqY,
      onClick: () => (0, z.Io)(t, n)
    }, "retry"), (0, r.jsx)(W.qv, {
      label: Z.intl.string(Z.t.oyYWHE),
      icon: d.ucK,
      onClick: e => (0, z.RC)(t, n, e)
    }, "delete-usent")]
  })
}

function ea(e) {
  let {
    type: t,
    emoji: n,
    channel: r,
    message: l,
    location: i,
    isBurst: s = false
  } = e;
  if (null == n) return;
  let a = (0, E.jq)(n);
  "add" === t ? (0, v.BB)(r.id, l.id, a, i, {
    burst: s
  }) : (0, v.et)({
    channelId: r.id,
    messageId: l.id,
    emoji: a,
    location: i,
    options: {
      burst: s
    }
  })
}

function eo(e, t, n) {
  let l = arguments.length > 3 && true !== arguments[3] && arguments[3],
    i = ee({
      openPopoutType: "message_reaction_emoji_picker"
    }, l && {
      openPopoutType: "message_super_reaction_emoji_picker",
      page: null != e.getGuildId() ? J.liQ.GUILD_CHANNEL : J.liQ.DM_CHANNEL,
      section: (0, E.sn)(e),
      object: J.ZSU.EMOJI_REACTION_PICKER_POPOUT
    });
  return (0, r.jsx)(C.C, {
    channel: e,
    closePopout: n,
    onSelectEmoji: r => {
      let {
        emoji: l,
        willClose: i,
        isBurst: s
      } = r;
      ea({
        type: "add",
        emoji: l,
        channel: e,
        message: t,
        location: v.qN.MESSAGE_REACTION_PICKER,
        isBurst: s
      }), i && (s ? o()(n, 150)() : n())
    },
    analyticsOverride: i,
    messageId: t.id
  })
}
let ec = Chunk64700.memo(function(e) {
  let {
    channel: t,
    message: n,
    isHeader: l,
    isReply: i
  } = e, a = (0, u.bG)([R.A], () => R.A.isEditing(t.id, n.id), [t.id, n.id]), o = function(e) {
    let {
      channel: t,
      message: n
    } = e;
    return n.state === J.cmJ.SEND_FAILED ? (0, r.jsx)(es, {
      channel: t,
      message: n
    }) : null
  }(e), c = function(e) {
    let {
      message: t
    } = e;
    return t.state !== J.cmJ.SEND_FAILED ? (0, r.jsx)(ei, ee({}, e)) : null
  }(e);
  return a || null == o && null == c ? null : (0, r.jsx)("div", {
    className: s()(e.className, {
      [$.kL]: true,
      [$.gN]: l,
      [$.nK]: i
    }),
    onClick: en,
    onContextMenu: en,
    role: "group",
    "aria-label": Z.intl.string(Z.t.Lv7LxN),
    children: (0, r.jsxs)(W.Ay, {
      className: e.innerClassName,
      children: [o, c]
    })
  })
})