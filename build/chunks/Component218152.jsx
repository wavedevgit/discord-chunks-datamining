/** Chunk was on 48898 **/
/** chunk id: 218152, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Cp: () => b,
  ST: () => O,
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

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class f {
  constructor(e, t, n) {
    var i, s, r;
    p(this, "channelId", true), p(this, "_set", true), p(this, "get", true), p(this, "editorHeight", true), p(this, "editorAdditionRowHeight", true), p(this, "listViewCardHeights", true), p(this, "cardHeightVersion", true), p(this, "nameError", true), p(this, "messageError", true), p(this, "appliedTags", true), p(this, "popoutOpen", true), p(this, "guidelinesOpen", true), p(this, "previewing", true), p(this, "onboardingExpanded", true), p(this, "submitting", true), p(this, "formOpen", true), p(this, "name", true), p(this, "textAreaState", true), p(this, "hasClickedForm", true), p(this, "titleFocused", true), p(this, "bodyFocused", true), p(this, "set", true), p(this, "setEditorHeight", true), p(this, "setEditorAdditionRowHeight", true), p(this, "setCardHeight", true), p(this, "setNameError", true), p(this, "setMessageError", true), p(this, "toggleAppliedTag", true), p(this, "setPopoutOpen", true), p(this, "setGuidelinesOpen", true), p(this, "setPreviewing", true), p(this, "setSubmitting", true), p(this, "setFormOpen", true), p(this, "setOnboardingExpanded", true), p(this, "setTitleFocused", true), p(this, "setBodyFocused", true), p(this, "setName", true), p(this, "setTextAreaState", true), p(this, "setHasClickedForm", true), p(this, "resetFormState", true), p(this, "setFormOpenFromUserAction", true), this.channelId = e, this._set = t, this.get = n, this.editorHeight = 64, this.editorAdditionRowHeight = 0, this.listViewCardHeights = {}, this.cardHeightVersion = 0, this.nameError = null, this.messageError = null, this.appliedTags = new Set, this.popoutOpen = false, this.guidelinesOpen = false, this.previewing = false, this.onboardingExpanded = false, this.submitting = false, this.formOpen = false, this.name = "", this.textAreaState = (0, d.ur)(""), this.hasClickedForm = false, this.titleFocused = false, this.bodyFocused = false, this.set = e => {
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
        listViewCardHeights: n,
        cardHeightVersion: i
      } = this.get();
      n[e] !== t && (n[e] = t, this.set({
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
      }), c.A.changeThreadSettings(this.channelId, {
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
      }), c.A.changeThreadSettings(this.channelId, {
        name: e
      })
    }, this.setTextAreaState = e => {
      this.set({
        textAreaState: e
      }), c.A.saveDraft(this.channelId, e.textValue, h.C.FirstThreadMessage)
    }, this.setHasClickedForm = e => {
      this.set({
        hasClickedForm: e
      })
    }, this.resetFormState = () => {
      let e = u.A.getChannel(this.channelId),
        t = null == e || null == e.template ? "" : e.template.trim();
      this.set({
        name: "",
        textAreaState: (0, d.ur)(t),
        appliedTags: new Set,
        hasClickedForm: false
      }), g.A.clearForumSearch(this.channelId)
    }, this.setFormOpenFromUserAction = () => {
      if (this.hasClickedForm) return;
      let e = u.A.getChannel(this.channelId);
      null != e && (0, m.OG)({
        guildId: e.guild_id,
        channelId: this.channelId
      }), this.set({
        hasClickedForm: true,
        formOpen: true
      }), g.A.clearForumSearch(this.channelId)
    };
    const l = u.A.getChannel(e);
    if (null == l) return;
    const a = null != (i = h.A.getThreadSettings(l.id)) ? i : {},
      f = null == l.template ? "" : l.template.trim(),
      v = h.A.getDraft(l.id, h.C.FirstThreadMessage),
      b = (0, d.ur)(null != v && "" !== v.trim() ? v : f);
    this.name = null != (s = a.name) ? s : "", r = new Set(a.appliedTags), this.appliedTags = true !== r ? r : new Set, this.textAreaState = b, this.formOpen = b.textValue !== f
  }
}
let v = Chunk64700.createContext(null);

function b(e) {
  let {
    children: t,
    channel: n
  } = e, r = s.useMemo(() => (0, a.h)((e, t) => new f(n.id, e, t)), [n]);
  return (0, i.jsx)(v.Provider, {
    value: r,
    children: t
  })
}

function A(e, t) {
  let n = s.useContext(v);
  return l()(null != n, "[useForumPostComposerStore] Context should not be null"), n(e, t)
}

function O() {
  let e = s.useContext(v);
  return l()(null != e, "[useForumPostComposerStore] Context should not be null"), e
}