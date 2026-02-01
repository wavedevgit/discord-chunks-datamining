/** Chunk was on 30485 **/
/** chunk id: 903427, original params: t,e,i (module,exports,require) **/
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
let _ = !Chunk574381.Av;

function I() {
  return (0, r.bG)([T.A], () => T.A.getMode() === E.TB.PUSH_TO_TALK)
}
let O = (0, Chunk419954.zD)(Chunk780964.X.VOICE_PUSH_TO_TALK_SETTING, {
  useTitle: function() {
    return s.Av ? g.intl.string(g.t.tG4Np5) : g.intl.string(g.t.JMyQin)
  },
  useSubtitle: function() {
    let t = (0, r.bG)([T.A], () => T.A.getMode());
    return l.useMemo(() => {
      if (!s.Av && t === E.TB.PUSH_TO_TALK) return g.intl.format(g.t["VHI4+Y"], {
        onDownloadClick: () => (0, S._)("Help Text PTT")
      })
    }, [t])
  },
  usePredicate: function() {
    return (0, r.bG)([T.A], () => T.A.getActiveInputProfile() !== c.my.STUDIO)
  },
  useValue: function() {
    return (0, r.bG)([T.A], () => T.A.getMode() === E.TB.PUSH_TO_TALK)
  },
  setValue: function(t) {
    var e, l;
    e = t ? E.TB.PUSH_TO_TALK : E.TB.VOICE_ACTIVITY, l = [o.A.USER_SETTINGS_VOICE_AND_VIDEO], e === E.TB.PUSH_TO_TALK && _ && (0, u.openModalLazy)(async () => {
      let {
        default: t
      } = await i.e("10919").then(i.bind(i, 556506));
      return e => (0, n.jsx)(t, function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(i);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
            return Object.getOwnPropertyDescriptor(i, t).enumerable
          }))), n.forEach(function(e) {
            var n;
            n = i[e], e in t ? Object.defineProperty(t, e, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : t[e] = n
          })
        }
        return t
      }({
        title: g.intl.string(g.t.Kdt0Gb),
        confirmText: g.intl.string(g.t["1WjMbC"]),
        cancelText: g.intl.string(g.t.BddRzS),
        onConfirm: () => (0, S._)("PTT Limited Modal"),
        body: g.intl.string(g.t.NIozvt)
      }, e))
    }), a.A.setMode(e, true, true, {
      analyticsLocations: l
    })
  },
  useSearchTerms: () => [g.intl.string(g.t["pS+K2L"]), g.intl.string(g.t.nuFtHH)]
})