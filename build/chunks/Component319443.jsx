/** Chunk was on 84283 **/
/** chunk id: 319443, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => F
}), require("./388685.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk456100 = require("./456100.js"),
  Chunk979233 = require("./979233.js"),
  Chunk88693 = require("./88693.js"),
  Chunk611928 = require("./611928.jsx"),
  h = (require("./763433.jsx"), require("./175118.jsx")),
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
  Chunk232913 = require("./232913.js");

function B(e) {
  let {
    applicationId: t,
    hideDetailHeaderButtons: n,
    onClickBack: i
  } = e, s = (0, o.e7)([y.Z], () => y.Z.getApplication(t)), [d, u] = a.useState(n), p = a.useCallback(() => {
    u(n)
  }, [n]);
  return (0, r.jsxs)("div", {
    className: G.detailHeaderContainer,
    children: [(0, r.jsx)("div", {
      className: G.detailHeaderSection,
      children: (0, r.jsx)(m.Cm, {
        icon: c.j9r,
        onClick: i
      })
    }), (0, r.jsx)(c.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      className: G.detailHeader,
      lineClamp: 1,
      children: null == s ? true : s.name
    }), (0, r.jsx)("div", {
      className: l()(G.detailHeaderSection, G.detailHeaderButtonsContainer, {
        [G.visible]: !n,
        [G.hide]: n && !d,
        [G.hidden]: n && d
      }),
      onTransitionEnd: p,
      children: null != s ? (0, r.jsx)(R.Z, {
        application: s,
        size: "sm"
      }) : null
    })]
  })
}

function U() {
  let e = Chunk647438.useCallback(() => {
      (0, Chunk881294.qF)()
    }, []),
    t = Chunk647438.useCallback(() => {
      (0, Chunk881294.rf)()
    }, []);
  return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
    color: Chunk481060.DM8.BRAND,
    className: Chunk232913.nagbar,
    children: [(0, Chunk951288.jsx)(Chunk481060.gw7, {
      size: "custom",
      color: "white",
      className: Chunk232913.logo
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      tag: "span",
      color: "always-white",
      variant: "text-md/normal",
      children: Chunk388032.intl.string(Chunk388032.t.Ol3MIt)
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk232913.nagbarActionContainer,
      children: [(0, Chunk951288.jsx)(Chunk481060.NoS, {
        onClick: module,
        noticeType: Chunk981631.kVF.LOGIN,
        children: Chunk388032.intl.string(Chunk388032.t["825cFy"])
      }), (0, Chunk951288.jsx)(Chunk481060.NoS, {
        onClick: exports,
        noticeType: Chunk981631.kVF.REGISTER,
        minor: true,
        children: Chunk388032.intl.string(Chunk388032.t.HAkXzo)
      })]
    })]
  })
}
let F = function() {
  var e;
  let t = (0, Chunk442837.e7)([Chunk314897.default], () => !Chunk314897.default.isAuthenticated()),
    {
      onScroll: n,
      scrollPosition: i,
      resetScrollPosition: y
    } = (0, Chunk979233.M)(),
    R = (0, Chunk258971.Xh)(),
    F = (0, Chunk881294.nu)(),
    z = (null == Chunk548514 ? true : Chunk548514.type) === Chunk258971.m_.CATEGORY ? Chunk548514.categoryId : true,
    {
      applicationId: H,
      section: V
    } = (null == Chunk548514 ? true : Chunk548514.type) === Chunk258971.m_.APPLICATION ? Chunk548514 : {},
    {
      query: Y,
      categoryId: W
    } = (null == Chunk548514 ? true : Chunk548514.type) === Chunk258971.m_.SEARCH ? Chunk548514 : {},
    X = (0, Chunk442837.e7)([Chunk678694.Z], () => Chunk678694.Z.getCategories()),
    K = Chunk647438.useMemo(() => [(0, Chunk216780.KQ)(), ...X], [X]),
    q = Chunk647438.useMemo(() => K.find(e => e.id === Number(W)), [K, W]),
    {
      tabs: Q,
      selectedTab: J,
      onSelectTab: $
    } = (0, Chunk119014.i)(null == z ? true : z.toString()),
    [ee, et] = Chunk647438.useState(true),
    en = Chunk258971.z8.useField("trackedOpenedFromExternalEntrypoint"),
    er = Chunk258971.z8.useField("sessionId"),
    ea = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser());
  Chunk647438.useEffect(() => {
    if (!en && null == er) {
      let e = (0, Chunk726115.PM)();
      Chunk626135.default.track(Chunk981631.rMx.APP_DIRECTORY_OPENED, {
        source: Chunk258971.xF.EXTERNAL,
        session_id: module,
        user_id: null == ea ? true : ea.id
      }), Chunk258971.z8.setState({
        trackedOpenedFromExternalEntrypoint: true,
        sessionId: module,
        entrypoint: {
          name: Chunk258971.xF.EXTERNAL
        },
        guildId: null
      })
    }
  }, [er, en, null == ea ? true : ea.id]), Chunk647438.useEffect(() => {
    Chunk471518.CP()
  }, []), Chunk647438.useEffect(() => {
    F && Chunk471518.g5()
  }, [F]), Chunk647438.useEffect(() => Chunk258971.aQ.setState({
    lastItem: Chunk548514
  }), [Chunk548514]);
  let {
    enabled: ei
  } = Chunk456100.c.useExperiment({
    location: "GlobalDiscoveryAppsRoot"
  }, {
    autoTrackExposure: true
  }), el = null != H, es = (null == Chunk548514 ? true : Chunk548514.type) === Chunk258971.m_.SEARCH, {
    searchQuery: eo,
    onSearchTextChange: ec,
    onClearSearch: ed,
    onSearchSubmit: eu
  } = (0, Chunk975907.M)({
    initialQuery: null != Y ? Y : ""
  }), ep = Chunk31569.Z.useField("searchBarState"), {
    onTabsAvailableWidthChange: em,
    onCollapsedSearchBarClick: eh,
    onSearchBarBlur: eg
  } = (0, Chunk88693.U)({
    isSearchBarVisible: true,
    isSearchBarEmpty: "" === eo.trim(),
    searchBarState: ep,
    setSearchBarState: e => j.Z.setState({
      searchBarState: e
    })
  }), e_ = Chunk647438.useCallback(e => {
    $(e), es && ed(), y()
  }, [es, ed, $, Chunk370210]), ef = Chunk647438.useCallback(e => (0, T.ph)({
    applicationId: e
  }), []), eb = el || es, ex = Chunk647438.useCallback(() => {
    null != (0, Chunk258971.Uc)() ? (0, Chunk703656.op)() : (0, Chunk133743.Yp)()
  }, []), ev = (0, Chunk392711.debounce)(e => {
    let {
      scrollTop: t,
      offsetHeight: n,
      scrollHeight: r,
      location: a
    } = e;
    t > 0 && (0, P.zZ)(k.rMx.APP_DIRECTORY_PAGE_SCROLLED, {
      scroll_visible_percentile: (t + n) / r,
      current_page: a
    })
  }, 200), eC = Chunk647438.useCallback((e, t) => {
    n(e), ev({
      scrollTop: e.currentTarget.scrollTop,
      offsetHeight: e.currentTarget.offsetHeight,
      scrollHeight: e.currentTarget.scrollHeight,
      location: t
    })
  }, [ev, require]), ej = ei ? Chunk481060.iWm : Chunk481060.jje;
  return (0, Chunk951288.jsxs)("div", {
    className: l()(Chunk232913.outerContainer, {
      [Chunk232913.loggedOutContainer]: exports
    }),
    children: [exports ? (0, Chunk951288.jsx)(U, {}) : null, (0, Chunk951288.jsxs)("div", {
      className: Chunk232913.innerContainer,
      children: [(0, Chunk951288.jsxs)(Chunk611928.ZP, {
        variant: eb ? Chunk611928._6.RELATIVE : Chunk611928._6.OVERLAY,
        children: [!eb && (0, Chunk951288.jsx)(Chunk611928.z6, {
          scrollPosition: Chunk120356
        }), el ? (0, Chunk951288.jsx)(B, {
          applicationId: H,
          hideDetailHeaderButtons: ee,
          onClickBack: ex
        }) : (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
          children: [es ? (0, Chunk951288.jsx)(Chunk611928.Cm, {
            icon: Chunk481060.j9r,
            onClick: ex
          }) : (0, Chunk951288.jsx)(Chunk611928.aV, {
            icon: ej
          }), es ? (0, Chunk951288.jsx)(Chunk481060.Heading, {
            variant: "heading-lg/semibold",
            color: "header-primary",
            className: Chunk232913.searchHeader,
            children: null != Y && "" !== Y ? Chunk388032.intl.formatToPlainString(Chunk388032.t.zHdzqW, {
              query: Y
            }) : Chunk388032.intl.formatToPlainString(Chunk388032.t.Qhj5Br, {
              categoryName: null != (e = null == q ? true : q.name) ? module : Chunk388032.intl.string(Chunk388032.t.E407b7)
            })
          }) : (0, Chunk951288.jsx)(h.Z, {
            tabs: Q,
            selectedTab: J,
            onTabSelect: e_,
            onAvailableWidthChange: em
          }), (0, Chunk951288.jsx)(Chunk680180.Z, {
            query: eo,
            placeholder: Chunk388032.intl.string(Chunk388032.t["5h0QOP"]),
            onTextChange: ec,
            onClear: ed,
            onSubmit: eu,
            onCollapsedClick: eh,
            state: ep,
            onBlur: eg
          })]
        })]
      }), el ? (0, Chunk951288.jsx)(Chunk666697.Z, {
        onScroll: e => eC(e, N.m_.APPLICATION),
        onSelectApplication: ef,
        applicationId: H,
        initialTab: V,
        onButtonsVisibilityChange: et
      }) : es ? (0, Chunk951288.jsx)(Chunk569527.Z, {
        onSelectApplication: ef,
        onScroll: e => eC(e, N.m_.SEARCH)
      }) : J === Chunk979007.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID.toString() ? (0, Chunk951288.jsx)(Chunk370648.Z, {
        onScroll: e => eC(e, N.m_.HOME),
        onSelectApplication: ef
      }) : (0, Chunk951288.jsx)(Chunk726941.Z, {
        tabId: Number(J),
        onScroll: e => eC(e, N.m_.CATEGORY),
        onSelectApplication: ef
      })]
    })]
  })
}