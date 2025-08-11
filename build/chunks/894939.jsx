/** Chunk was on 75708 **/
/** chunk id: 894939, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk906732 = require("./906732.js"),
  Chunk856768 = require("./856768.jsx"),
  Chunk993413 = require("./993413.js"),
  Chunk921801 = require("./921801.js"),
  Chunk208049 = require("./208049.js"),
  Chunk763296 = require("./763296.js"),
  Chunk242291 = require("./242291.js"),
  Chunk893663 = require("./893663.js"),
  Chunk331642 = require("./331642.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk581883 = require("./581883.js"),
  Chunk738486 = require("./738486.jsx"),
  Chunk918257 = require("./918257.js"),
  Chunk970813 = require("./970813.js"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk710111 = require("./710111.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk576813 = require("./576813.js"),
  Chunk20493 = require("./20493.js");

function A(e) {
  return (0, l.e7)([h.Z], () => {
    if (null == e) return null;
    let {
      guildId: t,
      soundId: n
    } = e;
    return h.Z.getSound(t === T.hY ? T.X8 : t, n)
  })
}

function P(e) {
  let {
    refreshStyles: t = false
  } = e, n = <i.Fragment>{<p.F setting={v.s6.VOICE_AND_VIDEO_SOUNDBOARD}>{<C.Z refreshStyles={t} />}{<O.Z refreshStyles={t} />}</p.F>}{<p.F setting={v.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS}>{t ? null : <o.$i$ className={N.callSoundsDivider} />}{<R refreshStyles={t} />}</p.F>}</i.Fragment>;
  return t ? n : <o.hjN className={N.container} tag={o.RB0.H1} titleClassName={y.__invalid_marginBottom16} title={I.intl.string(I.t.ABjMWF)}>{n}</o.hjN>
}

function R(e) {
  let {
    refreshStyles: t
  } = e, {
    analyticsLocations: n
  } = (0, d.ZP)(), [s, c] = r.useState(T.hY), p = (0, b.tT)(s), j = A(p), C = (null == p ? true : p.type) === b.zx.GLOBAL, O = (0, l.e7)([h.Z], () => h.Z.hasFetchedAllSounds()) && null != p && null == j;
  r.useEffect(() => {
    O && (0, f.tt)({
      location: n
    })
  }, [O, n]), r.useEffect(() => {
    (0, g.w)()
  }, []);
  let v = r.useCallback((e, t) => {
      let {
        inDropdown: n
      } = t;
      return null == e ? null : n ? <D guildId={e.value} /> : null
    }, []),
    P = <i.Fragment>{<o.xJW title={I.intl.string(I.t.nzUc3N)}><o.R94>{I.intl.format(I.t.u9RWmp, {
            helpdeskArticle: _.Z.getArticleURL(S.BhN.SOUNDBOARD)
          })}</o.R94></o.xJW>}{<u.Z guildId={s} className={a()(N.guildSelector, {
          [N.refreshGuildSelector]: t
        })} globalOption={{
          label: I.intl.string(I.t.CpEUPz),
          value: T.hY
        }} onChange={e => {
          c(null == e ? T.hY : e.id)
        }} renderOptionSuffix={v} hideDivider={true} />}{<m.Z className={a()({
          [y.marginTop20]: !t
        })} title={I.intl.format(I.t.I2TsYG, {
          nitroWheelHook: () => (0, i.jsx)(o.SrA, {
            size: "md",
            color: "currentColor",
            className: N.nitroWheel
          })
        })} forcedDivider={!t}>{<x.Z sound={j} isGlobal={C} onSelect={e => {
            null == e ? (0, f.aC)(s, n) : (0, f.SZ)(s, e, n)
          }} />}{O && <o.Wn className={N.notice} messageType={o.QYI.WARNING}>{I.intl.string(I.t.WkPsFR)}</o.Wn>}</m.Z>}</i.Fragment>;
  return t ? <E.Z>{P}</E.Z> : P
}

function D(e) {
  let {
    guildId: t
  } = e, n = (0, l.e7)([j.Z], () => {
    var e, n, i;
    return null == (i = j.Z.settings.guilds) || null == (n = i.guilds) || null == (e = n[t]) ? true : e.joinSound
  }), r = A(n);
  if (null == n || null == r) return null;
  let {
    emojiId: s,
    emojiName: a
  } = r, d = null != s || null != a;
  return <div className={N.pill}>{d ? <c.Z emojiId={s} emojiName={a} className={N.pillIcon} /> : <o.gj8 size={"md"} color={"currentColor"} className={N.pillIcon} />}{<o.Text className={N.pillText} variant={"text-xs/medium"}>{r.name}</o.Text>}</div>
}