/** Chunk was on 1272 **/
/** chunk id: 530151, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ee
}), require("./415506.js"), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk239091 = require("./239091.js"),
  Chunk51025 = require("./51025.js"),
  Chunk785547 = require("./785547.jsx"),
  Chunk730749 = require("./730749.jsx"),
  Chunk112724 = require("./112724.jsx"),
  Chunk812206 = require("./812206.js"),
  Chunk44315 = require("./44315.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk167533 = require("./167533.jsx"),
  Chunk925329 = require("./925329.jsx"),
  Chunk707409 = require("./707409.jsx"),
  Chunk210887 = require("./210887.js"),
  Chunk283595 = require("./283595.js"),
  Chunk417363 = require("./417363.js"),
  Chunk941128 = require("./941128.js"),
  Chunk451478 = require("./451478.js"),
  Chunk424218 = require("./424218.js"),
  Chunk780570 = require("./780570.js"),
  Chunk353042 = require("./353042.js"),
  Chunk86826 = require("./86826.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk248241 = require("./248241.js");

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let U = e => {
    let {
      className: t,
      children: n,
      onContextMenu: i,
      item: l
    } = e;
    return (0, r.jsx)("div", {
      className: t,
      onContextMenu: e => i(e, l),
      children: n
    })
  },
  G = [Chunk692547.Z.unsafe_rawColors.BLUE_345.css, Chunk692547.Z.colors.INTERACTIVE_NORMAL.css],
  B = e => {
    let {
      tooltip: t,
      onClick: n,
      icon: i
    } = e;
    return (0, r.jsx)(f.ua7, {
      text: t,
      children: e => {
        let {
          onMouseEnter: l,
          onMouseLeave: a
        } = e;
        return (0, r.jsx)(p.zx, {
          "aria-label": t,
          className: k.actionButton,
          innerClassName: k.actionButtonContents,
          color: p.zx.Colors.PRIMARY,
          size: p.zx.Sizes.ICON,
          onClick: n,
          onMouseEnter: l,
          onMouseLeave: a,
          children: (0, r.jsx)(i, {
            className: k.actionIcon
          })
        })
      }
    })
  };

function V(e, t) {
  switch (t) {
    case R.f07.POST_INSTALL_SCRIPTS:
    case R.f07.PLANNING:
    case R.f07.FINALIZING:
    case R.f07.ALLOCATING_DISK:
      return "".concat(e);
    default:
      return (0, A.BU)(e, {
        useKibibytes: true
      })
  }
}
let H = {
  [Chunk981631.vxO.INSTALLING]: {
    [Chunk707409.J6.NONE]: (e, t, n, r) => D.intl.formatToPlainString(D.t.JfJt9f, {
      percent: e,
      progress: t,
      total: n
    }),
    [Chunk707409.J6.SECONDS]: (e, t, n, r) => D.intl.formatToPlainString(D.t["1z3c6e"], {
      percent: e,
      progress: t,
      total: n,
      timeRemaining: r
    }),
    [Chunk707409.J6.MINUTES]: (e, t, n, r) => D.intl.formatToPlainString(D.t.PCX509, {
      percent: e,
      progress: t,
      total: n,
      timeRemaining: r
    }),
    [Chunk707409.J6.HOURS]: (e, t, n, r) => D.intl.formatToPlainString(D.t["3VG9s7"], {
      percent: e,
      progress: t,
      total: n,
      timeRemaining: r
    })
  },
  [Chunk981631.vxO.UPDATING]: {
    [Chunk707409.J6.NONE]: (e, t, n, r) => D.intl.formatToPlainString(D.t.JsqXXF, {
      percent: e,
      progress: t,
      total: n
    }),
    [Chunk707409.J6.SECONDS]: (e, t, n, r) => D.intl.formatToPlainString(D.t["3BvVeX"], {
      percent: e,
      progress: t,
      total: n,
      timeRemaining: r
    }),
    [Chunk707409.J6.MINUTES]: (e, t, n, r) => D.intl.formatToPlainString(D.t.rwULn5, {
      percent: e,
      progress: t,
      total: n,
      timeRemaining: r
    }),
    [Chunk707409.J6.HOURS]: (e, t, n, r) => D.intl.formatToPlainString(D.t.adcitL, {
      percent: e,
      progress: t,
      total: n,
      timeRemaining: r
    })
  },
  [Chunk981631.vxO.REPAIRING]: {
    [Chunk707409.J6.NONE]: (e, t, n, r) => D.intl.formatToPlainString(D.t.JfJt9f, {
      percent: e,
      progress: t,
      total: n
    }),
    [Chunk707409.J6.SECONDS]: (e, t, n, r) => D.intl.formatToPlainString(D.t["1z3c6e"], {
      percent: e,
      progress: t,
      total: n,
      timeRemaining: r
    }),
    [Chunk707409.J6.MINUTES]: (e, t, n, r) => D.intl.formatToPlainString(D.t.PCX509, {
      percent: e,
      progress: t,
      total: n,
      timeRemaining: r
    }),
    [Chunk707409.J6.HOURS]: (e, t, n, r) => D.intl.formatToPlainString(D.t["3VG9s7"], {
      percent: e,
      progress: t,
      total: n,
      timeRemaining: r
    })
  }
};

function F(e, t, n, r, i) {
  let l = H[t],
    a = null != l ? Object.keys(l) : [],
    {
      unit: o,
      time: s
    } = (0, C.CI)(null != e ? e / 60 : null, a);
  if (null != l && null != o) {
    let e = l[o];
    return null != e ? e(n, r, i, s) : null
  }
  return null
}

function z(e) {
  let {
    type: t,
    stage: n,
    percent: r,
    progress: i,
    total: l,
    secondsRemaining: a
  } = e, o = V(l, n), s = V(i, n);
  switch (n) {
    case R.f07.QUEUED:
      if (0 === i) return D.intl.string(D.t.RpfBqa);
      return D.intl.formatToPlainString(D.t.uNjCXV, {
        percent: r,
        progress: s,
        total: o
      });
    case R.f07.PLANNING:
      return D.intl.formatToPlainString(D.t.sfuCUV, {
        percent: r
      });
    case R.f07.ALLOCATING_DISK:
      return D.intl.formatToPlainString(D.t.XigoJy, {
        percent: r
      });
    case R.f07.PATCHING:
      return F(a, t, r, s, o);
    case R.f07.FINALIZING:
      return D.intl.formatToPlainString(D.t["6PHDUF"], {
        percent: r
      });
    case R.f07.PAUSING:
      return D.intl.formatToPlainString(D.t.vjxhWl, {
        percent: r,
        progress: s,
        total: o
      });
    case R.f07.VERIFYING:
      return D.intl.formatToPlainString(D.t.bbilvr, {
        percent: r,
        progress: s,
        total: o
      });
    case R.f07.POST_INSTALL_SCRIPTS:
      return D.intl.formatToPlainString(D.t.c5vRUl, {
        percent: r,
        progress: s,
        total: o
      });
    case R.f07.REPAIRING:
      if (t === R.vxO.REPAIRING) return F(a, t, r, s, o);
      return D.intl.formatToPlainString(D.t.OCzETU, {
        percent: r,
        progress: s,
        total: o
      })
  }
  throw Error("Invalid Dispatch stage")
}
class W extends Chunk647438.PureComponent {
  get isFocused() {
    let {
      cellProps: e
    } = this.props;
    return null != module && module.isFocused
  }
  renderBody(e) {
    let {
      percent: t,
      foregroundColor: n,
      foregroundGradientColor: i,
      message: l
    } = e;
    return (0, r.jsxs)(v.Z, {
      direction: v.Z.Direction.VERTICAL,
      children: [(0, r.jsx)(f.Exd, {
        percent: t,
        size: f.Exd.Sizes.SMALL,
        foregroundColor: (0, y.Lq)(n),
        foregroundGradientColor: null != i ? [(0, y.Lq)(i[0]), (0, y.Lq)(i[1])] : true,
        animate: this.isFocused
      }), (0, r.jsx)("div", {
        className: k.progressCellText,
        children: null != l ? l : ""
      })]
    })
  }
  renderStackedProgress(e) {
    let {
      percents: t,
      message: n
    } = e;
    return (0, r.jsxs)(v.Z, {
      direction: v.Z.Direction.VERTICAL,
      children: [(0, r.jsx)(f.yGy, {
        percents: t,
        size: f.yGy.Sizes.SMALL,
        foregroundColors: G,
        animate: this.isFocused
      }), (0, r.jsx)("div", {
        className: k.progressCellText,
        children: null != n ? n : ""
      })]
    })
  }
  renderFinished() {
    let {
      item: e
    } = this.props;
    return this.renderBody({
      message: Chunk388032.intl.format(Chunk388032.t.z1oxGB, {
        remove: () => Chunk51025.wi(module.applicationId, module.branchId)
      }),
      foregroundColor: (0, Chunk780384.ap)(module.theme) ? Chunk981631.Ilk.PRIMARY_300 : Chunk981631.Ilk.PRIMARY_500,
      percent: 100
    })
  }
  renderQueued() {
    let e, t, {
      item: {
        state: n,
        theme: r
      }
    } = this.props;
    if (null != require) {
      let {
        progress: r,
        total: i,
        stage: l
      } = require;
      if (null != Chunk951288 && null != Chunk647438) {
        let n = V(Chunk647438, Chunk120356),
          a = V(Chunk951288, Chunk120356),
          o = Math.floor(t = Chunk780570.xI(Chunk951288, Chunk647438));
        e = Chunk120356 === Chunk981631.f07.PAUSING ? Chunk388032.intl.formatToPlainString(Chunk388032.t.vjxhWl, {
          percent: Chunk392711,
          progress: a,
          total: require
        }) : Chunk388032.intl.formatToPlainString(Chunk388032.t.voT3Bg, {
          percent: Chunk392711,
          progress: a,
          total: require
        })
      }
    }
    return (null == exports || null == module) && (t = 0, e = Chunk388032.intl.string(Chunk388032.t["qS+iKS"])), this.renderBody({
      percent: exports,
      foregroundColor: (0, Chunk780384.ap)(Chunk951288) ? Chunk981631.Ilk.PRIMARY_300 : Chunk981631.Ilk.PRIMARY_500,
      message: module
    })
  }
  renderPaused() {
    let {
      item: {
        state: e,
        theme: t
      }
    } = this.props;
    if (null == module) return null;
    let {
      progress: n,
      total: r
    } = module;
    if (null == require || null == Chunk951288) return null;
    let i = Chunk780570.xI(require, Chunk951288),
      l = Math.floor(Chunk647438),
      a = 0 === require && 1 === Chunk951288 ? Chunk388032.intl.string(Chunk388032.t["+pfsFR"]) : Chunk388032.intl.formatToPlainString(Chunk388032.t["+feX8f"], {
        percent: Chunk120356,
        progress: (0, Chunk424218.BU)(require),
        total: (0, Chunk424218.BU)(Chunk951288)
      });
    return this.renderBody({
      message: a,
      foregroundColor: (0, Chunk780384.ap)(exports) ? Chunk981631.Ilk.PRIMARY_300 : Chunk981631.Ilk.PRIMARY_500,
      percent: Chunk647438
    })
  }
  renderProgressPatching() {
    return (0, Chunk951288.jsx)(Chunk353042.Z, {
      getHistoricalTotalBytes: Chunk417363.Z.getHistoricalTotalBytesWritten,
      updateInterval: 5e3,
      children: this.renderProgressPatchingBody
    })
  }
  renderProgressDefault() {
    let {
      state: e
    } = this.props.item;
    if (null == module) return null;
    let {
      total: t,
      progress: n,
      stage: r,
      type: i
    } = module;
    if (null == exports || null == require || null == Chunk951288) return null;
    let l = Chunk780570.xI(require, exports),
      a = Math.floor(Chunk120356);
    return this.renderBody({
      percent: Chunk120356,
      message: z({
        type: Chunk647438,
        stage: Chunk951288,
        percent: a,
        progress: require,
        total: exports
      }),
      foregroundColor: Chunk981631.Ilk.BLUE_345
    })
  }
  renderProgress() {
    let {
      state: e
    } = this.props.item;
    switch (null != module ? module.stage : null) {
      case Chunk981631.f07.PATCHING:
      case Chunk981631.f07.REPAIRING:
        return this.renderProgressPatching();
      default:
        return this.renderProgressDefault()
    }
  }
  render() {
    let {
      item: e,
      cellProps: t
    } = this.props;
    if (module.finished) return this.renderFinished();
    if (module.index > 0) return this.renderQueued();
    if (null != module.state && (module.state.type === Chunk981631.vxO.UPDATING || module.state.type === Chunk981631.vxO.REPAIRING || module.state.type === Chunk981631.vxO.INSTALLING))
      if (null != exports && exports.paused) return this.renderPaused();
      else return this.renderProgress();
    return null
  }
  constructor(...e) {
    super(...e), M(this, "renderProgressPatchingBody", (e, t) => {
      let {
        item: {
          state: n
        }
      } = this.props;
      if (null == n) return null;
      let {
        stage: r,
        progress: i,
        total: l,
        type: a,
        readerProgress: o
      } = n;
      if (null == i || null == l || null == r) return null;
      let s = Z.xI(i, l),
        c = Z.xI(null != o ? o : 0, l),
        u = e[e.length - 1] / t * 1e3,
        d = l - i,
        p = z({
          type: a,
          stage: r,
          percent: Math.floor(s),
          progress: i,
          total: l,
          secondsRemaining: 0 !== u ? Math.max(1, d / u) : null
        });
      return this.renderStackedProgress({
        percents: [s, c],
        message: p
      })
    })
  }
}
let Y = () => (0, Chunk951288.jsx)(B, {
    icon: Chunk481060.o1U,
    tooltip: Chunk388032.intl.string(Chunk388032.t.YGm6SU),
    onClick: () => Chunk51025.v4()
  }),
  K = () => (0, Chunk951288.jsx)(B, {
    icon: Chunk481060.fpf,
    tooltip: Chunk388032.intl.string(Chunk388032.t.TVAd5O),
    onClick: () => Chunk51025.wO()
  }),
  q = e => {
    let {
      item: t
    } = e;
    return (0, r.jsx)(B, {
      icon: f.wj7,
      tooltip: D.intl.string(D.t["Eqb+LC"]),
      onClick: () => m.A1(t.applicationId, t.branchId)
    })
  },
  Q = e => {
    let {
      item: t
    } = e;
    return (0, r.jsx)(B, {
      icon: f.Dio,
      tooltip: D.intl.string(D.t["0lFmCw"]),
      onClick: () => m.al(t.applicationId, t.branchId)
    })
  },
  X = [{
    key: "name",
    cellClassName: Chunk248241.nameCell,
    render: e => (0, r.jsxs)(v.Z, {
      align: v.Z.Align.CENTER,
      children: [(0, r.jsx)(S.Z, {
        game: e.application,
        className: k.__invalid_gameIcon,
        size: S.A.SMALL
      }), (0, r.jsx)("div", {
        className: k.nameCellText,
        children: e.application.name
      })]
    })
  }, {
    key: "progress",
    cellClassName: Chunk248241.progressCell,
    headerCellClassName: Chunk248241.progressCellHeader,
    bodyCellClassName: Chunk248241.progressCellBody,
    render: (e, t) => (0, r.jsx)(W, {
      item: e,
      cellProps: t
    })
  }, {
    key: "actions",
    cellClassName: Chunk248241.actionsCell,
    render(e, t) {
      let n, i;
      return e.finished ? n = null != e.libraryApplication ? (0, r.jsx)(b.Z, {
        libraryApplication: e.libraryApplication,
        size: p.zx.Sizes.SMALL,
        className: k.gameActionButton,
        source: R.Sbl.APPLICATION_LIBRARY_UPDATES
      }) : null : null != e.state ? e.state.type !== R.vxO.UP_TO_DATE && (n = e.index > 0 ? (0, r.jsx)(q, {
        item: e
      }) : null != t && t.paused ? (0, r.jsx)(Y, {}) : (0, r.jsx)(K, {
        item: e
      }), i = (0, r.jsx)(Q, {
        item: e
      })) : i = (0, r.jsx)(Q, {
        item: e
      }), (0, r.jsxs)(v.Z, {
        justify: v.Z.Justify.END,
        children: [n, i]
      })
    }
  }];
class J extends Chunk647438.PureComponent {
  componentDidMount() {
    window.addEventListener("resize", this.throttledUpdateHeight)
  }
  componentDidUpdate(e) {
    this.props.height !== e.height && this.throttledUpdateHeight()
  }
  componentWillUnmount() {
    let {
      applications: e
    } = this.props;
    module.forEach(e => {
      e.finished && h.Z.wait(() => {
        m.wi(e.applicationId, e.branchId)
      })
    }), window.removeEventListener("resize", this.throttledUpdateHeight), this.isUnmounted = true
  }
  render() {
    let {
      applications: e,
      paused: t,
      isFocused: i,
      theme: l,
      analyticsContext: o
    } = this.props;
    return 0 === module.length ? null : (0, Chunk951288.jsxs)("div", {
      className: Chunk248241.gameUpdates,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk248241.headerRow,
        children: [(0, Chunk951288.jsx)(Chunk86826.Z, {
          className: a()(Chunk248241.headerCell, Chunk248241.networkProgress),
          title: Chunk388032.intl.string(Chunk388032.t.ytoXKi),
          getHistoricalTotalBytes: Chunk417363.Z.getHistoricalTotalBytesDownloaded,
          color: Chunk981631.Ilk.GREEN_360,
          animate: Chunk647438
        }), (0, Chunk951288.jsx)(Chunk86826.Z, {
          className: a()(Chunk248241.headerCell, Chunk248241.diskProgress),
          title: Chunk388032.intl.string(Chunk388032.t.SjohhI),
          getHistoricalTotalBytes: Chunk417363.Z.getHistoricalTotalBytesWritten,
          color: Chunk981631.Ilk.BLUE_345,
          animate: Chunk647438
        })]
      }), (0, Chunk951288.jsx)(Chunk167533.Z, {
        hasHeader: false,
        columns: X,
        data: module,
        className: Chunk248241.table,
        rowClassName: Chunk248241.row,
        rowComponent: U,
        cellProps: {
          paused: exports,
          isFocused: Chunk647438,
          theme: Chunk120356
        },
        rowProps: {
          onContextMenu: (e, t) => {
            g.jW(e, async () => {
              let {
                default: e
              } = await n.e("98335").then(n.bind(n, 485292));
              return n => {
                var i, l;
                return (0, r.jsx)(e, (i = function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                      r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                      return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                      M(e, t, n[t])
                    })
                  }
                  return e
                }({}, n), l = l = {
                  applicationId: t.applicationId,
                  branchId: t.branchId,
                  analyticsContext: o
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                  }
                  return n
                })(Object(l)).forEach(function(e) {
                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
                }), i))
              }
            })
          }
        },
        bodyCellClassName: Chunk248241.cell
      })]
    })
  }
  constructor(...e) {
    super(...e), M(this, "isUnmounted", false), M(this, "isTallerThanHalfViewport", false), M(this, "throttledUpdateHeight", s().throttle(() => {
      if (this.isUnmounted) return;
      let {
        height: e,
        onHeightTallerThanHalfViewportChange: t
      } = this.props, n = e > window.innerHeight / 2;
      this.isTallerThanHalfViewport !== n && (this.isTallerThanHalfViewport = n, t(n))
    }, 1e3))
  }
}

function $(e, t, n, r) {
  return e.reduce((e, i, l) => {
    let {
      applicationId: a,
      branchId: o
    } = i, s = n.getApplication(a), c = r.getState(a, o);
    return null != s && e.push({
      key: "".concat(a, ":").concat(o),
      applicationId: a,
      branchId: o,
      state: c,
      application: s,
      libraryApplication: N.Z.getLibraryApplication(a, o),
      finished: t,
      index: l
    }), e
  }, [])
}
let ee = (0, Chunk112724.Z)(Chunk442837.ZP.connectStores([Chunk812206.Z, Chunk417363.Z, Chunk941128.Z, Chunk210887.Z, Chunk451478.Z], () => ({
  applications: [...$(Chunk941128.Z.activeItems, false, Chunk812206.Z, Chunk417363.Z), ...$(Chunk941128.Z.finishedItems, true, Chunk812206.Z, Chunk417363.Z)],
  paused: Chunk941128.Z.paused,
  isFocused: Chunk451478.Z.isFocused(),
  theme: Chunk210887.Z.theme
}))((0, Chunk730749.Z)(J)))