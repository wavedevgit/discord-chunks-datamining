/** Chunk was on 17712 **/
/** chunk id: 620021, original params: l,e,n (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk910693 = require("./910693.js"),
  Chunk314897 = require("./314897.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk51144 = require("./51144.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk696929 = require("./696929.js");

function j(l) {
  let {
    disabled: e = false,
    user: n,
    setNickname: i,
    nickname: s,
    error: u,
    hasNick: c
  } = l, x = r.useRef(null), m = r.useCallback(() => {
    var l;
    i(""), null == (l = x.current) || l.focus()
  }, [i]);
  return <t.Fragment>{e || null == n || n.id === h.default.getId() ? null : <o.Zbd type={o.Zbd.Types.WARNING} className={_.card}><o.Text variant={"text-md/normal"}>{E.intl.string(E.t.dq3At7)}</o.Text></o.Zbd>}{<o.vwX className={a()(_.itemGroup, {
        [_.disabled]: e
      })}>{e ? E.intl.string(E.t.EyA4q6) : E.intl.string(E.t["621LJC"])}</o.vwX>}{<o.oil disabled={e} inputRef={x} maxLength={C.l$U} value={s} placeholder={p.ZP.getName(n)} onChange={i} autoFocus={true} />}{null != u ? <o.Text variant={"text-xs/normal"} color={"text-danger"} className={_.nickError}>{u}</o.Text> : null}{c && !e ? <d.zx look={d.zx.Looks.LINK} color={d.zx.Colors.LINK} size={d.zx.Sizes.NONE} onClick={m} className={_.reset}>{E.intl.string(E.t.aE02R0)}</d.zx> : null}</t.Fragment>
}
let b = function(l) {
  var e;
  let {
    transitionState: n,
    user: i,
    guildId: a,
    onClose: d,
    analyticsSource: h,
    analyticsLocations: p
  } = l, b = (0, s.e7)([m.ZP], () => null != a ? m.ZP.getMember(a, i.id) : null), A = (0, s.e7)([g.Z, k.default, N.Z], () => {
    var l;
    let e = N.Z.getGuild(a);
    return null != e && ((null == (l = k.default.getCurrentUser()) ? true : l.id) === i.id ? g.Z.can(C.Plq.CHANGE_NICKNAME, e) || g.Z.can(C.Plq.MANAGE_NICKNAMES, e) : g.Z.canManageUser(C.Plq.MANAGE_NICKNAMES, i.id, e))
  }), [f, y] = r.useState(false), [I, M] = r.useState(null != (e = null == b ? true : b.nick) ? e : ""), [Z, G] = r.useState({});
  (0, c.ZP)(() => {
    v.default.track(C.rMx.OPEN_MODAL, {
      type: "Change Server Identity",
      location: C.ZY5.GUILD_CHANNEL,
      source: h
    })
  });
  let z = (0, x.sE)(a, {
      location: null == p ? true : p[0],
      targetUserId: i.id
    }),
    P = r.useCallback(async l => {
      var e, n, t, r, s, o, c, h, m;
      l.preventDefault();
      let N = null;
      if (I !== (null != (e = null == b ? true : b.nick) ? e : "") && ((N = null != N ? N : {}).nick = I), null == N) return void d();
      try {
        y(true), await u.tn.patch({
          url: C.ANM.GUILD_MEMBER(a, i.id),
          body: N,
          rejectWithError: false
        }), z(x.jQ.CHANGE_NICKNAME), d()
      } catch (i) {
        let l;
        y(false);
        let e = null != (t = null == (n = i.body) ? true : n.errors) ? t : null;
        (null == e ? true : e.nick) != null ? l = (null == (o = e.nick) || null == (s = o._errors) || null == (r = s[0]) ? true : r.message) || E.intl.string(E.t.xex86u) : (null == e ? true : e.username) != null && (l = (null == (m = e.username) || null == (h = m._errors) || null == (c = h[0]) ? true : c.message) || E.intl.string(E.t.xex86u)), G({
          nick: l
        })
      }
    }, [a, I, d, i, b, z]);
  return <o.Y0X aria-label={E.intl.string(E.t["PKQB/P"])} transitionState={n} parentComponent={"ChangeGuildIdentity"}><form onSubmit={P}>{<o.xBx separator={false}><o.X6q variant={"heading-lg/semibold"}>{E.intl.string(E.t.dilOFx)}</o.X6q></o.xBx>}{<o.hzk className={_.modalContent}><j disabled={!A} user={i} error={Z.nick} nickname={I} setNickname={M} hasNick={(null == b ? true : b.nick) != null} /></o.hzk>}{<o.mzw><o.hE2 direction={"horizontal-reverse"}>{<o.zxk variant={"primary"} text={E.intl.string(E.t.R3BPHx)} type={"submit"} disabled={f} />}{<o.zxk variant={"secondary"} text={E.intl.string(E.t["ETE/oK"])} onClick={d} />}</o.hE2></o.mzw>}</form></o.Y0X>
}