/** Chunk was on 61526 **/
/** chunk id: 22989, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk240872 = require("./240872.jsx"),
  Chunk579806 = require("./579806.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk39604 = require("./39604.js"),
  Chunk212039 = require("./212039.js"),
  Chunk259612 = require("./259612.js"),
  Chunk572720 = require("./572720.js"),
  Chunk362693 = require("./362693.jsx"),
  Chunk674908 = require("./674908.jsx"),
  Chunk20437 = require("./20437.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk285006 = require("./285006.js");

function j(e) {
  var t, n, j, y, _, w, C, k;
  let {
    clip: O,
    channelId: P,
    transitionState: S,
    onClose: N
  } = e, [E, R] = a.useState(true), [L, T] = a.useState(null), [F, D] = a.useState(null), {
    analyticsLocations: I
  } = (0, c.ZP)(u.Z.CLIPS_EDITOR);
  a.useEffect(() => {
    !async function() {
      let e;
      try {
        e = await s.Z.clips.loadClip(O.filepath)
      } catch (e) {
        N(), o.Z.show({
          title: x.intl.string(x.t.yjoSOD),
          body: x.intl.string(x.t.JmYczc)
        });
        return
      }
      let t = await (0, m.w)(e.data.buffer),
        n = URL.createObjectURL(new Blob([t], {
          type: "audio/mp4"
        })),
        r = URL.createObjectURL(new Blob([e.data], {
          type: "video/mp4"
        }));
      D(n), T(r)
    }()
  }, [O.filepath, N]), a.useEffect(() => () => {
    null != L && URL.revokeObjectURL(L)
  }, [L]), a.useEffect(() => () => {
    null != F && URL.revokeObjectURL(F)
  }, [F]);
  let [A, Z] = a.useState(null == (_ = null == (t = O.editMetadata) ? true : t.voiceAudio) || _), [B, M] = a.useState(null == (w = null == (n = O.editMetadata) ? true : n.applicationAudio) || w), [z, H] = a.useState({
    start: null != (C = null == (j = O.editMetadata) ? true : j.start) ? C : 0,
    end: null != (k = null == (y = O.editMetadata) ? true : y.end) ? k : 0
  }), [W, U] = a.useState(O.name), V = a.useRef({
    name: W,
    editMetadata: {
      start: z.start,
      end: z.end,
      voiceAudio: A,
      applicationAudio: B
    }
  });
  V.current = {
    name: W,
    editMetadata: {
      start: z.start,
      end: z.end,
      voiceAudio: A,
      applicationAudio: B
    }
  };
  let X = (0, f.l)(O);
  a.useEffect(() => {
    async function e() {
      let e = {};
      null != X && (e = {
        thumbnail: await (0, p.R)(X, V.current.editMetadata.start)
      }), (0, d.Tm)(O.id, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({}, V.current, e))
    }
    return () => {
      e()
    }
  }, [O.id, X]);
  let G = a.useRef(null),
    K = a.useMemo(() => ({
      videoPlayerRef: G,
      applicationAudioEnabled: B,
      setApplicationAudioEnabled: M,
      voiceAudioEnabled: A,
      setVoiceAudioEnabled: Z,
      cropData: z,
      setCropData: H
    }), [B, A, z]);
  return (0, r.jsx)(i.Y0X, {
    impression: {
      impressionName: l.ImpressionNames.CLIP_EDITOR_VIEWED
    },
    size: i.CgR.DYNAMIC,
    className: b.modalRoot,
    transitionState: S,
    parentComponent: "ClipsEditModal",
    children: (0, r.jsx)(c.Gt, {
      value: I,
      children: (0, r.jsx)(i.hzk, {
        className: b.modalContent,
        children: (0, r.jsx)(g.Q.Provider, {
          value: K,
          children: null == L || null == F ? (0, r.jsx)("div", {
            className: b.spinnerContainer,
            children: (0, r.jsx)(i.$jN, {})
          }) : (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(v.Z, {
              videoURL: L,
              isLoading: E,
              onDoneLoading: () => R(false),
              audioURL: F,
              transitionState: S
            }), !E && (0, r.jsx)(h.Z, {
              channelId: P,
              onSetClipName: U,
              clipName: W,
              clip: O,
              onClose: N
            })]
          })
        })
      })
    })
  })
}