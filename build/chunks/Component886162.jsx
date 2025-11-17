/** Chunk was on 1272 **/
/** chunk id: 886162, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk990547 = require("./990547.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk232567 = require("./232567.js"),
  Chunk213609 = require("./213609.js"),
  Chunk313201 = require("./313201.js"),
  Chunk23434 = require("./23434.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk734305 = require("./734305.js");

function g(e) {
  let {
    transitionState: t
  } = e, g = (0, a.e7)([d.Z], () => d.Z.getAction()), [m, _] = i.useState(false), b = (0, u.Dt)();
  async function E() {
    return _(true), g === p.c2C.AGREEMENTS && _(await (0, o.Lr)()), null
  }
  return (0, c.Z)({
    type: l.ImpressionTypes.VIEW,
    name: l.ImpressionNames.USER_AGREEMENTS,
    properties: {
      required_action: g
    }
  }, {}, []), (0, r.jsxs)(s.Y0X, {
    "aria-labelledby": b,
    transitionState: t,
    parentComponent: "UserAgreementsModal",
    children: [(0, r.jsx)("div", {
      id: b
    }), (0, r.jsx)(s.xBx, {
      separator: false,
      children: (0, r.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        children: f.intl.string(f.t["7glvXu"])
      })
    }), (0, r.jsxs)(s.hzk, {
      children: [(0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        children: g === p.c2C.AGREEMENTS ? f.intl.format(f.t.CN0Hvb, {
          url: p.EYA.TERMS_SUMMARY
        }) : null
      }), (0, r.jsxs)("div", {
        className: h.container,
        children: [(0, r.jsxs)("ul", {
          className: h.links,
          children: [(0, r.jsx)("li", {
            children: f.intl.format(f.t.iw0hFi, {
              url: p.EYA.TERMS
            })
          }), (0, r.jsx)("li", {
            children: f.intl.format(f.t["36klnD"], {
              url: p.EYA.PAID_TERMS
            })
          }), (0, r.jsx)("li", {
            children: f.intl.format(f.t.TquFBF, {
              url: p.EYA.PRIVACY
            })
          }), (0, r.jsx)("li", {
            children: f.intl.format(f.t.ia96Tb, {
              url: p.EYA.GUIDELINES
            })
          })]
        }), (0, r.jsx)("img", {
          className: h.image,
          alt: "",
          src: n(146714)
        })]
      }), (0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        className: h.agreementDescription,
        children: f.intl.string(f.t["+USXQE"])
      })]
    }), (0, r.jsx)(s.mzw, {
      children: (0, r.jsx)(s.Button, {
        variant: "active",
        text: f.intl.string(f.t["+TBKL1"]),
        loading: m,
        onClick: E
      })
    })]
  })
}