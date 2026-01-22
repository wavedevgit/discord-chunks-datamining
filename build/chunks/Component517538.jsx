/** Chunk was on 22477 **/
/** chunk id: 517538, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./927092.js"), require("./212978.js"), require("./648691.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk207898 = require("./207898.js"),
  r = require.n(Chunk207898),
  Chunk311907 = require("./311907.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk964486 = require("./964486.js"),
  Chunk602674 = require("./602674.js"),
  Chunk625841 = require("./625841.jsx"),
  Chunk74848 = require("./74848.js"),
  Chunk430452 = require("./430452.js"),
  Chunk731854 = require("./731854.js"),
  Chunk442456 = require("./442456.js"),
  Chunk661251 = require("./661251.js");

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
    onPlay: l,
    onStop: i
  } = e;
  return (0, a.jsx)(c.Nt8, {
    collapsibleContent: (0, a.jsx)(v, {
      recording: t
    }),
    children: e => {
      let {
        onClick: s
      } = e;
      return (0, a.jsxs)(c.DUT, {
        onClick: s,
        children: [(0, a.jsxs)(c.Text, {
          variant: "text-sm/bold",
          tag: "span",
          children: [t.inputName, " - ", new Date(t.createdAt).toLocaleString()]
        }), (0, a.jsx)(c.DUT, {
          tag: "span",
          onClick: e => {
            e.stopPropagation(), n ? i() : l(t)
          },
          children: n ? (0, a.jsx)(c.E$n, {
            size: "xxs"
          }) : (0, a.jsx)(c.udU, {
            size: "xxs"
          })
        }), (0, a.jsx)(c.DUT, {
          tag: "span",
          onClick: e => {
            let n, a, l;
            e.stopPropagation(), n = new Blob([r()(t.audioBuffer)], {
              type: "audio/wav"
            }), a = URL.createObjectURL(n), (l = document.createElement("a")).href = a, l.download = "".concat(t.inputName, "-").concat(new Date(t.createdAt).toLocaleString(), ".wav"), l.click(), URL.revokeObjectURL(a)
          },
          children: (0, a.jsx)(c.s3U, {
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
  } = (0, h.x5)(x.oh.AUDIO_INPUT), [t, n] = l.useState(false), [i, r] = l.useState([]), v = (0, s.bG)([f.A], () => f.A.getKrispSuppressionLevel()), [y, _] = l.useState(null), A = l.useRef(null), C = l.useRef(null), [S, O] = l.useState(.5), {
    krispModels: E,
    krispModelOverride: N,
    inputMode: T,
    echoCancellation: I,
    autoThreshold: k,
    vadUseKrisp: w,
    vadKrispActivationThreshold: P,
    noiseCancellation: R,
    noiseSuppression: D,
    noiseSuppressionSupported: M,
    noiseCancellationSupported: L,
    noiseCancellationEnableStats: U,
    vadDuringPreProcess: B
  } = (0, s.cf)([f.A], () => ({
    krispModels: f.A.getKrispModels(),
    krispModelOverride: f.A.getKrispModelOverride(),
    echoCancellation: f.A.getEchoCancellation(),
    autoThreshold: f.A.getModeOptions().autoThreshold,
    vadUseKrisp: f.A.getModeOptions().vadUseKrisp,
    inputMode: f.A.getMode(),
    vadKrispActivationThreshold: f.A.getKrispVadActivationThreshold(),
    noiseCancellation: f.A.getNoiseCancellation(),
    noiseSuppression: f.A.getNoiseSuppression(),
    noiseSuppressionSupported: f.A.isNoiseSuppressionSupported(),
    noiseCancellationSupported: f.A.isNoiseCancellationSupported(),
    noiseCancellationEnableStats: f.A.getKrispEnableStats(),
    vadDuringPreProcess: f.A.getModeOptions().vadDuringPreProcess
  })), G = R ? "KRISP" : D ? "STANDARD" : "NONE", F = (0, m.v)(), V = l.useCallback(() => {
    var e;
    null == (e = A.current) || e.stop(), A.current = null, _(null)
  }, []);

  function W() {
    f.A.getMediaEngine().stopRecordingRawSamples()
  }

  function H(e) {
    if (t && W(), V(), null == F) return;
    let n = F.createBufferSource();
    n.buffer = e.audioBuffer, C.current = F.createGain(), C.current.gain.value = S, n.connect(C.current), C.current.connect(F.destination), n.loop = true, n.start(), A.current = n, _(e)
  }
  l.useEffect(() => {
    V()
  }, [V]), (0, u.l0)(() => {
    d.A.setMode(f.A.getMode(), {
      vadDuringPreProcess: null,
      vadKrispActivationThreshold: true
    })
  });
  let K = [];
  return L && K.push({
    id: "krisp",
    label: "Krisp",
    value: "KRISP"
  }), M && K.push({
    id: "standard",
    label: "Standard",
    value: "STANDARD"
  }), K.push({
    id: "disabled",
    label: "Disabled",
    value: "NONE"
  }), (0, a.jsx)(c.IpV, {
    className: g.nd,
    children: (0, a.jsxs)("div", {
      className: b.l,
      children: [(0, a.jsx)(c.Text, {
        variant: "text-lg/bold",
        children: "Krisp Tester"
      }), (0, a.jsx)(p.U, {
        label: "Input Device",
        deviceType: x.oh.AUDIO_INPUT,
        location: "DevToolsKrispTester"
      }), (0, a.jsx)(c.l6P, {
        label: "Noise Cancellation",
        value: G,
        onSelectionChange: e => {
          d.A.setNoiseCancellation("KRISP" === e), d.A.setNoiseSuppression("STANDARD" === e)
        },
        options: K,
        selectionMode: "single",
        fullWidth: true
      }), "KRISP" === G && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(c.Apm, {
          label: "Krisp Suppression Level",
          initialValue: v,
          onValueChange: d.A.setKrispSuppressionLevel,
          minValue: 0,
          maxValue: 100
        }), (0, a.jsx)(c.l6P, {
          label: "Krisp Model Override",
          clearable: true,
          value: N,
          options: E.map(e => ({
            label: e,
            value: e,
            id: e
          })),
          onSelectionChange: e => {
            d.A.setKrispModelOverride(null != e ? e : "")
          },
          selectionMode: "single",
          fullWidth: true
        }), (0, a.jsx)(c.dOG, {
          label: "Enable Stats",
          checked: U,
          onChange: e => d.A.setNoiseCancellationEnableStats(e)
        })]
      }), T === x.TB.VOICE_ACTIVITY && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(c.dOG, {
          label: "Auto Threshold",
          checked: k,
          onChange: e => d.A.setMode(x.TB.VOICE_ACTIVITY, {
            autoThreshold: e
          })
        }), k && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(c.dOG, {
            label: "Use Krisp VAD",
            checked: w,
            onChange: e => d.A.setMode(x.TB.VOICE_ACTIVITY, {
              vadUseKrisp: e
            })
          }), w && (0, a.jsx)(c.Apm, {
            label: "Krisp VAD Activation Threshold",
            initialValue: P,
            onValueChange: e => d.A.setMode(x.TB.VOICE_ACTIVITY, {
              vadKrispActivationThreshold: e
            }),
            minValue: 0,
            maxValue: 1
          })]
        }), (0, a.jsx)(c.dOG, {
          label: "Run Before Processing",
          checked: null != B && B,
          onChange: e => d.A.setMode(x.TB.VOICE_ACTIVITY, {
            vadDuringPreProcess: e
          })
        })]
      }), (0, a.jsx)(c.dOG, {
        label: "Echo Cancellation",
        checked: I,
        onChange: e => d.A.setEchoCancellation(e)
      }), (0, a.jsxs)(c.BJc, {
        gap: 4,
        children: [(0, a.jsx)(c.Text, {
          variant: "text-sm/semibold",
          children: "Recorder"
        }), (0, a.jsx)(o.$n, {
          color: t ? o.$n.Colors.RED : o.$n.Colors.BRAND,
          onClick: t ? W : function() {
            V(), n(true), d.A.setLoopback("krisp_test", true), f.A.getMediaEngine().startRecordingRawSamples((t, a, l) => {
              n(false), d.A.setLoopback("krisp_test", false);
              let i = new AudioBuffer({
                length: t.length,
                sampleRate: l,
                numberOfChannels: a
              });
              for (let e = 0; e < a; e++) {
                let n = new Float32Array(t.length / a);
                for (let l = 0; l < t.length / a; l++) n[l] = t[l * a + e] / 32768;
                i.copyToChannel(n, e)
              }
              r(t => [...t, {
                inputName: e,
                audioBuffer: i,
                createdAt: Date.now(),
                suppression: G,
                echoCancellation: I,
                krispSuppressionLevel: v
              }])
            })
          },
          children: t ? "Stop Recording" : "Start Recording"
        })]
      }), (0, a.jsx)(c.Apm, {
        label: "Volume",
        initialValue: S,
        asValueChanges: function(e) {
          null != C.current && (C.current.gain.value = e, O(e))
        },
        minValue: 0,
        maxValue: 1
      }), (0, a.jsxs)(c.BJc, {
        gap: 4,
        children: [(0, a.jsx)(c.Text, {
          variant: "text-sm/semibold",
          children: "Recordings"
        }), i.map((e, t) => (0, a.jsx)(j, {
          recording: e,
          playing: e === y,
          onPlay: H,
          onStop: V
        }, t))]
      })]
    })
  })
}