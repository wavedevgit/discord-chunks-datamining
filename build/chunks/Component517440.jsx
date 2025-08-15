/** Chunk was on 41984 **/
/** chunk id: 517440, original params: t,e,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js"), require("./781311.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk650557 = require("./650557.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk481060 = require("./481060.js"),
  Chunk466721 = require("./466721.js"),
  Chunk706454 = require("./706454.js"),
  Chunk53529 = require("./53529.js"),
  Chunk925994 = require("./925994.js"),
  Chunk887490 = require("./887490.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk35777 = require("./35777.js");

function h(t) {
  let e = l.C.useExperiment({
      location: "ChannelTextAreaContextMenu"
    }),
    {
      selection: h
    } = t,
    y = null != h ? (0, f.sk)(g.bN.richValue(t), {
      mode: "plain",
      range: h,
      preventEmojiSurrogates: false
    }) : "",
    m = a.useCallback(e => {
      r.F3.focus(t), p.T.withSingleEntry(t, () => {
        t.deleteFragment(), t.insertText(e)
      })
    }, [t]),
    S = function(t, e) {
      let [n, r] = a.useState(false), i = a.useCallback(async () => {
        if (!n) {
          r(true), (0, o.showToast)((0, o.createToast)(b.intl.string(b.t.p54KYW), o.ToastType.AI));
          try {
            let n = await c.tn.post({
              url: d.ANM.AI_FIX_GRAMMAR,
              body: {
                content: t
              },
              rejectWithError: false
            });
            n.ok && n.body && (e(n.body.content), (0, o.showToast)((0, o.createToast)(b.intl.string(b.t.mxQpUV), o.ToastType.SUCCESS)))
          } finally {
            r(false)
          }
        }
      }, [n, t, e]);
      return (0, s.jsx)(o.sNh, {
        id: "fix-grammar",
        label: n ? b.intl.string(b.t.p54KYW) : b.intl.string(b.t.fCpOHh),
        icon: o.$2U,
        action: i,
        disabled: n
      })
    }(y, m),
    j = function(t, e) {
      let [r, l] = a.useState(false), p = (0, i.e7)([u.default], () => u.default.locale), f = a.useCallback(async (n, s) => {
        if (r) return;
        let a = null != n ? n : p;
        l(true);
        let i = null != s ? s : a;
        (0, o.showToast)((0, o.createToast)(b.intl.formatToPlainString(b.t.Znl8Z2, {
          targetLanguage: i
        }), o.ToastType.AI));
        try {
          let n = await c.tn.post({
            url: d.ANM.AI_TRANSLATE,
            body: {
              content: t,
              locale: a
            },
            rejectWithError: false
          });
          n.ok && n.body && (e(n.body.content), (0, o.showToast)((0, o.createToast)(b.intl.formatToPlainString(b.t.FtVUqq, {
            targetLanguage: i
          }), o.ToastType.SUCCESS)))
        } finally {
          l(false)
        }
      }, [r, p, t, e]), g = (0, b.getAvailableLocales)().map(t => {
        let e;
        try {
          e = n(621287)("./".concat(t.value, ".png"))
        } catch (t) {
          e = n(1474)
        }
        return (0, s.jsx)(o.sNh, {
          id: "translate-".concat(t.value),
          label: t.name,
          icon: () => (0, s.jsx)("img", {
            alt: "",
            src: e,
            className: x.flagIcon
          }),
          action: () => f(t.value, t.name),
          disabled: r
        }, t.value)
      });
      return (0, s.jsx)(o.sNh, {
        id: "translate",
        label: r ? b.intl.string(b.t.SVKIdX) : b.intl.string(b.t["6epDlZ"]),
        action: () => f(),
        disabled: r,
        children: g
      })
    }(y, m);
  return "" !== y.trim() && (null == e ? true : e.enableAIFeatures) ? (0, s.jsxs)(s.Fragment, {
    children: [S, j]
  }) : null
}