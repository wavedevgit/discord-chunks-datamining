/** Chunk was on 8345 **/
/** chunk id: 572444, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./17294.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk345959 = require("./345959.js"),
  l = require.n(Chunk345959),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk304809 = require("./304809.js"),
  Chunk670863 = require("./670863.jsx"),
  Chunk72897 = require("./72897.js"),
  Chunk131951 = require("./131951.js"),
  Chunk246992 = require("./246992.js"),
  Chunk65154 = require("./65154.js"),
  Chunk25016 = require("./25016.js"),
  Chunk866403 = require("./866403.js");

function v(e) {
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

function j(e) {
  let {
    recording: t,
    playing: n,
    onPlay: r,
    onStop: i
  } = e;
  return (0, a.jsx)(c.zF9, {
    collapsibleContent: (0, a.jsx)(v, {
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
            e.stopPropagation(), n ? i() : r(t)
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
            let n = new Blob([l()(t.audioBuffer)], {
                type: "audio/wav"
              }),
              a = URL.createObjectURL(n),
              r = document.createElement("a");
            r.href = a, r.download = "".concat(t.inputName, "-").concat(new Date(t.createdAt).toLocaleString(), ".wav"), r.click(), URL.revokeObjectURL(a)
          },
          children: (0, a.jsx)(c._8t, {
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
  } = (0, Chunk72897.p6)(Chunk65154.h7.AUDIO_INPUT), [t, n] = Chunk647438.useState(false), [i, l] = Chunk647438.useState([]), v = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getKrispSuppressionLevel()), [_, y] = Chunk647438.useState(null), C = Chunk647438.useRef(null), E = Chunk647438.useRef(null), [N, S] = Chunk647438.useState(.5), {
    krispModels: T,
    krispModelOverride: O,
    inputMode: P,
    echoCancellation: k,
    autoThreshold: I,
    vadUseKrisp: w,
    vadKrispActivationThreshold: R,
    noiseCancellation: A,
    noiseSuppression: Z,
    noiseSuppressionSupported: D,
    noiseCancellationSupported: L,
    noiseCancellationEnableStats: M
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
    noiseCancellationEnableStats: Chunk131951.Z.getKrispEnableStats()
  })), U = A ? "KRISP" : Z ? "STANDARD" : "NONE", F = (0, Chunk304809.N)(), G = Chunk647438.useCallback(() => {
    var e;
    null == (e = C.current) || module.stop(), C.current = null, y(null)
  }, []);

  function B() {
    Chunk131951.Z.getMediaEngine().stopRecordingRawSamples()
  }

  function z(e) {
    if (t && B(), G(), null == F) return;
    let n = F.createBufferSource();
    n.buffer = e.audioBuffer, E.current = F.createGain(), E.current.gain.value = N, n.connect(E.current), E.current.connect(F.destination), n.loop = true, n.start(), C.current = n, y(e)
  }
  Chunk647438.useEffect(() => {
    G()
  }, [G]);
  let V = [];
  return L && V.push({
    label: "Krisp",
    value: "KRISP"
  }), D && V.push({
    label: "Standard",
    value: "STANDARD"
  }), V.push({
    label: "Disabled",
    value: "NONE"
  }), (0, Chunk951288.jsx)(Chunk481060.zJl, {
    className: Chunk866403.panel,
    children: (0, Chunk951288.jsxs)("div", {
      className: Chunk25016.innerPanel,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-lg/bold",
        children: "Krisp Tester"
      }), (0, Chunk951288.jsx)(Chunk481060.hjN, {
        title: "Input Device",
        tag: Chunk481060.RB0.H3,
        children: (0, Chunk951288.jsx)(Chunk670863.j, {
          deviceType: Chunk65154.h7.AUDIO_INPUT,
          location: "DevToolsKrispTester"
        })
      }), (0, Chunk951288.jsx)(Chunk481060.hjN, {
        title: "Noise Cancellation",
        tag: Chunk481060.RB0.H3,
        children: (0, Chunk951288.jsx)(Chunk481060.q4e, {
          value: U,
          onChange: e => {
            d.Z.setNoiseCancellation("KRISP" === e), d.Z.setNoiseSuppression("STANDARD" === e)
          },
          options: V,
          popoutLayerContext: Chunk246992.O$
        })
      }), "KRISP" === U && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsx)(Chunk481060.hjN, {
          title: "Krisp Suppression Level",
          tag: Chunk481060.RB0.H3,
          children: (0, Chunk951288.jsx)(Chunk481060.iRW, {
            initialValue: v,
            onValueChange: Chunk846027.Z.setKrispSuppressionLevel,
            minValue: 0,
            maxValue: 100
          })
        }), (0, Chunk951288.jsx)(Chunk481060.hjN, {
          title: "Krisp Model Override",
          tag: Chunk481060.RB0.H3,
          children: (0, Chunk951288.jsx)(Chunk481060.PhF, {
            clearable: true,
            clear: () => {
              Chunk846027.Z.setKrispModelOverride("")
            },
            isSelected: e => e === O,
            options: T.map(e => ({
              label: e,
              value: e
            })),
            select: e => {
              d.Z.setKrispModelOverride(e)
            },
            popoutLayerContext: Chunk246992.O$,
            serialize: e => e
          })
        }), (0, Chunk951288.jsx)(Chunk481060.hjN, {
          title: "Noise Cancellation Stats",
          tag: Chunk481060.RB0.H3,
          children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
            label: "Enable Stats",
            checked: M,
            onChange: e => d.Z.setNoiseCancellationEnableStats(e)
          })
        })]
      }), P === Chunk65154.pM.VOICE_ACTIVITY && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsx)(Chunk481060.hjN, {
          title: "VAD Auto Threshold",
          tag: Chunk481060.RB0.H3,
          children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
            label: "Auto Threshold",
            checked: I,
            onChange: e => d.Z.setMode(f.pM.VOICE_ACTIVITY, {
              autoThreshold: e
            })
          })
        }), I && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
          children: [(0, Chunk951288.jsx)(Chunk481060.hjN, {
            title: "VAD Krisp Auto Threshold",
            tag: Chunk481060.RB0.H3,
            children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
              label: "Use Krisp VAD",
              checked: w,
              onChange: e => d.Z.setMode(f.pM.VOICE_ACTIVITY, {
                vadUseKrisp: e
              })
            })
          }), w && (0, Chunk951288.jsx)(Chunk481060.hjN, {
            title: "Krisp VAD Activation Threshold",
            tag: Chunk481060.RB0.H3,
            children: (0, Chunk951288.jsx)(Chunk481060.iRW, {
              initialValue: R,
              onValueChange: e => d.Z.setMode(f.pM.VOICE_ACTIVITY, {
                vadKrispActivationThreshold: e
              }),
              minValue: 0,
              maxValue: 1
            })
          })]
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.hjN, {
        tag: Chunk481060.RB0.H3,
        children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
          label: "Echo Cancellation",
          checked: k,
          onChange: e => d.Z.setEchoCancellation(e)
        })
      }), (0, Chunk951288.jsx)(Chunk481060.hjN, {
        title: "Recorder",
        tag: Chunk481060.RB0.H3,
        children: (0, Chunk951288.jsx)(Chunk755721.zx, {
          color: exports ? Chunk755721.zx.Colors.RED : Chunk755721.zx.Colors.BRAND,
          onClick: exports ? B : function() {
            G(), require(true), Chunk846027.Z.setLoopback("krisp_test", true), Chunk131951.Z.getMediaEngine().startRecordingRawSamples((t, a, r) => {
              n(false), d.Z.setLoopback("krisp_test", false);
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
                suppression: U,
                echoCancellation: k,
                krispSuppressionLevel: v
              }])
            })
          },
          children: exports ? "Stop Recording" : "Start Recording"
        })
      }), (0, Chunk951288.jsx)(Chunk481060.hjN, {
        title: "Volume",
        tag: Chunk481060.RB0.H3,
        children: (0, Chunk951288.jsx)(Chunk481060.iRW, {
          initialValue: N,
          asValueChanges: function(e) {
            null != E.current && (E.current.gain.value = e, S(e))
          },
          minValue: 0,
          maxValue: 1
        })
      }), (0, Chunk951288.jsx)(Chunk481060.hjN, {
        title: "Recordings",
        tag: Chunk481060.RB0.H3,
        children: Chunk345959.map((e, t) => (0, a.jsx)(j, {
          recording: e,
          playing: e === _,
          onPlay: z,
          onStop: G
        }, t))
      })]
    })
  })
}