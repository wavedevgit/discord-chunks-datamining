/** Chunk was on 15718 **/
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

function U(e, t) {
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
let L = Chunk473749.memo(function() {
    return (0, Chunk54381.jsx)(Chunk28664.u, {
      "data-pending-richtooltip-migration": true,
      text: Chunk388032.intl.string(Chunk388032.t["vu/MiQ"]),
      children: (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        className: Chunk530887.unknownInvite,
        children: Chunk388032.intl.string(Chunk388032.t.yobFdm)
      })
    })
  }),
  M = Chunk473749.memo(function() {
    return (0, Chunk54381.jsx)(Chunk28664.u, {
      text: Chunk388032.intl.string(Chunk388032.t.OrCp9h),
      children: (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        className: Chunk530887.unknownInvite,
        children: Chunk388032.intl.string(Chunk388032.t["4upToT"])
      })
    })
  }),
  x = {
    [Chunk327999.gq.UNSPECIFIED]: {
      type: Chunk327999.gq.UNSPECIFIED,
      getJoinTypeLabel: () => Chunk388032.intl.string(Chunk388032.t.DvMBkS),
      icon: null,
      hasTooltip: false
    },
    [Chunk327999.gq.BOT]: {
      type: Chunk327999.gq.BOT,
      getJoinTypeLabel: () => Chunk388032.intl.string(Chunk388032.t.HumZAi),
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
      getJoinTypeLabel: () => Chunk388032.intl.string(Chunk388032.t.gmCUFw),
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
      getJoinTypeLabel: () => Chunk388032.intl.string(Chunk388032.t["Ql/e9Y"]),
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
      getJoinTypeLabel: () => Chunk388032.intl.string(Chunk388032.t.Op8B3O),
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
      getJoinTypeLabel: () => Chunk388032.intl.string(Chunk388032.t["9/ZreX"]),
      icon: (0, Chunk54381.jsx)(Chunk481060.iWm, {
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
    guildId: i,
    inviterUser: o,
    joinSourceType: c,
    className: d,
    onClickInviter: _
  } = e, A = (0, s.e7)([f.ZP], () => null == o ? null : f.ZP.getMember(i, o.id), [o, i]), I = (0, T.X7)(null == A ? true : A.guildId, null == A ? true : A.userId, null != (t = null == A ? true : A.colorStrings) ? t : null), m = l.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), null != o && (null == _ || _(o))
  }, [o, _]);
  return null == o ? null : (0, r.jsxs)("div", {
    className: a()(b.inviterTooltipContainer, d),
    children: [(0, r.jsx)(u.Text, {
      variant: "text-xs/medium",
      children: c !== p.gq.BOT ? C.intl.string(C.t.azhY2u) : C.intl.string(C.t["2ByN2n"])
    }), (0, r.jsxs)(u.P3F, {
      className: a()(b.inviterUserContainer, null != _ && b.clickable),
      onClick: m,
      children: [(0, r.jsx)(E.Z, {
        user: o,
        size: u.EFr.SIZE_16
      }), (0, r.jsx)(u.Text, {
        variant: "text-xs/medium",
        children: (0, r.jsx)(u.PUh, {
          name: O.ZP.getName(i, null, o),
          colorString: null != (n = null == A ? true : A.colorString) ? n : null,
          colorStrings: I
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
    children: (0, r.jsx)(u.Text, {
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
    joinSourceType: u,
    joinSourceChannelId: c
  } = e, E = (0, s.e7)([m.Z], () => m.Z.getChannel(c)), d = (0, _.ZP)(E, true), A = !!n && (u === p.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL || null != a), T = l.useMemo(() => u === p.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL ? (0, r.jsx)(P, {
    channel: E
  }) : (0, r.jsx)(v, {
    guildId: i,
    inviterUser: a,
    joinSourceType: u
  }), [u, i, a, E]);
  if (!A) return t;
  let I = u === p.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL ? C.intl.formatToPlainString(C.t["2VQq2p"], {
    channelName: null != d ? d : C.intl.string(C.t.zLZPmk)
  }) : u === p.gq.BOT ? C.intl.string(C.t["2ByN2n"]) : C.intl.string(C.t.azhY2u);
  return (0, r.jsx)(o.u, {
    "aria-label": I,
    __unsupportedReactNodeAsText: T,
    children: t
  })
}

function y(e) {
  let {
    type: t
  } = e, n = (0, p.Ph)(t);
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
    joinSourceChannelId: c,
    showJoinMethodContextAsFooter: E,
    guildId: _,
    inviterUser: T,
    onClickInviter: I
  } = e, f = function(e, t) {
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
  let g = null != n ? x[n] : null,
    N = n === p.gq.INTEGRATION && null != o,
    h = (0, d.q)(i),
    O = (0, s.e7)([m.Z], () => m.Z.getChannel(c)),
    R = l.useCallback(e => {
      switch (e.stopPropagation(), e.preventDefault(), true) {
        case null == t && null == n:
        case null == n:
          return;
        case n === p.gq.INVITE && null != t:
          var r;
          (0, S.Dr)(_, {
            selectedSourceInviteCode: null != (r = null == t ? true : t.trim()) ? r : true,
            selectedJoinSourceType: n
          });
          return;
        default:
          return void(0, S.Dr)(_, {
            selectedSourceInviteCode: null,
            selectedJoinSourceType: null != n ? n : true
          })
      }
    }, [_, n, t]);
  switch (true) {
    case null == g:
    case null == n:
    case n === p.gq.UNSPECIFIED:
      return (0, r.jsx)(L, D({}, f));
    case null != o && N:
      return (0, r.jsxs)(u.P3F, U(D({
        className: b.inviteContainer
      }, f), {
        "aria-label": (0, p.MS)(o),
        role: "button",
        tabIndex: 0,
        onClick: R,
        children: [(0, r.jsx)(y, {
          type: o
        }), (0, r.jsx)(u.Text, {
          variant: "text-sm/medium",
          children: (0, p.MS)(o)
        })]
      }));
    case n === p.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL && null != h:
      return (0, r.jsxs)("div", {
        className: a()(E && b.footerAlignment),
        children: [(0, r.jsxs)(u.P3F, U(D({
          className: b.linkedChannelContainer
        }, f), {
          "aria-label": null == g ? true : g.getJoinTypeLabel(null != t ? t : true),
          role: "button",
          tabIndex: 0,
          onClick: R,
          children: [(0, r.jsx)(A.Z, {
            game: h,
            size: A.A.XXSMALL
          }), (0, r.jsx)(u.Text, {
            variant: "text-sm/medium",
            className: b.linkedChannelApplicationName,
            children: h.name
          })]
        })), E && (0, r.jsx)(P, {
          channel: O
        })]
      });
    case null != g:
      return (0, r.jsxs)("div", {
        className: a()(E && b.footerAlignment),
        children: [(0, r.jsxs)(u.P3F, U(D({
          className: b.inviteContainer
        }, f), {
          "aria-label": null == g ? true : g.getJoinTypeLabel(null != t ? t : true),
          role: "button",
          tabIndex: 0,
          onClick: R,
          children: [null == g ? true : g.icon, (0, r.jsx)(u.Text, {
            variant: "text-sm/medium",
            children: null == g ? true : g.getJoinTypeLabel(null != t ? t : true)
          })]
        })), E && (0, r.jsx)(v, {
          guildId: _,
          inviterUser: T,
          joinSourceType: n,
          className: b.inviterFooter,
          onClickInviter: I
        })]
      });
    default:
      return (0, r.jsx)(L, D({}, f))
  }
}
let k = Chunk473749.memo(function(e) {
  var t, n;
  let {
    userId: i,
    guildId: a,
    showJoinMethodContextAsFooter: o,
    onClickInviter: u
  } = e, E = (0, s.e7)([R.Z], () => R.Z.getEnhancedMember(a, i), [a, i]), d = null != (t = null == E ? true : E.inviterId) ? t : null, _ = (0, s.e7)([N.default], () => N.default.getUser(d), [d]);
  l.useEffect(() => {
    null != d && (c.Z.requestMembersById(a, [d]), (0, I.Z)(d, true, {
      guildId: a
    }))
  }, [a, d]);
  let A = (0, s.e7)([g.Z], () => g.Z.hideInstantInvites, []);
  if (null == E) return (0, r.jsx)(L, {});
  let {
    sourceInviteCode: T,
    joinSourceType: m,
    joinSourceChannelId: f,
    joinSourceApplicationId: h,
    integrationType: O
  } = E, S = null != m ? x[m] : null, C = null != (n = null == S ? true : S.hasTooltip) && n;
  return (m === p.gq.INVITE || m === p.gq.VANITY_URL || m === p.gq.MANUAL_MEMBER_VERIFICATION && null != T) && A ? (0, r.jsx)(M, {}) : (0, r.jsx)(j, {
    hasTooltip: C && !o,
    inviterUser: null != _ ? _ : null,
    guildId: a,
    joinSourceType: m,
    joinSourceChannelId: f,
    children: (0, r.jsx)(G, {
      sourceInviteCode: T,
      joinSourceType: m,
      joinSourceApplicationId: h,
      joinSourceChannelId: f,
      integrationType: O,
      showJoinMethodContextAsFooter: o,
      inviterUser: null != _ ? _ : null,
      guildId: a,
      onClickInviter: u
    })
  })
})