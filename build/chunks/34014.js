/** Chunk was on 28979 **/
/** chunk id: 34014, original params: t,e,i (module,exports,require) **/
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
let E = (0, Chunk839214.D)(() => ({
    syncEnabled: null,
    updateTimeout: null
  })),
  _ = (0, Chunk419954.zD)(Chunk780964.X.SYNC_FORCED_COLORS, {
    useTitle: () => S.intl.string(S.t.cguiec),
    useSubtitle: () => S.intl.format(S.t.GwEVE2, {
      learnMoreLink: T.A.getArticleURL(d.MVz.FORCED_COLORS)
    }),
    useValue: () => {
      var t;
      let e = (0, n.bG)([u.A], () => u.A.syncForcedColors);
      return (0, l.Ay)(() => {
        E.setState({
          syncEnabled: u.A.syncForcedColors
        })
      }), null != (t = E.useState(t => t.syncEnabled)) ? t : e
    },
    setValue: t => {
      let {
        updateTimeout: e
      } = E.getState();
      if (null != e) {
        clearTimeout(e), E.setState({
          syncEnabled: t,
          updateTimeout: null
        });
        return
      }
      if (t === u.A.syncForcedColors) return void E.setState({
        syncEnabled: t
      });
      let i = setTimeout(() => {
        (0, r.D3)(t), E.setState({
          updateTimeout: null
        })
      }, 150);
      E.setState({
        syncEnabled: t,
        updateTimeout: i
      })
    },
    usePredicate: () => (0, a.D)()
  })