/** Chunk was on web.js **/
/** chunk id: 4484, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => L
}), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk911969 = require("./911969.js"),
  Chunk367907 = require("./367907.js"),
  Chunk998698 = require("./998698.js"),
  Chunk117530 = require("./117530.js"),
  Chunk459273 = require("./459273.js"),
  Chunk585483 = require("./585483.js"),
  Chunk541716 = require("./541716.js"),
  Chunk91313 = require("./91313.js"),
  Chunk53529 = require("./53529.js"),
  Chunk288897 = require("./288897.js"),
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
  Chunk657198 = require("./657198.js"),
  Chunk321127 = require("./321127.js"),
  Chunk645174 = require("./645174.js"),
  Chunk981631 = require("./981631.js"),
  Chunk117335 = require("./117335.js");
let L = Chunk73800.forwardRef(function(e, t) {
  let {
    value: n,
    type: o,
    channel: L,
    className: x,
    id: M,
    disabled: k,
    submitting: j,
    placeholder: U,
    required: G,
    textAreaPaddingClassName: B,
    onChange: Z,
    onPaste: F,
    onResize: V,
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
    allowNewLines: eo,
    "aria-owns": ea,
    "aria-expanded": es,
    "aria-haspopup": el,
    "aria-activedescendant": ec,
    "aria-controls": eu,
    "aria-invalid": ed,
    "aria-describedby": ef,
    "aria-labelledby": e_,
    "aria-autocomplete": ep
  } = e, eh = i.useRef(null), em = i.useRef(null), eg = i.useRef(true), eE = i.useRef(true), eb = k || j, ey = i.useCallback((e, t, n) => {
    var r;
    let {
      value: i,
      selection: o
    } = n, a = b.bN.richValue(e), s = e.selection, l = false;
    if (true !== i && i !== a) {
      if (e.children = i, "parent" === t && !e.previewMarkdown && e.chatInputType === _.Ie.EDIT) {
        try {
          e.previewMarkdown = true, (0, N.KH)(e, L.guild_id, L.id)
        } finally {
          e.previewMarkdown = false
        }(0, N.KH)(e, L.guild_id, L.id), o = true
      }
      "undo" !== t && true !== i && i !== a && h.T.insertEntry(e, "other", false, a, s), l = true
    }
    if (null == o || b.Ew.isValid(e, o) || (o = true), (l || !b.Ew.isValid(e, s)) && true === o) {
      let t = b.bN.end(e, []);
      o = {
        anchor: t,
        focus: t
      }
    }
    let u = null != o && !b.Ew.equals(o, s);
    if (l && !er && b.bN.focus(e), null != o && u) {
      e.selection = o;
      let t = h.T.currentEntry(e);
      null != t && (t.selection = o), l = true
    }
    let d = p.cr(e);
    if (null != d && d[0].command.id !== (null == (r = c.Z.getActiveCommand(L.id)) ? true : r.id) && h.T.withMergedEntry(e, () => {
        (0, A.L)(e, L.id, null, true)
      }), l)
      if ("parent" === t) try {
        eE.current = false, e.onChange()
      } finally {
        eE.current = true
      } else e.onChange()
  }, [L.id, L.guild_id, er]), eO = i.useCallback(() => {
    eg.current = false
  }, []), ev = i.useCallback(() => {
    eg.current = true
  }, []), eI = (0, O.Z)({
    channel: L,
    chatInputType: o,
    canUseCommands: et,
    canOnlyUseTextCommands: en,
    onChangeStart: eO,
    onChangeEnd: ev,
    updateState: ey
  }), eT = i.useCallback((e, t) => {
    let n = p.tM(eI, e, L.id),
      r = p.lk(e, L.guild_id, L.id, n, t);
    return {
      values: n,
      results: r
    }
  }, [L.guild_id, L.id, eI]), eS = i.useCallback(() => {
    let e, t = et ? c.Z.getActiveCommand(L.id) : null;
    if (null != t && null != t.options) {
      let i = eT(t, false);
      e = i.values;
      let o = p.cu(eI).filter(e => !i.results[e].success).map(e => {
        var n;
        return (null != (n = t.options) ? n : []).find(t => t.name === e)
      });
      for (let e of t.options) !e.required || e.name in i.values || (E.Q.insertCommandOption(eI, e), o.push(e));
      if (o.length > 0) {
        var n, r;
        let e = o[0];
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
  }, [L.id, eI, X, eT, et]);
  (0, v.Z)(t, eI, L, eS), (0, S.Z)(eI, eh, V);
  let {
    handleKeyDown: eA,
    handleKeyUp: eN
  } = (0, I.Z)({
    editor: eI,
    channel: L,
    disableEnterToSubmit: ei,
    onKeyDown: W,
    onKeyUp: K,
    onTab: z,
    onEnter: q,
    allowNewLines: eo,
    submit: eS,
    hideAutocomplete: J,
    moveSelection: $
  }), {
    handlePaste: eC,
    handleGlobalPaste: eR
  } = (0, T.Z)(eI, eb, F), eP = i.useCallback(e => {
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
      let t = null != (e = c.Z.getActiveCommand(L.id)) ? e : null;
      null !== t && null != t.options && eT(t, true)
    };
    return u.Z.addChangeListener(e), () => u.Z.removeChangeListener(e)
  }, [L, eI, eT]);
  let eD = i.useCallback((e, t) => (0, y.Z)(e, t), []),
    eL = i.useCallback(e => {
      let t = (0, C.Z)(eI, e, L.id);
      return null == t && (t = (0, P.Z)(eI, e)), t
    }, [L.id, eI]),
    ex = i.useCallback(e => (0, R.Z)(e), []);
  return <r.Fragment>{<d.d9 event={w.CkL.GLOBAL_CLIPBOARD_PASTE} handler={eR} />}{<div ref={eh} className={a()(x, D.slateContainer)}><m.Z id={M} editor={eI} channelId={L.id} guildId={L.guild_id} className={a()(D.slateTextArea, B)} placeholder={U} readOnly={eb} spellCheck={ee} autoFocus={!er} canFocus={!k} onChange={ew} onFocus={H} onBlur={Y} onClick={eP} onPaste={eC} onKeyDown={eA} onKeyUp={eN} decorateExtra={eD} renderExtraElement={eL} renderExtraLeaf={ex} aria-owns={ea} aria-haspopup={el} aria-expanded={es} aria-activedescendant={ec} aria-controls={eu} aria-labelledby={e_} aria-describedby={ef} aria-invalid={ed} aria-autocomplete={ep} aria-required={G} /></div>}</r.Fragment>
})