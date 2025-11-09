/** Chunk was on 29679 **/
/** chunk id: 516448, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk723047 = require("./723047.js"),
  Chunk727843 = require("./727843.jsx"),
  Chunk290348 = require("./290348.js"),
  Chunk164000 = require("./164000.js"),
  Chunk783454 = require("./783454.jsx"),
  Chunk862319 = require("./862319.jsx"),
  Chunk140285 = require("./140285.jsx"),
  Chunk390583 = require("./390583.jsx"),
  Chunk641249 = require("./641249.jsx"),
  Chunk574085 = require("./574085.jsx"),
  Chunk293810 = require("./293810.js"),
  Chunk388032 = require("./388032.jsx");

function x(e) {
  let {
    allSubscriptionListings: t
  } = e, {
    editStateId: n,
    guildId: x
  } = (0, s.N)(), [j, _] = o.UE(n), [v, O] = o.R7(n), C = i.useMemo(() => t.filter(e => e.id !== n), [t, n]), {
    isFullServerGating: y
  } = (0, c.Z)(x), N = (0, a.mY)();
  return (0, r.jsx)(d.Z, {
    title: b.intl.string(b.t.YNw2Sm),
    description: b.intl.string(b.t.zMW5r0),
    children: (0, r.jsxs)(l.Kqy, {
      gap: 24,
      children: [(0, r.jsxs)(l.gNt, {
        disabled: N,
        label: b.intl.string(b.t.DFlDaE),
        description: b.intl.string(b.t.kHalVA),
        children: [(0, r.jsx)(u.Z, {
          channelBenefits: j,
          intangibleBenefits: v,
          subscriptionListings: C,
          onImport: function(e, t) {
            _(t => t.concat(e)), O(e => e.concat(t))
          }
        }), (0, r.jsx)(u.w, {
          guildId: x,
          onImport: function(e) {
            _(t => {
              let n = new Set(t.map(e => {
                let {
                  ref_id: t
                } = e;
                return t
              }));
              return [...t, ...e.filter(e => !n.has(e)).map(e => ({
                ref_id: e,
                ref_type: h.Qs.CHANNEL
              }))]
            })
          },
          disabled: N
        })]
      }), (0, r.jsx)(l.gNt, {
        label: b.intl.string(b.t.S2kKzP),
        description: b.intl.string(b.t["5a4AxV"]),
        disabled: N,
        children: e => (0, r.jsxs)(r.Fragment, {
          children: [y && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(g.Z, {
              "aria-labelledby": e.labelId,
              disabled: N
            }), (0, r.jsx)(l.LZC, {
              size: 8
            })]
          }), (0, r.jsx)(m.Z, {})]
        })
      }), (0, r.jsx)(l.gNt, {
        label: b.intl.string(b.t.RdwKw7),
        description: b.intl.string(b.t.zAww7V),
        disabled: N,
        children: (0, r.jsx)(f.Z, {})
      }), (0, r.jsx)(p.Z, {})]
    })
  })
}