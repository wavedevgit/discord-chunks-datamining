/** Chunk was on 1862 **/
/** chunk id: 801001, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => P
}), require("./388685.js"), require("./953529.js"), require("./642613.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk146187 = require("./146187.jsx"),
  Chunk257465 = require("./257465.jsx"),
  Chunk369585 = require("./369585.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk706371 = require("./706371.jsx"),
  Chunk563115 = require("./563115.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk661824 = require("./661824.jsx"),
  Chunk984933 = require("./984933.js"),
  Chunk485386 = require("./485386.js"),
  Chunk402148 = require("./402148.js"),
  Chunk570961 = require("./570961.js"),
  Chunk208665 = require("./208665.js"),
  Chunk460117 = require("./460117.jsx"),
  Chunk290511 = require("./290511.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk663362 = require("./663362.js");

function P(e) {
  let {
    transitionState: t,
    onClose: n,
    onSave: r,
    onDelete: g,
    option: f,
    guild: P,
    prompt: _,
    index: w
  } = e, Z = (0, h.Dt)(), k = (0, s.e7)([x.ZP], () => x.ZP.getDefaultChannel(P.id)), [E, T] = l.useState(() => {
    var e;
    return null != (e = null == f ? true : f.emoji) ? e : null
  }), [M, R] = l.useState(() => {
    var e;
    return null != (e = null == f ? true : f.title) ? e : ""
  }), [B, H] = l.useState(() => {
    var e;
    return null != (e = null == f ? true : f.description) ? e : ""
  }), [D, q] = l.useState(() => {
    var e;
    return new Set(null != (e = null == f ? true : f.channelIds) ? e : [])
  }), [Q, z] = l.useState(() => {
    var e;
    return new Set(null != (e = null == f ? true : f.roleIds) ? e : [])
  }), [X, Y] = l.useState({}), F = l.useRef(null);
  l.useLayoutEffect(() => {
    var e;
    return null == (e = F.current) ? true : e.focus()
  }, []);
  let L = l.useCallback(() => {
      var e;
      let t = {
          id: null != (e = null == f ? true : f.id) ? e : "".concat(Date.now()),
          title: M,
          description: B,
          channelIds: Array.from(D).sort(),
          roleIds: Array.from(Q).sort(),
          emoji: null == E ? true : E
        },
        i = function(e, t, n, i) {
          let l = {};
          i.title.length <= 0 && (l.title = O.intl.string(O.t.p3PKzM));
          let r = (0, b.en)(e, t, n, i);
          return null != r && (l.roles = r), l
        }(P, y.Z.editedOnboardingPrompts, _, t);
      Y(i), o().isEmpty(i) && (r(t), n())
    }, [D, B, E, P, n, r, null == f ? true : f.id, _, Q, M]),
    A = l.useMemo(() => [{
      text: O.intl.string(O.t["ETE/oK"]),
      onClick: n,
      variant: "secondary"
    }, {
      text: O.intl.string(O.t.R3BPHx),
      onClick: L,
      variant: "primary"
    }], [L, n]);
  return <c.I transitionState={t} onClose={n}>{<div className={C.closeButton}><a.P onClick={n} /></div>}{<div className={C.container}>{<m.Text className={C.questionNumber} variant={"text-xs/semibold"} color={"text-muted"}>{O.intl.format(O.t.yjS3zs, {
          index: w + 1
        })}</m.Text>}{<m.X6q id={Z} className={C.header} variant={"heading-lg/semibold"}>{null != _.title && _.title.length > 0 ? _.title : O.intl.string(O.t.vY91Cw)}</m.X6q>}{<m.X6q className={C.nameHeader} variant={"heading-md/semibold"}>{O.intl.string(O.t.VWdcBg)}</m.X6q>}{<u.Is inputRef={F} placeholder={O.intl.string(O.t.EHe6gY)} value={M} onChange={e => R(e)} maxLength={N.NE} autoFocus={true} />}{<m.pdY error={X.title} />}{<u.Is className={C.descriptionInput} placeholder={O.intl.string(O.t.mIjgJC)} value={B} onChange={e => H(e)} maxLength={N.NO} />}{<p.Z className={C.divider} />}{<m.X6q className={C.rolesHeader} variant={"heading-md/semibold"}>{O.intl.string(O.t.TtIbPD)}</m.X6q>}{<j.Z guildId={P.id} selectedChannelIds={D} placeholder={O.intl.string(O.t.vephiI)} onChange={q} helperText={O.intl.string(O.t.SoT6wc)} className={C.searchInput} />}{<v.Z guildId={P.id} selectedRoleIds={Q} disableEveryoneRole={true} placeholder={O.intl.string(O.t.aFO1Iy)} onChange={z} helperText={O.intl.string(O.t.Mbvpv7)} className={C.searchInput} selectableRoleFilter={e => !e.managed} />}{null == X.roles ? null : <m.pdY error={X.roles} />}{<S guild={P} roleIds={Q} />}{<p.Z className={C.divider} />}{<div className={C.emojiQuestionContainer}>{<div className={C.emojiQuestionText}>{<m.X6q variant={"heading-md/semibold"}>{O.intl.string(O.t["4ahTBg"])}</m.X6q>}{<m.Text variant={"text-sm/normal"} color={"text-muted"}>{O.intl.string(O.t.Iv9RGh)}</m.Text>}</div>}{<I.Z emoji={E} setEmoji={T} channel={k} />}</div>}</div>}{<d.G actions={A} leading={(0, i.jsx)(m.Avr, {
        text: O.intl.string(O.t.N86XcH),
        onClick: () => {
          g(), n()
        },
        variant: "critical"
      })} />}</c.I>
}

function S(e) {
  let {
    guild: t,
    roleIds: n
  } = e, l = (0, s.e7)([g.Z], () => g.Z.getManyRoles(t.id, n).find(f.F));
  return null == l ? null : <div className={C.notice}><div className={C.noticeMessage}>{<m.Mgn size={"custom"} width={20} height={20} color={"currentColor"} className={C.noticeIcon} />}{<m.Text variant={"text-sm/normal"}>{O.intl.format(O.t["5zPJER"], {
          permissions: (0, f.i)(t, l).join(", ")
        })}</m.Text>}</div></div>
}