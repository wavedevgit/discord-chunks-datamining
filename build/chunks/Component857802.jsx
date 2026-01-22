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

function T(e) {
  let {
    onCreateTeamClick: t,
    isGuildOwner: n
  } = e;
  return (0, r.jsx)("div", {
    className: S.xF,
    children: (0, r.jsx)(s.$nd, {
      text: _.intl.string(_.t["5k6FfR"]),
      disabled: !n,
      onClick: t,
      fullWidth: true
    })
  })
}

function I(e) {
  let {
    guild: t,
    eligibleTeams: n,
    isGuildOwner: l
  } = e, [c, o] = i.useState(), {
    enableGuildMonetizationForTeam: u,
    submitting: f,
    error: g
  } = (0, d.A)(), {
    fetchSubscriptionsSettings: b
  } = (0, j.XE)(), m = (0, O.gN)(), p = i.useMemo(() => n.map(e => ({
    id: e.id,
    label: e.name,
    value: e.id
  })), [n]), x = async () => {
    await u(t, c, E.S7.GUILD_ROLE_SUBSCRIPTIONS) && (b(t.id), (0, y.E)({
      title: _.intl.string(_.t["AP/2qe"]),
      body: _.intl.string(_.t.kHMgaK)
    }))
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: S.xF,
      children: [(0, r.jsx)(a.l6P, {
        selectionMode: "single",
        options: p,
        placeholder: _.intl.string(_.t.QXf93A),
        value: c,
        disabled: 0 === p.length || m || !l,
        onSelectionChange: o,
        label: _.intl.string(_.t.QXf93A),
        hideLabel: true
      }), (0, r.jsx)(s.$nd, {
        text: _.intl.string(_.t["9HU3ZV"]),
        onClick: x,
        loading: f,
        disabled: null == c || m || !l
      })]
    }), null != g && (0, r.jsx)(a.Text, {
      className: S.z3,
      variant: "text-sm/normal",
      children: g.getAnyErrorMessage()
    })]
  })
}
let C = e => {
  let {
    guild: t
  } = e, n = (0, l.bG)([p.default], () => p.default.getCurrentUser()), s = (0, m.bM)(t, n), d = (0, o.ME)(t), j = (0, l.bG)([x.A], () => x.A.isFocused()), {
    teams: O,
    loading: y
  } = (0, b.A)({
    refreshOnDepChange: j
  }), E = i.useMemo(() => O.filter(e => {
    var t;
    return e.payout_account_status !== N.y.BLOCKED && (0, g.y)(null != (t = null == n ? true : n.id) ? t : A.dJq, e)
  }), [O, n]), C = E.length > 0, P = i.useCallback(async () => {
    h.default.track(A.HAw.GUILD_ROLE_SUBSCRIPTION_TEAM_SETUP_CLICKED, {
      is_onboarding_v2: d,
      has_eligible_team: C,
      guild_id: t.id,
      is_owner: s
    });
    let e = await (0, u.a)(A.dSh.DEVELOPER_PORTAL_TEAMS);
    (0, c.A)(e)
  }, [t, s, d, C]), w = i.useCallback(e => s ? (0, r.jsx)(f.A, {
    onClick: P,
    children: e
  }) : e, [P, s]);
  return y ? (0, r.jsx)(a.y$y, {}) : (0, r.jsxs)(a.BJc, {
    gap: 32,
    children: [!s && (0, r.jsx)("div", {
      className: S.b8,
      children: (0, r.jsx)(a.wx6, {
        type: "warning",
        children: _.intl.string(_.t.t56qWO)
      })
    }), (0, r.jsx)(a.D0$, {
      label: _.intl.string(_.t["sYLCY/"]),
      disabled: !s,
      description: _.intl.format(_.t["5mfqpW"], {
        onCreateTeamHook: w
      }),
      children: C ? (0, r.jsx)(I, {
        guild: t,
        eligibleTeams: E,
        isGuildOwner: s
      }) : (0, r.jsx)(T, {
        onCreateTeamClick: P,
        isGuildOwner: s
      })
    }), (0, r.jsx)(a.D0$, {
      label: _.intl.string(_.t["0n7R2X"]),
      children: (0, r.jsx)(v.A, {
        guildId: t.id,
        allPeriods: []
      })
    })]
  })
}