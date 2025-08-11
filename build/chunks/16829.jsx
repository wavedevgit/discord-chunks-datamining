/** Chunk was on 12097 **/
/** chunk id: 16829, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => w
}), require("./781311.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk700582 = require("./700582.js"),
  Chunk835473 = require("./835473.js"),
  Chunk933557 = require("./933557.js"),
  Chunk925329 = require("./925329.js"),
  Chunk884902 = require("./884902.js"),
  Chunk484459 = require("./484459.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk246946 = require("./246946.js"),
  Chunk594174 = require("./594174.js"),
  Chunk785195 = require("./785195.js"),
  Chunk5192 = require("./5192.js"),
  Chunk893966 = require("./893966.js"),
  Chunk527379 = require("./527379.js"),
  Chunk327999 = require("./327999.js"),
  Chunk388032 = require("./388032.js"),
  Chunk615133 = require("./615133.js");

function v(e) {
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
let b = Chunk73800.memo(function() {
    return <Chunk481060.ua7 text={Chunk388032.intl.string(Chunk388032.t["vu/MiY"])}>{e => (0, r.jsx)(o.Text, D(v({}, e), {
        variant: "text-sm/medium",
        color: "text-muted",
        className: C.unknownInvite,
        children: S.intl.string(S.t.yobFdn)
      }))}</Chunk481060.ua7>
  }),
  L = Chunk73800.memo(function() {
    return <Chunk481060.ua7 text={Chunk388032.intl.string(Chunk388032.t.OrCp9v)}>{e => (0, r.jsx)(o.Text, D(v({}, e), {
        variant: "text-sm/medium",
        color: "text-muted",
        className: C.unknownInvite,
        children: S.intl.string(S.t["4upToa"])
      }))}</Chunk481060.ua7>
  }),
  x = {
    [Chunk327999.gq.UNSPECIFIED]: {
      type: Chunk327999.gq.UNSPECIFIED,
      getJoinTypeLabel: () => Chunk388032.intl.string(Chunk388032.t.DvMBkZ),
      icon: null,
      hasTooltip: false
    },
    [Chunk327999.gq.BOT]: {
      type: Chunk327999.gq.BOT,
      getJoinTypeLabel: () => Chunk388032.intl.string(Chunk388032.t.HumZAg),
      icon: <Chunk481060.wGt size={"custom"} color={"currentColor"} className={Chunk615133.robot} height={12} width={12} />,
      hasTooltip: true
    },
    [Chunk327999.gq.INTEGRATION]: {
      type: Chunk327999.gq.INTEGRATION,
      getJoinTypeLabel: () => Chunk388032.intl.string(Chunk388032.t.gmCUFx),
      icon: <Chunk481060.tYf size={"custom"} color={"currentColor"} height={12} width={12} />,
      hasTooltip: false
    },
    [Chunk327999.gq.DISCOVERY]: {
      type: Chunk327999.gq.DISCOVERY,
      getJoinTypeLabel: () => Chunk388032.intl.string(Chunk388032.t["Ql/e9f"]),
      icon: <Chunk481060.Jmo size={"custom"} color={"currentColor"} height={12} width={12} />,
      hasTooltip: false
    },
    [Chunk327999.gq.HUB]: {
      type: Chunk327999.gq.HUB,
      getJoinTypeLabel: () => Chunk388032.intl.string(Chunk388032.t.Op8B3N),
      icon: <Chunk481060.aVH size={"custom"} color={"currentColor"} height={12} width={12} />,
      hasTooltip: false
    },
    [Chunk327999.gq.INVITE]: {
      type: Chunk327999.gq.INVITE,
      getJoinTypeLabel: e => e,
      icon: <Chunk481060.xPt size={"custom"} color={"currentColor"} height={12} width={12} />,
      hasTooltip: true
    },
    [Chunk327999.gq.VANITY_URL]: {
      type: Chunk327999.gq.VANITY_URL,
      getJoinTypeLabel: e => e,
      icon: <Chunk481060.xPt size={"custom"} color={"currentColor"} height={12} width={12} />,
      hasTooltip: false
    },
    [Chunk327999.gq.MANUAL_MEMBER_VERIFICATION]: {
      type: Chunk327999.gq.MANUAL_MEMBER_VERIFICATION,
      getJoinTypeLabel: e => null != e ? S.intl.formatToPlainString(S.t["VHLp+v"], {
        code: e
      }) : S.intl.string(S.t.vdu7oa),
      icon: <Chunk785195.Z height={12} width={12} />,
      hasTooltip: true
    },
    [Chunk327999.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL]: {
      type: Chunk327999.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL,
      getJoinTypeLabel: () => Chunk388032.intl.string(Chunk388032.t["9/ZreX"]),
      icon: <Chunk481060.iWm size={"custom"} color={"currentColor"} height={12} width={12} />,
      hasTooltip: true
    }
  };

function U(e) {
  var t, n;
  let {
    guildId: s,
    inviterUser: u,
    joinSourceType: E,
    className: d,
    onClickInviter: _
  } = e, T = (0, a.e7)([I.ZP], () => null == u ? null : I.ZP.getMember(s, u.id), [u, s]), m = (0, A.X7)(null == T ? true : T.guildId, null == T ? true : T.userId, null != (t = null == T ? true : T.colorStrings) ? t : null), g = l.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), null != u && (null == _ || _(u))
  }, [u, _]);
  return null == u ? null : <div className={i()(C.inviterTooltipContainer, d)}>{<o.Text variant={"text-xs/medium"}>{E !== R.gq.BOT ? S.intl.string(S.t.azhY2t) : S.intl.string(S.t["2ByN2t"])}</o.Text>}{<o.P3F className={i()(C.inviterUserContainer, null != _ && C.clickable)} onClick={g}>{<c.Z user={u} size={o.EFr.SIZE_16} />}{<o.Text variant={"text-xs/medium"}><o.PUh name={h.ZP.getName(s, null, u)} colorString={null != (n = null == T ? true : T.colorString) ? n : null} colorStrings={m} /></o.Text>}</o.P3F>}</div>
}

function M(e) {
  let {
    channel: t,
    className: n
  } = e, l = (0, d.ZP)(t, true);
  return <div className={i()(C.inviterUserContainer, n)}><o.Text variant={"text-xs/medium"}>{S.intl.format(S.t["2VQq2t"], {
        channelName: null != l ? l : S.intl.string(S.t.zLZPmp)
      })}</o.Text></div>
}

function P(e) {
  let {
    children: t,
    hasTooltip: n,
    guildId: s,
    inviterUser: i,
    joinSourceType: u,
    joinSourceChannelId: c
  } = e, E = (0, a.e7)([m.Z], () => m.Z.getChannel(c)), _ = (0, d.ZP)(E, true), A = !!n && (u === R.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL || null != i), T = l.useMemo(() => u === R.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL ? <M channel={E} /> : <U guildId={s} inviterUser={i} joinSourceType={u} />, [u, s, i, E]);
  if (!A) return <r.Fragment>{t({})}</r.Fragment>;
  let I = u === R.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL ? S.intl.formatToPlainString(S.t["2VQq2t"], {
    channelName: null != _ ? _ : S.intl.string(S.t.zLZPmp)
  }) : u === R.gq.BOT ? S.intl.string(S.t["2ByN2t"]) : S.intl.string(S.t.azhY2t);
  return <o.ua7 aria-label={I} allowOverflow={true} text={T}>{e => (0, r.jsx)(r.Fragment, {
      children: t(e)
    })}</o.ua7>
}

function j(e) {
  let {
    type: t
  } = e, n = (0, R.Ph)(t);
  return null == n ? null : <div className={C.integrationIcon} style={{
      width: 12,
      height: 12,
      backgroundImage: n
    }} />
}

function y(e) {
  var {
    sourceInviteCode: t,
    joinSourceType: n,
    joinSourceApplicationId: s,
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
        s = Object.keys(e);
      for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      for (r = 0; r < s.length; r++) n = s[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
    }
    return l
  }(e, ["sourceInviteCode", "joinSourceType", "joinSourceApplicationId", "integrationType", "joinSourceChannelId", "showJoinMethodContextAsFooter", "guildId", "inviterUser", "onClickInviter"]);
  let f = null != n ? x[n] : null,
    N = n === R.gq.INTEGRATION && null != u,
    h = (0, E.q)(s),
    O = (0, a.e7)([m.Z], () => m.Z.getChannel(c)),
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
      return <b{...v({}, g)} />;
    case null != u && N:
      return <o.P3F{...D(v({
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
      })} />;
    case n === R.gq.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL && null != h:
      return <div className={i()(d && C.footerAlignment)}>{<o.P3F{...D(v({
          className: C.linkedChannelContainer
        }, g), {
          "aria-label": null == f ? true : f.getJoinTypeLabel(null != t ? t : true),
          role: "button",
          tabIndex: 0,
          onClick: S,
          children: [(0, r.jsx)(_.Z, {
            game: h,
            size: _.Z.Sizes.XXSMALL
          }), (0, r.jsx)(o.Text, {
            variant: "text-sm/medium",
            className: C.linkedChannelApplicationName,
            children: h.name
          })]
        })} />}{d && <M channel={O} />}</div>;
    case null != f:
      return <div className={i()(d && C.footerAlignment)}>{<o.P3F{...D(v({
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
        })} />}{d && <U guildId={A} inviterUser={T} joinSourceType={n} className={C.inviterFooter} onClickInviter={I} />}</div>;
    default:
      return <b{...v({}, g)} />
  }
}
let w = Chunk73800.memo(function(e) {
  var t, n;
  let {
    userId: s,
    guildId: i,
    showJoinMethodContextAsFooter: o,
    onClickInviter: c
  } = e, E = (0, a.e7)([O.Z], () => O.Z.getEnhancedMember(i, s), [i, s]), d = null != (t = null == E ? true : E.inviterId) ? t : null, _ = (0, a.e7)([f.default], () => f.default.getUser(d), [d]);
  l.useEffect(() => {
    null != d && (u.Z.requestMembersById(i, [d]), (0, T.Z)(d, true, {
      guildId: i
    }))
  }, [i, d]);
  let A = (0, a.e7)([g.Z], () => g.Z.hideInstantInvites, []);
  if (null == E) return <b />;
  let {
    sourceInviteCode: m,
    joinSourceType: I,
    joinSourceChannelId: N,
    joinSourceApplicationId: h,
    integrationType: p
  } = E, S = null != I ? x[I] : null, C = null != (n = null == S ? true : S.hasTooltip) && n;
  return (I === R.gq.INVITE || I === R.gq.VANITY_URL || I === R.gq.MANUAL_MEMBER_VERIFICATION && null != m) && A ? <L /> : <P hasTooltip={C && !o} inviterUser={null != _ ? _ : null} guildId={i} joinSourceType={I} joinSourceChannelId={N}>{e => (0, r.jsx)(y, v({
      sourceInviteCode: m,
      joinSourceType: I,
      joinSourceApplicationId: h,
      joinSourceChannelId: N,
      integrationType: p,
      showJoinMethodContextAsFooter: o,
      inviterUser: null != _ ? _ : null,
      guildId: i,
      onClickInviter: c
    }, e))}</P>
})