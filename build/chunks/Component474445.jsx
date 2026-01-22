/** Chunk was on 1636 **/
/** chunk id: 474445, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./896048.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk147087 = require("./147087.js"),
  Chunk773669 = require("./773669.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let g = new Map;

function p(e, t) {
  let p, {
      handleTranslate: b,
      handleRevertTranslation: m,
      isTranslating: y,
      isTranslated: O
    } = function(e) {
      let [t, n] = l.useState(false), r = (0, i.bG)([d.default], () => d.default.locale);
      return {
        handleTranslate: l.useCallback(async (l, i) => {
          var s, d;
          if (t) return;
          let p = null != l ? l : r;
          n(true);
          let b = null != (s = null != i ? i : null == (d = (0, f.getAvailableLocales)().find(e => e.value === p)) ? true : d.name) ? s : p;
          g.has(e.id) || g.set(e.id, e.content), (0, a.showToast)((0, a.createToast)(f.intl.formatToPlainString(f.t.Znl8Z8, {
            targetLanguage: b
          }), a.ToastType.AI));
          try {
            let t = await o.Bo.post({
              url: u.Rsh.AI_TRANSLATE,
              body: {
                content: e.content,
                locale: p
              },
              rejectWithError: false
            });
            t.ok && t.body && (c.h.dispatch({
              type: "MESSAGE_UPDATE",
              message: {
                id: e.id,
                channel_id: e.channel_id,
                content: t.body.content
              }
            }), (0, a.showToast)((0, a.createToast)(f.intl.formatToPlainString(f.t.FtVUqm, {
              targetLanguage: b
            }), a.ToastType.SUCCESS)))
          } finally {
            n(false)
          }
        }, [e, t, r]),
        handleRevertTranslation: l.useCallback(() => {
          let t = g.get(e.id);
          null != t && (c.h.dispatch({
            type: "MESSAGE_UPDATE",
            message: {
              id: e.id,
              channel_id: e.channel_id,
              content: t
            }
          }), g.delete(e.id))
        }, [e.id, e.channel_id]),
        isTranslating: t,
        isTranslated: g.has(e.id)
      }
    }(e),
    A = (p = (0, f.getAvailableLocales)(), l.useMemo(() => p.map(e => {
      let t;
      try {
        t = n(579832)("./".concat(e.value, ".png"))
      } catch (e) {
        t = n(432706)
      }
      return (0, r.jsx)(a.Drp, {
        id: "translate-".concat(e.value),
        label: e.name,
        leadingAccessory: {
          type: "image",
          src: t
        },
        action: () => b(e.value, e.name),
        disabled: y
      }, e.value)
    }), [b, y, p])),
    v = (0, s.b)();
  return null != e.content && "" !== e.content.trim() && v ? O ? (0, r.jsx)(a.Drp, {
    id: "revert-translation",
    label: f.intl.string(f.t.JC9BXn),
    icon: a.UaP,
    action: m,
    disabled: y
  }) : (0, r.jsx)(a.Drp, {
    id: "translate",
    label: y ? f.intl.string(f.t.SVKIdU) : f.intl.string(f.t["6epDlR"]),
    action: () => b(),
    disabled: y,
    children: A
  }) : null
}