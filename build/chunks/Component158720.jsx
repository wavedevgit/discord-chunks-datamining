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
  o = require.n(Chunk284009),
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

function _(e) {
  var t, n;
  let i, {
    theme: l,
    platform: a,
    integration: m,
    onRemove: p,
    locked: f
  } = e;
  if ((null == m ? true : m.application) != null) o()(null != m.application.bot, "bot is null"), i = (0, r.jsx)(g.A, {
    size: u._3J.SIZE_24,
    user: m.application.bot,
    className: x.w$
  });
  else if (null != a) {
    let e = (0, d.qB)(l) ? a.icon.lightSVG : a.icon.darkSVG;
    i = (0, r.jsx)("img", {
      className: x.w$,
      src: e,
      alt: h.intl.formatToPlainString(h.t.rtm15P, {
        name: a.name
      })
    })
  }
  return (0, r.jsxs)("div", {
    className: s()(x.R5, (null == a ? true : a.hasMetadata) === true || (null == m ? true : m.role_connections_metadata) != null && (null == m ? true : m.role_connections_metadata.length) > 0 ? x.mD : null),
    children: [i, (0, r.jsx)(u.Text, {
      variant: "text-md/medium",
      className: x.sK,
      children: h.intl.format(h.t.Nj0a3j, {
        platformName: null != (t = null == a ? true : a.name) ? t : null == m || null == (n = m.application) ? true : n.name
      })
    }), (0, r.jsx)(c.m_, {
      text: h.intl.string(h.t.N86XcP),
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(u.K0, {
          "aria-label": h.intl.string(h.t.N86XcP),
          variant: "icon-only",
          onClick: p,
          disabled: f,
          icon: u.PGe,
          size: "sm"
        })
      })
    })]
  })
}

function O(e) {
  let {
    titleText: t,
    fieldText: n,
    metadataField: l,
    existingPendingConfiguration: s,
    platform: a,
    applicationId: o,
    onConfigurationChange: c,
    locked: d
  } = e, g = i.useId();
  return (0, r.jsxs)("tr", {
    className: x.cm,
    children: [(0, r.jsx)("th", {
      scope: "row",
      children: (0, r.jsx)(u.AC4, {
        children: (0, r.jsx)("label", {
          htmlFor: g,
          children: t
        })
      })
    }), (0, r.jsxs)("td", {
      className: x.C4,
      children: [(0, r.jsx)(u.Text, {
        variant: "text-md/bold",
        "aria-hidden": "true",
        children: t
      }), (0, r.jsx)("div", {
        className: x.bM,
        children: (0, r.jsx)(u.Text, {
          variant: "text-md/normal",
          children: n
        })
      })]
    }), (0, r.jsx)("td", {}), (0, r.jsx)("td", {
      children: (0, r.jsx)(u.dOG, {
        id: g,
        checked: (null == s ? true : s.configuration.value) === "1",
        onChange: e => {
          var t, n;
          let r = null;
          e && (r = {
            connectionType: null != (n = null == a ? true : a.type) ? n : b.zR,
            applicationId: o,
            connectionMetadataField: l,
            operator: b.so.EQUAL,
            value: "1"
          }), c(r, null != (t = null == s ? true : s.index) ? t : false)
        },
        disabled: d
      })
    })]
  }, l)
}

