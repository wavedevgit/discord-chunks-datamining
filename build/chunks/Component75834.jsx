/** Chunk was on 47175 **/
/** chunk id: 75834, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk975807 = require("./975807.js"),
  Chunk493540 = require("./493540.js"),
  Chunk980406 = require("./980406.js"),
  Chunk130771 = require("./130771.js"),
  Chunk652215 = require("./652215.js"),
  Chunk269927 = require("./269927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk976164 = require("./976164.js");

function g(t) {
  let {
    selectedTeamId: e,
    onSetSelectedTeamId: n,
    teamOptions: l
  } = t;
  return (0, i.jsx)("div", {
    className: x.d,
    children: 0 !== l.length && (0, i.jsx)(r.l6P, {
      selectionMode: "single",
      options: l,
      formatOption: t => {
        let {
          value: e,
          label: n
        } = t;
        return {
          id: e,
          label: n,
          value: e
        }
      },
      placeholder: p.intl.string(p.t.QXf93A),
      value: e,
      onSelectionChange: n,
      label: p.intl.string(p.t.QXf93A),
      hideLabel: true
    })
  })
}

function f(t) {
  let {
    guildId: e,
    requireTeamSetup: n,
    onClose: x,
    transitionState: f
  } = t, [j, v] = l.useState(), [C, E] = l.useState(false), {
    teams: b
  } = (0, u.A)(), T = b.filter(t => t.payout_account_status === h.y.ACTIVE), y = l.useMemo(() => T.map(t => ({
    label: t.name,
    value: t.id
  })), [T]), S = () => {
    E(t => !t)
  }, k = () => {
    x(), (0, d.im)(e, j)
  }, A = l.useCallback(() => {
    (0, o.A)(m.X7G.DEVELOPER_PORTAL_TEAMS)
  }, []);
  if (!n) return (0, i.jsx)(a.Modal, {
    title: p.intl.string(p.t.GfObDE),
    actions: [{
      variant: "primary",
      text: p.intl.string(p.t.geKm7t),
      onClick: k,
      disabled: !C
    }],
    onClose: x,
    transitionState: f,
    size: "md",
    children: (0, i.jsx)(s.Kj, {
      onChange: S,
      size: 20,
      type: s.Xo.INVERTED,
      value: C,
      children: (0, i.jsx)(r.Text, {
        variant: "text-md/normal",
        color: "text-default",
        children: (0, c.r)()
      })
    })
  });
  {
    let t = 0 === y.length;
    return (0, i.jsxs)(a.Modal, {
      title: p.intl.string(p.t.inJKQv),
      subtitle: t ? p.intl.format(p.t.Jyy4pV, {}) : p.intl.string(p.t.U1Vz24),
      actions: [{
        variant: "primary",
        text: t ? p.intl.string(p.t.JddVgE) : p.intl.string(p.t.geKm7t),
        onClick: t ? A : k
      }],
      onClose: x,
      transitionState: f,
      size: "md",
      children: [!t && (0, i.jsx)(g, {
        selectedTeamId: j,
        onSetSelectedTeamId: v,
        teamOptions: y
      }), (0, i.jsx)(s.Kj, {
        onChange: S,
        size: 20,
        type: s.Xo.INVERTED,
        value: C,
        children: (0, i.jsx)(r.Text, {
          variant: "text-md/normal",
          color: "text-default",
          children: (0, c.r)()
        })
      })]
    })
  }
}