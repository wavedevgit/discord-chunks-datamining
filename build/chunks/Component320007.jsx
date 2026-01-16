/** Chunk was on 1272 **/
/** chunk id: 320007, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function E(e) {
  let {
    canShowReminder: t = false,
    className: E
  } = e, _ = (0, f.Z)(u.Z), {
    showClipsHeaderEntrypoint: O
  } = d.NV.useExperiment({
    location: "ClipsButton"
  }, {
    autoTrackExposure: false
  }), {
    hasNewClips: I,
    lastClipsSession: v,
    remindersEnabled: y,
    hasAnyClipAnimations: C
  } = (0, l.cj)([p.Z], () => ({
    hasNewClips: p.Z.getNewClipIds().length > 0,
    lastClipsSession: p.Z.getLastClipsSession(),
    remindersEnabled: p.Z.getSettings().remindersEnabled,
    hasAnyClipAnimations: p.Z.hasAnyClipAnimations()
  })), S = null != v && v.newClipIds.length > 0, T = (0, g.n)(e => e.clipsButtonRef), N = (0, g.n)(e => e.setClipsButtonRef), j = (0, l.e7)([c.Z], () => c.Z.hasLayers()), {
    preventIdle: x,
    allowIdle: P
  } = (0, s.Y)("animation");

  function A() {
    (0, a.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("61342"), n.e("17316")]).then(n.bind(n, 542055));
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
      modalKey: m.Qr
    })
  }
  return (i.useEffect(() => (C ? x() : P(), () => P()), [C, x, P]), O && _) ? (0, r.jsxs)(r.Fragment, {
    children: [null != T && t && y && S && !(0, a.$sL)() && !j && (0, r.jsx)(h.Z, {
      clipIconRef: T,
      lastClipsSession: v,
      onOpenClipsGallery: A
    }), (0, r.jsx)("div", {
      ref: N,
      children: (0, r.jsx)(o.JO, {
        className: E,
        icon: a.AlX,
        showBadge: I,
        tooltip: b.intl.string(b.t.MXaLEM),
        onClick: A
      })
    })]
  }) : null
}