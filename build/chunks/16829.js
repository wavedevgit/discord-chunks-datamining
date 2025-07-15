/** Chunk was on 46989 **/
n.d(t, {
  ZP: () => U
}), n(781311);
var r = n(255367),
  l = n(73800),
  i = n(120356),
  s = n.n(i),
  a = n(442837),
  o = n(481060),
  u = n(749210),
  c = n(700582),
  d = n(884902),
  E = n(484459),
  _ = n(271383),
  m = n(246946),
  A = n(594174),
  g = n(785195),
  f = n(5192),
  T = n(893966),
  I = n(527379),
  h = n(327999),
  O = n(388032),
  p = n(615133);

function N(e) {
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

function R(e, t) {
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
let S = l.memo(function() {
    return (0, r.jsx)(o.ua7, {
      text: O.intl.string(O.t["vu/MiY"]),
      children: e => (0, r.jsx)(o.Text, R(N({}, e), {
        variant: "text-sm/medium",
        color: "text-muted",
        className: p.unknownInvite,
        children: O.intl.string(O.t.yobFdn)
      }))
    })
  }),
  C = l.memo(function() {
    return (0, r.jsx)(o.ua7, {
      text: O.intl.string(O.t.OrCp9v),
      children: e => (0, r.jsx)(o.Text, R(N({}, e), {
        variant: "text-sm/medium",
        color: "text-muted",
        className: p.unknownInvite,
        children: O.intl.string(O.t["4upToa"])
      }))
    })
  }),
  b = {
    [h.gq.UNSPECIFIED]: {
      type: h.gq.UNSPECIFIED,
      getJoinTypeLabel: () => O.intl.string(O.t.DvMBkZ),
      icon: null,
      hasTooltip: !1
    },
    [h.gq.BOT]: {
      type: h.gq.BOT,
      getJoinTypeLabel: () => O.intl.string(O.t.HumZAg),
      icon: (0, r.jsx)(o.wGt, {
        size: "custom",
        color: "currentColor",
        className: p.robot,
        height: 12,
        width: 12
      }),
      hasTooltip: !0
    },
    [h.gq.INTEGRATION]: {
      type: h.gq.INTEGRATION,
      getJoinTypeLabel: () => O.intl.string(O.t.gmCUFx),
      icon: (0, r.jsx)(o.tYf, {
        size: "custom",
        color: "currentColor",
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [h.gq.DISCOVERY]: {
      type: h.gq.DISCOVERY,
      getJoinTypeLabel: () => O.intl.string(O.t["Ql/e9f"]),
      icon: (0, r.jsx)(o.Jmo, {
        size: "custom",
        color: "currentColor",
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [h.gq.HUB]: {
      type: h.gq.HUB,
      getJoinTypeLabel: () => O.intl.string(O.t.Op8B3N),
      icon: (0, r.jsx)(o.aVH, {
        size: "custom",
        color: "currentColor",
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [h.gq.INVITE]: {
      type: h.gq.INVITE,
      getJoinTypeLabel: e => e,
      icon: (0, r.jsx)(o.xPt, {
        size: "custom",
        color: "currentColor",
        height: 12,
        width: 12
      }),
      hasTooltip: !0
    },
    [h.gq.VANITY_URL]: {
      type: h.gq.VANITY_URL,
      getJoinTypeLabel: e => e,
      icon: (0, r.jsx)(o.xPt, {
        size: "custom",
        color: "currentColor",
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [h.gq.MANUAL_MEMBER_VERIFICATION]: {
      type: h.gq.MANUAL_MEMBER_VERIFICATION,
      getJoinTypeLabel: e => null != e ? O.intl.formatToPlainString(O.t["VHLp+v"], {
        code: e
      }) : O.intl.string(O.t.vdu7oa),
      icon: (0, r.jsx)(g.Z, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    }
  };

function v(e) {
  var t;
  let {
    guildId: n,
    inviterUser: i,
    joinSourceType: u,
    className: E,
    onClickInviter: m
  } = e, A = (0, a.e7)([_.ZP], () => null == i ? null : _.ZP.getMember(n, i.id), [i, n]), g = (0, d.X7)(null == A ? void 0 : A.guildId, null == A ? void 0 : A.userId, null == A ? void 0 : A.colorStrings), T = l.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), null != i && (null == m || m(i))
  }, [i, m]);
  return null == i ? null : (0, r.jsxs)("div", {
    className: s()(p.inviterTooltipContainer, E),
    children: [(0, r.jsx)(o.Text, {
      variant: "text-xs/medium",
      children: u !== h.gq.BOT ? O.intl.string(O.t.azhY2t) : O.intl.string(O.t["2ByN2t"])
    }), (0, r.jsxs)(o.P3F, {
      className: s()(p.inviterUserContainer, null != m && p.clickable),
      onClick: T,
      children: [(0, r.jsx)(c.Z, {
        user: i,
        size: o.EFr.SIZE_16
      }), (0, r.jsx)(o.Text, {
        variant: "text-xs/medium",
        children: (0, r.jsx)(o.PUh, {
          name: f.ZP.getName(n, null, i),
          color: null != (t = null == A ? void 0 : A.colorString) ? t : void 0,
          roleColors: g
        })
      })]
    })]
  })
}

function D(e) {
  let {
    children: t,
    hasTooltip: n,
    guildId: l,
    inviterUser: i,
    joinSourceType: s
  } = e;
  return n && null != i ? (0, r.jsx)(o.ua7, {
    "aria-label": s !== h.gq.BOT ? O.intl.string(O.t.azhY2t) : O.intl.string(O.t["2ByN2t"]),
    allowOverflow: !0,
    text: (0, r.jsx)(v, {
      guildId: l,
      inviterUser: i,
      joinSourceType: s
    }),
    children: e => (0, r.jsx)(r.Fragment, {
      children: t(e)
    })
  }) : (0, r.jsx)(r.Fragment, {
    children: t({})
  })
}

function x(e) {
  let {
    type: t
  } = e, n = (0, h.Ph)(t);
  return null == n ? null : (0, r.jsx)("div", {
    className: p.integrationIcon,
    style: {
      width: 12,
      height: 12,
      backgroundImage: n
    }
  })
}

function L(e) {
  var {
    sourceInviteCode: t,
    joinSourceType: n,
    integrationType: i,
    showInviterAsFooter: a,
    guildId: u,
    inviterUser: c,
    onClickInviter: d
  } = e, E = function(e, t) {
    if (null == e) return {};
    var n, r, l = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
    }
    return l
  }(e, ["sourceInviteCode", "joinSourceType", "integrationType", "showInviterAsFooter", "guildId", "inviterUser", "onClickInviter"]);
  let _ = null != n ? b[n] : null,
    m = n === h.gq.INTEGRATION && null != i,
    A = l.useCallback(e => {
      switch (e.stopPropagation(), e.preventDefault(), !0) {
        case null == t && null == n:
        case null == n:
          return;
        case n === h.gq.INVITE && null != t:
          var r;
          (0, I.Dr)(u, {
            selectedSourceInviteCode: null != (r = null == t ? void 0 : t.trim()) ? r : void 0,
            selectedJoinSourceType: n
          });
          return;
        default:
          return void(0, I.Dr)(u, {
            selectedSourceInviteCode: null,
            selectedJoinSourceType: null != n ? n : void 0
          })
      }
    }, [u, n, t]);
  switch (!0) {
    case null == _:
    case null == n:
    case n === h.gq.UNSPECIFIED:
      return (0, r.jsx)(S, N({}, E));
    case null != i && m:
      return (0, r.jsxs)(o.P3F, R(N({
        className: p.inviteContainer
      }, E), {
        "aria-label": (0, h.MS)(i),
        role: "button",
        tabIndex: 0,
        onClick: A,
        children: [(0, r.jsx)(x, {
          type: i
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/medium",
          children: (0, h.MS)(i)
        })]
      }));
    case null != _:
      return (0, r.jsxs)("div", {
        className: s()(a && p.footerAlignment),
        children: [(0, r.jsxs)(o.P3F, R(N({
          className: p.inviteContainer
        }, E), {
          "aria-label": null == _ ? void 0 : _.getJoinTypeLabel(null != t ? t : void 0),
          role: "button",
          tabIndex: 0,
          onClick: A,
          children: [null == _ ? void 0 : _.icon, (0, r.jsx)(o.Text, {
            variant: "text-sm/medium",
            children: null == _ ? void 0 : _.getJoinTypeLabel(null != t ? t : void 0)
          })]
        })), a && (0, r.jsx)(v, {
          guildId: u,
          inviterUser: c,
          joinSourceType: n,
          className: p.inviterFooter,
          onClickInviter: d
        })]
      });
    default:
      return (0, r.jsx)(S, N({}, E))
  }
}
let U = l.memo(function(e) {
  var t, n;
  let {
    userId: i,
    guildId: s,
    showInviterAsFooter: o,
    onClickInviter: c
  } = e, d = (0, a.e7)([T.Z], () => T.Z.getEnhancedMember(s, i), [s, i]), _ = null != (t = null == d ? void 0 : d.inviterId) ? t : null, g = (0, a.e7)([A.default], () => A.default.getUser(_), [_]);
  l.useEffect(() => {
    null != _ && (u.Z.requestMembersById(s, [_]), (0, E.Z)(_, void 0, {
      guildId: s
    }))
  }, [s, _]);
  let f = (0, a.e7)([m.Z], () => m.Z.hideInstantInvites, []);
  if (null == d) return (0, r.jsx)(S, {});
  let {
    sourceInviteCode: I,
    joinSourceType: O,
    integrationType: p
  } = d, R = null != O ? b[O] : null, v = null != (n = null == R ? void 0 : R.hasTooltip) && n;
  return (O === h.gq.INVITE || O === h.gq.VANITY_URL || O === h.gq.MANUAL_MEMBER_VERIFICATION && null != I) && f ? (0, r.jsx)(C, {}) : (0, r.jsx)(D, {
    hasTooltip: v && !o,
    inviterUser: null != g ? g : null,
    guildId: s,
    joinSourceType: O,
    children: e => (0, r.jsx)(L, N({
      sourceInviteCode: I,
      joinSourceType: O,
      integrationType: p,
      showInviterAsFooter: o,
      inviterUser: null != g ? g : null,
      guildId: s,
      onClickInviter: c
    }, e))
  })
})