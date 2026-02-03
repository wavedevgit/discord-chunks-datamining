/** Chunk was on 90228 **/
/** chunk id: 223352, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk92674 = require("./92674.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk341915 = require("./341915.js"),
  Chunk646764 = require("./646764.jsx"),
  Chunk398025 = require("./398025.js"),
  Chunk568329 = require("./568329.jsx"),
  Chunk963713 = require("./963713.jsx"),
  Chunk772244 = require("./772244.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk355862 = require("./355862.js");
let v = e => {
  let {
    isFullyExpanded: t,
    partnerBranding: n
  } = e, r = (0, g.qV)().label, v = (0, o.bG)([d.A], () => d.A.useReducedMotion), {
    quest: j
  } = l.useContext(x.T), {
    expansionSpring: _
  } = l.useContext(h.PW), y = r ? false : 6;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(s.animated.div, {
      className: b.tE,
      style: {
        transform: (0, s.to)([_.to({
          range: [0, 1],
          output: [0, 0]
        }), _.to({
          range: [0, 1],
          output: [0, 82]
        }), _.to({
          range: [0, 1],
          output: [1, 64 / 48]
        })], (e, t, n) => "translate(".concat(e, "px, ").concat(t, "px) scale(").concat(n, ")"))
      },
      children: (0, a.jsx)(m.A, {
        learnMoreStyle: "text",
        learnMoreFontSize: t ? 9 : true,
        quest: j,
        questContent: u.uF.QUEST_BAR_V2,
        autoplay: t && !v,
        sourceQuestContent: u.uF.QUEST_BAR_V2,
        style: {
          width: 48,
          height: 48,
          marginRight: 8,
          borderRadius: 6
        }
      })
    }), (0, a.jsxs)(s.animated.div, {
      className: i()(b.pm, {
        [b.nd]: r
      }),
      style: {
        transform: (0, s.to)([_.to({
          range: [0, 1],
          output: [0, false]
        }), _.to({
          range: [0, 1],
          output: [0, y]
        })], (e, t) => "translate(".concat(e, "px, ").concat(t, "px)"))
      },
      children: [(0, a.jsx)("div", {
        className: i()({
          [b.Iu]: !r
        }),
        children: n
      }), (0, a.jsx)(s.animated.div, {
        className: i()(b.ol, {
          [b.yZ]: r
        }),
        style: {
          opacity: (0, p.a)(_.to({
            range: [0, 1],
            output: [r ? 1 : .7, 0]
          }))
        },
        children: (0, a.jsx)(c.Text, {
          color: "always-white",
          lineClamp: 1,
          variant: "text-xs/medium",
          children: f.intl.string(f.t["3mgEQf"])
        })
      })]
    })]
  })
}