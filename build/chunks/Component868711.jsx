/** Chunk was on 7453 **/
/** chunk id: 868711, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => p
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

function p(e) {
  let {
    guildId: n,
    onClose: t
  } = e, p = (0, r.bG)([c.A, s.A], () => {
    let e = c.A.getGuild(n);
    return s.A.can(u.xBc.MANAGE_ROLES, e)
  }, [n]);
  return (0, l.jsxs)("div", {
    className: g.kL,
    children: [(0, l.jsx)(o.A, {
      children: (0, l.jsx)("div", {
        className: g.n1,
        children: (0, l.jsx)(i.CTc, {
          size: "custom",
          color: "currentColor",
          height: 40,
          width: 40,
          className: g.Kk
        })
      })
    }), (0, l.jsx)(i.Heading, {
      color: "text-strong",
      variant: "heading-xl/semibold",
      className: g.DD,
      children: d.intl.string(d.t["WgZ+3D"])
    }), (0, l.jsx)(i.Text, {
      color: "text-default",
      variant: "text-sm/normal",
      className: g.VA,
      children: d.intl.string(d.t["v/S/PG"])
    }), p && (0, l.jsx)(i.Text, {
      color: "text-default",
      variant: "text-sm/normal",
      className: g.Ec,
      children: d.intl.format(d.t["K+DH2o"], {
        onClick: () => {
          a.A.open(n, u.BEX.ROLES), t()
        }
      })
    })]
  })
}