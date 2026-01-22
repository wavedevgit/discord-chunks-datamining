/** Chunk was on web.js **/
/** chunk id: 869186, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => g
}), require("./896048.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk179771 = require("./179771.js"),
  Chunk311907 = require("./311907.js"),
  Chunk824552 = require("./824552.js"),
  Chunk155718 = require("./155718.js"),
  Chunk842209 = require("./842209.js"),
  Chunk361926 = require("./361926.js"),
  Chunk768879 = require("./768879.js"),
  Chunk546183 = require("./546183.js");
require("./47325.js");
var Chunk735991 = require("./735991.js"),
  Chunk360469 = require("./360469.js"),
  Chunk73510 = require("./73510.js");
let h = {
    commandTypes: [Chunk155718.kc.CHAT, Chunk155718.kc.PRIMARY_ENTRY_POINT]
  },
  m = {
    placeholderCount: 0,
    limit: Chunk73510.Hi,
    includeFrecency: true
  };

function g(e) {
  let {
    context: t,
    onlyActivityApps: n,
    allowCommandFetch: r,
    includeAuthorizedAppsAndFetch: i
  } = e, {
    sectionDescriptors: a,
    loading: s
  } = l.cu({
    context: t,
    filters: h,
    options: m,
    allowFetch: r
  });
  return {
    loading: s,
    frecentApps: E({
      sectionDescriptors: a,
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
    onlyActivityApps: o,
    includeAuthorizedAppsAndFetch: l
  } = e, h = (0, a.bG)([d.default], () => d.default.getFetchState());
  r.useEffect(() => {
    l && h === d.FetchState.NOT_FETCHED && s.A.fetch()
  }, [l, h]);
  let m = (0, a.yK)([d.default], () => l ? d.default.getNewestTokens().filter(e => e.scopes.includes(i.F.APPLICATIONS_COMMANDS)) : []),
    g = t.filter(e => e.id !== _.Ik.FRECENCY && e.id !== _.Ik.BUILT_IN),
    E = "contextless" === n.type,
    b = r.useMemo(() => {
      let e = [];
      return E && e.push(p.gq), e
    }, [E]),
    y = (0, u.I)(g, m);
  return r.useMemo(() => o ? y.filter(e => null != e.application && (0, f.Ag)(e.application) && null != (0, c.eI)(n, e.id)).filter(e => !b.includes(e.id)) : y.filter(e => !b.includes(e.id)), [o, y, n, b])
}