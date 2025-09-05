/** Chunk was on 10576 **/
/** chunk id: 16829, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => w
}), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
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
  Chunk303572 = require("./303572.js");

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
let b = Chunk647438.memo(function() {
    return (0, Chunk951288.jsx)(Chunk481060.ua7, {
      text: Chunk388032.intl.string(Chunk388032.t["vu/MiY"]),
      children: e => (0, r.jsx)(o.Text, L(D({}, e), {
        variant: "text-sm/medium",
        color: "text-muted",
        className: C.unknownInvite,
        children: S.intl.string(S.t.yobFdn)
      }))
    })
  }),
  U = Chunk647438.memo(function() {
    return (0, Chunk951288.jsx)(Chunk481060.ua7, {
      text: Chunk388032.intl.string(Chunk388032.t.OrCp9v),
      children: e => (0, r.jsx)(o.Text, L(D({}, e), {
        variant: "text-sm/medium",
        color: "text-muted",
        className: C.unknownInvite,
        children: S.intl.string(S.t["4upToa"])
      }))
    })
  }),
  v = {
    [Chunk327999.gq.UNSPECIFIED]: {
      type: Chunk327999.gq.UNSPECIFIED,
      getJoinTypeLabel: () => Chunk388032.intl.string(Chunk388032.t.DvMBkZ),
      icon: null,
      hasTooltip: false
    },
    [Chunk327999.gq.BOT]: {
      type: Chunk327999.gq.BOT,
      getJoinTypeLabel: () => Chunk388032.intl.string(Chunk388032.t.HumZAg),
      icon: (0, Chunk951288.jsx)(Chunk481060.wGt, {
        size: "custom",
        color: "currentColor",
        className: Chunk303572.robot,
        height: 12,
        width: 12
      }),
      hasTooltip: true
    },
    [Chunk327999.gq.INTEGRATION]: {
      type: Chunk327999.gq.INTEGRATION,
      getJoinTypeLabel: () => Chunk388032.intl.string(Chunk388032.t.gmCUFx),
      icon: (0, Chunk951288.jsx)(Chunk481060.tYf, {
        size: "custom",
        color: "currentColor",
        height: 12,
        width: 12
      }),
      hasTooltip: false
    },
    [Chunk327999.gq.DISCOVERY]: {
      type: Chunk327999.gq.DISCOVERY,
      getJoinTypeLabel: () => Chunk388032.intl.string(Chunk388032.t["Ql/e9f"]),
      icon: (0, Chunk951288.jsx)(Chunk481060.Jmo, {
        size: "custom",
        color: "currentColor",
        height: 12,
        width: 12
      }),
      hasTooltip: false
    },
    [Chunk327999.gq.HUB]: {
      type: Chunk327999.gq.HUB,
      getJoinTypeLabel: () => Chunk388032.intl.string(Chunk388032.t.Op8B3N),
      icon: (0, Chunk951288.jsx)(Chunk481060.aVH, {
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
      icon: (0, Chunk951288.jsx)(Chunk481060.xPt, {
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
      icon: (0, Chunk951288.jsx)(Chunk481060.xPt, {
        size: "custom",
        color: "currentColor",
        height: 12,
        width: 12
      }),
      hasTooltip: false
    },
    [Chunk327999.gq.MANUAL_MEMBER_VERIFICATION]: {
      type: Chunk327999.gq.MANUAL_MEMBER_VERIFICATION,
      getJoinTypeLabel: e => null != e ? S.intl.formatToPlainString(S.t["VHLp+v"], {
        code: e
      }) : S.intl.string(S.t.vdu7oa),
      icon: (0, Chunk951288.jsx)(Chunk785195.Z, {
        height: 12,
        width: 12
      }),
      hasTooltip: true
    },
    [Chunk327999.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL]: {
      type: Chunk327999.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL,
      getJoinTypeLabel: () => Chunk388032.intl.string(Chunk388032.t["9/ZreX"]),
      icon: (0, Chunk951288.jsx)(Chunk481060.iWm, {
        size: "custom",
        color: "currentColor",
        height: 12,
        width: 12
      }),
      hasTooltip: true
    }
  };

function M(e) {
  var t, n;
  let {
    guildId: i,
    inviterUser: u,
    joinSourceType: d,
    className: E,
    onClickInviter: _
  } = e, m = (0, s.e7)([I.ZP], () => null == u ? null : I.ZP.getMember(i, u.id), [u, i]), T = (0, A.X7)(null == m ? true : m.guildId, null == m ? true : m.userId, null != (t = null == m ? true : m.colorStrings) ? t : null), g = l.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), null != u && (null == _ || _(u))
  }, [u, _]);
  return null == u ? null : (0, r.jsxs)("div", {
    className: a()(C.inviterTooltipContainer, E),
    children: [(0, r.jsx)(o.Text, {
      variant: "text-xs/medium",
      children: d !== R.gq.BOT ? S.intl.string(S.t.azhY2t) : S.intl.string(S.t["2ByN2t"])
    }), (0, r.jsxs)(o.P3F, {
      className: a()(C.inviterUserContainer, null != _ && C.clickable),
      onClick: g,
      children: [(0, r.jsx)(c.Z, {
        user: u,
        size: o.EFr.SIZE_16
      }), (0, r.jsx)(o.Text, {
        variant: "text-xs/medium",
        children: (0, r.jsx)(o.PUh, {
          name: N.ZP.getName(i, null, u),
          colorString: null != (n = null == m ? true : m.colorString) ? n : null,
          colorStrings: T
        })
      })]
    })]
  })
}

function x(e) {
  let {
    channel: t,
    className: n
  } = e, l = (0, E.ZP)(t, true);
  return (0, r.jsx)("div", {
    className: a()(C.inviterUserContainer, n),
    children: (0, r.jsx)(o.Text, {
      variant: "text-xs/medium",
      children: S.intl.format(S.t["2VQq2t"], {
        channelName: null != l ? l : S.intl.string(S.t.zLZPmp)
      })
    })
  })
}

function P(e) {
  let {
    children: t,
    hasTooltip: n,
    guildId: i,
    inviterUser: a,
    joinSourceType: u,
    joinSourceChannelId: c
  } = e, d = (0, s.e7)([T.Z], () => T.Z.getChannel(c)), _ = (0, E.ZP)(d, true), A = !!n && (u === R.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL || null != a), m = l.useMemo(() => u === R.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL ? (0, r.jsx)(x, {
    channel: d
  }) : (0, r.jsx)(M, {
    guildId: i,
    inviterUser: a,
    joinSourceType: u
  }), [u, i, a, d]);
  if (!A) return (0, r.jsx)(r.Fragment, {
    children: t({})
  });
  let I = u === R.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL ? S.intl.formatToPlainString(S.t["2VQq2t"], {
    channelName: null != _ ? _ : S.intl.string(S.t.zLZPmp)
  }) : u === R.gq.BOT ? S.intl.string(S.t["2ByN2t"]) : S.intl.string(S.t.azhY2t);
  return (0, r.jsx)(o.ua7, {
    "aria-label": I,
    allowOverflow: true,
    text: m,
    children: e => (0, r.jsx)(r.Fragment, {
      children: t(e)
    })
  })
}

function j(e) {
  let {
    type: t
  } = e, n = (0, R.Ph)(t);
  return null == n ? null : (0, r.jsx)("div", {
    className: C.integrationIcon,
    style: {
      width: 12,
      height: 12,
      backgroundImage: n
    }
  })
}

function y(e) {
  var {
    sourceInviteCode: t,
    joinSourceType: n,
    joinSourceApplicationId: i,
    integrationType: u,
    joinSourceChannelId: c,
    showJoinMethodContextAsFooter: E,
    guildId: A,
    inviterUser: m,
    onClickInviter: I
  } = e, g = function(e, t) {
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
  let f = null != n ? v[n] : null,
    h = n === R.gq.INTEGRATION && null != u,
    N = (0, d.q)(i),
    O = (0, s.e7)([T.Z], () => T.Z.getChannel(c)),
    S = l.useCallback(e => {
      switch (e.stopPropagation(), e.preventDefault(), true) {
        case null == t && null == n:
        case null == n:
          return;
        case n === R.gq.INVITE && null != t:
          var r;
          (0, p.Dr)(A, {
            selectedSourceInviteCode: null != (r = null == t ? true : t.trim()) ? r : true,
            selectedJoinSourceType: n
          });
          return;
        default:
          return void(0, p.Dr)(A, {
            selectedSourceInviteCode: null,
            selectedJoinSourceType: null != n ? n : true
          })
      }
    }, [A, n, t]);
  switch (true) {
    case null == f:
    case null == n:
    case n === R.gq.UNSPECIFIED:
      return (0, r.jsx)(b, D({}, g));
    case null != u && h:
      return (0, r.jsxs)(o.P3F, L(D({
        className: C.inviteContainer
      }, g), {
        "aria-label": (0, R.MS)(u),
        role: "button",
        tabIndex: 0,
        onClick: S,
        children: [(0, r.jsx)(j, {
          type: u
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/medium",
          children: (0, R.MS)(u)
        })]
      }));
    case n === R.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL && null != N:
      return (0, r.jsxs)("div", {
        className: a()(E && C.footerAlignment),
        children: [(0, r.jsxs)(o.P3F, L(D({
          className: C.linkedChannelContainer
        }, g), {
          "aria-label": null == f ? true : f.getJoinTypeLabel(null != t ? t : true),
          role: "button",
          tabIndex: 0,
          onClick: S,
          children: [(0, r.jsx)(_.Z, {
            game: N,
            size: _.A.XXSMALL
          }), (0, r.jsx)(o.Text, {
            variant: "text-sm/medium",
            className: C.linkedChannelApplicationName,
            children: N.name
          })]
        })), E && (0, r.jsx)(x, {
          channel: O
        })]
      });
    case null != f:
      return (0, r.jsxs)("div", {
        className: a()(E && C.footerAlignment),
        children: [(0, r.jsxs)(o.P3F, L(D({
          className: C.inviteContainer
        }, g), {
          "aria-label": null == f ? true : f.getJoinTypeLabel(null != t ? t : true),
          role: "button",
          tabIndex: 0,
          onClick: S,
          children: [null == f ? true : f.icon, (0, r.jsx)(o.Text, {
            variant: "text-sm/medium",
            children: null == f ? true : f.getJoinTypeLabel(null != t ? t : true)
          })]
        })), E && (0, r.jsx)(M, {
          guildId: A,
          inviterUser: m,
          joinSourceType: n,
          className: C.inviterFooter,
          onClickInviter: I
        })]
      });
    default:
      return (0, r.jsx)(b, D({}, g))
  }
}
let w = Chunk647438.memo(function(e) {
  var t, n;
  let {
    userId: i,
    guildId: a,
    showJoinMethodContextAsFooter: o,
    onClickInviter: c
  } = e, d = (0, s.e7)([O.Z], () => O.Z.getEnhancedMember(a, i), [a, i]), E = null != (t = null == d ? true : d.inviterId) ? t : null, _ = (0, s.e7)([f.default], () => f.default.getUser(E), [E]);
  l.useEffect(() => {
    null != E && (u.Z.requestMembersById(a, [E]), (0, m.Z)(E, true, {
      guildId: a
    }))
  }, [a, E]);
  let A = (0, s.e7)([g.Z], () => g.Z.hideInstantInvites, []);
  if (null == d) return (0, r.jsx)(b, {});
  let {
    sourceInviteCode: T,
    joinSourceType: I,
    joinSourceChannelId: h,
    joinSourceApplicationId: N,
    integrationType: p
  } = d, S = null != I ? v[I] : null, C = null != (n = null == S ? true : S.hasTooltip) && n;
  return (I === R.gq.INVITE || I === R.gq.VANITY_URL || I === R.gq.MANUAL_MEMBER_VERIFICATION && null != T) && A ? (0, r.jsx)(U, {}) : (0, r.jsx)(P, {
    hasTooltip: C && !o,
    inviterUser: null != _ ? _ : null,
    guildId: a,
    joinSourceType: I,
    joinSourceChannelId: h,
    children: e => (0, r.jsx)(y, D({
      sourceInviteCode: T,
      joinSourceType: I,
      joinSourceApplicationId: N,
      joinSourceChannelId: h,
      integrationType: p,
      showJoinMethodContextAsFooter: o,
      inviterUser: null != _ ? _ : null,
      guildId: a,
      onClickInviter: c
    }, e))
  })
})