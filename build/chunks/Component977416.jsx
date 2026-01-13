/** Chunk was on 90882 **/
/** chunk id: 977416, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk224724 = require("./224724.js"),
  Chunk817053 = require("./817053.jsx"),
  Chunk890814 = require("./890814.jsx"),
  Chunk394606 = require("./394606.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk713603 = require("./713603.js"),
  Chunk813347 = require("./813347.js");

function y(e) {
  let {
    applicationId: t,
    userId: n,
    onClick: i
  } = e, {
    coverImageUrl: l,
    gameName: s,
    isLoading: f
  } = (0, g.Z)(t), y = (0, a.e7)([u.Z], () => u.Z.suggestedFetchIsLoading), h = p.intl.formatToPlainString(p.t["3mb1s5"], {
    game: s
  });
  return f || y ? (0, r.jsx)("div", {
    className: m.loadingCover
  }) : (0, r.jsx)(o.u, {
    text: h,
    ariaHidden: true,
    children: (0, r.jsxs)(c.P3F, {
      className: b.addButton,
      onClick: i,
      "aria-label": h,
      children: [(0, r.jsx)(d.Z, {
        className: b.cover,
        imageSrc: l,
        gameName: s,
        applicationId: t,
        userId: n,
        disableInteraction: true
      }), (0, r.jsx)(c.svS, {
        size: "md",
        className: b.addIcon,
        color: c.TVs.colors.WHITE
      })]
    })
  })
}

function h(e) {
  let {
    userId: t,
    games: n,
    onDismiss: i,
    onClick: a,
    className: o
  } = e, u = (0, s.Dt)();
  return (0, r.jsxs)("aside", {
    className: l()(b.container, o),
    "aria-labelledby": u,
    children: [(0, r.jsxs)("div", {
      className: b.header,
      children: [(0, r.jsx)(c.P3F, {
        className: b.dismissButton,
        "aria-label": p.intl.string(p.t["pUR+3g"]),
        onClick: i,
        children: (0, r.jsx)(c.Dio, {
          size: "sm",
          color: "currentColor"
        })
      }), (0, r.jsx)(c.Heading, {
        id: u,
        variant: "text-xs/medium",
        color: "text-subtle",
        children: p.intl.string(p.t.zMUr6Z)
      })]
    }), (0, r.jsx)(f.Z, {
      games: n,
      renderGame: e => {
        let {
          applicationId: n
        } = e;
        return (0, r.jsx)(y, {
          onClick: () => a(n),
          userId: t,
          applicationId: n
        })
      }
    })]
  })
}