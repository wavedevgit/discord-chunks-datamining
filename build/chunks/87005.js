/** Chunk was on web.js **/
/** chunk id: 87005, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => g
}), require("./388685.js"), require("./539854.js");
var Chunk73800 = require("./73800.js"),
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
let h = {
    commandTypes: [Chunk911969.yU.CHAT, Chunk911969.yU.PRIMARY_ENTRY_POINT]
  },
  m = {
    placeholderCount: 0,
    limit: Chunk689079.tn,
    includeFrecency: true
  };

function g(e) {
  let {
    context: t,
    onlyActivityApps: n,
    allowCommandFetch: r,
    includeAuthorizedAppsAndFetch: i
  } = e, {
    sectionDescriptors: o,
    loading: a
  } = l.wi({
    context: t,
    filters: h,
    options: m,
    allowFetch: r
  });
  return {
    loading: a,
    frecentApps: E({
      sectionDescriptors: o,
      context: t,
      onlyActivityApps: n,
      includeAuthorizedAppsAndFetch: i
    })
  }
}

function E(e) {
  let {
    sectionDescriptors: t,
    context: n,
    onlyActivityApps: s,
    includeAuthorizedAppsAndFetch: l
  } = e, h = (0, o.e7)([d.Z], () => d.Z.getFetchState());
  r.useEffect(() => {
    l && h === d.M.NOT_FETCHED && a.Z.fetch()
  }, [l, h]);
  let m = (0, o.Wu)([d.Z], () => l ? d.Z.getNewestTokens().filter(e => e.scopes.includes(i.x.APPLICATIONS_COMMANDS)) : []),
    g = t.filter(e => e.id !== p.bi.FRECENCY && e.id !== p.bi.BUILT_IN),
    E = "contextless" === n.type,
    b = r.useMemo(() => {
      let e = [];
      return E && e.push(_.jT), e
    }, [E]),
    y = (0, u.h)(g, m);
  return r.useMemo(() => s ? y.filter(e => null != e.application && (0, f.ye)(e.application) && null != (0, c.Xu)(n, e.id)).filter(e => !b.includes(e.id)) : y.filter(e => !b.includes(e.id)), [s, y, n, b])
}