/** Chunk was on 59569 **/
/** chunk id: 224360, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk915089 = require("./915089.js"),
  Chunk61881 = require("./61881.js"),
  Chunk788593 = require("./788593.jsx"),
  Chunk507247 = require("./507247.jsx"),
  Chunk973397 = require("./973397.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk461349 = require("./461349.js"),
  Chunk105778 = require("./105778.js");

function y(e) {
  let {
    applicationId: t,
    userId: n,
    onClick: l
  } = e, {
    coverImageUrl: i,
    gameName: c,
    isLoading: f
  } = (0, p.A)(t), y = (0, a.bG)([u.A], () => u.A.suggestedFetchIsLoading), O = g.intl.formatToPlainString(g.t["3mb1s5"], {
    game: c
  });
  return f || y ? (0, r.jsx)("div", {
    className: m.mD
  }) : (0, r.jsx)(o.m, {
    text: O,
    ariaHidden: true,
    children: (0, r.jsxs)(s.DUT, {
      className: b.c9,
      onClick: l,
      "aria-label": O,
      children: [(0, r.jsx)(d.A, {
        className: b.Iv,
        imageSrc: i,
        gameName: c,
        applicationId: t,
        userId: n,
        disableInteraction: true
      }), (0, r.jsx)(s.pa$, {
        size: "md",
        className: b.Xv,
        color: s.LU0.colors.WHITE
      })]
    })
  })
}

function O(e) {
  let {
    userId: t,
    games: n,
    onDismiss: l,
    onClick: a,
    className: o
  } = e, u = (0, c.GV)();
  return (0, r.jsxs)("aside", {
    className: i()(b.kL, o),
    "aria-labelledby": u,
    children: [(0, r.jsxs)("div", {
      className: b.wx,
      children: [(0, r.jsx)(s.DUT, {
        className: b.r,
        "aria-label": g.intl.string(g.t["pUR+3g"]),
        onClick: l,
        children: (0, r.jsx)(s.PGe, {
          size: "sm",
          color: "currentColor"
        })
      }), (0, r.jsx)(s.Heading, {
        id: u,
        variant: "text-xs/medium",
        color: "text-subtle",
        children: g.intl.string(g.t.zMUr6Z)
      })]
    }), (0, r.jsx)(f.A, {
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