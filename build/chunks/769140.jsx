/** Chunk was on web.js **/
/** chunk id: 769140, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Z
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk287734 = require("./287734.js"),
  Chunk872810 = require("./872810.js"),
  Chunk110924 = require("./110924.js"),
  Chunk833664 = require("./833664.js"),
  Chunk579630 = require("./579630.js"),
  Chunk622822 = require("./622822.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk194082 = require("./194082.jsx"),
  Chunk318374 = require("./318374.jsx"),
  Chunk449605 = require("./449605.js"),
  Chunk102172 = require("./102172.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk158776 = require("./158776.js"),
  Chunk938475 = require("./938475.js"),
  Chunk960870 = require("./960870.js"),
  Chunk139793 = require("./139793.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk336383 = require("./336383.jsx"),
  Chunk194811 = require("./194811.jsx"),
  Chunk265386 = require("./265386.jsx"),
  Chunk668700 = require("./668700.jsx"),
  Chunk384298 = require("./384298.jsx"),
  Chunk670451 = require("./670451.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk227832 = require("./227832.js"),
  Chunk162509 = require("./162509.js"),
  Chunk924482 = require("./924482.js"),
  Chunk774797 = require("./774797.js");

function Z(e) {
  let {
    user: t,
    currentUser: n,
    stream: i,
    className: Z,
    onClose: F
  } = e, {
    themeType: V,
    theme: H
  } = (0, N.z)(), Y = (0, a.e7)([O.Z], () => O.Z.getGuild(null == i ? true : i.guildId)), W = (0, a.e7)([y.Z], () => y.Z.getChannel(null == i ? true : i.channelId)), K = (0, a.Wu)([T.ZP], () => null != W ? T.ZP.getVoiceStatesForChannel(W).map(e => {
    let {
      user: t
    } = e;
    return t
  }) : []), z = (0, a.e7)([I.Z], () => I.Z.findActivity(t.id, e => (0, d.Z)(e) && !(0, f.Z)(e))), {
    analyticsLocations: q
  } = (0, h.ZP)(p.Z.USER_PROFILE_LIVE_ACTIVITY_CARD), X = (0, S.Z)({
    display: "live",
    voiceChannelId: null == W ? true : W.id,
    user: t,
    stream: i,
    analyticsLocations: q
  }), Q = (0, A.Z)({
    userId: t.id,
    onAction: X
  }), {
    previewUrl: J,
    isLoading: $
  } = (0, E.Z)(null == i ? true : i.guildId, null == i ? true : i.channelId, null == i ? true : i.ownerId), [ee, et] = (0, b.wq)(W), en = (0, _.Kt)() && (0, _.zd)(null == W ? true : W.id), er = (0, a.e7)([v.Z], () => null != W && !en && v.Z.canBasicChannel(M.S7T.CONNECT, W)), ei = (0, u.Z)($ ? null : J), eo = $ || null == J ? ei : J;
  if (null == Y || null == W || false === i.discoverable) return null;
  let ea = () => {
      let e = e => {
        e.stopPropagation(), ee && (X({
          action: "PRESS_IMAGE"
        }), l.default.selectVoiceChannel(i.channelId), (0, c.iV)(i), null == F || F())
      };
      return null == eo && $ ? <div className={U.preview}><s.$jN /></div> : null == eo || en ? <s.P3F className={o()(U.preview, U.overlay, ee ? U.clickable : U.disabled)} onClick={e} aria-label={(0, b.gR)(et)} aria-disabled={!ee}>{<img alt={""} src={H === M.BRd.LIGHT ? B : G} />}{V !== x.lY.MODAL && V !== x.lY.MODAL_V2 && <r.Fragment>{<s.Text className={U.overlayText} variant={"text-sm/medium"} color={"always-white"}>{(0, b.P9)(et)}</s.Text>}{<s.Text variant={"text-sm/medium"}>{er ? k.intl.string(k.t.uQZTBQ) : k.intl.string(k.t.pgUTZG)}</s.Text>}</r.Fragment>}</s.P3F> : <s.P3F className={o()(U.preview, U.overlay, ee ? U.clickable : U.disabled)} onClick={e} aria-label={(0, b.gR)(et)} aria-disabled={!ee}>{<img alt={""} src={eo} className={U.image} />}{V !== x.lY.MODAL && V !== x.lY.MODAL_V2 && <r.Fragment>{<s.Text className={U.overlayText} variant={"text-sm/medium"} color={"always-white"}>{(0, b.P9)(et)}</s.Text>}{<s.gw7 size={"xs"} color={"currentColor"} className={U.clyde} />}</r.Fragment>}</s.P3F>
    },
    es = () => V !== x.lY.MODAL && V !== x.lY.MODAL_V2 ? null : <div className={j.details}>{<P.Z channel={W} guild={Y} onAction={X} onClose={F} />}{<g.Z users={K} guildId={Y.id} channelId={W.id} maxUsers={w.W} size={s.EFr.SIZE_16} onClickOverflow={e => {
          e.stopPropagation(), null == X || X({
            action: "PRESS_VOICE_CHANNEL_AVATARS"
          })
        }} onUserClick={e => e.stopPropagation()} disableUserPopout={e => e === t.id} overflowCountColor={"text-muted"} aria-label={k.intl.string(k.t.jNqDh4)} />}{V === x.lY.MODAL_V2 && ec()}</div>,
    el = () => V === x.lY.MODAL || V === x.lY.MODAL_V2 ? null : <w.Z user={t} guild={Y} channel={W} onAction={X} onClose={F} />,
    ec = () => t.id === n.id ? null : <div className={j.actions}><D.Z channel={W} onAction={X} onClose={F} /></div>,
    eu = null != z ? k.intl.formatToPlainString(k.t["4CQq9f"], {
      name: z.name
    }) : k.intl.string(k.t["Jpkr/v"]);
  return <h.Gt value={q}><C.Z ref={Q} className={Z} onAction={X} onClose={F} aria-label={eu}>{<R.Z text={eu} tags={(0, r.jsx)(m.ZP, {
          size: m.OH.SMALL
        })} contextMenu={(0, r.jsx)(L.Z, {
          display: "live",
          user: t,
          onClose: F
        })} />}{<div className={j.body}>{<div className={j.content}>{ea()}{es()}{V === x.lY.MODAL && ec()}</div>}{el()}</div>}{V !== x.lY.MODAL && V !== x.lY.MODAL_V2 && ec()}</C.Z></h.Gt>
}