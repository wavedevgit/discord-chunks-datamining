/** Chunk was on 47841 **/
/** chunk id: 857802, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => C
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk975807 = require("./975807.js"),
  Chunk469993 = require("./469993.js"),
  Chunk486802 = require("./486802.js"),
  Chunk194362 = require("./194362.js"),
  Chunk95035 = require("./95035.jsx"),
  Chunk411671 = require("./411671.js"),
  Chunk130771 = require("./130771.js"),
  Chunk260509 = require("./260509.js"),
  Chunk287809 = require("./287809.js"),
  Chunk531685 = require("./531685.js"),
  Chunk954571 = require("./954571.js"),
  Chunk599941 = require("./599941.js"),
  Chunk11351 = require("./11351.js"),
  Chunk319225 = require("./319225.jsx"),
  Chunk781289 = require("./781289.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk705751 = require("./705751.js"),
  Chunk269927 = require("./269927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk486984 = require("./486984.js");

function I(e) {
  let {
    onCreateTeamClick: t,
    isGuildOwner: n
  } = e;
  return (0, r.jsx)("div", {
    className: S.xF,
    children: (0, r.jsx)(s.$nd, {
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
  } = (0, d.A)(), {
    fetchSubscriptionsSettings: p
  } = (0, j.XE)(), f = (0, _.gN)(), b = i.useMemo(() => n.map(e => ({
    id: e.id,
    label: e.name,
    value: e.id
  })), [n]), h = async () => {
    await u(t, o, A.S7.GUILD_ROLE_SUBSCRIPTIONS) && (p(t.id), (0, O.E)({
      title: N.intl.string(N.t["AP/2qe"]),
      body: N.intl.string(N.t.kHMgaK)
    }))
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: S.xF,
      children: [(0, r.jsx)(a.l6P, {
        selectionMode: "single",
        options: b,
        placeholder: N.intl.string(N.t.QXf93A),
        value: o,
        disabled: 0 === b.length || f || !l,
        onSelectionChange: c,
        label: N.intl.string(N.t.QXf93A),
        hideLabel: true
      }), (0, r.jsx)(s.$nd, {
        text: N.intl.string(N.t["9HU3ZV"]),
        onClick: h,
        loading: g,
        disabled: null == o || f || !l
      })]
    }), null != m && (0, r.jsx)(a.Text, {
      className: S.z3,
      variant: "text-sm/normal",
      children: m.getAnyErrorMessage()
    })]
  })
}
let C = e => {
  let {
    guild: t
  } = e, n = (0, l.bG)([b.default], () => b.default.getCurrentUser()), s = (0, f.bM)(t, n), d = (0, c.ME)(t), j = (0, l.bG)([h.A], () => h.A.isFocused()), {
    teams: _,
    loading: O
  } = (0, p.A)({
    refreshOnDepChange: j
  }), A = i.useMemo(() => _.filter(e => {
    var t;
    return e.payout_account_status !== E.y.BLOCKED && (0, m.y)(null != (t = null == n ? true : n.id) ? t : y.dJq, e)
  }), [_, n]), C = A.length > 0, P = i.useCallback(async () => {
    x.default.track(y.HAw.GUILD_ROLE_SUBSCRIPTION_TEAM_SETUP_CLICKED, {
      is_onboarding_v2: d,
      has_eligible_team: C,
      guild_id: t.id,
      is_owner: s
    });
    let e = await (0, u.a)(y.dSh.DEVELOPER_PORTAL_TEAMS);
    (0, o.A)(e)
  }, [t, s, d, C]), w = i.useCallback(e => s ? (0, r.jsx)(g.A, {
    onClick: P,
    children: e
  }) : e, [P, s]);
  return O ? (0, r.jsx)(a.y$y, {}) : (0, r.jsxs)(a.BJc, {
    gap: 32,
    children: [!s && (0, r.jsx)("div", {
      className: S.b8,
      children: (0, r.jsx)(a.wx6, {
        type: "warning",
        children: N.intl.string(N.t.t56qWO)
      })
    }), (0, r.jsx)(a.D0$, {
      label: N.intl.string(N.t["sYLCY/"]),
      disabled: !s,
      description: N.intl.format(N.t["5mfqpW"], {
        onCreateTeamHook: w
      }),
      children: C ? (0, r.jsx)(T, {
        guild: t,
        eligibleTeams: A,
        isGuildOwner: s
      }) : (0, r.jsx)(I, {
        onCreateTeamClick: P,
        isGuildOwner: s
      })
    }), (0, r.jsx)(a.D0$, {
      label: N.intl.string(N.t["0n7R2X"]),
      children: (0, r.jsx)(v.A, {
        guildId: t.id,
        allPeriods: []
      })
    })]
  })
}