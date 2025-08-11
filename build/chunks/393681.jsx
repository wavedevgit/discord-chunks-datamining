/** Chunk was on 75708 **/
/** chunk id: 393681, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => X
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk816814 = require("./816814.js"),
  Chunk809206 = require("./809206.js"),
  Chunk497321 = require("./497321.js"),
  Chunk279837 = require("./279837.jsx"),
  Chunk952306 = require("./952306.js"),
  Chunk600164 = require("./600164.js"),
  Chunk690221 = require("./690221.js"),
  Chunk332473 = require("./332473.js"),
  Chunk303172 = require("./303172.jsx"),
  Chunk518560 = require("./518560.js"),
  Chunk921801 = require("./921801.js"),
  Chunk577275 = require("./577275.js"),
  Chunk484459 = require("./484459.js"),
  Chunk430824 = require("./430824.js"),
  Chunk325067 = require("./325067.js"),
  Chunk246946 = require("./246946.js"),
  Chunk663389 = require("./663389.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk706454 = require("./706454.js"),
  Chunk210887 = require("./210887.js"),
  Chunk418632 = require("./418632.js"),
  Chunk10298 = require("./10298.jsx"),
  Chunk526156 = require("./526156.js"),
  Chunk730820 = require("./730820.js"),
  Chunk888256 = require("./888256.js"),
  Chunk2719 = require("./2719.jsx"),
  Chunk194530 = require("./194530.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk801461 = require("./801461.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk951839 = require("./951839.js"),
  Chunk20493 = require("./20493.js");

function Y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function K(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class q extends Chunk73800.PureComponent {
  componentDidMount() {
    let {
      currentUser: e
    } = this.props;
    (0, Chunk484459.Z)(module.id, module.getAvatarURL(true, 80))
  }
  componentWillUnmount() {
    Chunk816814.Z.clearBackupCodes(), (0, Chunk809206.Zy)()
  }
  renderAccountWarning() {
    let {
      currentUser: e
    } = this.props;
    if (!module.isClaimed()) {
      let e = <section>{<div className={Chunk951839.accountWarningBodyText}>{Chunk388032.intl.string(Chunk388032.t.qKs3vr)}</div>}{<Chunk755721.zx look={Chunk755721.iL.OUTLINED} size={Chunk755721.Ph.SMALL} color={Chunk755721.zx.Colors.WHITE} onClick={() => Chunk952306.Z.openClaimAccountModal()}>{Chunk388032.intl.string(Chunk388032.t["7psymp"])}</Chunk755721.zx>}</section>;
      return <Chunk481060.ToO type={Chunk481060.ToO.Types.DANGER} className={Chunk20493.marginBottom20} imageData={{
          src: require("./418558.js"),
          width: 60,
          height: 60
        }} title={Chunk388032.intl.string(Chunk388032.t["/3qnLy"])} body={module} />
    }
    if (null == module.email) return null;
    if (!module.verified) {
      let e = <section>{<div className={Chunk951839.accountWarningBodyText}>{Chunk388032.intl.string(Chunk388032.t.NAzplJ)}</div>}{<Chunk418632.Z size={Chunk755721.Ph.SMALL} color={Chunk755721.zx.Colors.PRIMARY} />}</section>;
      return <Chunk481060.ToO type={Chunk481060.ToO.Types.PRIMARY} className={Chunk20493.marginBottom20} imageData={{
          src: require("./449125.js"),
          width: 60,
          height: 60
        }} title={Chunk388032.intl.string(Chunk388032.t.tuGzBQ)} body={module} />
    }
  }
  renderPomeloWarning() {
    return this.props.shouldRenderPomeloWarning ? <Chunk481060.Wn className={Chunk951839.accountWarningBodyText} messageType={Chunk481060.QYI.WARNING}>{Chunk388032.intl.format(Chunk388032.t.pdYZys, {})}{" "}{""}{<Chunk690221.Z className={Chunk951839.noticeTextButton} onClick={() => (0, Chunk303172.Z)(Chunk801461.Kq.USER_SETTINGS)}>{Chunk388032.intl.string(Chunk388032.t.LhlgY2)}</Chunk690221.Z>}</Chunk481060.Wn> : null
  }
  renderAccountSettings() {
    let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
      t = <Chunk255367.Fragment>{this.renderPomeloWarning()}{this.renderAccountWarning()}{<Chunk2719.Z />}</Chunk255367.Fragment>;
    return module ? <Chunk481060.hjN tag={Chunk481060.RB0.H1} title={Chunk388032.intl.string(Chunk388032.t["JAIM/v"])}>{exports}</Chunk481060.hjN> : exports
  }
  renderSecuritySettings() {
    let {
      backupCodes: e,
      currentUser: t,
      theme: r
    } = this.props, s = (0, Chunk780384.wj)(Chunk73800) ? require("./555702.js") : require("./610802.js");
    return <Chunk481060.hjN className={a()(Chunk951839.userSettingsSecurity, Chunk20493.marginTop40)} title={Chunk388032.intl.string(Chunk388032.t.pKSjEh)} tag={"h1"}>{exports.mfaEnabled ? <Chunk481060.hjN><Chunk481060.vwX className={a()(Chunk951839.isEnabled, Chunk20493.marginBottom20)}>{<img alt={""} className={Chunk951839.lockIcon} src={require("./511391.js")} />}{Chunk388032.intl.string(Chunk388032.t.FsmBy8)}</Chunk481060.vwX></Chunk481060.hjN> : null}{<Chunk921801.F setting={Chunk726985.s6.ACCOUNT_CHANGE_PASSWORD}><div><div data-button-hoisted-classname-wrapper={true} className={Chunk951839.changePasswordButton}><Chunk481060.zxk variant={"primary"} size={"sm"} text={Chunk388032.intl.string(Chunk388032.t["FRep5+"])} onClick={() => (0, Chunk481060.h7j)(e => (0, i.jsx)(U.default, K(Y({}, e), {
                onSuccess: e.onClose
              })))} /></div></div></Chunk921801.F>}{<Chunk921801.F setting={Chunk726985.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION}><Chunk600164.Z align={Chunk600164.Z.Align.STRETCH}>{<Chunk600164.Z.Child wrap={true}><Chunk730820.Z backupCodes={module} /></Chunk600164.Z.Child>}{exports.mfaEnabled ? null : <Chunk600164.Z align={Chunk600164.Z.Align.CENTER} basis={"323px"} grow={0}><img src={Chunk120356} className={Chunk951839.userSettingsSecurityImage} alt={""} /></Chunk600164.Z>}</Chunk600164.Z></Chunk921801.F>}</Chunk481060.hjN>
  }
  renderConfirmModals() {
    let {
      shouldRenderOwnedGuildsModal: e,
      shouldRenderDeleteAccountConfirmModal: t,
      shouldRenderDisableAccountErrorModal: n,
      shouldRenderOwnedTeamsModal: r,
      disableAccountErrorMessage: s
    } = this.state;
    if (Chunk73800) {
      let e = () => this.setState({
        shouldRenderOwnedTeamsModal: false
      });
      return <Chunk481060.sYh dismissable={true} header={Chunk388032.intl.string(Chunk388032.t.UNGZDA)} confirmText={Chunk388032.intl.string(Chunk388032.t.BddRzc)} confirmButtonColor={Chunk755721.Tt.BRAND} onCancel={module} onConfirm={module}><Chunk481060.Text variant={"text-md/normal"}>{Chunk388032.intl.string(Chunk388032.t.alpAUl)}</Chunk481060.Text></Chunk481060.sYh>
    }
    if (module) {
      let e = () => this.setState({
        shouldRenderOwnedGuildsModal: false
      });
      return <Chunk481060.sYh dismissable={true} header={Chunk388032.intl.string(Chunk388032.t.I5UrbW)} confirmText={Chunk388032.intl.string(Chunk388032.t.BddRzc)} confirmButtonColor={Chunk755721.Tt.BRAND} onCancel={module} onConfirm={module}><Chunk481060.Text variant={"text-md/normal"}>{Chunk388032.intl.string(Chunk388032.t.UyVVam)}</Chunk481060.Text></Chunk481060.sYh>
    }
    if (exports) {
      let e = () => this.setState({
        shouldRenderDeleteAccountConfirmModal: false
      });
      return <Chunk481060.sYh dismissable={true} header={Chunk388032.intl.string(Chunk388032.t["8lQ2ra"])} confirmText={Chunk388032.intl.string(Chunk388032.t["8lQ2ra"])} cancelText={Chunk388032.intl.string(Chunk388032.t["ETE/oK"])} onCancel={module} onConfirm={() => (0, Chunk809206.ss)("", true).then(module)}><Chunk481060.Text variant={"text-md/normal"}>{Chunk388032.intl.string(Chunk388032.t.FB4H1N)}</Chunk481060.Text></Chunk481060.sYh>
    }
    if (require) {
      let e = () => this.setState({
        shouldRenderDisableAccountErrorModal: false,
        disableAccountErrorMessage: null
      });
      return <Chunk481060.sYh dismissable={true} header={Chunk388032.intl.string(Chunk388032.t.LX0nT0)} confirmText={Chunk388032.intl.string(Chunk388032.t.BddRzc)} confirmButtonColor={Chunk755721.Tt.BRAND} onCancel={module} onConfirm={module}><Chunk481060.Text variant={"text-md/normal"}>{Chunk120356}</Chunk481060.Text></Chunk481060.sYh>
    }
    return null
  }
  renderAccountRemovalSettings() {
    let {
      currentUser: e,
      userTeamsLoading: t
    } = this.props;
    return <Chunk888256.Z className={Chunk20493.marginTop40} currentUser={module} disabled={exports} handleDisableAccount={() => this.handleDisableAccount(false)} handleDeleteAccount={() => this.handleDisableAccount(true)} />
  }
  renderSecuritySettingsRedesign() {
    return <Chunk255367.Fragment>{this.renderConfirmModals()}{<Chunk921801.F setting={Chunk726985.s6.ACCOUNT_PROFILE}>{this.renderAccountSettings(false)}</Chunk921801.F>}{<Chunk921801.F setting={Chunk726985.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION}>{this.renderSecuritySettings()}</Chunk921801.F>}{<Chunk921801.F setting={Chunk726985.s6.ACCOUNT_REMOVAL}>{this.renderAccountRemovalSettings()}</Chunk921801.F>}</Chunk255367.Fragment>
  }
  renderUnhidden() {
    let {
      subsection: e
    } = this.props;
    return <Chunk10298.N header={Chunk388032.intl.string(Chunk388032.t["JAIM/v"])}><Chunk526156.Z parentSetting={Chunk726985.s6.ACCOUNT} settingsSection={Chunk981631.oAB.ACCOUNT} panelClassName={Chunk951839.tabPanel} onTabChange={e => {
          P.default.track(G.rMx.MY_ACCOUNT_PAGE_TAB_NAVIGATE, {
            target_tab_name: e === V.s6.ACCOUNT_SECURITY_TAB ? "SECURITY" : "STANDING"
          })
        }} defaultTabIndex={"ACCOUNT_STANDING" === module ? 1 : true} tabs={[{
          title: Chunk388032.intl.string(Chunk388032.t.Am9YHh),
          component: () => this.renderSecuritySettingsRedesign(),
          setting: Chunk726985.s6.ACCOUNT_SECURITY_TAB
        }, {
          title: Chunk388032.intl.string(Chunk388032.t["Vov/9v"]),
          component: Chunk518560.Z,
          setting: Chunk726985.s6.PRIVACY_AND_SAFETY_STANDING
        }]} /></Chunk10298.N>
  }
  render() {
    return this.props.hide ? <Chunk497321.Z /> : this.renderUnhidden()
  }
  handleDisableAccountError(e) {
    if (e.body.code === G.evJ.INVALID_PASSWORD) throw e;
    this.setState({
      shouldRenderDisableAccountErrorModal: true,
      disableAccountErrorMessage: e.body.message
    })
  }
  handleSubmitDisableAccount(e, t) {
    return (0, g.ss)(e, t).then(G.dG4, this.handleDisableAccountError)
  }
  handleDisableAccount() {
    var e;
    let t = arguments.length > 0 && true !== arguments[0] && arguments[0],
      {
        currentUser: n,
        userTeams: r
      } = this.props,
      s = Chunk430824.Z.getGuildsArray().filter(e => e.ownerId === n.id);
    return (null != (e = null == Chunk73800 ? true : Chunk73800.filter(e => e.owner_user_id === n.id)) ? module : []).length > 0 ? void this.setState({
      shouldRenderOwnedTeamsModal: true
    }) : Chunk120356.length > 0 ? void this.setState({
      shouldRenderOwnedGuildsModal: true
    }) : void(require.isClaimed() ? (0, Chunk481060.h7j)(e => <f.Z{...K(Y({}, e), {
      handleSubmit: e => this.handleSubmitDisableAccount(e, t),
      title: t ? H.intl.string(H.t["8lQ2ra"]) : H.intl.string(H.t.jf5GGR),
      actionText: t ? H.intl.string(H.t["8lQ2ra"]) : H.intl.string(H.t.jf5GGR),
      children: t ? H.intl.string(H.t.FB4H1N) : H.intl.string(H.t.gk7h39)
    })} />) : this.setState({
      shouldRenderDeleteAccountConfirmModal: true
    }))
  }
  constructor(e) {
    super(e), this.state = {
      disableAccountErrorMessage: null,
      shouldRenderOwnedGuildsModal: false,
      shouldRenderDeleteAccountConfirmModal: false,
      shouldRenderDisableAccountErrorModal: false,
      shouldRenderOwnedTeamsModal: false
    }
  }
}
let X = () => {
  let e = (0, Chunk442837.e7)([Chunk594174.default], () => {
      let e = Chunk594174.default.getCurrentUser();
      return o()(null != module, "ConnectedUserAccountSettings: currentUser cannot be undefined"), module
    }),
    t = (0, Chunk442837.e7)([Chunk325067.Z], () => Chunk325067.Z.getBackupCodes()),
    n = (0, Chunk442837.e7)([Chunk246946.Z], () => Chunk246946.Z.hidePersonalInformation),
    r = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.theme),
    s = (0, Chunk332473.b)(),
    a = (0, Chunk442837.e7)([Chunk706454.default], () => Chunk706454.default.locale),
    l = (0, Chunk442837.e7)([Chunk663389.Z], () => Chunk663389.Z.getSubsection()),
    {
      teams: d,
      loading: u
    } = (0, Chunk577275.Z)({
      refreshOnDepChange: true
    });
  return <q theme={Chunk73800} currentUser={module} backupCodes={exports} hide={require} shouldRenderPomeloWarning={Chunk120356} locale={a} subsection={Chunk512722} userTeams={Chunk780384} userTeamsLoading={Chunk755721} />
}