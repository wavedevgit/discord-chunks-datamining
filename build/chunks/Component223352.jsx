/** Chunk was on 22477 **/
/** chunk id: 223352, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk432022 = require("./432022.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk341915 = require("./341915.js"),
  Chunk646764 = require("./646764.jsx"),
  Chunk568329 = require("./568329.jsx"),
  Chunk963713 = require("./963713.jsx"),
  Chunk772244 = require("./772244.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk355862 = require("./355862.js");
let g = e => {
  let {
    isFullyExpanded: t,
    partnerBranding: n
  } = e, i = (0, f.qV)().label, g = (0, o.bG)([d.A], () => d.A.useReducedMotion), {
    quest: v
  } = l.useContext(h.T), {
    expansionSpring: j
  } = l.useContext(p.PW), y = i ? false : 6;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(s.animated.div, {
      className: b.tE,
      style: {
        transform: (0, s.to)([j.to({
          range: [0, 1],
          output: [0, 0]
        }), j.to({
          range: [0, 1],
          output: [0, 82]
        }), j.to({
          range: [0, 1],
          output: [1, 64 / 48]
        })], (e, t, n) => "translate(".concat(e, "px, ").concat(t, "px) scale(").concat(n, ")"))
      },
      children: (0, a.jsx)(m.A, {
        learnMoreStyle: "text",
        learnMoreFontSize: t ? 9 : true,
        quest: v,
        questContent: u.uF.QUEST_BAR_V2,
        autoplay: t && !g,
        sourceQuestContent: u.uF.QUEST_BAR_V2,
        style: {
          width: 48,
          height: 48,
          marginRight: 8,
          borderRadius: 6
        }
      })
    }), (0, a.jsxs)(s.animated.div, {
      className: r()(b.pm, {
        [b.nd]: i
      }),
      style: {
        transform: (0, s.to)([j.to({
          range: [0, 1],
          output: [0, false]
        }), j.to({
          range: [0, 1],
          output: [0, y]
        })], (e, t) => "translate(".concat(e, "px, ").concat(t, "px)"))
      },
      children: [(0, a.jsx)("div", {
        className: r()({
          [b.Iu]: !i
        }),
        children: n
      }), (0, a.jsx)(s.animated.div, {
        className: r()(b.ol, {
          [b.yZ]: i
        }),
        style: {
          opacity: j.to({
            range: [0, 1],
            output: [i ? 1 : .7, 0]
          })
        },
        children: (0, a.jsx)(c.Text, {
          color: "always-white",
          lineClamp: 1,
          variant: "text-xs/medium",
          children: x.intl.string(x.t["3mgEQf"])
        })
      })]
    })]
  })
}