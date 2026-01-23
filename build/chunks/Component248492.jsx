/** Chunk was on 58652 **/
/** chunk id: 248492, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk692617 = require("./692617.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk824552 = require("./824552.js"),
  Chunk573435 = require("./573435.jsx"),
  Chunk973172 = require("./973172.js"),
  Chunk186272 = require("./186272.js"),
  Chunk546183 = require("./546183.js"),
  Chunk661191 = require("./661191.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk449154 = require("./449154.js"),
  Chunk532406 = require("./532406.js");
let _ = e => {
  var t, n;
  let {
    entry: _
  } = e, {
    name: h
  } = _, v = (0, i.bG)([m.default], () => m.default.getNewestTokenForApplication(_.id)), f = null != (t = _.getIconURL(40)) ? t : g, j = (0, c.A)({
    application: _
  }), A = r.useRef(false);
  r.useEffect(() => {
    A.current || (o.A.fetch(), A.current = true)
  }, []);
  let y = null != v ? p.default.extractTimestamp(v.id) : true;
  return (0, l.jsxs)("div", {
    className: x.kL,
    children: [(0, l.jsx)(s.Heading, {
      className: x.wx,
      variant: "heading-sm/semibold",
      children: b.intl.string(b.t["aYfK/w"])
    }), (0, l.jsx)("div", {
      className: x.vU,
      children: (0, l.jsxs)("div", {
        className: x.qi,
        children: [(0, l.jsx)(d.Ay, {
          mask: d.Ay.Masks.AVATAR_DEFAULT,
          width: 40,
          height: 40,
          className: x.VE,
          children: (0, l.jsx)("img", {
            src: f,
            alt: "",
            className: x.Z2
          })
        }), (0, l.jsxs)("div", {
          className: x.FS,
          children: [(0, l.jsx)(s.Text, {
            color: "text-strong",
            variant: "text-md/medium",
            children: h
          }), j.length > 0 ? (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(s.Text, {
              color: "text-default",
              variant: "text-md/normal",
              children: (0, u.A)(j.length)
            }), (0, l.jsx)(a.A, {
              className: x.uM,
              guilds: j,
              maxGuilds: 6
            })]
          }) : (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(s.Text, {
              color: "text-default",
              variant: "text-md/normal",
              children: null == (n = _.bot) ? true : n.tag
            }), null != y && (0, l.jsx)(s.Text, {
              color: "text-default",
              variant: "text-md/normal",
              children: b.intl.formatToPlainString(b.t.C9rUO8, {
                authorizedAt: y
              })
            })]
          })]
        })]
      })
    })]
  })
}