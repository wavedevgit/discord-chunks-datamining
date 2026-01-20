/** Chunk was on 22979 **/
/** chunk id: 572444, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./17294.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk345959 = require("./345959.js"),
  l = require.n(Chunk345959),
  Chunk442837 = require("./442837.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk493773 = require("./493773.js"),
  Chunk304809 = require("./304809.js"),
  Chunk670863 = require("./670863.jsx"),
  Chunk72897 = require("./72897.js"),
  Chunk131951 = require("./131951.js"),
  Chunk246992 = require("./246992.js"),
  Chunk65154 = require("./65154.js"),
  Chunk663380 = require("./663380.js"),
  Chunk663618 = require("./663618.js");

function y(e) {
  let {
    recording: t
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(d.Text, {
      variant: "text-sm/normal",
      children: ["Duration: ", t.audioBuffer.duration]
    }), (0, a.jsxs)(d.Text, {
      variant: "text-sm/normal",
      children: ["Num Channels: ", t.audioBuffer.numberOfChannels]
    }), (0, a.jsxs)(d.Text, {
      variant: "text-sm/normal",
      children: ["Sample Rate: ", t.audioBuffer.sampleRate]
    }), (0, a.jsxs)(d.Text, {
      variant: "text-sm/normal",
      children: ["Noise Suppression: ", t.suppression]
    }), (0, a.jsxs)(d.Text, {
      variant: "text-sm/normal",
      children: ["Krisp Suppression Level: ", t.krispSuppressionLevel]
    }), (0, a.jsxs)(d.Text, {
      variant: "text-sm/normal",
      children: ["Echo Cancellation: ", String(t.echoCancellation)]
    })]
  })
}

function C(e) {
  let {
    recording: t,
    playing: n,
    onPlay: r,
    onStop: i
  } = e;
  return (0, a.jsx)(d.zF9, {
    collapsibleContent: (0, a.jsx)(y, {
      recording: t
    }),
    children: e => {
      let {
        onClick: s
      } = e;
      return (0, a.jsxs)(d.P3F, {
        onClick: s,
        children: [(0, a.jsxs)(d.Text, {
          variant: "text-sm/bold",
          tag: "span",
          children: [t.inputName, " - ", new Date(t.createdAt).toLocaleString()]
        }), (0, a.jsx)(d.P3F, {
          tag: "span",
          onClick: e => {
            e.stopPropagation(), n ? i() : r(t)
          },
          children: n ? (0, a.jsx)(d.fpf, {
            size: "xxs"
          }) : (0, a.jsx)(d.o1U, {
            size: "xxs"
          })
        }), (0, a.jsx)(d.P3F, {
          tag: "span",
          onClick: e => {
            e.stopPropagation();
            let n = new Blob([l()(t.audioBuffer)], {
                type: "audio/wav"
              }),
              a = URL.createObjectURL(n),
              r = document.createElement("a");
            r.href = a, r.download = "".concat(t.inputName, "-").concat(new Date(t.createdAt).toLocaleString(), ".wav"), r.click(), URL.revokeObjectURL(a)
          },
          children: (0, a.jsx)(d._8t, {
            size: "xxs"
          })
        })]
      })
    }
  })
}

function _() {
  let {
    name: e
  } = (0, f.p6)(g.h7.AUDIO_INPUT), [t, n] = r.useState(false), [i, l] = r.useState([]), y = (0, s.e7)([x.Z], () => x.Z.getKrispSuppressionLevel()), [_, S] = r.useState(null), E = r.useRef(null), T = r.useRef(null), [O, N] = r.useState(.5), {
    krispModels: P,
    krispModelOverride: w,
    inputMode: I,
    echoCancellation: k,
    autoThreshold: R,
    vadUseKrisp: A,
    vadKrispActivationThreshold: Z,
    noiseCancellation: D,
    noiseSuppression: L,
    noiseSuppressionSupported: M,
    noiseCancellationSupported: U,
    noiseCancellationEnableStats: B,
    vadDuringPreProcess: F
  } = (0, s.cj)([x.Z], () => ({
    krispModels: x.Z.getKrispModels(),
    krispModelOverride: x.Z.getKrispModelOverride(),
    echoCancellation: x.Z.getEchoCancellation(),
    autoThreshold: x.Z.getModeOptions().autoThreshold,
    vadUseKrisp: x.Z.getModeOptions().vadUseKrisp,
    inputMode: x.Z.getMode(),
    vadKrispActivationThreshold: x.Z.getKrispVadActivationThreshold(),
    noiseCancellation: x.Z.getNoiseCancellation(),
    noiseSuppression: x.Z.getNoiseSuppression(),
    noiseSuppressionSupported: x.Z.isNoiseSuppressionSupported(),
    noiseCancellationSupported: x.Z.isNoiseCancellationSupported(),
    noiseCancellationEnableStats: x.Z.getKrispEnableStats(),
    vadDuringPreProcess: x.Z.getModeOptions().vadDuringPreProcess
  })), G = D ? "KRISP" : L ? "STANDARD" : "NONE", V = (0, p.N)(), z = r.useCallback(() => {
    var e;
    null == (e = E.current) || e.stop(), E.current = null, S(null)
  }, []);

  function W() {
    x.Z.getMediaEngine().stopRecordingRawSamples()
  }

  function H(e) {
    if (t && W(), z(), null == V) return;
    let n = V.createBufferSource();
    n.buffer = e.audioBuffer, T.current = V.createGain(), T.current.gain.value = O, n.connect(T.current), T.current.connect(V.destination), n.loop = true, n.start(), E.current = n, S(e)
  }
  r.useEffect(() => {
    z()
  }, [z]), (0, m.zq)(() => {
    u.Z.setMode(x.Z.getMode(), {
      vadDuringPreProcess: null,
      vadKrispActivationThreshold: true
    })
  });
  let q = [];
  return U && q.push({
    label: "Krisp",
    value: "KRISP"
  }), M && q.push({
    label: "Standard",
    value: "STANDARD"
  }), q.push({
    label: "Disabled",
    value: "NONE"
  }), (0, a.jsx)(d.zJl, {
    className: j.panel,
    children: (0, a.jsxs)("div", {
      className: v.innerPanel,
      children: [(0, a.jsx)(d.Text, {
        variant: "text-lg/bold",
        children: "Krisp Tester"
      }), (0, a.jsx)(h.j, {
        label: "Input Device",
        deviceType: g.h7.AUDIO_INPUT,
        location: "DevToolsKrispTester"
      }), (0, a.jsx)(o.y6, {
        label: "Noise Cancellation",
        value: G,
        onChange: e => {
          u.Z.setNoiseCancellation("KRISP" === e), u.Z.setNoiseSuppression("STANDARD" === e)
        },
        options: q,
        popoutLayerContext: b.O$
      }), "KRISP" === G && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(d.iRW, {
          label: "Krisp Suppression Level",
          initialValue: y,
          onValueChange: u.Z.setKrispSuppressionLevel,
          minValue: 0,
          maxValue: 100
        }), (0, a.jsx)(o.B6, {
          label: "Krisp Model Override",
          clearable: true,
          clear: () => {
            u.Z.setKrispModelOverride("")
          },
          isSelected: e => e === w,
          options: P.map(e => ({
            label: e,
            value: e
          })),
          select: e => {
            u.Z.setKrispModelOverride(e)
          },
          popoutLayerContext: b.O$,
          serialize: e => e
        }), (0, a.jsx)(d.rsf, {
          label: "Enable Stats",
          checked: B,
          onChange: e => u.Z.setNoiseCancellationEnableStats(e)
        })]
      }), I === g.pM.VOICE_ACTIVITY && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(d.rsf, {
          label: "Auto Threshold",
          checked: R,
          onChange: e => u.Z.setMode(g.pM.VOICE_ACTIVITY, {
            autoThreshold: e
          })
        }), R && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(d.rsf, {
            label: "Use Krisp VAD",
            checked: A,
            onChange: e => u.Z.setMode(g.pM.VOICE_ACTIVITY, {
              vadUseKrisp: e
            })
          }), A && (0, a.jsx)(d.iRW, {
            label: "Krisp VAD Activation Threshold",
            initialValue: Z,
            onValueChange: e => u.Z.setMode(g.pM.VOICE_ACTIVITY, {
              vadKrispActivationThreshold: e
            }),
            minValue: 0,
            maxValue: 1
          })]
        }), (0, a.jsx)(d.rsf, {
          label: "Run Before Processing",
          checked: null != F && F,
          onChange: e => u.Z.setMode(g.pM.VOICE_ACTIVITY, {
            vadDuringPreProcess: e
          })
        })]
      }), (0, a.jsx)(d.rsf, {
        label: "Echo Cancellation",
        checked: k,
        onChange: e => u.Z.setEchoCancellation(e)
      }), (0, a.jsxs)(d.Kqy, {
        gap: 4,
        children: [(0, a.jsx)(d.Text, {
          variant: "text-sm/semibold",
          children: "Recorder"
        }), (0, a.jsx)(c.zx, {
          color: t ? c.zx.Colors.RED : c.zx.Colors.BRAND,
          onClick: t ? W : function() {
            z(), n(true), u.Z.setLoopback("krisp_test", true), x.Z.getMediaEngine().startRecordingRawSamples((t, a, r) => {
              n(false), u.Z.setLoopback("krisp_test", false);
              let i = new AudioBuffer({
                length: t.length,
                sampleRate: r,
                numberOfChannels: a
              });
              for (let e = 0; e < a; e++) {
                let n = new Float32Array(t.length / a);
                for (let r = 0; r < t.length / a; r++) n[r] = t[r * a + e] / 32768;
                i.copyToChannel(n, e)
              }
              l(t => [...t, {
                inputName: e,
                audioBuffer: i,
                createdAt: Date.now(),
                suppression: G,
                echoCancellation: k,
                krispSuppressionLevel: y
              }])
            })
          },
          children: t ? "Stop Recording" : "Start Recording"
        })]
      }), (0, a.jsx)(d.iRW, {
        label: "Volume",
        initialValue: O,
        asValueChanges: function(e) {
          null != T.current && (T.current.gain.value = e, N(e))
        },
        minValue: 0,
        maxValue: 1
      }), (0, a.jsxs)(d.Kqy, {
        gap: 4,
        children: [(0, a.jsx)(d.Text, {
          variant: "text-sm/semibold",
          children: "Recordings"
        }), i.map((e, t) => (0, a.jsx)(C, {
          recording: e,
          playing: e === _,
          onPlay: H,
          onStop: z
        }, t))]
      })]
    })
  })
}