/** Chunk was on 44799 **/
t.d(n, {
  Z: () => v,
  b: () => u
});
var r, i = t(200651);
t(192379);
var o = t(793030),
  s = t(692547),
  a = t(413335),
  l = t(730621),
  c = t(388032),
  d = t(255976),
  u = ((r = {})[r.AVAILABLE = 0] = "AVAILABLE", r[r.SPENT = 1] = "SPENT", r[r.TOTAL = 2] = "TOTAL", r);

function v(e) {
  let {
    count: n,
    type: t
  } = e;
  return (0, i.jsxs)("div", {
    className: d.container,
    children: [(0, i.jsxs)("div", {
      className: d.headerContainer,
      children: [(0, i.jsx)(a.Z, {
        fill: 0 !== t ? s.Z.colors.HEADER_MUTED.css : void 0
      }), (0, i.jsx)(o.X6, {
        color: 0 !== t ? "header-muted" : "header-primary",
        variant: "heading-lg/semibold",
        children: n
      })]
    }), (0, i.jsx)(o.xv, {
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