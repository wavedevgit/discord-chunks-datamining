/** Chunk was on 1272 **/
/** chunk id: 886162, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk990547 = require("./990547.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk232567 = require("./232567.js"),
  Chunk213609 = require("./213609.js"),
  Chunk313201 = require("./313201.js"),
  Chunk23434 = require("./23434.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk432637 = require("./432637.js");

function g(e) {
  let {
    transitionState: t
  } = e, g = (0, a.e7)([d.Z], () => d.Z.getAction()), [m, b] = i.useState(false), _ = (0, u.Dt)();
  async function O() {
    return b(true), g === p.c2C.AGREEMENTS && b(await (0, s.Lr)()), null
  }
  return (0, c.Z)({
    type: l.ImpressionTypes.VIEW,
    name: l.ImpressionNames.USER_AGREEMENTS,
    properties: {
      required_action: g
    }
  }, {}, []), (0, r.jsxs)(o.Y0X, {
    "aria-labelledby": _,
    transitionState: t,
    parentComponent: "UserAgreementsModal",
    children: [(0, r.jsx)("div", {
      id: _
    }), (0, r.jsx)(o.xBx, {
      separator: false,
      children: (0, r.jsx)(o.X6q, {
        variant: "heading-lg/semibold",
        children: f.intl.string(f.t["7glvXl"])
      })
    }), (0, r.jsxs)(o.hzk, {
      children: [(0, r.jsx)(o.Text, {
        variant: "text-md/normal",
        children: g === p.c2C.AGREEMENTS ? f.intl.format(f.t.zHolhY, {}) : null
      }), (0, r.jsxs)("div", {
        className: h.container,
        children: [(0, r.jsxs)("ul", {
          className: h.links,
          children: [(0, r.jsx)("li", {
            children: f.intl.format(f.t.iw0hFh, {
              url: p.EYA.TERMS
            })
          }), (0, r.jsx)("li", {
            children: f.intl.format(f.t["36klnJ"], {
              url: p.EYA.PAID_TERMS
            })
          }), (0, r.jsx)("li", {
            children: f.intl.format(f.t.TquFBA, {
              url: p.EYA.PRIVACY
            })
          }), (0, r.jsx)("li", {
            children: f.intl.format(f.t.ia96TU, {
              url: p.EYA.GUIDELINES
            })
          })]
        }), (0, r.jsx)("img", {
          className: h.image,
          alt: "",
          src: n(146714)
        })]
      }), (0, r.jsx)(o.Text, {
        variant: "text-md/normal",
        className: h.agreementDescription,
        children: f.intl.string(f.t["+USXQE"])
      })]
    }), (0, r.jsx)(o.mzw, {
      children: (0, r.jsx)(o.zxk, {
        variant: "active",
        text: f.intl.string(f.t["+TBKLy"]),
        loading: m,
        onClick: O
      })
    })]
  })
}