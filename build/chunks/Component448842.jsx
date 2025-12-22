/** Chunk was on web.js **/
/** chunk id: 448842, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./539854.js"), require("./388685.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk944486 = require("./944486.js"),
  Chunk585483 = require("./585483.js"),
  Chunk607802 = require("./607802.js"),
  Chunk532428 = require("./532428.js"),
  Chunk611004 = require("./611004.jsx"),
  Chunk166602 = require("./166602.jsx"),
  Chunk777018 = require("./777018.js"),
  Chunk447368 = require("./447368.js"),
  Chunk817190 = require("./817190.js"),
  Chunk315322 = require("./315322.js"),
  Chunk52459 = require("./52459.js"),
  Chunk349504 = require("./349504.jsx"),
  Chunk723642 = require("./723642.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk983190 = require("./983190.js");

function v(e) {
  let {
    resultsState: t,
    searchContext: n,
    selectedChannel: v,
    setSearchQuery: S
  } = e, {
    autocompletes: I,
    mode: T
  } = t, C = (0, h.Z)({
    autocompletes: I,
    mode: T
  }), A = (0, g.Z)({
    setSearchQuery: S,
    searchContext: n,
    mode: T
  }), N = e => {
    let {
      searchEverywhere: t
    } = e;
    s.S.dispatch(b.CkL.PERFORM_SEARCH, {
      searchEverywhere: t,
      searchQuerySource: E.w7.SEARCH_POPOUT
    })
  }, P = e => {
    var t;
    let {
      autocompleteCount: r,
      selectedIndex: i,
      searchAutocompleteSelectAction: a,
      selectedAutocomplete: s,
      selectedAutocompleteGroup: d
    } = e, f = T.type, p = T.filter, {
      token: h,
      group: g
    } = s, E = null != g && (0, c._m)(g) ? g : null, y = null != (t = null != h ? h : p) ? t : E, O = s.channel, v = y === b.dCx.FILTER_IN && null != O && O.id === o.Z.getChannelId(), S = (0, l.Tm)(n);
    (0, m.bh)({
      searchContext: n,
      searchQuery: _.Z.getSearchResultsQuery(S),
      searchQueryString: u.Z.getSearchInputText(n),
      searchTokenType: y,
      searchAutocompleteGroup: d,
      searchAutocompleteMode: T,
      searchAutocompleteResultIndex: i,
      searchAutocompleteTotalResults: r,
      isSearchFilterPrefix: f === b.Sap.EMPTY,
      isSearchFilterAnswer: f === b.Sap.FILTER,
      isSearchFilterComplete: f === b.Sap.FILTER_ALL,
      isInFilterForSelectedChannel: v,
      searchAutocompleteSelectAction: a
    })
  }, R = i.useCallback(e => {
    let {
      hasOtherSearchFiltersVisible: t
    } = e, i = t ? y.intl.string(y.t.diOL4i) : y.intl.string(y.t["M1tf+7"]);
    return (0, p.fC)(f.i.ROW, {
      icon: (0, r.jsx)(a.gXV, {
        size: "custom",
        color: "currentColor",
        width: 20,
        height: 20,
        className: O.itemIcon
      }),
      label: (0, r.jsx)(d.Q0, {
        label: i
      }),
      sublabel: t ? (0, r.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        children: y.intl.string(y.t["1axf1T"])
      }) : true,
      onSelect: () => u.Z.openSearchFiltersModal(n)
    })
  }, [n]), {
    items: w
  } = (0, ({
    [b.Sap.EMPTY]: () => {
      let e = [];
      if (null != v && (0, l.R6)(n) && n.type === b.aib.DMS) {
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
              o = c.ZP[a],
              s = (0, l.X3)(r);
            S({
              query: "".concat(null != (t = null == o ? true : o.key) ? t : a.toString(), " ").concat(s),
              performSearch: true,
              replace: false
            })
          },
          o = (0, p.fC)(f.i.ROW, {
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
      let t = [...A, R({
        hasOtherSearchFiltersVisible: true
      })];
      e.push((0, p.fC)(f.i.GROUP, {
        rows: t,
        title: y.intl.string(y.t.UdhTtk)
      }));
      let i = e.length + A.length,
        {
          autocompleteCount: o,
          autocompleteGroups: s
        } = C({
          filterFn: e => e.group === b.rtL.HISTORY && e.results.length > 0,
          getAutocompleteRowItem: e => {
            let {
              result: t,
              modeType: r,
              group: s
            } = e, l = (0, p.lw)({
              modeType: r,
              result: t,
              group: s
            }), c = (0, d.GM)({
              result: t,
              group: s
            }), {
              label: u,
              ariaLabel: _
            } = (0, d.HU)({
              value: t.text,
              avatarSize: a.EFr.SIZE_16,
              iconSize: "xs"
            }), h = e => {
              let {
                selectedIndex: t
              } = e;
              (0, m.$z)({
                searchContext: n,
                searchHistoryIndex: t - i,
                searchHistoryTotalResults: o
              }), S({
                query: l,
                performSearch: true,
                replace: false
              })
            };
            return (0, p.fC)(f.i.ROW, {
              icon: c,
              label: u,
              ariaLabel: y.intl.formatToPlainString(y.t.WoiGrV, {
                suggestion: _
              }),
              resultText: l,
              onSelect: h
            })
          },
          getAutocompleteGroupItem: e => {
            let {
              group: t,
              rows: i
            } = e, a = (0, p.Nk)(t), o = t === b.rtL.HISTORY ? (0, r.jsx)(d.do, {
              searchContext: n
            }) : null;
            return (0, p.fC)(f.i.GROUP, {
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
          value: t.query,
          avatarSize: a.EFr.SIZE_16,
          iconSize: "xs"
        }), o = (0, p.fC)(f.i.ROW, {
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
          onSelect: () => N({
            searchEverywhere: false
          })
        });
        if (e.push(o), n.type === b.aib.FAVORITES && (0, l.X$)()) {
          let t = (0, p.fC)(f.i.ROW, {
            icon: (0, r.jsx)(a._Ve, {
              size: "sm",
              color: "currentColor",
              className: O.itemIcon
            }),
            label: (0, r.jsx)(d.Q0, {
              label: y.intl.string(y.t.FtSUxc)
            }),
            onSelect: () => N({
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
          } = e, s = (0, p.lw)({
            modeType: a,
            result: n,
            group: o
          }), l = (0, d.GM)({
            result: n,
            group: o
          }), {
            label: c,
            ariaLabel: u
          } = (0, d.Nk)(n), _ = o === b.dCx.FILTER_FROM || o === b.dCx.FILTER_MENTIONS ? (0, r.jsx)(d.mW, {
            searchTokenType: o,
            answer: null == (t = n.user) ? true : t.username
          }) : true, m = e => {
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
            }), S({
              query: s,
              performSearch: false,
              replace: false
            })
          };
          return (0, p.fC)(f.i.ROW, {
            icon: l,
            label: c,
            sublabel: _,
            ariaLabel: u,
            resultText: s,
            onSelect: m
          })
        },
        getAutocompleteGroupItem: e => {
          let {
            group: t,
            rows: n
          } = e, r = (0, p.Nk)(t);
          return (0, p.fC)(f.i.GROUP, {
            rows: n,
            title: r
          })
        }
      });
      if (0 === i) {
        let t = [...A, R({
          hasOtherSearchFiltersVisible: true
        })];
        e.push((0, p.fC)(f.i.GROUP, {
          rows: t,
          title: y.intl.string(y.t.UdhTtk)
        }))
      } else {
        let t = R({
          hasOtherSearchFiltersVisible: false
        });
        e.push(t)
      }
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
          } = t, a = (0, p.lw)({
            modeType: r,
            result: n,
            group: i
          }), o = (0, d.uB)({
            result: n,
            group: i
          }), {
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
            }), S({
              query: a,
              performSearch: true,
              replace: false
            })
          };
          return (0, p.fC)(f.i.ROW, {
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
          } = e, r = (0, p.Nk)(t);
          return (0, p.fC)(f.i.GROUP, {
            rows: n,
            title: r
          })
        }
      });
      return {
        items: [...t]
      }
    }
  })[T.type])(), D = i.useMemo(() => {
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
    itemsData: D
  }
}