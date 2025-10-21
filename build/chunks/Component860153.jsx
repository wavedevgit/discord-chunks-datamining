/** Chunk was on 39476 **/
/** chunk id: 860153, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
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
  Chunk578436 = require("./578436.js");
let g = Chunk647438.memo(function(e) {
  let {
    message: t
  } = e, n = (0, o.e7)([p.Z], () => p.Z.getChannel(t.channel_id));
  return null == n ? null : (0, i.jsx)(y.ZP, {
    children: e => (0, i.jsxs)(u.Z.Provider, {
      value: n.guild_id,
      children: [(0, i.jsx)(c.Z, {
        user: t.author,
        size: s.EFr.SIZE_40,
        className: a()(E.authorAvatar, e)
      }), (0, i.jsxs)("div", {
        className: a()(E.author, e),
        children: [(0, i.jsx)(s.Rny, {
          children: (0, i.jsx)("div", {
            className: E.authorNameWrapper,
            children: (0, i.jsx)(f.Z, {
              className: E.authorName,
              message: t,
              channel: n
            })
          })
        }), (0, i.jsx)(d.Z, {
          timestamp: t.timestamp,
          className: E.timestamp,
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
    onClose: l
  } = e, o = null == (t = n.sourceMetadata) ? true : t.message;
  return (0, i.jsxs)("div", {
    className: E.topBar,
    children: [null != o && (0, i.jsx)(g, {
      message: o
    }), (0, i.jsx)(m.Z, {
      item: n,
      hideMediaOptions: r
    }), (0, i.jsx)(y.ZP, {
      mode: y.lx.PINNED,
      children: e => (0, i.jsx)(O.Z, {
        onClick: l,
        icon: s.Dio,
        tooltip: b.intl.string(b.t.cpT0Cg),
        className: a()(E.closeButton, e)
      })
    })]
  })
}