/** Chunk was on 93979 **/
/** chunk id: 78806, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk835473 = require("./835473.js"),
  Chunk833062 = require("./833062.jsx"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let {
    applicationIds: n
  } = e, t = (0, o.Z)(n).filter(e => null != e);
  if (0 === t.length) return null;
  let c = null;
  if (1 === t.length) c = a.intl.format(a.t.wQ6urw, {
    applicationName: () => (0, l.jsx)(r.Z, {
      application: t[0]
    }, t[0].id)
  });
  else if (2 === t.length) c = a.intl.format(a.t.C98CSN, {
    applicationName: () => (0, l.jsx)(r.Z, {
      application: t[0]
    }, t[0].id),
    applicationName2: () => (0, l.jsx)(r.Z, {
      application: t[1]
    }, t[1].id)
  });
  else {
    let e = t[t.length - 1],
      n = t.slice(0, false);
    c = a.intl.format(a.t.UxpwAh, {
      applications: () => n.map(e => (0, l.jsx)(r.Z, {
        application: e,
        useComma: true
      }, e.id)),
      applicationNameLast: () => (0, l.jsx)(r.Z, {
        application: e
      }, e.id)
    })
  }
  return (0, l.jsx)(i.Text, {
    variant: "text-sm/normal",
    children: c
  })
}