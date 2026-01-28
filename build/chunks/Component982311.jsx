/** Chunk was on 5606 **/
/** chunk id: 982311, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk416052 = require("./416052.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk915089 = require("./915089.js"),
  Chunk264779 = require("./264779.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk424019 = require("./424019.js");

function g(e) {
  let {
    onClose: t,
    transitionState: n
  } = e;
  return (0, r.jsx)(l.Modal, {
    title: "",
    size: "md",
    input: (0, r.jsx)("div", {
      className: m.aR
    }),
    onClose: async () => await t(),
    actions: [{
      text: _.intl.string(_.t.cpT0Cq),
      variant: "primary",
      onClick: t
    }],
    transitionState: n,
    children: (0, r.jsxs)("div", {
      className: m.t4,
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-xl/semibold",
        children: _.intl.string(_.t.iufib1)
      }), (0, r.jsx)(a.Text, {
        variant: "text-md/normal",
        className: m.G3,
        children: _.intl.string(_.t.eAn6z2)
      })]
    })
  })
}
let f = function(e) {
  let {
    onClose: t,
    onClaim: n,
    code: f,
    outboundPromotion: b,
    transitionState: h
  } = e, [A, E] = i.useState(null), x = (0, u.GV)(), {
    analyticsLocations: O
  } = (0, d.Ay)(c.A.USER_SETTINGS_GIFT_INVENTORY);
  return (i.useEffect(() => {
    null == f && (0, p.kd)({
      promotionId: b.id,
      analyticsLocations: O
    }).then(e => n(e)).catch(e => {
      var t;
      return E(null == e || null == (t = e.body) ? true : t.code)
    })
  }, [f, b.id, n, O]), null != A) ? (0, r.jsx)(g, {
    onClose: t,
    transitionState: h
  }) : null == f ? (0, r.jsx)(a.y$y, {
    className: m.Lq
  }) : (0, r.jsx)(l.Modal, {
    title: "",
    size: "md",
    onClose: async () => await t(),
    input: (0, r.jsxs)("div", {
      className: m.N1,
      children: [(0, r.jsx)("div", {
        className: m.Qw
      }), (0, r.jsx)(a.Heading, {
        variant: "heading-xl/semibold",
        children: _.intl.string(_.t["23BfZh"])
      }), (0, r.jsx)(a.Text, {
        variant: "text-md/normal",
        className: m.G3,
        children: b.outboundRedemptionModalBody
      })]
    }),
    actions: [{
      text: _.intl.string(_.t.TulDPl),
      variant: "secondary",
      onClick: async () => await t()
    }, {
      text: _.intl.string(_.t["+zx47d"]),
      variant: "primary",
      onClick: () => {
        let e = (0, p.kc)(f, b);
        window.open(e, "_blank")
      }
    }],
    transitionState: h,
    "aria-label": x,
    children: (0, r.jsxs)("div", {
      children: [(0, r.jsx)(a.cGx, {
        className: m.M5
      }), (0, r.jsx)(l.D0$, {
        label: _.intl.string(_.t.s9LFQh),
        helperText: _.intl.string(_.t["F+nFTZ"]),
        children: (0, r.jsx)(o.A, {
          value: f,
          buttonColor: s.$n.Colors.BRAND,
          buttonLook: s.$n.Looks.FILLED,
          delay: 1e3
        })
      })]
    })
  })
}