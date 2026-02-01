/** Chunk was on 52199 **/
/** chunk id: 121806, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  CT: () => H,
  H3: () => D,
  Ht: () => M,
  KD: () => w,
  Ky: () => W,
  TT: () => F,
  _2: () => Q,
  dY: () => z,
  ps: () => N,
  u2: () => k,
  vj: () => U,
  wf: () => q
}), require("./733351.js"), require("./896048.js"), require("./321073.js"), require("./667532.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk835245 = require("./835245.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk157559 = require("./157559.js"),
  Chunk713654 = require("./713654.js"),
  Chunk734057 = require("./734057.js"),
  Chunk287809 = require("./287809.js"),
  Chunk403362 = require("./403362.js"),
  Chunk562153 = require("./562153.js"),
  Chunk427262 = require("./427262.js"),
  Chunk256796 = require("./256796.js"),
  Chunk692986 = require("./692986.js"),
  Chunk822382 = require("./822382.js"),
  Chunk893162 = require("./893162.js"),
  Chunk771650 = require("./771650.js"),
  Chunk907745 = require("./907745.jsx"),
  Chunk315059 = require("./315059.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function L(e) {
  let {
    searchContext: t,
    filter: r,
    queryString: n
  } = e, s = (0, c.bG)([A.A], () => A.A.getState(t), [t], c.My), a = l.useMemo(() => {
    let e = s.autocompletes[0];
    return null != e && e.group === r ? e.results : []
  }, [s.autocompletes, r]), i = l.useMemo(() => {
    let e = b.Ay[r].key;
    return "".concat(e, " ").concat(n)
  }, [r, n]), o = l.useCallback(() => {
    let e = (0, y._o)(i),
      r = (0, y.zZ)(e, i.length - 1, i.length - 1);
    _.A.updateAutocompleteQuery({
      searchContext: t,
      tokens: e,
      cursorScope: r,
      queryString: i
    })
  }, [t, i]), u = l.useCallback(() => {
    o()
  }, [o]);
  return l.useEffect(() => {
    n.trim().length > 0 && o()
  }, [i, t, o, n]), {
    filterAutocompleteResults: a,
    handleFocusFilter: u,
    autocompleteStoreState: s
  }
}

function j(e) {
  let {
    user: t,
    guildId: r,
    channelId: n
  } = e, l = S.Ay.getName(r, n, t), s = t.getAvatarURL(r, (0, u.FT9)(u._3J.SIZE_24));
  return {
    value: t.id,
    label: l,
    key: t.id,
    id: t.id,
    leading: {
      type: "avatar",
      src: s
    },
    trailing: t.username
  }
}

function N(e, t) {
  let r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [],
    n = l.useMemo(() => (0, y.mt)(e), [e]),
    s = l.useMemo(() => (0, y._b)(e), [e]),
    [a, i] = l.useState(r),
    [o, c] = l.useState(""),
    {
      filterAutocompleteResults: u,
      handleFocusFilter: d,
      autocompleteStoreState: h
    } = L({
      searchContext: e,
      filter: t,
      queryString: o
    }),
    f = l.useMemo(() => {
      let e = [],
        t = new Set;
      if (u.length > 0) u.forEach(r => {
        let l = r.user,
          a = j({
            user: l,
            guildId: n,
            channelId: s
          });
        t.add(l.id), e.push(a)
      });
      else {
        let {
          tokens: r
        } = h, l = r[r.length - 1];
        if (null != l && (l.type === O.LWr.ANSWER_USERNAME_FROM || l.type === O.LWr.ANSWER_USERNAME_MENTIONS) && (0, b.sC)(l)) {
          let r = l.getData("userId"),
            a = p.default.getUser(r);
          if (null != a) {
            let r = j({
              user: a,
              guildId: n,
              channelId: s
            });
            t.add(a.id), e.push(r)
          }
        }
      }
      return a.length > 0 && a.forEach(r => {
        if (t.has(r)) return;
        let l = p.default.getUser(r);
        if (null == l) return;
        let a = j({
          user: l,
          guildId: n,
          channelId: s
        });
        t.add(r), e.unshift(a)
      }), e
    }, [h, u, a, n, s]),
    S = l.useCallback(() => {
      i([]), c("")
    }, []),
    _ = l.useCallback(() => {
      c("")
    }, []),
    A = l.useCallback(e => {
      if (0 === a.length) return null;
      let t = b.Ay[e];
      return a.map(e => {
        let r = p.default.getUser(e);
        if (null == r) return null;
        let n = E.Ay.getUserTag(r);
        return "" === n ? null : "".concat(t.key, " ").concat(n)
      }).filter(g.Vq).join(" ")
    }, [a]);
  return {
    options: f,
    query: a,
    setQuery: i,
    setQueryString: c,
    handleClearFilter: S,
    getApplyQueryString: A,
    handleFocusFilter: d,
    handleBlurFilter: _
  }
}

function C(e) {
  let t, {
    channel: r
  } = e;
  if (r.isDM()) {
    let e = r.getRecipientId(),
      n = p.default.getUser(e);
    null != n && (t = {
      type: "avatar",
      src: n.getAvatarURL(null, (0, u.FT9)(u._3J.SIZE_20))
    })
  } else t = r.isGroupDM() ? (0, n.jsx)(v.A, {
    channel: r,
    avatarSize: u._3J.SIZE_20,
    iconSize: "refresh_sm"
  }) : (0, h.gU)(r);
  return {
    value: r.id,
    label: (0, y.E3)(r),
    key: r.id,
    id: r.id,
    leading: t
  }
}

function F(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [],
    [r, n] = l.useState(t),
    [s, a] = l.useState(""),
    {
      filterAutocompleteResults: i,
      handleFocusFilter: o,
      autocompleteStoreState: c
    } = L({
      searchContext: e,
      filter: O.LWr.FILTER_IN,
      queryString: s
    }),
    u = l.useMemo(() => {
      let t = [],
        n = new Set;
      if (i.length > 0) i.forEach(e => {
        let r = e.channel,
          l = C({
            channel: r
          });
        n.add(r.id), t.push(l)
      });
      else {
        let {
          tokens: r
        } = c, l = r[r.length - 1];
        if (null != l && l.type === O.LWr.ANSWER_IN && (0, b.Yd)(l, e)) {
          let e = l.getData("channelIds");
          null != e && e.length > 0 && e.forEach(e => {
            let r = f.A.getChannel(e);
            if (null != r) {
              let e = C({
                channel: r
              });
              n.add(r.id), t.push(e)
            }
          })
        }
      }
      return r.length > 0 && r.forEach(e => {
        if (n.has(e)) return;
        let r = f.A.getChannel(e);
        if (null == r) return;
        let l = C({
          channel: r
        });
        n.add(e), t.unshift(l)
      }), t
    }, [c, i, r, e]),
    d = l.useCallback(() => {
      n([]), a("")
    }, []),
    h = l.useCallback(() => {
      a("")
    }, []),
    p = l.useCallback(e => {
      if (0 === r.length) return null;
      let t = b.Ay[e];
      return r.map(e => {
        let r = f.A.getChannel(e);
        if (null == r) return;
        let n = (0, y.E3)(r),
          l = (0, y.TZ)(n);
        return "".concat(t.key, " ").concat(l)
      }).join(" ")
    }, [r]);
  return {
    options: u,
    query: r,
    setQuery: n,
    setQueryString: a,
    handleClearFilter: d,
    getApplyQueryString: p,
    handleFocusFilter: o,
    handleBlurFilter: h
  }
}

function w(e) {
  switch (e) {
    case T.intl.string(T.t.ZNR2fi):
      return u.qYV;
    case T.intl.string(T.t["20uQR3"]):
      return u.JD7;
    case T.intl.string(T.t.L4lxyE):
      return u.YRe;
    case T.intl.string(T.t["AV/v6i"]):
      return u.oSV;
    case T.intl.string(T.t.XM9XGP):
      return u.npA;
    case T.intl.string(T.t.TNLcpx):
      return u.xfq;
    case T.intl.string(T.t.F8Wf0e):
      return u.JMI;
    case T.intl.string(T.t.PJgX2h):
      return u.tEP;
    case T.intl.string(T.t.nrpA5E):
      return u.tuI;
    default:
      return null
  }
}

function k(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [],
    [r, n] = l.useState(t),
    {
      filterAutocompleteResults: s,
      handleFocusFilter: a
    } = L({
      searchContext: e,
      filter: O.LWr.FILTER_HAS,
      queryString: ""
    }),
    i = l.useMemo(() => {
      if (0 === s.length && 0 === r.length) return [];
      let e = [],
        t = new Set;
      return r.length > 0 && r.forEach(r => {
        t.add(r), e.push({
          value: r,
          label: r,
          key: r,
          id: r,
          leading: w(r)
        })
      }), s.length > 0 && s.forEach(r => {
        let {
          text: n
        } = r;
        t.has(n) || (e.push({
          value: n,
          label: n,
          key: n,
          id: n,
          leading: w(n)
        }), t.add(n))
      }), e
    }, [s, r]),
    o = l.useCallback(() => {
      n([])
    }, []),
    c = l.useCallback(e => {
      if (0 === r.length) return null;
      let t = b.Ay[e];
      return r.map(e => "".concat(t.key, " ").concat(e)).join(" ")
    }, [r]);
  return {
    options: i,
    query: r,
    setQuery: n,
    handleClearFilter: o,
    getApplyQueryString: c,
    handleFocusFilter: a
  }
}
let P = () => l.useMemo(() => {
  var e, t, r;
  let n = b.Ay[O.LWr.FILTER_BEFORE],
    l = b.Ay[O.LWr.FILTER_AFTER],
    s = b.Ay[O.LWr.FILTER_ON];
  return {
    beforeFilter: null != (e = null == n ? true : n.key) ? e : "".concat(T.intl.string(T.t["qZ+7BA"]), ":"),
    afterFilter: null != (t = null == l ? true : l.key) ? t : "".concat(T.intl.string(T.t.KSDx7M), ":"),
    duringFilter: null != (r = null == s ? true : s.key) ? r : "".concat(T.intl.string(T.t.h2NzSd), ":")
  }
}, []);

function W() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [],
    [t, r] = l.useState(e),
    n = l.useCallback(() => (0, o.A)(), []),
    s = l.useCallback(e => e.date.isValid(), []),
    a = l.useMemo(() => t.filter(s), [t, s]),
    {
      beforeFilter: c,
      afterFilter: u,
      duringFilter: d
    } = P(),
    h = l.useCallback(() => ({
      query: c,
      date: i()(),
      id: n()
    }), [c, n]),
    f = l.useMemo(() => [{
      key: "Before",
      label: T.intl.string(T.t["ptL/DP"]),
      value: c
    }, {
      key: "After",
      label: T.intl.string(T.t.waQeEV),
      value: u
    }, {
      key: "During",
      label: T.intl.string(T.t.LT5TnZ),
      value: d
    }], [c, u, d]),
    p = l.useCallback(e => {
      let {
        query: t,
        index: n
      } = e;
      r(e => {
        let r = [...e];
        return r[n] = I(x({}, r[n]), {
          query: t
        }), r
      })
    }, []),
    g = l.useCallback(e => {
      let {
        date: t,
        index: n
      } = e;
      r(e => {
        let r = [...e];
        return r[n] = I(x({}, r[n]), {
          date: t
        }), r
      })
    }, []),
    S = l.useCallback(() => {
      r(e => [...e, h()])
    }, [h]),
    E = l.useCallback(e => {
      r(t => {
        let r = [...t];
        return r.splice(e, 1), r
      })
    }, []),
    _ = l.useCallback(() => {
      r([])
    }, []),
    A = l.useCallback(() => 0 === a.length ? null : a.map(e => {
      let {
        query: t,
        date: r
      } = e, n = r.format(O.ump);
      return "".concat(t, " ").concat(n)
    }).join(" "), [a]);
  return {
    options: f,
    dates: t,
    validDates: a,
    handleDateQueryChange: p,
    handleDateChange: g,
    handleAddDateFilter: S,
    handleRemoveDateFilter: E,
    handleClearDateFilter: _,
    getDateQueryString: A
  }
}

function M(e) {
  switch (e) {
    case T.intl.string(T.t.tPZo4p):
      return u.nys;
    case T.intl.string(T.t.JL7sRS):
      return u.CnV;
    case T.intl.string(T.t.WjkIKU):
      return u.XC7
  }
}

function D(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [],
    [r, n] = l.useState(t),
    {
      filterAutocompleteResults: s,
      handleFocusFilter: a
    } = L({
      searchContext: e,
      filter: O.LWr.FILTER_AUTHOR_TYPE,
      queryString: ""
    }),
    i = l.useMemo(() => {
      if (0 === s.length && 0 === r.length) return [];
      let e = [],
        t = new Set;
      return r.length > 0 && r.forEach(r => {
        t.add(r), e.push({
          value: r,
          label: r,
          key: r,
          id: r,
          leading: M(r)
        })
      }), s.length > 0 && s.forEach(r => {
        let {
          text: n
        } = r;
        t.has(n) || (e.push({
          value: n,
          label: n,
          key: n,
          id: n,
          leading: M(n)
        }), t.add(n))
      }), e
    }, [s, r]),
    o = l.useCallback(() => {
      n([])
    }, []),
    c = l.useCallback(e => {
      if (0 === r.length) return null;
      let t = b.Ay[e];
      return r.map(e => "".concat(t.key, " ").concat(e)).join(" ")
    }, [r]);
  return {
    options: i,
    query: r,
    setQuery: n,
    handleClearFilter: o,
    getApplyQueryString: c,
    handleFocusFilter: a
  }
}

function H(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null,
    [r, n] = l.useState(t),
    s = l.useMemo(() => {
      var t, n, l;
      let s = null != (t = null == (n = (l = b.Ay[O.LWr.FILTER_PINNED]).getAutocompletions) ? true : n.call(l, {
        query: "",
        maxResults: 10,
        searchContext: e
      })) ? t : [];
      if (0 === s.length && null === r) return [];
      let a = [];
      return s.length > 0 && s.forEach(e => {
        let {
          text: t
        } = e;
        a.push({
          value: t,
          label: t,
          key: t
        })
      }), a
    }, [e, r]),
    a = l.useCallback(() => {
      n(null)
    }, []),
    i = l.useCallback(e => {
      if (null === r) return null;
      let t = b.Ay[e];
      return "".concat(t.key, " ").concat(r)
    }, [r]);
  return {
    options: s,
    query: r,
    setQuery: n,
    handleClearFilter: a,
    getApplyQueryString: i
  }
}

function U(e, t) {
  let {
    beforeFilter: r,
    afterFilter: n,
    duringFilter: s
  } = P(), a = (0, m.R)(t);
  return l.useMemo(() => {
    let t = {
        [O.LWr.FILTER_FROM]: [],
        [O.LWr.FILTER_MENTIONS]: [],
        [O.LWr.FILTER_HAS]: [],
        [O.LWr.FILTER_IN]: [],
        [O.LWr.FILTER_ON]: [],
        [O.LWr.FILTER_BEFORE]: [],
        [O.LWr.FILTER_AFTER]: [],
        [O.LWr.FILTER_PINNED]: null,
        [O.LWr.FILTER_AUTHOR_TYPE]: []
      },
      l = [],
      c = 0;
    e.forEach(e => {
      if (O.T2E.test(e.type)) switch (e.type) {
        case O.LWr.ANSWER_USERNAME_FROM:
          if (a.has(O.LWr.FILTER_FROM)) {
            let r = t[O.LWr.FILTER_FROM],
              n = e.getData("userId");
            r.push(n), c += 1
          }
          break;
        case O.LWr.ANSWER_USERNAME_MENTIONS:
          if (a.has(O.LWr.FILTER_MENTIONS)) {
            let r = t[O.LWr.FILTER_MENTIONS],
              n = e.getData("userId");
            r.push(n), c += 1
          }
          break;
        case O.LWr.ANSWER_HAS:
          let u = t[O.LWr.FILTER_HAS],
            d = e.getData("has");
          u.push(d), c += 1;
          break;
        case O.LWr.ANSWER_IN:
          if (a.has(O.LWr.FILTER_IN)) {
            var h;
            let r = t[O.LWr.FILTER_IN],
              n = null != (h = e.getData("channelIds")) ? h : [];
            r.push(...n), c += 1
          }
          break;
        case O.LWr.ANSWER_BEFORE:
          let f = t[O.LWr.FILTER_BEFORE],
            p = e.getData("end"),
            g = {
              query: r,
              date: i()(p),
              id: (0, o.A)()
            };
          f.push(g), l.push(g), c += 1;
          break;
        case O.LWr.ANSWER_ON:
          let S = t[O.LWr.FILTER_ON],
            E = e.getData("start"),
            _ = {
              query: s,
              date: i()(E),
              id: (0, o.A)()
            };
          S.push(_), l.push(_), c += 1;
          break;
        case O.LWr.ANSWER_AFTER:
          let A = t[O.LWr.FILTER_AFTER],
            y = e.getData("start"),
            m = {
              query: n,
              date: i()(y),
              id: (0, o.A)()
            };
          A.push(m), l.push(m), c += 1;
          break;
        case O.LWr.ANSWER_PINNED:
          let b = t[O.LWr.FILTER_PINNED],
            R = e.getData("pinned").toString();
          null === b ? b = R : "true" !== b && "true" === R && (b = R), t[O.LWr.FILTER_PINNED] = b, c += 1;
          break;
        case O.LWr.ANSWER_AUTHOR_TYPE:
          if (a.has(O.LWr.FILTER_AUTHOR_TYPE)) {
            let r = t[O.LWr.FILTER_AUTHOR_TYPE],
              n = e.getData("author_type");
            r.push(n), c += 1
          }
      }
    });
    let u = {
      [O.LWr.FILTER_FROM]: t[O.LWr.FILTER_FROM],
      [O.LWr.FILTER_MENTIONS]: t[O.LWr.FILTER_MENTIONS],
      [O.LWr.FILTER_HAS]: t[O.LWr.FILTER_HAS],
      [O.LWr.FILTER_IN]: t[O.LWr.FILTER_IN],
      dateFilters: l,
      [O.LWr.FILTER_AUTHOR_TYPE]: t[O.LWr.FILTER_AUTHOR_TYPE],
      [O.LWr.FILTER_PINNED]: t[O.LWr.FILTER_PINNED]
    };
    return {
      allPrefilledSearchFilters: t,
      totalFilters: c,
      prefilledSearchFilters: u,
      eligibleFilterTokens: a
    }
  }, [e, r, n, s, a])
}

function q(e, t) {
  return e === t || (0, s.isEqual)(e, t)
}

function Q(e, t) {
  var r, n;
  if (e.length !== t.length) returnfalse;
  let l = new Map;
  for (let t of e) {
    let e = "".concat(t.query, ":").concat(t.date.valueOf()),
      n = null != (r = l.get(e)) ? r : 0;
    l.set(e, n + 1)
  }
  for (let e of t) {
    let t = "".concat(e.query, ":").concat(e.date.valueOf()),
      r = null != (n = l.get(t)) ? n : 0;
    if (0 === r) returnfalse;
    l.set(t, r - 1)
  }
  for (let e of l.values())
    if (0 !== e) returnfalse;
  returntrue
}

function z(e) {
  let {
    nonFilterQueryString: t,
    filterQueryString: r
  } = e, n = +(r.length > 0), s = +(t.length > 0), a = R.E2 - t.length - s - n, i = l.useCallback(e => {
    let {
      newFilterString: t
    } = e;
    return r.length + t.length > a
  }, [r.length, a]), o = l.useMemo(() => r.length + 18 > a, [r.length, a]), c = l.useCallback(() => {
    d.A.show({
      title: T.intl.string(T.t.nOqJcX),
      body: T.intl.string(T.t.zzAcsv),
      confirmText: T.intl.string(T.t["qcYY+/"])
    })
  }, []);
  return {
    validateFilter: l.useCallback((e, t) => !i({
      newFilterString: function(e, t) {
        let r, n = b.Ay[e];
        switch (e) {
          case O.LWr.FILTER_FROM:
          case O.LWr.FILTER_MENTIONS:
            let l = p.default.getUser(t);
            r = null == l ? t : "".concat(l.username);
            break;
          case O.LWr.FILTER_IN:
            let s = f.A.getChannel(t);
            if (null == s) r = t;
            else {
              let e = (0, y.E3)(s);
              r = (0, y.TZ)(e)
            }
            break;
          case O.LWr.FILTER_HAS:
          case O.LWr.FILTER_PINNED:
          case O.LWr.FILTER_AUTHOR_TYPE:
          default:
            r = t
        }
        return n.key + " " + r
      }(e, t)
    }) || (c(), false), [i, c]),
    validateDateFilter: l.useCallback(() => !o || (c(), false), [o, c])
  }
}