/** Chunk was on 52432 **/
/** chunk id: 349994, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  default: () => u
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk764920 = require("./764920.jsx"),
  Chunk429506 = require("./429506.js"),
  Chunk981631 = require("./981631.js"),
  Chunk531578 = require("./531578.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk780494 = require("./780494.js");

function u(e) {
  let [a, u] = i.useState(null), b = (0, r.Dt)();
  return (0, n.jsxs)(o.Y0X, {
    transitionState: e.transitionState,
    "aria-labelledby": b,
    parentComponent: "SafetyUserSentimentFeedbackModal",
    children: [(0, n.jsxs)(o.xBx, {
      separator: false,
      className: _.headerContainer,
      children: [(0, n.jsx)(o.Heading, {
        id: b,
        variant: "heading-xl/extrabold",
        color: "none",
        children: m.intl.string(m.t.BIbnR2)
      }), (0, n.jsx)(o.Text, {
        variant: "text-md/normal",
        className: _.ratingBody,
        children: m.intl.string(m.t.j2kf2m)
      })]
    }), (0, n.jsx)(o.hzk, {
      className: _.modalBody,
      children: (0, n.jsx)(c.Z, {
        ratingOptions: [d.aZ.GOOD, d.aZ.BAD],
        emojiKind: "thumb",
        selectedRating: a,
        onChangeRating: function(a) {
          u(a), null != a && ((0, l.Z)({
            rating: a
          }), e.onClose(), (0, o.ZDy)(async () => {
            let {
              default: e
            } = await t.e("14466").then(t.bind(t, 729328));
            return a => (0, n.jsx)(e, function(e) {
              for (var a = 1; a < arguments.length; a++) {
                var t = null != arguments[a] ? arguments[a] : {},
                  n = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.forEach(function(a) {
                  var n;
                  n = t[a], a in e ? Object.defineProperty(e, a, {
                    value: n,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  }) : e[a] = n
                })
              }
              return e
            }({
              body: m.intl.string(m.t.IuPjpE)
            }, a))
          }))
        }
      })
    }), (0, n.jsx)(o.mzw, {
      className: _.ratingsFooter,
      children: (0, n.jsx)(o.Text, {
        variant: "text-md/normal",
        children: m.intl.format(m.t.zru1K0, {
          safetyCenterUrl: s.EYA.SAFETY_CENTER
        })
      })
    })]
  })
}