/** Chunk was on 37220 **/
/** chunk id: 786095, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk236413 = require("./236413.js"),
  Chunk727072 = require("./727072.js"),
  Chunk85960 = require("./85960.js"),
  Chunk676317 = require("./676317.js"),
  Chunk65912 = require("./65912.js"),
  Chunk556012 = require("./556012.js"),
  Chunk572456 = require("./572456.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk981631 = require("./981631.js"),
  Chunk273504 = require("./273504.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk335260 = require("./335260.js");

function h(e) {
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
let j = Chunk273504.fX.KEYWORD;

function E(e, t) {
  let {
    perGuildMaxCount: n
  } = c.I6[j], {
    isLoading: E,
    saveRule: S,
    errorMessage: P
  } = (0, d.w)(), {
    createNewEditingRule: _
  } = (0, d.V)(), [Z, I] = i.useState(false), [T, N] = (0, s.I2)(t), {
    rulesByTriggerType: M,
    updateRule: w
  } = (0, s.pH)(t), x = i.useMemo(() => {
    var e;
    return null != (e = M[j]) ? e : []
  }, [M]), A = 0 === x.length, D = n > x.length && !A;
  if (!i.useMemo(() => (0, u.ze)(t), [t]) || null == e || 0 === e.length || null == t) return null;
  let C = e.split(" "),
    L = C.length;
  try {
    (0, o.km)(C, m.RH)
  } catch (e) {
    return null
  }
  let R = () => {
      null != t && ((0, a.Zy)(), b.Z.open(t, p.pNK.GUILD_AUTOMOD), setTimeout(() => {
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
      if ((0, a.Zy)(), !await (0, g.XN)(t.name, e)) return;
      let i = v(h({}, t), {
        triggerMetadata: v(h({}, t.triggerMetadata), {
          keywordFilter: [...null != (r = null == (n = t.triggerMetadata) ? true : n.keywordFilter) ? r : [], e]
        })
      });
      await S(i, x), w(i), null != P ? (0, l.showToast)((0, l.createToast)(O.intl.string(O.t.wH6L0r), l.ToastType.FAILURE)) : (0, l.showToast)((0, l.createToast)(O.intl.string(O.t["0rdYm2"]), l.ToastType.SUCCESS))
    }, G = (0, r.jsx)(l.sNh, {
      id: "automod-rules-loading",
      label: O.intl.string(O.t.ZTNur7)
    });
  return T || (G = (0, r.jsxs)(r.Fragment, {
    children: [A && (0, r.jsx)(l.sNh, {
      id: "add-first-rule",
      label: O.intl.string(O.t.f72Zqb),
      action: R,
      disabled: E
    }), x.map(e => {
      let t = (0, c.V9)(j).reduce((t, n) => {
        let r = e.actions.find(e => {
          let {
            type: t
          } = e;
          return n === t
        });
        if (null == r) return t;
        let i = (0, f.c)(n, r);
        return t + ", ".concat(null == i ? true : i.headerText)
      }, "");
      return (0, r.jsx)(l.k5B, {
        id: e.id,
        label: e.name,
        subtext: (0, r.jsx)(l.Text, {
          color: "text-muted",
          className: y.actionTextHeader,
          variant: "text-xs/normal",
          children: t.slice(2)
        }),
        group: "automod-rule-selection",
        checked: false,
        disabled: E,
        action: () => k(e)
      }, e.id)
    }), D && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.Clw, {}), (0, r.jsx)(l.sNh, {
        id: "add-another-rule",
        label: O.intl.string(O.t["0K5jDE"]),
        action: R,
        disabled: E
      })]
    })]
  })), (0, r.jsx)(l.sNh, {
    id: "guild-automod-add-selection",
    label: O.intl.formatToPlainString(O.t.Kkjv1m, {
      keywordCount: L
    }),
    onFocus: () => {
      Z || (I(true), N())
    },
    children: G
  })
}