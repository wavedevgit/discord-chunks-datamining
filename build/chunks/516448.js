/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => v
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(481060),
  a = n(313201),
  l = n(723047),
  o = n(727843),
  c = n(290348),
  A = n(164e3),
  d = n(783454),
  u = n(862319),
  g = n(140285),
  f = n(390583),
  m = n(641249),
  p = n(574085),
  h = n(293810),
  C = n(388032),
  b = n(174032);

function v(e) {
  let {
    allSubscriptionListings: t
  } = e, {
    editStateId: n,
    guildId: v
  } = (0, o.N)(), [x, N] = c.UE(n), [j, E] = c.R7(n), I = i.useMemo(() => t.filter(e => e.id !== n), [t, n]), {
    isFullServerGating: O
  } = (0, A.Z)(v), y = (0, a.Dt)(), w = (0, l.mY)();
  return (0, r.jsxs)(d.Z, {
    title: C.NW.string(C.t.YNw2Sk),
    description: C.NW.string(C.t.zMW5r6),
    children: [(0, r.jsxs)(s.hjN, {
      title: C.NW.string(C.t.DFlDaG),
      disabled: w,
      children: [(0, r.jsx)(s.R94, {
        type: s.R94.Types.DESCRIPTION,
        className: b.formDescription,
        disabled: w,
        children: C.NW.string(C.t.kHalVF)
      }), (0, r.jsx)(u.Z, {
        channelBenefits: x,
        intangibleBenefits: j,
        subscriptionListings: I,
        onImport: function(e, t) {
          N(t => t.concat(e)), E(e => e.concat(t))
        }
      }), (0, r.jsx)(s.LZC, {
        size: 8
      }), (0, r.jsx)(u.w, {
        guildId: v,
        onImport: function(e) {
          N(t => {
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
        disabled: w
      })]
    }), (0, r.jsx)(s.LZC, {
      size: 24
    }), (0, r.jsxs)(s.hjN, {
      title: C.NW.string(C.t.S2kKzM),
      titleId: y,
      disabled: w,
      children: [(0, r.jsx)(s.R94, {
        type: s.R94.Types.DESCRIPTION,
        className: b.formDescription,
        disabled: w,
        children: C.NW.string(C.t["5a4Axc"])
      }), O && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(g.Z, {
          "aria-labelledby": y,
          disabled: w
        }), (0, r.jsx)(s.LZC, {
          size: 8
        })]
      }), (0, r.jsx)(f.Z, {})]
    }), (0, r.jsx)(s.LZC, {
      size: 24
    }), (0, r.jsxs)(s.hjN, {
      title: C.NW.string(C.t.RdwKw8),
      disabled: w,
      children: [(0, r.jsx)(s.R94, {
        type: s.R94.Types.DESCRIPTION,
        className: b.formDescription,
        disabled: w,
        children: C.NW.string(C.t.zAww7e)
      }), (0, r.jsx)(p.Z, {})]
    }), (0, r.jsx)(s.LZC, {
      size: 24
    }), (0, r.jsx)(m.Z, {})]
  })
}