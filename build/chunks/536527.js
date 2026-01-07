/** Chunk was on 77069 **/
/** chunk id: 536527, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  r: () => _
});
var Chunk442837 = require("./442837.js"),
  Chunk493773 = require("./493773.js"),
  Chunk972959 = require("./972959.js"),
  Chunk857595 = require("./857595.js"),
  Chunk607070 = require("./607070.js"),
  Chunk627845 = require("./627845.jsx"),
  Chunk509613 = require("./509613.js"),
  Chunk63063 = require("./63063.js"),
  Chunk313789 = require("./313789.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let d = (0, Chunk972959.H)(() => ({
    syncEnabled: null,
    updateTimeout: null
  })),
  _ = (0, Chunk509613.qs)(Chunk313789.n.SYNC_FORCED_COLORS, {
    useTitle: () => E.intl.string(E.t.cguiec),
    useSubtitle: () => E.intl.format(E.t.GwEVE2, {
      learnMoreLink: T.Z.getArticleURL(c.BhN.FORCED_COLORS)
    }),
    useValue: () => {
      var t;
      let e = (0, i.e7)([r.Z], () => r.Z.syncForcedColors);
      return (0, l.ZP)(() => {
        d.setState({
          syncEnabled: r.Z.syncForcedColors
        })
      }), null != (t = d.useState(t => t.syncEnabled)) ? t : e
    },
    setValue: t => {
      let {
        updateTimeout: e
      } = d.getState();
      if (null != e) {
        clearTimeout(e), d.setState({
          syncEnabled: t,
          updateTimeout: null
        });
        return
      }
      if (t === r.Z.syncForcedColors) return void d.setState({
        syncEnabled: t
      });
      let n = setTimeout(() => {
        (0, u.qz)(t), d.setState({
          updateTimeout: null
        })
      }, 150);
      d.setState({
        syncEnabled: t,
        updateTimeout: n
      })
    },
    usePredicate: () => (0, a.b)()
  })