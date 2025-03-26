/** Chunk was on 97574 **/
r.d(t, {
  ZP: () => V
}), r(566702);
var n = r(200651),
  l = r(192379),
  i = r(120356),
  a = r.n(i),
  o = r(442837),
  s = r(481060),
  h = r(749210),
  c = r(700582),
  v = r(484459),
  u = r(271383),
  d = r(246946),
  E = r(594174),
  f = r(785195),
  p = r(5192),
  M = r(893966),
  _ = r(527379),
  O = r(327999),
  g = r(388032),
  b = r(611822);

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n
    })
  }
  return e
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}
let Z = l.memo(function() {
    return (0, n.jsx)(s.ua7, {
      text: g.NW.string(g.t["vu/MiY"]),
      children: e => (0, n.jsx)(s.Text, T(A({}, e), {
        variant: "text-sm/medium",
        color: "text-muted",
        className: b.unknownInvite,
        children: g.NW.string(g.t.yobFdn)
      }))
    })
  }),
  N = l.memo(function() {
    return (0, n.jsx)(s.ua7, {
      text: g.NW.string(g.t.OrCp9v),
      children: e => (0, n.jsx)(s.Text, T(A({}, e), {
        variant: "text-sm/medium",
        color: "text-muted",
        className: b.unknownInvite,
        children: g.NW.string(g.t["4upToa"])
      }))
    })
  }),
  H = {
    [O.gq.UNSPECIFIED]: {
      type: O.gq.UNSPECIFIED,
      getJoinTypeLabel: () => g.NW.string(g.t.DvMBkZ),
      icon: null,
      hasTooltip: !1
    },
    [O.gq.BOT]: {
      type: O.gq.BOT,
      getJoinTypeLabel: () => g.NW.string(g.t.HumZAg),
      icon: (0, n.jsx)(s.wGt, {
        size: "custom",
        color: "currentColor",
        className: b.robot,
        height: 12,
        width: 12
      }),
      hasTooltip: !0
    },
    [O.gq.INTEGRATION]: {
      type: O.gq.INTEGRATION,
      getJoinTypeLabel: () => g.NW.string(g.t.gmCUFx),
      icon: (0, n.jsx)(s.tYf, {
        size: "custom",
        color: "currentColor",
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [O.gq.DISCOVERY]: {
      type: O.gq.DISCOVERY,
      getJoinTypeLabel: () => g.NW.string(g.t["Ql/e9f"]),
      icon: (0, n.jsx)(s.Jmo, {
        size: "custom",
        color: "currentColor",
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [O.gq.HUB]: {
      type: O.gq.HUB,
      getJoinTypeLabel: () => g.NW.string(g.t.Op8B3N),
      icon: (0, n.jsx)(s.aVH, {
        size: "custom",
        color: "currentColor",
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [O.gq.INVITE]: {
      type: O.gq.INVITE,
      getJoinTypeLabel: e => e,
      icon: (0, n.jsx)(s.xPt, {
        size: "custom",
        color: "currentColor",
        height: 12,
        width: 12
      }),
      hasTooltip: !0
    },
    [O.gq.VANITY_URL]: {
      type: O.gq.VANITY_URL,
      getJoinTypeLabel: e => e,
      icon: (0, n.jsx)(s.xPt, {
        size: "custom",
        color: "currentColor",
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [O.gq.MANUAL_MEMBER_VERIFICATION]: {
      type: O.gq.MANUAL_MEMBER_VERIFICATION,
      getJoinTypeLabel: e => null != e ? g.NW.formatToPlainString(g.t["VHLp+v"], {
        code: e
      }) : g.NW.string(g.t.vdu7oa),
      icon: (0, n.jsx)(f.Z, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    }
  };

function y(e) {
  var t;
  let {
    guildId: r,
    inviterUser: i,
    joinSourceType: h,
    className: v,
    onClickInviter: d
  } = e, E = (0, o.e7)([u.ZP], () => null == i ? null : u.ZP.getMember(r, i.id), [i, r]), f = l.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), null != i && (null == d || d(i))
  }, [i, d]);
  return null == i ? null : (0, n.jsxs)("div", {
    className: a()(b.inviterTooltipContainer, v),
    children: [(0, n.jsx)(s.Text, {
      variant: "text-xs/medium",
      children: h !== O.gq.BOT ? g.NW.string(g.t.azhY2t) : g.NW.string(g.t["2ByN2t"])
    }), (0, n.jsxs)(s.P3F, {
      className: a()(b.inviterUserContainer, null != d && b.clickable),
      onClick: f,
      children: [(0, n.jsx)(c.Z, {
        user: i,
        size: s.EFr.SIZE_16
      }), (0, n.jsx)(s.Text, {
        variant: "text-xs/medium",
        children: (0, n.jsx)(s.PUh, {
          name: p.ZP.getName(r, null, i),
          color: null !== (t = null == E ? void 0 : E.colorString) && void 0 !== t ? t : void 0
        })
      })]
    })]
  })
}

function j(e) {
  let {
    children: t,
    hasTooltip: r,
    guildId: l,
    inviterUser: i,
    joinSourceType: a
  } = e;
  return r && null != i ? (0, n.jsx)(s.ua7, {
    "aria-label": a !== O.gq.BOT ? g.NW.string(g.t.azhY2t) : g.NW.string(g.t["2ByN2t"]),
    allowOverflow: !0,
    text: (0, n.jsx)(y, {
      guildId: l,
      inviterUser: i,
      joinSourceType: a
    }),
    children: e => (0, n.jsx)(n.Fragment, {
      children: t(e)
    })
  }) : (0, n.jsx)(n.Fragment, {
    children: t({})
  })
}

function I(e) {
  let {
    type: t
  } = e, r = (0, O.Ph)(t);
  return null == r ? null : (0, n.jsx)("div", {
    className: b.integrationIcon,
    style: {
      width: 12,
      height: 12,
      backgroundImage: r
    }
  })
}

function m(e) {
  var {
    sourceInviteCode: t,
    joinSourceType: r,
    integrationType: i,
    showInviterAsFooter: o,
    guildId: h,
    inviterUser: c,
    onClickInviter: v
  } = e, u = function(e, t) {
    if (null == e) return {};
    var r, n, l = function(e, t) {
      if (null == e) return {};
      var r, n, l = {},
        i = Object.keys(e);
      for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (l[r] = e[r]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
    }
    return l
  }(e, ["sourceInviteCode", "joinSourceType", "integrationType", "showInviterAsFooter", "guildId", "inviterUser", "onClickInviter"]);
  let d = null != r ? H[r] : null,
    E = r === O.gq.INTEGRATION && null != i,
    f = l.useCallback(e => {
      switch (e.stopPropagation(), e.preventDefault(), !0) {
        case null == t && null == r:
        case null == r:
          return;
        case r === O.gq.INVITE && null != t:
          var n;
          (0, _.Dr)(h, {
            selectedSourceInviteCode: null !== (n = null == t ? void 0 : t.trim()) && void 0 !== n ? n : void 0,
            selectedJoinSourceType: r
          });
          return;
        default:
          (0, _.Dr)(h, {
            selectedSourceInviteCode: null,
            selectedJoinSourceType: null != r ? r : void 0
          });
          return
      }
    }, [h, r, t]);
  switch (!0) {
    case null == d:
    case null == r:
    case r === O.gq.UNSPECIFIED:
      return (0, n.jsx)(Z, A({}, u));
    case null != i && E:
      return (0, n.jsxs)(s.P3F, T(A({
        className: b.inviteContainer
      }, u), {
        "aria-label": (0, O.MS)(i),
        role: "button",
        tabIndex: 0,
        onClick: f,
        children: [(0, n.jsx)(I, {
          type: i
        }), (0, n.jsx)(s.Text, {
          variant: "text-sm/medium",
          children: (0, O.MS)(i)
        })]
      }));
    case null != d:
      return (0, n.jsxs)("div", {
        className: a()(o && b.footerAlignment),
        children: [(0, n.jsxs)(s.P3F, T(A({
          className: b.inviteContainer
        }, u), {
          "aria-label": null == d ? void 0 : d.getJoinTypeLabel(null != t ? t : void 0),
          role: "button",
          tabIndex: 0,
          onClick: f,
          children: [null == d ? void 0 : d.icon, (0, n.jsx)(s.Text, {
            variant: "text-sm/medium",
            children: null == d ? void 0 : d.getJoinTypeLabel(null != t ? t : void 0)
          })]
        })), o && (0, n.jsx)(y, {
          guildId: h,
          inviterUser: c,
          joinSourceType: r,
          className: b.inviterFooter,
          onClickInviter: v
        })]
      });
    default:
      return (0, n.jsx)(Z, A({}, u))
  }
}
let V = l.memo(function(e) {
  var t, r;
  let {
    userId: i,
    guildId: a,
    showInviterAsFooter: s,
    onClickInviter: c
  } = e, u = (0, o.e7)([M.Z], () => M.Z.getEnhancedMember(a, i), [a, i]), f = null !== (t = null == u ? void 0 : u.inviterId) && void 0 !== t ? t : null, p = (0, o.e7)([E.default], () => E.default.getUser(f), [f]);
  l.useEffect(() => {
    null != f && (h.Z.requestMembersById(a, [f]), (0, v.Z)(f, void 0, {
      guildId: a
    }))
  }, [a, f]);
  let _ = (0, o.e7)([d.Z], () => d.Z.hideInstantInvites, []);
  if (null == u) return (0, n.jsx)(Z, {});
  let {
    sourceInviteCode: g,
    joinSourceType: b,
    integrationType: T
  } = u, y = null != b ? H[b] : null, I = null !== (r = null == y ? void 0 : y.hasTooltip) && void 0 !== r && r;
  return (b === O.gq.INVITE || b === O.gq.VANITY_URL || b === O.gq.MANUAL_MEMBER_VERIFICATION && null != g) && _ ? (0, n.jsx)(N, {}) : (0, n.jsx)(j, {
    hasTooltip: I && !s,
    inviterUser: null != p ? p : null,
    guildId: a,
    joinSourceType: b,
    children: e => (0, n.jsx)(m, A({
      sourceInviteCode: g,
      joinSourceType: b,
      integrationType: T,
      showInviterAsFooter: s,
      inviterUser: null != p ? p : null,
      guildId: a,
      onClickInviter: c
    }, e))
  })
})