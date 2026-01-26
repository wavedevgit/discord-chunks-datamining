/** Chunk was on 39048 **/
/** chunk id: 4600, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => x
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk11351 = require("./11351.js"),
  Chunk306444 = require("./306444.jsx"),
  Chunk922975 = require("./922975.js"),
  Chunk389025 = require("./389025.js"),
  Chunk963175 = require("./963175.jsx"),
  Chunk600292 = require("./600292.jsx"),
  Chunk280433 = require("./280433.jsx"),
  Chunk179895 = require("./179895.jsx"),
  Chunk862651 = require("./862651.jsx"),
  Chunk585632 = require("./585632.jsx"),
  Chunk2242 = require("./2242.js"),
  Chunk985018 = require("./985018.jsx");

function x(e) {
  let {
    allSubscriptionListings: t
  } = e, {
    editStateId: n,
    guildId: x
  } = (0, a.O)(), [j, _] = o.lZ(n), [O, v] = o.$O(n), y = i.useMemo(() => t.filter(e => e.id !== n), [t, n]), {
    isFullServerGating: A
  } = (0, c.A)(x), E = (0, s.gN)();
  return (0, r.jsx)(d.A, {
    title: b.intl.string(b.t.YNw2Sm),
    description: b.intl.string(b.t.zMW5r0),
    children: (0, r.jsxs)(l.BJc, {
      gap: 24,
      children: [(0, r.jsxs)(l.D0$, {
        disabled: E,
        label: b.intl.string(b.t.DFlDaE),
        description: b.intl.string(b.t.kHalVA),
        children: [(0, r.jsx)(u.A, {
          channelBenefits: j,
          intangibleBenefits: O,
          subscriptionListings: y,
          onImport: function(e, t) {
            _(t => t.concat(e)), v(e => e.concat(t))
          }
        }), (0, r.jsx)(u.q, {
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
                ref_type: h.bN.CHANNEL
              }))]
            })
          },
          disabled: E
        })]
      }), (0, r.jsx)(l.D0$, {
        label: b.intl.string(b.t.S2kKzP),
        description: b.intl.string(b.t["5a4AxV"]),
        disabled: E,
        children: e => (0, r.jsxs)(r.Fragment, {
          children: [A && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(g.A, {
              "aria-labelledby": e.labelId,
              disabled: E
            }), (0, r.jsx)(l.hKd, {
              size: 8
            })]
          }), (0, r.jsx)(m.A, {})]
        })
      }), (0, r.jsx)(l.D0$, {
        label: b.intl.string(b.t.RdwKw7),
        description: b.intl.string(b.t.zAww7V),
        disabled: E,
        children: (0, r.jsx)(f.A, {})
      }), (0, r.jsx)(p.A, {})]
    })
  })
}