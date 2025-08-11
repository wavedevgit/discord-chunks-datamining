/** Chunk was on 88934 **/
/** chunk id: 319443, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => z
}), require("./388685.js"), require("./781311.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk456100 = require("./456100.js"),
  Chunk114851 = require("./114851.js"),
  Chunk88693 = require("./88693.js"),
  Chunk611928 = require("./611928.js"),
  h = (require("./763433.js"), require("./922122.js")),
  Chunk680180 = require("./680180.js"),
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
  Chunk726941 = require("./726941.js"),
  Chunk666697 = require("./666697.js"),
  Chunk548514 = require("./548514.js"),
  Chunk370648 = require("./370648.js"),
  Chunk569527 = require("./569527.js"),
  Chunk979007 = require("./979007.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk691133 = require("./691133.js");

function B(e) {
  let {
    applicationId: t,
    hideDetailHeaderButtons: n,
    onClickBack: i
  } = e, s = (0, o.e7)([y.Z], () => y.Z.getApplication(t)), [d, u] = a.useState(n), p = a.useCallback(() => {
    u(n)
  }, [n]);
  return <div className={G.detailHeaderContainer}>{<div className={G.detailHeaderSection}><m.Cm icon={c.j9r} onClick={i} /></div>}{<c.X6q variant={"heading-lg/semibold"} color={"header-primary"} className={G.detailHeader} lineClamp={1}>{null == s ? true : s.name}</c.X6q>}{<div className={l()(G.detailHeaderSection, G.detailHeaderButtonsContainer, {
        [G.visible]: !n,
        [G.hide]: n && !d,
        [G.hidden]: n && d
      })} onTransitionEnd={p}>{null != s ? (0, r.jsx)(R.Z, {
        application: s,
        size: "sm"
      }) : null}</div>}</div>
}

function U() {
  let e = Chunk73800.useCallback(() => {
      (0, Chunk881294.qF)()
    }, []),
    t = Chunk73800.useCallback(() => {
      (0, Chunk881294.rf)()
    }, []);
  return <Chunk481060.qXd color={Chunk481060.DM8.BRAND} className={Chunk691133.nagbar}>{<Chunk481060.gw7 size={"custom"} color={"white"} className={Chunk691133.logo} />}{<Chunk481060.Text tag={"span"} color={"always-white"} variant={"text-md/normal"}>{Chunk388032.intl.string(Chunk388032.t.Ol3MIi)}</Chunk481060.Text>}{<div className={Chunk691133.nagbarActionContainer}>{<Chunk481060.NoS onClick={module} noticeType={Chunk981631.kVF.LOGIN}>{Chunk388032.intl.string(Chunk388032.t["825cFx"])}</Chunk481060.NoS>}{<Chunk481060.NoS onClick={exports} noticeType={Chunk981631.kVF.REGISTER} minor={true}>{Chunk388032.intl.string(Chunk388032.t.HAkXzs)}</Chunk481060.NoS>}</div>}</Chunk481060.qXd>
}
let z = function() {
  var e;
  let t = (0, Chunk442837.e7)([Chunk314897.default], () => !Chunk314897.default.isAuthenticated()),
    {
      onScroll: n,
      scrollPosition: i,
      resetScrollPosition: y
    } = (0, Chunk114851.M)(),
    R = (0, Chunk258971.Xh)(),
    z = (0, Chunk881294.nu)(),
    F = (null == Chunk548514 ? true : Chunk548514.type) === Chunk258971.m_.CATEGORY ? Chunk548514.categoryId : true,
    {
      applicationId: V,
      section: H
    } = (null == Chunk548514 ? true : Chunk548514.type) === Chunk258971.m_.APPLICATION ? Chunk548514 : {},
    {
      query: Y,
      categoryId: W
    } = (null == Chunk548514 ? true : Chunk548514.type) === Chunk258971.m_.SEARCH ? Chunk548514 : {},
    X = (0, Chunk442837.e7)([Chunk678694.Z], () => Chunk678694.Z.getCategories()),
    K = Chunk73800.useMemo(() => [(0, Chunk216780.KQ)(), ...X], [X]),
    q = Chunk73800.useMemo(() => K.find(e => e.id === Number(W)), [K, W]),
    {
      tabs: Q,
      selectedTab: J,
      onSelectTab: $
    } = (0, Chunk119014.i)(null == F ? true : F.toString()),
    [ee, et] = Chunk73800.useState(true),
    en = Chunk258971.z8.useField("trackedOpenedFromExternalEntrypoint"),
    er = Chunk258971.z8.useField("sessionId"),
    ea = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser());
  Chunk73800.useEffect(() => {
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
  }, [er, en, null == ea ? true : ea.id]), Chunk73800.useEffect(() => {
    Chunk471518.CP()
  }, []), Chunk73800.useEffect(() => {
    z && Chunk471518.g5()
  }, [z]), Chunk73800.useEffect(() => Chunk258971.aQ.setState({
    lastItem: Chunk548514
  }), [Chunk548514]);
  let {
    enabled: ei
  } = Chunk456100.c.useExperiment({
    location: "GlobalDiscoveryAppsRoot"
  }, {
    autoTrackExposure: true
  }), el = null != V, es = (null == Chunk548514 ? true : Chunk548514.type) === Chunk258971.m_.SEARCH, {
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
  }), ef = Chunk73800.useCallback(e => {
    $(e), es && ed(), y()
  }, [es, ed, $, Chunk370210]), e_ = Chunk73800.useCallback(e => (0, T.ph)({
    applicationId: e
  }), []), eb = el || es, ex = Chunk73800.useCallback(() => {
    null != (0, Chunk258971.Uc)() ? (0, Chunk703656.op)() : (0, Chunk133743.Yp)()
  }, []), ev = (0, Chunk392711.debounce)(e => {
    let {
      scrollTop: t,
      offsetHeight: n,
      scrollHeight: r,
      location: a
    } = e;
    t > 0 && (0, S.zZ)(k.rMx.APP_DIRECTORY_PAGE_SCROLLED, {
      scroll_visible_percentile: (t + n) / r,
      current_page: a
    })
  }, 200), eC = Chunk73800.useCallback((e, t) => {
    n(e), ev({
      scrollTop: e.currentTarget.scrollTop,
      offsetHeight: e.currentTarget.offsetHeight,
      scrollHeight: e.currentTarget.scrollHeight,
      location: t
    })
  }, [ev, require]), ej = ei ? Chunk481060.iWm : Chunk481060.jje;
  return <div className={l()(Chunk691133.outerContainer, {
      [Chunk691133.loggedOutContainer]: exports
    })}>{exports ? <U /> : null}{<div className={Chunk691133.innerContainer}>{<Chunk611928.ZP variant={eb ? Chunk611928._6.RELATIVE : Chunk611928._6.OVERLAY}>{!eb && <Chunk611928.z6 scrollPosition={Chunk120356} />}{el ? <B applicationId={V} hideDetailHeaderButtons={ee} onClickBack={ex} /> : <Chunk255367.Fragment>{es ? <Chunk611928.Cm icon={Chunk481060.j9r} onClick={ex} /> : <Chunk611928.aV icon={ej} />}{es ? <Chunk481060.X6q variant={"heading-lg/semibold"} color={"header-primary"} className={Chunk691133.searchHeader}>{null != Y && "" !== Y ? Chunk388032.intl.formatToPlainString(Chunk388032.t.zHdzqa, {
              query: Y
            }) : Chunk388032.intl.formatToPlainString(Chunk388032.t.Qhj5Bg, {
              categoryName: null != (e = null == q ? true : q.name) ? module : Chunk388032.intl.string(Chunk388032.t.E407b2)
            })}</Chunk481060.X6q> : <h.Z tabs={Q} selectedTab={J} onTabSelect={ef} onAvailableWidthChange={em} />}{<Chunk680180.Z query={eo} placeholder={Chunk388032.intl.string(Chunk388032.t["5h0QOD"])} onTextChange={ec} onClear={ed} onSubmit={eu} onCollapsedClick={eh} state={ep} onBlur={eg} />}</Chunk255367.Fragment>}</Chunk611928.ZP>}{el ? <Chunk666697.Z onScroll={e => eC(e, N.m_.APPLICATION)} onSelectApplication={e_} applicationId={V} initialTab={H} onButtonsVisibilityChange={et} /> : es ? <Chunk569527.Z onSelectApplication={e_} onScroll={e => eC(e, N.m_.SEARCH)} /> : J === Chunk979007.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID.toString() ? <Chunk370648.Z onScroll={e => eC(e, N.m_.HOME)} onSelectApplication={e_} /> : <Chunk726941.Z tabId={Number(J)} onScroll={e => eC(e, N.m_.CATEGORY)} onSelectApplication={e_} />}</div>}</div>
}