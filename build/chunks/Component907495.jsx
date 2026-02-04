/** Chunk was on 17869 **/
/** chunk id: 907495, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => ec
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}
let et = [Chunk7584.Ay.getByName("100"), Chunk7584.Ay.getByName("laughing"), Chunk7584.Ay.getByName("sparkling_heart")].filter(Chunk403362.Vq);

function en(e) {
  e.stopPropagation()
}

function el(e) {
  let {
    message: t,
    channel: n,
    canReport: l,
    onClose: r,
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
    canReport: l,
    onHeightUpdate: i,
    onClose: r,
    navId: "message-actions",
    ariaLabel: Q.intl.string(Q.t.Lv7LxN)
  })
}
let er = Chunk64700.memo(function(e) {
  let {
    channel: t,
    message: n
  } = e, r = (0, m.QZ)(t.guild_id).filter(e => !G.Ay.isEmojiFilteredOrLocked({
    emoji: e,
    channel: t,
    intention: X.b_.REACTION,
    guildId: t.guild_id
  })), i = (r.length >= 3 ? r : [...(0, A.A)(r.concat(et)).values()]).slice(0, 3), a = n.reactions.filter(e => e.me);
  return (0, l.jsx)(l.Fragment, {
    children: i.map(e => {
      var r;
      let i = a.find(t => (0, S.i6)(t.emoji, (0, S.jq)(e))),
        s = null != i ? Q.intl.string(Q.t.wunKKA) : Q.intl.string(Q.t.XVx5BN),
        o = null == e.id ? e.uniqueName : e.name,
        c = null != i ? Q.intl.formatToPlainString(Q.t.vjeruO, {
          emojiName: o
        }) : Q.intl.formatToPlainString(Q.t.L1JQwE, {
          emojiName: o
        });
      return (0, l.jsx)(z.qv, {
        tooltipText: (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(d.Text, {
            variant: "text-sm/medium",
            color: "text-strong",
            className: $.zM,
            children: ":".concat(e.name, ":")
          }), (0, l.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "text-default",
            className: $.zM,
            children: s
          })]
        }),
        label: c,
        onClick: () => es({
          type: null != i ? "remove" : "add",
          emoji: e,
          channel: t,
          message: n,
          location: C.qN.MESSAGE_HOVER_BAR
        }),
        children: (0, l.jsx)(h.A, {
          emojiId: e.id,
          emojiName: null == e.id ? e.surrogates : e.name,
          animated: e.animated,
          size: "reaction",
          alt: "",
          className: $.Zg,
          canSelect: false
        })
      }, "".concat(null != (r = e.id) ? r : 0, ":").concat(e.name))
    })
  })
});

function ei(e) {
  let {
    channel: t,
    message: n,
    canCopy: i,
    canPin: a,
    canDelete: s,
    canReport: o,
    canEdit: h,
    canPublish: m,
    canReact: g,
    canConfigureJoin: A,
    canReply: E,
    canStartThread: v,
    canViewThread: C,
    canForward: S,
    isExpanded: x,
    showMoreUtilities: R,
    showEmojiPicker: G,
    showMessageBookmarksActions: F,
    isMessageBookmark: J,
    setPopout: X,
    hasDeveloperMode: $,
    isFocused: et
  } = function(e) {
    let {
      channel: t,
      message: n,
      showEmojiPicker: l,
      showEmojiBurstPicker: r,
      showMoreUtilities: i,
      messageWindow: a,
      setPopout: s,
      isFocused: o
    } = e, {
      author: d
    } = n, h = (0, u.bG)([D.A], () => D.A.getGuild(t.guild_id), [t.guild_id]), m = (0, u.bG)([w.default], () => w.default.getId()), g = (0, N.Id)(t), A = (0, N.s5)(t), {
      firstMessage: y
    } = (0, u.bG)([b.A], () => b.A.getMessage(t.id), [t.id]), E = P.jW.useSetting(), v = P.Q_.useSetting(), C = (0, u.bG)([M.A], () => null == t.guild_id || M.A.canChatInGuild(t.guild_id), [t]), {
      canManageMessages: S,
      canAddNewReactions: x
    } = (0, u.cf)([L.A], () => ({
      canAddNewReactions: C && L.A.can(Z.xBc.ADD_REACTIONS, t),
      canManageMessages: L.A.can(Z.xBc.MANAGE_MESSAGES, t)
    }), [t, C]), R = (0, j.u)(t, n), k = (0, N.n)(t, n), G = (0, N.R)(n), F = (0, u.bG)([O.A], () => null != t.guild_id && O.A.isLurking(t.guild_id), [t]), z = d.id === m, Y = (S || n.canDeleteOwnMessage(m)) && g && !Z.MRS.UNDELETABLE.has(n.type);
    n.type === Z.lAJ.AUTO_MODERATION_ACTION && (Y = Y && S), t.isModeratorReportChannel() && (Y = Y && n.id !== (null == y ? true : y.id) && !(0, K.A)(n));
    let q = (0, H.ul)(n),
      J = (0, V.A)(n, t),
      X = !t.isSystemDM() && (0, B.A)(n, m) && g && !A,
      {
        disableReactionCreates: Q
      } = (0, W.A)({
        channel: t,
        canChat: C,
        renderReactions: E,
        canAddNewReactions: x,
        isLurking: F,
        isActiveChannelOrUnarchivableThread: g
      }),
      $ = t.type === Z.rbe.GUILD_ANNOUNCEMENT && null != h && h.features.has(Z.GuildFeatures.NEWS) && (z || S) && (0, f.A)(n),
      ee = t.getGuildId(),
      et = null != ee && n.type === Z.lAJ.USER_JOIN && L.A.canWithPartialContext(Z.xBc.MANAGE_GUILD, {
        guildId: ee
      }),
      en = (0, _.m)(n),
      {
        enabled: el
      } = I.A.useExperiment({
        location: "message_utilities"
      }),
      er = (0, u.bG)([T.A], () => null != T.A.getSavedMessage(t.id, n.id)),
      ei = (0, c.A)(a),
      ea = (0, u.bG)([p.A], () => p.A.keyboardModeEnabled);
    return {
      channel: t,
      message: n,
      canPin: J,
      canEdit: X,
      canDelete: Y,
      canReport: q,
      canReply: R,
      canStartThread: k,
      canViewThread: G,
      canForward: en,
      canCopy: U.p5,
      hasDeveloperMode: v,
      canReact: !Q && E,
      canPublish: $,
      canConfigureJoin: et,
      isExpanded: ei && !ea && !l && !r && !i,
      showEmojiPicker: l,
      showEmojiBurstPicker: r,
      showMoreUtilities: i,
      showMessageBookmarksActions: el,
      isMessageBookmark: er,
      setPopout: s,
      isFocused: o
    }
  }(e), en = r.useRef(null), ei = r.useCallback(() => {
    R || k.default.track(Z.HAw.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
      message_id: n.id,
      channel: n.channel_id,
      location: "expanding_buttons"
    }), X({
      moreUtilities: !R
    })
  }, [R, X, n]), ea = r.useCallback(() => {
    X({
      emojiPicker: !G
    })
  }, [G, X]), es = (0, N.Id)(t), ec = n.hasFlag(Z.pr7.CROSSPOSTED);
  return (0, l.jsxs)(l.Fragment, {
    children: [x ? (0, l.jsxs)(l.Fragment, {
      children: [i && $ ? (0, l.jsx)(z.qv, {
        label: Q.intl.string(Q.t.zBoHlf),
        icon: d.L9S,
        onClick: e => (0, Y.DT)(t, n, e)
      }, "copy-id") : null, i ? (0, l.jsx)(z.qv, {
        label: Q.intl.string(Q.t.WqhZss),
        icon: d.qYV,
        onClick: () => (0, Y.S)(t, n)
      }, "copy-link") : null, A ? (0, l.jsx)(z.qv, {
        label: Q.intl.string(Q.t.NpHUi1),
        icon: d.cBN,
        onClick: () => (0, Y.vc)(t)
      }, "configure") : null, es ? (0, l.jsx)(z.qv, {
        label: Q.intl.string(Q.t.RpE9k7),
        icon: d.QTh,
        onClick: () => (0, Y.cl)(t, n)
      }, "mark-unread") : null, F ? (0, l.jsx)(z.qv, {
        label: J ? Q.intl.string(Q.t.LHUP9D) : Q.intl.string(Q.t["9p3D9p"]),
        icon: J ? d.cFy : d.c$8,
        onClick: () => J ? (0, Y.r7)(t, n) : (0, Y.wF)(t, n)
      }, "bookmark") : null, a ? (0, l.jsx)(z.qv, {
        label: n.pinned ? Q.intl.string(Q.t["Bse+F/"]) : Q.intl.string(Q.t.CvQ18w),
        icon: d.tsw,
        onClick: e => (0, Y.rS)(t, n, e)
      }, "pin") : null, v && S ? (0, l.jsx)(z.qv, {
        label: Q.intl.string(Q.t.rBIGBL),
        icon: d.ysw,
        onClick: () => (0, Y.Nw)(t, n)
      }, "thread") : null, E && h ? (0, l.jsx)(z.qv, {
        label: Q.intl.string(Q.t["5IEsGx"]),
        icon: d.W4J,
        onClick: e => (0, Y.$b)(t, n, e)
      }, "reply-self") : null]
    }) : null, g ? (0, l.jsxs)(l.Fragment, {
      children: [x ? null : (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(er, {
          channel: t,
          message: n
        }), (0, l.jsx)(z.$$, {})]
      }), (0, l.jsx)(q.A, {
        togglePopout: ea,
        renderEmojiPicker: eo,
        shouldShow: G,
        isFocused: et,
        channel: t,
        message: n
      })]
    }) : null, E && !h ? (0, l.jsx)(z.qv, {
      label: Q.intl.string(Q.t["5IEsGx"]),
      icon: d.W4J,
      onClick: e => (0, Y.$b)(t, n, e)
    }, "reply-other") : null, h ? (0, l.jsx)(z.qv, {
      label: Q.intl.string(Q.t.bt75uw),
      icon: d.R2l,
      onClick: () => (0, Y.u_)(t, n)
    }, "edit") : null, S ? (0, l.jsx)(z.qv, {
      label: Q.intl.string(Q.t.I3ltXO),
      icon: y.A,
      onClick: () => (0, Y.Z4)(t, n)
    }, "forward") : null, v && !S ? (0, l.jsx)(z.qv, {
      label: Q.intl.string(Q.t.rBIGBL),
      icon: d.ysw,
      onClick: () => (0, Y.Nw)(t, n)
    }, "thread") : null, !v && C ? (0, l.jsx)(z.qv, {
      label: Q.intl.string(Q.t["39d0Wj"]),
      icon: d.ysw,
      onClick: () => (0, Y.mF)(t, n)
    }, "view-thread") : null, m ? (0, l.jsx)(z.qv, {
      label: ec ? Q.intl.string(Q.t["1kWJAr"]) : Q.intl.string(Q.t.MFGE51),
      icon: d.koX,
      onClick: () => (0, Y.Le)(t, n),
      disabled: ec
    }, "publish") : null, s && x ? (0, l.jsx)(z.qv, {
      label: Q.intl.string(Q.t.oyYWHE),
      icon: d.ucK,
      onClick: e => (0, Y.RC)(t, n, e),
      dangerous: true,
      separator: !x
    }, "delete") : null, x && s ? null : (0, l.jsx)(d.YNO, {
      targetElementRef: en,
      renderPopout: e => {
        let {
          updatePosition: r,
          closePopout: i
        } = e;
        return (0, l.jsx)(el, {
          channel: t,
          message: n,
          canReport: o,
          onClose: i,
          updatePosition: r
        })
      },
      shouldShow: R,
      onRequestClose: ei,
      position: "left",
      align: "top",
      animation: d.YNO.Animation.NONE,
      children: (e, t) => {
        let [n, ...r] = [e, t], {
          onClick: i
        } = n, a = function(e, t) {
          if (null == e) return {};
          var n, l, r, i = {};
          if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
            return i
          }
          if (i = function(e, t) {
              if (null == e) return {};
              var n, l, r = {},
                i = Object.getOwnPropertyNames(e);
              for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
              return r
            }(e, t), Object.getOwnPropertySymbols)
            for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
          return i
        }(n, ["onClick"]), [{
          isShown: s
        }] = r;
        return (0, l.jsx)(z.qv, ee({
          ref: en,
          label: Q.intl.string(Q.t["UKOtz+"]),
          icon: d.jNK,
          selected: s,
          onClick: ei
        }, a), "more")
      }
    })]
  })
}

function ea(e) {
  let {
    channel: t,
    message: n
  } = e, r = (0, u.bG)([E.A], () => null != E.A.getMessage(n.id), [n.id]), i = null == n.interaction || null != n.interactionData && (0, v.Bl)(n.interactionData);
  return (0, l.jsxs)(l.Fragment, {
    children: [!r && i && (0, l.jsx)(z.qv, {
      label: Q.intl.string(Q.t["5911Lb"]),
      icon: d.mqY,
      onClick: () => (0, Y.Io)(t, n)
    }, "retry"), (0, l.jsx)(z.qv, {
      label: Q.intl.string(Q.t.oyYWHE),
      icon: d.ucK,
      onClick: e => (0, Y.RC)(t, n, e)
    }, "delete-usent")]
  })
}

function es(e) {
  let {
    type: t,
    emoji: n,
    channel: l,
    message: r,
    location: i,
    isBurst: a = false
  } = e;
  if (null == n) return;
  let s = (0, S.jq)(n);
  "add" === t ? (0, C.BB)(l.id, r.id, s, i, {
    burst: a
  }) : (0, C.et)({
    channelId: l.id,
    messageId: r.id,
    emoji: s,
    location: i,
    options: {
      burst: a
    }
  })
}

function eo(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] && arguments[3],
    i = ee({
      openPopoutType: "message_reaction_emoji_picker"
    }, r && {
      openPopoutType: "message_super_reaction_emoji_picker",
      page: null != e.getGuildId() ? Z.liQ.GUILD_CHANNEL : Z.liQ.DM_CHANNEL,
      section: (0, S.sn)(e),
      object: Z.ZSU.EMOJI_REACTION_PICKER_POPOUT
    });
  return (0, l.jsx)(x.C, {
    channel: e,
    closePopout: n,
    onSelectEmoji: l => {
      let {
        emoji: r,
        willClose: i,
        isBurst: a
      } = l;
      es({
        type: "add",
        emoji: r,
        channel: e,
        message: t,
        location: C.qN.MESSAGE_REACTION_PICKER,
        isBurst: a
      }), i && (a ? o()(n, 150)() : n())
    },
    analyticsOverride: i,
    messageId: t.id
  })
}
let ec = Chunk64700.memo(function(e) {
  let {
    channel: t,
    message: n,
    isHeader: r,
    isReply: i
  } = e, s = (0, u.bG)([R.A], () => R.A.isEditing(t.id, n.id), [t.id, n.id]), o = function(e) {
    let {
      channel: t,
      message: n
    } = e;
    return n.state === Z.cmJ.SEND_FAILED ? (0, l.jsx)(ea, {
      channel: t,
      message: n
    }) : null
  }(e), c = function(e) {
    let {
      message: t
    } = e;
    return t.state !== Z.cmJ.SEND_FAILED ? (0, l.jsx)(ei, ee({}, e)) : null
  }(e);
  return s || null == o && null == c ? null : (0, l.jsx)("div", {
    className: a()(e.className, {
      [$.kL]: true,
      [$.gN]: r,
      [$.nK]: i
    }),
    onClick: en,
    onContextMenu: en,
    role: "group",
    "aria-label": Q.intl.string(Q.t.Lv7LxN),
    children: (0, l.jsxs)(z.Ay, {
      className: e.innerClassName,
      children: [o, c]
    })
  })
})