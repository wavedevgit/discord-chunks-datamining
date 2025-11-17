/** Chunk was on 30474 **/
/** chunk id: 465524, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  Ek: () => U,
  HJ: () => S,
  LE: () => H,
  Tt: () => y,
  YL: () => q,
  Z2: () => m,
  Zc: () => v,
  fI: () => Z,
  fJ: () => D,
  p4: () => w,
  t: () => L,
  ur: () => P,
  zL: () => j
}), require("./781311.js"), require("./388685.js"), require("./539854.js"), require("./290780.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk592125 = require("./592125.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk748610 = require("./748610.js"),
  Chunk738018 = require("./738018.js"),
  Chunk607802 = require("./607802.js"),
  Chunk247902 = require("./247902.js"),
  Chunk532428 = require("./532428.js"),
  Chunk208450 = require("./208450.jsx"),
  Chunk637879 = require("./637879.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function F(e) {
  for (var t = 1; t < arguments.length; t++) {
    var l = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(l);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
      return Object.getOwnPropertyDescriptor(l, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = l[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function k(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var l = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      l.push.apply(l, n)
    }
    return l
  })(Object(t)).forEach(function(l) {
    Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(t, l))
  }), e
}

function N(e) {
  let {
    searchContext: t,
    filter: l,
    queryString: n
  } = e, u = (0, c.e7)([C.Z], () => C.Z.getState(t), [t], c.pF), a = r.useMemo(() => {
    let e = u.autocompletes[0];
    return null != e && e.group === l ? e.results : []
  }, [u.autocompletes, l]), s = r.useMemo(() => {
    let e = I.ZP[l].key;
    return "".concat(e, " ").concat(n)
  }, [l, n]), i = r.useCallback(() => {
    let e = (0, R.kG)(s),
      l = (0, R.g9)(e, s.length - 1, s.length - 1);
    g.Z.updateAutocompleteQuery({
      searchContext: t,
      tokens: e,
      cursorScope: l,
      queryString: s
    })
  }, [t, s]), o = r.useCallback(() => {
    i()
  }, [i]);
  return r.useEffect(() => {
    n.trim().length > 0 && i()
  }, [s, t, i, n]), {
    filterAutocompleteResults: a,
    handleFocusFilter: o,
    autocompleteStoreState: u
  }
}

function O(e) {
  let {
    user: t,
    guildId: l,
    channelId: n
  } = e, r = h.ZP.getName(l, n, t);
  return {
    value: t.id,
    label: r,
    key: t.id
  }
}

function S(e, t) {
  let l = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [],
    n = r.useMemo(() => (0, R.s5)(e), [e]),
    u = r.useMemo(() => (0, R.AH)(e), [e]),
    [a, s] = r.useState(l),
    [i, c] = r.useState(""),
    {
      filterAutocompleteResults: o,
      handleFocusFilter: d,
      autocompleteStoreState: E
    } = N({
      searchContext: e,
      filter: t,
      queryString: i
    }),
    h = r.useMemo(() => {
      let e = [],
        t = new Set;
      if (o.length > 0) o.forEach(l => {
        let r = l.user,
          a = O({
            user: r,
            guildId: n,
            channelId: u
          });
        t.add(r.id), e.push(a)
      });
      else {
        let {
          tokens: l
        } = E, r = l[l.length - 1];
        if (null != r && (r.type === _.dCx.ANSWER_USERNAME_FROM || r.type === _.dCx.ANSWER_USERNAME_MENTIONS) && (0, I.fx)(r)) {
          let l = r.getData("userId"),
            a = f.default.getUser(l);
          if (null != a) {
            let l = O({
              user: a,
              guildId: n,
              channelId: u
            });
            t.add(a.id), e.push(l)
          }
        }
      }
      return a.length > 0 && a.forEach(l => {
        if (t.has(l)) return;
        let r = f.default.getUser(l);
        if (null == r) return;
        let a = O({
          user: r,
          guildId: n,
          channelId: u
        });
        t.add(l), e.unshift(a)
      }), e
    }, [E, o, a, n, u]),
    g = r.useCallback(() => {
      s([]), c("")
    }, []),
    C = r.useCallback(e => {
      if (0 === a.length) return null;
      let t = I.ZP[e];
      return a.map(e => {
        let l = f.default.getUser(e);
        return "".concat(t.key, " ").concat(null == l ? true : l.username)
      }).join(" ")
    }, [a]);
  return {
    options: h,
    query: a,
    setQuery: s,
    setQueryString: c,
    handleClearFilter: g,
    getApplyQueryString: C,
    handleFocusFilter: d
  }
}

function y(e) {
  if (null == e) return;
  let t = e.value;
  return (0, n.jsx)(x.pb, {
    text: t,
    size: "xs"
  })
}

function L(e) {
  if (null == e) return;
  let t = e.value;
  return (0, n.jsx)(x.YQ, {
    text: t,
    size: "xs"
  })
}

function v(e) {
  return {
    filter: false,
    closeOnSelect: false,
    renderOptionPrefix: r.useCallback(t => {
      var l;
      if (null == t) return;
      let r = f.default.getUser(t.value);
      if (null == r) return;
      let u = null != (l = r.getAvatarURL(e, 80)) ? l : r.avatar;
      return (0, n.jsx)(o.qEK, {
        src: u,
        size: o.EFr.SIZE_16,
        "aria-hidden": true
      })
    }, [e]),
    renderOptionSuffix: r.useCallback(e => {
      if (null == e) return;
      let t = f.default.getUser(e.value);
      if (null != t) return (0, n.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: t.username
      })
    }, [])
  }
}

function A(e) {
  let {
    channel: t
  } = e;
  return {
    value: t.id,
    label: (0, R.nl)(t),
    key: t.id
  }
}

function P(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [],
    [l, n] = r.useState(t),
    [u, a] = r.useState(""),
    {
      filterAutocompleteResults: s,
      handleFocusFilter: i,
      autocompleteStoreState: c
    } = N({
      searchContext: e,
      filter: _.dCx.FILTER_IN,
      queryString: u
    }),
    o = r.useMemo(() => {
      let t = [],
        n = new Set;
      if (s.length > 0) s.forEach(e => {
        let l = e.channel,
          r = A({
            channel: l
          });
        n.add(l.id), t.push(r)
      });
      else {
        let {
          tokens: l
        } = c, r = l[l.length - 1];
        if (null != r && r.type === _.dCx.ANSWER_IN && (0, I.Ni)(r, e)) {
          let e = r.getData("channelIds");
          null != e && e.length > 0 && e.forEach(e => {
            let l = E.Z.getChannel(e);
            if (null != l) {
              let e = A({
                channel: l
              });
              n.add(l.id), t.push(e)
            }
          })
        }
      }
      return l.length > 0 && l.forEach(e => {
        if (n.has(e)) return;
        let l = E.Z.getChannel(e);
        if (null == l) return;
        let r = A({
          channel: l
        });
        n.add(e), t.unshift(r)
      }), t
    }, [c, s, l, e]),
    d = r.useCallback(() => {
      n([]), a("")
    }, []),
    f = r.useCallback(e => {
      if (0 === l.length) return null;
      let t = I.ZP[e];
      return l.map(e => {
        let l = E.Z.getChannel(e);
        if (null == l) return;
        let n = (0, R.nl)(l),
          r = (0, R.Jl)(n);
        return "".concat(t.key, " ").concat(r)
      }).join(" ")
    }, [l]);
  return {
    options: o,
    query: l,
    setQuery: n,
    setQueryString: a,
    handleClearFilter: d,
    getApplyQueryString: f,
    handleFocusFilter: i
  }
}

function m(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [],
    [l, n] = r.useState(t),
    {
      filterAutocompleteResults: u,
      handleFocusFilter: a
    } = N({
      searchContext: e,
      filter: _.dCx.FILTER_HAS,
      queryString: ""
    }),
    s = r.useMemo(() => {
      if (0 === u.length && 0 === l.length) return [];
      let e = [],
        t = new Set;
      return l.length > 0 && l.forEach(l => {
        t.add(l), e.push({
          value: l,
          label: l,
          key: l
        })
      }), u.length > 0 && u.forEach(l => {
        let {
          text: n
        } = l;
        t.has(n) || (e.push({
          value: n,
          label: n,
          key: n
        }), t.add(n))
      }), e
    }, [u, l]),
    i = r.useCallback(() => {
      n([])
    }, []),
    c = r.useCallback(e => {
      if (0 === l.length) return null;
      let t = I.ZP[e];
      return l.map(e => "".concat(t.key, " ").concat(e)).join(" ")
    }, [l]);
  return {
    options: s,
    query: l,
    setQuery: n,
    handleClearFilter: i,
    getApplyQueryString: c,
    handleFocusFilter: a
  }
}
let M = () => Chunk473749.useMemo(() => {
  var e, t, l;
  let n = Chunk532428.ZP[Chunk981631.dCx.FILTER_BEFORE],
    r = Chunk532428.ZP[Chunk981631.dCx.FILTER_AFTER],
    u = Chunk532428.ZP[Chunk981631.dCx.FILTER_ON];
  return {
    beforeFilter: null != (e = null == Chunk54381 ? true : Chunk54381.key) ? module : "".concat(Chunk388032.intl.string(Chunk388032.t["qZ+7BA"]), ":"),
    afterFilter: null != (t = null == Chunk473749 ? true : Chunk473749.key) ? exports : "".concat(Chunk388032.intl.string(Chunk388032.t.KSDx7M), ":"),
    duringFilter: null != (l = null == Chunk392711 ? true : Chunk392711.key) ? require : "".concat(Chunk388032.intl.string(Chunk388032.t.h2NzSd), ":")
  }
}, []);

function Z() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [],
    [t, l] = Chunk473749.useState(module),
    n = Chunk473749.useCallback(() => (0, Chunk772848.Z)(), []),
    u = Chunk473749.useCallback(e => e.date.isValid(), []),
    a = Chunk473749.useMemo(() => exports.filter(Chunk392711), [exports, Chunk392711]),
    {
      beforeFilter: c,
      afterFilter: o,
      duringFilter: d
    } = M(),
    E = Chunk473749.useCallback(() => ({
      query: Chunk442837,
      date: s()(),
      id: Chunk54381()
    }), [Chunk442837, Chunk54381]),
    f = Chunk473749.useMemo(() => [{
      key: "Before",
      label: Chunk388032.intl.string(Chunk388032.t["ptL/DP"]),
      value: Chunk442837
    }, {
      key: "After",
      label: Chunk388032.intl.string(Chunk388032.t.waQeEV),
      value: Chunk481060
    }, {
      key: "During",
      label: Chunk388032.intl.string(Chunk388032.t.LT5TnZ),
      value: Chunk668781
    }], [Chunk442837, Chunk481060, Chunk668781]),
    h = Chunk473749.useCallback(e => {
      let {
        query: t,
        index: n
      } = e;
      l(e => {
        let l = [...e];
        return l[n] = k(F({}, l[n]), {
          query: t
        }), l
      })
    }, []),
    g = Chunk473749.useCallback(e => {
      let {
        date: t,
        index: n
      } = e;
      l(e => {
        let l = [...e];
        return l[n] = k(F({}, l[n]), {
          date: t
        }), l
      })
    }, []),
    C = Chunk473749.useCallback(() => {
      require(e => [...e, E()])
    }, [Chunk592125]),
    R = Chunk473749.useCallback(e => {
      l(t => {
        let l = [...t];
        return l.splice(e, 1), l
      })
    }, []),
    T = Chunk473749.useCallback(() => {
      require([])
    }, []),
    I = Chunk473749.useCallback(() => 0 === Chunk913527.length ? null : Chunk913527.map(e => {
      let {
        query: t,
        date: l
      } = e, n = l.format(_.b2L);
      return "".concat(t, " ").concat(n)
    }).join(" "), [Chunk913527]);
  return {
    options: Chunk594174,
    dates: exports,
    validDates: Chunk913527,
    handleDateQueryChange: Chunk5192,
    handleDateChange: Chunk748610,
    handleAddDateFilter: Chunk738018,
    handleRemoveDateFilter: Chunk607802,
    handleClearDateFilter: Chunk247902,
    getDateQueryString: Chunk532428
  }
}

function D(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [],
    [l, n] = r.useState(t),
    {
      filterAutocompleteResults: u,
      handleFocusFilter: a
    } = N({
      searchContext: e,
      filter: _.dCx.FILTER_AUTHOR_TYPE,
      queryString: ""
    }),
    s = r.useMemo(() => {
      if (0 === u.length && 0 === l.length) return [];
      let e = [],
        t = new Set;
      return l.length > 0 && l.forEach(l => {
        t.add(l), e.push({
          value: l,
          label: l,
          key: l
        })
      }), u.length > 0 && u.forEach(l => {
        let {
          text: n
        } = l;
        t.has(n) || (e.push({
          value: n,
          label: n,
          key: n
        }), t.add(n))
      }), e
    }, [u, l]),
    i = r.useCallback(() => {
      n([])
    }, []),
    c = r.useCallback(e => {
      if (0 === l.length) return null;
      let t = I.ZP[e];
      return l.map(e => "".concat(t.key, " ").concat(e)).join(" ")
    }, [l]);
  return {
    options: s,
    query: l,
    setQuery: n,
    handleClearFilter: i,
    getApplyQueryString: c,
    handleFocusFilter: a
  }
}

function j(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null,
    [l, n] = r.useState(t),
    u = r.useMemo(() => {
      var t, n, r;
      let u = null != (r = null == (t = (n = I.ZP[_.dCx.FILTER_PINNED]).getAutocompletions) ? true : t.call(n, {
        query: "",
        maxResults: 10,
        searchContext: e
      })) ? r : [];
      if (0 === u.length && null === l) return [];
      let a = [];
      return u.length > 0 && u.forEach(e => {
        let {
          text: t
        } = e;
        a.push({
          value: t,
          label: t,
          key: t
        })
      }), a
    }, [e, l]),
    a = r.useCallback(() => {
      n(null)
    }, []),
    s = r.useCallback(e => {
      if (null === l) return null;
      let t = I.ZP[e];
      return "".concat(t.key, " ").concat(l)
    }, [l]);
  return {
    options: u,
    query: l,
    setQuery: n,
    handleClearFilter: a,
    getApplyQueryString: s
  }
}

function w(e, t) {
  let {
    beforeFilter: l,
    afterFilter: n,
    duringFilter: u
  } = M(), a = (0, T.N)(t);
  return r.useMemo(() => {
    let t = {
        [_.dCx.FILTER_FROM]: [],
        [_.dCx.FILTER_MENTIONS]: [],
        [_.dCx.FILTER_HAS]: [],
        [_.dCx.FILTER_IN]: [],
        [_.dCx.FILTER_ON]: [],
        [_.dCx.FILTER_BEFORE]: [],
        [_.dCx.FILTER_AFTER]: [],
        [_.dCx.FILTER_PINNED]: null,
        [_.dCx.FILTER_AUTHOR_TYPE]: []
      },
      r = [],
      c = 0;
    e.forEach(e => {
      if (_.KA4.test(e.type)) switch (e.type) {
        case _.dCx.ANSWER_USERNAME_FROM:
          if (a.has(_.dCx.FILTER_FROM)) {
            let l = t[_.dCx.FILTER_FROM],
              n = e.getData("userId");
            l.push(n), c += 1
          }
          break;
        case _.dCx.ANSWER_USERNAME_MENTIONS:
          if (a.has(_.dCx.FILTER_MENTIONS)) {
            let l = t[_.dCx.FILTER_MENTIONS],
              n = e.getData("userId");
            l.push(n), c += 1
          }
          break;
        case _.dCx.ANSWER_HAS:
          let o = t[_.dCx.FILTER_HAS],
            d = e.getData("has");
          o.push(d), c += 1;
          break;
        case _.dCx.ANSWER_IN:
          if (a.has(_.dCx.FILTER_IN)) {
            var E;
            let l = t[_.dCx.FILTER_IN],
              n = null != (E = e.getData("channelIds")) ? E : [];
            l.push(...n), c += 1
          }
          break;
        case _.dCx.ANSWER_BEFORE:
          let f = t[_.dCx.FILTER_BEFORE],
            h = e.getData("end"),
            g = {
              query: l,
              date: s()(h),
              id: (0, i.Z)()
            };
          f.push(g), r.push(g), c += 1;
          break;
        case _.dCx.ANSWER_ON:
          let C = t[_.dCx.FILTER_ON],
            R = e.getData("start"),
            T = {
              query: u,
              date: s()(R),
              id: (0, i.Z)()
            };
          C.push(T), r.push(T), c += 1;
          break;
        case _.dCx.ANSWER_AFTER:
          let I = t[_.dCx.FILTER_AFTER],
            p = e.getData("start"),
            x = {
              query: n,
              date: s()(p),
              id: (0, i.Z)()
            };
          I.push(x), r.push(x), c += 1;
          break;
        case _.dCx.ANSWER_PINNED:
          let b = t[_.dCx.FILTER_PINNED],
            F = e.getData("pinned").toString();
          null === b ? b = F : "true" !== b && "true" === F && (b = F), t[_.dCx.FILTER_PINNED] = b, c += 1;
          break;
        case _.dCx.ANSWER_AUTHOR_TYPE:
          if (a.has(_.dCx.FILTER_AUTHOR_TYPE)) {
            let l = t[_.dCx.FILTER_AUTHOR_TYPE],
              n = e.getData("author_type");
            l.push(n), c += 1
          }
      }
    });
    let o = {
      [_.dCx.FILTER_FROM]: t[_.dCx.FILTER_FROM],
      [_.dCx.FILTER_MENTIONS]: t[_.dCx.FILTER_MENTIONS],
      [_.dCx.FILTER_HAS]: t[_.dCx.FILTER_HAS],
      [_.dCx.FILTER_IN]: t[_.dCx.FILTER_IN],
      dateFilters: r,
      [_.dCx.FILTER_AUTHOR_TYPE]: t[_.dCx.FILTER_AUTHOR_TYPE],
      [_.dCx.FILTER_PINNED]: t[_.dCx.FILTER_PINNED]
    };
    return {
      allPrefilledSearchFilters: t,
      totalFilters: c,
      prefilledSearchFilters: o,
      eligibleFilterTokens: a
    }
  }, [e, l, n, u, a])
}

function U(e, t) {
  return e === t || (0, u.isEqual)(e, t)
}

function H(e, t) {
  var l, n;
  if (e.length !== t.length) returnfalse;
  let r = new Map;
  for (let t of e) {
    let e = "".concat(t.query, ":").concat(t.date.valueOf()),
      n = null != (l = r.get(e)) ? l : 0;
    r.set(e, n + 1)
  }
  for (let e of t) {
    let t = "".concat(e.query, ":").concat(e.date.valueOf()),
      l = null != (n = r.get(t)) ? n : 0;
    if (0 === l) returnfalse;
    r.set(t, l - 1)
  }
  for (let e of r.values())
    if (0 !== e) returnfalse;
  returntrue
}

function q(e) {
  let {
    nonFilterQueryString: t,
    filterQueryString: l
  } = e, n = +(l.length > 0), u = +(t.length > 0), a = p.uh - t.length - u - n, s = r.useCallback(e => {
    let {
      newFilterString: t
    } = e;
    return l.length + t.length > a
  }, [l.length, a]), i = r.useMemo(() => l.length + 18 > a, [l.length, a]), c = r.useCallback(() => {
    d.Z.show({
      title: b.intl.string(b.t.nOqJcX),
      body: b.intl.string(b.t.zzAcsv),
      confirmText: b.intl.string(b.t["qcYY+/"])
    })
  }, []);
  return {
    validateFilter: r.useCallback((e, t) => !s({
      newFilterString: function(e, t) {
        let l, n = I.ZP[e];
        switch (e) {
          case _.dCx.FILTER_FROM:
          case _.dCx.FILTER_MENTIONS:
            let r = f.default.getUser(t);
            l = null == r ? t : "".concat(r.username);
            break;
          case _.dCx.FILTER_IN:
            let u = E.Z.getChannel(t);
            if (null == u) l = t;
            else {
              let e = (0, R.nl)(u);
              l = (0, R.Jl)(e)
            }
            break;
          case _.dCx.FILTER_HAS:
          case _.dCx.FILTER_PINNED:
          case _.dCx.FILTER_AUTHOR_TYPE:
          default:
            l = t
        }
        return n.key + " " + l
      }(e, t)
    }) || (c(), false), [s, c]),
    validateDateFilter: r.useCallback(() => !i || (c(), false), [i, c])
  }
}