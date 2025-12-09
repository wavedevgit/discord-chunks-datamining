/** Chunk was on 91053 **/
/** chunk id: 406326, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk704215 = require("./704215.js"),
  Chunk907862 = require("./907862.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk63063 = require("./63063.js"),
  Chunk607802 = require("./607802.js"),
  Chunk945577 = require("./945577.js"),
  Chunk28964 = require("./28964.js"),
  Chunk465524 = require("./465524.jsx"),
  Chunk611004 = require("./611004.jsx"),
  Chunk770092 = require("./770092.js"),
  Chunk315322 = require("./315322.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk865239 = require("./865239.js");

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function S(e, t) {
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

function E(e) {
  let {
    searchContext: t,
    searchMode: n,
    onSearchModeChange: l,
    totalResults: o,
    isIndexing: c,
    isSearching: p,
    documentsIndexed: h,
    selectedChannelId: O
  } = e, I = (0, m.kU)({
    location: "SearchHeader"
  }), S = (0, y.I)(t), {
    totalFilters: E
  } = (0, b.p4)(S, t), P = i.useMemo(() => {
    if (t.type === x.aib.DMS) {
      var e, n;
      let t = null != (n = null == (e = (0, f.$G)(S).channel_id) ? true : e.length) ? n : 0;
      return t > 0 ? v.intl.format(v.t.A2dqWG, {
        filterCount: t
      }) : v.intl.string(v.t.tc619d)
    }
    return null
  }, [t.type, S]), [T, N] = i.useState(null), R = i.useMemo(() => p ? [] : [s.z.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER], [p]), [D, L] = (0, u.US)(R), M = D === s.z.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER, k = i.useCallback(e => {
    null != e && M && L(j.L.USER_DISMISS), N(e)
  }, [L, M]), U = i.useCallback(e => {
    L("user:explicit" === e ? j.L.USER_DISMISS : j.L.AUTO_DISMISS)
  }, [L]), G = i.useCallback(() => {
    k(null), _.Z.openSearchFiltersModal(t)
  }, [t, k]), H = i.useMemo(() => E > 0 ? v.intl.format(v.t.uaR4sI, {
    filterCount: E
  }) : v.intl.string(v.t.UdhTtk), [E]), F = (0, g.U)({
    location: "SearchHeader"
  }), B = t.type === x.aib.DMS || t.type === x.aib.CHANNEL, V = i.useMemo(() => I && F ? (0, r.jsxs)("div", {
    className: C.searchModeAndFiltersContainer,
    children: [(0, r.jsx)(d.Button, {
      variant: "secondary",
      onClick: G,
      text: H,
      icon: d.gXV,
      size: "sm"
    }), (0, r.jsx)(A, {
      searchMode: n,
      onSearchModeChange: l,
      isPopoutOpen: "sort" === T,
      setOpenPopout: k
    }), B && (0, r.jsx)(w, {
      searchContext: t,
      selectedChannelId: O,
      isPopoutOpen: "settings" === T,
      setOpenPopout: k,
      isPopoverVisible: M,
      onPopoverRequestClose: U
    })]
  }) : I ? (0, r.jsxs)("div", {
    className: C.searchModeAndFiltersContainer,
    children: [(0, r.jsx)(d.Button, {
      variant: "secondary",
      onClick: G,
      text: H,
      icon: d.gXV,
      size: "sm"
    }), (0, r.jsx)(A, {
      searchMode: n,
      onSearchModeChange: l,
      isPopoutOpen: "sort" === T,
      setOpenPopout: k
    })]
  }) : F ? (0, r.jsxs)("div", {
    className: C.searchModeAndFiltersContainer,
    children: [(0, r.jsx)(A, {
      searchMode: n,
      onSearchModeChange: l,
      isPopoutOpen: "sort" === T,
      setOpenPopout: k
    }), B && (0, r.jsx)(w, {
      searchContext: t,
      selectedChannelId: O,
      isPopoutOpen: "settings" === T,
      setOpenPopout: k,
      isPopoverVisible: M,
      onPopoverRequestClose: U
    })]
  }) : (0, r.jsxs)(d.njP, {
    orientation: "horizontal",
    className: C.searchHeaderTabList,
    selectedItem: n,
    onItemSelect: l,
    children: [(0, r.jsx)(d.njP.Item, {
      className: C.searchHeaderTab,
      id: x.QIO.NEWEST,
      children: v.intl.string(v.t.rLjqbS)
    }), (0, r.jsx)(d.njP.Item, {
      className: C.searchHeaderTab,
      id: x.QIO.OLDEST,
      children: v.intl.string(v.t.a1BaUr)
    }), (0, r.jsx)(d.njP.Item, {
      className: C.searchHeaderTab,
      id: x.QIO.MOST_RELEVANT,
      children: v.intl.string(v.t.FtR97k)
    })]
  }), [H, G, I, T, F, B, l, t, n, O, M, k, U]);
  return (0, r.jsxs)("header", {
    className: a()(C.searchHeader, {
      [C.searchHeaderWithSubtitle]: null != P
    }),
    children: [(0, r.jsx)("div", {
      className: C.totalResults,
      role: "status",
      children: (0, r.jsx)(Z, {
        totalResults: o,
        subtitle: P,
        isIndexing: c,
        isSearching: p,
        documentsIndexed: h
      })
    }), V]
  })
}

function Z(e) {
  let {
    totalResults: t,
    subtitle: n,
    isSearching: i,
    isIndexing: l,
    documentsIndexed: a
  } = e;
  return l ? (0, r.jsx)(T, {
    documentsIndexed: a
  }) : i ? (0, r.jsx)(N, {}) : (0, r.jsx)(R, {
    totalResults: t,
    subtitle: n
  })
}

function P() {
  return (0, Chunk54381.jsx)("div", {
    className: Chunk865239.spinnerWrapper,
    children: (0, Chunk54381.jsx)(Chunk481060.$jN, {
      type: Chunk481060.$jN.Type.SPINNING_CIRCLE,
      className: Chunk865239.spinner,
      itemClassName: Chunk865239.spinnerPath
    })
  })
}

function T(e) {
  let {
    documentsIndexed: t
  } = e;
  return (0, r.jsx)(c.u, {
    asContainer: true,
    text: v.intl.formatToPlainString(v.t["4Y3O+O"], {
      count: null != t ? t : ""
    }),
    children: (0, r.jsxs)("div", {
      className: C.totalResultsWrapper,
      children: [(0, r.jsx)(d.Text, {
        variant: "text-md/medium",
        color: "text-muted",
        children: (0, r.jsx)(d.Anchor, {
          className: C.helpdeskLink,
          href: h.Z.getArticleURL(x.BhN.SEARCH_INDEXING),
          children: v.intl.string(v.t["G3EA+4"])
        })
      }), (0, r.jsx)(P, {})]
    })
  })
}

function N() {
  return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
    children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-md/medium",
      color: "text-default",
      children: Chunk388032.intl.string(Chunk388032.t.uixzLf)
    }), (0, Chunk54381.jsx)(P, {})]
  })
}

function R(e) {
  let {
    totalResults: t,
    subtitle: n
  } = e, i = (0, r.jsx)(d.Text, {
    variant: "text-md/medium",
    color: "header-primary",
    children: v.intl.format(v.t.ZGVL3g, {
      count: t
    })
  });
  return null != n ? (0, r.jsxs)("div", {
    className: C.totalResultsWithSubtitle,
    children: [i, (0, r.jsx)(d.Text, {
      variant: "text-xs/medium",
      color: "text-subtle",
      children: n
    })]
  }) : i
}

function w(e) {
  let {
    searchContext: t,
    selectedChannelId: n,
    isPopoutOpen: l,
    setOpenPopout: a,
    onPopoverRequestClose: s,
    isPopoverVisible: c
  } = e, u = i.useRef(null), h = p.rR.useSetting(), f = i.useCallback(e => {
    if (h !== e) {
      if ((0, O.yn)({
          searchContext: t,
          prevIsCrossDMSettingEnabled: p.rR.getSetting(),
          isCrossDMSettingEnabled: e,
          location: O.Ix.SEARCH_HEADER
        }), e) {
        let e = {
          type: x.aib.DMS
        };
        _.Z.transitionStateToSearchContext(t, e, _.Z.cleanUpPrivateChannelSearchState)
      } else {
        let e = {
          type: x.aib.CHANNEL,
          channelId: n
        };
        _.Z.transitionStateToSearchContext(t, e)
      }
      a(null), p.rR.updateSetting(e)
    }
  }, [h, a, t, n]), [g, m] = i.useMemo(() => [h ? v.intl.string(v.t["8lklch"]) : v.intl.string(v.t.ji3jTF), h ? v.intl.string(v.t.RMQZCa) : v.intl.string(v.t["v/PagC"])], [h]), b = i.useMemo(() => ({
    align: "end"
  }), []);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.yRy, {
      targetElementRef: u,
      shouldShow: l,
      animation: d.yRy.Animation.NONE,
      position: "bottom",
      align: "right",
      onRequestClose: () => a(null),
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, r.jsx)(d.v2r, {
          navId: "search-settings-cog",
          onClose: t,
          "aria-label": v.intl.string(v.t.fb59v0),
          onSelect: () => a(null),
          children: (0, r.jsxs)(d.kSQ, {
            label: v.intl.string(v.t["/tMwrA"]),
            children: [(0, r.jsx)(d.k5B, {
              id: "xdm-search-disabled",
              group: "xdm-search-items",
              label: v.intl.string(v.t.jRkYAh),
              checked: !h,
              action: () => f(false)
            }), (0, r.jsx)(d.k5B, {
              id: "xdm-search-enabled",
              group: "xdm-search-items",
              label: v.intl.string(v.t["lWpJ/t"]),
              checked: h,
              action: () => f(true)
            })]
          }, "xdm-search-items")
        })
      },
      children: e => (0, r.jsx)(d.hU, S(I({}, e), {
        buttonRef: u,
        variant: "secondary",
        icon: d.ewm,
        onClick: () => {
          a(l ? null : "settings")
        },
        "aria-label": v.intl.string(v.t["3D5yo/"]),
        size: "sm"
      }))
    }), (0, r.jsx)(o.J2, {
      targetElementRef: u,
      shouldShow: c,
      onRequestClose: s,
      title: g,
      body: m,
      caretConfig: b,
      badge: "new"
    })]
  })
}

function A(e) {
  let {
    searchMode: t,
    onSearchModeChange: n,
    isPopoutOpen: l,
    setOpenPopout: a
  } = e, s = i.useRef(null), o = i.useMemo(() => [{
    label: v.intl.string(v.t.CbaapP),
    value: x.QIO.NEWEST
  }, {
    label: v.intl.string(v.t.OukXZj),
    value: x.QIO.OLDEST
  }, {
    label: v.intl.string(v.t.q8gB52),
    value: x.QIO.MOST_RELEVANT
  }], []), c = i.useCallback(e => {
    a(null), n(e)
  }, [a, n]);
  return (0, r.jsx)(d.yRy, {
    targetElementRef: s,
    shouldShow: l,
    animation: d.yRy.Animation.NONE,
    position: "bottom",
    align: "right",
    onRequestClose: () => a(null),
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, r.jsx)(d.v2r, {
        navId: "search-result-sort-menu",
        onClose: n,
        "aria-label": v.intl.string(v.t.utp2hS),
        onSelect: () => a(null),
        children: (0, r.jsx)(d.kSQ, {
          children: o.map(e => {
            let {
              label: n,
              value: i
            } = e;
            return (0, r.jsx)(d.k5B, {
              group: "sort-by",
              id: "sort-by-option-".concat(i),
              label: n,
              action: () => c(i),
              checked: t === i
            }, i)
          })
        }, "sort-by")
      })
    },
    children: e => (0, r.jsx)(d.hU, S(I({}, e), {
      buttonRef: s,
      variant: "secondary",
      icon: d.uVW,
      onClick: () => {
        a(l ? null : "sort")
      },
      "aria-label": v.intl.string(v.t.XvNMNk),
      size: "sm"
    }))
  })
}