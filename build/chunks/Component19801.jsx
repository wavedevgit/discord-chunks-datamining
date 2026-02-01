/** Chunk was on 52199 **/
/** chunk id: 19801, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => I
}), require("./896048.js"), require("./747238.js"), require("./812715.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  o = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk692986 = require("./692986.js"),
  Chunk822382 = require("./822382.js"),
  Chunk753806 = require("./753806.jsx"),
  Chunk424913 = require("./424913.jsx"),
  Chunk65600 = require("./65600.js"),
  Chunk145331 = require("./145331.js"),
  Chunk272444 = require("./272444.jsx"),
  Chunk806595 = require("./806595.js"),
  Chunk768570 = require("./768570.js"),
  Chunk652215 = require("./652215.js"),
  Chunk996316 = require("./996316.js");
let v = o()("2015-05-15").local();

function O(e) {
  let {
    items: t,
    navId: r,
    selectedIndex: l
  } = e, s = 0;
  return (0, n.jsx)(n.Fragment, {
    children: t.map(e => {
      switch (e.type) {
        case y.$.ROW:
          let {
            icon: t, label: a, onSelect: i
          } = e.data, o = s;
          return s += 1, (0, n.jsx)(A.Jx, {
            icon: t,
            label: a,
            onSelect: i,
            navId: r,
            index: o,
            selected: l === o
          }, "".concat(e.type, "-").concat(o));
        case y.$.GROUP:
          let {
            rows: c, title: u
          } = e.data, d = s;
          return s += c.length, (0, n.jsx)(A.YD, {
            navId: r,
            item: e,
            startingIndex: d,
            selectedIndex: l
          }, "".concat(e.type, "--").concat(u, "-").concat(d));
        default:
          return null
      }
    })
  })
}
let T = Chunk64700.forwardRef(function(e, t) {
    let {
      searchContext: r,
      navId: s,
      resultsState: a,
      onSelectedIndexChanged: i,
      selectedChannel: o
    } = e, [c, d] = l.useState(false), h = l.useCallback(e => {
      d(e), i(e);
      let t = document.getElementById("".concat(s, "-").concat(e));
      null != t && t.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      })
    }, [s, i]), f = l.useCallback(e => {
      let {
        query: t,
        performSearch: r,
        replace: n
      } = e;
      g.A.setSearchQuery({
        query: t,
        performSearch: r,
        replace: n,
        resultsState: a,
        searchQuerySource: m.Q_.SEARCH_POPOUT
      }), h(false)
    }, [a, h]), {
      items: p,
      itemsData: E
    } = (0, S.A)({
      resultsState: a,
      searchContext: r,
      selectedChannel: o,
      setSearchQuery: f
    }), _ = e => {
      let {
        newSelectedIndex: t,
        searchAutocompleteSelectAction: r
      } = e, n = t;
      return null == n && (n = c), !(n < 0) && !(n > E.length - 1) && (E[n].data.onSelect({
        searchAutocompleteSelectAction: r,
        selectedIndex: n
      }), true)
    }, A = e => {
      let t;
      (t = c + e) > E.length - 1 ? t = 0 : t < 0 && (t = E.length - 1), h(t)
    }, y = l.useRef({
      itemsData: [],
      selectedIndex: false,
      modeType: a.mode.type
    });
    return l.useEffect(() => {
      let {
        itemsData: e,
        selectedIndex: t,
        modeType: r
      } = y.current, n = a.mode.type;
      if (n !== r) n === b.o$q.FILTER ? h(0) : h(false);
      else if (t >= 0 && (t === c || e.length !== E.length)) {
        let r = e[t],
          n = null == r ? true : r.data.resultText;
        if (null != n) {
          let e = E.findIndex(e => e.data.resultText === n);
          false !== e ? h(e) : t >= E.length && h(Math.max(0, E.length - 1))
        } else t >= E.length && h(Math.max(0, E.length - 1))
      }
      y.current = {
        itemsData: E,
        selectedIndex: c,
        modeType: n
      }
    }, [E, c, a.mode.type, h]), l.useImperativeHandle(t, () => ({
      selectedIndex: c,
      focusNextOption: () => {
        A(1)
      },
      focusPreviousOption: () => {
        A(false)
      },
      selectOption: _
    })), (0, n.jsx)(u.d_W, {
      onMouseDown: e => {
        e.stopPropagation(), e.preventDefault()
      },
      role: "listbox",
      id: s,
      tabIndex: false,
      "aria-activedescendant": "".concat(s, "-").concat(c),
      className: p.length > 0 ? R.kL : true,
      children: (0, n.jsx)(O, {
        items: p,
        navId: s,
        selectedIndex: c
      })
    })
  }),
  x = Chunk64700.forwardRef(function(e, t) {
    let {
      navId: r,
      resultsState: s,
      searchContext: i
    } = e;
    return l.useImperativeHandle(t, () => ({
      selectedIndex: false,
      focusNextOption: () => {},
      focusPreviousOption: () => {},
      selectOption: () => {}
    })), (0, n.jsx)(u.d_W, {
      onMouseDown: e => {
        e.stopPropagation(), e.preventDefault()
      },
      role: "listbox",
      id: r,
      tabIndex: false,
      "aria-activedescendant": "".concat(r, "-").concat(false),
      className: a()(R.kL, R.Wl),
      children: (0, n.jsx)(u.xuO, {
        onSelect: e => {
          let t = (0, p.bS)(i);
          (0, _.kc)({
            searchContext: i,
            searchQuery: E.A.getSearchResultsQuery(t),
            searchQueryString: g.A.getSearchInputText(i),
            searchTokenType: s.mode.filter,
            searchAutocompleteGroup: b.x2k.DATES,
            searchAutocompleteMode: s.mode,
            isSearchFilterPrefix: false,
            isSearchFilterAnswer: true,
            isSearchFilterComplete: false,
            searchAutocompleteSelectAction: m.oi.CLICK
          }), g.A.setSearchQuery({
            query: e.format(b.ump) + " ",
            performSearch: true,
            replace: false,
            resultsState: s,
            searchQuerySource: m.Q_.SEARCH_POPOUT
          })
        },
        maxDate: o()().local(),
        minDate: v,
        calendarClassName: R.BJ
      })
    })
  }),
  I = Chunk64700.forwardRef(function(e, t) {
    let {
      searchContext: r,
      navId: l,
      onSelectedIndexChanged: s
    } = e, [a, i] = (0, c.yK)([f.A, h.A, d.A], () => {
      let e = f.A.getState(r),
        t = h.A.getChannelId();
      return [e, d.A.getChannel(t)]
    });
    return (0, p.av)(a.mode.filter) ? (0, n.jsx)(x, {
      navId: l,
      resultsState: a,
      searchContext: r
    }) : (0, n.jsx)(T, {
      ref: t,
      searchContext: r,
      navId: l,
      onSelectedIndexChanged: s,
      resultsState: a,
      selectedChannel: i
    })
  })