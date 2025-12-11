/** Chunk was on 68784 **/
/** chunk id: 309081, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk907040 = require("./907040.jsx"),
  Chunk906411 = require("./906411.js"),
  Chunk592125 = require("./592125.js"),
  Chunk358085 = require("./358085.js"),
  Chunk79390 = require("./79390.js"),
  Chunk35463 = require("./35463.js"),
  Chunk489887 = require("./489887.js"),
  Chunk185923 = require("./185923.js"),
  Chunk957825 = require("./957825.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk784592 = require("./784592.js");

function h(e, t) {
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

function P(e) {
  let {
    hasUpload: t,
    mediaUrl: n,
    mediaFilename: a,
    imageClassName: l,
    emoji: i,
    emojiClassName: o,
    fallback: c
  } = e;
  return t ? (0, r.jsx)("img", {
    src: n,
    alt: a,
    className: l
  }) : null != i ? (0, r.jsx)(s.Z, {
    className: o,
    emojiId: i.id,
    emojiName: i.type === d.B.UNICODE ? i.optionallyDiverseSequence : i.name,
    animated: i.animated
  }) : c
}

function w(e) {
  let {
    onSelect: t,
    onEditMedia: n,
    onDeleteMedia: a,
    closePopout: l
  } = e;
  return (0, r.jsx)("div", {
    className: v.menuContainer,
    children: (0, r.jsx)(c.v2r, {
      navId: "poll-media-edit-menu",
      onClose: l,
      "aria-label": y.intl.string(y.t["cV+h7B"]),
      onSelect: t,
      children: (0, r.jsxs)(c.kSQ, {
        children: [(0, r.jsx)(c.sNh, {
          id: "poll-media-replace",
          label: y.intl.string(y.t.CZeRhU),
          action: n
        }), (0, r.jsx)(c.sNh, {
          id: "poll-media-delete",
          label: y.intl.string(y.t.IhMxgu),
          action: a,
          color: "danger"
        })]
      })
    })
  })
}

function C(e) {
  let {
    channelId: t,
    localCreationAnswerId: n,
    buttonImage: l,
    onEmojiSelect: s,
    onEmojiRemove: d,
    answerIndex: m,
    shouldShowEmojiPicker: g,
    toggleEmojiPicker: C,
    containerRef: k
  } = e, x = a.useRef(null), R = (0, o.e7)([f.Z], () => f.Z.getChannel(t)), {
    emoji: E,
    isLoadingMedia: S,
    hasUpload: D,
    mediaUrl: A,
    mediaFilename: I
  } = (0, p.Z)({
    channelId: t,
    localCreationAnswerId: n,
    image: l
  }), N = D || null != E, _ = a.useCallback(() => {
    d(m)
  }, [d, m]), U = a.useMemo(() => D ? y.intl.formatToPlainString(y.t.vcC7Qn, {
    imageName: (0, b.fw)(I),
    answerNumber: m + 1
  }) : null != E ? y.intl.formatToPlainString(y.t.ncOAha, {
    emojiName: E.name,
    answerNumber: m + 1
  }) : y.intl.formatToPlainString(y.t.emdpNo, {
    answerNumber: m + 1
  }), [D, E, m, I]), L = a.useCallback(e => {
    let {
      closePopout: t
    } = e;
    return (0, r.jsx)("div", {
      className: v.emojiPicker,
      children: (0, r.jsx)(u.Z, {
        channel: R,
        pickerIntention: j.Hz.POLLS,
        closePopout: t,
        onNavigateAway: t,
        onSelectEmoji: e => {
          let {
            emoji: n,
            willClose: r
          } = e;
          null != n && s(n, m), r && t()
        }
      })
    })
  }, [R, s, m]), T = a.useCallback(e => {
    let {
      closePopout: t
    } = e;
    return (0, r.jsx)(w, {
      onSelect: t,
      onEditMedia: C,
      onDeleteMedia: _,
      closePopout: t
    })
  }, [_, C]), Z = S ? (0, r.jsx)(c.$jN, {
    className: v.spinnerWrapperDefault
  }) : (0, r.jsx)(P, {
    hasUpload: D,
    mediaUrl: A,
    mediaFilename: I,
    imageClassName: i()(v.media, v.gifDefault),
    emoji: E,
    emojiClassName: i()(v.media, v.emojiDefault),
    fallback: (0, r.jsx)(c.EO4, {
      size: "sm",
      color: "currentColor",
      className: v.expressionPickerIconDefault
    })
  }), B = i()(O.CT, v.expressionPickerButtonDefault, {
    [v.canEditMedia]: N
  });
  return (0, r.jsx)(c.yRy, {
    targetElementRef: k,
    renderPopout: L,
    shouldShow: g,
    onRequestClose: C,
    animation: c.yRy.Animation.NONE,
    position: "bottom",
    spacing: 2,
    children: e => {
      var {
        "aria-controls": t,
        "aria-expanded": n
      } = e;
      return h(e, ["aria-controls", "aria-expanded"]), (0, r.jsx)(c.yRy, {
        targetElementRef: x,
        animation: c.yRy.Animation.NONE,
        position: "bottom",
        renderPopout: T,
        children: e => {
          var a, l, {
              onClick: i,
              "aria-controls": o,
              "aria-expanded": s
            } = e,
            u = h(e, ["onClick", "aria-controls", "aria-expanded"]);
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
            innerRef: x
          }, u), l = l = {
            className: B,
            onClick: N && !g ? i : C,
            "aria-label": U,
            "aria-controls": null != t ? t : o,
            "aria-expanded": n || s,
            children: [Z, N && (0, r.jsx)(c.vdY, {
              size: "md",
              color: "currentColor",
              className: v.editIcon,
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
    }
  })
}

function k(e) {
  let {
    channelId: t,
    answer: n,
    index: l,
    isLastAnswer: i,
    onAnswerTextChange: o,
    onEmojiSelect: s,
    onEmojiRemove: u,
    canRemoveAnswer: d,
    onRemoveAnswer: f,
    addAnswer: p,
    submitPoll: j,
    error: O,
    ref: v,
    answerRowRefs: h
  } = e, P = a.useRef(null), w = a.useRef(null), k = a.useRef(null);
  a.useImperativeHandle(v, () => ({
    focusDeleteButton: () => {
      var e;
      return null == (e = w.current) ? true : e.focus()
    },
    focusInput: () => {
      var e;
      return null == (e = k.current) ? true : e.focus()
    }
  }));
  let [x, R] = a.useState(false), E = a.useCallback(() => {
    R(e => !e)
  }, []), S = a.useCallback(e => {
    let t = e.ctrlKey && !(e.altKey || e.metaKey || e.shiftKey),
      r = e.metaKey && !(e.altKey || e.ctrlKey || e.shiftKey);
    switch (e.key.toLowerCase()) {
      case "enter":
        var a;
        i && (e.preventDefault(), ((0, b.cS)(n) || "macos" !== (0, m.getOS)() ? t : r) ? (e.stopPropagation(), j()) : p()), null == (a = h.current[l + 1]) || a.focusInput();
        break;
      case "e":
        ("macos" === (0, m.getOS)() ? r : t) && (e.preventDefault(), e.stopPropagation(), E())
    }
  }, [p, n, h, l, i, j, E]), D = (0, r.jsx)(C, {
    containerRef: P,
    channelId: t,
    buttonImage: n.image,
    onEmojiSelect: s,
    onEmojiRemove: u,
    localCreationAnswerId: n.localCreationAnswerId,
    answerIndex: l,
    shouldShowEmojiPicker: x,
    toggleEmojiPicker: E
  });
  return (0, r.jsx)("div", {
    ref: P,
    children: (0, r.jsx)(c.oil, {
      error: O,
      leading: {
        type: "emoji",
        button: D
      },
      trailing: d ? {
        "aria-label": y.intl.formatToPlainString(y.t["22fjEc"], {
          answerNumber: l + 1
        }),
        icon: c.XHJ,
        onClick: () => f(l),
        buttonRef: w
      } : true,
      "aria-label": y.intl.formatToPlainString(y.t["3+V8G9"], {
        answerNumber: l + 1
      }),
      placeholder: y.intl.string(y.t.NNHVlv),
      value: n.text,
      onChange: e => o({
        text: e,
        index: l,
        localCreationAnswerId: n.localCreationAnswerId
      }),
      onKeyDown: S,
      maxLength: g.WA,
      inputRef: k
    })
  })
}