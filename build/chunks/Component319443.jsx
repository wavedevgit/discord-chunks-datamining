/** Chunk was on 69844 **/
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
  Chunk813525 = require("./813525.js");

function G(e) {
  let {
    applicationId: t,
    hideDetailHeaderButtons: n,
    onClickBack: i
  } = e, s = (0, o.e7)([j.Z], () => j.Z.getApplication(t)), [d, u] = a.useState(n), m = a.useCallback(() => {
    u(n)
  }, [n]);
  return (0, r.jsxs)("div", {
    className: M.detailHeaderContainer,
    children: [(0, r.jsx)("div", {
      className: M.detailHeaderSection,
      children: (0, r.jsx)(p.Cm, {
        icon: c.j9r,
        onClick: i
      })
    }), (0, r.jsx)(c.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      className: M.detailHeader,
      lineClamp: 1,
      children: null == s ? true : s.name
    }), (0, r.jsx)("div", {
      className: l()(M.detailHeaderSection, M.detailHeaderButtonsContainer, {
        [M.visible]: !n,
        [M.hide]: n && !d,
        [M.hidden]: n && d
      }),
      onTransitionEnd: m,
      children: null != s ? (0, r.jsx)(L.Z, {
        application: s,
        size: "sm"
      }) : null
    })]
  })
}

