/** Chunk was on 60827 **/
/** chunk id: 324239, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk809206 = require("./809206.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk390885 = require("./390885.js"),
  Chunk626135 = require("./626135.js"),
  Chunk361207 = require("./361207.js"),
  Chunk981631 = require("./981631.js"),
  Chunk630724 = require("./630724.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk373060 = require("./373060.js");

function _(t) {
  let {
    email: e,
    setEmail: n,
    claimRequired: u,
    onSuccess: f,
    onClose: m
  } = t, [_, S] = l.useState(), [y, v] = l.useState(""), [N, b] = l.useState(""), [j, C] = l.useState(false);
  l.useEffect(() => c.Z.flowStep(d.MK.ANY, d.mx.CLAIM_ACCOUNT), []);
  let O = async t => {
    t.preventDefault(), C(true), S(""), b("");
    try {
      await (0, a.S2)({
        email: e,
        password: y
      }), C(false), f()
    } catch (t) {
      var n, r;
      (null == t || null == (n = t.body) ? true : n.email) && S(t.body.email), (null == t || null == (r = t.body) ? true : r.password) && b(t.body.password), C(false)
    }
  };
  return (0, r.jsxs)("div", {
    children: [(0, r.jsxs)(o.xBx, {
      className: g.formHeader,
      direction: s.Z.Direction.VERTICAL,
      separator: false,
      children: [(0, r.jsx)("div", {
        className: g.formImage
      }), (0, r.jsx)(o.Heading, {
        className: g.formTitle,
        variant: "heading-xl/semibold",
        children: p.intl.string(p.t["uQShv/"])
      }), (0, r.jsx)(o.Text, {
        className: g.formBody,
        variant: "text-md/normal",
        color: "text-default",
        children: u ? p.intl.string(p.t.sW28gZ) : p.intl.string(p.t["gP/vPe"])
      }), (0, r.jsx)(o.olH, {
        className: g.closeButton,
        onClick: m
      })]
    }), (0, r.jsx)(o.hzk, {
      children: (0, r.jsx)("form", {
        className: g.formContent,
        onSubmit: O,
        children: (0, r.jsxs)(o.Kqy, {
          gap: 16,
          children: [(0, r.jsx)(o.oil, {
            label: p.intl.string(p.t.dI4d4S),
            value: e,
            error: _,
            onChange: t => n(t),
            autoFocus: true
          }), (0, r.jsx)(o.oil, {
            label: p.intl.string(p.t["CIGa+7"]),
            type: "password",
            value: y,
            error: N,
            onChange: t => v(t)
          }), (0, r.jsx)(o.Button, {
            text: p.intl.string(p.t.fiNVin),
            variant: "primary",
            fullWidth: true,
            type: "submit",
            loading: j,
            disabled: 0 === e.length || 0 === y.length
          }), u && (0, r.jsx)("div", {
            className: g.logoutButton,
            children: (0, r.jsx)(o.Avr, {
              text: p.intl.string(p.t["2jxGer"]),
              onClick: () => {
                i.Z.logout("claim_account_modal"), m()
              }
            })
          })]
        })
      })
    })]
  })
}

function S(t) {
  let {
    email: e,
    claimRequired: n,
    onClose: i
  } = t, a = n ? p.t.D7trIB : p.t.JNWX7G;
  return l.useEffect(() => c.Z.flowStep(d.MK.ANY, d.mx.CLAIM_ACCOUNT_SUCCESS), []), (0, r.jsxs)("div", {
    children: [(0, r.jsxs)(o.hzk, {
      className: g.successContent,
      children: [!n && (0, r.jsx)(o.olH, {
        className: g.closeButton,
        onClick: i
      }), (0, r.jsx)("div", {
        className: g.successImage
      }), (0, r.jsx)(o.Text, {
        className: g.successTitle,
        variant: "text-lg/semibold",
        children: p.intl.format(a, {
          email: e
        })
      }), (0, r.jsx)(o.Text, {
        className: g.successPromotion,
        variant: "text-md/normal",
        children: p.intl.string(p.t.eXqM2d)
      })]
    }), n ? (0, r.jsx)(o.mzw, {
      direction: s.Z.Direction.VERTICAL,
      children: (0, r.jsx)(o.Button, {
        text: p.intl.string(p.t.BddRzS),
        variant: "primary",
        fullWidth: true,
        onClick: i
      })
    }) : (0, r.jsx)(o.mzw, {
      direction: s.Z.Direction.VERTICAL,
      children: (0, r.jsx)(o.Button, {
        text: p.intl.string(p.t.ygArIV),
        variant: "primary",
        fullWidth: true,
        onClick: function() {
          window.open((0, f.t3)(), "_blank"), u.default.track(m.rMx.DOWNLOAD_APP, {
            platform: (0, f.DW)(),
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
  } = t, [a, s] = l.useState(""), [c, u] = l.useState(false);
  return c ? (0, r.jsx)(o.Y0X, {
    transitionState: n,
    parentComponent: "ClaimAccountModal",
    children: (0, r.jsx)(S, {
      email: a,
      claimRequired: i,
      onClose: e
    })
  }) : (0, r.jsx)(o.Y0X, {
    transitionState: n,
    parentComponent: "ClaimAccountModal",
    children: (0, r.jsx)(_, {
      email: a,
      setEmail: s,
      claimRequired: i,
      onSuccess: () => u(true),
      onClose: e
    })
  })
}