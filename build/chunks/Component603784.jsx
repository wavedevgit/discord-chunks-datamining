/** Chunk was on 9536 **/
/** chunk id: 603784, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => Z
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk726542 = require("./726542.js"),
  Chunk100527 = require("./100527.js"),
  Chunk933557 = require("./933557.js"),
  Chunk670188 = require("./670188.jsx"),
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
  Chunk876334 = require("./876334.js");

function _(e) {
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
class P extends Chunk473749.PureComponent {
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
        children: O.ZP.getUserTag(e, {
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
let w = Chunk473749.forwardRef((e, t) => {
  let n, {
      log: l,
      className: o,
      expanded: b,
      guildId: O,
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
      return (l.actionType !== E.vB8.DELETE || l.action === E.rsA.MEMBER_BAN_ADD || l.action === E.rsA.MEMBER_KICK || l.action === E.rsA.MEMBER_PRUNE) && null != e && e.some(e => !(0, N.xO)(l, e))
    }(),
    U = S.headerDefault;
  b ? U = S.headerExpanded : M && (U = S.headerClickable);
  let B = l.timestampStart.calendar(),
    F = l.timestampEnd.calendar();
  n = B === F ? (0, r.jsx)(d.Text, {
    className: S.timestamp,
    variant: "text-sm/normal",
    children: B
  }) : (0, r.jsxs)(d.Text, {
    className: S.timestamp,
    variant: "text-sm/normal",
    children: [B, "—", F]
  });
  let H = M ? D : E.dG4;
  return (0, r.jsx)(s.mh, {
    id: l.id,
    children: e => (0, r.jsxs)("div", {
      ref: t,
      className: a()(S.auditLog, o),
      children: [(0, r.jsxs)(d.P3F, T(_({
        className: U,
        "aria-expanded": b,
        onClick: H
      }, e), {
        children: [(0, r.jsx)(N.mp, {
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
          if (null != e && null != t) return (0, r.jsx)(m.Z, {
            targetElementRef: G,
            user: e,
            guildId: O,
            newAnalyticsLocations: [g.Z.AVATAR],
            children: e => {
              var t;
              return (0, r.jsx)(d.qEK, T(_({}, e), {
                ref: G,
                onClick: t => {
                  t.stopPropagation(), e.onClick(t)
                },
                className: S.avatar,
                src: l.action === E.rsA.AUTO_MODERATION_BLOCK_MESSAGE || l.action === E.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL || l.action === E.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || l.action === E.rsA.AUTO_MODERATION_QUARANTINE_USER ? (0, y.j)() : null == (t = l.user) ? true : t.getAvatarURL(O, 40),
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
                className: S.avatar,
                src: t,
                "aria-hidden": true,
                size: d.EFr.SIZE_40
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
                options: a
              } = l;
              t = (0, v.lM)(i) ? i.name : i.toString();
              let s = C.N5(l);
              return null != s ? (0, r.jsx)("div", {
                className: S.overflowEllipsis,
                children: I.intl.format(s, {
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
                      return null != (n = null == e ? true : e.name) ? n : I.intl.string(I.t["n+olu7"])
                    }
                    return I.intl.string(I.t["30mdIx"])
                  },
                  targetHook: (e, t) => l.targetType === E.KFR.USER && l.target instanceof p.Z ? (0, r.jsx)(P, {
                    user: l.target,
                    onContextMenu: A
                  }, t) : (0, r.jsx)("span", {
                    onContextMenu: A,
                    children: e
                  }, t),
                  count: null != (e = a.count) ? e : "",
                  channel: null == a.channel || "string" == typeof a.channel ? a.channel : (0, f.F6)(a.channel, x.default, h.Z, true),
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
          className: S.expand,
          foreground: S.expandForeground,
          expanded: b,
          "aria-hidden": true
        }) : null]
      })), b ? (0, r.jsx)("div", {
        className: S.divider
      }) : null, b && null != w ? (0, r.jsx)(N.tP, {
        log: l,
        guild: w,
        onContentClick: R
      }) : null]
    })
  })
});
w.displayName = "GuildSettingsAuditLogEntry";
let Z = Chunk442837.ZP.connectStores([Chunk210887.Z], () => ({
  theme: b.Z.theme
}), {
  forwardRef: true
})(w)