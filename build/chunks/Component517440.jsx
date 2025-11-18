/** Chunk was on 41984 **/
/** chunk id: 517440, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk685578 = require("./685578.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk481060 = require("./481060.js"),
  Chunk39952 = require("./39952.js"),
  Chunk706454 = require("./706454.js"),
  Chunk53529 = require("./53529.js"),
  Chunk925994 = require("./925994.js"),
  Chunk887490 = require("./887490.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk980095 = require("./980095.js");

function y(t) {
  let e = (0, c.o)(),
    {
      selection: y
    } = t,
    m = null != y ? (0, b.sk)(p.bN.richValue(t), {
      mode: "plain",
      range: y,
      preventEmojiSurrogates: false
    }) : "",
    S = a.useCallback(e => {
      i.F3.focus(t), d.T.withSingleEntry(t, () => {
        t.deleteFragment(), t.insertText(e)
      })
    }, [t]),
    j = function(t, e) {
      let [n, i] = a.useState(false), r = a.useCallback(async () => {
        if (!n) {
          i(true), (0, o.showToast)((0, o.createToast)(f.intl.string(f.t.p54KYY), o.ToastType.AI));
          try {
            let n = await s.tn.post({
              url: g.ANM.AI_FIX_GRAMMAR,
              body: {
                content: t
              },
              rejectWithError: false
            });
            n.ok && n.body && (e(n.body.content), (0, o.showToast)((0, o.createToast)(f.intl.string(f.t.mxQpUY), o.ToastType.SUCCESS)))
          } finally {
            i(false)
          }
        }
      }, [n, t, e]);
      return (0, l.jsx)(o.sNh, {
        id: "fix-grammar",
        label: n ? f.intl.string(f.t.p54KYY) : f.intl.string(f.t.fCpOHj),
        icon: o.$2U,
        action: r,
        disabled: n
      })
    }(m, S),
    T = function(t, e) {
      let [i, c] = a.useState(false), d = (0, r.e7)([u.default], () => u.default.locale), b = a.useCallback(async (n, l) => {
        if (i) return;
        let a = null != n ? n : d;
        c(true);
        let r = null != l ? l : a;
        (0, o.showToast)((0, o.createToast)(f.intl.formatToPlainString(f.t.Znl8Z8, {
          targetLanguage: r
        }), o.ToastType.AI));
        try {
          let n = await s.tn.post({
            url: g.ANM.AI_TRANSLATE,
            body: {
              content: t,
              locale: a
            },
            rejectWithError: false
          });
          n.ok && n.body && (e(n.body.content), (0, o.showToast)((0, o.createToast)(f.intl.formatToPlainString(f.t.FtVUqm, {
            targetLanguage: r
          }), o.ToastType.SUCCESS)))
        } finally {
          c(false)
        }
      }, [i, d, t, e]), p = (0, f.getAvailableLocales)().map(t => {
        let e;
        try {
          e = n(621287)("./".concat(t.value, ".png"))
        } catch (t) {
          e = n(1474)
        }
        return (0, l.jsx)(o.sNh, {
          id: "translate-".concat(t.value),
          label: t.name,
          icon: () => (0, l.jsx)("img", {
            alt: "",
            src: e,
            className: h.flagIcon
          }),
          action: () => b(t.value, t.name),
          disabled: i
        }, t.value)
      });
      return (0, l.jsx)(o.sNh, {
        id: "translate",
        label: i ? f.intl.string(f.t.SVKIdU) : f.intl.string(f.t["6epDlR"]),
        action: () => b(),
        disabled: i,
        children: p
      })
    }(m, S);
  return "" !== m.trim() && e ? (0, l.jsxs)(l.Fragment, {
    children: [j, T]
  }) : null
}