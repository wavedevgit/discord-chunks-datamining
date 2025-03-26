/** Chunk was on 55666 **/
B.d(g, {
  Z: () => r
});
var C = B(200651),
  Q = B(120356),
  w = B.n(Q),
  D = B(481060),
  f = B(550271),
  E = B(434404),
  v = B(155174),
  I = B(388032),
  P = B(935921);
let r = function(A) {
  let {
    className: g,
    guildId: B,
    tag: Q,
    badge: r,
    primaryColor: e,
    secondaryColor: o,
    isDisabled: t = !1
  } = A;
  return (0, C.jsxs)("div", {
    className: g,
    children: [(0, C.jsx)(D.vwX, {
      className: P.sectionTitle,
      children: I.NW.string(v.Z["tN+8pK"])
    }), (0, C.jsxs)("div", {
      className: P.tagContainer,
      children: [(0, C.jsx)("div", {
        className: P.tagInputContainer,
        children: (0, C.jsx)(D.oil, {
          className: P.tagInputWrapper,
          inputClassName: w()(P.tagInput, "heading-sm/semibold"),
          maxLength: 4,
          autoFocus: !0,
          placeholder: "WUMP",
          prefixElement: (0, C.jsx)(f.A, {
            badge: r,
            width: 40,
            height: 40,
            primaryTintColor: e,
            secondaryTintColor: o
          }),
          disabled: t,
          value: null != Q ? Q : "",
          onChange: function(A) {
            E.Z.updateGuildProfile(B, {
              tag: A
            })
          }
        })
      }), (0, C.jsx)("div", {
        className: P.tagTooltip,
        children: (0, C.jsx)(D.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: I.NW.string(v.Z.UbC8y8)
        })
      })]
    })]
  })
}