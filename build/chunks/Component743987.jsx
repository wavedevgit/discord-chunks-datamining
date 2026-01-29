/** Chunk was on 63974 **/
/** chunk id: 743987, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
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

function A(e) {
  let {
    userId: t,
    guildId: n,
    textClassName: A,
    tooltipDelay: x
  } = e, g = (0, i.bG)([d.default], () => d.default.locale), j = (0, i.bG)([u.A], () => null != n ? u.A.getGuild(n) : null), h = (0, i.bG)([c.Ay], () => null != n ? c.Ay.getMember(n, t) : null), b = (0, o.An)(p.default.extractTimestamp(t), g), v = (0, o.An)(null == h ? true : h.joinedAt, g);
  return null == j || null == h ? (0, l.jsx)(s.Text, {
    variant: "text-sm/normal",
    className: A,
    children: b
  }) : (0, l.jsxs)("div", {
    className: m.y9,
    children: [(0, l.jsxs)("div", {
      className: m.R1,
      children: [(0, l.jsx)(r.m, {
        text: f.intl.string(f.t.uvGmCx),
        delay: x,
        children: (0, l.jsx)(s.pVd, {
          size: "custom",
          width: 28,
          height: 28,
          color: "currentColor",
          className: m.Mg
        })
      }), (0, l.jsx)(s.Text, {
        variant: "text-sm/normal",
        className: A,
        children: b
      })]
    }), (0, l.jsx)("div", {
      className: m.yF
    }), (0, l.jsxs)("div", {
      className: m.R1,
      children: [(0, l.jsx)(r.m, {
        text: j.name,
        delay: x,
        children: (0, l.jsx)(a.A, {
          guild: j,
          size: a.A.Sizes.SMOL,
          className: m.$f
        })
      }), (0, l.jsx)(s.Text, {
        variant: "text-sm/normal",
        className: A,
        children: v
      })]
    })]
  })
}