/** Chunk was on 57336 **/
/** chunk id: 213652, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk435064 = require("./435064.js"),
  Chunk39604 = require("./39604.js"),
  Chunk441167 = require("./441167.js"),
  Chunk871499 = require("./871499.jsx"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk358221 = require("./358221.js"),
  Chunk522651 = require("./522651.js"),
  Chunk354459 = require("./354459.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk591868 = require("./591868.js");

function C(e) {
  let {
    channel: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, o.ZP)(), C = (0, l.e7)([f.Z], () => f.Z.getSelectedParticipant(t.id)), v = (null == C ? true : C.type) === g.fO.STREAM, _ = (0, l.e7)([p.Z], () => v ? p.Z.getActiveStreamForStreamKey(C.id) : null), {
    ignoreSenderPreference: x
  } = u.Z.useExperiment({
    location: "ActionBarClipsButton"
  }, {
    autoTrackExposure: false
  }), {
    viewerClippingAllowed: O,
    isAtMaxSavingClipOperations: j
  } = (0, l.cj)([s.Z], () => ({
    viewerClippingAllowed: null != _ && (s.Z.isViewerClippingAllowedForUser(_.ownerId) || x),
    isAtMaxSavingClipOperations: s.Z.getIsAtMaxSaveClipOperations()
  })), E = s.Z.getSettings().clipsEnabled, S = (null == _ ? true : _.ownerId) === h.default.getId(), P = !E || !(S || O) || j || null == C, I = r.useCallback(e => {
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
  return (0, i.jsx)(d.Z, {
    className: y.actionBarButton,
    onClick: () => {
      P || ((0, m.v)(n, m.d.CLIP), S ? (0, c.br)() : (0, c.C1)(C.id))
    },
    disabled: P,
    iconComponent: I,
    label: null == _ ? b.intl.string(b.t.eg5qtV) : S || O ? E ? j ? true : b.intl.string(b.t.U4URzP) : b.intl.string(b.t.wSS1yN) : b.intl.string(b.t.aRifJX),
    grow: false
  })
}