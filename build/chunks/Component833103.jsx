/** Chunk was on 5665 **/
/** chunk id: 833103, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ek: () => A,
  HJ: () => j,
  LE: () => w,
  Z2: () => I,
  Zc: () => E,
  fI: () => T,
  hE: () => N,
  ur: () => P
}), require("./781311.js"), require("./388685.js"), require("./539854.js"), require("./290780.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
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

function C(e) {
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

function x(e, t) {
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

function v(e) {
  let {
    searchContext: t,
    filter: n,
    queryString: r
  } = e, l = (0, c.e7)([m.Z], () => m.Z.getState(t)), a = i.useMemo(() => {
    let e = l.autocompletes[0];
    return null != e && e.group === n ? e.results : []
  }, [l.autocompletes, n]), o = i.useMemo(() => {
    let e = b.ZP[n].key;
    return "".concat(e, " ").concat(r)
  }, [n, r]), s = i.useCallback(() => {
    let e = (0, g.kG)(o),
      n = (0, g.g9)(e, o.length - 1, o.length - 1);
    f.Z.updateAutocompleteQuery(t, e, n)
  }, [t, o]), u = i.useCallback(() => {
    s()
  }, [s]);
  return i.useEffect(() => {
    r.trim().length > 0 && s()
  }, [o, t, s, r]), {
    filterAutocompleteResults: a,
    handleFocusFilter: u
  }
}

function O(e) {
  let {
    user: t,
    guildId: n,
    channelId: r
  } = e, i = h.ZP.getName(n, r, t);
  return {
    value: t.id,
    label: i,
    key: t.id
  }
}

function j(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [],
    r = i.useMemo(() => (0, g.s5)(e), [e]),
    l = i.useMemo(() => (0, g.AH)(e), [e]),
    [a, o] = i.useState(n),
    [s, c] = i.useState(""),
    {
      filterAutocompleteResults: u,
      handleFocusFilter: d
    } = v({
      searchContext: e,
      filter: t,
      queryString: s
    }),
    h = i.useMemo(() => {
      if (0 === u.length && 0 === a.length) return [];
      let e = [],
        t = new Set;
      return u.length > 0 && u.forEach(n => {
        let i = n.user,
          a = O({
            user: i,
            guildId: r,
            channelId: l
          });
        t.add(i.id), e.push(a)
      }), a.length > 0 && a.forEach(n => {
        if (t.has(n)) return;
        let i = p.default.getUser(n);
        if (null == i) return;
        let a = O({
          user: i,
          guildId: r,
          channelId: l
        });
        t.add(n), e.unshift(a)
      }), e
    }, [u, a, r, l]),
    f = i.useCallback(() => {
      o([]), c("")
    }, []),
    m = i.useCallback(e => {
      if (0 === a.length) return null;
      let t = b.ZP[e];
      return a.map(e => {
        let n = p.default.getUser(e);
        return "".concat(t.key, " ").concat(null == n ? true : n.username)
      }).join(" ")
    }, [a]);
  return {
    options: h,
    query: a,
    setQuery: o,
    setQueryString: c,
    handleClearFilter: f,
    getApplyQueryString: m,
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
      let i = p.default.getUser(t.value);
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
      let t = p.default.getUser(e.value);
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
    label: (0, g.nl)(t),
    key: t.id
  }
}

function P(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [],
    [n, r] = i.useState(t),
    [l, a] = i.useState(""),
    {
      filterAutocompleteResults: o,
      handleFocusFilter: s
    } = v({
      searchContext: e,
      filter: y.dCx.FILTER_IN,
      queryString: l
    }),
    c = i.useMemo(() => {
      if (0 === o.length && 0 === n.length) return [];
      let e = [],
        t = new Set;
      return o.length > 0 && o.forEach(n => {
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
    }, [o, n]),
    u = i.useCallback(() => {
      r([]), a("")
    }, []),
    p = i.useCallback(e => {
      if (0 === n.length) return null;
      let t = b.ZP[e];
      return n.map(e => {
        let n = d.Z.getChannel(e);
        if (null == n) return;
        let r = (0, g.nl)(n);
        return "".concat(t.key, " ").concat(r)
      }).join(" ")
    }, [n]);
  return {
    options: c,
    query: n,
    setQuery: r,
    setQueryString: a,
    handleClearFilter: u,
    getApplyQueryString: p,
    handleFocusFilter: s
  }
}

function I(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [],
    [n, r] = i.useState(t),
    {
      filterAutocompleteResults: l,
      handleFocusFilter: a
    } = v({
      searchContext: e,
      filter: y.dCx.FILTER_HAS,
      queryString: ""
    }),
    o = i.useMemo(() => {
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
    s = i.useCallback(() => {
      r([])
    }, []),
    c = i.useCallback(e => {
      if (0 === n.length) return null;
      let t = b.ZP[e];
      return n.map(e => "".concat(t.key, " ").concat(e)).join(" ")
    }, [n]);
  return {
    options: o,
    query: n,
    setQuery: r,
    handleClearFilter: s,
    getApplyQueryString: c,
    handleFocusFilter: a
  }
}
let Z = () => Chunk647438.useMemo(() => {
  var e, t, n;
  let r = Chunk532428.ZP[Chunk981631.dCx.FILTER_BEFORE],
    i = Chunk532428.ZP[Chunk981631.dCx.FILTER_AFTER],
    l = Chunk532428.ZP[Chunk981631.dCx.FILTER_ON];
  return {
    beforeFilter: null != (e = null == Chunk951288 ? true : Chunk951288.key) ? module : "".concat(Chunk388032.intl.string(Chunk388032.t["qZ+7BA"]), ":"),
    afterFilter: null != (t = null == Chunk647438 ? true : Chunk647438.key) ? exports : "".concat(Chunk388032.intl.string(Chunk388032.t.KSDx7O), ":"),
    duringFilter: null != (n = null == Chunk392711 ? true : Chunk392711.key) ? require : "".concat(Chunk388032.intl.string(Chunk388032.t.h2NzSU), ":")
  }
}, []);

function T() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [],
    [t, n] = Chunk647438.useState(module),
    r = Chunk647438.useCallback(() => (0, Chunk772848.Z)(), []),
    l = Chunk647438.useCallback(e => e.date.isValid(), []),
    a = Chunk647438.useMemo(() => exports.filter(Chunk392711), [exports, Chunk392711]),
    {
      beforeFilter: c,
      afterFilter: u,
      duringFilter: d
    } = Z(),
    p = Chunk647438.useCallback(() => ({
      query: Chunk442837,
      date: o()(),
      id: Chunk951288()
    }), [Chunk442837, Chunk951288]),
    h = Chunk647438.useMemo(() => [{
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
    f = Chunk647438.useCallback(e => {
      let {
        query: t,
        index: r
      } = e;
      n(e => {
        let n = [...e];
        return n[r] = x(C({}, n[r]), {
          query: t
        }), n
      })
    }, []),
    m = Chunk647438.useCallback(e => {
      let {
        date: t,
        index: r
      } = e;
      n(e => {
        let n = [...e];
        return n[r] = x(C({}, n[r]), {
          date: t
        }), n
      })
    }, []),
    g = Chunk647438.useCallback(() => {
      require(e => [...e, p()])
    }, [Chunk594174]),
    b = Chunk647438.useCallback(e => {
      n(t => {
        let n = [...t];
        return n.splice(e, 1), n
      })
    }, []),
    v = Chunk647438.useCallback(() => {
      require([])
    }, []),
    O = Chunk647438.useCallback(() => 0 === Chunk913527.length ? null : Chunk913527.map(e => {
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
    handleClearDateFilter: v,
    getDateQueryString: O
  }
}

function N(e) {
  let {
    beforeFilter: t,
    afterFilter: n,
    duringFilter: r
  } = Z();
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
          let p = i[y.dCx.FILTER_HAS],
            h = e.getData("has");
          p.push(h);
          break;
        case y.dCx.ANSWER_IN:
          var f;
          let m = i[y.dCx.FILTER_IN],
            g = (null != (f = e.getData("channels")) ? f : []).map(e => e.id);
          m.push(...g);
          break;
        case y.dCx.ANSWER_BEFORE:
          let b = i[y.dCx.FILTER_BEFORE],
            _ = e.getData("end"),
            C = o()(_);
          b.push({
            query: t,
            date: C,
            id: (0, s.Z)()
          });
          break;
        case y.dCx.ANSWER_ON:
          let x = i[y.dCx.FILTER_ON],
            v = e.getData("start"),
            O = o()(v);
          x.push({
            query: r,
            date: O,
            id: (0, s.Z)()
          });
          break;
        case y.dCx.ANSWER_AFTER:
          let j = i[y.dCx.FILTER_AFTER],
            E = e.getData("start"),
            S = o()(E);
          j.push({
            query: n,
            date: S,
            id: (0, s.Z)()
          })
      }
    }), {
      searchFilters: i,
      totalFilters: l
    }
  }, [e, t, n, r])
}

function A(e, t) {
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