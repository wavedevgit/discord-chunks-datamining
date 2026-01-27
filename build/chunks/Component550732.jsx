/** Chunk was on 70104 **/
/** chunk id: 550732, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  C: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk991660 = require("./991660.jsx"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk587895 = require("./587895.js"),
  Chunk212534 = require("./212534.js"),
  Chunk272859 = require("./272859.js"),
  Chunk957565 = require("./957565.js"),
  Chunk943775 = require("./943775.js"),
  Chunk997997 = require("./997997.js"),
  Chunk816709 = require("./816709.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk356426 = require("./356426.js"),
  Chunk22789 = require("./22789.js");

function g(t) {
  let {
    appId: e,
    skuId: r,
    transitionState: g,
    onClose: h,
    children: y,
    footer: E
  } = t, b = (0, i.bG)([o.A, c.A], () => {
    var t;
    return null != (t = o.A.getApplication(e)) ? t : c.A.getApplicationRecord(e)
  }, [e]), {
    data: A
  } = (0, d.d)(r);
  if (null == b) return null;
  let I = (0, x.A)(b, 25),
    {
      termsOfServiceUrl: O,
      privacyPolicyUrl: S
    } = b;
  if ((null == A ? true : A.applicationId) !== e) return (0, n.jsx)(s.Modal, {
    actions: [{
      onClick: h,
      text: _.intl.string(_.t.BddRzS),
      variant: "primary"
    }],
    onClose: h,
    size: "sm",
    transitionState: g,
    title: _.intl.string(_.t["0Bf80I"]),
    children: (0, n.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "text-default",
      className: j.$r,
      children: _.intl.string(_.t.omH3bq)
    })
  });
  let T = null != I ? (0, n.jsx)("img", {
    src: I.href,
    alt: "",
    className: j.Z2
  }) : true;
  return (0, n.jsxs)(s.dWK, {
    onClose: h,
    size: "lg",
    transitionState: g,
    children: [(0, n.jsx)(s.rQ0, {
      leading: T,
      title: b.name
    }), (0, n.jsx)(l.A, {
      children: (0, n.jsx)("main", {
        className: f.bodyInner,
        children: y
      })
    }), (0, n.jsx)(s.jlY, {
      children: (0, n.jsxs)("div", {
        className: j.qr,
        children: [null != O || null != S ? (0, n.jsx)(a.Text, {
          color: "text-strong",
          variant: "text-sm/normal",
          children: (0, n.jsx)(m.A, {
            termsOfServiceUrl: O,
            privacyPolicyUrl: S
          })
        }) : (0, n.jsx)(a.Text, {
          color: "text-strong",
          variant: "text-xs/normal",
          children: _.intl.string(_.t["3ZY+0D"])
        }), (0, n.jsxs)("div", {
          className: j.Hq,
          children: [u.p5 && (0, n.jsx)(a.K0, {
            "aria-label": _.intl.string(_.t.WqhZss),
            icon: () => (0, n.jsx)(a.qYV, {
              size: "xs",
              color: "currentColor"
            }),
            onClick: () => {
              let t = "".concat(location.protocol, "//").concat(location.host).concat(v.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(e, r));
              (0, u.C)(t, () => (0, a.showToast)((0, a.createToast)(_.intl.string(_.t["L/PwZf"]), a.ToastType.SUCCESS))), (0, p.K)(e, p.C.DETAILS_MODAL, r)
            },
            variant: "icon-only"
          }), E]
        })]
      })
    })]
  })
}