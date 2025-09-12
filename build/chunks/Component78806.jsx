/** Chunk was on 63875 **/
/** chunk id: 78806, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk835473 = require("./835473.js"),
  Chunk833062 = require("./833062.jsx"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let {
    applicationIds: t
  } = e, n = (0, i.Z)(t).filter(e => null != e);
  if (0 === n.length) return null;
  let c = null;
  if (1 === n.length) c = l.intl.format(l.t.wQ6ur6, {
    applicationName: () => (0, a.jsx)(o.Z, {
      application: n[0]
    }, n[0].id)
  });
  else if (2 === n.length) c = l.intl.format(l.t.C98CSE, {
    applicationName: () => (0, a.jsx)(o.Z, {
      application: n[0]
    }, n[0].id),
    applicationName2: () => (0, a.jsx)(o.Z, {
      application: n[1]
    }, n[1].id)
  });
  else {
    let e = n[n.length - 1],
      t = n.slice(0, false);
    c = l.intl.format(l.t.UxpwAg, {
      applications: () => t.map(e => (0, a.jsx)(o.Z, {
        application: e,
        useComma: true
      }, e.id)),
      applicationNameLast: () => (0, a.jsx)(o.Z, {
        application: e
      }, e.id)
    })
  }
  return (0, a.jsx)(r.Text, {
    variant: "text-sm/normal",
    children: c
  })
}