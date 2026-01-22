/** Chunk was on 15682 **/
/** chunk id: 242853, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => x
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk898985 = require("./898985.js"),
  Chunk922301 = require("./922301.js"),
  Chunk750112 = require("./750112.jsx"),
  Chunk750656 = require("./750656.js"),
  Chunk927961 = require("./927961.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk880203 = require("./880203.js"),
  Chunk317857 = require("./317857.js");

function x(e) {
  let {
    selectedEffectId: t,
    setSelectedEffectId: l,
    className: a
  } = e;
  return (0, n.jsxs)("div", {
    className: a,
    children: [(0, n.jsxs)(r.DZT, {
      variant: "heading-md/semibold",
      className: b.s,
      children: [m.intl.string(f.default["1wilM1"]), (0, n.jsx)(i.tvc, {
        size: "xs",
        color: i.LU0.colors.TEXT_DEFAULT
      })]
    }), (0, n.jsx)(r.BJc, {
      direction: "horizontal",
      align: "center",
      wrap: true,
      gap: 8,
      children: u.re.map(e => (0, n.jsx)(g, {
        effectId: e,
        selected: e === t,
        onClick: () => l(e)
      }, e))
    })]
  })
}

function g(e) {
  let {
    effectId: t,
    selected: l,
    onClick: a
  } = e, r = (0, o._)(t);
  return (0, n.jsx)(i.DUT, {
    className: s()(p.Tw, {
      [p.wH]: l
    }),
    onClick: a,
    children: (0, n.jsx)(d.A, {
      userName: r.name,
      effectDisplayType: c.G.STATIC,
      displayNameStyles: r.previewStyles,
      textClassName: p.tr,
      inProfile: true
    })
  }, t)
}