/** Chunk was on 5665 **/
/** chunk id: 213652, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
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
  Chunk689598 = require("./689598.js");

function y(e) {
  let {
    channel: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, o.ZP)(), y = (0, l.e7)([f.Z], () => f.Z.getSelectedParticipant(t.id)), C = (null == y ? true : y.type) === g.fO.STREAM, x = (0, l.e7)([p.Z], () => C ? p.Z.getActiveStreamForStreamKey(y.id) : null), {
    ignoreSenderPreference: v
  } = u.Z.useExperiment({
    location: "ActionBarClipsButton"
  }, {
    autoTrackExposure: false
  }), {
    viewerClippingAllowed: O,
    isAtMaxSavingClipOperations: j
  } = (0, l.cj)([s.Z], () => ({
    viewerClippingAllowed: null != x && (s.Z.isViewerClippingAllowedForUser(x.ownerId) || v),
    isAtMaxSavingClipOperations: s.Z.getIsAtMaxSaveClipOperations()
  })), E = s.Z.getSettings().clipsEnabled, S = (null == x ? true : x.ownerId) === h.default.getId(), I = !E || !(S || O) || j || null == y, P = i.useCallback(e => {
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
  return (0, r.jsx)(d.Z, {
    className: _.actionBarButton,
    onClick: () => {
      I || ((0, m.v)(n, m.d.CLIP), S ? (0, c.C1)() : (0, c.C1)(y.id))
    },
    disabled: I,
    iconComponent: P,
    label: null == x ? b.intl.string(b.t.eg5qtb) : S || O ? E ? j ? true : b.intl.string(b.t.U4URzM) : b.intl.string(b.t.wSS1yM) : b.intl.string(b.t.aRifJS),
    grow: false
  })
}