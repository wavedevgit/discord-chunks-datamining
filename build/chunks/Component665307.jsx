/** Chunk was on 1272 **/
/** chunk id: 665307, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => H
}), require("./415506.js"), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk828700 = require("./828700.js"),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk477690 = require("./477690.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk239091 = require("./239091.js"),
  Chunk287259 = require("./287259.js"),
  Chunk785547 = require("./785547.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk167533 = require("./167533.jsx"),
  Chunk925329 = require("./925329.jsx"),
  Chunk707409 = require("./707409.jsx"),
  Chunk490983 = require("./490983.js"),
  Chunk799777 = require("./799777.js"),
  Chunk626135 = require("./626135.js"),
  Chunk780570 = require("./780570.js"),
  Chunk624138 = require("./624138.js"),
  Chunk645818 = require("./645818.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk901740 = require("./901740.js");

function Z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      Z(e, t, n[t])
    })
  }
  return e
}

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let L = (0, Chunk624138.Mg)(Chunk477690.Z.GAME_LIST_ROW_MIN_HEIGHT),
  R = (0, Chunk624138.Mg)(Chunk477690.Z.GAME_LIST_LINKED_TO_GLOW_DURATION),
  D = Object.freeze({
    [Chunk981631.iEv.PLATFORM]: "Platform",
    [Chunk981631.iEv.LAST_PLAYED]: "Last Played",
    [Chunk981631.iEv.NAME]: "Name"
  }),
  M = e => {
    let {
      flag: t,
      icon: n,
      item: r,
      tooltip: l
    } = e, a = r.libraryApplication.hasFlag(t);
    return (0, i.jsx)(d.u, {
      text: l,
      children: (0, i.jsx)(n, {
        className: o()(x.settingIcon, {
          [x.hidden]: !a
        })
      })
    })
  },
  k = [{
    key: Chunk981631.iEv.NAME,
    renderHeader: () => P.intl.string(P.t.dBfWfc),
    sort: true,
    cellClassName: Chunk901740.nameCell,
    bodyCellClassName: Chunk901740.nameBodyCell,
    render: e => (0, i.jsxs)(_.Z, {
      align: _.Z.Align.CENTER,
      children: [(0, i.jsx)(O.Z, {
        game: e.application,
        size: O.A.SMALL,
        className: x.gameIcon
      }), (0, i.jsxs)("div", {
        className: x.nameCellInfo,
        children: [(0, i.jsx)("div", {
          className: x.nameCellText,
          children: e.libraryApplication.getBranchedName(e.application)
        }), e.libraryApplication.hasFlag(j.eHb.PREMIUM) ? (0, i.jsx)(d.u, {
          text: P.intl.string(P.t.tG2SzG),
          children: (0, i.jsx)(f.SrA, {
            size: "md",
            color: "currentColor",
            className: x.nitroIcon
          })
        }) : null]
      })]
    })
  }, {
    key: Chunk981631.iEv.PLATFORM,
    renderHeader: () => P.intl.string(P.t.YR4cHH),
    sort: true,
    cellClassName: Chunk901740.platformCell,
    bodyCellClassName: Chunk901740.textCell,
    render(e) {
      let t = e.libraryApplication.getDistributor();
      return (0, i.jsx)(_.Z, {
        align: _.Z.Align.CENTER,
        children: null != t ? j.EOG[t] : P.intl.string(P.t["F+l3Jt"])
      })
    }
  }, {
    key: Chunk981631.iEv.LAST_PLAYED,
    renderHeader: () => P.intl.string(P.t.FDDyjS),
    sort: true,
    cellClassName: Chunk901740.lastPlayedCell,
    bodyCellClassName: Chunk901740.textCell,
    render(e) {
      let t;
      return t = e.isRunning ? P.intl.string(P.t.Md326p) : e.isNew ? P.intl.string(P.t["+F0Tho"]) : 0 !== e.lastPlayed ? (0, i.jsx)(v.ZP, {
        end: e.lastPlayed,
        location: v.ZP.Locations.GAME_LIBRARY_LAST_PLAYED
      }) : P.intl.string(P.t.EoWLru), (0, i.jsx)(_.Z, {
        align: _.Z.Align.CENTER,
        className: o()({
          [x.lastPlayedCellNew]: e.isNew
        }),
        children: t
      })
    }
  }, {
    key: Chunk981631.iEv.ACTIONS,
    renderHeader: () => null,
    cellClassName: Chunk901740.actionsCell,
    render(e, t, n) {
      var r, a;
      if (null == t) throw Error("No cell props defined.");
      let s = e.key === t.activeRowKey;
      return (0, i.jsxs)(l.Fragment, {
        children: [(0, i.jsxs)("div", {
          className: x.settingIcons,
          children: [(0, i.jsx)(M, {
            flag: j.eHb.PRIVATE,
            item: e,
            icon: f.kZF,
            tooltip: P.intl.string(P.t.NozAop)
          }), (0, i.jsx)(M, {
            flag: j.eHb.OVERLAY_DISABLED,
            item: e,
            icon: f.o8v,
            tooltip: P.intl.string(P.t.Az9eqn)
          }), (0, i.jsx)(N.Z, {
            className: o()(x.settingIcon, {
              [x.hidden]: !e.supportsCloudSync
            }),
            libraryApplication: e.libraryApplication
          })]
        }), (0, S.Je)(e.libraryApplication) ? (0, i.jsx)(b.Z, {
          analyticsListSort: (r = t.sortKey, a = t.sortDirection, "".concat(D[r], " ").concat(a === j.sHY.ASCENDING ? "ASC" : "DESC")),
          analyticsListIndex: n,
          source: j.Sbl.APPLICATION_LIBRARY,
          libraryApplication: e.libraryApplication,
          playButtonVariant: s ? "primary" : "secondary",
          size: "sm",
          hideProgress: null != e.defaultAction,
          onDropdownOpen: () => null != t && t.setActiveRowKey(e),
          onDropdownClose: () => null != t && t.clearActiveRowKey()
        }) : (0, i.jsx)("div", {
          children: "deprecated!"
        })]
      })
    }
  }],
  U = e => {
    var {
      item: t,
      activeRowKey: n,
      highlightedApplicationKey: r,
      onMouseEnter: l,
      onMouseLeave: a,
      onContextMenu: s,
      setRef: c
    } = e, u = function(e, t) {
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
    }(e, ["item", "activeRowKey", "highlightedApplicationKey", "onMouseEnter", "onMouseLeave", "onContextMenu", "setRef"]);
    let d = t.key === n,
      p = t.key === r;
    return (0, i.jsx)("div", {
      className: o()({
        [x.rowWrapperActive]: d && !p,
        [x.rowWrapperGlow]: p,
        [x.rowWrapper]: !d && !p,
        [x.rowWrapperDim]: !d && !t.isLaunchable
      }),
      ref: e => {
        c(e, t.key)
      },
      onMouseEnter: () => l(t),
      onMouseLeave: a,
      onContextMenu: e => s(e, t),
      children: (0, i.jsx)("div", A({}, u))
    })
  };
class G extends(r = Chunk473749.PureComponent) {
  componentDidMount() {
    let {
      fetched: e
    } = this.props;
    e && (this.handleHighlightedApplicationKey(), this.trackViewed())
  }
  componentWillUnmount() {
    this._didUnmount = true
  }
  componentDidUpdate(e) {
    !e.fetched && this.props.fetched && (this.handleHighlightedApplicationKey(), this.trackViewed());
    let t = this.props.activeRowKey;
    if (null != t && e.activeRowKey !== t && this.props.isNavigatingByKeyboard) {
      let e = this._rowRefs[t];
      null != e && (g.Z.wait(h.Zy), this.props.scrollToRow(e, L))
    }
  }
  handleHighlightedApplicationKey() {
    let {
      highlightedApplicationKey: e
    } = this.state;
    null != e && null != this._rowRefs[e] && (this.props.scrollToRow(this._rowRefs[e], L), new u.V7().start(R, () => {
      this._didUnmount || this.setState({
        highlightedApplicationKey: null
      })
    }))
  }
  trackViewed() {
    let e = {
        num_applications_total: 0,
        num_applications_discord: 0,
        num_applications_steam: 0,
        num_applications_battlenet: 0,
        num_applications_twitch: 0,
        num_applications_uplay: 0,
        num_applications_origin: 0,
        num_applications_gog: 0,
        num_applications_epic: 0
      },
      {
        analyticsContext: t,
        applicationViewItems: n
      } = this.props;
    for (let t of n) {
      switch (t.libraryApplication.getDistributor()) {
        case j.GQo.DISCORD:
          e.num_applications_discord++;
          break;
        case j.GQo.STEAM:
          e.num_applications_steam++;
          break;
        case j.GQo.BATTLENET:
          e.num_applications_battlenet++;
          break;
        case j.GQo.TWITCH:
          e.num_applications_twitch++;
          break;
        case j.GQo.UPLAY:
          e.num_applications_uplay++;
          break;
        case j.GQo.ORIGIN:
          e.num_applications_origin++;
          break;
        case j.GQo.GOG:
          e.num_applications_gog++;
          break;
        case j.GQo.EPIC:
          e.num_applications_epic++
      }
      e.num_applications_total++
    }
    C.default.track(j.rMx.LIBRARY_VIEWED, w(A({}, e), {
      load_id: t.loadId
    }))
  }
  handleSort(e, t) {
    m.fS(e, t)
  }
  renderImportHelp() {
    let e, {
        applicationViewItems: t,
        filterQuery: n
      } = this.props,
      r = t.length > 0;
    return r ? null : (e = "" !== n ? P.intl.format(P.t["4Q1TAr"], {
      query: n
    }) : P.intl.string(P.t["0Y+0PY"]), (0, i.jsxs)("div", {
      className: r ? x.emptyStateSmall : x.emptyStateLarge,
      children: [(0, i.jsx)("div", {
        className: x.emptyWumpus
      }), (0, i.jsx)(_.Z, {
        grow: 0,
        shrink: +!!r,
        direction: _.Z.Direction.VERTICAL,
        children: (0, i.jsxs)("div", {
          className: x.emptyStateText,
          children: [(0, i.jsx)("div", {
            className: x.emptyStateHeader,
            children: P.intl.string(P.t.Lw8X2j)
          }), (0, i.jsx)("div", {
            className: x.emptyStateDescription,
            children: e
          })]
        })
      })]
    }))
  }
  render() {
    let {
      sortKey: e,
      sortDirection: t,
      applicationViewItems: n,
      activeRowKey: r,
      stickyHeader: a
    } = this.props, {
      overflowMenuRowKey: o,
      highlightedApplicationKey: s
    } = this.state;
    return (0, i.jsxs)(l.Fragment, {
      children: [n.length > 0 ? (0, i.jsx)(E.Z, {
        columns: k,
        data: n,
        sortData: false,
        rowComponent: U,
        className: x.table,
        headerClassName: a ? x.stickyHeader : x.header,
        headerCellClassName: x.headerCell,
        sortedHeaderCellClassName: x.headerCellSorted,
        bodyCellClassName: x.bodyCell,
        rowClassName: x.row,
        sortKey: e,
        sortDirection: t,
        stickyHeader: a,
        rowProps: {
          activeRowKey: null != o ? o : r,
          highlightedApplicationKey: s,
          onMouseEnter: this.handleRowMouseEnter,
          onMouseLeave: this.handleRowMouseLeave,
          onContextMenu: this.handleApplicationContextMenu,
          setRef: this.setRowRef
        },
        cellProps: {
          activeRowKey: null != o ? o : r,
          onContextMenu: this.handleApplicationContextMenu,
          setActiveRowKey: this.setActiveRowKey,
          clearActiveRowKey: this.clearActiveRowKey,
          sortKey: e,
          sortDirection: t
        },
        onSort: this.handleSort
      }) : null, this.renderImportHelp()]
    })
  }
  constructor(...e) {
    super(...e), Z(this, "_didUnmount", false), Z(this, "_rowRefs", {}), Z(this, "state", {
      overflowMenuRowKey: null,
      highlightedApplicationKey: null != this.props.location.state ? this.props.location.state.applicationId : null
    }), Z(this, "setActiveRowKey", e => {
      this.setState({
        overflowMenuRowKey: e.key
      })
    }), Z(this, "clearActiveRowKey", () => {
      this._didUnmount || this.setState({
        overflowMenuRowKey: null
      })
    }), Z(this, "handleRowMouseEnter", e => {
      this.props.isNavigatingByKeyboard || m.wX(e.key)
    }), Z(this, "handleRowMouseLeave", () => {
      this.props.isNavigatingByKeyboard || m.wX(null)
    }), Z(this, "setRowRef", (e, t) => {
      this._rowRefs[t] = e
    }), Z(this, "handleApplicationContextMenu", (e, t) => {
      this.setActiveRowKey(t);
      let {
        analyticsContext: r
      } = this.props;
      (0, h.jW)(e, async () => {
        let {
          default: e
        } = await n.e("98335").then(n.bind(n, 485292));
        return n => (0, i.jsx)(e, w(A({}, n), {
          applicationId: t.libraryApplication.id,
          branchId: t.libraryApplication.branchId,
          analyticsContext: r
        }))
      }, {
        onClose: this.clearActiveRowKey
      })
    })
  }
}

function H(e) {
  let t = l.useContext(C.AnalyticsContext),
    n = (0, s.TH)(),
    {
      applicationViewItems: r,
      filterQuery: a,
      fetched: o
    } = (0, c.cj)([I.Z], () => ({
      applicationViewItems: I.Z.sortedFilteredLibraryApplicationViewItems,
      filterQuery: I.Z.applicationFilterQuery,
      fetched: I.Z.hasFetchedApplications
    })),
    {
      sortKey: u,
      sortDirection: d,
      activeRowKey: p,
      isNavigatingByKeyboard: f
    } = (0, c.cj)([y.Z], () => ({
      sortKey: y.Z.sortKey,
      sortDirection: y.Z.sortDirection,
      activeRowKey: y.Z.activeRowKey,
      isNavigatingByKeyboard: y.Z.isNavigatingByKeyboard
    }));
  return (0, i.jsx)(G, w(A({}, e), {
    analyticsContext: t,
    location: n,
    applicationViewItems: r,
    filterQuery: a,
    fetched: o,
    sortKey: u,
    sortDirection: d,
    activeRowKey: p,
    isNavigatingByKeyboard: f
  }))
}
Z(G, "defaultProps", {
  stickyHeader: false
})