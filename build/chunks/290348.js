/** Chunk was on 99956 **/
/** chunk id: 290348, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B7: () => er,
  Ek: () => H,
  F2: () => K,
  GM: () => $,
  GP: () => F,
  H9: () => J,
  Lo: () => X,
  PK: () => M,
  R7: () => B,
  TT: () => q,
  UE: () => V,
  XZ: () => Q,
  Xo: () => en,
  _T: () => T,
  d9: () => k,
  mR: () => D,
  p9: () => x,
  qs: () => R,
  rU: () => W
}), require("./953529.js"), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
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

function w(e) {
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

function I(e, t) {
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

function A(e, t, n) {
  let i = (0, P.n)(e => e.setListing),
    l = r.useCallback(r => {
      i(e, e => {
        var i;
        let l = null != (i = null == e ? true : e[t]) ? i : n;
        return Object.assign({}, e, {
          [t]: "function" == typeof r ? r(l) : r
        })
      })
    }, [i, e, t, n]),
    o = (0, P.n)(n => {
      var r;
      return null == (r = n.listings[e]) ? true : r[t]
    });
  return [true !== o ? o : n, l]
}

function L(e, t) {
  let n = (0, c.e7)([O.Z], () => O.Z.getSubscriptionListing(e)),
    i = (0, m.Z)(() => t);
  return r.useMemo(() => i(n), [n, i])
}

function T(e) {
  let t = L(e, e => {
    var t;
    return null != (t = null == e ? true : e.name) ? t : ""
  });
  return A(e, "name", t)
}

function D(e) {
  let t = L(e, e => {
    var t;
    return null == e || null == (t = e.subscription_plans[0]) ? true : t.price
  });
  return A(e, "priceTier", t)
}

function M(e) {
  let t = L(e, e => {
    var t;
    return null != (t = null == e ? true : e.description) ? t : ""
  });
  return A(e, "description", t)
}

function k(e, t) {
  let n = L(e, e => {
    if ((null == e ? true : e.image_asset) != null) return (0, v._W)(e.application_id, e.image_asset, t)
  });
  return A(e, "image", n)
}

function x(e, t) {
  let n = (0, j.Z)(t, e);
  return A(e, "roleIcon", r.useMemo(() => {
    var e, t;
    return {
      icon: null != (e = null == n ? true : n.icon) ? e : true,
      unicodeEmoji: null != (t = null == n ? true : n.unicodeEmoji) ? t : true
    }
  }, [n]))
}

function R(e, t) {
  let n = (0, j.Z)(t, e),
    i = (0, P.n)(t => {
      var n;
      return null == (n = t.listings[e]) ? true : n.roleColor
    }),
    l = (0, P.n)(t => {
      var n;
      return null == (n = t.listings[e]) ? true : n.roleIcon
    });
  return r.useMemo(() => {
    let e = w({}, null != n ? n : h.k);
    if (true !== l) {
      var t, r;
      e.icon = null != (t = l.icon) ? t : "", e.unicodeEmoji = null != (r = l.unicodeEmoji) ? r : ""
    }
    return true !== i && (e.color = i, e.colorString = (0, a.Rf)(i)), e
  }, [n, l, i])
}

function H(e, t) {
  let n = (0, j.Z)(t, e);
  return A(e, "roleColor", r.useMemo(() => {
    var e;
    return null != (e = null == n ? true : n.color) ? e : Z.p6O
  }, [n]))
}

function F(e, t) {
  let n = (0, j.Z)(t, e);
  return A(e, "channelAccessFormat", r.useMemo(() => null == n ? P.I.SOME_CHANNELS_ACCESS : (0, y.yt)(n) ? P.I.ALL_CHANNELS_ACCESS : P.I.SOME_CHANNELS_ACCESS, [n]))
}
let G = [];

function V(e) {
  let t = L(e, e => null == e ? G : e.role_benefits.benefits.filter(g.rC));
  return A(e, "channelBenefits", t)
}
let U = [];

function B(e) {
  let t = L(e, e => null == e ? U : e.role_benefits.benefits.filter(g.lL));
  return A(e, "intangibleBenefits", t)
}
let Y = new Set;

function z(e, t) {
  return 0 === e.length ? Y : new Set(e.filter(e => e.roles.includes(t)).map(e => {
    let {
      id: t
    } = e;
    return t
  }))
}

function Q(e, t) {
  let n = (0, j.Z)(t, e),
    i = (0, c.Wu)([p.ZP], () => p.ZP.getGuildEmoji(t), [t]);
  return A(e, "tierEmojiIds", r.useMemo(() => null == n ? Y : z(i, n.id), [i, n]))
}

function q(e) {
  var t;
  let n = (0, E.oC)(e),
    {
      selectedOption: r
    } = (0, _.Z)(null != (t = null == n ? true : n.active_trial) ? t : null);
  return A(e, "trialInterval", null != r ? r : null)
}

function K(e) {
  var t;
  let n = (0, E.oC)(e);
  return A(e, "trialLimit", null != (t = null == n ? true : n.max_num_active_trial_users) ? t : null)
}

function W(e) {
  return (0, P.n)(t => true !== t.listings[e])
}

function X(e) {
  return (0, P.n)(t => {
    for (let n of e)
      if (true !== t.listings[n]) returntrue;
    returnfalse
  })
}

function J(e) {
  let t = L(e, e => null == e ? true : e.subscription_plans[0]),
    [n] = A(e, "priceTier", true);
  return [r.useMemo(() => {
    var e, r, i, l, o;
    return {
      price: null != (e = null != n ? n : null == t ? true : t.price) ? e : 0,
      currency: null != (r = null == t ? true : t.currency) ? r : Z.pKx.USD,
      interval: null != (i = null == t ? true : t.interval) ? i : N.rV.MONTH,
      interval_count: null != (l = null == t ? true : t.interval_count) ? l : 1,
      id: null != (o = null == t ? true : t.id) ? o : ""
    }
  }, [t, n])]
}

function $(e) {
  (0, s.j)(() => {
    P.n.setState(t => ({
      listings: I(w({}, t.listings), {
        [e]: t.listings.nonexistantEditStateId
      })
    }))
  })
}
async function ee(e) {
  let {
    guildId: t,
    editStateId: n
  } = e, r = O.Z.getSubscriptionListing(n);
  l()(null != r, "listing doesnt exist");
  let i = r.role_id,
    u = r.id,
    a = P.n.getState().listings[n];
  l()(null != a, "edit state does not exist");
  let {
    roleColor: s,
    roleIcon: c,
    trialLimit: m,
    trialInterval: v,
    tierEmojiIds: g
  } = a;
  (true !== s || true !== c) && await f.Z.updateRole(t, i, {
    color: s,
    icon: null == c ? true : c.icon,
    unicodeEmoji: null == c ? true : c.unicodeEmoji
  });
  let E = O.Z.getSubscriptionTrial(u);
  if ((null != m || null != v || null != E && null == v) && await b.I1(t, u, {
      trial: v,
      max_num_active_trial_users: m
    }), true !== g) {
    let e = z(p.ZP.getGuildEmoji(t), i),
      n = (0, o.difference)([...g], [...e]),
      r = (0, o.difference)([...e], [...g]),
      l = n.map(e => p.ZP.getCustomEmojiById(e)).map(e => {
        if (null != e) return (0, d.dv)({
          guildId: t,
          emojiId: e.id,
          roles: [...e.roles, i]
        })
      }),
      u = r.map(e => p.ZP.getCustomEmojiById(e)).map(e => {
        if (null == e) return;
        let n = e.roles.filter(e => e !== i);
        return n.length > 0 ? (0, d.dv)({
          guildId: t,
          emojiId: e.id,
          roles: n
        }) : (0, d.RE)(t, e.id)
      });
    await Promise.all([...l, ...u])
  }
}
async function et(e) {
  let {
    guildId: t,
    editStateId: n,
    groupListingId: r,
    onBeforeDispatchNewListing: i
  } = e, o = P.n.getState().listings[n];
  l()(null != o, "edit state does not exist");
  let {
    name: u,
    description: a,
    channelBenefits: s,
    intangibleBenefits: c,
    priceTier: d,
    image: f,
    channelAccessFormat: m
  } = o;
  l()(null != u, "no name provided"), l()(null != a, "no description provided"), l()(null != d, "no priceTier provided"), l()(null != f, "no image provided");
  let p = m === P.I.ALL_CHANNELS_ACCESS,
    v = r;
  null == v && (v = (await b.uw(t, {})).id), null != s && s.length > 0 && await (0, S.r4)(t, s);
  let g = [...null != s ? s : [], ...null != c ? c : []],
    E = (0, S.yL)(n, t);
  return b.dA({
    guildId: t,
    groupListingId: v,
    data: {
      can_access_all_channels: p,
      image: f,
      name: u,
      description: a,
      benefits: g,
      priceTier: d
    },
    analyticsContext: E,
    onBeforeDispatchNewListing: i
  })
}

function en() {
  let [e, t] = Chunk73800.useState(false), [n, i] = Chunk73800.useState();
  return {
    loading: module,
    error: require,
    handleCreateOrUpdateFromEditState: Chunk73800.useCallback(async e => {
      let {
        guildId: n,
        editStateId: r,
        groupListingId: u,
        onBeforeDispatchNewListing: a,
        onAfterDispatchNewListing: c
      } = e, d = r, f = O.Z.getSubscriptionListing(d);
      try {
        if (t(true), i(true), null != f) l()(null != u, "groupListingId is null"), await
        function(e) {
          var t;
          let {
            guildId: n,
            editStateId: r,
            groupListingId: i
          } = e, u = O.Z.getSubscriptionListing(r);
          l()(null != u, "listing doesnt exist");
          let a = P.n.getState().listings[r];
          l()(null != a, "edit state does not exist");
          let {
            name: s,
            description: c,
            channelBenefits: d,
            intangibleBenefits: f,
            priceTier: m,
            image: p,
            channelAccessFormat: v
          } = a, E = {};
          if (s !== u.name && (E.name = s), c !== u.description && (E.description = c), m !== (null == (t = u.subscription_plans[0]) ? true : t.price) && (E.priceTier = m), null != p && (E.image = p), null != v && (E.can_access_all_channels = v === P.I.ALL_CHANNELS_ACCESS), null != d || null != f) {
            let e = u.role_benefits.benefits.filter(g.rC),
              t = u.role_benefits.benefits.filter(g.lL);
            E.benefits = [...null != d ? d : e, ...null != f ? f : t]
          }
          return (0, o.isEmpty)(E) ? u : b.O0({
            guildId: n,
            groupListingId: i,
            listingId: r,
            data: E
          })
        }({
          guildId: n,
          editStateId: d,
          groupListingId: u
        });
        else {
          var m;
          let e = await et({
            guildId: n,
            editStateId: d,
            groupListingId: u,
            onBeforeDispatchNewListing: a
          });
          d = e.id, m = d, (0, s.j)(() => {
            P.n.setState(e => ({
              listings: I(w({}, e.listings), {
                [m]: e.listings[r],
                [r]: true
              })
            }))
          }), null == c || c(e)
        }
        return await ee({
          guildId: n,
          editStateId: d
        }), $(d), true
      } catch (e) {
        if (!("getAnyErrorMessage" in e)) throw e;
        i(e)
      } finally {
        t(false)
      }
    }, [])
  }
}

function er(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {
      includeSoftDeleted: false
    },
    i = (0, E._k)(e, n),
    l = (0, P.n)(e => e.editStateIdsForGroup[t]),
    o = (0, P.n)(e => e.setEditStateIdsForGroup),
    a = (0, P.n)(e => e.setListing),
    s = r.useMemo(() => [...i.map(e => {
      let {
        id: t
      } = e;
      return t
    }), ...null != l ? l : []], [l, i]),
    c = r.useCallback(() => {
      let e = (0, u.Z)();
      o(t, t => [...null != t ? t : [], e])
    }, [t, o]);
  return {
    editStateIds: s,
    addNewEditStateId: c,
    addNewEditStateFromTemplate: r.useCallback(e => {
      let n = (0, u.Z)();
      return o(t, e => [...null != e ? e : [], n]), e.listings.forEach(t => {
        a(n, () => ({
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
    }, [t, o, a]),
    removeEditStateId: r.useCallback(e => {
      o(t, t => (null != t ? t : []).filter(t => t !== e))
    }, [t, o])
  }
}