/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => B
}), n(47120), n(266796);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(512722),
  o = n.n(l),
  A = n(780384),
  c = n(481060),
  d = n(99690),
  u = n(410030),
  g = n(726542),
  f = n(981631),
  m = n(856651),
  p = n(388032),
  h = n(151033);

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function b(e) {
  var t, n;
  let i, {
    theme: s,
    platform: l,
    integration: u,
    onRemove: g,
    locked: f
  } = e;
  if ((null == u ? void 0 : u.application) != null) o()(null != u.application.bot, "bot is null"), i = (0, r.jsx)(d.Z, {
    size: c.EFr.SIZE_24,
    user: u.application.bot,
    className: h.verifiedIcon
  });
  else if (null != l) {
    let e = (0, A.ap)(s) ? l.icon.lightSVG : l.icon.darkSVG;
    i = (0, r.jsx)("img", {
      className: h.verifiedIcon,
      src: e,
      alt: p.NW.formatToPlainString(p.t.rtm15O, {
        name: l.name
      })
    })
  }
  return (0, r.jsxs)("div", {
    className: a()(h.verifiedRow, (null == l ? void 0 : l.hasMetadata) === !0 || (null == u ? void 0 : u.role_connections_metadata) != null && (null == u ? void 0 : u.role_connections_metadata.length) > 0 ? h.verifiedRowWithMetadata : null),
    children: [i, (0, r.jsx)(c.Text, {
      variant: "text-md/medium",
      className: h.verifiedText,
      children: p.NW.format(p.t.Nj0a3t, {
        platformName: null !== (n = null == l ? void 0 : l.name) && void 0 !== n ? n : null == u ? void 0 : null === (t = u.application) || void 0 === t ? void 0 : t.name
      })
    }), (0, r.jsx)(c.zxk, {
      "aria-label": p.NW.string(p.t.N86XcH),
      size: c.zxk.Sizes.TINY,
      look: c.zxk.Looks.BLANK,
      onClick: g,
      disabled: f,
      className: h.closeButton,
      children: (0, r.jsx)(c.ua7, {
        text: p.NW.string(p.t.N86XcH),
        children: e => (0, r.jsx)(c.Dio, C({
          size: "md",
          color: "currentColor",
          className: h.closeIcon
        }, e))
      })
    })]
  })
}

function v(e) {
  var t, n, s;
  let {
    inputRef: a,
    existingPendingConfiguration: l,
    locked: o,
    onConfigurationChange: A,
    platform: d,
    applicationId: u,
    metadataField: g,
    operator: f
  } = e, p = null !== (n = null == l ? void 0 : l.index) && void 0 !== n ? n : -1, C = null != f ? f : m.iO.GREATER_THAN, b = Math.round(Number(null !== (s = null == l ? void 0 : null === (t = l.configuration) || void 0 === t ? void 0 : t.value) && void 0 !== s ? s : 0));
  C === m.iO.GREATER_THAN ? b = Math.max(1, b + 1) : C === m.iO.LESS_THAN && (b = Math.max(0, b - 1));
  let [v, x] = i.useState(b.toString());
  return i.useEffect(() => {
    x(v)
  }, [v]), (0, r.jsx)(c.oil, {
    inputRef: a,
    type: "number",
    className: h.numericalRuleInput,
    size: c.oil.Sizes.MINI,
    value: v,
    onChange: e => {
      if (null != l) {
        if ("" !== e) {
          var t;
          let n = Math.round(Number(e));
          C === m.iO.GREATER_THAN ? n = Math.max(0, n - 1) : C === m.iO.LESS_THAN && (n = Math.max(1, n + 1)), A({
            connectionType: null !== (t = null == d ? void 0 : d.type) && void 0 !== t ? t : m.Kt,
            applicationId: u,
            connectionMetadataField: g,
            operator: C,
            value: n.toString()
          }, p)
        }
        x(e)
      }
    },
    disabled: o
  }, g)
}

