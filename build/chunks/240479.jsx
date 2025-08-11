/** Chunk was on web.js **/
/** chunk id: 240479, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./388685.js"), require("./457542.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk831209 = require("./831209.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk231053 = require("./231053.js"),
  Chunk183023 = require("./183023.jsx"),
  Chunk524444 = require("./524444.js"),
  Chunk208049 = require("./208049.js"),
  Chunk697426 = require("./697426.js"),
  Chunk294206 = require("./294206.js"),
  Chunk430824 = require("./430824.js"),
  Chunk767714 = require("./767714.js"),
  Chunk125900 = require("./125900.js"),
  Chunk767434 = require("./767434.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk710111 = require("./710111.js"),
  Chunk388032 = require("./388032.js"),
  Chunk367753 = require("./367753.js");

function A(e) {
  let {
    discoverableGuildId: t,
    closePopout: n,
    buttonType: o
  } = e, a = i.useCallback(async () => {
    if (n(), null != t) try {
      await u.Z.joinGuild(t), u.Z.transitionToGuildSync(t)
    } catch (e) {}
  }, [n, t]);
  return o === y.y.GET_NITRO ? <E.Z fullWidth={true} showGradient={true} premiumModalAnalyticsLocation={{
      section: v.jXE.PREMIUM_SOUNDMOJI_GUILD_INFO_POPOUT
    }} subscriptionTier={O.Si.TIER_2} size={l.zx.Sizes.SMALL} color={l.zx.Colors.CUSTOM} onClick={n} textOptions={{
      textOverride: T.intl.string(T.t.pj0XBA)
    }} /> : o === y.y.JOIN_GUILD ? <c.zxk variant={"primary"} size={"sm"} text={T.intl.string(T.t.riu2R0)} fullWidth={true} onClick={a} /> : null
}

function N(e) {
  let {
    sound: t,
    channel: n,
    closePopout: l,
    refreshPosition: u
  } = e, E = t.guildId === I.X8, O = (0, s.e7)([g.Z], () => g.Z.getGuild(t.guildId)), v = !E && null != O, [N, C] = i.useState(), R = (0, b.V2)({
    location: "SoundmojiGuildInfo"
  }), P = E || v || null != N || !R, [w, D] = i.useState(!P);
  i.useEffect(() => {
    P || (D(true), (0, p.xU)(t.soundId, t.guildId).then(e => {
      C(e)
    }).finally(() => {
      D(false), u()
    }))
  }, [u, P, t.guildId, t.soundId]);
  let {
    buttonType: L,
    description: x
  } = (0, y.Z)(t, n, v, N), M = L === y.y.JOIN_GUILD, k = !E && w, j = i.useMemo(() => v ? d.JO.createFromGuildRecord(O) : null != N ? d.JO.createFromDiscoverableGuild(N) : true, [O, v, N]);
  return k ? <_.SE /> : <div className={S.infoContainer}>{<_.W_>{<div className={S.infoExpandedSoundContainer}>{<m.ZP buttonOverlay={h.Pb.NONE} sound={t} channel={true} isSoundmoji={true} onSelectItem={() => {}} />}{<a.xv variant={"text-sm/normal"}>{x}</a.xv>}</div>}{null != j && <div className={S.infoExpandedGuildContainer}>{<a.xv variant={"eyebrow"} color={"header-muted"} className={S.infoExpandedGuildTitle}>{v ? T.intl.string(T.t.tGDabm) : T.intl.string(T.t.rnOmOT)}</a.xv>}{<div className={S.infoExpandedGuildInfo}><f.Oe expressionSourceGuild={j} hasJoinedExpressionSourceGuild={v} isDisplayingJoinGuildButtonInPopout={M} /></div>}{<A buttonType={L} discoverableGuildId={null == N ? true : N.id} closePopout={l} />}</div>}</_.W_>}{<c.IGR text={"BETA"} color={o.Z.BG_BRAND} className={S.betaBadge} />}</div>
}