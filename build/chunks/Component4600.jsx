/** Chunk was on 47841 **/
/** chunk id: 4600, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => h
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

function h(e) {
  let {
    allSubscriptionListings: t
  } = e, {
    editStateId: n,
    guildId: h
  } = (0, a.O)(), [j, O] = c.lZ(n), [y, v] = c.$O(n), A = i.useMemo(() => t.filter(e => e.id !== n), [t, n]), {
    isFullServerGating: E
  } = (0, o.A)(h), N = (0, s.gN)();
  return (0, r.jsx)(d.A, {
    title: x.intl.string(x.t.YNw2Sm),
    description: x.intl.string(x.t.zMW5r0),
    children: (0, r.jsxs)(l.BJc, {
      gap: 24,
      children: [(0, r.jsxs)(l.D0$, {
        disabled: N,
        label: x.intl.string(x.t.DFlDaE),
        description: x.intl.string(x.t.kHalVA),
        children: [(0, r.jsx)(u.A, {
          channelBenefits: j,
          intangibleBenefits: y,
          subscriptionListings: A,
          onImport: function(e, t) {
            O(t => t.concat(e)), v(e => e.concat(t))
          }
        }), (0, r.jsx)(u.q, {
          guildId: h,
          onImport: function(e) {
            O(t => {
              let n = new Set(t.map(e => {
                let {
                  ref_id: t
                } = e;
                return t
              }));
              return [...t, ...e.filter(e => !n.has(e)).map(e => ({
                ref_id: e,
                ref_type: p.bN.CHANNEL
              }))]
            })
          },
          disabled: N
        })]
      }), (0, r.jsx)(l.D0$, {
        label: x.intl.string(x.t.S2kKzP),
        description: x.intl.string(x.t["5a4AxV"]),
        disabled: N,
        children: e => (0, r.jsxs)(r.Fragment, {
          children: [E && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(f.A, {
              "aria-labelledby": e.labelId,
              disabled: N
            }), (0, r.jsx)(l.hKd, {
              size: 8
            })]
          }), (0, r.jsx)(g.A, {})]
        })
      }), (0, r.jsx)(l.D0$, {
        label: x.intl.string(x.t.RdwKw7),
        description: x.intl.string(x.t.zAww7V),
        disabled: N,
        children: (0, r.jsx)(m.A, {})
      }), (0, r.jsx)(b.A, {})]
    })
  })
}