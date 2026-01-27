/** Chunk was on 28636 **/
/** chunk id: 122204, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => H
}), require("./896048.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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

function U(e) {
  let {
    applicationId: t,
    hideDetailHeaderButtons: n,
    onClickBack: i
  } = e, s = (0, o.bG)([A.A], () => A.A.getApplication(t)), [d, u] = l.useState(n), h = l.useCallback(() => {
    u(n)
  }, [n]);
  return (0, r.jsxs)("div", {
    className: G._u,
    children: [(0, r.jsx)("div", {
      className: G.w$,
      children: (0, r.jsx)(p.XQ, {
        icon: c.Zge,
        onClick: i
      })
    }), (0, r.jsx)(c.Heading, {
      variant: "heading-lg/semibold",
      color: "text-strong",
      className: G.Rm,
      lineClamp: 1,
      children: null == s ? true : s.name
    }), (0, r.jsx)("div", {
      className: a()(G.w$, G.xY, {
        [G.RK]: !n,
        [G.jD]: n && !d,
        [G.R]: n && d
      }),
      onTransitionEnd: h,
      children: null != s ? (0, r.jsx)(R.A, {
        application: s,
        size: "sm"
      }) : null
    })]
  })
}

function V() {
  let e = l.useCallback(() => {
      (0, O.dG)()
    }, []),
    t = l.useCallback(() => {
      (0, O.jL)()
    }, []);
  return (0, r.jsxs)(c.$Td, {
    color: c.Hv$.BRAND,
    className: G.aL,
    children: [(0, r.jsx)(c.pVd, {
      size: "custom",
      color: "white",
      className: G.wm
    }), (0, r.jsx)(c.Text, {
      tag: "span",
      color: "always-white",
      variant: "text-md/normal",
      children: M.intl.string(M.t.Ol3MIt)
    }), (0, r.jsxs)("div", {
      className: G.ll,
      children: [(0, r.jsx)(c.Z_L, {
        onClick: e,
        noticeType: k.kqX.LOGIN,
        children: M.intl.string(M.t["825cFy"])
      }), (0, r.jsx)(c.Z_L, {
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
  let t = (0, o.bG)([b.default], () => !b.default.isAuthenticated()),
    {
      onScroll: n,
      scrollPosition: i,
      resetScrollPosition: A
    } = (0, d.G)(),
    R = (0, E.R4)(),
    H = (0, O.DB)(),
    B = (null == R ? true : R.type) === E.ev.CATEGORY ? R.categoryId : true,
    {
      applicationId: F,
      section: Y
    } = (null == R ? true : R.type) === E.ev.APPLICATION ? R : {},
    {
      query: z,
      categoryId: X
    } = (null == R ? true : R.type) === E.ev.SEARCH ? R : {},
    W = (0, o.bG)([y.A], () => y.A.getCategories()),
    K = l.useMemo(() => [(0, C.AU)(), ...W], [W]),
    Z = l.useMemo(() => K.find(e => e.id === Number(X)), [K, X]),
    {
      tabs: Q,
      selectedTab: J,
      onSelectTab: q
    } = (0, I.S)(null == B ? true : B.toString()),
    [$, ee] = l.useState(true),
    et = E.h.useField("trackedOpenedFromExternalEntrypoint"),
    en = E.h.useField("sessionId"),
    er = (0, o.bG)([f.default], () => f.default.getCurrentUser());
  l.useEffect(() => {
    if (!et && null == en) {
      let e = (0, g.YP)();
      x.default.track(k.HAw.APP_DIRECTORY_OPENED, {
        source: E.sW.EXTERNAL,
        session_id: e,
        user_id: null == er ? true : er.id
      }), E.h.setState({
        trackedOpenedFromExternalEntrypoint: true,
        sessionId: e,
        entrypoint: {
          name: E.sW.EXTERNAL
        },
        guildId: null
      })
    }
  }, [en, et, null == er ? true : er.id]), l.useEffect(() => {
    v.bW()
  }, []), l.useEffect(() => {
    H && v.wD()
  }, [H]), l.useEffect(() => E.tS.setState({
    lastItem: R
  }), [R]);
  let el = null != F,
    ei = (null == R ? true : R.type) === E.ev.SEARCH,
    {
      searchQuery: ea,
      onSearchTextChange: es,
      onClearSearch: eo,
      onSearchSubmit: ec
    } = (0, S.v)({
      initialQuery: null != z ? z : ""
    }),
    ed = j.A.useField("searchBarState"),
    {
      onTabsAvailableWidthChange: eu,
      onCollapsedSearchBarClick: ep,
      onSearchBarBlur: eh
    } = (0, u.p)({
      isSearchBarVisible: true,
      isSearchBarEmpty: "" === ea.trim(),
      searchBarState: ed,
      setSearchBarState: e => j.A.setState({
        searchBarState: e
      })
    }),
    em = l.useCallback(e => {
      q(e), ei && eo(), A()
    }, [ei, eo, q, A]),
    eg = l.useCallback(e => (0, P.YR)({
      applicationId: e
    }), []),
    e_ = el || ei,
    eb = l.useCallback(() => {
      null != (0, E.Bn)() ? (0, _.aX)() : (0, P.eM)()
    }, []),
    ef = l.useMemo(() => (0, s.debounce)(e => {
      let {
        scrollTop: t,
        offsetHeight: n,
        scrollHeight: r,
        location: l
      } = e;
      t > 0 && (0, O.TR)(k.HAw.APP_DIRECTORY_PAGE_SCROLLED, {
        scroll_visible_percentile: (t + n) / r,
        current_page: l
      })
    }, 200), []),
    ex = l.useCallback((e, t) => {
      n(e), ef({
        scrollTop: e.currentTarget.scrollTop,
        offsetHeight: e.currentTarget.offsetHeight,
        scrollHeight: e.currentTarget.scrollHeight,
        location: t
      })
    }, [ef, n]);
  return (0, r.jsxs)("div", {
    className: a()(G.nw, {
      [G.Yz]: t
    }),
    children: [t ? (0, r.jsx)(V, {}) : null, (0, r.jsxs)("div", {
      className: G.WH,
      children: [(0, r.jsxs)(p.Ay, {
        variant: e_ ? p.Z5.RELATIVE : p.Z5.OVERLAY,
        children: [!e_ && (0, r.jsx)(p.ns, {
          scrollPosition: i
        }), el ? (0, r.jsx)(U, {
          applicationId: F,
          hideDetailHeaderButtons: $,
          onClickBack: eb
        }) : (0, r.jsxs)(r.Fragment, {
          children: [ei ? (0, r.jsx)(p.XQ, {
            icon: c.Zge,
            onClick: eb
          }) : (0, r.jsx)(p.T4, {
            icon: c.k9F
          }), ei ? (0, r.jsx)(c.Heading, {
            variant: "heading-lg/semibold",
            color: "text-strong",
            className: G.wL,
            children: null != z && "" !== z ? M.intl.formatToPlainString(M.t.zHdzqW, {
              query: z
            }) : M.intl.formatToPlainString(M.t.Qhj5Br, {
              categoryName: null != (e = null == Z ? true : Z.name) ? e : M.intl.string(M.t.E407b7)
            })
          }) : (0, r.jsx)(h.A, {
            tabs: Q,
            selectedTab: J,
            onTabSelect: em,
            onAvailableWidthChange: eu
          }), (0, r.jsx)(m.A, {
            query: ea,
            placeholder: M.intl.string(M.t["5h0QOP"]),
            onTextChange: es,
            onClear: eo,
            onSubmit: ec,
            onCollapsedClick: ep,
            state: ed,
            onBlur: eh
          })]
        })]
      }), el ? (0, r.jsx)(T.A, {
        onScroll: e => ex(e, E.ev.APPLICATION),
        onSelectApplication: eg,
        applicationId: F,
        initialTab: Y,
        onButtonsVisibilityChange: ee
      }) : ei ? (0, r.jsx)(D.A, {
        onSelectApplication: eg,
        onScroll: e => ex(e, E.ev.SEARCH)
      }) : J === w.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID.toString() ? (0, r.jsx)(L.A, {
        onScroll: e => ex(e, E.ev.HOME),
        onSelectApplication: eg
      }) : (0, r.jsx)(N.A, {
        tabId: Number(J),
        onScroll: e => ex(e, E.ev.CATEGORY),
        onSelectApplication: eg
      })]
    })]
  })
}