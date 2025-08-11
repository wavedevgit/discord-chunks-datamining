/** Chunk was on 1272 **/
/** chunk id: 993977, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk58642 = require("./58642.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk490983 = require("./490983.js"),
  Chunk626135 = require("./626135.js"),
  Chunk630388 = require("./630388.js"),
  Chunk804739 = require("./804739.js"),
  Chunk957657 = require("./957657.jsx"),
  Chunk34305 = require("./34305.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk876733 = require("./876733.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function y(e) {
  let {
    applicationViewItems: t,
    restoreApplication: n
  } = e;
  if (0 === t.length) return null;
  let i = t.map(e => {
    let t = e.libraryApplication.getDistributor();
    return <div className={_.hiddenLibraryApplication}>{<s.Z direction={s.Z.Direction.VERTICAL} className={_.hiddenLibraryApplicationContent}>{<div className={_.applicationName}>{e.libraryApplication.getBranchedName(e.application)}</div>}{null != t ? <div className={_.applicationSubText}>{m.EOG[t]}</div> : null}</s.Z>}{<a.P3F className={_.restoreButton} onClick={() => n(e.libraryApplication)}><a.Dio size={"md"} color={"currentColor"} className={_.restoreIcon} /></a.P3F>}</div>
  });
  return <a.hjN className={_.hiddenLibraryApplications}>{<a.vwX className={_.hiddenLibraryApplicationsTitle}>{b.intl.string(b.t["5PJtrK"])}</a.vwX>}{i}</a.hjN>
}
class v extends Chunk73800.PureComponent {
  handleToggleShortcutDesktop(e) {
    c.Xc.updateSetting(e)
  }
  handleToggleShortcutStartMenu(e) {
    c.Pe.updateSetting(e)
  }
  trackRestoreApplication(e, t) {
    d.default.track(m.rMx.APPLICATION_SETTINGS_UPDATED, E({
      hidden_enabled: t
    }, e.getAnalyticsData()))
  }
  renderBody() {
    let {
      hiddenLibraryApplicationViewItems: e,
      installShortcutDesktop: t,
      installShortcutStartMenu: n
    } = this.props;
    return <div className={Chunk876733.body}>{(0, Chunk804739.Q)() ? <Chunk73800.Fragment>{<Chunk481060.j7V value={exports} onChange={this.handleToggleShortcutDesktop} note={Chunk388032.intl.string(Chunk388032.t.vT61Nz)}>{Chunk388032.intl.string(Chunk388032.t["9ID+Ki"])}</Chunk481060.j7V>}{<Chunk481060.j7V value={require} onChange={this.handleToggleShortcutStartMenu} note={Chunk388032.intl.string(Chunk388032.t.cpYp0N)}>{Chunk388032.intl.string(Chunk388032.t.vNpUMz)}</Chunk481060.j7V>}{<Chunk34305.Z />}</Chunk73800.Fragment> : null}{<y restoreApplication={this.handleRestoreHiddenLibraryApplication} applicationViewItems={module} />}</div>
  }
  render() {
    return <Chunk255367.Fragment>{<Chunk957657.Z currentRoute={Chunk981631.Z5c.APPLICATION_LIBRARY_SETTINGS} />}{<Chunk481060.w0Z className={Chunk876733.scroller}>{this.renderBody()}</Chunk481060.w0Z>}</Chunk255367.Fragment>
  }
  constructor(...e) {
    super(...e), O(this, "handleRestoreHiddenLibraryApplication", e => {
      let t = p.x9(e.getFlags(), m.eHb.HIDDEN);
      o.h(e.id, e.branchId, t), this.trackRestoreApplication(e, p.yE(t, m.eHb.HIDDEN))
    })
  }
}

function I() {
  let e = {
    installShortcutDesktop: Chunk695346.Xc.useSetting(),
    installShortcutStartMenu: Chunk695346.Pe.useSetting(),
    hiddenLibraryApplicationViewItems: (0, Chunk442837.e7)([Chunk490983.Z], () => Chunk490983.Z.hiddenLibraryApplicationViewItems)
  };
  return <v{...E({}, module)} />
}