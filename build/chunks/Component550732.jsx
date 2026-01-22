/** Chunk was on web.js **/
/** chunk id: 550732, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => b
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

function b(e) {
  let {
    appId: t,
    skuId: n,
    transitionState: b,
    onClose: y,
    children: O,
    footer: A
  } = e, v = (0, s.bG)([l.A, c.A], () => {
    var e;
    return null != (e = l.A.getApplication(t)) ? e : c.A.getApplicationRecord(t)
  }, [t]), {
    data: S
  } = (0, u.d)(n);
  if (null == v) return null;
  let I = (0, f.A)(v, 25),
    {
      termsOfServiceUrl: T,
      privacyPolicyUrl: C
    } = v;
  if ((null == S ? true : S.applicationId) !== t) return (0, r.jsx)(a.Modal, {
    actions: [{
      onClick: y,
      text: m.intl.string(m.t.BddRzS),
      variant: "primary"
    }],
    onClose: y,
    size: "sm",
    transitionState: b,
    title: m.intl.string(m.t["0Bf80I"]),
    children: (0, r.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "text-default",
      className: g.$r,
      children: m.intl.string(m.t.omH3bq)
    })
  });
  let N = null != I ? (0, r.jsx)("img", {
    src: I.href,
    alt: "",
    className: g.Z2
  }) : true;
  return (0, r.jsxs)(a.dWK, {
    onClose: y,
    size: "lg",
    transitionState: b,
    children: [(0, r.jsx)(a.rQ0, {
      leading: N,
      title: v.name
    }), (0, r.jsx)(i.A, {
      children: (0, r.jsx)("main", {
        className: E.bodyInner,
        children: O
      })
    }), (0, r.jsx)(a.jlY, {
      children: (0, r.jsxs)("div", {
        className: g.qr,
        children: [null != T || null != C ? (0, r.jsx)(o.Text, {
          color: "text-strong",
          variant: "text-sm/normal",
          children: (0, r.jsx)(_.A, {
            termsOfServiceUrl: T,
            privacyPolicyUrl: C
          })
        }) : (0, r.jsx)(o.Text, {
          color: "text-strong",
          variant: "text-xs/normal",
          children: m.intl.string(m.t["3ZY+0D"])
        }), (0, r.jsxs)("div", {
          className: g.Hq,
          children: [d.p5 && (0, r.jsx)(o.K0, {
            "aria-label": m.intl.string(m.t.WqhZss),
            icon: () => (0, r.jsx)(o.qYV, {
              size: "xs",
              color: "currentColor"
            }),
            onClick: () => {
              let e = "".concat(location.protocol, "//").concat(location.host).concat(h.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t, n));
              (0, d.C)(e, () => (0, o.showToast)((0, o.createToast)(m.intl.string(m.t["L/PwZf"]), o.ToastType.SUCCESS))), (0, p.K)(t, p.C.DETAILS_MODAL, n)
            },
            variant: "icon-only"
          }), A]
        })]
      })
    })]
  })
}