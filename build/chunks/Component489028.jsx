/** Chunk was on 9536 **/
/** chunk id: 489028, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk223892 = require("./223892.js"),
  Chunk203498 = require("./203498.js"),
  Chunk154837 = require("./154837.js"),
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
  Chunk215124 = require("./215124.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk674563 = require("./674563.js"),
  Chunk829857 = require("./829857.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk291852 = require("./291852.js");

function _(e) {
  let {
    onCreateTeamClick: t,
    isGuildOwner: n
  } = e;
  return (0, r.jsx)("div", {
    className: S.selectTeamContainer,
    children: (0, r.jsx)(a.zxk, {
      text: I.intl.string(I.t["5k6FfR"]),
      disabled: !n,
      onClick: t,
      fullWidth: true
    })
  })
}

function T(e) {
  let {
    guild: t,
    eligibleTeams: n,
    isGuildOwner: l
  } = e, [o, c] = i.useState(), {
    enableGuildMonetizationForTeam: u,
    submitting: g,
    error: f
  } = (0, d.Z)(), {
    fetchSubscriptionsSettings: m
  } = (0, j.JH)(), b = (0, v.mY)(), p = i.useMemo(() => n.map(e => ({
    id: e.id,
    label: e.name,
    value: e.id
  })), [n]), h = async () => {
    await u(t, o, N.wW.GUILD_ROLE_SUBSCRIPTIONS) && (m(t.id), (0, O.B)({
      title: I.intl.string(I.t["AP/2qe"]),
      body: I.intl.string(I.t.kHMgaK)
    }))
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: S.selectTeamContainer,
      children: [(0, r.jsx)(s.PhF, {
        selectionMode: "single",
        options: p,
        placeholder: I.intl.string(I.t.QXf93A),
        value: o,
        disabled: 0 === p.length || b || !l,
        onSelectionChange: c,
        label: I.intl.string(I.t.QXf93A),
        hideLabel: true
      }), (0, r.jsx)(a.zxk, {
        text: I.intl.string(I.t["9HU3ZV"]),
        onClick: h,
        loading: g,
        disabled: null == o || b || !l
      })]
    }), null != f && (0, r.jsx)(s.Text, {
      className: S.error,
      variant: "text-sm/normal",
      children: f.getAnyErrorMessage()
    })]
  })
}
let P = e => {
  let {
    guild: t
  } = e, n = (0, l.e7)([p.default], () => p.default.getCurrentUser()), a = (0, b.eM)(t, n), d = (0, c.Ob)(t), j = (0, l.e7)([h.Z], () => h.Z.isFocused()), {
    teams: v,
    loading: O
  } = (0, m.Z)({
    refreshOnDepChange: j
  }), N = i.useMemo(() => v.filter(e => {
    var t;
    return e.payout_account_status !== E.C.BLOCKED && (0, f.Z)(null != (t = null == n ? true : n.id) ? t : C.lds, e)
  }), [v, n]), P = N.length > 0, w = i.useCallback(async () => {
    x.default.track(C.rMx.GUILD_ROLE_SUBSCRIPTION_TEAM_SETUP_CLICKED, {
      is_onboarding_v2: d,
      has_eligible_team: P,
      guild_id: t.id,
      is_owner: a
    });
    let e = await (0, u.$)(C.E07.DEVELOPER_PORTAL_TEAMS);
    (0, o.Z)(e)
  }, [t, a, d, P]), Z = i.useCallback(e => a ? (0, r.jsx)(g.Z, {
    onClick: w,
    children: e
  }) : e, [w, a]);
  return O ? (0, r.jsx)(s.$jN, {}) : (0, r.jsxs)(s.Kqy, {
    gap: 32,
    children: [!a && (0, r.jsx)("div", {
      className: S.nonOwnerNotice,
      children: (0, r.jsx)(s.M14, {
        type: "warning",
        children: I.intl.string(I.t.t56qWO)
      })
    }), (0, r.jsx)(s.gNt, {
      label: I.intl.string(I.t["sYLCY/"]),
      disabled: !a,
      description: I.intl.format(I.t["5mfqpW"], {
        onCreateTeamHook: Z
      }),
      children: P ? (0, r.jsx)(T, {
        guild: t,
        eligibleTeams: N,
        isGuildOwner: a
      }) : (0, r.jsx)(_, {
        onCreateTeamClick: w,
        isGuildOwner: a
      })
    }), (0, r.jsx)(s.gNt, {
      label: I.intl.string(I.t["0n7R2X"]),
      children: (0, r.jsx)(y.Z, {
        guildId: t.id,
        allPeriods: []
      })
    })]
  })
}