/** Chunk was on 32098 **/
n.d(t, {
  E: () => I,
  Z: () => Z
}), n(47120), n(653041);
var r, i = n(200651),
  l = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(748780),
  c = n(442837),
  u = n(692547),
  d = n(215569),
  p = n(481060),
  h = n(812206),
  f = n(707409),
  g = n(703656),
  m = n(417363),
  b = n(941128),
  v = n(780570),
  y = n(353042),
  _ = n(981631),
  O = n(388032),
  j = n(707057);

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function x(e) {
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
let P = {
  [_.vxO.INSTALLING]: {
    [f.J6.NONE]: (e, t) => O.NW.formatToPlainString(O.t["p+2sEx"], {
      name: e
    }),
    [f.J6.SECONDS]: (e, t) => O.NW.formatToPlainString(O.t["/0NgPD"], {
      name: e,
      timeRemaining: t
    }),
    [f.J6.MINUTES]: (e, t) => O.NW.formatToPlainString(O.t.ZIwMzs, {
      name: e,
      timeRemaining: t
    }),
    [f.J6.HOURS]: (e, t) => O.NW.formatToPlainString(O.t["3IQDUl"], {
      name: e,
      timeRemaining: t
    })
  },
  [_.vxO.UPDATING]: {
    [f.J6.NONE]: (e, t) => O.NW.formatToPlainString(O.t["6F9QzM"], {
      name: e
    }),
    [f.J6.SECONDS]: (e, t) => O.NW.formatToPlainString(O.t["2OVgVl"], {
      name: e,
      timeRemaining: t
    }),
    [f.J6.MINUTES]: (e, t) => O.NW.formatToPlainString(O.t.mgQg1N, {
      name: e,
      timeRemaining: t
    }),
    [f.J6.HOURS]: (e, t) => O.NW.formatToPlainString(O.t["aTdq4+"], {
      name: e,
      timeRemaining: t
    })
  },
  [_.vxO.REPAIRING]: {
    [f.J6.NONE]: (e, t) => O.NW.formatToPlainString(O.t["p+2sEx"], {
      name: e
    }),
    [f.J6.SECONDS]: (e, t) => O.NW.formatToPlainString(O.t["/0NgPD"], {
      name: e,
      timeRemaining: t
    }),
    [f.J6.MINUTES]: (e, t) => O.NW.formatToPlainString(O.t.ZIwMzs, {
      name: e,
      timeRemaining: t
    }),
    [f.J6.HOURS]: (e, t) => O.NW.formatToPlainString(O.t["3IQDUl"], {
      name: e,
      timeRemaining: t
    })
  }
};
class S extends l.PureComponent {
  renderText() {
    let {
      state: e,
      isPaused: t
    } = this.props;
    if (e.type === _.vxO.UPDATING || e.type === _.vxO.REPAIRING || e.type === _.vxO.INSTALLING) {
      if (t) return O.NW.string(O.t["5oxtFR"]);
      if (e.stage === _.f07.PATCHING || e.stage === _.f07.REPAIRING) return (0, i.jsx)(y.Z, {
        getHistoricalTotalBytes: m.Z.getHistoricalTotalBytesWritten,
        updateInterval: 5e3,
        children: this.renderProgressBody
      })
    }
    return null
  }
  render() {
    let e = this.renderText();
    return null != e ? e : O.NW.string(O.t.cw57am)
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
        u = P[a],
        d = null != u ? Object.keys(u) : [],
        {
          unit: p,
          time: h
        } = (0, f.CI)(null != c ? c / 60 : null, d);
      if (null != u && null != p) {
        let e = u[p];
        return null != e ? e(r.name, h) : null
      }
      return null
    })
  }
}
class N extends(r = l.PureComponent) {
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
    return null == e || null == t ? O.NW.string(O.t.cw57am) : (0, i.jsx)(S, {
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
      className: a()(n, j.progressContainer),
      onClick: this.handleOnClick,
      children: (0, i.jsx)(p.ua7, {
        text: this.getTooltipText(),
        position: "right",
        "aria-label": !1,
        children: n => {
          var r, l;
          return (0, i.jsx)("div", (r = x({}, n), l = l = {
            children: (0, i.jsx)(p._3P, {
              percent: e,
              colorOverride: t ? u.Z.unsafe_rawColors.PRIMARY_500.css : null,
              children: (0, i.jsx)(p._8t, {
                size: "md",
                color: "currentColor",
                className: j.downloadIcon
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
        }
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
      e.preventDefault(), e.stopPropagation(), null != t && t(e), (0, g.uL)(_.Z5c.APPLICATION_LIBRARY)
    })
  }
}

function I(e, t) {
  return e.reduce((e, n) => {
    let {
      applicationId: r,
      branchId: i
    } = n, l = t.getState(r, i);
    return null != l && e.push(l), e
  }, [])
}
C(N, "defaultProps", {
  strokeSize: p._3P.StrokeSizes.MEDIUM
});
let Z = c.ZP.connectStores([b.Z, m.Z, h.Z], () => {
  let e = b.Z.activeItems,
    t = I(e, m.Z),
    {
      total: n,
      progress: r
    } = v.lK(t);
  return {
    percent: v.xI(r, n),
    isPaused: b.Z.paused,
    firstApplication: e.length > 0 ? h.Z.getApplication(e[0].applicationId) : null,
    firstState: t.length > 0 ? t[0] : null
  }
})(e => {
  var {
    determineOwnVisibility: t = !0
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
    children: n.percent > 0 && n.percent < 100 ? (0, i.jsx)(N, x({}, n)) : null
  }) : (0, i.jsx)(N, x({}, n))
})