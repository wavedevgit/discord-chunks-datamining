/** Chunk was on 38626 **/
/** chunk id: 287151, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  aO: () => es,
  le: () => eh,
  op: () => ec,
  y4: () => eu
}), require("./388685.js"), require("./781311.js");
var i, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk772848 = require("./772848.js"),
  Chunk748780 = require("./748780.js"),
  Chunk866442 = require("./866442.js"),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk785388 = require("./785388.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk446489 = require("./446489.jsx"),
  Chunk367907 = require("./367907.js"),
  Chunk436774 = require("./436774.jsx"),
  Chunk98474 = require("./98474.jsx"),
  Chunk339085 = require("./339085.js"),
  Chunk906411 = require("./906411.js"),
  Chunk56314 = require("./56314.js"),
  Chunk231053 = require("./231053.js"),
  Chunk944386 = require("./944386.js"),
  Chunk305325 = require("./305325.js"),
  Chunk33154 = require("./33154.jsx"),
  Chunk692147 = require("./692147.jsx"),
  Chunk767714 = require("./767714.jsx"),
  Chunk659215 = require("./659215.jsx"),
  Chunk222677 = require("./222677.js"),
  Chunk995774 = require("./995774.js"),
  Chunk695346 = require("./695346.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk542578 = require("./542578.js"),
  Chunk914010 = require("./914010.js"),
  Chunk594174 = require("./594174.js"),
  Chunk451478 = require("./451478.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk960020 = require("./960020.js"),
  Chunk566006 = require("./566006.js"),
  Chunk886132 = require("./886132.js"),
  Chunk183023 = require("./183023.jsx"),
  Chunk524444 = require("./524444.jsx"),
  Chunk89729 = require("./89729.js"),
  Chunk620652 = require("./620652.jsx"),
  Chunk640753 = require("./640753.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk975900 = require("./975900.js"),
  Chunk127947 = require("./127947.js"),
  Chunk893973 = require("./893973.js"),
  Chunk827610 = require("./827610.js");

function el(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      el(e, t, n[t])
    })
  }
  return e
}

function ea(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let es = 12;

function ec(e, t, n) {
  (0, f.h7j)(e => (0, r.jsx)(b.default, ea(eo({}, e), {
    message: t,
    selectedReaction: n
  })))
}

function eu(e, t, n) {
  return n === F.O.BURST && t || n === F.O.NORMAL && e
}
class ed extends(i = Chunk647438.PureComponent) {
  componentWillAppear(e) {
    this.animateIn(e)
  }
  componentWillEnter(e) {
    this.animateIn(e)
  }
  componentWillUnmount() {
    this.hideTooltip()
  }
  animateIn(e) {
    let {
      autoUnfurlReactionTooltip: t
    } = this.props;
    B.Z.isFocused() ? (this.scale.setValue(0), this.opacity.setValue(0), d.Z.parallel([d.Z.timing(this.scale, {
      toValue: 1,
      duration: t ? 200 : 300,
      easing: d.Z.Easing.inOut(d.Z.Easing.back())
    }), d.Z.timing(this.opacity, {
      toValue: 1,
      duration: t ? 200 : 300
    })]).start(e)) : (this.scale.setValue(1), this.opacity.setValue(1), e())
  }
  render() {
    let e, t, {
        count: n,
        burst_count: i,
        colors: l,
        isBurstReaction: o,
        hideCount: s,
        emoji: c,
        readOnly: u,
        isLurking: p,
        isGuest: m,
        isPendingMember: b,
        className: j,
        useChatFontScaling: y,
        message: v,
        hideEmoji: S,
        animationStartPosition: x,
        emojiSize: E
      } = this.props,
      {
        shouldShowTooltip: R,
        tooltipTextAria: I,
        reactionRef: N,
        tooltipPositionKey: P
      } = this.state,
      w = Chunk367907 ? Chunk893973 : Chunk127947,
      Z = {
        transform: [{
          scale: this.scale
        }],
        opacity: this.opacity
      },
      A = Chunk120356 ? i : require;
    if (Chunk120356 && null != Chunk647438) {
      var _;
      let {
        accentColor: n,
        backgroundColor: i,
        opacity: r
      } = Chunk647438, o = null != (_ = (0, Chunk866442.wK)(null != i ? i : "", Chunk951288)) ? Chunk695346 : "";
      this.isMe() && (Chunk659215.borderColor = i), Chunk659215.background = Chunk120356, e = require, t = require
    }
    let L = null == Chunk305325 ? true : Chunk305325.getBoundingClientRect(),
      k = null != Chunk906411 && null != Chunk592125,
      D = null == Chunk906411;
    return (0, Chunk951288.jsx)(Chunk481060.yRy, {
      targetElementRef: {
        current: Chunk305325
      },
      shouldShow: Chunk231053,
      "aria-label": null != Chunk944386 && Chunk944386,
      renderPopout: this.renderTooltip,
      nudgeAlignIntoViewport: true,
      position: "top",
      align: "center",
      positionKey: Chunk33154,
      children: () => (0, Chunk951288.jsx)("div", {
        onMouseEnter: this.handleEnter,
        onMouseLeave: this.handleLeave,
        ref: this.handleSetReactionRef,
        children: (0, Chunk951288.jsx)(Chunk748780.Z.div, {
          className: a()(Chunk767714.reaction, Chunk607070, {
            [Chunk767714.reactionMe]: this.isMe(),
            [Chunk767714.reactionReadOnly]: Chunk772848 && !Chunk442837 && !Chunk785388 && !Chunk846519,
            [Chunk767714.shakeReaction]: Chunk339085 && null == Chunk906411
          }),
          style: Chunk659215,
          children: (0, Chunk951288.jsx)(Chunk481060.yRy, {
            targetElementRef: this.upsellPopoutTargetRef,
            renderPopout: this.renderLurkerModeUpsellPopout,
            position: "top",
            children: n => (0, r.jsxs)(f.P3F, ea(eo({}, n), {
              innerRef: this.upsellPopoutTargetRef,
              className: w.reactionInner,
              onClick: this.handleClick,
              "aria-disabled": u,
              "aria-label": (0, M.iD)(this.isMe(), A, c, o),
              "aria-pressed": this.isMe(),
              children: [(0, r.jsx)("div", {
                className: a()({
                  [w.burstGlow]: o
                }),
                style: {
                  boxShadow: "0 0 16px ".concat(t)
                }
              }), (0, r.jsxs)("div", {
                children: [o ? (0, r.jsxs)(r.Fragment, {
                  children: [k && (0, r.jsx)(T.Z, {
                    messageId: v.id,
                    emoji: c,
                    startPosition: x,
                    targetPosition: L
                  }), D && (0, r.jsx)(q.Z, {
                    count: i,
                    emoji: c,
                    channelId: v.getChannelId(),
                    messageId: v.id,
                    useChatFontScaling: y,
                    color: t,
                    emojiSize: Y.M.NORMAL
                  })]
                }) : null, (0, r.jsx)(g.Z, {
                  className: a()({
                    [w.hideEmoji]: S
                  }),
                  emojiId: c.id,
                  emojiName: c.name,
                  size: E,
                  animated: c.animated
                })]
              }), s ? null : (0, r.jsx)(O.Z, {
                className: w.reactionCount,
                value: A,
                color: e,
                digitWidth: es
              }), (0, r.jsx)(C.Z, {
                count: A,
                reactionRef: N
              })]
            }))
          })
        })
      })
    })
  }
  constructor(...e) {
    super(...e), el(this, "isReactionEventActive", false), el(this, "isKeyboardNavigation", false), el(this, "scale", new d.Z.Value(1)), el(this, "opacity", new d.Z.Value(1)), el(this, "timeout", new m.V7), el(this, "hideTimeout", new m.V7), el(this, "ctaRef", l.createRef()), el(this, "type", F.O.NORMAL), el(this, "colors", {
      backgroundColor: true,
      borderColor: true,
      textColor: true
    }), el(this, "state", {
      shouldShowTooltip: false,
      tooltipText: null,
      tooltipTextAria: null,
      reactionRef: null,
      tooltipPositionKey: true
    }), el(this, "hasShownTooltip", false), el(this, "nonce", (0, u.Z)()), el(this, "upsellPopoutTargetRef", l.createRef()), el(this, "userCanBurstReact", () => this.props.userHasPremium), el(this, "handleClick", e => {
      e.stopPropagation();
      let {
        message: t,
        emoji: n,
        readOnly: i,
        isBurstReaction: r,
        isPendingMember: l,
        isLurking: o,
        isGuest: a,
        isForumToolbar: s
      } = this.props, c = L.Z.getChannel(t.getChannelId());
      if (o || a) {
        var u, d;
        null == (d = this.ctaRef) || null == (u = d.current) || u.focus();
        return
      }
      let h = t.getChannelId(),
        p = s ? A.TW.FORUM_TOOLBAR : A.TW.MESSAGE_INLINE_BUTTON;
      if (r && !this.userCanBurstReact()) return void(0, Z.m)({
        analytics: {
          type: Q.cd.BURST_REACTION_UPSELL,
          page: (null == c ? true : c.getGuildId()) != null ? $.ZY5.GUILD_CHANNEL : $.ZY5.DM_CHANNEL,
          section: null != c ? (0, M.s4)(c) : true,
          object: $.qAy.EMOJI_REACTION_UPSELL
        }
      });
      l ? this.handleShowVerificationGate() : i || (this.isMe() ? (0, A.WO)({
        channelId: h,
        messageId: t.id,
        emoji: n,
        location: p,
        options: {
          burst: r
        }
      }) : (0, A.rU)(h, t.id, n, p, {
        burst: r
      }))
    }), el(this, "handleEnter", e => {
      let {
        emoji: t,
        message: n,
        type: i,
        reduceMotion: r,
        animateEmoji: l,
        autoUnfurlReactionTooltip: o
      } = this.props, a = i === F.O.BURST;
      a && !this.isReactionEventActive && !r && l && (0, A.T6)({
        channelId: n.getChannelId(),
        messageId: n.id,
        emoji: t,
        key: W.I.HOVER
      }), this.isReactionEventActive = true, this.isKeyboardNavigation = "focus" === e.type, this.timeout.start(a ? 750 : o ? 200 : 500, this.showTooltip, false)
    }), el(this, "handleEnterTooltip", () => {
      this.isReactionEventActive = true, this.handleShowTooltip()
    }), el(this, "handleShowTooltip", () => {
      this.hideTimeout.stop(), this.isReactionEventActive && (this.updateTooltipText(), D.Z.addChangeListener(this.updateTooltipText))
    }), el(this, "showTooltip", () => {
      this.props.readOnly || (this.handleShowTooltip(), this.isReactionEventActive && this.trackReactionTooltipViewed(), this.hasShownTooltip = true)
    }), el(this, "handleLeave", () => {
      this.isReactionEventActive = false, this.isKeyboardNavigation = false, this.timeout.stop(), D.Z.removeChangeListener(this.updateTooltipText), this.hideTimeout.start(200, this.hideTooltip, false)
    }), el(this, "hideTooltip", () => {
      this.setState({
        shouldShowTooltip: false
      }), this.hasShownTooltip && G.default.track($.rMx.CLOSE_POPOUT, {
        nonce: this.nonce
      })
    }), el(this, "isMe", () => {
      let {
        me: e,
        me_burst: t,
        type: n
      } = this.props;
      return eu(e, t, n)
    }), el(this, "updateTooltipText", () => {
      let {
        message: e,
        emoji: t,
        type: n
      } = this.props, i = (0, X.g)(e, t, n), r = this.isKeyboardNavigation ? i : (0, X.g)(e, t, n, $.dG4);
      c()("string" == typeof i, "tooltipTextAria is not a string"), this.setState({
        tooltipText: r,
        tooltipTextAria: i,
        shouldShowTooltip: null != r && "" !== r
      })
    }), el(this, "renderLurkerModeUpsellPopout", e => {
      let {
        closePopout: t
      } = e, {
        message: n,
        isLurking: i
      } = this.props, l = L.Z.getChannel(n.getChannelId()), o = k.Z.getGuild(null == l ? true : l.getGuildId());
      return i && null != o ? (0, r.jsx)(P.Z, {
        ctaRef: this.ctaRef,
        type: P.s.REACTIONS,
        guild: o,
        closePopout: t
      }) : (0, r.jsx)(r.Fragment, {})
    }), el(this, "renderEmojiDetails", () => {
      let e = this.props.emoji;
      return null != e.id && (0, r.jsx)(em, {
        emojiId: e.id,
        refreshPositionKey: this.refreshTooltipPositionKey,
        onClose: this.handleLeave,
        nonce: this.nonce
      })
    }), el(this, "renderTooltip", () => {
      let {
        emoji: e,
        message: t,
        type: n,
        me_burst: i,
        isBurstReaction: l = false
      } = this.props, {
        tooltipText: o,
        tooltipTextAria: s
      } = this.state, c = n => {
        let i = L.Z.getChannel(t.getChannelId());
        null != i && (this.handleLeave(), ec(i, t, {
          emoji: e,
          reactionType: l ? F.O.BURST : F.O.NORMAL
        }))
      }, u = "string" == typeof o ? "" === o.trim() : null == o, d = () => u || null == o || null == s ? null : (0, r.jsx)(f.Text, {
        variant: "text-sm/normal",
        className: er.reactionTooltipText,
        "aria-label": s,
        children: o
      }), h = () => {
        let e = V.default.getCurrentUser();
        return i ? (0, r.jsxs)("div", {
          className: a()(er.burstReactionTooltipPrompt, er.burstReactionTooltipSpacer),
          children: [(0, H.I5)(e) && (0, r.jsx)(f.SrA, {
            size: "md",
            className: er.burstReactionTooltipNitroIcon,
            color: v.JX.PREMIUM_TIER_2
          }), (0, r.jsx)(f.Text, {
            variant: "text-sm/normal",
            className: er.reactionTooltipText,
            "aria-label": "super reaction tooltip cta",
            children: ee.intl.string(ee.t.ZbNJXl)
          })]
        }) : this.userCanBurstReact() ? (0, r.jsxs)("div", {
          className: a()(er.burstReactionTooltipPrompt, er.burstReactionTooltipSpacer, er.burstReactionTooltipPromptClickable),
          children: [(0, r.jsx)(f.SrA, {
            size: "md",
            className: er.burstReactionTooltipNitroIcon,
            color: v.JX.PREMIUM_TIER_2
          }), (0, r.jsx)(f.P3F, {
            onClick: this.handleClick,
            children: (0, r.jsx)(f.Text, {
              variant: "text-sm/normal",
              className: er.reactionTooltipText,
              "aria-label": "super reaction tooltip cta",
              children: ee.intl.string(ee.t.kVfuVl)
            })
          })]
        }) : this.userCanBurstReact() || this.isKeyboardNavigation ? null : (0, r.jsx)("div", {
          className: a()(er.burstReactionTooltipPrompt, er.burstReactionTooltipSpacer),
          children: (0, r.jsxs)("div", {
            children: [(0, r.jsx)(f.Text, {
              variant: "text-sm/normal",
              "aria-label": "super reaction tooltip upsell",
              children: ee.intl.string(ee.t.W1bMkp)
            }), (0, r.jsx)(w.Z, {
              subscriptionTier: Q.Si.TIER_2,
              textOptions: {
                textOverride: ee.intl.string(ee.t.mr4K7O)
              },
              className: er.burstReactionTooltipUpsellCta,
              onClick: e => e.stopPropagation()
            })]
          })
        })
      };
      return n === F.O.BURST ? (0, r.jsxs)("div", {
        className: er.reactionTooltip,
        onMouseEnter: this.handleEnterTooltip,
        onMouseLeave: this.handleLeave,
        children: [(0, r.jsx)(f.P3F, {
          className: er.burstReactionTooltipInner,
          onClick: c,
          children: (0, r.jsxs)("div", {
            className: er.burstReactionTooltipMessage,
            children: [(0, r.jsx)(g.Z, {
              className: er.reactionTooltipEmoji,
              emojiId: e.id,
              emojiName: e.name,
              animated: e.animated,
              size: this.props.emojiSizeTooltip
            }), d()]
          })
        }), h(), this.renderEmojiDetails()]
      }) : (0, r.jsxs)("div", {
        className: er.reactionTooltip,
        onMouseEnter: this.handleEnterTooltip,
        onMouseLeave: this.handleLeave,
        children: [(0, r.jsx)(f.P3F, {
          onClick: c,
          children: (0, r.jsxs)("div", {
            className: er.reactionTooltipInner,
            children: [(0, r.jsx)(g.Z, {
              className: er.reactionTooltipEmoji,
              emojiId: e.id,
              emojiName: e.name,
              animated: e.animated,
              size: this.props.emojiSizeTooltip
            }), d()]
          })
        }), this.renderEmojiDetails()]
      })
    }), el(this, "refreshTooltipPositionKey", () => {
      this.setState({
        tooltipPositionKey: String(Date.now())
      })
    }), el(this, "handleShowVerificationGate", () => {
      let {
        message: e,
        isPendingMember: t
      } = this.props;
      if (!t) return null;
      let n = L.Z.getChannel(e.getChannelId()),
        i = k.Z.getGuild(null == n ? true : n.getGuildId());
      null != i && (0, N.hk)(i.id)
    }), el(this, "handleSetReactionRef", e => {
      this.setState({
        reactionRef: e
      })
    }), el(this, "trackReactionTooltipViewed", () => {
      let {
        emoji: e,
        message: t,
        type: n
      } = this.props, i = V.default.getCurrentUser(), r = L.Z.getChannel(t.getChannelId()), l = n === F.O.BURST, o = (0, H.I5)(i), a = l ? Q.cd.EMOJI_IN_BURST_REACTION_HOVER : Q.cd.EMOJI_IN_REACTION_HOVER;
      !l || this.userCanBurstReact() || o || (a = Q.cd.EMOJI_IN_BURST_REACTION_HOVER_UPSELL), y.ZP.trackWithMetadata($.rMx.EXPRESSION_TOOLTIP_VIEWED, {
        type: a,
        expression_id: e.id,
        expression_name: e.name,
        is_animated: e.animated,
        is_custom: null != e.id,
        nonce: this.nonce
      }), !l || null == r || o || this.userCanBurstReact() || G.default.track($.rMx.PREMIUM_UPSELL_VIEWED, {
        type: Q.cd.BURST_REACTION_UPSELL,
        location: {
          page: (null == r ? true : r.getGuildId()) != null ? $.ZY5.GUILD_CHANNEL : $.ZY5.DM_CHANNEL,
          section: (0, M.s4)(r),
          object: $.qAy.EMOJI_REACTION_TOOLTIP_UPSELL
        }
      })
    })
  }
}
el(ed, "defaultProps", {
  emojiSizeTooltip: "jumbo"
});
let eh = Chunk647438.memo(e => {
    let {
      type: t,
      burst_colors: n,
      message: i,
      emoji: l
    } = e, o = t === F.O.BURST, a = (0, E.v)(o && null != n ? n : []), s = (0, p.e7)([W.Z], () => true !== W.Z.getEffectForEmojiId(i.getChannelId(), i.id, l)), c = (0, p.e7)([j.Z], () => j.Z.useReducedMotion), u = _.Yk.useSetting(), d = V.default.getCurrentUser(), h = (0, H.I5)(d), m = (0, p.e7)([W.Z], () => W.Z.getReactionPickerAnimation(i.id, l.name, l.id)), f = o && (s || null != m);
    return (0, r.jsx)(ed, ea(eo({}, e), {
      colors: a,
      isBurstReaction: o,
      hideEmoji: f,
      userHasPremium: h,
      reduceMotion: c,
      animateEmoji: u,
      animationStartPosition: m
    }))
  }),
  ep = e => {
    var t, n, i;
    let {
      emojiId: l,
      expressionSourceGuild: o,
      hasJoinedExpressionSourceGuild: a,
      onClose: s,
      popoutData: c,
      currentGuildId: u,
      nonce: d
    } = e;
    (0, I.u)({
      emojiId: l,
      currentGuildId: u,
      popoutData: c,
      emojiSourceGuildId: null == o ? true : o.id,
      nonce: d
    });
    let h = null != (n = null == o ? true : o.isDiscoverable()) && n,
      p = null != o && h,
      m = (null != (i = null == o || null == (t = o.emojis) ? true : t.length) ? i : 0) > 1;
    return p ? null == o ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: et.reactionEmojiDetailsUnfurlGuildDetails,
        children: (0, r.jsx)(K.Oe, {
          expressionSourceGuild: o,
          hasJoinedExpressionSourceGuild: a,
          isDisplayingJoinGuildButtonInPopout: c.type === z.$.JOIN_GUILD
        })
      }), m && (0, r.jsx)(K.n_, {
        emojiId: l,
        expressionSourceGuild: o,
        hasJoinedEmojiSourceGuild: a,
        onClose: s,
        popoutData: c,
        isDisplayingButtonInTopSection: false
      })]
    }) : (0, r.jsx)(f.Text, {
      variant: "text-sm/normal",
      "aria-label": c.type,
      children: c.emojiDescription
    })
  },
  em = e => {
    var t;
    let {
      emojiId: n,
      refreshPositionKey: i,
      onClose: o,
      nonce: s
    } = e, {
      joinedEmojiSourceGuild: c
    } = (0, p.cj)([S.ZP, k.Z], () => {
      let e = S.ZP.getCustomEmojiById(n);
      return {
        joinedEmojiSourceGuild: (null == e ? true : e.type) === x.B.GUILD ? k.Z.getGuild(null == e ? true : e.guildId) : true
      }
    }), [u, d] = l.useState(true), [h, m] = l.useState(true), [g, b] = l.useState(null), [j, O] = l.useState(false), [y, v] = l.useState(false), [T, E] = l.useState(false), I = null != c, N = null != (t = null == u ? true : u.isDiscoverable()) && t, P = U.Z.getGuildId(), C = null != P && (P === (null == u ? true : u.id) || P === (null == c ? true : c.id)), w = V.default.getCurrentUser(), Z = (0, z.a)({
      sourceType: g,
      expressionSourceApplication: null != h ? h : null,
      isPremium: H.ZP.isPremium(w),
      hasJoinedEmojiSourceGuild: I,
      isDiscoverable: N,
      emojiComesFromCurrentGuild: C,
      isUnusableRoleSubscriptionEmoji: false,
      userIsRoleSubscriber: false,
      isRoleSubscriptionEmoji: false,
      shouldHideRoleSubscriptionCTA: false
    });
    if (l.useEffect(() => {
        j && !T && (async () => {
          i(), v(true);
          let e = null != n ? await (0, R.Fi)(n) : null;
          if (null != e) switch (b(e.type), e.type) {
            case R.w6.APPLICATION:
              m(e.application);
              break;
            case R.w6.GUILD:
              d(e.guild)
          } else d(null);
          v(false), E(true), i()
        })()
      }, [n, j, T, i]), I) return null;
    let A = () => {
        O(!j)
      },
      M = j && (true !== u || true !== h);
    return (0, r.jsxs)("div", {
      children: [M ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: et.reactionEmojiDetailsDivider
        }), null != Z.emojiDescription && Z.type !== z.$.UNAVAILABLE && (0, r.jsx)(f.Text, {
          variant: "text-sm/normal",
          "aria-label": Z.type,
          children: Z.emojiDescription
        })]
      }) : (() => {
        let e = ee.intl.string(ee.t["Igv+LS"]);
        return (0, r.jsxs)(f.P3F, {
          onClick: A,
          className: et.reactionEmojiDetailsClickable,
          children: [(0, r.jsx)(f.Text, {
            variant: "text-sm/normal",
            color: "none",
            "aria-label": e,
            children: e
          }), (0, r.jsx)(f.CJ0, {
            size: "xs",
            color: "currentColor",
            className: a()(et.reactionEmojiDetailsArrow, {
              [et.reactionEmojiDetailsArrowCollapsed]: !j
            })
          })]
        })
      })(), y ? (0, r.jsx)(J.SE, {
        className: et.emojiDetailsLoader
      }) : M && (0, r.jsx)(ep, {
        emojiId: n,
        expressionSourceGuild: u,
        hasJoinedExpressionSourceGuild: I,
        onClose: o,
        popoutData: Z,
        currentGuildId: P,
        nonce: s
      })]
    })
  }