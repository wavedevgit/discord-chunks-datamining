/** Chunk was on 27434 **/
/** chunk id: 70877, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./953529.js"), require("./35282.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk164104 = require("./164104.js"),
  r = require.n(Chunk164104),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
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
  Chunk854698 = require("./854698.js"),
  Chunk765305 = require("./765305.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let m = "YYYYMMDDTHHmmss",
  _ = "YYYY-MM-DDTHH:mm:ss",
  P = /RRULE:.*/;

function Z(t, n, e, i) {
  var o, Z, T;
  let w, S = (0, u.e7)([p.ZP], () => p.ZP.isActive(t)),
    N = (0, v.zI)(null != t ? t : "", i),
    x = (0, u.e7)([p.ZP], () => p.ZP.getGuildScheduledEvent(t), [t]),
    D = (0, u.e7)([f.Z], () => f.Z.getGuild(n), [n]);
  if (S || null == N || null == x) return null;
  w = x.entity_type === E.WX.EXTERNAL ? x.entity_metadata.location : null != e && null != D ? j.intl.formatToPlainString(j.t["2t8L09"], {
    channelName: e.name,
    guildName: D.name
  }) : j.intl.string(j.t.VSgOVl);
  let A = a()(x.scheduled_start_time),
    I = null != x.scheduled_end_time ? a()(x.scheduled_end_time) : A,
    C = null != x.description && "" !== x.description ? g.ZP.unparse(x.description, null != (o = null == e ? true : e.id) ? o : O.lds, true) : "",
    R = (0, h.KV)(x.recurrence_rule),
    M = null != R ? (0, y.Ho)(R) : null,
    {
      startTime: k,
      endTime: G
    } = N,
    U = null != (Z = a()(k)) ? Z : A,
    W = null != (T = a()(null != G ? G : k)) ? T : A,
    L = () => {
      let t = r()();
      t.createEvent({
        start: A,
        end: I,
        summary: x.name,
        description: C,
        location: w,
        repeating: M
      }), b.isPlatformEmbedded ? d.Z.fileManager.saveWithDialog(t.toString(), "discord-event.ics") : window.open(t.toURL(), "_blank")
    };
  return (0, l.jsxs)(s.sNh, {
    id: j.intl.string(j.t.k5pvjo),
    label: j.intl.string(j.t.k5pvjo),
    action: L,
    children: [(0, l.jsx)(s.sNh, {
      id: j.intl.string(j.t.JKSLRE),
      label: j.intl.string(j.t.JKSLRE),
      action: () => {
        var t;
        let n = null == M ? true : M.toString(),
          e = {
            text: x.name,
            dates: "".concat(A.format(m), "/").concat(I.format(m)),
            details: C,
            action: "TEMPLATE",
            location: w,
            recur: null != n ? null == (t = P.exec(n)) ? true : t[0] : true
          },
          l = "https://calendar.google.com/calendar/render?".concat((0, c.stringify)(e));
        window.open(l, "_blank")
      }
    }), (0, l.jsx)(s.sNh, {
      id: j.intl.string(j.t.nrBYSU),
      label: j.intl.string(j.t.nrBYSU),
      action: L
    }), (0, l.jsx)(s.sNh, {
      id: j.intl.string(j.t.odzaCQ),
      label: j.intl.string(j.t.odzaCQ),
      action: () => {
        let t = {
            v: 60,
            title: x.name,
            st: U.format(m),
            et: W.format(m),
            desc: C,
            in_loc: w
          },
          n = "https://calendar.yahoo.com/?".concat((0, c.stringify)(t));
        window.open(n, "_blank")
      }
    }), (0, l.jsx)(s.sNh, {
      id: j.intl.string(j.t.rQe8EB),
      label: j.intl.string(j.t.rQe8EB),
      action: () => {
        let t = {
            path: "/calendar/action/compose",
            rru: "addevent",
            startdt: U.format(_),
            enddt: W.format(_),
            subject: x.name,
            body: C,
            location: w,
            allday: false
          },
          n = "https://outlook.live.com/calendar/0/deeplink/compose?".concat((0, c.stringify)(t));
        window.open(n, "_blank")
      }
    })]
  })
}