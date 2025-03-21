/** Chunk was on 15909 **/
n.d(t, {
  B7: () => er,
  Ek: () => W,
  F2: () => X,
  GM: () => $,
  GP: () => U,
  H9: () => q,
  Lo: () => J,
  PK: () => x,
  R7: () => B,
  TT: () => z,
  UE: () => F,
  XZ: () => Y,
  Xo: () => en,
  _T: () => A,
  d9: () => M,
  mR: () => I,
  p9: () => k,
  qs: () => R,
  rU: () => Q
}), n(266796), n(47120);
var r = n(192379),
  i = n(512722),
  l = n.n(i),
  o = n(392711),
  a = n(772848),
  s = n(866442),
  u = n(731965),
  c = n(442837),
  d = n(80932),
  f = n(749210),
  p = n(211266),
  v = n(339085),
  g = n(73346),
  m = n(817460),
  b = n(423117),
  y = n(584825),
  h = n(289393),
  O = n(790285),
  _ = n(303737),
  j = n(971792),
  S = n(22902),
  E = n(403474),
  w = n(944537),
  D = n(293810),
  P = n(981631),
  N = n(474936);

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

function Z(e, t) {
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

function T(e, t, n) {
  let i = (0, w.n)(e => e.setListing),
    l = r.useCallback(r => {
      i(e, e => {
        var i;
        let l = null !== (i = null == e ? void 0 : e[t]) && void 0 !== i ? i : n;
        return Object.assign({}, e, {
          [t]: "function" == typeof r ? r(l) : r
        })
      })
    }, [i, e, t, n]),
    o = (0, w.n)(n => {
      var r;
      return null === (r = n.listings[e]) || void 0 === r ? void 0 : r[t]
    });
  return [void 0 !== o ? o : n, l]
}

function L(e, t) {
  let n = (0, c.e7)([h.Z], () => h.Z.getSubscriptionListing(e)),
    i = (0, p.Z)(() => t);
  return r.useMemo(() => i(n), [n, i])
}

function A(e) {
  let t = L(e, e => {
    var t;
    return null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : ""
  });
  return T(e, "name", t)
}

function I(e) {
  let t = L(e, e => {
    var t;
    return null == e ? void 0 : null === (t = e.subscription_plans[0]) || void 0 === t ? void 0 : t.price
  });
  return T(e, "priceTier", t)
}

function x(e) {
  let t = L(e, e => {
    var t;
    return null !== (t = null == e ? void 0 : e.description) && void 0 !== t ? t : ""
  });
  return T(e, "description", t)
}

function M(e, t) {
  let n = L(e, e => {
    if ((null == e ? void 0 : e.image_asset) != null) return (0, g._W)(e.application_id, e.image_asset, t)
  });
  return T(e, "image", n)
}

function k(e, t) {
  let n = (0, j.Z)(t, e);
  return T(e, "roleIcon", r.useMemo(() => {
    var e, t;
    return {
      icon: null !== (e = null == n ? void 0 : n.icon) && void 0 !== e ? e : void 0,
      unicodeEmoji: null !== (t = null == n ? void 0 : n.unicodeEmoji) && void 0 !== t ? t : void 0
    }
  }, [n]))
}

function R(e, t) {
  let n = (0, j.Z)(t, e),
    i = (0, w.n)(t => {
      var n;
      return null === (n = t.listings[e]) || void 0 === n ? void 0 : n.roleColor
    }),
    l = (0, w.n)(t => {
      var n;
      return null === (n = t.listings[e]) || void 0 === n ? void 0 : n.roleIcon
    });
  return r.useMemo(() => {
    let e = C({}, null != n ? n : E.k);
    if (void 0 !== l) {
      var t, r;
      e.icon = null !== (t = l.icon) && void 0 !== t ? t : "", e.unicodeEmoji = null !== (r = l.unicodeEmoji) && void 0 !== r ? r : ""
    }
    return void 0 !== i && (e.color = i, e.colorString = (0, s.Rf)(i)), e
  }, [n, l, i])
}

function W(e, t) {
  let n = (0, j.Z)(t, e);
  return T(e, "roleColor", r.useMemo(() => {
    var e;
    return null !== (e = null == n ? void 0 : n.color) && void 0 !== e ? e : P.p6O
  }, [n]))
}

function U(e, t) {
  let n = (0, j.Z)(t, e);
  return T(e, "channelAccessFormat", r.useMemo(() => null == n ? w.I.SOME_CHANNELS_ACCESS : (0, O.MT)(n) ? w.I.ALL_CHANNELS_ACCESS : w.I.SOME_CHANNELS_ACCESS, [n]))
}
let G = [];

function F(e) {
  let t = L(e, e => null == e ? G : e.role_benefits.benefits.filter(m.rC));
  return T(e, "channelBenefits", t)
}
let H = [];

function B(e) {
  let t = L(e, e => null == e ? H : e.role_benefits.benefits.filter(m.lL));
  return T(e, "intangibleBenefits", t)
}
let V = new Set;

function K(e, t) {
  return 0 === e.length ? V : new Set(e.filter(e => e.roles.includes(t)).map(e => {
    let {
      id: t
    } = e;
    return t
  }))
}

function Y(e, t) {
  let n = (0, j.Z)(t, e),
    i = (0, c.Wu)([v.ZP], () => v.ZP.getGuildEmoji(t), [t]);
  return T(e, "tierEmojiIds", r.useMemo(() => null == n ? V : K(i, n.id), [i, n]))
}

function z(e) {
  var t;
  let n = (0, y.oC)(e),
    {
      selectedOption: r
    } = (0, S.Z)(null !== (t = null == n ? void 0 : n.active_trial) && void 0 !== t ? t : null);
  return T(e, "trialInterval", null != r ? r : null)
}

function X(e) {
  var t;
  let n = (0, y.oC)(e);
  return T(e, "trialLimit", null !== (t = null == n ? void 0 : n.max_num_active_trial_users) && void 0 !== t ? t : null)
}

function Q(e) {
  return (0, w.n)(t => void 0 !== t.listings[e])
}

function J(e) {
  return (0, w.n)(t => {
    for (let n of e)
      if (void 0 !== t.listings[n]) return !0;
    return !1
  })
}

function q(e) {
  let t = L(e, e => null == e ? void 0 : e.subscription_plans[0]),
    [n] = T(e, "priceTier", void 0);
  return [r.useMemo(() => {
    var e, r, i, l, o;
    return {
      price: null !== (e = null != n ? n : null == t ? void 0 : t.price) && void 0 !== e ? e : 0,
      currency: null !== (r = null == t ? void 0 : t.currency) && void 0 !== r ? r : P.pKx.USD,
      interval: null !== (i = null == t ? void 0 : t.interval) && void 0 !== i ? i : N.rV.MONTH,
      interval_count: null !== (l = null == t ? void 0 : t.interval_count) && void 0 !== l ? l : 1,
      id: null !== (o = null == t ? void 0 : t.id) && void 0 !== o ? o : ""
    }
  }, [t, n])]
}

function $(e) {
  (0, u.j)(() => {
    w.n.setState(t => ({
      listings: Z(C({}, t.listings), {
        [e]: t.listings.nonexistantEditStateId
      })
    }))
  })
}
async function ee(e) {
  let {
    guildId: t,
    editStateId: n
  } = e, r = h.Z.getSubscriptionListing(n);
  l()(null != r, "listing doesnt exist");
  let i = r.role_id,
    a = r.id,
    s = w.n.getState().listings[n];
  l()(null != s, "edit state does not exist");
  let {
    roleColor: u,
    roleIcon: c,
    trialLimit: p,
    trialInterval: g,
    tierEmojiIds: m
  } = s;
  (void 0 !== u || void 0 !== c) && await f.Z.updateRole(t, i, {
    color: u,
    icon: null == c ? void 0 : c.icon,
    unicodeEmoji: null == c ? void 0 : c.unicodeEmoji
  });
  let y = h.Z.getSubscriptionTrial(a);
  if ((null != p || null != g || null != y && null == g) && await b.I1(t, a, {
      trial: g,
      max_num_active_trial_users: p
    }), void 0 !== m) {
    let e = K(v.ZP.getGuildEmoji(t), i),
      n = (0, o.difference)([...m], [...e]),
      r = (0, o.difference)([...e], [...m]),
      l = n.map(e => v.ZP.getCustomEmojiById(e)).map(e => {
        if (null != e) return (0, d.dv)({
          guildId: t,
          emojiId: e.id,
          roles: [...e.roles, i]
        })
      }),
      a = r.map(e => v.ZP.getCustomEmojiById(e)).map(e => {
        if (null == e) return;
        let n = e.roles.filter(e => e !== i);
        return n.length > 0 ? (0, d.dv)({
          guildId: t,
          emojiId: e.id,
          roles: n
        }) : (0, d.RE)(t, e.id)
      });
    await Promise.all([...l, ...a])
  }
}
async function et(e) {
  let {
    guildId: t,
    editStateId: n,
    groupListingId: r,
    onBeforeDispatchNewListing: i
  } = e, o = w.n.getState().listings[n];
  l()(null != o, "edit state does not exist");
  let {
    name: a,
    description: s,
    channelBenefits: u,
    intangibleBenefits: c,
    priceTier: d,
    image: f,
    channelAccessFormat: p
  } = o;
  l()(null != a, "no name provided"), l()(null != s, "no description provided"), l()(null != d, "no priceTier provided"), l()(null != f, "no image provided");
  let v = p === w.I.ALL_CHANNELS_ACCESS,
    g = r;
  null == g && (g = (await b.uw(t, {})).id), null != u && u.length > 0 && await (0, _.r4)(t, u);
  let m = [...null != u ? u : [], ...null != c ? c : []],
    y = (0, _.yL)(n, t);
  return b.dA({
    guildId: t,
    groupListingId: g,
    data: {
      can_access_all_channels: v,
      image: f,
      name: a,
      description: s,
      benefits: m,
      priceTier: d
    },
    analyticsContext: y,
    onBeforeDispatchNewListing: i
  })
}

function en() {
  let [e, t] = r.useState(!1), [n, i] = r.useState();
  return {
    loading: e,
    error: n,
    handleCreateOrUpdateFromEditState: r.useCallback(async e => {
      let {
        guildId: n,
        editStateId: r,
        groupListingId: a,
        onBeforeDispatchNewListing: s,
        onAfterDispatchNewListing: c
      } = e, d = r, f = h.Z.getSubscriptionListing(d);
      try {
        if (t(!0), i(void 0), null != f) l()(null != a, "groupListingId is null"), await
        function(e) {
          var t;
          let {
            guildId: n,
            editStateId: r,
            groupListingId: i
          } = e, a = h.Z.getSubscriptionListing(r);
          l()(null != a, "listing doesnt exist");
          let s = w.n.getState().listings[r];
          l()(null != s, "edit state does not exist");
          let {
            name: u,
            description: c,
            channelBenefits: d,
            intangibleBenefits: f,
            priceTier: p,
            image: v,
            channelAccessFormat: g
          } = s, y = {};
          if (u !== a.name && (y.name = u), c !== a.description && (y.description = c), p !== (null === (t = a.subscription_plans[0]) || void 0 === t ? void 0 : t.price) && (y.priceTier = p), null != v && (y.image = v), null != g && (y.can_access_all_channels = g === w.I.ALL_CHANNELS_ACCESS), null != d || null != f) {
            let e = a.role_benefits.benefits.filter(m.rC),
              t = a.role_benefits.benefits.filter(m.lL),
              n = [...null != d ? d : e, ...null != f ? f : t];
            y.benefits = n
          }
          return (0, o.isEmpty)(y) ? a : b.O0({
            guildId: n,
            groupListingId: i,
            listingId: r,
            data: y
          })
        }({
          guildId: n,
          editStateId: d,
          groupListingId: a
        });
        else {
          var p;
          let e = await et({
            guildId: n,
            editStateId: d,
            groupListingId: a,
            onBeforeDispatchNewListing: s
          });
          p = d = e.id, (0, u.j)(() => {
            w.n.setState(e => ({
              listings: Z(C({}, e.listings), {
                [p]: e.listings[r],
                [r]: void 0
              })
            }))
          }), null == c || c(e)
        }
        return await ee({
          guildId: n,
          editStateId: d
        }), $(d), !0
      } catch (e) {
        if (!("getAnyErrorMessage" in e)) throw e;
        i(e)
      } finally {
        t(!1)
      }
    }, [])
  }
}

function er(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
      includeSoftDeleted: !1
    },
    i = (0, y._k)(e, n),
    l = (0, w.n)(e => e.editStateIdsForGroup[t]),
    o = (0, w.n)(e => e.setEditStateIdsForGroup),
    s = (0, w.n)(e => e.setListing),
    u = r.useMemo(() => [...i.map(e => {
      let {
        id: t
      } = e;
      return t
    }), ...null != l ? l : []], [l, i]),
    c = r.useCallback(() => {
      let e = (0, a.Z)();
      o(t, t => [...null != t ? t : [], e])
    }, [t, o]);
  return {
    editStateIds: u,
    addNewEditStateId: c,
    addNewEditStateFromTemplate: r.useCallback(e => {
      let n = (0, a.Z)();
      return o(t, e => [...null != e ? e : [], n]), e.listings.forEach(t => {
        s(n, () => ({
          name: t.name,
          description: t.description,
          priceTier: t.price_tier,
          image: t.image,
          intangibleBenefits: t.additional_perks,
          channelBenefits: t.channels.map(e => ({
            ref_id: e.id,
            ref_type: D.Qs.CHANNEL,
            description: e.description,
            name: e.name,
            emoji_name: e.emoji_name
          })),
          roleIcon: {
            unicodeEmoji: void 0,
            icon: t.image
          },
          roleColor: t.role_color,
          usedTemplate: e.category
        }))
      }), n
    }, [t, o, s]),
    removeEditStateId: r.useCallback(e => {
      o(t, t => (null != t ? t : []).filter(t => t !== e))
    }, [t, o])
  }
}