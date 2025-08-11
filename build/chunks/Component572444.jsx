/** Chunk was on 93886 **/
/** chunk id: 572444, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./17294.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk345959 = require("./345959.js"),
  i = require.n(Chunk345959),
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
  Chunk203759 = require("./203759.js"),
  Chunk616257 = require("./616257.js");

function j(e) {
  let {
    recording: t
  } = e;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(c.Text, {
      variant: "text-sm/normal",
      children: ["Duration: ", t.audioBuffer.duration]
    }), (0, n.jsxs)(c.Text, {
      variant: "text-sm/normal",
      children: ["Num Channels: ", t.audioBuffer.numberOfChannels]
    }), (0, n.jsxs)(c.Text, {
      variant: "text-sm/normal",
      children: ["Sample Rate: ", t.audioBuffer.sampleRate]
    }), (0, n.jsxs)(c.Text, {
      variant: "text-sm/normal",
      children: ["Noise Suppression: ", t.suppression]
    }), (0, n.jsxs)(c.Text, {
      variant: "text-sm/normal",
      children: ["Krisp Suppression Level: ", t.krispSuppressionLevel]
    }), (0, n.jsxs)(c.Text, {
      variant: "text-sm/normal",
      children: ["Echo Cancellation: ", String(t.echoCancellation)]
    })]
  })
}

function g(e) {
  let {
    recording: t,
    playing: a,
    onPlay: r,
    onStop: l
  } = e;
  return (0, n.jsx)(c.zF9, {
    collapsibleContent: (0, n.jsx)(j, {
      recording: t
    }),
    children: e => {
      let {
        onClick: s
      } = e;
      return (0, n.jsxs)(c.P3F, {
        onClick: s,
        children: [(0, n.jsxs)(c.Text, {
          variant: "text-sm/bold",
          tag: "span",
          children: [t.inputName, " - ", new Date(t.createdAt).toLocaleString()]
        }), (0, n.jsx)(c.P3F, {
          tag: "span",
          onClick: e => {
            e.stopPropagation(), a ? l() : r(t)
          },
          children: a ? (0, n.jsx)(c.fpf, {
            size: "xxs"
          }) : (0, n.jsx)(c.o1U, {
            size: "xxs"
          })
        }), (0, n.jsx)(c.P3F, {
          tag: "span",
          onClick: e => {
            e.stopPropagation();
            let a = new Blob([i()(t.audioBuffer)], {
                type: "audio/wav"
              }),
              n = URL.createObjectURL(a),
              r = document.createElement("a");
            r.href = n, r.download = "".concat(t.inputName, "-").concat(new Date(t.createdAt).toLocaleString(), ".wav"), r.click(), URL.revokeObjectURL(n)
          },
          children: (0, n.jsx)(c._8t, {
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
  } = (0, Chunk72897.p6)(Chunk65154.h7.AUDIO_INPUT), [t, a] = Chunk73800.useState(false), [l, i] = Chunk73800.useState([]), j = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getKrispSuppressionLevel()), [_, y] = Chunk73800.useState(null), C = Chunk73800.useRef(null), N = Chunk73800.useRef(null), [O, T] = Chunk73800.useState(.5), {
    krispModels: E,
    krispModelOverride: S,
    inputMode: P,
    echoCancellation: w,
    autoThreshold: I,
    vadUseKrisp: k,
    vadKrispActivationThreshold: R,
    noiseCancellation: Z,
    noiseSuppression: A,
    noiseSuppressionSupported: D,
    noiseCancellationSupported: L,
    noiseCancellationEnableStats: B
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
  })), M = Z ? "KRISP" : A ? "STANDARD" : "NONE", F = (0, Chunk304809.N)(), U = Chunk73800.useCallback(() => {
    var e;
    null == (e = C.current) || module.stop(), C.current = null, y(null)
  }, []);

  function z() {
    Chunk131951.Z.getMediaEngine().stopRecordingRawSamples()
  }

  function G(e) {
    if (t && z(), U(), null == F) return;
    let a = F.createBufferSource();
    a.buffer = e.audioBuffer, N.current = F.createGain(), N.current.gain.value = O, a.connect(N.current), N.current.connect(F.destination), a.loop = true, a.start(), C.current = a, y(e)
  }
  Chunk73800.useEffect(() => {
    U()
  }, [U]);
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
  }), (0, Chunk255367.jsx)(Chunk481060.zJl, {
    className: Chunk616257.panel,
    children: (0, Chunk255367.jsxs)("div", {
      className: Chunk203759.innerPanel,
      children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
        variant: "text-lg/bold",
        children: "Krisp Tester"
      }), (0, Chunk255367.jsx)(Chunk481060.hjN, {
        title: "Input Device",
        tag: Chunk481060.RB0.H3,
        children: (0, Chunk255367.jsx)(Chunk670863.j, {
          deviceType: Chunk65154.h7.AUDIO_INPUT,
          location: "DevToolsKrispTester"
        })
      }), (0, Chunk255367.jsx)(Chunk481060.hjN, {
        title: "Noise Cancellation",
        tag: Chunk481060.RB0.H3,
        children: (0, Chunk255367.jsx)(Chunk481060.q4e, {
          value: M,
          onChange: e => {
            d.Z.setNoiseCancellation("KRISP" === e), d.Z.setNoiseSuppression("STANDARD" === e)
          },
          options: V,
          popoutLayerContext: Chunk246992.O$
        })
      }), "KRISP" === M && (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
        children: [(0, Chunk255367.jsx)(Chunk481060.hjN, {
          title: "Krisp Suppression Level",
          tag: Chunk481060.RB0.H3,
          children: (0, Chunk255367.jsx)(Chunk481060.iRW, {
            initialValue: j,
            onValueChange: Chunk846027.Z.setKrispSuppressionLevel,
            minValue: 0,
            maxValue: 100
          })
        }), (0, Chunk255367.jsx)(Chunk481060.hjN, {
          title: "Krisp Model Override",
          tag: Chunk481060.RB0.H3,
          children: (0, Chunk255367.jsx)(Chunk481060.PhF, {
            clearable: true,
            clear: () => {
              Chunk846027.Z.setKrispModelOverride("")
            },
            isSelected: e => e === S,
            options: E.map(e => ({
              label: e,
              value: e
            })),
            select: e => {
              d.Z.setKrispModelOverride(e)
            },
            popoutLayerContext: Chunk246992.O$,
            serialize: e => e
          })
        }), (0, Chunk255367.jsx)(Chunk481060.hjN, {
          title: "Noise Cancellation Stats",
          tag: Chunk481060.RB0.H3,
          children: (0, Chunk255367.jsx)(Chunk481060.j7V, {
            value: B,
            onChange: e => d.Z.setNoiseCancellationEnableStats(e),
            children: "Enable Stats"
          })
        })]
      }), P === Chunk65154.pM.VOICE_ACTIVITY && (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
        children: [(0, Chunk255367.jsx)(Chunk481060.hjN, {
          title: "VAD Auto Threshold",
          tag: Chunk481060.RB0.H3,
          children: (0, Chunk255367.jsx)(Chunk481060.j7V, {
            hideBorder: true,
            value: I,
            onChange: e => d.Z.setMode(b.pM.VOICE_ACTIVITY, {
              autoThreshold: e
            }),
            children: "Auto Threshold"
          })
        }), I && (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
          children: [(0, Chunk255367.jsx)(Chunk481060.hjN, {
            title: "VAD Krisp Auto Threshold",
            tag: Chunk481060.RB0.H3,
            children: (0, Chunk255367.jsx)(Chunk481060.j7V, {
              hideBorder: true,
              value: k,
              onChange: e => d.Z.setMode(b.pM.VOICE_ACTIVITY, {
                vadUseKrisp: e
              }),
              children: "Use Krisp VAD"
            })
          }), k && (0, Chunk255367.jsx)(Chunk481060.hjN, {
            title: "Krisp VAD Activation Threshold",
            tag: Chunk481060.RB0.H3,
            children: (0, Chunk255367.jsx)(Chunk481060.iRW, {
              initialValue: R,
              onValueChange: e => d.Z.setMode(b.pM.VOICE_ACTIVITY, {
                vadKrispActivationThreshold: e
              }),
              minValue: 0,
              maxValue: 1
            })
          })]
        })]
      }), (0, Chunk255367.jsx)(Chunk481060.hjN, {
        tag: Chunk481060.RB0.H3,
        children: (0, Chunk255367.jsx)(Chunk481060.j7V, {
          hideBorder: true,
          value: w,
          onChange: e => d.Z.setEchoCancellation(e),
          children: "Echo Cancellation"
        })
      }), (0, Chunk255367.jsx)(Chunk481060.hjN, {
        title: "Recorder",
        tag: Chunk481060.RB0.H3,
        children: (0, Chunk255367.jsx)(Chunk755721.zx, {
          color: exports ? Chunk755721.zx.Colors.RED : Chunk755721.zx.Colors.BRAND,
          onClick: exports ? z : function() {
            U(), require(true), Chunk846027.Z.setLoopback("krisp_test", true), Chunk131951.Z.getMediaEngine().startRecordingRawSamples((t, n, r) => {
              a(false), d.Z.setLoopback("krisp_test", false);
              let l = new AudioBuffer({
                length: t.length,
                sampleRate: r,
                numberOfChannels: n
              });
              for (let e = 0; e < n; e++) {
                let a = new Float32Array(t.length / n);
                for (let r = 0; r < t.length / n; r++) a[r] = t[r * n + e] / 32768;
                l.copyToChannel(a, e)
              }
              i(t => [...t, {
                inputName: e,
                audioBuffer: l,
                createdAt: Date.now(),
                suppression: M,
                echoCancellation: w,
                krispSuppressionLevel: j
              }])
            })
          },
          children: exports ? "Stop Recording" : "Start Recording"
        })
      }), (0, Chunk255367.jsx)(Chunk481060.hjN, {
        title: "Volume",
        tag: Chunk481060.RB0.H3,
        children: (0, Chunk255367.jsx)(Chunk481060.iRW, {
          initialValue: O,
          asValueChanges: function(e) {
            null != N.current && (N.current.gain.value = e, T(e))
          },
          minValue: 0,
          maxValue: 1
        })
      }), (0, Chunk255367.jsx)(Chunk481060.hjN, {
        title: "Recordings",
        tag: Chunk481060.RB0.H3,
        children: Chunk345959.map((e, t) => (0, n.jsx)(g, {
          recording: e,
          playing: e === _,
          onPlay: G,
          onStop: U
        }, t))
      })]
    })
  })
}