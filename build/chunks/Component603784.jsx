/** Chunk was on 29679 **/
/** chunk id: 603784, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk726542 = require("./726542.js"),
  Chunk100527 = require("./100527.js"),
  Chunk933557 = require("./933557.js"),
  Chunk456077 = require("./456077.jsx"),
  Chunk210887 = require("./210887.js"),
  Chunk598077 = require("./598077.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk411198 = require("./411198.js"),
  Chunk51144 = require("./51144.js"),
  Chunk426563 = require("./426563.js"),
  Chunk909746 = require("./909746.js"),
  Chunk501801 = require("./501801.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk617314 = require("./617314.js");

function S(e) {
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
class P extends Chunk647438.PureComponent {
  render() {
    let {
      user: e,
      onContextMenu: t
    } = this.props;
    return (0, Chunk951288.jsxs)("span", {
      onContextMenu: exports,
      className: Chunk617314.userHook,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        children: Chunk51144.ZP.getUserTag(module, {
          mode: "username"
        })
      }), "0" !== module.discriminator && (0, Chunk951288.jsxs)(Chunk481060.Text, {
        variant: "text-xs/normal",
        className: Chunk617314.discrim,
        children: ["#", module.discriminator]
      })]
    })
  }
}
let w = Chunk647438.forwardRef((e, t) => {
  let n, {
      log: l,
      className: o,
      expanded: f,
      guildId: v,
      guild: w,
      onChannelContextMenu: Z,
      onContentClick: R,
      onHeaderClick: D,
      onTargetContextMenu: A,
      onUserContextMenu: L,
      theme: k
    } = e,
    G = i.useRef(null),
    M = function() {
      let {
        changes: e
      } = l;
      return (l.actionType !== N.vB8.DELETE || l.action === N.rsA.MEMBER_BAN_ADD || l.action === N.rsA.MEMBER_KICK || l.action === N.rsA.MEMBER_PRUNE) && null != e && e.some(e => !(0, y.xO)(l, e))
    }(),
    U = I.headerDefault;
  f ? U = I.headerExpanded : M && (U = I.headerClickable);
  let B = l.timestampStart.calendar(),
    F = l.timestampEnd.calendar();
  n = B === F ? (0, r.jsx)(d.Text, {
    className: I.timestamp,
    variant: "text-sm/normal",
    children: B
  }) : (0, r.jsxs)(d.Text, {
    className: I.timestamp,
    variant: "text-sm/normal",
    children: [B, "—", F]
  });
  let H = M ? D : N.dG4;
  return (0, r.jsx)(s.mh, {
    id: l.id,
    children: e => (0, r.jsxs)("div", {
      ref: t,
      className: a()(I.auditLog, o),
      children: [(0, r.jsxs)(d.P3F, T(S({
        className: U,
        "aria-expanded": f,
        onClick: H
      }, e), {
        children: [(0, r.jsx)(y.mp, {
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
          if (null != e && null != t) return (0, r.jsx)(p.Z, {
            targetElementRef: G,
            user: e,
            guildId: v,
            newAnalyticsLocations: [g.Z.AVATAR],
            children: e => {
              var t;
              return (0, r.jsx)(d.qEK, T(S({}, e), {
                ref: G,
                onClick: t => {
                  t.stopPropagation(), e.onClick(t)
                },
                className: I.avatar,
                src: l.action === N.rsA.AUTO_MODERATION_BLOCK_MESSAGE || l.action === N.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL || l.action === N.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || l.action === N.rsA.AUTO_MODERATION_QUARANTINE_USER ? (0, O.j)() : null == (t = l.user) ? true : t.getAvatarURL(v, 40),
                "aria-hidden": true,
                size: d.EFr.SIZE_40
              }))
            }
          });
          if (null != n) {
            let e = u.Z.get(n);
            if (null != e) {
              let t = (0, c.wj)(k) ? e.icon.darkSVG : e.icon.lightSVG;
              return (0, r.jsx)(d.qEK, {
                className: I.avatar,
                src: t,
                "aria-hidden": true,
                size: d.EFr.SIZE_40
              })
            }
          }
          return null
        }(), (0, r.jsxs)("div", {
          className: I.timeWrap,
          children: [(0, r.jsx)("div", {
            className: I.title,
            children: function() {
              var e;
              let t, {
                user: n,
                target: i,
                options: a
              } = l;
              t = (0, _.lM)(i) ? i.name : i.toString();
              let s = C.N5(l);
              return null != s ? (0, r.jsx)("div", {
                className: I.overflowEllipsis,
                children: E.intl.format(s, {
                  user: n,
                  target: t,
                  userHook: (e, t) => {
                    if (null != l.user) return (0, r.jsx)(P, {
                      user: l.user,
                      onContextMenu: L
                    }, t);
                    if (null != l.options.integration_type) {
                      var n;
                      let e = u.Z.get(l.options.integration_type);
                      return null != (n = null == e ? true : e.name) ? n : E.intl.string(E.t["n+olu7"])
                    }
                    return E.intl.string(E.t["30mdIx"])
                  },
                  targetHook: (e, t) => l.targetType === N.KFR.USER && l.target instanceof h.Z ? (0, r.jsx)(P, {
                    user: l.target,
                    onContextMenu: A
                  }, t) : (0, r.jsx)("span", {
                    onContextMenu: A,
                    children: e
                  }, t),
                  count: null != (e = a.count) ? e : "",
                  channel: null == a.channel || "string" == typeof a.channel ? a.channel : (0, m.F6)(a.channel, x.default, b.Z, true),
                  channelHook: (e, t) => (0, r.jsx)("span", {
                    onContextMenu: Z,
                    children: e
                  }, t),
                  subtarget: a.subtarget
                })
              }) : null
            }()
          }), n]
        }), M ? (0, r.jsx)(j.Z, {
          className: I.expand,
          foreground: I.expandForeground,
          expanded: f,
          "aria-hidden": true
        }) : null]
      })), f ? (0, r.jsx)("div", {
        className: I.divider
      }) : null, f && null != w ? (0, r.jsx)(y.tP, {
        log: l,
        guild: w,
        onContentClick: R
      }) : null]
    })
  })
});
w.displayName = "GuildSettingsAuditLogEntry";
let Z = Chunk442837.ZP.connectStores([Chunk210887.Z], () => ({
  theme: Chunk210887.Z.theme
}), {
  forwardRef: true
})(w)