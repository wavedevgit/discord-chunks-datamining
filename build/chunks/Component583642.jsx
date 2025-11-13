/** Chunk was on web.js **/
/** chunk id: 583642, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
}), require("./388685.js"), require("./704826.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk585483 = require("./585483.js"),
  Chunk738018 = require("./738018.js"),
  Chunk607802 = require("./607802.js"),
  Chunk637879 = require("./637879.jsx"),
  Chunk794137 = require("./794137.js"),
  Chunk611004 = require("./611004.jsx"),
  Chunk448842 = require("./448842.jsx"),
  Chunk817190 = require("./817190.js"),
  Chunk315322 = require("./315322.js"),
  Chunk723642 = require("./723642.js"),
  Chunk981631 = require("./981631.js"),
  Chunk356702 = require("./356702.js");
let S = l()("2015-05-15").local();

function A(e) {
  let {
    items: t,
    navId: n,
    selectedIndex: i
  } = e, a = 0;
  return (0, r.jsx)(r.Fragment, {
    children: t.map(e => {
      switch (e.type) {
        case g.i.ROW:
          let {
            icon: t, label: o, onSelect: s
          } = e.data, l = a;
          return a += 1, (0, r.jsx)(m._B, {
            icon: t,
            label: o,
            onSelect: s,
            navId: n,
            index: l,
            selected: i === l
          }, "".concat(e.type, "-").concat(l));
        case g.i.GROUP:
          let {
            rows: c, title: u
          } = e.data, d = a;
          return a += c.length, (0, r.jsx)(m.dI, {
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
let C = Chunk647438.forwardRef(function(e, t) {
    let {
      searchContext: n,
      navId: a,
      resultsState: o,
      onSelectedIndexChanged: s,
      selectedChannel: l
    } = e, [c, d] = i.useState(false), f = e => {
      e.stopPropagation(), e.preventDefault()
    }, _ = i.useCallback(e => {
      d(e), s(e);
      let t = document.getElementById("".concat(a, "-").concat(e));
      null != t && t.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      })
    }, [a, s]), p = i.useCallback(e => {
      let {
        query: t,
        performSearch: n,
        replace: r
      } = e;
      E.Z.setSearchQuery({
        query: t,
        performSearch: n,
        replace: r,
        resultsState: o
      }), _(false)
    }, [o, _]), {
      items: h,
      itemsData: m
    } = (0, b.Z)({
      resultsState: o,
      searchContext: n,
      selectedChannel: l,
      setSearchQuery: p
    }), g = e => {
      let {
        newSelectedIndex: t,
        searchAutocompleteSelectAction: n
      } = e, r = t;
      return null == r && (r = c), !(r < 0) && !(r > m.length - 1) && (m[r].data.onSelect({
        searchAutocompleteSelectAction: n,
        selectedIndex: r
      }), true)
    }, y = e => {
      let t = e;
      t > m.length - 1 ? t = 0 : t < 0 && (t = m.length - 1), _(t)
    }, O = e => {
      y(c + e)
    }, v = i.useRef({
      itemsData: [],
      selectedIndex: false,
      modeType: o.mode.type
    });
    return i.useEffect(() => {
      let {
        itemsData: e,
        selectedIndex: t,
        modeType: n
      } = v.current, r = o.mode.type;
      if (r !== n) r === I.Sap.FILTER ? _(0) : _(false);
      else if (t >= 0 && (t === c || e.length !== m.length)) {
        let n = e[t],
          r = null == n ? true : n.data.resultText;
        if (null != r) {
          let e = m.findIndex(e => e.data.resultText === r);
          false !== e ? _(e) : t >= m.length && _(Math.max(0, m.length - 1))
        } else t >= m.length && _(Math.max(0, m.length - 1))
      }
      v.current = {
        itemsData: m,
        selectedIndex: c,
        modeType: r
      }
    }, [m, c, o.mode.type, _]), i.useImperativeHandle(t, () => ({
      selectedIndex: c,
      focusNextOption: () => {
        O(1)
      },
      focusPreviousOption: () => {
        O(false)
      },
      selectOption: g
    })), (0, r.jsx)(u.u2D, {
      onMouseDown: f,
      role: "listbox",
      id: a,
      tabIndex: false,
      "aria-activedescendant": "".concat(a, "-").concat(c),
      className: h.length > 0 ? T.container : true,
      children: (0, r.jsx)(A, {
        items: h,
        navId: a,
        selectedIndex: c
      })
    })
  }),
  N = Chunk647438.forwardRef(function(e, t) {
    let {
      navId: n,
      resultsState: a,
      searchContext: s
    } = e, c = false, d = e => {
      e.stopPropagation(), e.preventDefault()
    }, f = e => {
      let t = (0, h.Tm)(s);
      (0, O.bh)({
        searchContext: s,
        searchQuery: y.Z.getSearchResultsQuery(t),
        searchQueryString: E.Z.getSearchInputText(s),
        searchTokenType: a.mode.filter,
        searchAutocompleteGroup: I.rtL.DATES,
        searchAutocompleteMode: a.mode,
        isSearchFilterPrefix: false,
        isSearchFilterAnswer: true,
        isSearchFilterComplete: false,
        searchAutocompleteSelectAction: v.ZW.CLICK
      });
      let {
        mode: n,
        cursorScope: r
      } = a, i = 0;
      null != n.token ? i = n.token.start : (null == r ? true : r.currentToken) != null && (i = r.currentToken.end);
      let o = null != n.token ? n.token.end : i;
      _.S.dispatch(I.CkL.SET_SEARCH_QUERY, {
        query: e.format(I.b2L) + " ",
        anchor: i,
        focus: o,
        performSearch: true,
        replace: false
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
      className: o()(T.container, T.datePickerContainer),
      children: (0, r.jsx)(u.hGg, {
        onSelect: f,
        maxDate: l()().local(),
        minDate: S
      })
    })
  }),
  R = Chunk647438.forwardRef(function(e, t) {
    let {
      searchContext: n,
      navId: i,
      onSelectedIndexChanged: a
    } = e, [o, s] = (0, c.Wu)([p.Z, f.Z, d.Z], () => {
      let e = p.Z.getState(n),
        t = f.Z.getChannelId();
      return [e, d.Z.getChannel(t)]
    });
    return (0, h.Fz)(o.mode.filter) ? (0, r.jsx)(N, {
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