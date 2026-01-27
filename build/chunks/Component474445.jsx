/** Chunk was on 1636 **/
/** chunk id: 474445, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
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
  Chunk985018 = require("./985018.jsx"),
  Chunk923545 = require("./923545.js");
let f = new Map;

function y(e, t) {
  let y, {
      handleTranslate: b,
      handleRevertTranslation: A,
      isTranslating: m,
      isTranslated: O
    } = function(e) {
      let [t, n] = i.useState(false), r = (0, l.bG)([d.default], () => d.default.locale);
      return {
        handleTranslate: i.useCallback(async (i, l) => {
          var s, d;
          if (t) return;
          let p = null != i ? i : r;
          n(true);
          let y = null != (s = null != l ? l : null == (d = (0, g.getAvailableLocales)().find(e => e.value === p)) ? true : d.name) ? s : p;
          f.has(e.id) || f.set(e.id, e.content), (0, o.showToast)((0, o.createToast)(g.intl.formatToPlainString(g.t.Znl8Z8, {
            targetLanguage: y
          }), o.ToastType.AI));
          try {
            let t = await a.Bo.post({
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
            }), (0, o.showToast)((0, o.createToast)(g.intl.formatToPlainString(g.t.FtVUqm, {
              targetLanguage: y
            }), o.ToastType.SUCCESS)))
          } finally {
            n(false)
          }
        }, [e, t, r]),
        handleRevertTranslation: i.useCallback(() => {
          let t = f.get(e.id);
          null != t && (c.h.dispatch({
            type: "MESSAGE_UPDATE",
            message: {
              id: e.id,
              channel_id: e.channel_id,
              content: t
            }
          }), f.delete(e.id))
        }, [e.id, e.channel_id]),
        isTranslating: t,
        isTranslated: f.has(e.id)
      }
    }(e),
    v = (y = (0, g.getAvailableLocales)(), i.useMemo(() => y.map(e => {
      let t;
      try {
        t = n(579832)("./".concat(e.value, ".png"))
      } catch (e) {
        t = n(432706)
      }
      return (0, r.jsx)(o.Drp, {
        id: "translate-".concat(e.value),
        label: e.name,
        icon: () => (0, r.jsx)("img", {
          alt: "",
          src: t,
          className: p.M
        }),
        leadingAccessory: {
          type: "image",
          src: t
        },
        action: () => b(e.value, e.name),
        disabled: m
      }, e.value)
    }), [b, m, y])),
    h = (0, s.b)();
  return null != e.content && "" !== e.content.trim() && h ? O ? (0, r.jsx)(o.Drp, {
    id: "revert-translation",
    label: g.intl.string(g.t.JC9BXn),
    leadingAccessory: {
      type: "icon",
      icon: o.UaP
    },
    icon: o.UaP,
    action: A,
    disabled: m
  }) : (0, r.jsx)(o.Drp, {
    id: "translate",
    label: m ? g.intl.string(g.t.SVKIdU) : g.intl.string(g.t["6epDlR"]),
    action: () => b(),
    leadingAccessory: {
      type: "icon",
      icon: o.UaP
    },
    disabled: m,
    children: v
  }) : null
}