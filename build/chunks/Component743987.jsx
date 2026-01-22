/** Chunk was on 97492 **/
/** chunk id: 743987, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
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

function b(e) {
  let {
    userId: t,
    guildId: n,
    textClassName: b,
    tooltipDelay: g
  } = e, m = (0, l.bG)([c.default], () => c.default.locale), A = (0, l.bG)([d.A], () => null != n ? d.A.getGuild(n) : null), y = (0, l.bG)([u.Ay], () => null != n ? u.Ay.getMember(n, t) : null), O = (0, s.An)(f.default.extractTimestamp(t), m), j = (0, s.An)(null == y ? true : y.joinedAt, m);
  return null == A || null == y ? (0, r.jsx)(a.Text, {
    variant: "text-sm/normal",
    className: b,
    children: O
  }) : (0, r.jsxs)("div", {
    className: h.y9,
    children: [(0, r.jsxs)("div", {
      className: h.R1,
      children: [(0, r.jsx)(i.m, {
        text: p.intl.string(p.t.uvGmCx),
        delay: g,
        children: (0, r.jsx)(a.pVd, {
          size: "custom",
          width: 28,
          height: 28,
          color: "currentColor",
          className: h.Mg
        })
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        className: b,
        children: O
      })]
    }), (0, r.jsx)("div", {
      className: h.yF
    }), (0, r.jsxs)("div", {
      className: h.R1,
      children: [(0, r.jsx)(i.m, {
        text: A.name,
        delay: g,
        children: (0, r.jsx)(o.A, {
          guild: A,
          size: o.A.Sizes.SMOL,
          className: h.$f
        })
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        className: b,
        children: j
      })]
    })]
  })
}