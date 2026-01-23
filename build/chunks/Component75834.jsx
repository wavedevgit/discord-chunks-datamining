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
      placeholder: h.intl.string(h.t.QXf93A),
      value: e,
      onSelectionChange: n,
      label: h.intl.string(h.t.QXf93A),
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
  } = (0, u.A)(), S = b.filter(t => t.payout_account_status === p.y.ACTIVE), T = l.useMemo(() => S.map(t => ({
    label: t.name,
    value: t.id
  })), [S]), y = () => {
    E(t => !t)
  }, _ = () => {
    x(), (0, d.im)(e, j)
  }, k = l.useCallback(() => {
    (0, o.A)(m.X7G.DEVELOPER_PORTAL_TEAMS)
  }, []);
  if (!n) return (0, i.jsx)(a.Modal, {
    title: h.intl.string(h.t.GfObDE),
    actions: [{
      variant: "primary",
      text: h.intl.string(h.t.geKm7t),
      onClick: _,
      disabled: !C
    }],
    onClose: x,
    transitionState: f,
    size: "md",
    children: (0, i.jsx)(s.Kj, {
      onChange: y,
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
    let t = 0 === T.length;
    return (0, i.jsxs)(a.Modal, {
      title: h.intl.string(h.t.inJKQv),
      subtitle: t ? h.intl.format(h.t.Jyy4pV, {}) : h.intl.string(h.t.U1Vz24),
      actions: [{
        variant: "primary",
        text: t ? h.intl.string(h.t.JddVgE) : h.intl.string(h.t.geKm7t),
        onClick: t ? k : _
      }],
      onClose: x,
      transitionState: f,
      size: "md",
      children: [!t && (0, i.jsx)(g, {
        selectedTeamId: j,
        onSetSelectedTeamId: v,
        teamOptions: T
      }), (0, i.jsx)(s.Kj, {
        onChange: y,
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