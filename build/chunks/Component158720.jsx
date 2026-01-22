/** Chunk was on 47841 **/
/** chunk id: 158720, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => w
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  c = require.n(Chunk284009),
  Chunk435371 = require("./435371.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk730134 = require("./730134.jsx"),
  Chunk736653 = require("./736653.js"),
  Chunk573648 = require("./573648.js"),
  Chunk652215 = require("./652215.js"),
  Chunk783419 = require("./783419.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk493466 = require("./493466.js");

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

function O(e) {
  var t, n;
  let i, {
    theme: l,
    platform: a,
    integration: g,
    onRemove: b,
    locked: m
  } = e;
  if ((null == g ? true : g.application) != null) c()(null != g.application.bot, "bot is null"), i = (0, r.jsx)(f.A, {
    size: u._3J.SIZE_24,
    user: g.application.bot,
    className: h.w$
  });
  else if (null != a) {
    let e = (0, d.qB)(l) ? a.icon.lightSVG : a.icon.darkSVG;
    i = (0, r.jsx)("img", {
      className: h.w$,
      src: e,
      alt: x.intl.formatToPlainString(x.t.rtm15P, {
        name: a.name
      })
    })
  }
  return (0, r.jsxs)("div", {
    className: s()(h.R5, (null == a ? true : a.hasMetadata) === true || (null == g ? true : g.role_connections_metadata) != null && (null == g ? true : g.role_connections_metadata.length) > 0 ? h.mD : null),
    children: [i, (0, r.jsx)(u.Text, {
      variant: "text-md/medium",
      className: h.sK,
      children: x.intl.format(x.t.Nj0a3j, {
        platformName: null != (t = null == a ? true : a.name) ? t : null == g || null == (n = g.application) ? true : n.name
      })
    }), (0, r.jsx)(o.m_, {
      text: x.intl.string(x.t.N86XcP),
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(u.K0, {
          "aria-label": x.intl.string(x.t.N86XcP),
          variant: "icon-only",
          onClick: b,
          disabled: m,
          icon: u.PGe,
          size: "sm"
        })
      })
    })]
  })
}

function y(e) {
  let {
    titleText: t,
    fieldText: n,
    metadataField: l,
    existingPendingConfiguration: s,
    platform: a,
    applicationId: c,
    onConfigurationChange: o,
    locked: d
  } = e, f = i.useId();
  return (0, r.jsxs)("tr", {
    className: h.cm,
    children: [(0, r.jsx)("th", {
      scope: "row",
      children: (0, r.jsx)(u.AC4, {
        children: (0, r.jsx)("label", {
          htmlFor: f,
          children: t
        })
      })
    }), (0, r.jsxs)("td", {
      className: h.C4,
      children: [(0, r.jsx)(u.Text, {
        variant: "text-md/bold",
        "aria-hidden": "true",
        children: t
      }), (0, r.jsx)("div", {
        className: h.bM,
        children: (0, r.jsx)(u.Text, {
          variant: "text-md/normal",
          children: n
        })
      })]
    }), (0, r.jsx)("td", {}), (0, r.jsx)("td", {
      children: (0, r.jsx)(u.dOG, {
        id: f,
        checked: (null == s ? true : s.configuration.value) === "1",
        onChange: e => {
          var t, n;
          let r = null;
          e && (r = {
            connectionType: null != (n = null == a ? true : a.type) ? n : p.zR,
            applicationId: c,
            connectionMetadataField: l,
            operator: p.so.EQUAL,
            value: "1"
          }), o(r, null != (t = null == s ? true : s.index) ? t : false)
        },
        disabled: d
      })
    })]
  }, l)
}

function v(e) {
  var t, n, l;
  let s, a, {
      titleText: c,
      fieldText: o,
      fieldTextHook: d,
      metadataField: f,
      existingPendingConfiguration: g,
      platform: b,
      applicationId: m,
      onConfigurationChange: j,
      locked: O,
      operator: y
    } = e,
    v = (null == g ? true : g.configuration) != null,
    A = null != (t = null == g ? true : g.index) ? t : false,
    [E, N] = (l = null == g || null == (n = g.configuration) ? true : n.value, s = null != y ? y : p.so.GREATER_THAN, a = Math.round(Number(null != l ? l : 0)), s === p.so.GREATER_THAN ? a = Math.max(1, a + 1) : s === p.so.LESS_THAN && (a = Math.max(0, a - 1)), [a.toString(), s]),
    [_, S] = i.useState(E),
    T = null != d ? x.intl.format(d, {
      count: _,
      metadataHook: () => _
    }) : (0, r.jsx)("span", {
      className: h.gF,
      children: o
    }),
    I = i.useId();
  return (0, r.jsxs)("tr", {
    className: h.cm,
    children: [(0, r.jsx)("th", {
      scope: "row",
      children: (0, r.jsx)(u.AC4, {
        children: (0, r.jsx)("label", {
          htmlFor: I,
          children: c
        })
      })
    }), (0, r.jsxs)("td", {
      className: h.C4,
      children: [(0, r.jsx)(u.Text, {
        variant: "text-md/bold",
        "aria-hidden": "true",
        children: c
      }), (0, r.jsx)("div", {
        className: h.bM,
        children: (0, r.jsx)(u.Text, {
          variant: "text-md/normal",
          children: T
        })
      })]
    }), (0, r.jsx)("td", {
      children: (0, r.jsx)("div", {
        className: h.x6,
        children: (0, r.jsx)(u.ksK, {
          "aria-label": x.intl.string(x.t.FTmi9y),
          type: "number",
          value: _,
          onChange: e => {
            var t;
            let n, r;
            if (S(e), null == g) return;
            let [i, l] = (n = null != y ? y : p.so.GREATER_THAN, r = Math.round(Number(null != e ? e : 0)), n === p.so.GREATER_THAN ? r = Math.max(0, r - 1) : n === p.so.LESS_THAN && (r = Math.max(1, r + 1)), [r.toString(), n]);
            "" !== e && j({
              connectionType: null != (t = null == b ? true : b.type) ? t : p.zR,
              applicationId: m,
              connectionMetadataField: f,
              operator: l,
              value: i
            }, A)
          },
          disabled: O || !v
        })
      })
    }), (0, r.jsx)("td", {
      children: (0, r.jsx)(u.dOG, {
        id: I,
        checked: v,
        onChange: e => {
          var t, n;
          let r = null;
          e && (r = {
            connectionType: null != (n = null == b ? true : b.type) ? n : p.zR,
            applicationId: m,
            connectionMetadataField: f,
            operator: N,
            value: _
          }), j(r, null != (t = null == g ? true : g.index) ? t : false)
        },
        disabled: O
      })
    })]
  }, f)
}

function A(e) {
  let {
    children: t
  } = e;
  return (0, r.jsxs)("table", {
    className: h.mi,
    children: [(0, r.jsx)("thead", {
      children: (0, r.jsxs)("tr", {
        children: [(0, r.jsx)("th", {
          scope: "col"
        }), (0, r.jsx)("th", {
          scope: "col",
          children: (0, r.jsx)(u.AC4, {
            children: x.intl.string(x.t.TwDLVr)
          })
        }), (0, r.jsx)("th", {
          scope: "col",
          children: (0, r.jsx)(u.AC4, {
            children: x.intl.string(x.t.qDWJwX)
          })
        }), (0, r.jsx)("th", {
          scope: "col",
          children: (0, r.jsx)(u.AC4, {
            children: x.intl.string(x.t["5IF76e"])
          })
        })]
      })
    }), (0, r.jsx)("tbody", {
      children: t
    })]
  })
}

function E(e) {
  let {
    configMetadataMap: t,
    onConfigurationChange: n,
    locked: i
  } = e, l = b.A.get(m.fg2.BLUESKY);
  return (0, r.jsxs)(A, {
    children: [(0, r.jsx)(v, {
      titleText: x.intl.string(x.t.zdXqG9),
      fieldTextHook: x.t.QPrntS,
      metadataField: p.pK.CREATED_AT,
      existingPendingConfiguration: t.get(p.pK.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: x.intl.string(x.t.IE0T3q),
      fieldTextHook: x.t.Zwey2Z,
      metadataField: p.pK.BLUESKY_FOLLOWERS_COUNT,
      existingPendingConfiguration: t.get(p.pK.BLUESKY_FOLLOWERS_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: x.intl.string(x.t["LLE+Up"]),
      fieldTextHook: x.t["UK2/m/"],
      metadataField: p.pK.BLUESKY_STATUSES_COUNT,
      existingPendingConfiguration: t.get(p.pK.BLUESKY_STATUSES_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    })]
  })
}

function N(e) {
  let {
    configMetadataMap: t,
    onConfigurationChange: n,
    locked: i
  } = e, l = b.A.get(m.fg2.STEAM);
  return (0, r.jsxs)(A, {
    children: [(0, r.jsx)(v, {
      titleText: x.intl.string(x.t.zdXqG9),
      fieldTextHook: x.t.QPrntS,
      metadataField: p.pK.CREATED_AT,
      existingPendingConfiguration: t.get(p.pK.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: x.intl.string(x.t.gLs17E),
      fieldTextHook: x.t.BWDpbu,
      metadataField: p.pK.STEAM_GAME_COUNT,
      existingPendingConfiguration: t.get(p.pK.STEAM_GAME_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: x.intl.formatToPlainString(x.t.j1Gf2n, {
        gameName: x.intl.string(x.t.HKUEZo)
      }),
      fieldTextHook: x.t.OGUX78,
      metadataField: p.pK.STEAM_ITEM_COUNT_DOTA2,
      existingPendingConfiguration: t.get(p.pK.STEAM_ITEM_COUNT_DOTA2),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: x.intl.formatToPlainString(x.t.j1Gf2n, {
        gameName: x.intl.string(x.t.C8p1Sh)
      }),
      fieldTextHook: x.t.Eq7h8E,
      metadataField: p.pK.STEAM_ITEM_COUNT_TF2,
      existingPendingConfiguration: t.get(p.pK.STEAM_ITEM_COUNT_TF2),
      platform: l,
      onConfigurationChange: n,
      locked: i
    })]
  })
}

function _(e) {
  let {
    configMetadataMap: t,
    onConfigurationChange: n,
    locked: i
  } = e, l = b.A.get(m.fg2.TWITTER);
  return (0, r.jsxs)(A, {
    children: [(0, r.jsx)(v, {
      titleText: x.intl.string(x.t.zdXqG9),
      fieldTextHook: x.t.QPrntS,
      metadataField: p.pK.CREATED_AT,
      existingPendingConfiguration: t.get(p.pK.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: x.intl.string(x.t.wbvDM5),
      fieldTextHook: x.t.Zwey2Z,
      metadataField: p.pK.TWITTER_FOLLOWERS_COUNT,
      existingPendingConfiguration: t.get(p.pK.TWITTER_FOLLOWERS_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: x.intl.string(x.t["1B3DVi"]),
      fieldTextHook: x.t["lrmh/U"],
      metadataField: p.pK.TWITTER_STATUSES_COUNT,
      existingPendingConfiguration: t.get(p.pK.TWITTER_STATUSES_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: x.intl.string(x.t.yz2CIA),
      fieldText: x.intl.string(x.t.E2iT8K),
      metadataField: p.pK.TWITTER_VERIFIED,
      existingPendingConfiguration: t.get(p.pK.TWITTER_VERIFIED),
      platform: l,
      onConfigurationChange: n,
      locked: i
    })]
  })
}

function S(e) {
  let {
    configMetadataMap: t,
    onConfigurationChange: n,
    locked: i
  } = e, l = b.A.get(m.fg2.REDDIT);
  return (0, r.jsxs)(A, {
    children: [(0, r.jsx)(v, {
      titleText: x.intl.string(x.t.zdXqG9),
      fieldTextHook: x.t.QPrntS,
      metadataField: p.pK.CREATED_AT,
      existingPendingConfiguration: t.get(p.pK.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: x.intl.string(x.t["3Xsrov"]),
      fieldTextHook: x.t.A4zKul,
      metadataField: p.pK.REDDIT_TOTAL_KARMA,
      existingPendingConfiguration: t.get(p.pK.REDDIT_TOTAL_KARMA),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: x.intl.string(x.t.oWM95M),
      fieldText: x.intl.string(x.t["0cKdka"]),
      metadataField: p.pK.REDDIT_MOD,
      existingPendingConfiguration: t.get(p.pK.REDDIT_MOD),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: x.intl.string(x.t["06rDHU"]),
      fieldText: x.intl.string(x.t.kCAN58),
      metadataField: p.pK.REDDIT_GOLD,
      existingPendingConfiguration: t.get(p.pK.REDDIT_GOLD),
      platform: l,
      onConfigurationChange: n,
      locked: i
    })]
  })
}

function T(e) {
  let {
    configMetadataMap: t,
    onConfigurationChange: n,
    locked: i
  } = e, l = b.A.get(m.fg2.PAYPAL);
  return (0, r.jsxs)(A, {
    children: [(0, r.jsx)(v, {
      titleText: x.intl.string(x.t.zdXqG9),
      fieldTextHook: x.t.QPrntS,
      metadataField: p.pK.CREATED_AT,
      existingPendingConfiguration: t.get(p.pK.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: x.intl.string(x.t.IhXLyx),
      fieldText: x.intl.string(x.t["0JyE8I"]),
      metadataField: p.pK.PAYPAL_VERIFIED,
      existingPendingConfiguration: t.get(p.pK.PAYPAL_VERIFIED),
      platform: l,
      onConfigurationChange: n,
      locked: i
    })]
  })
}

function I(e) {
  let {
    configMetadataMap: t,
    onConfigurationChange: n,
    locked: i
  } = e, l = b.A.get(m.fg2.EBAY);
  return (0, r.jsxs)(A, {
    children: [(0, r.jsx)(v, {
      titleText: x.intl.string(x.t.zdXqG9),
      fieldTextHook: x.t.QPrntS,
      metadataField: p.pK.CREATED_AT,
      existingPendingConfiguration: t.get(p.pK.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: x.intl.string(x.t.AuMxfz),
      fieldTextHook: x.t.IpQ4E8,
      metadataField: p.pK.EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
      existingPendingConfiguration: t.get(p.pK.EBAY_POSITIVE_FEEDBACK_PERCENTAGE),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: x.intl.string(x.t.WzvoSi),
      fieldTextHook: x.t.RH3VAx,
      metadataField: p.pK.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT,
      existingPendingConfiguration: t.get(p.pK.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: x.intl.string(x.t.VuSFzp),
      fieldTextHook: x.t.sn3m7v,
      metadataField: p.pK.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT,
      existingPendingConfiguration: t.get(p.pK.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i,
      operator: p.so.LESS_THAN
    }), (0, r.jsx)(y, {
      titleText: x.intl.string(x.t.TEEYwa),
      fieldText: x.intl.string(x.t["39wASN"]),
      metadataField: p.pK.EBAY_TOP_RATED_SELLER,
      existingPendingConfiguration: t.get(p.pK.EBAY_TOP_RATED_SELLER),
      platform: l,
      onConfigurationChange: n,
      locked: i
    })]
  })
}

function C(e) {
  let {
    configMetadataMap: t,
    onConfigurationChange: n,
    locked: i
  } = e, l = b.A.get(m.fg2.TIKTOK);
  return (0, r.jsxs)(A, {
    children: [(0, r.jsx)(y, {
      titleText: x.intl.string(x.t.QHHwRR),
      fieldText: x.intl.string(x.t.E2iT8K),
      metadataField: p.pK.TIKTOK_VERIFIED,
      existingPendingConfiguration: t.get(p.pK.TIKTOK_VERIFIED),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: x.intl.string(x.t.WUSIHj),
      fieldTextHook: x.t.Zwey2Z,
      metadataField: p.pK.TIKTOK_FOLLOWER_COUNT,
      existingPendingConfiguration: t.get(p.pK.TIKTOK_FOLLOWER_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: x.intl.string(x.t.w1IVQk),
      fieldTextHook: x.t["Ueeex/"],
      metadataField: p.pK.TIKTOK_FOLLOWING_COUNT,
      existingPendingConfiguration: t.get(p.pK.TIKTOK_FOLLOWING_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: x.intl.string(x.t["1cFXJu"]),
      fieldTextHook: x.t.uq2UuO,
      metadataField: p.pK.TIKTOK_LIKES_COUNT,
      existingPendingConfiguration: t.get(p.pK.TIKTOK_LIKES_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    })]
  })
}

function P(e) {
  let {
    configMetadataMap: t,
    onConfigurationChange: n,
    locked: i,
    integration: l
  } = e;
  return null == l || null == l.role_connections_metadata ? null : l.role_connections_metadata.map(e => {
    var s, a;
    let c;
    switch (e.type) {
      case p.g1.INTEGER_LESS_THAN_EQUAL:
      case p.g1.DATETIME_LESS_THAN_EQUAL:
        c = p.so.LESS_THAN;
        break;
      case p.g1.INTEGER_GREATER_THAN_EQUAL:
      case p.g1.DATETIME_GREATER_THAN_EQUAL:
        c = p.so.GREATER_THAN;
        break;
      case p.g1.INTEGER_EQUAL:
      case p.g1.BOOLEAN_EQUAL:
        c = p.so.EQUAL;
        break;
      case p.g1.INTEGER_NOT_EQUAL:
      case p.g1.BOOLEAN_NOT_EQUAL:
        c = p.so.NOT_EQUAL;
        break;
      default:
        return null
    }
    switch (e.type) {
      case p.g1.INTEGER_LESS_THAN_EQUAL:
      case p.g1.INTEGER_GREATER_THAN_EQUAL:
      case p.g1.INTEGER_EQUAL:
      case p.g1.INTEGER_NOT_EQUAL:
      case p.g1.DATETIME_LESS_THAN_EQUAL:
      case p.g1.DATETIME_GREATER_THAN_EQUAL:
        return (0, r.jsx)(v, {
          titleText: e.name,
          fieldText: e.description,
          metadataField: e.key,
          existingPendingConfiguration: t.get(e.key),
          platform: null,
          onConfigurationChange: n,
          locked: i,
          operator: c,
          applicationId: null == (s = l.application) ? true : s.id
        }, e.key);
      case p.g1.BOOLEAN_EQUAL:
      case p.g1.BOOLEAN_NOT_EQUAL:
        return (0, r.jsx)(y, {
          titleText: e.name,
          fieldText: e.description,
          metadataField: e.key,
          existingPendingConfiguration: t.get(e.key),
          platform: null,
          onConfigurationChange: n,
          locked: i,
          operator: c,
          applicationId: null == (a = l.application) ? true : a.id
        }, e.key)
    }
  })
}

function w(e) {
  let t, {
      configurationItems: n,
      onConfigurationChange: i,
      locked: l,
      integrations: s
    } = e,
    a = (0, g.Ay)();
  if (n.length < 1) return null;
  let c = n[0].configuration.applicationId,
    o = null != c ? null == s ? true : s.find(e => {
      var t;
      return (null == (t = e.application) ? true : t.id) === c
    }) : true;
  if (null != c && null == o) return null;
  let d = null;
  try {
    d = b.A.get(n[0].configuration.connectionType)
  } catch (e) {}
  let u = new Map;
  n.forEach(e => {
    null != e.configuration.connectionMetadataField ? u.set(e.configuration.connectionMetadataField, e) : null == e.configuration.value && null == e.configuration.operator && null == e.configuration.connectionMetadataField && (t = e)
  });
  let f = {
      configMetadataMap: u,
      onConfigurationChange: i,
      locked: l
    },
    p = null;
  switch (null == d ? true : d.type) {
    case m.fg2.STEAM:
      p = (0, r.jsx)(N, j({}, f));
      break;
    case m.fg2.TWITTER:
      p = (0, r.jsx)(_, j({}, f));
      break;
    case m.fg2.REDDIT:
      p = (0, r.jsx)(S, j({}, f));
      break;
    case m.fg2.BLUESKY:
      p = (0, r.jsx)(E, j({}, f));
      break;
    case m.fg2.PAYPAL:
      p = (0, r.jsx)(T, j({}, f));
      break;
    case m.fg2.EBAY:
      p = (0, r.jsx)(I, j({}, f));
      break;
    case m.fg2.TIKTOK:
      p = (0, r.jsx)(C, j({}, f));
      break;
    default:
      var x, y;
      p = (0, r.jsx)(P, (x = j({}, f), y = y = {
        integration: o
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(x, Object.getOwnPropertyDescriptors(y)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(y)).forEach(function(e) {
        Object.defineProperty(x, e, Object.getOwnPropertyDescriptor(y, e))
      }), x))
  }
  return (0, r.jsxs)("div", {
    className: h.kL,
    children: [(0, r.jsx)(O, {
      theme: a,
      platform: d,
      integration: o,
      onRemove: () => i(null, t.index),
      locked: l
    }), p]
  })
}