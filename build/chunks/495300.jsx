/** Chunk was on 22988 **/
/** chunk id: 495300, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk266454 = require("./266454.js"),
  Chunk768762 = require("./768762.js"),
  Chunk999382 = require("./999382.js"),
  Chunk743475 = require("./743475.js"),
  Chunk983135 = require("./983135.js"),
  Chunk570961 = require("./570961.js"),
  Chunk208665 = require("./208665.js"),
  Chunk359191 = require("./359191.js"),
  Chunk84658 = require("./84658.js"),
  Chunk142961 = require("./142961.js"),
  Chunk729311 = require("./729311.js"),
  Chunk850864 = require("./850864.js"),
  Chunk729995 = require("./729995.js"),
  Chunk966301 = require("./966301.js"),
  Chunk707076 = require("./707076.js"),
  Chunk213956 = require("./213956.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk184344 = require("./184344.js");

function T() {
  let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuildId());
  return null == module ? null : <P guildId={module} />
}

function P(e) {
  let t, {
      guildId: n
    } = e,
    l = (0, s.e7)([x.Z], () => x.Z.getCurrentPage()),
    g = (0, s.e7)([x.Z], () => {
      let e = (0, j.lg)(l);
      return null != e && !x.Z.isEducationUpsellDismissed(e)
    }),
    b = (0, v.Z)(n),
    T = !b && g;
  switch (i.useEffect(() => {
      (0, u.Q3)(o.z.COMMUNITY_ONBOARDING_NEW_BADGE)
    }, []), l) {
    case j.PG.LANDING:
      t = b ? <y.Z completed={true} guildId={n} /> : <N.Z />;
      break;
    case j.PG.SAFETY_CHECK:
      t = <I.Z />;
      break;
    case j.PG.DEFAULT_CHANNELS:
      t = <_.Z saveOnClose={!b} />;
      break;
    case j.PG.CUSTOMIZATION_QUESTIONS:
      t = <C.ZP saveOnClose={!b} />;
      break;
    case j.PG.HOME_SETTINGS:
      t = <O.Z saveOnClose={!b} />;
      break;
    case j.PG.REVIEW:
      t = <y.Z completed={b} guildId={n} />
  }
  return <div className={a()(S.onboardingContainer, {
      [S.upsellOnTop]: T
    })}>{!b && l !== j.PG.LANDING && <w setOnboardingStep={h.$K} page={l} homeSettingsEnabled={true} />}{b && l !== j.PG.LANDING && <div><c.zx innerClassName={S.backButton} look={c.zx.Looks.BLANK} size={c.zx.Sizes.MIN} onClick={() => {
          (0, f.NB)(), (0, p.BG)(), (0, h.$K)(j.PG.LANDING)
        }}>{<m.Z className={S.arrow} direction={m.Z.Directions.LEFT} />}{<d.Text variant={"text-sm/semibold"} color={"interactive-normal"}>{E.intl.string(E.t["13/7kZ"])}</d.Text>}</c.zx></div>}{<div>{t}</div>}</div>
}

function w(e) {
  let {
    page: t,
    setOnboardingStep: n,
    homeSettingsEnabled: i
  } = e, l = (0, s.e7)([x.Z], () => x.Z.hasErrors()), o = e => {
    if (!l) return () => n(e)
  }, c = (0, s.e7)([b.Z], () => b.Z.advancedMode);
  return <div className={S.progressContainer}>{<d.P3F className={a()(S.progressBarContainer, S.clickableProgressBar)} onClick={o(j.PG.SAFETY_CHECK)}>{<div className={a()(S.progressBar, {
          [S.progressBarCurrent]: t === j.PG.SAFETY_CHECK
        })} />}{<d.Text color={t === j.PG.SAFETY_CHECK ? "text-brand" : "text-muted"} variant={"text-xs/medium"}>{E.intl.format(E.t.Me5MmZ, {
          stepNumber: 1
        })}</d.Text>}</d.P3F>}{<d.P3F className={a()(S.progressBarContainer, S.clickableProgressBar)} onClick={o(j.PG.DEFAULT_CHANNELS)}>{<div className={a()(S.progressBar, {
          [S.progressBarCurrent]: t === j.PG.DEFAULT_CHANNELS
        })} />}{<d.Text color={t === j.PG.DEFAULT_CHANNELS ? "text-brand" : "text-muted"} variant={"text-xs/medium"}>{c ? E.intl.formatToPlainString(E.t["8mGhOz"], {
          stepNumber: 2
        }) : E.intl.formatToPlainString(E.t.vxpuTU, {
          stepNumber: 2
        })}</d.Text>}</d.P3F>}{<d.P3F className={a()(S.progressBarContainer, S.clickableProgressBar)} onClick={o(j.PG.CUSTOMIZATION_QUESTIONS)}>{<div className={a()(S.progressBar, {
          [S.progressBarCurrent]: t === j.PG.CUSTOMIZATION_QUESTIONS
        })} />}{<d.Text color={t === j.PG.CUSTOMIZATION_QUESTIONS ? "text-brand" : "text-muted"} variant={"text-xs/medium"}>{c ? E.intl.formatToPlainString(E.t.vb6J5u, {
          stepNumber: 3
        }) : E.intl.formatToPlainString(E.t.ZpdQqK, {
          stepNumber: 3
        })}</d.Text>}</d.P3F>}{i && <d.P3F className={a()(S.progressBarContainer, S.clickableProgressBar)} onClick={o(j.PG.HOME_SETTINGS)}>{<div className={a()(S.progressBar, {
          [S.progressBarCurrent]: t === j.PG.HOME_SETTINGS
        })} />}{<d.Text color={t === j.PG.HOME_SETTINGS ? "text-brand" : "text-muted"} variant={"text-xs/medium"}>{E.intl.format(E.t.KVOukp, {
          stepNumber: 4
        })}</d.Text>}</d.P3F>}{<div className={S.progressBarContainer}>{<div className={a()(S.progressBar, {
          [S.progressBarCurrent]: t === j.PG.REVIEW
        })} />}{<d.Text color={t === j.PG.REVIEW ? "text-brand" : "text-muted"} variant={"text-xs/medium"}>{E.intl.format(E.t.oVzkiI, {
          stepNumber: 3 + +!!i + 1
        })}</d.Text>}</div>}</div>
}