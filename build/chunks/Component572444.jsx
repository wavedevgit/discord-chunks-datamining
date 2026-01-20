/** Chunk was on 22979 **/
/** chunk id: 572444, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./17294.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk345959 = require("./345959.js"),
  l = require.n(Chunk345959),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk493773 = require("./493773.js"),
  Chunk304809 = require("./304809.js"),
  Chunk670863 = require("./670863.jsx"),
  Chunk72897 = require("./72897.js"),
  Chunk131951 = require("./131951.js"),
  Chunk65154 = require("./65154.js"),
  Chunk663380 = require("./663380.js"),
  Chunk663618 = require("./663618.js");

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

function y() {
  let {
    name: e
  } = (0, h.p6)(b.h7.AUDIO_INPUT), [t, n] = r.useState(false), [i, l] = r.useState([]), v = (0, s.e7)([f.Z], () => f.Z.getKrispSuppressionLevel()), [y, C] = r.useState(null), _ = r.useRef(null), S = r.useRef(null), [E, T] = r.useState(.5), {
    krispModels: O,
    krispModelOverride: N,
    inputMode: P,
    echoCancellation: w,
    autoThreshold: I,
    vadUseKrisp: k,
    vadKrispActivationThreshold: R,
    noiseCancellation: A,
    noiseSuppression: Z,
    noiseSuppressionSupported: D,
    noiseCancellationSupported: M,
    noiseCancellationEnableStats: L,
    vadDuringPreProcess: U
  } = (0, s.cj)([f.Z], () => ({
    krispModels: f.Z.getKrispModels(),
    krispModelOverride: f.Z.getKrispModelOverride(),
    echoCancellation: f.Z.getEchoCancellation(),
    autoThreshold: f.Z.getModeOptions().autoThreshold,
    vadUseKrisp: f.Z.getModeOptions().vadUseKrisp,
    inputMode: f.Z.getMode(),
    vadKrispActivationThreshold: f.Z.getKrispVadActivationThreshold(),
    noiseCancellation: f.Z.getNoiseCancellation(),
    noiseSuppression: f.Z.getNoiseSuppression(),
    noiseSuppressionSupported: f.Z.isNoiseSuppressionSupported(),
    noiseCancellationSupported: f.Z.isNoiseCancellationSupported(),
    noiseCancellationEnableStats: f.Z.getKrispEnableStats(),
    vadDuringPreProcess: f.Z.getModeOptions().vadDuringPreProcess
  })), B = A ? "KRISP" : Z ? "STANDARD" : "NONE", F = (0, m.N)(), G = r.useCallback(() => {
    var e;
    null == (e = _.current) || e.stop(), _.current = null, C(null)
  }, []);

  function V() {
    f.Z.getMediaEngine().stopRecordingRawSamples()
  }

  function W(e) {
    if (t && V(), G(), null == F) return;
    let n = F.createBufferSource();
    n.buffer = e.audioBuffer, S.current = F.createGain(), S.current.gain.value = E, n.connect(S.current), S.current.connect(F.destination), n.loop = true, n.start(), _.current = n, C(e)
  }
  r.useEffect(() => {
    G()
  }, [G]), (0, u.zq)(() => {
    d.Z.setMode(f.Z.getMode(), {
      vadDuringPreProcess: null,
      vadKrispActivationThreshold: true
    })
  });
  let z = [];
  return M && z.push({
    id: "krisp",
    label: "Krisp",
    value: "KRISP"
  }), D && z.push({
    id: "standard",
    label: "Standard",
    value: "STANDARD"
  }), z.push({
    id: "disabled",
    label: "Disabled",
    value: "NONE"
  }), (0, a.jsx)(c.zJl, {
    className: g.panel,
    children: (0, a.jsxs)("div", {
      className: x.innerPanel,
      children: [(0, a.jsx)(c.Text, {
        variant: "text-lg/bold",
        children: "Krisp Tester"
      }), (0, a.jsx)(p.j, {
        label: "Input Device",
        deviceType: b.h7.AUDIO_INPUT,
        location: "DevToolsKrispTester"
      }), (0, a.jsx)(c.PhF, {
        label: "Noise Cancellation",
        value: B,
        onSelectionChange: e => {
          d.Z.setNoiseCancellation("KRISP" === e), d.Z.setNoiseSuppression("STANDARD" === e)
        },
        options: z,
        selectionMode: "single",
        fullWidth: true
      }), "KRISP" === B && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(c.iRW, {
          label: "Krisp Suppression Level",
          initialValue: v,
          onValueChange: d.Z.setKrispSuppressionLevel,
          minValue: 0,
          maxValue: 100
        }), (0, a.jsx)(c.PhF, {
          label: "Krisp Model Override",
          clearable: true,
          value: N,
          options: O.map(e => ({
            label: e,
            value: e,
            id: e
          })),
          onSelectionChange: e => {
            d.Z.setKrispModelOverride(null != e ? e : "")
          },
          selectionMode: "single",
          fullWidth: true
        }), (0, a.jsx)(c.rsf, {
          label: "Enable Stats",
          checked: L,
          onChange: e => d.Z.setNoiseCancellationEnableStats(e)
        })]
      }), P === b.pM.VOICE_ACTIVITY && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(c.rsf, {
          label: "Auto Threshold",
          checked: I,
          onChange: e => d.Z.setMode(b.pM.VOICE_ACTIVITY, {
            autoThreshold: e
          })
        }), I && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(c.rsf, {
            label: "Use Krisp VAD",
            checked: k,
            onChange: e => d.Z.setMode(b.pM.VOICE_ACTIVITY, {
              vadUseKrisp: e
            })
          }), k && (0, a.jsx)(c.iRW, {
            label: "Krisp VAD Activation Threshold",
            initialValue: R,
            onValueChange: e => d.Z.setMode(b.pM.VOICE_ACTIVITY, {
              vadKrispActivationThreshold: e
            }),
            minValue: 0,
            maxValue: 1
          })]
        }), (0, a.jsx)(c.rsf, {
          label: "Run Before Processing",
          checked: null != U && U,
          onChange: e => d.Z.setMode(b.pM.VOICE_ACTIVITY, {
            vadDuringPreProcess: e
          })
        })]
      }), (0, a.jsx)(c.rsf, {
        label: "Echo Cancellation",
        checked: w,
        onChange: e => d.Z.setEchoCancellation(e)
      }), (0, a.jsxs)(c.Kqy, {
        gap: 4,
        children: [(0, a.jsx)(c.Text, {
          variant: "text-sm/semibold",
          children: "Recorder"
        }), (0, a.jsx)(o.zx, {
          color: t ? o.zx.Colors.RED : o.zx.Colors.BRAND,
          onClick: t ? V : function() {
            G(), n(true), d.Z.setLoopback("krisp_test", true), f.Z.getMediaEngine().startRecordingRawSamples((t, a, r) => {
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
                suppression: B,
                echoCancellation: w,
                krispSuppressionLevel: v
              }])
            })
          },
          children: t ? "Stop Recording" : "Start Recording"
        })]
      }), (0, a.jsx)(c.iRW, {
        label: "Volume",
        initialValue: E,
        asValueChanges: function(e) {
          null != S.current && (S.current.gain.value = e, T(e))
        },
        minValue: 0,
        maxValue: 1
      }), (0, a.jsxs)(c.Kqy, {
        gap: 4,
        children: [(0, a.jsx)(c.Text, {
          variant: "text-sm/semibold",
          children: "Recordings"
        }), i.map((e, t) => (0, a.jsx)(j, {
          recording: e,
          playing: e === y,
          onPlay: W,
          onStop: G
        }, t))]
      })]
    })
  })
}