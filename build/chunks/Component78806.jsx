/** Chunk was on 68545 **/
/** chunk id: 78806, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk835473 = require("./835473.js"),
  Chunk833062 = require("./833062.jsx"),
  Chunk388032 = require("./388032.jsx");

function _(e) {
  let {
    applicationIds: n
  } = e, t = (0, a.Z)(n).filter(e => null != e);
  if (0 === t.length) return null;
  let _ = null;
  if (1 === t.length) _ = i.intl.format(i.t.wQ6ur6, {
    applicationName: () => (0, o.jsx)(r.Z, {
      application: t[0]
    }, t[0].id)
  });
  else if (2 === t.length) _ = i.intl.format(i.t.C98CSE, {
    applicationName: () => (0, o.jsx)(r.Z, {
      application: t[0]
    }, t[0].id),
    applicationName2: () => (0, o.jsx)(r.Z, {
      application: t[1]
    }, t[1].id)
  });
  else {
    let e = t[t.length - 1],
      n = t.slice(0, false);
    _ = i.intl.format(i.t.UxpwAg, {
      applications: () => n.map(e => (0, o.jsx)(r.Z, {
        application: e,
        useComma: true
      }, e.id)),
      applicationNameLast: () => (0, o.jsx)(r.Z, {
        application: e
      }, e.id)
    })
  }
  return (0, o.jsx)(c.Text, {
    variant: "text-sm/normal",
    children: _
  })
}