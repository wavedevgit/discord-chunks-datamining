/** Chunk was on 30634 **/
/** chunk id: 915312, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  LL: () => h,
  bN: () => f
}), require("./388685.js"), require("./49124.js"), require("./539854.js"), require("./953529.js");
var Chunk73800 = require("./73800.js"),
  Chunk97519 = require("./97519.js"),
  Chunk731965 = require("./731965.js"),
  Chunk692114 = require("./692114.js"),
  Chunk626135 = require("./626135.js"),
  Chunk532810 = require("./532810.js"),
  Chunk981631 = require("./981631.js");
let s = new Chunk692114.Z("a11y_violations"),
  d = (0, Chunk97519.U)(() => ({
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
            s.has(e) || (s.add(e), u.default.track(c.rMx.A11Y_RUNTIME_VIOLATION, {
              rule_id: t,
              trace: n.join("\n"),
              hash: r
            }))
          }
  }, []);
  (0, o.A$)(e, t)
}

function h() {
  var e = d(e => {
    var t, n;
    return null != (n = null == (t = e.check) ? true : t.violations) ? n : null
  });
  if (null == module) return [];
  let t = [];
  for (let {
      instances: n,
      rule: r
    }
    of module.values())
    for (let [e, a] of require.entries()) {
      let n = Chunk97519.map(e => e.element),
        l = Chunk97519[0].message;
      exports.push({
        key: module,
        title: Chunk73800.metadata.description,
        description: Chunk73800.metadata.help,
        id: Chunk73800.id,
        tags: Chunk73800.tags,
        elements: require,
        message: Chunk731965
      })
    }
  return exports
}