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
let m = {
  [Chunk652215.uje.WINDOWS]: Chunk723702.PlatformTypes.WINDOWS,
  [Chunk652215.uje.MACOS]: Chunk723702.PlatformTypes.OSX,
  [Chunk652215.uje.LINUX]: Chunk723702.PlatformTypes.LINUX
};
class b extends Chunk64700.PureComponent {
  render() {
    let {
      active: e,
      children: t,
      pageSize: n,
      onClick: i
    } = this.props, l = n === f.q.LARGE;
    return (0, r.jsx)(s.$n, {
      size: l ? s.$n.Sizes.MIN : s.$n.Sizes.LARGE,
      fullWidth: !l,
      color: e ? g.gl : g.Hu,
      className: a()({
        [g.AA]: l,
        [g.Wt]: !l,
        [g.jP]: e,
        [g.I7]: !e
      }),
      onClick: i,
      children: t
    })
  }
}
class _ extends Chunk64700.PureComponent {
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
      className: g.vR,
      children: [(0, r.jsx)("div", {
        className: g.me
      }), i.map(t => (0, r.jsx)(b, {
        active: t === n,
        onClick: () => this.handleSelectOperatingSystem(t),
        pageSize: e,
        children: function(e) {
          switch (e) {
            case h.uje.WINDOWS:
              return A.intl.string(A.t["0/xHFO"]);
            case h.uje.MACOS:
              return A.intl.string(A.t.E4u4n5);
            case h.uje.LINUX:
              return A.intl.string(A.t.tcawo3)
          }
        }(t)
      }, t))]
    })
  }
  renderRequirementsSection(e, t) {
    if (null == e) return null;
    let n = [{
      key: A.intl.string(A.t["0TcHzv"]),
      value: e.operating_system_version
    }, {
      key: A.intl.string(A.t.eOX6Hq),
      value: e.cpu
    }, {
      key: A.intl.string(A.t["+WJ5XQ"]),
      value: null != e.ram ? A.intl.formatToPlainString(A.t.RNRSl6, {
        size: (0, u.Xq)(1e3 * e.ram, {
          showDecimalForGB: false
        })
      }) : null
    }, {
      key: A.intl.string(A.t["+3s/V/"]),
      value: e.gpu
    }, {
      key: A.intl.string(A.t["L+x5wB"]),
      value: null != e.disk ? (0, u.Xq)(1e3 * e.disk, {
        showDecimalForGB: false
      }) : null
    }, {
      key: A.intl.string(A.t["Ghp2/B"]),
      value: e.sound_card
    }, {
      key: A.intl.string(A.t["+w6nJg"]),
      value: e.network
    }, {
      key: A.intl.string(A.t.Au3Vbp),
      value: e.notes
    }].map((e, t) => {
      let n = null != e.value ? e.value.trim() : null;
      return null == n || 0 === n.length ? null : (0, r.jsxs)("div", {
        className: g.aS,
        children: [(0, r.jsxs)("span", {
          className: g.D8,
          children: [e.key, ":"]
        }), n]
      }, t)
    }).filter(d.Vq);
    return (0, r.jsxs)("div", {
      className: g.Ln,
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
      className: g.GQ,
      children: [this.renderRequirementsSection(e, A.intl.string(A.t.QCCMXE)), this.renderRequirementsSection(t, A.intl.string(A.t.He39wq))]
    })
  }
  render() {
    return (0, r.jsxs)("div", {
      className: this.props.className,
      children: [(0, r.jsx)(o.A, {
        children: A.intl.string(A.t.IkOAol)
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
    for (const e of n) m[e] === t && (r = e);
    this.state = {
      selectedOperatingSystem: r
    }
  }
}
let E = _