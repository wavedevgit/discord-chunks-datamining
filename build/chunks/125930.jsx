/** Chunk was on 1272 **/
/** chunk id: 125930, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./781311.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk770146 = require("./770146.js"),
  Chunk600164 = require("./600164.js"),
  Chunk424218 = require("./424218.js"),
  Chunk823379 = require("./823379.js"),
  Chunk358085 = require("./358085.js"),
  Chunk843445 = require("./843445.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk208039 = require("./208039.js");
let b = {
  [Chunk981631.TaA.WINDOWS]: Chunk358085.PlatformTypes.WINDOWS,
  [Chunk981631.TaA.MACOS]: Chunk358085.PlatformTypes.OSX,
  [Chunk981631.TaA.LINUX]: Chunk358085.PlatformTypes.LINUX
};
class _ extends Chunk73800.PureComponent {
  render() {
    let {
      active: e,
      children: t,
      pageSize: n,
      onClick: i
    } = this.props, l = require === Chunk843445.b.LARGE;
    return <Chunk755721.zx size={Chunk120356 ? Chunk755721.zx.Sizes.MIN : Chunk755721.zx.Sizes.LARGE} fullWidth={!Chunk120356} color={module ? Chunk208039.tabSelectedColor : Chunk208039.tabNotSelectedColor} className={a()({
        [Chunk208039.tabPageLarge]: Chunk120356,
        [Chunk208039.tabPageSmall]: !Chunk120356,
        [Chunk208039.tabSelected]: module,
        [Chunk208039.tabNotSelected]: !module
      })} onClick={Chunk73800}>{exports}</Chunk755721.zx>
  }
}
let O = e => [{
  key: g.intl.string(g.t["0TcHzs"]),
  value: e.operating_system_version
}, {
  key: g.intl.string(g.t.eOX6Hh),
  value: e.cpu
}, {
  key: g.intl.string(g.t["+WJ5XV"]),
  value: null != e.ram ? g.intl.formatToPlainString(g.t.RNRSl5, {
    size: (0, u.BU)(1e3 * e.ram, {
      showDecimalForGB: false
    })
  }) : null
}, {
  key: g.intl.string(g.t["+3s/V1"]),
  value: e.gpu
}, {
  key: g.intl.string(g.t["L+x5wM"]),
  value: null != e.disk ? (0, u.BU)(1e3 * e.disk, {
    showDecimalForGB: false
  }) : null
}, {
  key: g.intl.string(g.t["Ghp2/P"]),
  value: e.sound_card
}, {
  key: g.intl.string(g.t["+w6nJi"]),
  value: e.network
}, {
  key: g.intl.string(g.t.Au3Vbm),
  value: e.notes
}];
class E extends Chunk73800.PureComponent {
  static getDerivedStateFromProps(e, t) {
    let {
      systemRequirements: n
    } = e, {
      selectedOperatingSystem: r
    } = t, i = Object.keys(n);
    return i.includes(r) ? null : {
      selectedOperatingSystem: i[0]
    }
  }
  renderTabs() {
    let {
      pageSize: e,
      systemRequirements: t
    } = this.props, {
      selectedOperatingSystem: n
    } = this.state, i = Object.keys(exports);
    return 1 === Chunk73800.length ? null : <Chunk600164.Z className={Chunk208039.tabs}>{<div className={Chunk208039.separator} />}{Chunk73800.map(t => <_ active={t === n} onClick={() => this.handleSelectOperatingSystem(t)} pageSize={e}>{function(e) {
          switch (e) {
            case h.TaA.WINDOWS:
              return g.intl.string(g.t["0/xHFB"]);
            case h.TaA.MACOS:
              return g.intl.string(g.t.E4u4n5);
            case h.TaA.LINUX:
              return g.intl.string(g.t.tcawo6)
          }
        }(t)}</_>)}</Chunk600164.Z>
  }
  renderRequirementsSection(e, t) {
    if (null == e) return null;
    let n = O(e).map((e, t) => {
      let n = null != e.value ? e.value.trim() : null;
      return null == n || 0 === n.length ? null : <div className={m.requirement}>{<span className={m.requirementKey}>{e.key}{":"}</span>}{n}</div>
    }).filter(d.lm);
    return <div className={m.requirements}>{<s.Z tag={"h4"}>{t}</s.Z>}{n}</div>
  }
  renderBody() {
    let {
      minimum: e,
      recommended: t
    } = this.props.systemRequirements[this.state.selectedOperatingSystem];
    return <div className={Chunk208039.requirementsContainer}>{this.renderRequirementsSection(module, Chunk388032.intl.string(Chunk388032.t.QCCMXF))}{this.renderRequirementsSection(exports, Chunk388032.intl.string(Chunk388032.t.He39ws))}</div>
  }
  render() {
    return <div className={this.props.className}>{<Chunk770146.Z>{Chunk388032.intl.string(Chunk388032.t.IkOAoq)}</Chunk770146.Z>}{this.renderTabs()}{this.renderBody()}</div>
  }
  constructor(e) {
    var t, n;
    super(e), t = "handleSelectOperatingSystem", n = e => {
      this.setState({
        selectedOperatingSystem: e
      })
    }, t in this ? Object.defineProperty(this, t, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    }) : this[t] = n;
    let r = (0, p.getPlatform)(),
      i = Object.keys(e.systemRequirements),
      l = i[0];
    for (let e of i) b[e] === r && (l = e);
    this.state = {
      selectedOperatingSystem: l
    }
  }
}
let y = E