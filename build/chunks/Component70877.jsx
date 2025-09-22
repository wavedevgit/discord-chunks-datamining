/** Chunk was on 470 **/
/** chunk id: 70877, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./953529.js"), require("./35282.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk35149 = require("./35149.js"),
  i = require.n(Chunk35149),
  Chunk913527 = require("./913527.js"),
  u = require.n(Chunk913527),
  Chunk593473 = require("./593473.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk579806 = require("./579806.js"),
  Chunk957730 = require("./957730.js"),
  Chunk430824 = require("./430824.js"),
  Chunk358085 = require("./358085.js"),
  Chunk924301 = require("./924301.js"),
  Chunk79874 = require("./79874.js"),
  Chunk236373 = require("./236373.js"),
  Chunk954313 = require("./954313.js"),
  Chunk765305 = require("./765305.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let P = "YYYYMMDDTHHmmss",
  m = "YYYY-MM-DDTHH:mm:ss",
  j = /RRULE:.*/;

function N(t, e, n, r) {
  var o, N, _;
  let w, S = (0, a.e7)([v.ZP], () => v.ZP.isActive(t)),
    D = (0, E.zI)(null != t ? t : "", r),
    T = (0, a.e7)([v.ZP], () => v.ZP.getGuildScheduledEvent(t), [t]),
    x = (0, a.e7)([f.Z], () => f.Z.getGuild(e), [e]);
  if (S || null == D || null == T) return null;
  w = T.entity_type === y.WX.EXTERNAL ? T.entity_metadata.location : null != n && null != x ? h.intl.formatToPlainString(h.t["2t8L09"], {
    channelName: n.name,
    guildName: x.name
  }) : h.intl.string(h.t.VSgOVl);
  let I = u()(T.scheduled_start_time),
    C = null != T.scheduled_end_time ? u()(T.scheduled_end_time) : I,
    G = null != T.description && "" !== T.description ? g.ZP.unparse(T.description, null != (o = null == n ? true : n.id) ? o : O.lds, true) : "",
    L = (0, p.KV)(T.recurrence_rule),
    U = null != L ? (0, Z.Ho)(L) : null,
    {
      startTime: M,
      endTime: V
    } = D,
    A = null != (N = u()(M)) ? N : I,
    R = null != (_ = u()(null != V ? V : M)) ? _ : I,
    k = () => {
      let t = i()();
      t.createEvent({
        start: I,
        end: C,
        summary: T.name,
        description: G,
        location: w,
        repeating: U
      }), b.isPlatformEmbedded ? d.Z.fileManager.saveWithDialog(t.toString(), "discord-event.ics") : window.open(t.toURL(), "_blank")
    };
  return (0, l.jsxs)(s.sNh, {
    id: h.intl.string(h.t.k5pvjo),
    label: h.intl.string(h.t.k5pvjo),
    action: k,
    children: [(0, l.jsx)(s.sNh, {
      id: h.intl.string(h.t.JKSLRE),
      label: h.intl.string(h.t.JKSLRE),
      action: () => {
        var t;
        let e = null == U ? true : U.toString(),
          n = {
            text: T.name,
            dates: "".concat(I.format(P), "/").concat(C.format(P)),
            details: G,
            action: "TEMPLATE",
            location: w,
            recur: null != e ? null == (t = j.exec(e)) ? true : t[0] : true
          },
          l = "https://calendar.google.com/calendar/render?".concat((0, c.stringify)(n));
        window.open(l, "_blank")
      }
    }), (0, l.jsx)(s.sNh, {
      id: h.intl.string(h.t.nrBYSU),
      label: h.intl.string(h.t.nrBYSU),
      action: k
    }), (0, l.jsx)(s.sNh, {
      id: h.intl.string(h.t.odzaCQ),
      label: h.intl.string(h.t.odzaCQ),
      action: () => {
        let t = {
            v: 60,
            title: T.name,
            st: A.format(P),
            et: R.format(P),
            desc: G,
            in_loc: w
          },
          e = "https://calendar.yahoo.com/?".concat((0, c.stringify)(t));
        window.open(e, "_blank")
      }
    }), (0, l.jsx)(s.sNh, {
      id: h.intl.string(h.t.rQe8EB),
      label: h.intl.string(h.t.rQe8EB),
      action: () => {
        let t = {
            path: "/calendar/action/compose",
            rru: "addevent",
            startdt: A.format(m),
            enddt: R.format(m),
            subject: T.name,
            body: G,
            location: w,
            allday: false
          },
          e = "https://outlook.live.com/calendar/0/deeplink/compose?".concat((0, c.stringify)(t));
        window.open(e, "_blank")
      }
    })]
  })
}