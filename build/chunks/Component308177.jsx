/** Chunk was on 82124 **/
/** chunk id: 308177, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk112724 = require("./112724.jsx"),
  Chunk358221 = require("./358221.js"),
  Chunk565799 = require("./565799.js"),
  Chunk431328 = require("./431328.js"),
  Chunk501655 = require("./501655.js"),
  Chunk27931 = require("./27931.js"),
  Chunk260979 = require("./260979.jsx"),
  Chunk766015 = require("./766015.js"),
  Chunk755515 = require("./755515.jsx"),
  Chunk12779 = require("./12779.jsx"),
  Chunk450369 = require("./450369.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk852973 = require("./852973.js");

function v(e) {
  return e.type === u.Ui.VOICE
}
let O = (0, Chunk112724.Z)(e => {
  var t, n;
  let {
    channel: a,
    width: O,
    onScroll: j,
    popoutType: x
  } = e, {
    selectedParticipantId: C,
    largeStream: E,
    chatOpen: S
  } = (0, l.cj)([o.Z], () => ({
    selectedParticipantId: o.Z.getSelectedParticipantId(a.id),
    largeStream: o.Z.getStageStreamSize(a.id),
    chatOpen: o.Z.getChatOpen(a.id)
  }), [a.id]), _ = (0, c.Io)(a.id), I = (0, c.Rk)(a.id, u.pV.AUDIENCE), P = (0, l.e7)([s.Z], () => null != C ? s.Z.getParticipant(a.id, C) : null), Z = (0, c.w8)(a.id, u.pV.SPEAKER), N = Z.filter(v), T = null != Z.find(e => e.type === u.Ui.STREAM), A = Math.floor((O - 32) / 102), w = O < 424 ? 1 : O < 624 ? 2 : O < 824 || S ? 3 : 4, R = {
    [u.pV.SPEAKER]: w,
    [u.pV.AUDIENCE]: A,
    [u.pV.SELECTED]: 1
  }, D = (0, d.Dx)(a.id), [M, k] = (0, d.aP)(a.id, R, D), L = [Math.max(null != (t = M[0]) ? t : 1, 1), Math.max(null != (n = M[1]) ? n : 1, 1), M[2]], {
    speakerTileWidth: U,
    speakerTileHeight: G
  } = ((e, t) => {
    let n = Math.floor(e / t - 8),
      r = Math.floor(n / m.Q);
    return {
      speakerTileWidth: n,
      speakerTileHeight: r
    }
  })(O, w), B = E ? O - 32 : Math.min(O - 64, 3 * U + 8), F = e => e === M.length - 1 || 0 === I && 1 === e, [H, V] = i.useState(false), [z, W] = i.useState(false);
  return (0, r.jsx)(f.Z, {
    sections: L,
    renderSection: e => {
      let {
        section: t
      } = e;
      return 1 === t ? 0 === _ ? null : (0, r.jsx)(g.Z, {
        participantCount: _,
        label: b.intl.string(b.t.CduOkx),
        className: y.header,
        onClick: () => V(!H),
        collapsed: H,
        speakers: N,
        channel: a,
        isStreamLive: T
      }, "speaker-header-".concat(t)) : 2 === t ? 0 === I ? null : (0, r.jsx)(g.Z, {
        participantCount: I,
        label: b.intl.string(b.t["3foUu5"]),
        className: y.header,
        onClick: () => W(!z),
        collapsed: z,
        channel: a
      }, "audience-header-".concat(t)) : null
    },
    sectionHeight: e => 48,
    renderRow: e => {
      let {
        section: t,
        row: n
      } = e, l = k[t][n];
      if ((null == l ? true : l.length) == null) return null;
      switch (t) {
        case 0:
          if (0 === l.length || null == l[0]) return null;
          return (0, r.jsx)("div", {
            className: y.focusedRow,
            children: (0, r.jsx)(m.Z, {
              channel: a,
              participant: l[0],
              width: B,
              popoutType: x
            })
          }, "selected-participant");
        case 1:
          if (H) return null;
          return (0, r.jsx)(i.Fragment, {
            children: (0, r.jsx)(h.Z, {
              tileWidth: U,
              channel: a,
              participants: l,
              selectedParticipant: P,
              popoutType: x
            })
          }, "speakers-".concat(t, "-").concat(n));
        case 2:
          if (z) return null;
          return (0, r.jsx)(p.Z, {
            channel: a,
            participants: l,
            maxTiles: A
          }, "audience-".concat(t, "-").concat(n));
        default:
          return null
      }
    },
    rowHeight: e => null == k[e][0] ? 0 : 0 === e ? B / m.Q + 8 : 1 === e ? H ? 0 : G : 98 * !z,
    renderFooter: e => {
      let {
        section: t
      } = e;
      return F(t) ? (0, r.jsx)("div", {
        className: y.spacer
      }, "bottom-spacer") : null
    },
    footerHeight: e => 1 === e ? 8 : 0 === e ? 12 : 88 * !!F(e),
    className: y.scroller,
    chunkSize: 60,
    onScroll: j
  })
})