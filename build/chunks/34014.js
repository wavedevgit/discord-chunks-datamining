/** Chunk was on 4670 **/
/** chunk id: 34014, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  r: () => _
});
var Chunk311907 = require("./311907.js"),
  Chunk964486 = require("./964486.js"),
  Chunk839214 = require("./839214.js"),
  Chunk955572 = require("./955572.js"),
  Chunk775602 = require("./775602.js"),
  Chunk502229 = require("./502229.jsx"),
  Chunk419954 = require("./419954.js"),
  Chunk975571 = require("./975571.js"),
  Chunk780964 = require("./780964.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let S = (0, Chunk839214.D)(() => ({
    syncEnabled: null,
    updateTimeout: null
  })),
  _ = (0, Chunk419954.zD)(Chunk780964.X.SYNC_FORCED_COLORS, {
    useTitle: () => A.intl.string(A.t.cguiec),
    useSubtitle: () => A.intl.format(A.t.GwEVE2, {
      learnMoreLink: d.A.getArticleURL(c.MVz.FORCED_COLORS)
    }),
    useValue: () => {
      var e;
      let t = (0, n.bG)([a.A], () => a.A.syncForcedColors);
      return (0, l.Ay)(() => {
        S.setState({
          syncEnabled: a.A.syncForcedColors
        })
      }), null != (e = S.useState(e => e.syncEnabled)) ? e : t
    },
    setValue: e => {
      let {
        updateTimeout: t
      } = S.getState();
      if (null != t) {
        clearTimeout(t), S.setState({
          syncEnabled: e,
          updateTimeout: null
        });
        return
      }
      if (e === a.A.syncForcedColors) return void S.setState({
        syncEnabled: e
      });
      let i = setTimeout(() => {
        (0, r.D3)(e), S.setState({
          updateTimeout: null
        })
      }, 150);
      S.setState({
        syncEnabled: e,
        updateTimeout: i
      })
    },
    usePredicate: () => (0, u.D)()
  })