/** Chunk was on web.js **/
/** chunk id: 454982, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk484614 = require("./484614.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk518638 = require("./518638.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk849879 = require("./849879.js");

function f(e) {
  let {
    onClose: t
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(o.xBx, {
      separator: false,
      className: d.errorHeader,
      children: [(0, r.jsx)("div", {
        className: d.errorArt
      }), (0, r.jsx)(o.X6q, {
        variant: "heading-xl/semibold",
        children: u.intl.string(u.t.iufib2)
      })]
    }), (0, r.jsx)(o.hzk, {
      className: d.errorBody,
      children: (0, r.jsx)(o.Text, {
        variant: "text-md/normal",
        className: d.bodyText,
        children: u.intl.string(u.t.eAn6z8)
      })
    }), (0, r.jsx)(o.mzw, {
      children: (0, r.jsx)(o.zxk, {
        variant: "primary",
        text: u.intl.string(u.t.cpT0Cg),
        onClick: t
      })
    })]
  })
}
let _ = function(e) {
  let {
    onClose: t,
    onClaim: n,
    code: _,
    outboundPromotion: p,
    transitionState: h
  } = e, [m, g] = i.useState(null), E = (0, l.Dt)();
  i.useEffect(() => {
    null == _ && (0, c.A2)(p.id).then(e => n(e)).catch(e => {
      var t;
      return g(null == e || null == (t = e.body) ? true : t.code)
    })
  }, [_, p.id, n]);
  let b = () => null != m ? (0, r.jsx)(f, {
    onClose: t
  }) : null == _ ? (0, r.jsx)(o.hzk, {
    children: (0, r.jsx)(o.$jN, {
      className: d.loading
    })
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(o.xBx, {
      separator: false,
      className: d.headerContainer,
      children: [(0, r.jsx)("div", {
        className: d.art
      }), (0, r.jsx)(o.X6q, {
        variant: "heading-xl/semibold",
        children: u.intl.string(u.t["23BfZm"])
      })]
    }), (0, r.jsxs)(o.hzk, {
      children: [(0, r.jsx)(o.Text, {
        variant: "text-md/normal",
        className: d.bodyText,
        children: p.outboundRedemptionModalBody
      }), (0, r.jsx)(o.$i$, {
        className: d.formDivider
      }), (0, r.jsxs)(o.hjN, {
        title: u.intl.string(u.t.s9LFQk),
        className: d.formSection,
        children: [(0, r.jsx)(s.Z, {
          value: _,
          buttonColor: a.zx.Colors.BRAND,
          buttonLook: a.zx.Looks.FILLED,
          delay: 1e3
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: d.confirmationText,
          children: u.intl.string(u.t["F+nFTU"])
        })]
      })]
    }), (0, r.jsxs)(o.mzw, {
      children: [(0, r.jsx)(o.zxk, {
        variant: "primary",
        text: u.intl.string(u.t["+zx47e"]),
        onClick: () => {
          let e = (0, c.BU)(_, p);
          window.open(e, "_blank")
        }
      }), (0, r.jsx)(a.zx, {
        onClick: t,
        look: a.zx.Looks.LINK,
        color: d.maybeLaterButton,
        children: u.intl.string(u.t.TulDPj)
      })]
    })]
  });
  return (0, r.jsx)(o.Y0X, {
    transitionState: h,
    "aria-labelledby": E,
    parentComponent: "OutboundPromotionRedemptionModal",
    children: b()
  })
}