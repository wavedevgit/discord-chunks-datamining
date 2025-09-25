/** Chunk was on 64523 **/
/** chunk id: 516448, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
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
  Chunk388032 = require("./388032.jsx"),
  Chunk605041 = require("./605041.js");

function v(e) {
  let {
    allSubscriptionListings: t
  } = e, {
    editStateId: n,
    guildId: v
  } = (0, o.N)(), [_, O] = c.UE(n), [y, C] = c.R7(n), N = i.useMemo(() => t.filter(e => e.id !== n), [t, n]), {
    isFullServerGating: E
  } = (0, d.Z)(v), I = (0, s.Dt)(), S = (0, a.mY)();
  return (0, r.jsxs)(u.Z, {
    title: b.intl.string(b.t.YNw2Sk),
    description: b.intl.string(b.t.zMW5r6),
    children: [(0, r.jsxs)(l.hjN, {
      title: b.intl.string(b.t.DFlDaG),
      disabled: S,
      children: [(0, r.jsx)(l.R94, {
        type: l.R94.Types.DESCRIPTION,
        className: j.formDescription,
        disabled: S,
        children: b.intl.string(b.t.kHalVF)
      }), (0, r.jsx)(m.Z, {
        channelBenefits: _,
        intangibleBenefits: y,
        subscriptionListings: N,
        onImport: function(e, t) {
          O(t => t.concat(e)), C(e => e.concat(t))
        }
      }), (0, r.jsx)(l.LZC, {
        size: 8
      }), (0, r.jsx)(m.w, {
        guildId: v,
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
              ref_type: x.Qs.CHANNEL
            }))]
          })
        },
        disabled: S
      })]
    }), (0, r.jsx)(l.LZC, {
      size: 24
    }), (0, r.jsxs)(l.hjN, {
      title: b.intl.string(b.t.S2kKzM),
      titleId: I,
      disabled: S,
      children: [(0, r.jsx)(l.R94, {
        type: l.R94.Types.DESCRIPTION,
        className: j.formDescription,
        disabled: S,
        children: b.intl.string(b.t["5a4Axc"])
      }), E && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(g.Z, {
          "aria-labelledby": I,
          disabled: S
        }), (0, r.jsx)(l.LZC, {
          size: 8
        })]
      }), (0, r.jsx)(p.Z, {})]
    }), (0, r.jsx)(l.LZC, {
      size: 24
    }), (0, r.jsxs)(l.hjN, {
      title: b.intl.string(b.t.RdwKw8),
      disabled: S,
      children: [(0, r.jsx)(l.R94, {
        type: l.R94.Types.DESCRIPTION,
        className: j.formDescription,
        disabled: S,
        children: b.intl.string(b.t.zAww7e)
      }), (0, r.jsx)(h.Z, {})]
    }), (0, r.jsx)(l.LZC, {
      size: 24
    }), (0, r.jsx)(f.Z, {})]
  })
}