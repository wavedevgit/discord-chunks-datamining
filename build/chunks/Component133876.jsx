/** Chunk was on 50536 **/
/** chunk id: 133876, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk990547 = require("./990547.js"),
  Chunk793030 = require("./793030.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk232567 = require("./232567.js"),
  Chunk213609 = require("./213609.js"),
  Chunk23434 = require("./23434.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk597667 = require("./597667.js"),
  Chunk602042 = require("./602042.js");

function f(t) {
  let {
    text: i
  } = t;
  return (0, e.jsxs)("li", {
    className: p.link,
    children: [i, " ", (0, e.jsx)(l.Gr1, {
      size: "sm",
      color: "currentColor"
    })]
  })
}

function j(t) {
  let {
    transitionState: i
  } = t, n = (0, a.e7)([u.Z], () => u.Z.getAction()), [l, j] = s.useState(false);
  async function h() {
    return j(true), n === x.c2C.AGREEMENTS && j(await (0, o.Lr)()), null
  }
  return (0, d.Z)({
    type: r.ImpressionTypes.VIEW,
    name: r.ImpressionNames.USER_AGREEMENTS,
    properties: {
      required_action: n
    }
  }, {}, []), (0, e.jsx)(c.Ioy, {
    graphic: {
      src: m.Z,
      type: "image"
    },
    gradientColor: "blue",
    dismissable: false,
    title: E.intl.string(E.t["7glvXu"]),
    subtitle: E.intl.string(E.t["+USXQE"]),
    actions: [{
      variant: "primary",
      text: E.intl.string(E.t["+TBKL1"]),
      onClick: h,
      loading: l
    }],
    transitionState: i,
    onClose: x.Cyb,
    children: (0, e.jsxs)(c.Kqy, {
      gap: 20,
      children: [n === x.c2C.AGREEMENTS ? (0, e.jsx)(c.Text, {
        variant: "text-md/normal",
        className: p.description,
        children: E.intl.format(E.t.CN0Hvb, {
          url: x.EYA.TERMS_SUMMARY
        })
      }) : null, (0, e.jsx)("div", {
        className: p.container,
        children: (0, e.jsxs)("ul", {
          className: p.links,
          children: [(0, e.jsx)(f, {
            text: E.intl.format(E.t.iw0hFi, {
              url: x.EYA.TERMS
            })
          }), (0, e.jsx)(c.izJ, {}), (0, e.jsx)(f, {
            text: E.intl.format(E.t["36klnD"], {
              url: x.EYA.PAID_TERMS
            })
          }), (0, e.jsx)(c.izJ, {}), (0, e.jsx)(f, {
            text: E.intl.format(E.t.TquFBF, {
              url: x.EYA.PRIVACY
            })
          }), (0, e.jsx)(c.izJ, {}), (0, e.jsx)(f, {
            text: E.intl.format(E.t.ia96Tb, {
              url: x.EYA.GUIDELINES
            })
          })]
        })
      })]
    })
  })
}