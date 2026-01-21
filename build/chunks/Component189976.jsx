/** Chunk was on 37220 **/
/** chunk id: 189976, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk39952 = require("./39952.js"),
  Chunk706454 = require("./706454.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let g = new Map;

function p(e, t) {
  let {
    handleTranslate: p,
    handleRevertTranslation: b,
    isTranslating: m,
    isTranslated: y
  } = function(e) {
    let [t, n] = i.useState(false), r = (0, l.e7)([u.default], () => u.default.locale);
    return {
      handleTranslate: i.useCallback(async (i, l) => {
        var c, u;
        if (t) return;
        let p = null != i ? i : r;
        n(true);
        let b = null != (u = null != l ? l : null == (c = (0, f.getAvailableLocales)().find(e => e.value === p)) ? true : c.name) ? u : p;
        g.has(e.id) || g.set(e.id, e.content), (0, a.showToast)((0, a.createToast)(f.intl.formatToPlainString(f.t.Znl8Z8, {
          targetLanguage: b
        }), a.ToastType.AI));
        try {
          let t = await o.tn.post({
            url: d.ANM.AI_TRANSLATE,
            body: {
              content: e.content,
              locale: p
            },
            rejectWithError: false
          });
          t.ok && t.body && (s.Z.dispatch({
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
      handleRevertTranslation: i.useCallback(() => {
        let t = g.get(e.id);
        null != t && (s.Z.dispatch({
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
  }(e), O = function(e, t) {
    let l = (0, f.getAvailableLocales)();
    return i.useMemo(() => l.map(i => {
      let l;
      try {
        l = n(621287)("./".concat(i.value, ".png"))
      } catch (e) {
        l = n(1474)
      }
      return (0, r.jsx)(a.sNh, {
        id: "translate-".concat(i.value),
        label: i.name,
        leadingAccessory: {
          type: "image",
          src: l
        },
        action: () => e(i.value, i.name),
        disabled: t
      }, i.value)
    }), [e, t, l])
  }(p, m), h = (0, c.o)();
  return null != e.content && "" !== e.content.trim() && h ? y ? (0, r.jsx)(a.sNh, {
    id: "revert-translation",
    label: f.intl.string(f.t.JC9BXn),
    icon: a.os0,
    action: b,
    disabled: m
  }) : (0, r.jsx)(a.sNh, {
    id: "translate",
    label: m ? f.intl.string(f.t.SVKIdU) : f.intl.string(f.t["6epDlR"]),
    action: () => p(),
    disabled: m,
    children: O
  }) : null
}