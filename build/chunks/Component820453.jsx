/** Chunk was on 52786 **/
/** chunk id: 820453, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => C
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk937773 = require("./937773.jsx"),
  Chunk770335 = require("./770335.js"),
  Chunk734057 = require("./734057.js"),
  Chunk723702 = require("./723702.js"),
  Chunk969632 = require("./969632.js"),
  Chunk287618 = require("./287618.js"),
  Chunk412136 = require("./412136.js"),
  Chunk307731 = require("./307731.js"),
  Chunk698279 = require("./698279.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk270465 = require("./270465.js");

function v(e, t) {
  if (null == e) return {};
  var n, r, l, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        a = Object.getOwnPropertyNames(e);
      for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
      return l
    }(e, t), Object.getOwnPropertySymbols)
    for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function w(e) {
  let {
    hasUpload: t,
    mediaUrl: n,
    mediaFilename: l,
    imageClassName: a,
    emoji: i,
    emojiClassName: o,
    fallback: c
  } = e;
  return t ? (0, r.jsx)("img", {
    src: n,
    alt: l,
    className: a
  }) : null != i ? (0, r.jsx)(s.A, {
    className: o,
    emojiId: i.id,
    emojiName: i.type === f.i.UNICODE ? i.optionallyDiverseSequence : i.name,
    animated: i.animated
  }) : c
}

function P(e) {
  let {
    onSelect: t,
    onEditMedia: n,
    onDeleteMedia: l,
    closePopout: a
  } = e;
  return (0, r.jsx)("div", {
    className: h.li,
    children: (0, r.jsx)(c.W1t, {
      "data-menu-migration-ready": true,
      navId: "poll-media-edit-menu",
      onClose: a,
      "aria-label": y.intl.string(y.t["cV+h7B"]),
      onSelect: t,
      children: (0, r.jsxs)(c.rXV, {
        children: [(0, r.jsx)(c.Drp, {
          id: "poll-media-replace",
          label: y.intl.string(y.t.CZeRhU),
          action: n
        }), (0, r.jsx)(c.Drp, {
          id: "poll-media-delete",
          label: y.intl.string(y.t.IhMxgu),
          action: l,
          color: "danger"
        })]
      })
    })
  })
}

function A(e) {
  let {
    channelId: t,
    localCreationAnswerId: n,
    buttonImage: a,
    onEmojiSelect: s,
    onEmojiRemove: f,
    answerIndex: m,
    shouldShowEmojiPicker: g,
    toggleEmojiPicker: A,
    containerRef: C
  } = e, k = l.useRef(null), R = (0, o.bG)([d.A], () => d.A.getChannel(t)), {
    emoji: x,
    isLoadingMedia: E,
    hasUpload: _,
    mediaUrl: S,
    mediaFilename: D
  } = (0, p.A)({
    channelId: t,
    localCreationAnswerId: n,
    image: a
  }), I = _ || null != x, N = l.useCallback(() => {
    f(m)
  }, [f, m]), T = l.useMemo(() => _ ? y.intl.formatToPlainString(y.t.vcC7Qn, {
    imageName: (0, b.Kj)(D),
    answerNumber: m + 1
  }) : null != x ? y.intl.formatToPlainString(y.t.ncOAha, {
    emojiName: x.name,
    answerNumber: m + 1
  }) : y.intl.formatToPlainString(y.t.emdpNo, {
    answerNumber: m + 1
  }), [_, x, m, D]), U = l.useCallback(e => {
    let {
      closePopout: t
    } = e;
    return (0, r.jsx)("div", {
      className: h.Fb,
      children: (0, r.jsx)(u.A, {
        channel: R,
        pickerIntention: O.b_.POLLS,
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
  }, [R, s, m]), L = l.useCallback(e => {
    let {
      closePopout: t
    } = e;
    return (0, r.jsx)(P, {
      onSelect: t,
      onEditMedia: A,
      onDeleteMedia: N,
      closePopout: t
    })
  }, [N, A]), K = E ? (0, r.jsx)(c.y$y, {
    className: h.EC
  }) : (0, r.jsx)(w, {
    hasUpload: _,
    mediaUrl: S,
    mediaFilename: D,
    imageClassName: i()(h.$_, h.qX),
    emoji: x,
    emojiClassName: i()(h.$_, h.qZ),
    fallback: (0, r.jsx)(c.nm2, {
      size: "sm",
      color: "currentColor",
      className: h.vr
    })
  }), Y = i()(j.VQ, h.GB, {
    [h.ZV]: I
  });
  return (0, r.jsx)(c.YNO, {
    targetElementRef: C,
    renderPopout: U,
    shouldShow: g,
    onRequestClose: A,
    animation: c.YNO.Animation.NONE,
    position: "bottom",
    spacing: 2,
    children: e => {
      let {
        "aria-controls": t,
        "aria-expanded": n
      } = e;
      return v(e, ["aria-controls", "aria-expanded"]), (0, r.jsx)(c.YNO, {
        targetElementRef: k,
        animation: c.YNO.Animation.NONE,
        position: "bottom",
        renderPopout: L,
        children: e => {
          var l, a;
          let {
            onClick: i,
            "aria-controls": o,
            "aria-expanded": s
          } = e, u = v(e, ["onClick", "aria-controls", "aria-expanded"]);
          return (0, r.jsxs)(c.DUT, (l = function(e) {
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
            innerRef: k
          }, u), a = a = {
            className: Y,
            onClick: I && !g ? i : A,
            "aria-label": T,
            "aria-controls": null != t ? t : o,
            "aria-expanded": n || s,
            children: [K, I && (0, r.jsx)(c.R2l, {
              size: "md",
              color: "currentColor",
              className: h.IZ,
              "aria-hidden": true
            })]
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(a)).forEach(function(e) {
            Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e))
          }), l))
        }
      })
    }
  })
}

function C(e) {
  let {
    channelId: t,
    answer: n,
    index: a,
    isLastAnswer: i,
    onAnswerTextChange: o,
    onEmojiSelect: s,
    onEmojiRemove: u,
    canRemoveAnswer: f,
    onRemoveAnswer: d,
    addAnswer: p,
    submitPoll: O,
    error: j,
    ref: h,
    answerRowRefs: v
  } = e, w = l.useRef(null), P = l.useRef(null), C = l.useRef(null);
  l.useImperativeHandle(h, () => ({
    focusDeleteButton: () => {
      var e;
      return null == (e = P.current) ? true : e.focus()
    },
    focusInput: () => {
      var e;
      return null == (e = C.current) ? true : e.focus()
    }
  }));
  let [k, R] = l.useState(false), x = l.useCallback(() => {
    R(e => !e)
  }, []), E = l.useCallback(e => {
    let t = e.ctrlKey && !(e.altKey || e.metaKey || e.shiftKey),
      r = e.metaKey && !(e.altKey || e.ctrlKey || e.shiftKey);
    switch (e.key.toLowerCase()) {
      case "enter":
        var l;
        i && (e.preventDefault(), ((0, b.ND)(n) || "macos" !== (0, m.getOS)() ? t : r) ? (e.stopPropagation(), O()) : p()), null == (l = v.current[a + 1]) || l.focusInput();
        break;
      case "e":
        ("macos" === (0, m.getOS)() ? r : t) && (e.preventDefault(), e.stopPropagation(), x())
    }
  }, [p, n, v, a, i, O, x]), _ = (0, r.jsx)(A, {
    containerRef: w,
    channelId: t,
    buttonImage: n.image,
    onEmojiSelect: s,
    onEmojiRemove: u,
    localCreationAnswerId: n.localCreationAnswerId,
    answerIndex: a,
    shouldShowEmojiPicker: k,
    toggleEmojiPicker: x
  });
  return (0, r.jsx)("div", {
    ref: w,
    children: (0, r.jsx)(c.ksK, {
      error: j,
      leading: {
        type: "emoji",
        button: _
      },
      trailing: f ? {
        "aria-label": y.intl.formatToPlainString(y.t["22fjEc"], {
          answerNumber: a + 1
        }),
        icon: c.ucK,
        onClick: () => d(a),
        buttonRef: P
      } : true,
      "aria-label": y.intl.formatToPlainString(y.t["3+V8G9"], {
        answerNumber: a + 1
      }),
      placeholder: y.intl.string(y.t.NNHVlv),
      value: n.text,
      onChange: e => o({
        text: e,
        index: a,
        localCreationAnswerId: n.localCreationAnswerId
      }),
      onKeyDown: E,
      maxLength: g.dv,
      inputRef: C
    })
  })
}