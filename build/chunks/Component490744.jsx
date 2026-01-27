/** Chunk was on web.js **/
/** chunk id: 490744, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Uf: () => m,
  XG: () => g,
  fs: () => h
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk241524 = require("./241524.js"),
  Chunk166532 = require("./166532.js"),
  Chunk19311 = require("./19311.jsx"),
  Chunk482132 = require("./482132.jsx"),
  Chunk910804 = require("./910804.jsx"),
  Chunk376747 = require("./376747.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk123346 = require("./123346.js"),
  Chunk938430 = require("./938430.js"),
  Chunk234275 = require("./234275.js");
let h = e => {
    let {
      step: t,
      onClose: n
    } = e, s = (0, a.A)(u.T);
    return t === o.pn.CONFIRM || t === o.pn.BENEFITS ? (0, r.jsx)("div", {}) : (0, r.jsxs)("div", {
      className: f.N1,
      children: [!s && (0, r.jsx)("div", {
        className: f.oZ,
        "aria-hidden": "true",
        children: (0, r.jsx)("img", {
          src: _,
          alt: "",
          className: f.F0
        })
      }), (0, r.jsx)(i.DUT, {
        className: f.G3,
        onClick: () => n(),
        "aria-label": d.intl.string(d.t.cpT0Cq),
        children: (0, r.jsx)(i.PGe, {
          size: "md",
          color: "currentColor",
          className: f.ut
        })
      })]
    })
  },
  m = e => {
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
      className: f.RP,
      children: (0, r.jsxs)(c.$K, {
        children: [(0, r.jsx)(c.KF, {
          application: a,
          asset: t
        }), (0, r.jsx)(c.kj, {
          children: o
        }), (0, r.jsx)(c.ri, {}), (0, r.jsx)(c.Mx, {
          title: s,
          description: l
        }), (0, r.jsx)(c.iH, {
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
    className: f.NV,
    children: [(0, r.jsx)("img", {
      src: p,
      alt: "",
      width: 300,
      height: 126
    }), (0, r.jsx)(i.Heading, {
      className: f.i1,
      variant: "heading-xl/extrabold",
      color: "text-strong",
      children: d.intl.format(d.t.wLFT6z, {
        tier: t
      })
    }), (0, r.jsx)(i.Text, {
      className: f.sT,
      variant: "text-md/medium",
      color: "text-default",
      children: d.intl.format(d.t.OsAK9h, {
        timestamp: null == a ? true : a.currentPeriodEnd
      })
    }), (0, r.jsx)(l.UX, {
      children: (0, r.jsx)(s.A, {
        onPrimary: n,
        primaryCTA: s.t.CONTINUE,
        primaryText: d.intl.string(d.t["JtWl+a"])
      })
    })]
  })
}