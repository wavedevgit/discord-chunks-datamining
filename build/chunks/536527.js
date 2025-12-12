/** Chunk was on 77069 **/
/** chunk id: 536527, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  r: () => g
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
let E = (0, Chunk972959.H)(() => ({
    syncEnabled: null,
    updateTimeout: null
  })),
  g = (0, Chunk509613.qs)(Chunk313789.n.SYNC_FORCED_COLORS, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.cguiec),
    useSubtitle: () => Chunk388032.intl.format(Chunk388032.t.GwEVE2, {
      learnMoreLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.FORCED_COLORS)
    }),
    useValue: () => {
      var t;
      let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.syncForcedColors);
      return (0, Chunk493773.ZP)(() => {
        E.setState({
          syncEnabled: Chunk607070.Z.syncForcedColors
        })
      }), null != (t = E.useState(t => t.syncEnabled)) ? module : exports
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
      if (t === r.Z.syncForcedColors) return void E.setState({
        syncEnabled: t
      });
      let n = setTimeout(() => {
        (0, u.qz)(t), E.setState({
          updateTimeout: null
        })
      }, 150);
      E.setState({
        syncEnabled: t,
        updateTimeout: n
      })
    },
    usePredicate: () => (0, Chunk627845.b)()
  })