/** Chunk was on 470 **/
/** chunk id: 70877, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./953529.js"), require("./35282.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk854698 = require("./854698.js"),
  Chunk765305 = require("./765305.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let h = "YYYYMMDDTHHmmss",
  j = "YYYY-MM-DDTHH:mm:ss",
  m = /RRULE:.*/;

function N(t, e, n, r) {
  var o, N, w;
  let _, D = (0, a.e7)([p.ZP], () => p.ZP.isActive(t)),
    S = (0, v.zI)(null != t ? t : "", r),
    x = (0, a.e7)([p.ZP], () => p.ZP.getGuildScheduledEvent(t), [t]),
    T = (0, a.e7)([f.Z], () => f.Z.getGuild(e), [e]);
  if (D || null == S || null == x) return null;
  _ = x.entity_type === O.WX.EXTERNAL ? x.entity_metadata.location : null != n && null != T ? Z.intl.formatToPlainString(Z.t["2t8L04"], {
    channelName: n.name,
    guildName: T.name
  }) : Z.intl.string(Z.t.VSgOVg);
  let I = u()(x.scheduled_start_time),
    C = null != x.scheduled_end_time ? u()(x.scheduled_end_time) : I,
    G = null != x.description && "" !== x.description ? g.ZP.unparse(x.description, null != (o = null == n ? true : n.id) ? o : P.lds, true) : "",
    L = (0, E.KV)(x.recurrence_rule),
    U = null != L ? (0, y.Ho)(L) : null,
    {
      startTime: A,
      endTime: M
    } = S,
    V = null != (N = u()(A)) ? N : I,
    k = null != (w = u()(null != M ? M : A)) ? w : I,
    R = () => {
      let t = i()();
      t.createEvent({
        start: I,
        end: C,
        summary: x.name,
        description: G,
        location: _,
        repeating: U
      }), b.isPlatformEmbedded ? d.Z.fileManager.saveWithDialog(t.toString(), "discord-event.ics") : window.open(t.toURL(), "_blank")
    };
  return (0, l.jsxs)(s.sNh, {
    id: Z.intl.string(Z.t.k5pvjo),
    label: Z.intl.string(Z.t.k5pvjo),
    action: R,
    children: [(0, l.jsx)(s.sNh, {
      id: Z.intl.string(Z.t.JKSLRH),
      label: Z.intl.string(Z.t.JKSLRH),
      action: () => {
        var t;
        let e = null == U ? true : U.toString(),
          n = {
            text: x.name,
            dates: "".concat(I.format(h), "/").concat(C.format(h)),
            details: G,
            action: "TEMPLATE",
            location: _,
            recur: null != e ? null == (t = m.exec(e)) ? true : t[0] : true
          },
          l = "https://calendar.google.com/calendar/render?".concat((0, c.stringify)(n));
        window.open(l, "_blank")
      }
    }), (0, l.jsx)(s.sNh, {
      id: Z.intl.string(Z.t.nrBYSe),
      label: Z.intl.string(Z.t.nrBYSe),
      action: R
    }), (0, l.jsx)(s.sNh, {
      id: Z.intl.string(Z.t.odzaCd),
      label: Z.intl.string(Z.t.odzaCd),
      action: () => {
        let t = {
            v: 60,
            title: x.name,
            st: V.format(h),
            et: k.format(h),
            desc: G,
            in_loc: _
          },
          e = "https://calendar.yahoo.com/?".concat((0, c.stringify)(t));
        window.open(e, "_blank")
      }
    }), (0, l.jsx)(s.sNh, {
      id: Z.intl.string(Z.t.rQe8EE),
      label: Z.intl.string(Z.t.rQe8EE),
      action: () => {
        let t = {
            path: "/calendar/action/compose",
            rru: "addevent",
            startdt: V.format(j),
            enddt: k.format(j),
            subject: x.name,
            body: G,
            location: _,
            allday: false
          },
          e = "https://outlook.live.com/calendar/0/deeplink/compose?".concat((0, c.stringify)(t));
        window.open(e, "_blank")
      }
    })]
  })
}