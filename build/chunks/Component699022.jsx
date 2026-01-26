/** Chunk was on 67564 **/
/** chunk id: 699022, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk274372 = require("./274372.js"),
  Chunk572164 = require("./572164.js"),
  Chunk399925 = require("./399925.js"),
  Chunk670470 = require("./670470.js"),
  Chunk709562 = require("./709562.jsx"),
  Chunk616356 = require("./616356.js"),
  Chunk961350 = require("./961350.js"),
  Chunk313961 = require("./313961.js"),
  Chunk384059 = require("./384059.js"),
  Chunk806931 = require("./806931.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk342910 = require("./342910.js");

function _(e) {
  let {
    channel: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, a.Ay)(), _ = (0, i.bG)([g.A], () => g.A.getSelectedParticipant(t.id)), O = (null == _ ? true : _.type) === b.lp.STREAM, j = (0, i.bG)([h.A], () => O ? h.A.getActiveStreamForStreamKey(_.id) : null), {
    ignoreSenderPreference: v
  } = d.A.useExperiment({
    location: "ActionBarClipsButton"
  }, {
    autoTrackExposure: false
  }), {
    viewerClippingAllowed: x,
    isAtMaxSavingClipOperations: E
  } = (0, i.cf)([o.A], () => ({
    viewerClippingAllowed: null != j && (o.A.isViewerClippingAllowedForUser(j.ownerId) || v),
    isAtMaxSavingClipOperations: o.A.getIsAtMaxSaveClipOperations()
  })), C = (0, c.Et)(), S = (null == j ? true : j.ownerId) === f.default.getId(), I = !C || !(S || x) || E || null == _, N = l.useCallback(e => {
    var t, n;
    return (0, r.jsx)(s.xpe, (t = function(e) {
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
  return (0, r.jsx)(p.A, {
    className: y.g,
    onClick: () => {
      I || ((0, m.X)(n, m.O.CLIP), S ? (0, u.l0)() : (0, u.yd)(_.id))
    },
    disabled: I,
    iconComponent: N,
    label: null == j ? A.intl.string(A.t.eg5qtV) : S || x ? C ? E ? true : A.intl.string(A.t.U4URzP) : A.intl.string(A.t.wSS1yN) : A.intl.string(A.t.aRifJX),
    grow: false
  })
}