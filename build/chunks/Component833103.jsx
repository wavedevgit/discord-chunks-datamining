/** Chunk was on 49152 **/
/** chunk id: 833103, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  HJ: () => _,
  Z2: () => C,
  Zc: () => j,
  fI: () => S,
  hE: () => I,
  ur: () => v
}), require("./388685.js"), require("./539854.js"), require("./290780.js"), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk772848 = require("./772848.js"),
  Chunk481060 = require("./481060.js"),
  Chunk592125 = require("./592125.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk738018 = require("./738018.js"),
  Chunk607802 = require("./607802.js"),
  Chunk532428 = require("./532428.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function b(e) {
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

function y(e, t) {
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

function x(e) {
  let {
    user: t,
    guildId: n,
    channelId: r
  } = e, i = d.ZP.getName(n, r, t);
  return {
    value: t.id,
    label: i,
    key: t.id
  }
}

function _(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [],
    r = i.useMemo(() => (0, p.s5)(e), [e]),
    l = i.useMemo(() => (0, p.AH)(e), [e]),
    [a, s] = i.useState(n),
    [o, c] = i.useState(""),
    d = i.useMemo(() => {
      let n = h.Z.getFilterResults(e, t, o);
      if (0 === n.length && 0 === a.length) return [];
      let i = [],
        s = new Set;
      return n.length > 0 && n.forEach(e => {
        let t = e.user,
          n = x({
            user: t,
            guildId: r,
            channelId: l
          });
        s.add(t.id), i.push(n)
      }), a.length > 0 && a.forEach(e => {
        if (s.has(e)) return;
        let t = u.default.getUser(e);
        if (null == t) return;
        let n = x({
          user: t,
          guildId: r,
          channelId: l
        });
        s.add(e), i.unshift(n)
      }), i
    }, [e, t, o, a, r, l]),
    g = i.useCallback(() => {
      s([]), c("")
    }, []),
    m = i.useCallback(e => {
      if (0 === a.length) return null;
      let t = f.ZP[e];
      return a.map(e => {
        let n = u.default.getUser(e);
        return "".concat(t.key, " ").concat(null == n ? true : n.username)
      }).join(" ")
    }, [a]);
  return {
    options: d,
    query: a,
    setQuery: s,
    setQueryString: c,
    handleClearFilter: g,
    getApplyQueryString: m
  }
}

function j(e) {
  return {
    filter: false,
    closeOnSelect: false,
    renderOptionPrefix: i.useCallback(t => {
      var n;
      if (null == t) return;
      let i = u.default.getUser(t.value);
      if (null == i) return;
      let l = null != (n = i.getAvatarURL(e, 80)) ? n : i.avatar;
      return (0, r.jsx)(o.qEK, {
        src: l,
        size: o.EFr.SIZE_16,
        "aria-hidden": true
      })
    }, [e]),
    renderOptionSuffix: i.useCallback(e => {
      if (null == e) return;
      let t = u.default.getUser(e.value);
      if (null != t) return (0, r.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: t.username
      })
    }, [])
  }
}

function O(e) {
  let {
    channel: t
  } = e;
  return {
    value: t.id,
    label: (0, p.nl)(t),
    key: t.id
  }
}

function v(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [],
    [n, r] = i.useState(t),
    [l, a] = i.useState(""),
    s = i.useMemo(() => {
      let t = h.Z.getFilterResults(e, g.dCx.FILTER_IN, l);
      if (0 === t.length && 0 === n.length) return [];
      let r = [],
        i = new Set;
      return t.length > 0 && t.forEach(e => {
        let t = e.channel,
          n = O({
            channel: t
          });
        i.add(t.id), r.push(n)
      }), n.length > 0 && n.forEach(e => {
        if (i.has(e)) return;
        let t = c.Z.getChannel(e);
        if (null == t) return;
        let n = O({
          channel: t
        });
        i.add(e), r.unshift(n)
      }), r
    }, [e, l, n]),
    o = i.useCallback(() => {
      r([]), a("")
    }, []),
    u = i.useCallback(e => {
      if (0 === n.length) return null;
      let t = f.ZP[e];
      return n.map(e => {
        let n = c.Z.getChannel(e);
        if (null == n) return;
        let r = (0, p.nl)(n);
        return "".concat(t.key, " ").concat(r)
      }).join(" ")
    }, [n]);
  return {
    options: s,
    query: n,
    setQuery: r,
    setQueryString: a,
    handleClearFilter: o,
    getApplyQueryString: u
  }
}

function C(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [],
    [n, r] = i.useState(t),
    l = i.useMemo(() => {
      let t = h.Z.getFilterResults(e, g.dCx.FILTER_HAS, "");
      if (0 === t.length) return [];
      let n = [];
      return n.push(...t.map(e => {
        let {
          text: t
        } = e;
        return {
          value: t,
          label: t,
          key: t
        }
      })), n
    }, [e]),
    a = i.useCallback(() => {
      r([])
    }, []),
    s = i.useCallback(e => {
      if (0 === n.length) return null;
      let t = f.ZP[e];
      return n.map(e => "".concat(t.key, " ").concat(e)).join(" ")
    }, [n]);
  return {
    options: l,
    query: n,
    setQuery: r,
    handleClearFilter: a,
    getApplyQueryString: s
  }
}
let E = () => Chunk73800.useMemo(() => {
  var e, t, n;
  let r = Chunk532428.ZP[Chunk981631.dCx.FILTER_BEFORE],
    i = Chunk532428.ZP[Chunk981631.dCx.FILTER_AFTER],
    l = Chunk532428.ZP[Chunk981631.dCx.FILTER_ON];
  return {
    beforeFilter: null != (e = null == Chunk255367 ? true : Chunk255367.key) ? module : "".concat(Chunk388032.intl.string(Chunk388032.t["qZ+7BA"]), ":"),
    afterFilter: null != (t = null == Chunk73800 ? true : Chunk73800.key) ? exports : "".concat(Chunk388032.intl.string(Chunk388032.t.KSDx7O), ":"),
    duringFilter: null != (n = null == Chunk913527 ? true : Chunk913527.key) ? require : "".concat(Chunk388032.intl.string(Chunk388032.t.h2NzSU), ":")
  }
}, []);

function S() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [],
    [t, n] = Chunk73800.useState(module),
    r = Chunk73800.useCallback(() => (0, Chunk772848.Z)(), []),
    l = Chunk73800.useCallback(e => e.date.isValid(), []),
    o = Chunk73800.useMemo(() => exports.filter(Chunk913527), [exports, Chunk913527]),
    {
      beforeFilter: c,
      afterFilter: u,
      duringFilter: d
    } = E(),
    h = Chunk73800.useCallback(() => ({
      query: Chunk592125,
      date: a()(),
      id: Chunk255367()
    }), [Chunk592125, Chunk255367]),
    p = Chunk73800.useMemo(() => [{
      key: "Before",
      label: Chunk388032.intl.string(Chunk388032.t["ptL/DA"]),
      value: Chunk592125
    }, {
      key: "After",
      label: Chunk388032.intl.string(Chunk388032.t.waQeER),
      value: Chunk594174
    }, {
      key: "During",
      label: Chunk388032.intl.string(Chunk388032.t.LT5TnZ),
      value: Chunk5192
    }], [Chunk592125, Chunk594174, Chunk5192]),
    f = Chunk73800.useCallback(e => {
      let {
        query: t,
        index: r
      } = e;
      n(e => {
        let n = [...e];
        return n[r] = y(b({}, n[r]), {
          query: t
        }), n
      })
    }, []),
    x = Chunk73800.useCallback(e => {
      let {
        date: t,
        index: r
      } = e;
      n(e => {
        let n = [...e];
        return n[r] = y(b({}, n[r]), {
          date: t
        }), n
      })
    }, []),
    _ = Chunk73800.useCallback(() => {
      require(e => [...e, h()])
    }, [Chunk738018]),
    j = Chunk73800.useCallback(e => {
      n(t => {
        let n = [...t];
        return n.splice(e, 1), n
      })
    }, []),
    O = Chunk73800.useCallback(() => {
      require([])
    }, []),
    v = Chunk73800.useCallback(() => 0 === Chunk481060.length ? null : Chunk481060.map(e => {
      let {
        query: t,
        date: n
      } = e, r = n.format(g.b2L);
      return "".concat(t, " ").concat(r)
    }).join(" "), [Chunk481060]);
  return {
    options: Chunk607802,
    dates: exports,
    validDates: Chunk481060,
    handleDateQueryChange: Chunk532428,
    handleDateChange: x,
    handleAddDateFilter: _,
    handleRemoveDateFilter: j,
    handleClearDateFilter: O,
    getDateQueryString: v
  }
}

function I(e) {
  let {
    beforeFilter: t,
    afterFilter: n,
    duringFilter: r
  } = E();
  return i.useMemo(() => {
    let i = {
        [g.dCx.FILTER_FROM]: [],
        [g.dCx.FILTER_MENTIONS]: [],
        [g.dCx.FILTER_HAS]: [],
        [g.dCx.FILTER_IN]: [],
        [g.dCx.FILTER_ON]: [],
        [g.dCx.FILTER_BEFORE]: [],
        [g.dCx.FILTER_AFTER]: []
      },
      l = 0;
    return e.forEach(e => {
      if (g.KA4.test(e.type)) switch (l += 1, e.type) {
        case g.dCx.ANSWER_USERNAME_FROM:
          let o = i[g.dCx.FILTER_FROM],
            c = e.getData("userId");
          o.push(c);
          break;
        case g.dCx.ANSWER_USERNAME_MENTIONS:
          let u = i[g.dCx.FILTER_MENTIONS],
            d = e.getData("userId");
          u.push(d);
          break;
        case g.dCx.ANSWER_HAS:
          let h = i[g.dCx.FILTER_HAS],
            p = e.getData("has");
          h.push(p);
          break;
        case g.dCx.ANSWER_IN:
          var f;
          let m = i[g.dCx.FILTER_IN],
            b = (null != (f = e.getData("channels")) ? f : []).map(e => e.id);
          m.push(...b);
          break;
        case g.dCx.ANSWER_BEFORE:
          let y = i[g.dCx.FILTER_BEFORE],
            x = e.getData("end"),
            _ = a()(x);
          y.push({
            query: t,
            date: _,
            id: (0, s.Z)()
          });
          break;
        case g.dCx.ANSWER_ON:
          let j = i[g.dCx.FILTER_ON],
            O = e.getData("start"),
            v = a()(O);
          j.push({
            query: r,
            date: v,
            id: (0, s.Z)()
          });
          break;
        case g.dCx.ANSWER_AFTER:
          let C = i[g.dCx.FILTER_AFTER],
            E = e.getData("start"),
            S = a()(E);
          C.push({
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