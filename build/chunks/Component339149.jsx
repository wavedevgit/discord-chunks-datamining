/** Chunk was on 67000 **/
/** chunk id: 339149, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => N,
  Z: () => Z
}), require("./388685.js"), require("./539854.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk145606 = require("./145606.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}
let _ = {
  [Chunk981631.vxO.INSTALLING]: {
    [Chunk707409.J6.NONE]: (e, t) => C.intl.formatToPlainString(C.t["p+2sE+"], {
      name: e
    }),
    [Chunk707409.J6.SECONDS]: (e, t) => C.intl.formatToPlainString(C.t["/0NgPI"], {
      name: e,
      timeRemaining: t
    }),
    [Chunk707409.J6.MINUTES]: (e, t) => C.intl.formatToPlainString(C.t.ZIwMzr, {
      name: e,
      timeRemaining: t
    }),
    [Chunk707409.J6.HOURS]: (e, t) => C.intl.formatToPlainString(C.t["3IQDUi"], {
      name: e,
      timeRemaining: t
    })
  },
  [Chunk981631.vxO.UPDATING]: {
    [Chunk707409.J6.NONE]: (e, t) => C.intl.formatToPlainString(C.t["6F9QzC"], {
      name: e
    }),
    [Chunk707409.J6.SECONDS]: (e, t) => C.intl.formatToPlainString(C.t["2OVgVq"], {
      name: e,
      timeRemaining: t
    }),
    [Chunk707409.J6.MINUTES]: (e, t) => C.intl.formatToPlainString(C.t.mgQg1L, {
      name: e,
      timeRemaining: t
    }),
    [Chunk707409.J6.HOURS]: (e, t) => C.intl.formatToPlainString(C.t.aTdq44, {
      name: e,
      timeRemaining: t
    })
  },
  [Chunk981631.vxO.REPAIRING]: {
    [Chunk707409.J6.NONE]: (e, t) => C.intl.formatToPlainString(C.t["p+2sE+"], {
      name: e
    }),
    [Chunk707409.J6.SECONDS]: (e, t) => C.intl.formatToPlainString(C.t["/0NgPI"], {
      name: e,
      timeRemaining: t
    }),
    [Chunk707409.J6.MINUTES]: (e, t) => C.intl.formatToPlainString(C.t.ZIwMzr, {
      name: e,
      timeRemaining: t
    }),
    [Chunk707409.J6.HOURS]: (e, t) => C.intl.formatToPlainString(C.t["3IQDUi"], {
      name: e,
      timeRemaining: t
    })
  }
};
class I extends Chunk473749.PureComponent {
  renderText() {
    let {
      state: e,
      isPaused: t
    } = this.props;
    if (e.type === j.vxO.UPDATING || e.type === j.vxO.REPAIRING || e.type === j.vxO.INSTALLING) {
      if (t) return C.intl.string(C.t["5oxtFS"]);
      else if (e.stage === j.f07.PATCHING || e.stage === j.f07.REPAIRING) return (0, i.jsx)(v.Z, {
        getHistoricalTotalBytes: m.Z.getHistoricalTotalBytesWritten,
        updateInterval: 5e3,
        children: this.renderProgressBody
      })
    }
    return null
  }
  render() {
    let e = this.renderText();
    return null != e ? e : C.intl.string(C.t.cw57ar)
  }
  constructor(...e) {
    super(...e), E(this, "renderProgressBody", (e, t) => {
      let {
        state: n,
        application: r
      } = this.props, {
        stage: i,
        progress: l,
        total: a,
        type: o
      } = n;
      if (null == l || null == a || null == i) return null;
      let s = e[e.length - 1] / t * 1e3,
        c = 0 !== s ? Math.max(1, (a - l) / s) : null,
        u = _[o],
        d = null != u ? Object.keys(u) : [],
        {
          unit: f,
          time: h
        } = (0, g.CI)(null != c ? c / 60 : null, d);
      if (null != u && null != f) {
        let e = u[f];
        return null != e ? e(r.name, h) : null
      }
      return null
    })
  }
}
class P extends(r = Chunk473749.PureComponent) {
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
    return null == e || null == t ? C.intl.string(C.t.cw57ar) : (0, i.jsx)(I, {
      application: e,
      state: t,
      isPaused: n
    })
  }
  render() {
    let {
      percent: e,
      isPaused: t,
      className: n
    } = this.props;
    return (0, i.jsx)(s.Z.div, {
      style: {
        transform: [{
          scale: this.state.animationScale
        }]
      },
      className: o()(n, x.progressContainer),
      onClick: this.handleOnClick,
      children: (0, i.jsx)(f.u, {
        __unsupportedReactNodeAsText: this.getTooltipText(),
        position: "right",
        "aria-label": false,
        children: (0, i.jsx)("div", {
          children: (0, i.jsx)(h._3P, {
            percent: e,
            colorOverride: t ? u.Z.unsafe_rawColors.PRIMARY_500.css : null,
            children: (0, i.jsx)(h._8t, {
              size: "md",
              color: "currentColor",
              className: x.downloadIcon
            })
          })
        })
      })
    })
  }
  constructor(...e) {
    super(...e), E(this, "state", {
      animationScale: new s.Z.Value(0)
    }), E(this, "handleOnClick", e => {
      let {
        onClick: t
      } = this.props;
      e.preventDefault(), e.stopPropagation(), null != t && t(e), (0, b.uL)(j.Z5c.APPLICATION_LIBRARY)
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
E(P, "defaultProps", {
  strokeSize: Chunk481060._3P.StrokeSizes.MEDIUM
});
let Z = Chunk442837.ZP.connectStores([Chunk941128.Z, Chunk417363.Z, Chunk812206.Z], () => {
  let e = y.Z.activeItems,
    t = N(e, m.Z),
    {
      total: n,
      progress: r
    } = O.lK(t);
  return {
    percent: O.xI(r, n),
    isPaused: y.Z.paused,
    firstApplication: e.length > 0 ? p.Z.getApplication(e[0].applicationId) : null,
    firstState: t.length > 0 ? t[0] : null
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
    children: n.percent > 0 && n.percent < 100 ? (0, i.jsx)(P, S({}, n)) : null
  }) : (0, i.jsx)(P, S({}, n))
})