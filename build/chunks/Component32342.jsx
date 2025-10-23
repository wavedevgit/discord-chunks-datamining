/** Chunk was on 710 **/
/** chunk id: 32342, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk53365 = require("./53365.js"),
  Chunk377176 = require("./377176.js"),
  Chunk577275 = require("./577275.js"),
  Chunk981631 = require("./981631.js"),
  Chunk829857 = require("./829857.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk170538 = require("./170538.js");

function x(t) {
  let {
    selectedTeamId: e,
    onSetSelectedTeamId: n,
    teamOptions: a
  } = t;
  return (0, i.jsx)("div", {
    className: g.teamSetup,
    children: 0 !== a.length && (0, i.jsx)(r.q4e, {
      options: a,
      placeholder: h.intl.string(h.t.QXf93A),
      value: e,
      onChange: n,
      "aria-label": h.intl.string(h.t.QXf93A)
    })
  })
}

function f(t) {
  let {
    guildId: e,
    requireTeamSetup: n,
    onClose: g,
    transitionState: f
  } = t, [C, E] = a.useState(), [v, S] = a.useState(false), {
    teams: j
  } = (0, u.Z)(), y = j.filter(t => t.payout_account_status === p.C.ACTIVE), T = a.useMemo(() => y.map(t => ({
    label: t.name,
    value: t.id
  })), [y]), b = () => {
    S(t => !t)
  }, _ = () => {
    g(), (0, d.df)(e, C)
  }, k = a.useCallback(() => {
    (0, o.Z)(m.EYA.DEVELOPER_PORTAL_TEAMS)
  }, []);
  if (!n) return (0, i.jsx)(l.Modal, {
    title: h.intl.string(h.t.GfObDE),
    actions: [{
      variant: "primary",
      text: h.intl.string(h.t.geKm7t),
      onClick: _,
      disabled: !v
    }],
    onClose: g,
    transitionState: f,
    size: "md",
    children: (0, i.jsx)(s.$q, {
      onChange: b,
      size: 20,
      type: s.M0.INVERTED,
      value: v,
      children: (0, i.jsx)(r.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: (0, c.f)()
      })
    })
  });
  {
    let t = 0 === T.length;
    return (0, i.jsxs)(l.Modal, {
      title: h.intl.string(h.t.inJKQv),
      subtitle: t ? h.intl.format(h.t.Jyy4pV, {}) : h.intl.string(h.t.U1Vz24),
      actions: [{
        variant: "primary",
        text: t ? h.intl.string(h.t.JddVgE) : h.intl.string(h.t.geKm7t),
        onClick: t ? k : _
      }],
      onClose: g,
      transitionState: f,
      size: "md",
      children: [!t && (0, i.jsx)(x, {
        selectedTeamId: C,
        onSetSelectedTeamId: E,
        teamOptions: T
      }), (0, i.jsx)(s.$q, {
        onChange: b,
        size: 20,
        type: s.M0.INVERTED,
        value: v,
        children: (0, i.jsx)(r.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: (0, c.f)()
        })
      })]
    })
  }
}