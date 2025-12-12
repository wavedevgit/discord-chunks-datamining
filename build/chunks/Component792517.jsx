/** Chunk was on web.js **/
/** chunk id: 792517, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk872810 = require("./872810.js"),
  Chunk595816 = require("./595816.js"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk112560 = require("./112560.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk470276 = require("./470276.js");
let h = 175,
  g = 195,
  Chunk978538 = require("./978538.js");

function b(e) {
  let {
    participant: t,
    width: n,
    noArt: i = false,
    selected: b = false
  } = e, y = n < g, {
    defaultWatchMultipleStreams: O
  } = (0, u.P)({
    location: "StreamHidden"
  }), v = (0, o.e7)([d.Z, f.default], () => d.Z.getAllActiveStreams().some(e => {
    let {
      ownerId: t
    } = e;
    return t !== f.default.getId()
  }));
  return (0, r.jsx)("div", {
    className: a()(m.content, m.streamHidden),
    children: (0, r.jsx)(p.Z, {
      className: m.streamHiddenEmptyState,
      artURL: E,
      noArt: i,
      selected: b,
      size: (0, p.L)(n),
      header: y ? null : _.intl.string(_.t.epU4Ec),
      description: b ? null : (0, r.jsxs)("div", {
        className: a()(m.streamHiddenCTA, {
          [m.largePaddingTop]: !y
        }),
        children: [(0, r.jsx)("div", {
          className: m.cta,
          children: (0, r.jsx)(l.Button, {
            variant: "secondary",
            size: y ? "sm" : "md",
            text: n < h ? _.intl.string(_.t.I6JG46) : _.intl.string(_.t["7Xq/nV"])
          })
        }), v && !O ? (0, r.jsx)("div", {
          className: a()(m.cta, m.addCta),
          children: (0, r.jsx)(s.u, {
            text: _.intl.string(_.t.wCrzut),
            children: (0, r.jsx)(l.hU, {
              variant: "secondary",
              size: y ? "sm" : "md",
              icon: l.OgY,
              "aria-label": _.intl.string(_.t.wCrzut),
              onClick: e => {
                e.stopPropagation(), (0, c.rn)(t.stream, {
                  forceMultiple: true
                })
              }
            })
          })
        }) : null]
      })
    })
  })
}