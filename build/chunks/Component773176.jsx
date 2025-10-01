/** Chunk was on 49613 **/
/** chunk id: 773176, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eC
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk954955 = require("./954955.js"),
  s = require.n(Chunk954955),
  Chunk893999 = require("./893999.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk110630 = require("./110630.js"),
  Chunk706140 = require("./706140.js"),
  Chunk543241 = require("./543241.js"),
  Chunk633302 = require("./633302.js"),
  Chunk856985 = require("./856985.js"),
  Chunk660189 = require("./660189.js"),
  Chunk868643 = require("./868643.js"),
  Chunk245216 = require("./245216.jsx"),
  Chunk223606 = require("./223606.js"),
  Chunk188597 = require("./188597.js"),
  Chunk41776 = require("./41776.js"),
  Chunk980463 = require("./980463.js"),
  Chunk328908 = require("./328908.js"),
  Chunk992970 = require("./992970.js"),
  Chunk135793 = require("./135793.jsx"),
  Chunk576645 = require("./576645.js"),
  Chunk84040 = require("./84040.js"),
  Chunk222677 = require("./222677.js"),
  Chunk995774 = require("./995774.js"),
  Chunk931651 = require("./931651.jsx"),
  Chunk280845 = require("./280845.js"),
  Chunk2818 = require("./2818.js"),
  Chunk768943 = require("./768943.js"),
  Chunk665906 = require("./665906.js"),
  Chunk695346 = require("./695346.js"),
  Chunk314897 = require("./314897.js"),
  Chunk323873 = require("./323873.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk607744 = require("./607744.js"),
  Chunk496675 = require("./496675.js"),
  Chunk626135 = require("./626135.js"),
  Chunk572004 = require("./572004.js"),
  Chunk176354 = require("./176354.js"),
  Chunk823379 = require("./823379.js"),
  Chunk970257 = require("./970257.js"),
  Chunk418476 = require("./418476.js"),
  Chunk151007 = require("./151007.js"),
  Chunk901461 = require("./901461.js"),
  Chunk432376 = require("./432376.js"),
  Chunk373662 = require("./373662.jsx"),
  Chunk996861 = require("./996861.js"),
  Chunk603490 = require("./603490.jsx"),
  Chunk225138 = require("./225138.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk185923 = require("./185923.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk271425 = require("./271425.js");

function eu(e) {
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
let ed = [Chunk633302.ZP.getByName("100"), Chunk633302.ZP.getByName("laughing"), Chunk633302.ZP.getByName("sparkling_heart")].filter(Chunk823379.lm);

function ep(e) {
  e.stopPropagation()
}

function eh(e) {
  let {
    message: t,
    channel: n,
    canReport: r,
    onClose: i,
    updatePosition: l
  } = e;
  return (0, ei.S)({
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
    onHeightUpdate: l,
    onClose: i,
    navId: "message-actions",
    ariaLabel: es.intl.string(es.t.Lv7LxM)
  })
}
let ef = Chunk647438.memo(function(e) {
  let {
    channel: t,
    message: n
  } = e, i = (0, b.q5)(t.guild_id).filter(e => !Y.ZP.isEmojiFilteredOrLocked({
    emoji: e,
    channel: t,
    intention: eo.Hz.REACTION,
    guildId: t.guild_id
  })), l = (i.length >= 3 ? i : [...(0, C.Z)(i.concat(ed)).values()]).slice(0, 3), a = n.reactions.filter(e => e.me);
  return (0, r.jsx)(r.Fragment, {
    children: l.map(e => {
      var i;
      let l = a.find(t => (0, w.ir)(t.emoji, (0, w.g1)(e))),
        o = null != l ? es.intl.string(es.t.wunKKC) : es.intl.string(es.t.XVx5BA),
        s = null == e.id ? e.uniqueName : e.name,
        c = null != l ? es.intl.formatToPlainString(es.t.vjeruL, {
          emojiName: s
        }) : es.intl.formatToPlainString(es.t.L1JQwM, {
          emojiName: s
        });
      return (0, r.jsx)(et.sF, {
        tooltipText: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(p.Text, {
            variant: "text-sm/medium",
            color: "header-primary",
            className: ec.emojiTooltipText,
            children: ":".concat(e.name, ":")
          }), (0, r.jsx)(p.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            className: ec.emojiTooltipText,
            children: o
          })]
        }),
        label: c,
        onClick: () => eb({
          type: null != l ? "remove" : "add",
          emoji: e,
          channel: t,
          message: n,
          location: A.TW.MESSAGE_HOVER_BAR
        }),
        children: (0, r.jsx)(h.Z, {
          emojiId: e.id,
          emojiName: null == e.id ? e.surrogates : e.name,
          animated: e.animated,
          size: "reaction",
          alt: "",
          className: ec.emoji,
          canSelect: false
        })
      }, "".concat(null != (i = e.id) ? i : 0, ":").concat(e.name))
    })
  })
});

function em(e) {
  let {
    channel: t,
    message: n,
    canCopy: l,
    canPin: a,
    canDelete: o,
    canReport: s,
    canEdit: h,
    canPublish: b,
    canReact: y,
    canConfigureJoin: C,
    canReply: O,
    canStartThread: j,
    canViewThread: A,
    canForward: w,
    isExpanded: M,
    showMoreUtilities: H,
    showEmojiPicker: Y,
    showMessageBookmarksActions: K,
    isMessageBookmark: ei,
    setPopout: eo,
    hasDeveloperMode: ec,
    isFocused: ed
  } = function(e) {
    let {
      channel: t,
      message: n,
      showEmojiPicker: r,
      showEmojiBurstPicker: i,
      showMoreUtilities: l,
      messageWindow: a,
      setPopout: o,
      isFocused: s
    } = e, {
      author: d
    } = n, p = (0, u.e7)([F.Z], () => F.Z.getGuild(t.guild_id), [t.guild_id]), h = (0, u.e7)([B.default], () => B.default.getId()), g = (0, L.$R)(t), b = (0, L.Gu)(t), {
      firstMessage: y
    } = (0, u.e7)([_.Z], () => _.Z.getMessage(t.id), [t.id]), C = U.nc.useSetting(), x = U.Sb.useSetting(), O = (0, u.e7)([G.Z], () => null == t.guild_id || G.Z.canChatInGuild(t.guild_id), [t]), {
      canManageMessages: j,
      canAddNewReactions: S
    } = (0, u.cj)([z.Z], () => ({
      canAddNewReactions: O && z.Z.can(el.Plq.ADD_REACTIONS, t),
      canManageMessages: z.Z.can(el.Plq.MANAGE_MESSAGES, t)
    }), [t, O]), P = (0, R.U)(t, n), I = (0, L.NE)(t, n), Z = (0, L.Ek)(n), N = (0, u.e7)([E.Z], () => null != t.guild_id && E.Z.isLurking(t.guild_id), [t]), T = (0, u.e7)([V.ZP], () => null != t.guild_id && V.ZP.isCurrentUserGuest(t.guild_id), [t]), A = d.id === h, w = (j || n.canDeleteOwnMessage(h)) && g && !el.V$x.UNDELETABLE.has(n.type);
    n.type === el.uaV.AUTO_MODERATION_ACTION && (w = w && j), t.isModeratorReportChannel() && (w = w && n.id !== (null == y ? true : y.id) && !(0, $.Z)(n));
    let M = (0, X.a4)(n),
      H = (0, Q.Z)(n, t),
      W = !t.isSystemDM() && (0, J.Z)(n, h) && g && !b,
      {
        disableReactionCreates: Y
      } = (0, ee.Z)({
        channel: t,
        canChat: O,
        renderReactions: C,
        canAddNewReactions: S,
        isLurking: N,
        isGuest: T,
        isActiveChannelOrUnarchivableThread: g
      }),
      K = t.type === el.d4z.GUILD_ANNOUNCEMENT && null != p && p.features.has(el.oNc.NEWS) && (A || j) && (0, m.Z)(n),
      et = t.getGuildId(),
      en = null != et && n.type === el.uaV.USER_JOIN && z.Z.canWithPartialContext(el.Plq.MANAGE_GUILD, {
        guildId: et
      }),
      er = (0, v.a)(n),
      {
        enabled: ei
      } = k.Z.useExperiment({
        location: "message_utilities"
      }),
      ea = (0, u.e7)([D.Z], () => null != D.Z.getSavedMessage(t.id, n.id)),
      eo = (0, c.Z)(a),
      es = (0, u.e7)([f.Z], () => f.Z.keyboardModeEnabled);
    return {
      channel: t,
      message: n,
      canPin: H,
      canEdit: W,
      canDelete: w,
      canReport: M,
      canReply: P,
      canStartThread: I,
      canViewThread: Z,
      canForward: er,
      canCopy: q.wS,
      hasDeveloperMode: x,
      canReact: !Y && C,
      canPublish: K,
      canConfigureJoin: en,
      isExpanded: eo && !es && !r && !i && !l,
      showEmojiPicker: r,
      showEmojiBurstPicker: i,
      showMoreUtilities: l,
      showMessageBookmarksActions: ei,
      isMessageBookmark: ea,
      setPopout: o,
      isFocused: s
    }
  }(e), ep = i.useRef(null), em = i.useCallback(() => {
    H || W.default.track(el.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
      message_id: n.id,
      channel: n.channel_id
    }), eo({
      moreUtilities: !H
    })
  }, [H, eo, n]), eg = i.useCallback(() => {
    eo({
      emojiPicker: !Y
    })
  }, [Y, eo]), eb = (0, L.$R)(t), eC = n.hasFlag(el.iLy.CROSSPOSTED), [e_, ev] = (0, g.cv)(w ? [d.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE] : []), ex = e_ === d.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE, [eO, ej] = i.useState(false), eE = i.useCallback(() => {
    ej(true)
  }, []), eS = i.useCallback(() => {
    ej(false)
  }, []), eP = i.useCallback((e, t) => {
    ev(ea.L.TAKE_ACTION), (0, en.ts)(e, t)
  }, [ev]), eI = (0, T.Z)(t), eZ = (0, N.Nt)(), eN = eI && eZ && !n.hasPotions(), eT = i.useCallback(e => {
    try {
      (0, S.qc)(t.id, n.id, e)
    } catch (e) {
      (0, p.showToast)((0, p.createToast)(es.intl.string(es.t.xsfC2d), p.ToastType.FAILURE))
    }
  }, [t.id, n.id]);
  return (0, r.jsxs)(r.Fragment, {
    children: [M ? (0, r.jsxs)(r.Fragment, {
      children: [l && ec ? (0, r.jsx)(et.sF, {
        label: es.intl.string(es.t.zBoHlZ),
        icon: p.VuL,
        onClick: e => (0, en.F4)(t, n, e)
      }, "copy-id") : null, l ? (0, r.jsx)(et.sF, {
        label: es.intl.string(es.t.WqhZsr),
        icon: p.xPt,
        onClick: () => (0, en.fB)(t, n)
      }, "copy-link") : null, C ? (0, r.jsx)(et.sF, {
        label: es.intl.string(es.t.NpHUi4),
        icon: p.idN,
        onClick: () => (0, en.zW)(t)
      }, "configure") : null, eb ? (0, r.jsx)(et.sF, {
        label: es.intl.string(es.t.RpE9k5),
        icon: p.z7b,
        onClick: () => (0, en.B8)(t, n)
      }, "mark-unread") : null, K ? (0, r.jsx)(et.sF, {
        label: ei ? es.intl.string(es.t.LHUP9P) : es.intl.string(es.t["9p3D9v"]),
        icon: ei ? p.plf : p.gt9,
        onClick: () => ei ? (0, en.eM)(t, n) : (0, en.dF)(t, n)
      }, "bookmark") : null, a ? (0, r.jsx)(et.sF, {
        label: n.pinned ? es.intl.string(es.t["Bse+Fx"]) : es.intl.string(es.t["CvQ18/"]),
        icon: p.qQX,
        onClick: e => (0, en.rY)(t, n, e)
      }, "pin") : null, j && w ? (0, r.jsx)(et.sF, {
        label: es.intl.string(es.t.rBIGBA),
        icon: p.or_,
        onClick: () => (0, en.gK)(t, n)
      }, "thread") : null, O && h ? (0, r.jsx)(et.sF, {
        label: es.intl.string(es.t["5IEsGx"]),
        icon: p.n$P,
        onClick: e => (0, en.HH)(t, n, e)
      }, "reply-self") : null]
    }) : null, y ? (0, r.jsxs)(r.Fragment, {
      children: [M ? null : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(ef, {
          channel: t,
          message: n
        }), (0, r.jsx)(et.fO, {})]
      }), (0, r.jsx)(er.Z, {
        togglePopout: eg,
        renderEmojiPicker: ey,
        shouldShow: Y,
        isFocused: ed,
        channel: t,
        message: n
      }), eN ? (0, r.jsx)(et.sF, {
        label: es.intl.string(es.t.icaJW1),
        icon: p.l22,
        onClick: () => {
          W.default.track(el.rMx.CONFETTI_POTION_ENTRYPOINT_CLICKED, {
            location: I.MG.MessageExpandingButtons
          }), (0, Z.s)({
            channelId: t.id,
            message: n,
            onRedeem: eT,
            onClose: P.Qy,
            source: I.YD.MessageExpandingButtons
          })
        }
      }, "add-confetti-potion") : null]
    }) : null, O && !h ? (0, r.jsx)(et.sF, {
      label: es.intl.string(es.t["5IEsGx"]),
      icon: p.n$P,
      onClick: e => (0, en.HH)(t, n, e)
    }, "reply-other") : null, h ? (0, r.jsx)(et.sF, {
      label: es.intl.string(es.t.bt75u7),
      icon: p.vdY,
      onClick: () => (0, en.Hd)(t, n)
    }, "edit") : null, w ? (0, r.jsx)(et.sF, {
      label: es.intl.string(es.t.I3ltXF),
      icon: x.Z,
      onClick: () => eP(t, n),
      onTooltipShow: eE,
      onTooltipHide: eS,
      showNewBadge: !eO && ex
    }, "forward") : null, j && !w ? (0, r.jsx)(et.sF, {
      label: es.intl.string(es.t.rBIGBA),
      icon: p.or_,
      onClick: () => (0, en.gK)(t, n)
    }, "thread") : null, !j && A ? (0, r.jsx)(et.sF, {
      label: es.intl.string(es.t["39d0Wl"]),
      icon: p.or_,
      onClick: () => (0, en.qe)(t, n)
    }, "view-thread") : null, b ? (0, r.jsx)(et.sF, {
      label: eC ? es.intl.string(es.t["1kWJAg"]) : es.intl.string(es.t["MFGE5+"]),
      icon: p.MqZ,
      onClick: () => (0, en.Xl)(t, n),
      disabled: eC
    }, "publish") : null, o && M ? (0, r.jsx)(et.sF, {
      label: es.intl.string(es.t.oyYWHB),
      icon: p.XHJ,
      onClick: e => (0, en.$Z)(t, n, e),
      dangerous: true,
      separator: !M
    }, "delete") : null, M && o ? null : (0, r.jsx)(p.yRy, {
      targetElementRef: ep,
      renderPopout: e => {
        let {
          updatePosition: i,
          closePopout: l
        } = e;
        return (0, r.jsx)(eh, {
          channel: t,
          message: n,
          canReport: s,
          onClose: l,
          updatePosition: i
        })
      },
      shouldShow: H,
      onRequestClose: em,
      position: "left",
      align: "top",
      animation: p.yRy.Animation.NONE,
      children: (e, t) => {
        var {
          onClick: n
        } = e, i = function(e, t) {
          if (null == e) return {};
          var n, r, i = function(e, t) {
            if (null == e) return {};
            var n, r, i = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
        }(e, ["onClick"]), {
          isShown: l
        } = t;
        return (0, r.jsx)(et.sF, eu({
          ref: ep,
          label: es.intl.string(es.t.UKOtz8),
          icon: p.xhG,
          selected: l,
          onClick: em
        }, i), "more")
      }
    })]
  })
}

function eg(e) {
  let {
    channel: t,
    message: n
  } = e, i = (0, u.e7)([O.Z], () => null != O.Z.getMessage(n.id), [n.id]), l = null == n.interaction || null != n.interactionData && (0, j.$s)(n.interactionData);
  return (0, r.jsxs)(r.Fragment, {
    children: [!i && l && (0, r.jsx)(et.sF, {
      label: es.intl.string(es.t["5911LS"]),
      icon: p.Oe7,
      onClick: () => (0, en.mG)(t, n)
    }, "retry"), (0, r.jsx)(et.sF, {
      label: es.intl.string(es.t.oyYWHB),
      icon: p.XHJ,
      onClick: e => (0, en.$Z)(t, n, e)
    }, "delete-usent")]
  })
}

function eb(e) {
  let {
    type: t,
    emoji: n,
    channel: r,
    message: i,
    location: l,
    isBurst: a = false
  } = e;
  if (null == n) return;
  let o = (0, w.g1)(n);
  "add" === t ? (0, A.rU)(r.id, i.id, o, l, {
    burst: a
  }) : (0, A.WO)({
    channelId: r.id,
    messageId: i.id,
    emoji: o,
    location: l,
    options: {
      burst: a
    }
  })
}

function ey(e, t, n) {
  let i = arguments.length > 3 && true !== arguments[3] && arguments[3],
    l = eu({
      openPopoutType: "message_reaction_emoji_picker"
    }, i && {
      openPopoutType: "message_super_reaction_emoji_picker",
      page: null != e.getGuildId() ? el.ZY5.GUILD_CHANNEL : el.ZY5.DM_CHANNEL,
      section: (0, w.s4)(e),
      object: el.qAy.EMOJI_REACTION_PICKER_POPOUT
    });
  return (0, r.jsx)(M.$, {
    channel: e,
    closePopout: n,
    onSelectEmoji: r => {
      let {
        emoji: i,
        willClose: l,
        isBurst: a
      } = r;
      eb({
        type: "add",
        emoji: i,
        channel: e,
        message: t,
        location: A.TW.MESSAGE_REACTION_PICKER,
        isBurst: a
      }), l && (a ? s()(n, 150)() : n())
    },
    analyticsOverride: l,
    messageId: t.id
  })
}
let eC = Chunk647438.memo(function(e) {
  let {
    channel: t,
    message: n,
    isHeader: i,
    isReply: l
  } = e, o = (0, u.e7)([H.Z], () => H.Z.isEditing(t.id, n.id), [t.id, n.id]), s = function(e) {
    let {
      channel: t,
      message: n
    } = e;
    return n.state === el.yb.SEND_FAILED ? (0, r.jsx)(eg, {
      channel: t,
      message: n
    }) : null
  }(e), c = function(e) {
    let {
      message: t
    } = e;
    return t.state !== el.yb.SEND_FAILED ? (0, r.jsx)(em, eu({}, e)) : null
  }(e);
  return o || null == s && null == c ? null : (0, r.jsx)("div", {
    className: a()(e.className, {
      [ec.container]: true,
      [ec.isHeader]: i,
      [ec.isReply]: l
    }),
    onClick: ep,
    onContextMenu: ep,
    role: "group",
    "aria-label": es.intl.string(es.t.Lv7LxM),
    children: (0, r.jsxs)(et.ZP, {
      className: e.innerClassName,
      children: [s, c]
    })
  })
})