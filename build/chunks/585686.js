/** Chunk was on web.js **/
/** chunk id: 585686, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
}), require("./388685.js"), require("./642613.js");
var Chunk473749 = require("./473749.js");

function i(e) {
  var t;
  let {
    stepConfigs: n,
    breadcrumbs: i
  } = e, [o, a] = r.useState(null == (t = n[0]) ? true : t.key), s = r.useRef(null);
  return r.useEffect(() => {
    s.current = o
  }, [s, o]), {
    steps: n.map(e => e.key).filter(e => null != e),
    step: o,
    setStep: a,
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