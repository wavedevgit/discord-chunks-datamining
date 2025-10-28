/** Chunk was on 1272 **/
/** chunk id: 125930, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./781311.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk770146 = require("./770146.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk424218 = require("./424218.js"),
  Chunk823379 = require("./823379.js"),
  Chunk358085 = require("./358085.js"),
  Chunk843445 = require("./843445.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk688510 = require("./688510.js");
let _ = {
  [Chunk981631.TaA.WINDOWS]: Chunk358085.PlatformTypes.WINDOWS,
  [Chunk981631.TaA.MACOS]: Chunk358085.PlatformTypes.OSX,
  [Chunk981631.TaA.LINUX]: Chunk358085.PlatformTypes.LINUX
};
class b extends Chunk647438.PureComponent {
  render() {
    let {
      active: e,
      children: t,
      pageSize: n,
      onClick: i
    } = this.props, l = require === Chunk843445.b.LARGE;
    return (0, Chunk951288.jsx)(Chunk755721.zx, {
      size: Chunk120356 ? Chunk755721.zx.Sizes.MIN : Chunk755721.zx.Sizes.LARGE,
      fullWidth: !Chunk120356,
      color: module ? Chunk688510.tabSelectedColor : Chunk688510.tabNotSelectedColor,
      className: a()({
        [Chunk688510.tabPageLarge]: Chunk120356,
        [Chunk688510.tabPageSmall]: !Chunk120356,
        [Chunk688510.tabSelected]: module,
        [Chunk688510.tabNotSelected]: !module
      }),
      onClick: Chunk647438,
      children: exports
    })
  }
}
class E extends Chunk647438.PureComponent {
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
    return 1 === Chunk647438.length ? null : (0, Chunk951288.jsxs)(Chunk600164.Z, {
      className: Chunk688510.tabs,
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk688510.separator
      }), Chunk647438.map(t => (0, r.jsx)(b, {
        active: t === n,
        onClick: () => this.handleSelectOperatingSystem(t),
        pageSize: e,
        children: function(e) {
          switch (e) {
            case m.TaA.WINDOWS:
              return h.intl.string(h.t["0/xHFO"]);
            case m.TaA.MACOS:
              return h.intl.string(h.t.E4u4n5);
            case m.TaA.LINUX:
              return h.intl.string(h.t.tcawo3)
          }
        }(t)
      }, t))]
    })
  }
  renderRequirementsSection(e, t) {
    if (null == e) return null;
    let n = [{
      key: h.intl.string(h.t["0TcHzv"]),
      value: e.operating_system_version
    }, {
      key: h.intl.string(h.t.eOX6Hq),
      value: e.cpu
    }, {
      key: h.intl.string(h.t["+WJ5XQ"]),
      value: null != e.ram ? h.intl.formatToPlainString(h.t.RNRSl6, {
        size: (0, u.BU)(1e3 * e.ram, {
          showDecimalForGB: false
        })
      }) : null
    }, {
      key: h.intl.string(h.t["+3s/V/"]),
      value: e.gpu
    }, {
      key: h.intl.string(h.t["L+x5wB"]),
      value: null != e.disk ? (0, u.BU)(1e3 * e.disk, {
        showDecimalForGB: false
      }) : null
    }, {
      key: h.intl.string(h.t["Ghp2/B"]),
      value: e.sound_card
    }, {
      key: h.intl.string(h.t["+w6nJg"]),
      value: e.network
    }, {
      key: h.intl.string(h.t.Au3Vbp),
      value: e.notes
    }].map((e, t) => {
      let n = null != e.value ? e.value.trim() : null;
      return null == n || 0 === n.length ? null : (0, r.jsxs)("div", {
        className: g.requirement,
        children: [(0, r.jsxs)("span", {
          className: g.requirementKey,
          children: [e.key, ":"]
        }), n]
      }, t)
    }).filter(d.lm);
    return (0, r.jsxs)("div", {
      className: g.requirements,
      children: [(0, r.jsx)(o.Z, {
        tag: "h4",
        children: t
      }), n]
    })
  }
  renderBody() {
    let {
      minimum: e,
      recommended: t
    } = this.props.systemRequirements[this.state.selectedOperatingSystem];
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk688510.requirementsContainer,
      children: [this.renderRequirementsSection(module, Chunk388032.intl.string(Chunk388032.t.QCCMXE)), this.renderRequirementsSection(exports, Chunk388032.intl.string(Chunk388032.t.He39wq))]
    })
  }
  render() {
    return (0, Chunk951288.jsxs)("div", {
      className: this.props.className,
      children: [(0, Chunk951288.jsx)(Chunk770146.Z, {
        children: Chunk388032.intl.string(Chunk388032.t.IkOAol)
      }), this.renderTabs(), this.renderBody()]
    })
  }
  constructor(e) {
    super(e),
      function(e, t, n) {
        t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      }(this, "handleSelectOperatingSystem", e => {
        this.setState({
          selectedOperatingSystem: e
        })
      });
    let t = (0, p.getPlatform)(),
      n = Object.keys(e.systemRequirements),
      r = n[0];
    for (let e of n) _[e] === t && (r = e);
    this.state = {
      selectedOperatingSystem: r
    }
  }
}
let O = E