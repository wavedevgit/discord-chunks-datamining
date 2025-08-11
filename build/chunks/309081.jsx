/** Chunk was on 68784 **/
/** chunk id: 309081, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.js"),
  Chunk313201 = require("./313201.js"),
  Chunk907040 = require("./907040.js"),
  Chunk906411 = require("./906411.js"),
  Chunk592125 = require("./592125.js"),
  Chunk358085 = require("./358085.js"),
  Chunk79390 = require("./79390.js"),
  Chunk35463 = require("./35463.js"),
  Chunk489887 = require("./489887.js"),
  Chunk185923 = require("./185923.js"),
  Chunk957825 = require("./957825.js"),
  Chunk388032 = require("./388032.js"),
  Chunk687852 = require("./687852.js");

function y(e, t) {
  if (null == e) return {};
  var n, r, a = function(e, t) {
    if (null == e) return {};
    var n, r, a = {},
      l = Object.keys(e);
    for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
    return a
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
  }
  return a
}
let P = {
  offset: {
    top: false,
    bottom: false,
    left: 0,
    right: false
  }
};

function C(e) {
  let {
    hasUpload: t,
    mediaUrl: n,
    mediaFilename: a,
    imageClassName: l,
    emoji: i,
    emojiClassName: o,
    fallback: s
  } = e;
  return t ? <img src={n} alt={a} className={l} /> : null != i ? <u.Z className={o} emojiId={i.id} emojiName={i.type === m.B.UNICODE ? i.optionallyDiverseSequence : i.name} animated={i.animated} /> : s
}

function _(e) {
  let {
    onSelect: t,
    onEditMedia: n,
    onDeleteMedia: a,
    closePopout: l
  } = e;
  return <div className={O.menuContainer}><c.v2r navId={"poll-media-edit-menu"} onClose={l} aria-label={x.intl.string(x.t["cV+h7O"])} onSelect={t}><c.kSQ>{<c.sNh id={"poll-media-replace"} label={x.intl.string(x.t.CZeRhY)} action={n} />}{<c.sNh id={"poll-media-delete"} label={x.intl.string(x.t.IhMxgo)} action={a} color={"danger"} />}</c.kSQ></c.v2r></div>
}

function R(e) {
  let {
    channelId: t,
    localCreationAnswerId: n,
    buttonImage: l,
    onEmojiSelect: s,
    onEmojiRemove: u,
    answerIndex: d,
    shouldShowEmojiPicker: m,
    toggleEmojiPicker: b,
    containerRef: j
  } = e, P = a.useRef(null), R = (0, o.e7)([p.Z], () => p.Z.getChannel(t)), {
    emoji: E,
    isLoadingMedia: k,
    hasUpload: A,
    mediaUrl: D,
    mediaFilename: S
  } = (0, h.Z)({
    channelId: t,
    localCreationAnswerId: n,
    image: l
  }), I = A || null != E, N = a.useCallback(() => {
    u(d)
  }, [u, d]), T = a.useMemo(() => A ? x.intl.formatToPlainString(x.t.vcC7Qk, {
    imageName: (0, g.fw)(S),
    answerNumber: d + 1
  }) : null != E ? x.intl.formatToPlainString(x.t.ncOAhY, {
    emojiName: E.name,
    answerNumber: d + 1
  }) : x.intl.formatToPlainString(x.t.emdpNj, {
    answerNumber: d + 1
  }), [A, E, d, S]), L = a.useCallback(e => {
    let {
      closePopout: t
    } = e;
    return <div className={O.emojiPicker}><f.Z channel={R} pickerIntention={w.Hz.POLLS} closePopout={t} onNavigateAway={t} onSelectEmoji={e => {
          let {
            emoji: n,
            willClose: r
          } = e;
          null != n && s(n, d), r && t()
        }} /></div>
  }, [R, s, d]), B = a.useCallback(e => {
    let {
      closePopout: t
    } = e;
    return <_ onSelect={t} onEditMedia={b} onDeleteMedia={N} closePopout={t} />
  }, [N, b]), U = k ? <c.$jN className={O.spinnerWrapperDefault} /> : <C hasUpload={A} mediaUrl={D} mediaFilename={S} imageClassName={i()(O.media, O.gifDefault)} emoji={E} emojiClassName={i()(O.media, O.emojiDefault)} fallback={(0, r.jsx)(c.EO4, {
      size: "md",
      color: "currentColor",
      className: O.expressionPickerIconDefault
    })} />, Z = i()(v.CT, O.expressionPickerButtonDefault, {
    [O.canEditMedia]: I
  });
  return <c.yRy targetElementRef={j} renderPopout={L} shouldShow={m} onRequestClose={b} animation={c.yRy.Animation.NONE} position={"bottom"} spacing={2}>{e => {
      var {
        "aria-controls": t,
        "aria-expanded": n
      } = e;
      return y(e, ["aria-controls", "aria-expanded"]), (0, r.jsx)(c.yRy, {
        targetElementRef: P,
        animation: c.yRy.Animation.NONE,
        position: "bottom",
        renderPopout: B,
        children: e => {
          var a, l, {
              onClick: i,
              "aria-controls": o,
              "aria-expanded": s
            } = e,
            u = y(e, ["onClick", "aria-controls", "aria-expanded"]);
          return (0, r.jsxs)(c.P3F, (a = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                var r;
                r = n[t], t in e ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = r
              })
            }
            return e
          }({
            innerRef: P
          }, u), l = l = {
            className: Z,
            onClick: I && !m ? i : b,
            "aria-label": T,
            "aria-controls": null != t ? t : o,
            "aria-expanded": n || s,
            children: [U, I && (0, r.jsx)(c.vdY, {
              size: "md",
              color: "currentColor",
              className: O.editIcon,
              "aria-hidden": true
            })]
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(l, e))
          }), a))
        }
      })
    }}</c.yRy>
}

function E(e) {
  var t;
  let {
    value: n,
    id: a
  } = e, l = (() => {
    var e;
    let t = null != (e = null == n ? true : n.length) ? e : 0;
    return j.WA - t
  })();
  return <r.Fragment>{<div className={O.characterCount} aria-hidden={"true"}>{null != (t = null == n ? true : n.length) ? t : 0}{" / "}{j.WA}</div>}{<c.nn4 id={a}>{x.intl.format(x.t.fR1coa, {
        remainingCharacters: l
      })}{" "}{x.intl.format(x.t["+DFxLS"], {
        maxLength: j.WA
      })}</c.nn4>}</r.Fragment>
}
let k = Chunk73800.forwardRef(function(e, t) {
  let {
    channelId: n,
    answer: l,
    index: o,
    isLastAnswer: u,
    onAnswerTextChange: f,
    onEmojiSelect: m,
    onEmojiRemove: p,
    canRemoveAnswer: h,
    onRemoveAnswer: w,
    addAnswer: v,
    submitPoll: y,
    answerTextInputRefs: C,
    error: _,
    inputRef: k,
    deleteButtonRef: A
  } = e, D = a.useRef(null), S = (0, d.Dt)(), I = (0, d.Dt)(), N = null != _ && _.length > 0, [T, L] = a.useState(false), B = a.useCallback(() => {
    L(e => !e)
  }, []), U = a.useCallback(e => {
    let t = e.ctrlKey && !(e.altKey || e.metaKey || e.shiftKey),
      n = e.metaKey && !(e.altKey || e.ctrlKey || e.shiftKey);
    switch (e.key.toLowerCase()) {
      case "enter":
        var r;
        u && (e.preventDefault(), ((0, g.cS)(l) || "macos" !== (0, b.getOS)() ? t : n) ? (e.stopPropagation(), y()) : v()), null == (r = C.current[o + 1]) || r.focus();
        break;
      case "e":
        ("macos" === (0, b.getOS)() ? n : t) && (e.preventDefault(), e.stopPropagation(), B())
    }
  }, [v, l, C, o, u, y, B]), Z = <R containerRef={D} channelId={n} buttonImage={l.image} onEmojiSelect={m} onEmojiRemove={p} localCreationAnswerId={l.localCreationAnswerId} answerIndex={o} shouldShowEmojiPicker={T} toggleEmojiPicker={B} />;
  return <div ref={D} className={i()(O.answerRow, {
      [O.hasDeleteButton]: h
    })}>{<div className={i()(O.defaultTextInputWrapper, {
        [O.hasError]: N
      })} ref={t}>{Z}{<s.Is aria-label={x.intl.formatToPlainString(x.t["3+V8Gx"], {
          answerNumber: o + 1
        })} placeholder={x.intl.string(x.t.NNHVlp)} value={l.text} className={O.defaultTextInput} inputClassName={O.defaultTextInput} onChange={e => f({
          text: e,
          index: o,
          localCreationAnswerId: l.localCreationAnswerId
        })} onKeyDown={U} maxLength={j.WA} aria-invalid={N} aria-describedby={N ? S : I} focusProps={P} inputRef={k} />}{<E value={l.text} id={I} />}</div>}{h && <c.P3F onClick={() => w(o)} className={O.removeAnswerButtonDefault} aria-label={x.intl.formatToPlainString(x.t["22fjER"], {
        answerNumber: o + 1
      })} ref={A}><c.XHJ size={"md"} color={"currentColor"} className={O.trashIcon} aria-hidden={true} /></c.P3F>}{N && <c.Text id={S} variant={"text-xs/medium"} color={"text-danger"} className={O.__invalid_errorText}>{_}</c.Text>}</div>
})