/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => u
}), n(47120), n(266796);
var r = n(200651);
n(192379);
var i = n(442837),
  s = n(481060),
  a = n(496675),
  l = n(434404),
  o = n(845377),
  c = n(981631),
  A = n(388032),
  d = n(601652);
let u = e => {
  let {
    guild: t
  } = e, n = (0, i.e7)([a.Z], () => a.Z.can(c.Plq.ADMINISTRATOR, t), [t]), u = t.hasFeature(c.oNc.DISCOVERABLE), g = () => {
    let e = new Set(t.features);
    t.hasFeature(c.oNc.DISCOVERABLE) && e.delete(c.oNc.DISCOVERABLE), l.Z.updateGuild({
      features: e
    })
  };
  return (0, r.jsxs)(s.hjN, {
    title: A.NW.string(A.t.oGaVGx),
    tag: "h2",
    children: [(0, r.jsx)("div", {
      className: d.background
    }), (0, r.jsxs)("div", {
      className: d.discoverySettings,
      children: [(0, r.jsx)("div", {
        className: d.image
      }), (0, r.jsx)(s.X6q, {
        className: d.header,
        variant: "heading-xl/semibold",
        children: A.NW.string(A.t.rSBQU1)
      }), (0, r.jsx)(s.Text, {
        className: d.description,
        variant: "text-md/normal",
        children: A.NW.format(A.t["6+lwSU"], {})
      }), (0, r.jsx)(o.Z, {
        className: d.checklist,
        guild: t,
        guildId: t.id,
        failedItemsOnly: !0
      }), u && (0, r.jsx)(s.ua7, {
        text: n ? null : A.NW.string(A.t["5VbUBw"]),
        children: e => {
          var t, i;
          return (0, r.jsx)(s.zxk, (t = function(e) {
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
          }({
            size: s.zxk.Sizes.SMALL,
            onClick: g,
            color: s.zxk.Colors.PRIMARY,
            className: d.disableDiscoveryButton,
            disabled: !n
          }, e), i = i = {
            children: A.NW.string(A.t.RPfFQk)
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
          }), t))
        }
      })]
    })]
  })
}