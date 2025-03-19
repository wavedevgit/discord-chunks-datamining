/** Chunk was on 44799 **/
t.d(n, {
  Z: () => x,
  b: () => u
});
var i, r = t(200651);
t(192379);
var s = t(793030),
  o = t(692547),
  a = t(413335),
  l = t(367123),
  c = t(388032),
  d = t(255976),
  u = ((i = {})[i.AVAILABLE = 0] = "AVAILABLE", i[i.SPENT = 1] = "SPENT", i[i.TOTAL = 2] = "TOTAL", i);

function x(e) {
  let {
    count: n,
    type: t
  } = e;
  return (0, r.jsxs)("div", {
    className: d.container,
    children: [(0, r.jsxs)("div", {
      className: d.headerContainer,
      children: [(0, r.jsx)(a.Z, {
        fill: 0 !== t ? o.Z.colors.HEADER_MUTED.css : void 0
      }), (0, r.jsx)(s.X6, {
        color: 0 !== t ? "header-muted" : "header-primary",
        variant: "heading-lg/semibold",
        children: n
      })]
    }), (0, r.jsx)(s.xv, {
      color: "header-muted",
      variant: "text-sm/medium",
      children: (() => {
        switch (t) {
          case 0:
            return c.NW.string(l.Z.BdRXZG);
          case 1:
            return c.NW.string(l.Z.xvgIVF);
          case 2:
            return c.NW.string(l.Z["/F7Z29"])
        }
      })()
    })]
  })
}