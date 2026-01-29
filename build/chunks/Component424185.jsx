/** Chunk was on 62754 **/
/** chunk id: 424185, original params: i,t,e (module,exports,require) **/
require.d(exports, {
  default: () => x
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk587895 = require("./587895.js"),
  Chunk67480 = require("./67480.js"),
  Chunk733391 = require("./733391.js"),
  Chunk832163 = require("./832163.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk647933 = require("./647933.js");

function x(i) {
  var t;
  let {
    transitionState: e,
    onClose: x,
    onContinue: h,
    guildId: g,
    skuId: j
  } = i, b = (0, s.bG)([d.A], () => d.A.getSKUEligibility(j)), m = (0, s.bG)([c.A], () => c.A.get(j)), f = (0, s.bG)([a.A], () => a.A.getApplication(null == m ? true : m.applicationId));
  return n.useEffect(() => {
    (0, o.iR)(g, j, "SocialLayerStorefrontEligibilityCheckModal")
  }, [g, j]), n.useEffect(() => {
    null != b && "ineligible" !== b && "checking" !== b && h()
  }, [b, h]), (0, l.jsx)(r.dWK, {
    transitionState: e,
    onClose: x,
    size: "ineligible" === b ? "md" : "sm",
    children: "ineligible" === b ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(r.rQ0, {
        title: u.intl.string(u.t.cg0M2H)
      }), (0, l.jsx)(r.cwr, {
        children: (0, l.jsx)(r.EYj, {
          variant: "text-md/normal",
          color: "text-subtle",
          children: u.intl.format(u.t.uLjkVR, {
            applicationName: null != (t = null == f ? true : f.name) ? t : ""
          })
        })
      }), (0, l.jsx)(r.H7u, {
        actionsFullWidth: true,
        actions: [{
          variant: "primary",
          text: u.intl.string(u.t.cpT0Cq),
          onClick: x
        }]
      })]
    }) : (0, l.jsx)(r.cwr, {
      children: (0, l.jsxs)("div", {
        className: p.Q,
        children: [(0, l.jsx)(r.y$y, {}), (0, l.jsx)(r.EYj, {
          variant: "text-md/normal",
          color: "text-subtle",
          children: u.intl.string(u.t.pWxiLd)
        })]
      })
    })
  })
}