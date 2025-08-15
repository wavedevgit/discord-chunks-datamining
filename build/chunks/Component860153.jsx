/** Chunk was on 19370 **/
/** chunk id: 860153, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
let _ = Chunk73800.memo(function(e) {
  let {
    message: t
  } = e, n = (0, l.e7)([m.Z], () => m.Z.getChannel(t.channel_id));
  return null == n ? null : (0, a.jsx)(y.ZP, {
    children: e => (0, a.jsxs)(u.Z.Provider, {
      value: n.guild_id,
      children: [(0, a.jsx)(s.Z, {
        user: t.author,
        size: c.EFr.SIZE_40,
        className: o()(O.authorAvatar, e)
      }), (0, a.jsxs)("div", {
        className: o()(O.author, e),
        children: [(0, a.jsx)(c.Rny, {
          children: (0, a.jsx)("div", {
            className: O.authorNameWrapper,
            children: (0, a.jsx)(p.Z, {
              className: O.authorName,
              message: t,
              channel: n
            })
          })
        }), (0, a.jsx)(d.Z, {
          timestamp: t.timestamp,
          className: O.timestamp,
          tooltipPosition: "bottom"
        })]
      })]
    })
  })
});

function h(e) {
  var t;
  let {
    item: n,
    hideMediaOptions: r,
    onClose: i
  } = e, l = null == (t = n.sourceMetadata) ? true : t.message;
  return (0, a.jsxs)("div", {
    className: O.topBar,
    children: [null != l && (0, a.jsx)(_, {
      message: l
    }), (0, a.jsx)(g.Z, {
      item: n,
      hideMediaOptions: r
    }), (0, a.jsx)(y.ZP, {
      mode: y.lx.PINNED,
      children: e => (0, a.jsx)(f.Z, {
        onClick: i,
        icon: c.Dio,
        tooltip: b.intl.string(b.t.cpT0Cg),
        className: o()(O.closeButton, e)
      })
    })]
  })
}