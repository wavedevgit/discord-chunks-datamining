/** Chunk was on web.js **/
/** chunk id: 242182, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => N
}), require("./896048.js"), require("./747238.js"), require("./812715.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  l = require.n(Chunk989349),
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
let S = l()("2015-05-15").local();

function I(e) {
  let {
    items: t,
    navId: n,
    selectedIndex: i
  } = e, a = 0;
  return (0, r.jsx)(r.Fragment, {
    children: t.map(e => {
      switch (e.type) {
        case y.$.ROW:
          let {
            icon: t, label: s, onSelect: o
          } = e.data, l = a;
          return a += 1, (0, r.jsx)(b.Jx, {
            icon: t,
            label: s,
            onSelect: o,
            navId: n,
            index: l,
            selected: i === l
          }, "".concat(e.type, "-").concat(l));
        case y.$.GROUP:
          let {
            rows: c, title: u
          } = e.data, d = a;
          return a += c.length, (0, r.jsx)(b.YD, {
            navId: n,
            item: e,
            startingIndex: d,
            selectedIndex: i
          }, "".concat(e.type, "--").concat(u, "-").concat(d));
        default:
          return null
      }
    })
  })
}
let T = Chunk64700.forwardRef(function(e, t) {
    let {
      searchContext: n,
      navId: a,
      resultsState: s,
      onSelectedIndexChanged: o,
      selectedChannel: l
    } = e, [c, d] = i.useState(false), f = e => {
      e.stopPropagation(), e.preventDefault()
    }, p = i.useCallback(e => {
      d(e), o(e);
      let t = document.getElementById("".concat(a, "-").concat(e));
      null != t && t.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      })
    }, [a, o]), _ = i.useCallback(e => {
      let {
        query: t,
        performSearch: n,
        replace: r
      } = e;
      h.A.setSearchQuery({
        query: t,
        performSearch: n,
        replace: r,
        resultsState: s,
        searchQuerySource: O.Q_.SEARCH_POPOUT
      }), p(false)
    }, [s, p]), {
      items: g,
      itemsData: E
    } = (0, m.A)({
      resultsState: s,
      searchContext: n,
      selectedChannel: l,
      setSearchQuery: _
    }), b = e => {
      let {
        newSelectedIndex: t,
        searchAutocompleteSelectAction: n
      } = e, r = t;
      return null == r && (r = c), !(r < 0) && !(r > E.length - 1) && (E[r].data.onSelect({
        searchAutocompleteSelectAction: n,
        selectedIndex: r
      }), true)
    }, y = e => {
      let t = e;
      t > E.length - 1 ? t = 0 : t < 0 && (t = E.length - 1), p(t)
    }, S = e => {
      y(c + e)
    }, T = i.useRef({
      itemsData: [],
      selectedIndex: false,
      modeType: s.mode.type
    });
    return i.useEffect(() => {
      let {
        itemsData: e,
        selectedIndex: t,
        modeType: n
      } = T.current, r = s.mode.type;
      if (r !== n) r === A.o$q.FILTER ? p(0) : p(false);
      else if (t >= 0 && (t === c || e.length !== E.length)) {
        let n = e[t],
          r = null == n ? true : n.data.resultText;
        if (null != r) {
          let e = E.findIndex(e => e.data.resultText === r);
          false !== e ? p(e) : t >= E.length && p(Math.max(0, E.length - 1))
        } else t >= E.length && p(Math.max(0, E.length - 1))
      }
      T.current = {
        itemsData: E,
        selectedIndex: c,
        modeType: r
      }
    }, [E, c, s.mode.type, p]), i.useImperativeHandle(t, () => ({
      selectedIndex: c,
      focusNextOption: () => {
        S(1)
      },
      focusPreviousOption: () => {
        S(false)
      },
      selectOption: b
    })), (0, r.jsx)(u.d_W, {
      onMouseDown: f,
      role: "listbox",
      id: a,
      tabIndex: false,
      "aria-activedescendant": "".concat(a, "-").concat(c),
      className: g.length > 0 ? v.kL : true,
      children: (0, r.jsx)(I, {
        items: g,
        navId: a,
        selectedIndex: c
      })
    })
  }),
  C = Chunk64700.forwardRef(function(e, t) {
    let {
      navId: n,
      resultsState: a,
      searchContext: o
    } = e, c = false, d = e => {
      e.stopPropagation(), e.preventDefault()
    }, f = e => {
      let t = (0, _.bS)(o);
      (0, E.kc)({
        searchContext: o,
        searchQuery: g.A.getSearchResultsQuery(t),
        searchQueryString: h.A.getSearchInputText(o),
        searchTokenType: a.mode.filter,
        searchAutocompleteGroup: A.x2k.DATES,
        searchAutocompleteMode: a.mode,
        isSearchFilterPrefix: false,
        isSearchFilterAnswer: true,
        isSearchFilterComplete: false,
        searchAutocompleteSelectAction: O.oi.CLICK
      }), h.A.setSearchQuery({
        query: e.format(A.ump) + " ",
        performSearch: true,
        replace: false,
        resultsState: a,
        searchQuerySource: O.Q_.SEARCH_POPOUT
      })
    };
    return i.useImperativeHandle(t, () => ({
      selectedIndex: c,
      focusNextOption: () => {},
      focusPreviousOption: () => {},
      selectOption: () => {}
    })), (0, r.jsx)(u.d_W, {
      onMouseDown: d,
      role: "listbox",
      id: n,
      tabIndex: false,
      "aria-activedescendant": "".concat(n, "-").concat(c),
      className: s()(v.kL, v.Wl),
      children: (0, r.jsx)(u.xuO, {
        onSelect: f,
        maxDate: l()().local(),
        minDate: S,
        calendarClassName: v.BJ
      })
    })
  }),
  N = Chunk64700.forwardRef(function(e, t) {
    let {
      searchContext: n,
      navId: i,
      onSelectedIndexChanged: a
    } = e, [s, o] = (0, c.yK)([p.A, f.A, d.A], () => {
      let e = p.A.getState(n),
        t = f.A.getChannelId();
      return [e, d.A.getChannel(t)]
    });
    return (0, _.av)(s.mode.filter) ? (0, r.jsx)(C, {
      navId: i,
      resultsState: s,
      searchContext: n
    }) : (0, r.jsx)(T, {
      ref: t,
      searchContext: n,
      navId: i,
      onSelectedIndexChanged: a,
      resultsState: s,
      selectedChannel: o
    })
  })