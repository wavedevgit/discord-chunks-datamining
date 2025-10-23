/** Chunk was on 64982 **/
/** chunk id: 489028, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk489838 = require("./489838.js");

function S(e) {
  let {
    onCreateTeamClick: t,
    isGuildOwner: n
  } = e;
  return (0, r.jsx)("div", {
    className: I.selectTeamContainer,
    children: (0, r.jsx)(a.zxk, {
      text: N.intl.string(N.t["5k6FfR"]),
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
    error: m
  } = (0, d.Z)(), {
    fetchSubscriptionsSettings: p
  } = (0, j.JH)(), f = (0, v.mY)(), h = i.useMemo(() => n.map(e => ({
    label: e.name,
    value: e.id
  })), [n]), b = async () => {
    await u(t, o, y.wW.GUILD_ROLE_SUBSCRIPTIONS) && (p(t.id), (0, _.B)({
      title: N.intl.string(N.t["AP/2qe"]),
      body: N.intl.string(N.t.kHMgaK)
    }))
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: I.selectTeamContainer,
      children: [(0, r.jsx)(s.q4e, {
        className: I.teamSelect,
        options: h,
        placeholder: N.intl.string(N.t.QXf93A),
        value: o,
        isDisabled: 0 === h.length || f || !l,
        onChange: e => c(e),
        "aria-label": N.intl.string(N.t.QXf93A)
      }), (0, r.jsx)(a.zxk, {
        text: N.intl.string(N.t["9HU3ZV"]),
        onClick: b,
        loading: g,
        disabled: null == o || f || !l
      })]
    }), null != m && (0, r.jsx)(s.Text, {
      className: I.error,
      variant: "text-sm/normal",
      children: m.getAnyErrorMessage()
    })]
  })
}
let P = e => {
  let {
    guild: t
  } = e, n = (0, l.e7)([h.default], () => h.default.getCurrentUser()), a = (0, f.eM)(t, n), d = (0, c.Ob)(t), j = (0, l.e7)([b.Z], () => b.Z.isFocused()), {
    teams: v,
    loading: _
  } = (0, p.Z)({
    refreshOnDepChange: j
  }), y = i.useMemo(() => v.filter(e => {
    var t;
    return e.payout_account_status !== E.C.BLOCKED && (0, m.Z)(null != (t = null == n ? true : n.id) ? t : O.lds, e)
  }), [v, n]), P = y.length > 0, w = i.useCallback(async () => {
    x.default.track(O.rMx.GUILD_ROLE_SUBSCRIPTION_TEAM_SETUP_CLICKED, {
      is_onboarding_v2: d,
      has_eligible_team: P,
      guild_id: t.id,
      is_owner: a
    });
    let e = await (0, u.$)(O.E07.DEVELOPER_PORTAL_TEAMS);
    (0, o.Z)(e)
  }, [t, a, d, P]), Z = i.useCallback(e => a ? (0, r.jsx)(g.Z, {
    onClick: w,
    children: e
  }) : e, [w, a]);
  return _ ? (0, r.jsx)(s.$jN, {}) : (0, r.jsxs)(s.Kqy, {
    gap: 32,
    children: [!a && (0, r.jsx)("div", {
      className: I.nonOwnerNotice,
      children: (0, r.jsx)(s.M14, {
        type: "warning",
        children: N.intl.string(N.t.t56qWO)
      })
    }), (0, r.jsx)(s.gNt, {
      label: N.intl.string(N.t["sYLCY/"]),
      disabled: !a,
      description: N.intl.format(N.t["5mfqpW"], {
        onCreateTeamHook: Z
      }),
      children: P ? (0, r.jsx)(T, {
        guild: t,
        eligibleTeams: y,
        isGuildOwner: a
      }) : (0, r.jsx)(S, {
        onCreateTeamClick: w,
        isGuildOwner: a
      })
    }), (0, r.jsx)(s.gNt, {
      label: N.intl.string(N.t["0n7R2X"]),
      children: (0, r.jsx)(C.Z, {
        guildId: t.id,
        allPeriods: []
      })
    })]
  })
}