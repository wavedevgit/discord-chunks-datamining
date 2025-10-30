/** Chunk was on 39476 **/
/** chunk id: 860153, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
let S = Chunk647438.memo(function(e) {
  let {
    message: t
  } = e, n = (0, o.e7)([m.Z], () => m.Z.getChannel(t.channel_id));
  return null == n ? null : (0, i.jsx)(f.ZP, {
    children: e => (0, i.jsxs)(c.Z.Provider, {
      value: n.guild_id,
      children: [(0, i.jsx)(u.Z, {
        user: t.author,
        size: s.EFr.SIZE_40,
        className: a()(h.authorAvatar, e)
      }), (0, i.jsxs)("div", {
        className: a()(h.author, e),
        children: [(0, i.jsx)(s.Rny, {
          children: (0, i.jsx)("div", {
            className: h.authorNameWrapper,
            children: (0, i.jsx)(p.Z, {
              className: h.authorName,
              message: t,
              channel: n
            })
          })
        }), (0, i.jsx)(d.Z, {
          timestamp: t.timestamp,
          className: h.timestamp,
          tooltipPosition: "bottom"
        })]
      })]
    })
  })
});

function b(e) {
  var t;
  let {
    item: n,
    hideMediaOptions: l,
    onClose: r
  } = e, o = null == (t = n.sourceMetadata) ? true : t.message;
  return (0, i.jsxs)("div", {
    className: h.topBar,
    children: [null != o && (0, i.jsx)(S, {
      message: o
    }), (0, i.jsx)(y.Z, {
      item: n,
      hideMediaOptions: l
    }), (0, i.jsx)(f.ZP, {
      mode: f.lx.PINNED,
      children: e => (0, i.jsx)(E.Z, {
        onClick: r,
        icon: s.Dio,
        tooltip: O.intl.string(O.t.cpT0Cq),
        className: a()(h.closeButton, e)
      })
    })]
  })
}