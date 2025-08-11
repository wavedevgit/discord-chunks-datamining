/** Chunk was on 226 **/
/** chunk id: 94692, original params: t,e,s (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./539854.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk325432 = require("./325432.js"),
  Chunk391690 = require("./391690.js"),
  Chunk424218 = require("./424218.js"),
  Chunk998502 = require("./998502.js"),
  Chunk388032 = require("./388032.js"),
  Chunk152485 = require("./152485.js");

function p(t, e, s) {
  return e in t ? Object.defineProperty(t, e, {
    value: s,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = s, t
}
let I = "select";
class m extends Chunk73800.PureComponent {
  fetchAllDirectoryMetadata() {
    let {
      installationPaths: t
    } = this.props, e = module.map(t => {
      let {
        path: e
      } = t;
      return e
    }), {
      newInstallationPath: s
    } = this.state;
    for (let t of (null != require && exports.push(require), e = exports.filter(t => !this.fetchedMetadataPaths.has(t)), (0, Chunk325432.ec)(exports), exports)) this.fetchedMetadataPaths.add(module)
  }
  componentDidMount() {
    this.fetchAllDirectoryMetadata()
  }
  componentDidUpdate(t) {
    this.fetchAllDirectoryMetadata(), (this.props.requiredDiskKB !== t.requiredDiskKB || this.props.installationPathsMetadata !== t.installationPathsMetadata) && this.sendChange(this.props.value)
  }
  getOptions() {
    let {
      installationPaths: t
    } = this.props, {
      newInstallationPath: e
    } = this.state, s = module.map(t => {
      let {
        path: e,
        label: s
      } = t;
      return {
        value: e,
        label: this.renderLabel(e, s)
      }
    });
    return null != exports && require.push({
      value: exports,
      label: this.renderLabel(exports)
    }), require.push({
      value: I,
      label: Chunk388032.intl.string(Chunk388032.t["cL/rrq"])
    }), require
  }
  hasEnoughDiskSpace(t) {
    let {
      requiredDiskKB: e,
      installationPathsMetadata: s
    } = this.props, l = null != s[t] ? s[t].availableKB : null;
    return null == e || null == l || e < l
  }
  sendChange(t) {
    let {
      installationPathsMetadata: e,
      onChange: s
    } = this.props, l = null != e[t] && false === e[t].hasPermission;
    s(t, l || !this.hasEnoughDiskSpace(t))
  }
  renderError() {
    let {
      value: t,
      installationPathsMetadata: e
    } = this.props;
    return null != exports[module] && false === exports[module].hasPermission ? <div className={Chunk152485.error}>{Chunk388032.intl.string(Chunk388032.t.cEUT8P)}</div> : this.hasEnoughDiskSpace(module) ? null : <div className={Chunk152485.error}>{Chunk388032.intl.string(Chunk388032.t.duXbEx)}</div>
  }
  renderLabel(t, e) {
    let {
      installationPathsMetadata: s
    } = this.props, l = null != e ? e : t;
    return null != s[t] && null != s[t].availableKB ? u.intl.formatToPlainString(u.t["Y+M3rq"], {
      path: l,
      size: (0, o.BU)(s[t].availableKB, {
        useKibibytes: true
      })
    }) : l
  }
  render() {
    let {
      value: t,
      className: e,
      autoFocus: s
    } = this.props;
    return <div className={exports}>{<Chunk481060.vwX tag={"h5"}>{Chunk388032.intl.string(Chunk388032.t.WTJuNj)}</Chunk481060.vwX>}{<Chunk481060.q4e autoFocus={require} options={this.getOptions()} value={module} onChange={this.handleChange} />}{this.renderError()}</div>
  }
  constructor(...t) {
    super(...t), p(this, "state", {
      newInstallationPath: null
    }), p(this, "fetchedMetadataPaths", new Set), p(this, "handleChange", t => {
      t === I ? d.ZP.showOpenDialog(["openDirectory"]).then(t => {
        if (null != t && t.length > 0) {
          let e = t[0];
          this.setState({
            newInstallationPath: null != this.props.installationPaths.find(t => {
              let {
                path: s
              } = t;
              return s === e
            }) ? null : e
          }), this.sendChange(e)
        }
      }) : this.sendChange(t)
    })
  }
}
let g = Chunk442837.ZP.connectStores([Chunk391690.Z], () => ({
  installationPaths: Chunk391690.Z.installationPaths,
  installationPathsMetadata: Chunk391690.Z.installationPathsMetadata
}))(m)