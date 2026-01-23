/** Chunk was on web.js **/
/** chunk id: 827977, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => k
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk155718 = require("./155718.js"),
  Chunk58149 = require("./58149.js"),
  Chunk861382 = require("./861382.js"),
  Chunk522602 = require("./522602.js"),
  Chunk234320 = require("./234320.jsx"),
  Chunk203982 = require("./203982.js"),
  Chunk355622 = require("./355622.js"),
  Chunk317681 = require("./317681.js"),
  Chunk186306 = require("./186306.js"),
  Chunk140177 = require("./140177.jsx"),
  Chunk323350 = require("./323350.js"),
  Chunk35277 = require("./35277.js"),
  Chunk711371 = require("./711371.js"),
  Chunk702483 = require("./702483.js"),
  Chunk337630 = require("./337630.js"),
  Chunk490682 = require("./490682.js"),
  Chunk904987 = require("./904987.js"),
  Chunk848570 = require("./848570.js"),
  Chunk1228 = require("./1228.js"),
  Chunk919499 = require("./919499.js"),
  Chunk126455 = require("./126455.js"),
  Chunk806839 = require("./806839.js"),
  Chunk870748 = require("./870748.js"),
  Chunk2368 = require("./2368.js"),
  Chunk820159 = require("./820159.jsx"),
  Chunk330095 = require("./330095.jsx"),
  Chunk192796 = require("./192796.jsx"),
  Chunk113796 = require("./113796.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk111925 = require("./111925.js");
let k = Chunk64700.forwardRef(function(e, t) {
  let {
    value: n,
    type: a,
    channel: k,
    className: U,
    id: G,
    disabled: V,
    submitting: F,
    placeholder: B,
    required: H,
    textAreaPaddingClassName: Y,
    onChange: W,
    onPaste: K,
    onResize: z,
    onFocus: q,
    onBlur: X,
    onKeyDown: Z,
    onKeyUp: Q,
    onTab: $,
    onEnter: J,
    onSubmit: ee,
    onSubmitFailure: et,
    maybeShowAutocomplete: en,
    hideAutocomplete: er,
    moveSelection: ei,
    spellcheckEnabled: ea,
    canUseCommands: es,
    canOnlyUseTextCommands: eo,
    disableAutoFocus: el,
    disableEnterToSubmit: ec,
    allowNewLines: eu,
    isEditorIdle: ed,
    currentAutocompleteType: ef,
    "aria-owns": ep,
    "aria-expanded": e_,
    "aria-haspopup": eh,
    "aria-activedescendant": em,
    "aria-controls": eg,
    "aria-invalid": eE,
    "aria-describedby": ey,
    "aria-labelledby": eb,
    "aria-autocomplete": eO
  } = e, ev = i.useRef(null), eA = i.useRef(null), eI = i.useRef(true), eS = i.useRef(true), eT = V || F, eC = i.useCallback((e, t, n) => {
    var r;
    let {
      value: i,
      selection: a
    } = n, s = y.VW.richValue(e), o = e.selection, l = false;
    if (true !== i && i !== s) {
      if (e.children = i, "parent" === t && !e.previewMarkdown && e.chatInputType === p.oU.EDIT) {
        try {
          e.previewMarkdown = true, (0, w.eF)(e, k.guild_id, k.id)
        } finally {
          e.previewMarkdown = false
        }(0, w.eF)(e, k.guild_id, k.id), a = true
      }
      "undo" !== t && true !== i && i !== s && h.o.insertEntry(e, "other", false, s, o), l = true
    }
    if (null == a || y.Ot.isValid(e, a) || (a = true), (l || !y.Ot.isValid(e, o)) && true === a) {
      let t = y.VW.end(e, []);
      a = {
        anchor: t,
        focus: t
      }
    }
    let u = null != a && !y.Ot.equals(a, o);
    if (l && !el && y.VW.focus(e), null != a && u) {
      e.selection = a;
      let t = h.o.currentEntry(e);
      null != t && (t.selection = a), l = true
    }
    let d = _.n$(e);
    if (null != d && d[0].command.id !== (null == (r = c.A.getActiveCommand(k.id)) ? true : r.id) && h.o.withMergedEntry(e, () => {
        (0, R.t)(e, k.id, null, true)
      }), l)
      if ("parent" === t) try {
        eS.current = false, e.onChange()
      } finally {
        eS.current = true
      } else e.onChange()
  }, [k.id, k.guild_id, el]), eN = i.useCallback(() => {
    eI.current = false
  }, []), eR = i.useCallback(() => {
    eI.current = true
  }, []), ew = (0, I.A)({
    channel: k,
    chatInputType: a,
    canUseCommands: es,
    canOnlyUseTextCommands: eo,
    onChangeStart: eN,
    onChangeEnd: eR,
    updateState: eC
  }), eP = i.useCallback((e, t) => {
    let n = _.SQ(ew, e, k.id),
      r = _.cd(e, k.guild_id, k.id, n, t);
    return {
      values: n,
      results: r
    }
  }, [k.guild_id, k.id, ew]), eD = i.useCallback(() => {
    let e, t = y.VW.getNodesOfType(ew, ["gameMentionInput", "timestampMentionInput"]),
      n = null != t ? [...t] : null,
      r = es ? c.A.getActiveCommand(k.id) : null,
      i = false;
    if (null != r && null != r.options) {
      let t = eP(r, false);
      e = t.values;
      let n = _.O7(ew).filter(e => !t.results[e].success).map(e => {
        var t;
        return (null != (t = r.options) ? t : []).find(t => t.name === e)
      });
      for (let e of r.options) !e.required || e.name in t.values || (E.b.insertCommandOption(ew, e), n.push(e));
      if (n.length > 0) {
        var a, s;
        let e = n[0];
        E.b.selectCommandOption(ew, e.name), i = true, (0, l.zV)(j.HAw.APPLICATION_COMMAND_VALIDATION_FAILED, {
          application_id: null == r ? true : r.applicationId,
          command_id: null == r || null == (s = r.rootCommand) ? true : s.id,
          argument_type: o.n4[null != (a = null == e ? true : e.type) ? a : 3],
          is_required: null == e ? true : e.required
        })
      }
    }
    if (null != n)
      for (let [e, t] of n) E.b.setNodes(ew, {
        error: true
      }, {
        at: t
      }), i || E.b.select(ew, y.VW.end(ew, t)), i = true;
    if (i) {
      f._.dispatch(j.jej.SHAKE_APP, {
        duration: 200,
        intensity: 2
      }), null == et || et();
      return
    }
    null == ee || ee((0, g.WO)(y.VW.richValue(ew), {
      mode: "raw",
      ignoreTrailingEmptyNodes: true
    }), r, e)
  }, [k.id, ew, ee, et, eP, es]);
  (0, S.A)(t, ew, k, eD), (0, N.A)(ew, ev, z);
  let {
    handleKeyDown: ex,
    handleKeyUp: eL
  } = (0, T.A)({
    editor: ew,
    channel: k,
    disableEnterToSubmit: ec,
    onKeyDown: Z,
    onKeyUp: Q,
    onTab: $,
    onEnter: J,
    allowNewLines: eu,
    submit: eD,
    hideAutocomplete: er,
    moveSelection: ei
  }), {
    handlePaste: ej,
    handleGlobalPaste: eM
  } = (0, C.A)(ew, eT, K), ek = i.useCallback(e => {
    null == en || en()
  }, [en]), eU = i.useCallback(e => {
    e !== eA.current ? eS.current && (null == W || W(null, (0, g.WO)(e, {
      mode: "raw"
    }), e)) : eS.current && en()
  }, [en, W]);
  i.useLayoutEffect(() => {
    eI.current && (eA.current = n, eC(ew, "parent", {
      value: n
    }))
  }, [ew, n, eC]), i.useEffect(() => {
    let e = () => {
      var e;
      let t = null != (e = c.A.getActiveCommand(k.id)) ? e : null;
      null !== t && null != t.options && eP(t, true)
    };
    return u.A.addChangeListener(e), () => u.A.removeChangeListener(e)
  }, [k, ew, eP]);
  let eG = i.useCallback(e => [...(0, v.A)(ew, e, k.guild_id), ...(0, b.A)(ew, e), ...(0, O.A)(ew, e), ...(0, A.A)(ew, e, k, {
      isIdle: ed,
      currentAutocompleteType: ef
    })], [ew, k, ed, ef]),
    eV = i.useCallback(e => {
      let t = (0, P.A)(ew, e, k.id);
      return null == t && (t = (0, x.A)(ew, e)), null == t && (t = (0, L.A)(ew, e)), t
    }, [k.id, ew]),
    eF = i.useCallback(e => (0, D.A)(e), []);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.EG, {
      event: j.jej.GLOBAL_CLIPBOARD_PASTE,
      handler: eM
    }), (0, r.jsx)("div", {
      ref: ev,
      className: s()(U, M.pC),
      children: (0, r.jsx)(m.A, {
        id: G,
        editor: ew,
        channelId: k.id,
        guildId: k.guild_id,
        className: s()(M.gf, Y),
        placeholder: B,
        readOnly: eT,
        spellCheck: ea,
        autoFocus: !el,
        canFocus: !V,
        onChange: eU,
        onFocus: q,
        onBlur: X,
        onClick: ek,
        onPaste: ej,
        onKeyDown: ex,
        onKeyUp: eL,
        decorate: eG,
        renderExtraElement: eV,
        renderExtraLeaf: eF,
        "aria-owns": ep,
        "aria-haspopup": eh,
        "aria-expanded": e_,
        "aria-activedescendant": em,
        "aria-controls": eg,
        "aria-labelledby": eb,
        "aria-describedby": ey,
        "aria-invalid": eE,
        "aria-autocomplete": eO,
        "aria-required": H
      })
    })]
  })
})