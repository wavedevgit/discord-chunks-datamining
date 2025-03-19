/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => B
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(392711),
  o = n.n(l),
  c = n(442837),
  A = n(477690),
  d = n(481060),
  u = n(179360),
  g = n(129861),
  f = n(999382),
  m = n(733683),
  p = n(237583),
  h = n(899667),
  C = n(271383),
  b = n(594174),
  v = n(267642),
  x = n(624138),
  N = n(981631),
  j = n(388032),
  E = n(288661);

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
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
}
let w = (0, x.Mg)(A.Z.GUILD_SETTINGS_PREMIUM_TIER_STATUS_PROGRESS_WITH_SUBSCRIPTIONS_MARGIN_TOP);
class P extends i.Component {
  componentDidMount() {
    this.measure();
    let {
      guildId: e
    } = this.props;
    null != e && (0, u.C0)(e), window.addEventListener("resize", this.measure)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.measure)
  }
  componentDidUpdate() {
    !(null != this.state.tierPositions || Object.values(this.tierRefs).some(e => null == e)) && this.measure()
  }
  getSubscriptionCount() {
    let {
      subscriptions: e
    } = this.props;
    return null != e ? e.length : 0
  }
  renderProgressBar(e) {
    let {
      tierPositions: t
    } = this.state, {
      guildId: n
    } = this.props, i = this.getSubscriptionCount();
    if (null == t || null == n) return null;
    let s = {
        numRequired: 0,
        y: 0,
        key: m.x
      },
      a = (0, v.vn)(n),
      l = e.map(e => {
        var n;
        return {
          numRequired: a[e.tier],
          name: (0, v.nW)(e.tier),
          y: null !== (n = t[e.tier]) && void 0 !== n ? n : 0,
          key: e.tier
        }
      });
    return (0, r.jsx)(m.Z, {
      className: i > 0 ? E.progressWithSubscriptions : E.progress,
      progress: i,
      tiers: [s, ...l],
      initialAnimationDelay: 500,
      onAnimatedTierMaker: this.handleAnimatedTier
    })
  }
  renderTierNone() {
    return (0, r.jsxs)("div", {
      className: E.tierDefaultUnlocked,
      ref: this.defaultTierRef,
      children: [(0, r.jsx)(d.R94, {
        type: d.R94.Types.LABEL_BOLD,
        children: j.NW.string(j.t["76OoX1"])
      }), (0, r.jsx)(d.R94, {
        type: d.R94.Types.DESCRIPTION,
        className: E.tierDefaultUnlockedDescription,
        children: j.NW.string(j.t.DaYNQU)
      })]
    })
  }
  renderSubscribers() {
    let {
      subscribers: e,
      subscriberCount: t,
      guildId: n
    } = this.props;
    return (0, r.jsxs)("div", {
      ref: this.defaultTierRef,
      className: E.subscribers,
      children: [(0, r.jsx)(p.Z, {
        guildId: null != n ? n : void 0,
        users: e,
        renderUser: this.renderSubscriber,
        renderMoreUsers: this.renderMoreSubscribers,
        max: 5
      }), (0, r.jsx)("div", {
        className: E.subscriberCount,
        children: j.NW.format(j.t["0r7snZ"], {
          count: t
        })
      })]
    })
  }
  render() {
    let {
      guildId: e,
      renderTier: t,
      subscriptions: n,
      subscriberCount: i,
      tiers: s
    } = this.props;
    if (null == n) return (0, r.jsx)(d.$jN, {
      type: d.$jN.Type.SPINNING_CIRCLE
    });
    if (null == e) return null;
    let a = (0, v.vn)(e);
    return (0, r.jsx)("div", {
      children: (0, r.jsxs)("div", {
        className: E.content,
        children: [this.renderProgressBar(s), (0, r.jsxs)("div", {
          className: E.tiers,
          children: [0 === i ? this.renderTierNone() : this.renderSubscribers(), s.map((n, r, i) => t({
            tier: n,
            tiers: i,
            tierIndex: r,
            onSetRef: this.setTierRef,
            isAnimatedTo: a[this.state.animatedTier] >= a[n.tier],
            subscriptionCount: this.getSubscriptionCount(),
            guildId: e
          }))]
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), I(this, "tierRefs", {}), I(this, "defaultTierRef", i.createRef()), I(this, "state", {
      tierPositions: null,
      animatedTier: N.Eu4.NONE
    }), I(this, "measure", () => {
      let {
        subscriberCount: e
      } = this.props, t = this.defaultTierRef.current;
      if (null == t) return;
      let {
        top: n
      } = t.getBoundingClientRect(), r = {};
      for (let [t, i] of Object.entries(this.tierRefs)) {
        if (null == i) return;
        let {
          top: s
        } = i.getBoundingClientRect(), a = e > 0 ? w : 0;
        r[t] = s - n + 32 - a
      }
      this.setState({
        tierPositions: r
      })
    }), I(this, "setTierRef", (e, t) => {
      this.tierRefs[t.tier] = e
    }), I(this, "handleAnimatedTier", e => {
      this.setState({
        animatedTier: e.key
      })
    }), I(this, "renderSubscriber", (e, t, n) => {
      var i;
      return null == e ? null : (0, r.jsx)(d.ua7, {
        text: (0, r.jsx)(g.Z, {
          user: e.user,
          nick: e.nick
        }),
        "aria-label": null !== (i = e.nick) && void 0 !== i ? i : e.user.tag,
        children: n => (0, r.jsx)(d.qEK, y(O({}, n), {
          tabIndex: -1,
          src: null != e ? e.user.getAvatarURL(this.props.guildId, 32) : null,
          className: a()(E.avatar, t, null != t ? E.subscriberMask : null),
          size: d.EFr.SIZE_32
        }))
      }, n)
    }), I(this, "renderSubscribersPopout", () => (0, r.jsx)(d.Ttm, {
      className: E.subscribersPopout,
      children: this.props.subscribers.map(e => (0, r.jsxs)("div", {
        className: E.subscribersPopoutUser,
        children: [(0, r.jsx)(d.qEK, {
          src: e.user.getAvatarURL(this.props.guildId, 32),
          "aria-label": e.user.username,
          size: d.EFr.SIZE_32,
          className: E.avatar
        }), (0, r.jsx)("div", {
          className: E.subscribersPopoutUsername,
          children: (0, r.jsx)(g.Z, {
            user: e.user,
            nick: e.nick
          })
        })]
      }, e.user.id))
    })), I(this, "renderMoreSubscribers", (e, t, n) => (0, r.jsx)(d.yRy, {
      renderPopout: this.renderSubscribersPopout,
      position: "bottom",
      autoInvert: !1,
      children: t => (0, r.jsx)("div", y(O({
        className: E.moreSubscribers
      }, t), {
        children: e
      }))
    }, n))
  }
}
let B = c.ZP.connectStores([f.Z, b.default, h.Z, C.ZP], () => {
  let e = f.Z.getGuildId(),
    t = null != e ? h.Z.getAppliedGuildBoostsForGuild(e) : null,
    n = o()(null != t ? t : []).uniqBy(e => e.userId),
    r = n.map(t => ({
      user: b.default.getUser(t.userId),
      nick: C.ZP.getNick(e, t.userId)
    })).filter(e => null != e.user).value();
  return {
    guildId: e,
    subscriptions: t,
    subscribers: r,
    subscriberCount: n.size()
  }
})(P)