function v(e) {
  var t, n, l;
  let s, a, {
      titleText: o,
      fieldText: c,
      fieldTextHook: d,
      metadataField: g,
      existingPendingConfiguration: m,
      platform: p,
      applicationId: f,
      onConfigurationChange: j,
      locked: _,
      operator: O
    } = e,
    v = (null == m ? true : m.configuration) != null,
    y = null != (t = null == m ? true : m.index) ? t : false,
    [A, E] = (l = null == m || null == (n = m.configuration) ? true : n.value, s = null != O ? O : b.so.GREATER_THAN, a = Math.round(Number(null != l ? l : 0)), s === b.so.GREATER_THAN ? a = Math.max(1, a + 1) : s === b.so.LESS_THAN && (a = Math.max(0, a - 1)), [a.toString(), s]),
    [N, S] = i.useState(A),
    I = null != d ? h.intl.format(d, {
      count: N,
      metadataHook: () => N
    }) : (0, r.jsx)("span", {
      className: x.gF,
      children: c
    }),
    T = i.useId();
  return (0, r.jsxs)("tr", {
    className: x.cm,
    children: [(0, r.jsx)("th", {
      scope: "row",
      children: (0, r.jsx)(u.AC4, {
        children: (0, r.jsx)("label", {
          htmlFor: T,
          children: o
        })
      })
    }), (0, r.jsxs)("td", {
      className: x.C4,
      children: [(0, r.jsx)(u.Text, {
        variant: "text-md/bold",
        "aria-hidden": "true",
        children: o
      }), (0, r.jsx)("div", {
        className: x.bM,
        children: (0, r.jsx)(u.Text, {
          variant: "text-md/normal",
          children: I
        })
      })]
    }), (0, r.jsx)("td", {
      children: (0, r.jsx)("div", {
        className: x.x6,
        children: (0, r.jsx)(u.ksK, {
          "aria-label": h.intl.string(h.t.FTmi9y),
          type: "number",
          value: N,
          onChange: e => {
            var t;
            let n, r;
            if (S(e), null == m) return;
            let [i, l] = (n = null != O ? O : b.so.GREATER_THAN, r = Math.round(Number(null != e ? e : 0)), n === b.so.GREATER_THAN ? r = Math.max(0, r - 1) : n === b.so.LESS_THAN && (r = Math.max(1, r + 1)), [r.toString(), n]);
            "" !== e && j({
              connectionType: null != (t = null == p ? true : p.type) ? t : b.zR,
              applicationId: f,
              connectionMetadataField: g,
              operator: l,
              value: i
            }, y)
          },
          disabled: _ || !v
        })
      })
    }), (0, r.jsx)("td", {
      children: (0, r.jsx)(u.dOG, {
        id: T,
        checked: v,
        onChange: e => {
          var t, n;
          let r = null;
          e && (r = {
            connectionType: null != (n = null == p ? true : p.type) ? n : b.zR,
            applicationId: f,
            connectionMetadataField: g,
            operator: E,
            value: N
          }), j(r, null != (t = null == m ? true : m.index) ? t : false)
        },
        disabled: _
      })
    })]
  }, g)
}

function y(e) {
  let {
    children: t
  } = e;
  return (0, r.jsxs)("table", {
    className: x.mi,
    children: [(0, r.jsx)("thead", {
      children: (0, r.jsxs)("tr", {
        children: [(0, r.jsx)("th", {
          scope: "col"
        }), (0, r.jsx)("th", {
          scope: "col",
          children: (0, r.jsx)(u.AC4, {
            children: h.intl.string(h.t.TwDLVr)
          })
        }), (0, r.jsx)("th", {
          scope: "col",
          children: (0, r.jsx)(u.AC4, {
            children: h.intl.string(h.t.qDWJwX)
          })
        }), (0, r.jsx)("th", {
          scope: "col",
          children: (0, r.jsx)(u.AC4, {
            children: h.intl.string(h.t["5IF76e"])
          })
        })]
      })
    }), (0, r.jsx)("tbody", {
      children: t
    })]
  })
}

