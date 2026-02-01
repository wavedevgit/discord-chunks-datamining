/** Chunk was on 52199 **/
/** chunk id: 424913, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./321073.js"), require("./896048.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk309010 = require("./309010.js"),
  Chunk203982 = require("./203982.js"),
  Chunk822382 = require("./822382.js"),
  Chunk771650 = require("./771650.js"),
  Chunk753806 = require("./753806.jsx"),
  Chunk272444 = require("./272444.jsx"),
  Chunk806595 = require("./806595.js"),
  Chunk949759 = require("./949759.js"),
  Chunk65600 = require("./65600.js"),
  Chunk145331 = require("./145331.js"),
  Chunk835121 = require("./835121.js"),
  Chunk443486 = require("./443486.jsx"),
  Chunk768570 = require("./768570.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk935606 = require("./935606.js");

function b(e) {
  let {
    resultsState: t,
    searchContext: r,
    selectedChannel: b,
    setSearchQuery: R
  } = e, {
    autocompletes: v,
    mode: O
  } = t, T = (0, S.A)({
    autocompletes: v,
    mode: O
  }), x = (0, E.A)({
    setSearchQuery: R,
    searchContext: r,
    mode: O
  }), I = e => {
    let {
      searchEverywhere: t
    } = e;
    i._.dispatch(A.jej.PERFORM_SEARCH, {
      searchEverywhere: t,
      searchQuerySource: _.Q_.SEARCH_POPOUT
    })
  }, L = e => {
    var t;
    let {
      autocompleteCount: n,
      selectedIndex: l,
      searchAutocompleteSelectAction: s,
      selectedAutocomplete: i,
      selectedAutocompleteGroup: d
    } = e, h = O.type, f = O.filter, {
      token: S,
      group: E
    } = i, _ = null != E && (0, c.If)(E) ? E : null, y = null != (t = null != S ? S : f) ? t : _, m = i.channel, b = y === A.LWr.FILTER_IN && null != m && m.id === a.A.getChannelId(), R = (0, o.bS)(r);
    (0, g.kc)({
      searchContext: r,
      searchQuery: p.A.getSearchResultsQuery(R),
      searchQueryString: u.A.getSearchInputText(r),
      searchTokenType: y,
      searchAutocompleteGroup: d,
      searchAutocompleteMode: O,
      searchAutocompleteResultIndex: l,
      searchAutocompleteTotalResults: n,
      isSearchFilterPrefix: h === A.o$q.EMPTY,
      isSearchFilterAnswer: h === A.o$q.FILTER,
      isSearchFilterComplete: h === A.o$q.FILTER_ALL,
      isInFilterForSelectedChannel: b,
      searchAutocompleteSelectAction: s
    })
  }, j = l.useCallback(e => {
    let {
      hasOtherSearchFiltersVisible: t
    } = e, l = t ? y.intl.string(y.t.diOL4i) : y.intl.string(y.t["M1tf+7"]);
    return (0, f.wE)(h.$.ROW, {
      icon: (0, n.jsx)(s.RgP, {
        size: "custom",
        color: "currentColor",
        width: 20,
        height: 20,
        className: m.Fx
      }),
      label: (0, n.jsx)(d.bg, {
        label: l
      }),
      sublabel: t ? (0, n.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        children: y.intl.string(y.t["1axf1T"])
      }) : true,
      onSelect: () => u.A.openSearchFiltersModal(r)
    })
  }, [r]), {
    items: N
  } = (0, ({
    [A.o$q.EMPTY]: () => {
      let e = [];
      if (null != b && (0, o.Wg)(r) && r.type === A.I4_.DMS) {
        let t = (0, d.lF)(b),
          l = (0, f.wE)(h.$.ROW, {
            icon: (0, n.jsx)(s.$p$, {
              size: "sm",
              color: "currentColor",
              className: m.Fx
            }),
            label: (0, n.jsx)(d.bg, {
              label: y.intl.format(y.t["VGEH/0"], {
                channelName: t
              }),
              className: m.YL
            }),
            onSelect: e => {
              let {
                searchAutocompleteSelectAction: t
              } = e;
              return (e => {
                var t;
                let {
                  selectedChannel: n,
                  searchAutocompleteSelectAction: l
                } = e;
                (0, g.rE)({
                  searchContext: r,
                  searchAutocompleteSelectAction: l
                });
                let s = A.LWr.FILTER_IN,
                  a = c.Ay[s],
                  i = (0, o.Rt)(n);
                R({
                  query: "".concat(null != (t = null == a ? true : a.key) ? t : s.toString(), " ").concat(i),
                  performSearch: true,
                  replace: false
                })
              })({
                selectedChannel: b,
                searchAutocompleteSelectAction: t
              })
            }
          });
        e.push(l)
      }
      let t = [...x, j({
        hasOtherSearchFiltersVisible: true
      })];
      e.push((0, f.wE)(h.$.GROUP, {
        rows: t,
        title: y.intl.string(y.t.UdhTtk)
      }));
      let l = e.length + x.length,
        {
          autocompleteCount: a,
          autocompleteGroups: i
        } = T({
          filterFn: e => e.group === A.x2k.HISTORY && e.results.length > 0,
          getAutocompleteRowItem: e => {
            let {
              result: t,
              modeType: n,
              group: i
            } = e, o = (0, f.pu)({
              modeType: n,
              result: t,
              group: i
            }), c = (0, d.ge)({
              result: t,
              group: i
            }), {
              label: u,
              ariaLabel: p
            } = (0, d.AX)({
              value: t.text,
              avatarSize: s._3J.SIZE_16,
              iconSize: "xs"
            });
            return (0, f.wE)(h.$.ROW, {
              icon: c,
              label: u,
              ariaLabel: y.intl.formatToPlainString(y.t.WoiGrV, {
                suggestion: p
              }),
              resultText: o,
              onSelect: e => {
                let {
                  selectedIndex: t
                } = e;
                (0, g.oR)({
                  searchContext: r,
                  searchHistoryIndex: t - l,
                  searchHistoryTotalResults: a
                }), R({
                  query: o,
                  performSearch: true,
                  replace: false
                })
              }
            })
          },
          getAutocompleteGroupItem: e => {
            let {
              group: t,
              rows: l
            } = e, s = (0, f.JU)(t), a = t === A.x2k.HISTORY ? (0, n.jsx)(d.k8, {
              searchContext: r
            }) : null;
            return (0, f.wE)(h.$.GROUP, {
              rows: l,
              title: s,
              trailingIcon: a
            })
          }
        });
      return a > 0 && e.push(...i), {
        items: e
      }
    },
    [A.o$q.FILTER_ALL]: () => {
      let e = [];
      if ("" !== t.query.trim()) {
        let {
          label: l
        } = (0, d.AX)({
          value: t.query,
          avatarSize: s._3J.SIZE_16,
          iconSize: "xs"
        }), a = (0, f.wE)(h.$.ROW, {
          icon: (0, n.jsx)(s.$p$, {
            size: "sm",
            color: "currentColor",
            className: m.Fx
          }),
          label: r.type === A.I4_.FAVORITES && (0, o.Eq)() ? (0, n.jsx)(d.bg, {
            label: y.intl.string(y.t["6RVtLA"])
          }) : (0, n.jsx)(d.bg, {
            label: y.intl.format(y.t.rCnaoo, {
              value: l
            }),
            className: m.YL
          }),
          ariaLabel: y.intl.formatToPlainString(y.t.rCnaoo, {
            value: t.query
          }),
          onSelect: () => I({
            searchEverywhere: false
          })
        });
        if (e.push(a), r.type === A.I4_.FAVORITES && (0, o.Eq)()) {
          let t = (0, f.wE)(h.$.ROW, {
            icon: (0, n.jsx)(s.$p$, {
              size: "sm",
              color: "currentColor",
              className: m.Fx
            }),
            label: (0, n.jsx)(d.bg, {
              label: y.intl.string(y.t.FtSUxc)
            }),
            onSelect: () => I({
              searchEverywhere: true
            })
          });
          e.push(t)
        }
      }
      let {
        autocompleteCount: l,
        autocompleteGroups: a
      } = T({
        filterFn: e => e.group !== A.x2k.DATES && e.group !== A.x2k.SEARCH_OPTIONS && e.group !== A.LWr.FILTER_HAS && e.results.length > 0,
        getAutocompleteRowItem: e => {
          var t;
          let {
            result: r,
            modeType: s,
            group: a
          } = e, i = (0, f.pu)({
            modeType: s,
            result: r,
            group: a
          }), o = (0, d.ge)({
            result: r,
            group: a
          }), {
            label: c,
            ariaLabel: u
          } = (0, d.c$)(r), p = a === A.LWr.FILTER_FROM || a === A.LWr.FILTER_MENTIONS ? (0, n.jsx)(d.bj, {
            searchTokenType: a,
            answer: null == (t = r.user) ? true : t.username
          }) : true;
          return (0, f.wE)(h.$.ROW, {
            icon: o,
            label: c,
            sublabel: p,
            ariaLabel: u,
            resultText: i,
            onSelect: e => {
              let {
                selectedIndex: t,
                searchAutocompleteSelectAction: n
              } = e;
              L({
                selectedIndex: t,
                searchAutocompleteSelectAction: n,
                selectedAutocomplete: r,
                selectedAutocompleteGroup: a,
                autocompleteCount: l
              }), R({
                query: i,
                performSearch: false,
                replace: false
              })
            }
          })
        },
        getAutocompleteGroupItem: e => {
          let {
            group: t,
            rows: r
          } = e, n = (0, f.JU)(t);
          return (0, f.wE)(h.$.GROUP, {
            rows: r,
            title: n
          })
        }
      });
      if (0 === l) {
        let t = [...x, j({
          hasOtherSearchFiltersVisible: true
        })];
        e.push((0, f.wE)(h.$.GROUP, {
          rows: t,
          title: y.intl.string(y.t.UdhTtk)
        }))
      } else {
        let t = j({
          hasOtherSearchFiltersVisible: false
        });
        e.push(t)
      }
      return l > 0 && e.push(...a), {
        items: e
      }
    },
    [A.o$q.FILTER]: () => {
      let {
        autocompleteCount: e,
        autocompleteGroups: t
      } = T({
        filterFn: e => e.results.length > 0,
        getAutocompleteRowItem: t => {
          let {
            result: r,
            modeType: n,
            group: l
          } = t, s = (0, f.pu)({
            modeType: n,
            result: r,
            group: l
          }), a = (0, d._h)({
            result: r,
            group: l
          }), {
            label: i,
            ariaLabel: o
          } = (0, d.JK)(r);
          return (0, f.wE)(h.$.ROW, {
            icon: a,
            label: i,
            ariaLabel: o,
            resultText: s,
            onSelect: t => {
              let {
                selectedIndex: n,
                searchAutocompleteSelectAction: a
              } = t;
              L({
                selectedIndex: n,
                searchAutocompleteSelectAction: a,
                selectedAutocomplete: r,
                selectedAutocompleteGroup: l,
                autocompleteCount: e
              }), R({
                query: s,
                performSearch: true,
                replace: false
              })
            }
          })
        },
        getAutocompleteGroupItem: e => {
          let {
            group: t,
            rows: r
          } = e, n = (0, f.JU)(t);
          return (0, f.wE)(h.$.GROUP, {
            rows: r,
            title: n
          })
        }
      });
      return {
        items: [...t]
      }
    }
  })[O.type])(), C = l.useMemo(() => {
    let e = [];
    return N.forEach(t => {
      switch (t.type) {
        case h.$.ROW:
          e.push(t);
          break;
        case h.$.GROUP:
          t.data.rows.forEach(t => e.push(t))
      }
    }), e
  }, [N]);
  return {
    items: N,
    itemsData: C
  }
}