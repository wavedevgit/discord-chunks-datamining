/** Chunk was on web.js **/
/** chunk id: 879892, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => v
}), require("./539854.js"), require("./993155.js"), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
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

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
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
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let O = "apply-guild-boost-modal";
async function v(e) {
  let {
    analyticsLocations: t,
    analyticsLocation: m,
    analyticsSourceLocation: g,
    numberOfBoostsToAdd: y,
    onClose: v,
    onLoading: S,
    closeLayer: I,
    onSubscriptionConfirmation: T,
    onSubscribeComplete: C,
    guild: A,
    handleSubscribeModalClose: N,
    disablePremiumUpsell: P,
    inPopout: R,
    applicationId: w,
    intent: D
  } = e, x = R ? i.u1M : i.z1l, L = l.default.getCurrentUser();
  if (null == L) return;
  if (!L.verified) return void(0, i.ZDy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("88470"), n.e("20102")]).then(n.bind(n, 444688));
    return t => {
      var {
        onClose: n
      } = t, i = b(t, ["onClose"]);
      return (0, r.jsx)(e, E(h({}, i), {
        onClose: n
      }))
    }
  }, {
    contextKey: x
  });
  let j = [];
  u.Z.isLoadedForPremiumSKUs() || j.push((0, s.Y2)()), c.Z.hasFetched || (j.push(o.jg()), j.push((0, a.X8)())), j.length > 0 && (null == S || S(true), await Promise.allSettled(j), null == S || S(false));
  let M = (0, f.vx)(c.Z.boostSlots),
    k = M.length,
    U = e => {
      null == v || v(), null == N || N(e)
    },
    G = () => {
      null == v || v(), null == I || I(), d.default.track(_.rMx.MODAL_DISMISSED, {
        type: _.ZY5.PREMIUM_GUILD_USER_MODAL,
        location_section: m.section
      })
    };
  if (k > 0 && (null == y || k >= y)) {
    let e;
    1 === k ? e = M.slice(0, 1) : null != y && (e = M.slice(0, y)), await (0, i.ZDy)(async () => {
      let {
        default: t
      } = await Promise.resolve().then(n.bind(n, 760558));
      return n => {
        var {
          onClose: i
        } = n, o = b(n, ["onClose"]);
        return (0, r.jsx)(t, E(h({}, o), {
          onClose: e => {
            i(), U(e)
          },
          selectedGuild: A,
          locationSection: _.ZY5.PREMIUM_GUILD_USER_MODAL,
          guildBoostSlots: e,
          intent: D
        }))
      }
    }, {
      modalKey: O,
      onCloseRequest: () => {
        (0, i.Mr3)(O), U(false)
      },
      contextKey: x
    })
  } else(0, p.Z)({
    analyticsLocations: t,
    analyticsLocation: m,
    analyticsSourceLocation: g,
    guildId: A.id,
    closeLayer: G,
    totalNumberOfSlotsToAssign: null != y ? y : 1,
    onCloseModal: U,
    disablePremiumUpsell: P,
    onSubscriptionConfirmation: T,
    onSubscribeComplete: C,
    inPopout: R,
    applicationId: w,
    intent: D
  })
}