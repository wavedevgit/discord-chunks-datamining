/** Chunk was on 1272 **/
/** chunk id: 530151, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ee
}), require("./415506.js"), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
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
  Chunk654069 = require("./654069.js");

function k(e, t, n) {
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
  G = [Chunk692547.Z.unsafe_rawColors.BLUE_345.css, Chunk692547.Z.colors.INTERACTIVE_TEXT_DEFAULT.css],
  H = e => {
    let {
      tooltip: t,
      onClick: n,
      icon: i
    } = e;
    return (0, r.jsx)(d.u, {
      text: t,
      children: (0, r.jsx)(f.zx, {
        "aria-label": t,
        className: M.actionButton,
        innerClassName: M.actionButtonContents,
        color: f.zx.Colors.PRIMARY,
        onClick: n,
        size: f.zx.Sizes.ICON,
        children: (0, r.jsx)(i, {
          className: M.actionIcon
        })
      })
    })
  };

function B(e, t) {
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
let V = {
  [Chunk981631.vxO.INSTALLING]: {
    [Chunk707409.J6.NONE]: (e, t, n, r) => D.intl.formatToPlainString(D.t.JfJt9d, {
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
    [Chunk707409.J6.MINUTES]: (e, t, n, r) => D.intl.formatToPlainString(D.t.PCX506, {
      percent: e,
      progress: t,
      total: n,
      timeRemaining: r
    }),
    [Chunk707409.J6.HOURS]: (e, t, n, r) => D.intl.formatToPlainString(D.t["3VG9s1"], {
      percent: e,
      progress: t,
      total: n,
      timeRemaining: r
    })
  },
  [Chunk981631.vxO.UPDATING]: {
    [Chunk707409.J6.NONE]: (e, t, n, r) => D.intl.formatToPlainString(D.t.JsqXXL, {
      percent: e,
      progress: t,
      total: n
    }),
    [Chunk707409.J6.SECONDS]: (e, t, n, r) => D.intl.formatToPlainString(D.t["3BvVec"], {
      percent: e,
      progress: t,
      total: n,
      timeRemaining: r
    }),
    [Chunk707409.J6.MINUTES]: (e, t, n, r) => D.intl.formatToPlainString(D.t["rwULn+"], {
      percent: e,
      progress: t,
      total: n,
      timeRemaining: r
    }),
    [Chunk707409.J6.HOURS]: (e, t, n, r) => D.intl.formatToPlainString(D.t.adcitP, {
      percent: e,
      progress: t,
      total: n,
      timeRemaining: r
    })
  },
  [Chunk981631.vxO.REPAIRING]: {
    [Chunk707409.J6.NONE]: (e, t, n, r) => D.intl.formatToPlainString(D.t.JfJt9d, {
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
    [Chunk707409.J6.MINUTES]: (e, t, n, r) => D.intl.formatToPlainString(D.t.PCX506, {
      percent: e,
      progress: t,
      total: n,
      timeRemaining: r
    }),
    [Chunk707409.J6.HOURS]: (e, t, n, r) => D.intl.formatToPlainString(D.t["3VG9s1"], {
      percent: e,
      progress: t,
      total: n,
      timeRemaining: r
    })
  }
};

function F(e, t, n, r, i) {
  let l = V[t],
    a = null != l ? Object.keys(l) : [],
    {
      unit: o,
      time: s
    } = (0, S.CI)(null != e ? e / 60 : null, a);
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
  } = e, o = B(l, n), s = B(i, n);
  switch (n) {
    case R.f07.QUEUED:
      if (0 === i) return D.intl.string(D.t.RpfBqd);
      return D.intl.formatToPlainString(D.t.uNjCXZ, {
        percent: r,
        progress: s,
        total: o
      });
    case R.f07.PLANNING:
      return D.intl.formatToPlainString(D.t.sfuCUb, {
        percent: r
      });
    case R.f07.ALLOCATING_DISK:
      return D.intl.formatToPlainString(D.t.XigoJ9, {
        percent: r
      });
    case R.f07.PATCHING:
      return F(a, t, r, s, o);
    case R.f07.FINALIZING:
      return D.intl.formatToPlainString(D.t["6PHDUN"], {
        percent: r
      });
    case R.f07.PAUSING:
      return D.intl.formatToPlainString(D.t.vjxhWo, {
        percent: r,
        progress: s,
        total: o
      });
    case R.f07.VERIFYING:
      return D.intl.formatToPlainString(D.t.bbilvq, {
        percent: r,
        progress: s,
        total: o
      });
    case R.f07.POST_INSTALL_SCRIPTS:
      return D.intl.formatToPlainString(D.t.c5vRUo, {
        percent: r,
        progress: s,
        total: o
      });
    case R.f07.REPAIRING:
      if (t === R.vxO.REPAIRING) return F(a, t, r, s, o);
      return D.intl.formatToPlainString(D.t.OCzETT, {
        percent: r,
        progress: s,
        total: o
      })
  }
  throw Error("Invalid Dispatch stage")
}
class Y extends Chunk473749.PureComponent {
  get isFocused() {
    let {
      cellProps: e
    } = this.props;
    return null != e && e.isFocused
  }
  renderBody(e) {
    let {
      percent: t,
      foregroundColor: n,
      foregroundGradientColor: i,
      message: l
    } = e;
    return (0, r.jsxs)(y.Z, {
      direction: y.Z.Direction.VERTICAL,
      children: [(0, r.jsx)(g.Exd, {
        percent: t,
        size: g.Exd.Sizes.SMALL,
        foregroundColor: n,
        foregroundGradientColor: null != i ? [i[0], i[1]] : true,
        animate: this.isFocused
      }), (0, r.jsx)("div", {
        className: M.progressCellText,
        children: null != l ? l : ""
      })]
    })
  }
  renderStackedProgress(e) {
    let {
      percents: t,
      message: n
    } = e;
    return (0, r.jsxs)(y.Z, {
      direction: y.Z.Direction.VERTICAL,
      children: [(0, r.jsx)(g.yGy, {
        percents: t,
        size: g.yGy.Sizes.SMALL,
        foregroundColors: G,
        animate: this.isFocused
      }), (0, r.jsx)("div", {
        className: M.progressCellText,
        children: null != n ? n : ""
      })]
    })
  }
  renderFinished() {
    let {
      item: e
    } = this.props;
    return this.renderBody({
      message: D.intl.format(D.t.z1oxGO, {
        remove: () => b.wi(e.applicationId, e.branchId)
      }),
      foregroundColor: (0, p.ap)(e.theme) ? u.Z.unsafe_rawColors.PRIMARY_300.css : u.Z.unsafe_rawColors.PRIMARY_500.css,
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
    if (null != n) {
      let {
        progress: r,
        total: i,
        stage: l
      } = n;
      if (null != r && null != i) {
        let n = B(i, l),
          a = B(r, l),
          o = Math.floor(t = Z.xI(r, i));
        e = l === R.f07.PAUSING ? D.intl.formatToPlainString(D.t.vjxhWo, {
          percent: o,
          progress: a,
          total: n
        }) : D.intl.formatToPlainString(D.t.voT3Bi, {
          percent: o,
          progress: a,
          total: n
        })
      }
    }
    return (null == t || null == e) && (t = 0, e = D.intl.string(D.t["qS+iKY"])), this.renderBody({
      percent: t,
      foregroundColor: (0, p.ap)(r) ? u.Z.unsafe_rawColors.PRIMARY_300.css : u.Z.unsafe_rawColors.PRIMARY_500.css,
      message: e
    })
  }
  renderPaused() {
    let {
      item: {
        state: e,
        theme: t
      }
    } = this.props;
    if (null == e) return null;
    let {
      progress: n,
      total: r
    } = e;
    if (null == n || null == r) return null;
    let i = Z.xI(n, r),
      l = Math.floor(i),
      a = 0 === n && 1 === r ? D.intl.string(D.t["+pfsFX"]) : D.intl.formatToPlainString(D.t["+feX8S"], {
        percent: l,
        progress: (0, A.BU)(n),
        total: (0, A.BU)(r)
      });
    return this.renderBody({
      message: a,
      foregroundColor: (0, p.ap)(t) ? u.Z.unsafe_rawColors.PRIMARY_300.css : u.Z.unsafe_rawColors.PRIMARY_500.css,
      percent: i
    })
  }
  renderProgressPatching() {
    return (0, r.jsx)(w.Z, {
      getHistoricalTotalBytes: j.Z.getHistoricalTotalBytesWritten,
      updateInterval: 5e3,
      children: this.renderProgressPatchingBody
    })
  }
  renderProgressDefault() {
    let {
      state: e
    } = this.props.item;
    if (null == e) return null;
    let {
      total: t,
      progress: n,
      stage: r,
      type: i
    } = e;
    if (null == t || null == n || null == r) return null;
    let l = Z.xI(n, t),
      a = Math.floor(l);
    return this.renderBody({
      percent: l,
      message: z({
        type: i,
        stage: r,
        percent: a,
        progress: n,
        total: t
      }),
      foregroundColor: u.Z.unsafe_rawColors.BLUE_345.css
    })
  }
  renderProgress() {
    let {
      state: e
    } = this.props.item;
    switch (null != e ? e.stage : null) {
      case R.f07.PATCHING:
      case R.f07.REPAIRING:
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
    if (e.finished) return this.renderFinished();
    if (e.index > 0) return this.renderQueued();
    if (null != e.state && (e.state.type === R.vxO.UPDATING || e.state.type === R.vxO.REPAIRING || e.state.type === R.vxO.INSTALLING))
      if (null != t && t.paused) return this.renderPaused();
      else return this.renderProgress();
    return null
  }
  constructor(...e) {
    super(...e), k(this, "renderProgressPatchingBody", (e, t) => {
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
let W = () => (0, r.jsx)(H, {
    icon: g.o1U,
    tooltip: D.intl.string(D.t.YGm6SZ),
    onClick: () => b.v4()
  }),
  K = () => (0, r.jsx)(H, {
    icon: g.fpf,
    tooltip: D.intl.string(D.t.TVAd5J),
    onClick: () => b.wO()
  }),
  q = e => {
    let {
      item: t
    } = e;
    return (0, r.jsx)(H, {
      icon: g.wj7,
      tooltip: D.intl.string(D.t["Eqb+LN"]),
      onClick: () => b.A1(t.applicationId, t.branchId)
    })
  },
  Q = e => {
    let {
      item: t
    } = e;
    return (0, r.jsx)(H, {
      icon: g.Dio,
      tooltip: D.intl.string(D.t["0lFmC9"]),
      onClick: () => b.al(t.applicationId, t.branchId)
    })
  },
  J = [{
    key: "name",
    cellClassName: Chunk654069.nameCell,
    render: e => (0, r.jsxs)(y.Z, {
      align: y.Z.Align.CENTER,
      children: [(0, r.jsx)(C.Z, {
        game: e.application,
        className: M.__invalid_gameIcon,
        size: C.A.SMALL
      }), (0, r.jsx)("div", {
        className: M.nameCellText,
        children: e.application.name
      })]
    })
  }, {
    key: "progress",
    cellClassName: Chunk654069.progressCell,
    headerCellClassName: Chunk654069.progressCellHeader,
    bodyCellClassName: Chunk654069.progressCellBody,
    render: (e, t) => (0, r.jsx)(Y, {
      item: e,
      cellProps: t
    })
  }, {
    key: "actions",
    cellClassName: Chunk654069.actionsCell,
    render(e, t) {
      let n, i;
      return e.finished ? n = null != e.libraryApplication ? (0, r.jsx)(_.Z, {
        libraryApplication: e.libraryApplication,
        size: "sm",
        source: R.Sbl.APPLICATION_LIBRARY_UPDATES
      }) : null : null != e.state ? e.state.type !== R.vxO.UP_TO_DATE && (n = e.index > 0 ? (0, r.jsx)(q, {
        item: e
      }) : null != t && t.paused ? (0, r.jsx)(W, {}) : (0, r.jsx)(K, {
        item: e
      }), i = (0, r.jsx)(Q, {
        item: e
      })) : i = (0, r.jsx)(Q, {
        item: e
      }), (0, r.jsxs)(y.Z, {
        justify: y.Z.Justify.END,
        children: [n, i]
      })
    }
  }];
class X extends Chunk473749.PureComponent {
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
    e.forEach(e => {
      e.finished && h.Z.wait(() => {
        b.wi(e.applicationId, e.branchId)
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
    return 0 === e.length ? null : (0, r.jsxs)("div", {
      className: M.gameUpdates,
      children: [(0, r.jsxs)("div", {
        className: M.headerRow,
        children: [(0, r.jsx)(L.Z, {
          className: a()(M.headerCell, M.networkProgress),
          title: D.intl.string(D.t.ytoXKr),
          getHistoricalTotalBytes: j.Z.getHistoricalTotalBytesDownloaded,
          color: u.Z.unsafe_rawColors.GREEN_360.resolve({
            saturation: 1
          }).hex(),
          animate: i
        }), (0, r.jsx)(L.Z, {
          className: a()(M.headerCell, M.diskProgress),
          title: D.intl.string(D.t.SjohhI),
          getHistoricalTotalBytes: j.Z.getHistoricalTotalBytesWritten,
          color: u.Z.unsafe_rawColors.BLUE_345.resolve({
            saturation: 1
          }).hex(),
          animate: i
        })]
      }), (0, r.jsx)(I.Z, {
        hasHeader: false,
        columns: J,
        data: e,
        className: M.table,
        rowClassName: M.row,
        rowComponent: U,
        cellProps: {
          paused: t,
          isFocused: i,
          theme: l
        },
        rowProps: {
          onContextMenu: (e, t) => {
            m.jW(e, async () => {
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
                      k(e, t, n[t])
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
        bodyCellClassName: M.cell
      })]
    })
  }
  constructor(...e) {
    super(...e), k(this, "isUnmounted", false), k(this, "isTallerThanHalfViewport", false), k(this, "throttledUpdateHeight", s().throttle(() => {
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
  applications: [...$(P.Z.activeItems, false, v.Z, j.Z), ...$(P.Z.finishedItems, true, v.Z, j.Z)],
  paused: P.Z.paused,
  isFocused: x.Z.isFocused(),
  theme: T.Z.theme
}))((0, Chunk730749.Z)(X)))