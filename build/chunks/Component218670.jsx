/** Chunk was on 71447 **/
/** chunk id: 218670, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk494566 = require("./494566.jsx"),
  Chunk5172 = require("./5172.js");

function d(e) {
  let {
    locked: t
  } = e, n = (0, a.bG)([s.A], () => s.A.getVoiceChannelId()), r = (0, a.bG)([o.A], () => o.A.getChannel(n)), d = null != r;
  return (0, i.jsxs)("div", {
    className: l()({
      [u.KE]: true,
      [u.xt]: t
    }),
    children: [(0, i.jsxs)("div", {
      className: u.Pm,
      children: [(0, i.jsxs)("div", {
        className: u.qi,
        children: [(0, i.jsx)(c.pp, {
          voiceChannel: r,
          locked: t
        }), (0, i.jsx)(c.Yb, {
          voiceChannel: r,
          locked: t
        }), (0, i.jsx)(c.GF, {
          voiceChannel: r,
          locked: t
        })]
      }), (0, i.jsxs)("div", {
        className: u.qi,
        children: [(0, i.jsx)(c.un, {
          voiceChannel: r,
          locked: t
        }), (0, i.jsx)(c.sm, {
          voiceChannel: r,
          locked: t
        })]
      }), (0, i.jsx)("div", {
        className: l()(u.qi, d && u.SV),
        children: (0, i.jsx)(c.NO, {
          voiceChannel: r,
          locked: t
        })
      })]
    }), d && (0, i.jsx)("div", {
      className: u.Pm,
      children: (0, i.jsx)(c.LK, {
        voiceChannel: r,
        locked: t
      })
    })]
  })
}