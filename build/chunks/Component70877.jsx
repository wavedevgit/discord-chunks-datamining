/** Chunk was on 470 **/
/** chunk id: 70877, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./953529.js"), require("./35282.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk35149 = require("./35149.js"),
  r = require.n(Chunk35149),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
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
let O = "YYYYMMDDTHHmmss",
  m = "YYYY-MM-DDTHH:mm:ss",
  j = /RRULE:.*/;

function N(t, e, n, i) {
  var u, N, _;
  let S, w = (0, a.e7)([b.ZP], () => b.ZP.isActive(t)),
    D = (0, E.zI)(null != t ? t : "", i),
    x = (0, a.e7)([b.ZP], () => b.ZP.getGuildScheduledEvent(t), [t]),
    T = (0, a.e7)([f.Z], () => f.Z.getGuild(e), [e]);
  if (w || null == D || null == x) return null;
  S = x.entity_type === h.WX.EXTERNAL ? x.entity_metadata.location : null != n && null != T ? P.intl.formatToPlainString(P.t["2t8L04"], {
    channelName: n.name,
    guildName: T.name
  }) : P.intl.string(P.t.VSgOVg);
  let I = o()(x.scheduled_start_time),
    C = null != x.scheduled_end_time ? o()(x.scheduled_end_time) : I,
    G = null != x.description && "" !== x.description ? g.ZP.unparse(x.description, null != (u = null == n ? true : n.id) ? u : y.lds, true) : "",
    L = (0, p.KV)(x.recurrence_rule),
    U = null != L ? (0, Z.Ho)(L) : null,
    {
      startTime: A,
      endTime: V
    } = D,
    M = null != (N = o()(A)) ? N : I,
    k = null != (_ = o()(null != V ? V : A)) ? _ : I,
    R = () => {
      let t = r()();
      t.createEvent({
        start: I,
        end: C,
        summary: x.name,
        description: G,
        location: S,
        repeating: U
      }), v.isPlatformEmbedded ? d.Z.fileManager.saveWithDialog(t.toString(), "discord-event.ics") : window.open(t.toURL(), "_blank")
    };
  return (0, l.jsxs)(s.sNh, {
    id: P.intl.string(P.t.k5pvjo),
    label: P.intl.string(P.t.k5pvjo),
    action: R,
    children: [(0, l.jsx)(s.sNh, {
      id: P.intl.string(P.t.JKSLRH),
      label: P.intl.string(P.t.JKSLRH),
      action: () => {
        var t;
        let e = null == U ? true : U.toString(),
          n = {
            text: x.name,
            dates: "".concat(I.format(O), "/").concat(C.format(O)),
            details: G,
            action: "TEMPLATE",
            location: S,
            recur: null != e ? null == (t = j.exec(e)) ? true : t[0] : true
          },
          l = "https://calendar.google.com/calendar/render?".concat((0, c.stringify)(n));
        window.open(l, "_blank")
      }
    }), (0, l.jsx)(s.sNh, {
      id: P.intl.string(P.t.nrBYSe),
      label: P.intl.string(P.t.nrBYSe),
      action: R
    }), (0, l.jsx)(s.sNh, {
      id: P.intl.string(P.t.odzaCd),
      label: P.intl.string(P.t.odzaCd),
      action: () => {
        let t = {
            v: 60,
            title: x.name,
            st: M.format(O),
            et: k.format(O),
            desc: G,
            in_loc: S
          },
          e = "https://calendar.yahoo.com/?".concat((0, c.stringify)(t));
        window.open(e, "_blank")
      }
    }), (0, l.jsx)(s.sNh, {
      id: P.intl.string(P.t.rQe8EE),
      label: P.intl.string(P.t.rQe8EE),
      action: () => {
        let t = {
            path: "/calendar/action/compose",
            rru: "addevent",
            startdt: M.format(m),
            enddt: k.format(m),
            subject: x.name,
            body: G,
            location: S,
            allday: false
          },
          e = "https://outlook.live.com/calendar/0/deeplink/compose?".concat((0, c.stringify)(t));
        window.open(e, "_blank")
      }
    })]
  })
}