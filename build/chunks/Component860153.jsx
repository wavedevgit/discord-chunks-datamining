/** Chunk was on 39476 **/
/** chunk id: 860153, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
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
  Chunk959917 = require("./959917.js");
let E = Chunk73800.memo(function(e) {
  let {
    message: t
  } = e, n = (0, a.e7)([m.Z], () => m.Z.getChannel(t.channel_id));
  return null == n ? null : (0, r.jsx)(y.ZP, {
    children: e => (0, r.jsxs)(u.Z.Provider, {
      value: n.guild_id,
      children: [(0, r.jsx)(c.Z, {
        user: t.author,
        size: s.EFr.SIZE_40,
        className: l()(h.authorAvatar, e)
      }), (0, r.jsxs)("div", {
        className: l()(h.author, e),
        children: [(0, r.jsx)(s.Rny, {
          children: (0, r.jsx)("div", {
            className: h.authorNameWrapper,
            children: (0, r.jsx)(p.Z, {
              className: h.authorName,
              message: t,
              channel: n
            })
          })
        }), (0, r.jsx)(d.Z, {
          timestamp: t.timestamp,
          className: h.timestamp,
          tooltipPosition: "bottom"
        })]
      })]
    })
  })
});

function g(e) {
  var t;
  let {
    item: n,
    hideMediaOptions: i,
    onClose: o
  } = e, a = null == (t = n.sourceMetadata) ? true : t.message;
  return (0, r.jsxs)("div", {
    className: h.topBar,
    children: [null != a && (0, r.jsx)(E, {
      message: a
    }), (0, r.jsx)(f.Z, {
      item: n,
      hideMediaOptions: i
    }), (0, r.jsx)(y.ZP, {
      mode: y.lx.PINNED,
      children: e => (0, r.jsx)(b.Z, {
        onClick: o,
        icon: s.Dio,
        tooltip: O.intl.string(O.t.cpT0Cg),
        className: l()(h.closeButton, e)
      })
    })]
  })
}