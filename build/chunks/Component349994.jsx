/** Chunk was on 52432 **/
/** chunk id: 349994, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => _
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk764920 = require("./764920.jsx"),
  Chunk429506 = require("./429506.js"),
  Chunk981631 = require("./981631.js"),
  Chunk531578 = require("./531578.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk484201 = require("./484201.js");

function _(e) {
  let [t, _] = i.useState(null), b = (0, o.Dt)();
  return (0, n.jsxs)(s.Y0X, {
    transitionState: e.transitionState,
    "aria-labelledby": b,
    parentComponent: "SafetyUserSentimentFeedbackModal",
    children: [(0, n.jsxs)(s.xBx, {
      separator: false,
      className: u.headerContainer,
      children: [(0, n.jsx)(s.X6q, {
        id: b,
        variant: "heading-xl/extrabold",
        color: "none",
        children: m.intl.string(m.t.BIbnR0)
      }), (0, n.jsx)(s.Text, {
        variant: "text-md/normal",
        className: u.ratingBody,
        children: m.intl.string(m.t.j2kf2t)
      })]
    }), (0, n.jsx)(s.hzk, {
      className: u.modalBody,
      children: (0, n.jsx)(c.Z, {
        ratingOptions: [d.aZ.GOOD, d.aZ.BAD],
        emojiKind: "thumb",
        selectedRating: t,
        onChangeRating: function(t) {
          _(t), null != t && ((0, r.Z)({
            rating: t
          }), e.onClose(), (0, s.ZDy)(async () => {
            let {
              default: e
            } = await a.e("14466").then(a.bind(a, 729328));
            return t => (0, n.jsx)(e, function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {},
                  n = Object.keys(a);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(a, e).enumerable
                }))), n.forEach(function(t) {
                  var n;
                  n = a[t], t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  }) : e[t] = n
                })
              }
              return e
            }({
              body: m.intl.string(m.t.IuPjpK)
            }, t))
          }))
        }
      })
    }), (0, n.jsx)(s.mzw, {
      className: u.ratingsFooter,
      children: (0, n.jsx)(s.Text, {
        variant: "text-md/normal",
        children: m.intl.format(m.t.zru1Ky, {
          safetyCenterUrl: l.EYA.SAFETY_CENTER
        })
      })
    })]
  })
}