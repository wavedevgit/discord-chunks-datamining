/** Chunk was on 85664 **/
i.d(e, {
  AF: () => S,
  oL: () => v,
  xH: () => C
}), i(388685), i(781311);
var s = i(255367),
  n = i(73800),
  a = i(512722),
  o = i.n(a),
  r = i(362383),
  l = i(731965),
  h = i(430742),
  d = i(752305),
  u = i(592125),
  c = i(703558),
  g = i(883429),
  p = i(228392);

function f(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = i, t
}
class m {
  constructor(t, e, i) {
    var s, n, a;
    f(this, "channelId", void 0), f(this, "_set", void 0), f(this, "get", void 0), f(this, "editorHeight", void 0), f(this, "editorAdditionRowHeight", void 0), f(this, "listViewCardHeights", void 0), f(this, "cardHeightVersion", void 0), f(this, "nameError", void 0), f(this, "messageError", void 0), f(this, "appliedTags", void 0), f(this, "popoutOpen", void 0), f(this, "guidelinesOpen", void 0), f(this, "previewing", void 0), f(this, "onboardingExpanded", void 0), f(this, "submitting", void 0), f(this, "formOpen", void 0), f(this, "name", void 0), f(this, "textAreaState", void 0), f(this, "hasClickedForm", void 0), f(this, "titleFocused", void 0), f(this, "bodyFocused", void 0), f(this, "set", void 0), f(this, "setEditorHeight", void 0), f(this, "setEditorAdditionRowHeight", void 0), f(this, "setCardHeight", void 0), f(this, "setNameError", void 0), f(this, "setMessageError", void 0), f(this, "toggleAppliedTag", void 0), f(this, "setPopoutOpen", void 0), f(this, "setGuidelinesOpen", void 0), f(this, "setPreviewing", void 0), f(this, "setSubmitting", void 0), f(this, "setFormOpen", void 0), f(this, "setOnboardingExpanded", void 0), f(this, "setTitleFocused", void 0), f(this, "setBodyFocused", void 0), f(this, "setName", void 0), f(this, "setTextAreaState", void 0), f(this, "setHasClickedForm", void 0), f(this, "resetFormState", void 0), f(this, "setFormOpenFromUserAction", void 0), this.channelId = t, this._set = e, this.get = i, this.editorHeight = 64, this.editorAdditionRowHeight = 0, this.listViewCardHeights = {}, this.cardHeightVersion = 0, this.nameError = null, this.messageError = null, this.appliedTags = new Set, this.popoutOpen = !1, this.guidelinesOpen = !1, this.previewing = !1, this.onboardingExpanded = !1, this.submitting = !1, this.formOpen = !1, this.name = "", this.textAreaState = (0, d.eK)(""), this.hasClickedForm = !1, this.titleFocused = !1, this.bodyFocused = !1, this.set = t => {
      (0, l.j)(() => this._set(t))
    }, this.setEditorHeight = t => {
      this.set({
        editorHeight: t
      })
    }, this.setEditorAdditionRowHeight = t => {
      this.set({
        editorAdditionRowHeight: t
      })
    }, this.setCardHeight = (t, e) => {
      let {
        listViewCardHeights: i,
        cardHeightVersion: s
      } = this.get();
      i[t] !== e && (i[t] = e, this.set({
        cardHeightVersion: s + 1
      }))
    }, this.setNameError = t => {
      this.set({
        nameError: t
      })
    }, this.setMessageError = t => {
      this.set({
        messageError: t
      })
    }, this.toggleAppliedTag = t => {
      let {
        appliedTags: e
      } = this.get();
      (e = new Set(e)).has(t) ? e.delete(t) : e.add(t), this.set({
        appliedTags: e
      }), h.Z.changeThreadSettings(this.channelId, {
        appliedTags: e
      })
    }, this.setPopoutOpen = t => {
      this.set({
        popoutOpen: t
      })
    }, this.setGuidelinesOpen = t => {
      this.set({
        guidelinesOpen: t
      })
    }, this.setPreviewing = t => {
      this.set({
        previewing: t
      })
    }, this.setSubmitting = t => {
      this.set({
        submitting: t
      })
    }, this.setFormOpen = t => {
      this.set({
        formOpen: t
      }), g.Z.clearForumSearch(this.channelId)
    }, this.setOnboardingExpanded = t => {
      this.set({
        onboardingExpanded: t
      })
    }, this.setTitleFocused = t => {
      this.set({
        titleFocused: t
      })
    }, this.setBodyFocused = t => {
      this.set({
        bodyFocused: t
      })
    }, this.setName = t => {
      this.set({
        name: t
      }), h.Z.changeThreadSettings(this.channelId, {
        name: t
      })
    }, this.setTextAreaState = t => {
      this.set({
        textAreaState: t
      }), h.Z.saveDraft(this.channelId, t.textValue, c.d.FirstThreadMessage)
    }, this.setHasClickedForm = t => {
      this.set({
        hasClickedForm: t
      })
    }, this.resetFormState = () => {
      let t = u.Z.getChannel(this.channelId),
        e = null == t || null == t.template ? "" : t.template.trim();
      this.set({
        name: "",
        textAreaState: (0, d.eK)(e),
        appliedTags: new Set,
        hasClickedForm: !1
      }), g.Z.clearForumSearch(this.channelId)
    }, this.setFormOpenFromUserAction = () => {
      if (this.hasClickedForm) return;
      let t = u.Z.getChannel(this.channelId);
      null != t && (0, p.HR)({
        guildId: t.guild_id,
        channelId: this.channelId
      }), this.set({
        hasClickedForm: !0,
        formOpen: !0
      }), g.Z.clearForumSearch(this.channelId)
    };
    let o = u.Z.getChannel(t);
    if (null == o) return;
    let r = null != (s = c.Z.getThreadSettings(o.id)) ? s : {},
      m = null == o.template ? "" : o.template.trim(),
      b = c.Z.getDraft(o.id, c.d.FirstThreadMessage),
      v = (0, d.eK)(null != b && "" !== b.trim() ? b : m);
    this.name = null != (n = r.name) ? n : "", a = new Set(r.appliedTags), this.appliedTags = void 0 !== a ? a : new Set, this.formOpen = this.name.length > 0 && v.textValue.length > 0, this.textAreaState = v
  }
}
let b = n.createContext(null);

function v(t) {
  let {
    children: e,
    channel: i
  } = t, a = n.useMemo(() => (0, r.F)((t, e) => new m(i.id, t, e)), [i]);
  return (0, s.jsx)(b.Provider, {
    value: a,
    children: e
  })
}

function C(t, e) {
  let i = n.useContext(b);
  return o()(null != i, "[useForumPostComposerStore] Context should not be null"), i(t, e)
}

function S() {
  let t = n.useContext(b);
  return o()(null != t, "[useForumPostComposerStore] Context should not be null"), t
}