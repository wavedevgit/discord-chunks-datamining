/** Chunk was on 93979 **/
/** chunk id: 78806, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk835473 = require("./835473.js"),
  Chunk833062 = require("./833062.jsx"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  let {
    applicationIds: n
  } = e, t = (0, r.Z)(n).filter(e => null != e);
  if (0 === t.length) return null;
  let s = null;
  if (1 === t.length) s = c.intl.format(c.t.wQ6ur6, {
    applicationName: () => (0, l.jsx)(i.Z, {
      application: t[0]
    }, t[0].id)
  });
  else if (2 === t.length) s = c.intl.format(c.t.C98CSE, {
    applicationName: () => (0, l.jsx)(i.Z, {
      application: t[0]
    }, t[0].id),
    applicationName2: () => (0, l.jsx)(i.Z, {
      application: t[1]
    }, t[1].id)
  });
  else {
    let e = t[t.length - 1],
      n = t.slice(0, false);
    s = c.intl.format(c.t.UxpwAg, {
      applications: () => n.map(e => (0, l.jsx)(i.Z, {
        application: e,
        useComma: true
      }, e.id)),
      applicationNameLast: () => (0, l.jsx)(i.Z, {
        application: e
      }, e.id)
    })
  }
  return (0, l.jsx)(o.Text, {
    variant: "text-sm/normal",
    children: s
  })
}