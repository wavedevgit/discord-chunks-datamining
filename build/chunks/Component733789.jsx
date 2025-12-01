/** Chunk was on 1272 **/
/** chunk id: 733789, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk707409 = require("./707409.jsx"),
  Chunk670188 = require("./670188.jsx"),
  Chunk237583 = require("./237583.jsx"),
  Chunk51144 = require("./51144.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk157684 = require("./157684.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}
let E = {
  [Chunk981631.AzA.NOW_PLAYING]: {
    single: (e, t) => g.intl.format(g.t.NEckza, {
      user1: e.username,
      user1Hook: () => t(e)
    }),
    double: (e, t, n) => g.intl.format(g.t["6uWulc"], {
      user1: e.username,
      user1Hook: () => n(e),
      user2: t.username,
      user2Hook: () => n(t)
    }),
    other: e => g.intl.format(g.t["8fMgRU"], {
      count: e
    })
  },
  [Chunk981631.AzA.RECENTLY_PLAYED]: {
    single: (e, t) => g.intl.format(g.t["nB/JNB"], {
      user1: e.username,
      user1Hook: () => t(e)
    }),
    double: (e, t, n) => g.intl.format(g.t.AZCcHU, {
      user1: e.username,
      user1Hook: () => n(e),
      user2: t.username,
      user2Hook: () => n(t)
    }),
    other: e => g.intl.format(g.t.yNuaTU, {
      count: e
    })
  },
  [Chunk981631.AzA.EVER_PLAYED]: {
    single: (e, t) => g.intl.format(g.t.Fecf3N, {
      user1: e.username,
      user1Hook: () => t(e)
    }),
    double: (e, t, n) => g.intl.format(g.t["0LiGbJ"], {
      user1: e.username,
      user1Hook: () => n(e),
      user2: t.username,
      user2Hook: () => n(t)
    }),
    other: e => g.intl.format(g.t.Yx1rjU, {
      count: e
    })
  }
};
class O extends Chunk473749.PureComponent {
  renderDescription(e, t) {
    let n = E[e];
    return 1 === t.length ? n.single(t[0].user, e => this.renderActivityDiscordTag(e)) : 2 === t.length ? n.double(t[0].user, t[1].user, e => this.renderActivityDiscordTag(e)) : n.other(t.length)
  }
  renderActivityDiscordTag(e) {
    return (0, r.jsx)(d.Z, {
      targetElementRef: this.activityDiscordTagRef,
      user: e,
      newAnalyticsLocations: [c.Z.USERNAME],
      clickTrap: true,
      children: t => {
        var n, i;
        return (0, r.jsx)("span", (n = b({
          ref: this.activityDiscordTagRef,
          className: m.username
        }, t), i = i = {
          children: e.username
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
    }, e.id)
  }
  render() {
    let {
      reason: e,
      className: t
    } = this.props, {
      type: n,
      userInfo: i
    } = module;
    return 0 === Chunk473749.length ? null : (0, Chunk54381.jsxs)("div", {
      className: a()(Chunk157684.recommendationActivity, exports),
      children: [(0, Chunk54381.jsx)(Chunk237583.Z, {
        className: Chunk157684.players,
        users: Chunk473749.map(e => {
          let {
            user: t
          } = e;
          return t
        }),
        renderUser: this.renderPlayer,
        max: 4,
        renderMoreUsers: this.renderPlayerOverflow
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk157684.description,
        children: this.renderDescription(require, Chunk473749)
      })]
    })
  }
  constructor(...e) {
    super(...e), _(this, "activityDiscordTagRef", i.createRef()), _(this, "playerAvatarRef", i.createRef()), _(this, "renderUserTooltip", (e, t, n) => (0, r.jsxs)("div", {
      className: m.tooltip,
      children: [(0, r.jsx)("div", {
        children: f.ZP.getUserTag(e)
      }), (0, r.jsx)(u.ZP, {
        className: m.tooltipTimestamp,
        start: t,
        end: n,
        location: u.ZP.Locations.ACTIVITY_FEED
      })]
    })), _(this, "renderPlayer", (e, t, n, i) => {
      if (null == e) return null;
      let l = this.props.reason.userInfo.find(t => t.user === e);
      return null == l ? null : (0, r.jsx)(d.Z, {
        targetElementRef: this.playerAvatarRef,
        user: e,
        newAnalyticsLocations: [c.Z.AVATAR],
        clickTrap: true,
        children: t => (0, r.jsx)(s.u, {
          __unsupportedReactNodeAsText: this.renderUserTooltip(e, l.startTime, l.endTime),
          "aria-label": (0, f.W5)(e, {
            decoration: "never"
          }),
          children: (0, r.jsx)(o.qEK, b({
            ref: this.playerAvatarRef,
            className: a()(m.playerAvatar, {
              [m.avatarMasked]: !i
            }),
            src: e.getAvatarURL(true, 32),
            "aria-label": e.username,
            size: o.EFr.SIZE_32
          }, t))
        })
      }, e.id)
    }), _(this, "renderPlayerOverflow", (e, t, n) => (0, r.jsx)("div", {
      className: m.playerOverflow,
      children: e
    }, n))
  }
}
let y = O