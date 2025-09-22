/** Chunk was on web.js **/
/** chunk id: 886253, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk312568 = require("./312568.jsx"),
  Chunk257465 = require("./257465.jsx"),
  Chunk82659 = require("./82659.jsx"),
  Chunk213734 = require("./213734.jsx"),
  Chunk37148 = require("./37148.jsx"),
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
  Chunk525751 = require("./525751.js");

function v(e) {
  let {
    appId: t,
    skuId: n,
    transitionState: v,
    onClose: I,
    children: T,
    footer: S
  } = e, A = (0, i.e7)([d.Z, f.Z], () => {
    var e;
    return null != (e = d.Z.getApplication(t)) ? e : f.Z.getApplicationRecord(t)
  }, [t]), {
    data: C
  } = (0, _.Z)(n);
  if (null == A) return null;
  let N = (0, h.y)(A, 25),
    {
      termsOfServiceUrl: R,
      privacyPolicyUrl: P
    } = A;
  if ((null == C ? true : C.applicationId) !== t) return (0, r.jsx)(s.Modal, {
    actions: [{
      onClick: I,
      text: b.intl.string(b.t.BddRzc),
      variant: "primary"
    }],
    onClose: I,
    size: "sm",
    transitionState: v,
    title: b.intl.string(b.t["0Bf80N"]),
    children: (0, r.jsx)(u.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: y.unavailableBody,
      children: b.intl.string(b.t.omH3bm)
    })
  });
  let w = null != N ? (0, r.jsx)("img", {
    src: N.href,
    alt: "",
    className: y.appIcon
  }) : true;
  return (0, r.jsxs)(o.IX, {
    onClose: I,
    size: "lg",
    transitionState: v,
    children: [(0, r.jsx)(c.x, {
      leading: w,
      title: A.name
    }), (0, r.jsx)(a.Z, {
      children: (0, r.jsx)("main", {
        className: O.bodyInner,
        children: T
      })
    }), (0, r.jsx)(l.m, {
      children: (0, r.jsxs)("div", {
        className: y.footer,
        children: [null != R || null != P ? (0, r.jsx)(u.Text, {
          color: "header-primary",
          variant: "text-sm/normal",
          children: (0, r.jsx)(g.Z, {
            termsOfServiceUrl: R,
            privacyPolicyUrl: P
          })
        }) : (0, r.jsx)(u.Text, {
          color: "header-primary",
          variant: "text-xs/normal",
          children: b.intl.string(b.t["3ZY+0N"])
        }), (0, r.jsxs)("div", {
          className: y.footerButtons,
          children: [p.wS && (0, r.jsx)(u.hU, {
            "aria-label": b.intl.string(b.t.WqhZsr),
            icon: () => (0, r.jsx)(u.xPt, {
              size: "xs",
              color: "currentColor"
            }),
            onClick: () => {
              let e = "".concat(location.protocol, "//").concat(location.host).concat(E.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t, n));
              (0, p.JG)(e, () => (0, u.showToast)((0, u.createToast)(b.intl.string(b.t["L/PwZW"]), u.ToastType.SUCCESS))), (0, m.X)(t, m.B.DETAILS_MODAL, n)
            },
            variant: "icon-only"
          }), S]
        })]
      })
    })]
  })
}