/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => T
});
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(91192),
  o = n(442837),
  c = n(780384),
  A = n(481060),
  d = n(726542),
  u = n(100527),
  g = n(933557),
  f = n(184301),
  m = n(347475),
  p = n(210887),
  h = n(598077),
  C = n(699516),
  b = n(594174),
  v = n(259580),
  x = n(51144),
  N = n(426563),
  j = n(909746),
  E = n(501801),
  I = n(981631),
  O = n(388032),
  y = n(152041);

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function P(e, t) {
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
class B extends i.PureComponent {
  render() {
    let {
      user: e,
      onContextMenu: t
    } = this.props;
    return (0, r.jsxs)("span", {
      onContextMenu: t,
      className: y.userHook,
      children: [(0, r.jsx)(A.Text, {
        variant: "text-md/normal",
        children: x.ZP.getUserTag(e, {
          mode: "username"
        })
      }), "0" !== e.discriminator && (0, r.jsxs)(A.Text, {
        variant: "text-xs/normal",
        className: y.discrim,
        children: ["#", e.discriminator]
      })]
    })
  }
}
class D extends i.PureComponent {
  hasChangesToRender() {
    let {
      log: e
    } = this.props, {
      changes: t
    } = e;
    return (e.actionType !== I.vB8.DELETE || e.action === I.rsA.MEMBER_BAN_ADD || e.action === I.rsA.MEMBER_KICK || e.action === I.rsA.MEMBER_PRUNE) && null != t && t.some(t => !(0, E.xO)(e, t))
  }
  renderTitle() {
    let {
      log: e,
      onUserContextMenu: t,
      onTargetContextMenu: n,
      onChannelContextMenu: i
    } = this.props, {
      user: s,
      target: a,
      options: l
    } = e, o = j.N5(e);
    return null != o ? (0, r.jsx)("div", {
      className: y.overflowEllipsis,
      children: O.NW.format(o, {
        user: s,
        target: a.toString(),
        userHook: (n, i) => {
          if (null != e.user) return (0, r.jsx)(B, {
            user: e.user,
            onContextMenu: t
          }, i);
          if (null != e.options.integration_type) {
            var s;
            let t = d.Z.get(e.options.integration_type);
            return null !== (s = null == t ? void 0 : t.name) && void 0 !== s ? s : O.NW.string(O.t["n+olu7"])
          }
          return O.NW.string(O.t["30mdIy"])
        },
        targetHook: (t, i) => e.targetType === I.KFR.USER && e.target instanceof h.Z ? (0, r.jsx)(B, {
          user: e.target,
          onContextMenu: n
        }, i) : (0, r.jsx)("span", {
          onContextMenu: n,
          children: t
        }, i),
        count: l.count,
        channel: null == l.channel || "string" == typeof l.channel ? l.channel : (0, g.F6)(l.channel, b.default, C.Z, !0),
        channelHook: (e, t) => (0, r.jsx)("span", {
          onContextMenu: i,
          children: e
        }, t),
        subtarget: l.subtarget
      })
    }) : null
  }
  renderChangeSummary() {
    let {
      expanded: e,
      log: t,
      guild: n,
      onContentClick: i
    } = this.props;
    return e && null != n ? (0, r.jsx)(E.tP, {
      log: t,
      guild: n,
      onContentClick: i
    }) : null
  }
  renderEntryAvatar() {
    let {
      props: {
        log: e,
        guildId: t,
        theme: n
      }
    } = this, {
      user: i,
      userId: s,
      options: {
        integration_type: a
      }
    } = e;
    if (null != i && null != s) return (0, r.jsx)(A.yRy, {
      preload: () => (0, f.Z)(s, i.getAvatarURL(t, 80), {
        guildId: t
      }),
      renderPopout: e => (0, r.jsx)(m.Z, P(w({}, e), {
        userId: s,
        guildId: t,
        newAnalyticsLocations: [u.Z.AVATAR]
      })),
      children: n => {
        var i;
        return (0, r.jsx)(A.qEK, P(w({}, n), {
          onClick: e => {
            e.stopPropagation(), n.onClick(e)
          },
          className: y.avatar,
          src: e.action === I.rsA.AUTO_MODERATION_BLOCK_MESSAGE || e.action === I.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL || e.action === I.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || e.action === I.rsA.AUTO_MODERATION_QUARANTINE_USER ? (0, N.j)() : null === (i = e.user) || void 0 === i ? void 0 : i.getAvatarURL(t, 40),
          "aria-hidden": !0,
          size: A.EFr.SIZE_40
        }))
      }
    });
    if (null != a) {
      let e = d.Z.get(a);
      if (null != e) {
        let t = (0, c.wj)(n) ? e.icon.darkSVG : e.icon.lightSVG;
        return (0, r.jsx)(A.qEK, {
          className: y.avatar,
          src: t,
          "aria-hidden": !0,
          size: A.EFr.SIZE_40
        })
      }
    }
    return null
  }
  render() {
    let e;
    let {
      log: t,
      className: n,
      expanded: i,
      onHeaderClick: s
    } = this.props, o = this.hasChangesToRender(), c = y.headerDefault;
    i ? c = y.headerExpanded : o && (c = y.headerClickable);
    let d = t.timestampStart.calendar(),
      u = t.timestampEnd.calendar();
    e = d === u ? (0, r.jsx)(A.Text, {
      className: y.timestamp,
      variant: "text-sm/normal",
      children: d
    }) : (0, r.jsxs)(A.Text, {
      className: y.timestamp,
      variant: "text-sm/normal",
      children: [d, "—", u]
    });
    let g = o ? s : I.dG4;
    return (0, r.jsx)(l.mh, {
      id: t.id,
      children: s => (0, r.jsxs)("div", {
        className: a()(y.auditLog, n),
        children: [(0, r.jsxs)(A.P3F, P(w({
          className: c,
          "aria-expanded": i,
          onClick: g
        }, s), {
          children: [(0, r.jsx)(E.mp, {
            action: t.action,
            actionType: t.actionType,
            targetType: t.targetType
          }), this.renderEntryAvatar(), (0, r.jsxs)("div", {
            className: y.timeWrap,
            children: [(0, r.jsx)("div", {
              className: y.title,
              children: this.renderTitle()
            }), e]
          }), o ? (0, r.jsx)(v.Z, {
            className: y.expand,
            foreground: y.expandForeground,
            expanded: i,
            "aria-hidden": !0
          }) : null]
        })), i ? (0, r.jsx)("div", {
          className: y.divider
        }) : null, this.renderChangeSummary()]
      })
    })
  }
}
let T = o.ZP.connectStores([p.Z], () => ({
  theme: p.Z.theme
}))(D)