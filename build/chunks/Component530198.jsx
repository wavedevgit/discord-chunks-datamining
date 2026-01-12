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
  Chunk681715 = require("./681715.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk99690 = require("./99690.jsx"),
  Chunk410030 = require("./410030.js"),
  Chunk726542 = require("./726542.js"),
  Chunk981631 = require("./981631.js"),
  Chunk856651 = require("./856651.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk478936 = require("./478936.js");

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

function v(e) {
  var t, n;
  let i, {
    theme: l,
    platform: s,
    integration: m,
    onRemove: f,
    locked: b
  } = e;
  if ((null == m ? true : m.application) != null) o()(null != m.application.bot, "bot is null"), i = (0, r.jsx)(g.Z, {
    size: u.EFr.SIZE_24,
    user: m.application.bot,
    className: x.verifiedIcon
  });
  else if (null != s) {
    let e = (0, d.ap)(l) ? s.icon.lightSVG : s.icon.darkSVG;
    i = (0, r.jsx)("img", {
      className: x.verifiedIcon,
      src: e,
      alt: h.intl.formatToPlainString(h.t.rtm15P, {
        name: s.name
      })
    })
  }
  return (0, r.jsxs)("div", {
    className: a()(x.verifiedRow, (null == s ? true : s.hasMetadata) === true || (null == m ? true : m.role_connections_metadata) != null && (null == m ? true : m.role_connections_metadata.length) > 0 ? x.verifiedRowWithMetadata : null),
    children: [i, (0, r.jsx)(u.Text, {
      variant: "text-md/medium",
      className: x.verifiedText,
      children: h.intl.format(h.t.Nj0a3j, {
        platformName: null != (n = null == s ? true : s.name) ? n : null == m || null == (t = m.application) ? true : t.name
      })
    }), (0, r.jsx)(c.u, {
      text: h.intl.string(h.t.N86XcP),
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(u.hU, {
          "aria-label": h.intl.string(h.t.N86XcP),
          variant: "icon-only",
          onClick: f,
          disabled: b,
          icon: u.Dio,
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
    existingPendingConfiguration: a,
    platform: s,
    applicationId: o,
    onConfigurationChange: c,
    locked: d
  } = e, g = i.useId();
  return (0, r.jsxs)("tr", {
    className: x.ruleContainer,
    children: [(0, r.jsx)("th", {
      scope: "row",
      children: (0, r.jsx)(u.nn4, {
        children: (0, r.jsx)("label", {
          htmlFor: g,
          children: t
        })
      })
    }), (0, r.jsxs)("td", {
      className: x.ruleContainerLabel,
      children: [(0, r.jsx)(u.Text, {
        variant: "text-md/bold",
        "aria-hidden": "true",
        children: t
      }), (0, r.jsx)("div", {
        className: x.numericalRuleSubItemContainer,
        children: (0, r.jsx)(u.Text, {
          variant: "text-md/normal",
          children: n
        })
      })]
    }), (0, r.jsx)("td", {}), (0, r.jsx)("td", {
      children: (0, r.jsx)(u.rsf, {
        id: g,
        checked: (null == a ? true : a.configuration.value) === "1",
        onChange: e => {
          var t, n;
          let r = null;
          e && (r = {
            connectionType: null != (t = null == s ? true : s.type) ? t : p.Kt,
            applicationId: o,
            connectionMetadataField: l,
            operator: p.iO.EQUAL,
            value: "1"
          }), c(r, null != (n = null == a ? true : a.index) ? n : false)
        },
        disabled: d
      })
    })]
  }, l)
}

function y(e) {
  var t, n;
  let {
    titleText: l,
    fieldText: a,
    fieldTextHook: s,
    metadataField: o,
    existingPendingConfiguration: c,
    platform: d,
    applicationId: g,
    onConfigurationChange: m,
    locked: f,
    operator: b
  } = e, j = (null == c ? true : c.configuration) != null, v = null != (n = null == c ? true : c.index) ? n : false, [O, y] = function(e, t) {
    let n = null != t ? t : p.iO.GREATER_THAN,
      r = Math.round(Number(null != e ? e : 0));
    return n === p.iO.GREATER_THAN ? r = Math.max(1, r + 1) : n === p.iO.LESS_THAN && (r = Math.max(0, r - 1)), [r.toString(), n]
  }(null == c || null == (t = c.configuration) ? true : t.value, b), [C, N] = i.useState(O), E = null != s ? h.intl.format(s, {
    count: C,
    metadataHook: () => C
  }) : (0, r.jsx)("span", {
    className: x.fieldText,
    children: a
  }), I = i.useId();
  return (0, r.jsxs)("tr", {
    className: x.ruleContainer,
    children: [(0, r.jsx)("th", {
      scope: "row",
      children: (0, r.jsx)(u.nn4, {
        children: (0, r.jsx)("label", {
          htmlFor: I,
          children: l
        })
      })
    }), (0, r.jsxs)("td", {
      className: x.ruleContainerLabel,
      children: [(0, r.jsx)(u.Text, {
        variant: "text-md/bold",
        "aria-hidden": "true",
        children: l
      }), (0, r.jsx)("div", {
        className: x.numericalRuleSubItemContainer,
        children: (0, r.jsx)(u.Text, {
          variant: "text-md/normal",
          children: E
        })
      })]
    }), (0, r.jsx)("td", {
      children: (0, r.jsx)("div", {
        className: x.numericalRuleInput,
        children: (0, r.jsx)(u.oil, {
          "aria-label": h.intl.string(h.t.FTmi9y),
          type: "number",
          value: C,
          onChange: e => {
            if (N(e), null == c) return;
            let [t, n] = function(e, t) {
              let n = null != t ? t : p.iO.GREATER_THAN,
                r = Math.round(Number(null != e ? e : 0));
              return n === p.iO.GREATER_THAN ? r = Math.max(0, r - 1) : n === p.iO.LESS_THAN && (r = Math.max(1, r + 1)), [r.toString(), n]
            }(e, b);
            if ("" !== e) {
              var r;
              m({
                connectionType: null != (r = null == d ? true : d.type) ? r : p.Kt,
                applicationId: g,
                connectionMetadataField: o,
                operator: n,
                value: t
              }, v)
            }
          },
          disabled: f || !j
        })
      })
    }), (0, r.jsx)("td", {
      children: (0, r.jsx)(u.rsf, {
        id: I,
        checked: j,
        onChange: e => {
          var t, n;
          let r = null;
          e && (r = {
            connectionType: null != (t = null == d ? true : d.type) ? t : p.Kt,
            applicationId: g,
            connectionMetadataField: o,
            operator: y,
            value: C
          }), m(r, null != (n = null == c ? true : c.index) ? n : false)
        },
        disabled: f
      })
    })]
  }, o)
}

function C(e) {
  let {
    children: t
  } = e;
  return (0, r.jsxs)("table", {
    className: x.rulesTable,
    children: [(0, r.jsx)("thead", {
      children: (0, r.jsxs)("tr", {
        children: [(0, r.jsx)("th", {
          scope: "col"
        }), (0, r.jsx)("th", {
          scope: "col",
          children: (0, r.jsx)(u.nn4, {
            children: h.intl.string(h.t.TwDLVr)
          })
        }), (0, r.jsx)("th", {
          scope: "col",
          children: (0, r.jsx)(u.nn4, {
            children: h.intl.string(h.t.qDWJwX)
          })
        }), (0, r.jsx)("th", {
          scope: "col",
          children: (0, r.jsx)(u.nn4, {
            children: h.intl.string(h.t["5IF76e"])
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
  } = e, l = f.Z.get(b.ABu.BLUESKY);
  return (0, r.jsxs)(C, {
    children: [(0, r.jsx)(y, {
      titleText: h.intl.string(h.t.zdXqG9),
      fieldTextHook: h.t.QPrntS,
      metadataField: p.PC.CREATED_AT,
      existingPendingConfiguration: t.get(p.PC.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: h.intl.string(h.t.IE0T3q),
      fieldTextHook: h.t.Zwey2Z,
      metadataField: p.PC.BLUESKY_FOLLOWERS_COUNT,
      existingPendingConfiguration: t.get(p.PC.BLUESKY_FOLLOWERS_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: h.intl.string(h.t["LLE+Up"]),
      fieldTextHook: h.t["UK2/m/"],
      metadataField: p.PC.BLUESKY_STATUSES_COUNT,
      existingPendingConfiguration: t.get(p.PC.BLUESKY_STATUSES_COUNT),
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
  } = e, l = f.Z.get(b.ABu.STEAM);
  return (0, r.jsxs)(C, {
    children: [(0, r.jsx)(y, {
      titleText: h.intl.string(h.t.zdXqG9),
      fieldTextHook: h.t.QPrntS,
      metadataField: p.PC.CREATED_AT,
      existingPendingConfiguration: t.get(p.PC.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: h.intl.string(h.t.gLs17E),
      fieldTextHook: h.t.BWDpbu,
      metadataField: p.PC.STEAM_GAME_COUNT,
      existingPendingConfiguration: t.get(p.PC.STEAM_GAME_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: h.intl.formatToPlainString(h.t.j1Gf2n, {
        gameName: h.intl.string(h.t.HKUEZo)
      }),
      fieldTextHook: h.t.OGUX78,
      metadataField: p.PC.STEAM_ITEM_COUNT_DOTA2,
      existingPendingConfiguration: t.get(p.PC.STEAM_ITEM_COUNT_DOTA2),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: h.intl.formatToPlainString(h.t.j1Gf2n, {
        gameName: h.intl.string(h.t.C8p1Sh)
      }),
      fieldTextHook: h.t.Eq7h8E,
      metadataField: p.PC.STEAM_ITEM_COUNT_TF2,
      existingPendingConfiguration: t.get(p.PC.STEAM_ITEM_COUNT_TF2),
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
  } = e, l = f.Z.get(b.ABu.TWITTER);
  return (0, r.jsxs)(C, {
    children: [(0, r.jsx)(y, {
      titleText: h.intl.string(h.t.zdXqG9),
      fieldTextHook: h.t.QPrntS,
      metadataField: p.PC.CREATED_AT,
      existingPendingConfiguration: t.get(p.PC.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: h.intl.string(h.t.wbvDM5),
      fieldTextHook: h.t.Zwey2Z,
      metadataField: p.PC.TWITTER_FOLLOWERS_COUNT,
      existingPendingConfiguration: t.get(p.PC.TWITTER_FOLLOWERS_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: h.intl.string(h.t["1B3DVi"]),
      fieldTextHook: h.t["lrmh/U"],
      metadataField: p.PC.TWITTER_STATUSES_COUNT,
      existingPendingConfiguration: t.get(p.PC.TWITTER_STATUSES_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(O, {
      titleText: h.intl.string(h.t.yz2CIA),
      fieldText: h.intl.string(h.t.E2iT8K),
      metadataField: p.PC.TWITTER_VERIFIED,
      existingPendingConfiguration: t.get(p.PC.TWITTER_VERIFIED),
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
  } = e, l = f.Z.get(b.ABu.REDDIT);
  return (0, r.jsxs)(C, {
    children: [(0, r.jsx)(y, {
      titleText: h.intl.string(h.t.zdXqG9),
      fieldTextHook: h.t.QPrntS,
      metadataField: p.PC.CREATED_AT,
      existingPendingConfiguration: t.get(p.PC.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: h.intl.string(h.t["3Xsrov"]),
      fieldTextHook: h.t.A4zKul,
      metadataField: p.PC.REDDIT_TOTAL_KARMA,
      existingPendingConfiguration: t.get(p.PC.REDDIT_TOTAL_KARMA),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(O, {
      titleText: h.intl.string(h.t.oWM95M),
      fieldText: h.intl.string(h.t["0cKdka"]),
      metadataField: p.PC.REDDIT_MOD,
      existingPendingConfiguration: t.get(p.PC.REDDIT_MOD),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(O, {
      titleText: h.intl.string(h.t["06rDHU"]),
      fieldText: h.intl.string(h.t.kCAN58),
      metadataField: p.PC.REDDIT_GOLD,
      existingPendingConfiguration: t.get(p.PC.REDDIT_GOLD),
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
  } = e, l = f.Z.get(b.ABu.PAYPAL);
  return (0, r.jsxs)(C, {
    children: [(0, r.jsx)(y, {
      titleText: h.intl.string(h.t.zdXqG9),
      fieldTextHook: h.t.QPrntS,
      metadataField: p.PC.CREATED_AT,
      existingPendingConfiguration: t.get(p.PC.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(O, {
      titleText: h.intl.string(h.t.IhXLyx),
      fieldText: h.intl.string(h.t["0JyE8I"]),
      metadataField: p.PC.PAYPAL_VERIFIED,
      existingPendingConfiguration: t.get(p.PC.PAYPAL_VERIFIED),
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
  } = e, l = f.Z.get(b.ABu.EBAY);
  return (0, r.jsxs)(C, {
    children: [(0, r.jsx)(y, {
      titleText: h.intl.string(h.t.zdXqG9),
      fieldTextHook: h.t.QPrntS,
      metadataField: p.PC.CREATED_AT,
      existingPendingConfiguration: t.get(p.PC.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: h.intl.string(h.t.AuMxfz),
      fieldTextHook: h.t.IpQ4E8,
      metadataField: p.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
      existingPendingConfiguration: t.get(p.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: h.intl.string(h.t.WzvoSi),
      fieldTextHook: h.t.RH3VAx,
      metadataField: p.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT,
      existingPendingConfiguration: t.get(p.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: h.intl.string(h.t.VuSFzp),
      fieldTextHook: h.t.sn3m7v,
      metadataField: p.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT,
      existingPendingConfiguration: t.get(p.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i,
      operator: p.iO.LESS_THAN
    }), (0, r.jsx)(O, {
      titleText: h.intl.string(h.t.TEEYwa),
      fieldText: h.intl.string(h.t["39wASN"]),
      metadataField: p.PC.EBAY_TOP_RATED_SELLER,
      existingPendingConfiguration: t.get(p.PC.EBAY_TOP_RATED_SELLER),
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
  } = e, l = f.Z.get(b.ABu.TIKTOK);
  return (0, r.jsxs)(C, {
    children: [(0, r.jsx)(O, {
      titleText: h.intl.string(h.t.QHHwRR),
      fieldText: h.intl.string(h.t.E2iT8K),
      metadataField: p.PC.TIKTOK_VERIFIED,
      existingPendingConfiguration: t.get(p.PC.TIKTOK_VERIFIED),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: h.intl.string(h.t.WUSIHj),
      fieldTextHook: h.t.Zwey2Z,
      metadataField: p.PC.TIKTOK_FOLLOWER_COUNT,
      existingPendingConfiguration: t.get(p.PC.TIKTOK_FOLLOWER_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: h.intl.string(h.t.w1IVQk),
      fieldTextHook: h.t["Ueeex/"],
      metadataField: p.PC.TIKTOK_FOLLOWING_COUNT,
      existingPendingConfiguration: t.get(p.PC.TIKTOK_FOLLOWING_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: h.intl.string(h.t["1cFXJu"]),
      fieldTextHook: h.t.uq2UuO,
      metadataField: p.PC.TIKTOK_LIKES_COUNT,
      existingPendingConfiguration: t.get(p.PC.TIKTOK_LIKES_COUNT),
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
      case p.xn.INTEGER_LESS_THAN_EQUAL:
      case p.xn.DATETIME_LESS_THAN_EQUAL:
        o = p.iO.LESS_THAN;
        break;
      case p.xn.INTEGER_GREATER_THAN_EQUAL:
      case p.xn.DATETIME_GREATER_THAN_EQUAL:
        o = p.iO.GREATER_THAN;
        break;
      case p.xn.INTEGER_EQUAL:
      case p.xn.BOOLEAN_EQUAL:
        o = p.iO.EQUAL;
        break;
      case p.xn.INTEGER_NOT_EQUAL:
      case p.xn.BOOLEAN_NOT_EQUAL:
        o = p.iO.NOT_EQUAL;
        break;
      default:
        return null
    }
    switch (e.type) {
      case p.xn.INTEGER_LESS_THAN_EQUAL:
      case p.xn.INTEGER_GREATER_THAN_EQUAL:
      case p.xn.INTEGER_EQUAL:
      case p.xn.INTEGER_NOT_EQUAL:
      case p.xn.DATETIME_LESS_THAN_EQUAL:
      case p.xn.DATETIME_GREATER_THAN_EQUAL:
        return (0, r.jsx)(y, {
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
      case p.xn.BOOLEAN_EQUAL:
      case p.xn.BOOLEAN_NOT_EQUAL:
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
    s = (0, m.ZP)();
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
  let g = {
      configMetadataMap: u,
      onConfigurationChange: i,
      locked: l
    },
    p = null;
  switch (null == d ? true : d.type) {
    case b.ABu.STEAM:
      p = (0, r.jsx)(E, j({}, g));
      break;
    case b.ABu.TWITTER:
      p = (0, r.jsx)(I, j({}, g));
      break;
    case b.ABu.REDDIT:
      p = (0, r.jsx)(S, j({}, g));
      break;
    case b.ABu.BLUESKY:
      p = (0, r.jsx)(N, j({}, g));
      break;
    case b.ABu.PAYPAL:
      p = (0, r.jsx)(_, j({}, g));
      break;
    case b.ABu.EBAY:
      p = (0, r.jsx)(T, j({}, g));
      break;
    case b.ABu.TIKTOK:
      p = (0, r.jsx)(P, j({}, g));
      break;
    default:
      var h, O;
      p = (0, r.jsx)(w, (h = j({}, g), O = O = {
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
    className: x.container,
    children: [(0, r.jsx)(v, {
      theme: s,
      platform: d,
      integration: c,
      onRemove: () => i(null, t.index),
      locked: l
    }), p]
  })
}