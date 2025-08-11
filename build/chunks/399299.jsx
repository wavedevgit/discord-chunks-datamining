/** Chunk was on 46746 **/
/** chunk id: 399299, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => q
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk812206 = require("./812206.js"),
  Chunk605436 = require("./605436.js"),
  Chunk600164 = require("./600164.js"),
  Chunk594190 = require("./594190.js"),
  Chunk925329 = require("./925329.js"),
  Chunk565138 = require("./565138.js"),
  Chunk695346 = require("./695346.js"),
  Chunk494620 = require("./494620.js"),
  Chunk592125 = require("./592125.js"),
  Chunk650774 = require("./650774.js"),
  Chunk430824 = require("./430824.js"),
  Chunk131951 = require("./131951.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk449224 = require("./449224.js"),
  Chunk626135 = require("./626135.js"),
  Chunk823379 = require("./823379.js"),
  Chunk63063 = require("./63063.js"),
  Chunk358085 = require("./358085.js"),
  Chunk653255 = require("./653255.js"),
  Chunk989941 = require("./989941.js"),
  Chunk618407 = require("./618407.js"),
  Chunk586290 = require("./586290.js"),
  Chunk233037 = require("./233037.jsx"),
  Chunk810013 = require("./810013.js"),
  Chunk537135 = require("./537135.js"),
  Chunk641115 = require("./641115.js"),
  Chunk143135 = require("./143135.js"),
  Chunk70722 = require("./70722.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk14383 = require("./14383.js"),
  Chunk347226 = require("./347226.js");

function z(e) {
  let {
    selectedSource: t,
    selectSource: n,
    sourceChanged: i,
    onChangeSource: l
  } = e, s = (0, o.e7)([h.ZP, O.Z], () => (0, N.isWindows)() ? (0, E.Z)(h.ZP, O.Z) : null), d = (0, o.e7)([u.Z], () => (null == s ? true : s.id) != null ? u.Z.getApplication(s.id) : null), f = (0, o.e7)([h.ZP], () => h.ZP.getRunningGames()), m = (0, o.Wu)([u.Z], () => f.map(e => null != e.id ? u.Z.getApplication(e.id) : null).filter(Z.lm), [f]), x = null;
  if (null != t ? x = t.name : null != s && (x = s.name), null == x) return null;
  let g = (0, D.Z)(s, t, f),
    _ = i ? m.find(e => {
      let {
        id: t
      } = e;
      return t === (null == g ? true : g.id)
    }) : d,
    v = null != t && t.id.startsWith("screen") ? c.pzj : c.GON;
  return <c.xJW title={W.intl.string(W.t.TC7Ev7)} className={H.modalContent} titleClassName={H.formItemTitleVerySlim}><k.Z>{null != _ ? <p.Z game={_} size={p.Z.Sizes.XSMALL} className={F.selectedIcon} /> : <v className={F.selectedIcon} />}{<span className={F.ellipsisText}>{x}</span>}{n ? <a.zx className={F.changeButton} color={a.zx.Colors.PRIMARY} size={a.zx.Sizes.SMALL} onClick={l}>{W.intl.string(W.t.GEgsAw)}</a.zx> : null}</k.Z></c.xJW>
}

function V(e) {
  let {
    onChange: t,
    guildId: n
  } = e, i = (0, o.e7)([b.Z], () => b.Z.getGuild(n));
  return null == i ? (t(), null) : <c.xJW title={W.intl.string(W.t.WC3u3t)} className={H.modalContent} titleClassName={H.formItemTitle}><k.Z>{<x.Z guild={i} size={x.Z.Sizes.SMALLER} className={F.selectedIcon} />}{<span className={F.ellipsisText}>{i.name}</span>}{<a.zx className={F.changeButton} color={a.zx.Colors.PRIMARY} size={a.zx.Sizes.SMALL} onClick={t}>{W.intl.string(W.t.GEgsAw)}</a.zx>}</k.Z></c.xJW>
}

function Y(e) {
  let {
    text: t
  } = e;
  return <m.Z align={m.Z.Align.CENTER} className={F.warning}>{<c.Mgn size={"custom"} width={20} height={20} color={"currentColor"} className={F.warningIcon} />}{<c.Text color={"none"} variant={"text-xs/normal"}>{t}</c.Text>}</m.Z>
}

function J(e) {
  let {
    guildId: t
  } = e, n = (0, o.e7)([j.Z], () => {
    var e;
    return null != (e = j.Z.getMemberCount(t)) ? e : 0
  }), l = g.eo.useSetting(), a = i.useCallback((e, t) => {
    g.eo.updateSetting(t), I.default.track(U.rMx.NOTIFY_STREAM_SETTING_UPDATE, {
      value: t
    })
  }, []);
  return n >= 2 && n <= B.tB ? <c.xJW className={s()(H.modalContent, F.checkboxRow)}><c.XZJ value={!!l} type={c.XZJ.Types.INVERTED} onChange={a}><c.Text variant={"text-sm/normal"}>{W.intl.string(W.t.Cef4t7)}</c.Text></c.XZJ></c.xJW> : null
}

function X(e) {
  let {
    enabled: t,
    onChange: n,
    screen: l
  } = e, a = i.useCallback((e, t) => {
    n(t)
  }, [n]), d = (0, o.e7)([S.Z], () => S.Z.getUseSystemScreensharePicker() && (0, N.isLinux)());
  return <c.xJW className={s()(H.modalContent, F.checkboxRow)}><c.XZJ value={t} type={c.XZJ.Types.INVERTED} onChange={a}><c.Text variant={"text-sm/normal"}>{l || d ? W.intl.string(W.t["5Adrtb"]) : W.intl.string(W.t.gRpbRE)}</c.Text></c.XZJ></c.xJW>
}

function K(e) {
  let {
    enabled: t,
    onChange: n
  } = e, l = i.useCallback((e, t) => {
    n(t)
  }, [n]);
  return <c.xJW className={s()(H.modalContent, F.checkboxRow)}><c.XZJ value={t} type={c.XZJ.Types.INVERTED} onChange={l}><c.Text variant={"text-sm/normal"}>{W.intl.string(W.t.JE73jI)}</c.Text></c.XZJ></c.xJW>
}

function q(e) {
  let {
    selectedSource: t,
    selectedFPS: n,
    selectedChannelId: l,
    selectedPreset: s,
    selectedResolution: a,
    sourceChanged: c,
    selectedGuildId: u,
    targetGuildPremiumTier: m,
    selectSource: h,
    selectGuild: p,
    sound: x,
    previewDisabled: g,
    onClose: j,
    onChangeSelectedFPS: b,
    onChangeSelectedResolution: O,
    onChangeSelectedPreset: I,
    onChangeSelectedChannelId: Z,
    onChangeSource: N,
    onChangeAudioDevice: E,
    onChangeGuild: k,
    onChangeSound: D,
    onChangePreviewDisabled: B
  } = e, H = (0, o.e7)([C.Z, v.Z], () => v.Z.getChannel(C.Z.getVoiceChannelId())), q = (0, o.e7)([T.Z], () => T.Z.GPUDriversOutdated), Q = (0, o.e7)([T.Z], () => T.Z.problematicGPUDriver), $ = (0, o.e7)([y.default], () => y.default.getCurrentUser()), ee = (0, P.Z)();
  null != t && t.id.startsWith("screen") && !S.Z.supportsScreenSoundshare() && (ee = W.intl.string(W.t["1b0Gm5"]));
  let et = !!(null == t ? true : t.id.startsWith("camera")),
    en = null != $ && $.verified && !$.bot,
    er = null != H && !(0, f.Yk)(H),
    ei = !(0, o.e7)([S.Z], () => S.Z.getHardwareEncoding());
  return <i.Fragment>{et ? <R.Z selectedSource={t} onChangeVideoDeviceSource={N} onChangeAudioDevice={E} /> : <div>{<z selectSource={h} sourceChanged={c} onChangeSource={N} selectedSource={t} />}{null != ee ? <Y text={ee} /> : null}{null != t && null == ee ? <X enabled={x} onChange={D} screen={t.id.startsWith("screen")} /> : null}</div>}{p && null != u ? <V guildId={u} onChange={k} /> : null}{null != H ? <M.Z channel={H} /> : <A.Z guildId={u} selectedChannelId={l} onChangeSelectedChannelId={Z} />}{null != u && en && er ? <J guildId={u} /> : null}{q ? <Y text={W.intl.string(W.t.q65tS0)} /> : null}{Q ? <Y text={W.intl.format(W.t.RrLvub, {
        helpCenterLink: w.Z.getArticleURL(U.BhN.NVIDIA_DRIVER_ISSUES)
      })} /> : null}{ei && <_.Z look={_.z.WARNING} className={F.hardwareWarning}>{W.intl.format(W.t.zCLXws, {
        onClick: () => {
          j(), d.Z.open(U.oAB.VOICE, G.gP, {
            scrollPosition: G.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION
          })
        }
      })}</_.Z>}{<L.Z selectedPreset={s} selectedFPS={n} selectedResolution={a} targetGuildPremiumTier={m} onClose={j} onFPSChange={b} onResolutionChange={O} onPresetChange={I} captureDeviceSelected={et} />}{<K enabled={g} onChange={B} />}</i.Fragment>
}