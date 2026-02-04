/** Chunk was on 21738 **/
/** chunk id: 681613, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk290987 = require("./290987.jsx"),
  Chunk342296 = require("./342296.jsx"),
  Chunk636585 = require("./636585.jsx"),
  Chunk427262 = require("./427262.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk239997 = require("./239997.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      A(e, t, n[t])
    })
  }
  return e
}
let b = {
  [Chunk652215.g_B.NOW_PLAYING]: {
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
  [Chunk652215.g_B.RECENTLY_PLAYED]: {
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
  [Chunk652215.g_B.EVER_PLAYED]: {
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
class E extends Chunk64700.PureComponent {
  renderDescription(e, t) {
    let n = b[e];
    return 1 === t.length ? n.single(t[0].user, e => this.renderActivityDiscordTag(e)) : 2 === t.length ? n.double(t[0].user, t[1].user, e => this.renderActivityDiscordTag(e)) : n.other(t.length)
  }
  renderActivityDiscordTag(e) {
    return (0, r.jsx)(d.A, {
      targetElementRef: this.activityDiscordTagRef,
      user: e,
      newAnalyticsLocations: [c.A.USERNAME],
      clickTrap: true,
      children: t => {
        var n, i;
        return (0, r.jsx)("span", (n = _({
          ref: this.activityDiscordTagRef,
          className: m.Xh
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
    } = e;
    return 0 === i.length ? null : (0, r.jsxs)("div", {
      className: a()(m.r8, t),
      children: [(0, r.jsx)(p.A, {
        className: m.Fk,
        users: i.map(e => {
          let {
            user: t
          } = e;
          return t
        }),
        renderUser: this.renderPlayer,
        max: 4,
        renderMoreUsers: this.renderPlayerOverflow
      }), (0, r.jsx)("div", {
        className: m.h_,
        children: this.renderDescription(n, i)
      })]
    })
  }
  constructor(...e) {
    super(...e), A(this, "activityDiscordTagRef", i.createRef()), A(this, "playerAvatarRef", i.createRef()), A(this, "renderUserTooltip", (e, t, n) => (0, r.jsxs)("div", {
      className: m.YL,
      children: [(0, r.jsx)("div", {
        children: h.Ay.getUserTag(e)
      }), (0, r.jsx)(u.Ay, {
        className: m.ER,
        start: t,
        end: n,
        location: u.Ay.Locations.ACTIVITY_FEED
      })]
    })), A(this, "renderPlayer", (e, t, n, i) => {
      if (null == e) return null;
      let l = this.props.reason.userInfo.find(t => t.user === e);
      return null == l ? null : (0, r.jsx)(d.A, {
        targetElementRef: this.playerAvatarRef,
        user: e,
        newAnalyticsLocations: [c.A.AVATAR],
        clickTrap: true,
        children: t => (0, r.jsx)(s.m, {
          __unsupportedReactNodeAsText: this.renderUserTooltip(e, l.startTime, l.endTime),
          "aria-label": (0, h.QV)(e, {
            decoration: "never"
          }),
          children: (0, r.jsx)(o.euF, _({
            ref: this.playerAvatarRef,
            className: a()(m.jd, {
              [m.hC]: !i
            }),
            src: e.getAvatarURL(true, 32),
            "aria-label": e.username,
            size: o._3J.SIZE_32
          }, t))
        })
      }, e.id)
    }), A(this, "renderPlayerOverflow", (e, t, n) => (0, r.jsx)("div", {
      className: m.gQ,
      children: e
    }, n))
  }
}
let O = E