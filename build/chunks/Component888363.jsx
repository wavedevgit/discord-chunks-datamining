/** Chunk was on 27672 **/
/** chunk id: 888363, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => b
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

function g(t) {
  let {
    email: e,
    setEmail: n,
    claimRequired: u,
    onSuccess: p,
    onClose: d
  } = t, [g, y] = l.useState(), [b, S] = l.useState(""), [w, O] = l.useState(""), [j, N] = l.useState(false);
  l.useEffect(() => s.A.flowStep(m.do.ANY, m.hc.CLAIM_ACCOUNT), []);
  let v = async t => {
    t.preventDefault(), N(true), y(""), O("");
    try {
      await (0, a.gt)({
        email: e,
        password: b
      }), N(false), p()
    } catch (t) {
      var n, r;
      (null == t || null == (n = t.body) ? true : n.email) && y(t.body.email), (null == t || null == (r = t.body) ? true : r.password) && O(t.body.password), N(false)
    }
  };
  return (0, r.jsxs)("div", {
    children: [(0, r.jsxs)(o.rQ0, {
      className: _._5,
      direction: c.A.Direction.VERTICAL,
      separator: false,
      children: [(0, r.jsx)("div", {
        className: _.gD
      }), (0, r.jsx)(o.Heading, {
        className: _.Hc,
        variant: "heading-xl/semibold",
        children: f.intl.string(f.t["uQShv/"])
      }), (0, r.jsx)(o.Text, {
        className: _.bQ,
        variant: "text-md/normal",
        color: "text-default",
        children: u ? f.intl.string(f.t.sW28gZ) : f.intl.string(f.t["gP/vPe"])
      }), (0, r.jsx)(o.s_y, {
        className: _.b,
        onClick: d
      })]
    }), (0, r.jsx)(o.$mQ, {
      children: (0, r.jsx)("form", {
        className: _.oB,
        onSubmit: v,
        children: (0, r.jsxs)(o.BJc, {
          gap: 16,
          children: [(0, r.jsx)(o.ksK, {
            label: f.intl.string(f.t.dI4d4S),
            value: e,
            error: g,
            onChange: t => n(t),
            autoFocus: true
          }), (0, r.jsx)(o.ksK, {
            label: f.intl.string(f.t["CIGa+7"]),
            type: "password",
            value: b,
            error: w,
            onChange: t => S(t)
          }), (0, r.jsx)(o.Button, {
            text: f.intl.string(f.t.fiNVin),
            variant: "primary",
            fullWidth: true,
            type: "submit",
            loading: j,
            disabled: 0 === e.length || 0 === b.length
          }), u && (0, r.jsx)("div", {
            className: _.pV,
            children: (0, r.jsx)(o.QWc, {
              text: f.intl.string(f.t["2jxGer"]),
              onClick: () => {
                i.A.logout("claim_account_modal"), d()
              }
            })
          })]
        })
      })
    })]
  })
}

function y(t) {
  let {
    email: e,
    claimRequired: n,
    onClose: i
  } = t, a = n ? f.t.D7trIB : f.t.JNWX7G;
  return l.useEffect(() => s.A.flowStep(m.do.ANY, m.hc.CLAIM_ACCOUNT_SUCCESS), []), (0, r.jsxs)("div", {
    children: [(0, r.jsxs)(o.$mQ, {
      className: _.Zc,
      children: [!n && (0, r.jsx)(o.s_y, {
        className: _.b,
        onClick: i
      }), (0, r.jsx)("div", {
        className: _.hW
      }), (0, r.jsx)(o.Text, {
        className: _.QK,
        variant: "text-lg/semibold",
        children: f.intl.format(a, {
          email: e
        })
      }), (0, r.jsx)(o.Text, {
        className: _.pQ,
        variant: "text-md/normal",
        children: f.intl.string(f.t.eXqM2d)
      })]
    }), n ? (0, r.jsx)(o.jlY, {
      direction: c.A.Direction.VERTICAL,
      children: (0, r.jsx)(o.Button, {
        text: f.intl.string(f.t.BddRzS),
        variant: "primary",
        fullWidth: true,
        onClick: i
      })
    }) : (0, r.jsx)(o.jlY, {
      direction: c.A.Direction.VERTICAL,
      children: (0, r.jsx)(o.Button, {
        text: f.intl.string(f.t.ygArIV),
        variant: "primary",
        fullWidth: true,
        onClick: function() {
          window.open((0, p.SU)(), "_blank"), u.default.track(d.HAw.DOWNLOAD_APP, {
            platform: (0, p.Vf)(),
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

function b(t) {
  let {
    onClose: e,
    transitionState: n,
    claimRequired: i = false
  } = t, [a, c] = l.useState(""), [s, u] = l.useState(false);
  return s ? (0, r.jsx)(o.EOs, {
    transitionState: n,
    parentComponent: "ClaimAccountModal",
    children: (0, r.jsx)(y, {
      email: a,
      claimRequired: i,
      onClose: e
    })
  }) : (0, r.jsx)(o.EOs, {
    transitionState: n,
    parentComponent: "ClaimAccountModal",
    children: (0, r.jsx)(g, {
      email: a,
      setEmail: c,
      claimRequired: i,
      onSuccess: () => u(true),
      onClose: e
    })
  })
}