function A(e) {
  let {
    configMetadataMap: t,
    onConfigurationChange: n,
    locked: i
  } = e, l = p.A.get(f.fg2.BLUESKY);
  return (0, r.jsxs)(y, {
    children: [(0, r.jsx)(v, {
      titleText: h.intl.string(h.t.zdXqG9),
      fieldTextHook: h.t.QPrntS,
      metadataField: b.pK.CREATED_AT,
      existingPendingConfiguration: t.get(b.pK.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: h.intl.string(h.t.IE0T3q),
      fieldTextHook: h.t.Zwey2Z,
      metadataField: b.pK.BLUESKY_FOLLOWERS_COUNT,
      existingPendingConfiguration: t.get(b.pK.BLUESKY_FOLLOWERS_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: h.intl.string(h.t["LLE+Up"]),
      fieldTextHook: h.t["UK2/m/"],
      metadataField: b.pK.BLUESKY_STATUSES_COUNT,
      existingPendingConfiguration: t.get(b.pK.BLUESKY_STATUSES_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    })]
  })
}

function E(e) {
  let {
    configMetadataMap: t,
    onConfigurationChange: n,
    locked: i
  } = e, l = p.A.get(f.fg2.STEAM);
  return (0, r.jsxs)(y, {
    children: [(0, r.jsx)(v, {
      titleText: h.intl.string(h.t.zdXqG9),
      fieldTextHook: h.t.QPrntS,
      metadataField: b.pK.CREATED_AT,
      existingPendingConfiguration: t.get(b.pK.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: h.intl.string(h.t.gLs17E),
      fieldTextHook: h.t.BWDpbu,
      metadataField: b.pK.STEAM_GAME_COUNT,
      existingPendingConfiguration: t.get(b.pK.STEAM_GAME_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: h.intl.formatToPlainString(h.t.j1Gf2n, {
        gameName: h.intl.string(h.t.HKUEZo)
      }),
      fieldTextHook: h.t.OGUX78,
      metadataField: b.pK.STEAM_ITEM_COUNT_DOTA2,
      existingPendingConfiguration: t.get(b.pK.STEAM_ITEM_COUNT_DOTA2),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: h.intl.formatToPlainString(h.t.j1Gf2n, {
        gameName: h.intl.string(h.t.C8p1Sh)
      }),
      fieldTextHook: h.t.Eq7h8E,
      metadataField: b.pK.STEAM_ITEM_COUNT_TF2,
      existingPendingConfiguration: t.get(b.pK.STEAM_ITEM_COUNT_TF2),
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
  } = e, l = p.A.get(f.fg2.TWITTER);
  return (0, r.jsxs)(y, {
    children: [(0, r.jsx)(v, {
      titleText: h.intl.string(h.t.zdXqG9),
      fieldTextHook: h.t.QPrntS,
      metadataField: b.pK.CREATED_AT,
      existingPendingConfiguration: t.get(b.pK.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: h.intl.string(h.t.wbvDM5),
      fieldTextHook: h.t.Zwey2Z,
      metadataField: b.pK.TWITTER_FOLLOWERS_COUNT,
      existingPendingConfiguration: t.get(b.pK.TWITTER_FOLLOWERS_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: h.intl.string(h.t["1B3DVi"]),
      fieldTextHook: h.t["lrmh/U"],
      metadataField: b.pK.TWITTER_STATUSES_COUNT,
      existingPendingConfiguration: t.get(b.pK.TWITTER_STATUSES_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(O, {
      titleText: h.intl.string(h.t.yz2CIA),
      fieldText: h.intl.string(h.t.E2iT8K),
      metadataField: b.pK.TWITTER_VERIFIED,
      existingPendingConfiguration: t.get(b.pK.TWITTER_VERIFIED),
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
  } = e, l = p.A.get(f.fg2.REDDIT);
  return (0, r.jsxs)(y, {
    children: [(0, r.jsx)(v, {
      titleText: h.intl.string(h.t.zdXqG9),
      fieldTextHook: h.t.QPrntS,
      metadataField: b.pK.CREATED_AT,
      existingPendingConfiguration: t.get(b.pK.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: h.intl.string(h.t["3Xsrov"]),
      fieldTextHook: h.t.A4zKul,
      metadataField: b.pK.REDDIT_TOTAL_KARMA,
      existingPendingConfiguration: t.get(b.pK.REDDIT_TOTAL_KARMA),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(O, {
      titleText: h.intl.string(h.t.oWM95M),
      fieldText: h.intl.string(h.t["0cKdka"]),
      metadataField: b.pK.REDDIT_MOD,
      existingPendingConfiguration: t.get(b.pK.REDDIT_MOD),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(O, {
      titleText: h.intl.string(h.t["06rDHU"]),
      fieldText: h.intl.string(h.t.kCAN58),
      metadataField: b.pK.REDDIT_GOLD,
      existingPendingConfiguration: t.get(b.pK.REDDIT_GOLD),
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
  } = e, l = p.A.get(f.fg2.PAYPAL);
  return (0, r.jsxs)(y, {
    children: [(0, r.jsx)(v, {
      titleText: h.intl.string(h.t.zdXqG9),
      fieldTextHook: h.t.QPrntS,
      metadataField: b.pK.CREATED_AT,
      existingPendingConfiguration: t.get(b.pK.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(O, {
      titleText: h.intl.string(h.t.IhXLyx),
      fieldText: h.intl.string(h.t["0JyE8I"]),
      metadataField: b.pK.PAYPAL_VERIFIED,
      existingPendingConfiguration: t.get(b.pK.PAYPAL_VERIFIED),
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
  } = e, l = p.A.get(f.fg2.EBAY);
  return (0, r.jsxs)(y, {
    children: [(0, r.jsx)(v, {
      titleText: h.intl.string(h.t.zdXqG9),
      fieldTextHook: h.t.QPrntS,
      metadataField: b.pK.CREATED_AT,
      existingPendingConfiguration: t.get(b.pK.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: h.intl.string(h.t.AuMxfz),
      fieldTextHook: h.t.IpQ4E8,
      metadataField: b.pK.EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
      existingPendingConfiguration: t.get(b.pK.EBAY_POSITIVE_FEEDBACK_PERCENTAGE),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: h.intl.string(h.t.WzvoSi),
      fieldTextHook: h.t.RH3VAx,
      metadataField: b.pK.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT,
      existingPendingConfiguration: t.get(b.pK.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: h.intl.string(h.t.VuSFzp),
      fieldTextHook: h.t.sn3m7v,
      metadataField: b.pK.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT,
      existingPendingConfiguration: t.get(b.pK.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i,
      operator: b.so.LESS_THAN
    }), (0, r.jsx)(O, {
      titleText: h.intl.string(h.t.TEEYwa),
      fieldText: h.intl.string(h.t["39wASN"]),
      metadataField: b.pK.EBAY_TOP_RATED_SELLER,
      existingPendingConfiguration: t.get(b.pK.EBAY_TOP_RATED_SELLER),
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
  } = e, l = p.A.get(f.fg2.TIKTOK);
  return (0, r.jsxs)(y, {
    children: [(0, r.jsx)(O, {
      titleText: h.intl.string(h.t.QHHwRR),
      fieldText: h.intl.string(h.t.E2iT8K),
      metadataField: b.pK.TIKTOK_VERIFIED,
      existingPendingConfiguration: t.get(b.pK.TIKTOK_VERIFIED),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: h.intl.string(h.t.WUSIHj),
      fieldTextHook: h.t.Zwey2Z,
      metadataField: b.pK.TIKTOK_FOLLOWER_COUNT,
      existingPendingConfiguration: t.get(b.pK.TIKTOK_FOLLOWER_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: h.intl.string(h.t.w1IVQk),
      fieldTextHook: h.t["Ueeex/"],
      metadataField: b.pK.TIKTOK_FOLLOWING_COUNT,
      existingPendingConfiguration: t.get(b.pK.TIKTOK_FOLLOWING_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: h.intl.string(h.t["1cFXJu"]),
      fieldTextHook: h.t.uq2UuO,
      metadataField: b.pK.TIKTOK_LIKES_COUNT,
      existingPendingConfiguration: t.get(b.pK.TIKTOK_LIKES_COUNT),
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
    let o;
    switch (e.type) {
      case b.g1.INTEGER_LESS_THAN_EQUAL:
      case b.g1.DATETIME_LESS_THAN_EQUAL:
        o = b.so.LESS_THAN;
        break;
      case b.g1.INTEGER_GREATER_THAN_EQUAL:
      case b.g1.DATETIME_GREATER_THAN_EQUAL:
        o = b.so.GREATER_THAN;
        break;
      case b.g1.INTEGER_EQUAL:
      case b.g1.BOOLEAN_EQUAL:
        o = b.so.EQUAL;
        break;
      case b.g1.INTEGER_NOT_EQUAL:
      case b.g1.BOOLEAN_NOT_EQUAL:
        o = b.so.NOT_EQUAL;
        break;
      default:
        return null
    }
    switch (e.type) {
      case b.g1.INTEGER_LESS_THAN_EQUAL:
      case b.g1.INTEGER_GREATER_THAN_EQUAL:
      case b.g1.INTEGER_EQUAL:
      case b.g1.INTEGER_NOT_EQUAL:
      case b.g1.DATETIME_LESS_THAN_EQUAL:
      case b.g1.DATETIME_GREATER_THAN_EQUAL:
        return (0, r.jsx)(v, {
          titleText: e.name,
          fieldText: e.description,
          metadataField: e.key,
          existingPendingConfiguration: t.get(e.key),
          platform: null,
          onConfigurationChange: n,
          locked: i,
          operator: o,
          applicationId: null == (s = l.application) ? true : s.id
        }, e.key);
      case b.g1.BOOLEAN_EQUAL:
      case b.g1.BOOLEAN_NOT_EQUAL:
        return (0, r.jsx)(O, {
          titleText: e.name,
          fieldText: e.description,
          metadataField: e.key,
          existingPendingConfiguration: t.get(e.key),
          platform: null,
          onConfigurationChange: n,
          locked: i,
          operator: o,
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
    a = (0, m.Ay)();
  if (n.length < 1) return null;
  let o = n[0].configuration.applicationId,
    c = null != o ? null == s ? true : s.find(e => {
      var t;
      return (null == (t = e.application) ? true : t.id) === o
    }) : true;
  if (null != o && null == c) return null;
  let d = null;
  try {
    d = p.A.get(n[0].configuration.connectionType)
  } catch (e) {}
  let u = new Map;
  n.forEach(e => {
    null != e.configuration.connectionMetadataField ? u.set(e.configuration.connectionMetadataField, e) : null == e.configuration.value && null == e.configuration.operator && null == e.configuration.connectionMetadataField && (t = e)
  });
  let g = {
      configMetadataMap: u,
      onConfigurationChange: i,
      locked: l
    },
    b = null;
  switch (null == d ? true : d.type) {
    case f.fg2.STEAM:
      b = (0, r.jsx)(E, j({}, g));
      break;
    case f.fg2.TWITTER:
      b = (0, r.jsx)(N, j({}, g));
      break;
    case f.fg2.REDDIT:
      b = (0, r.jsx)(S, j({}, g));
      break;
    case f.fg2.BLUESKY:
      b = (0, r.jsx)(A, j({}, g));
      break;
    case f.fg2.PAYPAL:
      b = (0, r.jsx)(I, j({}, g));
      break;
    case f.fg2.EBAY:
      b = (0, r.jsx)(T, j({}, g));
      break;
    case f.fg2.TIKTOK:
      b = (0, r.jsx)(C, j({}, g));
      break;
    default:
      var h, O;
      b = (0, r.jsx)(P, (h = j({}, g), O = O = {
        integration: c
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(O)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(O)).forEach(function(e) {
        Object.defineProperty(h, e, Object.getOwnPropertyDescriptor(O, e))
      }), h))
  }
  return (0, r.jsxs)("div", {
    className: x.kL,
    children: [(0, r.jsx)(_, {
      theme: a,
      platform: d,
      integration: c,
      onRemove: () => i(null, t.index),
      locked: l
    }), b]
  })
}