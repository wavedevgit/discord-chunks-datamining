/** Chunk was on web.js **/
/** chunk id: 786095, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js"), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk466745 = require("./466745.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = Chunk273504.fX.KEYWORD,
  T = 400;

function S(e, t) {
  let {
    perGuildMaxCount: n
  } = c.I6[I], {
    isLoading: b,
    saveRule: O,
    errorMessage: S
  } = (0, d.w)(), {
    createNewEditingRule: A
  } = (0, d.V)(), [N, C] = i.useState(false), [R, P] = (0, l.I2)(t), {
    rulesByTriggerType: w,
    updateRule: D
  } = (0, l.pH)(t), L = i.useMemo(() => {
    var e;
    return null != (e = w[I]) ? e : []
  }, [w]), x = 0 === L.length, M = n > L.length && !x;
  if (!i.useMemo(() => (0, u.ze)(t), [t]) || null == e || 0 === e.length || null == t) return null;
  let k = e.split(" "),
    j = k.length;
  try {
    (0, s.km)(k, m.RH)
  } catch (e) {
    return null
  }
  let U = () => {
      N || (C(true), P())
    },
    G = () => {
      null != t && ((0, a.Zy)(), p.Z.open(t, h.pNK.GUILD_AUTOMOD), setTimeout(() => {
        A(t, I, {
          triggerMetadata: {
            keywordFilter: [e],
            regexPatterns: [],
            allowList: []
          }
        })
      }, T))
    },
    B = async t => {
      var n, r;
      if ((0, a.Zy)(), !await (0, _.XN)(t.name, e)) return;
      let i = v(y({}, t), {
        triggerMetadata: v(y({}, t.triggerMetadata), {
          keywordFilter: [...null != (r = null == (n = t.triggerMetadata) ? true : n.keywordFilter) ? r : [], e]
        })
      });
      await O(i, L), D(i), null != S ? (0, o.showToast)((0, o.createToast)(g.intl.string(g.t.wH6L0t), o.ToastType.FAILURE)) : (0, o.showToast)((0, o.createToast)(g.intl.string(g.t["0rdYm5"]), o.ToastType.SUCCESS))
    }, Z = (0, r.jsx)(o.sNh, {
      id: "automod-rules-loading",
      label: g.intl.string(g.t.ZTNur6)
    });
  return R || (Z = (0, r.jsxs)(r.Fragment, {
    children: [x && (0, r.jsx)(o.sNh, {
      id: "add-first-rule",
      label: g.intl.string(g.t.f72Zqa),
      action: G,
      disabled: b
    }), L.map(e => {
      let t = (0, c.V9)(I).reduce((t, n) => {
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
      return (0, r.jsx)(o.k5B, {
        id: e.id,
        label: e.name,
        subtext: (0, r.jsx)(o.Text, {
          color: "text-muted",
          className: E.actionTextHeader,
          variant: "text-xs/normal",
          children: t.slice(2)
        }),
        group: "automod-rule-selection",
        checked: false,
        disabled: b,
        action: () => B(e)
      }, e.id)
    }), M && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.Clw, {}), (0, r.jsx)(o.sNh, {
        id: "add-another-rule",
        label: g.intl.string(g.t["0K5jDA"]),
        action: G,
        disabled: b
      })]
    })]
  })), (0, r.jsx)(o.sNh, {
    id: "guild-automod-add-selection",
    label: g.intl.formatToPlainString(g.t.Kkjv1t, {
      keywordCount: j
    }),
    onFocus: U,
    children: Z
  })
}