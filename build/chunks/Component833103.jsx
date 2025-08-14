/** Chunk was on 54273 **/
/** chunk id: 833103, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ek: () => R,
  HJ: () => C,
  LE: () => w,
  Z2: () => Z,
  Zc: () => E,
  fI: () => T,
  hE: () => N,
  ur: () => I
}), require("./781311.js"), require("./388685.js"), require("./539854.js"), require("./290780.js"), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk592125 = require("./592125.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk748610 = require("./748610.js"),
  Chunk738018 = require("./738018.js"),
  Chunk607802 = require("./607802.js"),
  Chunk532428 = require("./532428.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e) {
  let {
    searchContext: t,
    filter: n,
    queryString: r
  } = e, l = (0, c.e7)([g.Z], () => g.Z.getState(t)), a = i.useMemo(() => {
    let e = l.autocompletes[0];
    return null != e && e.group === n ? e.results : []
  }, [l.autocompletes, n]), s = i.useMemo(() => {
    let e = b.ZP[n].key;
    return "".concat(e, " ").concat(r)
  }, [n, r]), o = i.useCallback(() => {
    let e = (0, m.kG)(s),
      n = (0, m.g9)(e, s.length - 1, s.length - 1);
    f.Z.updateAutocompleteQuery(t, e, n)
  }, [t, s]), u = i.useCallback(() => {
    o()
  }, [o]);
  return i.useEffect(() => {
    r.trim().length > 0 && o()
  }, [s, t, o, r]), {
    filterAutocompleteResults: a,
    handleFocusFilter: u
  }
}

function v(e) {
  let {
    user: t,
    guildId: n,
    channelId: r
  } = e, i = p.ZP.getName(n, r, t);
  return {
    value: t.id,
    label: i,
    key: t.id
  }
}

function C(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [],
    r = i.useMemo(() => (0, m.s5)(e), [e]),
    l = i.useMemo(() => (0, m.AH)(e), [e]),
    [a, s] = i.useState(n),
    [o, c] = i.useState(""),
    {
      filterAutocompleteResults: u,
      handleFocusFilter: d
    } = O({
      searchContext: e,
      filter: t,
      queryString: o
    }),
    p = i.useMemo(() => {
      if (0 === u.length && 0 === a.length) return [];
      let e = [],
        t = new Set;
      return u.length > 0 && u.forEach(n => {
        let i = n.user,
          a = v({
            user: i,
            guildId: r,
            channelId: l
          });
        t.add(i.id), e.push(a)
      }), a.length > 0 && a.forEach(n => {
        if (t.has(n)) return;
        let i = h.default.getUser(n);
        if (null == i) return;
        let a = v({
          user: i,
          guildId: r,
          channelId: l
        });
        t.add(n), e.unshift(a)
      }), e
    }, [u, a, r, l]),
    f = i.useCallback(() => {
      s([]), c("")
    }, []),
    g = i.useCallback(e => {
      if (0 === a.length) return null;
      let t = b.ZP[e];
      return a.map(e => {
        let n = h.default.getUser(e);
        return "".concat(t.key, " ").concat(null == n ? true : n.username)
      }).join(" ")
    }, [a]);
  return {
    options: p,
    query: a,
    setQuery: s,
    setQueryString: c,
    handleClearFilter: f,
    getApplyQueryString: g,
    handleFocusFilter: d
  }
}

function E(e) {
  return {
    filter: false,
    closeOnSelect: false,
    renderOptionPrefix: i.useCallback(t => {
      var n;
      if (null == t) return;
      let i = h.default.getUser(t.value);
      if (null == i) return;
      let l = null != (n = i.getAvatarURL(e, 80)) ? n : i.avatar;
      return (0, r.jsx)(u.qEK, {
        src: l,
        size: u.EFr.SIZE_16,
        "aria-hidden": true
      })
    }, [e]),
    renderOptionSuffix: i.useCallback(e => {
      if (null == e) return;
      let t = h.default.getUser(e.value);
      if (null != t) return (0, r.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: t.username
      })
    }, [])
  }
}

function S(e) {
  let {
    channel: t
  } = e;
  return {
    value: t.id,
    label: (0, m.nl)(t),
    key: t.id
  }
}

function I(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [],
    [n, r] = i.useState(t),
    [l, a] = i.useState(""),
    {
      filterAutocompleteResults: s,
      handleFocusFilter: o
    } = O({
      searchContext: e,
      filter: y.dCx.FILTER_IN,
      queryString: l
    }),
    c = i.useMemo(() => {
      if (0 === s.length && 0 === n.length) return [];
      let e = [],
        t = new Set;
      return s.length > 0 && s.forEach(n => {
        let r = n.channel,
          i = S({
            channel: r
          });
        t.add(r.id), e.push(i)
      }), n.length > 0 && n.forEach(n => {
        if (t.has(n)) return;
        let r = d.Z.getChannel(n);
        if (null == r) return;
        let i = S({
          channel: r
        });
        t.add(n), e.unshift(i)
      }), e
    }, [s, n]),
    u = i.useCallback(() => {
      r([]), a("")
    }, []),
    h = i.useCallback(e => {
      if (0 === n.length) return null;
      let t = b.ZP[e];
      return n.map(e => {
        let n = d.Z.getChannel(e);
        if (null == n) return;
        let r = (0, m.nl)(n);
        return "".concat(t.key, " ").concat(r)
      }).join(" ")
    }, [n]);
  return {
    options: c,
    query: n,
    setQuery: r,
    setQueryString: a,
    handleClearFilter: u,
    getApplyQueryString: h,
    handleFocusFilter: o
  }
}

function Z(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [],
    [n, r] = i.useState(t),
    {
      filterAutocompleteResults: l,
      handleFocusFilter: a
    } = O({
      searchContext: e,
      filter: y.dCx.FILTER_HAS,
      queryString: ""
    }),
    s = i.useMemo(() => {
      if (0 === l.length && 0 === n.length) return [];
      let e = [],
        t = new Set;
      return n.length > 0 && n.forEach(n => {
        t.add(n), e.push({
          value: n,
          label: n,
          key: n
        })
      }), l.length > 0 && l.forEach(n => {
        let {
          text: r
        } = n;
        t.has(r) || (e.push({
          value: r,
          label: r,
          key: r
        }), t.add(r))
      }), e
    }, [l, n]),
    o = i.useCallback(() => {
      r([])
    }, []),
    c = i.useCallback(e => {
      if (0 === n.length) return null;
      let t = b.ZP[e];
      return n.map(e => "".concat(t.key, " ").concat(e)).join(" ")
    }, [n]);
  return {
    options: s,
    query: n,
    setQuery: r,
    handleClearFilter: o,
    getApplyQueryString: c,
    handleFocusFilter: a
  }
}
let P = () => Chunk73800.useMemo(() => {
  var e, t, n;
  let r = Chunk532428.ZP[Chunk981631.dCx.FILTER_BEFORE],
    i = Chunk532428.ZP[Chunk981631.dCx.FILTER_AFTER],
    l = Chunk532428.ZP[Chunk981631.dCx.FILTER_ON];
  return {
    beforeFilter: null != (e = null == Chunk255367 ? true : Chunk255367.key) ? module : "".concat(Chunk388032.intl.string(Chunk388032.t["qZ+7BA"]), ":"),
    afterFilter: null != (t = null == Chunk73800 ? true : Chunk73800.key) ? exports : "".concat(Chunk388032.intl.string(Chunk388032.t.KSDx7O), ":"),
    duringFilter: null != (n = null == Chunk392711 ? true : Chunk392711.key) ? require : "".concat(Chunk388032.intl.string(Chunk388032.t.h2NzSU), ":")
  }
}, []);

function T() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [],
    [t, n] = Chunk73800.useState(module),
    r = Chunk73800.useCallback(() => (0, Chunk772848.Z)(), []),
    l = Chunk73800.useCallback(e => e.date.isValid(), []),
    a = Chunk73800.useMemo(() => exports.filter(Chunk392711), [exports, Chunk392711]),
    {
      beforeFilter: c,
      afterFilter: u,
      duringFilter: d
    } = P(),
    h = Chunk73800.useCallback(() => ({
      query: Chunk442837,
      date: s()(),
      id: Chunk255367()
    }), [Chunk442837, Chunk255367]),
    p = Chunk73800.useMemo(() => [{
      key: "Before",
      label: Chunk388032.intl.string(Chunk388032.t["ptL/DA"]),
      value: Chunk442837
    }, {
      key: "After",
      label: Chunk388032.intl.string(Chunk388032.t.waQeER),
      value: Chunk481060
    }, {
      key: "During",
      label: Chunk388032.intl.string(Chunk388032.t.LT5TnZ),
      value: Chunk592125
    }], [Chunk442837, Chunk481060, Chunk592125]),
    f = Chunk73800.useCallback(e => {
      let {
        query: t,
        index: r
      } = e;
      n(e => {
        let n = [...e];
        return n[r] = _(j({}, n[r]), {
          query: t
        }), n
      })
    }, []),
    g = Chunk73800.useCallback(e => {
      let {
        date: t,
        index: r
      } = e;
      n(e => {
        let n = [...e];
        return n[r] = _(j({}, n[r]), {
          date: t
        }), n
      })
    }, []),
    m = Chunk73800.useCallback(() => {
      require(e => [...e, h()])
    }, [Chunk594174]),
    b = Chunk73800.useCallback(e => {
      n(t => {
        let n = [...t];
        return n.splice(e, 1), n
      })
    }, []),
    O = Chunk73800.useCallback(() => {
      require([])
    }, []),
    v = Chunk73800.useCallback(() => 0 === Chunk913527.length ? null : Chunk913527.map(e => {
      let {
        query: t,
        date: n
      } = e, r = n.format(y.b2L);
      return "".concat(t, " ").concat(r)
    }).join(" "), [Chunk913527]);
  return {
    options: Chunk5192,
    dates: exports,
    validDates: Chunk913527,
    handleDateQueryChange: Chunk748610,
    handleDateChange: Chunk738018,
    handleAddDateFilter: Chunk607802,
    handleRemoveDateFilter: Chunk532428,
    handleClearDateFilter: O,
    getDateQueryString: v
  }
}

function N(e) {
  let {
    beforeFilter: t,
    afterFilter: n,
    duringFilter: r
  } = P();
  return i.useMemo(() => {
    let i = {
        [y.dCx.FILTER_FROM]: [],
        [y.dCx.FILTER_MENTIONS]: [],
        [y.dCx.FILTER_HAS]: [],
        [y.dCx.FILTER_IN]: [],
        [y.dCx.FILTER_ON]: [],
        [y.dCx.FILTER_BEFORE]: [],
        [y.dCx.FILTER_AFTER]: []
      },
      l = 0;
    return e.forEach(e => {
      if (y.KA4.test(e.type)) switch (l += 1, e.type) {
        case y.dCx.ANSWER_USERNAME_FROM:
          let a = i[y.dCx.FILTER_FROM],
            c = e.getData("userId");
          a.push(c);
          break;
        case y.dCx.ANSWER_USERNAME_MENTIONS:
          let u = i[y.dCx.FILTER_MENTIONS],
            d = e.getData("userId");
          u.push(d);
          break;
        case y.dCx.ANSWER_HAS:
          let h = i[y.dCx.FILTER_HAS],
            p = e.getData("has");
          h.push(p);
          break;
        case y.dCx.ANSWER_IN:
          var f;
          let g = i[y.dCx.FILTER_IN],
            m = (null != (f = e.getData("channels")) ? f : []).map(e => e.id);
          g.push(...m);
          break;
        case y.dCx.ANSWER_BEFORE:
          let b = i[y.dCx.FILTER_BEFORE],
            x = e.getData("end"),
            j = s()(x);
          b.push({
            query: t,
            date: j,
            id: (0, o.Z)()
          });
          break;
        case y.dCx.ANSWER_ON:
          let _ = i[y.dCx.FILTER_ON],
            O = e.getData("start"),
            v = s()(O);
          _.push({
            query: r,
            date: v,
            id: (0, o.Z)()
          });
          break;
        case y.dCx.ANSWER_AFTER:
          let C = i[y.dCx.FILTER_AFTER],
            E = e.getData("start"),
            S = s()(E);
          C.push({
            query: n,
            date: S,
            id: (0, o.Z)()
          })
      }
    }), {
      searchFilters: i,
      totalFilters: l
    }
  }, [e, t, n, r])
}

function R(e, t) {
  return e === t || (0, l.isEqual)(e, t)
}

function w(e, t) {
  var n, r;
  if (e.length !== t.length) returnfalse;
  let i = new Map;
  for (let t of e) {
    let e = "".concat(t.query, ":").concat(t.date.valueOf()),
      r = null != (n = i.get(e)) ? n : 0;
    i.set(e, r + 1)
  }
  for (let e of t) {
    let t = "".concat(e.query, ":").concat(e.date.valueOf()),
      n = null != (r = i.get(t)) ? r : 0;
    if (0 === n) returnfalse;
    i.set(t, n - 1)
  }
  for (let e of i.values())
    if (0 !== e) returnfalse;
  returntrue
}