/** Chunk was on 7602 **/
/** chunk id: 218152, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  Cp: () => x,
  ST: () => b,
  kU: () => A
}), require("./896048.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk265690 = require("./265690.js"),
  Chunk121894 = require("./121894.js"),
  Chunk465532 = require("./465532.js"),
  Chunk408018 = require("./408018.js"),
  Chunk734057 = require("./734057.js"),
  Chunk31717 = require("./31717.js"),
  Chunk919577 = require("./919577.js"),
  Chunk853742 = require("./853742.js");

function v(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = s, e
}
class p {
  constructor(e, t, s) {
    var i, n, r;
    v(this, "channelId", true), v(this, "_set", true), v(this, "get", true), v(this, "editorHeight", true), v(this, "editorAdditionRowHeight", true), v(this, "listViewCardHeights", true), v(this, "cardHeightVersion", true), v(this, "nameError", true), v(this, "messageError", true), v(this, "appliedTags", true), v(this, "popoutOpen", true), v(this, "guidelinesOpen", true), v(this, "previewing", true), v(this, "onboardingExpanded", true), v(this, "submitting", true), v(this, "formOpen", true), v(this, "name", true), v(this, "textAreaState", true), v(this, "hasClickedForm", true), v(this, "titleFocused", true), v(this, "bodyFocused", true), v(this, "set", true), v(this, "setEditorHeight", true), v(this, "setEditorAdditionRowHeight", true), v(this, "setCardHeight", true), v(this, "setNameError", true), v(this, "setMessageError", true), v(this, "toggleAppliedTag", true), v(this, "setPopoutOpen", true), v(this, "setGuidelinesOpen", true), v(this, "setPreviewing", true), v(this, "setSubmitting", true), v(this, "setFormOpen", true), v(this, "setOnboardingExpanded", true), v(this, "setTitleFocused", true), v(this, "setBodyFocused", true), v(this, "setName", true), v(this, "setTextAreaState", true), v(this, "setHasClickedForm", true), v(this, "resetFormState", true), v(this, "setFormOpenFromUserAction", true), this.channelId = e, this._set = t, this.get = s, this.editorHeight = 64, this.editorAdditionRowHeight = 0, this.listViewCardHeights = {}, this.cardHeightVersion = 0, this.nameError = null, this.messageError = null, this.appliedTags = new Set, this.popoutOpen = false, this.guidelinesOpen = false, this.previewing = false, this.onboardingExpanded = false, this.submitting = false, this.formOpen = false, this.name = "", this.textAreaState = (0, h.ur)(""), this.hasClickedForm = false, this.titleFocused = false, this.bodyFocused = false, this.set = e => {
      (0, o.r)(() => this._set(e))
    }, this.setEditorHeight = e => {
      this.set({
        editorHeight: e
      })
    }, this.setEditorAdditionRowHeight = e => {
      this.set({
        editorAdditionRowHeight: e
      })
    }, this.setCardHeight = (e, t) => {
      let {
        listViewCardHeights: s,
        cardHeightVersion: i
      } = this.get();
      s[e] !== t && (s[e] = t, this.set({
        cardHeightVersion: i + 1
      }))
    }, this.setNameError = e => {
      this.set({
        nameError: e
      })
    }, this.setMessageError = e => {
      this.set({
        messageError: e
      })
    }, this.toggleAppliedTag = e => {
      let {
        appliedTags: t
      } = this.get();
      (t = new Set(t)).has(e) ? t.delete(e) : t.add(e), this.set({
        appliedTags: t
      }), d.A.changeThreadSettings(this.channelId, {
        appliedTags: t
      })
    }, this.setPopoutOpen = e => {
      this.set({
        popoutOpen: e
      })
    }, this.setGuidelinesOpen = e => {
      this.set({
        guidelinesOpen: e
      })
    }, this.setPreviewing = e => {
      this.set({
        previewing: e
      })
    }, this.setSubmitting = e => {
      this.set({
        submitting: e
      })
    }, this.setFormOpen = e => {
      this.set({
        formOpen: e
      }), g.A.clearForumSearch(this.channelId)
    }, this.setOnboardingExpanded = e => {
      this.set({
        onboardingExpanded: e
      })
    }, this.setTitleFocused = e => {
      this.set({
        titleFocused: e
      })
    }, this.setBodyFocused = e => {
      this.set({
        bodyFocused: e
      })
    }, this.setName = e => {
      this.set({
        name: e
      }), d.A.changeThreadSettings(this.channelId, {
        name: e
      })
    }, this.setTextAreaState = e => {
      this.set({
        textAreaState: e
      }), d.A.saveDraft(this.channelId, e.textValue, u.C.FirstThreadMessage)
    }, this.setHasClickedForm = e => {
      this.set({
        hasClickedForm: e
      })
    }, this.resetFormState = () => {
      let e = c.A.getChannel(this.channelId),
        t = null == e || null == e.template ? "" : e.template.trim();
      this.set({
        name: "",
        textAreaState: (0, h.ur)(t),
        appliedTags: new Set,
        hasClickedForm: false
      }), g.A.clearForumSearch(this.channelId)
    }, this.setFormOpenFromUserAction = () => {
      if (this.hasClickedForm) return;
      let e = c.A.getChannel(this.channelId);
      null != e && (0, m.OG)({
        guildId: e.guild_id,
        channelId: this.channelId
      }), this.set({
        hasClickedForm: true,
        formOpen: true
      }), g.A.clearForumSearch(this.channelId)
    };
    const l = c.A.getChannel(e);
    if (null == l) return;
    const a = null != (i = u.A.getThreadSettings(l.id)) ? i : {},
      p = null == l.template ? "" : l.template.trim(),
      f = u.A.getDraft(l.id, u.C.FirstThreadMessage),
      x = (0, h.ur)(null != f && "" !== f.trim() ? f : p);
    this.name = null != (n = a.name) ? n : "", r = new Set(a.appliedTags), this.appliedTags = true !== r ? r : new Set, this.textAreaState = x, this.formOpen = x.textValue !== p
  }
}
let f = Chunk64700.createContext(null);

function x(e) {
  let {
    children: t,
    channel: s
  } = e, r = n.useMemo(() => (0, a.h)((e, t) => new p(s.id, e, t)), [s]);
  return (0, i.jsx)(f.Provider, {
    value: r,
    children: t
  })
}

function A(e, t) {
  let s = n.useContext(f);
  return l()(null != s, "[useForumPostComposerStore] Context should not be null"), s(e, t)
}

function b() {
  let e = n.useContext(f);
  return l()(null != e, "[useForumPostComposerStore] Context should not be null"), e
}