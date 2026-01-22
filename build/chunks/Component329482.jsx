/** Chunk was on 22477 **/
/** chunk id: 329482, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk136722 = require("./136722.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk47167 = require("./47167.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk309010 = require("./309010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk558393 = require("./558393.js"),
  Chunk737045 = require("./737045.js"),
  Chunk574068 = require("./574068.js"),
  Chunk661251 = require("./661251.js");

function v(e) {
  let {
    title: t,
    can: n
  } = e, l = n ? o.A9s : o.PGe, r = (0, a.jsx)("div", {
    className: i()(b.v_, n ? b.uU : b.Ss),
    children: (0, a.jsx)(l, {
      className: b.Kk
    })
  });
  return (0, a.jsxs)("div", {
    className: b.z8,
    children: [r, (0, a.jsx)("div", {
      className: b.rv,
      children: (0, a.jsx)(o.Text, {
        variant: "text-md/normal",
        children: t
      })
    })]
  })
}

function j() {
  let e = (0, s.bG)([p.A], () => p.A.getChannelId()),
    t = (0, s.bG)([h.A], () => h.A.getGuildId()),
    n = (0, s.bG)([d.A], () => d.A.getChannel(e)),
    l = (0, s.bG)([u.A], () => u.A.getGuild(t)),
    j = (0, s.bG)([m.A], () => m.A.computePermissions(n)),
    y = (0, s.bG)([m.A], () => m.A.computePermissions(l)),
    _ = (0, c.Ay)(n, true),
    A = null != n ? (0, x.mW)(n, false) : null,
    C = null != l ? f.A.getGuildPermissionSpecMap(l) : null,
    S = Object.values(null != A ? A : {}).map(e => {
      let {
        title: t,
        flag: n
      } = e, l = r.zy(j, n);
      return (0, a.jsx)(v, {
        title: t,
        can: l
      }, t)
    }),
    O = Object.values(null != C ? C : {}).map(e => {
      let {
        title: t,
        flag: n
      } = e, l = r.zy(y, n);
      return (0, a.jsx)(v, {
        title: t,
        can: l
      }, t)
    });
  return (0, a.jsx)("div", {
    className: i()(g.nd, b.nd),
    children: (0, a.jsxs)("div", {
      className: b.l$,
      children: [(0, a.jsxs)("section", {
        className: b.uW,
        children: [(0, a.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          children: null != _ ? "Permissions in ".concat(_) : "No channel selected"
        }), S]
      }), (0, a.jsxs)("section", {
        className: b.uW,
        children: [(0, a.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          children: null != l ? "Permissions in ".concat(l.name) : "No guild selected"
        }), O]
      })]
    })
  })
}