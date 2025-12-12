/** Chunk was on 384 **/
/** chunk id: 489028, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => w
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk199849 = require("./199849.jsx"),
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

function T(e) {
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

function P(e) {
  let {
    guild: t,
    eligibleTeams: n,
    isGuildOwner: l
  } = e, [c, u] = i.useState(), {
    enableGuildMonetizationForTeam: g,
    submitting: m,
    error: p
  } = (0, d.Z)(), {
    fetchSubscriptionsSettings: f
  } = (0, _.JH)(), h = (0, v.mY)(), x = i.useMemo(() => n.map(e => ({
    label: e.name,
    value: e.id
  })), [n]), b = async () => {
    await g(t, c, N.wW.GUILD_ROLE_SUBSCRIPTIONS) && (f(t.id), (0, O.B)({
      title: I.intl.string(I.t["AP/2qe"]),
      body: I.intl.string(I.t.kHMgaK)
    }))
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: S.selectTeamContainer,
      children: [(0, r.jsx)(s.y6, {
        className: S.teamSelect,
        options: x,
        placeholder: I.intl.string(I.t.QXf93A),
        value: c,
        isDisabled: 0 === x.length || h || !l,
        onChange: e => u(e),
        "aria-label": I.intl.string(I.t.QXf93A)
      }), (0, r.jsx)(a.zxk, {
        text: I.intl.string(I.t["9HU3ZV"]),
        onClick: b,
        loading: m,
        disabled: null == c || h || !l
      })]
    }), null != p && (0, r.jsx)(o.Text, {
      className: S.error,
      variant: "text-sm/normal",
      children: p.getAnyErrorMessage()
    })]
  })
}
let w = e => {
  let {
    guild: t
  } = e, n = (0, l.e7)([x.default], () => x.default.getCurrentUser()), s = (0, h.eM)(t, n), a = (0, u.Ob)(t), d = (0, l.e7)([b.Z], () => b.Z.isFocused()), {
    teams: _,
    loading: v
  } = (0, f.Z)({
    refreshOnDepChange: d
  }), O = i.useMemo(() => _.filter(e => {
    var t;
    return e.payout_account_status !== E.C.BLOCKED && (0, p.Z)(null != (t = null == n ? true : n.id) ? t : y.lds, e)
  }), [_, n]), N = O.length > 0, w = i.useCallback(async () => {
    j.default.track(y.rMx.GUILD_ROLE_SUBSCRIPTION_TEAM_SETUP_CLICKED, {
      is_onboarding_v2: a,
      has_eligible_team: N,
      guild_id: t.id,
      is_owner: s
    });
    let e = await (0, g.$)(y.E07.DEVELOPER_PORTAL_TEAMS);
    (0, c.Z)(e)
  }, [t, s, a, N]), Z = i.useCallback(e => s ? (0, r.jsx)(m.Z, {
    onClick: w,
    children: e
  }) : e, [w, s]);
  return v ? (0, r.jsx)(o.$jN, {}) : (0, r.jsxs)(o.Kqy, {
    gap: 32,
    children: [!s && (0, r.jsx)("div", {
      className: S.nonOwnerNotice,
      children: (0, r.jsx)(o.M14, {
        type: "warning",
        children: I.intl.string(I.t.t56qWO)
      })
    }), (0, r.jsx)(o.gNt, {
      label: I.intl.string(I.t["sYLCY/"]),
      disabled: !s,
      description: I.intl.format(I.t["5mfqpW"], {
        onCreateTeamHook: Z
      }),
      children: N ? (0, r.jsx)(P, {
        guild: t,
        eligibleTeams: O,
        isGuildOwner: s
      }) : (0, r.jsx)(T, {
        onCreateTeamClick: w,
        isGuildOwner: s
      })
    }), (0, r.jsx)(o.gNt, {
      label: I.intl.string(I.t["0n7R2X"]),
      children: (0, r.jsx)(C.Z, {
        guildId: t.id,
        allPeriods: []
      })
    })]
  })
}