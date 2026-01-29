/** Chunk was on 21738 **/
/** chunk id: 906320, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => ee
}), require("./65821.js"), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk582754 = require("./582754.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk442433 = require("./442433.js"),
  Chunk92077 = require("./92077.js"),
  Chunk979604 = require("./979604.jsx"),
  Chunk707606 = require("./707606.jsx"),
  Chunk456412 = require("./456412.jsx"),
  Chunk587895 = require("./587895.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk596719 = require("./596719.jsx"),
  Chunk769015 = require("./769015.jsx"),
  Chunk290987 = require("./290987.jsx"),
  Chunk544028 = require("./544028.js"),
  Chunk189081 = require("./189081.js"),
  Chunk194871 = require("./194871.js"),
  Chunk966846 = require("./966846.js"),
  Chunk531685 = require("./531685.js"),
  Chunk255438 = require("./255438.js"),
  Chunk674378 = require("./674378.js"),
  Chunk505806 = require("./505806.js"),
  Chunk250632 = require("./250632.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk59790 = require("./59790.js");

function U(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let G = e => {
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
  V = [Chunk827734.A.unsafe_rawColors.BLUE_345.css, Chunk827734.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
  B = e => {
    let {
      tooltip: t,
      onClick: n,
      icon: i
    } = e;
    return (0, r.jsx)(d.m, {
      text: t,
      children: (0, r.jsx)(h.$n, {
        "aria-label": t,
        className: k.hP,
        innerClassName: k.DX,
        color: h.$n.Colors.PRIMARY,
        onClick: n,
        size: h.$n.Sizes.ICON,
        children: (0, r.jsx)(i, {
          className: k.gE
        })
      })
    })
  };

function H(e, t) {
  switch (t) {
    case D.OQC.POST_INSTALL_SCRIPTS:
    case D.OQC.PLANNING:
    case D.OQC.FINALIZING:
    case D.OQC.ALLOCATING_DISK:
      return "".concat(e);
    default:
      return (0, P.Xq)(e, {
        useKibibytes: true
      })
  }
}
let F = {
  [Chunk652215.WTw.INSTALLING]: {
    [Chunk290987.pJ.NONE]: (e, t, n, r) => M.intl.formatToPlainString(M.t.JfJt9d, {
      percent: e,
      progress: t,
      total: n
    }),
    [Chunk290987.pJ.SECONDS]: (e, t, n, r) => M.intl.formatToPlainString(M.t["1z3c6e"], {
      percent: e,
      progress: t,
      total: n,
      timeRemaining: r
    }),
    [Chunk290987.pJ.MINUTES]: (e, t, n, r) => M.intl.formatToPlainString(M.t.PCX506, {
      percent: e,
      progress: t,
      total: n,
      timeRemaining: r
    }),
    [Chunk290987.pJ.HOURS]: (e, t, n, r) => M.intl.formatToPlainString(M.t["3VG9s1"], {
      percent: e,
      progress: t,
      total: n,
      timeRemaining: r
    })
  },
  [Chunk652215.WTw.UPDATING]: {
    [Chunk290987.pJ.NONE]: (e, t, n, r) => M.intl.formatToPlainString(M.t.JsqXXL, {
      percent: e,
      progress: t,
      total: n
    }),
    [Chunk290987.pJ.SECONDS]: (e, t, n, r) => M.intl.formatToPlainString(M.t["3BvVec"], {
      percent: e,
      progress: t,
      total: n,
      timeRemaining: r
    }),
    [Chunk290987.pJ.MINUTES]: (e, t, n, r) => M.intl.formatToPlainString(M.t["rwULn+"], {
      percent: e,
      progress: t,
      total: n,
      timeRemaining: r
    }),
    [Chunk290987.pJ.HOURS]: (e, t, n, r) => M.intl.formatToPlainString(M.t.adcitP, {
      percent: e,
      progress: t,
      total: n,
      timeRemaining: r
    })
  },
  [Chunk652215.WTw.REPAIRING]: {
    [Chunk290987.pJ.NONE]: (e, t, n, r) => M.intl.formatToPlainString(M.t.JfJt9d, {
      percent: e,
      progress: t,
      total: n
    }),
    [Chunk290987.pJ.SECONDS]: (e, t, n, r) => M.intl.formatToPlainString(M.t["1z3c6e"], {
      percent: e,
      progress: t,
      total: n,
      timeRemaining: r
    }),
    [Chunk290987.pJ.MINUTES]: (e, t, n, r) => M.intl.formatToPlainString(M.t.PCX506, {
      percent: e,
      progress: t,
      total: n,
      timeRemaining: r
    }),
    [Chunk290987.pJ.HOURS]: (e, t, n, r) => M.intl.formatToPlainString(M.t["3VG9s1"], {
      percent: e,
      progress: t,
      total: n,
      timeRemaining: r
    })
  }
};

function Y(e, t, n, r, i) {
  let l = F[t],
    a = null != l ? Object.keys(l) : [],
    {
      unit: s,
      time: o
    } = (0, S.$l)(null != e ? e / 60 : null, a);
  if (null != l && null != s) {
    let e = l[s];
    return null != e ? e(n, r, i, o) : null
  }
  return null
}

function K(e) {
  let {
    type: t,
    stage: n,
    percent: r,
    progress: i,
    total: l,
    secondsRemaining: a
  } = e, s = H(l, n), o = H(i, n);
  switch (n) {
    case D.OQC.QUEUED:
      if (0 === i) return M.intl.string(M.t.RpfBqd);
      return M.intl.formatToPlainString(M.t.uNjCXZ, {
        percent: r,
        progress: o,
        total: s
      });
    case D.OQC.PLANNING:
      return M.intl.formatToPlainString(M.t.sfuCUb, {
        percent: r
      });
    case D.OQC.ALLOCATING_DISK:
      return M.intl.formatToPlainString(M.t.XigoJ9, {
        percent: r
      });
    case D.OQC.PATCHING:
      return Y(a, t, r, o, s);
    case D.OQC.FINALIZING:
      return M.intl.formatToPlainString(M.t["6PHDUN"], {
        percent: r
      });
    case D.OQC.PAUSING:
      return M.intl.formatToPlainString(M.t.vjxhWo, {
        percent: r,
        progress: o,
        total: s
      });
    case D.OQC.VERIFYING:
      return M.intl.formatToPlainString(M.t.bbilvq, {
        percent: r,
        progress: o,
        total: s
      });
    case D.OQC.POST_INSTALL_SCRIPTS:
      return M.intl.formatToPlainString(M.t.c5vRUo, {
        percent: r,
        progress: o,
        total: s
      });
    case D.OQC.REPAIRING:
      if (t === D.WTw.REPAIRING) return Y(a, t, r, o, s);
      return M.intl.formatToPlainString(M.t.OCzETT, {
        percent: r,
        progress: o,
        total: s
      })
  }
  throw Error("Invalid Dispatch stage")
}
class W extends Chunk64700.PureComponent {
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
    return (0, r.jsxs)(y.A, {
      direction: y.A.Direction.VERTICAL,
      children: [(0, r.jsx)(g.iCB, {
        percent: t,
        size: g.iCB.Sizes.SMALL,
        foregroundColor: n,
        foregroundGradientColor: null != i ? [i[0], i[1]] : true,
        animate: this.isFocused
      }), (0, r.jsx)("div", {
        className: k.NO,
        children: null != l ? l : ""
      })]
    })
  }
  renderStackedProgress(e) {
    let {
      percents: t,
      message: n
    } = e;
    return (0, r.jsxs)(y.A, {
      direction: y.A.Direction.VERTICAL,
      children: [(0, r.jsx)(g.LvI, {
        percents: t,
        size: g.LvI.Sizes.SMALL,
        foregroundColors: V,
        animate: this.isFocused
      }), (0, r.jsx)("div", {
        className: k.NO,
        children: null != n ? n : ""
      })]
    })
  }
  renderFinished() {
    let {
      item: e
    } = this.props;
    return this.renderBody({
      message: M.intl.format(M.t.z1oxGO, {
        remove: () => A.Vt(e.applicationId, e.branchId)
      }),
      foregroundColor: (0, p.qB)(e.theme) ? u.A.unsafe_rawColors.PRIMARY_300.css : u.A.unsafe_rawColors.PRIMARY_500.css,
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
        let n = H(i, l),
          a = H(r, l),
          s = Math.floor(t = w.uA(r, i));
        e = l === D.OQC.PAUSING ? M.intl.formatToPlainString(M.t.vjxhWo, {
          percent: s,
          progress: a,
          total: n
        }) : M.intl.formatToPlainString(M.t.voT3Bi, {
          percent: s,
          progress: a,
          total: n
        })
      }
    }
    return (null == t || null == e) && (t = 0, e = M.intl.string(M.t["qS+iKY"])), this.renderBody({
      percent: t,
      foregroundColor: (0, p.qB)(r) ? u.A.unsafe_rawColors.PRIMARY_300.css : u.A.unsafe_rawColors.PRIMARY_500.css,
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
    let i = w.uA(n, r),
      l = Math.floor(i),
      a = 0 === n && 1 === r ? M.intl.string(M.t["+pfsFX"]) : M.intl.formatToPlainString(M.t["+feX8S"], {
        percent: l,
        progress: (0, P.Xq)(n),
        total: (0, P.Xq)(r)
      });
    return this.renderBody({
      message: a,
      foregroundColor: (0, p.qB)(t) ? u.A.unsafe_rawColors.PRIMARY_300.css : u.A.unsafe_rawColors.PRIMARY_500.css,
      percent: i
    })
  }
  renderProgressPatching() {
    return (0, r.jsx)(L.A, {
      getHistoricalTotalBytes: T.A.getHistoricalTotalBytesWritten,
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
    let l = w.uA(n, t),
      a = Math.floor(l);
    return this.renderBody({
      percent: l,
      message: K({
        type: i,
        stage: r,
        percent: a,
        progress: n,
        total: t
      }),
      foregroundColor: u.A.unsafe_rawColors.BLUE_345.css
    })
  }
  renderProgress() {
    let {
      state: e
    } = this.props.item;
    switch (null != e ? e.stage : null) {
      case D.OQC.PATCHING:
      case D.OQC.REPAIRING:
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
    if (null != e.state && (e.state.type === D.WTw.UPDATING || e.state.type === D.WTw.REPAIRING || e.state.type === D.WTw.INSTALLING))
      if (null != t && t.paused) return this.renderPaused();
      else return this.renderProgress();
    return null
  }
  constructor(...e) {
    super(...e), U(this, "renderProgressPatchingBody", (e, t) => {
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
        readerProgress: s
      } = n;
      if (null == i || null == l || null == r) return null;
      let o = w.uA(i, l),
        c = w.uA(null != s ? s : 0, l),
        u = e[e.length - 1] / t * 1e3,
        d = l - i,
        p = K({
          type: a,
          stage: r,
          percent: Math.floor(o),
          progress: i,
          total: l,
          secondsRemaining: 0 !== u ? Math.max(1, d / u) : null
        });
      return this.renderStackedProgress({
        percents: [o, c],
        message: p
      })
    })
  }
}
let q = () => (0, r.jsx)(B, {
    icon: g.udU,
    tooltip: M.intl.string(M.t.YGm6SZ),
    onClick: () => A.U()
  }),
  z = () => (0, r.jsx)(B, {
    icon: g.E$n,
    tooltip: M.intl.string(M.t.TVAd5J),
    onClick: () => A.v7()
  }),
  Q = e => {
    let {
      item: t
    } = e;
    return (0, r.jsx)(B, {
      icon: g.z$m,
      tooltip: M.intl.string(M.t["Eqb+LN"]),
      onClick: () => A.BO(t.applicationId, t.branchId)
    })
  },
  X = e => {
    let {
      item: t
    } = e;
    return (0, r.jsx)(B, {
      icon: g.PGe,
      tooltip: M.intl.string(M.t["0lFmC9"]),
      onClick: () => A.ZT(t.applicationId, t.branchId)
    })
  },
  Z = [{
    key: "name",
    cellClassName: Chunk59790.UQ,
    render: e => (0, r.jsxs)(y.A, {
      align: y.A.Align.CENTER,
      children: [(0, r.jsx)(v.A, {
        game: e.application,
        className: k.__invalid_gameIcon,
        size: v.M.SMALL
      }), (0, r.jsx)("div", {
        className: k.TF,
        children: e.application.name
      })]
    })
  }, {
    key: "progress",
    cellClassName: Chunk59790.Ay,
    headerCellClassName: Chunk59790.VD,
    bodyCellClassName: Chunk59790.so,
    render: (e, t) => (0, r.jsx)(W, {
      item: e,
      cellProps: t
    })
  }, {
    key: "actions",
    cellClassName: Chunk59790.AT,
    render(e, t) {
      let n, i;
      return e.finished ? n = null != e.libraryApplication ? (0, r.jsx)(_.A, {
        libraryApplication: e.libraryApplication,
        size: "sm",
        source: D.ThZ.APPLICATION_LIBRARY_UPDATES
      }) : null : null != e.state ? e.state.type !== D.WTw.UP_TO_DATE && (n = e.index > 0 ? (0, r.jsx)(Q, {
        item: e
      }) : null != t && t.paused ? (0, r.jsx)(q, {}) : (0, r.jsx)(z, {
        item: e
      }), i = (0, r.jsx)(X, {
        item: e
      })) : i = (0, r.jsx)(X, {
        item: e
      }), (0, r.jsxs)(y.A, {
        justify: y.A.Justify.END,
        children: [n, i]
      })
    }
  }];
class $ extends Chunk64700.PureComponent {
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
      e.finished && f.h.wait(() => {
        A.Vt(e.applicationId, e.branchId)
      })
    }), window.removeEventListener("resize", this.throttledUpdateHeight), this.isUnmounted = true
  }
  render() {
    let {
      applications: e,
      paused: t,
      isFocused: i,
      theme: l,
      analyticsContext: s
    } = this.props;
    return 0 === e.length ? null : (0, r.jsxs)("div", {
      className: k.xP,
      children: [(0, r.jsxs)("div", {
        className: k.U1,
        children: [(0, r.jsx)(R.A, {
          className: a()(k.e4, k.Eg),
          title: M.intl.string(M.t.ytoXKr),
          getHistoricalTotalBytes: T.A.getHistoricalTotalBytesDownloaded,
          color: u.A.unsafe_rawColors.GREEN_360.resolve({
            saturation: 1
          }).hex(),
          animate: i
        }), (0, r.jsx)(R.A, {
          className: a()(k.e4, k.pn),
          title: M.intl.string(M.t.SjohhI),
          getHistoricalTotalBytes: T.A.getHistoricalTotalBytesWritten,
          color: u.A.unsafe_rawColors.BLUE_345.resolve({
            saturation: 1
          }).hex(),
          animate: i
        })]
      }), (0, r.jsx)(I.A, {
        hasHeader: false,
        columns: Z,
        data: e,
        className: k.tp,
        rowClassName: k.nM,
        rowComponent: G,
        cellProps: {
          paused: t,
          isFocused: i,
          theme: l
        },
        rowProps: {
          onContextMenu: (e, t) => {
            m.L3(e, async () => {
              let {
                default: e
              } = await n.e("881").then(n.bind(n, 163368));
              return n => {
                var i, l;
                return (0, r.jsx)(e, (i = function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                      r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                      return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                      U(e, t, n[t])
                    })
                  }
                  return e
                }({}, n), l = l = {
                  applicationId: t.applicationId,
                  branchId: t.branchId,
                  analyticsContext: s
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
        bodyCellClassName: k.Hn
      })]
    })
  }
  constructor(...e) {
    super(...e), U(this, "isUnmounted", false), U(this, "isTallerThanHalfViewport", false), U(this, "throttledUpdateHeight", o().throttle(() => {
      if (this.isUnmounted) return;
      let {
        height: e,
        onHeightTallerThanHalfViewportChange: t
      } = this.props, n = e > window.innerHeight / 2;
      this.isTallerThanHalfViewport !== n && (this.isTallerThanHalfViewport = n, t(n))
    }, 1e3))
  }
}

function J(e, t, n, r) {
  return e.reduce((e, i, l) => {
    let {
      applicationId: a,
      branchId: s
    } = i, o = n.getApplication(a), c = r.getState(a, s);
    return null != o && e.push({
      key: "".concat(a, ":").concat(s),
      applicationId: a,
      branchId: s,
      state: c,
      application: o,
      libraryApplication: N.A.getLibraryApplication(a, s),
      finished: t,
      index: l
    }), e
  }, [])
}
let ee = (0, Chunk456412.A)(Chunk311907.Ay.connectStores([Chunk587895.A, Chunk194871.A, Chunk966846.A, Chunk544028.A, Chunk531685.A], () => ({
  applications: [...J(j.A.activeItems, false, O.A, T.A), ...J(j.A.finishedItems, true, O.A, T.A)],
  paused: j.A.paused,
  isFocused: x.A.isFocused(),
  theme: C.A.theme
}))((0, Chunk707606.A)($)))