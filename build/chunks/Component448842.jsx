/** Chunk was on web.js **/
/** chunk id: 448842, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./539854.js"), require("./388685.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk944486 = require("./944486.js"),
  Chunk585483 = require("./585483.js"),
  Chunk607802 = require("./607802.js"),
  Chunk28964 = require("./28964.js"),
  Chunk532428 = require("./532428.js"),
  Chunk637879 = require("./637879.jsx"),
  Chunk794137 = require("./794137.js"),
  Chunk628221 = require("./628221.js"),
  Chunk611004 = require("./611004.js"),
  Chunk817190 = require("./817190.js"),
  Chunk315322 = require("./315322.js"),
  Chunk52459 = require("./52459.js"),
  Chunk349504 = require("./349504.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk493090 = require("./493090.js");

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
  } = e, C = (0, c.KS)({
    location: "SearchFiltersRedesignPopout"
  }), {
    autocompletes: N,
    mode: R
  } = t, P = (0, g.Z)({
    autocompletes: N,
    mode: R
  }), D = (0, E.Z)({
    setSearchQuery: A,
    searchContext: v,
    mode: R
  }), w = e => {
    let {
      searchEverywhere: t
    } = e;
    s.S.dispatch(b.CkL.PERFORM_SEARCH, {
      searchEverywhere: t
    })
  }, x = e => {
    var t;
    let {
      autocompleteCount: n,
      selectedIndex: r,
      searchAutocompleteSelectAction: i,
      selectedAutocomplete: a,
      selectedAutocompleteGroup: s
    } = e, c = R.type, d = R.filter, {
      token: f,
      group: _
    } = a, g = null != _ && (0, u._m)(_) ? _ : null, E = null != (t = null != f ? f : d) ? t : g, y = a.channel, O = E === b.dCx.FILTER_IN && null != y && y.id === o.Z.getChannelId(), I = (0, l.Tm)(v);
    (0, m.bh)({
      searchContext: v,
      searchQuery: h.Z.getSearchResultsQuery(I),
      searchQueryString: p.Z.getSearchInputText(v),
      searchTokenType: E,
      searchAutocompleteGroup: s,
      searchAutocompleteMode: R,
      searchAutocompleteResultIndex: r,
      searchAutocompleteTotalResults: n,
      isSearchFilterPrefix: c === b.Sap.EMPTY,
      isSearchFilterAnswer: c === b.Sap.FILTER,
      isSearchFilterComplete: c === b.Sap.FILTER_ALL,
      isInFilterForSelectedChannel: O,
      searchAutocompleteSelectAction: i
    })
  }, L = i.useCallback(e => {
    let t = e ? y.intl.string(y.t.diOL4i) : y.intl.string(y.t["M1tf+7"]),
      i = () => {
        (0, a.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("30474"), n.e("37979"), n.e("49205")]).then(n.bind(n, 238088));
          return t => (0, r.jsx)(e, S(I({}, t), {
            searchContext: v
          }))
        })
      };
    return (0, _.fC)(f.i.ROW, {
      icon: (0, r.jsx)(a.gXV, {
        size: "custom",
        color: "currentColor",
        width: 20,
        height: 20,
        className: O.itemIcon
      }),
      label: (0, r.jsx)(d.Q0, {
        label: t
      }),
      onSelect: i
    })
  }, [v]), {
    items: M
  } = (0, ({
    [b.Sap.EMPTY]: () => {
      let e = [];
      if (null != T && (0, l.R6)(v)) {
        let t = (0, d.f)(T),
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
              a = u.ZP[i],
              o = (0, l.X3)(n);
            A({
              query: "".concat(null != (t = null == a ? true : a.key) ? t : i.toString(), " ").concat(o),
              performSearch: true,
              replace: false
            })
          },
          i = (0, _.fC)(f.i.ROW, {
            icon: (0, r.jsx)(a._Ve, {
              size: "sm",
              color: "currentColor",
              className: O.itemIcon
            }),
            label: (0, r.jsx)(d.Q0, {
              label: y.intl.format(y.t["VGEH/0"], {
                channelName: t
              }),
              className: O.labelWithElements
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
      let t = L(C);
      if (C) {
        let n = [...D, t];
        e.push((0, _.fC)(f.i.GROUP, {
          rows: n,
          title: y.intl.string(y.t.UdhTtk)
        }))
      } else e.push(t);
      let n = C ? e.length + D.length : e.length,
        {
          autocompleteCount: i,
          autocompleteGroups: o
        } = P({
          filterFn: e => e.group === b.rtL.HISTORY && e.results.length > 0,
          getAutocompleteRowItem: e => {
            let {
              result: t,
              modeType: r,
              group: a
            } = e, o = (0, _.lw)({
              modeType: r,
              result: t,
              group: a
            }), s = (0, d.GM)({
              result: t,
              group: a
            }), {
              label: l,
              ariaLabel: c
            } = (0, d.HU)({
              value: t.text
            }), u = e => {
              let {
                selectedIndex: t
              } = e;
              (0, m.$z)({
                searchContext: v,
                searchHistoryIndex: t - n,
                searchHistoryTotalResults: i
              }), A({
                query: o,
                performSearch: true,
                replace: false
              })
            };
            return (0, _.fC)(f.i.ROW, {
              icon: s,
              label: l,
              ariaLabel: y.intl.formatToPlainString(y.t.WoiGrV, {
                suggestion: c
              }),
              resultText: o,
              onSelect: u
            })
          },
          getAutocompleteGroupItem: e => {
            let {
              group: t,
              rows: n
            } = e, i = (0, _.Nk)(t), a = t === b.rtL.HISTORY ? (0, r.jsx)(d.do, {
              searchContext: v
            }) : null;
            return (0, _.fC)(f.i.GROUP, {
              rows: n,
              title: i,
              trailingIcon: a
            })
          }
        });
      return i > 0 && e.push(...o), {
        items: e
      }
    },
    [b.Sap.FILTER_ALL]: () => {
      let e = [];
      if ("" !== t.query.trim()) {
        let {
          label: n
        } = (0, d.HU)({
          value: t.query
        }), i = (0, _.fC)(f.i.ROW, {
          icon: (0, r.jsx)(a._Ve, {
            size: "sm",
            color: "currentColor",
            className: O.itemIcon
          }),
          label: v.type === b.aib.FAVORITES && (0, l.X$)() ? (0, r.jsx)(d.Q0, {
            label: y.intl.string(y.t["6RVtLA"])
          }) : (0, r.jsx)(d.Q0, {
            label: y.intl.format(y.t.rCnaoo, {
              value: n
            }),
            className: O.labelWithElements
          }),
          ariaLabel: y.intl.formatToPlainString(y.t.rCnaoo, {
            value: t.query
          }),
          onSelect: () => w({
            searchEverywhere: false
          })
        });
        if (e.push(i), v.type === b.aib.FAVORITES && (0, l.X$)()) {
          let t = (0, _.fC)(f.i.ROW, {
            icon: (0, r.jsx)(a._Ve, {
              size: "sm",
              color: "currentColor",
              className: O.itemIcon
            }),
            label: (0, r.jsx)(d.Q0, {
              label: y.intl.string(y.t.FtSUxc)
            }),
            onSelect: () => w({
              searchEverywhere: true
            })
          });
          e.push(t)
        }
      }
      let {
        autocompleteCount: n,
        autocompleteGroups: i
      } = P({
        filterFn: e => e.group !== b.rtL.DATES && e.group !== b.rtL.SEARCH_OPTIONS && e.group !== b.dCx.FILTER_HAS && e.results.length > 0,
        getAutocompleteRowItem: e => {
          var t;
          let {
            result: i,
            modeType: a,
            group: o
          } = e, s = (0, _.lw)({
            modeType: a,
            result: i,
            group: o
          }), l = (0, d.GM)({
            result: i,
            group: o
          }), {
            label: c,
            ariaLabel: u
          } = (0, d.Nk)(i), p = o === b.dCx.FILTER_FROM || o === b.dCx.FILTER_MENTIONS ? (0, r.jsx)(d.mW, {
            searchTokenType: o,
            answer: null == (t = i.user) ? true : t.username
          }) : true, h = e => {
            let {
              selectedIndex: t,
              searchAutocompleteSelectAction: r
            } = e;
            x({
              selectedIndex: t,
              searchAutocompleteSelectAction: r,
              selectedAutocomplete: i,
              selectedAutocompleteGroup: o,
              autocompleteCount: n
            }), A({
              query: s,
              performSearch: false,
              replace: false
            })
          };
          return (0, _.fC)(f.i.ROW, {
            icon: l,
            label: c,
            sublabel: p,
            ariaLabel: u,
            resultText: s,
            onSelect: h
          })
        },
        getAutocompleteGroupItem: e => {
          let {
            group: t,
            rows: n
          } = e, r = (0, _.Nk)(t);
          return (0, _.fC)(f.i.GROUP, {
            rows: n,
            title: r
          })
        }
      }), o = C && 0 === n, s = L(o);
      if (o) {
        let t = [...D, s];
        e.push((0, _.fC)(f.i.GROUP, {
          rows: t,
          title: y.intl.string(y.t.UdhTtk)
        }))
      } else e.push(s);
      return n > 0 && e.push(...i), {
        items: e
      }
    },
    [b.Sap.FILTER]: () => {
      let {
        autocompleteCount: e,
        autocompleteGroups: t
      } = P({
        filterFn: e => e.results.length > 0,
        getAutocompleteRowItem: t => {
          let {
            result: n,
            modeType: r,
            group: i
          } = t, a = (0, _.lw)({
            modeType: r,
            result: n,
            group: i
          }), o = (0, d.uB)(n), {
            label: s,
            ariaLabel: l
          } = (0, d.V4)(n), c = t => {
            let {
              selectedIndex: r,
              searchAutocompleteSelectAction: o
            } = t;
            x({
              selectedIndex: r,
              searchAutocompleteSelectAction: o,
              selectedAutocomplete: n,
              selectedAutocompleteGroup: i,
              autocompleteCount: e
            }), A({
              query: a,
              performSearch: true,
              replace: false
            })
          };
          return (0, _.fC)(f.i.ROW, {
            icon: o,
            label: s,
            ariaLabel: l,
            resultText: a,
            onSelect: c
          })
        },
        getAutocompleteGroupItem: e => {
          let {
            group: t,
            rows: n
          } = e, r = (0, _.Nk)(t);
          return (0, _.fC)(f.i.GROUP, {
            rows: n,
            title: r
          })
        }
      });
      return {
        items: [...t]
      }
    }
  })[R.type])(), j = i.useMemo(() => {
    let e = [];
    return M.forEach(t => {
      switch (t.type) {
        case f.i.ROW:
          e.push(t);
          break;
        case f.i.GROUP:
          t.data.rows.forEach(t => e.push(t))
      }
    }), e
  }, [M]);
  return {
    items: M,
    itemsData: j
  }
}