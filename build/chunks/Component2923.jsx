/** Chunk was on 89298 **/
/** chunk id: 2923, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk293224 = require("./293224.jsx"),
  Chunk849388 = require("./849388.js");

function d(e) {
  let {
    locked: t
  } = e, n = (0, l.e7)([s.Z], () => s.Z.getVoiceChannelId()), r = (0, l.e7)([a.Z], () => a.Z.getChannel(n)), d = null != r;
  return (0, i.jsxs)("div", {
    className: o()({
      [u.panelContainer]: true,
      [u.locked]: t
    }),
    children: [(0, i.jsxs)("div", {
      className: u.panelRow,
      children: [(0, i.jsxs)("div", {
        className: u.buttonSection,
        children: [(0, i.jsx)(c.Ox, {
          voiceChannel: r,
          locked: t
        }), (0, i.jsx)(c.SE, {
          voiceChannel: r,
          locked: t
        }), (0, i.jsx)(c.N3, {
          voiceChannel: r,
          locked: t
        })]
      }), (0, i.jsxs)("div", {
        className: u.buttonSection,
        children: [(0, i.jsx)(c.sm, {
          voiceChannel: r,
          locked: t
        }), (0, i.jsx)(c.aG, {
          voiceChannel: r,
          locked: t
        })]
      }), (0, i.jsx)("div", {
        className: o()(u.buttonSection, d && u.inCall),
        children: (0, i.jsx)(c.c_, {
          voiceChannel: r,
          locked: t
        })
      })]
    }), d && (0, i.jsx)("div", {
      className: u.panelRow,
      children: (0, i.jsx)(c.L, {
        voiceChannel: r,
        locked: t
      })
    })]
  })
}