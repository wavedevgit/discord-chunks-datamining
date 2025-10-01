/** Chunk was on 70928 **/
/** chunk id: 78806, original params: e,t,n (module,exports,require) **/
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
    applicationIds: t
  } = e, n = (0, a.Z)(t).filter(e => null != e);
  if (0 === n.length) return null;
  let _ = null;
  if (1 === n.length) _ = i.intl.format(i.t.wQ6ur6, {
    applicationName: () => (0, o.jsx)(r.Z, {
      application: n[0]
    }, n[0].id)
  });
  else if (2 === n.length) _ = i.intl.format(i.t.C98CSE, {
    applicationName: () => (0, o.jsx)(r.Z, {
      application: n[0]
    }, n[0].id),
    applicationName2: () => (0, o.jsx)(r.Z, {
      application: n[1]
    }, n[1].id)
  });
  else {
    let e = n[n.length - 1],
      t = n.slice(0, false);
    _ = i.intl.format(i.t.UxpwAg, {
      applications: () => t.map(e => (0, o.jsx)(r.Z, {
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