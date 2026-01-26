/** Chunk was on 47260 **/
/** chunk id: 115184, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./65821.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk803316 = require("./803316.js"),
  Chunk207133 = require("./207133.js"),
  Chunk954571 = require("./954571.js"),
  Chunk723702 = require("./723702.js"),
  Chunk728458 = require("./728458.js"),
  Chunk837921 = require("./837921.js"),
  Chunk179581 = require("./179581.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function f(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), i.forEach(function(e) {
      var i;
      i = n[e], e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = i
    })
  }
  return t
}

function v(t, e) {
  (0, l.showToast)((0, l.createToast)(t, l.ToastType.FAILURE)), s.A.captureException(e)
}

function g(t, e, n) {
  if ((0, o.A)(null == e ? true : e.getChannelId()) || (null == n ? true : n.shouldHideMediaOptions) === true || !c.isPlatformEmbedded || null == t || !(0, r.e7)(t, null == n ? true : n.contentType, null == n ? true : n.originalContentType)) return null;
  let s = (0, r.XW)(t, null == n ? true : n.contentType, null == n ? true : n.originalContentType, r.N7),
    g = async () => {
      try {
        let t = await u.Ay.saveImage(s, null == n ? true : n.contentType, r.N7);
        if (t === u._0.ERRORED) throw Error("NativeUtils.saveImage errored for ".concat(s));
        t === u._0.SAVED && (a.default.track(p.HAw.CONTEXT_MENU_IMAGE_SAVED, f({}, (0, d.N)())), (0, l.showToast)((0, l.createToast)(y.intl.string(y.t.cqpdJW), l.ToastType.SUCCESS)))
      } catch (t) {
        a.default.track(p.HAw.CONTEXT_MENU_IMAGE_SAVE_FAILED, f({}, (0, d.N)())), v(y.intl.string(y.t["8Ve/S0"]), t)
      }
    }, E = async () => {
      try {
        await u.Ay.copyImage(s, null == n ? true : n.contentType), a.default.track(p.HAw.CONTEXT_MENU_IMAGE_COPIED, f({}, (0, d.N)())), (0, l.showToast)((0, l.createToast)(y.intl.string(y.t.bhUpvC), l.ToastType.SUCCESS))
      } catch (t) {
        v(y.intl.string(y.t.PTPbjx), t), a.default.track(p.HAw.CONTEXT_MENU_IMAGE_COPY_FAILED, f({}, (0, d.N)()))
      }
    };
  return [(0, r.PK)(t, null == n ? true : n.contentType, null == n ? true : n.originalContentType) ? (0, i.jsx)(l.Drp, {
    id: "copy-image",
    label: y.intl.string(y.t.tvUqWn),
    leadingAccessory: {
      type: "icon",
      icon: l.xfq
    },
    action: E
  }, "copy-image") : null, (0, i.jsx)(l.Drp, {
    id: "save-image",
    label: y.intl.string(y.t.PeXhgO),
    leadingAccessory: {
      type: "icon",
      icon: l.xfq
    },
    action: g
  }, "save-image")]
}