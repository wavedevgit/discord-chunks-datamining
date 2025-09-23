/** Chunk was on 1272 **/
/** chunk id: 665307, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => B
}), require("./415506.js"), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk843611 = require("./843611.js"),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk477690 = require("./477690.js"),
  Chunk755721 = require("./755721.js"),
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
  Chunk402723 = require("./402723.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      A(e, t, n[t])
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
  k = e => {
    let {
      flag: t,
      icon: n,
      item: r,
      tooltip: l
    } = e, a = r.libraryApplication.hasFlag(t);
    return (0, i.jsx)(f.ua7, {
      text: l,
      children: e => (0, i.jsx)(n, Z({
        className: o()(x.settingIcon, {
          [x.hidden]: !a
        })
      }, e))
    })
  },
  M = [{
    key: Chunk981631.iEv.NAME,
    renderHeader: () => Chunk388032.intl.string(Chunk388032.t.dBfWfX),
    sort: true,
    cellClassName: Chunk402723.nameCell,
    bodyCellClassName: Chunk402723.nameBodyCell,
    render: e => (0, i.jsxs)(_.Z, {
      align: _.Z.Align.CENTER,
      children: [(0, i.jsx)(E.Z, {
        game: e.application,
        size: E.A.SMALL,
        className: x.gameIcon
      }), (0, i.jsxs)("div", {
        className: x.nameCellInfo,
        children: [(0, i.jsx)("div", {
          className: x.nameCellText,
          children: e.libraryApplication.getBranchedName(e.application)
        }), e.libraryApplication.hasFlag(P.eHb.PREMIUM) ? (0, i.jsx)(f.ua7, {
          text: j.intl.string(j.t.tG2SzM),
          children: e => (0, i.jsx)(f.SrA, Z({
            size: "md",
            color: "currentColor",
            className: x.nitroIcon
          }, e))
        }) : null]
      })]
    })
  }, {
    key: Chunk981631.iEv.PLATFORM,
    renderHeader: () => Chunk388032.intl.string(Chunk388032.t.YR4cHB),
    sort: true,
    cellClassName: Chunk402723.platformCell,
    bodyCellClassName: Chunk402723.textCell,
    render(e) {
      let t = e.libraryApplication.getDistributor();
      return (0, i.jsx)(_.Z, {
        align: _.Z.Align.CENTER,
        children: null != t ? P.EOG[t] : j.intl.string(j.t["F+l3Ji"])
      })
    }
  }, {
    key: Chunk981631.iEv.LAST_PLAYED,
    renderHeader: () => Chunk388032.intl.string(Chunk388032.t.FDDyjY),
    sort: true,
    cellClassName: Chunk402723.lastPlayedCell,
    bodyCellClassName: Chunk402723.textCell,
    render(e) {
      let t;
      return t = e.isRunning ? j.intl.string(j.t.Md326u) : e.isNew ? j.intl.string(j.t["+F0Tho"]) : 0 !== e.lastPlayed ? (0, i.jsx)(y.ZP, {
        end: e.lastPlayed,
        location: y.ZP.Locations.GAME_LIBRARY_LAST_PLAYED
      }) : j.intl.string(j.t.EoWLrq), (0, i.jsx)(_.Z, {
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
    cellClassName: Chunk402723.actionsCell,
    render(e, t, n) {
      var r, a;
      if (null == t) throw Error("No cell props defined.");
      let s = e.key === t.activeRowKey;
      return (0, i.jsxs)(l.Fragment, {
        children: [(0, i.jsxs)("div", {
          className: x.settingIcons,
          children: [(0, i.jsx)(k, {
            flag: P.eHb.PRIVATE,
            item: e,
            icon: f.kZF,
            tooltip: j.intl.string(j.t.NozAoq)
          }), (0, i.jsx)(k, {
            flag: P.eHb.OVERLAY_DISABLED,
            item: e,
            icon: f.o8v,
            tooltip: j.intl.string(j.t.Az9eqq)
          }), (0, i.jsx)(N.Z, {
            className: o()(x.settingIcon, {
              [x.hidden]: !e.supportsCloudSync
            }),
            libraryApplication: e.libraryApplication
          })]
        }), (0, S.Je)(e.libraryApplication) ? (0, i.jsx)(b.Z, {
          analyticsListSort: (r = t.sortKey, a = t.sortDirection, "".concat(D[r], " ").concat(a === P.sHY.ASCENDING ? "ASC" : "DESC")),
          analyticsListIndex: n,
          source: P.Sbl.APPLICATION_LIBRARY,
          libraryApplication: e.libraryApplication,
          color: s ? p.zx.Colors.GREEN : p.zx.Colors.PRIMARY,
          isPlayShiny: s && e.defaultAction === P.apO.PLAY,
          size: x.actionButtonSize,
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
      children: (0, i.jsx)("div", Z({}, u))
    })
  };
class G extends(r = Chunk647438.PureComponent) {
  componentDidMount() {
    let {
      fetched: e
    } = this.props;
    module && (this.handleHighlightedApplicationKey(), this.trackViewed())
  }
  componentWillUnmount() {
    this._didUnmount = true
  }
  componentDidUpdate(e) {
    !e.fetched && this.props.fetched && (this.handleHighlightedApplicationKey(), this.trackViewed());
    let t = this.props.activeRowKey;
    if (null != t && e.activeRowKey !== t && this.props.isNavigatingByKeyboard) {
      let e = this._rowRefs[t];
      null != e && (h.Z.wait(g.Zy), this.props.scrollToRow(e, L))
    }
  }
  handleHighlightedApplicationKey() {
    let {
      highlightedApplicationKey: e
    } = this.state;
    null != module && null != this._rowRefs[module] && (this.props.scrollToRow(this._rowRefs[module], L), new Chunk846519.V7().start(R, () => {
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
    for (let t of require) {
      switch (exports.libraryApplication.getDistributor()) {
        case Chunk981631.GQo.DISCORD:
          module.num_applications_discord++;
          break;
        case Chunk981631.GQo.STEAM:
          module.num_applications_steam++;
          break;
        case Chunk981631.GQo.BATTLENET:
          module.num_applications_battlenet++;
          break;
        case Chunk981631.GQo.TWITCH:
          module.num_applications_twitch++;
          break;
        case Chunk981631.GQo.UPLAY:
          module.num_applications_uplay++;
          break;
        case Chunk981631.GQo.ORIGIN:
          module.num_applications_origin++;
          break;
        case Chunk981631.GQo.GOG:
          module.num_applications_gog++;
          break;
        case Chunk981631.GQo.EPIC:
          module.num_applications_epic++
      }
      module.num_applications_total++
    }
    Chunk626135.default.track(Chunk981631.rMx.LIBRARY_VIEWED, w(Z({}, module), {
      load_id: exports.loadId
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
      r = exports.length > 0;
    return r ? null : (e = "" !== require ? Chunk388032.intl.format(Chunk388032.t["4Q1TAg"], {
      query: require
    }) : Chunk388032.intl.string(Chunk388032.t["0Y+0PT"]), (0, Chunk951288.jsxs)("div", {
      className: r ? Chunk402723.emptyStateSmall : Chunk402723.emptyStateLarge,
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk402723.emptyWumpus
      }), (0, Chunk951288.jsx)(Chunk600164.Z, {
        grow: 0,
        shrink: +!!r,
        direction: Chunk600164.Z.Direction.VERTICAL,
        children: (0, Chunk951288.jsxs)("div", {
          className: Chunk402723.emptyStateText,
          children: [(0, Chunk951288.jsx)("div", {
            className: Chunk402723.emptyStateHeader,
            children: Chunk388032.intl.string(Chunk388032.t.Lw8X2t)
          }), (0, Chunk951288.jsx)("div", {
            className: Chunk402723.emptyStateDescription,
            children: module
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
    return (0, Chunk951288.jsxs)(Chunk647438.Fragment, {
      children: [require.length > 0 ? (0, Chunk951288.jsx)(Chunk167533.Z, {
        columns: M,
        data: require,
        sortData: false,
        rowComponent: U,
        className: Chunk402723.table,
        headerClassName: Chunk120356 ? Chunk402723.stickyHeader : Chunk402723.header,
        headerCellClassName: Chunk402723.headerCell,
        sortedHeaderCellClassName: Chunk402723.headerCellSorted,
        bodyCellClassName: Chunk402723.bodyCell,
        rowClassName: Chunk402723.row,
        sortKey: module,
        sortDirection: exports,
        stickyHeader: Chunk120356,
        rowProps: {
          activeRowKey: null != o ? o : r,
          highlightedApplicationKey: Chunk843611,
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
          sortKey: module,
          sortDirection: exports
        },
        onSort: this.handleSort
      }) : null, this.renderImportHelp()]
    })
  }
  constructor(...e) {
    super(...e), A(this, "_didUnmount", false), A(this, "_rowRefs", {}), A(this, "state", {
      overflowMenuRowKey: null,
      highlightedApplicationKey: null != this.props.location.state ? this.props.location.state.applicationId : null
    }), A(this, "setActiveRowKey", e => {
      this.setState({
        overflowMenuRowKey: e.key
      })
    }), A(this, "clearActiveRowKey", () => {
      this._didUnmount || this.setState({
        overflowMenuRowKey: null
      })
    }), A(this, "handleRowMouseEnter", e => {
      this.props.isNavigatingByKeyboard || m.wX(e.key)
    }), A(this, "handleRowMouseLeave", () => {
      this.props.isNavigatingByKeyboard || m.wX(null)
    }), A(this, "setRowRef", (e, t) => {
      this._rowRefs[t] = e
    }), A(this, "handleApplicationContextMenu", (e, t) => {
      this.setActiveRowKey(t);
      let {
        analyticsContext: r
      } = this.props;
      (0, g.jW)(e, async () => {
        let {
          default: e
        } = await n.e("98335").then(n.bind(n, 485292));
        return n => (0, i.jsx)(e, w(Z({}, n), {
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

function B(e) {
  let t = l.useContext(C.AnalyticsContext),
    n = (0, s.TH)(),
    {
      applicationViewItems: r,
      filterQuery: a,
      fetched: o
    } = (0, c.cj)([v.Z], () => ({
      applicationViewItems: v.Z.sortedFilteredLibraryApplicationViewItems,
      filterQuery: v.Z.applicationFilterQuery,
      fetched: v.Z.hasFetchedApplications
    })),
    {
      sortKey: u,
      sortDirection: d,
      activeRowKey: p,
      isNavigatingByKeyboard: f
    } = (0, c.cj)([I.Z], () => ({
      sortKey: I.Z.sortKey,
      sortDirection: I.Z.sortDirection,
      activeRowKey: I.Z.activeRowKey,
      isNavigatingByKeyboard: I.Z.isNavigatingByKeyboard
    }));
  return (0, i.jsx)(G, w(Z({}, e), {
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
A(G, "defaultProps", {
  stickyHeader: false
})