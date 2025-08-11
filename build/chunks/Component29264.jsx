/** Chunk was on web.js **/
/** chunk id: 29264, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk296182 = require("./296182.js"),
  Chunk976853 = require("./976853.js"),
  Chunk626135 = require("./626135.js"),
  Chunk358085 = require("./358085.js"),
  Chunk960048 = require("./960048.js"),
  Chunk998502 = require("./998502.js"),
  Chunk36998 = require("./36998.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p(e, t, n) {
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
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  (0, i.showToast)((0, i.createToast)(e, i.ToastType.FAILURE)), c.Z.captureException(t)
}

function g(e, t, n) {
  if ((0, a.Z)(null == t ? true : t.getChannelId()) || (null == n ? true : n.shouldHideMediaOptions) === true || !l.isPlatformEmbedded || null == e || !(0, o.gS)(e, null == n ? true : n.contentType)) return null;
  let c = (0, o.s$)(e, null == n ? true : n.contentType, o.wV),
    p = async () => {
      try {
        await u.ZP.saveImage(c, null == n ? true : n.contentType, o.wV), s.default.track(f.rMx.CONTEXT_MENU_IMAGE_SAVED, h({}, (0, d.v)())), (0, i.showToast)((0, i.createToast)(_.intl.string(_.t.cqpdJS), i.ToastType.SUCCESS))
      } catch (e) {
        s.default.track(f.rMx.CONTEXT_MENU_IMAGE_SAVE_FAILED, h({}, (0, d.v)())), m(_.intl.string(_.t["8Ve/S0"]), e)
      }
    }, g = async () => {
      try {
        await u.ZP.copyImage(c, null == n ? true : n.contentType), s.default.track(f.rMx.CONTEXT_MENU_IMAGE_COPIED, h({}, (0, d.v)())), (0, i.showToast)((0, i.createToast)(_.intl.string(_.t.bhUpvL), i.ToastType.SUCCESS))
      } catch (e) {
        m(_.intl.string(_.t.PTPbj4), e), s.default.track(f.rMx.CONTEXT_MENU_IMAGE_COPY_FAILED, h({}, (0, d.v)()))
      }
    };
  return [(0, o.Lz)(e, null == n ? true : n.contentType) ? (0, r.jsx)(i.sNh, {
    id: "copy-image",
    label: _.intl.string(_.t.tvUqWl),
    action: g
  }, "copy-image") : null, (0, r.jsx)(i.sNh, {
    id: "save-image",
    label: _.intl.string(_.t.PeXhgI),
    action: p
  }, "save-image")]
}