/** Chunk was on 22220 **/
/** chunk id: 639719, original params: t,s,e (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk110259 = require("./110259.js"),
  Chunk158954 = require("./158954.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk803306 = require("./803306.js"),
  Chunk139286 = require("./139286.js"),
  Chunk870570 = require("./870570.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk665763 = require("./665763.js"),
  Chunk546 = require("./546.js");

function h(t) {
  let {
    text: s
  } = t;
  return (0, i.jsxs)("li", {
    className: p.nf,
    children: [s, " ", (0, i.jsx)(a.I9m, {
      size: "sm",
      color: "currentColor"
    })]
  })
}

function j(t) {
  let {
    transitionState: s
  } = t, e = (0, l.bG)([x.A], () => x.A.getAction()), [a, j] = n.useState(false);
  async function b() {
    return j(true), e === d.a3B.AGREEMENTS && j(await (0, o.Q9)()), null
  }
  return (0, u.A)({
    type: r.ImpressionTypes.VIEW,
    name: r.ImpressionNames.USER_AGREEMENTS,
    properties: {
      required_action: e
    }
  }, {}, []), (0, i.jsx)(c.kpP, {
    graphic: {
      src: E.A,
      type: "image"
    },
    gradientColor: "blue",
    dismissable: false,
    title: m.intl.string(m.t["7glvXu"]),
    subtitle: m.intl.string(m.t["+USXQE"]),
    actions: [{
      variant: "primary",
      text: m.intl.string(m.t["+TBKL1"]),
      onClick: b,
      loading: a
    }],
    transitionState: s,
    onClose: d.js$,
    children: (0, i.jsxs)(c.BJc, {
      gap: 20,
      children: [e === d.a3B.AGREEMENTS ? (0, i.jsx)(c.Text, {
        variant: "text-md/normal",
        className: p.h_,
        children: m.intl.format(m.t.CN0Hvb, {
          url: d.X7G.TERMS_SUMMARY
        })
      }) : null, (0, i.jsx)("div", {
        className: p.kL,
        children: (0, i.jsxs)("ul", {
          className: p.yJ,
          children: [(0, i.jsx)(h, {
            text: m.intl.format(m.t.iw0hFi, {
              url: d.X7G.TERMS
            })
          }), (0, i.jsx)(c.cGx, {}), (0, i.jsx)(h, {
            text: m.intl.format(m.t["36klnD"], {
              url: d.X7G.PAID_TERMS
            })
          }), (0, i.jsx)(c.cGx, {}), (0, i.jsx)(h, {
            text: m.intl.format(m.t.TquFBF, {
              url: d.X7G.PRIVACY
            })
          }), (0, i.jsx)(c.cGx, {}), (0, i.jsx)(h, {
            text: m.intl.format(m.t.ia96Tb, {
              url: d.X7G.GUIDELINES
            })
          })]
        })
      })]
    })
  })
}