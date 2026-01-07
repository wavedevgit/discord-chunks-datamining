/** Chunk was on 41700 **/
/** chunk id: 656396, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
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
  Chunk28964 = require("./28964.js"),
  Chunk611004 = require("./611004.jsx"),
  Chunk770092 = require("./770092.js"),
  Chunk315322 = require("./315322.js"),
  Chunk971212 = require("./971212.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk560911 = require("./560911.js");

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

function _(e, t) {
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

function S(e) {
  let {
    searchContext: t,
    searchMode: n,
    onSearchModeChange: l,
    totalResults: o,
    isIndexing: c,
    isSearching: p,
    documentsIndexed: h,
    selectedChannelId: y
  } = e, I = (0, g.kU)({
    location: "SearchHeader"
  }), _ = (0, b.I)(t), {
    totalFilters: S
  } = (0, O.p4)(_, t), Z = i.useMemo(() => {
    if (t.type === x.aib.DMS) {
      var e, n;
      let t = null != (n = null == (e = (0, f.$G)(_).channel_id) ? true : e.length) ? n : 0;
      return t > 0 ? v.intl.format(v.t.A2dqWG, {
        filterCount: t
      }) : v.intl.string(v.t.tc619d)
    }
    return null
  }, [t.type, _]), [P, T] = i.useState(null), N = i.useMemo(() => p ? [] : [s.z.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER], [p]), [A, D] = (0, u.US)(N), L = A === s.z.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER, M = i.useCallback(e => {
    null != e && L && D(j.L.USER_DISMISS), T(e)
  }, [D, L]), k = i.useCallback(e => {
    D("user:explicit" === e ? j.L.USER_DISMISS : j.L.AUTO_DISMISS)
  }, [D]), U = i.useCallback(() => {
    M(null), m.Z.openSearchFiltersModal(t)
  }, [t, M]), G = i.useMemo(() => S > 0 ? v.intl.format(v.t.uaR4sI, {
    filterCount: S
  }) : v.intl.string(v.t.UdhTtk), [S]), H = t.type === x.aib.DMS || t.type === x.aib.CHANNEL, F = i.useMemo(() => I ? (0, r.jsxs)("div", {
    className: C.searchModeAndFiltersContainer,
    children: [(0, r.jsx)(d.Button, {
      variant: "secondary",
      onClick: U,
      text: G,
      icon: d.gXV,
      size: "sm"
    }), (0, r.jsx)(w, {
      searchMode: n,
      onSearchModeChange: l,
      isPopoutOpen: "sort" === P,
      setOpenPopout: M
    }), H && (0, r.jsx)(R, {
      searchContext: t,
      selectedChannelId: y,
      isPopoutOpen: "settings" === P,
      setOpenPopout: M,
      isPopoverVisible: L,
      onPopoverRequestClose: k
    })]
  }) : (0, r.jsxs)("div", {
    className: C.searchModeAndFiltersContainer,
    children: [(0, r.jsx)(w, {
      searchMode: n,
      onSearchModeChange: l,
      isPopoutOpen: "sort" === P,
      setOpenPopout: M
    }), H && (0, r.jsx)(R, {
      searchContext: t,
      selectedChannelId: y,
      isPopoutOpen: "settings" === P,
      setOpenPopout: M,
      isPopoverVisible: L,
      onPopoverRequestClose: k
    })]
  }), [G, U, I, P, H, l, t, n, y, L, M, k]);
  return (0, r.jsxs)("header", {
    className: a()(C.searchHeader, {
      [C.searchHeaderWithSubtitle]: null != Z
    }),
    children: [(0, r.jsx)("div", {
      className: C.totalResults,
      role: "status",
      children: (0, r.jsx)(E, {
        totalResults: o,
        subtitle: Z,
        isIndexing: c,
        isSearching: p,
        documentsIndexed: h
      })
    }), F]
  })
}

function E(e) {
  let {
    totalResults: t,
    subtitle: n,
    isSearching: i,
    isIndexing: l,
    documentsIndexed: a
  } = e;
  return l ? (0, r.jsx)(P, {
    documentsIndexed: a
  }) : i ? (0, r.jsx)(T, {}) : (0, r.jsx)(N, {
    totalResults: t,
    subtitle: n
  })
}

function Z() {
  return (0, Chunk54381.jsx)("div", {
    className: Chunk560911.spinnerWrapper,
    children: (0, Chunk54381.jsx)(Chunk481060.$jN, {
      type: Chunk481060.$jN.Type.SPINNING_CIRCLE,
      className: Chunk560911.spinner,
      itemClassName: Chunk560911.spinnerPath
    })
  })
}

function P(e) {
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
        children: (0, r.jsx)(d.eee, {
          className: C.helpdeskLink,
          href: h.Z.getArticleURL(x.BhN.SEARCH_INDEXING),
          children: v.intl.string(v.t["G3EA+4"])
        })
      }), (0, r.jsx)(Z, {})]
    })
  })
}

function T() {
  return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
    children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-md/medium",
      color: "text-default",
      children: Chunk388032.intl.string(Chunk388032.t.uixzLf)
    }), (0, Chunk54381.jsx)(Z, {})]
  })
}

function N(e) {
  let {
    totalResults: t,
    subtitle: n
  } = e, i = (0, r.jsx)(d.Text, {
    variant: "text-md/medium",
    color: "text-strong",
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

function R(e) {
  let {
    searchContext: t,
    selectedChannelId: n,
    isPopoutOpen: l,
    setOpenPopout: a,
    onPopoverRequestClose: s,
    isPopoverVisible: c
  } = e, u = i.useRef(null), h = p.rR.useSetting(), f = i.useCallback(e => {
    if (h !== e) {
      if ((0, y.yn)({
          searchContext: t,
          prevIsCrossDMSettingEnabled: p.rR.getSetting(),
          isCrossDMSettingEnabled: e,
          location: y.Ix.SEARCH_HEADER
        }), e) {
        let e = {
          type: x.aib.DMS
        };
        m.Z.transitionStateToSearchContext(t, e, m.Z.cleanUpPrivateChannelSearchState)
      } else {
        let e = {
          type: x.aib.CHANNEL,
          channelId: n
        };
        m.Z.transitionStateToSearchContext(t, e)
      }
      a(null), p.rR.updateSetting(e)
    }
  }, [h, a, t, n]), [g, b] = i.useMemo(() => [h ? v.intl.string(v.t["8lklch"]) : v.intl.string(v.t.ji3jTF), h ? v.intl.string(v.t.RMQZCa) : v.intl.string(v.t["v/PagC"])], [h]), O = i.useMemo(() => ({
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
      children: e => (0, r.jsx)(d.hU, _(I({}, e), {
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
      body: b,
      caretConfig: O,
      badge: "new"
    })]
  })
}

function w(e) {
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
    children: e => (0, r.jsx)(d.Button, _(I({}, e), {
      buttonRef: s,
      variant: "secondary",
      icon: d.uVW,
      onClick: () => {
        a(l ? null : "sort")
      },
      text: v.intl.string(v.t.XvNMNk),
      "aria-label": v.intl.string(v.t.XvNMNk),
      size: "sm"
    }))
  })
}