/** Chunk was on web.js **/
/** chunk id: 886253, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk984710 = require("./984710.js"),
  Chunk51766 = require("./51766.js");

function b(e) {
  let {
    appId: t,
    skuId: n,
    transitionState: b,
    onClose: y,
    children: O,
    footer: v
  } = e, S = (0, o.e7)([l.Z, c.Z], () => {
    var e;
    return null != (e = l.Z.getApplication(t)) ? e : c.Z.getApplicationRecord(t)
  }, [t]), {
    data: I
  } = (0, u.Z)(n);
  if (null == S) return null;
  let T = (0, f.y)(S, 25),
    {
      termsOfServiceUrl: C,
      privacyPolicyUrl: A
    } = S;
  if ((null == I ? true : I.applicationId) !== t) return (0, r.jsx)(a.Modal, {
    actions: [{
      onClick: y,
      text: h.intl.string(h.t.BddRzS),
      variant: "primary"
    }],
    onClose: y,
    size: "sm",
    transitionState: b,
    title: h.intl.string(h.t["0Bf80I"]),
    children: (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "text-default",
      className: g.unavailableBody,
      children: h.intl.string(h.t.omH3bq)
    })
  });
  let N = null != T ? (0, r.jsx)("img", {
    src: T.href,
    alt: "",
    className: g.appIcon
  }) : true;
  return (0, r.jsxs)(a.IX, {
    onClose: y,
    size: "lg",
    transitionState: b,
    children: [(0, r.jsx)(a.xBx, {
      leading: N,
      title: S.name
    }), (0, r.jsx)(i.Z, {
      children: (0, r.jsx)("main", {
        className: E.bodyInner,
        children: O
      })
    }), (0, r.jsx)(a.mzw, {
      children: (0, r.jsxs)("div", {
        className: g.footer,
        children: [null != C || null != A ? (0, r.jsx)(s.Text, {
          color: "header-primary",
          variant: "text-sm/normal",
          children: (0, r.jsx)(_.Z, {
            termsOfServiceUrl: C,
            privacyPolicyUrl: A
          })
        }) : (0, r.jsx)(s.Text, {
          color: "header-primary",
          variant: "text-xs/normal",
          children: h.intl.string(h.t["3ZY+0D"])
        }), (0, r.jsxs)("div", {
          className: g.footerButtons,
          children: [d.wS && (0, r.jsx)(s.hU, {
            "aria-label": h.intl.string(h.t.WqhZss),
            icon: () => (0, r.jsx)(s.xPt, {
              size: "xs",
              color: "currentColor"
            }),
            onClick: () => {
              let e = "".concat(location.protocol, "//").concat(location.host).concat(m.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t, n));
              (0, d.JG)(e, () => (0, s.showToast)((0, s.createToast)(h.intl.string(h.t["L/PwZf"]), s.ToastType.SUCCESS))), (0, p.X)(t, p.B.DETAILS_MODAL, n)
            },
            variant: "icon-only"
          }), v]
        })]
      })
    })]
  })
}