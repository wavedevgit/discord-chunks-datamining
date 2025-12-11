/** Chunk was on 710 **/
/** chunk id: 32342, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => C
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk53365 = require("./53365.js"),
  Chunk377176 = require("./377176.js"),
  Chunk577275 = require("./577275.js"),
  Chunk981631 = require("./981631.js"),
  Chunk829857 = require("./829857.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk549337 = require("./549337.js");

function g(t) {
  let {
    selectedTeamId: e,
    onSetSelectedTeamId: n,
    teamOptions: a
  } = t;
  return (0, i.jsx)("div", {
    className: f.teamSetup,
    children: 0 !== a.length && (0, i.jsx)(s.y6, {
      options: a,
      placeholder: x.intl.string(x.t.QXf93A),
      value: e,
      onChange: n,
      "aria-label": x.intl.string(x.t.QXf93A)
    })
  })
}

function C(t) {
  let {
    guildId: e,
    requireTeamSetup: n,
    onClose: s,
    transitionState: f
  } = t, [C, E] = a.useState(), [v, S] = a.useState(false), {
    teams: b
  } = (0, m.Z)(), j = b.filter(t => t.payout_account_status === h.C.ACTIVE), T = a.useMemo(() => j.map(t => ({
    label: t.name,
    value: t.id
  })), [j]), y = () => {
    S(t => !t)
  }, k = () => {
    s(), (0, c.df)(e, C)
  }, V = a.useCallback(() => {
    (0, d.Z)(p.EYA.DEVELOPER_PORTAL_TEAMS)
  }, []);
  if (!n) return (0, i.jsx)(l.Modal, {
    title: x.intl.string(x.t.GfObDE),
    actions: [{
      variant: "primary",
      text: x.intl.string(x.t.geKm7t),
      onClick: k,
      disabled: !v
    }],
    onClose: s,
    transitionState: f,
    size: "md",
    children: (0, i.jsx)(r.$q, {
      onChange: y,
      size: 20,
      type: r.M0.INVERTED,
      value: v,
      children: (0, i.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "text-default",
        children: (0, u.f)()
      })
    })
  });
  {
    let t = 0 === T.length;
    return (0, i.jsxs)(l.Modal, {
      title: x.intl.string(x.t.inJKQv),
      subtitle: t ? x.intl.format(x.t.Jyy4pV, {}) : x.intl.string(x.t.U1Vz24),
      actions: [{
        variant: "primary",
        text: t ? x.intl.string(x.t.JddVgE) : x.intl.string(x.t.geKm7t),
        onClick: t ? V : k
      }],
      onClose: s,
      transitionState: f,
      size: "md",
      children: [!t && (0, i.jsx)(g, {
        selectedTeamId: C,
        onSetSelectedTeamId: E,
        teamOptions: T
      }), (0, i.jsx)(r.$q, {
        onChange: y,
        size: 20,
        type: r.M0.INVERTED,
        value: v,
        children: (0, i.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "text-default",
          children: (0, u.f)()
        })
      })]
    })
  }
}