/** Chunk was on 81985 **/
/** chunk id: 773176, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eu
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk954955 = require("./954955.js"),
  s = require.n(Chunk954955),
  Chunk893999 = require("./893999.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk110630 = require("./110630.js"),
  Chunk543241 = require("./543241.js"),
  Chunk633302 = require("./633302.js"),
  Chunk856985 = require("./856985.js"),
  Chunk660189 = require("./660189.js"),
  Chunk868643 = require("./868643.js"),
  Chunk245216 = require("./245216.jsx"),
  Chunk223606 = require("./223606.js"),
  Chunk188597 = require("./188597.js"),
  Chunk41776 = require("./41776.js"),
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
  Chunk185923 = require("./185923.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk84819 = require("./84819.js");

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
let en = [Chunk633302.ZP.getByName("100"), Chunk633302.ZP.getByName("laughing"), Chunk633302.ZP.getByName("sparkling_heart")].filter(Chunk823379.lm);

function er(e) {
  e.stopPropagation()
}

function ei(e) {
  let {
    message: t,
    channel: n,
    canReport: r,
    onClose: i,
    updatePosition: l
  } = e;
  return (0, X.S)({
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
    ariaLabel: $.intl.string($.t.Lv7LxN)
  })
}
let el = Chunk473749.memo(function(e) {
  let {
    channel: t,
    message: n
  } = e, i = (0, g.q5)(t.guild_id).filter(e => !G.ZP.isEmojiFilteredOrLocked({
    emoji: e,
    channel: t,
    intention: J.Hz.REACTION,
    guildId: t.guild_id
  })), l = (i.length >= 3 ? i : [...(0, b.Z)(i.concat(en)).values()]).slice(0, 3), a = n.reactions.filter(e => e.me);
  return (0, r.jsx)(r.Fragment, {
    children: l.map(e => {
      var i;
      let l = a.find(t => (0, S.ir)(t.emoji, (0, S.g1)(e))),
        o = null != l ? $.intl.string($.t.wunKKA) : $.intl.string($.t.XVx5BN),
        s = null == e.id ? e.uniqueName : e.name,
        c = null != l ? $.intl.formatToPlainString($.t.vjeruO, {
          emojiName: s
        }) : $.intl.formatToPlainString($.t.L1JQwE, {
          emojiName: s
        });
      return (0, r.jsx)(K.sF, {
        tooltipText: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(d.Text, {
            variant: "text-sm/medium",
            color: "text-strong",
            className: ee.emojiTooltipText,
            children: ":".concat(e.name, ":")
          }), (0, r.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "text-default",
            className: ee.emojiTooltipText,
            children: o
          })]
        }),
        label: c,
        onClick: () => es({
          type: null != l ? "remove" : "add",
          emoji: e,
          channel: t,
          message: n,
          location: E.TW.MESSAGE_HOVER_BAR
        }),
        children: (0, r.jsx)(p.Z, {
          emojiId: e.id,
          emojiName: null == e.id ? e.surrogates : e.name,
          animated: e.animated,
          size: "reaction",
          alt: "",
          className: ee.emoji,
          canSelect: false
        })
      }, "".concat(null != (i = e.id) ? i : 0, ":").concat(e.name))
    })
  })
});

function ea(e) {
  let {
    channel: t,
    message: n,
    canCopy: l,
    canPin: a,
    canDelete: o,
    canReport: s,
    canEdit: p,
    canPublish: g,
    canReact: m,
    canConfigureJoin: b,
    canReply: j,
    canStartThread: x,
    canViewThread: E,
    canForward: S,
    isExpanded: _,
    showMoreUtilities: w,
    showEmojiPicker: G,
    showMessageBookmarksActions: B,
    isMessageBookmark: X,
    setPopout: J,
    hasDeveloperMode: ee,
    isFocused: en
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
    } = n, p = (0, u.e7)([D.Z], () => D.Z.getGuild(t.guild_id), [t.guild_id]), g = (0, u.e7)([A.default], () => A.default.getId()), m = (0, N.$R)(t), b = (0, N.Gu)(t), {
      firstMessage: O
    } = (0, u.e7)([y.Z], () => y.Z.getMessage(t.id), [t.id]), j = T.nc.useSetting(), x = T.Sb.useSetting(), E = (0, u.e7)([M.Z], () => null == t.guild_id || M.Z.canChatInGuild(t.guild_id), [t]), {
      canManageMessages: S,
      canAddNewReactions: _
    } = (0, u.cj)([k.Z], () => ({
      canAddNewReactions: E && k.Z.can(Q.Plq.ADD_REACTIONS, t),
      canManageMessages: k.Z.can(Q.Plq.MANAGE_MESSAGES, t)
    }), [t, E]), w = (0, I.U)(t, n), L = (0, N.NE)(t, n), G = (0, N.Ek)(n), B = (0, u.e7)([C.Z], () => null != t.guild_id && C.Z.isLurking(t.guild_id), [t]), K = (0, u.e7)([R.ZP], () => null != t.guild_id && R.ZP.isCurrentUserGuest(t.guild_id), [t]), Y = d.id === g, q = (S || n.canDeleteOwnMessage(g)) && m && !Q.V$x.UNDELETABLE.has(n.type);
    n.type === Q.uaV.AUTO_MODERATION_ACTION && (q = q && S), t.isModeratorReportChannel() && (q = q && n.id !== (null == O ? true : O.id) && !(0, z.Z)(n));
    let X = (0, F.a4)(n),
      J = (0, V.Z)(n, t),
      $ = !t.isSystemDM() && (0, H.Z)(n, g) && m && !b,
      {
        disableReactionCreates: ee
      } = (0, W.Z)({
        channel: t,
        canChat: E,
        renderReactions: j,
        canAddNewReactions: _,
        isLurking: B,
        isGuest: K,
        isActiveChannelOrUnarchivableThread: m
      }),
      et = t.type === Q.d4z.GUILD_ANNOUNCEMENT && null != p && p.features.has(Q.GuildFeatures.NEWS) && (Y || S) && (0, h.Z)(n),
      en = t.getGuildId(),
      er = null != en && n.type === Q.uaV.USER_JOIN && k.Z.canWithPartialContext(Q.Plq.MANAGE_GUILD, {
        guildId: en
      }),
      ei = (0, v.a)(n),
      {
        enabled: el
      } = P.Z.useExperiment({
        location: "message_utilities"
      }),
      ea = (0, u.e7)([Z.Z], () => null != Z.Z.getSavedMessage(t.id, n.id)),
      eo = (0, c.Z)(a),
      es = (0, u.e7)([f.Z], () => f.Z.keyboardModeEnabled);
    return {
      channel: t,
      message: n,
      canPin: J,
      canEdit: $,
      canDelete: q,
      canReport: X,
      canReply: w,
      canStartThread: L,
      canViewThread: G,
      canForward: ei,
      canCopy: U.wS,
      hasDeveloperMode: x,
      canReact: !ee && j,
      canPublish: et,
      canConfigureJoin: er,
      isExpanded: eo && !es && !r && !i && !l,
      showEmojiPicker: r,
      showEmojiBurstPicker: i,
      showMoreUtilities: l,
      showMessageBookmarksActions: el,
      isMessageBookmark: ea,
      setPopout: o,
      isFocused: s
    }
  }(e), er = i.useRef(null), ea = i.useCallback(() => {
    w || L.default.track(Q.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
      message_id: n.id,
      channel: n.channel_id,
      location: "expanding_buttons"
    }), J({
      moreUtilities: !w
    })
  }, [w, J, n]), eo = i.useCallback(() => {
    J({
      emojiPicker: !G
    })
  }, [G, J]), es = (0, N.$R)(t), eu = n.hasFlag(Q.iLy.CROSSPOSTED);
  return (0, r.jsxs)(r.Fragment, {
    children: [_ ? (0, r.jsxs)(r.Fragment, {
      children: [l && ee ? (0, r.jsx)(K.sF, {
        label: $.intl.string($.t.zBoHlf),
        icon: d.VuL,
        onClick: e => (0, Y.F4)(t, n, e)
      }, "copy-id") : null, l ? (0, r.jsx)(K.sF, {
        label: $.intl.string($.t.WqhZss),
        icon: d.xPt,
        onClick: () => (0, Y.fB)(t, n)
      }, "copy-link") : null, b ? (0, r.jsx)(K.sF, {
        label: $.intl.string($.t.NpHUi1),
        icon: d.idN,
        onClick: () => (0, Y.zW)(t)
      }, "configure") : null, es ? (0, r.jsx)(K.sF, {
        label: $.intl.string($.t.RpE9k7),
        icon: d.z7b,
        onClick: () => (0, Y.B8)(t, n)
      }, "mark-unread") : null, B ? (0, r.jsx)(K.sF, {
        label: X ? $.intl.string($.t.LHUP9D) : $.intl.string($.t["9p3D9p"]),
        icon: X ? d.plf : d.gt9,
        onClick: () => X ? (0, Y.eM)(t, n) : (0, Y.dF)(t, n)
      }, "bookmark") : null, a ? (0, r.jsx)(K.sF, {
        label: n.pinned ? $.intl.string($.t["Bse+F/"]) : $.intl.string($.t.CvQ18w),
        icon: d.qQX,
        onClick: e => (0, Y.rY)(t, n, e)
      }, "pin") : null, x && S ? (0, r.jsx)(K.sF, {
        label: $.intl.string($.t.rBIGBL),
        icon: d.or_,
        onClick: () => (0, Y.gK)(t, n)
      }, "thread") : null, j && p ? (0, r.jsx)(K.sF, {
        label: $.intl.string($.t["5IEsGx"]),
        icon: d.n$P,
        onClick: e => (0, Y.HH)(t, n, e)
      }, "reply-self") : null]
    }) : null, m ? (0, r.jsxs)(r.Fragment, {
      children: [_ ? null : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(el, {
          channel: t,
          message: n
        }), (0, r.jsx)(K.fO, {})]
      }), (0, r.jsx)(q.Z, {
        togglePopout: eo,
        renderEmojiPicker: ec,
        shouldShow: G,
        isFocused: en,
        channel: t,
        message: n
      })]
    }) : null, j && !p ? (0, r.jsx)(K.sF, {
      label: $.intl.string($.t["5IEsGx"]),
      icon: d.n$P,
      onClick: e => (0, Y.HH)(t, n, e)
    }, "reply-other") : null, p ? (0, r.jsx)(K.sF, {
      label: $.intl.string($.t.bt75uw),
      icon: d.vdY,
      onClick: () => (0, Y.Hd)(t, n)
    }, "edit") : null, S ? (0, r.jsx)(K.sF, {
      label: $.intl.string($.t.I3ltXO),
      icon: O.Z,
      onClick: () => (0, Y.ts)(t, n)
    }, "forward") : null, x && !S ? (0, r.jsx)(K.sF, {
      label: $.intl.string($.t.rBIGBL),
      icon: d.or_,
      onClick: () => (0, Y.gK)(t, n)
    }, "thread") : null, !x && E ? (0, r.jsx)(K.sF, {
      label: $.intl.string($.t["39d0Wj"]),
      icon: d.or_,
      onClick: () => (0, Y.qe)(t, n)
    }, "view-thread") : null, g ? (0, r.jsx)(K.sF, {
      label: eu ? $.intl.string($.t["1kWJAr"]) : $.intl.string($.t.MFGE51),
      icon: d.MqZ,
      onClick: () => (0, Y.Xl)(t, n),
      disabled: eu
    }, "publish") : null, o && _ ? (0, r.jsx)(K.sF, {
      label: $.intl.string($.t.oyYWHE),
      icon: d.XHJ,
      onClick: e => (0, Y.$Z)(t, n, e),
      dangerous: true,
      separator: !_
    }, "delete") : null, _ && o ? null : (0, r.jsx)(d.yRy, {
      targetElementRef: er,
      renderPopout: e => {
        let {
          updatePosition: i,
          closePopout: l
        } = e;
        return (0, r.jsx)(ei, {
          channel: t,
          message: n,
          canReport: s,
          onClose: l,
          updatePosition: i
        })
      },
      shouldShow: w,
      onRequestClose: ea,
      position: "left",
      align: "top",
      animation: d.yRy.Animation.NONE,
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
        return (0, r.jsx)(K.sF, et({
          ref: er,
          label: $.intl.string($.t["UKOtz+"]),
          icon: d.xhG,
          selected: l,
          onClick: ea
        }, i), "more")
      }
    })]
  })
}

function eo(e) {
  let {
    channel: t,
    message: n
  } = e, i = (0, u.e7)([j.Z], () => null != j.Z.getMessage(n.id), [n.id]), l = null == n.interaction || null != n.interactionData && (0, x.$s)(n.interactionData);
  return (0, r.jsxs)(r.Fragment, {
    children: [!i && l && (0, r.jsx)(K.sF, {
      label: $.intl.string($.t["5911Lb"]),
      icon: d.Oe7,
      onClick: () => (0, Y.mG)(t, n)
    }, "retry"), (0, r.jsx)(K.sF, {
      label: $.intl.string($.t.oyYWHE),
      icon: d.XHJ,
      onClick: e => (0, Y.$Z)(t, n, e)
    }, "delete-usent")]
  })
}

function es(e) {
  let {
    type: t,
    emoji: n,
    channel: r,
    message: i,
    location: l,
    isBurst: a = false
  } = e;
  if (null == n) return;
  let o = (0, S.g1)(n);
  "add" === t ? (0, E.rU)(r.id, i.id, o, l, {
    burst: a
  }) : (0, E.WO)({
    channelId: r.id,
    messageId: i.id,
    emoji: o,
    location: l,
    options: {
      burst: a
    }
  })
}

function ec(e, t, n) {
  let i = arguments.length > 3 && true !== arguments[3] && arguments[3],
    l = et({
      openPopoutType: "message_reaction_emoji_picker"
    }, i && {
      openPopoutType: "message_super_reaction_emoji_picker",
      page: null != e.getGuildId() ? Q.ZY5.GUILD_CHANNEL : Q.ZY5.DM_CHANNEL,
      section: (0, S.s4)(e),
      object: Q.qAy.EMOJI_REACTION_PICKER_POPOUT
    });
  return (0, r.jsx)(_.$, {
    channel: e,
    closePopout: n,
    onSelectEmoji: r => {
      let {
        emoji: i,
        willClose: l,
        isBurst: a
      } = r;
      es({
        type: "add",
        emoji: i,
        channel: e,
        message: t,
        location: E.TW.MESSAGE_REACTION_PICKER,
        isBurst: a
      }), l && (a ? s()(n, 150)() : n())
    },
    analyticsOverride: l,
    messageId: t.id
  })
}
let eu = Chunk473749.memo(function(e) {
  let {
    channel: t,
    message: n,
    isHeader: i,
    isReply: l
  } = e, o = (0, u.e7)([w.Z], () => w.Z.isEditing(t.id, n.id), [t.id, n.id]), s = function(e) {
    let {
      channel: t,
      message: n
    } = e;
    return n.state === Q.yb.SEND_FAILED ? (0, r.jsx)(eo, {
      channel: t,
      message: n
    }) : null
  }(e), c = function(e) {
    let {
      message: t
    } = e;
    return t.state !== Q.yb.SEND_FAILED ? (0, r.jsx)(ea, et({}, e)) : null
  }(e);
  return o || null == s && null == c ? null : (0, r.jsx)("div", {
    className: a()(e.className, {
      [ee.container]: true,
      [ee.isHeader]: i,
      [ee.isReply]: l
    }),
    onClick: er,
    onContextMenu: er,
    role: "group",
    "aria-label": $.intl.string($.t.Lv7LxN),
    children: (0, r.jsxs)(K.ZP, {
      className: e.innerClassName,
      children: [s, c]
    })
  })
})