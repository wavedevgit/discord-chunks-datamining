/** Chunk was on 71512 **/
/** chunk id: 530198, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => Z
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
    className: x.verifiedIcon
  });
  else if (null != a) {
    let e = (0, c.ap)(l) ? a.icon.lightSVG : a.icon.darkSVG;
    i = (0, r.jsx)("img", {
      className: x.verifiedIcon,
      src: e,
      alt: b.intl.formatToPlainString(b.t.rtm15O, {
        name: a.name
      })
    })
  }
  return (0, r.jsxs)("div", {
    className: s()(x.verifiedRow, (null == a ? true : a.hasMetadata) === true || (null == d ? true : d.role_connections_metadata) != null && (null == d ? true : d.role_connections_metadata.length) > 0 ? x.verifiedRowWithMetadata : null),
    children: [i, (0, r.jsx)(u.Text, {
      variant: "text-md/medium",
      className: x.verifiedText,
      children: b.intl.format(b.t.Nj0a3t, {
        platformName: null != (n = null == a ? true : a.name) ? n : null == d || null == (t = d.application) ? true : t.name
      })
    }), (0, r.jsx)(u.ua7, {
      text: b.intl.string(b.t.N86XcH),
      children: e => (0, r.jsx)("div", v(j({}, e), {
        children: (0, r.jsx)(u.hU, {
          "aria-label": b.intl.string(b.t.N86XcH),
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
  }(null == c || null == (t = c.configuration) ? true : t.value, j), [C, N] = i.useState(O), E = null != a ? b.intl.format(a, {
    count: C,
    metadataHook: () => C
  }) : (0, r.jsx)("span", {
    className: x.fieldText,
    children: s
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
          "aria-label": b.intl.string(b.t["FTmi9/"]),
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
    className: x.rulesTable,
    children: [(0, r.jsx)("thead", {
      children: (0, r.jsxs)("tr", {
        children: [(0, r.jsx)("th", {
          scope: "col"
        }), (0, r.jsx)("th", {
          scope: "col",
          children: (0, r.jsx)(u.nn4, {
            children: b.intl.string(b.t.TwDLVl)
          })
        }), (0, r.jsx)("th", {
          scope: "col",
          children: (0, r.jsx)(u.nn4, {
            children: b.intl.string(b.t.qDWJwc)
          })
        }), (0, r.jsx)("th", {
          scope: "col",
          children: (0, r.jsx)(u.nn4, {
            children: b.intl.string(b.t["5IF76e"])
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
      titleText: b.intl.string(b.t.zdXqGx),
      fieldTextHook: b.t.QPrntb,
      metadataField: h.PC.CREATED_AT,
      existingPendingConfiguration: t.get(h.PC.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: b.intl.string(b.t.IE0T3t),
      fieldTextHook: b.t.Zwey2d,
      metadataField: h.PC.BLUESKY_FOLLOWERS_COUNT,
      existingPendingConfiguration: t.get(h.PC.BLUESKY_FOLLOWERS_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: b.intl.string(b.t["LLE+Ul"]),
      fieldTextHook: b.t["UK2/m5"],
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
      titleText: b.intl.string(b.t.zdXqGx),
      fieldTextHook: b.t.QPrntb,
      metadataField: h.PC.CREATED_AT,
      existingPendingConfiguration: t.get(h.PC.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: b.intl.string(b.t.gLs17O),
      fieldTextHook: b.t.BWDpbm,
      metadataField: h.PC.STEAM_GAME_COUNT,
      existingPendingConfiguration: t.get(h.PC.STEAM_GAME_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: b.intl.formatToPlainString(b.t.j1Gf2t, {
        gameName: b.intl.string(b.t.HKUEZm)
      }),
      fieldTextHook: b.t["OGUX7+"],
      metadataField: h.PC.STEAM_ITEM_COUNT_DOTA2,
      existingPendingConfiguration: t.get(h.PC.STEAM_ITEM_COUNT_DOTA2),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: b.intl.formatToPlainString(b.t.j1Gf2t, {
        gameName: b.intl.string(b.t.C8p1Sk)
      }),
      fieldTextHook: b.t.Eq7h8P,
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
      titleText: b.intl.string(b.t.zdXqGx),
      fieldTextHook: b.t.QPrntb,
      metadataField: h.PC.CREATED_AT,
      existingPendingConfiguration: t.get(h.PC.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: b.intl.string(b.t.wbvDMz),
      fieldTextHook: b.t.Zwey2d,
      metadataField: h.PC.TWITTER_FOLLOWERS_COUNT,
      existingPendingConfiguration: t.get(h.PC.TWITTER_FOLLOWERS_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: b.intl.string(b.t["1B3DVl"]),
      fieldTextHook: b.t["lrmh/f"],
      metadataField: h.PC.TWITTER_STATUSES_COUNT,
      existingPendingConfiguration: t.get(h.PC.TWITTER_STATUSES_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(O, {
      titleText: b.intl.string(b.t.yz2CIC),
      fieldText: b.intl.string(b.t.E2iT8P),
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
      titleText: b.intl.string(b.t.zdXqGx),
      fieldTextHook: b.t.QPrntb,
      metadataField: h.PC.CREATED_AT,
      existingPendingConfiguration: t.get(h.PC.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: b.intl.string(b.t["3Xsroq"]),
      fieldTextHook: b.t.A4zKur,
      metadataField: h.PC.REDDIT_TOTAL_KARMA,
      existingPendingConfiguration: t.get(h.PC.REDDIT_TOTAL_KARMA),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(O, {
      titleText: b.intl.string(b.t.oWM95O),
      fieldText: b.intl.string(b.t["0cKdkZ"]),
      metadataField: h.PC.REDDIT_MOD,
      existingPendingConfiguration: t.get(h.PC.REDDIT_MOD),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(O, {
      titleText: b.intl.string(b.t["06rDHR"]),
      fieldText: b.intl.string(b.t["kCAN5+"]),
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
      titleText: b.intl.string(b.t.zdXqGx),
      fieldTextHook: b.t.QPrntb,
      metadataField: h.PC.CREATED_AT,
      existingPendingConfiguration: t.get(h.PC.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(O, {
      titleText: b.intl.string(b.t.IhXLy8),
      fieldText: b.intl.string(b.t["0JyE8P"]),
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
      titleText: b.intl.string(b.t.zdXqGx),
      fieldTextHook: b.t.QPrntb,
      metadataField: h.PC.CREATED_AT,
      existingPendingConfiguration: t.get(h.PC.CREATED_AT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: b.intl.string(b.t.AuMxf3),
      fieldTextHook: b.t.IpQ4Ex,
      metadataField: h.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
      existingPendingConfiguration: t.get(h.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: b.intl.string(b.t.WzvoSk),
      fieldTextHook: b.t.RH3VAw,
      metadataField: h.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT,
      existingPendingConfiguration: t.get(h.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: b.intl.string(b.t.VuSFzs),
      fieldTextHook: b.t.sn3m7u,
      metadataField: h.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT,
      existingPendingConfiguration: t.get(h.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i,
      operator: h.iO.LESS_THAN
    }), (0, r.jsx)(O, {
      titleText: b.intl.string(b.t.TEEYwc),
      fieldText: b.intl.string(b.t["39wASE"]),
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
      titleText: b.intl.string(b.t.QHHwRU),
      fieldText: b.intl.string(b.t.E2iT8P),
      metadataField: h.PC.TIKTOK_VERIFIED,
      existingPendingConfiguration: t.get(h.PC.TIKTOK_VERIFIED),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: b.intl.string(b.t.WUSIHh),
      fieldTextHook: b.t.Zwey2d,
      metadataField: h.PC.TIKTOK_FOLLOWER_COUNT,
      existingPendingConfiguration: t.get(h.PC.TIKTOK_FOLLOWER_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: b.intl.string(b.t.w1IVQk),
      fieldTextHook: b.t.Ueeex8,
      metadataField: h.PC.TIKTOK_FOLLOWING_COUNT,
      existingPendingConfiguration: t.get(h.PC.TIKTOK_FOLLOWING_COUNT),
      platform: l,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(y, {
      titleText: b.intl.string(b.t["1cFXJi"]),
      fieldTextHook: b.t.uq2UuL,
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

function Z(e) {
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
    className: x.container,
    children: [(0, r.jsx)(_, {
      theme: a,
      platform: d,
      integration: c,
      onRemove: () => i(null, t.index),
      locked: l
    }), h]
  })
}