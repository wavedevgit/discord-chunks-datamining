/** Chunk was on 50536 **/
/** chunk id: 886162, original params: t,i,e (module,exports,require) **/
require.d(exports, {
  default: () => h
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

function h(t) {
  let {
    transitionState: i
  } = t, h = (0, a.e7)([m.Z], () => m.Z.getAction()), [p, g] = r.useState(false), j = (0, d.Dt)();
  async function _() {
    return g(true), h === u.c2C.AGREEMENTS && g(await (0, c.Lr)()), null
  }
  return (0, o.Z)({
    type: s.ImpressionTypes.VIEW,
    name: s.ImpressionNames.USER_AGREEMENTS,
    properties: {
      required_action: h
    }
  }, {}, []), (0, n.jsxs)(l.Y0X, {
    "aria-labelledby": j,
    transitionState: i,
    parentComponent: "UserAgreementsModal",
    children: [(0, n.jsx)("div", {
      id: j
    }), (0, n.jsx)(l.xBx, {
      separator: false,
      children: (0, n.jsx)(l.Heading, {
        variant: "heading-lg/semibold",
        children: x.intl.string(x.t["7glvXu"])
      })
    }), (0, n.jsxs)(l.hzk, {
      children: [(0, n.jsx)(l.Text, {
        variant: "text-md/normal",
        children: h === u.c2C.AGREEMENTS ? x.intl.format(x.t.CN0Hvb, {
          url: u.EYA.TERMS_SUMMARY
        }) : null
      }), (0, n.jsxs)("div", {
        className: E.container,
        children: [(0, n.jsxs)("ul", {
          className: E.links,
          children: [(0, n.jsx)("li", {
            children: x.intl.format(x.t.iw0hFi, {
              url: u.EYA.TERMS
            })
          }), (0, n.jsx)("li", {
            children: x.intl.format(x.t["36klnD"], {
              url: u.EYA.PAID_TERMS
            })
          }), (0, n.jsx)("li", {
            children: x.intl.format(x.t.TquFBF, {
              url: u.EYA.PRIVACY
            })
          }), (0, n.jsx)("li", {
            children: x.intl.format(x.t.ia96Tb, {
              url: u.EYA.GUIDELINES
            })
          })]
        }), (0, n.jsx)("img", {
          className: E.image,
          alt: "",
          src: e(146714)
        })]
      }), (0, n.jsx)(l.Text, {
        variant: "text-md/normal",
        className: E.agreementDescription,
        children: x.intl.string(x.t["+USXQE"])
      })]
    }), (0, n.jsx)(l.mzw, {
      children: (0, n.jsx)(l.Button, {
        variant: "active",
        text: x.intl.string(x.t["+TBKL1"]),
        loading: p,
        onClick: _
      })
    })]
  })
}