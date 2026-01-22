/** Chunk was on 1636 **/
/** chunk id: 363398, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./896048.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk627794 = require("./627794.js"),
  Chunk928348 = require("./928348.js"),
  Chunk53594 = require("./53594.js"),
  Chunk979816 = require("./979816.js"),
  Chunk268749 = require("./268749.js"),
  Chunk239705 = require("./239705.js"),
  Chunk264349 = require("./264349.jsx"),
  Chunk997509 = require("./997509.js"),
  Chunk652215 = require("./652215.js"),
  Chunk411335 = require("./411335.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk300328 = require("./300328.js");

function A(e) {
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

function v(e, t) {
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
let j = Chunk411335.uh.KEYWORD;

function h(e, t) {
  let {
    perGuildMaxCount: n
  } = s.i$[j], {
    isLoading: h,
    saveRule: E,
    errorMessage: S
  } = (0, u.S)(), {
    createNewEditingRule: _
  } = (0, u.U)(), [D, I] = l.useState(false), [P, T] = (0, c.H6)(t), {
    rulesByTriggerType: w,
    updateRule: x
  } = (0, c.wP)(t), M = l.useMemo(() => {
    var e;
    return null != (e = w[j]) ? e : []
  }, [w]), C = 0 === M.length, N = n > M.length && !C;
  if (!l.useMemo(() => (0, d.i_)(t), [t]) || null == e || 0 === e.length || null == t) return null;
  let R = e.split(" "),
    G = R.length;
  try {
    (0, a.wk)(R, m.bV)
  } catch (e) {
    return null
  }
  let L = () => {
      null != t && ((0, o.Z_)(), p.A.open(t, b.BEX.GUILD_AUTOMOD), setTimeout(() => {
        _(t, j, {
          triggerMetadata: {
            keywordFilter: [e],
            regexPatterns: [],
            allowList: []
          }
        })
      }, 400))
    },
    k = async t => {
      var n, r;
      if ((0, o.Z_)(), !await (0, g.Zy)(t.name, e)) return;
      let l = v(A({}, t), {
        triggerMetadata: v(A({}, t.triggerMetadata), {
          keywordFilter: [...null != (n = null == (r = t.triggerMetadata) ? true : r.keywordFilter) ? n : [], e]
        })
      });
      await E(l, M), x(l), null != S ? (0, i.showToast)((0, i.createToast)(y.intl.string(y.t.wH6L0r), i.ToastType.FAILURE)) : (0, i.showToast)((0, i.createToast)(y.intl.string(y.t["0rdYm2"]), i.ToastType.SUCCESS))
    }, U = (0, r.jsx)(i.Drp, {
      id: "automod-rules-loading",
      label: y.intl.string(y.t.ZTNur7)
    });
  return P || (U = (0, r.jsxs)(r.Fragment, {
    children: [C && (0, r.jsx)(i.Drp, {
      id: "add-first-rule",
      label: y.intl.string(y.t.f72Zqb),
      action: L,
      disabled: h
    }), M.map(e => {
      let t = (0, s.J6)(j).reduce((t, n) => {
        let r = e.actions.find(e => {
          let {
            type: t
          } = e;
          return n === t
        });
        if (null == r) return t;
        let l = (0, f.x)(n, r);
        return t + ", ".concat(null == l ? true : l.headerText)
      }, "");
      return (0, r.jsx)(i.iDA, {
        id: e.id,
        label: e.name,
        subtext: (0, r.jsx)(i.Text, {
          color: "text-muted",
          className: O.XX,
          variant: "text-xs/normal",
          children: t.slice(2)
        }),
        group: "automod-rule-selection",
        checked: false,
        disabled: h,
        action: () => k(e)
      }, e.id)
    }), N && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(i.bXX, {}), (0, r.jsx)(i.Drp, {
        id: "add-another-rule",
        label: y.intl.string(y.t["0K5jDE"]),
        action: L,
        disabled: h
      })]
    })]
  })), (0, r.jsx)(i.Drp, {
    id: "guild-automod-add-selection",
    label: y.intl.formatToPlainString(y.t.Kkjv1m, {
      keywordCount: G
    }),
    onFocus: () => {
      D || (I(true), T())
    },
    children: U
  })
}