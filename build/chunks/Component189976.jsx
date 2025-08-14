/** Chunk was on web.js **/
/** chunk id: 189976, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js"), require("./781311.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk466721 = require("./466721.js"),
  Chunk706454 = require("./706454.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk418087 = require("./418087.js");
let p = new Map;

function h(e) {
  let [t, n] = i.useState(false), r = (0, o.e7)([u.default], () => u.default.locale);
  return {
    handleTranslate: i.useCallback(async (i, o) => {
      var c, u;
      if (t) return;
      let _ = null != i ? i : r;
      n(true);
      let h = null != (u = null != o ? o : null == (c = (0, f.getAvailableLocales)().find(e => e.value === _)) ? true : c.name) ? u : _;
      p.has(e.id) || p.set(e.id, e.content), (0, s.showToast)((0, s.createToast)(f.intl.formatToPlainString(f.t.Znl8Z2, {
        targetLanguage: h
      }), s.ToastType.AI));
      try {
        let t = await a.tn.post({
          url: d.ANM.AI_TRANSLATE,
          body: {
            content: e.content,
            locale: _
          },
          rejectWithError: false
        });
        t.ok && t.body && (l.Z.dispatch({
          type: "MESSAGE_UPDATE",
          message: {
            id: e.id,
            channel_id: e.channel_id,
            content: t.body.content
          }
        }), (0, s.showToast)((0, s.createToast)(f.intl.formatToPlainString(f.t.FtVUqq, {
          targetLanguage: h
        }), s.ToastType.SUCCESS)))
      } finally {
        n(false)
      }
    }, [e, t, r]),
    handleRevertTranslation: i.useCallback(() => {
      let t = p.get(e.id);
      null != t && (l.Z.dispatch({
        type: "MESSAGE_UPDATE",
        message: {
          id: e.id,
          channel_id: e.channel_id,
          content: t
        }
      }), p.delete(e.id))
    }, [e.id, e.channel_id]),
    isTranslating: t,
    isTranslated: p.has(e.id)
  }
}

function m(e, t) {
  let o = (0, f.getAvailableLocales)();
  return i.useMemo(() => o.map(i => {
    let o;
    try {
      o = n(621287)("./".concat(i.value, ".png"))
    } catch (e) {
      o = n(1474)
    }
    return (0, r.jsx)(s.sNh, {
      id: "translate-".concat(i.value),
      label: i.name,
      icon: () => (0, r.jsx)("img", {
        alt: "",
        src: o,
        className: _.flagIcon
      }),
      action: () => e(i.value, i.name),
      disabled: t
    }, i.value)
  }), [e, t, o])
}

function g(e, t) {
  let n = c.C.useExperiment({
      location: "MessageContextMenu"
    }),
    {
      handleTranslate: i,
      handleRevertTranslation: o,
      isTranslating: a,
      isTranslated: l
    } = h(e),
    u = m(i, a);
  return null != e.content && "" !== e.content.trim() && (null == n ? true : n.enableAIFeatures) ? l ? (0, r.jsx)(s.sNh, {
    id: "revert-translation",
    label: f.intl.string(f.t.JC9BXl),
    icon: s.os0,
    action: o,
    disabled: a
  }) : (0, r.jsx)(s.sNh, {
    id: "translate",
    label: a ? f.intl.string(f.t.SVKIdX) : f.intl.string(f.t["6epDlZ"]),
    action: () => i(),
    disabled: a,
    children: u
  }) : null
}