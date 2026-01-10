/** Chunk was on 81985 **/
/** chunk id: 656396, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
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

function E(e) {
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

function _(e) {
  let {
    searchContext: t,
    searchMode: n,
    onSearchModeChange: l,
    totalResults: s,
    isIndexing: c,
    isSearching: p,
    documentsIndexed: f,
    selectedChannelId: y
  } = e, E = (0, g.kU)({
    location: "SearchHeader"
  }), S = (0, b.I)(t), {
    totalFilters: _
  } = (0, v.p4)(S, t), P = i.useMemo(() => {
    if (t.type === O.aib.DMS) {
      var e, n;
      let t = null != (n = null == (e = (0, h.$G)(S).channel_id) ? true : e.length) ? n : 0;
      return t > 0 ? x.intl.format(x.t.A2dqWG, {
        filterCount: t
      }) : x.intl.string(x.t.tc619d)
    }
    return null
  }, [t.type, S]), [Z, N] = i.useState(null), T = i.useMemo(() => p ? [] : [o.z.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER], [p]), [R, D] = (0, d.US)(T), M = R === o.z.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER, k = i.useCallback(e => {
    null != e && M && D(j.L.USER_DISMISS), N(e)
  }, [D, M]), L = i.useCallback(e => {
    D("user:explicit" === e ? j.L.USER_DISMISS : j.L.AUTO_DISMISS)
  }, [D]), U = i.useCallback(() => {
    k(null), m.Z.openSearchFiltersModal(t)
  }, [t, k]), G = i.useMemo(() => _ > 0 ? x.intl.format(x.t.uaR4sI, {
    filterCount: _
  }) : x.intl.string(x.t.UdhTtk), [_]), B = t.type === O.aib.DMS || t.type === O.aib.CHANNEL, F = i.useMemo(() => E ? (0, r.jsxs)("div", {
    className: C.searchModeAndFiltersContainer,
    children: [(0, r.jsx)(u.Button, {
      variant: "secondary",
      onClick: U,
      text: G,
      icon: u.gXV,
      size: "sm"
    }), (0, r.jsx)(w, {
      searchMode: n,
      onSearchModeChange: l,
      isPopoutOpen: "sort" === Z,
      setOpenPopout: k
    }), B && (0, r.jsx)(A, {
      searchContext: t,
      selectedChannelId: y,
      isPopoutOpen: "settings" === Z,
      setOpenPopout: k,
      isPopoverVisible: M,
      onPopoverRequestClose: L
    })]
  }) : (0, r.jsxs)("div", {
    className: C.searchModeAndFiltersContainer,
    children: [(0, r.jsx)(w, {
      searchMode: n,
      onSearchModeChange: l,
      isPopoutOpen: "sort" === Z,
      setOpenPopout: k
    }), B && (0, r.jsx)(A, {
      searchContext: t,
      selectedChannelId: y,
      isPopoutOpen: "settings" === Z,
      setOpenPopout: k,
      isPopoverVisible: M,
      onPopoverRequestClose: L
    })]
  }), [G, U, E, Z, B, l, t, n, y, M, k, L]);
  return (0, r.jsxs)("header", {
    className: a()(C.searchHeader, {
      [C.searchHeaderWithSubtitle]: null != P
    }),
    children: [(0, r.jsx)("div", {
      className: C.totalResults,
      role: "status",
      children: (0, r.jsx)(I, {
        totalResults: s,
        subtitle: P,
        isIndexing: c,
        isSearching: p,
        documentsIndexed: f
      })
    }), F]
  })
}

function I(e) {
  let {
    totalResults: t,
    subtitle: n,
    isSearching: i,
    isIndexing: l,
    documentsIndexed: a
  } = e;
  return l ? (0, r.jsx)(Z, {
    documentsIndexed: a
  }) : i ? (0, r.jsx)(N, {}) : (0, r.jsx)(T, {
    totalResults: t,
    subtitle: n
  })
}

function P() {
  return (0, r.jsx)("div", {
    className: C.spinnerWrapper,
    children: (0, r.jsx)(u.$jN, {
      type: u.$jN.Type.SPINNING_CIRCLE,
      className: C.spinner,
      itemClassName: C.spinnerPath
    })
  })
}

function Z(e) {
  let {
    documentsIndexed: t
  } = e;
  return (0, r.jsx)(c.u, {
    asContainer: true,
    text: x.intl.formatToPlainString(x.t["4Y3O+O"], {
      count: null != t ? t : ""
    }),
    children: (0, r.jsxs)("div", {
      className: C.totalResultsWrapper,
      children: [(0, r.jsx)(u.Text, {
        variant: "text-md/medium",
        color: "text-muted",
        children: (0, r.jsx)(u.eee, {
          className: C.helpdeskLink,
          href: f.Z.getArticleURL(O.BhN.SEARCH_INDEXING),
          children: x.intl.string(x.t["G3EA+4"])
        })
      }), (0, r.jsx)(P, {})]
    })
  })
}

function N() {
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.Text, {
      variant: "text-md/medium",
      color: "text-default",
      children: x.intl.string(x.t.uixzLf)
    }), (0, r.jsx)(P, {})]
  })
}

function T(e) {
  let {
    totalResults: t,
    subtitle: n
  } = e, i = (0, r.jsx)(u.Text, {
    variant: "text-md/medium",
    color: "text-strong",
    children: x.intl.format(x.t.ZGVL3g, {
      count: t
    })
  });
  return null != n ? (0, r.jsxs)("div", {
    className: C.totalResultsWithSubtitle,
    children: [i, (0, r.jsx)(u.Text, {
      variant: "text-xs/medium",
      color: "text-subtle",
      children: n
    })]
  }) : i
}

function A(e) {
  let {
    searchContext: t,
    selectedChannelId: n,
    isPopoutOpen: l,
    setOpenPopout: a,
    onPopoverRequestClose: o,
    isPopoverVisible: c
  } = e, d = i.useRef(null), f = p.rR.useSetting(), h = i.useCallback(e => {
    if (f !== e) {
      if ((0, y.yn)({
          searchContext: t,
          prevIsCrossDMSettingEnabled: p.rR.getSetting(),
          isCrossDMSettingEnabled: e,
          location: y.Ix.SEARCH_HEADER
        }), e) {
        let e = {
          type: O.aib.DMS
        };
        m.Z.transitionStateToSearchContext(t, e, m.Z.cleanUpPrivateChannelSearchState)
      } else {
        let e = {
          type: O.aib.CHANNEL,
          channelId: n
        };
        m.Z.transitionStateToSearchContext(t, e)
      }
      a(null), p.rR.updateSetting(e)
    }
  }, [f, a, t, n]), [g, b] = i.useMemo(() => [f ? x.intl.string(x.t["8lklch"]) : x.intl.string(x.t.ji3jTF), f ? x.intl.string(x.t.RMQZCa) : x.intl.string(x.t["v/PagC"])], [f]), v = i.useMemo(() => ({
    align: "end"
  }), []);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.yRy, {
      targetElementRef: d,
      shouldShow: l,
      animation: u.yRy.Animation.NONE,
      position: "bottom",
      align: "right",
      onRequestClose: () => a(null),
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, r.jsx)(u.v2r, {
          navId: "search-settings-cog",
          onClose: t,
          "aria-label": x.intl.string(x.t.fb59v0),
          onSelect: () => a(null),
          children: (0, r.jsxs)(u.kSQ, {
            label: x.intl.string(x.t["/tMwrA"]),
            children: [(0, r.jsx)(u.k5B, {
              id: "xdm-search-disabled",
              group: "xdm-search-items",
              label: x.intl.string(x.t.jRkYAh),
              checked: !f,
              action: () => h(false)
            }), (0, r.jsx)(u.k5B, {
              id: "xdm-search-enabled",
              group: "xdm-search-items",
              label: x.intl.string(x.t["lWpJ/t"]),
              checked: f,
              action: () => h(true)
            })]
          }, "xdm-search-items")
        })
      },
      children: e => (0, r.jsx)(u.hU, S(E({}, e), {
        buttonRef: d,
        variant: "secondary",
        icon: u.ewm,
        onClick: () => {
          a(l ? null : "settings")
        },
        "aria-label": x.intl.string(x.t["3D5yo/"]),
        size: "sm"
      }))
    }), (0, r.jsx)(s.J2, {
      targetElementRef: d,
      shouldShow: c,
      onRequestClose: o,
      title: g,
      body: b,
      caretConfig: v,
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
  } = e, o = i.useRef(null), s = i.useMemo(() => [{
    label: x.intl.string(x.t.CbaapP),
    value: O.QIO.NEWEST
  }, {
    label: x.intl.string(x.t.OukXZj),
    value: O.QIO.OLDEST
  }, {
    label: x.intl.string(x.t.q8gB52),
    value: O.QIO.MOST_RELEVANT
  }], []), c = i.useCallback(e => {
    a(null), n(e)
  }, [a, n]);
  return (0, r.jsx)(u.yRy, {
    targetElementRef: o,
    shouldShow: l,
    animation: u.yRy.Animation.NONE,
    position: "bottom",
    align: "right",
    onRequestClose: () => a(null),
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, r.jsx)(u.v2r, {
        navId: "search-result-sort-menu",
        onClose: n,
        "aria-label": x.intl.string(x.t.utp2hS),
        onSelect: () => a(null),
        children: (0, r.jsx)(u.kSQ, {
          children: s.map(e => {
            let {
              label: n,
              value: i
            } = e;
            return (0, r.jsx)(u.k5B, {
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
    children: e => (0, r.jsx)(u.Button, S(E({}, e), {
      buttonRef: o,
      variant: "secondary",
      icon: u.uVW,
      onClick: () => {
        a(l ? null : "sort")
      },
      text: x.intl.string(x.t.XvNMNk),
      "aria-label": x.intl.string(x.t.XvNMNk),
      size: "sm"
    }))
  })
}