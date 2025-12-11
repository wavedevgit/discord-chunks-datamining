/** Chunk was on 52432 **/
/** chunk id: 349994, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  default: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk764920 = require("./764920.jsx"),
  Chunk429506 = require("./429506.js"),
  Chunk981631 = require("./981631.js"),
  Chunk531578 = require("./531578.js"),
  Chunk388032 = require("./388032.jsx");

function m(e) {
  let {
    onClose: a,
    transitionState: m
  } = e, [u, j] = n.useState(null);
  return (0, c.jsx)(i.u_l, {
    title: b.intl.string(b.t.BIbnR2),
    subtitle: b.intl.string(b.t.j2kf2m),
    onClose: a,
    actions: [],
    transitionState: m,
    children: (0, c.jsxs)(l.Kqy, {
      gap: 16,
      children: [(0, c.jsx)(d.Z, {
        ratingOptions: [s.aZ.GOOD, s.aZ.BAD],
        emojiKind: "thumb",
        selectedRating: u,
        onChangeRating: function(e) {
          j(e), null != e && ((0, o.Z)({
            rating: e
          }), a(), (0, l.ZDy)(async () => {
            let {
              default: e
            } = await t.e("14466").then(t.bind(t, 729328));
            return a => (0, c.jsx)(e, function(e) {
              for (var a = 1; a < arguments.length; a++) {
                var t = null != arguments[a] ? arguments[a] : {},
                  c = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols && (c = c.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), c.forEach(function(a) {
                  var c;
                  c = t[a], a in e ? Object.defineProperty(e, a, {
                    value: c,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  }) : e[a] = c
                })
              }
              return e
            }({
              body: b.intl.string(b.t.IuPjpE)
            }, a))
          }))
        }
      }), (0, c.jsx)(l.Text, {
        variant: "text-md/normal",
        children: b.intl.format(b.t.zru1K0, {
          safetyCenterUrl: r.EYA.SAFETY_CENTER
        })
      })]
    })
  })
}