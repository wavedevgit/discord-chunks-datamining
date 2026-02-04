/** Chunk was on 21738 **/
/** chunk id: 897550, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
}), require("./733351.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk421380 = require("./421380.js"),
  Chunk481859 = require("./481859.jsx"),
  Chunk235986 = require("./235986.jsx"),
  Chunk255438 = require("./255438.js"),
  Chunk403362 = require("./403362.js"),
  Chunk723702 = require("./723702.js"),
  Chunk590858 = require("./590858.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk918704 = require("./918704.js");
let A = {
  [Chunk652215.uje.WINDOWS]: Chunk723702.PlatformTypes.WINDOWS,
  [Chunk652215.uje.MACOS]: Chunk723702.PlatformTypes.OSX,
  [Chunk652215.uje.LINUX]: Chunk723702.PlatformTypes.LINUX
};
class _ extends Chunk64700.PureComponent {
  render() {
    let {
      active: e,
      children: t,
      pageSize: n,
      onClick: i
    } = this.props, l = n === h.q.LARGE;
    return (0, r.jsx)(s.$n, {
      size: l ? s.$n.Sizes.MIN : s.$n.Sizes.LARGE,
      fullWidth: !l,
      color: e ? m.gl : m.Hu,
      className: a()({
        [m.AA]: l,
        [m.Wt]: !l,
        [m.jP]: e,
        [m.I7]: !e
      }),
      onClick: i,
      children: t
    })
  }
}
class b extends Chunk64700.PureComponent {
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
    return 1 === i.length ? null : (0, r.jsxs)(c.A, {
      className: m.vR,
      children: [(0, r.jsx)("div", {
        className: m.me
      }), i.map(t => (0, r.jsx)(_, {
        active: t === n,
        onClick: () => this.handleSelectOperatingSystem(t),
        pageSize: e,
        children: function(e) {
          switch (e) {
            case f.uje.WINDOWS:
              return g.intl.string(g.t["0/xHFO"]);
            case f.uje.MACOS:
              return g.intl.string(g.t.E4u4n5);
            case f.uje.LINUX:
              return g.intl.string(g.t.tcawo3)
          }
        }(t)
      }, t))]
    })
  }
  renderRequirementsSection(e, t) {
    if (null == e) return null;
    let n = [{
      key: g.intl.string(g.t["0TcHzv"]),
      value: e.operating_system_version
    }, {
      key: g.intl.string(g.t.eOX6Hq),
      value: e.cpu
    }, {
      key: g.intl.string(g.t["+WJ5XQ"]),
      value: null != e.ram ? g.intl.formatToPlainString(g.t.RNRSl6, {
        size: (0, u.Xq)(1e3 * e.ram, {
          showDecimalForGB: false
        })
      }) : null
    }, {
      key: g.intl.string(g.t["+3s/V/"]),
      value: e.gpu
    }, {
      key: g.intl.string(g.t["L+x5wB"]),
      value: null != e.disk ? (0, u.Xq)(1e3 * e.disk, {
        showDecimalForGB: false
      }) : null
    }, {
      key: g.intl.string(g.t["Ghp2/B"]),
      value: e.sound_card
    }, {
      key: g.intl.string(g.t["+w6nJg"]),
      value: e.network
    }, {
      key: g.intl.string(g.t.Au3Vbp),
      value: e.notes
    }].map((e, t) => {
      let n = null != e.value ? e.value.trim() : null;
      return null == n || 0 === n.length ? null : (0, r.jsxs)("div", {
        className: m.aS,
        children: [(0, r.jsxs)("span", {
          className: m.D8,
          children: [e.key, ":"]
        }), n]
      }, t)
    }).filter(d.Vq);
    return (0, r.jsxs)("div", {
      className: m.Ln,
      children: [(0, r.jsx)(o.A, {
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
      className: m.GQ,
      children: [this.renderRequirementsSection(e, g.intl.string(g.t.QCCMXE)), this.renderRequirementsSection(t, g.intl.string(g.t.He39wq))]
    })
  }
  render() {
    return (0, r.jsxs)("div", {
      className: this.props.className,
      children: [(0, r.jsx)(o.A, {
        children: g.intl.string(g.t.IkOAol)
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
    const t = (0, p.getPlatform)(),
      n = Object.keys(e.systemRequirements);
    let r = n[0];
    for (const e of n) A[e] === t && (r = e);
    this.state = {
      selectedOperatingSystem: r
    }
  }
}
let E = b