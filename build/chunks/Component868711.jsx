/** Chunk was on 7453 **/
/** chunk id: 868711, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk997509 = require("./997509.js"),
  Chunk489673 = require("./489673.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk563959 = require("./563959.js");

function g(e) {
  let {
    guildId: n,
    onClose: t
  } = e, g = (0, l.bG)([c.A, o.A], () => {
    let e = c.A.getGuild(n);
    return o.A.can(u.xBc.MANAGE_ROLES, e)
  }, [n]);
  return (0, r.jsxs)("div", {
    className: m.kL,
    children: [(0, r.jsx)(a.A, {
      children: (0, r.jsx)("div", {
        className: m.n1,
        children: (0, r.jsx)(i.CTc, {
          size: "custom",
          color: "currentColor",
          height: 40,
          width: 40,
          className: m.Kk
        })
      })
    }), (0, r.jsx)(i.Heading, {
      color: "text-strong",
      variant: "heading-xl/semibold",
      className: m.DD,
      children: d.intl.string(d.t["WgZ+3D"])
    }), (0, r.jsx)(i.Text, {
      color: "text-default",
      variant: "text-sm/normal",
      className: m.VA,
      children: d.intl.string(d.t["v/S/PG"])
    }), g && (0, r.jsx)(i.Text, {
      color: "text-default",
      variant: "text-sm/normal",
      className: m.Ec,
      children: d.intl.format(d.t["K+DH2o"], {
        onClick: () => {
          s.A.open(n, u.BEX.ROLES), t()
        }
      })
    })]
  })
}