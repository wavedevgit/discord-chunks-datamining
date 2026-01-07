/** Chunk was on 92504 **/
/** chunk id: 319443, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => U
}), require("./388685.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk979233 = require("./979233.js"),
  Chunk88693 = require("./88693.js"),
  Chunk611928 = require("./611928.jsx"),
  m = (require("./763433.jsx"), require("./175118.jsx")),
  Chunk680180 = require("./680180.jsx"),
  Chunk726115 = require("./726115.js"),
  Chunk703656 = require("./703656.js"),
  Chunk314897 = require("./314897.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk471518 = require("./471518.js"),
  Chunk31569 = require("./31569.js"),
  Chunk370210 = require("./370210.js"),
  Chunk678694 = require("./678694.js"),
  Chunk216780 = require("./216780.js"),
  Chunk881294 = require("./881294.js"),
  Chunk975907 = require("./975907.js"),
  Chunk119014 = require("./119014.js"),
  Chunk258971 = require("./258971.js"),
  Chunk133743 = require("./133743.js"),
  Chunk726941 = require("./726941.jsx"),
  Chunk666697 = require("./666697.jsx"),
  Chunk548514 = require("./548514.jsx"),
  Chunk370648 = require("./370648.jsx"),
  Chunk569527 = require("./569527.jsx"),
  Chunk979007 = require("./979007.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk563267 = require("./563267.js");

function G(e) {
  let {
    applicationId: t,
    hideDetailHeaderButtons: n,
    onClickBack: i
  } = e, s = (0, o.e7)([_.Z], () => _.Z.getApplication(t)), [d, u] = r.useState(n), m = r.useCallback(() => {
    u(n)
  }, [n]);
  return (0, a.jsxs)("div", {
    className: M.detailHeaderContainer,
    children: [(0, a.jsx)("div", {
      className: M.detailHeaderSection,
      children: (0, a.jsx)(p.Cm, {
        icon: c.j9r,
        onClick: i
      })
    }), (0, a.jsx)(c.Heading, {
      variant: "heading-lg/semibold",
      color: "text-strong",
      className: M.detailHeader,
      lineClamp: 1,
      children: null == s ? true : s.name
    }), (0, a.jsx)("div", {
      className: l()(M.detailHeaderSection, M.detailHeaderButtonsContainer, {
        [M.visible]: !n,
        [M.hide]: n && !d,
        [M.hidden]: n && d
      }),
      onTransitionEnd: m,
      children: null != s ? (0, a.jsx)(L.Z, {
        application: s,
        size: "sm"
      }) : null
    })]
  })
}

function B() {
  let e = r.useCallback(() => {
      (0, S.qF)()
    }, []),
    t = r.useCallback(() => {
      (0, S.rf)()
    }, []);
  return (0, a.jsxs)(c.qXd, {
    color: c.DM8.BRAND,
    className: M.nagbar,
    children: [(0, a.jsx)(c.gw7, {
      size: "custom",
      color: "white",
      className: M.logo
    }), (0, a.jsx)(c.Text, {
      tag: "span",
      color: "always-white",
      variant: "text-md/normal",
      children: k.intl.string(k.t.Ol3MIt)
    }), (0, a.jsxs)("div", {
      className: M.nagbarActionContainer,
      children: [(0, a.jsx)(c.NoS, {
        onClick: e,
        noticeType: D.kVF.LOGIN,
        children: k.intl.string(k.t["825cFy"])
      }), (0, a.jsx)(c.NoS, {
        onClick: t,
        noticeType: D.kVF.REGISTER,
        minor: true,
        children: k.intl.string(k.t.HAkXzo)
      })]
    })]
  })
}
let U = function() {
  var e;
  let t = (0, o.e7)([b.default], () => !b.default.isAuthenticated()),
    {
      onScroll: n,
      scrollPosition: i,
      resetScrollPosition: _
    } = (0, d.M)(),
    L = (0, E.Xh)(),
    U = (0, S.nu)(),
    F = (null == L ? true : L.type) === E.m_.CATEGORY ? L.categoryId : true,
    {
      applicationId: z,
      section: H
    } = (null == L ? true : L.type) === E.m_.APPLICATION ? L : {},
    {
      query: V,
      categoryId: Y
    } = (null == L ? true : L.type) === E.m_.SEARCH ? L : {},
    W = (0, o.e7)([y.Z], () => y.Z.getCategories()),
    X = r.useMemo(() => [(0, I.KQ)(), ...W], [W]),
    K = r.useMemo(() => X.find(e => e.id === Number(Y)), [X, Y]),
    {
      tabs: q,
      selectedTab: Q,
      onSelectTab: J
    } = (0, O.i)(null == F ? true : F.toString()),
    [$, ee] = r.useState(true),
    et = E.z8.useField("trackedOpenedFromExternalEntrypoint"),
    en = E.z8.useField("sessionId"),
    ea = (0, o.e7)([x.default], () => x.default.getCurrentUser());
  r.useEffect(() => {
    if (!et && null == en) {
      let e = (0, f.PM)();
      v.default.track(D.rMx.APP_DIRECTORY_OPENED, {
        source: E.xF.EXTERNAL,
        session_id: e,
        user_id: null == ea ? true : ea.id
      }), E.z8.setState({
        trackedOpenedFromExternalEntrypoint: true,
        sessionId: e,
        entrypoint: {
          name: E.xF.EXTERNAL
        },
        guildId: null
      })
    }
  }, [en, et, null == ea ? true : ea.id]), r.useEffect(() => {
    C.CP()
  }, []), r.useEffect(() => {
    U && C.g5()
  }, [U]), r.useEffect(() => E.aQ.setState({
    lastItem: L
  }), [L]);
  let er = null != z,
    ei = (null == L ? true : L.type) === E.m_.SEARCH,
    {
      searchQuery: el,
      onSearchTextChange: es,
      onClearSearch: eo,
      onSearchSubmit: ec
    } = (0, P.M)({
      initialQuery: null != V ? V : ""
    }),
    ed = j.Z.useField("searchBarState"),
    {
      onTabsAvailableWidthChange: eu,
      onCollapsedSearchBarClick: ep,
      onSearchBarBlur: em
    } = (0, u.U)({
      isSearchBarVisible: true,
      isSearchBarEmpty: "" === el.trim(),
      searchBarState: ed,
      setSearchBarState: e => j.Z.setState({
        searchBarState: e
      })
    }),
    eh = r.useCallback(e => {
      J(e), ei && eo(), _()
    }, [ei, eo, J, _]),
    ef = r.useCallback(e => (0, N.ph)({
      applicationId: e
    }), []),
    eg = er || ei,
    eb = r.useCallback(() => {
      null != (0, E.Uc)() ? (0, g.op)() : (0, N.Yp)()
    }, []),
    ex = r.useMemo(() => (0, s.debounce)(e => {
      let {
        scrollTop: t,
        offsetHeight: n,
        scrollHeight: a,
        location: r
      } = e;
      t > 0 && (0, S.zZ)(D.rMx.APP_DIRECTORY_PAGE_SCROLLED, {
        scroll_visible_percentile: (t + n) / a,
        current_page: r
      })
    }, 200), []),
    ev = r.useCallback((e, t) => {
      n(e), ex({
        scrollTop: e.currentTarget.scrollTop,
        offsetHeight: e.currentTarget.offsetHeight,
        scrollHeight: e.currentTarget.scrollHeight,
        location: t
      })
    }, [ex, n]);
  return (0, a.jsxs)("div", {
    className: l()(M.outerContainer, {
      [M.loggedOutContainer]: t
    }),
    children: [t ? (0, a.jsx)(B, {}) : null, (0, a.jsxs)("div", {
      className: M.innerContainer,
      children: [(0, a.jsxs)(p.ZP, {
        variant: eg ? p._6.RELATIVE : p._6.OVERLAY,
        children: [!eg && (0, a.jsx)(p.z6, {
          scrollPosition: i
        }), er ? (0, a.jsx)(G, {
          applicationId: z,
          hideDetailHeaderButtons: $,
          onClickBack: eb
        }) : (0, a.jsxs)(a.Fragment, {
          children: [ei ? (0, a.jsx)(p.Cm, {
            icon: c.j9r,
            onClick: eb
          }) : (0, a.jsx)(p.aV, {
            icon: c.jje
          }), ei ? (0, a.jsx)(c.Heading, {
            variant: "heading-lg/semibold",
            color: "text-strong",
            className: M.searchHeader,
            children: null != V && "" !== V ? k.intl.formatToPlainString(k.t.zHdzqW, {
              query: V
            }) : k.intl.formatToPlainString(k.t.Qhj5Br, {
              categoryName: null != (e = null == K ? true : K.name) ? e : k.intl.string(k.t.E407b7)
            })
          }) : (0, a.jsx)(m.Z, {
            tabs: q,
            selectedTab: Q,
            onTabSelect: eh,
            onAvailableWidthChange: eu
          }), (0, a.jsx)(h.Z, {
            query: el,
            placeholder: k.intl.string(k.t["5h0QOP"]),
            onTextChange: es,
            onClear: eo,
            onSubmit: ec,
            onCollapsedClick: ep,
            state: ed,
            onBlur: em
          })]
        })]
      }), er ? (0, a.jsx)(A.Z, {
        onScroll: e => ev(e, E.m_.APPLICATION),
        onSelectApplication: ef,
        applicationId: z,
        initialTab: H,
        onButtonsVisibilityChange: ee
      }) : ei ? (0, a.jsx)(Z.Z, {
        onSelectApplication: ef,
        onScroll: e => ev(e, E.m_.SEARCH)
      }) : Q === w.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID.toString() ? (0, a.jsx)(R.Z, {
        onScroll: e => ev(e, E.m_.HOME),
        onSelectApplication: ef
      }) : (0, a.jsx)(T.Z, {
        tabId: Number(Q),
        onScroll: e => ev(e, E.m_.CATEGORY),
        onSelectApplication: ef
      })]
    })]
  })
}