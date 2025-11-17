/** Chunk was on 1272 **/
/** chunk id: 823873, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk471445 = require("./471445.js"),
  Chunk924301 = require("./924301.js"),
  Chunk725436 = require("./725436.js"),
  Chunk79874 = require("./79874.js"),
  Chunk376108 = require("./376108.js"),
  Chunk230900 = require("./230900.js"),
  Chunk854698 = require("./854698.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk372539 = require("./372539.js");

function b(e) {
  var t, n;
  let {
    eventId: b
  } = e, E = (0, l.e7)([o.ZP], () => o.ZP.getGuildScheduledEvent(b), [b]), O = (0, l.e7)([g.Z], () => g.Z.getGuild(null == E ? true : E.guild_id), [E]), y = (0, l.e7)([h.Z], () => h.Z.getChannel(null == E ? true : E.channel_id), [E]), v = (0, u.zI)(b, null), I = null != E && (0, o.xt)(E), C = null != E ? (0, f.DK)(E) : null, S = (0, d.Z)(null == E ? true : E.guild_id, null == E ? true : E.id, C), T = null == v ? true : v.startTime.toISOString(), {
    startDateTimeString: N
  } = i.useMemo(() => I ? {
    startDateTimeString: m.intl.string(m.t.TxqPQR)
  } : (0, f.ub)(null != T ? T : new Date().toISOString()), [T, I]), j = null != E ? (0, p.cS)(E) : true, P = null != (t = null == y ? true : y.name) ? t : j, x = null != y ? (0, s.KS)(y) : null;
  if (null == E || null == O) return null;
  let A = null != E.description && E.description.length > 0;
  return (0, r.jsxs)("div", {
    className: _.eventContainer,
    children: [(0, r.jsx)("div", {
      className: _.eventTimeAndUser,
      children: (0, r.jsx)(a.Text, {
        variant: "text-sm/semibold",
        color: I ? "status-positive" : "text-brand",
        children: N
      })
    }), (0, r.jsx)(a.Text, {
      variant: "text-lg/semibold",
      className: A ? _.eventTitle : true,
      children: E.name
    }), A && (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "text-secondary",
      className: _.eventDescription,
      children: (0, c.m)(null != (n = E.description) ? n : "", true, {
        guildId: O.id
      })
    }), (0, r.jsx)("hr", {
      className: _.eventDivider
    }), (0, r.jsxs)("div", {
      className: _.eventInfoContainer,
      children: [(0, r.jsxs)("div", {
        className: _.eventLocationRow,
        children: [(0, r.jsx)(a.BFJ, {
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
        className: _.eventLocationRow,
        children: [null != x ? (0, r.jsx)(x, {
          size: "xs",
          color: "currentColor"
        }) : null, (0, r.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          className: _.eventLocationText,
          children: null != P ? (0, c.m)(P, true) : null
        })]
      })]
    })]
  })
}