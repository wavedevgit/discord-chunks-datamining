/** Chunk was on 710 **/
/** chunk id: 32342, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => _
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk313201 = require("./313201.js"),
  Chunk53365 = require("./53365.js"),
  Chunk377176 = require("./377176.js"),
  Chunk577275 = require("./577275.js"),
  Chunk981631 = require("./981631.js"),
  Chunk829857 = require("./829857.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk170538 = require("./170538.js");

function p(e) {
  let {
    selectedTeamId: t,
    onSetSelectedTeamId: a,
    teamOptions: r
  } = e;
  return (0, n.jsx)("div", {
    className: u.teamSetup,
    children: 0 === r.length ? (0, n.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: h.intl.format(h.t.Jyy4pa, {})
    }) : (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(s.Text, {
        variant: "text-md/normal",
        className: u.teamBodyText,
        color: "header-secondary",
        children: h.intl.string(h.t.U1Vz29)
      }), (0, n.jsx)(s.q4e, {
        options: r,
        placeholder: h.intl.string(h.t.QXf93N),
        value: t,
        onChange: a,
        "aria-label": h.intl.string(h.t.QXf93N)
      })]
    })
  })
}

function _(e) {
  let {
    guildId: t,
    requireTeamSetup: a,
    onClose: _,
    transitionState: g
  } = e, j = (0, l.Dt)(), [f, b] = r.useState(), [y, C] = r.useState(false), {
    teams: T
  } = (0, c.Z)(), v = T.filter(e => e.payout_account_status === m.C.ACTIVE), k = r.useMemo(() => v.map(e => ({
    label: e.name,
    value: e.id
  })), [v]), N = r.useCallback(() => {
    (0, i.Z)(x.EYA.DEVELOPER_PORTAL_TEAMS)
  }, []);
  return (0, n.jsxs)(s.Y0X, {
    "aria-labelledby": j,
    size: s.CgR.DYNAMIC,
    transitionState: g,
    parentComponent: "CreatorMonetizationNewOwnerOnboardingModal",
    children: [(0, n.jsx)(s.xBx, {
      separator: false,
      className: u.header,
      children: (0, n.jsx)(s.X6q, {
        variant: "heading-xl/semibold",
        children: a ? h.intl.string(h.t.inJKQk) : h.intl.string(h.t.GfObDA)
      })
    }), (0, n.jsxs)(s.hzk, {
      className: u.content,
      children: [a && (0, n.jsx)(p, {
        selectedTeamId: f,
        onSetSelectedTeamId: b,
        teamOptions: k
      }), (0, n.jsx)(s.XZJ, {
        onChange: () => {
          C(e => !e)
        },
        size: 20,
        type: s.XZJ.Types.INVERTED,
        value: y,
        children: (0, n.jsx)(s.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: (0, d.f)()
        })
      })]
    }), (0, n.jsx)(s.mzw, {
      className: u.footer,
      children: (0, n.jsx)("div", {
        className: u.buttons,
        children: a && 0 === k.length ? (0, n.jsx)(s.zxk, {
          variant: "primary",
          text: h.intl.string(h.t.JddVgI),
          onClick: N
        }) : (0, n.jsx)(s.zxk, {
          variant: "primary",
          text: h.intl.string(h.t.geKm7u),
          disabled: !y || a && null == f,
          onClick: () => {
            _(), (0, o.df)(t, f)
          }
        })
      })
    })]
  })
}