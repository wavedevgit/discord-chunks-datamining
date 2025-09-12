/** Chunk was on web.js **/
/** chunk id: 792517, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk872810 = require("./872810.js"),
  Chunk595816 = require("./595816.js"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk685203 = require("./685203.jsx"),
  Chunk112560 = require("./112560.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk866752 = require("./866752.js");
let m = 175,
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
  } = (0, c.P)({
    location: "StreamHidden"
  }), v = (0, o.e7)([u.Z, d.default], () => u.Z.getAllActiveStreams().some(e => {
    let {
      ownerId: t
    } = e;
    return t !== d.default.getId()
  }));
  return (0, r.jsx)("div", {
    className: a()(h.content, h.streamHidden, {
      [h.__invalid_small]: y
    }),
    children: (0, r.jsx)(_.Z, {
      className: h.streamHiddenEmptyState,
      artURL: E,
      noArt: i,
      selected: b,
      size: (0, _.L)(n),
      header: y ? null : p.intl.string(p.t.epU4ER),
      description: b ? null : (0, r.jsxs)("div", {
        className: a()(h.streamHiddenCTA, {
          [h.largePaddingTop]: !y
        }),
        children: [(0, r.jsx)(f.a, {
          isSmall: y,
          children: (0, r.jsx)(s.Text, {
            variant: y ? "text-sm/semibold" : "text-md/semibold",
            color: "none",
            children: n < m ? p.intl.string(p.t["I6JG4+"]) : p.intl.string(p.t["7Xq/nZ"])
          })
        }), v && !O ? (0, r.jsx)(f.a, {
          className: h.addCTA,
          tooltip: p.intl.string(p.t.wCrzur),
          onClick: e => {
            e.stopPropagation(), (0, l.rn)(t.stream, {
              forceMultiple: true
            })
          },
          isSmall: y,
          children: (0, r.jsx)(s.OgY, {
            size: "xs",
            color: "currentColor",
            className: h.addStreamIcon
          })
        }) : null]
      })
    })
  })
}