/** Chunk was on 95095 **/
/** chunk id: 156189, original params: a,e,t (module,exports,require) **/
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

function u(a) {
  let {
    onClose: e,
    transitionState: u
  } = a, [b, m] = c.useState(null);
  return (0, n.jsx)(l.aFV, {
    title: o.intl.string(o.t.BIbnR2),
    subtitle: o.intl.string(o.t.j2kf2m),
    onClose: e,
    actions: [],
    transitionState: u,
    children: (0, n.jsxs)(i.BJc, {
      gap: 16,
      children: [(0, n.jsx)(r.A, {
        ratingOptions: [f.P0.GOOD, f.P0.BAD],
        emojiKind: "thumb",
        selectedRating: b,
        onChangeRating: function(a) {
          m(a), null != a && ((0, s.A)({
            rating: a
          }), e(), (0, i.mMO)(async () => {
            let {
              default: a
            } = await t.e("37836").then(t.bind(t, 845671));
            return e => (0, n.jsx)(a, function(a) {
              for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {},
                  n = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(a) {
                  return Object.getOwnPropertyDescriptor(t, a).enumerable
                }))), n.forEach(function(e) {
                  var n;
                  n = t[e], e in a ? Object.defineProperty(a, e, {
                    value: n,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  }) : a[e] = n
                })
              }
              return a
            }({
              body: o.intl.string(o.t.IuPjpE)
            }, e))
          }))
        }
      }), (0, n.jsx)(i.Text, {
        variant: "text-md/normal",
        children: o.intl.format(o.t.zru1K0, {
          safetyCenterUrl: d.X7G.SAFETY_CENTER
        })
      })]
    })
  })
}