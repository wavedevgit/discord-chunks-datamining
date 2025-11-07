/** Chunk was on 31899 **/
/** chunk id: 339149, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => N,
  Z: () => Z
}), require("./388685.js"), require("./539854.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk748780 = require("./748780.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk215569 = require("./215569.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk812206 = require("./812206.js"),
  Chunk707409 = require("./707409.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk417363 = require("./417363.js"),
  Chunk941128 = require("./941128.js"),
  Chunk780570 = require("./780570.js"),
  Chunk353042 = require("./353042.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk820093 = require("./820093.js");

function C(e, t, n) {
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
      C(e, t, n[t])
    })
  }
  return e
}
let S = {
  [Chunk981631.vxO.INSTALLING]: {
    [Chunk707409.J6.NONE]: (e, t) => j.intl.formatToPlainString(j.t["p+2sE+"], {
      name: e
    }),
    [Chunk707409.J6.SECONDS]: (e, t) => j.intl.formatToPlainString(j.t["/0NgPI"], {
      name: e,
      timeRemaining: t
    }),
    [Chunk707409.J6.MINUTES]: (e, t) => j.intl.formatToPlainString(j.t.ZIwMzr, {
      name: e,
      timeRemaining: t
    }),
    [Chunk707409.J6.HOURS]: (e, t) => j.intl.formatToPlainString(j.t["3IQDUi"], {
      name: e,
      timeRemaining: t
    })
  },
  [Chunk981631.vxO.UPDATING]: {
    [Chunk707409.J6.NONE]: (e, t) => j.intl.formatToPlainString(j.t["6F9QzC"], {
      name: e
    }),
    [Chunk707409.J6.SECONDS]: (e, t) => j.intl.formatToPlainString(j.t["2OVgVq"], {
      name: e,
      timeRemaining: t
    }),
    [Chunk707409.J6.MINUTES]: (e, t) => j.intl.formatToPlainString(j.t.mgQg1L, {
      name: e,
      timeRemaining: t
    }),
    [Chunk707409.J6.HOURS]: (e, t) => j.intl.formatToPlainString(j.t.aTdq44, {
      name: e,
      timeRemaining: t
    })
  },
  [Chunk981631.vxO.REPAIRING]: {
    [Chunk707409.J6.NONE]: (e, t) => j.intl.formatToPlainString(j.t["p+2sE+"], {
      name: e
    }),
    [Chunk707409.J6.SECONDS]: (e, t) => j.intl.formatToPlainString(j.t["/0NgPI"], {
      name: e,
      timeRemaining: t
    }),
    [Chunk707409.J6.MINUTES]: (e, t) => j.intl.formatToPlainString(j.t.ZIwMzr, {
      name: e,
      timeRemaining: t
    }),
    [Chunk707409.J6.HOURS]: (e, t) => j.intl.formatToPlainString(j.t["3IQDUi"], {
      name: e,
      timeRemaining: t
    })
  }
};
class I extends Chunk647438.PureComponent {
  renderText() {
    let {
      state: e,
      isPaused: t
    } = this.props;
    if (module.type === Chunk981631.vxO.UPDATING || module.type === Chunk981631.vxO.REPAIRING || module.type === Chunk981631.vxO.INSTALLING) {
      if (exports) return Chunk388032.intl.string(Chunk388032.t["5oxtFS"]);
      else if (module.stage === Chunk981631.f07.PATCHING || module.stage === Chunk981631.f07.REPAIRING) return (0, Chunk951288.jsx)(Chunk353042.Z, {
        getHistoricalTotalBytes: Chunk417363.Z.getHistoricalTotalBytesWritten,
        updateInterval: 5e3,
        children: this.renderProgressBody
      })
    }
    return null
  }
  render() {
    let e = this.renderText();
    return null != module ? module : Chunk388032.intl.string(Chunk388032.t.cw57ar)
  }
  constructor(...e) {
    super(...e), C(this, "renderProgressBody", (e, t) => {
      let {
        state: n,
        application: r
      } = this.props, {
        stage: i,
        progress: l,
        total: o,
        type: a
      } = n;
      if (null == l || null == o || null == i) return null;
      let s = e[e.length - 1] / t * 1e3,
        c = 0 !== s ? Math.max(1, (o - l) / s) : null,
        u = S[a],
        d = null != u ? Object.keys(u) : [],
        {
          unit: p,
          time: h
        } = (0, g.CI)(null != c ? c / 60 : null, d);
      if (null != u && null != p) {
        let e = u[p];
        return null != e ? e(r.name, h) : null
      }
      return null
    })
  }
}
class P extends(r = Chunk647438.PureComponent) {
  componentWillAppear(e) {
    this.state.animationScale.setValue(1), e()
  }
  componentWillEnter(e) {
    s.Z.spring(this.state.animationScale, {
      toValue: 1,
      duration: 200
    }).start(e)
  }
  componentWillLeave(e) {
    s.Z.spring(this.state.animationScale, {
      toValue: 0,
      duration: 200
    }).start(e)
  }
  getTooltipText() {
    let {
      firstApplication: e,
      firstState: t,
      isPaused: n
    } = this.props;
    return null == module || null == exports ? Chunk388032.intl.string(Chunk388032.t.cw57ar) : (0, Chunk951288.jsx)(I, {
      application: module,
      state: exports,
      isPaused: require
    })
  }
  render() {
    let {
      percent: e,
      isPaused: t,
      className: n
    } = this.props;
    return (0, Chunk951288.jsx)(Chunk748780.Z.div, {
      style: {
        transform: [{
          scale: this.state.animationScale
        }]
      },
      className: a()(require, Chunk820093.progressContainer),
      onClick: this.handleOnClick,
      children: (0, Chunk951288.jsx)(Chunk28664.u, {
        __unsupportedReactNodeAsText: this.getTooltipText(),
        position: "right",
        "aria-label": false,
        children: (0, Chunk951288.jsx)("div", {
          children: (0, Chunk951288.jsx)(Chunk481060._3P, {
            percent: module,
            colorOverride: exports ? Chunk692547.Z.unsafe_rawColors.PRIMARY_500.css : null,
            children: (0, Chunk951288.jsx)(Chunk481060._8t, {
              size: "md",
              color: "currentColor",
              className: Chunk820093.downloadIcon
            })
          })
        })
      })
    })
  }
  constructor(...e) {
    super(...e), C(this, "state", {
      animationScale: new s.Z.Value(0)
    }), C(this, "handleOnClick", e => {
      let {
        onClick: t
      } = this.props;
      e.preventDefault(), e.stopPropagation(), null != t && t(e), (0, m.uL)(v.Z5c.APPLICATION_LIBRARY)
    })
  }
}

function N(e, t) {
  return e.reduce((e, n) => {
    let {
      applicationId: r,
      branchId: i
    } = n, l = t.getState(r, i);
    return null != l && e.push(l), e
  }, [])
}
C(P, "defaultProps", {
  strokeSize: Chunk481060._3P.StrokeSizes.MEDIUM
});
let Z = Chunk442837.ZP.connectStores([Chunk941128.Z, Chunk417363.Z, Chunk812206.Z], () => {
  let e = Chunk941128.Z.activeItems,
    t = N(module, Chunk417363.Z),
    {
      total: n,
      progress: r
    } = Chunk780570.lK(exports);
  return {
    percent: Chunk780570.xI(r, require),
    isPaused: Chunk941128.Z.paused,
    firstApplication: module.length > 0 ? Chunk812206.Z.getApplication(module[0].applicationId) : null,
    firstState: exports.length > 0 ? exports[0] : null
  }
})(e => {
  var {
    determineOwnVisibility: t = true
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["determineOwnVisibility"]);
  return t ? (0, i.jsx)(d.W, {
    component: l.Fragment,
    children: n.percent > 0 && n.percent < 100 ? (0, i.jsx)(P, E({}, n)) : null
  }) : (0, i.jsx)(P, E({}, n))
})