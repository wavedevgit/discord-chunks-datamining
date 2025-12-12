/** Chunk was on web.js **/
/** chunk id: 290348, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B7: () => el,
  Ek: () => F,
  F2: () => X,
  GM: () => en,
  GP: () => B,
  H9: () => ee,
  Lo: () => $,
  PK: () => k,
  R7: () => W,
  TT: () => Q,
  UE: () => H,
  XZ: () => q,
  Xo: () => es,
  _T: () => j,
  d9: () => U,
  mR: () => M,
  p9: () => G,
  qs: () => Z,
  rU: () => J
}), require("./953529.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  Chunk772848 = require("./772848.js"),
  Chunk866442 = require("./866442.js"),
  Chunk731965 = require("./731965.js"),
  Chunk442837 = require("./442837.js"),
  Chunk80932 = require("./80932.js"),
  Chunk749210 = require("./749210.js"),
  Chunk211266 = require("./211266.js"),
  Chunk339085 = require("./339085.js"),
  Chunk73346 = require("./73346.js"),
  Chunk817460 = require("./817460.js"),
  Chunk423117 = require("./423117.js"),
  Chunk584825 = require("./584825.js"),
  Chunk289393 = require("./289393.js"),
  Chunk790285 = require("./790285.js"),
  Chunk303737 = require("./303737.js"),
  Chunk971792 = require("./971792.js"),
  Chunk22902 = require("./22902.js"),
  Chunk403474 = require("./403474.js"),
  Chunk944537 = require("./944537.js"),
  Chunk293810 = require("./293810.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js");

function P(e, t, n) {
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
      P(e, t, n[t])
    })
  }
  return e
}

function w(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function x(e, t, n) {
  let i = (0, T.n)(e => e.setListing),
    o = r.useCallback(r => {
      i(e, e => {
        var i;
        let o = null != (i = null == e ? true : e[t]) ? i : n;
        return Object.assign({}, e, {
          [t]: "function" == typeof r ? r(o) : r
        })
      })
    }, [i, e, t, n]),
    a = (0, T.n)(n => {
      var r;
      return null == (r = n.listings[e]) ? true : r[t]
    });
  return [true !== a ? a : n, o]
}

function L(e, t) {
  let n = (0, u.e7)([b.Z], () => b.Z.getSubscriptionListing(e)),
    i = (0, p.Z)(() => t);
  return r.useMemo(() => i(n), [n, i])
}

function j(e) {
  let t = L(e, e => {
    var t;
    return null != (t = null == e ? true : e.name) ? t : ""
  });
  return x(e, "name", t)
}

function M(e) {
  let t = L(e, e => {
    var t;
    return null == e || null == (t = e.subscription_plans[0]) ? true : t.price
  });
  return x(e, "priceTier", t)
}

function k(e) {
  let t = L(e, e => {
    var t;
    return null != (t = null == e ? true : e.description) ? t : ""
  });
  return x(e, "description", t)
}

function U(e, t) {
  let n = L(e, e => {
    if ((null == e ? true : e.image_asset) != null) return (0, m._W)(e.application_id, e.image_asset, t)
  });
  return x(e, "image", n)
}

function G(e, t) {
  let n = (0, v.Z)(t, e);
  return x(e, "roleIcon", r.useMemo(() => {
    var e, t;
    return {
      icon: null != (e = null == n ? true : n.icon) ? e : true,
      unicodeEmoji: null != (t = null == n ? true : n.unicodeEmoji) ? t : true
    }
  }, [n]))
}

function Z(e, t) {
  let n = (0, v.Z)(t, e),
    i = (0, T.n)(t => {
      var n;
      return null == (n = t.listings[e]) ? true : n.roleColor
    }),
    o = (0, T.n)(t => {
      var n;
      return null == (n = t.listings[e]) ? true : n.roleIcon
    });
  return r.useMemo(() => {
    let e = R({}, null != n ? n : I.k);
    if (true !== o) {
      var t, r;
      e.icon = null != (t = o.icon) ? t : "", e.unicodeEmoji = null != (r = o.unicodeEmoji) ? r : ""
    }
    return true !== i && (e.color = i, e.colorString = (0, l.Rf)(i)), e
  }, [n, o, i])
}

function F(e, t) {
  let n = (0, v.Z)(t, e);
  return x(e, "roleColor", r.useMemo(() => {
    var e;
    return null != (e = null == n ? true : n.color) ? e : A.p6O
  }, [n]))
}

function B(e, t) {
  let n = (0, v.Z)(t, e);
  return x(e, "channelAccessFormat", r.useMemo(() => null == n ? T.I.SOME_CHANNELS_ACCESS : (0, y.yt)(n) ? T.I.ALL_CHANNELS_ACCESS : T.I.SOME_CHANNELS_ACCESS, [n]))
}
let V = [];

function H(e) {
  let t = L(e, e => null == e ? V : e.role_benefits.benefits.filter(h.rC));
  return x(e, "channelBenefits", t)
}
let Y = [];

function W(e) {
  let t = L(e, e => null == e ? Y : e.role_benefits.benefits.filter(h.lL));
  return x(e, "intangibleBenefits", t)
}
let K = new Set;

function z(e, t) {
  return 0 === e.length ? K : new Set(e.filter(e => e.roles.includes(t)).map(e => {
    let {
      id: t
    } = e;
    return t
  }))
}

function q(e, t) {
  let n = (0, v.Z)(t, e),
    i = (0, u.Wu)([_.ZP], () => _.ZP.getGuildEmoji(t), [t]);
  return x(e, "tierEmojiIds", r.useMemo(() => null == n ? K : z(i, n.id), [i, n]))
}

function Q(e) {
  var t;
  let n = (0, E.oC)(e),
    {
      selectedOption: r
    } = (0, S.Z)(null != (t = null == n ? true : n.active_trial) ? t : null);
  return x(e, "trialInterval", null != r ? r : null)
}

function X(e) {
  var t;
  let n = (0, E.oC)(e);
  return x(e, "trialLimit", null != (t = null == n ? true : n.max_num_active_trial_users) ? t : null)
}

function J(e) {
  return (0, T.n)(t => true !== t.listings[e])
}

function $(e) {
  return (0, T.n)(t => {
    for (let n of e)
      if (true !== t.listings[n]) returntrue;
    returnfalse
  })
}

function ee(e) {
  let t = L(e, e => null == e ? true : e.subscription_plans[0]),
    [n] = x(e, "priceTier", true);
  return [r.useMemo(() => {
    var e, r, i, o, a;
    return {
      price: null != (e = null != n ? n : null == t ? true : t.price) ? e : 0,
      currency: null != (r = null == t ? true : t.currency) ? r : A.pKx.USD,
      interval: null != (i = null == t ? true : t.interval) ? i : N.rV.MONTH,
      interval_count: null != (o = null == t ? true : t.interval_count) ? o : 1,
      id: null != (a = null == t ? true : t.id) ? a : ""
    }
  }, [t, n])]
}

function et(e, t) {
  (0, c.j)(() => {
    T.n.setState(n => ({
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
  (0, c.j)(() => {
    T.n.setState(n => ({
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
  } = e, r = b.Z.getSubscriptionListing(n);
  o()(null != r, "listing doesnt exist");
  let i = r.role_id,
    s = r.id,
    l = T.n.getState().listings[n];
  o()(null != l, "edit state does not exist");
  let {
    roleColor: c,
    roleIcon: u,
    trialLimit: p,
    trialInterval: m,
    tierEmojiIds: h
  } = l;
  (true !== c || true !== u) && await f.Z.updateRole(t, i, {
    color: c,
    icon: null == u ? true : u.icon,
    unicodeEmoji: null == u ? true : u.unicodeEmoji
  });
  let E = b.Z.getSubscriptionTrial(s);
  if ((null != p || null != m || null != E && null == m) && await g.I1(t, s, {
      trial: m,
      max_num_active_trial_users: p
    }), true !== h) {
    let e = z(_.ZP.getGuildEmoji(t), i),
      n = (0, a.difference)([...h], [...e]),
      r = (0, a.difference)([...e], [...h]),
      o = n.map(e => {
        let n = _.ZP.getCustomEmojiById(e);
        if (null != n) return (0, d.dv)({
          guildId: t,
          emojiId: n.id,
          roles: [...n.roles, i]
        })
      }),
      s = r.map(e => {
        let n = _.ZP.getCustomEmojiById(e);
        if (null == n) return;
        let r = n.roles.filter(e => e !== i);
        return r.length > 0 ? (0, d.dv)({
          guildId: t,
          emojiId: n.id,
          roles: r
        }) : (0, d.RE)(t, n.id)
      });
    await Promise.all([...o, ...s])
  }
}

function eo(e) {
  var t;
  let {
    guildId: n,
    editStateId: r,
    groupListingId: i
  } = e, s = b.Z.getSubscriptionListing(r);
  o()(null != s, "listing doesnt exist");
  let l = r,
    c = T.n.getState().listings[l];
  o()(null != c, "edit state does not exist");
  let {
    name: u,
    description: d,
    channelBenefits: f,
    intangibleBenefits: p,
    priceTier: _,
    image: m,
    channelAccessFormat: E
  } = c, y = {};
  if (u !== s.name && (y.name = u), d !== s.description && (y.description = d), _ !== (null == (t = s.subscription_plans[0]) ? true : t.price) && (y.priceTier = _), null != m && (y.image = m), null != E && (y.can_access_all_channels = E === T.I.ALL_CHANNELS_ACCESS), null != f || null != p) {
    let e = s.role_benefits.benefits.filter(h.rC),
      t = s.role_benefits.benefits.filter(h.lL);
    y.benefits = [...null != f ? f : e, ...null != p ? p : t]
  }
  return (0, a.isEmpty)(y) ? s : g.O0({
    guildId: n,
    groupListingId: i,
    listingId: l,
    data: y
  })
}
async function ea(e) {
  let {
    guildId: t,
    editStateId: n,
    groupListingId: r,
    onBeforeDispatchNewListing: i
  } = e, a = T.n.getState().listings[n];
  o()(null != a, "edit state does not exist");
  let {
    name: s,
    description: l,
    channelBenefits: c,
    intangibleBenefits: u,
    priceTier: d,
    image: f,
    channelAccessFormat: p
  } = a;
  o()(null != s, "no name provided"), o()(null != l, "no description provided"), o()(null != d, "no priceTier provided"), o()(null != f, "no image provided");
  let _ = p === T.I.ALL_CHANNELS_ACCESS,
    m = r;
  null == m && (m = (await g.uw(t, {})).id), null != c && c.length > 0 && await (0, O.r4)(t, c);
  let h = [...null != c ? c : [], ...null != u ? u : []],
    E = (0, O.yL)(n, t);
  return g.dA({
    guildId: t,
    groupListingId: m,
    data: {
      can_access_all_channels: _,
      image: f,
      name: s,
      description: l,
      benefits: h,
      priceTier: d
    },
    analyticsContext: E,
    onBeforeDispatchNewListing: i
  })
}

function es() {
  let [e, t] = Chunk473749.useState(false), [n, i] = Chunk473749.useState();
  return {
    loading: module,
    error: require,
    handleCreateOrUpdateFromEditState: Chunk473749.useCallback(async e => {
      let {
        guildId: n,
        editStateId: r,
        groupListingId: a,
        onBeforeDispatchNewListing: s,
        onAfterDispatchNewListing: l
      } = e, c = r, u = null != b.Z.getSubscriptionListing(c);
      try {
        if (t(true), i(true), u) o()(null != a, "groupListingId is null"), await eo({
          guildId: n,
          editStateId: c,
          groupListingId: a
        });
        else {
          let e = await ea({
            guildId: n,
            editStateId: c,
            groupListingId: a,
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
    i = (0, E._k)(e, n),
    o = (0, T.n)(e => e.editStateIdsForGroup[t]),
    a = (0, T.n)(e => e.setEditStateIdsForGroup),
    l = (0, T.n)(e => e.setListing),
    c = r.useMemo(() => [...i.map(e => {
      let {
        id: t
      } = e;
      return t
    }), ...null != o ? o : []], [o, i]),
    u = r.useCallback(() => {
      let e = (0, s.Z)();
      a(t, t => [...null != t ? t : [], e])
    }, [t, a]);
  return {
    editStateIds: c,
    addNewEditStateId: u,
    addNewEditStateFromTemplate: r.useCallback(e => {
      let n = (0, s.Z)();
      return a(t, e => [...null != e ? e : [], n]), e.listings.forEach(t => {
        l(n, () => ({
          name: t.name,
          description: t.description,
          priceTier: t.price_tier,
          image: t.image,
          intangibleBenefits: t.additional_perks,
          channelBenefits: t.channels.map(e => ({
            ref_id: e.id,
            ref_type: C.Qs.CHANNEL,
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
    }, [t, a, l]),
    removeEditStateId: r.useCallback(e => {
      a(t, t => (null != t ? t : []).filter(t => t !== e))
    }, [t, a])
  }
}