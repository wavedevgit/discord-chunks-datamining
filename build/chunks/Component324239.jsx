/** Chunk was on 60827 **/
/** chunk id: 324239, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => x
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
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
  Chunk327342 = require("./327342.js");

function S(e) {
  let {
    email: t,
    setEmail: n,
    claimRequired: m,
    onSuccess: f,
    onClose: d
  } = e, [S, N] = o.useState(), [x, y] = o.useState(""), [C, b] = o.useState(""), [v, O] = o.useState(false);
  o.useEffect(() => u.Z.flowStep(p.MK.ANY, p.mx.CLAIM_ACCOUNT), []);
  let j = async e => {
    e.preventDefault(), O(true), N(""), b("");
    try {
      await (0, c.S2)({
        email: t,
        password: x
      }), O(false), f()
    } catch (e) {
      var n, r;
      (null == e || null == (n = e.body) ? true : n.email) && N(e.body.email), (null == e || null == (r = e.body) ? true : r.password) && b(e.body.password), O(false)
    }
  };
  return (0, r.jsxs)("div", {
    children: [(0, r.jsxs)(s.xBx, {
      className: g.formHeader,
      direction: a.Z.Direction.VERTICAL,
      separator: false,
      children: [(0, r.jsx)("div", {
        className: g.formImage
      }), (0, r.jsx)(s.X6q, {
        className: g.formTitle,
        variant: "heading-xl/semibold",
        children: _.intl.string(_.t.uQShv7)
      }), (0, r.jsx)(s.Text, {
        className: g.formBody,
        variant: "text-md/normal",
        color: "header-secondary",
        children: m ? _.intl.string(_.t.sW28gY) : _.intl.string(_.t["gP/vPT"])
      }), (0, r.jsx)(s.olH, {
        className: g.closeButton,
        onClick: d
      })]
    }), (0, r.jsx)(s.hzk, {
      children: (0, r.jsxs)("form", {
        className: g.formContent,
        onSubmit: j,
        children: [(0, r.jsx)(s.xJW, {
          title: _.intl.string(_.t.dI4d4e),
          className: g.formItem,
          children: (0, r.jsx)(s.oil, {
            value: t,
            error: S,
            onChange: e => n(e),
            autoFocus: true
          })
        }), (0, r.jsx)(s.xJW, {
          title: _.intl.string(_.t["CIGa+/"]),
          className: g.formItem,
          children: (0, r.jsx)(s.oil, {
            type: "password",
            value: x,
            error: C,
            onChange: e => y(e)
          })
        }), (0, r.jsx)(l.zx, {
          type: "submit",
          size: l.zx.Sizes.LARGE,
          fullWidth: true,
          submitting: v,
          disabled: 0 === t.length || 0 === x.length,
          children: _.intl.string(_.t.fiNVio)
        }), m && (0, r.jsx)(l.zx, {
          className: g.logoutButton,
          color: l.zx.Colors.PRIMARY,
          look: l.zx.Looks.LINK,
          size: l.zx.Sizes.NONE,
          onClick: () => {
            i.Z.logout("claim_account_modal"), d()
          },
          children: _.intl.string(_.t["2jxGen"])
        })]
      })
    })]
  })
}

function N(e) {
  let {
    email: t,
    claimRequired: n,
    onClose: i
  } = e, c = n ? _.t.D7trIC : _.t.JNWX7O;
  return o.useEffect(() => u.Z.flowStep(p.MK.ANY, p.mx.CLAIM_ACCOUNT_SUCCESS), []), (0, r.jsxs)("div", {
    children: [(0, r.jsxs)(s.hzk, {
      className: g.successContent,
      children: [!n && (0, r.jsx)(s.olH, {
        className: g.closeButton,
        onClick: i
      }), (0, r.jsx)("div", {
        className: g.successImage
      }), (0, r.jsx)(s.Text, {
        className: g.successTitle,
        variant: "text-lg/semibold",
        children: _.intl.format(c, {
          email: t
        })
      }), (0, r.jsx)(s.Text, {
        className: g.successPromotion,
        variant: "text-md/normal",
        children: _.intl.string(_.t.eXqM2d)
      })]
    }), n ? (0, r.jsx)(s.mzw, {
      direction: a.Z.Direction.VERTICAL,
      children: (0, r.jsx)(l.zx, {
        size: l.zx.Sizes.LARGE,
        onClick: i,
        children: _.intl.string(_.t.BddRzc)
      })
    }) : (0, r.jsx)(s.mzw, {
      direction: a.Z.Direction.VERTICAL,
      children: (0, r.jsx)(l.zx, {
        color: l.zx.Colors.BRAND,
        size: l.zx.Sizes.LARGE,
        onClick: function() {
          window.open((0, f.t3)(), "_blank"), m.default.track(d.rMx.DOWNLOAD_APP, {
            platform: (0, f.DW)(),
            ptb: false,
            released: true,
            has_e_mail: true,
            referring_location: "Claim Modal",
            qr_code: false
          })
        },
        children: _.intl.string(_.t.ygArIS)
      })
    })]
  })
}

function x(e) {
  let {
    onClose: t,
    transitionState: n,
    claimRequired: l = false
  } = e, [i, c] = o.useState(""), [a, u] = o.useState(false);
  return a ? (0, r.jsx)(s.Y0X, {
    transitionState: n,
    parentComponent: "ClaimAccountModal",
    children: (0, r.jsx)(N, {
      email: i,
      claimRequired: l,
      onClose: t
    })
  }) : (0, r.jsx)(s.Y0X, {
    transitionState: n,
    parentComponent: "ClaimAccountModal",
    children: (0, r.jsx)(S, {
      email: i,
      setEmail: c,
      claimRequired: l,
      onSuccess: () => u(true),
      onClose: t
    })
  })
}