/** Chunk was on 1272 **/
/** chunk id: 823873, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk471445 = require("./471445.js"),
  Chunk924301 = require("./924301.js"),
  Chunk725436 = require("./725436.js"),
  Chunk79874 = require("./79874.js"),
  Chunk315416 = require("./315416.js"),
  Chunk230900 = require("./230900.js"),
  Chunk854698 = require("./854698.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk617821 = require("./617821.js");

function _(e) {
  var t, n;
  let {
    eventId: _
  } = e, E = (0, l.e7)([s.ZP], () => s.ZP.getGuildScheduledEvent(_), [_]), O = (0, l.e7)([h.Z], () => h.Z.getGuild(null == E ? true : E.guild_id), [E]), v = (0, l.e7)([g.Z], () => g.Z.getChannel(null == E ? true : E.channel_id), [E]), I = (0, u.zI)(_, null), y = null != E && (0, s.xt)(E), C = null != E ? (0, f.DK)(E) : null, S = (0, d.Z)(null == E ? true : E.guild_id, null == E ? true : E.id, C), T = null == I ? true : I.startTime.toISOString(), {
    startDateTimeString: N
  } = i.useMemo(() => y ? {
    startDateTimeString: m.intl.string(m.t.TxqPQR)
  } : (0, f.ub)(null != T ? T : new Date().toISOString()), [T, y]), j = null != E ? (0, p.cS)(E) : true, x = null != (t = null == v ? true : v.name) ? t : j, P = null != v ? (0, o.KS)(v) : null;
  if (null == E || null == O) return null;
  let A = null != E.description && E.description.length > 0;
  return (0, r.jsxs)("div", {
    className: b.eventContainer,
    children: [(0, r.jsx)("div", {
      className: b.eventTimeAndUser,
      children: (0, r.jsx)(a.Text, {
        variant: "text-sm/semibold",
        color: y ? "status-positive" : "text-brand",
        children: N
      })
    }), (0, r.jsx)(a.Text, {
      variant: "text-lg/semibold",
      className: A ? b.eventTitle : true,
      children: E.name
    }), A && (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "text-subtle",
      className: b.eventDescription,
      children: (0, c.m)(null != (n = E.description) ? n : "", true, {
        guildId: O.id
      })
    }), (0, r.jsx)("hr", {
      className: b.eventDivider
    }), (0, r.jsxs)("div", {
      className: b.eventInfoContainer,
      children: [(0, r.jsxs)("div", {
        className: b.eventLocationRow,
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
        className: b.eventLocationRow,
        children: [null != P ? (0, r.jsx)(P, {
          size: "xs",
          color: "currentColor"
        }) : null, (0, r.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          className: b.eventLocationText,
          children: null != x ? (0, c.m)(x, true) : null
        })]
      })]
    })]
  })
}