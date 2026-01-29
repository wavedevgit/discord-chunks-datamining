/** Chunk was on 4670 **/
/** chunk id: 903427, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  K: () => O,
  P: () => I
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk574381 = require("./574381.js"),
  Chunk311907 = require("./311907.js"),
  Chunk192308 = require("./192308.js"),
  Chunk827343 = require("./827343.js"),
  Chunk793574 = require("./793574.js"),
  Chunk419954 = require("./419954.js"),
  Chunk430452 = require("./430452.js"),
  Chunk780964 = require("./780964.js"),
  Chunk825468 = require("./825468.jsx"),
  Chunk509381 = require("./509381.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx");
let g = !Chunk574381.Av;

function I() {
  return (0, r.bG)([T.A], () => T.A.getMode() === _.TB.PUSH_TO_TALK)
}
let O = (0, Chunk419954.zD)(Chunk780964.X.VOICE_PUSH_TO_TALK_SETTING, {
  useTitle: function() {
    return s.Av ? E.intl.string(E.t.tG4Np5) : E.intl.string(E.t.JMyQin)
  },
  useSubtitle: function() {
    let e = (0, r.bG)([T.A], () => T.A.getMode());
    return l.useMemo(() => {
      if (!s.Av && e === _.TB.PUSH_TO_TALK) return E.intl.format(E.t["VHI4+Y"], {
        onDownloadClick: () => (0, A._)("Help Text PTT")
      })
    }, [e])
  },
  usePredicate: function() {
    return (0, r.bG)([T.A], () => T.A.getActiveInputProfile() !== S.my.STUDIO)
  },
  useValue: function() {
    return (0, r.bG)([T.A], () => T.A.getMode() === _.TB.PUSH_TO_TALK)
  },
  setValue: function(e) {
    var t, l;
    t = e ? _.TB.PUSH_TO_TALK : _.TB.VOICE_ACTIVITY, l = [o.A.USER_SETTINGS_VOICE_AND_VIDEO], t === _.TB.PUSH_TO_TALK && g && (0, a.openModalLazy)(async () => {
      let {
        default: e
      } = await i.e("10919").then(i.bind(i, 556506));
      return t => (0, n.jsx)(e, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(i);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
            return Object.getOwnPropertyDescriptor(i, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = i[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = n
          })
        }
        return e
      }({
        title: E.intl.string(E.t.Kdt0Gb),
        confirmText: E.intl.string(E.t["1WjMbC"]),
        cancelText: E.intl.string(E.t.BddRzS),
        onConfirm: () => (0, A._)("PTT Limited Modal"),
        body: E.intl.string(E.t.NIozvt)
      }, t))
    }), u.A.setMode(t, true, true, {
      analyticsLocations: l
    })
  },
  useSearchTerms: () => [E.intl.string(E.t["pS+K2L"]), E.intl.string(E.t.nuFtHH)]
})