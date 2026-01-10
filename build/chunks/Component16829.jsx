/** Chunk was on 69937 **/
/** chunk id: 16829, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => k
}), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk700582 = require("./700582.jsx"),
  Chunk835473 = require("./835473.js"),
  Chunk933557 = require("./933557.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk884902 = require("./884902.js"),
  Chunk484459 = require("./484459.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk246946 = require("./246946.js"),
  Chunk594174 = require("./594174.js"),
  Chunk785195 = require("./785195.jsx"),
  Chunk5192 = require("./5192.js"),
  Chunk893966 = require("./893966.js"),
  Chunk527379 = require("./527379.js"),
  Chunk327999 = require("./327999.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk530887 = require("./530887.js");

function D(e) {
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

function L(e, t) {
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
let U = Chunk473749.memo(function() {
    return (0, r.jsx)(o.u, {
      "data-pending-richtooltip-migration": true,
      text: C.intl.string(C.t["vu/MiQ"]),
      children: (0, r.jsx)(c.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        className: b.unknownInvite,
        children: C.intl.string(C.t.yobFdm)
      })
    })
  }),
  M = Chunk473749.memo(function() {
    return (0, r.jsx)(o.u, {
      text: C.intl.string(C.t.OrCp9h),
      children: (0, r.jsx)(c.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        className: b.unknownInvite,
        children: C.intl.string(C.t["4upToT"])
      })
    })
  }),
  v = {
    [Chunk327999.gq.UNSPECIFIED]: {
      type: Chunk327999.gq.UNSPECIFIED,
      getJoinTypeLabel: () => C.intl.string(C.t.DvMBkS),
      icon: null,
      hasTooltip: false
    },
    [Chunk327999.gq.BOT]: {
      type: Chunk327999.gq.BOT,
      getJoinTypeLabel: () => C.intl.string(C.t.HumZAi),
      icon: (0, Chunk54381.jsx)(Chunk481060.wGt, {
        size: "custom",
        color: "currentColor",
        className: Chunk530887.robot,
        height: 12,
        width: 12
      }),
      hasTooltip: true
    },
    [Chunk327999.gq.INTEGRATION]: {
      type: Chunk327999.gq.INTEGRATION,
      getJoinTypeLabel: () => C.intl.string(C.t.gmCUFw),
      icon: (0, Chunk54381.jsx)(Chunk481060.tYf, {
        size: "custom",
        color: "currentColor",
        height: 12,
        width: 12
      }),
      hasTooltip: false
    },
    [Chunk327999.gq.DISCOVERY]: {
      type: Chunk327999.gq.DISCOVERY,
      getJoinTypeLabel: () => C.intl.string(C.t["Ql/e9Y"]),
      icon: (0, Chunk54381.jsx)(Chunk481060.Jmo, {
        size: "custom",
        color: "currentColor",
        height: 12,
        width: 12
      }),
      hasTooltip: false
    },
    [Chunk327999.gq.HUB]: {
      type: Chunk327999.gq.HUB,
      getJoinTypeLabel: () => C.intl.string(C.t.Op8B3O),
      icon: (0, Chunk54381.jsx)(Chunk481060.aVH, {
        size: "custom",
        color: "currentColor",
        height: 12,
        width: 12
      }),
      hasTooltip: false
    },
    [Chunk327999.gq.INVITE]: {
      type: Chunk327999.gq.INVITE,
      getJoinTypeLabel: e => e,
      icon: (0, Chunk54381.jsx)(Chunk481060.xPt, {
        size: "custom",
        color: "currentColor",
        height: 12,
        width: 12
      }),
      hasTooltip: true
    },
    [Chunk327999.gq.VANITY_URL]: {
      type: Chunk327999.gq.VANITY_URL,
      getJoinTypeLabel: e => e,
      icon: (0, Chunk54381.jsx)(Chunk481060.xPt, {
        size: "custom",
        color: "currentColor",
        height: 12,
        width: 12
      }),
      hasTooltip: false
    },
    [Chunk327999.gq.MANUAL_MEMBER_VERIFICATION]: {
      type: Chunk327999.gq.MANUAL_MEMBER_VERIFICATION,
      getJoinTypeLabel: e => null != e ? C.intl.formatToPlainString(C.t["VHLp+u"], {
        code: e
      }) : C.intl.string(C.t.vdu7oS),
      icon: (0, Chunk54381.jsx)(Chunk785195.Z, {
        height: 12,
        width: 12
      }),
      hasTooltip: true
    },
    [Chunk327999.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL]: {
      type: Chunk327999.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL,
      getJoinTypeLabel: () => C.intl.string(C.t["9/ZreX"]),
      icon: (0, Chunk54381.jsx)(Chunk481060.iWm, {
        size: "custom",
        color: "currentColor",
        height: 12,
        width: 12
      }),
      hasTooltip: true
    }
  };

function x(e) {
  var t, n;
  let {
    guildId: i,
    inviterUser: o,
    joinSourceType: u,
    className: E,
    onClickInviter: _
  } = e, A = (0, s.e7)([I.ZP], () => null == o ? null : I.ZP.getMember(i, o.id), [o, i]), T = (0, f.X7)(null == A ? true : A.guildId, null == A ? true : A.userId, null != (t = null == A ? true : A.colorStrings) ? t : null), g = l.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), null != o && (null == _ || _(o))
  }, [o, _]);
  return null == o ? null : (0, r.jsxs)("div", {
    className: a()(b.inviterTooltipContainer, E),
    children: [(0, r.jsx)(c.Text, {
      variant: "text-xs/medium",
      children: u !== S.gq.BOT ? C.intl.string(C.t.azhY2u) : C.intl.string(C.t["2ByN2n"])
    }), (0, r.jsxs)(c.P3F, {
      className: a()(b.inviterUserContainer, null != _ && b.clickable),
      onClick: g,
      children: [(0, r.jsx)(d.Z, {
        user: o,
        size: c.EFr.SIZE_16
      }), (0, r.jsx)(c.Text, {
        variant: "text-xs/medium",
        children: (0, r.jsx)(c.PUh, {
          name: O.ZP.getName(i, null, o),
          colorString: null != (n = null == A ? true : A.colorString) ? n : null,
          colorStrings: T
        })
      })]
    })]
  })
}

function P(e) {
  let {
    channel: t,
    className: n
  } = e, l = (0, _.ZP)(t, true);
  return (0, r.jsx)("div", {
    className: a()(b.inviterUserContainer, n),
    children: (0, r.jsx)(c.Text, {
      variant: "text-xs/medium",
      children: C.intl.format(C.t["2VQq2p"], {
        channelName: null != l ? l : C.intl.string(C.t.zLZPmk)
      })
    })
  })
}

function j(e) {
  let {
    children: t,
    hasTooltip: n,
    guildId: i,
    inviterUser: a,
    joinSourceType: c,
    joinSourceChannelId: u
  } = e, d = (0, s.e7)([g.Z], () => g.Z.getChannel(u)), E = (0, _.ZP)(d, true), A = !!n && (c === S.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL || null != a), f = l.useMemo(() => c === S.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL ? (0, r.jsx)(P, {
    channel: d
  }) : (0, r.jsx)(x, {
    guildId: i,
    inviterUser: a,
    joinSourceType: c
  }), [c, i, a, d]);
  if (!A) return t;
  let T = c === S.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL ? C.intl.formatToPlainString(C.t["2VQq2p"], {
    channelName: null != E ? E : C.intl.string(C.t.zLZPmk)
  }) : c === S.gq.BOT ? C.intl.string(C.t["2ByN2n"]) : C.intl.string(C.t.azhY2u);
  return (0, r.jsx)(o.u, {
    "aria-label": T,
    __unsupportedReactNodeAsText: f,
    children: t
  })
}

function y(e) {
  let {
    type: t
  } = e, n = (0, S.Ph)(t);
  return null == n ? null : (0, r.jsx)("div", {
    className: b.integrationIcon,
    style: {
      width: 12,
      height: 12,
      backgroundImage: n
    }
  })
}

function G(e) {
  var {
    sourceInviteCode: t,
    joinSourceType: n,
    joinSourceApplicationId: i,
    integrationType: o,
    joinSourceChannelId: u,
    showJoinMethodContextAsFooter: d,
    guildId: _,
    inviterUser: f,
    onClickInviter: T
  } = e, I = function(e, t) {
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
  }(e, ["sourceInviteCode", "joinSourceType", "joinSourceApplicationId", "integrationType", "joinSourceChannelId", "showJoinMethodContextAsFooter", "guildId", "inviterUser", "onClickInviter"]);
  let m = null != n ? v[n] : null,
    h = n === S.gq.INTEGRATION && null != o,
    N = (0, E.q)(i),
    O = (0, s.e7)([g.Z], () => g.Z.getChannel(u)),
    p = l.useCallback(e => {
      switch (e.stopPropagation(), e.preventDefault(), true) {
        case null == t && null == n:
        case null == n:
          return;
        case n === S.gq.INVITE && null != t:
          var r;
          (0, R.Dr)(_, {
            selectedSourceInviteCode: null != (r = null == t ? true : t.trim()) ? r : true,
            selectedJoinSourceType: n
          });
          return;
        default:
          return void(0, R.Dr)(_, {
            selectedSourceInviteCode: null,
            selectedJoinSourceType: null != n ? n : true
          })
      }
    }, [_, n, t]);
  switch (true) {
    case null == m:
    case null == n:
    case n === S.gq.UNSPECIFIED:
      return (0, r.jsx)(U, D({}, I));
    case null != o && h:
      return (0, r.jsxs)(c.P3F, L(D({
        className: b.inviteContainer
      }, I), {
        "aria-label": (0, S.MS)(o),
        role: "button",
        tabIndex: 0,
        onClick: p,
        children: [(0, r.jsx)(y, {
          type: o
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/medium",
          children: (0, S.MS)(o)
        })]
      }));
    case n === S.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL && null != N:
      return (0, r.jsxs)("div", {
        className: a()(d && b.footerAlignment),
        children: [(0, r.jsxs)(c.P3F, L(D({
          className: b.linkedChannelContainer
        }, I), {
          "aria-label": null == m ? true : m.getJoinTypeLabel(null != t ? t : true),
          role: "button",
          tabIndex: 0,
          onClick: p,
          children: [(0, r.jsx)(A.Z, {
            game: N,
            size: A.A.XXSMALL
          }), (0, r.jsx)(c.Text, {
            variant: "text-sm/medium",
            className: b.linkedChannelApplicationName,
            children: N.name
          })]
        })), d && (0, r.jsx)(P, {
          channel: O
        })]
      });
    case null != m:
      return (0, r.jsxs)("div", {
        className: a()(d && b.footerAlignment),
        children: [(0, r.jsxs)(c.P3F, L(D({
          className: b.inviteContainer
        }, I), {
          "aria-label": null == m ? true : m.getJoinTypeLabel(null != t ? t : true),
          role: "button",
          tabIndex: 0,
          onClick: p,
          children: [null == m ? true : m.icon, (0, r.jsx)(c.Text, {
            variant: "text-sm/medium",
            children: null == m ? true : m.getJoinTypeLabel(null != t ? t : true)
          })]
        })), d && (0, r.jsx)(x, {
          guildId: _,
          inviterUser: f,
          joinSourceType: n,
          className: b.inviterFooter,
          onClickInviter: T
        })]
      });
    default:
      return (0, r.jsx)(U, D({}, I))
  }
}
let k = Chunk473749.memo(function(e) {
  var t, n;
  let {
    userId: i,
    guildId: a,
    showJoinMethodContextAsFooter: o,
    onClickInviter: c
  } = e, d = (0, s.e7)([p.Z], () => p.Z.getEnhancedMember(a, i), [a, i]), E = null != (t = null == d ? true : d.inviterId) ? t : null, _ = (0, s.e7)([h.default], () => h.default.getUser(E), [E]);
  l.useEffect(() => {
    null != E && (u.Z.requestMembersById(a, [E]), (0, T.Z)(E, true, {
      guildId: a
    }))
  }, [a, E]);
  let A = (0, s.e7)([m.Z], () => m.Z.hideInstantInvites, []);
  if (null == d) return (0, r.jsx)(U, {});
  let {
    sourceInviteCode: f,
    joinSourceType: g,
    joinSourceChannelId: I,
    joinSourceApplicationId: N,
    integrationType: O
  } = d, R = null != g ? v[g] : null, C = null != (n = null == R ? true : R.hasTooltip) && n;
  return (g === S.gq.INVITE || g === S.gq.VANITY_URL || g === S.gq.MANUAL_MEMBER_VERIFICATION && null != f) && A ? (0, r.jsx)(M, {}) : (0, r.jsx)(j, {
    hasTooltip: C && !o,
    inviterUser: null != _ ? _ : null,
    guildId: a,
    joinSourceType: g,
    joinSourceChannelId: I,
    children: (0, r.jsx)(G, {
      sourceInviteCode: f,
      joinSourceType: g,
      joinSourceApplicationId: N,
      joinSourceChannelId: I,
      integrationType: O,
      showJoinMethodContextAsFooter: o,
      inviterUser: null != _ ? _ : null,
      guildId: a,
      onClickInviter: c
    })
  })
})