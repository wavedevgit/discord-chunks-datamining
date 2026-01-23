/** Chunk was on 7869 **/
/** chunk id: 247191, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
}), require("./228524.js"), require("./747238.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk931773 = require("./931773.js"),
  i = require.n(Chunk931773),
  Chunk989349 = require("./989349.js"),
  o = require.n(Chunk989349),
  Chunk492462 = require("./492462.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk77729 = require("./77729.js"),
  Chunk451909 = require("./451909.js"),
  Chunk71393 = require("./71393.js"),
  Chunk723702 = require("./723702.js"),
  Chunk698441 = require("./698441.js"),
  Chunk563312 = require("./563312.js"),
  Chunk794782 = require("./794782.js"),
  Chunk974930 = require("./974930.js"),
  Chunk988794 = require("./988794.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let j = "YYYYMMDDTHHmmss",
  h = "YYYY-MM-DDTHH:mm:ss",
  D = /RRULE:.*/;

function _(e, t, n, r) {
  var u, _, w;
  let N, G = (0, c.bG)([b.Ay], () => b.Ay.isActive(e)),
    S = (0, p.nh)(null != e ? e : "", r),
    P = (0, c.bG)([b.Ay], () => b.Ay.getGuildScheduledEvent(e), [e]),
    x = (0, c.bG)([y.A], () => y.A.getGuild(t), [t]);
  if (G || null == S || null == P) return null;
  N = P.entity_type === E.Ps.EXTERNAL ? P.entity_metadata.location : null != n && null != x ? m.intl.formatToPlainString(m.t["2t8L04"], {
    channelName: n.name,
    guildName: x.name
  }) : m.intl.string(m.t.VSgOVg);
  let T = o()(P.scheduled_start_time),
    C = null != P.scheduled_end_time ? o()(P.scheduled_end_time) : T,
    I = null != P.description && "" !== P.description ? g.Ay.unparse(P.description, null != (u = null == n ? true : n.id) ? u : O.dJq, true) : "",
    L = (0, A.Sn)(P.recurrence_rule),
    U = null != L ? (0, v.X7)(L) : null,
    {
      startTime: V,
      endTime: M
    } = S,
    R = null != (_ = o()(V)) ? _ : T,
    B = null != (w = o()(null != M ? M : V)) ? w : T,
    k = () => {
      let e = i()();
      e.createEvent({
        start: T,
        end: C,
        summary: P.name,
        description: I,
        location: N,
        repeating: U
      }), f.isPlatformEmbedded ? d.A.fileManager.saveWithDialog(e.toString(), "discord-event.ics") : window.open(e.toURL(), "_blank")
    };
  return (0, l.jsxs)(s.Drp, {
    id: m.intl.string(m.t.k5pvjo),
    label: m.intl.string(m.t.k5pvjo),
    action: k,
    children: [(0, l.jsx)(s.Drp, {
      id: m.intl.string(m.t.JKSLRH),
      label: m.intl.string(m.t.JKSLRH),
      action: () => {
        var e;
        let t = null == U ? true : U.toString(),
          n = {
            text: P.name,
            dates: "".concat(T.format(j), "/").concat(C.format(j)),
            details: I,
            action: "TEMPLATE",
            location: N,
            recur: null != t ? null == (e = D.exec(t)) ? true : e[0] : true
          },
          l = "https://calendar.google.com/calendar/render?".concat((0, a.stringify)(n));
        window.open(l, "_blank")
      }
    }), (0, l.jsx)(s.Drp, {
      id: m.intl.string(m.t.nrBYSe),
      label: m.intl.string(m.t.nrBYSe),
      action: k
    }), (0, l.jsx)(s.Drp, {
      id: m.intl.string(m.t.odzaCd),
      label: m.intl.string(m.t.odzaCd),
      action: () => {
        let e = {
            v: 60,
            title: P.name,
            st: R.format(j),
            et: B.format(j),
            desc: I,
            in_loc: N
          },
          t = "https://calendar.yahoo.com/?".concat((0, a.stringify)(e));
        window.open(t, "_blank")
      }
    }), (0, l.jsx)(s.Drp, {
      id: m.intl.string(m.t.rQe8EE),
      label: m.intl.string(m.t.rQe8EE),
      action: () => {
        let e = {
            path: "/calendar/action/compose",
            rru: "addevent",
            startdt: R.format(h),
            enddt: B.format(h),
            subject: P.name,
            body: I,
            location: N,
            allday: false
          },
          t = "https://outlook.live.com/calendar/0/deeplink/compose?".concat((0, a.stringify)(e));
        window.open(t, "_blank")
      }
    })]
  })
}