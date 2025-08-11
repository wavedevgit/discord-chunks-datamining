/** Chunk was on 22988 **/
/** chunk id: 500230, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk866442 = require("./866442.js"),
  Chunk481060 = require("./481060.js"),
  Chunk229190 = require("./229190.jsx"),
  Chunk510918 = require("./510918.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk131085 = require("./131085.js"),
  Chunk195196 = require("./195196.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk602268 = require("./602268.js");
let f = function(e) {
  let {
    className: t,
    guildId: n,
    badge: l,
    primaryColor: f,
    secondaryColor: b
  } = e, [x, j] = i.useState(false), v = i.useRef(null), _ = i.useMemo(() => m.Ek.every(e => e.primary !== f || e.secondary !== b), [f, b]);

  function O(e) {
    let t = {};
    true !== e.primary && (t.badgeColorPrimary = e.primary), true !== e.secondary && (t.badgeColorSecondary = e.secondary), u.Z.updateGuildProfile(n, t)
  }
  return (0, r.jsxs)("div", {
    className: t,
    children: [(0, r.jsx)(o.vwX, {
      className: h.sectionTitle,
      children: p.intl.string(g.default.zSbMdX)
    }), (0, r.jsxs)("div", {
      className: h.pickerGrid,
      children: [m.Ek.map(e => (0, r.jsx)(o.P3F, {
        className: a()(h.pickerItem, {
          [h.pickerItemSelected]: e.primary === f && e.secondary === b
        }),
        onClick: () => O(e),
        children: (0, r.jsx)(d.v, {
          badge: l,
          width: 32,
          height: 32,
          primaryTintColor: e.primary,
          secondaryTintColor: e.secondary
        })
      }, "".concat(e.primary).concat(e.secondary))), (0, r.jsx)(c.Z, {
        popoutTargetRef: v,
        showSecondaryColor: m.ER[l] >= 2,
        palette: {
          primary: f,
          secondary: b
        },
        onPrimaryColorChange: e => {
          O({
            primary: (0, s.Rf)(e)
          })
        },
        onSecondaryColorChange: e => {
          O({
            secondary: (0, s.Rf)(e)
          })
        },
        shouldShow: x,
        onRequestClose: () => j(false),
        children: e => {
          var t, n;
          return (0, r.jsx)(o.P3F, (t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                var r;
                r = n[t], t in e ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = r
              })
            }
            return e
          }({}, e), n = n = {
            innerRef: v,
            onClick: () => {
              j(e => !e)
            },
            className: a()(h.pickerItem, {
              [h.pickerItemSelected]: _
            }),
            children: (0, r.jsx)(o.ilE, {
              size: "custom",
              width: 20,
              height: 20
            })
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
          }), t))
        }
      })]
    })]
  })
}