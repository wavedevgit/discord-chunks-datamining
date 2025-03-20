/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  w: () => g
});
var r = n(200651),
  i = n(192379),
  s = n(780384),
  a = n(481060),
  l = n(410030),
  o = n(434404),
  A = n(388032),
  c = n(824978),
  d = n(935653),
  u = n(449874);

function g(e) {
  let {
    canManageGuild: t,
    premiumProgressBarEnabled: n
  } = e, g = (0, l.ZP)(), f = i.useCallback(e => {
    o.Z.updateGuild({
      premiumProgressBarEnabled: e
    })
  }, []);
  return (0, r.jsxs)(a.hjN, {
    className: c.container,
    children: [(0, r.jsxs)("div", {
      className: c.column,
      children: [(0, r.jsx)(a.j7V, {
        className: c.switch,
        onChange: f,
        value: n,
        hideBorder: !0,
        disabled: !t,
        children: A.NW.string(A.t.Dl4mJS)
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: A.NW.string(A.t.xzHcoa)
      })]
    }), (0, r.jsx)("div", {
      className: c.column,
      children: (0, r.jsx)("img", {
        alt: A.NW.string(A.t.UOJp5e),
        src: (0, s.ap)(g) ? u : d,
        className: c.progressBarImage
      })
    })]
  })
}