/** Chunk was on 23736 **/
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
  } = (0, Chunk72897.p6)(Chunk65154.h7.AUDIO_INPUT), [t, n] = Chunk473749.useState(false), [i, l] = Chunk473749.useState([]), y = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getKrispSuppressionLevel()), [_, S] = Chunk473749.useState(null), E = Chunk473749.useRef(null), T = Chunk473749.useRef(null), [O, N] = Chunk473749.useState(.5), {
    krispModels: P,
    krispModelOverride: w,
    inputMode: I,
    echoCancellation: k,
    autoThreshold: R,
    vadUseKrisp: A,
    vadKrispActivationThreshold: D,
    noiseCancellation: Z,
    noiseSuppression: L,
    noiseSuppressionSupported: M,
    noiseCancellationSupported: U,
    noiseCancellationEnableStats: B,
    vadDuringPreProcess: F
  } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
    krispModels: Chunk131951.Z.getKrispModels(),
    krispModelOverride: Chunk131951.Z.getKrispModelOverride(),
    echoCancellation: Chunk131951.Z.getEchoCancellation(),
    autoThreshold: Chunk131951.Z.getModeOptions().autoThreshold,
    vadUseKrisp: Chunk131951.Z.getModeOptions().vadUseKrisp,
    inputMode: Chunk131951.Z.getMode(),
    vadKrispActivationThreshold: Chunk131951.Z.getKrispVadActivationThreshold(),
    noiseCancellation: Chunk131951.Z.getNoiseCancellation(),
    noiseSuppression: Chunk131951.Z.getNoiseSuppression(),
    noiseSuppressionSupported: Chunk131951.Z.isNoiseSuppressionSupported(),
    noiseCancellationSupported: Chunk131951.Z.isNoiseCancellationSupported(),
    noiseCancellationEnableStats: Chunk131951.Z.getKrispEnableStats(),
    vadDuringPreProcess: Chunk131951.Z.getModeOptions().vadDuringPreProcess
  })), G = Z ? "KRISP" : L ? "STANDARD" : "NONE", V = (0, Chunk304809.N)(), H = Chunk473749.useCallback(() => {
    var e;
    null == (e = E.current) || module.stop(), E.current = null, S(null)
  }, []);

  function W() {
    Chunk131951.Z.getMediaEngine().stopRecordingRawSamples()
  }

  function z(e) {
    if (t && W(), H(), null == V) return;
    let n = V.createBufferSource();
    n.buffer = e.audioBuffer, T.current = V.createGain(), T.current.gain.value = O, n.connect(T.current), T.current.connect(V.destination), n.loop = true, n.start(), E.current = n, S(e)
  }
  Chunk473749.useEffect(() => {
    H()
  }, [H]), (0, Chunk493773.zq)(() => {
    Chunk846027.Z.setMode(Chunk131951.Z.getMode(), {
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
  }), (0, Chunk54381.jsx)(Chunk481060.zJl, {
    className: Chunk663618.panel,
    children: (0, Chunk54381.jsxs)("div", {
      className: Chunk663380.innerPanel,
      children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-lg/bold",
        children: "Krisp Tester"
      }), (0, Chunk54381.jsx)(Chunk670863.j, {
        label: "Input Device",
        deviceType: Chunk65154.h7.AUDIO_INPUT,
        location: "DevToolsKrispTester"
      }), (0, Chunk54381.jsx)(Chunk199849.y6, {
        label: "Noise Cancellation",
        value: G,
        onChange: e => {
          u.Z.setNoiseCancellation("KRISP" === e), u.Z.setNoiseSuppression("STANDARD" === e)
        },
        options: q,
        popoutLayerContext: Chunk246992.O$
      }), "KRISP" === G && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
        children: [(0, Chunk54381.jsx)(Chunk481060.iRW, {
          label: "Krisp Suppression Level",
          initialValue: y,
          onValueChange: Chunk846027.Z.setKrispSuppressionLevel,
          minValue: 0,
          maxValue: 100
        }), (0, Chunk54381.jsx)(Chunk199849.B6, {
          label: "Krisp Model Override",
          clearable: true,
          clear: () => {
            Chunk846027.Z.setKrispModelOverride("")
          },
          isSelected: e => e === w,
          options: P.map(e => ({
            label: e,
            value: e
          })),
          select: e => {
            u.Z.setKrispModelOverride(e)
          },
          popoutLayerContext: Chunk246992.O$,
          serialize: e => e
        }), (0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: "Enable Stats",
          checked: B,
          onChange: e => u.Z.setNoiseCancellationEnableStats(e)
        })]
      }), I === Chunk65154.pM.VOICE_ACTIVITY && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
        children: [(0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: "Auto Threshold",
          checked: R,
          onChange: e => u.Z.setMode(g.pM.VOICE_ACTIVITY, {
            autoThreshold: e
          })
        }), R && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
          children: [(0, Chunk54381.jsx)(Chunk481060.rsf, {
            label: "Use Krisp VAD",
            checked: A,
            onChange: e => u.Z.setMode(g.pM.VOICE_ACTIVITY, {
              vadUseKrisp: e
            })
          }), A && (0, Chunk54381.jsx)(Chunk481060.iRW, {
            label: "Krisp VAD Activation Threshold",
            initialValue: D,
            onValueChange: e => u.Z.setMode(g.pM.VOICE_ACTIVITY, {
              vadKrispActivationThreshold: e
            }),
            minValue: 0,
            maxValue: 1
          })]
        }), (0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: "Run Before Processing",
          checked: null != F && F,
          onChange: e => u.Z.setMode(g.pM.VOICE_ACTIVITY, {
            vadDuringPreProcess: e
          })
        })]
      }), (0, Chunk54381.jsx)(Chunk481060.rsf, {
        label: "Echo Cancellation",
        checked: k,
        onChange: e => u.Z.setEchoCancellation(e)
      }), (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
        gap: 4,
        children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-sm/semibold",
          children: "Recorder"
        }), (0, Chunk54381.jsx)(Chunk755721.zx, {
          color: exports ? Chunk755721.zx.Colors.RED : Chunk755721.zx.Colors.BRAND,
          onClick: exports ? W : function() {
            H(), require(true), Chunk846027.Z.setLoopback("krisp_test", true), Chunk131951.Z.getMediaEngine().startRecordingRawSamples((t, a, r) => {
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
          children: exports ? "Stop Recording" : "Start Recording"
        })]
      }), (0, Chunk54381.jsx)(Chunk481060.iRW, {
        label: "Volume",
        initialValue: O,
        asValueChanges: function(e) {
          null != T.current && (T.current.gain.value = e, N(e))
        },
        minValue: 0,
        maxValue: 1
      }), (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
        gap: 4,
        children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-sm/semibold",
          children: "Recordings"
        }), Chunk345959.map((e, t) => (0, a.jsx)(C, {
          recording: e,
          playing: e === _,
          onPlay: z,
          onStop: H
        }, t))]
      })]
    })
  })
}