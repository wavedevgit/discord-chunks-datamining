/** Chunk was on 31930 **/
/** chunk id: 290348, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  B7: () => ei,
  Ek: () => k,
  F2: () => X,
  GM: () => $,
  GP: () => G,
  H9: () => Q,
  Lo: () => J,
  PK: () => L,
  R7: () => W,
  TT: () => q,
  UE: () => H,
  XZ: () => Y,
  Xo: () => en,
  _T: () => A,
  d9: () => Z,
  mR: () => D,
  p9: () => B,
  qs: () => M,
  rU: () => K
}), require("./953529.js"), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
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

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function x(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T(e, t, n) {
  let r = (0, w.n)(e => e.setListing),
    s = i.useCallback(i => {
      r(e, e => {
        var r;
        let s = null != (r = null == e ? true : e[t]) ? r : n;
        return Object.assign({}, e, {
          [t]: "function" == typeof i ? i(s) : i
        })
      })
    }, [r, e, t, n]),
    l = (0, w.n)(n => {
      var i;
      return null == (i = n.listings[e]) ? true : i[t]
    });
  return [true !== l ? l : n, s]
}

function R(e, t) {
  let n = (0, u.e7)([C.Z], () => C.Z.getSubscriptionListing(e)),
    r = (0, p.Z)(() => t);
  return i.useMemo(() => r(n), [n, r])
}

function A(e) {
  let t = R(e, e => {
    var t;
    return null != (t = null == e ? true : e.name) ? t : ""
  });
  return T(e, "name", t)
}

function D(e) {
  let t = R(e, e => {
    var t;
    return null == e || null == (t = e.subscription_plans[0]) ? true : t.price
  });
  return T(e, "priceTier", t)
}

function L(e) {
  let t = R(e, e => {
    var t;
    return null != (t = null == e ? true : e.description) ? t : ""
  });
  return T(e, "description", t)
}

function Z(e, t) {
  let n = R(e, e => {
    if ((null == e ? true : e.image_asset) != null) return (0, f._W)(e.application_id, e.image_asset, t)
  });
  return T(e, "image", n)
}

function B(e, t) {
  let n = (0, O.Z)(t, e);
  return T(e, "roleIcon", i.useMemo(() => {
    var e, t;
    return {
      icon: null != (e = null == n ? true : n.icon) ? e : true,
      unicodeEmoji: null != (t = null == n ? true : n.unicodeEmoji) ? t : true
    }
  }, [n]))
}

function M(e, t) {
  let n = (0, O.Z)(t, e),
    r = (0, w.n)(t => {
      var n;
      return null == (n = t.listings[e]) ? true : n.roleColor
    }),
    s = (0, w.n)(t => {
      var n;
      return null == (n = t.listings[e]) ? true : n.roleIcon
    });
  return i.useMemo(() => {
    let e = N({}, null != n ? n : E.k);
    if (true !== s) {
      var t, i;
      e.icon = null != (t = s.icon) ? t : "", e.unicodeEmoji = null != (i = s.unicodeEmoji) ? i : ""
    }
    return true !== r && (e.color = r, e.colorString = (0, a.Rf)(r)), e
  }, [n, s, r])
}

function k(e, t) {
  let n = (0, O.Z)(t, e);
  return T(e, "roleColor", i.useMemo(() => {
    var e;
    return null != (e = null == n ? true : n.color) ? e : j.p6O
  }, [n]))
}

function G(e, t) {
  let n = (0, O.Z)(t, e);
  return T(e, "channelAccessFormat", i.useMemo(() => null == n ? w.I.SOME_CHANNELS_ACCESS : (0, _.yt)(n) ? w.I.ALL_CHANNELS_ACCESS : w.I.SOME_CHANNELS_ACCESS, [n]))
}
let U = [];

function H(e) {
  let t = R(e, e => null == e ? U : e.role_benefits.benefits.filter(m.rC));
  return T(e, "channelBenefits", t)
}
let F = [];

function W(e) {
  let t = R(e, e => null == e ? F : e.role_benefits.benefits.filter(m.lL));
  return T(e, "intangibleBenefits", t)
}
let z = new Set;

function V(e, t) {
  return 0 === e.length ? z : new Set(e.filter(e => e.roles.includes(t)).map(e => {
    let {
      id: t
    } = e;
    return t
  }))
}

function Y(e, t) {
  let n = (0, O.Z)(t, e),
    r = (0, u.Wu)([g.ZP], () => g.ZP.getGuildEmoji(t), [t]);
  return T(e, "tierEmojiIds", i.useMemo(() => null == n ? z : V(r, n.id), [r, n]))
}

function q(e) {
  var t;
  let n = (0, v.oC)(e),
    {
      selectedOption: i
    } = (0, S.Z)(null != (t = null == n ? true : n.active_trial) ? t : null);
  return T(e, "trialInterval", null != i ? i : null)
}

function X(e) {
  var t;
  let n = (0, v.oC)(e);
  return T(e, "trialLimit", null != (t = null == n ? true : n.max_num_active_trial_users) ? t : null)
}

function K(e) {
  return (0, w.n)(t => true !== t.listings[e])
}

function J(e) {
  return (0, w.n)(t => {
    for (let n of e)
      if (true !== t.listings[n]) returntrue;
    returnfalse
  })
}

function Q(e) {
  let t = R(e, e => null == e ? true : e.subscription_plans[0]),
    [n] = T(e, "priceTier", true);
  return [i.useMemo(() => {
    var e, i, r, s, l;
    return {
      price: null != (e = null != n ? n : null == t ? true : t.price) ? e : 0,
      currency: null != (i = null == t ? true : t.currency) ? i : j.pKx.USD,
      interval: null != (r = null == t ? true : t.interval) ? r : P.rV.MONTH,
      interval_count: null != (s = null == t ? true : t.interval_count) ? s : 1,
      id: null != (l = null == t ? true : t.id) ? l : ""
    }
  }, [t, n])]
}

function $(e) {
  (0, c.j)(() => {
    w.n.setState(t => ({
      listings: x(N({}, t.listings), {
        [e]: t.listings.nonexistantEditStateId
      })
    }))
  })
}
async function ee(e) {
  let {
    guildId: t,
    editStateId: n
  } = e, i = C.Z.getSubscriptionListing(n);
  s()(null != i, "listing doesnt exist");
  let r = i.role_id,
    o = i.id,
    a = w.n.getState().listings[n];
  s()(null != a, "edit state does not exist");
  let {
    roleColor: c,
    roleIcon: u,
    trialLimit: p,
    trialInterval: f,
    tierEmojiIds: m
  } = a;
  (true !== c || true !== u) && await h.Z.updateRole(t, r, {
    color: c,
    icon: null == u ? true : u.icon,
    unicodeEmoji: null == u ? true : u.unicodeEmoji
  });
  let v = C.Z.getSubscriptionTrial(o);
  if ((null != p || null != f || null != v && null == f) && await b.I1(t, o, {
      trial: f,
      max_num_active_trial_users: p
    }), true !== m) {
    let e = V(g.ZP.getGuildEmoji(t), r),
      n = (0, l.difference)([...m], [...e]),
      i = (0, l.difference)([...e], [...m]),
      s = n.map(e => g.ZP.getCustomEmojiById(e)).map(e => {
        if (null != e) return (0, d.dv)({
          guildId: t,
          emojiId: e.id,
          roles: [...e.roles, r]
        })
      }),
      o = i.map(e => g.ZP.getCustomEmojiById(e)).map(e => {
        if (null == e) return;
        let n = e.roles.filter(e => e !== r);
        return n.length > 0 ? (0, d.dv)({
          guildId: t,
          emojiId: e.id,
          roles: n
        }) : (0, d.RE)(t, e.id)
      });
    await Promise.all([...s, ...o])
  }
}
async function et(e) {
  let {
    guildId: t,
    editStateId: n,
    groupListingId: i,
    onBeforeDispatchNewListing: r
  } = e, l = w.n.getState().listings[n];
  s()(null != l, "edit state does not exist");
  let {
    name: o,
    description: a,
    channelBenefits: c,
    intangibleBenefits: u,
    priceTier: d,
    image: h,
    channelAccessFormat: p
  } = l;
  s()(null != o, "no name provided"), s()(null != a, "no description provided"), s()(null != d, "no priceTier provided"), s()(null != h, "no image provided");
  let g = p === w.I.ALL_CHANNELS_ACCESS,
    f = i;
  null == f && (f = (await b.uw(t, {})).id), null != c && c.length > 0 && await (0, y.r4)(t, c);
  let m = [...null != c ? c : [], ...null != u ? u : []],
    v = (0, y.yL)(n, t);
  return b.dA({
    guildId: t,
    groupListingId: f,
    data: {
      can_access_all_channels: g,
      image: h,
      name: o,
      description: a,
      benefits: m,
      priceTier: d
    },
    analyticsContext: v,
    onBeforeDispatchNewListing: r
  })
}

function en() {
  let [e, t] = Chunk647438.useState(false), [n, r] = Chunk647438.useState();
  return {
    loading: module,
    error: require,
    handleCreateOrUpdateFromEditState: Chunk647438.useCallback(async e => {
      let {
        guildId: n,
        editStateId: i,
        groupListingId: o,
        onBeforeDispatchNewListing: a,
        onAfterDispatchNewListing: u
      } = e, d = i, h = C.Z.getSubscriptionListing(d);
      try {
        if (t(true), r(true), null != h) s()(null != o, "groupListingId is null"), await
        function(e) {
          var t;
          let {
            guildId: n,
            editStateId: i,
            groupListingId: r
          } = e, o = C.Z.getSubscriptionListing(i);
          s()(null != o, "listing doesnt exist");
          let a = w.n.getState().listings[i];
          s()(null != a, "edit state does not exist");
          let {
            name: c,
            description: u,
            channelBenefits: d,
            intangibleBenefits: h,
            priceTier: p,
            image: g,
            channelAccessFormat: f
          } = a, v = {};
          if (c !== o.name && (v.name = c), u !== o.description && (v.description = u), p !== (null == (t = o.subscription_plans[0]) ? true : t.price) && (v.priceTier = p), null != g && (v.image = g), null != f && (v.can_access_all_channels = f === w.I.ALL_CHANNELS_ACCESS), null != d || null != h) {
            let e = o.role_benefits.benefits.filter(m.rC),
              t = o.role_benefits.benefits.filter(m.lL);
            v.benefits = [...null != d ? d : e, ...null != h ? h : t]
          }
          return (0, l.isEmpty)(v) ? o : b.O0({
            guildId: n,
            groupListingId: r,
            listingId: i,
            data: v
          })
        }({
          guildId: n,
          editStateId: d,
          groupListingId: o
        });
        else {
          var p;
          let e = await et({
            guildId: n,
            editStateId: d,
            groupListingId: o,
            onBeforeDispatchNewListing: a
          });
          d = e.id, p = d, (0, c.j)(() => {
            w.n.setState(e => ({
              listings: x(N({}, e.listings), {
                [p]: e.listings[i],
                [i]: true
              })
            }))
          }), null == u || u(e)
        }
        return await ee({
          guildId: n,
          editStateId: d
        }), $(d), true
      } catch (e) {
        if (!("getAnyErrorMessage" in e)) throw e;
        r(e)
      } finally {
        t(false)
      }
    }, [])
  }
}

function ei(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {
      includeSoftDeleted: false
    },
    r = (0, v._k)(e, n),
    s = (0, w.n)(e => e.editStateIdsForGroup[t]),
    l = (0, w.n)(e => e.setEditStateIdsForGroup),
    a = (0, w.n)(e => e.setListing),
    c = i.useMemo(() => [...r.map(e => {
      let {
        id: t
      } = e;
      return t
    }), ...null != s ? s : []], [s, r]),
    u = i.useCallback(() => {
      let e = (0, o.Z)();
      l(t, t => [...null != t ? t : [], e])
    }, [t, l]);
  return {
    editStateIds: c,
    addNewEditStateId: u,
    addNewEditStateFromTemplate: i.useCallback(e => {
      let n = (0, o.Z)();
      return l(t, e => [...null != e ? e : [], n]), e.listings.forEach(t => {
        a(n, () => ({
          name: t.name,
          description: t.description,
          priceTier: t.price_tier,
          image: t.image,
          intangibleBenefits: t.additional_perks,
          channelBenefits: t.channels.map(e => ({
            ref_id: e.id,
            ref_type: I.Qs.CHANNEL,
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
    }, [t, l, a]),
    removeEditStateId: i.useCallback(e => {
      l(t, t => (null != t ? t : []).filter(t => t !== e))
    }, [t, l])
  }
}