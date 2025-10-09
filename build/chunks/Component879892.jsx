/** Chunk was on web.js **/
/** chunk id: 879892, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => v
}), require("./539854.js"), require("./993155.js"), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk179360 = require("./179360.js"),
  Chunk821849 = require("./821849.js"),
  Chunk594174 = require("./594174.js"),
  Chunk314884 = require("./314884.js"),
  Chunk509545 = require("./509545.js"),
  Chunk626135 = require("./626135.js"),
  Chunk267642 = require("./267642.js"),
  Chunk852679 = require("./852679.jsx"),
  Chunk981631 = require("./981631.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = y(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let O = "apply-guild-boost-modal";
async function v(e) {
  let {
    analyticsLocations: t,
    analyticsLocation: h,
    analyticsSourceLocation: g,
    numberOfBoostsToAdd: y,
    onClose: v,
    onLoading: I,
    closeLayer: T,
    onSubscriptionConfirmation: S,
    onSubscribeComplete: A,
    guild: C,
    handleSubscribeModalClose: N,
    disablePremiumUpsell: R,
    inPopout: P,
    applicationId: w,
    intent: D
  } = e, L = P ? i.u1M : i.z1l, x = l.default.getCurrentUser();
  if (null == x) return;
  if (!x.verified) return void(0, i.ZDy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("88470"), n.e("20102")]).then(n.bind(n, 444688));
    return t => {
      var {
        onClose: n
      } = t, i = b(t, ["onClose"]);
      return (0, r.jsx)(e, E(m({}, i), {
        onClose: n
      }))
    }
  }, {
    contextKey: L
  });
  let M = [];
  u.Z.isLoadedForPremiumSKUs() || M.push((0, s.Y2)()), c.Z.hasFetched || (M.push(a.jg()), M.push((0, o.X8)())), M.length > 0 && (null == I || I(true), await Promise.allSettled(M), null == I || I(false));
  let k = (0, f.vx)(c.Z.boostSlots),
    j = k.length,
    U = e => {
      null == v || v(), null == N || N(e)
    },
    G = () => {
      null == v || v(), null == T || T(), d.default.track(p.rMx.MODAL_DISMISSED, {
        type: p.ZY5.PREMIUM_GUILD_USER_MODAL,
        location_section: h.section
      })
    };
  if (j > 0 && (null == y || j >= y)) {
    let e;
    1 === j ? e = k.slice(0, 1) : null != y && (e = k.slice(0, y)), await (0, i.ZDy)(async () => {
      let {
        default: t
      } = await Promise.resolve().then(n.bind(n, 760558));
      return n => {
        var {
          onClose: i
        } = n, a = b(n, ["onClose"]);
        return (0, r.jsx)(t, E(m({}, a), {
          onClose: e => {
            i(), U(e)
          },
          selectedGuild: C,
          locationSection: p.ZY5.PREMIUM_GUILD_USER_MODAL,
          guildBoostSlots: e
        }))
      }
    }, {
      modalKey: O,
      onCloseRequest: () => {
        (0, i.Mr3)(O), U(false)
      },
      contextKey: L
    })
  } else(0, _.Z)({
    analyticsLocations: t,
    analyticsLocation: h,
    analyticsSourceLocation: g,
    guildId: C.id,
    closeLayer: G,
    totalNumberOfSlotsToAssign: null != y ? y : 1,
    onCloseModal: U,
    disablePremiumUpsell: R,
    onSubscriptionConfirmation: S,
    onSubscribeComplete: A,
    inPopout: P,
    applicationId: w,
    intent: D
  })
}