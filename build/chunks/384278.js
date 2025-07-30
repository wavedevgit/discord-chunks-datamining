/** Chunk was on 80416 **/
n.d(t, {
  M1: () => s,
  NM: () => l
});
var a = n(70956),
  o = n(818083),
  i = n(427164),
  r = n(987338);
let c = (0, i.le)({
    kind: "user",
    name: "2025-07-typing-indicator-delay",
    defaultConfig: {
      delayMs: 1.5 * a.Z.Millis.SECOND,
      inExperiment: !1
    },
    variations: {
      0: {
        delayMs: 1.5 * a.Z.Millis.SECOND,
        inExperiment: !0
      },
      1: {
        delayMs: 2 * a.Z.Millis.SECOND,
        inExperiment: !0
      },
      2: {
        delayMs: 3 * a.Z.Millis.SECOND,
        inExperiment: !0
      },
      3: {
        delayMs: 1.5 * a.Z.Millis.SECOND,
        inExperiment: !0
      },
      4: {
        delayMs: 2 * a.Z.Millis.SECOND,
        inExperiment: !0
      },
      5: {
        delayMs: 3 * a.Z.Millis.SECOND,
        inExperiment: !0
      }
    }
  }),
  l = (0, o.B)({
    kind: "user",
    id: "2025-07_typing_indicator_delay",
    label: "Typing Indicator Delay",
    defaultConfig: {
      delayMs: 1.5 * a.Z.Millis.SECOND,
      inExperiment: !1
    },
    treatments: [{
      id: 0,
      label: "1.5 second delay",
      config: {
        delayMs: 1.5 * a.Z.Millis.SECOND,
        inExperiment: !0
      }
    }, {
      id: 1,
      label: "2 second delay",
      config: {
        delayMs: 2 * a.Z.Millis.SECOND,
        inExperiment: !0
      }
    }, {
      id: 2,
      label: "3 second delay",
      config: {
        delayMs: 3 * a.Z.Millis.SECOND,
        inExperiment: !0
      }
    }, {
      id: 3,
      label: "1.5 second delay (overlap)",
      config: {
        delayMs: 1.5 * a.Z.Millis.SECOND,
        inExperiment: !0
      }
    }, {
      id: 4,
      label: "2 second delay (overlap)",
      config: {
        delayMs: 2 * a.Z.Millis.SECOND,
        inExperiment: !0
      }
    }, {
      id: 5,
      label: "3 second delay (overlap)",
      config: {
        delayMs: 3 * a.Z.Millis.SECOND,
        inExperiment: !0
      }
    }],
    commonTriggerPoint: r.$P.CONNECTION_OPEN
  }),
  s = e => {
    let {
      delayMs: t,
      inExperiment: n
    } = l.getCurrentConfig({
      location: e
    }, {
      autoTrackExposure: !0
    }), {
      delayMs: a,
      inExperiment: o
    } = c.getConfig({
      location: e
    });
    return n ? {
      delayMs: t,
      inExperiment: !0
    } : {
      delayMs: a,
      inExperiment: o
    }
  }