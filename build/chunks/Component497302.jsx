/** Chunk was on 21738 **/
/** chunk id: 497302, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
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

function _(e) {
  var t, n;
  let {
    eventId: _
  } = e, b = (0, l.bG)([o.Ay], () => o.Ay.getGuildScheduledEvent(_), [_]), E = (0, l.bG)([g.A], () => g.A.getGuild(null == b ? true : b.guild_id), [b]), O = (0, l.bG)([f.A], () => f.A.getChannel(null == b ? true : b.channel_id), [b]), y = (0, u.nh)(_, null), I = null != b && (0, o.Fd)(b), v = null != b ? (0, h.G3)(b) : null, S = (0, d.A)(null == b ? true : b.guild_id, null == b ? true : b.id, v), C = null == y ? true : y.startTime.toISOString(), {
    startDateTimeString: N
  } = i.useMemo(() => I ? {
    startDateTimeString: m.intl.string(m.t.TxqPQR)
  } : (0, h.CC)(null != C ? C : new Date().toISOString()), [C, I]), T = null != b ? (0, p.oF)(b) : true, j = null != (t = null == O ? true : O.name) ? t : T, x = null != O ? (0, s.gU)(O) : null;
  if (null == b || null == E) return null;
  let P = null != b.description && b.description.length > 0;
  return (0, r.jsxs)("div", {
    className: A.Qo,
    children: [(0, r.jsx)("div", {
      className: A.At,
      children: (0, r.jsx)(a.Text, {
        variant: "text-sm/semibold",
        color: I ? "status-positive" : "text-brand",
        children: N
      })
    }), (0, r.jsx)(a.Text, {
      variant: "text-lg/semibold",
      className: P ? A.X_ : true,
      children: b.name
    }), P && (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "text-subtle",
      className: A.tj,
      children: (0, c.l)(null != (n = b.description) ? n : "", true, {
        guildId: E.id
      })
    }), (0, r.jsx)("hr", {
      className: A.Yl
    }), (0, r.jsxs)("div", {
      className: A.oo,
      children: [(0, r.jsxs)("div", {
        className: A.ik,
        children: [(0, r.jsx)(a.nFg, {
          size: "xs",
          color: "currentColor"
        }), (0, r.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: m.intl.format(m.t["+DLsD8"], {
            count: S
          })
        })]
      }), (0, r.jsxs)("div", {
        className: A.ik,
        children: [null != x ? (0, r.jsx)(x, {
          size: "xs",
          color: "currentColor"
        }) : null, (0, r.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          className: A.HA,
          children: null != j ? (0, c.l)(j, true) : null
        })]
      })]
    })]
  })
}