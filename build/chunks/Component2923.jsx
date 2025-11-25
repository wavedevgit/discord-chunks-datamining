/** Chunk was on 50751 **/
/** chunk id: 2923, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk293224 = require("./293224.jsx"),
  Chunk678925 = require("./678925.js");

function d(e) {
  let {
    locked: t
  } = e, n = (0, a.e7)([s.Z], () => s.Z.getVoiceChannelId()), r = (0, a.e7)([o.Z], () => o.Z.getChannel(n)), d = null != r;
  return (0, i.jsxs)("div", {
    className: l()({
      [c.panelContainer]: true,
      [c.locked]: t
    }),
    children: [(0, i.jsxs)("div", {
      className: c.panelRow,
      children: [(0, i.jsxs)("div", {
        className: c.buttonSection,
        children: [(0, i.jsx)(u.Ox, {
          voiceChannel: r,
          locked: t
        }), (0, i.jsx)(u.SE, {
          voiceChannel: r,
          locked: t
        }), (0, i.jsx)(u.N3, {
          voiceChannel: r,
          locked: t
        })]
      }), (0, i.jsxs)("div", {
        className: c.buttonSection,
        children: [(0, i.jsx)(u.sm, {
          voiceChannel: r,
          locked: t
        }), (0, i.jsx)(u.aG, {
          voiceChannel: r,
          locked: t
        })]
      }), (0, i.jsx)("div", {
        className: l()(c.buttonSection, d && c.inCall),
        children: (0, i.jsx)(u.c_, {
          voiceChannel: r,
          locked: t
        })
      })]
    }), d && (0, i.jsx)("div", {
      className: c.panelRow,
      children: (0, i.jsx)(u.L, {
        voiceChannel: r,
        locked: t
      })
    })]
  })
}