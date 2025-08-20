/** Chunk was on web.js **/
/** chunk id: 4484, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk911969 = require("./911969.js"),
  Chunk367907 = require("./367907.js"),
  Chunk998698 = require("./998698.js"),
  Chunk117530 = require("./117530.js"),
  Chunk459273 = require("./459273.jsx"),
  Chunk585483 = require("./585483.js"),
  Chunk541716 = require("./541716.js"),
  Chunk91313 = require("./91313.js"),
  Chunk53529 = require("./53529.js"),
  Chunk288897 = require("./288897.jsx"),
  Chunk925994 = require("./925994.js"),
  Chunk436660 = require("./436660.js"),
  Chunk887490 = require("./887490.js"),
  Chunk194625 = require("./194625.js"),
  Chunk77188 = require("./77188.js"),
  Chunk230554 = require("./230554.js"),
  Chunk780748 = require("./780748.js"),
  Chunk464581 = require("./464581.js"),
  Chunk732659 = require("./732659.js"),
  Chunk86724 = require("./86724.js"),
  Chunk847302 = require("./847302.js"),
  Chunk657198 = require("./657198.jsx"),
  Chunk321127 = require("./321127.jsx"),
  Chunk645174 = require("./645174.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk867641 = require("./867641.js");
let x = Chunk647438.forwardRef(function(e, t) {
  let {
    value: n,
    type: a,
    channel: x,
    className: L,
    id: j,
    disabled: M,
    submitting: k,
    placeholder: U,
    required: G,
    textAreaPaddingClassName: B,
    onChange: Z,
    onPaste: V,
    onResize: F,
    onFocus: H,
    onBlur: Y,
    onKeyDown: W,
    onKeyUp: K,
    onTab: z,
    onEnter: q,
    onSubmit: X,
    maybeShowAutocomplete: Q,
    hideAutocomplete: J,
    moveSelection: $,
    spellcheckEnabled: ee,
    canUseCommands: et,
    canOnlyUseTextCommands: en,
    disableAutoFocus: er,
    disableEnterToSubmit: ei,
    allowNewLines: ea,
    "aria-owns": eo,
    "aria-expanded": es,
    "aria-haspopup": el,
    "aria-activedescendant": ec,
    "aria-controls": eu,
    "aria-invalid": ed,
    "aria-describedby": ef,
    "aria-labelledby": e_,
    "aria-autocomplete": ep
  } = e, eh = i.useRef(null), em = i.useRef(null), eg = i.useRef(true), eE = i.useRef(true), eb = M || k, ey = i.useCallback((e, t, n) => {
    var r;
    let {
      value: i,
      selection: a
    } = n, o = b.bN.richValue(e), s = e.selection, l = false;
    if (true !== i && i !== o) {
      if (e.children = i, "parent" === t && !e.previewMarkdown && e.chatInputType === _.Ie.EDIT) {
        try {
          e.previewMarkdown = true, (0, C.KH)(e, x.guild_id, x.id)
        } finally {
          e.previewMarkdown = false
        }(0, C.KH)(e, x.guild_id, x.id), a = true
      }
      "undo" !== t && true !== i && i !== o && h.T.insertEntry(e, "other", false, o, s), l = true
    }
    if (null == a || b.Ew.isValid(e, a) || (a = true), (l || !b.Ew.isValid(e, s)) && true === a) {
      let t = b.bN.end(e, []);
      a = {
        anchor: t,
        focus: t
      }
    }
    let u = null != a && !b.Ew.equals(a, s);
    if (l && !er && b.bN.focus(e), null != a && u) {
      e.selection = a;
      let t = h.T.currentEntry(e);
      null != t && (t.selection = a), l = true
    }
    let d = p.cr(e);
    if (null != d && d[0].command.id !== (null == (r = c.Z.getActiveCommand(x.id)) ? true : r.id) && h.T.withMergedEntry(e, () => {
        (0, A.L)(e, x.id, null, true)
      }), l)
      if ("parent" === t) try {
        eE.current = false, e.onChange()
      } finally {
        eE.current = true
      } else e.onChange()
  }, [x.id, x.guild_id, er]), eO = i.useCallback(() => {
    eg.current = false
  }, []), ev = i.useCallback(() => {
    eg.current = true
  }, []), eI = (0, O.Z)({
    channel: x,
    chatInputType: a,
    canUseCommands: et,
    canOnlyUseTextCommands: en,
    onChangeStart: eO,
    onChangeEnd: ev,
    updateState: ey
  }), eT = i.useCallback((e, t) => {
    let n = p.tM(eI, e, x.id),
      r = p.lk(e, x.guild_id, x.id, n, t);
    return {
      values: n,
      results: r
    }
  }, [x.guild_id, x.id, eI]), eS = i.useCallback(() => {
    let e, t = et ? c.Z.getActiveCommand(x.id) : null;
    if (null != t && null != t.options) {
      let i = eT(t, false);
      e = i.values;
      let a = p.cu(eI).filter(e => !i.results[e].success).map(e => {
        var n;
        return (null != (n = t.options) ? n : []).find(t => t.name === e)
      });
      for (let e of t.options) !e.required || e.name in i.values || (E.Q.insertCommandOption(eI, e), a.push(e));
      if (a.length > 0) {
        var n, r;
        let e = a[0];
        E.Q.selectCommandOption(eI, e.name), f.S.dispatch(w.CkL.SHAKE_APP, {
          duration: 200,
          intensity: 2
        }), (0, l.yw)(w.rMx.APPLICATION_COMMAND_VALIDATION_FAILED, {
          application_id: null == t ? true : t.applicationId,
          command_id: null == t || null == (n = t.rootCommand) ? true : n.id,
          argument_type: s.jw[null != (r = null == e ? true : e.type) ? r : 3],
          is_required: null == e ? true : e.required
        });
        return
      }
    }
    null == X || X((0, g.sk)(b.bN.richValue(eI), {
      mode: "raw",
      ignoreTrailingEmptyNodes: true
    }), t, e)
  }, [x.id, eI, X, eT, et]);
  (0, v.Z)(t, eI, x, eS), (0, S.Z)(eI, eh, F);
  let {
    handleKeyDown: eA,
    handleKeyUp: eC
  } = (0, I.Z)({
    editor: eI,
    channel: x,
    disableEnterToSubmit: ei,
    onKeyDown: W,
    onKeyUp: K,
    onTab: z,
    onEnter: q,
    allowNewLines: ea,
    submit: eS,
    hideAutocomplete: J,
    moveSelection: $
  }), {
    handlePaste: eN,
    handleGlobalPaste: eR
  } = (0, T.Z)(eI, eb, V), eP = i.useCallback(e => {
    null == Q || Q()
  }, [Q]), ew = i.useCallback(e => {
    e !== em.current ? eE.current && (null == Z || Z(null, (0, g.sk)(e, {
      mode: "raw"
    }), e)) : eE.current && Q()
  }, [Q, Z]);
  i.useLayoutEffect(() => {
    eg.current && (em.current = n, ey(eI, "parent", {
      value: n
    }))
  }, [eI, n, ey]), i.useEffect(() => {
    let e = () => {
      var e;
      let t = null != (e = c.Z.getActiveCommand(x.id)) ? e : null;
      null !== t && null != t.options && eT(t, true)
    };
    return u.Z.addChangeListener(e), () => u.Z.removeChangeListener(e)
  }, [x, eI, eT]);
  let eD = i.useCallback((e, t) => (0, y.Z)(e, t), []),
    ex = i.useCallback(e => {
      let t = (0, N.Z)(eI, e, x.id);
      return null == t && (t = (0, P.Z)(eI, e)), t
    }, [x.id, eI]),
    eL = i.useCallback(e => (0, R.Z)(e), []);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.d9, {
      event: w.CkL.GLOBAL_CLIPBOARD_PASTE,
      handler: eR
    }), (0, r.jsx)("div", {
      ref: eh,
      className: o()(L, D.slateContainer),
      children: (0, r.jsx)(m.Z, {
        id: j,
        editor: eI,
        channelId: x.id,
        guildId: x.guild_id,
        className: o()(D.slateTextArea, B),
        placeholder: U,
        readOnly: eb,
        spellCheck: ee,
        autoFocus: !er,
        canFocus: !M,
        onChange: ew,
        onFocus: H,
        onBlur: Y,
        onClick: eP,
        onPaste: eN,
        onKeyDown: eA,
        onKeyUp: eC,
        decorateExtra: eD,
        renderExtraElement: ex,
        renderExtraLeaf: eL,
        "aria-owns": eo,
        "aria-haspopup": el,
        "aria-expanded": es,
        "aria-activedescendant": ec,
        "aria-controls": eu,
        "aria-labelledby": e_,
        "aria-describedby": ef,
        "aria-invalid": ed,
        "aria-autocomplete": ep,
        "aria-required": G
      })
    })]
  })
})