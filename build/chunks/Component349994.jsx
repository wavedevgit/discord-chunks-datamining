/** Chunk was on 52432 **/
/** chunk id: 349994, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => b
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

function b(e) {
  let {
    onClose: t,
    transitionState: b
  } = e, [_, d] = c.useState(null);
  return (0, n.jsx)(i.u_l, {
    title: u.intl.string(u.t.BIbnR2),
    subtitle: u.intl.string(u.t.j2kf2m),
    onClose: t,
    actions: [],
    transitionState: b,
    children: (0, n.jsxs)(l.Kqy, {
      gap: 16,
      children: [(0, n.jsx)(o.Z, {
        ratingOptions: [m.aZ.GOOD, m.aZ.BAD],
        emojiKind: "thumb",
        selectedRating: _,
        onChangeRating: function(e) {
          d(e), null != e && ((0, r.Z)({
            rating: e
          }), t(), (0, l.ZDy)(async () => {
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
              body: u.intl.string(u.t.IuPjpE)
            }, t))
          }))
        }
      }), (0, n.jsx)(l.Text, {
        variant: "text-md/normal",
        children: u.intl.format(u.t.zru1K0, {
          safetyCenterUrl: s.EYA.SAFETY_CENTER
        })
      })]
    })
  })
}