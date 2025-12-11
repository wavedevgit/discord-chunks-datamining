/** Chunk was on 9536 **/
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
  Chunk291852 = require("./291852.js");

function T(e) {
  let {
    onCreateTeamClick: t,
    isGuildOwner: n
  } = e;
  return (0, r.jsx)("div", {
    className: _.selectTeamContainer,
    children: (0, r.jsx)(s.zxk, {
      text: S.intl.string(S.t["5k6FfR"]),
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
  } = e, [c, d] = i.useState(), {
    enableGuildMonetizationForTeam: g,
    submitting: m,
    error: f
  } = (0, u.Z)(), {
    fetchSubscriptionsSettings: p
  } = (0, v.JH)(), b = (0, O.mY)(), h = i.useMemo(() => n.map(e => ({
    label: e.name,
    value: e.id
  })), [n]), x = async () => {
    await g(t, c, E.wW.GUILD_ROLE_SUBSCRIPTIONS) && (p(t.id), (0, C.B)({
      title: S.intl.string(S.t["AP/2qe"]),
      body: S.intl.string(S.t.kHMgaK)
    }))
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: _.selectTeamContainer,
      children: [(0, r.jsx)(a.y6, {
        className: _.teamSelect,
        options: h,
        placeholder: S.intl.string(S.t.QXf93A),
        value: c,
        isDisabled: 0 === h.length || b || !l,
        onChange: e => d(e),
        "aria-label": S.intl.string(S.t.QXf93A)
      }), (0, r.jsx)(s.zxk, {
        text: S.intl.string(S.t["9HU3ZV"]),
        onClick: x,
        loading: m,
        disabled: null == c || b || !l
      })]
    }), null != f && (0, r.jsx)(o.Text, {
      className: _.error,
      variant: "text-sm/normal",
      children: f.getAnyErrorMessage()
    })]
  })
}
let w = e => {
  let {
    guild: t
  } = e, n = (0, l.e7)([h.default], () => h.default.getCurrentUser()), a = (0, b.eM)(t, n), s = (0, d.Ob)(t), u = (0, l.e7)([x.Z], () => x.Z.isFocused()), {
    teams: v,
    loading: O
  } = (0, p.Z)({
    refreshOnDepChange: u
  }), C = i.useMemo(() => v.filter(e => {
    var t;
    return e.payout_account_status !== I.C.BLOCKED && (0, f.Z)(null != (t = null == n ? true : n.id) ? t : N.lds, e)
  }), [v, n]), E = C.length > 0, w = i.useCallback(async () => {
    j.default.track(N.rMx.GUILD_ROLE_SUBSCRIPTION_TEAM_SETUP_CLICKED, {
      is_onboarding_v2: s,
      has_eligible_team: E,
      guild_id: t.id,
      is_owner: a
    });
    let e = await (0, g.$)(N.E07.DEVELOPER_PORTAL_TEAMS);
    (0, c.Z)(e)
  }, [t, a, s, E]), Z = i.useCallback(e => a ? (0, r.jsx)(m.Z, {
    onClick: w,
    children: e
  }) : e, [w, a]);
  return O ? (0, r.jsx)(o.$jN, {}) : (0, r.jsxs)(o.Kqy, {
    gap: 32,
    children: [!a && (0, r.jsx)("div", {
      className: _.nonOwnerNotice,
      children: (0, r.jsx)(o.M14, {
        type: "warning",
        children: S.intl.string(S.t.t56qWO)
      })
    }), (0, r.jsx)(o.gNt, {
      label: S.intl.string(S.t["sYLCY/"]),
      disabled: !a,
      description: S.intl.format(S.t["5mfqpW"], {
        onCreateTeamHook: Z
      }),
      children: E ? (0, r.jsx)(P, {
        guild: t,
        eligibleTeams: C,
        isGuildOwner: a
      }) : (0, r.jsx)(T, {
        onCreateTeamClick: w,
        isGuildOwner: a
      })
    }), (0, r.jsx)(o.gNt, {
      label: S.intl.string(S.t["0n7R2X"]),
      children: (0, r.jsx)(y.Z, {
        guildId: t.id,
        allPeriods: []
      })
    })]
  })
}