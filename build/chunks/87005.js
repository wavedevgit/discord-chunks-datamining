/** Chunk was on 62981 **/
/** chunk id: 87005, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  f: () => C
}), require("./388685.js"), require("./539854.js");
var Chunk647438 = require("./647438.js"),
  Chunk243814 = require("./243814.js"),
  Chunk442837 = require("./442837.js"),
  Chunk384275 = require("./384275.js"),
  Chunk911969 = require("./911969.js"),
  Chunk10718 = require("./10718.js"),
  Chunk812236 = require("./812236.js"),
  Chunk148958 = require("./148958.js"),
  Chunk881998 = require("./881998.js");
require("./445392.js");
var Chunk783097 = require("./783097.js"),
  Chunk701488 = require("./701488.js"),
  Chunk689079 = require("./689079.js");
let f = {
    commandTypes: [Chunk911969.yU.CHAT, Chunk911969.yU.PRIMARY_ENTRY_POINT]
  },
  m = {
    placeholderCount: 0,
    limit: Chunk689079.tn,
    includeFrecency: true
  };

function C(e) {
  let {
    context: n,
    onlyActivityApps: t,
    allowCommandFetch: c,
    includeAuthorizedAppsAndFetch: C
  } = e, {
    sectionDescriptors: y,
    loading: g
  } = l.wi({
    context: n,
    filters: f,
    options: m,
    allowFetch: c
  });
  return {
    loading: g,
    frecentApps: function(e) {
      let {
        sectionDescriptors: n,
        context: t,
        onlyActivityApps: c,
        includeAuthorizedAppsAndFetch: l
      } = e, f = (0, i.e7)([u.Z], () => u.Z.getFetchState());
      r.useEffect(() => {
        l && f === u.M.NOT_FETCHED && a.Z.fetch()
      }, [l, f]);
      let m = (0, i.Wu)([u.Z], () => l ? u.Z.getNewestTokens().filter(e => e.scopes.includes(o.x.APPLICATIONS_COMMANDS)) : []),
        C = n.filter(e => e.id !== _.bi.FRECENCY && e.id !== _.bi.BUILT_IN),
        y = "contextless" === t.type,
        g = r.useMemo(() => {
          let e = [];
          return y && e.push(b.jT), e
        }, [y]),
        O = (0, s.h)(C, m);
      return r.useMemo(() => c ? O.filter(e => null != e.application && (0, p.ye)(e.application) && null != (0, d.Xu)(t, e.id)).filter(e => !g.includes(e.id)) : O.filter(e => !g.includes(e.id)), [c, O, t, g])
    }({
      sectionDescriptors: y,
      context: n,
      onlyActivityApps: t,
      includeAuthorizedAppsAndFetch: C
    })
  }
}