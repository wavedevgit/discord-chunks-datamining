/** Chunk was on 27434 **/
/** chunk id: 70877, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./953529.js"), require("./35282.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
  Chunk954313 = require("./954313.js"),
  Chunk765305 = require("./765305.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let O = "YYYYMMDDTHHmmss",
  P = "YYYY-MM-DDTHH:mm:ss",
  w = /RRULE:.*/;

function x(t, n, e, i) {
  var o, x, E;
  let S, D = (0, s.e7)([f.ZP], () => f.ZP.isActive(t)),
    N = (0, p.zI)(null != t ? t : "", i),
    T = (0, s.e7)([f.ZP], () => f.ZP.getGuildScheduledEvent(t), [t]),
    _ = (0, s.e7)([v.Z], () => v.Z.getGuild(n), [n]);
  if (D || null == N || null == T) return null;
  S = T.entity_type === y.WX.EXTERNAL ? T.entity_metadata.location : null != e && null != _ ? m.intl.formatToPlainString(m.t["2t8L09"], {
    channelName: e.name,
    guildName: _.name
  }) : m.intl.string(m.t.VSgOVl);
  let R = a()(T.scheduled_start_time),
    k = null != T.scheduled_end_time ? a()(T.scheduled_end_time) : R,
    C = null != T.description && "" !== T.description ? g.ZP.unparse(T.description, null != (o = null == e ? true : e.id) ? o : Z.lds, true) : "",
    G = (0, j.KV)(T.recurrence_rule),
    L = null != G ? (0, h.Ho)(G) : null,
    {
      startTime: I,
      endTime: M
    } = N,
    X = null != (x = a()(I)) ? x : R,
    Y = null != (E = a()(null != M ? M : I)) ? E : R,
    q = () => {
      let t = r()();
      t.createEvent({
        start: R,
        end: k,
        summary: T.name,
        description: C,
        location: S,
        repeating: L
      }), b.isPlatformEmbedded ? d.Z.fileManager.saveWithDialog(t.toString(), "discord-event.ics") : window.open(t.toURL(), "_blank")
    };
  return (0, l.jsxs)(u.sNh, {
    id: m.intl.string(m.t.k5pvjo),
    label: m.intl.string(m.t.k5pvjo),
    action: q,
    children: [(0, l.jsx)(u.sNh, {
      id: m.intl.string(m.t.JKSLRE),
      label: m.intl.string(m.t.JKSLRE),
      action: () => {
        var t;
        let n = null == L ? true : L.toString(),
          e = {
            text: T.name,
            dates: "".concat(R.format(O), "/").concat(k.format(O)),
            details: C,
            action: "TEMPLATE",
            location: S,
            recur: null != n ? null == (t = w.exec(n)) ? true : t[0] : true
          },
          l = "https://calendar.google.com/calendar/render?".concat((0, c.stringify)(e));
        window.open(l, "_blank")
      }
    }), (0, l.jsx)(u.sNh, {
      id: m.intl.string(m.t.nrBYSU),
      label: m.intl.string(m.t.nrBYSU),
      action: q
    }), (0, l.jsx)(u.sNh, {
      id: m.intl.string(m.t.odzaCQ),
      label: m.intl.string(m.t.odzaCQ),
      action: () => {
        let t = {
            v: 60,
            title: T.name,
            st: X.format(O),
            et: Y.format(O),
            desc: C,
            in_loc: S
          },
          n = "https://calendar.yahoo.com/?".concat((0, c.stringify)(t));
        window.open(n, "_blank")
      }
    }), (0, l.jsx)(u.sNh, {
      id: m.intl.string(m.t.rQe8EB),
      label: m.intl.string(m.t.rQe8EB),
      action: () => {
        let t = {
            path: "/calendar/action/compose",
            rru: "addevent",
            startdt: X.format(P),
            enddt: Y.format(P),
            subject: T.name,
            body: C,
            location: S,
            allday: false
          },
          n = "https://outlook.live.com/calendar/0/deeplink/compose?".concat((0, c.stringify)(t));
        window.open(n, "_blank")
      }
    })]
  })
}