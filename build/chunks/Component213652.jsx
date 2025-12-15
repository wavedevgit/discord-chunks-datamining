/** Chunk was on 40184 **/
/** chunk id: 213652, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
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

function v(e) {
  let {
    channel: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, o.ZP)(), v = (0, l.e7)([m.Z], () => m.Z.getSelectedParticipant(t.id)), x = (null == v ? true : v.type) === b.fO.STREAM, O = (0, l.e7)([f.Z], () => x ? f.Z.getActiveStreamForStreamKey(v.id) : null), {
    ignoreSenderPreference: E
  } = d.Z.useExperiment({
    location: "ActionBarClipsButton"
  }, {
    autoTrackExposure: false
  }), {
    viewerClippingAllowed: j,
    isAtMaxSavingClipOperations: S
  } = (0, l.cj)([s.Z], () => ({
    viewerClippingAllowed: null != O && (s.Z.isViewerClippingAllowedForUser(O.ownerId) || E),
    isAtMaxSavingClipOperations: s.Z.getIsAtMaxSaveClipOperations()
  })), _ = (0, c.z8)(), P = (null == O ? true : O.ownerId) === h.default.getId(), I = !_ || !(P || j) || S || null == v, Z = r.useCallback(e => {
    var t, n;
    return (0, i.jsx)(a.xmR, (t = function(e) {
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
    }({}, e), n = n = {
      color: "currentColor"
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
  }, []);
  return (0, i.jsx)(p.Z, {
    className: y.actionBarButton,
    onClick: () => {
      I || ((0, g.v)(n, g.d.CLIP), P ? (0, u.br)() : (0, u.C1)(v.id))
    },
    disabled: I,
    iconComponent: Z,
    label: null == O ? C.intl.string(C.t.eg5qtV) : P || j ? _ ? S ? true : C.intl.string(C.t.U4URzP) : C.intl.string(C.t.wSS1yN) : C.intl.string(C.t.aRifJX),
    grow: false
  })
}