function x(e) {
  let {
    titleText: t,
    fieldText: n,
    metadataField: i,
    existingPendingConfiguration: s,
    platform: a,
    applicationId: l,
    onConfigurationChange: o,
    locked: A
  } = e;
  return (0, r.jsxs)("div", {
    className: h.ruleContainer,
    children: [(0, r.jsxs)("div", {
      children: [(0, r.jsx)(c.Text, {
        variant: "text-md/bold",
        className: h.ruleItemHeader,
        children: t
      }), (0, r.jsx)("div", {
        className: h.numericalRuleSubItemContainer,
        children: (0, r.jsx)(c.Text, {
          variant: "text-md/normal",
          className: h.numericalRuleSubText,
          children: n
        })
      })]
    }), (0, r.jsx)(c.rsf, {
      className: h.ruleItemSwitch,
      checked: (null == s ? void 0 : s.configuration.value) === "1",
      onChange: e => {
        var t, n;
        let r = null;
        e && (r = {
          connectionType: null !== (t = null == a ? void 0 : a.type) && void 0 !== t ? t : m.Kt,
          applicationId: l,
          connectionMetadataField: i,
          operator: m.iO.EQUAL,
          value: "1"
        }), o(r, null !== (n = null == s ? void 0 : s.index) && void 0 !== n ? n : -1)
      },
      disabled: A
    })]
  }, i)
}

function N(e) {
  let {
    titleText: t,
    fieldText: n,
    fieldTextHook: s,
    metadataField: a,
    existingPendingConfiguration: l,
    platform: o,
    applicationId: A,
    onConfigurationChange: d,
    locked: u,
    operator: g
  } = e, f = i.createRef(), C = (null == l ? void 0 : l.configuration) != null, b = (0, r.jsx)(v, {
    inputRef: f,
    metadataField: a,
    existingPendingConfiguration: l,
    locked: u || !C,
    onConfigurationChange: d,
    platform: o,
    operator: g,
    applicationId: A
  }, a), x = null != s ? p.NW.format(s, {
    metadataHook: () => b
  }) : (0, r.jsxs)(r.Fragment, {
    children: [b, (0, r.jsx)("span", {
      className: h.fieldText,
      children: n
    })]
  });
  return (0, r.jsxs)("div", {
    className: h.ruleContainer,
    children: [(0, r.jsxs)("div", {
      className: h.ruleContainerLabel,
      children: [(0, r.jsx)(c.Text, {
        variant: "text-md/bold",
        className: h.ruleItemHeader,
        children: t
      }), (0, r.jsx)("div", {
        className: h.numericalRuleSubItemContainer,
        children: (0, r.jsx)(c.Text, {
          variant: "text-md/normal",
          className: h.numericalRuleSubText,
          children: x
        })
      })]
    }), (0, r.jsx)(c.rsf, {
      className: h.ruleItemSwitch,
      checked: C,
      onChange: e => {
        var t, n, r;
        let i = null;
        if (e) {
          let e = null != g ? g : m.iO.GREATER_THAN,
            r = Math.round(Number(null === (t = f.current) || void 0 === t ? void 0 : t.value));
          e === m.iO.GREATER_THAN ? r = Math.max(0, r - 1) : e === m.iO.LESS_THAN && (r = Math.max(1, r + 1)), i = {
            connectionType: null !== (n = null == o ? void 0 : o.type) && void 0 !== n ? n : m.Kt,
            applicationId: A,
            connectionMetadataField: a,
            operator: e,
            value: r.toString()
          }
        }
        d(i, null !== (r = null == l ? void 0 : l.index) && void 0 !== r ? r : -1)
      },
      disabled: u
    })]
  }, a)
}

