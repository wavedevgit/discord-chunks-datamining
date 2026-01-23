/** Chunk was on 64676 **/
/** chunk id: 980888, original params: t,e,s (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk466472 = require("./466472.js"),
  Chunk775228 = require("./775228.js"),
  Chunk255438 = require("./255438.js"),
  Chunk837921 = require("./837921.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk742898 = require("./742898.js");

function p(t, e, s) {
  return e in t ? Object.defineProperty(t, e, {
    value: s,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = s, t
}
let A = "select";
class I extends Chunk64700.PureComponent {
  fetchAllDirectoryMetadata() {
    let {
      installationPaths: t
    } = this.props, e = t.map(t => {
      let {
        path: e
      } = t;
      return e
    }), {
      newInstallationPath: s
    } = this.state;
    for (let t of (null != s && e.push(s), e = e.filter(t => !this.fetchedMetadataPaths.has(t)), (0, r.UQ)(e), e)) this.fetchedMetadataPaths.add(t)
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
    } = this.state, s = t.map(t => {
      let {
        path: e,
        label: s
      } = t;
      return {
        id: e,
        value: e,
        label: this.renderLabel(e, s)
      }
    });
    return null != e && s.push({
      id: e,
      value: e,
      label: this.renderLabel(e)
    }), s.push({
      id: A,
      value: A,
      label: u.intl.string(u.t["cL/rrq"])
    }), s
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
    return null != e[t] && false === e[t].hasPermission ? (0, l.jsx)("div", {
      className: c.z,
      children: u.intl.string(u.t.cEUT8B)
    }) : this.hasEnoughDiskSpace(t) ? null : (0, l.jsx)("div", {
      className: c.z,
      children: u.intl.string(u.t["duXbE/"])
    })
  }
  renderLabel(t, e) {
    let {
      installationPathsMetadata: s
    } = this.props, l = null != e ? e : t;
    return null != s[t] && null != s[t].availableKB ? u.intl.formatToPlainString(u.t["Y+M3rp"], {
      path: l,
      size: (0, o.Xq)(s[t].availableKB, {
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
    return (0, l.jsxs)("div", {
      className: e,
      children: [(0, l.jsx)(i.l6P, {
        label: u.intl.string(u.t.WTJuNr),
        autoFocus: s,
        options: this.getOptions(),
        value: t,
        onSelectionChange: this.handleChange,
        selectionMode: "single",
        fullWidth: true
      }), this.renderError()]
    })
  }
  constructor(...t) {
    super(...t), p(this, "state", {
      newInstallationPath: null
    }), p(this, "fetchedMetadataPaths", new Set), p(this, "handleChange", t => {
      t === A ? d.Ay.showOpenDialog(["openDirectory"]).then(t => {
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
let g = Chunk311907.Ay.connectStores([Chunk775228.A], () => ({
  installationPaths: h.A.installationPaths,
  installationPathsMetadata: h.A.installationPathsMetadata
}))(I)