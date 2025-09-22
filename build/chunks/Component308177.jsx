/** Chunk was on 62987 **/
/** chunk id: 308177, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk307139 = require("./307139.js");

function _(e) {
  return e.type === u.Ui.VOICE
}
let C = (0, Chunk112724.Z)(e => {
  var t, n;
  let {
    channel: a,
    width: C,
    onScroll: v
  } = e, {
    selectedParticipantId: x,
    largeStream: j,
    chatOpen: O
  } = (0, l.cj)([o.Z], () => ({
    selectedParticipantId: o.Z.getSelectedParticipantId(a.id),
    largeStream: o.Z.getStageStreamSize(a.id),
    chatOpen: o.Z.getChatOpen(a.id)
  }), [a.id]), E = (0, c.Io)(a.id), S = (0, c.Rk)(a.id, u.pV.AUDIENCE), I = (0, l.e7)([s.Z], () => null != x ? s.Z.getParticipant(a.id, x) : null), P = (0, c.w8)(a.id, u.pV.SPEAKER), Z = P.filter(_), T = null != P.find(e => e.type === u.Ui.STREAM), N = Math.floor((C - 32) / 102), A = C < 424 ? 1 : C < 624 ? 2 : C < 824 || O ? 3 : 4, w = {
    [u.pV.SPEAKER]: A,
    [u.pV.AUDIENCE]: N,
    [u.pV.SELECTED]: 1
  }, R = (0, d.Dx)(a.id), [M, D] = (0, d.aP)(a.id, w, R), k = [Math.max(null != (t = M[0]) ? t : 1, 1), Math.max(null != (n = M[1]) ? n : 1, 1), M[2]], {
    speakerTileWidth: L,
    speakerTileHeight: U
  } = ((e, t) => {
    let n = Math.floor(e / t - 8),
      r = Math.floor(n / g.Q);
    return {
      speakerTileWidth: n,
      speakerTileHeight: r
    }
  })(C, A), B = j ? C - 32 : Math.min(C - 64, 3 * L + 8), G = e => e === M.length - 1 || 0 === S && 1 === e, [H, F] = i.useState(false), [V, z] = i.useState(false);
  return (0, r.jsx)(h.Z, {
    sections: k,
    renderSection: e => {
      let {
        section: t
      } = e;
      return 1 === t ? 0 === E ? null : (0, r.jsx)(m.Z, {
        participantCount: E,
        label: b.intl.string(b.t.CduOk5),
        className: y.header,
        onClick: () => F(!H),
        collapsed: H,
        speakers: Z,
        channel: a,
        isStreamLive: T
      }, "speaker-header-".concat(t)) : 2 === t ? 0 === S ? null : (0, r.jsx)(m.Z, {
        participantCount: S,
        label: b.intl.string(b.t["3foUu7"]),
        className: y.header,
        onClick: () => z(!V),
        collapsed: V,
        channel: a
      }, "audience-header-".concat(t)) : null
    },
    sectionHeight: e => 48,
    renderRow: e => {
      let {
        section: t,
        row: n
      } = e, l = D[t][n];
      if ((null == l ? true : l.length) == null) return null;
      switch (t) {
        case 0:
          if (0 === l.length || null == l[0]) return null;
          return (0, r.jsx)("div", {
            className: y.focusedRow,
            children: (0, r.jsx)(g.Z, {
              channel: a,
              participant: l[0],
              width: B
            })
          }, "selected-participant");
        case 1:
          if (H) return null;
          return (0, r.jsx)(i.Fragment, {
            children: (0, r.jsx)(f.Z, {
              tileWidth: L,
              channel: a,
              participants: l,
              selectedParticipant: I
            })
          }, "speakers-".concat(t, "-").concat(n));
        case 2:
          if (V) return null;
          return (0, r.jsx)(p.Z, {
            channel: a,
            participants: l,
            maxTiles: N
          }, "audience-".concat(t, "-").concat(n));
        default:
          return null
      }
    },
    rowHeight: e => null == D[e][0] ? 0 : 0 === e ? B / g.Q + 8 : 1 === e ? H ? 0 : U : 98 * !V,
    renderFooter: e => {
      let {
        section: t
      } = e;
      return G(t) ? (0, r.jsx)("div", {
        className: y.spacer
      }, "bottom-spacer") : null
    },
    footerHeight: e => 1 === e ? 8 : 0 === e ? 12 : 88 * !!G(e),
    className: y.scroller,
    chunkSize: 60,
    onScroll: v
  })
})