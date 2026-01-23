/** Chunk was on web.js **/
/** chunk id: 987144, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => v
}), require("./321073.js"), require("./848778.js"), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk384904 = require("./384904.js"),
  Chunk923408 = require("./923408.js"),
  Chunk73825 = require("./73825.js"),
  Chunk287809 = require("./287809.js"),
  Chunk178368 = require("./178368.js"),
  Chunk97352 = require("./97352.js"),
  Chunk954571 = require("./954571.js"),
  Chunk473145 = require("./473145.js"),
  Chunk212637 = require("./212637.jsx"),
  Chunk652215 = require("./652215.js");

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

function y(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = b(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let O = "apply-guild-boost-modal";
async function v(e) {
  let {
    analyticsLocations: t,
    analyticsLocation: h,
    analyticsSourceLocation: g,
    numberOfBoostsToAdd: b,
    onClose: v,
    onLoading: A,
    closeLayer: I,
    onSubscriptionConfirmation: S,
    onSubscribeComplete: T,
    guild: C,
    handleSubscribeModalClose: N,
    disablePremiumUpsell: R,
    inPopout: w,
    applicationId: P,
    intent: D
  } = e, x = w ? i.KX8 : i.SYi, L = l.default.getCurrentUser();
  if (null == L) return;
  if (!L.verified) return void(0, i.mMO)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("12206"), n.e("90406")]).then(n.bind(n, 661925));
    return t => {
      let {
        onClose: n
      } = t, i = y(t, ["onClose"]);
      return (0, r.jsx)(e, E(m({}, i), {
        onClose: n
      }))
    }
  }, {
    contextKey: x
  });
  let j = [];
  u.A.isLoadedForPremiumSKUs() || j.push((0, o.zS)()), c.A.hasFetched || (j.push(a.hP()), j.push((0, s.CD)())), j.length > 0 && (null == A || A(true), await Promise.allSettled(j), null == A || A(false));
  let M = (0, f.D$)(c.A.boostSlots),
    k = M.length,
    U = e => {
      null == v || v(), null == N || N(e)
    },
    G = () => {
      null == v || v(), null == I || I(), d.default.track(_.HAw.MODAL_DISMISSED, {
        type: _.liQ.PREMIUM_GUILD_USER_MODAL,
        location_section: h.section
      })
    };
  if (k > 0 && (null == b || k >= b)) {
    let e;
    1 === k ? e = M.slice(0, 1) : null != b && (e = M.slice(0, b)), await (0, i.mMO)(async () => {
      let {
        default: t
      } = await Promise.resolve().then(n.bind(n, 657516));
      return n => {
        let {
          onClose: i
        } = n, a = y(n, ["onClose"]);
        return (0, r.jsx)(t, E(m({}, a), {
          onClose: e => {
            i(), U(e)
          },
          selectedGuild: C,
          locationSection: _.liQ.PREMIUM_GUILD_USER_MODAL,
          guildBoostSlots: e,
          intent: D
        }))
      }
    }, {
      modalKey: O,
      onCloseRequest: () => {
        (0, i.OoC)(O), U(false)
      },
      contextKey: x
    })
  } else(0, p.A)({
    analyticsLocations: t,
    analyticsLocation: h,
    analyticsSourceLocation: g,
    guildId: C.id,
    closeLayer: G,
    totalNumberOfSlotsToAssign: null != b ? b : 1,
    onCloseModal: U,
    disablePremiumUpsell: R,
    onSubscriptionConfirmation: S,
    onSubscribeComplete: T,
    inPopout: w,
    applicationId: P,
    intent: D
  })
}