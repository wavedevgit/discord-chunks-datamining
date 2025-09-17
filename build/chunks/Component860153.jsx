/** Chunk was on 39476 **/
/** chunk id: 860153, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
let E = Chunk647438.memo(function(e) {
  let {
    message: t
  } = e, n = (0, a.e7)([f.Z], () => f.Z.getChannel(t.channel_id));
  return null == n ? null : (0, r.jsx)(m.ZP, {
    children: e => (0, r.jsxs)(u.Z.Provider, {
      value: n.guild_id,
      children: [(0, r.jsx)(c.Z, {
        user: t.author,
        size: s.EFr.SIZE_40,
        className: o()(g.authorAvatar, e)
      }), (0, r.jsxs)("div", {
        className: o()(g.author, e),
        children: [(0, r.jsx)(s.Rny, {
          children: (0, r.jsx)("div", {
            className: g.authorNameWrapper,
            children: (0, r.jsx)(p.Z, {
              className: g.authorName,
              message: t,
              channel: n
            })
          })
        }), (0, r.jsx)(d.Z, {
          timestamp: t.timestamp,
          className: g.timestamp,
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
    hideMediaOptions: i,
    onClose: l
  } = e, a = null == (t = n.sourceMetadata) ? true : t.message;
  return (0, r.jsxs)("div", {
    className: g.topBar,
    children: [null != a && (0, r.jsx)(E, {
      message: a
    }), (0, r.jsx)(y.Z, {
      item: n,
      hideMediaOptions: i
    }), (0, r.jsx)(m.ZP, {
      mode: m.lx.PINNED,
      children: e => (0, r.jsx)(O.Z, {
        onClick: l,
        icon: s.Dio,
        tooltip: b.intl.string(b.t.cpT0Cg),
        className: o()(g.closeButton, e)
      })
    })]
  })
}