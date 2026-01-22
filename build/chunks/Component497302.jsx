/** Chunk was on 21738 **/
/** chunk id: 497302, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk713654 = require("./713654.js"),
  Chunk698441 = require("./698441.js"),
  Chunk435328 = require("./435328.js"),
  Chunk563312 = require("./563312.js"),
  Chunk826383 = require("./826383.js"),
  Chunk9448 = require("./9448.js"),
  Chunk974930 = require("./974930.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk659088 = require("./659088.js");

function b(e) {
  var t, n;
  let {
    eventId: b
  } = e, _ = (0, l.bG)([o.Ay], () => o.Ay.getGuildScheduledEvent(b), [b]), E = (0, l.bG)([A.A], () => A.A.getGuild(null == _ ? true : _.guild_id), [_]), O = (0, l.bG)([h.A], () => h.A.getChannel(null == _ ? true : _.channel_id), [_]), y = (0, u.nh)(b, null), I = null != _ && (0, o.Fd)(_), v = null != _ ? (0, f.G3)(_) : null, S = (0, d.A)(null == _ ? true : _.guild_id, null == _ ? true : _.id, v), C = null == y ? true : y.startTime.toISOString(), {
    startDateTimeString: N
  } = i.useMemo(() => I ? {
    startDateTimeString: g.intl.string(g.t.TxqPQR)
  } : (0, f.CC)(null != C ? C : new Date().toISOString()), [C, I]), T = null != _ ? (0, p.oF)(_) : true, j = null != (t = null == O ? true : O.name) ? t : T, x = null != O ? (0, s.gU)(O) : null;
  if (null == _ || null == E) return null;
  let P = null != _.description && _.description.length > 0;
  return (0, r.jsxs)("div", {
    className: m.Qo,
    children: [(0, r.jsx)("div", {
      className: m.At,
      children: (0, r.jsx)(a.Text, {
        variant: "text-sm/semibold",
        color: I ? "status-positive" : "text-brand",
        children: N
      })
    }), (0, r.jsx)(a.Text, {
      variant: "text-lg/semibold",
      className: P ? m.X_ : true,
      children: _.name
    }), P && (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "text-subtle",
      className: m.tj,
      children: (0, c.l)(null != (n = _.description) ? n : "", true, {
        guildId: E.id
      })
    }), (0, r.jsx)("hr", {
      className: m.Yl
    }), (0, r.jsxs)("div", {
      className: m.oo,
      children: [(0, r.jsxs)("div", {
        className: m.ik,
        children: [(0, r.jsx)(a.nFg, {
          size: "xs",
          color: "currentColor"
        }), (0, r.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: g.intl.format(g.t["+DLsD8"], {
            count: S
          })
        })]
      }), (0, r.jsxs)("div", {
        className: m.ik,
        children: [null != x ? (0, r.jsx)(x, {
          size: "xs",
          color: "currentColor"
        }) : null, (0, r.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          className: m.HA,
          children: null != j ? (0, c.l)(j, true) : null
        })]
      })]
    })]
  })
}