/** Chunk was on 47841 **/
/** chunk id: 258665, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => w
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk837381 = require("./837381.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk573648 = require("./573648.js"),
  Chunk793574 = require("./793574.js"),
  Chunk47167 = require("./47167.js"),
  Chunk342296 = require("./342296.jsx"),
  Chunk544028 = require("./544028.js"),
  Chunk427157 = require("./427157.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk860689 = require("./860689.js"),
  Chunk427262 = require("./427262.js"),
  Chunk820883 = require("./820883.js"),
  Chunk276373 = require("./276373.js"),
  Chunk438407 = require("./438407.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk159529 = require("./159529.js");

function I(e) {
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

function T(e, t) {
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
class C extends Chunk64700.PureComponent {
  render() {
    let {
      user: e,
      onContextMenu: t
    } = this.props;
    return (0, r.jsxs)("span", {
      onContextMenu: t,
      className: S.userHook,
      children: [(0, r.jsx)(d.Text, {
        variant: "text-md/normal",
        children: O.Ay.getUserTag(e, {
          mode: "username"
        })
      }), "0" !== e.discriminator && (0, r.jsxs)(d.Text, {
        variant: "text-xs/normal",
        className: S.discrim,
        children: ["#", e.discriminator]
      })]
    })
  }
}
let P = Chunk64700.forwardRef((e, t) => {
  let n, {
      log: l,
      className: o,
      expanded: f,
      guildId: O,
      guild: P,
      onChannelContextMenu: w,
      onContentClick: R,
      onHeaderClick: D,
      onTargetContextMenu: G,
      onUserContextMenu: L,
      theme: k
    } = e,
    M = i.useRef(null),
    U = function() {
      let {
        changes: e
      } = l;
      return (l.actionType !== E.RWi.DELETE || l.action === E.F_X.MEMBER_BAN_ADD || l.action === E.F_X.MEMBER_KICK || l.action === E.F_X.MEMBER_PRUNE) && null != e && e.some(e => !(0, A.kW)(l, e))
    }(),
    B = S.headerDefault;
  f ? B = S.headerExpanded : U && (B = S.headerClickable);
  let F = l.timestampStart.calendar(),
    H = l.timestampEnd.calendar();
  n = F === H ? (0, r.jsx)(d.Text, {
    className: S.timestamp,
    variant: "text-sm/normal",
    children: F
  }) : (0, r.jsxs)(d.Text, {
    className: S.timestamp,
    variant: "text-sm/normal",
    children: [F, "—", H]
  });
  let V = U ? D : E.tEg;
  return (0, r.jsx)(a.tG, {
    id: l.id,
    children: e => (0, r.jsxs)("div", {
      ref: t,
      className: s()(S.auditLog, o),
      children: [(0, r.jsxs)(d.DUT, T(I({
        className: B,
        "aria-expanded": f,
        onClick: V
      }, e), {
        children: [(0, r.jsx)(A.Hg, {
          action: l.action,
          actionType: l.actionType,
          targetType: l.targetType
        }), function() {
          let {
            user: e,
            userId: t,
            options: {
              integration_type: n
            }
          } = l;
          if (null != e && null != t) return (0, r.jsx)(p.A, {
            targetElementRef: M,
            user: e,
            guildId: O,
            newAnalyticsLocations: [g.A.AVATAR],
            children: e => {
              var t;
              return (0, r.jsx)(d.euF, T(I({}, e), {
                ref: M,
                onClick: t => {
                  t.stopPropagation(), e.onClick(t)
                },
                className: S.avatar,
                src: l.action === E.F_X.AUTO_MODERATION_BLOCK_MESSAGE || l.action === E.F_X.AUTO_MODERATION_FLAG_TO_CHANNEL || l.action === E.F_X.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || l.action === E.F_X.AUTO_MODERATION_QUARANTINE_USER ? (0, v.q)() : null == (t = l.user) ? true : t.getAvatarURL(O, 40),
                "aria-hidden": true,
                size: d._3J.SIZE_40
              }))
            }
          });
          if (null != n) {
            let e = u.A.get(n);
            if (null != e) {
              let t = (0, c.Mw)(k) ? e.icon.darkSVG : e.icon.lightSVG;
              return (0, r.jsx)(d.euF, {
                className: S.avatar,
                src: t,
                "aria-hidden": true,
                size: d._3J.SIZE_40
              })
            }
          }
          return null
        }(), (0, r.jsxs)("div", {
          className: S.timeWrap,
          children: [(0, r.jsx)("div", {
            className: S.title,
            children: function() {
              var e;
              let t, {
                user: n,
                target: i,
                options: s
              } = l;
              t = (0, _.fh)(i) ? i.name : i.toString();
              let a = y.Lw(l);
              return null != a ? (0, r.jsx)("div", {
                className: S.overflowEllipsis,
                children: N.intl.format(a, {
                  user: n,
                  target: t,
                  userHook: (e, t) => {
                    if (null != l.user) return (0, r.jsx)(C, {
                      user: l.user,
                      onContextMenu: L
                    }, t);
                    if (null != l.options.integration_type) {
                      var n;
                      let e = u.A.get(l.options.integration_type);
                      return null != (n = null == e ? true : e.name) ? n : N.intl.string(N.t["n+olu7"])
                    }
                    return N.intl.string(N.t["30mdIx"])
                  },
                  targetHook: (e, t) => l.targetType === E.GaG.USER && l.target instanceof b.A ? (0, r.jsx)(C, {
                    user: l.target,
                    onContextMenu: G
                  }, t) : (0, r.jsx)("span", {
                    onContextMenu: G,
                    children: e
                  }, t),
                  count: null != (e = s.count) ? e : "",
                  channel: null == s.channel || "string" == typeof s.channel ? s.channel : (0, m.m1)(s.channel, x.default, h.A, true),
                  channelHook: (e, t) => (0, r.jsx)("span", {
                    onContextMenu: w,
                    children: e
                  }, t),
                  subtarget: s.subtarget
                })
              }) : null
            }()
          }), n]
        }), U ? (0, r.jsx)(j.A, {
          className: S.expand,
          foreground: S.expandForeground,
          expanded: f,
          "aria-hidden": true
        }) : null]
      })), f ? (0, r.jsx)("div", {
        className: S.divider
      }) : null, f && null != P ? (0, r.jsx)(A.ri, {
        log: l,
        guild: P,
        onContentClick: R
      }) : null]
    })
  })
});
P.displayName = "GuildSettingsAuditLogEntry";
let w = Chunk311907.Ay.connectStores([Chunk544028.A], () => ({
  theme: f.A.theme
}), {
  forwardRef: true
})(P)