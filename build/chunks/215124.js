/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => u
});
var r = n(200651);
n(192379);
var i = n(399606),
  s = n(481060),
  a = n(674180),
  l = n(267101),
  o = n(430824),
  A = n(584825),
  c = n(198139),
  d = n(388032);

function u(e) {
  let {
    guildId: t,
    allPeriods: u
  } = e, g = (0, i.e7)([o.Z], () => o.Z.getGuild(t)), f = (0, A.qi)(t, {
    includeSoftDeleted: !0
  }), m = (0, l.ue)(t, {
    publishedOnly: !1
  }), {
    allowSelfRemoveMonetization: p
  } = (0, a.gX)(t), h = u.filter(e => {
    var t;
    let n = Object.values(null !== (t = e.ppgs) && void 0 !== t ? t : {})[0];
    return (null == n ? void 0 : n.status) === c.x_.OPEN || (null == n ? void 0 : n.status) === c.x_.PAYOUT_DEFERRED
  }), C = f.length > 0, b = m.length > 0, v = h.length > 0;
  return null == g ? null : (0, r.jsxs)("div", {
    children: [(0, r.jsx)(s.R94, {
      type: s.R94.Types.DESCRIPTION,
      children: d.NW.format(d.t.fvOn6O, {
        guildName: g.toString()
      })
    }), (0, r.jsx)(s.LZC, {
      size: 16
    }), (0, r.jsx)(s.zxk, {
      disabled: !p || C || b || v,
      look: s.zxk.Looks.FILLED,
      color: s.zxk.Colors.RED,
      onClick: () => {
        (0, s.ZDy)(async () => {
          let {
            default: e
          } = await n.e("35282").then(n.bind(n, 157429));
          return t => {
            var n, i;
            return (0, r.jsx)(e, (n = function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                  var r;
                  r = n[t], t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                  }) : e[t] = r
                })
              }
              return e
            }({}, t), i = i = {
              guild: g
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(i)).forEach(function(e) {
              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
            }), n))
          }
        })
      },
      children: d.NW.string(d.t.FrOFSk)
    })]
  })
}