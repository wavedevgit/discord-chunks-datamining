/** Chunk was on web.js **/
/** chunk id: 792517, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk872810 = require("./872810.js"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk685203 = require("./685203.jsx"),
  Chunk112560 = require("./112560.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk866752 = require("./866752.js");
let h = 175,
  m = 195,
  Chunk978538 = require("./978538.js");

function E(e) {
  let {
    participant: t,
    width: n,
    noArt: i = false,
    selected: E = false
  } = e, b = n < m, y = (0, o.e7)([c.Z, u.default], () => c.Z.getAllActiveStreams().some(e => {
    let {
      ownerId: t
    } = e;
    return t !== u.default.getId()
  }));
  return (0, r.jsx)("div", {
    className: a()(p.content, p.streamHidden, {
      [p.__invalid_small]: b
    }),
    children: (0, r.jsx)(f.Z, {
      className: p.streamHiddenEmptyState,
      artURL: g,
      noArt: i,
      selected: E,
      size: (0, f.L)(n),
      header: b ? null : _.intl.string(_.t.epU4ER),
      description: E ? null : (0, r.jsxs)("div", {
        className: a()(p.streamHiddenCTA, {
          [p.largePaddingTop]: !b
        }),
        children: [(0, r.jsx)(d.a, {
          isSmall: b,
          children: (0, r.jsx)(s.Text, {
            variant: b ? "text-sm/semibold" : "text-md/semibold",
            color: "none",
            children: n < h ? _.intl.string(_.t["I6JG4+"]) : _.intl.string(_.t["7Xq/nZ"])
          })
        }), y ? (0, r.jsx)(d.a, {
          className: p.addCTA,
          tooltip: _.intl.string(_.t.wCrzur),
          onClick: e => {
            e.stopPropagation(), (0, l.rn)(t.stream, {
              forceMultiple: true
            })
          },
          isSmall: b,
          children: (0, r.jsx)(s.OgY, {
            size: "xs",
            color: "currentColor",
            className: p.addStreamIcon
          })
        }) : null]
      })
    })
  })
}