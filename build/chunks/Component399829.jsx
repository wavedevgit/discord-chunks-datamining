/** Chunk was on 32923 **/
/** chunk id: 399829, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk477690 = require("./477690.js"),
  Chunk481060 = require("./481060.js"),
  Chunk179360 = require("./179360.js"),
  Chunk129861 = require("./129861.jsx"),
  Chunk999382 = require("./999382.js"),
  Chunk905128 = require("./905128.js"),
  Chunk151494 = require("./151494.js"),
  Chunk733683 = require("./733683.jsx"),
  Chunk237583 = require("./237583.jsx"),
  Chunk899667 = require("./899667.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk267642 = require("./267642.js"),
  Chunk624138 = require("./624138.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk211538 = require("./211538.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let P = (0, Chunk624138.Mg)(Chunk477690.Z.GUILD_SETTINGS_PREMIUM_TIER_STATUS_PROGRESS_WITH_SUBSCRIPTIONS_MARGIN_TOP);
class w extends Chunk473749.Component {
  componentDidMount() {
    this.measure();
    let {
      guildId: e
    } = this.props;
    null != module && (0, Chunk179360.C0)(module), window.addEventListener("resize", this.measure)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.measure)
  }
  componentDidUpdate() {
    null == this.state.tierPositions && (Object.values(this.tierRefs).some(e => null == e) || this.measure())
  }
  renderProgressBar(e) {
    let {
      tierPositions: t
    } = this.state, {
      guildId: n,
      levelSubscriptionCount: i,
      currentTier: l
    } = this.props;
    if (null == t || null == n) return null;
    let a = {
        numRequired: 0,
        y: 0,
        key: x.x
      },
      s = e.map(e => {
        var n;
        return {
          numRequired: E.oCV[e.tier],
          name: (0, y.nW)(e.tier),
          y: null != (n = t[e.tier]) ? n : 0,
          key: e.tier
        }
      });
    return (0, r.jsx)(x.Z, {
      currentTier: l,
      className: i > 0 ? S.progressWithSubscriptions : S.progress,
      progress: i,
      tiers: [a, ...s],
      initialAnimationDelay: 500,
      onAnimatedTierMaker: this.handleAnimatedTier
    })
  }
  renderTierNone() {
    return (0, Chunk54381.jsxs)("div", {
      className: Chunk211538.tierDefaultUnlocked,
      ref: this.defaultTierRef,
      children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        children: Chunk388032.intl.string(Chunk388032.t["76OoX8"])
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: Chunk211538.tierDefaultUnlockedDescription,
        children: Chunk388032.intl.string(Chunk388032.t.DaYNQQ)
      })]
    })
  }
  renderSubscribers() {
    let {
      subscribers: e,
      uniqueSubscriberCount: t,
      guildId: n
    } = this.props;
    return (0, Chunk54381.jsxs)("div", {
      ref: this.defaultTierRef,
      className: Chunk211538.subscribers,
      children: [(0, Chunk54381.jsx)(Chunk237583.Z, {
        guildId: null != require ? require : true,
        users: module,
        renderUser: this.renderSubscriber,
        renderMoreUsers: this.renderMoreSubscribers,
        max: 5
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk211538.subscriberCount,
        children: Chunk388032.intl.format(Chunk388032.t["0r7snZ"], {
          count: exports
        })
      })]
    })
  }
  render() {
    let {
      guildId: e,
      renderTier: t,
      levelSubscriptionCount: n,
      uniqueSubscriberCount: i,
      tiers: l
    } = this.props;
    return null == require ? (0, Chunk54381.jsx)(Chunk481060.$jN, {
      type: Chunk481060.$jN.Type.SPINNING_CIRCLE
    }) : null == module ? null : (0, Chunk54381.jsx)("div", {
      children: (0, Chunk54381.jsxs)("div", {
        className: Chunk211538.content,
        children: [this.renderProgressBar(Chunk120356), (0, Chunk54381.jsxs)("div", {
          className: Chunk211538.tiers,
          children: [0 === Chunk473749 ? this.renderTierNone() : this.renderSubscribers(), Chunk120356.map((r, i, l) => t({
            tier: r,
            tiers: l,
            tierIndex: i,
            onSetRef: this.setTierRef,
            isAnimatedTo: E.oCV[this.state.animatedTier] >= E.oCV[r.tier],
            subscriptionCount: n,
            guildId: e
          }))]
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), T(this, "tierRefs", {}), T(this, "defaultTierRef", i.createRef()), T(this, "subscribersPopoutTargetRef", i.createRef()), T(this, "state", {
      tierPositions: null,
      animatedTier: E.Eu4.NONE
    }), T(this, "measure", () => {
      let {
        uniqueSubscriberCount: e
      } = this.props, t = this.defaultTierRef.current;
      if (null == t) return;
      let {
        top: n
      } = t.getBoundingClientRect(), r = {};
      for (let [t, i] of Object.entries(this.tierRefs)) {
        if (null == i) return;
        let {
          top: l
        } = i.getBoundingClientRect(), a = e > 0 ? P : 0;
        r[t] = l - n + 32 - a
      }
      this.setState({
        tierPositions: r
      })
    }), T(this, "setTierRef", (e, t) => {
      this.tierRefs[t.tier] = e
    }), T(this, "handleAnimatedTier", e => {
      this.setState({
        animatedTier: e.key
      })
    }), T(this, "renderSubscriber", (e, t, n) => {
      var i;
      return null == e ? null : (0, r.jsx)(d.u, {
        __unsupportedReactNodeAsText: (0, r.jsx)(p.Z, {
          user: e.user,
          nick: e.nick
        }),
        "aria-label": null != (i = e.nick) ? i : e.user.tag,
        children: (0, r.jsx)(g.qEK, {
          tabIndex: false,
          "aria-label": e.user.username,
          src: null != e ? e.user.getAvatarURL(this.props.guildId, 32) : null,
          className: a()(S.avatar, t, null != t ? S.subscriberMask : null),
          size: g.EFr.SIZE_32
        })
      }, n)
    }), T(this, "renderSubscribersPopout", () => (0, r.jsx)(g.Ttm, {
      className: S.subscribersPopout,
      children: this.props.subscribers.map(e => (0, r.jsxs)("div", {
        className: S.subscribersPopoutUser,
        children: [(0, r.jsx)(g.qEK, {
          src: e.user.getAvatarURL(this.props.guildId, 32),
          "aria-label": e.user.username,
          size: g.EFr.SIZE_32,
          className: S.avatar
        }), (0, r.jsx)("div", {
          className: S.subscribersPopoutUsername,
          children: (0, r.jsx)(p.Z, {
            user: e.user,
            nick: e.nick
          })
        })]
      }, e.user.id))
    })), T(this, "renderMoreSubscribers", (e, t, n) => (0, r.jsx)(g.yRy, {
      targetElementRef: this.subscribersPopoutTargetRef,
      renderPopout: this.renderSubscribersPopout,
      position: "bottom",
      autoInvert: false,
      children: t => (0, r.jsx)("div", function(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(t)).forEach(function(n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
      }(function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            T(e, t, n[t])
          })
        }
        return e
      }({
        className: S.moreSubscribers
      }, t), {
        ref: this.subscribersPopoutTargetRef,
        children: e
      }))
    }, n))
  }
}
let Z = Chunk442837.ZP.connectStores([Chunk430824.Z, Chunk905128.Z, Chunk999382.Z, Chunk899667.Z, Chunk594174.default, Chunk271383.ZP], () => {
  var e, t;
  let n = Chunk999382.Z.getGuildId(),
    r = null != (t = null == (e = Chunk430824.Z.getGuild(require)) ? true : module.premiumTier) ? exports : Chunk981631.Eu4.NONE,
    i = (0, Chunk151494.I)(require),
    l = null != require ? Chunk899667.Z.getAppliedGuildBoostsForGuild(require) : null,
    a = o()(null != Chunk120356 ? Chunk120356 : []).uniqBy(e => e.userId),
    s = a.map(e => ({
      user: C.default.getUser(e.userId),
      nick: v.ZP.getNick(n, e.userId)
    })).filter(e => null != e.user).value();
  return {
    guildId: require,
    currentTier: Chunk54381,
    levelSubscriptionCount: Chunk473749,
    subscribers: Chunk392711,
    uniqueSubscriberCount: a.size()
  }
})(w)