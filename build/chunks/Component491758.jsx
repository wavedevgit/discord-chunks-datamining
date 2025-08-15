/** Chunk was on 30202 **/
/** chunk id: 491758, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk660216 = require("./660216.js"),
  Chunk230711 = require("./230711.js"),
  Chunk825209 = require("./825209.jsx"),
  Chunk706454 = require("./706454.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk556296 = require("./556296.js"),
  Chunk924557 = require("./924557.js"),
  Chunk435064 = require("./435064.js"),
  Chunk894694 = require("./894694.js"),
  Chunk779618 = require("./779618.js"),
  Chunk39604 = require("./39604.js"),
  Chunk442334 = require("./442334.jsx"),
  Chunk356659 = require("./356659.js"),
  Chunk981631 = require("./981631.js"),
  Chunk37113 = require("./37113.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk556865 = require("./556865.js"),
  Chunk749799 = require("./749799.js"),
  Chunk197571 = require("./197571.js");

function A() {
  let e = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getHardwareEncoding()),
    {
      clipsEnabled: t,
      remindersEnabled: n,
      decoupledClipsEnabled: s,
      clipsLength: A,
      clipsQuality: P
    } = (0, Chunk442837.cj)([Chunk435064.Z], () => Chunk435064.Z.getSettings()),
    R = (0, Chunk442837.e7)([Chunk435064.Z], () => Chunk435064.Z.getHardwareClassification()),
    D = (0, Chunk442837.e7)([Chunk556296.ZP], () => Chunk556296.ZP.getKeybindForAction(Chunk981631.kg4.SAVE_CLIP, true)),
    Z = Chunk435064.Z.isDecoupledGameClippingEnabled(),
    w = (0, Chunk779618.Z)(Chunk131951.Z),
    {
      showClipsHeaderEntrypoint: k
    } = Chunk924557.NV.useExperiment({
      location: "clips_recording_settings"
    }, {
      autoTrackExposure: false
    });
  a()(null != D, "Save clip keybind unset");
  let L = (0, Chunk442837.e7)([Chunk706454.default], () => Chunk706454.default.locale),
    B = Chunk73800.useMemo(() => [{
      value: Chunk356659.OT.SECONDS_30,
      label: Chunk388032.intl.formatToPlainString(Chunk388032.t["bTFv//"], {
        count: 30
      })
    }, {
      value: Chunk356659.OT.MINUTES_1,
      label: Chunk388032.intl.formatToPlainString(Chunk388032.t.ICo9Nj, {
        count: 1
      })
    }, {
      value: Chunk356659.OT.MINUTES_2,
      label: Chunk388032.intl.formatToPlainString(Chunk388032.t.ICo9Nj, {
        count: 2
      })
    }], [L]),
    M = Chunk73800.useMemo(() => [{
      value: Chunk37113.LY.RESOLUTION_480,
      label: Chunk388032.intl.formatToPlainString(Chunk388032.t.TEOC0N, {
        resolution: Chunk37113.LY.RESOLUTION_480
      })
    }, {
      value: Chunk37113.LY.RESOLUTION_720,
      label: Chunk388032.intl.formatToPlainString(Chunk388032.t.TEOC0N, {
        resolution: Chunk37113.LY.RESOLUTION_720
      })
    }, {
      value: Chunk37113.LY.RESOLUTION_1080,
      label: Chunk388032.intl.formatToPlainString(Chunk388032.t.TEOC0N, {
        resolution: Chunk37113.LY.RESOLUTION_1080
      })
    }, {
      value: Chunk37113.LY.RESOLUTION_1440,
      label: Chunk388032.intl.formatToPlainString(Chunk388032.t.TEOC0N, {
        resolution: Chunk37113.LY.RESOLUTION_1440
      })
    }, {
      value: Chunk37113.LY.RESOLUTION_SOURCE,
      label: Chunk388032.intl.string(Chunk388032.t.XjXqzs)
    }], [L]),
    U = Chunk73800.useMemo(() => [{
      value: Chunk37113.ws.FPS_15,
      label: Chunk388032.intl.formatToPlainString(Chunk388032.t.Qb44XF, {
        fps: Chunk37113.ws.FPS_15
      })
    }, {
      value: Chunk37113.ws.FPS_30,
      label: Chunk388032.intl.formatToPlainString(Chunk388032.t.Qb44XF, {
        fps: Chunk37113.ws.FPS_30
      })
    }, {
      value: Chunk37113.ws.FPS_60,
      label: Chunk388032.intl.formatToPlainString(Chunk388032.t.Qb44XF, {
        fps: Chunk37113.ws.FPS_60
      })
    }], [L]),
    V = Chunk73800.useCallback(e => {
      var t, n;
      c.Z.setKeybind((t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({}, D), n = n = {
        shortcut: e
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t))
    }, [D]);
  return (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
    children: [(0, Chunk255367.jsxs)(Chunk481060.hjN, {
      disabled: !module,
      children: [!module && (0, Chunk255367.jsx)(Chunk494620.Z, {
        look: Chunk494620.z.WARNING,
        className: Chunk749799.formItem,
        children: Chunk388032.intl.format(Chunk388032.t.kiaF4e, {
          onClick: () => Chunk230711.Z.open(Chunk981631.oAB.VOICE, Chunk526761.gP, {
            scrollPosition: Chunk526761.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION
          })
        })
      }), R === Chunk894694.x.BELOW_MINIMUM ? (0, Chunk255367.jsx)(Chunk494620.Z, {
        look: Chunk494620.z.WARNING,
        className: Chunk749799.formItem,
        children: Chunk388032.intl.string(Chunk388032.t.SIxrIC)
      }) : null, (0, Chunk255367.jsx)(Chunk481060.j7V, {
        hideBorder: true,
        disabled: !module,
        className: Chunk749799.formItem,
        value: exports,
        note: Chunk388032.intl.string(Chunk388032.t["4Qw3ND"]),
        onChange: e => j.em({
          clipsEnabled: e,
          trackAnalytics: true
        }),
        children: Chunk388032.intl.string(Chunk388032.t.h8rgrK)
      }), module && (0, Chunk255367.jsx)(Chunk494620.Z, {
        className: Chunk749799.formItem,
        children: Chunk388032.intl.string(Chunk388032.t["Z+Mfqa"])
      })]
    }), Z && w && (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
      children: [(0, Chunk255367.jsx)(Chunk481060.$i$, {}), (0, Chunk255367.jsx)(Chunk481060.hjN, {
        className: Chunk197571.marginTop20,
        disabled: !module,
        children: (0, Chunk255367.jsx)(Chunk481060.j7V, {
          hideBorder: true,
          disabled: !module,
          className: Chunk749799.formItem,
          value: Chunk512722,
          note: Chunk388032.intl.string(Chunk388032.t.YP3ujo),
          onChange: e => j._Q({
            enabled: e,
            trackAnalytics: true
          }),
          children: Chunk388032.intl.string(Chunk388032.t.yXvykp)
        })
      })]
    }), k && (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
      children: [(0, Chunk255367.jsx)(Chunk481060.$i$, {}), (0, Chunk255367.jsx)(Chunk481060.hjN, {
        className: Chunk197571.marginTop20,
        children: (0, Chunk255367.jsx)(Chunk481060.j7V, {
          hideBorder: true,
          className: Chunk749799.formItem,
          value: require,
          note: Chunk388032.intl.string(Chunk388032.t.m4Cjj4),
          onChange: e => j.N0(e),
          children: Chunk388032.intl.string(Chunk388032.t["3zwNf3"])
        })
      })]
    }), (0, Chunk255367.jsx)(Chunk481060.$i$, {}), (0, Chunk255367.jsxs)(Chunk481060.hjN, {
      className: Chunk197571.marginTop20,
      children: [(0, Chunk255367.jsx)(Chunk442334.Q, {
        className: Chunk749799.formItem,
        select: Chunk39604.eU,
        title: Chunk388032.intl.string(Chunk388032.t.OgfUio),
        note: Chunk388032.intl.string(Chunk388032.t.H7j4tb),
        value: A,
        options: B
      }), (0, Chunk255367.jsx)(Chunk442334.Q, {
        className: Chunk749799.formItem,
        select: e => j.yi({
          resolution: e,
          frameRate: P.frameRate
        }),
        title: Chunk388032.intl.string(Chunk388032.t.aFudZG),
        note: Chunk388032.intl.string(Chunk388032.t.nIrkW1),
        value: P.resolution,
        options: M
      }), (0, Chunk255367.jsx)(Chunk442334.Q, {
        className: Chunk749799.formItem,
        select: e => j.yi({
          resolution: P.resolution,
          frameRate: e
        }),
        title: Chunk388032.intl.string(Chunk388032.t["2wScLy"]),
        note: Chunk388032.intl.string(Chunk388032.t["Rf9+f3"]),
        value: P.frameRate,
        options: U
      }), (0, Chunk255367.jsx)(Chunk442334.O, {
        className: Chunk749799.formItem,
        title: Chunk388032.intl.string(Chunk388032.t.pf54ER),
        note: Chunk388032.intl.string(Chunk388032.t["QyB/jI"]),
        children: (0, Chunk255367.jsx)("div", {
          className: Chunk556865.keyRecorder,
          children: (0, Chunk255367.jsx)(Chunk825209.Z, {
            defaultValue: D.shortcut,
            onChange: V
          })
        })
      })]
    })]
  })
}