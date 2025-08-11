/** Chunk was on 34779 **/
/** chunk id: 339149, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => P,
  Z: () => N
}), require("./388685.js"), require("./539854.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk748780 = require("./748780.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk215569 = require("./215569.js"),
  Chunk481060 = require("./481060.js"),
  Chunk812206 = require("./812206.js"),
  Chunk707409 = require("./707409.js"),
  Chunk703656 = require("./703656.js"),
  Chunk417363 = require("./417363.js"),
  Chunk941128 = require("./941128.js"),
  Chunk780570 = require("./780570.js"),
  Chunk353042 = require("./353042.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk496614 = require("./496614.js");

function j(e, t, n) {
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
      j(e, t, n[t])
    })
  }
  return e
}
let S = {
  [Chunk981631.vxO.INSTALLING]: {
    [Chunk707409.J6.NONE]: (e, t) => C.intl.formatToPlainString(C.t["p+2sEx"], {
      name: e
    }),
    [Chunk707409.J6.SECONDS]: (e, t) => C.intl.formatToPlainString(C.t["/0NgPD"], {
      name: e,
      timeRemaining: t
    }),
    [Chunk707409.J6.MINUTES]: (e, t) => C.intl.formatToPlainString(C.t.ZIwMzs, {
      name: e,
      timeRemaining: t
    }),
    [Chunk707409.J6.HOURS]: (e, t) => C.intl.formatToPlainString(C.t["3IQDUl"], {
      name: e,
      timeRemaining: t
    })
  },
  [Chunk981631.vxO.UPDATING]: {
    [Chunk707409.J6.NONE]: (e, t) => C.intl.formatToPlainString(C.t["6F9QzM"], {
      name: e
    }),
    [Chunk707409.J6.SECONDS]: (e, t) => C.intl.formatToPlainString(C.t["2OVgVl"], {
      name: e,
      timeRemaining: t
    }),
    [Chunk707409.J6.MINUTES]: (e, t) => C.intl.formatToPlainString(C.t.mgQg1N, {
      name: e,
      timeRemaining: t
    }),
    [Chunk707409.J6.HOURS]: (e, t) => C.intl.formatToPlainString(C.t["aTdq4+"], {
      name: e,
      timeRemaining: t
    })
  },
  [Chunk981631.vxO.REPAIRING]: {
    [Chunk707409.J6.NONE]: (e, t) => C.intl.formatToPlainString(C.t["p+2sEx"], {
      name: e
    }),
    [Chunk707409.J6.SECONDS]: (e, t) => C.intl.formatToPlainString(C.t["/0NgPD"], {
      name: e,
      timeRemaining: t
    }),
    [Chunk707409.J6.MINUTES]: (e, t) => C.intl.formatToPlainString(C.t.ZIwMzs, {
      name: e,
      timeRemaining: t
    }),
    [Chunk707409.J6.HOURS]: (e, t) => C.intl.formatToPlainString(C.t["3IQDUl"], {
      name: e,
      timeRemaining: t
    })
  }
};
class x extends Chunk73800.PureComponent {
  renderText() {
    let {
      state: e,
      isPaused: t
    } = this.props;
    if (module.type === Chunk981631.vxO.UPDATING || module.type === Chunk981631.vxO.REPAIRING || module.type === Chunk981631.vxO.INSTALLING) {
      if (exports) return Chunk388032.intl.string(Chunk388032.t["5oxtFR"]);
      else if (module.stage === Chunk981631.f07.PATCHING || module.stage === Chunk981631.f07.REPAIRING) return <Chunk353042.Z getHistoricalTotalBytes={Chunk417363.Z.getHistoricalTotalBytesWritten} updateInterval={5e3}>{this.renderProgressBody}</Chunk353042.Z>
    }
    return null
  }
  render() {
    let e = this.renderText();
    return null != module ? module : Chunk388032.intl.string(Chunk388032.t.cw57am)
  }
  constructor(...e) {
    super(...e), j(this, "renderProgressBody", (e, t) => {
      let {
        state: n,
        application: r
      } = this.props, {
        stage: i,
        progress: l,
        total: o,
        type: s
      } = n;
      if (null == l || null == o || null == i) return null;
      let a = e[e.length - 1] / t * 1e3,
        c = 0 !== a ? Math.max(1, (o - l) / a) : null,
        u = S[s],
        d = null != u ? Object.keys(u) : [],
        {
          unit: h,
          time: p
        } = (0, f.CI)(null != c ? c / 60 : null, d);
      if (null != u && null != h) {
        let e = u[h];
        return null != e ? e(r.name, p) : null
      }
      return null
    })
  }
}
class I extends(r = Chunk73800.PureComponent) {
  componentWillAppear(e) {
    this.state.animationScale.setValue(1), e()
  }
  componentWillEnter(e) {
    a.Z.spring(this.state.animationScale, {
      toValue: 1,
      duration: 200
    }).start(e)
  }
  componentWillLeave(e) {
    a.Z.spring(this.state.animationScale, {
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
    return null == module || null == exports ? Chunk388032.intl.string(Chunk388032.t.cw57am) : <x application={module} state={exports} isPaused={require} />
  }
  render() {
    let {
      percent: e,
      isPaused: t,
      className: n
    } = this.props;
    return <Chunk748780.Z.div style={{
        transform: [{
          scale: this.state.animationScale
        }]
      }} className={s()(require, Chunk496614.progressContainer)} onClick={this.handleOnClick}><Chunk481060.ua7 text={this.getTooltipText()} position={"right"} aria-label={false}>{n => {
          var r, l;
          return (0, i.jsx)("div", (r = E({}, n), l = l = {
            children: (0, i.jsx)(h._3P, {
              percent: e,
              colorOverride: t ? u.Z.unsafe_rawColors.PRIMARY_500.css : null,
              children: (0, i.jsx)(h._8t, {
                size: "md",
                color: "currentColor",
                className: v.downloadIcon
              })
            })
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
          }), r))
        }}</Chunk481060.ua7></Chunk748780.Z.div>
  }
  constructor(...e) {
    super(...e), j(this, "state", {
      animationScale: new a.Z.Value(0)
    }), j(this, "handleOnClick", e => {
      let {
        onClick: t
      } = this.props;
      e.preventDefault(), e.stopPropagation(), null != t && t(e), (0, g.uL)(y.Z5c.APPLICATION_LIBRARY)
    })
  }
}

function P(e, t) {
  return e.reduce((e, n) => {
    let {
      applicationId: r,
      branchId: i
    } = n, l = t.getState(r, i);
    return null != l && e.push(l), e
  }, [])
}
j(I, "defaultProps", {
  strokeSize: Chunk481060._3P.StrokeSizes.MEDIUM
});
let N = Chunk442837.ZP.connectStores([Chunk941128.Z, Chunk417363.Z, Chunk812206.Z], () => {
  let e = Chunk941128.Z.activeItems,
    t = P(module, Chunk417363.Z),
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
  return t ? <d.W component={l.Fragment}>{n.percent > 0 && n.percent < 100 ? (0, i.jsx)(I, E({}, n)) : null}</d.W> : <I{...E({}, n)} />
})