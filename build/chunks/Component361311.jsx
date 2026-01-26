/** Chunk was on 97887 **/
/** chunk id: 361311, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk429913 = require("./429913.js"),
  Chunk102876 = require("./102876.jsx"),
  Chunk985018 = require("./985018.jsx");

function o(e) {
  let {
    applicationIds: t
  } = e, n = (0, i.A)(t).filter(e => null != e);
  if (0 === n.length) return null;
  let o = null;
  if (1 === n.length) o = a.intl.format(a.t.wQ6urw, {
    applicationName: () => (0, r.jsx)(s.A, {
      application: n[0]
    }, n[0].id)
  });
  else if (2 === n.length) o = a.intl.format(a.t.C98CSN, {
    applicationName: () => (0, r.jsx)(s.A, {
      application: n[0]
    }, n[0].id),
    applicationName2: () => (0, r.jsx)(s.A, {
      application: n[1]
    }, n[1].id)
  });
  else {
    let e = n[n.length - 1],
      t = n.slice(0, false);
    o = a.intl.format(a.t.UxpwAh, {
      applications: () => t.map(e => (0, r.jsx)(s.A, {
        application: e,
        useComma: true
      }, e.id)),
      applicationNameLast: () => (0, r.jsx)(s.A, {
        application: e
      }, e.id)
    })
  }
  return (0, r.jsx)(l.Text, {
    variant: "text-sm/normal",
    children: o
  })
}