/** Chunk was on web.js **/
/** chunk id: 260821, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $Z: () => ec,
  $l: () => e_,
  IN: () => eh,
  qT: () => eg
}), require("./896048.js"), require("./733351.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  c = require.n(Chunk284009),
  Chunk835245 = require("./835245.js"),
  Chunk615300 = require("./615300.js"),
  Chunk317097 = require("./317097.js"),
  Chunk311907 = require("./311907.js"),
  Chunk451988 = require("./451988.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk775602 = require("./775602.js"),
  Chunk114166 = require("./114166.jsx"),
  Chunk58149 = require("./58149.js"),
  Chunk404374 = require("./404374.jsx"),
  Chunk572680 = require("./572680.jsx"),
  Chunk508675 = require("./508675.js"),
  Chunk770335 = require("./770335.js"),
  Chunk891734 = require("./891734.js"),
  Chunk624793 = require("./624793.js"),
  Chunk731383 = require("./731383.js"),
  Chunk202384 = require("./202384.js"),
  Chunk698405 = require("./698405.jsx"),
  Chunk254075 = require("./254075.jsx"),
  Chunk465794 = require("./465794.jsx"),
  Chunk32605 = require("./32605.jsx"),
  Chunk649963 = require("./649963.js"),
  Chunk815807 = require("./815807.js"),
  Chunk112753 = require("./112753.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk956703 = require("./956703.js"),
  Chunk967198 = require("./967198.js"),
  Chunk287809 = require("./287809.js"),
  Chunk531685 = require("./531685.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk900210 = require("./900210.js"),
  Chunk505527 = require("./505527.js"),
  Chunk450707 = require("./450707.js"),
  Chunk767143 = require("./767143.jsx"),
  Chunk652176 = require("./652176.jsx"),
  Chunk802116 = require("./802116.js"),
  Chunk211180 = require("./211180.jsx"),
  Chunk803203 = require("./803203.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk767419 = require("./767419.js"),
  Chunk233080 = require("./233080.js"),
  Chunk710504 = require("./710504.js"),
  Chunk494090 = require("./494090.js");

function ea(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function es(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ea(e, t, n[t])
    })
  }
  return e
}

function eo(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eo(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let ec = 12,
  eu = 200,
  ed = 300,
  ef = 500,
  ep = 750;

function e_(e, t, n) {
  (0, h.qfG)(e => (0, i.jsx)(L.default, el(es({}, e), {
    message: t,
    selectedReaction: n
  })))
}

function eh(e, t, n) {
  return n === W.v.BURST && t || n === W.v.NORMAL && e
}
class em extends(r = Chunk64700.PureComponent) {
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
    F.A.isFocused() ? (this.scale.setValue(0), this.opacity.setValue(0), d.A.parallel([d.A.timing(this.scale, {
      toValue: 1,
      duration: t ? eu : ed,
      easing: d.A.Easing.inOut(d.A.Easing.back())
    }), d.A.timing(this.opacity, {
      toValue: 1,
      duration: t ? eu : ed
    })]).start(e)) : (this.scale.setValue(1), this.opacity.setValue(1), e())
  }
  render() {
    let e, t, {
        count: n,
        burst_count: r,
        colors: a,
        isBurstReaction: s,
        hideCount: l,
        emoji: c,
        readOnly: u,
        isLurking: p,
        isGuest: _,
        isPendingMember: g,
        className: y,
        useChatFontScaling: b,
        message: v,
        hideEmoji: A,
        animationStartPosition: I,
        emojiSize: S
      } = this.props,
      {
        shouldShowTooltip: T,
        tooltipTextAria: C,
        reactionRef: N,
        tooltipPositionKey: w
      } = this.state,
      P = b ? er : en,
      D = {
        transform: [{
          scale: this.scale
        }],
        opacity: this.opacity
      },
      L = s ? r : n;
    if (s && null != a) {
      var j;
      let {
        accentColor: n,
        backgroundColor: r,
        opacity: i
      } = a, s = null != (j = (0, f.xp)(null != r ? r : "", i)) ? j : "";
      this.isMe() && (D.borderColor = r), D.background = s, e = n, t = n
    }
    let M = null == N ? true : N.getBoundingClientRect(),
      k = null != I && null != M,
      U = null == I;
    return (0, i.jsx)(h.YNO, {
      targetElementRef: {
        current: N
      },
      shouldShow: T,
      "aria-label": null != C && C,
      renderPopout: this.renderTooltip,
      nudgeAlignIntoViewport: true,
      position: "top",
      align: "center",
      positionKey: w,
      children: () => (0, i.jsx)("div", {
        onMouseEnter: this.handleEnter,
        onMouseLeave: this.handleLeave,
        ref: this.handleSetReactionRef,
        children: (0, i.jsx)(d.A.div, {
          className: o()(P.reaction, y, {
            [P.reactionMe]: this.isMe(),
            [P.reactionReadOnly]: u && !p && !g && !_,
            [P.shakeReaction]: A && null == I
          }),
          style: D,
          children: (0, i.jsx)(h.YNO, {
            targetElementRef: this.upsellPopoutTargetRef,
            renderPopout: this.renderLurkerModeUpsellPopout,
            position: "top",
            children: n => (0, i.jsxs)(h.DUT, el(es({}, n), {
              innerRef: this.upsellPopoutTargetRef,
              className: P.reactionInner,
              onClick: this.handleClick,
              "aria-disabled": u,
              "aria-label": (0, x.mb)(this.isMe(), L, c, s),
              "aria-pressed": this.isMe(),
              children: [(0, i.jsx)("div", {
                className: o()({
                  [P.burstGlow]: s
                }),
                style: {
                  boxShadow: "0 0 16px ".concat(t)
                }
              }), (0, i.jsxs)("div", {
                children: [s ? (0, i.jsxs)(i.Fragment, {
                  children: [k && (0, i.jsx)(O.A, {
                    messageId: v.id,
                    emoji: c,
                    startPosition: I,
                    targetPosition: M
                  }), U && (0, i.jsx)(Q.A, {
                    count: r,
                    emoji: c,
                    channelId: v.getChannelId(),
                    messageId: v.id,
                    useChatFontScaling: b,
                    color: t,
                    emojiSize: Z.x.NORMAL
                  })]
                }) : null, (0, i.jsx)(m.A, {
                  className: o()({
                    [P.hideEmoji]: A
                  }),
                  emojiId: c.id,
                  emojiName: c.name,
                  size: S,
                  animated: c.animated
                })]
              }), l ? null : (0, i.jsx)(E.A, {
                className: P.reactionCount,
                value: L,
                color: e,
                digitWidth: ec
              }), (0, i.jsx)(R.A, {
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
    super(...e), ea(this, "isReactionEventActive", false), ea(this, "isKeyboardNavigation", false), ea(this, "scale", new d.A.Value(1)), ea(this, "opacity", new d.A.Value(1)), ea(this, "timeout", new _.Ep), ea(this, "hideTimeout", new _.Ep), ea(this, "ctaRef", a.createRef()), ea(this, "type", W.v.NORMAL), ea(this, "colors", {
      backgroundColor: true,
      borderColor: true,
      textColor: true
    }), ea(this, "state", {
      shouldShowTooltip: false,
      tooltipText: null,
      tooltipTextAria: null,
      reactionRef: null,
      tooltipPositionKey: true
    }), ea(this, "hasShownTooltip", false), ea(this, "nonce", (0, u.A)()), ea(this, "upsellPopoutTargetRef", a.createRef()), ea(this, "userCanBurstReact", () => this.props.userHasPremium), ea(this, "handleClick", e => {
      e.stopPropagation();
      let {
        message: t,
        emoji: n,
        readOnly: r,
        isBurstReaction: i,
        isPendingMember: a,
        isLurking: s,
        isGuest: o,
        isForumToolbar: l
      } = this.props, c = M.A.getChannel(t.getChannelId());
      if (s || o) {
        var u, d;
        null == (d = this.ctaRef) || null == (u = d.current) || u.focus();
        return
      }
      let f = t.getChannelId(),
        p = l ? D.qN.FORUM_TOOLBAR : D.qN.MESSAGE_INLINE_BUTTON;
      i && !this.userCanBurstReact() ? (0, P.z)({
        analytics: {
          type: J.e.BURST_REACTION_UPSELL,
          page: (null == c ? true : c.getGuildId()) != null ? $.liQ.GUILD_CHANNEL : $.liQ.DM_CHANNEL,
          section: null != c ? (0, x.sn)(c) : true,
          object: $.ZSU.EMOJI_REACTION_UPSELL
        }
      }) : a ? this.handleShowVerificationGate() : r || (this.isMe() ? (0, D.et)({
        channelId: f,
        messageId: t.id,
        emoji: n,
        location: p,
        options: {
          burst: i
        }
      }) : (0, D.BB)(f, t.id, n, p, {
        burst: i
      }))
    }), ea(this, "handleEnter", e => {
      let {
        emoji: t,
        message: n,
        type: r,
        reduceMotion: i,
        animateEmoji: a,
        autoUnfurlReactionTooltip: s
      } = this.props, o = r === W.v.BURST;
      o && !this.isReactionEventActive && !i && a && (0, D.on)({
        channelId: n.getChannelId(),
        messageId: n.id,
        emoji: t,
        key: Y.W.HOVER
      }), this.isReactionEventActive = true, this.isKeyboardNavigation = "focus" === e.type, this.timeout.start(o ? ep : s ? eu : ef, this.showTooltip, false)
    }), ea(this, "handleEnterTooltip", () => {
      this.isReactionEventActive = true, this.handleShowTooltip()
    }), ea(this, "handleShowTooltip", () => {
      this.hideTimeout.stop(), this.isReactionEventActive && (this.updateTooltipText(), U.A.addChangeListener(this.updateTooltipText))
    }), ea(this, "showTooltip", () => {
      this.props.readOnly || (this.handleShowTooltip(), this.isReactionEventActive && this.trackReactionTooltipViewed(), this.hasShownTooltip = true)
    }), ea(this, "handleLeave", () => {
      this.isReactionEventActive = false, this.isKeyboardNavigation = false, this.timeout.stop(), U.A.removeChangeListener(this.updateTooltipText), this.hideTimeout.start(200, this.hideTooltip, false)
    }), ea(this, "hideTooltip", () => {
      this.setState({
        shouldShowTooltip: false
      }), this.hasShownTooltip && B.default.track($.HAw.CLOSE_POPOUT, {
        nonce: this.nonce
      })
    }), ea(this, "isMe", () => {
      let {
        me: e,
        me_burst: t,
        type: n
      } = this.props;
      return eh(e, t, n)
    }), ea(this, "updateTooltipText", () => {
      let {
        message: e,
        emoji: t,
        type: n
      } = this.props, r = (0, X.i)(e, t, n), i = this.isKeyboardNavigation ? r : (0, X.i)(e, t, n, $.tEg);
      c()("string" == typeof r, "tooltipTextAria is not a string"), this.setState({
        tooltipText: i,
        tooltipTextAria: r,
        shouldShowTooltip: null != i && "" !== i
      })
    }), ea(this, "renderLurkerModeUpsellPopout", e => {
      let {
        closePopout: t
      } = e, {
        message: n,
        isLurking: r
      } = this.props, a = M.A.getChannel(n.getChannelId()), s = k.A.getGuild(null == a ? true : a.getGuildId());
      return r && null != s ? (0, i.jsx)(N.A, {
        ctaRef: this.ctaRef,
        type: N.w.REACTIONS,
        guild: s,
        closePopout: t
      }) : (0, i.jsx)(i.Fragment, {})
    }), ea(this, "renderEmojiDetails", () => {
      let e = this.props.emoji;
      return null != e.id && (0, i.jsx)(ey, {
        emojiId: e.id,
        refreshPositionKey: this.refreshTooltipPositionKey,
        onClose: this.handleLeave,
        nonce: this.nonce
      })
    }), ea(this, "renderTooltip", () => {
      let {
        emoji: e,
        message: t,
        type: n,
        me_burst: r,
        isBurstReaction: a = false
      } = this.props, {
        tooltipText: s,
        tooltipTextAria: l
      } = this.state, c = n => {
        let r = M.A.getChannel(t.getChannelId());
        null == r || (this.handleLeave(), e_(r, t, {
          emoji: e,
          reactionType: a ? W.v.BURST : W.v.NORMAL
        }))
      }, u = "string" == typeof s ? "" === s.trim() : null == s, d = () => u || null == s || null == l ? null : (0, i.jsx)(h.Text, {
        variant: "text-sm/normal",
        className: ei.Of,
        "aria-label": l,
        children: s
      }), f = () => {
        let e = V.default.getCurrentUser();
        return r ? (0, i.jsxs)("div", {
          className: o()(ei.h7, ei.j9),
          children: [(0, H.TW)(e) && (0, i.jsx)(h.tvc, {
            size: "md",
            className: ei.eH,
            color: b.k0.PREMIUM_TIER_2
          }), (0, i.jsx)(h.Text, {
            variant: "text-sm/normal",
            className: ei.Of,
            "aria-label": "super reaction tooltip cta",
            children: ee.intl.string(ee.t.ZbNJXn)
          })]
        }) : this.userCanBurstReact() ? (0, i.jsxs)("div", {
          className: o()(ei.h7, ei.j9, ei.rL),
          children: [(0, i.jsx)(h.tvc, {
            size: "md",
            className: ei.eH,
            color: b.k0.PREMIUM_TIER_2
          }), (0, i.jsx)(h.DUT, {
            onClick: this.handleClick,
            children: (0, i.jsx)(h.Text, {
              variant: "text-sm/normal",
              className: ei.Of,
              "aria-label": "super reaction tooltip cta",
              children: ee.intl.string(ee.t.kVfuVu)
            })
          })]
        }) : this.userCanBurstReact() || this.isKeyboardNavigation ? null : (0, i.jsx)("div", {
          className: o()(ei.h7, ei.j9),
          children: (0, i.jsxs)("div", {
            children: [(0, i.jsx)(h.Text, {
              variant: "text-sm/normal",
              "aria-label": "super reaction tooltip upsell",
              children: ee.intl.string(ee.t.W1bMkq)
            }), (0, i.jsx)(w.A, {
              subscriptionTier: J.pe.TIER_2,
              textOptions: {
                textOverride: ee.intl.string(ee.t.mr4K7D)
              },
              className: ei.Yq,
              onClick: e => e.stopPropagation()
            })]
          })
        })
      };
      return n === W.v.BURST ? (0, i.jsxs)("div", {
        className: ei.xQ,
        onMouseEnter: this.handleEnterTooltip,
        onMouseLeave: this.handleLeave,
        children: [(0, i.jsx)(h.DUT, {
          className: ei.fu,
          onClick: c,
          children: (0, i.jsxs)("div", {
            className: ei.Ok,
            children: [(0, i.jsx)(m.A, {
              className: ei.JS,
              emojiId: e.id,
              emojiName: e.name,
              animated: e.animated,
              size: this.props.emojiSizeTooltip
            }), d()]
          })
        }), f(), this.renderEmojiDetails()]
      }) : (0, i.jsxs)("div", {
        className: ei.xQ,
        onMouseEnter: this.handleEnterTooltip,
        onMouseLeave: this.handleLeave,
        children: [(0, i.jsx)(h.DUT, {
          onClick: c,
          children: (0, i.jsxs)("div", {
            className: ei.xR,
            children: [(0, i.jsx)(m.A, {
              className: ei.JS,
              emojiId: e.id,
              emojiName: e.name,
              animated: e.animated,
              size: this.props.emojiSizeTooltip
            }), d()]
          })
        }), this.renderEmojiDetails()]
      })
    }), ea(this, "refreshTooltipPositionKey", () => {
      this.setState({
        tooltipPositionKey: String(Date.now())
      })
    }), ea(this, "handleShowVerificationGate", () => {
      let {
        message: e,
        isPendingMember: t
      } = this.props;
      if (!t) return null;
      let n = M.A.getChannel(e.getChannelId()),
        r = k.A.getGuild(null == n ? true : n.getGuildId());
      null != r && (0, C.Ze)(r.id)
    }), ea(this, "handleSetReactionRef", e => {
      this.setState({
        reactionRef: e
      })
    }), ea(this, "trackReactionTooltipViewed", () => {
      let {
        emoji: e,
        message: t,
        type: n
      } = this.props, r = V.default.getCurrentUser(), i = M.A.getChannel(t.getChannelId()), a = n === W.v.BURST, s = (0, H.TW)(r), o = a ? J.e.EMOJI_IN_BURST_REACTION_HOVER : J.e.EMOJI_IN_REACTION_HOVER;
      !a || this.userCanBurstReact() || s || (o = J.e.EMOJI_IN_BURST_REACTION_HOVER_UPSELL), y.Ay.trackWithMetadata($.HAw.EXPRESSION_TOOLTIP_VIEWED, {
        type: o,
        expression_id: e.id,
        expression_name: e.name,
        is_animated: e.animated,
        is_custom: null != e.id,
        nonce: this.nonce
      }), !a || null == i || s || this.userCanBurstReact() || B.default.track($.HAw.PREMIUM_UPSELL_VIEWED, {
        type: J.e.BURST_REACTION_UPSELL,
        location: {
          page: (null == i ? true : i.getGuildId()) != null ? $.liQ.GUILD_CHANNEL : $.liQ.DM_CHANNEL,
          section: (0, x.sn)(i),
          object: $.ZSU.EMOJI_REACTION_TOOLTIP_UPSELL
        }
      })
    })
  }
}
ea(em, "defaultProps", {
  emojiSizeTooltip: "jumbo"
});
let eg = Chunk64700.memo(e => {
    let {
      type: t,
      burst_colors: n,
      message: r,
      emoji: a
    } = e, s = t === W.v.BURST, o = (0, I.g)(s && null != n ? n : []), l = (0, p.bG)([Y.A], () => true !== Y.A.getEffectForEmojiId(r.getChannelId(), r.id, a)), c = (0, p.bG)([g.A], () => g.A.useReducedMotion), u = j.Sf.useSetting(), d = V.default.getCurrentUser(), f = (0, H.TW)(d), _ = (0, p.bG)([Y.A], () => Y.A.getReactionPickerAnimation(r.id, a.name, a.id)), h = s && (l || null != _);
    return (0, i.jsx)(em, el(es({}, e), {
      colors: o,
      isBurstReaction: s,
      hideEmoji: h,
      userHasPremium: f,
      reduceMotion: c,
      animateEmoji: u,
      animationStartPosition: _
    }))
  }),
  eE = e => {
    var t, n, r;
    let {
      emojiId: a,
      expressionSourceGuild: s,
      hasJoinedExpressionSourceGuild: o,
      onClose: l,
      popoutData: c,
      currentGuildId: u,
      nonce: d
    } = e;
    (0, T.i)({
      emojiId: a,
      currentGuildId: u,
      popoutData: c,
      emojiSourceGuildId: null == s ? true : s.id,
      nonce: d
    });
    let f = null != (t = null == s ? true : s.isDiscoverable()) && t,
      p = null != s && f,
      _ = (null != (n = null == s || null == (r = s.emojis) ? true : r.length) ? n : 0) > 1,
      m = () => null == s ? null : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          className: et.h2,
          children: (0, i.jsx)(z.G7, {
            expressionSourceGuild: s,
            hasJoinedExpressionSourceGuild: o,
            isDisplayingJoinGuildButtonInPopout: c.type === K.u.JOIN_GUILD
          })
        }), _ && (0, i.jsx)(z.mG, {
          emojiId: a,
          expressionSourceGuild: s,
          hasJoinedEmojiSourceGuild: o,
          onClose: l,
          popoutData: c,
          isDisplayingButtonInTopSection: false
        })]
      });
    return p ? m() : (0, i.jsx)(h.Text, {
      variant: "text-sm/normal",
      "aria-label": c.type,
      children: c.emojiDescription
    })
  },
  ey = e => {
    var t;
    let {
      emojiId: n,
      refreshPositionKey: r,
      onClose: s,
      nonce: l
    } = e, {
      joinedEmojiSourceGuild: c
    } = (0, p.cf)([v.Ay, k.A], () => {
      let e = v.Ay.getCustomEmojiById(n);
      return {
        joinedEmojiSourceGuild: (null == e ? true : e.type) === A.i.GUILD ? k.A.getGuild(null == e ? true : e.guildId) : true
      }
    }), [u, d] = a.useState(true), [f, _] = a.useState(true), [m, g] = a.useState(null), [E, y] = a.useState(false), [b, O] = a.useState(false), [I, T] = a.useState(false), C = null != c, N = null != (t = null == u ? true : u.isDiscoverable()) && t, R = G.A.getGuildId(), w = null != R && (R === (null == u ? true : u.id) || R === (null == c ? true : c.id)), P = V.default.getCurrentUser(), D = (0, K.O)({
      sourceType: m,
      expressionSourceApplication: null != f ? f : null,
      isPremium: H.Ay.isPremium(P),
      hasJoinedEmojiSourceGuild: C,
      isDiscoverable: N,
      emojiComesFromCurrentGuild: w,
      isUnusableRoleSubscriptionEmoji: false,
      userIsRoleSubscriber: false,
      isRoleSubscriptionEmoji: false,
      shouldHideRoleSubscriptionCTA: false
    });
    if (a.useEffect(() => {
        !E || I || (async () => {
          r(), O(true);
          let e = null != n ? await (0, S.g_)(n) : null;
          if (null != e) switch (g(e.type), e.type) {
            case S.rV.APPLICATION:
              _(e.application);
              break;
            case S.rV.GUILD:
              d(e.guild)
          } else d(null);
          O(false), T(true), r()
        })()
      }, [n, E, I, r]), C) return null;
    let x = () => {
        y(!E)
      },
      L = () => {
        let e = ee.intl.string(ee.t["Igv+LS"]);
        return (0, i.jsxs)(h.DUT, {
          onClick: x,
          className: et.s4,
          children: [(0, i.jsx)(h.Text, {
            variant: "text-sm/normal",
            color: "none",
            "aria-label": e,
            children: e
          }), (0, i.jsx)(h.abt, {
            size: "xs",
            color: "currentColor",
            className: o()(et.Po, {
              [et.Kk]: !E
            })
          })]
        })
      },
      j = E && (true !== u || true !== f),
      M = () => (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          className: et.Hw
        }), null != D.emojiDescription && D.type !== K.u.UNAVAILABLE && (0, i.jsx)(h.Text, {
          variant: "text-sm/normal",
          "aria-label": D.type,
          children: D.emojiDescription
        })]
      });
    return (0, i.jsxs)("div", {
      children: [j ? M() : L(), b ? (0, i.jsx)(q.Y0, {
        className: et.eF
      }) : j && (0, i.jsx)(eE, {
        emojiId: n,
        expressionSourceGuild: u,
        hasJoinedExpressionSourceGuild: C,
        onClose: s,
        popoutData: D,
        currentGuildId: R,
        nonce: l
      })]
    })
  }