/** Chunk was on 80416 **/
n.d(t, {
  M1: () => s,
  NM: () => l
});
var a = n(70956),
  i = n(818083),
  o = n(427164),
  r = n(987338);
let c = (0, o.le)({
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
      }
    }
  }),
  l = (0, i.B)({
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
    });
    if (n) return {
      delayMs: t,
      inExperiment: !0
    };
    let {
      delayMs: a,
      inExperiment: i
    } = c.getConfig({
      location: e
    });
    return {
      delayMs: a,
      inExperiment: i
    }
  }