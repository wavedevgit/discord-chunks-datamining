/** Chunk was on 37220 **/
/** chunk id: 189976, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk39952 = require("./39952.js"),
  Chunk706454 = require("./706454.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk396321 = require("./396321.js");
let b = new Map;

function p(e, t) {
  let {
    handleTranslate: p,
    handleRevertTranslation: y,
    isTranslating: O,
    isTranslated: h
  } = function(e) {
    let [t, n] = i.useState(false), r = (0, l.e7)([u.default], () => u.default.locale);
    return {
      handleTranslate: i.useCallback(async (i, l) => {
        var c, u;
        if (t) return;
        let g = null != i ? i : r;
        n(true);
        let p = null != (u = null != l ? l : null == (c = (0, f.getAvailableLocales)().find(e => e.value === g)) ? true : c.name) ? u : g;
        b.has(e.id) || b.set(e.id, e.content), (0, o.showToast)((0, o.createToast)(f.intl.formatToPlainString(f.t.Znl8Z8, {
          targetLanguage: p
        }), o.ToastType.AI));
        try {
          let t = await a.tn.post({
            url: d.ANM.AI_TRANSLATE,
            body: {
              content: e.content,
              locale: g
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
          }), (0, o.showToast)((0, o.createToast)(f.intl.formatToPlainString(f.t.FtVUqm, {
            targetLanguage: p
          }), o.ToastType.SUCCESS)))
        } finally {
          n(false)
        }
      }, [e, t, r]),
      handleRevertTranslation: i.useCallback(() => {
        let t = b.get(e.id);
        null != t && (s.Z.dispatch({
          type: "MESSAGE_UPDATE",
          message: {
            id: e.id,
            channel_id: e.channel_id,
            content: t
          }
        }), b.delete(e.id))
      }, [e.id, e.channel_id]),
      isTranslating: t,
      isTranslated: b.has(e.id)
    }
  }(e), m = function(e, t) {
    let l = (0, f.getAvailableLocales)();
    return i.useMemo(() => l.map(i => {
      let l;
      try {
        l = n(621287)("./".concat(i.value, ".png"))
      } catch (e) {
        l = n(1474)
      }
      return (0, r.jsx)(o.sNh, {
        id: "translate-".concat(i.value),
        label: i.name,
        icon: () => (0, r.jsx)("img", {
          alt: "",
          src: l,
          className: g.flagIcon
        }),
        action: () => e(i.value, i.name),
        disabled: t
      }, i.value)
    }), [e, t, l])
  }(p, O), v = (0, c.o)();
  return null != e.content && "" !== e.content.trim() && v ? h ? (0, r.jsx)(o.sNh, {
    id: "revert-translation",
    label: f.intl.string(f.t.JC9BXn),
    icon: o.os0,
    action: y,
    disabled: O
  }) : (0, r.jsx)(o.sNh, {
    id: "translate",
    label: O ? f.intl.string(f.t.SVKIdU) : f.intl.string(f.t["6epDlR"]),
    action: () => p(),
    disabled: O,
    children: m
  }) : null
}