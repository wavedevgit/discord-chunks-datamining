/** Chunk was on 39048 **/
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
      alt: b.intl.formatToPlainString(b.t.rtm15P, {
        name: a.name
      })
    })
  }
  return (0, r.jsxs)("div", {
    className: s()(x.R5, (null == a ? true : a.hasMetadata) === true || (null == m ? true : m.role_connections_metadata) != null && (null == m ? true : m.role_connections_metadata.length) > 0 ? x.mD : null),
    children: [i, (0, r.jsx)(u.Text, {
      variant: "text-md/medium",
      className: x.sK,
      children: b.intl.format(b.t.Nj0a3j, {
        platformName: null != (t = null == a ? true : a.name) ? t : null == m || null == (n = m.application) ? true : n.name
      })
    }), (0, r.jsx)(c.m_, {
      text: b.intl.string(b.t.N86XcP),
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(u.K0, {
          "aria-label": b.intl.string(b.t.N86XcP),
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
            connectionType: null != (n = null == a ? true : a.type) ? n : h.zR,
            applicationId: o,
            connectionMetadataField: l,
            operator: h.so.EQUAL,
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
    [A, E] = (l = null == m || null == (n = m.configuration) ? true : n.value, s = null != O ? O : h.so.GREATER_THAN, a = Math.round(Number(null != l ? l : 0)), s === h.so.GREATER_THAN ? a = Math.max(1, a + 1) : s === h.so.LESS_THAN && (a = Math.max(0, a - 1)), [a.toString(), s]),
    [N, S] = i.useState(A),
    I = null != d ? b.intl.format(d, {
      count: N,
      metadataHook: () => N
    }) : (0, r.jsx)("span", {
      className: x.gF,
      children: c
    }),
    C = i.useId();
  return (0, r.jsxs)("tr", {
    className: x.cm,
    children: [(0, r.jsx)("th", {
      scope: "row",
      children: (0, r.jsx)(u.AC4, {
        children: (0, r.jsx)("label", {
          htmlFor: C,
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
          "aria-label": b.intl.string(b.t.FTmi9y),
          type: "number",
          value: N,
          onChange: e => {
            var t;
            let n, r;
            if (S(e), null == m) return;
            let [i, l] = (n = null != O ? O : h.so.GREATER_THAN, r = Math.round(Number(null != e ? e : 0)), n === h.so.GREATER_THAN ? r = Math.max(0, r - 1) : n === h.so.LESS_THAN && (r = Math.max(1, r + 1)), [r.toString(), n]);
            "" !== e && j({
              connectionType: null != (t = null == p ? true : p.type) ? t : h.zR,
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
        id: C,
        checked: v,
        onChange: e => {
          var t, n;
          let r = null;
          e && (r = {
            connectionType: null != (n = null == p ? true : p.type) ? n : h.zR,
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
            children: b.intl.string(b.t.TwDLVr)
          })
        }), (0, r.jsx)("th", {
          scope: "col",
          children: (0, r.jsx)(u.AC4, {
            children: b.intl.string(b.t.qDWJwX)
          })
        }), (0, r.jsx)("th", {
          scope: "col",
          children: (0, r.jsx)(u.AC4, {
            children: b.intl.string(b.t["5IF76e"])
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
      titleText: b.intl.string(b.t.zdXqG9),
      fieldTextHook: b.t.QPrntS,
      metadataField: h.pK.CREATED_AT,
      existingPendingConfiguration: t.get(h.pK.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: b.intl.string(b.t.IE0T3q),
      fieldTextHook: b.t.Zwey2Z,
      metadataField: h.pK.BLUESKY_FOLLOWERS_COUNT,
      existingPendingConfiguration: t.get(h.pK.BLUESKY_FOLLOWERS_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: b.intl.string(b.t["LLE+Up"]),
      fieldTextHook: b.t["UK2/m/"],
      metadataField: h.pK.BLUESKY_STATUSES_COUNT,
      existingPendingConfiguration: t.get(h.pK.BLUESKY_STATUSES_COUNT),
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
      titleText: b.intl.string(b.t.zdXqG9),
      fieldTextHook: b.t.QPrntS,
      metadataField: h.pK.CREATED_AT,
      existingPendingConfiguration: t.get(h.pK.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: b.intl.string(b.t.gLs17E),
      fieldTextHook: b.t.BWDpbu,
      metadataField: h.pK.STEAM_GAME_COUNT,
      existingPendingConfiguration: t.get(h.pK.STEAM_GAME_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: b.intl.formatToPlainString(b.t.j1Gf2n, {
        gameName: b.intl.string(b.t.HKUEZo)
      }),
      fieldTextHook: b.t.OGUX78,
      metadataField: h.pK.STEAM_ITEM_COUNT_DOTA2,
      existingPendingConfiguration: t.get(h.pK.STEAM_ITEM_COUNT_DOTA2),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: b.intl.formatToPlainString(b.t.j1Gf2n, {
        gameName: b.intl.string(b.t.C8p1Sh)
      }),
      fieldTextHook: b.t.Eq7h8E,
      metadataField: h.pK.STEAM_ITEM_COUNT_TF2,
      existingPendingConfiguration: t.get(h.pK.STEAM_ITEM_COUNT_TF2),
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
      titleText: b.intl.string(b.t.zdXqG9),
      fieldTextHook: b.t.QPrntS,
      metadataField: h.pK.CREATED_AT,
      existingPendingConfiguration: t.get(h.pK.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: b.intl.string(b.t.wbvDM5),
      fieldTextHook: b.t.Zwey2Z,
      metadataField: h.pK.TWITTER_FOLLOWERS_COUNT,
      existingPendingConfiguration: t.get(h.pK.TWITTER_FOLLOWERS_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: b.intl.string(b.t["1B3DVi"]),
      fieldTextHook: b.t["lrmh/U"],
      metadataField: h.pK.TWITTER_STATUSES_COUNT,
      existingPendingConfiguration: t.get(h.pK.TWITTER_STATUSES_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(O, {
      titleText: b.intl.string(b.t.yz2CIA),
      fieldText: b.intl.string(b.t.E2iT8K),
      metadataField: h.pK.TWITTER_VERIFIED,
      existingPendingConfiguration: t.get(h.pK.TWITTER_VERIFIED),
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
      titleText: b.intl.string(b.t.zdXqG9),
      fieldTextHook: b.t.QPrntS,
      metadataField: h.pK.CREATED_AT,
      existingPendingConfiguration: t.get(h.pK.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: b.intl.string(b.t["3Xsrov"]),
      fieldTextHook: b.t.A4zKul,
      metadataField: h.pK.REDDIT_TOTAL_KARMA,
      existingPendingConfiguration: t.get(h.pK.REDDIT_TOTAL_KARMA),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(O, {
      titleText: b.intl.string(b.t.oWM95M),
      fieldText: b.intl.string(b.t["0cKdka"]),
      metadataField: h.pK.REDDIT_MOD,
      existingPendingConfiguration: t.get(h.pK.REDDIT_MOD),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(O, {
      titleText: b.intl.string(b.t["06rDHU"]),
      fieldText: b.intl.string(b.t.kCAN58),
      metadataField: h.pK.REDDIT_GOLD,
      existingPendingConfiguration: t.get(h.pK.REDDIT_GOLD),
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
      titleText: b.intl.string(b.t.zdXqG9),
      fieldTextHook: b.t.QPrntS,
      metadataField: h.pK.CREATED_AT,
      existingPendingConfiguration: t.get(h.pK.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(O, {
      titleText: b.intl.string(b.t.IhXLyx),
      fieldText: b.intl.string(b.t["0JyE8I"]),
      metadataField: h.pK.PAYPAL_VERIFIED,
      existingPendingConfiguration: t.get(h.pK.PAYPAL_VERIFIED),
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
  } = e, l = p.A.get(f.fg2.EBAY);
  return (0, r.jsxs)(y, {
    children: [(0, r.jsx)(v, {
      titleText: b.intl.string(b.t.zdXqG9),
      fieldTextHook: b.t.QPrntS,
      metadataField: h.pK.CREATED_AT,
      existingPendingConfiguration: t.get(h.pK.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: b.intl.string(b.t.AuMxfz),
      fieldTextHook: b.t.IpQ4E8,
      metadataField: h.pK.EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
      existingPendingConfiguration: t.get(h.pK.EBAY_POSITIVE_FEEDBACK_PERCENTAGE),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: b.intl.string(b.t.WzvoSi),
      fieldTextHook: b.t.RH3VAx,
      metadataField: h.pK.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT,
      existingPendingConfiguration: t.get(h.pK.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: b.intl.string(b.t.VuSFzp),
      fieldTextHook: b.t.sn3m7v,
      metadataField: h.pK.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT,
      existingPendingConfiguration: t.get(h.pK.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i,
      operator: h.so.LESS_THAN
    }), (0, r.jsx)(O, {
      titleText: b.intl.string(b.t.TEEYwa),
      fieldText: b.intl.string(b.t["39wASN"]),
      metadataField: h.pK.EBAY_TOP_RATED_SELLER,
      existingPendingConfiguration: t.get(h.pK.EBAY_TOP_RATED_SELLER),
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
  } = e, l = p.A.get(f.fg2.TIKTOK);
  return (0, r.jsxs)(y, {
    children: [(0, r.jsx)(O, {
      titleText: b.intl.string(b.t.QHHwRR),
      fieldText: b.intl.string(b.t.E2iT8K),
      metadataField: h.pK.TIKTOK_VERIFIED,
      existingPendingConfiguration: t.get(h.pK.TIKTOK_VERIFIED),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: b.intl.string(b.t.WUSIHj),
      fieldTextHook: b.t.Zwey2Z,
      metadataField: h.pK.TIKTOK_FOLLOWER_COUNT,
      existingPendingConfiguration: t.get(h.pK.TIKTOK_FOLLOWER_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: b.intl.string(b.t.w1IVQk),
      fieldTextHook: b.t["Ueeex/"],
      metadataField: h.pK.TIKTOK_FOLLOWING_COUNT,
      existingPendingConfiguration: t.get(h.pK.TIKTOK_FOLLOWING_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(v, {
      titleText: b.intl.string(b.t["1cFXJu"]),
      fieldTextHook: b.t.uq2UuO,
      metadataField: h.pK.TIKTOK_LIKES_COUNT,
      existingPendingConfiguration: t.get(h.pK.TIKTOK_LIKES_COUNT),
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
      case h.g1.INTEGER_LESS_THAN_EQUAL:
      case h.g1.DATETIME_LESS_THAN_EQUAL:
        o = h.so.LESS_THAN;
        break;
      case h.g1.INTEGER_GREATER_THAN_EQUAL:
      case h.g1.DATETIME_GREATER_THAN_EQUAL:
        o = h.so.GREATER_THAN;
        break;
      case h.g1.INTEGER_EQUAL:
      case h.g1.BOOLEAN_EQUAL:
        o = h.so.EQUAL;
        break;
      case h.g1.INTEGER_NOT_EQUAL:
      case h.g1.BOOLEAN_NOT_EQUAL:
        o = h.so.NOT_EQUAL;
        break;
      default:
        return null
    }
    switch (e.type) {
      case h.g1.INTEGER_LESS_THAN_EQUAL:
      case h.g1.INTEGER_GREATER_THAN_EQUAL:
      case h.g1.INTEGER_EQUAL:
      case h.g1.INTEGER_NOT_EQUAL:
      case h.g1.DATETIME_LESS_THAN_EQUAL:
      case h.g1.DATETIME_GREATER_THAN_EQUAL:
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
      case h.g1.BOOLEAN_EQUAL:
      case h.g1.BOOLEAN_NOT_EQUAL:
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
    h = null;
  switch (null == d ? true : d.type) {
    case f.fg2.STEAM:
      h = (0, r.jsx)(E, j({}, g));
      break;
    case f.fg2.TWITTER:
      h = (0, r.jsx)(N, j({}, g));
      break;
    case f.fg2.REDDIT:
      h = (0, r.jsx)(S, j({}, g));
      break;
    case f.fg2.BLUESKY:
      h = (0, r.jsx)(A, j({}, g));
      break;
    case f.fg2.PAYPAL:
      h = (0, r.jsx)(I, j({}, g));
      break;
    case f.fg2.EBAY:
      h = (0, r.jsx)(C, j({}, g));
      break;
    case f.fg2.TIKTOK:
      h = (0, r.jsx)(T, j({}, g));
      break;
    default:
      var b, O;
      h = (0, r.jsx)(P, (b = j({}, g), O = O = {
        integration: c
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(b, Object.getOwnPropertyDescriptors(O)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(O)).forEach(function(e) {
        Object.defineProperty(b, e, Object.getOwnPropertyDescriptor(O, e))
      }), b))
  }
  return (0, r.jsxs)("div", {
    className: x.kL,
    children: [(0, r.jsx)(_, {
      theme: a,
      platform: d,
      integration: c,
      onRemove: () => i(null, t.index),
      locked: l
    }), h]
  })
}