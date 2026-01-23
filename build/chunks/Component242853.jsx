/** Chunk was on 15682 **/
/** chunk id: 242853, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => _
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

function _(e) {
  let {
    selectedEffectId: t,
    setSelectedEffectId: l,
    className: r
  } = e;
  return (0, n.jsxs)("div", {
    className: r,
    children: [(0, n.jsxs)(a.DZT, {
      variant: "heading-md/semibold",
      className: f.s,
      children: [p.intl.string(m.default["1wilM1"]), (0, n.jsx)(o.tvc, {
        size: "xs",
        color: o.LU0.colors.TEXT_DEFAULT
      })]
    }), (0, n.jsx)(a.BJc, {
      direction: "horizontal",
      align: "center",
      wrap: true,
      gap: 8,
      children: u.re.map(e => (0, n.jsx)(x, {
        effectId: e,
        selected: e === t,
        onClick: () => l(e)
      }, e))
    })]
  })
}

function x(e) {
  let {
    effectId: t,
    selected: l,
    onClick: r
  } = e, a = (0, i._)(t);
  return (0, n.jsx)(o.DUT, {
    className: s()(g.Tw, {
      [g.wH]: l
    }),
    onClick: r,
    children: (0, n.jsx)(d.A, {
      userName: a.name,
      effectDisplayType: c.G.STATIC,
      displayNameStyles: a.previewStyles,
      textClassName: g.tr,
      inProfile: true
    })
  }, t)
}