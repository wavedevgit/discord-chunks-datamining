/** Chunk was on 1272 **/
/** chunk id: 320007, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk618158 = require("./618158.jsx"),
  Chunk819640 = require("./819640.js"),
  Chunk131951 = require("./131951.js"),
  Chunk924557 = require("./924557.js"),
  Chunk435064 = require("./435064.js"),
  Chunk779618 = require("./779618.js"),
  Chunk175470 = require("./175470.js"),
  Chunk203259 = require("./203259.jsx"),
  Chunk356659 = require("./356659.js"),
  Chunk388032 = require("./388032.jsx");

function b(e) {
  let {
    canShowReminder: t = false,
    className: b
  } = e, E = (0, f.Z)(u.Z), {
    showClipsHeaderEntrypoint: O
  } = d.NV.useExperiment({
    location: "ClipsButton"
  }, {
    autoTrackExposure: false
  }), {
    hasNewClips: I,
    lastClipsSession: y,
    remindersEnabled: v,
    hasAnyClipAnimations: C
  } = (0, l.cj)([p.Z], () => ({
    hasNewClips: p.Z.getNewClipIds().length > 0,
    lastClipsSession: p.Z.getLastClipsSession(),
    remindersEnabled: p.Z.getSettings().remindersEnabled,
    hasAnyClipAnimations: p.Z.hasAnyClipAnimations()
  })), S = null != y && y.newClipIds.length > 0, T = (0, m.n)(e => e.clipsButtonRef), N = (0, m.n)(e => e.setClipsButtonRef), j = (0, l.e7)([c.Z], () => c.Z.hasLayers()), {
    preventIdle: P,
    allowIdle: x
  } = (0, o.Y)("animation");

  function A() {
    (0, a.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("61342"), n.e("2161")]).then(n.bind(n, 542055));
      return t => (0, r.jsx)(e, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({}, t))
    }, {
      modalKey: g.Qr
    })
  }
  return (i.useEffect(() => (C ? P() : x(), () => x()), [C, P, x]), O && E) ? (0, r.jsxs)(r.Fragment, {
    children: [null != T && t && v && S && !(0, a.$sL)() && !j && (0, r.jsx)(h.Z, {
      clipIconRef: T,
      lastClipsSession: y,
      onOpenClipsGallery: A
    }), (0, r.jsx)("div", {
      ref: N,
      children: (0, r.jsx)(s.JO, {
        className: b,
        icon: a.AlX,
        showBadge: I,
        tooltip: _.intl.string(_.t.MXaLEM),
        onClick: A
      })
    })]
  }) : null
}