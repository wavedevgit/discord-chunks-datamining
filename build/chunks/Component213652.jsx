/** Chunk was on 71264 **/
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
  Chunk579564 = require("./579564.js");

function v(e) {
  let {
    channel: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, o.ZP)(), v = (0, l.e7)([m.Z], () => m.Z.getSelectedParticipant(t.id)), _ = (null == v ? true : v.type) === b.fO.STREAM, x = (0, l.e7)([h.Z], () => _ ? h.Z.getActiveStreamForStreamKey(v.id) : null), {
    ignoreSenderPreference: j
  } = d.Z.useExperiment({
    location: "ActionBarClipsButton"
  }, {
    autoTrackExposure: false
  }), {
    viewerClippingAllowed: O,
    isAtMaxSavingClipOperations: E
  } = (0, l.cj)([s.Z], () => ({
    viewerClippingAllowed: null != x && (s.Z.isViewerClippingAllowedForUser(x.ownerId) || j),
    isAtMaxSavingClipOperations: s.Z.getIsAtMaxSaveClipOperations()
  })), S = (0, c.z8)(), P = (null == x ? true : x.ownerId) === f.default.getId(), I = !S || !(P || O) || E || null == v, Z = r.useCallback(e => {
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
    className: C.actionBarButton,
    onClick: () => {
      I || ((0, g.v)(n, g.d.CLIP), P ? (0, u.br)() : (0, u.C1)(v.id))
    },
    disabled: I,
    iconComponent: Z,
    label: null == x ? y.intl.string(y.t.eg5qtV) : P || O ? S ? E ? true : y.intl.string(y.t.U4URzP) : y.intl.string(y.t.wSS1yN) : y.intl.string(y.t.aRifJX),
    grow: false
  })
}