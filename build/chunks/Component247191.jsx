/** Chunk was on 7869 **/
/** chunk id: 247191, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
}), require("./228524.js"), require("./747238.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk931773 = require("./931773.js"),
  i = require.n(Chunk931773),
  Chunk989349 = require("./989349.js"),
  u = require.n(Chunk989349),
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
let _ = "YYYYMMDDTHHmmss",
  m = "YYYY-MM-DDTHH:mm:ss",
  T = /RRULE:.*/;

function j(e, t, n, r) {
  var o, j, S;
  let w, D = (0, c.bG)([A.Ay], () => A.Ay.isActive(e)),
    N = (0, y.nh)(null != e ? e : "", r),
    P = (0, c.bG)([A.Ay], () => A.Ay.getGuildScheduledEvent(e), [e]),
    G = (0, c.bG)([E.A], () => E.A.getGuild(t), [t]);
  if (D || null == N || null == P) return null;
  w = P.entity_type === v.Ps.EXTERNAL ? P.entity_metadata.location : null != n && null != G ? h.intl.formatToPlainString(h.t["2t8L04"], {
    channelName: n.name,
    guildName: G.name
  }) : h.intl.string(h.t.VSgOVg);
  let I = u()(P.scheduled_start_time),
    x = null != P.scheduled_end_time ? u()(P.scheduled_end_time) : I,
    C = null != P.description && "" !== P.description ? g.Ay.unparse(P.description, null != (o = null == n ? true : n.id) ? o : O.dJq, true) : "",
    R = (0, p.Sn)(P.recurrence_rule),
    L = null != R ? (0, b.X7)(R) : null,
    {
      startTime: U,
      endTime: V
    } = N,
    M = null != (j = u()(U)) ? j : I,
    B = null != (S = u()(null != V ? V : U)) ? S : I,
    k = () => {
      let e = i()();
      e.createEvent({
        start: I,
        end: x,
        summary: P.name,
        description: C,
        location: w,
        repeating: L
      }), f.isPlatformEmbedded ? d.A.fileManager.saveWithDialog(e.toString(), "discord-event.ics") : window.open(e.toURL(), "_blank")
    };
  return (0, l.jsxs)(s.Drp, {
    id: h.intl.string(h.t.k5pvjo),
    label: h.intl.string(h.t.k5pvjo),
    action: k,
    children: [(0, l.jsx)(s.Drp, {
      id: h.intl.string(h.t.JKSLRH),
      label: h.intl.string(h.t.JKSLRH),
      action: () => {
        var e;
        let t = null == L ? true : L.toString(),
          n = {
            text: P.name,
            dates: "".concat(I.format(_), "/").concat(x.format(_)),
            details: C,
            action: "TEMPLATE",
            location: w,
            recur: null != t ? null == (e = T.exec(t)) ? true : e[0] : true
          },
          l = "https://calendar.google.com/calendar/render?".concat((0, a.stringify)(n));
        window.open(l, "_blank")
      }
    }), (0, l.jsx)(s.Drp, {
      id: h.intl.string(h.t.nrBYSe),
      label: h.intl.string(h.t.nrBYSe),
      action: k
    }), (0, l.jsx)(s.Drp, {
      id: h.intl.string(h.t.odzaCd),
      label: h.intl.string(h.t.odzaCd),
      action: () => {
        let e = {
            v: 60,
            title: P.name,
            st: M.format(_),
            et: B.format(_),
            desc: C,
            in_loc: w
          },
          t = "https://calendar.yahoo.com/?".concat((0, a.stringify)(e));
        window.open(t, "_blank")
      }
    }), (0, l.jsx)(s.Drp, {
      id: h.intl.string(h.t.rQe8EE),
      label: h.intl.string(h.t.rQe8EE),
      action: () => {
        let e = {
            path: "/calendar/action/compose",
            rru: "addevent",
            startdt: M.format(m),
            enddt: B.format(m),
            subject: P.name,
            body: C,
            location: w,
            allday: false
          },
          t = "https://outlook.live.com/calendar/0/deeplink/compose?".concat((0, a.stringify)(e));
        window.open(t, "_blank")
      }
    })]
  })
}