/** Chunk was on 91394 **/
/** chunk id: 572444, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./17294.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk345959 = require("./345959.js"),
  i = require.n(Chunk345959),
  Chunk442837 = require("./442837.js"),
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
  Chunk653301 = require("./653301.js"),
  Chunk451429 = require("./451429.js");

function j(e) {
  let {
    recording: t
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(c.Text, {
      variant: "text-sm/normal",
      children: ["Duration: ", t.audioBuffer.duration]
    }), (0, a.jsxs)(c.Text, {
      variant: "text-sm/normal",
      children: ["Num Channels: ", t.audioBuffer.numberOfChannels]
    }), (0, a.jsxs)(c.Text, {
      variant: "text-sm/normal",
      children: ["Sample Rate: ", t.audioBuffer.sampleRate]
    }), (0, a.jsxs)(c.Text, {
      variant: "text-sm/normal",
      children: ["Noise Suppression: ", t.suppression]
    }), (0, a.jsxs)(c.Text, {
      variant: "text-sm/normal",
      children: ["Krisp Suppression Level: ", t.krispSuppressionLevel]
    }), (0, a.jsxs)(c.Text, {
      variant: "text-sm/normal",
      children: ["Echo Cancellation: ", String(t.echoCancellation)]
    })]
  })
}

function _(e) {
  let {
    recording: t,
    playing: n,
    onPlay: l,
    onStop: r
  } = e;
  return (0, a.jsx)(c.zF9, {
    collapsibleContent: (0, a.jsx)(j, {
      recording: t
    }),
    children: e => {
      let {
        onClick: s
      } = e;
      return (0, a.jsxs)(c.P3F, {
        onClick: s,
        children: [(0, a.jsxs)(c.Text, {
          variant: "text-sm/bold",
          tag: "span",
          children: [t.inputName, " - ", new Date(t.createdAt).toLocaleString()]
        }), (0, a.jsx)(c.P3F, {
          tag: "span",
          onClick: e => {
            e.stopPropagation(), n ? r() : l(t)
          },
          children: n ? (0, a.jsx)(c.fpf, {
            size: "xxs"
          }) : (0, a.jsx)(c.o1U, {
            size: "xxs"
          })
        }), (0, a.jsx)(c.P3F, {
          tag: "span",
          onClick: e => {
            e.stopPropagation();
            let n = new Blob([i()(t.audioBuffer)], {
                type: "audio/wav"
              }),
              a = URL.createObjectURL(n),
              l = document.createElement("a");
            l.href = a, l.download = "".concat(t.inputName, "-").concat(new Date(t.createdAt).toLocaleString(), ".wav"), l.click(), URL.revokeObjectURL(a)
          },
          children: (0, a.jsx)(c._8t, {
            size: "xxs"
          })
        })]
      })
    }
  })
}

function y() {
  let {
    name: e
  } = (0, Chunk72897.p6)(Chunk65154.h7.AUDIO_INPUT), [t, n] = Chunk473749.useState(false), [r, i] = Chunk473749.useState([]), j = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getKrispSuppressionLevel()), [y, C] = Chunk473749.useState(null), S = Chunk473749.useRef(null), E = Chunk473749.useRef(null), [O, T] = Chunk473749.useState(.5), {
    krispModels: N,
    krispModelOverride: P,
    inputMode: w,
    echoCancellation: I,
    autoThreshold: k,
    vadUseKrisp: R,
    vadKrispActivationThreshold: A,
    noiseCancellation: Z,
    noiseSuppression: D,
    noiseSuppressionSupported: L,
    noiseCancellationSupported: M,
    noiseCancellationEnableStats: U,
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
  })), B = Z ? "KRISP" : D ? "STANDARD" : "NONE", G = (0, Chunk304809.N)(), z = Chunk473749.useCallback(() => {
    var e;
    null == (e = S.current) || module.stop(), S.current = null, C(null)
  }, []);

  function V() {
    Chunk131951.Z.getMediaEngine().stopRecordingRawSamples()
  }

  function H(e) {
    if (t && V(), z(), null == G) return;
    let n = G.createBufferSource();
    n.buffer = e.audioBuffer, E.current = G.createGain(), E.current.gain.value = O, n.connect(E.current), E.current.connect(G.destination), n.loop = true, n.start(), S.current = n, C(e)
  }
  Chunk473749.useEffect(() => {
    z()
  }, [z]), (0, Chunk493773.zq)(() => {
    Chunk846027.Z.setMode(Chunk131951.Z.getMode(), {
      vadDuringPreProcess: null,
      vadKrispActivationThreshold: true
    })
  });
  let W = [];
  return M && W.push({
    label: "Krisp",
    value: "KRISP"
  }), L && W.push({
    label: "Standard",
    value: "STANDARD"
  }), W.push({
    label: "Disabled",
    value: "NONE"
  }), (0, Chunk54381.jsx)(Chunk481060.zJl, {
    className: Chunk451429.panel,
    children: (0, Chunk54381.jsxs)("div", {
      className: Chunk653301.innerPanel,
      children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-lg/bold",
        children: "Krisp Tester"
      }), (0, Chunk54381.jsx)(Chunk670863.j, {
        label: "Input Device",
        deviceType: Chunk65154.h7.AUDIO_INPUT,
        location: "DevToolsKrispTester"
      }), (0, Chunk54381.jsx)(Chunk481060.q4e, {
        label: "Noise Cancellation",
        value: B,
        onChange: e => {
          d.Z.setNoiseCancellation("KRISP" === e), d.Z.setNoiseSuppression("STANDARD" === e)
        },
        options: W,
        popoutLayerContext: Chunk246992.O$
      }), "KRISP" === B && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
        children: [(0, Chunk54381.jsx)(Chunk481060.iRW, {
          label: "Krisp Suppression Level",
          initialValue: j,
          onValueChange: Chunk846027.Z.setKrispSuppressionLevel,
          minValue: 0,
          maxValue: 100
        }), (0, Chunk54381.jsx)(Chunk481060.PhF, {
          label: "Krisp Model Override",
          clearable: true,
          clear: () => {
            Chunk846027.Z.setKrispModelOverride("")
          },
          isSelected: e => e === P,
          options: N.map(e => ({
            label: e,
            value: e
          })),
          select: e => {
            d.Z.setKrispModelOverride(e)
          },
          popoutLayerContext: Chunk246992.O$,
          serialize: e => e
        }), (0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: "Enable Stats",
          checked: U,
          onChange: e => d.Z.setNoiseCancellationEnableStats(e)
        })]
      }), w === Chunk65154.pM.VOICE_ACTIVITY && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
        children: [(0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: "Auto Threshold",
          checked: k,
          onChange: e => d.Z.setMode(f.pM.VOICE_ACTIVITY, {
            autoThreshold: e
          })
        }), k && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
          children: [(0, Chunk54381.jsx)(Chunk481060.rsf, {
            label: "Use Krisp VAD",
            checked: R,
            onChange: e => d.Z.setMode(f.pM.VOICE_ACTIVITY, {
              vadUseKrisp: e
            })
          }), R && (0, Chunk54381.jsx)(Chunk481060.iRW, {
            label: "Krisp VAD Activation Threshold",
            initialValue: A,
            onValueChange: e => d.Z.setMode(f.pM.VOICE_ACTIVITY, {
              vadKrispActivationThreshold: e
            }),
            minValue: 0,
            maxValue: 1
          })]
        }), (0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: "Run Before Processing",
          checked: null != F && F,
          onChange: e => d.Z.setMode(f.pM.VOICE_ACTIVITY, {
            vadDuringPreProcess: e
          })
        })]
      }), (0, Chunk54381.jsx)(Chunk481060.rsf, {
        label: "Echo Cancellation",
        checked: I,
        onChange: e => d.Z.setEchoCancellation(e)
      }), (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
        gap: 4,
        children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-sm/semibold",
          children: "Recorder"
        }), (0, Chunk54381.jsx)(Chunk755721.zx, {
          color: exports ? Chunk755721.zx.Colors.RED : Chunk755721.zx.Colors.BRAND,
          onClick: exports ? V : function() {
            z(), require(true), Chunk846027.Z.setLoopback("krisp_test", true), Chunk131951.Z.getMediaEngine().startRecordingRawSamples((t, a, l) => {
              n(false), d.Z.setLoopback("krisp_test", false);
              let r = new AudioBuffer({
                length: t.length,
                sampleRate: l,
                numberOfChannels: a
              });
              for (let e = 0; e < a; e++) {
                let n = new Float32Array(t.length / a);
                for (let l = 0; l < t.length / a; l++) n[l] = t[l * a + e] / 32768;
                r.copyToChannel(n, e)
              }
              i(t => [...t, {
                inputName: e,
                audioBuffer: r,
                createdAt: Date.now(),
                suppression: B,
                echoCancellation: I,
                krispSuppressionLevel: j
              }])
            })
          },
          children: exports ? "Stop Recording" : "Start Recording"
        })]
      }), (0, Chunk54381.jsx)(Chunk481060.iRW, {
        label: "Volume",
        initialValue: O,
        asValueChanges: function(e) {
          null != E.current && (E.current.gain.value = e, T(e))
        },
        minValue: 0,
        maxValue: 1
      }), (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
        gap: 4,
        children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-sm/semibold",
          children: "Recordings"
        }), Chunk345959.map((e, t) => (0, a.jsx)(_, {
          recording: e,
          playing: e === y,
          onPlay: H,
          onStop: z
        }, t))]
      })]
    })
  })
}