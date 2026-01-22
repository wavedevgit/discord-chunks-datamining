/** Chunk was on 28636 **/
/** chunk id: 122204, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => H
}), require("./896048.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk178629 = require("./178629.js"),
  Chunk770472 = require("./770472.js"),
  Chunk737823 = require("./737823.jsx"),
  h = (require("./153527.jsx"), require("./876622.jsx")),
  Chunk521974 = require("./521974.jsx"),
  Chunk965660 = require("./965660.js"),
  Chunk976860 = require("./976860.js"),
  Chunk961350 = require("./961350.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk354138 = require("./354138.js"),
  Chunk416730 = require("./416730.js"),
  Chunk212534 = require("./212534.js"),
  Chunk38181 = require("./38181.js"),
  Chunk767599 = require("./767599.js"),
  Chunk412461 = require("./412461.js"),
  Chunk157561 = require("./157561.js"),
  Chunk497773 = require("./497773.js"),
  Chunk310419 = require("./310419.js"),
  Chunk656106 = require("./656106.js"),
  Chunk97432 = require("./97432.jsx"),
  Chunk244460 = require("./244460.jsx"),
  Chunk569495 = require("./569495.jsx"),
  Chunk410608 = require("./410608.jsx"),
  Chunk360832 = require("./360832.jsx"),
  Chunk435220 = require("./435220.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk67242 = require("./67242.js");

function G(e) {
  let {
    applicationId: t,
    hideDetailHeaderButtons: n,
    onClickBack: r
  } = e, s = (0, c.bG)([_.A], () => _.A.getApplication(t)), [d, u] = a.useState(n), h = a.useCallback(() => {
    u(n)
  }, [n]);
  return (0, l.jsxs)("div", {
    className: U._u,
    children: [(0, l.jsx)("div", {
      className: U.w$,
      children: (0, l.jsx)(p.XQ, {
        icon: o.Zge,
        onClick: r
      })
    }), (0, l.jsx)(o.Heading, {
      variant: "heading-lg/semibold",
      color: "text-strong",
      className: U.Rm,
      lineClamp: 1,
      children: null == s ? true : s.name
    }), (0, l.jsx)("div", {
      className: i()(U.w$, U.xY, {
        [U.RK]: !n,
        [U.jD]: n && !d,
        [U.R]: n && d
      }),
      onTransitionEnd: h,
      children: null != s ? (0, l.jsx)(T.A, {
        application: s,
        size: "sm"
      }) : null
    })]
  })
}

function V() {
  let e = a.useCallback(() => {
      (0, S.dG)()
    }, []),
    t = a.useCallback(() => {
      (0, S.jL)()
    }, []);
  return (0, l.jsxs)(o.$Td, {
    color: o.Hv$.BRAND,
    className: U.aL,
    children: [(0, l.jsx)(o.pVd, {
      size: "custom",
      color: "white",
      className: U.wm
    }), (0, l.jsx)(o.Text, {
      tag: "span",
      color: "always-white",
      variant: "text-md/normal",
      children: M.intl.string(M.t.Ol3MIt)
    }), (0, l.jsxs)("div", {
      className: U.ll,
      children: [(0, l.jsx)(o.Z_L, {
        onClick: e,
        noticeType: k.kqX.LOGIN,
        children: M.intl.string(M.t["825cFy"])
      }), (0, l.jsx)(o.Z_L, {
        onClick: t,
        noticeType: k.kqX.REGISTER,
        minor: true,
        children: M.intl.string(M.t.HAkXzo)
      })]
    })]
  })
}
let H = function() {
  var e;
  let t = (0, c.bG)([g.default], () => !g.default.isAuthenticated()),
    {
      onScroll: n,
      scrollPosition: r,
      resetScrollPosition: _
    } = (0, d.G)(),
    T = (0, I.R4)(),
    H = (0, S.DB)(),
    F = (null == T ? true : T.type) === I.ev.CATEGORY ? T.categoryId : true,
    {
      applicationId: B,
      section: Y
    } = (null == T ? true : T.type) === I.ev.APPLICATION ? T : {},
    {
      query: z,
      categoryId: X
    } = (null == T ? true : T.type) === I.ev.SEARCH ? T : {},
    K = (0, c.bG)([y.A], () => y.A.getCategories()),
    W = a.useMemo(() => [(0, O.AU)(), ...K], [K]),
    Z = a.useMemo(() => W.find(e => e.id === Number(X)), [W, X]),
    {
      tabs: J,
      selectedTab: Q,
      onSelectTab: q
    } = (0, E.S)(null == F ? true : F.toString()),
    [$, ee] = a.useState(true),
    et = I.h.useField("trackedOpenedFromExternalEntrypoint"),
    en = I.h.useField("sessionId"),
    el = (0, c.bG)([x.default], () => x.default.getCurrentUser());
  a.useEffect(() => {
    if (!et && null == en) {
      let e = (0, b.YP)();
      v.default.track(k.HAw.APP_DIRECTORY_OPENED, {
        source: I.sW.EXTERNAL,
        session_id: e,
        user_id: null == el ? true : el.id
      }), I.h.setState({
        trackedOpenedFromExternalEntrypoint: true,
        sessionId: e,
        entrypoint: {
          name: I.sW.EXTERNAL
        },
        guildId: null
      })
    }
  }, [en, et, null == el ? true : el.id]), a.useEffect(() => {
    j.bW()
  }, []), a.useEffect(() => {
    H && j.wD()
  }, [H]), a.useEffect(() => I.tS.setState({
    lastItem: T
  }), [T]);
  let ea = null != B,
    er = (null == T ? true : T.type) === I.ev.SEARCH,
    {
      searchQuery: ei,
      onSearchTextChange: es,
      onClearSearch: ec,
      onSearchSubmit: eo
    } = (0, C.v)({
      initialQuery: null != z ? z : ""
    }),
    ed = A.A.useField("searchBarState"),
    {
      onTabsAvailableWidthChange: eu,
      onCollapsedSearchBarClick: ep,
      onSearchBarBlur: eh
    } = (0, u.p)({
      isSearchBarVisible: true,
      isSearchBarEmpty: "" === ei.trim(),
      searchBarState: ed,
      setSearchBarState: e => A.A.setState({
        searchBarState: e
      })
    }),
    em = a.useCallback(e => {
      q(e), er && ec(), _()
    }, [er, ec, q, _]),
    eb = a.useCallback(e => (0, P.YR)({
      applicationId: e
    }), []),
    ef = ea || er,
    eg = a.useCallback(() => {
      null != (0, I.Bn)() ? (0, f.aX)() : (0, P.eM)()
    }, []),
    ex = a.useMemo(() => (0, s.debounce)(e => {
      let {
        scrollTop: t,
        offsetHeight: n,
        scrollHeight: l,
        location: a
      } = e;
      t > 0 && (0, S.TR)(k.HAw.APP_DIRECTORY_PAGE_SCROLLED, {
        scroll_visible_percentile: (t + n) / l,
        current_page: a
      })
    }, 200), []),
    ev = a.useCallback((e, t) => {
      n(e), ex({
        scrollTop: e.currentTarget.scrollTop,
        offsetHeight: e.currentTarget.offsetHeight,
        scrollHeight: e.currentTarget.scrollHeight,
        location: t
      })
    }, [ex, n]);
  return (0, l.jsxs)("div", {
    className: i()(U.nw, {
      [U.Yz]: t
    }),
    children: [t ? (0, l.jsx)(V, {}) : null, (0, l.jsxs)("div", {
      className: U.WH,
      children: [(0, l.jsxs)(p.Ay, {
        variant: ef ? p.Z5.RELATIVE : p.Z5.OVERLAY,
        children: [!ef && (0, l.jsx)(p.ns, {
          scrollPosition: r
        }), ea ? (0, l.jsx)(G, {
          applicationId: B,
          hideDetailHeaderButtons: $,
          onClickBack: eg
        }) : (0, l.jsxs)(l.Fragment, {
          children: [er ? (0, l.jsx)(p.XQ, {
            icon: o.Zge,
            onClick: eg
          }) : (0, l.jsx)(p.T4, {
            icon: o.k9F
          }), er ? (0, l.jsx)(o.Heading, {
            variant: "heading-lg/semibold",
            color: "text-strong",
            className: U.wL,
            children: null != z && "" !== z ? M.intl.formatToPlainString(M.t.zHdzqW, {
              query: z
            }) : M.intl.formatToPlainString(M.t.Qhj5Br, {
              categoryName: null != (e = null == Z ? true : Z.name) ? e : M.intl.string(M.t.E407b7)
            })
          }) : (0, l.jsx)(h.A, {
            tabs: J,
            selectedTab: Q,
            onTabSelect: em,
            onAvailableWidthChange: eu
          }), (0, l.jsx)(m.A, {
            query: ei,
            placeholder: M.intl.string(M.t["5h0QOP"]),
            onTextChange: es,
            onClear: ec,
            onSubmit: eo,
            onCollapsedClick: ep,
            state: ed,
            onBlur: eh
          })]
        })]
      }), ea ? (0, l.jsx)(R.A, {
        onScroll: e => ev(e, I.ev.APPLICATION),
        onSelectApplication: eb,
        applicationId: B,
        initialTab: Y,
        onButtonsVisibilityChange: ee
      }) : er ? (0, l.jsx)(D.A, {
        onSelectApplication: eb,
        onScroll: e => ev(e, I.ev.SEARCH)
      }) : Q === w.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID.toString() ? (0, l.jsx)(L.A, {
        onScroll: e => ev(e, I.ev.HOME),
        onSelectApplication: eb
      }) : (0, l.jsx)(N.A, {
        tabId: Number(Q),
        onScroll: e => ev(e, I.ev.CATEGORY),
        onSelectApplication: eb
      })]
    })]
  })
}