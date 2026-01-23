/** Chunk was on 95095 **/
/** chunk id: 156189, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk321563 = require("./321563.jsx"),
  Chunk782997 = require("./782997.js"),
  Chunk652215 = require("./652215.js"),
  Chunk670455 = require("./670455.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let {
    onClose: t,
    transitionState: u
  } = e, [d, b] = c.useState(null);
  return (0, n.jsx)(i.aFV, {
    title: m.intl.string(m.t.BIbnR2),
    subtitle: m.intl.string(m.t.j2kf2m),
    onClose: t,
    actions: [],
    transitionState: u,
    children: (0, n.jsxs)(l.BJc, {
      gap: 16,
      children: [(0, n.jsx)(r.A, {
        ratingOptions: [_.P0.GOOD, _.P0.BAD],
        emojiKind: "thumb",
        selectedRating: d,
        onChangeRating: function(e) {
          b(e), null != e && ((0, s.A)({
            rating: e
          }), t(), (0, l.mMO)(async () => {
            let {
              default: e
            } = await a.e("37836").then(a.bind(a, 845671));
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
              body: m.intl.string(m.t.IuPjpE)
            }, t))
          }))
        }
      }), (0, n.jsx)(l.Text, {
        variant: "text-md/normal",
        children: m.intl.format(m.t.zru1K0, {
          safetyCenterUrl: o.X7G.SAFETY_CENTER
        })
      })]
    })
  })
}