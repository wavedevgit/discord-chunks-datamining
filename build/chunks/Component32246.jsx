/** Chunk was on 15682 **/
/** chunk id: 32246, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => x
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk559949 = require("./559949.js"),
  Chunk158954 = require("./158954.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk945096 = require("./945096.js"),
  Chunk73392 = require("./73392.js"),
  Chunk750656 = require("./750656.js"),
  Chunk927961 = require("./927961.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk880203 = require("./880203.js"),
  Chunk248997 = require("./248997.js");

function x(e) {
  let {
    selectedFontId: t,
    setSelectedFontId: l,
    displayName: r,
    className: x
  } = e, b = t !== a.x.DEFAULT, h = (0, d.Xr)(r);
  return (0, n.jsxs)("div", {
    className: x,
    children: [(0, n.jsxs)(o.DZT, {
      variant: "heading-md/semibold",
      className: g.s,
      children: [f.intl.string(p.default.nP0ngb), (0, n.jsx)(c.tvc, {
        size: "xs",
        color: c.LU0.colors.TEXT_DEFAULT
      })]
    }), (0, n.jsx)(o.BJc, {
      direction: "horizontal",
      align: "center",
      wrap: true,
      children: m.rA.map(e => {
        let r = (0, u.p)(e),
          a = e === t;
        return (0, n.jsx)(i.m, {
          text: f.intl.string(r.name),
          asContainer: true,
          children: (0, n.jsx)(c.DUT, {
            className: s()(_.SO, {
              [_.wH]: a
            }),
            onClick: () => l(e),
            "aria-label": f.intl.string(r.name),
            children: (0, n.jsx)(o.EYj, {
              variant: "text-lg/semibold",
              color: a ? "text-strong" : "text-default",
              className: s()(_.FH, r.className),
              children: "Gg"
            })
          })
        }, e)
      })
    }), b && h && (0, n.jsxs)("div", {
      className: _.Lb,
      children: [(0, n.jsx)(o.mir, {
        size: "lg"
      }), (0, n.jsx)(o.EYj, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: f.intl.string(p.default["+O1xL2"])
      })]
    })]
  })
}