/** Chunk was on web.js **/
/** chunk id: 886253, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk374481 = require("./374481.jsx"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk812206 = require("./812206.js"),
  Chunk370210 = require("./370210.js"),
  Chunk757746 = require("./757746.js"),
  Chunk572004 = require("./572004.js"),
  Chunk601911 = require("./601911.js"),
  Chunk504211 = require("./504211.js"),
  Chunk533159 = require("./533159.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk186812 = require("./186812.js"),
  Chunk325380 = require("./325380.js");

function b(e) {
  let {
    appId: t,
    skuId: n,
    transitionState: b,
    onClose: y,
    children: O,
    footer: v
  } = e, I = (0, o.e7)([l.Z, c.Z], () => {
    var e;
    return null != (e = l.Z.getApplication(t)) ? e : c.Z.getApplicationRecord(t)
  }, [t]), {
    data: T
  } = (0, u.Z)(n);
  if (null == I) return null;
  let S = (0, f.y)(I, 25),
    {
      termsOfServiceUrl: A,
      privacyPolicyUrl: C
    } = I;
  if ((null == T ? true : T.applicationId) !== t) return (0, r.jsx)(a.Modal, {
    actions: [{
      onClick: y,
      text: m.intl.string(m.t.BddRzS),
      variant: "primary"
    }],
    onClose: y,
    size: "sm",
    transitionState: b,
    title: m.intl.string(m.t["0Bf80I"]),
    children: (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: g.unavailableBody,
      children: m.intl.string(m.t.omH3bq)
    })
  });
  let N = null != S ? (0, r.jsx)("img", {
    src: S.href,
    alt: "",
    className: g.appIcon
  }) : true;
  return (0, r.jsxs)(a.IX, {
    onClose: y,
    size: "lg",
    transitionState: b,
    children: [(0, r.jsx)(a.xBx, {
      leading: N,
      title: I.name
    }), (0, r.jsx)(i.Z, {
      children: (0, r.jsx)("main", {
        className: E.bodyInner,
        children: O
      })
    }), (0, r.jsx)(a.mzw, {
      children: (0, r.jsxs)("div", {
        className: g.footer,
        children: [null != A || null != C ? (0, r.jsx)(s.Text, {
          color: "header-primary",
          variant: "text-sm/normal",
          children: (0, r.jsx)(p.Z, {
            termsOfServiceUrl: A,
            privacyPolicyUrl: C
          })
        }) : (0, r.jsx)(s.Text, {
          color: "header-primary",
          variant: "text-xs/normal",
          children: m.intl.string(m.t["3ZY+0D"])
        }), (0, r.jsxs)("div", {
          className: g.footerButtons,
          children: [d.wS && (0, r.jsx)(s.hU, {
            "aria-label": m.intl.string(m.t.WqhZss),
            icon: () => (0, r.jsx)(s.xPt, {
              size: "xs",
              color: "currentColor"
            }),
            onClick: () => {
              let e = "".concat(location.protocol, "//").concat(location.host).concat(h.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t, n));
              (0, d.JG)(e, () => (0, s.showToast)((0, s.createToast)(m.intl.string(m.t["L/PwZf"]), s.ToastType.SUCCESS))), (0, _.X)(t, _.B.DETAILS_MODAL, n)
            },
            variant: "icon-only"
          }), v]
        })]
      })
    })]
  })
}