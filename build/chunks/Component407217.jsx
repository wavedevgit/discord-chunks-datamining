/** Chunk was on 60667 **/
/** chunk id: 407217, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => m,
  default: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk253604 = require("./253604.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk87719 = require("./87719.js"),
  Chunk244975 = require("./244975.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk698290 = require("./698290.js");

function p(e) {
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

function m(e) {
  let {
    analyticsSource: t,
    onSubscribeFinish: l
  } = e, a = s.default.getCurrentUser();
  null != a && (0, i.mMO)(async () => {
    let {
      default: e
    } = await Promise.resolve().then(n.bind(n, 407217));
    return n => (0, r.jsx)(e, p({
      user: a,
      analyticsSource: t,
      analyticsLocation: {
        section: d.JJy.USER_PROFILE,
        object: d.ZSU.BUTTON_CTA
      },
      onSubscribeFinish: l
    }, n))
  })
}

function g(e) {
  let {
    user: t,
    onClose: n
  } = e, i = function(e, t) {
    if (null == e) return {};
    var n, r, i, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.getOwnPropertyNames(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i
      }(e, t), Object.getOwnPropertySymbols)
      for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l
  }(e, ["user", "onClose"]);
  return (0, r.jsx)(o.A, p({
    modalClassName: _.yl,
    modalContentClassName: _.jE,
    type: c.e.TRY_IT_OUT_MODAL_UPSELL,
    title: u.intl.string(u.t.reVc0M),
    body: u.intl.string(u.t.KckEj7),
    glowUp: u.intl.string(u.t.reVc0M),
    onSecondaryClick: () => {
      (0, a.x)(n)
    },
    secondaryCTA: u.intl.string(u.t.PcTCB7),
    onClose: n,
    enableArtBoxShadow: false,
    hideBackButton: true,
    showEnhancedUpsell: true,
    LeadingComponent: (0, r.jsx)("div", {
      className: _.wC,
      children: (0, r.jsx)(l.A, {
        containerClassName: _.i1,
        user: t,
        disabledInputs: true
      })
    })
  }, i))
}