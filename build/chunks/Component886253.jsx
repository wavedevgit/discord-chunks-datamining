/** Chunk was on web.js **/
/** chunk id: 886253, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
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
  Chunk969878 = require("./969878.js"),
  Chunk409369 = require("./409369.js");

function E(e) {
  let {
    appId: t,
    skuId: n,
    transitionState: E,
    onClose: b,
    onHeaderTitleClick: y,
    children: O,
    footer: v
  } = e, I = (0, i.e7)([s.Z, l.Z], () => {
    var e;
    return null != (e = s.Z.getApplication(t)) ? e : l.Z.getApplicationRecord(t)
  }, [t]), {
    data: T
  } = (0, c.Z)(n);
  if (null == I) return null;
  let S = (0, d.y)(I, 25),
    {
      termsOfServiceUrl: A,
      privacyPolicyUrl: N
    } = I;
  return (null == T ? true : T.applicationId) !== t ? (0, r.jsxs)(a.Y0X, {
    transitionState: E,
    size: a.CgR.SMALL,
    parentComponent: "CardDetailsModal",
    children: [(0, r.jsxs)(a.hzk, {
      className: g.content,
      children: [(0, r.jsx)(a.olH, {
        onClick: b,
        className: m.modalCloseBtn
      }), (0, r.jsx)(a.Text, {
        variant: "text-lg/semibold",
        color: "header-primary",
        className: g.unavailableTitle,
        children: h.intl.string(h.t["0Bf80N"])
      }), (0, r.jsx)(a.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        className: g.unavailableBody,
        children: h.intl.string(h.t.omH3bm)
      })]
    }), (0, r.jsx)(a.mzw, {
      children: (0, r.jsx)(o.zx, {
        className: g.button,
        color: o.zx.Colors.BRAND,
        onClick: b,
        size: o.zx.Sizes.LARGE,
        children: h.intl.string(h.t.BddRzc)
      })
    })]
  }) : (0, r.jsxs)(a.Y0X, {
    transitionState: E,
    size: a.CgR.DYNAMIC,
    className: g.modal,
    parentComponent: "CardDetailsModal",
    children: [(0, r.jsxs)(a.xBx, {
      className: m.modalHeader,
      children: [(0, r.jsxs)(a.P3F, {
        className: m.modalTitle,
        onClick: y,
        children: [null != S && (0, r.jsx)("img", {
          src: S.href,
          alt: "",
          className: g.appIcon
        }), (0, r.jsx)(a.X6q, {
          variant: "heading-md/semibold",
          children: I.name
        })]
      }), (0, r.jsx)(a.olH, {
        onClick: b,
        className: m.modalCloseBtn
      })]
    }), O, (0, r.jsxs)(a.mzw, {
      className: g.footer,
      children: [null != A || null != N ? (0, r.jsx)(a.Text, {
        color: "header-primary",
        variant: "text-sm/normal",
        children: (0, r.jsx)(_.Z, {
          termsOfServiceUrl: A,
          privacyPolicyUrl: N
        })
      }) : (0, r.jsx)(a.Text, {
        color: "header-primary",
        variant: "text-xs/normal",
        children: h.intl.string(h.t["3ZY+0N"])
      }), (0, r.jsxs)("div", {
        className: g.footerButtons,
        children: [u.wS && (0, r.jsx)(o.zx, {
          look: o.zx.Looks.FILLED,
          size: o.zx.Sizes.ICON,
          color: o.zx.Colors.PRIMARY,
          "aria-label": h.intl.string(h.t.WqhZsr),
          className: g.linkButton,
          innerClassName: g.innerLinkButton,
          onClick: () => {
            let e = "".concat(location.protocol, "//").concat(location.host).concat(p.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t, n));
            (0, u.JG)(e, () => (0, a.showToast)((0, a.createToast)(h.intl.string(h.t["L/PwZW"]), a.ToastType.SUCCESS))), (0, f.X)(t, f.B.DETAILS_MODAL, n)
          },
          children: (0, r.jsx)(a.xPt, {
            size: "xs",
            color: "currentColor"
          })
        }), v]
      })]
    })]
  })
}