/** Chunk was on web.js **/
/** chunk id: 448842, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk944486 = require("./944486.js"),
  Chunk607802 = require("./607802.js"),
  Chunk28964 = require("./28964.js"),
  Chunk532428 = require("./532428.js"),
  Chunk637879 = require("./637879.jsx"),
  Chunk794137 = require("./794137.js"),
  Chunk628221 = require("./628221.js"),
  Chunk611004 = require("./611004.js"),
  Chunk579612 = require("./579612.jsx"),
  Chunk817190 = require("./817190.js"),
  Chunk315322 = require("./315322.js"),
  Chunk52459 = require("./52459.jsx"),
  Chunk349504 = require("./349504.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk465262 = require("./465262.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function A(e) {
  let {
    resultsState: t,
    searchContext: v,
    selectedChannel: T,
    setSearchQuery: A
  } = e, C = (0, l.KS)({
    isXDMSearch: v.type === b.aib.DMS,
    location: "SearchFiltersRedesignPopout"
  }), {
    autocompletes: N,
    mode: R
  } = t, P = (0, g.Z)({
    autocompletes: N,
    mode: R,
    searchContext: v,
    setSearchQuery: A
  }), w = (0, E.Z)({
    setSearchQuery: A,
    searchContext: v,
    mode: R
  }), D = () => {
    (0, a.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("56266"), n.e("37979")]).then(n.bind(n, 238088));
      return t => (0, r.jsx)(e, S(I({}, t), {
        searchContext: v
      }))
    })
  }, {
    items: x
  } = (0, ({
    [b.Sap.EMPTY]: () => {
      let e = [];
      if (null != T) {
        let t = (0, u.f)(T),
          n = e => {
            var t;
            let {
              selectedChannel: n,
              searchAutocompleteSelectAction: r
            } = e;
            (0, m.tA)({
              searchContext: v,
              searchAutocompleteSelectAction: r
            });
            let i = b.dCx.FILTER_IN,
              a = c.ZP[i],
              o = (0, s.X3)(n);
            A({
              query: "".concat(null != (t = null == a ? true : a.key) ? t : i.toString(), " ").concat(o),
              performSearch: false,
              replace: false
            })
          },
          i = (0, f.fC)(d.i.ROW, {
            icon: (0, r.jsx)(p.MC, {
              channel: T,
              className: O.itemIcon
            }),
            label: (0, r.jsx)(u.Q0, {
              label: y.intl.format(y.t["VGEH//"], {
                channelName: t
              }),
              className: O.inSelectedChannelLabel
            }),
            onSelect: e => {
              let {
                searchAutocompleteSelectAction: t
              } = e;
              return n({
                selectedChannel: T,
                searchAutocompleteSelectAction: t
              })
            }
          });
        e.push(i)
      }
      let t = C ? y.intl.string(y.t.diOL4u) : y.intl.string(y.t["M1tf+/"]),
        n = (0, f.fC)(d.i.ROW, {
          icon: (0, r.jsx)(a.gXV, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20,
            className: O.itemIcon
          }),
          label: (0, r.jsx)(u.Q0, {
            label: t
          }),
          onSelect: D
        });
      if (C) {
        let t = [...w, n];
        e.push((0, f.fC)(d.i.GROUP, {
          rows: t,
          title: y.intl.string(y.t.UdhTtr)
        }))
      } else e.push(n);
      let i = C ? e.length + w.length : e.length,
        {
          autocompleteCount: o,
          autocompleteGroups: l
        } = P({
          performSearch: true,
          filterFn: e => e.group === b.rtL.HISTORY && e.results.length > 0,
          icon: (0, r.jsx)(a._Ve, {
            size: "sm",
            color: "currentColor",
            className: O.itemIcon
          }),
          getAutocompleteLabel: u.dx,
          trackSearchResult: e => {
            let {
              selectedIndex: t
            } = e;
            (0, m.$z)({
              searchContext: v,
              searchHistoryIndex: t - i,
              searchHistoryTotalResults: o
            })
          }
        });
      return o > 0 && e.push(...l), {
        items: e
      }
    },
    [b.Sap.FILTER_ALL]: () => {
      let e = [],
        n = (0, f.fC)(d.i.ROW, {
          icon: (0, r.jsx)(a._Ve, {
            size: "sm",
            color: "currentColor",
            className: O.itemIcon
          }),
          label: v.type === b.aib.FAVORITES && (0, s.X$)() ? (0, r.jsx)(u.Q0, {
            label: y.intl.string(y.t["6RVtLC"])
          }) : (0, r.jsx)(u.Q0, {
            label: y.intl.format(y.t.ub226e, {
              value: t.query
            })
          }),
          onSelect: () => {}
        });
      if (e.push(n), v.type === b.aib.FAVORITES && (0, s.X$)()) {
        let t = (0, f.fC)(d.i.ROW, {
          icon: (0, r.jsx)(a._Ve, {
            size: "sm",
            color: "currentColor",
            className: O.itemIcon
          }),
          label: (0, r.jsx)(u.Q0, {
            label: y.intl.string(y.t.FtSUxc)
          }),
          onSelect: () => {}
        });
        e.push(t)
      }
      let i = (0, f.fC)(d.i.ROW, {
        icon: (0, r.jsx)(a.gXV, {
          size: "custom",
          color: "currentColor",
          width: 20,
          height: 20,
          className: O.itemIcon
        }),
        label: (0, r.jsx)(u.Q0, {
          label: y.intl.string(y.t["M1tf+/"])
        }),
        onSelect: D
      });
      e.push(i);
      let {
        autocompleteCount: l,
        autocompleteGroups: p
      } = P({
        performSearch: false,
        filterFn: e => e.group !== b.rtL.DATES && e.group !== b.dCx.FILTER_HAS && e.results.length > 0,
        icon: (0, r.jsx)(a._Ve, {
          size: "sm",
          color: "currentColor",
          className: O.itemIcon
        }),
        getAutocompleteLabel: u.dx,
        trackSearchResult: e => {
          var t;
          let {
            selectedIndex: n,
            searchAutocompleteSelectAction: r,
            selectedAutocomplete: i,
            selectedAutocompleteGroup: a
          } = e, u = R.type, d = R.filter, {
            token: f,
            group: p
          } = i, g = null != p && (0, c._m)(p) ? p : null, E = null != (t = null != f ? f : d) ? t : g, y = i.channel, O = E === b.dCx.FILTER_IN && null != y && y.id === o.Z.getChannelId(), I = (0, s.Tm)(v);
          (0, m.bh)({
            searchContext: v,
            searchQuery: h.Z.getSearchResultsQuery(I),
            searchQueryString: _.Z.getSearchInputText(v),
            searchTokenType: E,
            searchAutocompleteGroup: a,
            searchAutocompleteMode: R,
            searchAutocompleteResultIndex: n,
            searchAutocompleteTotalResults: l,
            isSearchFilterPrefix: u === b.Sap.EMPTY,
            isSearchFilterAnswer: u === b.Sap.FILTER,
            isSearchFilterComplete: u === b.Sap.FILTER_ALL,
            isInFilterForSelectedChannel: O,
            searchAutocompleteSelectAction: r
          })
        }
      });
      return l > 0 && e.push(...p), {
        items: e
      }
    },
    [b.Sap.FILTER]: () => {
      let {
        autocompleteCount: e,
        autocompleteGroups: n
      } = P({
        performSearch: false,
        filterFn: e => e.results.length > 0,
        icon: (0, r.jsx)(a._Ve, {
          size: "sm",
          color: "currentColor",
          className: O.itemIcon
        }),
        getAutocompleteLabel: u.dx,
        trackSearchResult: t => {
          var n;
          let {
            selectedIndex: r,
            searchAutocompleteSelectAction: i,
            selectedAutocomplete: a,
            selectedAutocompleteGroup: l
          } = t, u = R.type, d = R.filter, {
            token: f,
            group: p
          } = a, g = null != p && (0, c._m)(p) ? p : null, E = null != (n = null != f ? f : d) ? n : g, y = a.channel, O = E === b.dCx.FILTER_IN && null != y && y.id === o.Z.getChannelId(), I = (0, s.Tm)(v);
          (0, m.bh)({
            searchContext: v,
            searchQuery: h.Z.getSearchResultsQuery(I),
            searchQueryString: _.Z.getSearchInputText(v),
            searchTokenType: E,
            searchAutocompleteGroup: l,
            searchAutocompleteMode: R,
            searchAutocompleteResultIndex: r,
            searchAutocompleteTotalResults: e,
            isSearchFilterPrefix: u === b.Sap.EMPTY,
            isSearchFilterAnswer: u === b.Sap.FILTER,
            isSearchFilterComplete: u === b.Sap.FILTER_ALL,
            isInFilterForSelectedChannel: O,
            searchAutocompleteSelectAction: i
          })
        }
      });
      return {
        items: [...n, (0, f.fC)(d.i.ROW, {
          icon: (0, r.jsx)(a._Ve, {
            size: "sm",
            color: "currentColor",
            className: O.itemIcon
          }),
          label: (0, r.jsx)(u.Q0, {
            label: y.intl.format(y.t.ub226e, {
              value: t.query
            })
          }),
          onSelect: () => {}
        })]
      }
    }
  })[R.type])(), L = i.useMemo(() => {
    let e = [];
    return x.forEach(t => {
      switch (t.type) {
        case d.i.ROW:
          e.push(t);
          break;
        case d.i.GROUP:
          t.data.rows.forEach(t => e.push(t))
      }
    }), e
  }, [x]);
  return {
    items: x,
    itemsData: L
  }
}