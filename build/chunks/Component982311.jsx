/** Chunk was on 78376 **/
/** chunk id: 982311, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
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
      text: p.intl.string(p.t.cpT0Cq),
      variant: "primary",
      onClick: t
    }],
    transitionState: n,
    children: (0, r.jsxs)("div", {
      className: m.t4,
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-xl/semibold",
        children: p.intl.string(p.t.iufib1)
      }), (0, r.jsx)(a.Text, {
        variant: "text-md/normal",
        className: m.G3,
        children: p.intl.string(p.t.eAn6z2)
      })]
    })
  })
}
let A = function(e) {
  let {
    onClose: t,
    onClaim: n,
    code: A,
    outboundPromotion: f,
    transitionState: b
  } = e, [h, E] = i.useState(null), O = (0, u.GV)(), {
    analyticsLocations: C
  } = (0, d.Ay)(c.A.USER_SETTINGS_GIFT_INVENTORY);
  return (i.useEffect(() => {
    null == A && (0, _.kd)({
      promotionId: f.id,
      analyticsLocations: C
    }).then(e => n(e)).catch(e => {
      var t;
      return E(null == e || null == (t = e.body) ? true : t.code)
    })
  }, [A, f.id, n, C]), null != h) ? (0, r.jsx)(g, {
    onClose: t,
    transitionState: b
  }) : null == A ? (0, r.jsx)(a.y$y, {
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
        children: p.intl.string(p.t["23BfZh"])
      }), (0, r.jsx)(a.Text, {
        variant: "text-md/normal",
        className: m.G3,
        children: f.outboundRedemptionModalBody
      })]
    }),
    actions: [{
      text: p.intl.string(p.t.TulDPl),
      variant: "secondary",
      onClick: async () => await t()
    }, {
      text: p.intl.string(p.t["+zx47d"]),
      variant: "primary",
      onClick: () => {
        let e = (0, _.kc)(A, f);
        window.open(e, "_blank")
      }
    }],
    transitionState: b,
    "aria-label": O,
    children: (0, r.jsxs)("div", {
      children: [(0, r.jsx)(a.cGx, {
        className: m.M5
      }), (0, r.jsx)(l.D0$, {
        label: p.intl.string(p.t.s9LFQh),
        helperText: p.intl.string(p.t["F+nFTZ"]),
        children: (0, r.jsx)(o.A, {
          value: A,
          buttonColor: s.$n.Colors.BRAND,
          buttonLook: s.$n.Looks.FILLED,
          delay: 1e3
        })
      })]
    })
  })
}