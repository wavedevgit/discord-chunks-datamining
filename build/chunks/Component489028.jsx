/** Chunk was on 64982 **/
/** chunk id: 489028, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => w
}), require("./388685.js"), require("./953529.js");
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
  Chunk903773 = require("./903773.jsx"),
  Chunk215124 = require("./215124.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk674563 = require("./674563.js"),
  Chunk829857 = require("./829857.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk489838 = require("./489838.js");

function T(e) {
  let {
    onCreateTeamClick: t,
    isGuildOwner: n
  } = e;
  return (0, r.jsx)("div", {
    className: S.selectTeamContainer,
    children: (0, r.jsx)(s.zxk, {
      text: I.intl.string(I.t["5k6FfX"]),
      disabled: !n,
      onClick: t,
      fullWidth: true
    })
  })
}

function P(e) {
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
  })), [n]), x = async () => {
    await u(t, o, N.wW.GUILD_ROLE_SUBSCRIPTIONS) && (p(t.id), (0, _.B)({
      title: I.intl.string(I.t["AP/2qa"]),
      body: I.intl.string(I.t.kHMgaG)
    }))
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: S.selectTeamContainer,
      children: [(0, r.jsx)(a.q4e, {
        className: S.teamSelect,
        options: h,
        placeholder: I.intl.string(I.t.QXf93N),
        value: o,
        isDisabled: 0 === h.length || f || !l,
        onChange: e => c(e),
        "aria-label": I.intl.string(I.t.QXf93N)
      }), (0, r.jsx)(s.zxk, {
        text: I.intl.string(I.t["9HU3ZW"]),
        onClick: x,
        loading: m,
        disabled: null == o || f || !l
      })]
    }), null != g && (0, r.jsx)(a.Text, {
      className: S.error,
      variant: "text-sm/normal",
      children: g.getAnyErrorMessage()
    })]
  })
}
let w = e => {
  let {
    guild: t
  } = e, n = (0, l.e7)([h.default], () => h.default.getCurrentUser()), s = (0, f.eM)(t, n), d = (0, c.Ob)(t), j = (0, l.e7)([x.Z], () => x.Z.isFocused()), {
    teams: v,
    loading: _
  } = (0, p.Z)({
    refreshOnDepChange: j
  }), N = i.useMemo(() => v.filter(e => {
    var t;
    return e.payout_account_status !== E.C.BLOCKED && (0, g.Z)(null != (t = null == n ? true : n.id) ? t : C.lds, e)
  }), [v, n]), w = N.length > 0, R = i.useCallback(async () => {
    b.default.track(C.rMx.GUILD_ROLE_SUBSCRIPTION_TEAM_SETUP_CLICKED, {
      is_onboarding_v2: d,
      has_eligible_team: w,
      guild_id: t.id,
      is_owner: s
    });
    let e = await (0, u.$)(C.E07.DEVELOPER_PORTAL_TEAMS);
    (0, o.Z)(e)
  }, [t, s, d, w]), D = i.useCallback(e => s ? (0, r.jsx)(m.Z, {
    onClick: R,
    children: e
  }) : e, [R, s]);
  return _ ? (0, r.jsx)(a.$jN, {}) : (0, r.jsxs)(r.Fragment, {
    children: [!s && (0, r.jsx)(O.Z, {
      className: S.nonOwnerNotice,
      children: I.intl.string(I.t.t56qWF)
    }), (0, r.jsxs)(a.hjN, {
      title: I.intl.string(I.t.sYLCY2),
      disabled: !s,
      children: [(0, r.jsx)(a.R94, {
        type: a.R94.Types.DESCRIPTION,
        className: S.description,
        disabled: !s,
        children: I.intl.format(I.t["5mfqpa"], {
          onCreateTeamHook: D
        })
      }), w ? (0, r.jsx)(P, {
        guild: t,
        eligibleTeams: N,
        isGuildOwner: s
      }) : (0, r.jsx)(T, {
        onCreateTeamClick: R,
        isGuildOwner: s
      })]
    }), (0, r.jsx)(a.hjN, {
      title: I.intl.string(I.t["0n7R2d"]),
      className: S.selfDemonetization,
      children: (0, r.jsx)(y.Z, {
        guildId: t.id,
        allPeriods: []
      })
    })]
  })
}