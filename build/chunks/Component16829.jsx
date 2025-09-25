/** Chunk was on 66201 **/
/** chunk id: 16829, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => G
}), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  Chunk260523 = require("./260523.js");

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
let U = Chunk647438.memo(function() {
    return (0, Chunk951288.jsx)(Chunk481060.ua7, {
      text: Chunk388032.intl.string(Chunk388032.t["vu/MiY"]),
      children: e => (0, r.jsx)(o.Text, L(D({}, e), {
        variant: "text-sm/medium",
        color: "text-muted",
        className: C.unknownInvite,
        children: p.intl.string(p.t.yobFdn)
      }))
    })
  }),
  M = Chunk647438.memo(function() {
    return (0, Chunk951288.jsx)(Chunk481060.ua7, {
      text: Chunk388032.intl.string(Chunk388032.t.OrCp9v),
      children: e => (0, r.jsx)(o.Text, L(D({}, e), {
        variant: "text-sm/medium",
        color: "text-muted",
        className: C.unknownInvite,
        children: p.intl.string(p.t["4upToa"])
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
        className: Chunk260523.robot,
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
      getJoinTypeLabel: e => null != e ? p.intl.formatToPlainString(p.t["VHLp+v"], {
        code: e
      }) : p.intl.string(p.t.vdu7oa),
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

function v(e) {
  var t, n;
  let {
    guildId: i,
    inviterUser: u,
    joinSourceType: E,
    className: d,
    onClickInviter: _
  } = e, T = (0, a.e7)([m.ZP], () => null == u ? null : m.ZP.getMember(i, u.id), [u, i]), I = (0, A.X7)(null == T ? true : T.guildId, null == T ? true : T.userId, null != (t = null == T ? true : T.colorStrings) ? t : null), g = l.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), null != u && (null == _ || _(u))
  }, [u, _]);
  return null == u ? null : (0, r.jsxs)("div", {
    className: s()(C.inviterTooltipContainer, d),
    children: [(0, r.jsx)(o.Text, {
      variant: "text-xs/medium",
      children: E !== S.gq.BOT ? p.intl.string(p.t.azhY2t) : p.intl.string(p.t["2ByN2t"])
    }), (0, r.jsxs)(o.P3F, {
      className: s()(C.inviterUserContainer, null != _ && C.clickable),
      onClick: g,
      children: [(0, r.jsx)(c.Z, {
        user: u,
        size: o.EFr.SIZE_16
      }), (0, r.jsx)(o.Text, {
        variant: "text-xs/medium",
        children: (0, r.jsx)(o.PUh, {
          name: h.ZP.getName(i, null, u),
          colorString: null != (n = null == T ? true : T.colorString) ? n : null,
          colorStrings: I
        })
      })]
    })]
  })
}

function x(e) {
  let {
    channel: t,
    className: n
  } = e, l = (0, d.ZP)(t, true);
  return (0, r.jsx)("div", {
    className: s()(C.inviterUserContainer, n),
    children: (0, r.jsx)(o.Text, {
      variant: "text-xs/medium",
      children: p.intl.format(p.t["2VQq2t"], {
        channelName: null != l ? l : p.intl.string(p.t.zLZPmp)
      })
    })
  })
}

function P(e) {
  let {
    children: t,
    hasTooltip: n,
    guildId: i,
    inviterUser: s,
    joinSourceType: u,
    joinSourceChannelId: c
  } = e, E = (0, a.e7)([I.Z], () => I.Z.getChannel(c)), _ = (0, d.ZP)(E, true), A = !!n && (u === S.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL || null != s), T = l.useMemo(() => u === S.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL ? (0, r.jsx)(x, {
    channel: E
  }) : (0, r.jsx)(v, {
    guildId: i,
    inviterUser: s,
    joinSourceType: u
  }), [u, i, s, E]);
  if (!A) return (0, r.jsx)(r.Fragment, {
    children: t({})
  });
  let m = u === S.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL ? p.intl.formatToPlainString(p.t["2VQq2t"], {
    channelName: null != _ ? _ : p.intl.string(p.t.zLZPmp)
  }) : u === S.gq.BOT ? p.intl.string(p.t["2ByN2t"]) : p.intl.string(p.t.azhY2t);
  return (0, r.jsx)(o.ua7, {
    "aria-label": m,
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
  } = e, n = (0, S.Ph)(t);
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
    onClickInviter: m
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
  let N = null != n ? b[n] : null,
    O = n === S.gq.INTEGRATION && null != u,
    h = (0, E.q)(i),
    f = (0, a.e7)([I.Z], () => I.Z.getChannel(c)),
    p = l.useCallback(e => {
      switch (e.stopPropagation(), e.preventDefault(), true) {
        case null == t && null == n:
        case null == n:
          return;
        case n === S.gq.INVITE && null != t:
          var r;
          (0, R.Dr)(A, {
            selectedSourceInviteCode: null != (r = null == t ? true : t.trim()) ? r : true,
            selectedJoinSourceType: n
          });
          return;
        default:
          return void(0, R.Dr)(A, {
            selectedSourceInviteCode: null,
            selectedJoinSourceType: null != n ? n : true
          })
      }
    }, [A, n, t]);
  switch (true) {
    case null == N:
    case null == n:
    case n === S.gq.UNSPECIFIED:
      return (0, r.jsx)(U, D({}, g));
    case null != u && O:
      return (0, r.jsxs)(o.P3F, L(D({
        className: C.inviteContainer
      }, g), {
        "aria-label": (0, S.MS)(u),
        role: "button",
        tabIndex: 0,
        onClick: p,
        children: [(0, r.jsx)(j, {
          type: u
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/medium",
          children: (0, S.MS)(u)
        })]
      }));
    case n === S.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL && null != h:
      return (0, r.jsxs)("div", {
        className: s()(d && C.footerAlignment),
        children: [(0, r.jsxs)(o.P3F, L(D({
          className: C.linkedChannelContainer
        }, g), {
          "aria-label": null == N ? true : N.getJoinTypeLabel(null != t ? t : true),
          role: "button",
          tabIndex: 0,
          onClick: p,
          children: [(0, r.jsx)(_.Z, {
            game: h,
            size: _.A.XXSMALL
          }), (0, r.jsx)(o.Text, {
            variant: "text-sm/medium",
            className: C.linkedChannelApplicationName,
            children: h.name
          })]
        })), d && (0, r.jsx)(x, {
          channel: f
        })]
      });
    case null != N:
      return (0, r.jsxs)("div", {
        className: s()(d && C.footerAlignment),
        children: [(0, r.jsxs)(o.P3F, L(D({
          className: C.inviteContainer
        }, g), {
          "aria-label": null == N ? true : N.getJoinTypeLabel(null != t ? t : true),
          role: "button",
          tabIndex: 0,
          onClick: p,
          children: [null == N ? true : N.icon, (0, r.jsx)(o.Text, {
            variant: "text-sm/medium",
            children: null == N ? true : N.getJoinTypeLabel(null != t ? t : true)
          })]
        })), d && (0, r.jsx)(v, {
          guildId: A,
          inviterUser: T,
          joinSourceType: n,
          className: C.inviterFooter,
          onClickInviter: m
        })]
      });
    default:
      return (0, r.jsx)(U, D({}, g))
  }
}
let G = Chunk647438.memo(function(e) {
  var t, n;
  let {
    userId: i,
    guildId: s,
    showJoinMethodContextAsFooter: o,
    onClickInviter: c
  } = e, E = (0, a.e7)([f.Z], () => f.Z.getEnhancedMember(s, i), [s, i]), d = null != (t = null == E ? true : E.inviterId) ? t : null, _ = (0, a.e7)([N.default], () => N.default.getUser(d), [d]);
  l.useEffect(() => {
    null != d && (u.Z.requestMembersById(s, [d]), (0, T.Z)(d, true, {
      guildId: s
    }))
  }, [s, d]);
  let A = (0, a.e7)([g.Z], () => g.Z.hideInstantInvites, []);
  if (null == E) return (0, r.jsx)(U, {});
  let {
    sourceInviteCode: I,
    joinSourceType: m,
    joinSourceChannelId: O,
    joinSourceApplicationId: h,
    integrationType: R
  } = E, p = null != m ? b[m] : null, C = null != (n = null == p ? true : p.hasTooltip) && n;
  return (m === S.gq.INVITE || m === S.gq.VANITY_URL || m === S.gq.MANUAL_MEMBER_VERIFICATION && null != I) && A ? (0, r.jsx)(M, {}) : (0, r.jsx)(P, {
    hasTooltip: C && !o,
    inviterUser: null != _ ? _ : null,
    guildId: s,
    joinSourceType: m,
    joinSourceChannelId: O,
    children: e => (0, r.jsx)(y, D({
      sourceInviteCode: I,
      joinSourceType: m,
      joinSourceApplicationId: h,
      joinSourceChannelId: O,
      integrationType: R,
      showJoinMethodContextAsFooter: o,
      inviterUser: null != _ ? _ : null,
      guildId: s,
      onClickInviter: c
    }, e))
  })
})