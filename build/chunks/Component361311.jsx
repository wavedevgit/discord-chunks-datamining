/** Chunk was on 63974 **/
/** chunk id: 361311, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk429913 = require("./429913.js"),
  Chunk102876 = require("./102876.jsx"),
  Chunk985018 = require("./985018.jsx");

function a(e) {
  let {
    applicationIds: t
  } = e, n = (0, r.A)(t).filter(e => null != e);
  if (0 === n.length) return null;
  let a = null;
  if (1 === n.length) a = o.intl.format(o.t.wQ6urw, {
    applicationName: () => (0, l.jsx)(s.A, {
      application: n[0]
    }, n[0].id)
  });
  else if (2 === n.length) a = o.intl.format(o.t.C98CSN, {
    applicationName: () => (0, l.jsx)(s.A, {
      application: n[0]
    }, n[0].id),
    applicationName2: () => (0, l.jsx)(s.A, {
      application: n[1]
    }, n[1].id)
  });
  else {
    let e = n[n.length - 1],
      t = n.slice(0, false);
    a = o.intl.format(o.t.UxpwAh, {
      applications: () => t.map(e => (0, l.jsx)(s.A, {
        application: e,
        useComma: true
      }, e.id)),
      applicationNameLast: () => (0, l.jsx)(s.A, {
        application: e
      }, e.id)
    })
  }
  return (0, l.jsx)(i.Text, {
    variant: "text-sm/normal",
    children: a
  })
}