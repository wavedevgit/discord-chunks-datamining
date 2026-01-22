/** Chunk was on 58127 **/
/** chunk id: 938746, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => y
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

function y(t) {
  let e = (0, c.b)(),
    {
      selection: y
    } = t,
    m = null != y ? (0, p.WO)(b.VW.richValue(t), {
      mode: "plain",
      range: y,
      preventEmojiSurrogates: false
    }) : "",
    T = r.useCallback(e => {
      a.rL.focus(t), d.o.withSingleEntry(t, () => {
        t.deleteFragment(), t.insertText(e)
      })
    }, [t]),
    S = function(t, e) {
      let [n, a] = r.useState(false), i = r.useCallback(async () => {
        if (!n) {
          a(true), (0, o.showToast)((0, o.createToast)(f.intl.string(f.t.p54KYY), o.ToastType.AI));
          try {
            let n = await s.Bo.post({
              url: g.Rsh.AI_FIX_GRAMMAR,
              body: {
                content: t
              },
              rejectWithError: false
            });
            n.ok && n.body && (e(n.body.content), (0, o.showToast)((0, o.createToast)(f.intl.string(f.t.mxQpUY), o.ToastType.SUCCESS)))
          } finally {
            a(false)
          }
        }
      }, [n, t, e]);
      return (0, l.jsx)(o.Drp, {
        id: "fix-grammar",
        label: n ? f.intl.string(f.t.p54KYY) : f.intl.string(f.t.fCpOHj),
        icon: o.Dud,
        action: i,
        disabled: n
      })
    }(m, T),
    j = function(t, e) {
      let [a, c] = r.useState(false), d = (0, i.bG)([u.default], () => u.default.locale), p = r.useCallback(async (n, l) => {
        if (a) return;
        let r = null != n ? n : d;
        c(true);
        let i = null != l ? l : r;
        (0, o.showToast)((0, o.createToast)(f.intl.formatToPlainString(f.t.Znl8Z8, {
          targetLanguage: i
        }), o.ToastType.AI));
        try {
          let n = await s.Bo.post({
            url: g.Rsh.AI_TRANSLATE,
            body: {
              content: t,
              locale: r
            },
            rejectWithError: false
          });
          n.ok && n.body && (e(n.body.content), (0, o.showToast)((0, o.createToast)(f.intl.formatToPlainString(f.t.FtVUqm, {
            targetLanguage: i
          }), o.ToastType.SUCCESS)))
        } finally {
          c(false)
        }
      }, [a, d, t, e]), b = (0, f.getAvailableLocales)().map(t => {
        let e;
        try {
          e = n(579832)("./".concat(t.value, ".png"))
        } catch (t) {
          e = n(432706)
        }
        return (0, l.jsx)(o.Drp, {
          id: "translate-".concat(t.value),
          label: t.name,
          icon: () => (0, l.jsx)("img", {
            alt: "",
            src: e,
            className: h.M
          }),
          action: () => p(t.value, t.name),
          disabled: a
        }, t.value)
      });
      return (0, l.jsx)(o.Drp, {
        id: "translate",
        label: a ? f.intl.string(f.t.SVKIdU) : f.intl.string(f.t["6epDlR"]),
        action: () => p(),
        disabled: a,
        children: b
      })
    }(m, T);
  return "" !== m.trim() && e ? (0, l.jsxs)(l.Fragment, {
    children: [S, j]
  }) : null
}