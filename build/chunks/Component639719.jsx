/** Chunk was on 22220 **/
/** chunk id: 639719, original params: t,i,s (module,exports,require) **/
require.d(exports, {
  default: () => h
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

function _(t) {
  let {
    text: i
  } = t;
  return (0, n.jsxs)("li", {
    className: d.nf,
    children: [i, " ", (0, n.jsx)(l.I9m, {
      size: "sm",
      color: "currentColor"
    })]
  })
}

function h(t) {
  let {
    transitionState: i
  } = t, s = (0, a.bG)([x.A], () => x.A.getAction()), [l, h] = e.useState(false);
  async function j() {
    return h(true), s === m.a3B.AGREEMENTS && h(await (0, o.Q9)()), null
  }
  return (0, u.A)({
    type: r.ImpressionTypes.VIEW,
    name: r.ImpressionNames.USER_AGREEMENTS,
    properties: {
      required_action: s
    }
  }, {}, []), (0, n.jsx)(c.kpP, {
    graphic: {
      src: E.A,
      type: "image"
    },
    gradientColor: "blue",
    dismissable: false,
    title: p.intl.string(p.t["7glvXu"]),
    subtitle: p.intl.string(p.t["+USXQE"]),
    actions: [{
      variant: "primary",
      text: p.intl.string(p.t["+TBKL1"]),
      onClick: j,
      loading: l
    }],
    transitionState: i,
    onClose: m.js$,
    children: (0, n.jsxs)(c.BJc, {
      gap: 20,
      children: [s === m.a3B.AGREEMENTS ? (0, n.jsx)(c.Text, {
        variant: "text-md/normal",
        className: d.h_,
        children: p.intl.format(p.t.CN0Hvb, {
          url: m.X7G.TERMS_SUMMARY
        })
      }) : null, (0, n.jsx)("div", {
        className: d.kL,
        children: (0, n.jsxs)("ul", {
          className: d.yJ,
          children: [(0, n.jsx)(_, {
            text: p.intl.format(p.t.iw0hFi, {
              url: m.X7G.TERMS
            })
          }), (0, n.jsx)(c.cGx, {}), (0, n.jsx)(_, {
            text: p.intl.format(p.t["36klnD"], {
              url: m.X7G.PAID_TERMS
            })
          }), (0, n.jsx)(c.cGx, {}), (0, n.jsx)(_, {
            text: p.intl.format(p.t.TquFBF, {
              url: m.X7G.PRIVACY
            })
          }), (0, n.jsx)(c.cGx, {}), (0, n.jsx)(_, {
            text: p.intl.format(p.t.ia96Tb, {
              url: m.X7G.GUIDELINES
            })
          })]
        })
      })]
    })
  })
}