function j(e) {
  let {
    configMetadataMap: t,
    onConfigurationChange: n,
    locked: i
  } = e, s = g.Z.get(f.ABu.STEAM);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(N, {
      titleText: p.NW.string(p.t.zdXqGx),
      fieldTextHook: p.t.REyUZ2,
      metadataField: m.PC.CREATED_AT,
      existingPendingConfiguration: t.get(m.PC.CREATED_AT),
      platform: s,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(N, {
      titleText: p.NW.string(p.t.gLs17O),
      fieldTextHook: p.t.zVJxqq,
      metadataField: m.PC.STEAM_GAME_COUNT,
      existingPendingConfiguration: t.get(m.PC.STEAM_GAME_COUNT),
      platform: s,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(N, {
      titleText: p.NW.formatToPlainString(p.t.j1Gf2t, {
        gameName: p.NW.string(p.t.HKUEZm)
      }),
      fieldTextHook: p.t.ZCNdDw,
      metadataField: m.PC.STEAM_ITEM_COUNT_DOTA2,
      existingPendingConfiguration: t.get(m.PC.STEAM_ITEM_COUNT_DOTA2),
      platform: s,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(N, {
      titleText: p.NW.formatToPlainString(p.t.j1Gf2t, {
        gameName: p.NW.string(p.t.C8p1Sk)
      }),
      fieldTextHook: p.t.MCHnKy,
      metadataField: m.PC.STEAM_ITEM_COUNT_TF2,
      existingPendingConfiguration: t.get(m.PC.STEAM_ITEM_COUNT_TF2),
      platform: s,
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
  } = e, s = g.Z.get(f.ABu.TWITTER);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(N, {
      titleText: p.NW.string(p.t.zdXqGx),
      fieldTextHook: p.t.REyUZ2,
      metadataField: m.PC.CREATED_AT,
      existingPendingConfiguration: t.get(m.PC.CREATED_AT),
      platform: s,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(N, {
      titleText: p.NW.string(p.t.wbvDMz),
      fieldTextHook: p.t["/w/EYm"],
      metadataField: m.PC.TWITTER_FOLLOWERS_COUNT,
      existingPendingConfiguration: t.get(m.PC.TWITTER_FOLLOWERS_COUNT),
      platform: s,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(N, {
      titleText: p.NW.string(p.t["1B3DVl"]),
      fieldTextHook: p.t["+NFH7u"],
      metadataField: m.PC.TWITTER_STATUSES_COUNT,
      existingPendingConfiguration: t.get(m.PC.TWITTER_STATUSES_COUNT),
      platform: s,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(x, {
      titleText: p.NW.string(p.t.yz2CIC),
      fieldText: p.NW.string(p.t.E2iT8P),
      metadataField: m.PC.TWITTER_VERIFIED,
      existingPendingConfiguration: t.get(m.PC.TWITTER_VERIFIED),
      platform: s,
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
  } = e, s = g.Z.get(f.ABu.REDDIT);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(N, {
      titleText: p.NW.string(p.t.zdXqGx),
      fieldTextHook: p.t.REyUZ2,
      metadataField: m.PC.CREATED_AT,
      existingPendingConfiguration: t.get(m.PC.CREATED_AT),
      platform: s,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(N, {
      titleText: p.NW.string(p.t["3Xsroq"]),
      fieldTextHook: p.t.TLgZho,
      metadataField: m.PC.REDDIT_TOTAL_KARMA,
      existingPendingConfiguration: t.get(m.PC.REDDIT_TOTAL_KARMA),
      platform: s,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(x, {
      titleText: p.NW.string(p.t.oWM95O),
      fieldText: p.NW.string(p.t["0cKdkZ"]),
      metadataField: m.PC.REDDIT_MOD,
      existingPendingConfiguration: t.get(m.PC.REDDIT_MOD),
      platform: s,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(x, {
      titleText: p.NW.string(p.t["06rDHR"]),
      fieldText: p.NW.string(p.t["kCAN5+"]),
      metadataField: m.PC.REDDIT_GOLD,
      existingPendingConfiguration: t.get(m.PC.REDDIT_GOLD),
      platform: s,
      onConfigurationChange: n,
      locked: i
    })]
  })
}

function O(e) {
  let {
    configMetadataMap: t,
    onConfigurationChange: n,
    locked: i
  } = e, s = g.Z.get(f.ABu.PAYPAL);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(N, {
      titleText: p.NW.string(p.t.zdXqGx),
      fieldTextHook: p.t.REyUZ2,
      metadataField: m.PC.CREATED_AT,
      existingPendingConfiguration: t.get(m.PC.CREATED_AT),
      platform: s,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(x, {
      titleText: p.NW.string(p.t.IhXLy8),
      fieldText: p.NW.string(p.t["0JyE8P"]),
      metadataField: m.PC.PAYPAL_VERIFIED,
      existingPendingConfiguration: t.get(m.PC.PAYPAL_VERIFIED),
      platform: s,
      onConfigurationChange: n,
      locked: i
    })]
  })
}

function y(e) {
  let {
    configMetadataMap: t,
    onConfigurationChange: n,
    locked: i
  } = e, s = g.Z.get(f.ABu.EBAY);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(N, {
      titleText: p.NW.string(p.t.zdXqGx),
      fieldTextHook: p.t.REyUZ2,
      metadataField: m.PC.CREATED_AT,
      existingPendingConfiguration: t.get(m.PC.CREATED_AT),
      platform: s,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(N, {
      titleText: p.NW.string(p.t.AuMxf3),
      fieldTextHook: p.t.oTFOe3,
      metadataField: m.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
      existingPendingConfiguration: t.get(m.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE),
      platform: s,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(N, {
      titleText: p.NW.string(p.t.WzvoSk),
      fieldTextHook: p.t.RH3VAw,
      metadataField: m.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT,
      existingPendingConfiguration: t.get(m.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT),
      platform: s,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(N, {
      titleText: p.NW.string(p.t.VuSFzs),
      fieldTextHook: p.t.sn3m7u,
      metadataField: m.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT,
      existingPendingConfiguration: t.get(m.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT),
      platform: s,
      onConfigurationChange: n,
      locked: i,
      operator: m.iO.LESS_THAN
    }), (0, r.jsx)(x, {
      titleText: p.NW.string(p.t.TEEYwc),
      fieldText: p.NW.string(p.t["39wASE"]),
      metadataField: m.PC.EBAY_TOP_RATED_SELLER,
      existingPendingConfiguration: t.get(m.PC.EBAY_TOP_RATED_SELLER),
      platform: s,
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
  } = e, s = g.Z.get(f.ABu.TIKTOK);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(x, {
      titleText: p.NW.string(p.t.QHHwRU),
      fieldText: p.NW.string(p.t.E2iT8P),
      metadataField: m.PC.TIKTOK_VERIFIED,
      existingPendingConfiguration: t.get(m.PC.TIKTOK_VERIFIED),
      platform: s,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(N, {
      titleText: p.NW.string(p.t.WUSIHh),
      fieldTextHook: p.t["/w/EYm"],
      metadataField: m.PC.TIKTOK_FOLLOWER_COUNT,
      existingPendingConfiguration: t.get(m.PC.TIKTOK_FOLLOWER_COUNT),
      platform: s,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(N, {
      titleText: p.NW.string(p.t.w1IVQk),
      fieldTextHook: p.t.JHEsY2,
      metadataField: m.PC.TIKTOK_FOLLOWING_COUNT,
      existingPendingConfiguration: t.get(m.PC.TIKTOK_FOLLOWING_COUNT),
      platform: s,
      onConfigurationChange: n,
      locked: i
    }), (0, r.jsx)(N, {
      titleText: p.NW.string(p.t["1cFXJi"]),
      fieldTextHook: p.t.tEFCYG,
      metadataField: m.PC.TIKTOK_LIKES_COUNT,
      existingPendingConfiguration: t.get(m.PC.TIKTOK_LIKES_COUNT),
      platform: s,
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
    integration: s
  } = e;
  return null == s || null == s.role_connections_metadata ? null : s.role_connections_metadata.map(e => {
    var a, l;
    let o;
    switch (e.type) {
      case m.xn.INTEGER_LESS_THAN_EQUAL:
      case m.xn.DATETIME_LESS_THAN_EQUAL:
        o = m.iO.LESS_THAN;
        break;
      case m.xn.INTEGER_GREATER_THAN_EQUAL:
      case m.xn.DATETIME_GREATER_THAN_EQUAL:
        o = m.iO.GREATER_THAN;
        break;
      case m.xn.INTEGER_EQUAL:
      case m.xn.BOOLEAN_EQUAL:
        o = m.iO.EQUAL;
        break;
      case m.xn.INTEGER_NOT_EQUAL:
      case m.xn.BOOLEAN_NOT_EQUAL:
        o = m.iO.NOT_EQUAL;
        break;
      default:
        return null
    }
    switch (e.type) {
      case m.xn.INTEGER_LESS_THAN_EQUAL:
      case m.xn.INTEGER_GREATER_THAN_EQUAL:
      case m.xn.INTEGER_EQUAL:
      case m.xn.INTEGER_NOT_EQUAL:
      case m.xn.DATETIME_LESS_THAN_EQUAL:
      case m.xn.DATETIME_GREATER_THAN_EQUAL:
        return (0, r.jsx)(N, {
          titleText: e.name,
          fieldText: e.description,
          metadataField: e.key,
          existingPendingConfiguration: t.get(e.key),
          platform: null,
          onConfigurationChange: n,
          locked: i,
          operator: o,
          applicationId: null === (a = s.application) || void 0 === a ? void 0 : a.id
        }, e.key);
      case m.xn.BOOLEAN_EQUAL:
      case m.xn.BOOLEAN_NOT_EQUAL:
        return (0, r.jsx)(x, {
          titleText: e.name,
          fieldText: e.description,
          metadataField: e.key,
          existingPendingConfiguration: t.get(e.key),
          platform: null,
          onConfigurationChange: n,
          locked: i,
          operator: o,
          applicationId: null === (l = s.application) || void 0 === l ? void 0 : l.id
        }, e.key)
    }
  })
}

function B(e) {
  let t, {
      configurationItems: n,
      onConfigurationChange: i,
      locked: s,
      integrations: a
    } = e,
    l = (0, u.ZP)();
  if (n.length < 1) return null;
  let o = n[0].configuration.applicationId,
    A = null != o ? null == a ? void 0 : a.find(e => {
      var t;
      return (null === (t = e.application) || void 0 === t ? void 0 : t.id) === o
    }) : void 0;
  if (null != o && null == A) return null;
  let c = null;
  try {
    c = g.Z.get(n[0].configuration.connectionType)
  } catch (e) {}
  let d = new Map;
  n.forEach(e => {
    null != e.configuration.connectionMetadataField ? d.set(e.configuration.connectionMetadataField, e) : null == e.configuration.value && null == e.configuration.operator && null == e.configuration.connectionMetadataField && (t = e)
  });
  let m = {
      configMetadataMap: d,
      onConfigurationChange: i,
      locked: s
    },
    p = null;
  switch (null == c ? void 0 : c.type) {
    case f.ABu.STEAM:
      p = (0, r.jsx)(j, C({}, m));
      break;
    case f.ABu.TWITTER:
      p = (0, r.jsx)(E, C({}, m));
      break;
    case f.ABu.REDDIT:
      p = (0, r.jsx)(I, C({}, m));
      break;
    case f.ABu.PAYPAL:
      p = (0, r.jsx)(O, C({}, m));
      break;
    case f.ABu.EBAY:
      p = (0, r.jsx)(y, C({}, m));
      break;
    case f.ABu.TIKTOK:
      p = (0, r.jsx)(w, C({}, m));
      break;
    default:
      var v, x;
      p = (0, r.jsx)(P, (v = C({}, m), x = x = {
        integration: A
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(x)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(x)).forEach(function(e) {
        Object.defineProperty(v, e, Object.getOwnPropertyDescriptor(x, e))
      }), v))
  }
  return (0, r.jsxs)("div", {
    className: h.container,
    children: [(0, r.jsx)(b, {
      theme: l,
      platform: c,
      integration: A,
      onRemove: () => i(null, t.index),
      locked: s
    }), p]
  })
}