function B() {
  let e = Chunk473749.useCallback(() => {
      (0, Chunk881294.qF)()
    }, []),
    t = Chunk473749.useCallback(() => {
      (0, Chunk881294.rf)()
    }, []);
  return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
    color: Chunk481060.DM8.BRAND,
    className: Chunk813525.nagbar,
    children: [(0, Chunk54381.jsx)(Chunk481060.gw7, {
      size: "custom",
      color: "white",
      className: Chunk813525.logo
    }), (0, Chunk54381.jsx)(Chunk481060.Text, {
      tag: "span",
      color: "always-white",
      variant: "text-md/normal",
      children: Chunk388032.intl.string(Chunk388032.t.Ol3MIt)
    }), (0, Chunk54381.jsxs)("div", {
      className: Chunk813525.nagbarActionContainer,
      children: [(0, Chunk54381.jsx)(Chunk481060.NoS, {
        onClick: module,
        noticeType: Chunk981631.kVF.LOGIN,
        children: Chunk388032.intl.string(Chunk388032.t["825cFy"])
      }), (0, Chunk54381.jsx)(Chunk481060.NoS, {
        onClick: exports,
        noticeType: Chunk981631.kVF.REGISTER,
        minor: true,
        children: Chunk388032.intl.string(Chunk388032.t.HAkXzo)
      })]
    })]
  })
}
let U = function() {
  var e;
  let t = (0, Chunk442837.e7)([Chunk314897.default], () => !Chunk314897.default.isAuthenticated()),
    {
      onScroll: n,
      scrollPosition: i,
      resetScrollPosition: j
    } = (0, Chunk979233.M)(),
    L = (0, Chunk258971.Xh)(),
    U = (0, Chunk881294.nu)(),
    F = (null == Chunk548514 ? true : Chunk548514.type) === Chunk258971.m_.CATEGORY ? Chunk548514.categoryId : true,
    {
      applicationId: H,
      section: z
    } = (null == Chunk548514 ? true : Chunk548514.type) === Chunk258971.m_.APPLICATION ? Chunk548514 : {},
    {
      query: V,
      categoryId: Y
    } = (null == Chunk548514 ? true : Chunk548514.type) === Chunk258971.m_.SEARCH ? Chunk548514 : {},
    W = (0, Chunk442837.e7)([Chunk678694.Z], () => Chunk678694.Z.getCategories()),
    X = Chunk473749.useMemo(() => [(0, Chunk216780.KQ)(), ...W], [W]),
    K = Chunk473749.useMemo(() => X.find(e => e.id === Number(Y)), [X, Y]),
    {
      tabs: q,
      selectedTab: Q,
      onSelectTab: J
    } = (0, Chunk119014.i)(null == F ? true : F.toString()),
    [$, ee] = Chunk473749.useState(true),
    et = Chunk258971.z8.useField("trackedOpenedFromExternalEntrypoint"),
    en = Chunk258971.z8.useField("sessionId"),
    er = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser());
  Chunk473749.useEffect(() => {
    if (!et && null == en) {
      let e = (0, Chunk726115.PM)();
      Chunk626135.default.track(Chunk981631.rMx.APP_DIRECTORY_OPENED, {
        source: Chunk258971.xF.EXTERNAL,
        session_id: module,
        user_id: null == er ? true : er.id
      }), Chunk258971.z8.setState({
        trackedOpenedFromExternalEntrypoint: true,
        sessionId: module,
        entrypoint: {
          name: Chunk258971.xF.EXTERNAL
        },
        guildId: null
      })
    }
  }, [en, et, null == er ? true : er.id]), Chunk473749.useEffect(() => {
    Chunk471518.CP()
  }, []), Chunk473749.useEffect(() => {
    U && Chunk471518.g5()
  }, [U]), Chunk473749.useEffect(() => Chunk258971.aQ.setState({
    lastItem: Chunk548514
  }), [Chunk548514]);
  let ea = null != H,
    ei = (null == Chunk548514 ? true : Chunk548514.type) === Chunk258971.m_.SEARCH,
    {
      searchQuery: el,
      onSearchTextChange: es,
      onClearSearch: eo,
      onSearchSubmit: ec
    } = (0, Chunk975907.M)({
      initialQuery: null != V ? V : ""
    }),
    ed = Chunk31569.Z.useField("searchBarState"),
    {
      onTabsAvailableWidthChange: eu,
      onCollapsedSearchBarClick: ep,
      onSearchBarBlur: em
    } = (0, Chunk88693.U)({
      isSearchBarVisible: true,
      isSearchBarEmpty: "" === el.trim(),
      searchBarState: ed,
      setSearchBarState: e => C.Z.setState({
        searchBarState: e
      })
    }),
    eh = Chunk473749.useCallback(e => {
      J(e), ei && eo(), j()
    }, [ei, eo, J, Chunk370210]),
    eg = Chunk473749.useCallback(e => (0, N.ph)({
      applicationId: e
    }), []),
    ef = ea || ei,
    e_ = Chunk473749.useCallback(() => {
      null != (0, Chunk258971.Uc)() ? (0, Chunk703656.op)() : (0, Chunk133743.Yp)()
    }, []),
    eb = Chunk473749.useMemo(() => (0, Chunk392711.debounce)(e => {
      let {
        scrollTop: t,
        offsetHeight: n,
        scrollHeight: r,
        location: a
      } = e;
      t > 0 && (0, S.zZ)(D.rMx.APP_DIRECTORY_PAGE_SCROLLED, {
        scroll_visible_percentile: (t + n) / r,
        current_page: a
      })
    }, 200), []),
    ex = Chunk473749.useCallback((e, t) => {
      n(e), eb({
        scrollTop: e.currentTarget.scrollTop,
        offsetHeight: e.currentTarget.offsetHeight,
        scrollHeight: e.currentTarget.scrollHeight,
        location: t
      })
    }, [eb, require]);
  return (0, Chunk54381.jsxs)("div", {
    className: l()(Chunk813525.outerContainer, {
      [Chunk813525.loggedOutContainer]: exports
    }),
    children: [exports ? (0, Chunk54381.jsx)(B, {}) : null, (0, Chunk54381.jsxs)("div", {
      className: Chunk813525.innerContainer,
      children: [(0, Chunk54381.jsxs)(Chunk611928.ZP, {
        variant: ef ? Chunk611928._6.RELATIVE : Chunk611928._6.OVERLAY,
        children: [!ef && (0, Chunk54381.jsx)(Chunk611928.z6, {
          scrollPosition: Chunk120356
        }), ea ? (0, Chunk54381.jsx)(G, {
          applicationId: H,
          hideDetailHeaderButtons: $,
          onClickBack: e_
        }) : (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
          children: [ei ? (0, Chunk54381.jsx)(Chunk611928.Cm, {
            icon: Chunk481060.j9r,
            onClick: e_
          }) : (0, Chunk54381.jsx)(Chunk611928.aV, {
            icon: Chunk481060.jje
          }), ei ? (0, Chunk54381.jsx)(Chunk481060.Heading, {
            variant: "heading-lg/semibold",
            color: "header-primary",
            className: Chunk813525.searchHeader,
            children: null != V && "" !== V ? Chunk388032.intl.formatToPlainString(Chunk388032.t.zHdzqW, {
              query: V
            }) : Chunk388032.intl.formatToPlainString(Chunk388032.t.Qhj5Br, {
              categoryName: null != (e = null == K ? true : K.name) ? module : Chunk388032.intl.string(Chunk388032.t.E407b7)
            })
          }) : (0, Chunk54381.jsx)(m.Z, {
            tabs: q,
            selectedTab: Q,
            onTabSelect: eh,
            onAvailableWidthChange: eu
          }), (0, Chunk54381.jsx)(Chunk680180.Z, {
            query: el,
            placeholder: Chunk388032.intl.string(Chunk388032.t["5h0QOP"]),
            onTextChange: es,
            onClear: eo,
            onSubmit: ec,
            onCollapsedClick: ep,
            state: ed,
            onBlur: em
          })]
        })]
      }), ea ? (0, Chunk54381.jsx)(Chunk666697.Z, {
        onScroll: e => ex(e, E.m_.APPLICATION),
        onSelectApplication: eg,
        applicationId: H,
        initialTab: z,
        onButtonsVisibilityChange: ee
      }) : ei ? (0, Chunk54381.jsx)(Chunk569527.Z, {
        onSelectApplication: eg,
        onScroll: e => ex(e, E.m_.SEARCH)
      }) : Q === Chunk979007.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID.toString() ? (0, Chunk54381.jsx)(Chunk370648.Z, {
        onScroll: e => ex(e, E.m_.HOME),
        onSelectApplication: eg
      }) : (0, Chunk54381.jsx)(Chunk726941.Z, {
        tabId: Number(Q),
        onScroll: e => ex(e, E.m_.CATEGORY),
        onSelectApplication: eg
      })]
    })]
  })
}