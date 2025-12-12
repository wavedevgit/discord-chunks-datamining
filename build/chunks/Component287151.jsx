/** Chunk was on web.js **/
/** chunk id: 287151, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  aO: () => ec,
  le: () => eg,
  op: () => e_,
  y4: () => em
}), require("./388685.js"), require("./781311.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk772848 = require("./772848.js"),
  Chunk748780 = require("./748780.js"),
  Chunk866442 = require("./866442.js"),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
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
  Chunk6839 = require("./6839.jsx"),
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

function eo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ea(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eo(e, t, n[t])
    })
  }
  return e
}

function es(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function el(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : es(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let ec = 12,
  eu = 200,
  ed = 300,
  ef = 500,
  ep = 750;

function e_(e, t, n) {
  (0, m.h7j)(e => (0, i.jsx)(L.default, el(ea({}, e), {
    message: t,
    selectedReaction: n
  })))
}

function em(e, t, n) {
  return n === Y.O.BURST && t || n === Y.O.NORMAL && e
}
class eh extends(r = Chunk473749.PureComponent) {
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
    F.Z.isFocused() ? (this.scale.setValue(0), this.opacity.setValue(0), d.Z.parallel([d.Z.timing(this.scale, {
      toValue: 1,
      duration: t ? eu : ed,
      easing: d.Z.Easing.inOut(d.Z.Easing.back())
    }), d.Z.timing(this.opacity, {
      toValue: 1,
      duration: t ? eu : ed
    })]).start(e)) : (this.scale.setValue(1), this.opacity.setValue(1), e())
  }
  render() {
    let e, t, {
        count: n,
        burst_count: r,
        colors: o,
        isBurstReaction: a,
        hideCount: l,
        emoji: c,
        readOnly: u,
        isLurking: p,
        isGuest: _,
        isPendingMember: g,
        className: b,
        useChatFontScaling: y,
        message: v,
        hideEmoji: S,
        animationStartPosition: I,
        emojiSize: T
      } = this.props,
      {
        shouldShowTooltip: C,
        tooltipTextAria: A,
        reactionRef: N,
        tooltipPositionKey: R
      } = this.state,
      w = Chunk436774 ? Chunk893973 : Chunk127947,
      D = {
        transform: [{
          scale: this.scale
        }],
        opacity: this.opacity
      },
      L = Chunk120356 ? r : require;
    if (Chunk120356 && null != Chunk473749) {
      var j;
      let {
        accentColor: n,
        backgroundColor: r,
        opacity: i
      } = Chunk473749, a = null != (j = (0, Chunk866442.wK)(null != r ? r : "", Chunk54381)) ? Chunk695346 : "";
      this.isMe() && (Chunk222677.borderColor = r), Chunk222677.background = Chunk120356, e = require, t = require
    }
    let M = null == Chunk33154 ? true : Chunk33154.getBoundingClientRect(),
      k = null != Chunk56314 && null != Chunk592125,
      U = null == Chunk56314;
    return (0, Chunk54381.jsx)(Chunk481060.yRy, {
      targetElementRef: {
        current: Chunk33154
      },
      shouldShow: Chunk944386,
      "aria-label": null != Chunk305325 && Chunk305325,
      renderPopout: this.renderTooltip,
      nudgeAlignIntoViewport: true,
      position: "top",
      align: "center",
      positionKey: Chunk767714,
      children: () => (0, Chunk54381.jsx)("div", {
        onMouseEnter: this.handleEnter,
        onMouseLeave: this.handleLeave,
        ref: this.handleSetReactionRef,
        children: (0, Chunk54381.jsx)(Chunk748780.Z.div, {
          className: s()(Chunk659215.reaction, Chunk367907, {
            [Chunk659215.reactionMe]: this.isMe(),
            [Chunk659215.reactionReadOnly]: Chunk772848 && !Chunk442837 && !Chunk607070 && !Chunk846519,
            [Chunk659215.shakeReaction]: Chunk906411 && null == Chunk56314
          }),
          style: Chunk222677,
          children: (0, Chunk54381.jsx)(Chunk481060.yRy, {
            targetElementRef: this.upsellPopoutTargetRef,
            renderPopout: this.renderLurkerModeUpsellPopout,
            position: "top",
            children: n => (0, i.jsxs)(m.P3F, el(ea({}, n), {
              innerRef: this.upsellPopoutTargetRef,
              className: w.reactionInner,
              onClick: this.handleClick,
              "aria-disabled": u,
              "aria-label": (0, x.iD)(this.isMe(), L, c, a),
              "aria-pressed": this.isMe(),
              children: [(0, i.jsx)("div", {
                className: s()({
                  [w.burstGlow]: a
                }),
                style: {
                  boxShadow: "0 0 16px ".concat(t)
                }
              }), (0, i.jsxs)("div", {
                children: [a ? (0, i.jsxs)(i.Fragment, {
                  children: [k && (0, i.jsx)(O.Z, {
                    messageId: v.id,
                    emoji: c,
                    startPosition: I,
                    targetPosition: M
                  }), U && (0, i.jsx)(X.Z, {
                    count: r,
                    emoji: c,
                    channelId: v.getChannelId(),
                    messageId: v.id,
                    useChatFontScaling: y,
                    color: t,
                    emojiSize: Q.M.NORMAL
                  })]
                }) : null, (0, i.jsx)(h.Z, {
                  className: s()({
                    [w.hideEmoji]: S
                  }),
                  emojiId: c.id,
                  emojiName: c.name,
                  size: T,
                  animated: c.animated
                })]
              }), l ? null : (0, i.jsx)(E.Z, {
                className: w.reactionCount,
                value: L,
                color: e,
                digitWidth: ec
              }), (0, i.jsx)(P.Z, {
                count: L,
                reactionRef: N
              })]
            }))
          })
        })
      })
    })
  }
  constructor(...e) {
    super(...e), eo(this, "isReactionEventActive", false), eo(this, "isKeyboardNavigation", false), eo(this, "scale", new d.Z.Value(1)), eo(this, "opacity", new d.Z.Value(1)), eo(this, "timeout", new _.V7), eo(this, "hideTimeout", new _.V7), eo(this, "ctaRef", o.createRef()), eo(this, "type", Y.O.NORMAL), eo(this, "colors", {
      backgroundColor: true,
      borderColor: true,
      textColor: true
    }), eo(this, "state", {
      shouldShowTooltip: false,
      tooltipText: null,
      tooltipTextAria: null,
      reactionRef: null,
      tooltipPositionKey: true
    }), eo(this, "hasShownTooltip", false), eo(this, "nonce", (0, u.Z)()), eo(this, "upsellPopoutTargetRef", o.createRef()), eo(this, "userCanBurstReact", () => this.props.userHasPremium), eo(this, "handleClick", e => {
      e.stopPropagation();
      let {
        message: t,
        emoji: n,
        readOnly: r,
        isBurstReaction: i,
        isPendingMember: o,
        isLurking: a,
        isGuest: s,
        isForumToolbar: l
      } = this.props, c = M.Z.getChannel(t.getChannelId());
      if (a || s) {
        var u, d;
        null == (d = this.ctaRef) || null == (u = d.current) || u.focus();
        return
      }
      let f = t.getChannelId(),
        p = l ? D.TW.FORUM_TOOLBAR : D.TW.MESSAGE_INLINE_BUTTON;
      if (i && !this.userCanBurstReact()) return void(0, w.m)({
        analytics: {
          type: $.cd.BURST_REACTION_UPSELL,
          page: (null == c ? true : c.getGuildId()) != null ? J.ZY5.GUILD_CHANNEL : J.ZY5.DM_CHANNEL,
          section: null != c ? (0, x.s4)(c) : true,
          object: J.qAy.EMOJI_REACTION_UPSELL
        }
      });
      o ? this.handleShowVerificationGate() : r || (this.isMe() ? (0, D.WO)({
        channelId: f,
        messageId: t.id,
        emoji: n,
        location: p,
        options: {
          burst: i
        }
      }) : (0, D.rU)(f, t.id, n, p, {
        burst: i
      }))
    }), eo(this, "handleEnter", e => {
      let {
        emoji: t,
        message: n,
        type: r,
        reduceMotion: i,
        animateEmoji: o,
        autoUnfurlReactionTooltip: a
      } = this.props, s = r === Y.O.BURST;
      s && !this.isReactionEventActive && !i && o && (0, D.T6)({
        channelId: n.getChannelId(),
        messageId: n.id,
        emoji: t,
        key: H.I.HOVER
      }), this.isReactionEventActive = true, this.isKeyboardNavigation = "focus" === e.type, this.timeout.start(s ? ep : a ? eu : ef, this.showTooltip, false)
    }), eo(this, "handleEnterTooltip", () => {
      this.isReactionEventActive = true, this.handleShowTooltip()
    }), eo(this, "handleShowTooltip", () => {
      this.hideTimeout.stop(), this.isReactionEventActive && (this.updateTooltipText(), U.Z.addChangeListener(this.updateTooltipText))
    }), eo(this, "showTooltip", () => {
      this.props.readOnly || (this.handleShowTooltip(), this.isReactionEventActive && this.trackReactionTooltipViewed(), this.hasShownTooltip = true)
    }), eo(this, "handleLeave", () => {
      this.isReactionEventActive = false, this.isKeyboardNavigation = false, this.timeout.stop(), U.Z.removeChangeListener(this.updateTooltipText), this.hideTimeout.start(200, this.hideTooltip, false)
    }), eo(this, "hideTooltip", () => {
      this.setState({
        shouldShowTooltip: false
      }), this.hasShownTooltip && B.default.track(J.rMx.CLOSE_POPOUT, {
        nonce: this.nonce
      })
    }), eo(this, "isMe", () => {
      let {
        me: e,
        me_burst: t,
        type: n
      } = this.props;
      return em(e, t, n)
    }), eo(this, "updateTooltipText", () => {
      let {
        message: e,
        emoji: t,
        type: n
      } = this.props, r = (0, q.g)(e, t, n), i = this.isKeyboardNavigation ? r : (0, q.g)(e, t, n, J.dG4);
      c()("string" == typeof r, "tooltipTextAria is not a string"), this.setState({
        tooltipText: i,
        tooltipTextAria: r,
        shouldShowTooltip: null != i && "" !== i
      })
    }), eo(this, "renderLurkerModeUpsellPopout", e => {
      let {
        closePopout: t
      } = e, {
        message: n,
        isLurking: r
      } = this.props, o = M.Z.getChannel(n.getChannelId()), a = k.Z.getGuild(null == o ? true : o.getGuildId());
      return r && null != a ? (0, i.jsx)(N.Z, {
        ctaRef: this.ctaRef,
        type: N.s.REACTIONS,
        guild: a,
        closePopout: t
      }) : (0, i.jsx)(i.Fragment, {})
    }), eo(this, "renderEmojiDetails", () => {
      let e = this.props.emoji;
      return null != e.id && (0, i.jsx)(eb, {
        emojiId: e.id,
        refreshPositionKey: this.refreshTooltipPositionKey,
        onClose: this.handleLeave,
        nonce: this.nonce
      })
    }), eo(this, "renderTooltip", () => {
      let {
        emoji: e,
        message: t,
        type: n,
        me_burst: r,
        isBurstReaction: o = false
      } = this.props, {
        tooltipText: a,
        tooltipTextAria: l
      } = this.state, c = n => {
        let r = M.Z.getChannel(t.getChannelId());
        null != r && (this.handleLeave(), e_(r, t, {
          emoji: e,
          reactionType: o ? Y.O.BURST : Y.O.NORMAL
        }))
      }, u = "string" == typeof a ? "" === a.trim() : null == a, d = () => u || null == a || null == l ? null : (0, i.jsx)(m.Text, {
        variant: "text-sm/normal",
        className: ei.reactionTooltipText,
        "aria-label": l,
        children: a
      }), f = () => {
        let e = Z.default.getCurrentUser();
        return r ? (0, i.jsxs)("div", {
          className: s()(ei.burstReactionTooltipPrompt, ei.burstReactionTooltipSpacer),
          children: [(0, V.I5)(e) && (0, i.jsx)(m.SrA, {
            size: "md",
            className: ei.burstReactionTooltipNitroIcon,
            color: y.JX.PREMIUM_TIER_2
          }), (0, i.jsx)(m.Text, {
            variant: "text-sm/normal",
            className: ei.reactionTooltipText,
            "aria-label": "super reaction tooltip cta",
            children: ee.intl.string(ee.t.ZbNJXn)
          })]
        }) : this.userCanBurstReact() ? (0, i.jsxs)("div", {
          className: s()(ei.burstReactionTooltipPrompt, ei.burstReactionTooltipSpacer, ei.burstReactionTooltipPromptClickable),
          children: [(0, i.jsx)(m.SrA, {
            size: "md",
            className: ei.burstReactionTooltipNitroIcon,
            color: y.JX.PREMIUM_TIER_2
          }), (0, i.jsx)(m.P3F, {
            onClick: this.handleClick,
            children: (0, i.jsx)(m.Text, {
              variant: "text-sm/normal",
              className: ei.reactionTooltipText,
              "aria-label": "super reaction tooltip cta",
              children: ee.intl.string(ee.t.kVfuVu)
            })
          })]
        }) : this.userCanBurstReact() || this.isKeyboardNavigation ? null : (0, i.jsx)("div", {
          className: s()(ei.burstReactionTooltipPrompt, ei.burstReactionTooltipSpacer),
          children: (0, i.jsxs)("div", {
            children: [(0, i.jsx)(m.Text, {
              variant: "text-sm/normal",
              "aria-label": "super reaction tooltip upsell",
              children: ee.intl.string(ee.t.W1bMkq)
            }), (0, i.jsx)(R.Z, {
              subscriptionTier: $.Si.TIER_2,
              textOptions: {
                textOverride: ee.intl.string(ee.t.mr4K7D)
              },
              className: ei.burstReactionTooltipUpsellCta,
              onClick: e => e.stopPropagation()
            })]
          })
        })
      };
      return n === Y.O.BURST ? (0, i.jsxs)("div", {
        className: ei.reactionTooltip,
        onMouseEnter: this.handleEnterTooltip,
        onMouseLeave: this.handleLeave,
        children: [(0, i.jsx)(m.P3F, {
          className: ei.burstReactionTooltipInner,
          onClick: c,
          children: (0, i.jsxs)("div", {
            className: ei.burstReactionTooltipMessage,
            children: [(0, i.jsx)(h.Z, {
              className: ei.reactionTooltipEmoji,
              emojiId: e.id,
              emojiName: e.name,
              animated: e.animated,
              size: this.props.emojiSizeTooltip
            }), d()]
          })
        }), f(), this.renderEmojiDetails()]
      }) : (0, i.jsxs)("div", {
        className: ei.reactionTooltip,
        onMouseEnter: this.handleEnterTooltip,
        onMouseLeave: this.handleLeave,
        children: [(0, i.jsx)(m.P3F, {
          onClick: c,
          children: (0, i.jsxs)("div", {
            className: ei.reactionTooltipInner,
            children: [(0, i.jsx)(h.Z, {
              className: ei.reactionTooltipEmoji,
              emojiId: e.id,
              emojiName: e.name,
              animated: e.animated,
              size: this.props.emojiSizeTooltip
            }), d()]
          })
        }), this.renderEmojiDetails()]
      })
    }), eo(this, "refreshTooltipPositionKey", () => {
      this.setState({
        tooltipPositionKey: String(Date.now())
      })
    }), eo(this, "handleShowVerificationGate", () => {
      let {
        message: e,
        isPendingMember: t
      } = this.props;
      if (!t) return null;
      let n = M.Z.getChannel(e.getChannelId()),
        r = k.Z.getGuild(null == n ? true : n.getGuildId());
      null != r && (0, A.hk)(r.id)
    }), eo(this, "handleSetReactionRef", e => {
      this.setState({
        reactionRef: e
      })
    }), eo(this, "trackReactionTooltipViewed", () => {
      let {
        emoji: e,
        message: t,
        type: n
      } = this.props, r = Z.default.getCurrentUser(), i = M.Z.getChannel(t.getChannelId()), o = n === Y.O.BURST, a = (0, V.I5)(r), s = o ? $.cd.EMOJI_IN_BURST_REACTION_HOVER : $.cd.EMOJI_IN_REACTION_HOVER;
      !o || this.userCanBurstReact() || a || (s = $.cd.EMOJI_IN_BURST_REACTION_HOVER_UPSELL), b.ZP.trackWithMetadata(J.rMx.EXPRESSION_TOOLTIP_VIEWED, {
        type: s,
        expression_id: e.id,
        expression_name: e.name,
        is_animated: e.animated,
        is_custom: null != e.id,
        nonce: this.nonce
      }), !o || null == i || a || this.userCanBurstReact() || B.default.track(J.rMx.PREMIUM_UPSELL_VIEWED, {
        type: $.cd.BURST_REACTION_UPSELL,
        location: {
          page: (null == i ? true : i.getGuildId()) != null ? J.ZY5.GUILD_CHANNEL : J.ZY5.DM_CHANNEL,
          section: (0, x.s4)(i),
          object: J.qAy.EMOJI_REACTION_TOOLTIP_UPSELL
        }
      })
    })
  }
}
eo(eh, "defaultProps", {
  emojiSizeTooltip: "jumbo"
});
let eg = Chunk473749.memo(e => {
    let {
      type: t,
      burst_colors: n,
      message: r,
      emoji: o
    } = e, a = t === Y.O.BURST, s = (0, I.v)(a && null != n ? n : []), l = (0, p.e7)([H.Z], () => true !== H.Z.getEffectForEmojiId(r.getChannelId(), r.id, o)), c = (0, p.e7)([g.Z], () => g.Z.useReducedMotion), u = j.Yk.useSetting(), d = Z.default.getCurrentUser(), f = (0, V.I5)(d), _ = (0, p.e7)([H.Z], () => H.Z.getReactionPickerAnimation(r.id, o.name, o.id)), m = a && (l || null != _);
    return (0, i.jsx)(eh, el(ea({}, e), {
      colors: s,
      isBurstReaction: a,
      hideEmoji: m,
      userHasPremium: f,
      reduceMotion: c,
      animateEmoji: u,
      animationStartPosition: _
    }))
  }),
  eE = e => {
    var t, n, r;
    let {
      emojiId: o,
      expressionSourceGuild: a,
      hasJoinedExpressionSourceGuild: s,
      onClose: l,
      popoutData: c,
      currentGuildId: u,
      nonce: d
    } = e;
    (0, C.u)({
      emojiId: o,
      currentGuildId: u,
      popoutData: c,
      emojiSourceGuildId: null == a ? true : a.id,
      nonce: d
    });
    let f = null != (n = null == a ? true : a.isDiscoverable()) && n,
      p = null != a && f,
      _ = (null != (r = null == a || null == (t = a.emojis) ? true : t.length) ? r : 0) > 1,
      h = () => null == a ? null : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          className: et.reactionEmojiDetailsUnfurlGuildDetails,
          children: (0, i.jsx)(K.Oe, {
            expressionSourceGuild: a,
            hasJoinedExpressionSourceGuild: s,
            isDisplayingJoinGuildButtonInPopout: c.type === W.$.JOIN_GUILD
          })
        }), _ && (0, i.jsx)(K.n_, {
          emojiId: o,
          expressionSourceGuild: a,
          hasJoinedEmojiSourceGuild: s,
          onClose: l,
          popoutData: c,
          isDisplayingButtonInTopSection: false
        })]
      });
    return p ? h() : (0, i.jsx)(m.Text, {
      variant: "text-sm/normal",
      "aria-label": c.type,
      children: c.emojiDescription
    })
  },
  eb = e => {
    var t;
    let {
      emojiId: n,
      refreshPositionKey: r,
      onClose: a,
      nonce: l
    } = e, {
      joinedEmojiSourceGuild: c
    } = (0, p.cj)([v.ZP, k.Z], () => {
      let e = v.ZP.getCustomEmojiById(n);
      return {
        joinedEmojiSourceGuild: (null == e ? true : e.type) === S.B.GUILD ? k.Z.getGuild(null == e ? true : e.guildId) : true
      }
    }), [u, d] = o.useState(true), [f, _] = o.useState(true), [h, g] = o.useState(null), [E, b] = o.useState(false), [y, O] = o.useState(false), [I, C] = o.useState(false), A = null != c, N = null != (t = null == u ? true : u.isDiscoverable()) && t, P = G.Z.getGuildId(), R = null != P && (P === (null == u ? true : u.id) || P === (null == c ? true : c.id)), w = Z.default.getCurrentUser(), D = (0, W.a)({
      sourceType: h,
      expressionSourceApplication: null != f ? f : null,
      isPremium: V.ZP.isPremium(w),
      hasJoinedEmojiSourceGuild: A,
      isDiscoverable: N,
      emojiComesFromCurrentGuild: R,
      isUnusableRoleSubscriptionEmoji: false,
      userIsRoleSubscriber: false,
      isRoleSubscriptionEmoji: false,
      shouldHideRoleSubscriptionCTA: false
    });
    if (o.useEffect(() => {
        E && !I && (async () => {
          r(), O(true);
          let e = null != n ? await (0, T.Fi)(n) : null;
          if (null != e) switch (g(e.type), e.type) {
            case T.w6.APPLICATION:
              _(e.application);
              break;
            case T.w6.GUILD:
              d(e.guild)
          } else d(null);
          O(false), C(true), r()
        })()
      }, [n, E, I, r]), A) return null;
    let x = () => {
        b(!E)
      },
      L = () => {
        let e = ee.intl.string(ee.t["Igv+LS"]);
        return (0, i.jsxs)(m.P3F, {
          onClick: x,
          className: et.reactionEmojiDetailsClickable,
          children: [(0, i.jsx)(m.Text, {
            variant: "text-sm/normal",
            color: "none",
            "aria-label": e,
            children: e
          }), (0, i.jsx)(m.CJ0, {
            size: "xs",
            color: "currentColor",
            className: s()(et.reactionEmojiDetailsArrow, {
              [et.reactionEmojiDetailsArrowCollapsed]: !E
            })
          })]
        })
      },
      j = E && (true !== u || true !== f),
      M = () => (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          className: et.reactionEmojiDetailsDivider
        }), null != D.emojiDescription && D.type !== W.$.UNAVAILABLE && (0, i.jsx)(m.Text, {
          variant: "text-sm/normal",
          "aria-label": D.type,
          children: D.emojiDescription
        })]
      });
    return (0, i.jsxs)("div", {
      children: [j ? M() : L(), y ? (0, i.jsx)(z.SE, {
        className: et.emojiDetailsLoader
      }) : j && (0, i.jsx)(eE, {
        emojiId: n,
        expressionSourceGuild: u,
        hasJoinedExpressionSourceGuild: A,
        onClose: a,
        popoutData: D,
        currentGuildId: P,
        nonce: l
      })]
    })
  }