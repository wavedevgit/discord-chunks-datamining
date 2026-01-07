/** Chunk was on 1272 **/
/** chunk id: 125930, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./781311.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk175496 = require("./175496.js");
let b = {
  [Chunk981631.TaA.WINDOWS]: Chunk358085.PlatformTypes.WINDOWS,
  [Chunk981631.TaA.MACOS]: Chunk358085.PlatformTypes.OSX,
  [Chunk981631.TaA.LINUX]: Chunk358085.PlatformTypes.LINUX
};
class _ extends Chunk473749.PureComponent {
  render() {
    let {
      active: e,
      children: t,
      pageSize: n,
      onClick: i
    } = this.props, l = n === f.b.LARGE;
    return (0, r.jsx)(o.zx, {
      size: l ? o.zx.Sizes.MIN : o.zx.Sizes.LARGE,
      fullWidth: !l,
      color: e ? h.tabSelectedColor : h.tabNotSelectedColor,
      className: a()({
        [h.tabPageLarge]: l,
        [h.tabPageSmall]: !l,
        [h.tabSelected]: e,
        [h.tabNotSelected]: !e
      }),
      onClick: i,
      children: t
    })
  }
}
class E extends Chunk473749.PureComponent {
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
    } = this.state, i = Object.keys(t);
    return 1 === i.length ? null : (0, r.jsxs)(c.Z, {
      className: h.tabs,
      children: [(0, r.jsx)("div", {
        className: h.separator
      }), i.map(t => (0, r.jsx)(_, {
        active: t === n,
        onClick: () => this.handleSelectOperatingSystem(t),
        pageSize: e,
        children: function(e) {
          switch (e) {
            case g.TaA.WINDOWS:
              return m.intl.string(m.t["0/xHFO"]);
            case g.TaA.MACOS:
              return m.intl.string(m.t.E4u4n5);
            case g.TaA.LINUX:
              return m.intl.string(m.t.tcawo3)
          }
        }(t)
      }, t))]
    })
  }
  renderRequirementsSection(e, t) {
    if (null == e) return null;
    let n = [{
      key: m.intl.string(m.t["0TcHzv"]),
      value: e.operating_system_version
    }, {
      key: m.intl.string(m.t.eOX6Hq),
      value: e.cpu
    }, {
      key: m.intl.string(m.t["+WJ5XQ"]),
      value: null != e.ram ? m.intl.formatToPlainString(m.t.RNRSl6, {
        size: (0, u.BU)(1e3 * e.ram, {
          showDecimalForGB: false
        })
      }) : null
    }, {
      key: m.intl.string(m.t["+3s/V/"]),
      value: e.gpu
    }, {
      key: m.intl.string(m.t["L+x5wB"]),
      value: null != e.disk ? (0, u.BU)(1e3 * e.disk, {
        showDecimalForGB: false
      }) : null
    }, {
      key: m.intl.string(m.t["Ghp2/B"]),
      value: e.sound_card
    }, {
      key: m.intl.string(m.t["+w6nJg"]),
      value: e.network
    }, {
      key: m.intl.string(m.t.Au3Vbp),
      value: e.notes
    }].map((e, t) => {
      let n = null != e.value ? e.value.trim() : null;
      return null == n || 0 === n.length ? null : (0, r.jsxs)("div", {
        className: h.requirement,
        children: [(0, r.jsxs)("span", {
          className: h.requirementKey,
          children: [e.key, ":"]
        }), n]
      }, t)
    }).filter(d.lm);
    return (0, r.jsxs)("div", {
      className: h.requirements,
      children: [(0, r.jsx)(s.Z, {
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
    return (0, r.jsxs)("div", {
      className: h.requirementsContainer,
      children: [this.renderRequirementsSection(e, m.intl.string(m.t.QCCMXE)), this.renderRequirementsSection(t, m.intl.string(m.t.He39wq))]
    })
  }
  render() {
    return (0, r.jsxs)("div", {
      className: this.props.className,
      children: [(0, r.jsx)(s.Z, {
        children: m.intl.string(m.t.IkOAol)
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
    for (let e of n) b[e] === t && (r = e);
    this.state = {
      selectedOperatingSystem: r
    }
  }
}
let O = E