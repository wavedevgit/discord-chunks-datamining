/** Chunk was on 9536 **/
/** chunk id: 530198, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => Z
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk99690 = require("./99690.jsx"),
  Chunk410030 = require("./410030.js"),
  Chunk726542 = require("./726542.js"),
  Chunk981631 = require("./981631.js"),
  Chunk856651 = require("./856651.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk478936 = require("./478936.js");

function x(e) {
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

function j(e, t) {
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
  var t, n;
  let i, {
    theme: l,
    platform: s,
    integration: g,
    onRemove: f,
    locked: m
  } = e;
  if ((null == g ? true : g.application) != null) o()(null != g.application.bot, "bot is null"), i = (0, r.jsx)(u.Z, {
    size: d.EFr.SIZE_24,
    user: g.application.bot,
    className: h.verifiedIcon
  });
  else if (null != s) {
    let e = (0, c.ap)(l) ? s.icon.lightSVG : s.icon.darkSVG;
    i = (0, r.jsx)("img", {
      className: h.verifiedIcon,
      src: e,
      alt: p.intl.formatToPlainString(p.t.rtm15P, {
        name: s.name
      })
    })
  }
  return (0, r.jsxs)("div", {
    className: a()(h.verifiedRow, (null == s ? true : s.hasMetadata) === true || (null == g ? true : g.role_connections_metadata) != null && (null == g ? true : g.role_connections_metadata.length) > 0 ? h.verifiedRowWithMetadata : null),
    children: [i, (0, r.jsx)(d.Text, {
      variant: "text-md/medium",
      className: h.verifiedText,
      children: p.intl.format(p.t.Nj0a3j, {
        platformName: null != (n = null == s ? true : s.name) ? n : null == g || null == (t = g.application) ? true : t.name
      })
    }), (0, r.jsx)(d.aML, {
      "data-migration-pending": true,
      text: p.intl.string(p.t.N86XcP),
      children: e => (0, r.jsx)("div", j(x({}, e), {
        children: (0, r.jsx)(d.hU, {
          "aria-label": p.intl.string(p.t.N86XcP),
          variant: "icon-only",
          onClick: f,
          disabled: m,
          icon: d.Dio,
          size: "sm"
        })
      }))
    })]
  })
}

function O(e) {
  let {
    titleText: t,
    fieldText: n,
    metadataField: l,
    existingPendingConfiguration: a,
    platform: s,
    applicationId: o,
    onConfigurationChange: c,
    locked: u
  } = e, g = i.useId();
  return (0, r.jsxs)("tr", {
    className: h.ruleContainer,
    children: [(0, r.jsx)("th", {
      scope: "row",
      children: (0, r.jsx)(d.nn4, {
        children: (0, r.jsx)("label", {
          htmlFor: g,
          children: t
        })
      })
    }), (0, r.jsxs)("td", {
      className: h.ruleContainerLabel,
      children: [(0, r.jsx)(d.Text, {
        variant: "text-md/bold",
        "aria-hidden": "true",
        children: t
      }), (0, r.jsx)("div", {
        className: h.numericalRuleSubItemContainer,
        children: (0, r.jsx)(d.Text, {
          variant: "text-md/normal",
          children: n
        })
      })]
    }), (0, r.jsx)("td", {}), (0, r.jsx)("td", {
      children: (0, r.jsx)(d.rsf, {
        id: g,
        checked: (null == a ? true : a.configuration.value) === "1",
        onChange: e => {
          var t, n;
          let r = null;
          e && (r = {
            connectionType: null != (t = null == s ? true : s.type) ? t : b.Kt,
            applicationId: o,
            connectionMetadataField: l,
            operator: b.iO.EQUAL,
            value: "1"
          }), c(r, null != (n = null == a ? true : a.index) ? n : false)
        },
        disabled: u
      })
    })]
  }, l)
}

function C(e) {
  var t, n;
  let {
    titleText: l,
    fieldText: a,
    fieldTextHook: s,
    metadataField: o,
    existingPendingConfiguration: c,
    platform: u,
    applicationId: g,
    onConfigurationChange: f,
    locked: m,
    operator: x
  } = e, j = (null == c ? true : c.configuration) != null, v = null != (n = null == c ? true : c.index) ? n : false, [O, C] = function(e, t) {
    let n = null != t ? t : b.iO.GREATER_THAN,
      r = Math.round(Number(null != e ? e : 0));
    return n === b.iO.GREATER_THAN ? r = Math.max(1, r + 1) : n === b.iO.LESS_THAN && (r = Math.max(0, r - 1)), [r.toString(), n]
  }(null == c || null == (t = c.configuration) ? true : t.value, x), [y, N] = i.useState(O), E = null != s ? p.intl.format(s, {
    count: y,
    metadataHook: () => y
  }) : (0, r.jsx)("span", {
    className: h.fieldText,
    children: a
  }), I = i.useId();
  return (0, r.jsxs)("tr", {
    className: h.ruleContainer,
    children: [(0, r.jsx)("th", {
      scope: "row",
      children: (0, r.jsx)(d.nn4, {
        children: (0, r.jsx)("label", {
          htmlFor: I,
          children: l
        })
      })
    }), (0, r.jsxs)("td", {
      className: h.ruleContainerLabel,
      children: [(0, r.jsx)(d.Text, {
        variant: "text-md/bold",
        "aria-hidden": "true",
        children: l
      }), (0, r.jsx)("div", {
        className: h.numericalRuleSubItemContainer,
        children: (0, r.jsx)(d.Text, {
          variant: "text-md/normal",
          children: E
        })
      })]
    }), (0, r.jsx)("td", {
      children: (0, r.jsx)("div", {
        className: h.numericalRuleInput,
        children: (0, r.jsx)(d.oil, {
          "aria-label": p.intl.string(p.t.FTmi9y),
          type: "number",
          value: y,
          onChange: e => {
            if (N(e), null == c) return;
            let [t, n] = function(e, t) {
              let n = null != t ? t : b.iO.GREATER_THAN,
                r = Math.round(Number(null != e ? e : 0));
              return n === b.iO.GREATER_THAN ? r = Math.max(0, r - 1) : n === b.iO.LESS_THAN && (r = Math.max(1, r + 1)), [r.toString(), n]
            }(e, x);
            if ("" !== e) {
              var r;
              f({
                connectionType: null != (r = null == u ? true : u.type) ? r : b.Kt,
                applicationId: g,
                connectionMetadataField: o,
                operator: n,
                value: t
              }, v)
            }
          },
          disabled: m || !j
        })
      })
    }), (0, r.jsx)("td", {
      children: (0, r.jsx)(d.rsf, {
        id: I,
        checked: j,
        onChange: e => {
          var t, n;
          let r = null;
          e && (r = {
            connectionType: null != (t = null == u ? true : u.type) ? t : b.Kt,
            applicationId: g,
            connectionMetadataField: o,
            operator: C,
            value: y
          }), f(r, null != (n = null == c ? true : c.index) ? n : false)
        },
        disabled: m
      })
    })]
  }, o)
}

function y(e) {
  let {
    children: t
  } = e;
  return (0, r.jsxs)("table", {
    className: h.rulesTable,
    children: [(0, r.jsx)("thead", {
      children: (0, r.jsxs)("tr", {
        children: [(0, r.jsx)("th", {
          scope: "col"
        }), (0, r.jsx)("th", {
          scope: "col",
          children: (0, r.jsx)(d.nn4, {
            children: p.intl.string(p.t.TwDLVr)
          })
        }), (0, r.jsx)("th", {
          scope: "col",
          children: (0, r.jsx)(d.nn4, {
            children: p.intl.string(p.t.qDWJwX)
          })
        }), (0, r.jsx)("th", {
          scope: "col",
          children: (0, r.jsx)(d.nn4, {
            children: p.intl.string(p.t["5IF76e"])
          })
        })]
      })
    }), (0, r.jsx)("tbody", {
      children: t
    })]
  })
}

function N(e) {
  let {
    configMetadataMap: t,
    onConfigurationChange: n,
    locked: i
  } = e, l = f.Z.get(m.ABu.BLUESKY);
  return (0, r.jsxs)(y, {
    children: [(0, r.jsx)(C, {
      titleText: p.intl.string(p.t.zdXqG9),
      fieldTextHook: p.t.QPrntS,
      metadataField: b.PC.CREATED_AT,
      existingPendingConfiguration: t.get(b.PC.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(C, {
      titleText: p.intl.string(p.t.IE0T3q),
      fieldTextHook: p.t.Zwey2Z,
      metadataField: b.PC.BLUESKY_FOLLOWERS_COUNT,
      existingPendingConfiguration: t.get(b.PC.BLUESKY_FOLLOWERS_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(C, {
      titleText: p.intl.string(p.t["LLE+Up"]),
      fieldTextHook: p.t["UK2/m/"],
      metadataField: b.PC.BLUESKY_STATUSES_COUNT,
      existingPendingConfiguration: t.get(b.PC.BLUESKY_STATUSES_COUNT),
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
  } = e, l = f.Z.get(m.ABu.STEAM);
  return (0, r.jsxs)(y, {
    children: [(0, r.jsx)(C, {
      titleText: p.intl.string(p.t.zdXqG9),
      fieldTextHook: p.t.QPrntS,
      metadataField: b.PC.CREATED_AT,
      existingPendingConfiguration: t.get(b.PC.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(C, {
      titleText: p.intl.string(p.t.gLs17E),
      fieldTextHook: p.t.BWDpbu,
      metadataField: b.PC.STEAM_GAME_COUNT,
      existingPendingConfiguration: t.get(b.PC.STEAM_GAME_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(C, {
      titleText: p.intl.formatToPlainString(p.t.j1Gf2n, {
        gameName: p.intl.string(p.t.HKUEZo)
      }),
      fieldTextHook: p.t.OGUX78,
      metadataField: b.PC.STEAM_ITEM_COUNT_DOTA2,
      existingPendingConfiguration: t.get(b.PC.STEAM_ITEM_COUNT_DOTA2),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(C, {
      titleText: p.intl.formatToPlainString(p.t.j1Gf2n, {
        gameName: p.intl.string(p.t.C8p1Sh)
      }),
      fieldTextHook: p.t.Eq7h8E,
      metadataField: b.PC.STEAM_ITEM_COUNT_TF2,
      existingPendingConfiguration: t.get(b.PC.STEAM_ITEM_COUNT_TF2),
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
  } = e, l = f.Z.get(m.ABu.TWITTER);
  return (0, r.jsxs)(y, {
    children: [(0, r.jsx)(C, {
      titleText: p.intl.string(p.t.zdXqG9),
      fieldTextHook: p.t.QPrntS,
      metadataField: b.PC.CREATED_AT,
      existingPendingConfiguration: t.get(b.PC.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(C, {
      titleText: p.intl.string(p.t.wbvDM5),
      fieldTextHook: p.t.Zwey2Z,
      metadataField: b.PC.TWITTER_FOLLOWERS_COUNT,
      existingPendingConfiguration: t.get(b.PC.TWITTER_FOLLOWERS_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(C, {
      titleText: p.intl.string(p.t["1B3DVi"]),
      fieldTextHook: p.t["lrmh/U"],
      metadataField: b.PC.TWITTER_STATUSES_COUNT,
      existingPendingConfiguration: t.get(b.PC.TWITTER_STATUSES_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(O, {
      titleText: p.intl.string(p.t.yz2CIA),
      fieldText: p.intl.string(p.t.E2iT8K),
      metadataField: b.PC.TWITTER_VERIFIED,
      existingPendingConfiguration: t.get(b.PC.TWITTER_VERIFIED),
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
  } = e, l = f.Z.get(m.ABu.REDDIT);
  return (0, r.jsxs)(y, {
    children: [(0, r.jsx)(C, {
      titleText: p.intl.string(p.t.zdXqG9),
      fieldTextHook: p.t.QPrntS,
      metadataField: b.PC.CREATED_AT,
      existingPendingConfiguration: t.get(b.PC.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(C, {
      titleText: p.intl.string(p.t["3Xsrov"]),
      fieldTextHook: p.t.A4zKul,
      metadataField: b.PC.REDDIT_TOTAL_KARMA,
      existingPendingConfiguration: t.get(b.PC.REDDIT_TOTAL_KARMA),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(O, {
      titleText: p.intl.string(p.t.oWM95M),
      fieldText: p.intl.string(p.t["0cKdka"]),
      metadataField: b.PC.REDDIT_MOD,
      existingPendingConfiguration: t.get(b.PC.REDDIT_MOD),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(O, {
      titleText: p.intl.string(p.t["06rDHU"]),
      fieldText: p.intl.string(p.t.kCAN58),
      metadataField: b.PC.REDDIT_GOLD,
      existingPendingConfiguration: t.get(b.PC.REDDIT_GOLD),
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
  } = e, l = f.Z.get(m.ABu.PAYPAL);
  return (0, r.jsxs)(y, {
    children: [(0, r.jsx)(C, {
      titleText: p.intl.string(p.t.zdXqG9),
      fieldTextHook: p.t.QPrntS,
      metadataField: b.PC.CREATED_AT,
      existingPendingConfiguration: t.get(b.PC.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(O, {
      titleText: p.intl.string(p.t.IhXLyx),
      fieldText: p.intl.string(p.t["0JyE8I"]),
      metadataField: b.PC.PAYPAL_VERIFIED,
      existingPendingConfiguration: t.get(b.PC.PAYPAL_VERIFIED),
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
  } = e, l = f.Z.get(m.ABu.EBAY);
  return (0, r.jsxs)(y, {
    children: [(0, r.jsx)(C, {
      titleText: p.intl.string(p.t.zdXqG9),
      fieldTextHook: p.t.QPrntS,
      metadataField: b.PC.CREATED_AT,
      existingPendingConfiguration: t.get(b.PC.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(C, {
      titleText: p.intl.string(p.t.AuMxfz),
      fieldTextHook: p.t.IpQ4E8,
      metadataField: b.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
      existingPendingConfiguration: t.get(b.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(C, {
      titleText: p.intl.string(p.t.WzvoSi),
      fieldTextHook: p.t.RH3VAx,
      metadataField: b.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT,
      existingPendingConfiguration: t.get(b.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(C, {
      titleText: p.intl.string(p.t.VuSFzp),
      fieldTextHook: p.t.sn3m7v,
      metadataField: b.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT,
      existingPendingConfiguration: t.get(b.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i,
      operator: b.iO.LESS_THAN
    }), (0, r.jsx)(O, {
      titleText: p.intl.string(p.t.TEEYwa),
      fieldText: p.intl.string(p.t["39wASN"]),
      metadataField: b.PC.EBAY_TOP_RATED_SELLER,
      existingPendingConfiguration: t.get(b.PC.EBAY_TOP_RATED_SELLER),
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
    locked: i
  } = e, l = f.Z.get(m.ABu.TIKTOK);
  return (0, r.jsxs)(y, {
    children: [(0, r.jsx)(O, {
      titleText: p.intl.string(p.t.QHHwRR),
      fieldText: p.intl.string(p.t.E2iT8K),
      metadataField: b.PC.TIKTOK_VERIFIED,
      existingPendingConfiguration: t.get(b.PC.TIKTOK_VERIFIED),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(C, {
      titleText: p.intl.string(p.t.WUSIHj),
      fieldTextHook: p.t.Zwey2Z,
      metadataField: b.PC.TIKTOK_FOLLOWER_COUNT,
      existingPendingConfiguration: t.get(b.PC.TIKTOK_FOLLOWER_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(C, {
      titleText: p.intl.string(p.t.w1IVQk),
      fieldTextHook: p.t["Ueeex/"],
      metadataField: b.PC.TIKTOK_FOLLOWING_COUNT,
      existingPendingConfiguration: t.get(b.PC.TIKTOK_FOLLOWING_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(C, {
      titleText: p.intl.string(p.t["1cFXJu"]),
      fieldTextHook: p.t.uq2UuO,
      metadataField: b.PC.TIKTOK_LIKES_COUNT,
      existingPendingConfiguration: t.get(b.PC.TIKTOK_LIKES_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    })]
  })
}

function w(e) {
  let {
    configMetadataMap: t,
    onConfigurationChange: n,
    locked: i,
    integration: l
  } = e;
  return null == l || null == l.role_connections_metadata ? null : l.role_connections_metadata.map(e => {
    var a, s;
    let o;
    switch (e.type) {
      case b.xn.INTEGER_LESS_THAN_EQUAL:
      case b.xn.DATETIME_LESS_THAN_EQUAL:
        o = b.iO.LESS_THAN;
        break;
      case b.xn.INTEGER_GREATER_THAN_EQUAL:
      case b.xn.DATETIME_GREATER_THAN_EQUAL:
        o = b.iO.GREATER_THAN;
        break;
      case b.xn.INTEGER_EQUAL:
      case b.xn.BOOLEAN_EQUAL:
        o = b.iO.EQUAL;
        break;
      case b.xn.INTEGER_NOT_EQUAL:
      case b.xn.BOOLEAN_NOT_EQUAL:
        o = b.iO.NOT_EQUAL;
        break;
      default:
        return null
    }
    switch (e.type) {
      case b.xn.INTEGER_LESS_THAN_EQUAL:
      case b.xn.INTEGER_GREATER_THAN_EQUAL:
      case b.xn.INTEGER_EQUAL:
      case b.xn.INTEGER_NOT_EQUAL:
      case b.xn.DATETIME_LESS_THAN_EQUAL:
      case b.xn.DATETIME_GREATER_THAN_EQUAL:
        return (0, r.jsx)(C, {
          titleText: e.name,
          fieldText: e.description,
          metadataField: e.key,
          existingPendingConfiguration: t.get(e.key),
          platform: null,
          onConfigurationChange: n,
          locked: i,
          operator: o,
          applicationId: null == (a = l.application) ? true : a.id
        }, e.key);
      case b.xn.BOOLEAN_EQUAL:
      case b.xn.BOOLEAN_NOT_EQUAL:
        return (0, r.jsx)(O, {
          titleText: e.name,
          fieldText: e.description,
          metadataField: e.key,
          existingPendingConfiguration: t.get(e.key),
          platform: null,
          onConfigurationChange: n,
          locked: i,
          operator: o,
          applicationId: null == (s = l.application) ? true : s.id
        }, e.key)
    }
  })
}

function Z(e) {
  let t, {
      configurationItems: n,
      onConfigurationChange: i,
      locked: l,
      integrations: a
    } = e,
    s = (0, g.ZP)();
  if (n.length < 1) return null;
  let o = n[0].configuration.applicationId,
    c = null != o ? null == a ? true : a.find(e => {
      var t;
      return (null == (t = e.application) ? true : t.id) === o
    }) : true;
  if (null != o && null == c) return null;
  let d = null;
  try {
    d = f.Z.get(n[0].configuration.connectionType)
  } catch (e) {}
  let u = new Map;
  n.forEach(e => {
    null != e.configuration.connectionMetadataField ? u.set(e.configuration.connectionMetadataField, e) : null == e.configuration.value && null == e.configuration.operator && null == e.configuration.connectionMetadataField && (t = e)
  });
  let b = {
      configMetadataMap: u,
      onConfigurationChange: i,
      locked: l
    },
    p = null;
  switch (null == d ? true : d.type) {
    case m.ABu.STEAM:
      p = (0, r.jsx)(E, x({}, b));
      break;
    case m.ABu.TWITTER:
      p = (0, r.jsx)(I, x({}, b));
      break;
    case m.ABu.REDDIT:
      p = (0, r.jsx)(S, x({}, b));
      break;
    case m.ABu.BLUESKY:
      p = (0, r.jsx)(N, x({}, b));
      break;
    case m.ABu.PAYPAL:
      p = (0, r.jsx)(_, x({}, b));
      break;
    case m.ABu.EBAY:
      p = (0, r.jsx)(T, x({}, b));
      break;
    case m.ABu.TIKTOK:
      p = (0, r.jsx)(P, x({}, b));
      break;
    default:
      p = (0, r.jsx)(w, j(x({}, b), {
        integration: c
      }))
  }
  return (0, r.jsxs)("div", {
    className: h.container,
    children: [(0, r.jsx)(v, {
      theme: s,
      platform: d,
      integration: c,
      onRemove: () => i(null, t.index),
      locked: l
    }), p]
  })
}