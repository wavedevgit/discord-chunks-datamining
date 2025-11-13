/** Chunk was on web.js **/
/** chunk id: 448842, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
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
  Chunk611004 = require("./611004.jsx"),
  Chunk817190 = require("./817190.js"),
  Chunk315322 = require("./315322.js"),
  Chunk52459 = require("./52459.js"),
  Chunk349504 = require("./349504.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk493090 = require("./493090.js");

function v(e) {
  let {
    resultsState: t,
    searchContext: n,
    selectedChannel: v,
    setSearchQuery: I
  } = e, T = (0, c.KS)({
    location: "SearchFiltersRedesignPopout"
  }), {
    autocompletes: S,
    mode: A
  } = t, C = (0, g.Z)({
    autocompletes: S,
    mode: A
  }), N = (0, E.Z)({
    setSearchQuery: I,
    searchContext: n,
    mode: A
  }), R = e => {
    let {
      searchEverywhere: t
    } = e;
    s.S.dispatch(b.CkL.PERFORM_SEARCH, {
      searchEverywhere: t
    })
  }, P = e => {
    var t;
    let {
      autocompleteCount: r,
      selectedIndex: i,
      searchAutocompleteSelectAction: a,
      selectedAutocomplete: s,
      selectedAutocompleteGroup: c
    } = e, d = A.type, f = A.filter, {
      token: _,
      group: g
    } = s, E = null != g && (0, u._m)(g) ? g : null, y = null != (t = null != _ ? _ : f) ? t : E, O = s.channel, v = y === b.dCx.FILTER_IN && null != O && O.id === o.Z.getChannelId(), I = (0, l.Tm)(n);
    (0, m.bh)({
      searchContext: n,
      searchQuery: h.Z.getSearchResultsQuery(I),
      searchQueryString: p.Z.getSearchInputText(n),
      searchTokenType: y,
      searchAutocompleteGroup: c,
      searchAutocompleteMode: A,
      searchAutocompleteResultIndex: i,
      searchAutocompleteTotalResults: r,
      isSearchFilterPrefix: d === b.Sap.EMPTY,
      isSearchFilterAnswer: d === b.Sap.FILTER,
      isSearchFilterComplete: d === b.Sap.FILTER_ALL,
      isInFilterForSelectedChannel: v,
      searchAutocompleteSelectAction: a
    })
  }, D = i.useCallback(e => {
    let t = e ? y.intl.string(y.t.diOL4i) : y.intl.string(y.t["M1tf+7"]);
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
      onSelect: () => p.Z.openSearchFiltersModal(n)
    })
  }, [n]), {
    items: w
  } = (0, ({
    [b.Sap.EMPTY]: () => {
      let e = [];
      if (null != v && (0, l.R6)(n)) {
        let t = (0, d.f)(v),
          i = e => {
            var t;
            let {
              selectedChannel: r,
              searchAutocompleteSelectAction: i
            } = e;
            (0, m.tA)({
              searchContext: n,
              searchAutocompleteSelectAction: i
            });
            let a = b.dCx.FILTER_IN,
              o = u.ZP[a],
              s = (0, l.X3)(r);
            I({
              query: "".concat(null != (t = null == o ? true : o.key) ? t : a.toString(), " ").concat(s),
              performSearch: true,
              replace: false
            })
          },
          o = (0, _.fC)(f.i.ROW, {
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
              return i({
                selectedChannel: v,
                searchAutocompleteSelectAction: t
              })
            }
          });
        e.push(o)
      }
      let t = D(T);
      if (T) {
        let n = [...N, t];
        e.push((0, _.fC)(f.i.GROUP, {
          rows: n,
          title: y.intl.string(y.t.UdhTtk)
        }))
      } else e.push(t);
      let i = T ? e.length + N.length : e.length,
        {
          autocompleteCount: o,
          autocompleteGroups: s
        } = C({
          filterFn: e => e.group === b.rtL.HISTORY && e.results.length > 0,
          getAutocompleteRowItem: e => {
            let {
              result: t,
              modeType: r,
              group: a
            } = e, s = (0, _.lw)({
              modeType: r,
              result: t,
              group: a
            }), l = (0, d.GM)({
              result: t,
              group: a
            }), {
              label: c,
              ariaLabel: u
            } = (0, d.HU)({
              value: t.text
            }), p = e => {
              let {
                selectedIndex: t
              } = e;
              (0, m.$z)({
                searchContext: n,
                searchHistoryIndex: t - i,
                searchHistoryTotalResults: o
              }), I({
                query: s,
                performSearch: true,
                replace: false
              })
            };
            return (0, _.fC)(f.i.ROW, {
              icon: l,
              label: c,
              ariaLabel: y.intl.formatToPlainString(y.t.WoiGrV, {
                suggestion: u
              }),
              resultText: s,
              onSelect: p
            })
          },
          getAutocompleteGroupItem: e => {
            let {
              group: t,
              rows: i
            } = e, a = (0, _.Nk)(t), o = t === b.rtL.HISTORY ? (0, r.jsx)(d.do, {
              searchContext: n
            }) : null;
            return (0, _.fC)(f.i.GROUP, {
              rows: i,
              title: a,
              trailingIcon: o
            })
          }
        });
      return o > 0 && e.push(...s), {
        items: e
      }
    },
    [b.Sap.FILTER_ALL]: () => {
      let e = [];
      if ("" !== t.query.trim()) {
        let {
          label: i
        } = (0, d.HU)({
          value: t.query
        }), o = (0, _.fC)(f.i.ROW, {
          icon: (0, r.jsx)(a._Ve, {
            size: "sm",
            color: "currentColor",
            className: O.itemIcon
          }),
          label: n.type === b.aib.FAVORITES && (0, l.X$)() ? (0, r.jsx)(d.Q0, {
            label: y.intl.string(y.t["6RVtLA"])
          }) : (0, r.jsx)(d.Q0, {
            label: y.intl.format(y.t.rCnaoo, {
              value: i
            }),
            className: O.labelWithElements
          }),
          ariaLabel: y.intl.formatToPlainString(y.t.rCnaoo, {
            value: t.query
          }),
          onSelect: () => R({
            searchEverywhere: false
          })
        });
        if (e.push(o), n.type === b.aib.FAVORITES && (0, l.X$)()) {
          let t = (0, _.fC)(f.i.ROW, {
            icon: (0, r.jsx)(a._Ve, {
              size: "sm",
              color: "currentColor",
              className: O.itemIcon
            }),
            label: (0, r.jsx)(d.Q0, {
              label: y.intl.string(y.t.FtSUxc)
            }),
            onSelect: () => R({
              searchEverywhere: true
            })
          });
          e.push(t)
        }
      }
      let {
        autocompleteCount: i,
        autocompleteGroups: o
      } = C({
        filterFn: e => e.group !== b.rtL.DATES && e.group !== b.rtL.SEARCH_OPTIONS && e.group !== b.dCx.FILTER_HAS && e.results.length > 0,
        getAutocompleteRowItem: e => {
          var t;
          let {
            result: n,
            modeType: a,
            group: o
          } = e, s = (0, _.lw)({
            modeType: a,
            result: n,
            group: o
          }), l = (0, d.GM)({
            result: n,
            group: o
          }), {
            label: c,
            ariaLabel: u
          } = (0, d.Nk)(n), p = o === b.dCx.FILTER_FROM || o === b.dCx.FILTER_MENTIONS ? (0, r.jsx)(d.mW, {
            searchTokenType: o,
            answer: null == (t = n.user) ? true : t.username
          }) : true, h = e => {
            let {
              selectedIndex: t,
              searchAutocompleteSelectAction: r
            } = e;
            P({
              selectedIndex: t,
              searchAutocompleteSelectAction: r,
              selectedAutocomplete: n,
              selectedAutocompleteGroup: o,
              autocompleteCount: i
            }), I({
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
      }), s = T && 0 === i, c = D(s);
      if (s) {
        let t = [...N, c];
        e.push((0, _.fC)(f.i.GROUP, {
          rows: t,
          title: y.intl.string(y.t.UdhTtk)
        }))
      } else e.push(c);
      return i > 0 && e.push(...o), {
        items: e
      }
    },
    [b.Sap.FILTER]: () => {
      let {
        autocompleteCount: e,
        autocompleteGroups: t
      } = C({
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
            P({
              selectedIndex: r,
              searchAutocompleteSelectAction: o,
              selectedAutocomplete: n,
              selectedAutocompleteGroup: i,
              autocompleteCount: e
            }), I({
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
  })[A.type])(), x = i.useMemo(() => {
    let e = [];
    return w.forEach(t => {
      switch (t.type) {
        case f.i.ROW:
          e.push(t);
          break;
        case f.i.GROUP:
          t.data.rows.forEach(t => e.push(t))
      }
    }), e
  }, [w]);
  return {
    items: w,
    itemsData: x
  }
}