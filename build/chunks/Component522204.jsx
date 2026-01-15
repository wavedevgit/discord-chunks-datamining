/** Chunk was on web.js **/
/** chunk id: 522204, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./388685.js"), require("./704826.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk738018 = require("./738018.js"),
  Chunk607802 = require("./607802.js"),
  Chunk611004 = require("./611004.jsx"),
  Chunk448842 = require("./448842.jsx"),
  Chunk817190 = require("./817190.js"),
  Chunk315322 = require("./315322.js"),
  Chunk166602 = require("./166602.jsx"),
  Chunk777018 = require("./777018.js"),
  Chunk723642 = require("./723642.js"),
  Chunk981631 = require("./981631.js"),
  Chunk972750 = require("./972750.js");
let I = l()("2015-05-15").local();

function T(e) {
  let {
    items: t,
    navId: n,
    selectedIndex: i
  } = e, a = 0;
  return (0, r.jsx)(r.Fragment, {
    children: t.map(e => {
      switch (e.type) {
        case y.i.ROW:
          let {
            icon: t, label: o, onSelect: s
          } = e.data, l = a;
          return a += 1, (0, r.jsx)(b._B, {
            icon: t,
            label: o,
            onSelect: s,
            navId: n,
            index: l,
            selected: i === l
          }, "".concat(e.type, "-").concat(l));
        case y.i.GROUP:
          let {
            rows: c, title: u
          } = e.data, d = a;
          return a += c.length, (0, r.jsx)(b.dI, {
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
let C = Chunk473749.forwardRef(function(e, t) {
    let {
      searchContext: n,
      navId: a,
      resultsState: o,
      onSelectedIndexChanged: s,
      selectedChannel: l
    } = e, [c, d] = i.useState(false), f = e => {
      e.stopPropagation(), e.preventDefault()
    }, p = i.useCallback(e => {
      d(e), s(e);
      let t = document.getElementById("".concat(a, "-").concat(e));
      null != t && t.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      })
    }, [a, s]), _ = i.useCallback(e => {
      let {
        query: t,
        performSearch: n,
        replace: r
      } = e;
      h.Z.setSearchQuery({
        query: t,
        performSearch: n,
        replace: r,
        resultsState: o,
        searchQuerySource: O.w7.SEARCH_POPOUT
      }), p(false)
    }, [o, p]), {
      items: g,
      itemsData: E
    } = (0, m.Z)({
      resultsState: o,
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
    }, I = e => {
      y(c + e)
    }, C = i.useRef({
      itemsData: [],
      selectedIndex: false,
      modeType: o.mode.type
    });
    return i.useEffect(() => {
      let {
        itemsData: e,
        selectedIndex: t,
        modeType: n
      } = C.current, r = o.mode.type;
      if (r !== n) r === v.Sap.FILTER ? p(0) : p(false);
      else if (t >= 0 && (t === c || e.length !== E.length)) {
        let n = e[t],
          r = null == n ? true : n.data.resultText;
        if (null != r) {
          let e = E.findIndex(e => e.data.resultText === r);
          false !== e ? p(e) : t >= E.length && p(Math.max(0, E.length - 1))
        } else t >= E.length && p(Math.max(0, E.length - 1))
      }
      C.current = {
        itemsData: E,
        selectedIndex: c,
        modeType: r
      }
    }, [E, c, o.mode.type, p]), i.useImperativeHandle(t, () => ({
      selectedIndex: c,
      focusNextOption: () => {
        I(1)
      },
      focusPreviousOption: () => {
        I(false)
      },
      selectOption: b
    })), (0, r.jsx)(u.u2D, {
      onMouseDown: f,
      role: "listbox",
      id: a,
      tabIndex: false,
      "aria-activedescendant": "".concat(a, "-").concat(c),
      className: g.length > 0 ? S.container : true,
      children: (0, r.jsx)(T, {
        items: g,
        navId: a,
        selectedIndex: c
      })
    })
  }),
  A = Chunk473749.forwardRef(function(e, t) {
    let {
      navId: n,
      resultsState: a,
      searchContext: s
    } = e, c = false, d = e => {
      e.stopPropagation(), e.preventDefault()
    }, f = e => {
      let t = (0, _.Tm)(s);
      (0, E.bh)({
        searchContext: s,
        searchQuery: g.Z.getSearchResultsQuery(t),
        searchQueryString: h.Z.getSearchInputText(s),
        searchTokenType: a.mode.filter,
        searchAutocompleteGroup: v.rtL.DATES,
        searchAutocompleteMode: a.mode,
        isSearchFilterPrefix: false,
        isSearchFilterAnswer: true,
        isSearchFilterComplete: false,
        searchAutocompleteSelectAction: O.ZW.CLICK
      }), h.Z.setSearchQuery({
        query: e.format(v.b2L) + " ",
        performSearch: true,
        replace: false,
        resultsState: a,
        searchQuerySource: O.w7.SEARCH_POPOUT
      })
    };
    return i.useImperativeHandle(t, () => ({
      selectedIndex: c,
      focusNextOption: () => {},
      focusPreviousOption: () => {},
      selectOption: () => {}
    })), (0, r.jsx)(u.u2D, {
      onMouseDown: d,
      role: "listbox",
      id: n,
      tabIndex: false,
      "aria-activedescendant": "".concat(n, "-").concat(c),
      className: o()(S.container, S.datePickerContainer),
      children: (0, r.jsx)(u.hGg, {
        onSelect: f,
        maxDate: l()().local(),
        minDate: I,
        calendarClassName: S.calendar
      })
    })
  }),
  N = Chunk473749.forwardRef(function(e, t) {
    let {
      searchContext: n,
      navId: i,
      onSelectedIndexChanged: a
    } = e, [o, s] = (0, c.Wu)([p.Z, f.Z, d.Z], () => {
      let e = p.Z.getState(n),
        t = f.Z.getChannelId();
      return [e, d.Z.getChannel(t)]
    });
    return (0, _.Fz)(o.mode.filter) ? (0, r.jsx)(A, {
      navId: i,
      resultsState: o,
      searchContext: n
    }) : (0, r.jsx)(C, {
      ref: t,
      searchContext: n,
      navId: i,
      onSelectedIndexChanged: a,
      resultsState: o,
      selectedChannel: s
    })
  })