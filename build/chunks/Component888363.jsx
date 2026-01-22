/** Chunk was on 27672 **/
/** chunk id: 888363, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk830215 = require("./830215.js"),
  Chunk631670 = require("./631670.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk894778 = require("./894778.js"),
  Chunk954571 = require("./954571.js"),
  Chunk53505 = require("./53505.js"),
  Chunk652215 = require("./652215.js"),
  Chunk315290 = require("./315290.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk978147 = require("./978147.js");

function _(t) {
  let {
    email: e,
    setEmail: n,
    claimRequired: u,
    onSuccess: d,
    onClose: p
  } = t, [_, b] = l.useState(), [y, S] = l.useState(""), [w, O] = l.useState(""), [j, N] = l.useState(false);
  l.useEffect(() => s.A.flowStep(f.do.ANY, f.hc.CLAIM_ACCOUNT), []);
  let v = async t => {
    t.preventDefault(), N(true), b(""), O("");
    try {
      await (0, a.gt)({
        email: e,
        password: y
      }), N(false), d()
    } catch (t) {
      var n, r;
      (null == t || null == (n = t.body) ? true : n.email) && b(t.body.email), (null == t || null == (r = t.body) ? true : r.password) && O(t.body.password), N(false)
    }
  };
  return (0, r.jsxs)("div", {
    children: [(0, r.jsxs)(o.rQ0, {
      className: g._5,
      direction: c.A.Direction.VERTICAL,
      separator: false,
      children: [(0, r.jsx)("div", {
        className: g.gD
      }), (0, r.jsx)(o.Heading, {
        className: g.Hc,
        variant: "heading-xl/semibold",
        children: m.intl.string(m.t["uQShv/"])
      }), (0, r.jsx)(o.Text, {
        className: g.bQ,
        variant: "text-md/normal",
        color: "text-default",
        children: u ? m.intl.string(m.t.sW28gZ) : m.intl.string(m.t["gP/vPe"])
      }), (0, r.jsx)(o.s_y, {
        className: g.b,
        onClick: p
      })]
    }), (0, r.jsx)(o.$mQ, {
      children: (0, r.jsx)("form", {
        className: g.oB,
        onSubmit: v,
        children: (0, r.jsxs)(o.BJc, {
          gap: 16,
          children: [(0, r.jsx)(o.ksK, {
            label: m.intl.string(m.t.dI4d4S),
            value: e,
            error: _,
            onChange: t => n(t),
            autoFocus: true
          }), (0, r.jsx)(o.ksK, {
            label: m.intl.string(m.t["CIGa+7"]),
            type: "password",
            value: y,
            error: w,
            onChange: t => S(t)
          }), (0, r.jsx)(o.Button, {
            text: m.intl.string(m.t.fiNVin),
            variant: "primary",
            fullWidth: true,
            type: "submit",
            loading: j,
            disabled: 0 === e.length || 0 === y.length
          }), u && (0, r.jsx)("div", {
            className: g.pV,
            children: (0, r.jsx)(o.QWc, {
              text: m.intl.string(m.t["2jxGer"]),
              onClick: () => {
                i.A.logout("claim_account_modal"), p()
              }
            })
          })]
        })
      })
    })]
  })
}

function b(t) {
  let {
    email: e,
    claimRequired: n,
    onClose: i
  } = t, a = n ? m.t.D7trIB : m.t.JNWX7G;
  return l.useEffect(() => s.A.flowStep(f.do.ANY, f.hc.CLAIM_ACCOUNT_SUCCESS), []), (0, r.jsxs)("div", {
    children: [(0, r.jsxs)(o.$mQ, {
      className: g.Zc,
      children: [!n && (0, r.jsx)(o.s_y, {
        className: g.b,
        onClick: i
      }), (0, r.jsx)("div", {
        className: g.hW
      }), (0, r.jsx)(o.Text, {
        className: g.QK,
        variant: "text-lg/semibold",
        children: m.intl.format(a, {
          email: e
        })
      }), (0, r.jsx)(o.Text, {
        className: g.pQ,
        variant: "text-md/normal",
        children: m.intl.string(m.t.eXqM2d)
      })]
    }), n ? (0, r.jsx)(o.jlY, {
      direction: c.A.Direction.VERTICAL,
      children: (0, r.jsx)(o.Button, {
        text: m.intl.string(m.t.BddRzS),
        variant: "primary",
        fullWidth: true,
        onClick: i
      })
    }) : (0, r.jsx)(o.jlY, {
      direction: c.A.Direction.VERTICAL,
      children: (0, r.jsx)(o.Button, {
        text: m.intl.string(m.t.ygArIV),
        variant: "primary",
        fullWidth: true,
        onClick: function() {
          window.open((0, d.SU)(), "_blank"), u.default.track(p.HAw.DOWNLOAD_APP, {
            platform: (0, d.Vf)(),
            ptb: false,
            released: true,
            has_e_mail: true,
            referring_location: "Claim Modal",
            qr_code: false
          })
        }
      })
    })]
  })
}

function y(t) {
  let {
    onClose: e,
    transitionState: n,
    claimRequired: i = false
  } = t, [a, c] = l.useState(""), [s, u] = l.useState(false);
  return s ? (0, r.jsx)(o.EOs, {
    transitionState: n,
    parentComponent: "ClaimAccountModal",
    children: (0, r.jsx)(b, {
      email: a,
      claimRequired: i,
      onClose: e
    })
  }) : (0, r.jsx)(o.EOs, {
    transitionState: n,
    parentComponent: "ClaimAccountModal",
    children: (0, r.jsx)(_, {
      email: a,
      setEmail: c,
      claimRequired: i,
      onSuccess: () => u(true),
      onClose: e
    })
  })
}