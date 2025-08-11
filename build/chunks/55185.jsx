/** Chunk was on 34779 **/
/** chunk id: 55185, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => A,
  N: () => T
}), require("./388685.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk381499 = require("./381499.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk695346 = require("./695346.js"),
  Chunk675478 = require("./675478.js"),
  Chunk885110 = require("./885110.js"),
  Chunk63063 = require("./63063.js"),
  Chunk316496 = require("./316496.js"),
  Chunk223730 = require("./223730.js"),
  Chunk981631 = require("./981631.js"),
  Chunk29953 = require("./29953.js"),
  Chunk388032 = require("./388032.js"),
  Chunk22275 = require("./22275.js"),
  Chunk354810 = require("./354810.js");
async function v(e) {
  await h.hW.updateAsync("status", t => {
    t.status = a.Gm.create({
      value: e
    }), t.statusExpiresAtMs = "0"
  }, h.fy.INFREQUENT_USER_ACTION)
}

function j(e) {
  let {
    closePopout: t
  } = e;
  return <div data-button-hoisted-classname-wrapper={true} className={y.goOnlineButton}><u.zxk variant={"primary"} size={"sm"} text={_.intl.string(O.default.Poezn5)} onClick={() => {
        t(), v(u.Skl.ONLINE)
      }} fullWidth={true} /></div>
}

function E(e) {
  let {
    showCurrentGame: t,
    shouldShowStatus: n = false,
    shouldShowCustomizeLink: r = false,
    closePopout: l
  } = e, o = (0, s.e7)([p.Z], () => p.Z.getStatus()), {
    showLinkToSettings: a
  } = (0, g.D)("popout");
  return <div className={y.toggleContainer}>{<div className={y.toggleContainerText}>{<u.Text variant={"text-sm/medium"} color={"header-primary"}>{_.intl.string(_.t.KY0ilp)}</u.Text>}{n && <div className={y.toggleContainerOnlineRow}>{<u.qbd status={u.Skl.ONLINE} size={8} />}{<u.Text variant={"text-xs/normal"} color={"text-secondary"}>{o === u.Skl.INVISIBLE ? _.intl.string(O.default.a3AofX) : _.intl.string(_.t.WbGtnJ)}</u.Text>}</div>}{r && a && <m.K onClosePopout={l} />}</div>}{<u.rsf onChange={e => {
        d.G6.updateSetting(e), n && v(e ? u.Skl.ONLINE : u.Skl.INVISIBLE)
      }} checked={t} />}</div>
}

function S(e) {
  let {
    children: t,
    closePopout: n
  } = e, r = (0, l.useRef)(null);
  (0, u.Tbt)(r);
  let a = d.G6.useSetting(),
    h = (0, s.e7)([p.Z], () => p.Z.getStatus()) === u.Skl.INVISIBLE && a;
  return <div className={y.wrapper} ref={r}>{null != n && <div className={y.gradient} />}{<div className={y.content}>{null != n && <i.Fragment>{<c.zx className={y.closeButton} aria-label={_.intl.string(_.t.cpT0Cg)} look={c.zx.Looks.BLANK} size={c.zx.Sizes.NONE} onClick={n}><u.Dio size={"xs"} color={"currentColor"} /></c.zx>}{<img alt={""} src={C.Z} className={y.controllerImage} />}{<o.X6 variant={"heading-md/bold"} color={"header-primary"} className={y.nuxTitle}>{_.intl.string(h ? O.default.MkgMBw : _.t.PRjSRk)}</o.X6>}</i.Fragment>}{t}</div>}</div>
}

function x(e) {
  let {
    closePopout: t
  } = e, n = d.G6.useSetting();
  return <S closePopout={t}>{<u.Text variant={"text-xs/normal"} color={"text-secondary"} className={y.nuxContent}>{_.intl.format(O.default.nHDuwM, {
        learnMoreLink: f.Z.getArticleURL(b.BhN.ACTIVITY_STATUS_SETTINGS)
      })}</u.Text>}{<div className={y.toggleContainerWrapper}><E showCurrentGame={n} shouldShowCustomizeLink={true} closePopout={t} /></div>}</S>
}

function I(e) {
  let {
    closePopout: t
  } = e;
  return <S closePopout={t}>{<u.Text variant={"text-xs/normal"} color={"text-secondary"} className={y.nuxContent}>{_.intl.format(O.default["vtp/IS"], {
        learnMoreLink: f.Z.getArticleURL(b.BhN.ACTIVITY_STATUS_SETTINGS)
      })}</u.Text>}{<j closePopout={t} />}</S>
}

function P(e) {
  let {
    closePopout: t
  } = e, n = d.G6.useSetting();
  return <S closePopout={t}>{<u.Text variant={"text-xs/normal"} color={"text-secondary"} className={y.nuxContent}>{_.intl.format(O.default.nHDuwM, {
        learnMoreLink: f.Z.getArticleURL(b.BhN.ACTIVITY_STATUS_SETTINGS)
      })}</u.Text>}{<div className={y.toggleContainerWrapper}><E showCurrentGame={n} shouldShowStatus={true} closePopout={t} /></div>}</S>
}

function N(e) {
  let {
    closePopout: t
  } = e, n = d.G6.useSetting(), {
    showLinkToSettings: r
  } = (0, g.D)("popout");
  return <S>{<E showCurrentGame={n} closePopout={t} />}{<u.$i$ className={y.divider} />}{<u.Text variant={"text-xs/normal"} color={"text-secondary"}>{_.intl.format(O.default.nHDuwM, {
        learnMoreLink: f.Z.getArticleURL(b.BhN.ACTIVITY_STATUS_SETTINGS)
      })}</u.Text>}{r && <m.y onClosePopout={t} />}</S>
}

function w(e) {
  let {
    closePopout: t
  } = e;
  return <S>{<o.X6 variant={"heading-sm/semibold"} color={"header-primary"} className={y.controlTitle}>{_.intl.string(O.default.MkgMBw)}</o.X6>}{<u.Text variant={"text-xs/normal"} color={"text-secondary"}>{_.intl.format(O.default["vtp/IS"], {
        learnMoreLink: f.Z.getArticleURL(b.BhN.ACTIVITY_STATUS_SETTINGS)
      })}</u.Text>}{<j closePopout={t} />}</S>
}

function Z(e) {
  let {
    closePopout: t
  } = e, n = d.G6.useSetting(), {
    showLinkToSettings: r
  } = (0, g.D)("popout");
  return <S>{<E showCurrentGame={n} shouldShowStatus={true} closePopout={t} />}{<u.$i$ className={y.divider} />}{<u.Text variant={"text-xs/normal"} color={"text-secondary"}>{_.intl.format(O.default.nHDuwM, {
        learnMoreLink: f.Z.getArticleURL(b.BhN.ACTIVITY_STATUS_SETTINGS)
      })}</u.Text>}{r && <m.y onClosePopout={t} />}</S>
}
var T = ((r = {})[r.ActivityNux = 0] = "ActivityNux", r[r.StatusNux = 1] = "StatusNux", r[r.ActivityAndStatusNux = 2] = "ActivityAndStatusNux", r[r.Activity = 3] = "Activity", r[r.Status = 4] = "Status", r[r.ActivityAndStatus = 5] = "ActivityAndStatus", r);

function A(e) {
  let {
    popoutState: t,
    closePopout: n,
    onOpen: r
  } = e, [o] = (0, l.useState)(t);
  switch ((0, l.useEffect)(() => {
      r()
    }, [r]), o) {
    case 0:
      return <x closePopout={n} />;
    case 1:
      return <I closePopout={n} />;
    case 2:
      return <P closePopout={n} />;
    case 3:
      return <N closePopout={n} />;
    case 4:
      return <w closePopout={n} />;
    case 5:
      return <Z closePopout={n} />;
    default:
      return null
  }
}