/** Chunk was on web.js **/
/** chunk id: 615310, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
}), require("./896048.js"), require("./638769.js");
var Chunk64700 = require("./64700.js");

function i(e) {
  var t;
  let {
    stepConfigs: n,
    breadcrumbs: i
  } = e, [a, o] = r.useState(null == (t = n[0]) ? true : t.key), s = r.useRef(null);
  return r.useEffect(() => {
    s.current = a
  }, [s, a]), {
    steps: n.map(e => e.key).filter(e => null != e),
    step: a,
    setStep: o,
    breadcrumbsData: n.filter(e => {
      var t;
      return null != e.key && (null == e || null == (t = e.options) ? true : t.useBreadcrumbLabel) != null
    }).map(e => ({
      id: e.key,
      useBreadcrumbLabel: e.options.useBreadcrumbLabel,
      sectionHeaderText: e.options.sectionHeaderText
    })).sort((e, t) => null != i ? i.indexOf(e.id) - i.indexOf(t.id) : 0),
    previousStepRef: s
  }
}