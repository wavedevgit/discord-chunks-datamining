/** Chunk was on 30634 **/
/** chunk id: 915312, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  LL: () => h,
  bN: () => f
}), require("./388685.js"), require("./49124.js"), require("./539854.js"), require("./953529.js");
var Chunk473749 = require("./473749.js"),
  Chunk121168 = require("./121168.js"),
  Chunk731965 = require("./731965.js"),
  Chunk692114 = require("./692114.js"),
  Chunk626135 = require("./626135.js"),
  Chunk532810 = require("./532810.js"),
  Chunk981631 = require("./981631.js");
let s = new Chunk692114.Z("a11y_violations"),
  d = (0, Chunk121168.U)(() => ({
    check: null
  }));

function f(e) {
  let t = (0, r.useCallback)(e => {
    var t;
    if (e.hash !== (null == (t = d.getState().check) ? true : t.hash))
      for (let [t, n] of((0, l.j)(() => d.setState({
          check: e
        })), e.violations.entries()))
        for (let e of n.instances.values())
          for (let {
              trace: n,
              hash: r
            }
            of e) {
            let e = JSON.stringify(r);
            if (s.has(e));
            else {
              s.add(e);
              let a = {
                rule_id: t,
                trace: n.join("\n"),
                hash: r
              };
              o.default.track(c.rMx.A11Y_RUNTIME_VIOLATION, a)
            }
          }
  }, []);
  (0, u.A$)(e, t)
}

function h() {
  var e = d(e => {
    var t, n;
    return null != (n = null == (t = e.check) ? true : t.violations) ? n : null
  });
  if (null == e) return [];
  let t = [];
  for (let {
      instances: n,
      rule: r
    }
    of e.values())
    for (let [e, a] of n.entries()) {
      let n = a.map(e => e.element),
        l = a[0].message;
      t.push({
        key: e,
        title: r.metadata.description,
        description: r.metadata.help,
        id: r.id,
        tags: r.tags,
        elements: n,
        message: l
      })
    }
  return t
}