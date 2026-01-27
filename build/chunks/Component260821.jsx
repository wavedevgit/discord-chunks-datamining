/** Chunk was on 7034 **/
/** chunk id: 260821, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $Z: () => es,
  $l: () => eu,
  IN: () => ec,
  qT: () => ep
}), require("./896048.js"), require("./733351.js");
var i, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  u = require.n(Chunk284009),
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

function er(e, t, n) {
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
      er(e, t, n[t])
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

function eu(e, t, n) {
  (0, f.qfG)(e => (0, l.jsx)(M.default, ea(eo({}, e), {
    message: t,
    selectedReaction: n
  })))
}

function ec(e, t, n) {
  return n === K.v.BURST && t || n === K.v.NORMAL && e
}
class ed extends(i = Chunk64700.PureComponent) {
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
    B.A.isFocused() ? (this.scale.setValue(0), this.opacity.setValue(0), d.A.parallel([d.A.timing(this.scale, {
      toValue: 1,
      duration: t ? 200 : 300,
      easing: d.A.Easing.inOut(d.A.Easing.back())
    }), d.A.timing(this.opacity, {
      toValue: 1,
      duration: t ? 200 : 300
    })]).start(e)) : (this.scale.setValue(1), this.opacity.setValue(1), e())
  }
  render() {
    let e, t, {
        count: n,
        burst_count: i,
        colors: r,
        isBurstReaction: o,
        hideCount: s,
        emoji: u,
        readOnly: c,
        isLurking: h,
        isGuest: m,
        isPendingMember: b,
        className: O,
        useChatFontScaling: v,
        message: A,
        hideEmoji: T,
        animationStartPosition: E,
        emojiSize: I
      } = this.props,
      {
        shouldShowTooltip: S,
        tooltipTextAria: x,
        reactionRef: N,
        tooltipPositionKey: P
      } = this.state,
      C = v ? ei : en,
      w = {
        transform: [{
          scale: this.scale
        }],
        opacity: this.opacity
      },
      M = o ? i : n;
    if (o && null != r) {
      var L;
      let {
        accentColor: n,
        backgroundColor: i,
        opacity: l
      } = r, o = null != (L = (0, p.xp)(null != i ? i : "", l)) ? L : "";
      this.isMe() && (w.borderColor = i), w.background = o, e = n, t = n
    }
    let D = null == N ? true : N.getBoundingClientRect(),
      U = null != E && null != D,
      k = null == E;
    return (0, l.jsx)(f.YNO, {
      targetElementRef: {
        current: N
      },
      shouldShow: S,
      "aria-label": null != x && x,
      renderPopout: this.renderTooltip,
      nudgeAlignIntoViewport: true,
      position: "top",
      align: "center",
      positionKey: P,
      children: () => (0, l.jsx)("div", {
        onMouseEnter: this.handleEnter,
        onMouseLeave: this.handleLeave,
        ref: this.handleSetReactionRef,
        children: (0, l.jsx)(d.A.div, {
          className: a()(C.reaction, O, {
            [C.reactionMe]: this.isMe(),
            [C.reactionReadOnly]: c && !h && !b && !m,
            [C.shakeReaction]: T && null == E
          }),
          style: w,
          children: (0, l.jsx)(f.YNO, {
            targetElementRef: this.upsellPopoutTargetRef,
            renderPopout: this.renderLurkerModeUpsellPopout,
            position: "top",
            children: n => (0, l.jsxs)(f.DUT, ea(eo({}, n), {
              innerRef: this.upsellPopoutTargetRef,
              className: C.reactionInner,
              onClick: this.handleClick,
              "aria-disabled": c,
              "aria-label": (0, _.mb)(this.isMe(), M, u, o),
              "aria-pressed": this.isMe(),
              children: [(0, l.jsx)("div", {
                className: a()({
                  [C.burstGlow]: o
                }),
                style: {
                  boxShadow: "0 0 16px ".concat(t)
                }
              }), (0, l.jsxs)("div", {
                children: [o ? (0, l.jsxs)(l.Fragment, {
                  children: [U && (0, l.jsx)(j.A, {
                    messageId: A.id,
                    emoji: u,
                    startPosition: E,
                    targetPosition: D
                  }), k && (0, l.jsx)(q.A, {
                    count: i,
                    emoji: u,
                    channelId: A.getChannelId(),
                    messageId: A.id,
                    useChatFontScaling: v,
                    color: t,
                    emojiSize: Q.x.NORMAL
                  })]
                }) : null, (0, l.jsx)(g.A, {
                  className: a()({
                    [C.hideEmoji]: T
                  }),
                  emojiId: u.id,
                  emojiName: u.name,
                  size: I,
                  animated: u.animated
                })]
              }), s ? null : (0, l.jsx)(y.A, {
                className: C.reactionCount,
                value: M,
                color: e,
                digitWidth: es
              }), (0, l.jsx)(R.A, {
                count: M,
                reactionRef: N
              })]
            }))
          })
        })
      })
    })
  }
  constructor(...e) {
    super(...e), er(this, "isReactionEventActive", false), er(this, "isKeyboardNavigation", false), er(this, "scale", new d.A.Value(1)), er(this, "opacity", new d.A.Value(1)), er(this, "timeout", new m.Ep), er(this, "hideTimeout", new m.Ep), er(this, "ctaRef", r.createRef()), er(this, "type", K.v.NORMAL), er(this, "colors", {
      backgroundColor: true,
      borderColor: true,
      textColor: true
    }), er(this, "state", {
      shouldShowTooltip: false,
      tooltipText: null,
      tooltipTextAria: null,
      reactionRef: null,
      tooltipPositionKey: true
    }), er(this, "hasShownTooltip", false), er(this, "nonce", (0, c.A)()), er(this, "upsellPopoutTargetRef", r.createRef()), er(this, "userCanBurstReact", () => this.props.userHasPremium), er(this, "handleClick", e => {
      e.stopPropagation();
      let {
        message: t,
        emoji: n,
        readOnly: i,
        isBurstReaction: l,
        isPendingMember: r,
        isLurking: o,
        isGuest: a,
        isForumToolbar: s
      } = this.props, u = D.A.getChannel(t.getChannelId());
      if (o || a) {
        var c, d;
        null == (d = this.ctaRef) || null == (c = d.current) || c.focus();
        return
      }
      let p = t.getChannelId(),
        h = s ? w.qN.FORUM_TOOLBAR : w.qN.MESSAGE_INLINE_BUTTON;
      l && !this.userCanBurstReact() ? (0, C.z)({
        analytics: {
          type: $.e.BURST_REACTION_UPSELL,
          page: (null == u ? true : u.getGuildId()) != null ? Y.liQ.GUILD_CHANNEL : Y.liQ.DM_CHANNEL,
          section: null != u ? (0, _.sn)(u) : true,
          object: Y.ZSU.EMOJI_REACTION_UPSELL
        }
      }) : r ? this.handleShowVerificationGate() : i || (this.isMe() ? (0, w.et)({
        channelId: p,
        messageId: t.id,
        emoji: n,
        location: h,
        options: {
          burst: l
        }
      }) : (0, w.BB)(p, t.id, n, h, {
        burst: l
      }))
    }), er(this, "handleEnter", e => {
      let {
        emoji: t,
        message: n,
        type: i,
        reduceMotion: l,
        animateEmoji: r,
        autoUnfurlReactionTooltip: o
      } = this.props, a = i === K.v.BURST;
      a && !this.isReactionEventActive && !l && r && (0, w.on)({
        channelId: n.getChannelId(),
        messageId: n.id,
        emoji: t,
        key: W.W.HOVER
      }), this.isReactionEventActive = true, this.isKeyboardNavigation = "focus" === e.type, this.timeout.start(a ? 750 : o ? 200 : 500, this.showTooltip, false)
    }), er(this, "handleEnterTooltip", () => {
      this.isReactionEventActive = true, this.handleShowTooltip()
    }), er(this, "handleShowTooltip", () => {
      this.hideTimeout.stop(), this.isReactionEventActive && (this.updateTooltipText(), k.A.addChangeListener(this.updateTooltipText))
    }), er(this, "showTooltip", () => {
      this.props.readOnly || (this.handleShowTooltip(), this.isReactionEventActive && this.trackReactionTooltipViewed(), this.hasShownTooltip = true)
    }), er(this, "handleLeave", () => {
      this.isReactionEventActive = false, this.isKeyboardNavigation = false, this.timeout.stop(), k.A.removeChangeListener(this.updateTooltipText), this.hideTimeout.start(200, this.hideTooltip, false)
    }), er(this, "hideTooltip", () => {
      this.setState({
        shouldShowTooltip: false
      }), this.hasShownTooltip && H.default.track(Y.HAw.CLOSE_POPOUT, {
        nonce: this.nonce
      })
    }), er(this, "isMe", () => {
      let {
        me: e,
        me_burst: t,
        type: n
      } = this.props;
      return ec(e, t, n)
    }), er(this, "updateTooltipText", () => {
      let {
        message: e,
        emoji: t,
        type: n
      } = this.props, i = (0, Z.i)(e, t, n), l = this.isKeyboardNavigation ? i : (0, Z.i)(e, t, n, Y.tEg);
      u()("string" == typeof i, "tooltipTextAria is not a string"), this.setState({
        tooltipText: l,
        tooltipTextAria: i,
        shouldShowTooltip: null != l && "" !== l
      })
    }), er(this, "renderLurkerModeUpsellPopout", e => {
      let {
        closePopout: t
      } = e, {
        message: n,
        isLurking: i
      } = this.props, r = D.A.getChannel(n.getChannelId()), o = U.A.getGuild(null == r ? true : r.getGuildId());
      return i && null != o ? (0, l.jsx)(N.A, {
        ctaRef: this.ctaRef,
        type: N.w.REACTIONS,
        guild: o,
        closePopout: t
      }) : (0, l.jsx)(l.Fragment, {})
    }), er(this, "renderEmojiDetails", () => {
      let e = this.props.emoji;
      return null != e.id && (0, l.jsx)(em, {
        emojiId: e.id,
        refreshPositionKey: this.refreshTooltipPositionKey,
        onClose: this.handleLeave,
        nonce: this.nonce
      })
    }), er(this, "renderTooltip", () => {
      let {
        emoji: e,
        message: t,
        type: n,
        me_burst: i,
        isBurstReaction: r = false
      } = this.props, {
        tooltipText: o,
        tooltipTextAria: s
      } = this.state, u = n => {
        let i = D.A.getChannel(t.getChannelId());
        null == i || (this.handleLeave(), eu(i, t, {
          emoji: e,
          reactionType: r ? K.v.BURST : K.v.NORMAL
        }))
      }, c = "string" == typeof o ? "" === o.trim() : null == o, d = () => c || null == o || null == s ? null : (0, l.jsx)(f.Text, {
        variant: "text-sm/normal",
        className: el.Of,
        "aria-label": s,
        children: o
      }), p = () => {
        let e = V.default.getCurrentUser();
        return i ? (0, l.jsxs)("div", {
          className: a()(el.h7, el.j9),
          children: [(0, z.TW)(e) && (0, l.jsx)(f.tvc, {
            size: "md",
            className: el.eH,
            color: v.k0.PREMIUM_TIER_2
          }), (0, l.jsx)(f.Text, {
            variant: "text-sm/normal",
            className: el.Of,
            "aria-label": "super reaction tooltip cta",
            children: ee.intl.string(ee.t.ZbNJXn)
          })]
        }) : this.userCanBurstReact() ? (0, l.jsxs)("div", {
          className: a()(el.h7, el.j9, el.rL),
          children: [(0, l.jsx)(f.tvc, {
            size: "md",
            className: el.eH,
            color: v.k0.PREMIUM_TIER_2
          }), (0, l.jsx)(f.DUT, {
            onClick: this.handleClick,
            children: (0, l.jsx)(f.Text, {
              variant: "text-sm/normal",
              className: el.Of,
              "aria-label": "super reaction tooltip cta",
              children: ee.intl.string(ee.t.kVfuVu)
            })
          })]
        }) : this.userCanBurstReact() || this.isKeyboardNavigation ? null : (0, l.jsx)("div", {
          className: a()(el.h7, el.j9),
          children: (0, l.jsxs)("div", {
            children: [(0, l.jsx)(f.Text, {
              variant: "text-sm/normal",
              "aria-label": "super reaction tooltip upsell",
              children: ee.intl.string(ee.t.W1bMkq)
            }), (0, l.jsx)(P.A, {
              subscriptionTier: $.pe.TIER_2,
              textOptions: {
                textOverride: ee.intl.string(ee.t.mr4K7D)
              },
              className: el.Yq,
              onClick: e => e.stopPropagation()
            })]
          })
        })
      };
      return n === K.v.BURST ? (0, l.jsxs)("div", {
        className: el.xQ,
        onMouseEnter: this.handleEnterTooltip,
        onMouseLeave: this.handleLeave,
        children: [(0, l.jsx)(f.DUT, {
          className: el.fu,
          onClick: u,
          children: (0, l.jsxs)("div", {
            className: el.Ok,
            children: [(0, l.jsx)(g.A, {
              className: el.JS,
              emojiId: e.id,
              emojiName: e.name,
              animated: e.animated,
              size: this.props.emojiSizeTooltip
            }), d()]
          })
        }), p(), this.renderEmojiDetails()]
      }) : (0, l.jsxs)("div", {
        className: el.xQ,
        onMouseEnter: this.handleEnterTooltip,
        onMouseLeave: this.handleLeave,
        children: [(0, l.jsx)(f.DUT, {
          onClick: u,
          children: (0, l.jsxs)("div", {
            className: el.xR,
            children: [(0, l.jsx)(g.A, {
              className: el.JS,
              emojiId: e.id,
              emojiName: e.name,
              animated: e.animated,
              size: this.props.emojiSizeTooltip
            }), d()]
          })
        }), this.renderEmojiDetails()]
      })
    }), er(this, "refreshTooltipPositionKey", () => {
      this.setState({
        tooltipPositionKey: String(Date.now())
      })
    }), er(this, "handleShowVerificationGate", () => {
      let {
        message: e,
        isPendingMember: t
      } = this.props;
      if (!t) return null;
      let n = D.A.getChannel(e.getChannelId()),
        i = U.A.getGuild(null == n ? true : n.getGuildId());
      null != i && (0, x.Ze)(i.id)
    }), er(this, "handleSetReactionRef", e => {
      this.setState({
        reactionRef: e
      })
    }), er(this, "trackReactionTooltipViewed", () => {
      let {
        emoji: e,
        message: t,
        type: n
      } = this.props, i = V.default.getCurrentUser(), l = D.A.getChannel(t.getChannelId()), r = n === K.v.BURST, o = (0, z.TW)(i), a = r ? $.e.EMOJI_IN_BURST_REACTION_HOVER : $.e.EMOJI_IN_REACTION_HOVER;
      !r || this.userCanBurstReact() || o || (a = $.e.EMOJI_IN_BURST_REACTION_HOVER_UPSELL), O.Ay.trackWithMetadata(Y.HAw.EXPRESSION_TOOLTIP_VIEWED, {
        type: a,
        expression_id: e.id,
        expression_name: e.name,
        is_animated: e.animated,
        is_custom: null != e.id,
        nonce: this.nonce
      }), !r || null == l || o || this.userCanBurstReact() || H.default.track(Y.HAw.PREMIUM_UPSELL_VIEWED, {
        type: $.e.BURST_REACTION_UPSELL,
        location: {
          page: (null == l ? true : l.getGuildId()) != null ? Y.liQ.GUILD_CHANNEL : Y.liQ.DM_CHANNEL,
          section: (0, _.sn)(l),
          object: Y.ZSU.EMOJI_REACTION_TOOLTIP_UPSELL
        }
      })
    })
  }
}
er(ed, "defaultProps", {
  emojiSizeTooltip: "jumbo"
});
let ep = Chunk64700.memo(e => {
    let {
      type: t,
      burst_colors: n,
      message: i,
      emoji: r
    } = e, o = t === K.v.BURST, a = (0, E.g)(o && null != n ? n : []), s = (0, h.bG)([W.A], () => true !== W.A.getEffectForEmojiId(i.getChannelId(), i.id, r)), u = (0, h.bG)([b.A], () => b.A.useReducedMotion), c = L.Sf.useSetting(), d = V.default.getCurrentUser(), p = (0, z.TW)(d), m = (0, h.bG)([W.A], () => W.A.getReactionPickerAnimation(i.id, r.name, r.id)), f = o && (s || null != m);
    return (0, l.jsx)(ed, ea(eo({}, e), {
      colors: a,
      isBurstReaction: o,
      hideEmoji: f,
      userHasPremium: p,
      reduceMotion: u,
      animateEmoji: c,
      animationStartPosition: m
    }))
  }),
  eh = e => {
    var t, n, i;
    let {
      emojiId: r,
      expressionSourceGuild: o,
      hasJoinedExpressionSourceGuild: a,
      onClose: s,
      popoutData: u,
      currentGuildId: c,
      nonce: d
    } = e;
    (0, S.i)({
      emojiId: r,
      currentGuildId: c,
      popoutData: u,
      emojiSourceGuildId: null == o ? true : o.id,
      nonce: d
    });
    let p = null != (t = null == o ? true : o.isDiscoverable()) && t,
      h = null != o && p,
      m = (null != (n = null == o || null == (i = o.emojis) ? true : i.length) ? n : 0) > 1;
    return h ? null == o ? null : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("div", {
        className: et.h2,
        children: (0, l.jsx)(F.G7, {
          expressionSourceGuild: o,
          hasJoinedExpressionSourceGuild: a,
          isDisplayingJoinGuildButtonInPopout: u.type === X.u.JOIN_GUILD
        })
      }), m && (0, l.jsx)(F.mG, {
        emojiId: r,
        expressionSourceGuild: o,
        hasJoinedEmojiSourceGuild: a,
        onClose: s,
        popoutData: u,
        isDisplayingButtonInTopSection: false
      })]
    }) : (0, l.jsx)(f.Text, {
      variant: "text-sm/normal",
      "aria-label": u.type,
      children: u.emojiDescription
    })
  },
  em = e => {
    var t;
    let n, {
        emojiId: i,
        refreshPositionKey: o,
        onClose: s,
        nonce: u
      } = e,
      {
        joinedEmojiSourceGuild: c
      } = (0, h.cf)([A.Ay, U.A], () => {
        let e = A.Ay.getCustomEmojiById(i);
        return {
          joinedEmojiSourceGuild: (null == e ? true : e.type) === T.i.GUILD ? U.A.getGuild(null == e ? true : e.guildId) : true
        }
      }),
      [d, p] = r.useState(true),
      [m, g] = r.useState(true),
      [b, y] = r.useState(null),
      [O, v] = r.useState(false),
      [j, E] = r.useState(false),
      [S, x] = r.useState(false),
      N = null != c,
      R = null != (t = null == d ? true : d.isDiscoverable()) && t,
      P = G.A.getGuildId(),
      C = null != P && (P === (null == d ? true : d.id) || P === (null == c ? true : c.id)),
      w = V.default.getCurrentUser(),
      _ = (0, X.O)({
        sourceType: b,
        expressionSourceApplication: null != m ? m : null,
        isPremium: z.Ay.isPremium(w),
        hasJoinedEmojiSourceGuild: N,
        isDiscoverable: R,
        emojiComesFromCurrentGuild: C,
        isUnusableRoleSubscriptionEmoji: false,
        userIsRoleSubscriber: false,
        isRoleSubscriptionEmoji: false,
        shouldHideRoleSubscriptionCTA: false
      });
    if (r.useEffect(() => {
        !O || S || (async () => {
          o(), E(true);
          let e = null != i ? await (0, I.g_)(i) : null;
          if (null != e) switch (y(e.type), e.type) {
            case I.rV.APPLICATION:
              g(e.application);
              break;
            case I.rV.GUILD:
              p(e.guild)
          } else p(null);
          E(false), x(true), o()
        })()
      }, [i, O, S, o]), N) return null;
    let M = O && (true !== d || true !== m);
    return (0, l.jsxs)("div", {
      children: [M ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("div", {
          className: et.Hw
        }), null != _.emojiDescription && _.type !== X.u.UNAVAILABLE && (0, l.jsx)(f.Text, {
          variant: "text-sm/normal",
          "aria-label": _.type,
          children: _.emojiDescription
        })]
      }) : (n = ee.intl.string(ee.t["Igv+LS"]), (0, l.jsxs)(f.DUT, {
        onClick: () => {
          v(!O)
        },
        className: et.s4,
        children: [(0, l.jsx)(f.Text, {
          variant: "text-sm/normal",
          color: "none",
          "aria-label": n,
          children: n
        }), (0, l.jsx)(f.abt, {
          size: "xs",
          color: "currentColor",
          className: a()(et.Po, {
            [et.Kk]: !O
          })
        })]
      })), j ? (0, l.jsx)(J.Y0, {
        className: et.eF
      }) : M && (0, l.jsx)(eh, {
        emojiId: i,
        expressionSourceGuild: d,
        hasJoinedExpressionSourceGuild: N,
        onClose: s,
        popoutData: _,
        currentGuildId: P,
        nonce: u
      })]
    })
  }