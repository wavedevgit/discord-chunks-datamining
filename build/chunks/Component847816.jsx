/** Chunk was on 48654 **/
/** chunk id: 847816, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => S
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk966327 = require("./966327.jsx"),
  Chunk386467 = require("./386467.js"),
  Chunk449859 = require("./449859.jsx"),
  Chunk943220 = require("./943220.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk572855 = require("./572855.jsx"),
  Chunk358731 = require("./358731.js"),
  Chunk597351 = require("./597351.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk70438 = require("./70438.js");
let g = Chunk64700.memo(function(e) {
  let {
    message: t
  } = e, n = (0, o.bG)([f.A], () => f.A.getChannel(t.channel_id));
  return null == n ? null : (0, l.jsx)(O.Ay, {
    children: e => (0, l.jsxs)(u.A.Provider, {
      value: n.guild_id,
      children: [(0, l.jsx)(c.A, {
        user: t.author,
        size: s._3J.SIZE_40,
        className: a()(E.Du, e)
      }), (0, l.jsxs)("div", {
        className: a()(E.cy, e),
        children: [(0, l.jsx)(s.M1G, {
          children: (0, l.jsx)("div", {
            className: E.mG,
            children: (0, l.jsx)(p.A, {
              className: E.fh,
              message: t,
              channel: n
            })
          })
        }), (0, l.jsx)(d.A, {
          timestamp: t.timestamp,
          className: E.vE,
          tooltipPosition: "bottom"
        })]
      })]
    })
  })
});

function S(e) {
  var t;
  let {
    item: n,
    hideMediaOptions: i,
    onClose: r
  } = e, o = null == (t = n.sourceMetadata) ? true : t.message;
  return (0, l.jsxs)("div", {
    className: E.XV,
    children: [null != o && (0, l.jsx)(g, {
      message: o
    }), (0, l.jsx)(b.A, {
      item: n,
      hideMediaOptions: i
    }), (0, l.jsx)(O.Ay, {
      mode: O.nY.PINNED,
      children: e => (0, l.jsx)(m.A, {
        onClick: r,
        icon: s.PGe,
        tooltip: y.intl.string(y.t.cpT0Cq),
        className: a()(E.b, e)
      })
    })]
  })
}