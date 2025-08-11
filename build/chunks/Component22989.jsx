/** Chunk was on 61526 **/
/** chunk id: 22989, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk138339 = require("./138339.js");

function j(e) {
  var t, n, j, y, _, w, C, P;
  let {
    clip: k,
    channelId: O,
    transitionState: S,
    onClose: N
  } = e, [E, R] = r.useState(true), [L, T] = r.useState(null), [F, D] = r.useState(null), {
    analyticsLocations: I
  } = (0, c.ZP)(u.Z.CLIPS_EDITOR);
  r.useEffect(() => {
    !async function() {
      let e;
      try {
        e = await s.Z.clips.loadClip(k.filepath)
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
        a = URL.createObjectURL(new Blob([e.data], {
          type: "video/mp4"
        }));
      D(n), T(a)
    }()
  }, [k.filepath, N]), r.useEffect(() => () => {
    null != L && URL.revokeObjectURL(L)
  }, [L]), r.useEffect(() => () => {
    null != F && URL.revokeObjectURL(F)
  }, [F]);
  let [A, Z] = r.useState(null == (_ = null == (t = k.editMetadata) ? true : t.voiceAudio) || _), [B, M] = r.useState(null == (w = null == (n = k.editMetadata) ? true : n.applicationAudio) || w), [z, H] = r.useState({
    start: null != (C = null == (j = k.editMetadata) ? true : j.start) ? C : 0,
    end: null != (P = null == (y = k.editMetadata) ? true : y.end) ? P : 0
  }), [W, U] = r.useState(k.name), V = r.useRef({
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
  let X = (0, f.l)(k);
  r.useEffect(() => {
    async function e() {
      let e = {};
      null != X && (e = {
        thumbnail: await (0, p.R)(X, V.current.editMetadata.start)
      }), (0, d.Tm)(k.id, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), a.forEach(function(t) {
            var a;
            a = n[t], t in e ? Object.defineProperty(e, t, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = a
          })
        }
        return e
      }({}, V.current, e))
    }
    return () => {
      e()
    }
  }, [k.id, X]);
  let G = r.useRef(null),
    K = r.useMemo(() => ({
      videoPlayerRef: G,
      applicationAudioEnabled: B,
      setApplicationAudioEnabled: M,
      voiceAudioEnabled: A,
      setVoiceAudioEnabled: Z,
      cropData: z,
      setCropData: H
    }), [B, A, z]);
  return (0, a.jsx)(i.Y0X, {
    impression: {
      impressionName: l.ImpressionNames.CLIP_EDITOR_VIEWED
    },
    size: i.CgR.DYNAMIC,
    className: b.modalRoot,
    transitionState: S,
    parentComponent: "ClipsEditModal",
    children: (0, a.jsx)(c.Gt, {
      value: I,
      children: (0, a.jsx)(i.hzk, {
        className: b.modalContent,
        children: (0, a.jsx)(g.Q.Provider, {
          value: K,
          children: null == L || null == F ? (0, a.jsx)("div", {
            className: b.spinnerContainer,
            children: (0, a.jsx)(i.$jN, {})
          }) : (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(v.Z, {
              videoURL: L,
              isLoading: E,
              onDoneLoading: () => R(false),
              audioURL: F,
              transitionState: S
            }), !E && (0, a.jsx)(h.Z, {
              channelId: O,
              onSetClipName: U,
              clipName: W,
              clip: k,
              onClose: N
            })]
          })
        })
      })
    })
  })
}