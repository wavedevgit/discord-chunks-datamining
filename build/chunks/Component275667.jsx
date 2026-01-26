/** Chunk was on 97887 **/
/** chunk id: 275667, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk253932 = require("./253932.js"),
  Chunk461213 = require("./461213.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk73187 = require("./73187.js");

function u(e) {
  let {
    onClick: t
  } = e;
  return (0, r.jsx)(i.DUT, {
    className: c.kL,
    onClick: t,
    children: (0, r.jsx)(i.Text, {
      className: c.P_,
      variant: "text-xs/medium",
      color: "text-subtle",
      children: o.intl.string(o.t.jfrLLb)
    })
  })
}

function d(e) {
  let {
    onClick: t
  } = e, n = s.tz.useSetting(), o = (0, l.bG)([a.A], () => a.A.getStatus());
  return __OVERLAY__ || n && o !== i.clD.INVISIBLE ? null : (0, r.jsx)(u, {
    onClick: t
  })
}