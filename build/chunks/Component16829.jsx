/** Chunk was on 7318 **/
/** chunk id: 16829, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  ZP: () => N
}), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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

function Q(A) {
  for (var e = 1; e < arguments.length; e++) {
    var t = null != arguments[e] ? arguments[e] : {},
      n = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(A) {
      return Object.getOwnPropertyDescriptor(t, A).enumerable
    }))), n.forEach(function(e) {
      var n;
      n = t[e], e in A ? Object.defineProperty(A, e, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : A[e] = n
    })
  }
  return A
}

function O(A, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(e)) : (function(A, e) {
    var t = Object.keys(A);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(A);
      t.push.apply(t, n)
    }
    return t
  })(Object(e)).forEach(function(t) {
    Object.defineProperty(A, t, Object.getOwnPropertyDescriptor(e, t))
  }), A
}
let P = Chunk647438.memo(function() {
    return (0, Chunk951288.jsx)(Chunk481060.ua7, {
      text: Chunk388032.intl.string(Chunk388032.t["vu/MiY"]),
      children: A => (0, n.jsx)(a.Text, O(Q({}, A), {
        variant: "text-sm/medium",
        color: "text-muted",
        className: b.unknownInvite,
        children: H.intl.string(H.t.yobFdn)
      }))
    })
  }),
  V = Chunk647438.memo(function() {
    return (0, Chunk951288.jsx)(Chunk481060.ua7, {
      text: Chunk388032.intl.string(Chunk388032.t.OrCp9v),
      children: A => (0, n.jsx)(a.Text, O(Q({}, A), {
        variant: "text-sm/medium",
        color: "text-muted",
        className: b.unknownInvite,
        children: H.intl.string(H.t["4upToa"])
      }))
    })
  }),
  j = {
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
      getJoinTypeLabel: A => A,
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
      getJoinTypeLabel: A => A,
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
      getJoinTypeLabel: A => null != A ? H.intl.formatToPlainString(H.t["VHLp+v"], {
        code: A
      }) : H.intl.string(H.t.vdu7oa),
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

function m(A) {
  var e, t;
  let {
    guildId: l,
    inviterUser: o,
    joinSourceType: c,
    className: f,
    onClickInviter: v
  } = A, u = (0, s.e7)([E.ZP], () => null == o ? null : E.ZP.getMember(l, o.id), [o, l]), d = (0, h.X7)(null == u ? true : u.guildId, null == u ? true : u.userId, null != (e = null == u ? true : u.colorStrings) ? e : null), C = r.useCallback(A => {
    A.stopPropagation(), A.preventDefault(), null != o && (null == v || v(o))
  }, [o, v]);
  return null == o ? null : (0, n.jsxs)("div", {
    className: i()(b.inviterTooltipContainer, f),
    children: [(0, n.jsx)(a.Text, {
      variant: "text-xs/medium",
      children: c !== I.gq.BOT ? H.intl.string(H.t.azhY2t) : H.intl.string(H.t["2ByN2t"])
    }), (0, n.jsxs)(a.P3F, {
      className: i()(b.inviterUserContainer, null != v && b.clickable),
      onClick: C,
      children: [(0, n.jsx)(g.Z, {
        user: o,
        size: a.EFr.SIZE_16
      }), (0, n.jsx)(a.Text, {
        variant: "text-xs/medium",
        children: (0, n.jsx)(a.PUh, {
          name: D.ZP.getName(l, null, o),
          colorString: null != (t = null == u ? true : u.colorString) ? t : null,
          colorStrings: d
        })
      })]
    })]
  })
}

function T(A) {
  let {
    channel: e,
    className: t
  } = A, r = (0, f.ZP)(e, true);
  return (0, n.jsx)("div", {
    className: i()(b.inviterUserContainer, t),
    children: (0, n.jsx)(a.Text, {
      variant: "text-xs/medium",
      children: H.intl.format(H.t["2VQq2t"], {
        channelName: null != r ? r : H.intl.string(H.t.zLZPmp)
      })
    })
  })
}

function y(A) {
  let {
    children: e,
    hasTooltip: t,
    guildId: l,
    inviterUser: i,
    joinSourceType: o,
    joinSourceChannelId: g
  } = A, c = (0, s.e7)([d.Z], () => d.Z.getChannel(g)), v = (0, f.ZP)(c, true), h = !!t && (o === I.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL || null != i), u = r.useMemo(() => o === I.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL ? (0, n.jsx)(T, {
    channel: c
  }) : (0, n.jsx)(m, {
    guildId: l,
    inviterUser: i,
    joinSourceType: o
  }), [o, l, i, c]);
  if (!h) return (0, n.jsx)(n.Fragment, {
    children: e({})
  });
  let E = o === I.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL ? H.intl.formatToPlainString(H.t["2VQq2t"], {
    channelName: null != v ? v : H.intl.string(H.t.zLZPmp)
  }) : o === I.gq.BOT ? H.intl.string(H.t["2ByN2t"]) : H.intl.string(H.t.azhY2t);
  return (0, n.jsx)(a.ua7, {
    "aria-label": E,
    allowOverflow: true,
    text: u,
    children: A => (0, n.jsx)(n.Fragment, {
      children: e(A)
    })
  })
}

function L(A) {
  let {
    type: e
  } = A, t = (0, I.Ph)(e);
  return null == t ? null : (0, n.jsx)("div", {
    className: b.integrationIcon,
    style: {
      width: 12,
      height: 12,
      backgroundImage: t
    }
  })
}

function x(A) {
  var {
    sourceInviteCode: e,
    joinSourceType: t,
    joinSourceApplicationId: l,
    integrationType: o,
    joinSourceChannelId: g,
    showJoinMethodContextAsFooter: f,
    guildId: h,
    inviterUser: u,
    onClickInviter: E
  } = A, C = function(A, e) {
    if (null == A) return {};
    var t, n, r = function(A, e) {
      if (null == A) return {};
      var t, n, r = {},
        l = Object.keys(A);
      for (n = 0; n < l.length; n++) t = l[n], e.indexOf(t) >= 0 || (r[t] = A[t]);
      return r
    }(A, e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(A);
      for (n = 0; n < l.length; n++) t = l[n], !(e.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(A, t) && (r[t] = A[t])
    }
    return r
  }(A, ["sourceInviteCode", "joinSourceType", "joinSourceApplicationId", "integrationType", "joinSourceChannelId", "showJoinMethodContextAsFooter", "guildId", "inviterUser", "onClickInviter"]);
  let B = null != t ? j[t] : null,
    w = t === I.gq.INTEGRATION && null != o,
    D = (0, c.q)(l),
    M = (0, s.e7)([d.Z], () => d.Z.getChannel(g)),
    H = r.useCallback(A => {
      switch (A.stopPropagation(), A.preventDefault(), true) {
        case null == e && null == t:
        case null == t:
          return;
        case t === I.gq.INVITE && null != e:
          var n;
          (0, p.Dr)(h, {
            selectedSourceInviteCode: null != (n = null == e ? true : e.trim()) ? n : true,
            selectedJoinSourceType: t
          });
          return;
        default:
          return void(0, p.Dr)(h, {
            selectedSourceInviteCode: null,
            selectedJoinSourceType: null != t ? t : true
          })
      }
    }, [h, t, e]);
  switch (true) {
    case null == B:
    case null == t:
    case t === I.gq.UNSPECIFIED:
      return (0, n.jsx)(P, Q({}, C));
    case null != o && w:
      return (0, n.jsxs)(a.P3F, O(Q({
        className: b.inviteContainer
      }, C), {
        "aria-label": (0, I.MS)(o),
        role: "button",
        tabIndex: 0,
        onClick: H,
        children: [(0, n.jsx)(L, {
          type: o
        }), (0, n.jsx)(a.Text, {
          variant: "text-sm/medium",
          children: (0, I.MS)(o)
        })]
      }));
    case t === I.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL && null != D:
      return (0, n.jsxs)("div", {
        className: i()(f && b.footerAlignment),
        children: [(0, n.jsxs)(a.P3F, O(Q({
          className: b.linkedChannelContainer
        }, C), {
          "aria-label": null == B ? true : B.getJoinTypeLabel(null != e ? e : true),
          role: "button",
          tabIndex: 0,
          onClick: H,
          children: [(0, n.jsx)(v.Z, {
            game: D,
            size: v.Z.Sizes.XXSMALL
          }), (0, n.jsx)(a.Text, {
            variant: "text-sm/medium",
            className: b.linkedChannelApplicationName,
            children: D.name
          })]
        })), f && (0, n.jsx)(T, {
          channel: M
        })]
      });
    case null != B:
      return (0, n.jsxs)("div", {
        className: i()(f && b.footerAlignment),
        children: [(0, n.jsxs)(a.P3F, O(Q({
          className: b.inviteContainer
        }, C), {
          "aria-label": null == B ? true : B.getJoinTypeLabel(null != e ? e : true),
          role: "button",
          tabIndex: 0,
          onClick: H,
          children: [null == B ? true : B.icon, (0, n.jsx)(a.Text, {
            variant: "text-sm/medium",
            children: null == B ? true : B.getJoinTypeLabel(null != e ? e : true)
          })]
        })), f && (0, n.jsx)(m, {
          guildId: h,
          inviterUser: u,
          joinSourceType: t,
          className: b.inviterFooter,
          onClickInviter: E
        })]
      });
    default:
      return (0, n.jsx)(P, Q({}, C))
  }
}
let N = Chunk647438.memo(function(A) {
  var e, t;
  let {
    userId: l,
    guildId: i,
    showJoinMethodContextAsFooter: a,
    onClickInviter: g
  } = A, c = (0, s.e7)([M.Z], () => M.Z.getEnhancedMember(i, l), [i, l]), f = null != (e = null == c ? true : c.inviterId) ? e : null, v = (0, s.e7)([B.default], () => B.default.getUser(f), [f]);
  r.useEffect(() => {
    null != f && (o.Z.requestMembersById(i, [f]), (0, u.Z)(f, true, {
      guildId: i
    }))
  }, [i, f]);
  let h = (0, s.e7)([C.Z], () => C.Z.hideInstantInvites, []);
  if (null == c) return (0, n.jsx)(P, {});
  let {
    sourceInviteCode: d,
    joinSourceType: E,
    joinSourceChannelId: w,
    joinSourceApplicationId: D,
    integrationType: p
  } = c, H = null != E ? j[E] : null, b = null != (t = null == H ? true : H.hasTooltip) && t;
  return (E === I.gq.INVITE || E === I.gq.VANITY_URL || E === I.gq.MANUAL_MEMBER_VERIFICATION && null != d) && h ? (0, n.jsx)(V, {}) : (0, n.jsx)(y, {
    hasTooltip: b && !a,
    inviterUser: null != v ? v : null,
    guildId: i,
    joinSourceType: E,
    joinSourceChannelId: w,
    children: A => (0, n.jsx)(x, Q({
      sourceInviteCode: d,
      joinSourceType: E,
      joinSourceApplicationId: D,
      joinSourceChannelId: w,
      integrationType: p,
      showJoinMethodContextAsFooter: a,
      inviterUser: null != v ? v : null,
      guildId: i,
      onClickInviter: g
    }, A))
  })
})