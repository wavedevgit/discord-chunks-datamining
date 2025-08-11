/** Chunk was on 21199 **/
/** chunk id: 697849, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => F
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk257465 = require("./257465.jsx"),
  Chunk369585 = require("./369585.jsx"),
  Chunk103866 = require("./103866.jsx"),
  Chunk37148 = require("./37148.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk313201 = require("./313201.js"),
  Chunk724912 = require("./724912.js"),
  Chunk41776 = require("./41776.js"),
  Chunk592125 = require("./592125.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981888 = require("./981888.js"),
  Chunk897285 = require("./897285.js"),
  Chunk924301 = require("./924301.js"),
  Chunk951539 = require("./951539.js"),
  Chunk592126 = require("./592126.js"),
  Chunk376108 = require("./376108.js"),
  Chunk711373 = require("./711373.js"),
  Chunk274311 = require("./274311.js"),
  Chunk854698 = require("./854698.js"),
  Chunk405613 = require("./405613.js"),
  Chunk285784 = require("./285784.jsx"),
  Chunk95291 = require("./95291.jsx"),
  Chunk187443 = require("./187443.js"),
  Chunk464766 = require("./464766.jsx"),
  Chunk724278 = require("./724278.js"),
  Chunk462747 = require("./462747.jsx"),
  Chunk462179 = require("./462179.jsx"),
  Chunk765305 = require("./765305.js"),
  Chunk981631 = require("./981631.js"),
  Chunk40395 = require("./40395.js");

function B(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      l = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), l.forEach(function(n) {
      var l;
      l = t[n], n in e ? Object.defineProperty(e, n, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = l
    })
  }
  return e
}

function M(e) {
  let {
    guildEvent: n,
    guild: t,
    channel: i,
    onActionTaken: r,
    recurrenceId: o
  } = e, {
    isActive: s,
    rsvped: a,
    canInvite: u,
    isUserLurking: d,
    isChannelPublic: f,
    footerActions: g
  } = U({
    guildEvent: n,
    guild: t,
    channel: i,
    onActionTaken: r,
    recurrenceId: o
  }), {
    entity_type: h
  } = n, _ = (0, I.Zs)(B({
    isActive: s,
    isUserLurking: d,
    rsvped: a,
    isChannelPublic: f,
    canInvite: u,
    entityType: h
  }, g)), v = null != g.onContextMenu ? <div className={G.leadingAction}><I.b5 onClick={g.onContextMenu} /></div> : true;
  return <c.G leading={v} actions={_} />
}

function A(e) {
  let {
    guildEvent: n,
    guild: t,
    channel: i,
    onActionTaken: r,
    isMember: o,
    recurrenceId: s
  } = e, {
    isActive: a,
    rsvped: u,
    canInvite: d,
    isUserLurking: f,
    isChannelPublic: g,
    footerActions: h
  } = U({
    guildEvent: n,
    guild: t,
    channel: i,
    onActionTaken: r,
    recurrenceId: s
  }), _ = (0, S.u)(B({
    isActive: a,
    isUserLurking: f,
    rsvped: u,
    isMember: o,
    isChannelPublic: g,
    canInvite: d,
    guildName: null == t ? true : t.name,
    isDetailsView: true
  }, h)), v = null != h.onContextMenu ? <div className={G.leadingAction}><I.b5 onClick={h.onContextMenu} /></div> : true;
  return <c.G leading={v} actions={_} />
}

function U(e) {
  let {
    guildEvent: n,
    guild: t,
    channel: l,
    onActionTaken: i,
    recurrenceId: o
  } = e, c = (0, p.xt)(n), s = (0, r.e7)([p.ZP], () => p.ZP.isInterestedInEventRecurrence(n.id, o), [o, n]), a = (0, b.ZP)(n), u = (0, r.e7)([_.Z], () => _.Z.isLurking(t.id), [t.id]), d = (0, C.T)(null == l ? true : l.id, n.id), f = (0, R.Z)({
    guild: t,
    channel: l,
    guildScheduledEvent: n,
    isActive: c,
    recurrenceId: o,
    onActionTaken: i
  });
  return {
    isActive: c,
    rsvped: s,
    canInvite: a,
    isUserLurking: u,
    isChannelPublic: d,
    footerActions: f
  }
}
let F = e => {
  let {
    guildScheduledEventId: n,
    parentGuildId: t,
    transitionState: c,
    initialRecurrenceId: _,
    onClose: b
  } = e, {
    analyticsLocations: C
  } = (0, f.ZP)(d.Z.GUILD_EVENT_MODAL), [I, S] = i.useState(_), R = (0, r.e7)([p.ZP], () => p.ZP.getGuildScheduledEvent(n), [n]), B = null == R ? true : R.id, U = null == R ? true : R.guild_id, {
    guild: F,
    isMember: V
  } = (0, Z.Z)(U, B), X = (0, h.Z)(t), z = null == R ? true : R.channel_id, H = (0, r.e7)([v.Z], () => v.Z.getChannel(z), [z]), W = (0, g.Dt)(), [q, J] = i.useState(L.fL.EVENT_INFO), K = (0, P.Z)(B, I), Q = (0, y.Z)(U, B, I), [Y, {
    loading: $,
    error: ee
  }] = (0, x.Z)(() => j.Z.getGuildEventUsers(null == R ? true : R.id, I, U));
  i.useEffect(() => {
    null == R ? b() : m.default.track(D.rMx.OPEN_MODAL, {
      type: L.zw,
      guild_id: R.guild_id
    })
  }, [R, b]);
  let en = i.useRef(null),
    [et, el] = i.useState(680);
  i.useLayoutEffect(() => {
    let e = new ResizeObserver(e => {
      e.length > 0 && el(e[0].contentRect.width)
    });
    return null != en.current && e.observe(en.current), () => e.disconnect()
  }, [en]);
  let ei = i.useRef(null),
    [er, eo] = i.useState(0);
  if (i.useLayoutEffect(() => {
      var e, n;
      let t = 16 * ((null == R ? true : R.recurrence_rule) != null);
      eo((null != (n = null == ei || null == (e = ei.current) ? true : e.offsetHeight) ? n : 0) + t)
    }, [ei, null == R ? true : R.recurrence_rule]), null == R || null == F || !V && !X) return null;
  let ec = e => {
      e !== q && (e === L.fL.RSVP_LIST && Y(), J(e))
    },
    es = null != I ? I : (0, N.DK)(R);
  return <f.Gt value={C}><o.I transitionState={c} size={"lg"} onClose={b}>{<a.x title={R.name} />}{(null == R ? true : R.image) != null && <O.Z source={(0, E.Z)(R)} className={G.banner} />}{<s.f controls={(0, l.jsx)(T.Z, {
          selectedTab: q,
          onTabSelected: ec,
          userCount: Q,
          isHub: X
        })}><div className={G.container} ref={en}><u.MyZ activeSlide={q} width={et} centered={false}>{<u.Mi4 id={L.fL.EVENT_INFO}><w.Z guildEvent={R} guild={F} channel={H} headerId={W} onClose={b} onClickInterestedCount={() => ec(L.fL.RSVP_LIST)} isHub={X} containerRef={ei} recurrenceId={es} setRecurrenceId={S} /></u.Mi4>}{<u.Mi4 id={L.fL.RSVP_LIST}><k.Z guildEvent={R} recurrenceId={es} eventUsers={K} loading={$} containerHeight={er} error={ee} /></u.Mi4>}</u.MyZ></div></s.f>}{X ? <A guildEvent={R} isMember={V} guild={F} channel={H} onActionTaken={b} recurrenceId={es} /> : <M guildEvent={R} guild={F} channel={H} onActionTaken={b} recurrenceId={es} />}</o.I></f.Gt>
}