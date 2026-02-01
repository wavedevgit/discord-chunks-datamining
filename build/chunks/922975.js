/** Chunk was on web.js **/
/** chunk id: 922975, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $7: () => G,
  $O: () => K,
  A_: () => ee,
  I8: () => k,
  It: () => V,
  Ts: () => en,
  UN: () => Z,
  V_: () => Q,
  W5: () => B,
  Zw: () => $,
  bL: () => j,
  d0: () => el,
  hh: () => X,
  j1: () => es,
  lK: () => U,
  lZ: () => Y,
  rf: () => J,
  tx: () => M,
  xR: () => F
}), require("./228524.js"), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk735438 = require("./735438.js"),
  Chunk835245 = require("./835245.js"),
  Chunk317097 = require("./317097.js"),
  Chunk121894 = require("./121894.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554375 = require("./554375.js"),
  Chunk686956 = require("./686956.js"),
  Chunk444927 = require("./444927.js"),
  Chunk508675 = require("./508675.js"),
  Chunk371794 = require("./371794.js"),
  Chunk500345 = require("./500345.js"),
  Chunk579908 = require("./579908.js"),
  Chunk599941 = require("./599941.js"),
  Chunk636194 = require("./636194.js"),
  Chunk855918 = require("./855918.js"),
  Chunk739455 = require("./739455.js"),
  Chunk881288 = require("./881288.js"),
  Chunk244912 = require("./244912.js"),
  Chunk516917 = require("./516917.js"),
  Chunk846922 = require("./846922.js"),
  Chunk2242 = require("./2242.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      w(e, t, n[t])
    })
  }
  return e
}

function P(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function L(e, t, n) {
  let i = (0, S.y)(e => e.setListing),
    a = r.useCallback(r => {
      i(e, e => {
        var i;
        let a = null != (i = null == e ? true : e[t]) ? i : n;
        return Object.assign({}, e, {
          [t]: "function" == typeof r ? r(a) : r
        })
      })
    }, [i, e, t, n]),
    o = (0, S.y)(n => {
      var r;
      return null == (r = n.listings[e]) ? true : r[t]
    });
  return [true !== o ? o : n, a]
}

function x(e, t) {
  let n = (0, u.bG)([y.A], () => y.A.getSubscriptionListing(e)),
    i = (0, p.A)(() => t);
  return r.useMemo(() => i(n), [n, i])
}

function M(e) {
  let t = x(e, e => {
    var t;
    return null != (t = null == e ? true : e.name) ? t : ""
  });
  return L(e, "name", t)
}

function j(e) {
  let t = x(e, e => {
    var t;
    return null == e || null == (t = e.subscription_plans[0]) ? true : t.price
  });
  return L(e, "priceTier", t)
}

function k(e) {
  let t = x(e, e => {
    var t;
    return null != (t = null == e ? true : e.description) ? t : ""
  });
  return L(e, "description", t)
}

function U(e, t) {
  let n = x(e, e => {
    if ((null == e ? true : e.image_asset) != null) return (0, h.YE)(e.application_id, e.image_asset, t)
  });
  return L(e, "image", n)
}

function G(e, t) {
  let n = (0, v.A)(t, e);
  return L(e, "roleIcon", r.useMemo(() => {
    var e, t;
    return {
      icon: null != (e = null == n ? true : n.icon) ? e : true,
      unicodeEmoji: null != (t = null == n ? true : n.unicodeEmoji) ? t : true
    }
  }, [n]))
}

function V(e, t) {
  let n = (0, v.A)(t, e),
    i = (0, S.y)(t => {
      var n;
      return null == (n = t.listings[e]) ? true : n.roleColor
    }),
    a = (0, S.y)(t => {
      var n;
      return null == (n = t.listings[e]) ? true : n.roleIcon
    });
  return r.useMemo(() => {
    let e = R({}, null != n ? n : I.K);
    if (true !== a) {
      var t, r;
      e.icon = null != (t = a.icon) ? t : "", e.unicodeEmoji = null != (r = a.unicodeEmoji) ? r : ""
    }
    return true !== i && (e.color = i, e.colorString = (0, l.Hl)(i)), e
  }, [n, a, i])
}

function F(e, t) {
  let n = (0, v.A)(t, e);
  return L(e, "roleColor", r.useMemo(() => {
    var e;
    return null != (e = null == n ? true : n.color) ? e : C.TGz
  }, [n]))
}

function B(e, t) {
  let n = (0, v.A)(t, e);
  return L(e, "channelAccessFormat", r.useMemo(() => null == n ? S.h.SOME_CHANNELS_ACCESS : (0, b.iR)(n) ? S.h.ALL_CHANNELS_ACCESS : S.h.SOME_CHANNELS_ACCESS, [n]))
}
let H = [];

function Y(e) {
  let t = x(e, e => null == e ? H : e.role_benefits.benefits.filter(m.B1));
  return L(e, "channelBenefits", t)
}
let W = [];

function K(e) {
  let t = x(e, e => null == e ? W : e.role_benefits.benefits.filter(m.b1));
  return L(e, "intangibleBenefits", t)
}
let z = new Set;

function q(e, t) {
  return 0 === e.length ? z : new Set(e.filter(e => e.roles.includes(t)).map(e => {
    let {
      id: t
    } = e;
    return t
  }))
}

function Z(e, t) {
  let n = (0, v.A)(t, e),
    i = (0, u.yK)([_.Ay], () => _.Ay.getGuildEmoji(t), [t]);
  return L(e, "tierEmojiIds", r.useMemo(() => null == n ? z : q(i, n.id), [i, n]))
}

function Q(e) {
  var t;
  let n = (0, E.dL)(e),
    {
      selectedOption: r
    } = (0, A.A)(null != (t = null == n ? true : n.active_trial) ? t : null);
  return L(e, "trialInterval", null != r ? r : null)
}

function X(e) {
  var t;
  let n = (0, E.dL)(e);
  return L(e, "trialLimit", null != (t = null == n ? true : n.max_num_active_trial_users) ? t : null)
}

function J(e) {
  return (0, S.y)(t => true !== t.listings[e])
}

function $(e) {
  return (0, S.y)(t => {
    for (let n of e)
      if (true !== t.listings[n]) returntrue;
    returnfalse
  })
}

function ee(e) {
  let t = x(e, e => null == e ? true : e.subscription_plans[0]),
    [n] = L(e, "priceTier", true);
  return [r.useMemo(() => {
    var e, r, i, a, o;
    return {
      price: null != (e = null != n ? n : null == t ? true : t.price) ? e : 0,
      currency: null != (r = null == t ? true : t.currency) ? r : C.Yri.USD,
      interval: null != (i = null == t ? true : t.interval) ? i : N.WT.MONTH,
      interval_count: null != (a = null == t ? true : t.interval_count) ? a : 1,
      id: null != (o = null == t ? true : t.id) ? o : ""
    }
  }, [t, n])]
}

function et(e, t) {
  (0, c.r)(() => {
    S.y.setState(n => ({
      listings: D(R({}, n.listings), {
        [t]: n.listings[e]
      })
    }))
  })
}

function en(e) {
  et("nonexistantEditStateId", e)
}

function er(e, t) {
  (0, c.r)(() => {
    S.y.setState(n => ({
      listings: D(R({}, n.listings), {
        [t]: n.listings[e],
        [e]: true
      })
    }))
  })
}
async function ei(e) {
  let {
    guildId: t,
    editStateId: n
  } = e, r = y.A.getSubscriptionListing(n);
  a()(null != r, "listing doesnt exist");
  let i = r.role_id,
    s = r.id,
    l = S.y.getState().listings[n];
  a()(null != l, "edit state does not exist");
  let {
    roleColor: c,
    roleIcon: u,
    trialLimit: p,
    trialInterval: h,
    tierEmojiIds: m
  } = l;
  (true !== c || true !== u) && await f.A.updateRole(t, i, {
    color: c,
    icon: null == u ? true : u.icon,
    unicodeEmoji: null == u ? true : u.unicodeEmoji
  });
  let E = y.A.getSubscriptionTrial(s);
  if ((null != p || null != h || null != E && null == h) && await g.J1(t, s, {
      trial: h,
      max_num_active_trial_users: p
    }), true !== m) {
    let e = q(_.Ay.getGuildEmoji(t), i),
      n = (0, o.difference)([...m], [...e]),
      r = (0, o.difference)([...e], [...m]),
      a = n.map(e => {
        let n = _.Ay.getCustomEmojiById(e);
        if (null != n) return (0, d.Cp)({
          guildId: t,
          emojiId: n.id,
          roles: [...n.roles, i]
        })
      }),
      s = r.map(e => {
        let n = _.Ay.getCustomEmojiById(e);
        if (null == n) return;
        let r = n.roles.filter(e => e !== i);
        return r.length > 0 ? (0, d.Cp)({
          guildId: t,
          emojiId: n.id,
          roles: r
        }) : (0, d.ak)(t, n.id)
      });
    await Promise.all([...a, ...s])
  }
}

function ea(e) {
  var t;
  let {
    guildId: n,
    editStateId: r,
    groupListingId: i
  } = e, s = y.A.getSubscriptionListing(r);
  a()(null != s, "listing doesnt exist");
  let l = r,
    c = S.y.getState().listings[l];
  a()(null != c, "edit state does not exist");
  let {
    name: u,
    description: d,
    channelBenefits: f,
    intangibleBenefits: p,
    priceTier: _,
    image: h,
    channelAccessFormat: E
  } = c, b = {};
  if (u !== s.name && (b.name = u), d !== s.description && (b.description = d), _ !== (null == (t = s.subscription_plans[0]) ? true : t.price) && (b.priceTier = _), null != h && (b.image = h), null != E && (b.can_access_all_channels = E === S.h.ALL_CHANNELS_ACCESS), null != f || null != p) {
    let e = s.role_benefits.benefits.filter(m.B1),
      t = s.role_benefits.benefits.filter(m.b1);
    b.benefits = [...null != f ? f : e, ...null != p ? p : t]
  }
  return (0, o.isEmpty)(b) ? s : g.vW({
    guildId: n,
    groupListingId: i,
    listingId: l,
    data: b
  })
}
async function eo(e) {
  let {
    guildId: t,
    editStateId: n,
    groupListingId: r,
    onBeforeDispatchNewListing: i
  } = e, o = S.y.getState().listings[n];
  a()(null != o, "edit state does not exist");
  let {
    name: s,
    description: l,
    channelBenefits: c,
    intangibleBenefits: u,
    priceTier: d,
    image: f,
    channelAccessFormat: p
  } = o;
  a()(null != s, "no name provided"), a()(null != l, "no description provided"), a()(null != d, "no priceTier provided"), a()(null != f, "no image provided");
  let _ = p === S.h.ALL_CHANNELS_ACCESS,
    h = r;
  null == h && (h = (await g.J4(t, {})).id), null != c && c.length > 0 && await (0, O.pF)(t, c);
  let m = [...null != c ? c : [], ...null != u ? u : []],
    E = (0, O.JH)(n, t);
  return g.K0({
    guildId: t,
    groupListingId: h,
    data: {
      can_access_all_channels: _,
      image: f,
      name: s,
      description: l,
      benefits: m,
      priceTier: d
    },
    analyticsContext: E,
    onBeforeDispatchNewListing: i
  })
}

function es() {
  let [e, t] = r.useState(false), [n, i] = r.useState();
  return {
    loading: e,
    error: n,
    handleCreateOrUpdateFromEditState: r.useCallback(async e => {
      let {
        guildId: n,
        editStateId: r,
        groupListingId: o,
        onBeforeDispatchNewListing: s,
        onAfterDispatchNewListing: l
      } = e, c = r, u = null != y.A.getSubscriptionListing(c);
      try {
        if (t(true), i(true), u) a()(null != o, "groupListingId is null"), await ea({
          guildId: n,
          editStateId: c,
          groupListingId: o
        });
        else {
          let e = await eo({
            guildId: n,
            editStateId: c,
            groupListingId: o,
            onBeforeDispatchNewListing: s
          });
          c = e.id, er(r, c), null == l || l(e)
        }
        return await ei({
          guildId: n,
          editStateId: c
        }), en(c), true
      } catch (e) {
        if (!("getAnyErrorMessage" in e)) throw e;
        i(e)
      } finally {
        t(false)
      }
    }, [])
  }
}

function el(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {
      includeSoftDeleted: false
    },
    i = (0, E.cY)(e, n),
    a = (0, S.y)(e => e.editStateIdsForGroup[t]),
    o = (0, S.y)(e => e.setEditStateIdsForGroup),
    l = (0, S.y)(e => e.setListing),
    c = r.useMemo(() => [...i.map(e => {
      let {
        id: t
      } = e;
      return t
    }), ...null != a ? a : []], [a, i]),
    u = r.useCallback(() => {
      let e = (0, s.A)();
      o(t, t => [...null != t ? t : [], e])
    }, [t, o]);
  return {
    editStateIds: c,
    addNewEditStateId: u,
    addNewEditStateFromTemplate: r.useCallback(e => {
      let n = (0, s.A)();
      return o(t, e => [...null != e ? e : [], n]), e.listings.forEach(t => {
        l(n, () => ({
          name: t.name,
          description: t.description,
          priceTier: t.price_tier,
          image: t.image,
          intangibleBenefits: t.additional_perks,
          channelBenefits: t.channels.map(e => ({
            ref_id: e.id,
            ref_type: T.bN.CHANNEL,
            description: e.description,
            name: e.name,
            emoji_name: e.emoji_name
          })),
          roleIcon: {
            unicodeEmoji: true,
            icon: t.image
          },
          roleColor: t.role_color,
          usedTemplate: e.category
        }))
      }), n
    }, [t, o, l]),
    removeEditStateId: r.useCallback(e => {
      o(t, t => (null != t ? t : []).filter(t => t !== e))
    }, [t, o])
  }
}