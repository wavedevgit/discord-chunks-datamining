/** Chunk was on 88479 **/
/** chunk id: 489028, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk223892 = require("./223892.js"),
  Chunk203498 = require("./203498.js"),
  Chunk641806 = require("./641806.js"),
  Chunk690221 = require("./690221.jsx"),
  Chunk30624 = require("./30624.js"),
  Chunk577275 = require("./577275.js"),
  Chunk601964 = require("./601964.js"),
  Chunk594174 = require("./594174.js"),
  Chunk451478 = require("./451478.js"),
  Chunk626135 = require("./626135.js"),
  Chunk584825 = require("./584825.js"),
  Chunk723047 = require("./723047.js"),
  Chunk416867 = require("./416867.jsx"),
  Chunk903773 = require("./903773.jsx"),
  Chunk215124 = require("./215124.jsx"),
  Chunk326578 = require("./326578.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk674563 = require("./674563.js"),
  Chunk829857 = require("./829857.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk489838 = require("./489838.js");

function P(e) {
  let {
    onCreateTeamClick: t,
    isGuildOwner: n
  } = e;
  return (0, r.jsx)("div", {
    className: T.selectTeamContainer,
    children: (0, r.jsx)(a.zx, {
      disabled: !n,
      onClick: t,
      className: T.enableTicketingButton,
      fullWidth: true,
      children: S.intl.string(S.t["5k6FfX"])
    })
  })
}

function w(e) {
  let {
    guild: t,
    eligibleTeams: n,
    isGuildOwner: l
  } = e, [o, c] = i.useState(), {
    enableGuildMonetizationForTeam: u,
    submitting: m,
    error: g
  } = (0, d.Z)(), {
    fetchSubscriptionsSettings: p
  } = (0, j.JH)(), f = (0, v.mY)(), h = i.useMemo(() => n.map(e => ({
    label: e.name,
    value: e.id
  })), [n]), b = async () => {
    await u(t, o, E.wW.GUILD_ROLE_SUBSCRIPTIONS) && (p(t.id), (0, _.B)({
      Icon: C.Z,
      title: S.intl.string(S.t["AP/2qa"]),
      body: S.intl.string(S.t.kHMgaG)
    }))
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: T.selectTeamContainer,
      children: [(0, r.jsx)(s.q4e, {
        className: T.teamSelect,
        options: h,
        placeholder: S.intl.string(S.t.QXf93N),
        value: o,
        isDisabled: 0 === h.length || f || !l,
        onChange: e => c(e),
        "aria-label": S.intl.string(S.t.QXf93N)
      }), (0, r.jsx)(a.zx, {
        onClick: b,
        className: T.enableTicketingButton,
        submitting: m,
        disabled: null == o || f || !l,
        children: S.intl.string(S.t["9HU3ZW"])
      })]
    }), null != g && (0, r.jsx)(s.Text, {
      className: T.error,
      variant: "text-sm/normal",
      children: g.getAnyErrorMessage()
    })]
  })
}
let R = e => {
  let {
    guild: t
  } = e, n = (0, l.e7)([h.default], () => h.default.getCurrentUser()), a = (0, f.eM)(t, n), d = (0, c.Ob)(t), j = (0, l.e7)([b.Z], () => b.Z.isFocused()), {
    teams: v,
    loading: _
  } = (0, p.Z)({
    refreshOnDepChange: j
  }), C = i.useMemo(() => v.filter(e => {
    var t;
    return e.payout_account_status !== I.C.BLOCKED && (0, g.Z)(null != (t = null == n ? true : n.id) ? t : N.lds, e)
  }), [v, n]), E = C.length > 0, R = i.useCallback(async () => {
    x.default.track(N.rMx.GUILD_ROLE_SUBSCRIPTION_TEAM_SETUP_CLICKED, {
      is_onboarding_v2: d,
      has_eligible_team: E,
      guild_id: t.id,
      is_owner: a
    });
    let e = await (0, u.$)(N.E07.DEVELOPER_PORTAL_TEAMS);
    (0, o.Z)(e)
  }, [t, a, d, E]), Z = i.useCallback(e => a ? (0, r.jsx)(m.Z, {
    onClick: R,
    children: e
  }) : e, [R, a]);
  return _ ? (0, r.jsx)(s.$jN, {}) : (0, r.jsxs)(r.Fragment, {
    children: [!a && (0, r.jsx)(O.Z, {
      className: T.nonOwnerNotice,
      children: S.intl.string(S.t.t56qWF)
    }), (0, r.jsxs)(s.hjN, {
      title: S.intl.string(S.t.sYLCY2),
      disabled: !a,
      children: [(0, r.jsx)(s.R94, {
        type: s.R94.Types.DESCRIPTION,
        className: T.description,
        disabled: !a,
        children: S.intl.format(S.t["5mfqpa"], {
          onCreateTeamHook: Z
        })
      }), E ? (0, r.jsx)(w, {
        guild: t,
        eligibleTeams: C,
        isGuildOwner: a
      }) : (0, r.jsx)(P, {
        onCreateTeamClick: R,
        isGuildOwner: a
      })]
    }), (0, r.jsx)(s.hjN, {
      title: S.intl.string(S.t["0n7R2d"]),
      className: T.selfDemonetization,
      children: (0, r.jsx)(y.Z, {
        guildId: t.id,
        allPeriods: []
      })
    })]
  })
}