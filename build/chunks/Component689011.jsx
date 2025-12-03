/** Chunk was on web.js **/
/** chunk id: 689011, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Oc: () => h,
  t: () => m,
  xe: () => g
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk131388 = require("./131388.js"),
  Chunk409813 = require("./409813.js"),
  Chunk586585 = require("./586585.jsx"),
  Chunk614277 = require("./614277.jsx"),
  Chunk225715 = require("./225715.jsx"),
  Chunk750143 = require("./750143.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk848902 = require("./848902.js"),
  Chunk365627 = require("./365627.js"),
  Chunk753260 = require("./753260.js");
let m = e => {
    let {
      step: t,
      onClose: n
    } = e, s = (0, a.Z)(u.X);
    return t === o.h8.CONFIRM || t === o.h8.BENEFITS ? (0, r.jsx)("div", {}) : (0, r.jsxs)("div", {
      className: f.headerContainer,
      children: [!s && (0, r.jsx)("div", {
        className: f.headerImageContainer,
        "aria-hidden": "true",
        children: (0, r.jsx)("img", {
          src: _,
          alt: "",
          className: f.headerImage
        })
      }), (0, r.jsx)(i.P3F, {
        className: f.closeContainer,
        onClick: () => n(),
        "aria-label": d.intl.string(d.t.cpT0Cq),
        children: (0, r.jsx)(i.Dio, {
          size: "md",
          color: "currentColor",
          className: f.closeIcon
        })
      })]
    })
  },
  h = e => {
    let {
      icon: t,
      storeListingBenefits: n,
      skuBenefits: i,
      application: a,
      title: o,
      subtitle: s,
      description: l
    } = e;
    return null == a ? null : (0, r.jsx)("div", {
      className: f.confirmationContainer,
      children: (0, r.jsxs)(c.q$, {
        children: [(0, r.jsx)(c.CW, {
          application: a,
          asset: t
        }), (0, r.jsx)(c.r0, {
          children: o
        }), (0, r.jsx)(c.s$, {}), (0, r.jsx)(c.K9, {
          title: s,
          description: l
        }), (0, r.jsx)(c.G9, {
          applicationId: a.id,
          storeListingBenefits: n,
          skuBenefits: i
        })]
      })
    })
  };

function g(e) {
  let {
    tierName: t,
    onConfirm: n,
    subscription: a
  } = e;
  return (0, r.jsxs)("div", {
    className: f.purchaseConfirmation,
    children: [(0, r.jsx)("img", {
      src: p,
      alt: "",
      width: 300,
      height: 126
    }), (0, r.jsx)(i.Heading, {
      className: f.confirmationTitle,
      variant: "heading-xl/extrabold",
      color: "header-primary",
      children: d.intl.format(d.t.wLFT6z, {
        tier: t
      })
    }), (0, r.jsx)(i.Text, {
      className: f.confirmationSubtitle,
      variant: "text-md/medium",
      color: "text-default",
      children: d.intl.format(d.t.OsAK9h, {
        timestamp: null == a ? true : a.currentPeriodEnd
      })
    }), (0, r.jsx)(l.O3, {
      children: (0, r.jsx)(s.Z, {
        onPrimary: n,
        primaryCTA: s.g.CONTINUE,
        primaryText: d.intl.string(d.t["JtWl+a"])
      })
    })]
  })
}