/** Chunk was on 10576 **/
/** chunk id: 16829, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => G
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

function L(e) {
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

function D(e, t) {
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
let U = Chunk647438.memo(function() {
    return (0, Chunk951288.jsx)(Chunk481060.ua7, {
      text: Chunk388032.intl.string(Chunk388032.t["vu/MiY"]),
      children: e => (0, r.jsx)(o.Text, D(L({}, e), {
        variant: "text-sm/medium",
        color: "text-muted",
        className: C.unknownInvite,
        children: S.intl.string(S.t.yobFdn)
      }))
    })
  }),
  M = Chunk647438.memo(function() {
    return (0, Chunk951288.jsx)(Chunk481060.ua7, {
      text: Chunk388032.intl.string(Chunk388032.t.OrCp9v),
      children: e => (0, r.jsx)(o.Text, D(L({}, e), {
        variant: "text-sm/medium",
        color: "text-muted",
        className: C.unknownInvite,
        children: S.intl.string(S.t["4upToa"])
      }))
    })
  }),
  b = {
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

function x(e) {
  var t, n;
  let {
    guildId: i,
    inviterUser: u,
    joinSourceType: E,
    className: d,
    onClickInviter: _
  } = e, T = (0, s.e7)([I.ZP], () => null == u ? null : I.ZP.getMember(i, u.id), [u, i]), m = (0, A.X7)(null == T ? true : T.guildId, null == T ? true : T.userId, null != (t = null == T ? true : T.colorStrings) ? t : null), g = l.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), null != u && (null == _ || _(u))
  }, [u, _]);
  return null == u ? null : (0, r.jsxs)("div", {
    className: a()(C.inviterTooltipContainer, d),
    children: [(0, r.jsx)(o.Text, {
      variant: "text-xs/medium",
      children: E !== R.gq.BOT ? S.intl.string(S.t.azhY2t) : S.intl.string(S.t["2ByN2t"])
    }), (0, r.jsxs)(o.P3F, {
      className: a()(C.inviterUserContainer, null != _ && C.clickable),
      onClick: g,
      children: [(0, r.jsx)(c.Z, {
        user: u,
        size: o.EFr.SIZE_16
      }), (0, r.jsx)(o.Text, {
        variant: "text-xs/medium",
        children: (0, r.jsx)(o.PUh, {
          name: O.ZP.getName(i, null, u),
          colorString: null != (n = null == T ? true : T.colorString) ? n : null,
          colorStrings: m
        })
      })]
    })]
  })
}

function v(e) {
  let {
    channel: t,
    className: n
  } = e, l = (0, d.ZP)(t, true);
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
  } = e, E = (0, s.e7)([m.Z], () => m.Z.getChannel(c)), _ = (0, d.ZP)(E, true), A = !!n && (u === R.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL || null != a), T = l.useMemo(() => u === R.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL ? (0, r.jsx)(v, {
    channel: E
  }) : (0, r.jsx)(x, {
    guildId: i,
    inviterUser: a,
    joinSourceType: u
  }), [u, i, a, E]);
  if (!A) return (0, r.jsx)(r.Fragment, {
    children: t({})
  });
  let I = u === R.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL ? S.intl.formatToPlainString(S.t["2VQq2t"], {
    channelName: null != _ ? _ : S.intl.string(S.t.zLZPmp)
  }) : u === R.gq.BOT ? S.intl.string(S.t["2ByN2t"]) : S.intl.string(S.t.azhY2t);
  return (0, r.jsx)(o.ua7, {
    "aria-label": I,
    allowOverflow: true,
    text: T,
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
    showJoinMethodContextAsFooter: d,
    guildId: A,
    inviterUser: T,
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
  let h = null != n ? b[n] : null,
    N = n === R.gq.INTEGRATION && null != u,
    O = (0, E.q)(i),
    f = (0, s.e7)([m.Z], () => m.Z.getChannel(c)),
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
    case null == h:
    case null == n:
    case n === R.gq.UNSPECIFIED:
      return (0, r.jsx)(U, L({}, g));
    case null != u && N:
      return (0, r.jsxs)(o.P3F, D(L({
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
    case n === R.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL && null != O:
      return (0, r.jsxs)("div", {
        className: a()(d && C.footerAlignment),
        children: [(0, r.jsxs)(o.P3F, D(L({
          className: C.linkedChannelContainer
        }, g), {
          "aria-label": null == h ? true : h.getJoinTypeLabel(null != t ? t : true),
          role: "button",
          tabIndex: 0,
          onClick: S,
          children: [(0, r.jsx)(_.Z, {
            game: O,
            size: _.A.XXSMALL
          }), (0, r.jsx)(o.Text, {
            variant: "text-sm/medium",
            className: C.linkedChannelApplicationName,
            children: O.name
          })]
        })), d && (0, r.jsx)(v, {
          channel: f
        })]
      });
    case null != h:
      return (0, r.jsxs)("div", {
        className: a()(d && C.footerAlignment),
        children: [(0, r.jsxs)(o.P3F, D(L({
          className: C.inviteContainer
        }, g), {
          "aria-label": null == h ? true : h.getJoinTypeLabel(null != t ? t : true),
          role: "button",
          tabIndex: 0,
          onClick: S,
          children: [null == h ? true : h.icon, (0, r.jsx)(o.Text, {
            variant: "text-sm/medium",
            children: null == h ? true : h.getJoinTypeLabel(null != t ? t : true)
          })]
        })), d && (0, r.jsx)(x, {
          guildId: A,
          inviterUser: T,
          joinSourceType: n,
          className: C.inviterFooter,
          onClickInviter: I
        })]
      });
    default:
      return (0, r.jsx)(U, L({}, g))
  }
}
let G = Chunk647438.memo(function(e) {
  var t, n;
  let {
    userId: i,
    guildId: a,
    showJoinMethodContextAsFooter: o,
    onClickInviter: c
  } = e, E = (0, s.e7)([f.Z], () => f.Z.getEnhancedMember(a, i), [a, i]), d = null != (t = null == E ? true : E.inviterId) ? t : null, _ = (0, s.e7)([h.default], () => h.default.getUser(d), [d]);
  l.useEffect(() => {
    null != d && (u.Z.requestMembersById(a, [d]), (0, T.Z)(d, true, {
      guildId: a
    }))
  }, [a, d]);
  let A = (0, s.e7)([g.Z], () => g.Z.hideInstantInvites, []);
  if (null == E) return (0, r.jsx)(U, {});
  let {
    sourceInviteCode: m,
    joinSourceType: I,
    joinSourceChannelId: N,
    joinSourceApplicationId: O,
    integrationType: p
  } = E, S = null != I ? b[I] : null, C = null != (n = null == S ? true : S.hasTooltip) && n;
  return (I === R.gq.INVITE || I === R.gq.VANITY_URL || I === R.gq.MANUAL_MEMBER_VERIFICATION && null != m) && A ? (0, r.jsx)(M, {}) : (0, r.jsx)(P, {
    hasTooltip: C && !o,
    inviterUser: null != _ ? _ : null,
    guildId: a,
    joinSourceType: I,
    joinSourceChannelId: N,
    children: e => (0, r.jsx)(y, L({
      sourceInviteCode: m,
      joinSourceType: I,
      joinSourceApplicationId: O,
      joinSourceChannelId: N,
      integrationType: p,
      showJoinMethodContextAsFooter: o,
      inviterUser: null != _ ? _ : null,
      guildId: a,
      onClickInviter: c
    }, e))
  })
})