/** Chunk was on 39476 **/
/** chunk id: 860153, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk700582 = require("./700582.jsx"),
  Chunk372900 = require("./372900.js"),
  Chunk318713 = require("./318713.jsx"),
  Chunk123145 = require("./123145.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk73249 = require("./73249.jsx"),
  Chunk369171 = require("./369171.js"),
  Chunk545093 = require("./545093.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk774846 = require("./774846.js");
let h = Chunk73800.memo(function(e) {
  let {
    message: t
  } = e, n = (0, a.e7)([m.Z], () => m.Z.getChannel(t.channel_id));
  return null == n ? null : (0, i.jsx)(y.ZP, {
    children: e => (0, i.jsxs)(u.Z.Provider, {
      value: n.guild_id,
      children: [(0, i.jsx)(c.Z, {
        user: t.author,
        size: s.EFr.SIZE_40,
        className: l()(g.authorAvatar, e)
      }), (0, i.jsxs)("div", {
        className: l()(g.author, e),
        children: [(0, i.jsx)(s.Rny, {
          children: (0, i.jsx)("div", {
            className: g.authorNameWrapper,
            children: (0, i.jsx)(p.Z, {
              className: g.authorName,
              message: t,
              channel: n
            })
          })
        }), (0, i.jsx)(d.Z, {
          timestamp: t.timestamp,
          className: g.timestamp,
          tooltipPosition: "bottom"
        })]
      })]
    })
  })
});

function E(e) {
  var t;
  let {
    item: n,
    hideMediaOptions: r,
    onClose: o
  } = e, a = null == (t = n.sourceMetadata) ? true : t.message;
  return (0, i.jsxs)("div", {
    className: g.topBar,
    children: [null != a && (0, i.jsx)(h, {
      message: a
    }), (0, i.jsx)(f.Z, {
      item: n,
      hideMediaOptions: r
    }), (0, i.jsx)(y.ZP, {
      mode: y.lx.PINNED,
      children: e => (0, i.jsx)(b.Z, {
        onClick: o,
        icon: s.Dio,
        tooltip: O.intl.string(O.t.cpT0Cg),
        className: l()(g.closeButton, e)
      })
    })]
  })
}