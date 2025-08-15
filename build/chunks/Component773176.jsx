/** Chunk was on 86357 **/
/** chunk id: 773176, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eC
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk407477 = require("./407477.js"),
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
  Chunk785727 = require("./785727.js");

function ed(e) {
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
let ep = [Chunk633302.ZP.getByName("100"), Chunk633302.ZP.getByName("laughing"), Chunk633302.ZP.getByName("sparkling_heart")].filter(Chunk823379.lm);

function eh(e) {
  e.stopPropagation()
}

function ef(e) {
  let {
    message: t,
    channel: n,
    canReport: r,
    onClose: i,
    updatePosition: l
  } = e;
  return (0, el.S)({
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
    ariaLabel: ec.intl.string(ec.t.Lv7LxM)
  })
}
let em = Chunk73800.memo(function(e) {
  let {
    channel: t,
    message: n
  } = e, i = (0, b.q5)(t.guild_id).filter(e => !K.ZP.isEmojiFilteredOrLocked({
    emoji: e,
    channel: t,
    intention: es.Hz.REACTION,
    guildId: t.guild_id
  })), l = (i.length >= 3 ? i : [...(0, C.Z)(i.concat(ep)).values()]).slice(0, 3), a = n.reactions.filter(e => e.me);
  return (0, r.jsx)(r.Fragment, {
    children: l.map(e => {
      var i;
      let l = a.find(t => (0, R.ir)(t.emoji, (0, R.g1)(e))),
        o = null != l ? ec.intl.string(ec.t.wunKKC) : ec.intl.string(ec.t.XVx5BA),
        s = null == e.id ? e.uniqueName : e.name,
        c = null != l ? ec.intl.formatToPlainString(ec.t.vjeruL, {
          emojiName: s
        }) : ec.intl.formatToPlainString(ec.t.L1JQwM, {
          emojiName: s
        });
      return (0, r.jsx)(en.sF, {
        tooltipText: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(p.Text, {
            variant: "text-sm/medium",
            color: "header-primary",
            className: eu.emojiTooltipText,
            children: ":".concat(e.name, ":")
          }), (0, r.jsx)(p.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            className: eu.emojiTooltipText,
            children: o
          })]
        }),
        label: c,
        onClick: () => ey({
          type: null != l ? "remove" : "add",
          emoji: e,
          channel: t,
          message: n,
          location: w.TW.MESSAGE_HOVER_BAR
        }),
        children: (0, r.jsx)(h.Z, {
          emojiId: e.id,
          emojiName: null == e.id ? e.surrogates : e.name,
          animated: e.animated,
          size: "reaction",
          alt: "",
          className: eu.emoji,
          canSelect: false
        })
      }, "".concat(null != (i = e.id) ? i : 0, ":").concat(e.name))
    })
  })
});

function eg(e) {
  let {
    channel: t,
    message: n,
    canCopy: l,
    canPin: a,
    canDelete: o,
    canReport: s,
    canEdit: h,
    canPublish: b,
    canReact: _,
    canConfigureJoin: C,
    canReply: O,
    canStartThread: E,
    canViewThread: w,
    canForward: R,
    isExpanded: M,
    showMoreUtilities: H,
    showEmojiPicker: K,
    showMessageBookmarksActions: X,
    isMessageBookmark: el,
    setPopout: es,
    hasDeveloperMode: eu,
    isFocused: ep
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
    } = n, p = (0, u.e7)([V.Z], () => V.Z.getGuild(t.guild_id), [t.guild_id]), h = (0, u.e7)([F.default], () => F.default.getId()), g = (0, U.$R)(t), b = (0, U.Gu)(t), {
      firstMessage: y
    } = (0, u.e7)([x.Z], () => x.Z.getMessage(t.id), [t.id]), _ = B.nc.useSetting(), C = B.Sb.useSetting(), j = (0, u.e7)([z.Z], () => null == t.guild_id || z.Z.canChatInGuild(t.guild_id), [t]), {
      canManageMessages: O,
      canAddNewReactions: E
    } = (0, u.cj)([W.Z], () => ({
      canAddNewReactions: j && W.Z.can(ea.Plq.ADD_REACTIONS, t),
      canManageMessages: W.Z.can(ea.Plq.MANAGE_MESSAGES, t)
    }), [t, j]), P = (0, k.U)(t, n), I = (0, U.NE)(t, n), Z = (0, U.Ek)(n), T = (0, u.e7)([S.Z], () => null != t.guild_id && S.Z.isLurking(t.guild_id), [t]), N = (0, u.e7)([G.ZP], () => null != t.guild_id && G.ZP.isCurrentUserGuest(t.guild_id), [t]), A = d.id === h, w = (O || n.canDeleteOwnMessage(h)) && g && !ea.V$x.UNDELETABLE.has(n.type);
    n.type === ea.uaV.AUTO_MODERATION_ACTION && (w = w && O), t.isModeratorReportChannel() && (w = w && n.id !== (null == y ? true : y.id) && !(0, ee.Z)(n));
    let R = (0, Q.a4)(n),
      M = (0, $.Z)(n, t),
      H = !t.isSystemDM() && (0, J.Z)(n, h) && g && !b,
      {
        disableReactionCreates: Y
      } = (0, et.Z)({
        channel: t,
        canChat: j,
        renderReactions: _,
        canAddNewReactions: E,
        isLurking: T,
        isGuest: N,
        isActiveChannelOrUnarchivableThread: g
      }),
      K = t.type === ea.d4z.GUILD_ANNOUNCEMENT && null != p && p.features.has(ea.oNc.NEWS) && (A || O) && (0, m.Z)(n),
      X = t.getGuildId(),
      en = null != X && n.type === ea.uaV.USER_JOIN && W.Z.canWithPartialContext(ea.Plq.MANAGE_GUILD, {
        guildId: X
      }),
      er = (0, v.a)(n),
      {
        enabled: ei
      } = D.Z.useExperiment({
        location: "message_utilities"
      }),
      el = (0, u.e7)([L.Z], () => null != L.Z.getSavedMessage(t.id, n.id)),
      eo = (0, c.Z)(a),
      es = (0, u.e7)([f.Z], () => f.Z.keyboardModeEnabled);
    return {
      channel: t,
      message: n,
      canPin: M,
      canEdit: H,
      canDelete: w,
      canReport: R,
      canReply: P,
      canStartThread: I,
      canViewThread: Z,
      canForward: er,
      canCopy: q.wS,
      hasDeveloperMode: C,
      canReact: !Y && _,
      canPublish: K,
      canConfigureJoin: en,
      isExpanded: eo && !es && !r && !i && !l,
      showEmojiPicker: r,
      showEmojiBurstPicker: i,
      showMoreUtilities: l,
      showMessageBookmarksActions: ei,
      isMessageBookmark: el,
      setPopout: o,
      isFocused: s
    }
  }(e), eh = i.useRef(null), eg = i.useCallback(() => {
    H || Y.default.track(ea.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
      message_id: n.id,
      channel: n.channel_id
    }), es({
      moreUtilities: !H
    })
  }, [H, es, n]), eb = i.useCallback(() => {
    es({
      emojiPicker: !K
    })
  }, [K, es]), ey = (0, U.$R)(t), eC = n.hasFlag(ea.iLy.CROSSPOSTED), [ex, ev] = (0, g.cv)(R ? [d.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE] : []), ej = ex === d.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE, [eO, eE] = i.useState(false), eS = i.useCallback(() => {
    eE(true)
  }, []), eP = i.useCallback(() => {
    eE(false)
  }, []), eI = i.useCallback((e, t) => {
    ev(eo.L.TAKE_ACTION), (0, er.ts)(e, t)
  }, [ev]), {
    canShowReactionsOnMessageHover: eZ
  } = y.ZP.useExperiment({
    location: "ExpandingButtons"
  }, {
    autoTrackExposure: true
  });
  y.Xb.useExperiment({
    location: "ExpandingButtons"
  }, {
    autoTrackExposure: true
  });
  let eT = (0, A.Z)(t),
    eN = (0, N.Nt)(),
    eA = eT && eN && !n.hasPotions(),
    ew = i.useCallback(e => {
      try {
        (0, P.qc)(t.id, n.id, e)
      } catch (e) {
        (0, p.showToast)((0, p.createToast)(ec.intl.string(ec.t.xsfC2d), p.ToastType.FAILURE))
      }
    }, [t.id, n.id]);
  return (0, r.jsxs)(r.Fragment, {
    children: [M ? (0, r.jsxs)(r.Fragment, {
      children: [l && eu ? (0, r.jsx)(en.sF, {
        label: ec.intl.string(ec.t.zBoHlZ),
        icon: p.VuL,
        onClick: e => (0, er.F4)(t, n, e)
      }, "copy-id") : null, l ? (0, r.jsx)(en.sF, {
        label: ec.intl.string(ec.t.WqhZsr),
        icon: p.xPt,
        onClick: () => (0, er.fB)(t, n)
      }, "copy-link") : null, C ? (0, r.jsx)(en.sF, {
        label: ec.intl.string(ec.t.NpHUi4),
        icon: p.idN,
        onClick: () => (0, er.zW)(t)
      }, "configure") : null, ey ? (0, r.jsx)(en.sF, {
        label: ec.intl.string(ec.t.RpE9k5),
        icon: p.z7b,
        onClick: () => (0, er.B8)(t, n)
      }, "mark-unread") : null, X ? (0, r.jsx)(en.sF, {
        label: el ? ec.intl.string(ec.t.LHUP9P) : ec.intl.string(ec.t["9p3D9v"]),
        icon: el ? p.plf : p.gt9,
        onClick: () => el ? (0, er.eM)(t, n) : (0, er.dF)(t, n)
      }, "bookmark") : null, a ? (0, r.jsx)(en.sF, {
        label: n.pinned ? ec.intl.string(ec.t["Bse+Fx"]) : ec.intl.string(ec.t["CvQ18/"]),
        icon: p.qQX,
        onClick: e => (0, er.rY)(t, n, e)
      }, "pin") : null, E && R ? (0, r.jsx)(en.sF, {
        label: ec.intl.string(ec.t.rBIGBA),
        icon: p.or_,
        onClick: () => (0, er.gK)(t, n)
      }, "thread") : null, O && h ? (0, r.jsx)(en.sF, {
        label: ec.intl.string(ec.t["5IEsGx"]),
        icon: p.n$P,
        onClick: e => (0, er.HH)(t, n, e)
      }, "reply-self") : null]
    }) : null, _ ? (0, r.jsxs)(r.Fragment, {
      children: [eZ && !M ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(em, {
          channel: t,
          message: n
        }), (0, r.jsx)(en.fO, {})]
      }) : null, (0, r.jsx)(ei.Z, {
        togglePopout: eb,
        renderEmojiPicker: e_,
        shouldShow: K,
        isFocused: ep,
        channel: t,
        message: n
      }), eA ? (0, r.jsx)(en.sF, {
        label: ec.intl.string(ec.t.icaJW1),
        icon: p.l22,
        onClick: () => {
          Y.default.track(ea.rMx.CONFETTI_POTION_ENTRYPOINT_CLICKED, {
            location: Z.MG.MessageExpandingButtons
          }), (0, T.s)({
            channelId: t.id,
            message: n,
            onRedeem: ew,
            onClose: I.Qy,
            source: Z.YD.MessageExpandingButtons
          })
        }
      }, "add-confetti-potion") : null]
    }) : null, O && !h ? (0, r.jsx)(en.sF, {
      label: ec.intl.string(ec.t["5IEsGx"]),
      icon: p.n$P,
      onClick: e => (0, er.HH)(t, n, e)
    }, "reply-other") : null, h ? (0, r.jsx)(en.sF, {
      label: ec.intl.string(ec.t.bt75u7),
      icon: p.vdY,
      onClick: () => (0, er.Hd)(t, n)
    }, "edit") : null, R ? (0, r.jsx)(en.sF, {
      label: ec.intl.string(ec.t.I3ltXF),
      icon: j.Z,
      onClick: () => eI(t, n),
      onTooltipShow: eS,
      onTooltipHide: eP,
      showNewBadge: !eO && ej
    }, "forward") : null, E && !R ? (0, r.jsx)(en.sF, {
      label: ec.intl.string(ec.t.rBIGBA),
      icon: p.or_,
      onClick: () => (0, er.gK)(t, n)
    }, "thread") : null, !E && w ? (0, r.jsx)(en.sF, {
      label: ec.intl.string(ec.t["39d0Wl"]),
      icon: p.or_,
      onClick: () => (0, er.qe)(t, n)
    }, "view-thread") : null, b ? (0, r.jsx)(en.sF, {
      label: eC ? ec.intl.string(ec.t["1kWJAg"]) : ec.intl.string(ec.t["MFGE5+"]),
      icon: p.MqZ,
      onClick: () => (0, er.Xl)(t, n),
      disabled: eC
    }, "publish") : null, o && M ? (0, r.jsx)(en.sF, {
      label: ec.intl.string(ec.t.oyYWHB),
      icon: p.XHJ,
      onClick: e => (0, er.$Z)(t, n, e),
      dangerous: true,
      separator: !M
    }, "delete") : null, M && o ? null : (0, r.jsx)(p.yRy, {
      targetElementRef: eh,
      renderPopout: e => {
        let {
          updatePosition: i,
          closePopout: l
        } = e;
        return (0, r.jsx)(ef, {
          channel: t,
          message: n,
          canReport: s,
          onClose: l,
          updatePosition: i
        })
      },
      shouldShow: H,
      onRequestClose: eg,
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
        return (0, r.jsx)(en.sF, ed({
          ref: eh,
          label: ec.intl.string(ec.t.UKOtz8),
          icon: p.xhG,
          selected: l,
          onClick: eg
        }, i), "more")
      }
    })]
  })
}

function eb(e) {
  let {
    channel: t,
    message: n
  } = e, i = (0, u.e7)([O.Z], () => null != O.Z.getMessage(n.id), [n.id]), l = null == n.interaction || null != n.interactionData && (0, E.$s)(n.interactionData);
  return (0, r.jsxs)(r.Fragment, {
    children: [!i && l && (0, r.jsx)(en.sF, {
      label: ec.intl.string(ec.t["5911LS"]),
      icon: p.Oe7,
      onClick: () => (0, er.mG)(t, n)
    }, "retry"), (0, r.jsx)(en.sF, {
      label: ec.intl.string(ec.t.oyYWHB),
      icon: p.XHJ,
      onClick: e => (0, er.$Z)(t, n, e)
    }, "delete-usent")]
  })
}

function ey(e) {
  let {
    type: t,
    emoji: n,
    channel: r,
    message: i,
    location: l,
    isBurst: a = false
  } = e;
  if (null == n) return;
  let o = (0, R.g1)(n);
  "add" === t ? (0, w.rU)(r.id, i.id, o, l, {
    burst: a
  }) : (0, w.WO)({
    channelId: r.id,
    messageId: i.id,
    emoji: o,
    location: l,
    options: {
      burst: a
    }
  })
}

function e_(e, t, n) {
  let i = arguments.length > 3 && true !== arguments[3] && arguments[3],
    l = ed({
      openPopoutType: "message_reaction_emoji_picker"
    }, i && {
      openPopoutType: "message_super_reaction_emoji_picker",
      page: null != e.getGuildId() ? ea.ZY5.GUILD_CHANNEL : ea.ZY5.DM_CHANNEL,
      section: (0, R.s4)(e),
      object: ea.qAy.EMOJI_REACTION_PICKER_POPOUT
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
      ey({
        type: "add",
        emoji: i,
        channel: e,
        message: t,
        location: w.TW.MESSAGE_REACTION_PICKER,
        isBurst: a
      }), l && (a ? s()(n, 150)() : n())
    },
    analyticsOverride: l,
    messageId: t.id
  })
}
let eC = Chunk73800.memo(function(e) {
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
    return n.state === ea.yb.SEND_FAILED ? (0, r.jsx)(eb, {
      channel: t,
      message: n
    }) : null
  }(e), c = function(e) {
    let {
      message: t
    } = e;
    return t.state !== ea.yb.SEND_FAILED ? (0, r.jsx)(eg, ed({}, e)) : null
  }(e);
  return o || null == s && null == c ? null : (0, r.jsx)("div", {
    className: a()(e.className, {
      [eu.container]: true,
      [eu.isHeader]: i,
      [eu.isReply]: l
    }),
    onClick: eh,
    onContextMenu: eh,
    role: "group",
    "aria-label": ec.intl.string(ec.t.Lv7LxM),
    children: (0, r.jsxs)(en.ZP, {
      className: e.innerClassName,
      children: [s, c]
    })
  })
})