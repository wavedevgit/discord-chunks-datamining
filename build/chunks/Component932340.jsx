/** Chunk was on 21738 **/
/** chunk id: 932340, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk447404 = require("./447404.jsx"),
  Chunk186111 = require("./186111.js"),
  Chunk430452 = require("./430452.js"),
  Chunk734066 = require("./734066.js"),
  Chunk274372 = require("./274372.js"),
  Chunk915618 = require("./915618.js"),
  Chunk361157 = require("./361157.js"),
  Chunk798817 = require("./798817.jsx"),
  Chunk696016 = require("./696016.js"),
  Chunk985018 = require("./985018.jsx");

function _(e) {
  let {
    canShowReminder: t = false,
    className: _
  } = e, b = (0, h.A)(u.A), {
    showClipsHeaderEntrypoint: E
  } = d.L_.useExperiment({
    location: "ClipsButton"
  }, {
    autoTrackExposure: false
  }), {
    hasNewClips: O,
    lastClipsSession: y,
    remindersEnabled: I,
    hasAnyClipAnimations: v
  } = (0, l.cf)([p.A], () => ({
    hasNewClips: p.A.getNewClipIds().length > 0,
    lastClipsSession: p.A.getLastClipsSession(),
    remindersEnabled: p.A.getSettings().remindersEnabled,
    hasAnyClipAnimations: p.A.hasAnyClipAnimations()
  })), S = null != y && y.newClipIds.length > 0, C = (0, g.K)(e => e.clipsButtonRef), N = (0, g.K)(e => e.setClipsButtonRef), T = (0, l.bG)([c.A], () => c.A.hasLayers()), {
    preventIdle: j,
    allowIdle: x
  } = (0, o.o)("animation");

  function P() {
    (0, a.mMO)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("4918"), n.e("53838")]).then(n.bind(n, 543428));
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
      modalKey: m.nm
    })
  }
  return (i.useEffect(() => (v ? j() : x(), () => x()), [v, j, x]), E && b) ? (0, r.jsxs)(r.Fragment, {
    children: [null != C && t && I && S && !(0, a.ueM)() && !T && (0, r.jsx)(f.A, {
      clipIconRef: C,
      lastClipsSession: y,
      onOpenClipsGallery: P
    }), (0, r.jsx)("div", {
      ref: N,
      children: (0, r.jsx)(s.In, {
        className: _,
        icon: a.xgA,
        showBadge: O,
        tooltip: A.intl.string(A.t.MXaLEM),
        onClick: P
      })
    })]
  }) : null
}