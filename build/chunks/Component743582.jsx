/** Chunk was on 83942 **/
/** chunk id: 743582, original params: n,t,i (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk935369 = require("./935369.js"),
  Chunk728345 = require("./728345.js"),
  Chunk313201 = require("./313201.js"),
  Chunk577275 = require("./577275.js"),
  Chunk829857 = require("./829857.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk965193 = require("./965193.js");

function p(n) {
  var t, i;
  let {
    transitionState: a,
    application: p,
    onClose: h
  } = n, _ = (0, d.Dt)(), [j, v] = l.useState(null == p || null == (t = p.team) ? true : t.id), {
    teams: C
  } = (0, u.Z)(), b = l.useMemo(() => C.filter(n => n.payout_account_status === x.C.ACTIVE).map(n => ({
    label: n.name,
    value: n.id
  })), [C]), f = (null == p || null == (i = p.team) ? true : i.id) !== j, [w, {
    loading: N,
    error: k
  }] = (0, c.Z)(o.ZP.transferApplication), z = async () => {
    s()(null != p, "no application"), s()(null != j, "no team selected"), null != await w({
      applicationId: p.id,
      teamId: j
    }) && h()
  }, R = (null == p ? true : p.team) != null;
  return (0, e.jsxs)(r.Y0X, {
    transitionState: a,
    "aria-labelledby": _,
    parentComponent: "TransferApplicationModal",
    children: [(0, e.jsxs)(r.xBx, {
      children: [(0, e.jsx)(r.X6q, {
        id: _,
        variant: "heading-md/semibold",
        children: R ? g.intl.string(g.t["4TveVl"]) : g.intl.string(g.t.feBUAQ)
      }), (0, e.jsx)(r.olH, {
        className: m.closeButton,
        onClick: h
      })]
    }), (0, e.jsxs)(r.hzk, {
      className: m.content,
      children: [R ? (0, e.jsxs)(e.Fragment, {
        children: [(0, e.jsx)(r.R94, {
          children: g.intl.string(g.t.c7HS0t)
        }), (0, e.jsx)(r.LZC, {
          size: 8
        }), (0, e.jsxs)(r.X6q, {
          className: m.warningHeading,
          variant: "text-sm/semibold",
          color: "text-danger",
          children: [(0, e.jsx)(r.Mgn, {
            size: "xs",
            color: "currentColor",
            className: m.warningIcon
          }), g.intl.string(g.t.Caz8nJ)]
        }), (0, e.jsx)(r.LZC, {
          size: 4
        }), (0, e.jsx)(r.R94, {
          type: r.R94.Types.ERROR,
          children: g.intl.string(g.t.u4ddHR)
        })]
      }) : (0, e.jsx)(r.R94, {
        children: g.intl.string(g.t.atZ50N)
      }), null != k ? (0, e.jsx)(r.kzN, {
        children: k.message
      }) : null, (0, e.jsx)(r.LZC, {
        size: 16
      }), (0, e.jsx)(r.xJW, {
        title: R ? g.intl.string(g.t.xZ6ZLy) : g.intl.string(g.t.bfmKdH),
        required: true,
        children: (0, e.jsx)(r.q4e, {
          className: m.__invalid_teamSelect,
          options: b,
          placeholder: g.intl.string(g.t.QXf93N),
          value: j,
          isDisabled: 0 === b.length,
          onChange: n => v(n),
          "aria-label": g.intl.string(g.t.QXf93N)
        })
      })]
    }), (0, e.jsx)(r.mzw, {
      className: m.__invalid_footer,
      children: (0, e.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: m.__invalid_goBackButton,
        children: (0, e.jsx)(r.zxk, {
          variant: "critical-primary",
          text: g.intl.string(g.t.R3BPHx),
          loading: N,
          disabled: !f,
          onClick: z
        })
      })
    })]
  })
}