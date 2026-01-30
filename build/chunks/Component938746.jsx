/** Chunk was on 58127 **/
/** chunk id: 938746, original params: t,e,s (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./896048.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk253018 = require("./253018.js"),
  Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk397927 = require("./397927.js"),
  Chunk147087 = require("./147087.js"),
  Chunk773669 = require("./773669.js"),
  Chunk186306 = require("./186306.js"),
  Chunk323350 = require("./323350.js"),
  Chunk711371 = require("./711371.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk623116 = require("./623116.js");

function h(t) {
  let e = (0, o.b)(),
    {
      selection: h
    } = t,
    y = null != h ? (0, g.WO)(d.VW.richValue(t), {
      mode: "plain",
      range: h,
      preventEmojiSurrogates: false
    }) : "",
    m = r.useCallback(e => {
      a.rL.focus(t), p.o.withSingleEntry(t, () => {
        t.deleteFragment(), t.insertText(e)
      })
    }, [t]),
    S = function(t, e) {
      let [s, a] = r.useState(false), i = r.useCallback(async () => {
        if (!s) {
          a(true), (0, c.showToast)((0, c.createToast)(f.intl.string(f.t.p54KYY), c.ToastType.AI));
          try {
            let s = await l.Bo.post({
              url: b.Rsh.AI_FIX_GRAMMAR,
              body: {
                content: t
              },
              rejectWithError: false
            });
            s.ok && s.body && (e(s.body.content), (0, c.showToast)((0, c.createToast)(f.intl.string(f.t.mxQpUY), c.ToastType.SUCCESS)))
          } finally {
            a(false)
          }
        }
      }, [s, t, e]);
      return (0, n.jsx)(c.Drp, {
        id: "fix-grammar",
        label: s ? f.intl.string(f.t.p54KYY) : f.intl.string(f.t.fCpOHj),
        icon: c.Dud,
        action: i,
        disabled: s
      })
    }(y, m),
    T = function(t, e) {
      let [a, o] = r.useState(false), p = (0, i.bG)([u.default], () => u.default.locale), g = r.useCallback(async (s, n) => {
        if (a) return;
        let r = null != s ? s : p;
        o(true);
        let i = null != n ? n : r;
        (0, c.showToast)((0, c.createToast)(f.intl.formatToPlainString(f.t.Znl8Z8, {
          targetLanguage: i
        }), c.ToastType.AI));
        try {
          let s = await l.Bo.post({
            url: b.Rsh.AI_TRANSLATE,
            body: {
              content: t,
              locale: r
            },
            rejectWithError: false
          });
          s.ok && s.body && (e(s.body.content), (0, c.showToast)((0, c.createToast)(f.intl.formatToPlainString(f.t.FtVUqm, {
            targetLanguage: i
          }), c.ToastType.SUCCESS)))
        } finally {
          o(false)
        }
      }, [a, p, t, e]), d = (0, f.getAvailableLocales)().map(t => {
        let e;
        try {
          e = s(579832)("./".concat(t.value, ".png"))
        } catch (t) {
          e = s(432706)
        }
        return (0, n.jsx)(c.Drp, {
          id: "translate-".concat(t.value),
          label: t.name,
          icon: () => (0, n.jsx)("img", {
            alt: "",
            src: e,
            className: x.M
          }),
          leadingAccessory: {
            type: "image",
            src: e
          },
          action: () => g(t.value, t.name),
          disabled: a
        }, t.value)
      });
      return (0, n.jsx)(c.Drp, {
        id: "translate",
        label: a ? f.intl.string(f.t.SVKIdU) : f.intl.string(f.t["6epDlR"]),
        action: () => g(),
        disabled: a,
        children: d
      })
    }(y, m);
  return "" !== y.trim() && e ? (0, n.jsxs)(n.Fragment, {
    children: [S, T]
  }) : null
}