/** Chunk was on 52199 **/
/** chunk id: 121806, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  CT: () => H,
  H3: () => M,
  Ht: () => W,
  KD: () => w,
  Ky: () => D,
  TT: () => P,
  _2: () => K,
  dY: () => z,
  ps: () => N,
  u2: () => F,
  vj: () => U,
  wf: () => G
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

function T(e) {
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

function x(e, t) {
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

function j(e) {
  let {
    searchContext: t,
    filter: r,
    queryString: n
  } = e, s = (0, c.bG)([y.A], () => y.A.getState(t), [t], c.My), a = l.useMemo(() => {
    let e = s.autocompletes[0];
    return null != e && e.group === r ? e.results : []
  }, [s.autocompletes, r]), i = l.useMemo(() => {
    let e = m.Ay[r].key;
    return "".concat(e, " ").concat(n)
  }, [r, n]), o = l.useCallback(() => {
    let e = (0, S._o)(i),
      r = (0, S.zZ)(e, i.length - 1, i.length - 1);
    A.A.updateAutocompleteQuery({
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

function L(e) {
  let {
    user: t,
    guildId: r,
    channelId: n
  } = e, l = _.Ay.getName(r, n, t), s = t.getAvatarURL(r, (0, u.FT9)(u._3J.SIZE_24));
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
    n = l.useMemo(() => (0, S.mt)(e), [e]),
    s = l.useMemo(() => (0, S._b)(e), [e]),
    [a, i] = l.useState(r),
    [o, c] = l.useState(""),
    {
      filterAutocompleteResults: u,
      handleFocusFilter: d,
      autocompleteStoreState: h
    } = j({
      searchContext: e,
      filter: t,
      queryString: o
    }),
    p = l.useMemo(() => {
      let e = [],
        t = new Set;
      if (u.length > 0) u.forEach(r => {
        let l = r.user,
          a = L({
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
        if (null != l && (l.type === R.LWr.ANSWER_USERNAME_FROM || l.type === R.LWr.ANSWER_USERNAME_MENTIONS) && (0, m.sC)(l)) {
          let r = l.getData("userId"),
            a = f.default.getUser(r);
          if (null != a) {
            let r = L({
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
        let l = f.default.getUser(r);
        if (null == l) return;
        let a = L({
          user: l,
          guildId: n,
          channelId: s
        });
        t.add(r), e.unshift(a)
      }), e
    }, [h, u, a, n, s]),
    _ = l.useCallback(() => {
      i([]), c("")
    }, []),
    A = l.useCallback(() => {
      c("")
    }, []),
    y = l.useCallback(e => {
      if (0 === a.length) return null;
      let t = m.Ay[e];
      return a.map(e => {
        let r = f.default.getUser(e);
        if (null == r) return null;
        let n = E.Ay.getUserTag(r);
        return "" === n ? null : "".concat(t.key, " ").concat(n)
      }).filter(g.Vq).join(" ")
    }, [a]);
  return {
    options: p,
    query: a,
    setQuery: i,
    setQueryString: c,
    handleClearFilter: _,
    getApplyQueryString: y,
    handleFocusFilter: d,
    handleBlurFilter: A
  }
}

function C(e) {
  let t, {
    channel: r
  } = e;
  if (r.isDM()) {
    let e = r.getRecipientId(),
      n = f.default.getUser(e);
    null != n && (t = {
      type: "avatar",
      src: n.getAvatarURL(null, (0, u.FT9)(u._3J.SIZE_20))
    })
  } else t = r.isGroupDM() ? (0, n.jsx)(I.A, {
    channel: r,
    avatarSize: u._3J.SIZE_20,
    iconSize: "refresh_sm"
  }) : (0, h.gU)(r);
  return {
    value: r.id,
    label: (0, S.E3)(r),
    key: r.id,
    id: r.id,
    leading: t
  }
}

function P(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [],
    [r, n] = l.useState(t),
    [s, a] = l.useState(""),
    {
      filterAutocompleteResults: i,
      handleFocusFilter: o,
      autocompleteStoreState: c
    } = j({
      searchContext: e,
      filter: R.LWr.FILTER_IN,
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
        if (null != l && l.type === R.LWr.ANSWER_IN && (0, m.Yd)(l, e)) {
          let e = l.getData("channelIds");
          null != e && e.length > 0 && e.forEach(e => {
            let r = p.A.getChannel(e);
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
        let r = p.A.getChannel(e);
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
    f = l.useCallback(e => {
      if (0 === r.length) return null;
      let t = m.Ay[e];
      return r.map(e => {
        let r = p.A.getChannel(e);
        if (null == r) return;
        let n = (0, S.E3)(r),
          l = (0, S.TZ)(n);
        return "".concat(t.key, " ").concat(l)
      }).join(" ")
    }, [r]);
  return {
    options: u,
    query: r,
    setQuery: n,
    setQueryString: a,
    handleClearFilter: d,
    getApplyQueryString: f,
    handleFocusFilter: o,
    handleBlurFilter: h
  }
}

function w(e) {
  switch (e) {
    case v.intl.string(v.t.ZNR2fi):
      return u.qYV;
    case v.intl.string(v.t["20uQR3"]):
      return u.JD7;
    case v.intl.string(v.t.L4lxyE):
      return u.YRe;
    case v.intl.string(v.t["AV/v6i"]):
      return u.oSV;
    case v.intl.string(v.t.XM9XGP):
      return u.npA;
    case v.intl.string(v.t.TNLcpx):
      return u.xfq;
    case v.intl.string(v.t.F8Wf0e):
      return u.JMI;
    case v.intl.string(v.t.PJgX2h):
      return u.tEP;
    case v.intl.string(v.t.nrpA5E):
      return u.tuI;
    default:
      return null
  }
}

function F(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [],
    [r, n] = l.useState(t),
    {
      filterAutocompleteResults: s,
      handleFocusFilter: a
    } = j({
      searchContext: e,
      filter: R.LWr.FILTER_HAS,
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
      let t = m.Ay[e];
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
let k = () => l.useMemo(() => {
  var e, t, r;
  let n = m.Ay[R.LWr.FILTER_BEFORE],
    l = m.Ay[R.LWr.FILTER_AFTER],
    s = m.Ay[R.LWr.FILTER_ON];
  return {
    beforeFilter: null != (e = null == n ? true : n.key) ? e : "".concat(v.intl.string(v.t["qZ+7BA"]), ":"),
    afterFilter: null != (t = null == l ? true : l.key) ? t : "".concat(v.intl.string(v.t.KSDx7M), ":"),
    duringFilter: null != (r = null == s ? true : s.key) ? r : "".concat(v.intl.string(v.t.h2NzSd), ":")
  }
}, []);

function D() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [],
    [t, r] = l.useState(e),
    n = l.useCallback(() => (0, o.A)(), []),
    s = l.useCallback(e => e.date.isValid(), []),
    a = l.useMemo(() => t.filter(s), [t, s]),
    {
      beforeFilter: c,
      afterFilter: u,
      duringFilter: d
    } = k(),
    h = l.useCallback(() => ({
      query: c,
      date: i()(),
      id: n()
    }), [c, n]),
    p = l.useMemo(() => [{
      key: "Before",
      label: v.intl.string(v.t["ptL/DP"]),
      value: c
    }, {
      key: "After",
      label: v.intl.string(v.t.waQeEV),
      value: u
    }, {
      key: "During",
      label: v.intl.string(v.t.LT5TnZ),
      value: d
    }], [c, u, d]),
    f = l.useCallback(e => {
      let {
        query: t,
        index: n
      } = e;
      r(e => {
        let r = [...e];
        return r[n] = x(T({}, r[n]), {
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
        return r[n] = x(T({}, r[n]), {
          date: t
        }), r
      })
    }, []),
    _ = l.useCallback(() => {
      r(e => [...e, h()])
    }, [h]),
    E = l.useCallback(e => {
      r(t => {
        let r = [...t];
        return r.splice(e, 1), r
      })
    }, []),
    A = l.useCallback(() => {
      r([])
    }, []),
    y = l.useCallback(() => 0 === a.length ? null : a.map(e => {
      let {
        query: t,
        date: r
      } = e, n = r.format(R.ump);
      return "".concat(t, " ").concat(n)
    }).join(" "), [a]);
  return {
    options: p,
    dates: t,
    validDates: a,
    handleDateQueryChange: f,
    handleDateChange: g,
    handleAddDateFilter: _,
    handleRemoveDateFilter: E,
    handleClearDateFilter: A,
    getDateQueryString: y
  }
}

function W(e) {
  switch (e) {
    case v.intl.string(v.t.tPZo4p):
      return u.nys;
    case v.intl.string(v.t.JL7sRS):
      return u.CnV;
    case v.intl.string(v.t.WjkIKU):
      return u.XC7
  }
}

function M(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [],
    [r, n] = l.useState(t),
    {
      filterAutocompleteResults: s,
      handleFocusFilter: a
    } = j({
      searchContext: e,
      filter: R.LWr.FILTER_AUTHOR_TYPE,
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
          leading: W(r)
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
          leading: W(n)
        }), t.add(n))
      }), e
    }, [s, r]),
    o = l.useCallback(() => {
      n([])
    }, []),
    c = l.useCallback(e => {
      if (0 === r.length) return null;
      let t = m.Ay[e];
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
      let s = null != (t = null == (n = (l = m.Ay[R.LWr.FILTER_PINNED]).getAutocompletions) ? true : n.call(l, {
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
      let t = m.Ay[e];
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
  } = k(), a = (0, b.R)(t);
  return l.useMemo(() => {
    let t = {
        [R.LWr.FILTER_FROM]: [],
        [R.LWr.FILTER_MENTIONS]: [],
        [R.LWr.FILTER_HAS]: [],
        [R.LWr.FILTER_IN]: [],
        [R.LWr.FILTER_ON]: [],
        [R.LWr.FILTER_BEFORE]: [],
        [R.LWr.FILTER_AFTER]: [],
        [R.LWr.FILTER_PINNED]: null,
        [R.LWr.FILTER_AUTHOR_TYPE]: []
      },
      l = [],
      c = 0;
    e.forEach(e => {
      if (R.T2E.test(e.type)) switch (e.type) {
        case R.LWr.ANSWER_USERNAME_FROM:
          if (a.has(R.LWr.FILTER_FROM)) {
            let r = t[R.LWr.FILTER_FROM],
              n = e.getData("userId");
            r.push(n), c += 1
          }
          break;
        case R.LWr.ANSWER_USERNAME_MENTIONS:
          if (a.has(R.LWr.FILTER_MENTIONS)) {
            let r = t[R.LWr.FILTER_MENTIONS],
              n = e.getData("userId");
            r.push(n), c += 1
          }
          break;
        case R.LWr.ANSWER_HAS:
          let u = t[R.LWr.FILTER_HAS],
            d = e.getData("has");
          u.push(d), c += 1;
          break;
        case R.LWr.ANSWER_IN:
          if (a.has(R.LWr.FILTER_IN)) {
            var h;
            let r = t[R.LWr.FILTER_IN],
              n = null != (h = e.getData("channelIds")) ? h : [];
            r.push(...n), c += 1
          }
          break;
        case R.LWr.ANSWER_BEFORE:
          let p = t[R.LWr.FILTER_BEFORE],
            f = e.getData("end"),
            g = {
              query: r,
              date: i()(f),
              id: (0, o.A)()
            };
          p.push(g), l.push(g), c += 1;
          break;
        case R.LWr.ANSWER_ON:
          let _ = t[R.LWr.FILTER_ON],
            E = e.getData("start"),
            A = {
              query: s,
              date: i()(E),
              id: (0, o.A)()
            };
          _.push(A), l.push(A), c += 1;
          break;
        case R.LWr.ANSWER_AFTER:
          let y = t[R.LWr.FILTER_AFTER],
            S = e.getData("start"),
            b = {
              query: n,
              date: i()(S),
              id: (0, o.A)()
            };
          y.push(b), l.push(b), c += 1;
          break;
        case R.LWr.ANSWER_PINNED:
          let m = t[R.LWr.FILTER_PINNED],
            O = e.getData("pinned").toString();
          null === m ? m = O : "true" !== m && "true" === O && (m = O), t[R.LWr.FILTER_PINNED] = m, c += 1;
          break;
        case R.LWr.ANSWER_AUTHOR_TYPE:
          if (a.has(R.LWr.FILTER_AUTHOR_TYPE)) {
            let r = t[R.LWr.FILTER_AUTHOR_TYPE],
              n = e.getData("author_type");
            r.push(n), c += 1
          }
      }
    });
    let u = {
      [R.LWr.FILTER_FROM]: t[R.LWr.FILTER_FROM],
      [R.LWr.FILTER_MENTIONS]: t[R.LWr.FILTER_MENTIONS],
      [R.LWr.FILTER_HAS]: t[R.LWr.FILTER_HAS],
      [R.LWr.FILTER_IN]: t[R.LWr.FILTER_IN],
      dateFilters: l,
      [R.LWr.FILTER_AUTHOR_TYPE]: t[R.LWr.FILTER_AUTHOR_TYPE],
      [R.LWr.FILTER_PINNED]: t[R.LWr.FILTER_PINNED]
    };
    return {
      allPrefilledSearchFilters: t,
      totalFilters: c,
      prefilledSearchFilters: u,
      eligibleFilterTokens: a
    }
  }, [e, r, n, s, a])
}

function G(e, t) {
  return e === t || (0, s.isEqual)(e, t)
}

function K(e, t) {
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
  } = e, n = +(r.length > 0), s = +(t.length > 0), a = O.E2 - t.length - s - n, i = l.useCallback(e => {
    let {
      newFilterString: t
    } = e;
    return r.length + t.length > a
  }, [r.length, a]), o = l.useMemo(() => r.length + 18 > a, [r.length, a]), c = l.useCallback(() => {
    d.A.show({
      title: v.intl.string(v.t.nOqJcX),
      body: v.intl.string(v.t.zzAcsv),
      confirmText: v.intl.string(v.t["qcYY+/"])
    })
  }, []);
  return {
    validateFilter: l.useCallback((e, t) => !i({
      newFilterString: function(e, t) {
        let r, n = m.Ay[e];
        switch (e) {
          case R.LWr.FILTER_FROM:
          case R.LWr.FILTER_MENTIONS:
            let l = f.default.getUser(t);
            r = null == l ? t : "".concat(l.username);
            break;
          case R.LWr.FILTER_IN:
            let s = p.A.getChannel(t);
            if (null == s) r = t;
            else {
              let e = (0, S.E3)(s);
              r = (0, S.TZ)(e)
            }
            break;
          case R.LWr.FILTER_HAS:
          case R.LWr.FILTER_PINNED:
          case R.LWr.FILTER_AUTHOR_TYPE:
          default:
            r = t
        }
        return n.key + " " + r
      }(e, t)
    }) || (c(), false), [i, c]),
    validateDateFilter: l.useCallback(() => !o || (c(), false), [o, c])
  }
}