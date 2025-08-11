/** Chunk was on 16459 **/
/** chunk id: 78806, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk835473 = require("./835473.js"),
  Chunk833062 = require("./833062.jsx"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  let {
    applicationIds: t
  } = e, r = (0, a.Z)(t).filter(e => null != e);
  if (0 === r.length) return null;
  let o = null;
  if (1 === r.length) o = s.intl.format(s.t.wQ6ur6, {
    applicationName: () => (0, n.jsx)(l.Z, {
      application: r[0]
    }, r[0].id)
  });
  else if (2 === r.length) o = s.intl.format(s.t.C98CSE, {
    applicationName: () => (0, n.jsx)(l.Z, {
      application: r[0]
    }, r[0].id),
    applicationName2: () => (0, n.jsx)(l.Z, {
      application: r[1]
    }, r[1].id)
  });
  else {
    let e = r[r.length - 1],
      t = r.slice(0, false);
    o = s.intl.format(s.t.UxpwAg, {
      applications: () => t.map(e => (0, n.jsx)(l.Z, {
        application: e,
        useComma: true
      }, e.id)),
      applicationNameLast: () => (0, n.jsx)(l.Z, {
        application: e
      }, e.id)
    })
  }
  return (0, n.jsx)(i.Text, {
    variant: "text-sm/normal",
    children: o
  })
}