/** Chunk was on 22477 **/
/** chunk id: 115660, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk206835 = require("./206835.js"),
  Chunk71393 = require("./71393.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk997810 = require("./997810.js");

function u(e, t, n, u, m) {
  let p = (0, l.bG)([o.A], () => o.A.getGuild(e)),
    h = (0, s.A)({
      guild: p,
      analyticsLocations: t
    }),
    f = (0, s.A)({
      analyticsLocations: t
    });
  return (0, a.jsxs)(a.Fragment, {
    children: [null != p ? (0, a.jsx)(i.Drp, {
      id: "edit-server-profile",
      "aria-label": c.intl.string(c.t["9ESaO7"]),
      label: () => (0, a.jsxs)("div", {
        className: d.A,
        children: [(0, a.jsx)(r.A, {
          guild: p,
          size: r.A.Sizes.SMOL,
          className: d.$
        }), (0, a.jsxs)("div", {
          children: [(0, a.jsx)(i.Text, {
            variant: "text-sm/medium",
            children: c.intl.string(c.t["9ESaO7"])
          }), (0, a.jsx)(i.Text, {
            variant: "text-xs/normal",
            lineClamp: 1,
            style: {
              maxWidth: "150px"
            },
            children: null == p ? true : p.name
          })]
        })]
      }),
      action: () => {
        h(), null == m || m(), null == u || u()
      }
    }, "edit-server-profile") : null, (0, a.jsx)(i.Drp, {
      id: "edit-main-profile",
      "aria-label": c.intl.string(c.t.HmFaFB),
      label: () => (0, a.jsxs)("div", {
        className: d.A,
        children: [(0, a.jsx)(i.clX, {
          size: "custom",
          width: 18,
          height: 18
        }), (0, a.jsx)(i.Text, {
          variant: "text-sm/medium",
          children: c.intl.string(c.t.HmFaFB)
        }), n ? (0, a.jsx)(i.LpS, {
          text: c.intl.string(c.t.y2b7CA)
        }) : true]
      }),
      action: () => {
        f(), null == m || m(), null == u || u()
      }
    }, "edit-main-profile")]
  })
}