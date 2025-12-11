/** Chunk was on 1272 **/
/** chunk id: 665307, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => H
}), require("./415506.js"), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk828700 = require("./828700.js"),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk28664 = require("./28664.jsx"),
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
  Chunk901740 = require("./901740.js");

function Z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function w(e) {
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

function L(e, t) {
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
let R = (0, Chunk624138.Mg)(Chunk477690.Z.GAME_LIST_ROW_MIN_HEIGHT),
  D = (0, Chunk624138.Mg)(Chunk477690.Z.GAME_LIST_LINKED_TO_GLOW_DURATION),
  M = Object.freeze({
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
    return (0, i.jsxs)(d.u, {
      text: l,
      children: ["(", (0, i.jsx)(n, {
        className: s()(A.settingIcon, {
          [A.hidden]: !a
        })
      }), ")"]
    })
  },
  U = [{
    key: Chunk981631.iEv.NAME,
    renderHeader: () => Chunk388032.intl.string(Chunk388032.t.dBfWfc),
    sort: true,
    cellClassName: Chunk901740.nameCell,
    bodyCellClassName: Chunk901740.nameBodyCell,
    render: e => (0, i.jsxs)(E.Z, {
      align: E.Z.Align.CENTER,
      children: [(0, i.jsx)(v.Z, {
        game: e.application,
        size: v.A.SMALL,
        className: A.gameIcon
      }), (0, i.jsxs)("div", {
        className: A.nameCellInfo,
        children: [(0, i.jsx)("div", {
          className: A.nameCellText,
          children: e.libraryApplication.getBranchedName(e.application)
        }), e.libraryApplication.hasFlag(P.eHb.PREMIUM) ? (0, i.jsxs)(d.u, {
          text: x.intl.string(x.t.tG2SzG),
          children: ["(", (0, i.jsx)(g.SrA, {
            size: "md",
            color: "currentColor",
            className: A.nitroIcon
          }), ")"]
        }) : null]
      })]
    })
  }, {
    key: Chunk981631.iEv.PLATFORM,
    renderHeader: () => Chunk388032.intl.string(Chunk388032.t.YR4cHH),
    sort: true,
    cellClassName: Chunk901740.platformCell,
    bodyCellClassName: Chunk901740.textCell,
    render(e) {
      let t = e.libraryApplication.getDistributor();
      return (0, i.jsx)(E.Z, {
        align: E.Z.Align.CENTER,
        children: null != t ? P.EOG[t] : x.intl.string(x.t["F+l3Jt"])
      })
    }
  }, {
    key: Chunk981631.iEv.LAST_PLAYED,
    renderHeader: () => Chunk388032.intl.string(Chunk388032.t.FDDyjS),
    sort: true,
    cellClassName: Chunk901740.lastPlayedCell,
    bodyCellClassName: Chunk901740.textCell,
    render(e) {
      let t;
      return t = e.isRunning ? x.intl.string(x.t.Md326p) : e.isNew ? x.intl.string(x.t["+F0Tho"]) : 0 !== e.lastPlayed ? (0, i.jsx)(y.ZP, {
        end: e.lastPlayed,
        location: y.ZP.Locations.GAME_LIBRARY_LAST_PLAYED
      }) : x.intl.string(x.t.EoWLru), (0, i.jsx)(E.Z, {
        align: E.Z.Align.CENTER,
        className: s()({
          [A.lastPlayedCellNew]: e.isNew
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
      let o = e.key === t.activeRowKey;
      return (0, i.jsxs)(l.Fragment, {
        children: [(0, i.jsxs)("div", {
          className: A.settingIcons,
          children: [(0, i.jsx)(k, {
            flag: P.eHb.PRIVATE,
            item: e,
            icon: g.kZF,
            tooltip: x.intl.string(x.t.NozAop)
          }), (0, i.jsx)(k, {
            flag: P.eHb.OVERLAY_DISABLED,
            item: e,
            icon: g.o8v,
            tooltip: x.intl.string(x.t.Az9eqn)
          }), (0, i.jsx)(j.Z, {
            className: s()(A.settingIcon, {
              [A.hidden]: !e.supportsCloudSync
            }),
            libraryApplication: e.libraryApplication
          })]
        }), (0, T.Je)(e.libraryApplication) ? (0, i.jsx)(_.Z, {
          analyticsListSort: (r = t.sortKey, a = t.sortDirection, "".concat(M[r], " ").concat(a === P.sHY.ASCENDING ? "ASC" : "DESC")),
          analyticsListIndex: n,
          source: P.Sbl.APPLICATION_LIBRARY,
          libraryApplication: e.libraryApplication,
          color: o ? f.zx.Colors.GREEN : f.zx.Colors.PRIMARY,
          isPlayShiny: o && e.defaultAction === P.apO.PLAY,
          size: A.actionButtonSize,
          hideProgress: null != e.defaultAction,
          onDropdownOpen: () => null != t && t.setActiveRowKey(e),
          onDropdownClose: () => null != t && t.clearActiveRowKey()
        }) : (0, i.jsx)("div", {
          children: "deprecated!"
        })]
      })
    }
  }],
  G = e => {
    var {
      item: t,
      activeRowKey: n,
      highlightedApplicationKey: r,
      onMouseEnter: l,
      onMouseLeave: a,
      onContextMenu: o,
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
      className: s()({
        [A.rowWrapperActive]: d && !p,
        [A.rowWrapperGlow]: p,
        [A.rowWrapper]: !d && !p,
        [A.rowWrapperDim]: !d && !t.isLaunchable
      }),
      ref: e => {
        c(e, t.key)
      },
      onMouseEnter: () => l(t),
      onMouseLeave: a,
      onContextMenu: e => o(e, t),
      children: (0, i.jsx)("div", w({}, u))
    })
  };
class B extends(r = Chunk473749.PureComponent) {
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
      null != e && (h.Z.wait(m.Zy), this.props.scrollToRow(e, R))
    }
  }
  handleHighlightedApplicationKey() {
    let {
      highlightedApplicationKey: e
    } = this.state;
    null != module && null != this._rowRefs[module] && (this.props.scrollToRow(this._rowRefs[module], R), new Chunk846519.V7().start(D, () => {
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
    Chunk626135.default.track(Chunk981631.rMx.LIBRARY_VIEWED, L(w({}, module), {
      load_id: exports.loadId
    }))
  }
  handleSort(e, t) {
    b.fS(e, t)
  }
  renderImportHelp() {
    let e, {
        applicationViewItems: t,
        filterQuery: n
      } = this.props,
      r = exports.length > 0;
    return r ? null : (e = "" !== require ? Chunk388032.intl.format(Chunk388032.t["4Q1TAr"], {
      query: require
    }) : Chunk388032.intl.string(Chunk388032.t["0Y+0PY"]), (0, Chunk54381.jsxs)("div", {
      className: r ? Chunk901740.emptyStateSmall : Chunk901740.emptyStateLarge,
      children: [(0, Chunk54381.jsx)("div", {
        className: Chunk901740.emptyWumpus
      }), (0, Chunk54381.jsx)(Chunk600164.Z, {
        grow: 0,
        shrink: +!!r,
        direction: Chunk600164.Z.Direction.VERTICAL,
        children: (0, Chunk54381.jsxs)("div", {
          className: Chunk901740.emptyStateText,
          children: [(0, Chunk54381.jsx)("div", {
            className: Chunk901740.emptyStateHeader,
            children: Chunk388032.intl.string(Chunk388032.t.Lw8X2j)
          }), (0, Chunk54381.jsx)("div", {
            className: Chunk901740.emptyStateDescription,
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
      overflowMenuRowKey: s,
      highlightedApplicationKey: o
    } = this.state;
    return (0, Chunk54381.jsxs)(Chunk473749.Fragment, {
      children: [require.length > 0 ? (0, Chunk54381.jsx)(Chunk167533.Z, {
        columns: U,
        data: require,
        sortData: false,
        rowComponent: G,
        className: Chunk901740.table,
        headerClassName: Chunk120356 ? Chunk901740.stickyHeader : Chunk901740.header,
        headerCellClassName: Chunk901740.headerCell,
        sortedHeaderCellClassName: Chunk901740.headerCellSorted,
        bodyCellClassName: Chunk901740.bodyCell,
        rowClassName: Chunk901740.row,
        sortKey: module,
        sortDirection: exports,
        stickyHeader: Chunk120356,
        rowProps: {
          activeRowKey: null != s ? s : r,
          highlightedApplicationKey: Chunk828700,
          onMouseEnter: this.handleRowMouseEnter,
          onMouseLeave: this.handleRowMouseLeave,
          onContextMenu: this.handleApplicationContextMenu,
          setRef: this.setRowRef
        },
        cellProps: {
          activeRowKey: null != s ? s : r,
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
      this.props.isNavigatingByKeyboard || b.wX(e.key)
    }), Z(this, "handleRowMouseLeave", () => {
      this.props.isNavigatingByKeyboard || b.wX(null)
    }), Z(this, "setRowRef", (e, t) => {
      this._rowRefs[t] = e
    }), Z(this, "handleApplicationContextMenu", (e, t) => {
      this.setActiveRowKey(t);
      let {
        analyticsContext: r
      } = this.props;
      (0, m.jW)(e, async () => {
        let {
          default: e
        } = await n.e("98335").then(n.bind(n, 485292));
        return n => (0, i.jsx)(e, L(w({}, n), {
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
  let t = l.useContext(S.AnalyticsContext),
    n = (0, o.TH)(),
    {
      applicationViewItems: r,
      filterQuery: a,
      fetched: s
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
    } = (0, c.cj)([C.Z], () => ({
      sortKey: C.Z.sortKey,
      sortDirection: C.Z.sortDirection,
      activeRowKey: C.Z.activeRowKey,
      isNavigatingByKeyboard: C.Z.isNavigatingByKeyboard
    }));
  return (0, i.jsx)(B, L(w({}, e), {
    analyticsContext: t,
    location: n,
    applicationViewItems: r,
    filterQuery: a,
    fetched: s,
    sortKey: u,
    sortDirection: d,
    activeRowKey: p,
    isNavigatingByKeyboard: f
  }))
}
Z(B, "defaultProps", {
  stickyHeader: false
})