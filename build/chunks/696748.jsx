/** Chunk was on web.js **/
/** chunk id: 696748, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => T
}), require("./953529.js"), require("./415506.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk372123 = require("./372123.js"),
  Chunk224706 = require("./224706.js"),
  Chunk812206 = require("./812206.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk293245 = require("./293245.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk50611 = require("./50611.js"),
  Chunk20493 = require("./20493.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}
class v extends Chunk73800.PureComponent {
  renderConflictButton(e, t, n, i) {
    return <l.zx className={E.conflictButton} innerClassName={E.conflictButtonInner} onClick={i}>{<div className={n} />}{<div className={E.buttonBody}>{<div className={E.conflictTitle}>{e}</div>}{<div>{g.intl.string(g.t.gflHOz)}</div>}{<div className={E.timestamp}>{a()(t).calendar()}</div>}</div>}</l.zx>
  }
  renderError() {
    let {
      application: e
    } = this.props;
    return <Chunk73800.Fragment>{<Chunk481060.hzk>{<Chunk600164.Z justify={Chunk600164.Z.Justify.CENTER}><div className={Chunk50611.errorArt} /></Chunk600164.Z>}{<div className={Chunk50611.description}>{Chunk388032.intl.format(Chunk388032.t.RAaWyc, {
            applicationName: module.name
          })}</div>}</Chunk481060.hzk>}{<Chunk481060.mzw><Chunk600164.Z justify={Chunk600164.Z.Justify.BETWEEN}>{<Chunk755721.zx className={Chunk50611.linkButton} size={Chunk50611.linkButtonSize} look={Chunk755721.zx.Looks.LINK} color={Chunk755721.zx.Colors.PRIMARY} onClick={this.onClose}>{Chunk388032.intl.string(Chunk388032.t["ETE/oK"])}</Chunk755721.zx>}{<Chunk600164.Z direction={Chunk600164.Z.Direction.HORIZONTAL} justify={Chunk600164.Z.Justify.END}>{<div data-button-hoisted-classname-wrapper={true} className={Chunk50611.retryButton}><Chunk481060.zxk variant={"secondary"} text={Chunk388032.intl.string(Chunk388032.t["5911LS"])} onClick={() => this.handlePlay()} /></div>}{<Chunk481060.zxk variant={"primary"} text={Chunk388032.intl.string(Chunk388032.t["359PbW"])} onClick={() => this.handlePlay(false)} />}</Chunk600164.Z>}</Chunk600164.Z></Chunk481060.mzw>}</Chunk73800.Fragment>
  }
  renderConflict() {
    let {
      application: e,
      cloudSyncState: t
    } = this.props;
    if (exports.type !== Chunk981631.TzF.CONFLICT) throw Error("Cannot render conflict for non conflict type");
    return <Chunk481060.hzk className={Chunk20493.marginBottom20}>{<div className={Chunk50611.description}>{Chunk388032.intl.format(Chunk388032.t.eyXUPz, {
          applicationName: module.name
        })}</div>}{this.renderConflictButton(Chunk388032.intl.string(Chunk388032.t.AQUmkp), exports.remote.timestamp, Chunk50611.conflictDownloadArt, this.handleChooseDownload)}{<Chunk600164.Z className={Chunk50611.choiceWrapper} align={Chunk600164.Z.Align.CENTER}>{<div className={Chunk50611.choiceLine} />}{<div className={Chunk50611.choiceTitle}>{Chunk388032.intl.string(Chunk388032.t.WUsA2N)}</div>}{<div className={Chunk50611.choiceLine} />}</Chunk600164.Z>}{this.renderConflictButton(Chunk388032.intl.string(Chunk388032.t.AXVws7), exports.next.timestamp, Chunk50611.conflictUploadArt, this.handleChooseUpload)}</Chunk481060.hzk>
  }
  render() {
    let {
      cloudSyncState: e,
      transitionState: t
    } = this.props, n = module.type === Chunk981631.TzF.CONFLICT ? Chunk388032.intl.string(Chunk388032.t.oNbO1d) : Chunk388032.intl.string(Chunk388032.t.as4Tgo);
    return <Chunk481060.Y0X transitionState={exports} className={Chunk50611.modal} aria-label={require} parentComponent={"CloudSyncResolutionModal"}>{<Chunk481060.xBx separator={false}>{<Chunk481060.olH className={Chunk50611.closeButton} onClick={this.onClose} />}{<Chunk481060.vwX tag={"h2"} className={Chunk20493.marginReset}>{require}</Chunk481060.vwX>}</Chunk481060.xBx>}{module.type === Chunk981631.TzF.CONFLICT ? this.renderConflict() : this.renderError()}</Chunk481060.Y0X>
  }
  constructor(...e) {
    var t;
    super(...e), t = this, y(this, "onClose", () => {
      this.props.onClose()
    }), y(this, "handlePlay", function() {
      let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
        n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null,
        {
          libraryApplication: r,
          analyticsParams: i
        } = t.props;
      t.onClose(), T(r.id, r, {
        analyticsParams: i,
        cloudSync: e,
        cloudSyncForceHash: n
      })
    }), y(this, "handleChooseDownload", () => {
      let {
        cloudSyncState: e
      } = this.props;
      e.type === m.TzF.CONFLICT && this.handlePlay(true, e.remote.hash)
    }), y(this, "handleChooseUpload", () => {
      let {
        cloudSyncState: e
      } = this.props;
      e.type === m.TzF.CONFLICT && this.handlePlay(true, e.next.hash)
    })
  }
}
let I = Chunk442837.ZP.connectStores([Chunk293245.Z, Chunk812206.Z], e => {
  let {
    libraryApplication: t,
    branchId: n
  } = e;
  return {
    cloudSyncState: p.Z.getState(t.id, n),
    application: f.Z.getApplication(t.id)
  }
})(v);
async function T(e, t, n) {
  let i = f.Z.getApplication(e);
  if (null == i) return;
  let {
    cloudSync: o = true,
    cloudSyncForceHash: a = null,
    analyticsParams: s
  } = n;
  if (o && null != t) {
    let e = t.branchId;
    try {
      await u.Z(t.id, e, a)
    } catch (n) {
      (0, c.h7j)(n => <I{...O({
        libraryApplication: t,
        analyticsParams: s,
        branchId: e
      }, n)} />);
      return
    }
  }
  return h.default.track(m.rMx.APPLICATION_OPENED, O({
    application_id: i.id,
    application_name: i.name,
    type: m.q5t.LAUNCH,
    distributor: null != t ? t.getDistributor() : null
  }, s)), d.Z.launch({
    applicationId: i.id,
    branchId: null == t ? true : t.branchId
  })
}