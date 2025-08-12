/** Chunk was on 5533 **/
/** chunk id: 603784, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk123007 = require("./123007.js");

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
class P extends Chunk73800.PureComponent {
  render() {
    let {
      user: e,
      onContextMenu: t
    } = this.props;
    return (0, Chunk255367.jsxs)("span", {
      onContextMenu: exports,
      className: Chunk123007.userHook,
      children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        children: Chunk51144.ZP.getUserTag(module, {
          mode: "username"
        })
      }), "0" !== module.discriminator && (0, Chunk255367.jsxs)(Chunk481060.Text, {
        variant: "text-xs/normal",
        className: Chunk123007.discrim,
        children: ["#", module.discriminator]
      })]
    })
  }
}
let w = Chunk73800.forwardRef((e, t) => {
  let n, {
      log: l,
      className: o,
      expanded: h,
      guildId: _,
      guild: w,
      onChannelContextMenu: R,
      onContentClick: Z,
      onHeaderClick: D,
      onTargetContextMenu: A,
      onUserContextMenu: k,
      theme: L
    } = e,
    M = i.useRef(null),
    G = function() {
      let {
        changes: e
      } = l;
      return (l.actionType !== N.vB8.DELETE || l.action === N.rsA.MEMBER_BAN_ADD || l.action === N.rsA.MEMBER_KICK || l.action === N.rsA.MEMBER_PRUNE) && null != e && e.some(e => !(0, C.xO)(l, e))
    }(),
    U = E.headerDefault;
  h ? U = E.headerExpanded : G && (U = E.headerClickable);
  let B = l.timestampStart.calendar(),
    F = l.timestampEnd.calendar();
  n = B === F ? (0, r.jsx)(d.Text, {
    className: E.timestamp,
    variant: "text-sm/normal",
    children: B
  }) : (0, r.jsxs)(d.Text, {
    className: E.timestamp,
    variant: "text-sm/normal",
    children: [B, "—", F]
  });
  let H = G ? D : N.dG4;
  return (0, r.jsx)(s.mh, {
    id: l.id,
    children: e => (0, r.jsxs)("div", {
      ref: t,
      className: a()(E.auditLog, o),
      children: [(0, r.jsxs)(d.P3F, T(S({
        className: U,
        "aria-expanded": h,
        onClick: H
      }, e), {
        children: [(0, r.jsx)(C.mp, {
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
            targetElementRef: M,
            user: e,
            guildId: _,
            newAnalyticsLocations: [m.Z.AVATAR],
            children: e => {
              var t;
              return (0, r.jsx)(d.qEK, T(S({}, e), {
                ref: M,
                onClick: t => {
                  t.stopPropagation(), e.onClick(t)
                },
                className: E.avatar,
                src: l.action === N.rsA.AUTO_MODERATION_BLOCK_MESSAGE || l.action === N.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL || l.action === N.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || l.action === N.rsA.AUTO_MODERATION_QUARANTINE_USER ? (0, O.j)() : null == (t = l.user) ? true : t.getAvatarURL(_, 40),
                "aria-hidden": true,
                size: d.EFr.SIZE_40
              }))
            }
          });
          if (null != n) {
            let e = u.Z.get(n);
            if (null != e) {
              let t = (0, c.wj)(L) ? e.icon.darkSVG : e.icon.lightSVG;
              return (0, r.jsx)(d.qEK, {
                className: E.avatar,
                src: t,
                "aria-hidden": true,
                size: d.EFr.SIZE_40
              })
            }
          }
          return null
        }(), (0, r.jsxs)("div", {
          className: E.timeWrap,
          children: [(0, r.jsx)("div", {
            className: E.title,
            children: function() {
              let e, {
                user: t,
                target: n,
                options: i
              } = l;
              e = (0, v.lM)(n) ? n.name : n.toString();
              let a = y.N5(l);
              return null != a ? (0, r.jsx)("div", {
                className: E.overflowEllipsis,
                children: I.intl.format(a, {
                  user: t,
                  target: e,
                  userHook: (e, t) => {
                    if (null != l.user) return (0, r.jsx)(P, {
                      user: l.user,
                      onContextMenu: k
                    }, t);
                    if (null != l.options.integration_type) {
                      var n;
                      let e = u.Z.get(l.options.integration_type);
                      return null != (n = null == e ? true : e.name) ? n : I.intl.string(I.t["n+olu7"])
                    }
                    return I.intl.string(I.t["30mdIy"])
                  },
                  targetHook: (e, t) => l.targetType === N.KFR.USER && l.target instanceof f.Z ? (0, r.jsx)(P, {
                    user: l.target,
                    onContextMenu: A
                  }, t) : (0, r.jsx)("span", {
                    onContextMenu: A,
                    children: e
                  }, t),
                  count: i.count,
                  channel: null == i.channel || "string" == typeof i.channel ? i.channel : (0, g.F6)(i.channel, x.default, b.Z, true),
                  channelHook: (e, t) => (0, r.jsx)("span", {
                    onContextMenu: R,
                    children: e
                  }, t),
                  subtarget: i.subtarget
                })
              }) : null
            }()
          }), n]
        }), G ? (0, r.jsx)(j.Z, {
          className: E.expand,
          foreground: E.expandForeground,
          expanded: h,
          "aria-hidden": true
        }) : null]
      })), h ? (0, r.jsx)("div", {
        className: E.divider
      }) : null, h && null != w ? (0, r.jsx)(C.tP, {
        log: l,
        guild: w,
        onContentClick: Z
      }) : null]
    })
  })
});
w.displayName = "GuildSettingsAuditLogEntry";
let R = Chunk442837.ZP.connectStores([Chunk210887.Z], () => ({
  theme: Chunk210887.Z.theme
}), {
  forwardRef: true
})(w)