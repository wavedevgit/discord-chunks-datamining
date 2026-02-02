/** Chunk was on 2155 **/
/** chunk id: 589935, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => P
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

function C(e) {
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
      text: R.intl.string(R.t["vu/MiQ"]),
      children: (0, l.jsx)(u.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        className: D.IV,
        children: R.intl.string(R.t.yobFdm)
      })
    })
  }),
  b = Chunk64700.memo(function() {
    return (0, l.jsx)(o.m, {
      text: R.intl.string(R.t.OrCp9h),
      children: (0, l.jsx)(u.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        className: D.IV,
        children: R.intl.string(R.t["4upToT"])
      })
    })
  }),
  M = {
    [Chunk11541.UP.UNSPECIFIED]: {
      type: Chunk11541.UP.UNSPECIFIED,
      getJoinTypeLabel: () => R.intl.string(R.t.DvMBkS),
      icon: null,
      hasTooltip: false
    },
    [Chunk11541.UP.BOT]: {
      type: Chunk11541.UP.BOT,
      getJoinTypeLabel: () => R.intl.string(R.t.HumZAi),
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
      getJoinTypeLabel: () => R.intl.string(R.t.gmCUFw),
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
      getJoinTypeLabel: () => R.intl.string(R.t["Ql/e9Y"]),
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
      getJoinTypeLabel: () => R.intl.string(R.t.Op8B3O),
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
      getJoinTypeLabel: e => null != e ? R.intl.formatToPlainString(R.t["VHLp+u"], {
        code: e
      }) : R.intl.string(R.t.vdu7oS),
      icon: (0, Chunk627968.jsx)(Chunk509402.A, {
        height: 12,
        width: 12
      }),
      hasTooltip: true
    },
    [Chunk11541.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL]: {
      type: Chunk11541.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL,
      getJoinTypeLabel: () => R.intl.string(R.t["9/ZreX"]),
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
    joinSourceType: c,
    className: _,
    onClickInviter: d
  } = e, g = (0, s.bG)([O.Ay], () => null == o ? null : O.Ay.getMember(a, o.id), [o, a]), T = (0, A.gn)(null == g ? true : g.guildId, null == g ? true : g.userId, null != (t = null == g ? true : g.colorStrings) ? t : null), I = r.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), null != o && (null == d || d(o))
  }, [o, d]);
  return null == o ? null : (0, l.jsxs)("div", {
    className: i()(D.u6, _),
    children: [(0, l.jsx)(u.Text, {
      variant: "text-xs/medium",
      children: c !== G.UP.BOT ? R.intl.string(R.t.azhY2u) : R.intl.string(R.t["2ByN2n"])
    }), (0, l.jsxs)(u.DUT, {
      className: i()(D.kp, null != d && D.vk),
      onClick: I,
      children: [(0, l.jsx)(E.A, {
        user: o,
        size: u._3J.SIZE_16
      }), (0, l.jsx)(u.Text, {
        variant: "text-xs/medium",
        children: (0, l.jsx)(u.gyj, {
          name: f.Ay.getName(a, null, o),
          colorString: null != (n = null == g ? true : g.colorString) ? n : null,
          colorStrings: T
        })
      })]
    })]
  })
}

function U(e) {
  let {
    channel: t,
    className: n
  } = e, r = (0, d.Ay)(t, true);
  return (0, l.jsx)("div", {
    className: i()(D.kp, n),
    children: (0, l.jsx)(u.Text, {
      variant: "text-xs/medium",
      children: R.intl.format(R.t["2VQq2p"], {
        channelName: null != r ? r : R.intl.string(R.t.zLZPmk)
      })
    })
  })
}

function j(e) {
  let {
    children: t,
    hasTooltip: n,
    guildId: a,
    inviterUser: i,
    joinSourceType: u,
    joinSourceChannelId: c
  } = e, E = (0, s.bG)([I.A], () => I.A.getChannel(c)), _ = (0, d.Ay)(E, true), g = !!n && (u === G.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL || null != i), A = r.useMemo(() => u === G.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL ? (0, l.jsx)(U, {
    channel: E
  }) : (0, l.jsx)(v, {
    guildId: a,
    inviterUser: i,
    joinSourceType: u
  }), [u, a, i, E]);
  if (!g) return t;
  let T = u === G.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL ? R.intl.formatToPlainString(R.t["2VQq2p"], {
    channelName: null != _ ? _ : R.intl.string(R.t.zLZPmk)
  }) : u === G.UP.BOT ? R.intl.string(R.t["2ByN2n"]) : R.intl.string(R.t.azhY2u);
  return (0, l.jsx)(o.m, {
    "aria-label": T,
    __unsupportedReactNodeAsText: A,
    children: t
  })
}

function y(e) {
  let {
    type: t
  } = e, n = (0, G.eN)(t);
  return null == n ? null : (0, l.jsx)("div", {
    className: D.c5,
    style: {
      width: 12,
      height: 12,
      backgroundImage: n
    }
  })
}

function k(e) {
  let {
    sourceInviteCode: t,
    joinSourceType: n,
    joinSourceApplicationId: a,
    integrationType: o,
    joinSourceChannelId: c,
    showJoinMethodContextAsFooter: E,
    guildId: d,
    inviterUser: A,
    onClickInviter: T
  } = e, O = function(e, t) {
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
  }(e, ["sourceInviteCode", "joinSourceType", "joinSourceApplicationId", "integrationType", "joinSourceChannelId", "showJoinMethodContextAsFooter", "guildId", "inviterUser", "onClickInviter"]), h = null != n ? M[n] : null, N = n === G.UP.INTEGRATION && null != o, m = (0, _.h)(a), f = (0, s.bG)([I.A], () => I.A.getChannel(c)), S = r.useCallback(e => {
    switch (e.stopPropagation(), e.preventDefault(), true) {
      case null == t && null == n:
      case null == n:
        return;
      case n === G.UP.INVITE && null != t:
        var l;
        (0, p.Ld)(d, {
          selectedSourceInviteCode: null != (l = null == t ? true : t.trim()) ? l : true,
          selectedJoinSourceType: n
        });
        return;
      default:
        return void(0, p.Ld)(d, {
          selectedSourceInviteCode: null,
          selectedJoinSourceType: null != n ? n : true
        })
    }
  }, [d, n, t]);
  switch (true) {
    case null == h:
    case null == n:
    case n === G.UP.UNSPECIFIED:
      return (0, l.jsx)(x, C({}, O));
    case null != o && N:
      return (0, l.jsxs)(u.DUT, L(C({
        className: D.B$
      }, O), {
        "aria-label": (0, G.v8)(o),
        role: "button",
        tabIndex: 0,
        onClick: S,
        children: [(0, l.jsx)(y, {
          type: o
        }), (0, l.jsx)(u.Text, {
          variant: "text-sm/medium",
          children: (0, G.v8)(o)
        })]
      }));
    case n === G.UP.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL && null != m:
      return (0, l.jsxs)("div", {
        className: i()(E && D.TS),
        children: [(0, l.jsxs)(u.DUT, L(C({
          className: D.SH
        }, O), {
          "aria-label": null == h ? true : h.getJoinTypeLabel(null != t ? t : true),
          role: "button",
          tabIndex: 0,
          onClick: S,
          children: [(0, l.jsx)(g.A, {
            game: m,
            size: g.M.XXSMALL
          }), (0, l.jsx)(u.Text, {
            variant: "text-sm/medium",
            className: D.YL,
            children: m.name
          })]
        })), E && (0, l.jsx)(U, {
          channel: f
        })]
      });
    case null != h:
      return (0, l.jsxs)("div", {
        className: i()(E && D.TS),
        children: [(0, l.jsxs)(u.DUT, L(C({
          className: D.B$
        }, O), {
          "aria-label": null == h ? true : h.getJoinTypeLabel(null != t ? t : true),
          role: "button",
          tabIndex: 0,
          onClick: S,
          children: [null == h ? true : h.icon, (0, l.jsx)(u.Text, {
            variant: "text-sm/medium",
            children: null == h ? true : h.getJoinTypeLabel(null != t ? t : true)
          })]
        })), E && (0, l.jsx)(v, {
          guildId: d,
          inviterUser: A,
          joinSourceType: n,
          className: D.nz,
          onClickInviter: T
        })]
      });
    default:
      return (0, l.jsx)(x, C({}, O))
  }
}
let P = Chunk64700.memo(function(e) {
  var t, n;
  let {
    userId: a,
    guildId: i,
    showJoinMethodContextAsFooter: o,
    onClickInviter: u
  } = e, E = (0, s.bG)([S.A], () => S.A.getEnhancedMember(i, a), [i, a]), _ = null != (t = null == E ? true : E.inviterId) ? t : null, d = (0, s.bG)([N.default], () => N.default.getUser(_), [_]);
  r.useEffect(() => {
    null != _ && (c.A.requestMembersById(i, [_]), (0, T.A)(_, true, {
      guildId: i
    }))
  }, [i, _]);
  let g = (0, s.bG)([h.A], () => h.A.hideInstantInvites, []);
  if (null == E) return (0, l.jsx)(x, {});
  let {
    sourceInviteCode: A,
    joinSourceType: I,
    joinSourceChannelId: O,
    joinSourceApplicationId: m,
    integrationType: f
  } = E, p = null != I ? M[I] : null, R = null != (n = null == p ? true : p.hasTooltip) && n;
  return (I === G.UP.INVITE || I === G.UP.VANITY_URL || I === G.UP.MANUAL_MEMBER_VERIFICATION && null != A) && g ? (0, l.jsx)(b, {}) : (0, l.jsx)(j, {
    hasTooltip: R && !o,
    inviterUser: null != d ? d : null,
    guildId: i,
    joinSourceType: I,
    joinSourceChannelId: O,
    children: (0, l.jsx)(k, {
      sourceInviteCode: A,
      joinSourceType: I,
      joinSourceApplicationId: m,
      joinSourceChannelId: O,
      integrationType: f,
      showJoinMethodContextAsFooter: o,
      inviterUser: null != d ? d : null,
      guildId: i,
      onClickInviter: u
    })
  })
})