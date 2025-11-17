/** Chunk was on web.js **/
/** chunk id: 454982, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk484614 = require("./484614.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk518638 = require("./518638.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk849879 = require("./849879.js");

function _(e) {
  let {
    onClose: t,
    transitionState: n
  } = e, i = () => (0, r.jsxs)("div", {
    className: f.errorBody,
    children: [(0, r.jsx)(s.Heading, {
      variant: "heading-xl/semibold",
      children: d.intl.string(d.t.iufib1)
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      className: f.bodyText,
      children: d.intl.string(d.t.eAn6z2)
    })]
  });
  return (0, r.jsx)(a.Modal, {
    title: "",
    size: "md",
    input: (0, r.jsx)("div", {
      className: f.errorArt
    }),
    onClose: async () => await t(),
    actions: [{
      text: d.intl.string(d.t.cpT0Cq),
      variant: "primary",
      onClick: t
    }],
    transitionState: n,
    children: i()
  })
}
let p = function(e) {
  let {
    onClose: t,
    onClaim: n,
    code: p,
    outboundPromotion: h,
    transitionState: m
  } = e, [g, E] = i.useState(null), b = (0, c.Dt)();
  if (i.useEffect(() => {
      null == p && (0, u.A2)(h.id).then(e => n(e)).catch(e => {
        var t;
        return E(null == e || null == (t = e.body) ? true : t.code)
      })
    }, [p, h.id, n]), null != g) return (0, r.jsx)(_, {
    onClose: t,
    transitionState: m
  });
  if (null == p) return (0, r.jsx)(s.$jN, {
    className: f.loading
  });
  let y = () => (0, r.jsxs)("div", {
    className: f.headerContainer,
    children: [(0, r.jsx)("div", {
      className: f.art
    }), (0, r.jsx)(s.Heading, {
      variant: "heading-xl/semibold",
      children: d.intl.string(d.t["23BfZh"])
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      className: f.bodyText,
      children: h.outboundRedemptionModalBody
    })]
  });
  return (0, r.jsx)(a.Modal, {
    title: "",
    size: "md",
    onClose: async () => await t(),
    input: y(),
    actions: [{
      text: d.intl.string(d.t.TulDPl),
      variant: "secondary",
      onClick: async () => await t()
    }, {
      text: d.intl.string(d.t["+zx47d"]),
      variant: "primary",
      onClick: () => {
        let e = (0, u.BU)(p, h);
        window.open(e, "_blank")
      }
    }],
    transitionState: m,
    "aria-label": b,
    children: (0, r.jsxs)("div", {
      children: [(0, r.jsx)(s.izJ, {
        className: f.formDivider
      }), (0, r.jsx)(a.gNt, {
        label: d.intl.string(d.t.s9LFQh),
        helperText: d.intl.string(d.t["F+nFTZ"]),
        children: (0, r.jsx)(l.Z, {
          value: p,
          buttonColor: o.zx.Colors.BRAND,
          buttonLook: o.zx.Looks.FILLED,
          delay: 1e3
        })
      })]
    })
  })
}