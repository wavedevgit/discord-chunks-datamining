/** Chunk was on 1113 **/
/** chunk id: 907495, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => eu
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
  Chunk696451 = require("./696451.js"),
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

function et(e) {
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
let en = [Chunk7584.Ay.getByName("100"), Chunk7584.Ay.getByName("laughing"), Chunk7584.Ay.getByName("sparkling_heart")].filter(Chunk403362.Vq);

function er(e) {
  e.stopPropagation()
}

function el(e) {
  let {
    message: t,
    channel: n,
    canReport: r,
    onClose: l,
    updatePosition: i
  } = e;
  return (0, J.c)({
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
    ariaLabel: $.intl.string($.t.Lv7LxN)
  })
}
let ei = Chunk64700.memo(function(e) {
  let {
    channel: t,
    message: n
  } = e, l = (0, f.QZ)(t.guild_id).filter(e => !V.Ay.isEmojiFilteredOrLocked({
    emoji: e,
    channel: t,
    intention: Z.b_.REACTION,
    guildId: t.guild_id
  })), i = (l.length >= 3 ? l : [...(0, b.A)(l.concat(en)).values()]).slice(0, 3), s = n.reactions.filter(e => e.me);
  return (0, r.jsx)(r.Fragment, {
    children: i.map(e => {
      var l;
      let i = s.find(t => (0, E.i6)(t.emoji, (0, E.jq)(e))),
        a = null != i ? $.intl.string($.t.wunKKA) : $.intl.string($.t.XVx5BN),
        o = null == e.id ? e.uniqueName : e.name,
        c = null != i ? $.intl.formatToPlainString($.t.vjeruO, {
          emojiName: o
        }) : $.intl.formatToPlainString($.t.L1JQwE, {
          emojiName: o
        });
      return (0, r.jsx)(z.qv, {
        tooltipText: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(d.Text, {
            variant: "text-sm/medium",
            color: "text-strong",
            className: ee.zM,
            children: ":".concat(e.name, ":")
          }), (0, r.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "text-default",
            className: ee.zM,
            children: a
          })]
        }),
        label: c,
        onClick: () => eo({
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
          className: ee.Zg,
          canSelect: false
        })
      }, "".concat(null != (l = e.id) ? l : 0, ":").concat(e.name))
    })
  })
});

function es(e) {
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
    showEmojiPicker: V,
    showMessageBookmarksActions: B,
    isMessageBookmark: J,
    setPopout: Z,
    hasDeveloperMode: ee,
    isFocused: en
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
    } = n, h = (0, u.bG)([L.A], () => L.A.getGuild(t.guild_id), [t.guild_id]), f = (0, u.bG)([w.default], () => w.default.getId()), m = (0, T.Id)(t), b = (0, T.s5)(t), {
      firstMessage: O
    } = (0, u.bG)([A.A], () => A.A.getMessage(t.id), [t.id]), _ = P.jW.useSetting(), j = P.Q_.useSetting(), v = (0, u.bG)([M.A], () => null == t.guild_id || M.A.canChatInGuild(t.guild_id), [t]), {
      canManageMessages: E,
      canAddNewReactions: C
    } = (0, u.cf)([G.A], () => ({
      canAddNewReactions: v && G.A.can(Q.xBc.ADD_REACTIONS, t),
      canManageMessages: G.A.can(Q.xBc.MANAGE_MESSAGES, t)
    }), [t, v]), R = (0, S.u)(t, n), k = (0, T.n)(t, n), V = (0, T.R)(n), B = (0, u.bG)([x.A], () => null != t.guild_id && x.A.isLurking(t.guild_id), [t]), z = (0, u.bG)([D.Ay], () => null != t.guild_id && D.Ay.isCurrentUserGuest(t.guild_id), [t]), q = d.id === f, X = (E || n.canDeleteOwnMessage(f)) && m && !Q.MRS.UNDELETABLE.has(n.type);
    n.type === Q.lAJ.AUTO_MODERATION_ACTION && (X = X && E), t.isModeratorReportChannel() && (X = X && n.id !== (null == O ? true : O.id) && !(0, Y.A)(n));
    let J = (0, H.ul)(n),
      Z = (0, K.A)(n, t),
      $ = !t.isSystemDM() && (0, F.A)(n, f) && m && !b,
      {
        disableReactionCreates: ee
      } = (0, W.A)({
        channel: t,
        canChat: v,
        renderReactions: _,
        canAddNewReactions: C,
        isLurking: B,
        isGuest: z,
        isActiveChannelOrUnarchivableThread: m
      }),
      et = t.type === Q.rbe.GUILD_ANNOUNCEMENT && null != h && h.features.has(Q.GuildFeatures.NEWS) && (q || E) && (0, g.A)(n),
      en = t.getGuildId(),
      er = null != en && n.type === Q.lAJ.USER_JOIN && G.A.canWithPartialContext(Q.xBc.MANAGE_GUILD, {
        guildId: en
      }),
      el = (0, y.m)(n),
      {
        enabled: ei
      } = I.A.useExperiment({
        location: "message_utilities"
      }),
      es = (0, u.bG)([N.A], () => null != N.A.getSavedMessage(t.id, n.id)),
      ea = (0, c.A)(s),
      eo = (0, u.bG)([p.A], () => p.A.keyboardModeEnabled);
    return {
      channel: t,
      message: n,
      canPin: Z,
      canEdit: $,
      canDelete: X,
      canReport: J,
      canReply: R,
      canStartThread: k,
      canViewThread: V,
      canForward: el,
      canCopy: U.p5,
      hasDeveloperMode: j,
      canReact: !ee && _,
      canPublish: et,
      canConfigureJoin: er,
      isExpanded: ea && !eo && !r && !l && !i,
      showEmojiPicker: r,
      showEmojiBurstPicker: l,
      showMoreUtilities: i,
      showMessageBookmarksActions: ei,
      isMessageBookmark: es,
      setPopout: a,
      isFocused: o
    }
  }(e), er = l.useRef(null), es = l.useCallback(() => {
    R || k.default.track(Q.HAw.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
      message_id: n.id,
      channel: n.channel_id,
      location: "expanding_buttons"
    }), Z({
      moreUtilities: !R
    })
  }, [R, Z, n]), ea = l.useCallback(() => {
    Z({
      emojiPicker: !V
    })
  }, [V, Z]), eo = (0, T.Id)(t), eu = n.hasFlag(Q.pr7.CROSSPOSTED);
  return (0, r.jsxs)(r.Fragment, {
    children: [C ? (0, r.jsxs)(r.Fragment, {
      children: [i && ee ? (0, r.jsx)(z.qv, {
        label: $.intl.string($.t.zBoHlf),
        icon: d.L9S,
        onClick: e => (0, q.DT)(t, n, e)
      }, "copy-id") : null, i ? (0, r.jsx)(z.qv, {
        label: $.intl.string($.t.WqhZss),
        icon: d.qYV,
        onClick: () => (0, q.S)(t, n)
      }, "copy-link") : null, b ? (0, r.jsx)(z.qv, {
        label: $.intl.string($.t.NpHUi1),
        icon: d.cBN,
        onClick: () => (0, q.vc)(t)
      }, "configure") : null, eo ? (0, r.jsx)(z.qv, {
        label: $.intl.string($.t.RpE9k7),
        icon: d.QTh,
        onClick: () => (0, q.cl)(t, n)
      }, "mark-unread") : null, B ? (0, r.jsx)(z.qv, {
        label: J ? $.intl.string($.t.LHUP9D) : $.intl.string($.t["9p3D9p"]),
        icon: J ? d.cFy : d.c$8,
        onClick: () => J ? (0, q.r7)(t, n) : (0, q.wF)(t, n)
      }, "bookmark") : null, s ? (0, r.jsx)(z.qv, {
        label: n.pinned ? $.intl.string($.t["Bse+F/"]) : $.intl.string($.t.CvQ18w),
        icon: d.tsw,
        onClick: e => (0, q.rS)(t, n, e)
      }, "pin") : null, j && E ? (0, r.jsx)(z.qv, {
        label: $.intl.string($.t.rBIGBL),
        icon: d.ysw,
        onClick: () => (0, q.Nw)(t, n)
      }, "thread") : null, _ && h ? (0, r.jsx)(z.qv, {
        label: $.intl.string($.t["5IEsGx"]),
        icon: d.W4J,
        onClick: e => (0, q.$b)(t, n, e)
      }, "reply-self") : null]
    }) : null, m ? (0, r.jsxs)(r.Fragment, {
      children: [C ? null : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(ei, {
          channel: t,
          message: n
        }), (0, r.jsx)(z.$$, {})]
      }), (0, r.jsx)(X.A, {
        togglePopout: ea,
        renderEmojiPicker: ec,
        shouldShow: V,
        isFocused: en,
        channel: t,
        message: n
      })]
    }) : null, _ && !h ? (0, r.jsx)(z.qv, {
      label: $.intl.string($.t["5IEsGx"]),
      icon: d.W4J,
      onClick: e => (0, q.$b)(t, n, e)
    }, "reply-other") : null, h ? (0, r.jsx)(z.qv, {
      label: $.intl.string($.t.bt75uw),
      icon: d.R2l,
      onClick: () => (0, q.u_)(t, n)
    }, "edit") : null, E ? (0, r.jsx)(z.qv, {
      label: $.intl.string($.t.I3ltXO),
      icon: O.A,
      onClick: () => (0, q.Z4)(t, n)
    }, "forward") : null, j && !E ? (0, r.jsx)(z.qv, {
      label: $.intl.string($.t.rBIGBL),
      icon: d.ysw,
      onClick: () => (0, q.Nw)(t, n)
    }, "thread") : null, !j && v ? (0, r.jsx)(z.qv, {
      label: $.intl.string($.t["39d0Wj"]),
      icon: d.ysw,
      onClick: () => (0, q.mF)(t, n)
    }, "view-thread") : null, f ? (0, r.jsx)(z.qv, {
      label: eu ? $.intl.string($.t["1kWJAr"]) : $.intl.string($.t.MFGE51),
      icon: d.koX,
      onClick: () => (0, q.Le)(t, n),
      disabled: eu
    }, "publish") : null, a && C ? (0, r.jsx)(z.qv, {
      label: $.intl.string($.t.oyYWHE),
      icon: d.ucK,
      onClick: e => (0, q.RC)(t, n, e),
      dangerous: true,
      separator: !C
    }, "delete") : null, C && a ? null : (0, r.jsx)(d.YNO, {
      targetElementRef: er,
      renderPopout: e => {
        let {
          updatePosition: l,
          closePopout: i
        } = e;
        return (0, r.jsx)(el, {
          channel: t,
          message: n,
          canReport: o,
          onClose: i,
          updatePosition: l
        })
      },
      shouldShow: R,
      onRequestClose: es,
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
        return (0, r.jsx)(z.qv, et({
          ref: er,
          label: $.intl.string($.t["UKOtz+"]),
          icon: d.jNK,
          selected: a,
          onClick: es
        }, s), "more")
      }
    })]
  })
}

function ea(e) {
  let {
    channel: t,
    message: n
  } = e, l = (0, u.bG)([_.A], () => null != _.A.getMessage(n.id), [n.id]), i = null == n.interaction || null != n.interactionData && (0, j.Bl)(n.interactionData);
  return (0, r.jsxs)(r.Fragment, {
    children: [!l && i && (0, r.jsx)(z.qv, {
      label: $.intl.string($.t["5911Lb"]),
      icon: d.mqY,
      onClick: () => (0, q.Io)(t, n)
    }, "retry"), (0, r.jsx)(z.qv, {
      label: $.intl.string($.t.oyYWHE),
      icon: d.ucK,
      onClick: e => (0, q.RC)(t, n, e)
    }, "delete-usent")]
  })
}

function eo(e) {
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

function ec(e, t, n) {
  let l = arguments.length > 3 && true !== arguments[3] && arguments[3],
    i = et({
      openPopoutType: "message_reaction_emoji_picker"
    }, l && {
      openPopoutType: "message_super_reaction_emoji_picker",
      page: null != e.getGuildId() ? Q.liQ.GUILD_CHANNEL : Q.liQ.DM_CHANNEL,
      section: (0, E.sn)(e),
      object: Q.ZSU.EMOJI_REACTION_PICKER_POPOUT
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
      eo({
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
let eu = Chunk64700.memo(function(e) {
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
    return n.state === Q.cmJ.SEND_FAILED ? (0, r.jsx)(ea, {
      channel: t,
      message: n
    }) : null
  }(e), c = function(e) {
    let {
      message: t
    } = e;
    return t.state !== Q.cmJ.SEND_FAILED ? (0, r.jsx)(es, et({}, e)) : null
  }(e);
  return a || null == o && null == c ? null : (0, r.jsx)("div", {
    className: s()(e.className, {
      [ee.kL]: true,
      [ee.gN]: l,
      [ee.nK]: i
    }),
    onClick: er,
    onContextMenu: er,
    role: "group",
    "aria-label": $.intl.string($.t.Lv7LxN),
    children: (0, r.jsxs)(z.Ay, {
      className: e.innerClassName,
      children: [o, c]
    })
  })
})