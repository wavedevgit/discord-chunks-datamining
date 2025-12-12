/** Chunk was on 50536 **/
/** chunk id: 886162, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => _
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
  Chunk734305 = require("./734305.js"),
  Chunk98201 = require("./98201.js");

function j(t) {
  let {
    text: i
  } = t;
  return (0, s.jsxs)("li", {
    className: p.link,
    children: [i, " ", (0, s.jsx)(l.Gr1, {
      size: "sm",
      color: "currentColor"
    })]
  })
}

function _(t) {
  let {
    transitionState: i
  } = t, n = (0, a.e7)([x.Z], () => x.Z.getAction()), [l, _] = e.useState(false);
  async function h() {
    return _(true), n === E.c2C.AGREEMENTS && _(await (0, o.Lr)()), null
  }
  return (0, u.Z)({
    type: r.ImpressionTypes.VIEW,
    name: r.ImpressionNames.USER_AGREEMENTS,
    properties: {
      required_action: n
    }
  }, {}, []), (0, s.jsx)(c.Ioy, {
    graphic: {
      src: m.Z,
      type: "image"
    },
    gradientColor: "blue",
    dismissable: false,
    title: d.intl.string(d.t["7glvXu"]),
    subtitle: d.intl.string(d.t["+USXQE"]),
    actions: [{
      variant: "primary",
      text: d.intl.string(d.t["+TBKL1"]),
      onClick: h,
      loading: l
    }],
    transitionState: i,
    onClose: E.Cyb,
    children: (0, s.jsxs)(c.Kqy, {
      gap: 20,
      children: [n === E.c2C.AGREEMENTS ? (0, s.jsx)(c.Text, {
        variant: "text-md/normal",
        className: p.description,
        children: d.intl.format(d.t.CN0Hvb, {
          url: E.EYA.TERMS_SUMMARY
        })
      }) : null, (0, s.jsx)("div", {
        className: p.container,
        children: (0, s.jsxs)("ul", {
          className: p.links,
          children: [(0, s.jsx)(j, {
            text: d.intl.format(d.t.iw0hFi, {
              url: E.EYA.TERMS
            })
          }), (0, s.jsx)(c.izJ, {}), (0, s.jsx)(j, {
            text: d.intl.format(d.t["36klnD"], {
              url: E.EYA.PAID_TERMS
            })
          }), (0, s.jsx)(c.izJ, {}), (0, s.jsx)(j, {
            text: d.intl.format(d.t.TquFBF, {
              url: E.EYA.PRIVACY
            })
          }), (0, s.jsx)(c.izJ, {}), (0, s.jsx)(j, {
            text: d.intl.format(d.t.ia96Tb, {
              url: E.EYA.GUIDELINES
            })
          })]
        })
      })]
    })
  })
}