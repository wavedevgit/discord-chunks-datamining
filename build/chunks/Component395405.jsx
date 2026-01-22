/** Chunk was on 47841 **/
/** chunk id: 395405, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => w
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  c = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk319060 = require("./319060.js"),
  Chunk397927 = require("./397927.js"),
  Chunk923408 = require("./923408.js"),
  Chunk297413 = require("./297413.jsx"),
  Chunk555337 = require("./555337.js"),
  Chunk645619 = require("./645619.js"),
  Chunk434564 = require("./434564.js"),
  Chunk199139 = require("./199139.jsx"),
  Chunk636585 = require("./636585.jsx"),
  Chunk859241 = require("./859241.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk473145 = require("./473145.js"),
  Chunk240248 = require("./240248.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk306769 = require("./306769.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let C = (0, Chunk240248.xI)(Chunk319060.A.GUILD_SETTINGS_PREMIUM_TIER_STATUS_PROGRESS_WITH_SUBSCRIPTIONS_MARGIN_TOP);
class P extends Chunk64700.Component {
  componentDidMount() {
    this.measure();
    let {
      guildId: e
    } = this.props;
    null != e && (0, g.VU)(e), window.addEventListener("resize", this.measure)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.measure)
  }
  componentDidUpdate() {
    null != this.state.tierPositions || Object.values(this.tierRefs).some(e => null == e) || this.measure()
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
    let s = {
        numRequired: 0,
        y: 0,
        key: h.A
      },
      a = e.map(e => {
        var n;
        return {
          numRequired: _.M2T[e.tier],
          name: (0, E.gb)(e.tier),
          y: null != (n = t[e.tier]) ? n : 0,
          key: e.tier
        }
      });
    return (0, r.jsx)(h.h, {
      currentTier: l,
      className: i > 0 ? T.mm : T.qB,
      progress: i,
      tiers: [s, ...a],
      initialAnimationDelay: 500,
      onAnimatedTierMaker: this.handleAnimatedTier
    })
  }
  renderTierNone() {
    return (0, r.jsxs)("div", {
      className: T.lV,
      ref: this.defaultTierRef,
      children: [(0, r.jsx)(f.Text, {
        variant: "text-md/medium",
        color: "text-strong",
        children: S.intl.string(S.t["76OoX8"])
      }), (0, r.jsx)(f.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        className: T.Dw,
        children: S.intl.string(S.t.DaYNQQ)
      })]
    })
  }
  renderSubscribers() {
    let {
      subscribers: e,
      uniqueSubscriberCount: t,
      guildId: n
    } = this.props;
    return (0, r.jsxs)("div", {
      ref: this.defaultTierRef,
      className: T._s,
      children: [(0, r.jsx)(j.A, {
        guildId: null != n ? n : true,
        users: e,
        renderUser: this.renderSubscriber,
        renderMoreUsers: this.renderMoreSubscribers,
        max: 5
      }), (0, r.jsx)("div", {
        className: T.iL,
        children: S.intl.format(S.t["0r7snZ"], {
          count: t
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
    return null == n ? (0, r.jsx)(f.y$y, {
      type: f.y$y.Type.SPINNING_CIRCLE
    }) : null == e ? null : (0, r.jsx)("div", {
      children: (0, r.jsxs)("div", {
        className: T.Qs,
        children: [this.renderProgressBar(l), (0, r.jsxs)("div", {
          className: T.cK,
          children: [0 === i ? this.renderTierNone() : this.renderSubscribers(), l.map((r, i, l) => t({
            tier: r,
            tiers: l,
            tierIndex: i,
            onSetRef: this.setTierRef,
            isAnimatedTo: _.M2T[this.state.animatedTier] >= _.M2T[r.tier],
            subscriptionCount: n,
            guildId: e
          }))]
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), I(this, "tierRefs", {}), I(this, "defaultTierRef", i.createRef()), I(this, "subscribersPopoutTargetRef", i.createRef()), I(this, "state", {
      tierPositions: null,
      animatedTier: _.TVA.NONE
    }), I(this, "measure", () => {
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
        } = i.getBoundingClientRect(), s = e > 0 ? C : 0;
        r[t] = l - n + 32 - s
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
      return null == e ? null : (0, r.jsx)(d.m, {
        __unsupportedReactNodeAsText: (0, r.jsx)(b.A, {
          user: e.user,
          nick: e.nick
        }),
        "aria-label": null != (i = e.nick) ? i : e.user.tag,
        children: (0, r.jsx)(f.euF, {
          tabIndex: false,
          "aria-label": e.user.username,
          src: null != e ? e.user.getAvatarURL(this.props.guildId, 32) : null,
          className: s()(T.my, t, null != t ? T.rE : null),
          size: f._3J.SIZE_32
        })
      }, n)
    }), I(this, "renderSubscribersPopout", () => (0, r.jsx)(f.HOs, {
      className: T.xM,
      children: this.props.subscribers.map(e => (0, r.jsxs)("div", {
        className: T.c4,
        children: [(0, r.jsx)(f.euF, {
          src: e.user.getAvatarURL(this.props.guildId, 32),
          "aria-label": e.user.username,
          size: f._3J.SIZE_32,
          className: T.my
        }), (0, r.jsx)("div", {
          className: T.Dt,
          children: (0, r.jsx)(b.A, {
            user: e.user,
            nick: e.nick
          })
        })]
      }, e.user.id))
    })), I(this, "renderMoreSubscribers", (e, t, n) => (0, r.jsx)(f.YNO, {
      targetElementRef: this.subscribersPopoutTargetRef,
      renderPopout: this.renderSubscribersPopout,
      position: "bottom",
      autoInvert: false,
      children: t => {
        var n, i;
        return (0, r.jsx)("div", (n = function(e) {
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
        }({
          className: T.h1
        }, t), i = i = {
          ref: this.subscribersPopoutTargetRef,
          children: e
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
        }), n))
      }
    }, n))
  }
}
let w = Chunk311907.Ay.connectStores([Chunk71393.A, Chunk645619.A, Chunk555337.A, Chunk859241.A, Chunk287809.default, Chunk696451.Ay], () => {
  var e, t;
  let n = m.A.getGuildId(),
    r = null != (e = null == (t = v.A.getGuild(n)) ? true : t.premiumTier) ? e : _.TVA.NONE,
    i = (0, x.G)(n),
    l = null != n ? O.A.getAppliedGuildBoostsForGuild(n) : null,
    s = c()(null != l ? l : []).uniqBy(e => e.userId),
    a = s.map(e => ({
      user: A.default.getUser(e.userId),
      nick: y.Ay.getNick(n, e.userId)
    })).filter(e => null != e.user).value();
  return {
    guildId: n,
    currentTier: r,
    levelSubscriptionCount: i,
    subscribers: a,
    uniqueSubscriberCount: s.size()
  }
})(P)