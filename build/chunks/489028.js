/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => B
}), n(47120), n(266796);
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(481060),
  l = n(782568),
  o = n(223892),
  c = n(203498),
  A = n(641806),
  d = n(690221),
  u = n(30624),
  g = n(577275),
  f = n(594174),
  m = n(451478),
  p = n(626135),
  h = n(584825),
  C = n(723047),
  b = n(416867),
  v = n(903773),
  x = n(215124),
  N = n(326578),
  j = n(981631),
  E = n(674563),
  I = n(829857),
  O = n(388032),
  y = n(261098);

function w(e) {
  let {
    onCreateTeamClick: t,
    isGuildOwner: n
  } = e;
  return (0, r.jsx)("div", {
    className: y.selectTeamContainer,
    children: (0, r.jsx)(a.zxk, {
      disabled: !n,
      onClick: t,
      className: y.enableTicketingButton,
      fullWidth: !0,
      children: O.NW.string(O.t["5k6FfX"])
    })
  })
}

function P(e) {
  let {
    guild: t,
    eligibleTeams: n,
    isGuildOwner: s
  } = e, [l, o] = i.useState(), {
    enableGuildMonetizationForTeam: A,
    submitting: d,
    error: u
  } = (0, c.Z)(), {
    fetchSubscriptionsSettings: g
  } = (0, h.JH)(), f = (0, C.mY)(), m = i.useMemo(() => n.map(e => ({
    label: e.name,
    value: e.id
  })), [n]), p = async () => {
    await A(t, l, E.wW.GUILD_ROLE_SUBSCRIPTIONS) && (g(t.id), (0, b.B)({
      Icon: N.Z,
      title: O.NW.string(O.t["AP/2qa"]),
      body: O.NW.string(O.t.kHMgaG)
    }))
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: y.selectTeamContainer,
      children: [(0, r.jsx)(a.q4e, {
        className: y.teamSelect,
        options: m,
        placeholder: O.NW.string(O.t.QXf93N),
        value: l,
        isDisabled: 0 === m.length || f || !s,
        onChange: e => o(e),
        "aria-label": O.NW.string(O.t.QXf93N)
      }), (0, r.jsx)(a.zxk, {
        onClick: p,
        className: y.enableTicketingButton,
        submitting: d,
        disabled: null == l || f || !s,
        children: O.NW.string(O.t["9HU3ZW"])
      })]
    }), null != u && (0, r.jsx)(a.Text, {
      className: y.error,
      variant: "text-sm/normal",
      children: u.getAnyErrorMessage()
    })]
  })
}
let B = e => {
  let {
    guild: t
  } = e, n = (0, s.e7)([f.default], () => f.default.getCurrentUser()), c = t.isOwner(n), h = (0, o.Ob)(t), C = (0, s.e7)([m.Z], () => m.Z.isFocused()), {
    teams: b,
    loading: N
  } = (0, g.Z)({
    refreshOnDepChange: C
  }), E = i.useMemo(() => b.filter(e => {
    var t;
    return e.payout_account_status !== I.C.BLOCKED && (0, u.Z)(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : j.lds, e)
  }), [b, n]), B = E.length > 0, D = i.useCallback(async () => {
    p.default.track(j.rMx.GUILD_ROLE_SUBSCRIPTION_TEAM_SETUP_CLICKED, {
      is_onboarding_v2: h,
      has_eligible_team: B,
      guild_id: t.id,
      is_owner: c
    });
    let e = await (0, A.$)(j.E07.DEVELOPER_PORTAL_TEAMS);
    (0, l.Z)(e)
  }, [t, c, h, B]), T = i.useCallback(e => c ? (0, r.jsx)(d.Z, {
    onClick: D,
    children: e
  }) : e, [D, c]);
  return N ? (0, r.jsx)(a.$jN, {}) : (0, r.jsxs)(r.Fragment, {
    children: [!c && (0, r.jsx)(v.Z, {
      className: y.nonOwnerNotice,
      children: O.NW.string(O.t.t56qWF)
    }), (0, r.jsxs)(a.hjN, {
      title: O.NW.string(O.t.sYLCY2),
      disabled: !c,
      children: [(0, r.jsx)(a.R94, {
        type: a.R94.Types.DESCRIPTION,
        className: y.description,
        disabled: !c,
        children: O.NW.format(O.t["5mfqpa"], {
          onCreateTeamHook: T
        })
      }), B ? (0, r.jsx)(P, {
        guild: t,
        eligibleTeams: E,
        isGuildOwner: c
      }) : (0, r.jsx)(w, {
        onCreateTeamClick: D,
        isGuildOwner: c
      })]
    }), (0, r.jsx)(a.hjN, {
      title: O.NW.string(O.t["0n7R2d"]),
      className: y.selfDemonetization,
      children: (0, r.jsx)(x.Z, {
        guildId: t.id,
        allPeriods: []
      })
    })]
  })
}