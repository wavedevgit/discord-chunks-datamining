/** Chunk was on 4787 **/
/** chunk id: 772958, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ur: () => f,
  vX: () => h
}), require("./896048.js"), require("./457529.js"), require("./321073.js"), require("./228524.js");
var Chunk64700 = require("./64700.js"),
  Chunk353640 = require("./353640.js"),
  Chunk121894 = require("./121894.js"),
  Chunk562519 = require("./562519.js"),
  Chunk954571 = require("./954571.js"),
  Chunk972049 = require("./972049.js"),
  Chunk652215 = require("./652215.js");
let s = new Chunk562519.A("a11y_violations"),
  d = (0, Chunk353640.v)(() => ({
    check: null
  }));

function f(e) {
  let t = (0, r.useCallback)(e => {
    var t;
    if (e.hash !== (null == (t = d.getState().check) ? true : t.hash))
      for (let [t, n] of((0, l.r)(() => d.setState({
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
              i.default.track(c.HAw.A11Y_RUNTIME_VIOLATION, a)
            }
          }
  }, []);
  (0, u.dL)(e, t)
}

function h() {
  var e = d(e => {
    var t, n;
    return null != (t = null == (n = e.check) ? true : n.violations) ? t : null
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