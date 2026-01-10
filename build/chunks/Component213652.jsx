/** Chunk was on 81985 **/
/** chunk id: 213652, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk435064 = require("./435064.js"),
  Chunk341569 = require("./341569.js"),
  Chunk39604 = require("./39604.js"),
  Chunk441167 = require("./441167.js"),
  Chunk871499 = require("./871499.jsx"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk358221 = require("./358221.js"),
  Chunk522651 = require("./522651.js"),
  Chunk354459 = require("./354459.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk674463 = require("./674463.js");

function O(e) {
  let {
    channel: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, o.ZP)(), O = (0, l.e7)([g.Z], () => g.Z.getSelectedParticipant(t.id)), j = (null == O ? true : O.type) === b.fO.STREAM, x = (0, l.e7)([f.Z], () => j ? f.Z.getActiveStreamForStreamKey(O.id) : null), {
    ignoreSenderPreference: C
  } = d.Z.useExperiment({
    location: "ActionBarClipsButton"
  }, {
    autoTrackExposure: false
  }), {
    viewerClippingAllowed: E,
    isAtMaxSavingClipOperations: S
  } = (0, l.cj)([s.Z], () => ({
    viewerClippingAllowed: null != x && (s.Z.isViewerClippingAllowedForUser(x.ownerId) || C),
    isAtMaxSavingClipOperations: s.Z.getIsAtMaxSaveClipOperations()
  })), _ = (0, c.z8)(), I = (null == x ? true : x.ownerId) === h.default.getId(), P = !_ || !(I || E) || S || null == O, Z = i.useCallback(e => {
    var t, n;
    return (0, r.jsx)(a.xmR, (t = function(e) {
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
    }({}, e), n = n = {
      color: "currentColor"
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  }, []);
  return (0, r.jsx)(p.Z, {
    className: v.actionBarButton,
    onClick: () => {
      P || ((0, m.v)(n, m.d.CLIP), I ? (0, u.br)() : (0, u.C1)(O.id))
    },
    disabled: P,
    iconComponent: Z,
    label: null == x ? y.intl.string(y.t.eg5qtV) : I || E ? _ ? S ? true : y.intl.string(y.t.U4URzP) : y.intl.string(y.t.wSS1yN) : y.intl.string(y.t.aRifJX),
    grow: false
  })
}