/** Chunk was on 94503 **/
/** chunk id: 589935, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => k
}), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk686956 = require("./686956.js"),
  Chunk966327 = require("./966327.jsx"),
  Chunk429913 = require("./429913.js"),
  Chunk47167 = require("./47167.js"),
  Chunk769015 = require("./769015.jsx"),
  Chunk967144 = require("./967144.js"),
  Chunk576622 = require("./576622.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk351906 = require("./351906.js"),
  Chunk287809 = require("./287809.js"),
  Chunk509402 = require("./509402.jsx"),
  Chunk562153 = require("./562153.js"),
  Chunk266047 = require("./266047.js"),
  Chunk221950 = require("./221950.js"),
  Chunk11541 = require("./11541.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk745483 = require("./745483.js");

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function L(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let x = Chunk64700.memo(function() {
    return (0, l.jsx)(o.m, {
      "data-pending-richtooltip-migration": true,
      text: G.intl.string(G.t["vu/MiQ"]),
      children: (0, l.jsx)(c.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        className: R.IV,
        children: G.intl.string(G.t.yobFdm)
      })
    })
  }),
  C = Chunk64700.memo(function() {
    return (0, l.jsx)(o.m, {
      text: G.intl.string(G.t.OrCp9h),
      children: (0, l.jsx)(c.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        className: R.IV,
        children: G.intl.string(G.t["4upToT"])
      })
    })
  }),
  M = {
    [Chunk11541.UP.UNSPECIFIED]: {
      type: Chunk11541.UP.UNSPECIFIED,
      getJoinTypeLabel: () => G.intl.string(G.t.DvMBkS),
      icon: null,
      hasTooltip: false
    },
    [Chunk11541.UP.BOT]: {
      type: Chunk11541.UP.BOT,
      getJoinTypeLabel: () => G.intl.string(G.t.HumZAi),
      icon: (0, Chunk627968.jsx)(Chunk397927.CnV, {
        size: "custom",
        color: "currentColor",
        className: Chunk745483.XY,
        height: 12,
        width: 12
      }),
      hasTooltip: true
    },
    [Chunk11541.UP.INTEGRATION]: {
      type: Chunk11541.UP.INTEGRATION,
      getJoinTypeLabel: () => G.intl.string(G.t.gmCUFw),
      icon: (0, Chunk627968.jsx)(Chunk397927.XC7, {
        size: "custom",
        color: "currentColor",
        height: 12,
        width: 12
      }),
      hasTooltip: false
    },
    [Chunk11541.UP.DISCOVERY]: {
      type: Chunk11541.UP.DISCOVERY,
      getJoinTypeLabel: () => G.intl.string(G.t["Ql/e9Y"]),
      icon: (0, Chunk627968.jsx)(Chunk397927.QGJ, {
        size: "custom",
        color: "currentColor",
        height: 12,
        width: 12
      }),
      hasTooltip: false
    },
    [Chunk11541.UP.HUB]: {
      type: Chunk11541.UP.HUB,
      getJoinTypeLabel: () => G.intl.string(G.t.Op8B3O),
      icon: (0, Chunk627968.jsx)(Chunk397927.Pfh, {
        size: "custom",
        color: "currentColor",
        height: 12,
        width: 12
      }),
      hasTooltip: false
    },
    [Chunk11541.UP.INVITE]: {
      type: Chunk11541.UP.INVITE,
      getJoinTypeLabel: e => e,
      icon: (0, Chunk627968.jsx)(Chunk397927.qYV, {
        size: "custom",
        color: "currentColor",
        height: 12,
        width: 12
      }),
      hasTooltip: true
    },
    [Chunk11541.UP.VANITY_URL]: {
      type: Chunk11541.UP.VANITY_URL,
      getJoinTypeLabel: e => e,
      icon: (0, Chunk627968.jsx)(Chunk397927.qYV, {
        size: "custom",
        color: "currentColor",
        height: 12,
        width: 12
      }),
      hasTooltip: false
    },
    [Chunk11541.UP.MANUAL_MEMBER_VERIFICATION]: {
      type: Chunk11541.UP.MANUAL_MEMBER_VERIFICATION,
      getJoinTypeLabel: e => null != e ? G.intl.formatToPlainString(G.t["VHLp+u"], {
        code: e
      }) : G.intl.string(G.t.vdu7oS),
      icon: (0, Chunk627968.jsx)(Chunk509402.A, {
        height: 12,
        width: 12
      }),
      hasTooltip: true
    },
    [Chunk11541.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL]: {
      type: Chunk11541.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL,
      getJoinTypeLabel: () => G.intl.string(G.t["9/ZreX"]),
      icon: (0, Chunk627968.jsx)(Chunk397927._xR, {
        size: "custom",
        color: "currentColor",
        height: 12,
        width: 12
      }),
      hasTooltip: true
    }
  };

function v(e) {
  var t, n;
  let {
    guildId: a,
    inviterUser: o,
    joinSourceType: u,
    className: d,
    onClickInviter: _
  } = e, g = (0, s.bG)([h.Ay], () => null == o ? null : h.Ay.getMember(a, o.id), [o, a]), T = (0, A.gn)(null == g ? true : g.guildId, null == g ? true : g.userId, null != (t = null == g ? true : g.colorStrings) ? t : null), f = r.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), null != o && (null == _ || _(o))
  }, [o, _]);
  return null == o ? null : (0, l.jsxs)("div", {
    className: i()(R.u6, d),
    children: [(0, l.jsx)(c.Text, {
      variant: "text-xs/medium",
      children: u !== b.UP.BOT ? G.intl.string(G.t.azhY2u) : G.intl.string(G.t["2ByN2n"])
    }), (0, l.jsxs)(c.DUT, {
      className: i()(R.kp, null != _ && R.vk),
      onClick: f,
      children: [(0, l.jsx)(E.A, {
        user: o,
        size: c._3J.SIZE_16
      }), (0, l.jsx)(c.Text, {
        variant: "text-xs/medium",
        children: (0, l.jsx)(c.gyj, {
          name: m.Ay.getName(a, null, o),
          colorString: null != (n = null == g ? true : g.colorString) ? n : null,
          colorStrings: T
        })
      })]
    })]
  })
}

function j(e) {
  let {
    channel: t,
    className: n
  } = e, r = (0, _.Ay)(t, true);
  return (0, l.jsx)("div", {
    className: i()(R.kp, n),
    children: (0, l.jsx)(c.Text, {
      variant: "text-xs/medium",
      children: G.intl.format(G.t["2VQq2p"], {
        channelName: null != r ? r : G.intl.string(G.t.zLZPmk)
      })
    })
  })
}

function U(e) {
  let {
    children: t,
    hasTooltip: n,
    guildId: a,
    inviterUser: i,
    joinSourceType: c,
    joinSourceChannelId: u
  } = e, E = (0, s.bG)([f.A], () => f.A.getChannel(u)), d = (0, _.Ay)(E, true), g = !!n && (c === b.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL || null != i), A = r.useMemo(() => c === b.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL ? (0, l.jsx)(j, {
    channel: E
  }) : (0, l.jsx)(v, {
    guildId: a,
    inviterUser: i,
    joinSourceType: c
  }), [c, a, i, E]);
  if (!g) return t;
  let T = c === b.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL ? G.intl.formatToPlainString(G.t["2VQq2p"], {
    channelName: null != d ? d : G.intl.string(G.t.zLZPmk)
  }) : c === b.UP.BOT ? G.intl.string(G.t["2ByN2n"]) : G.intl.string(G.t.azhY2u);
  return (0, l.jsx)(o.m, {
    "aria-label": T,
    __unsupportedReactNodeAsText: A,
    children: t
  })
}

function y(e) {
  let {
    type: t
  } = e, n = (0, b.eN)(t);
  return null == n ? null : (0, l.jsx)("div", {
    className: R.c5,
    style: {
      width: 12,
      height: 12,
      backgroundImage: n
    }
  })
}

function P(e) {
  let {
    sourceInviteCode: t,
    joinSourceType: n,
    joinSourceApplicationId: a,
    integrationType: o,
    joinSourceChannelId: u,
    showJoinMethodContextAsFooter: E,
    guildId: _,
    inviterUser: A,
    onClickInviter: T
  } = e, h = function(e, t) {
    if (null == e) return {};
    var n, l, r, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (a[l] = e[l]);
      return a
    }
    if (a = function(e, t) {
        if (null == e) return {};
        var n, l, r = {},
          a = Object.getOwnPropertyNames(e);
        for (l = 0; l < a.length; l++) n = a[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
        return r
      }(e, t), Object.getOwnPropertySymbols)
      for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (a[l] = e[l]);
    return a
  }(e, ["sourceInviteCode", "joinSourceType", "joinSourceApplicationId", "integrationType", "joinSourceChannelId", "showJoinMethodContextAsFooter", "guildId", "inviterUser", "onClickInviter"]), I = null != n ? M[n] : null, O = n === b.UP.INTEGRATION && null != o, N = (0, d.h)(a), m = (0, s.bG)([f.A], () => f.A.getChannel(u)), S = r.useCallback(e => {
    switch (e.stopPropagation(), e.preventDefault(), true) {
      case null == t && null == n:
      case null == n:
        return;
      case n === b.UP.INVITE && null != t:
        var l;
        (0, p.Ld)(_, {
          selectedSourceInviteCode: null != (l = null == t ? true : t.trim()) ? l : true,
          selectedJoinSourceType: n
        });
        return;
      default:
        return void(0, p.Ld)(_, {
          selectedSourceInviteCode: null,
          selectedJoinSourceType: null != n ? n : true
        })
    }
  }, [_, n, t]);
  switch (true) {
    case null == I:
    case null == n:
    case n === b.UP.UNSPECIFIED:
      return (0, l.jsx)(x, D({}, h));
    case null != o && O:
      return (0, l.jsxs)(c.DUT, L(D({
        className: R.B$
      }, h), {
        "aria-label": (0, b.v8)(o),
        role: "button",
        tabIndex: 0,
        onClick: S,
        children: [(0, l.jsx)(y, {
          type: o
        }), (0, l.jsx)(c.Text, {
          variant: "text-sm/medium",
          children: (0, b.v8)(o)
        })]
      }));
    case n === b.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL && null != N:
      return (0, l.jsxs)("div", {
        className: i()(E && R.TS),
        children: [(0, l.jsxs)(c.DUT, L(D({
          className: R.SH
        }, h), {
          "aria-label": null == I ? true : I.getJoinTypeLabel(null != t ? t : true),
          role: "button",
          tabIndex: 0,
          onClick: S,
          children: [(0, l.jsx)(g.A, {
            game: N,
            size: g.M.XXSMALL
          }), (0, l.jsx)(c.Text, {
            variant: "text-sm/medium",
            className: R.YL,
            children: N.name
          })]
        })), E && (0, l.jsx)(j, {
          channel: m
        })]
      });
    case null != I:
      return (0, l.jsxs)("div", {
        className: i()(E && R.TS),
        children: [(0, l.jsxs)(c.DUT, L(D({
          className: R.B$
        }, h), {
          "aria-label": null == I ? true : I.getJoinTypeLabel(null != t ? t : true),
          role: "button",
          tabIndex: 0,
          onClick: S,
          children: [null == I ? true : I.icon, (0, l.jsx)(c.Text, {
            variant: "text-sm/medium",
            children: null == I ? true : I.getJoinTypeLabel(null != t ? t : true)
          })]
        })), E && (0, l.jsx)(v, {
          guildId: _,
          inviterUser: A,
          joinSourceType: n,
          className: R.nz,
          onClickInviter: T
        })]
      });
    default:
      return (0, l.jsx)(x, D({}, h))
  }
}
let k = Chunk64700.memo(function(e) {
  var t, n;
  let {
    userId: a,
    guildId: i,
    showJoinMethodContextAsFooter: o,
    onClickInviter: c
  } = e, E = (0, s.bG)([S.A], () => S.A.getEnhancedMember(i, a), [i, a]), d = null != (t = null == E ? true : E.inviterId) ? t : null, _ = (0, s.bG)([O.default], () => O.default.getUser(d), [d]);
  r.useEffect(() => {
    null != d && (u.A.requestMembersById(i, [d]), (0, T.A)(d, true, {
      guildId: i
    }))
  }, [i, d]);
  let g = (0, s.bG)([I.A], () => I.A.hideInstantInvites, []);
  if (null == E) return (0, l.jsx)(x, {});
  let {
    sourceInviteCode: A,
    joinSourceType: f,
    joinSourceChannelId: h,
    joinSourceApplicationId: N,
    integrationType: m
  } = E, p = null != f ? M[f] : null, G = null != (n = null == p ? true : p.hasTooltip) && n;
  return (f === b.UP.INVITE || f === b.UP.VANITY_URL || f === b.UP.MANUAL_MEMBER_VERIFICATION && null != A) && g ? (0, l.jsx)(C, {}) : (0, l.jsx)(U, {
    hasTooltip: G && !o,
    inviterUser: null != _ ? _ : null,
    guildId: i,
    joinSourceType: f,
    joinSourceChannelId: h,
    children: (0, l.jsx)(P, {
      sourceInviteCode: A,
      joinSourceType: f,
      joinSourceApplicationId: N,
      joinSourceChannelId: h,
      integrationType: m,
      showJoinMethodContextAsFooter: o,
      inviterUser: null != _ ? _ : null,
      guildId: i,
      onClickInviter: c
    })
  })
})