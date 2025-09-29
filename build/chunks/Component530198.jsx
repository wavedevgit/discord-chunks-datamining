/** Chunk was on 27087 **/
/** chunk id: 530198, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => D
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk99690 = require("./99690.jsx"),
  Chunk410030 = require("./410030.js"),
  Chunk726542 = require("./726542.js"),
  Chunk981631 = require("./981631.js"),
  Chunk856651 = require("./856651.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk733109 = require("./733109.js");

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

function _(e) {
  var t, n;
  let i, {
    theme: l,
    platform: a,
    integration: d,
    onRemove: g,
    locked: p
  } = e;
  if ((null == d ? true : d.application) != null) o()(null != d.application.bot, "bot is null"), i = (0, r.jsx)(m.Z, {
    size: u.EFr.SIZE_24,
    user: d.application.bot,
    className: b.verifiedIcon
  });
  else if (null != a) {
    let e = (0, c.ap)(l) ? a.icon.lightSVG : a.icon.darkSVG;
    i = (0, r.jsx)("img", {
      className: b.verifiedIcon,
      src: e,
      alt: x.intl.formatToPlainString(x.t.rtm15O, {
        name: a.name
      })
    })
  }
  return (0, r.jsxs)("div", {
    className: s()(b.verifiedRow, (null == a ? true : a.hasMetadata) === true || (null == d ? true : d.role_connections_metadata) != null && (null == d ? true : d.role_connections_metadata.length) > 0 ? b.verifiedRowWithMetadata : null),
    children: [i, (0, r.jsx)(u.Text, {
      variant: "text-md/medium",
      className: b.verifiedText,
      children: x.intl.format(x.t.Nj0a3t, {
        platformName: null != (n = null == a ? true : a.name) ? n : null == d || null == (t = d.application) ? true : t.name
      })
    }), (0, r.jsx)(u.ua7, {
      text: x.intl.string(x.t.N86XcH),
      children: e => (0, r.jsx)("div", v(j({}, e), {
        children: (0, r.jsx)(u.hU, {
          "aria-label": x.intl.string(x.t.N86XcH),
          variant: "icon-only",
          onClick: g,
          disabled: p,
          icon: u.Dio,
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
    existingPendingConfiguration: s,
    platform: a,
    applicationId: o,
    onConfigurationChange: c,
    locked: m
  } = e, g = i.useId();
  return (0, r.jsxs)("tr", {
    className: b.ruleContainer,
    children: [(0, r.jsx)("th", {
      scope: "row",
      children: (0, r.jsx)(u.nn4, {
        children: (0, r.jsx)("label", {
          htmlFor: g,
          children: t
        })
      })
    }), (0, r.jsxs)("td", {
      className: b.ruleContainerLabel,
      children: [(0, r.jsx)(u.Text, {
        variant: "text-md/bold",
        "aria-hidden": "true",
        children: t
      }), (0, r.jsx)("div", {
        className: b.numericalRuleSubItemContainer,
        children: (0, r.jsx)(u.Text, {
          variant: "text-md/normal",
          children: n
        })
      })]
    }), (0, r.jsx)("td", {}), (0, r.jsx)("td", {
      children: (0, r.jsx)(d.T2, {
        id: g,
        checked: (null == s ? true : s.configuration.value) === "1",
        onChange: e => {
          var t, n;
          let r = null;
          e && (r = {
            connectionType: null != (t = null == a ? true : a.type) ? t : h.Kt,
            applicationId: o,
            connectionMetadataField: l,
            operator: h.iO.EQUAL,
            value: "1"
          }), c(r, null != (n = null == s ? true : s.index) ? n : false)
        },
        disabled: m
      })
    })]
  }, l)
}

function y(e) {
  var t, n;
  let {
    titleText: l,
    fieldText: s,
    fieldTextHook: a,
    metadataField: o,
    existingPendingConfiguration: c,
    platform: m,
    applicationId: g,
    onConfigurationChange: p,
    locked: f,
    operator: j
  } = e, v = (null == c ? true : c.configuration) != null, _ = null != (n = null == c ? true : c.index) ? n : false, [O, y] = function(e, t) {
    let n = null != t ? t : h.iO.GREATER_THAN,
      r = Math.round(Number(null != e ? e : 0));
    return n === h.iO.GREATER_THAN ? r = Math.max(1, r + 1) : n === h.iO.LESS_THAN && (r = Math.max(0, r - 1)), [r.toString(), n]
  }(null == c || null == (t = c.configuration) ? true : t.value, j), [C, N] = i.useState(O), E = null != a ? x.intl.format(a, {
    count: C,
    metadataHook: () => C
  }) : (0, r.jsx)("span", {
    className: b.fieldText,
    children: s
  }), I = i.useId();
  return (0, r.jsxs)("tr", {
    className: b.ruleContainer,
    children: [(0, r.jsx)("th", {
      scope: "row",
      children: (0, r.jsx)(u.nn4, {
        children: (0, r.jsx)("label", {
          htmlFor: I,
          children: l
        })
      })
    }), (0, r.jsxs)("td", {
      className: b.ruleContainerLabel,
      children: [(0, r.jsx)(u.Text, {
        variant: "text-md/bold",
        "aria-hidden": "true",
        children: l
      }), (0, r.jsx)("div", {
        className: b.numericalRuleSubItemContainer,
        children: (0, r.jsx)(u.Text, {
          variant: "text-md/normal",
          children: E
        })
      })]
    }), (0, r.jsx)("td", {
      children: (0, r.jsx)("div", {
        className: b.numericalRuleInput,
        children: (0, r.jsx)(u.oil, {
          "aria-label": x.intl.string(x.t["FTmi9/"]),
          type: "number",
          value: C,
          onChange: e => {
            if (N(e), null == c) return;
            let [t, n] = function(e, t) {
              let n = null != t ? t : h.iO.GREATER_THAN,
                r = Math.round(Number(null != e ? e : 0));
              return n === h.iO.GREATER_THAN ? r = Math.max(0, r - 1) : n === h.iO.LESS_THAN && (r = Math.max(1, r + 1)), [r.toString(), n]
            }(e, j);
            if ("" !== e) {
              var r;
              p({
                connectionType: null != (r = null == m ? true : m.type) ? r : h.Kt,
                applicationId: g,
                connectionMetadataField: o,
                operator: n,
                value: t
              }, _)
            }
          },
          disabled: f || !v
        })
      })
    }), (0, r.jsx)("td", {
      children: (0, r.jsx)(d.T2, {
        id: I,
        checked: v,
        onChange: e => {
          var t, n;
          let r = null;
          e && (r = {
            connectionType: null != (t = null == m ? true : m.type) ? t : h.Kt,
            applicationId: g,
            connectionMetadataField: o,
            operator: y,
            value: C
          }), p(r, null != (n = null == c ? true : c.index) ? n : false)
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
    className: b.rulesTable,
    children: [(0, r.jsx)("thead", {
      children: (0, r.jsxs)("tr", {
        children: [(0, r.jsx)("th", {
          scope: "col"
        }), (0, r.jsx)("th", {
          scope: "col",
          children: (0, r.jsx)(u.nn4, {
            children: x.intl.string(x.t.TwDLVl)
          })
        }), (0, r.jsx)("th", {
          scope: "col",
          children: (0, r.jsx)(u.nn4, {
            children: x.intl.string(x.t.qDWJwc)
          })
        }), (0, r.jsx)("th", {
          scope: "col",
          children: (0, r.jsx)(u.nn4, {
            children: x.intl.string(x.t["5IF76e"])
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
  } = e, l = p.Z.get(f.ABu.BLUESKY);
  return (0, r.jsxs)(C, {
    children: [(0, r.jsx)(y, {
      titleText: x.intl.string(x.t.zdXqGx),
      fieldTextHook: x.t.QPrntb,
      metadataField: h.PC.CREATED_AT,
      existingPendingConfiguration: t.get(h.PC.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: x.intl.string(x.t.IE0T3t),
      fieldTextHook: x.t.Zwey2d,
      metadataField: h.PC.BLUESKY_FOLLOWERS_COUNT,
      existingPendingConfiguration: t.get(h.PC.BLUESKY_FOLLOWERS_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: x.intl.string(x.t["LLE+Ul"]),
      fieldTextHook: x.t["UK2/m5"],
      metadataField: h.PC.BLUESKY_STATUSES_COUNT,
      existingPendingConfiguration: t.get(h.PC.BLUESKY_STATUSES_COUNT),
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
  } = e, l = p.Z.get(f.ABu.STEAM);
  return (0, r.jsxs)(C, {
    children: [(0, r.jsx)(y, {
      titleText: x.intl.string(x.t.zdXqGx),
      fieldTextHook: x.t.QPrntb,
      metadataField: h.PC.CREATED_AT,
      existingPendingConfiguration: t.get(h.PC.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: x.intl.string(x.t.gLs17O),
      fieldTextHook: x.t.BWDpbm,
      metadataField: h.PC.STEAM_GAME_COUNT,
      existingPendingConfiguration: t.get(h.PC.STEAM_GAME_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: x.intl.formatToPlainString(x.t.j1Gf2t, {
        gameName: x.intl.string(x.t.HKUEZm)
      }),
      fieldTextHook: x.t["OGUX7+"],
      metadataField: h.PC.STEAM_ITEM_COUNT_DOTA2,
      existingPendingConfiguration: t.get(h.PC.STEAM_ITEM_COUNT_DOTA2),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: x.intl.formatToPlainString(x.t.j1Gf2t, {
        gameName: x.intl.string(x.t.C8p1Sk)
      }),
      fieldTextHook: x.t.Eq7h8P,
      metadataField: h.PC.STEAM_ITEM_COUNT_TF2,
      existingPendingConfiguration: t.get(h.PC.STEAM_ITEM_COUNT_TF2),
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
  } = e, l = p.Z.get(f.ABu.TWITTER);
  return (0, r.jsxs)(C, {
    children: [(0, r.jsx)(y, {
      titleText: x.intl.string(x.t.zdXqGx),
      fieldTextHook: x.t.QPrntb,
      metadataField: h.PC.CREATED_AT,
      existingPendingConfiguration: t.get(h.PC.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: x.intl.string(x.t.wbvDMz),
      fieldTextHook: x.t.Zwey2d,
      metadataField: h.PC.TWITTER_FOLLOWERS_COUNT,
      existingPendingConfiguration: t.get(h.PC.TWITTER_FOLLOWERS_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: x.intl.string(x.t["1B3DVl"]),
      fieldTextHook: x.t["lrmh/f"],
      metadataField: h.PC.TWITTER_STATUSES_COUNT,
      existingPendingConfiguration: t.get(h.PC.TWITTER_STATUSES_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(O, {
      titleText: x.intl.string(x.t.yz2CIC),
      fieldText: x.intl.string(x.t.E2iT8P),
      metadataField: h.PC.TWITTER_VERIFIED,
      existingPendingConfiguration: t.get(h.PC.TWITTER_VERIFIED),
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
  } = e, l = p.Z.get(f.ABu.REDDIT);
  return (0, r.jsxs)(C, {
    children: [(0, r.jsx)(y, {
      titleText: x.intl.string(x.t.zdXqGx),
      fieldTextHook: x.t.QPrntb,
      metadataField: h.PC.CREATED_AT,
      existingPendingConfiguration: t.get(h.PC.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: x.intl.string(x.t["3Xsroq"]),
      fieldTextHook: x.t.A4zKur,
      metadataField: h.PC.REDDIT_TOTAL_KARMA,
      existingPendingConfiguration: t.get(h.PC.REDDIT_TOTAL_KARMA),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(O, {
      titleText: x.intl.string(x.t.oWM95O),
      fieldText: x.intl.string(x.t["0cKdkZ"]),
      metadataField: h.PC.REDDIT_MOD,
      existingPendingConfiguration: t.get(h.PC.REDDIT_MOD),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(O, {
      titleText: x.intl.string(x.t["06rDHR"]),
      fieldText: x.intl.string(x.t["kCAN5+"]),
      metadataField: h.PC.REDDIT_GOLD,
      existingPendingConfiguration: t.get(h.PC.REDDIT_GOLD),
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
  } = e, l = p.Z.get(f.ABu.PAYPAL);
  return (0, r.jsxs)(C, {
    children: [(0, r.jsx)(y, {
      titleText: x.intl.string(x.t.zdXqGx),
      fieldTextHook: x.t.QPrntb,
      metadataField: h.PC.CREATED_AT,
      existingPendingConfiguration: t.get(h.PC.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(O, {
      titleText: x.intl.string(x.t.IhXLy8),
      fieldText: x.intl.string(x.t["0JyE8P"]),
      metadataField: h.PC.PAYPAL_VERIFIED,
      existingPendingConfiguration: t.get(h.PC.PAYPAL_VERIFIED),
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
  } = e, l = p.Z.get(f.ABu.EBAY);
  return (0, r.jsxs)(C, {
    children: [(0, r.jsx)(y, {
      titleText: x.intl.string(x.t.zdXqGx),
      fieldTextHook: x.t.QPrntb,
      metadataField: h.PC.CREATED_AT,
      existingPendingConfiguration: t.get(h.PC.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: x.intl.string(x.t.AuMxf3),
      fieldTextHook: x.t.IpQ4Ex,
      metadataField: h.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
      existingPendingConfiguration: t.get(h.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: x.intl.string(x.t.WzvoSk),
      fieldTextHook: x.t.RH3VAw,
      metadataField: h.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT,
      existingPendingConfiguration: t.get(h.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: x.intl.string(x.t.VuSFzs),
      fieldTextHook: x.t.sn3m7u,
      metadataField: h.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT,
      existingPendingConfiguration: t.get(h.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i,
      operator: h.iO.LESS_THAN
    }), (0, r.jsx)(O, {
      titleText: x.intl.string(x.t.TEEYwc),
      fieldText: x.intl.string(x.t["39wASE"]),
      metadataField: h.PC.EBAY_TOP_RATED_SELLER,
      existingPendingConfiguration: t.get(h.PC.EBAY_TOP_RATED_SELLER),
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
    locked: i
  } = e, l = p.Z.get(f.ABu.TIKTOK);
  return (0, r.jsxs)(C, {
    children: [(0, r.jsx)(O, {
      titleText: x.intl.string(x.t.QHHwRU),
      fieldText: x.intl.string(x.t.E2iT8P),
      metadataField: h.PC.TIKTOK_VERIFIED,
      existingPendingConfiguration: t.get(h.PC.TIKTOK_VERIFIED),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: x.intl.string(x.t.WUSIHh),
      fieldTextHook: x.t.Zwey2d,
      metadataField: h.PC.TIKTOK_FOLLOWER_COUNT,
      existingPendingConfiguration: t.get(h.PC.TIKTOK_FOLLOWER_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: x.intl.string(x.t.w1IVQk),
      fieldTextHook: x.t.Ueeex8,
      metadataField: h.PC.TIKTOK_FOLLOWING_COUNT,
      existingPendingConfiguration: t.get(h.PC.TIKTOK_FOLLOWING_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: x.intl.string(x.t["1cFXJi"]),
      fieldTextHook: x.t.uq2UuL,
      metadataField: h.PC.TIKTOK_LIKES_COUNT,
      existingPendingConfiguration: t.get(h.PC.TIKTOK_LIKES_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    })]
  })
}

function R(e) {
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
      case h.xn.INTEGER_LESS_THAN_EQUAL:
      case h.xn.DATETIME_LESS_THAN_EQUAL:
        o = h.iO.LESS_THAN;
        break;
      case h.xn.INTEGER_GREATER_THAN_EQUAL:
      case h.xn.DATETIME_GREATER_THAN_EQUAL:
        o = h.iO.GREATER_THAN;
        break;
      case h.xn.INTEGER_EQUAL:
      case h.xn.BOOLEAN_EQUAL:
        o = h.iO.EQUAL;
        break;
      case h.xn.INTEGER_NOT_EQUAL:
      case h.xn.BOOLEAN_NOT_EQUAL:
        o = h.iO.NOT_EQUAL;
        break;
      default:
        return null
    }
    switch (e.type) {
      case h.xn.INTEGER_LESS_THAN_EQUAL:
      case h.xn.INTEGER_GREATER_THAN_EQUAL:
      case h.xn.INTEGER_EQUAL:
      case h.xn.INTEGER_NOT_EQUAL:
      case h.xn.DATETIME_LESS_THAN_EQUAL:
      case h.xn.DATETIME_GREATER_THAN_EQUAL:
        return (0, r.jsx)(y, {
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
      case h.xn.BOOLEAN_EQUAL:
      case h.xn.BOOLEAN_NOT_EQUAL:
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

function D(e) {
  let t, {
      configurationItems: n,
      onConfigurationChange: i,
      locked: l,
      integrations: s
    } = e,
    a = (0, g.ZP)();
  if (n.length < 1) return null;
  let o = n[0].configuration.applicationId,
    c = null != o ? null == s ? true : s.find(e => {
      var t;
      return (null == (t = e.application) ? true : t.id) === o
    }) : true;
  if (null != o && null == c) return null;
  let d = null;
  try {
    d = p.Z.get(n[0].configuration.connectionType)
  } catch (e) {}
  let u = new Map;
  n.forEach(e => {
    null != e.configuration.connectionMetadataField ? u.set(e.configuration.connectionMetadataField, e) : null == e.configuration.value && null == e.configuration.operator && null == e.configuration.connectionMetadataField && (t = e)
  });
  let m = {
      configMetadataMap: u,
      onConfigurationChange: i,
      locked: l
    },
    h = null;
  switch (null == d ? true : d.type) {
    case f.ABu.STEAM:
      h = (0, r.jsx)(E, j({}, m));
      break;
    case f.ABu.TWITTER:
      h = (0, r.jsx)(I, j({}, m));
      break;
    case f.ABu.REDDIT:
      h = (0, r.jsx)(S, j({}, m));
      break;
    case f.ABu.BLUESKY:
      h = (0, r.jsx)(N, j({}, m));
      break;
    case f.ABu.PAYPAL:
      h = (0, r.jsx)(T, j({}, m));
      break;
    case f.ABu.EBAY:
      h = (0, r.jsx)(P, j({}, m));
      break;
    case f.ABu.TIKTOK:
      h = (0, r.jsx)(w, j({}, m));
      break;
    default:
      h = (0, r.jsx)(R, v(j({}, m), {
        integration: c
      }))
  }
  return (0, r.jsxs)("div", {
    className: b.container,
    children: [(0, r.jsx)(_, {
      theme: a,
      platform: d,
      integration: c,
      onRemove: () => i(null, t.index),
      locked: l
    }), h]
  })
}