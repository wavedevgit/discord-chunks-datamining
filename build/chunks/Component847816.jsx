/** Chunk was on 48654 **/
/** chunk id: 847816, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
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
  } = e, n = (0, a.bG)([f.A], () => f.A.getChannel(t.channel_id));
  return null == n ? null : (0, i.jsx)(O.Ay, {
    children: e => (0, i.jsxs)(u.A.Provider, {
      value: n.guild_id,
      children: [(0, i.jsx)(c.A, {
        user: t.author,
        size: s._3J.SIZE_40,
        className: o()(E.Du, e)
      }), (0, i.jsxs)("div", {
        className: o()(E.cy, e),
        children: [(0, i.jsx)(s.M1G, {
          children: (0, i.jsx)("div", {
            className: E.mG,
            children: (0, i.jsx)(p.A, {
              className: E.fh,
              message: t,
              channel: n
            })
          })
        }), (0, i.jsx)(d.A, {
          timestamp: t.timestamp,
          className: E.vE,
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
    hideMediaOptions: l,
    onClose: r
  } = e, a = null == (t = n.sourceMetadata) ? true : t.message;
  return (0, i.jsxs)("div", {
    className: E.XV,
    children: [null != a && (0, i.jsx)(g, {
      message: a
    }), (0, i.jsx)(m.A, {
      item: n,
      hideMediaOptions: l
    }), (0, i.jsx)(O.Ay, {
      mode: O.nY.PINNED,
      children: e => (0, i.jsx)(y.A, {
        onClick: r,
        icon: s.PGe,
        tooltip: b.intl.string(b.t.cpT0Cq),
        className: o()(E.b, e)
      })
    })]
  })
}