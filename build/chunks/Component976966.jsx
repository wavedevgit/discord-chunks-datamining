/** Chunk was on 1113 **/
/** chunk id: 976966, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk554146 = require("./554146.js"),
  Chunk342494 = require("./342494.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk975571 = require("./975571.js"),
  Chunk822382 = require("./822382.js"),
  Chunk753806 = require("./753806.jsx"),
  Chunk345859 = require("./345859.js"),
  Chunk145331 = require("./145331.js"),
  Chunk121806 = require("./121806.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk620168 = require("./620168.js");

function j(e) {
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

function v(e, t) {
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
    onSearchModeChange: i,
    totalResults: o,
    isIndexing: c,
    isSearching: h,
    documentsIndexed: p,
    selectedChannelId: b
  } = e, j = (0, m.H)(t), {
    totalFilters: v
  } = (0, A.vj)(j, t), E = l.useMemo(() => {
    if (t.type === y.I4_.DMS) {
      var e, n;
      let t = null != (e = null == (n = (0, g.Zf)(j).channel_id) ? true : n.length) ? e : 0;
      return t > 0 ? _.intl.format(_.t.A2dqWG, {
        filterCount: t
      }) : _.intl.string(_.t.tc619d)
    }
    return null
  }, [t.type, j]), [S, I] = l.useState(null), N = l.useMemo(() => h ? [] : [a.M.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER], [h]), [T, R] = (0, d.kn)(N), D = T === a.M.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER, L = l.useCallback(e => {
    null != e && D && R(O.i.USER_DISMISS), I(e)
  }, [D, R, I]), M = l.useCallback(e => {
    R("user:explicit" === e ? O.i.USER_DISMISS : O.i.AUTO_DISMISS)
  }, [R]), k = l.useCallback(() => {
    L(null), f.A.openSearchFiltersModal(t)
  }, [L, t]), G = l.useMemo(() => v > 0 ? _.intl.format(_.t.uaR4sI, {
    filterCount: v
  }) : _.intl.string(_.t.UdhTtk), [v]), U = t.type === y.I4_.DMS || t.type === y.I4_.CHANNEL;
  return (0, r.jsxs)("header", {
    className: s()(x.wL, {
      [x.g$]: null != E
    }),
    children: [(0, r.jsx)("div", {
      className: x.TN,
      role: "status",
      children: (0, r.jsx)(C, {
        totalResults: o,
        subtitle: E,
        isIndexing: c,
        isSearching: h,
        documentsIndexed: p
      })
    }), (0, r.jsxs)("div", {
      className: x.vd,
      children: [(0, r.jsx)(u.Button, {
        variant: "secondary",
        onClick: k,
        text: G,
        icon: u.RgP,
        size: "sm"
      }), (0, r.jsx)(w, {
        searchMode: n,
        onSearchModeChange: i,
        isPopoutOpen: "sort" === S,
        setOpenPopout: L
      }), U && (0, r.jsx)(P, {
        searchContext: t,
        selectedChannelId: b,
        isPopoutOpen: "settings" === S,
        setOpenPopout: L,
        isPopoverVisible: D,
        onPopoverRequestClose: M
      })]
    })]
  })
}

function C(e) {
  let {
    totalResults: t,
    subtitle: n,
    isSearching: l,
    isIndexing: i,
    documentsIndexed: s
  } = e;
  return i ? (0, r.jsx)(I, {
    documentsIndexed: s
  }) : l ? (0, r.jsx)(N, {}) : (0, r.jsx)(T, {
    totalResults: t,
    subtitle: n
  })
}

function S() {
  return (0, r.jsx)("div", {
    className: x.zp,
    children: (0, r.jsx)(u.y$y, {
      type: u.y$y.Type.SPINNING_CIRCLE,
      className: x.u1,
      itemClassName: x.pu
    })
  })
}

function I(e) {
  let {
    documentsIndexed: t
  } = e;
  return (0, r.jsx)(c.m, {
    asContainer: true,
    text: _.intl.formatToPlainString(_.t["4Y3O+O"], {
      count: null != t ? t : ""
    }),
    children: (0, r.jsxs)("div", {
      className: x.q_,
      children: [(0, r.jsx)(u.Text, {
        variant: "text-md/medium",
        color: "text-muted",
        children: (0, r.jsx)(u.MzZ, {
          className: x.Zd,
          href: p.A.getArticleURL(y.MVz.SEARCH_INDEXING),
          children: _.intl.string(_.t["G3EA+4"])
        })
      }), (0, r.jsx)(S, {})]
    })
  })
}

function N() {
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.Text, {
      variant: "text-md/medium",
      color: "text-default",
      children: _.intl.string(_.t.uixzLf)
    }), (0, r.jsx)(S, {})]
  })
}

function T(e) {
  let {
    totalResults: t,
    subtitle: n
  } = e, l = (0, r.jsx)(u.Text, {
    variant: "text-md/medium",
    color: "text-strong",
    children: _.intl.format(_.t.ZGVL3g, {
      count: t
    })
  });
  return null != n ? (0, r.jsxs)("div", {
    className: x.hy,
    children: [l, (0, r.jsx)(u.Text, {
      variant: "text-xs/medium",
      color: "text-subtle",
      children: n
    })]
  }) : l
}

function P(e) {
  let {
    searchContext: t,
    selectedChannelId: n,
    isPopoutOpen: i,
    setOpenPopout: s,
    onPopoverRequestClose: a,
    isPopoverVisible: c
  } = e, d = l.useRef(null), p = h.Hu.useSetting(), g = l.useCallback(e => {
    if (p !== e) {
      if ((0, b._k)({
          searchContext: t,
          prevIsCrossDMSettingEnabled: h.Hu.getSetting(),
          isCrossDMSettingEnabled: e,
          location: b.vy.SEARCH_HEADER
        }), e) {
        let e = {
          type: y.I4_.DMS
        };
        f.A.transitionStateToSearchContext(t, e, f.A.cleanUpPrivateChannelSearchState)
      } else {
        let e = {
          type: y.I4_.CHANNEL,
          channelId: n
        };
        f.A.transitionStateToSearchContext(t, e)
      }
      s(null), h.Hu.updateSetting(e)
    }
  }, [p, s, t, n]), [m, A] = l.useMemo(() => [p ? _.intl.string(_.t["8lklch"]) : _.intl.string(_.t.ji3jTF), p ? _.intl.string(_.t.RMQZCa) : _.intl.string(_.t["v/PagC"])], [p]), O = l.useMemo(() => ({
    align: "end"
  }), []);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.YNO, {
      targetElementRef: d,
      shouldShow: i,
      animation: u.YNO.Animation.NONE,
      position: "bottom",
      align: "right",
      onRequestClose: () => s(null),
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, r.jsx)(u.W1t, {
          "data-menu-migrated-auto": true,
          navId: "search-settings-cog",
          onClose: t,
          "aria-label": _.intl.string(_.t.fb59v0),
          onSelect: () => s(null),
          children: (0, r.jsxs)(u.rXV, {
            label: _.intl.string(_.t["/tMwrA"]),
            children: [(0, r.jsx)(u.iDA, {
              id: "xdm-search-disabled",
              group: "xdm-search-items",
              label: _.intl.string(_.t.jRkYAh),
              checked: !p,
              action: () => g(false)
            }), (0, r.jsx)(u.iDA, {
              id: "xdm-search-enabled",
              group: "xdm-search-items",
              label: _.intl.string(_.t["lWpJ/t"]),
              checked: p,
              action: () => g(true)
            })]
          }, "xdm-search-items")
        })
      },
      children: e => (0, r.jsx)(u.K0, v(j({}, e), {
        buttonRef: d,
        variant: "secondary",
        icon: u.Zes,
        onClick: () => {
          s(i ? null : "settings")
        },
        "aria-label": _.intl.string(_.t["3D5yo/"]),
        size: "sm"
      }))
    }), (0, r.jsx)(o.AM, {
      targetElementRef: d,
      shouldShow: c,
      onRequestClose: a,
      title: m,
      body: A,
      caretConfig: O,
      badge: "new"
    })]
  })
}

function w(e) {
  let {
    searchMode: t,
    onSearchModeChange: n,
    isPopoutOpen: i,
    setOpenPopout: s
  } = e, a = l.useRef(null), o = l.useMemo(() => [{
    label: _.intl.string(_.t.CbaapP),
    value: y.BBH.NEWEST
  }, {
    label: _.intl.string(_.t.OukXZj),
    value: y.BBH.OLDEST
  }, {
    label: _.intl.string(_.t.q8gB52),
    value: y.BBH.MOST_RELEVANT
  }], []), c = l.useCallback(e => {
    s(null), n(e)
  }, [s, n]);
  return (0, r.jsx)(u.YNO, {
    targetElementRef: a,
    shouldShow: i,
    animation: u.YNO.Animation.NONE,
    position: "bottom",
    align: "right",
    onRequestClose: () => s(null),
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, r.jsx)(u.W1t, {
        "data-menu-migrated-auto": true,
        navId: "search-result-sort-menu",
        onClose: n,
        "aria-label": _.intl.string(_.t.utp2hS),
        onSelect: () => s(null),
        children: (0, r.jsx)(u.rXV, {
          children: o.map(e => {
            let {
              label: n,
              value: l
            } = e;
            return (0, r.jsx)(u.iDA, {
              group: "sort-by",
              id: "sort-by-option-".concat(l),
              label: n,
              action: () => c(l),
              checked: t === l
            }, l)
          })
        }, "sort-by")
      })
    },
    children: e => (0, r.jsx)(u.Button, v(j({}, e), {
      buttonRef: a,
      variant: "secondary",
      icon: u.JNJ,
      onClick: () => {
        s(i ? null : "sort")
      },
      text: _.intl.string(_.t.XvNMNk),
      "aria-label": _.intl.string(_.t.XvNMNk),
      size: "sm"
    }))
  })
}