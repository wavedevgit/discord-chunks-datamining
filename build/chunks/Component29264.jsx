/** Chunk was on 37220 **/
/** chunk id: 29264, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./415506.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
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

function b(e) {
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

function p(e, t) {
  (0, i.showToast)((0, i.createToast)(e, i.ToastType.FAILURE)), c.Z.captureException(t)
}

function m(e, t, n) {
  if ((0, a.Z)(null == t ? true : t.getChannelId()) || (null == n ? true : n.shouldHideMediaOptions) === true || !s.isPlatformEmbedded || null == e || !(0, l.gS)(e, null == n ? true : n.contentType, null == n ? true : n.originalContentType)) return null;
  let c = (0, l.s$)(e, null == n ? true : n.contentType, null == n ? true : n.originalContentType, l.wV),
    m = async () => {
      try {
        let e = await u.ZP.saveImage(c, null == n ? true : n.contentType, l.wV);
        if (e === u.mQ.ERRORED) throw Error("NativeUtils.saveImage errored for ".concat(c));
        e === u.mQ.SAVED && (o.default.track(f.rMx.CONTEXT_MENU_IMAGE_SAVED, b({}, (0, d.v)())), (0, i.showToast)((0, i.createToast)(g.intl.string(g.t.cqpdJW), i.ToastType.SUCCESS)))
      } catch (e) {
        o.default.track(f.rMx.CONTEXT_MENU_IMAGE_SAVE_FAILED, b({}, (0, d.v)())), p(g.intl.string(g.t["8Ve/S0"]), e)
      }
    }, O = async () => {
      try {
        await u.ZP.copyImage(c, null == n ? true : n.contentType), o.default.track(f.rMx.CONTEXT_MENU_IMAGE_COPIED, b({}, (0, d.v)())), (0, i.showToast)((0, i.createToast)(g.intl.string(g.t.bhUpvC), i.ToastType.SUCCESS))
      } catch (e) {
        p(g.intl.string(g.t.PTPbjx), e), o.default.track(f.rMx.CONTEXT_MENU_IMAGE_COPY_FAILED, b({}, (0, d.v)()))
      }
    };
  return [(0, l.Lz)(e, null == n ? true : n.contentType, null == n ? true : n.originalContentType) ? (0, r.jsx)(i.sNh, {
    id: "copy-image",
    label: g.intl.string(g.t.tvUqWn),
    action: O
  }, "copy-image") : null, (0, r.jsx)(i.sNh, {
    id: "save-image",
    label: g.intl.string(g.t.PeXhgO),
    action: m
  }, "save-image")]
}