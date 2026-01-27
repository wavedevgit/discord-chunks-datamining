/** Chunk was on 77870 **/
/** chunk id: 743987, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk417597 = require("./417597.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk370480 = require("./370480.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk773669 = require("./773669.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk661191 = require("./661191.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk713531 = require("./713531.js");

function g(e) {
  let {
    userId: t,
    guildId: n,
    textClassName: g,
    tooltipDelay: m
  } = e, b = (0, l.bG)([c.default], () => c.default.locale), A = (0, l.bG)([d.A], () => null != n ? d.A.getGuild(n) : null), y = (0, l.bG)([u.Ay], () => null != n ? u.Ay.getMember(n, t) : null), _ = (0, a.An)(p.default.extractTimestamp(t), b), O = (0, a.An)(null == y ? true : y.joinedAt, b);
  return null == A || null == y ? (0, r.jsx)(s.Text, {
    variant: "text-sm/normal",
    className: g,
    children: _
  }) : (0, r.jsxs)("div", {
    className: f.y9,
    children: [(0, r.jsxs)("div", {
      className: f.R1,
      children: [(0, r.jsx)(i.m, {
        text: h.intl.string(h.t.uvGmCx),
        delay: m,
        children: (0, r.jsx)(s.pVd, {
          size: "custom",
          width: 28,
          height: 28,
          color: "currentColor",
          className: f.Mg
        })
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        className: g,
        children: _
      })]
    }), (0, r.jsx)("div", {
      className: f.yF
    }), (0, r.jsxs)("div", {
      className: f.R1,
      children: [(0, r.jsx)(i.m, {
        text: A.name,
        delay: m,
        children: (0, r.jsx)(o.A, {
          guild: A,
          size: o.A.Sizes.SMOL,
          className: f.$f
        })
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        className: g,
        children: O
      })]
    })]
  })
}