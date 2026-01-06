/** Chunk was on 7590 **/
/** chunk id: 380716, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  default: () => D
}), require("./539854.js"), require("./388685.js"), require("./472816.js"), require("./794429.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk658722 = require("./658722.js"),
  r = require.n(Chunk658722),
  Chunk793030 = require("./793030.js"),
  Chunk399606 = require("./399606.js"),
  Chunk668339 = require("./668339.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk110924 = require("./110924.js"),
  Chunk471445 = require("./471445.js"),
  Chunk907040 = require("./907040.jsx"),
  Chunk734893 = require("./734893.js"),
  Chunk813197 = require("./813197.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk768581 = require("./768581.js"),
  Chunk823379 = require("./823379.js"),
  Chunk700785 = require("./700785.js"),
  Chunk8426 = require("./8426.js"),
  Chunk969632 = require("./969632.js"),
  Chunk580357 = require("./580357.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk185923 = require("./185923.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk609442 = require("./609442.js");

function E(e) {
  for (var n = 1; n < arguments.length; n++) {
    var l = null != arguments[n] ? arguments[n] : {},
      t = Object.keys(l);
    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
      return Object.getOwnPropertyDescriptor(l, e).enumerable
    }))), t.forEach(function(n) {
      var t;
      t = l[n], n in e ? Object.defineProperty(e, n, {
        value: t,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = t
    })
  }
  return e
}

function w(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var l = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var t = Object.getOwnPropertySymbols(e);
      l.push.apply(l, t)
    }
    return l
  })(Object(n)).forEach(function(l) {
    Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(n, l))
  }), e
}

function Z(e, n) {
  switch (e) {
    case p.NewMemberActionTypes.VIEW:
      return C.Uu(O.Plq.VIEW_CHANNEL, n);
    case p.NewMemberActionTypes.CHAT:
      if (O.TPd.GUILD_THREADS_ONLY.has(n.type)) return C.Uu(O.Plq.SEND_MESSAGES_IN_THREADS, n) || C.Uu(O.Plq.SEND_MESSAGES, n);
      return C.Uu(O.Plq.SEND_MESSAGES, n);
    default:
      returnfalse
  }
}

function M() {
  return {
    channelId: [],
    title: [],
    description: [],
    actionType: [],
    emoji: [],
    icon: []
  }
}

function A(e) {
  let n = M(),
    l = j.Z.getChannel(e.channelId);
  return (null == e.title || e.title.length < p.Wz) && n.title.push(P.intl.formatToPlainString(P.t.iu6AGk, {
    minLength: p.Wz
  })), null == e.actionType || null == l || Z(e.actionType, l) || n.actionType.push(function(e) {
    switch (e) {
      case p.NewMemberActionTypes.VIEW:
        return P.intl.string(P.t.lD7FOX);
      case p.NewMemberActionTypes.CHAT:
        return P.intl.string(P.t.fIF2Uy);
      default:
        (0, y.vE)(e)
    }
  }(e.actionType)), n
}

function D(e) {
  var n, l, a, y, C, D;
  let {
    transitionState: _,
    onClose: R,
    guildId: H,
    action: L,
    onSave: G,
    onDelete: U
  } = e, F = i.useRef(null), z = i.useRef(null), [W] = i.useState(function(e) {
    if (null == e) return null;
    let n = j.Z.getChannel(e.channelId);
    return null == n ? null : {
      value: e.channelId,
      label: n.name
    }
  }(L)), [V, Y] = i.useState(W), q = (0, s.e7)([j.Z], () => j.Z.getChannel(null == V ? true : V.value)), X = (null == q ? true : q.isMediaChannel()) === true, B = i.useMemo(() => [{
    value: p.NewMemberActionTypes.VIEW,
    name: P.intl.string(P.t.jfieRw)
  }, {
    value: p.NewMemberActionTypes.CHAT,
    name: (null == q ? true : q.type) === O.d4z.GUILD_FORUM ? X ? P.intl.string(P.t["1EgDpA"]) : P.intl.string(P.t.x5Di7M) : P.intl.string(P.t["R+dC4C"])
  }], [null == q ? true : q.type, X]), [K, Q] = i.useState(M()), [J, $] = i.useState(null != (n = null == L ? true : L.title) ? n : ""), ee = (0, s.e7)([S.Z], () => {
    let e = S.Z.getSettings();
    if (null == e.newMemberActions) return new Set;
    let n = new Set(e.newMemberActions.map(e => e.channelId));
    return null != W && n.delete(W.value), n
  }), [en, el] = i.useState(null == L ? null : null != (D = null == (C = B.find(e => e.value === L.actionType)) ? true : C.value) ? D : null), [et, ei] = i.useState(null != (l = null == L ? true : L.emoji) ? l : null), ea = (0, s.e7)([S.Z], () => {
    var e;
    return null == (e = S.Z.getNewMemberAction(null == L ? true : L.channelId)) ? true : e.icon
  }), er = null == L ? true : L.channelId, eo = (0, s.e7)([S.Z], () => S.Z.getPendingDataForChannel(er), [er]), [es, eu] = i.useState(null != eo && null != eo.iconData ? eo.iconData : null != ea && null != V ? f.ZP.getNewMemberActionIconURL({
    channelId: V.value,
    icon: ea
  }) : null), ec = (0, m.Z)(et), ed = (0, m.Z)(es), em = null == J || 0 === J.length || null == en || null == V, eh = Object.values(K).flat().length > 0, ev = i.useCallback(() => {
    if (null == V || null == en || J.length <= 0) return;
    let e = {
        channelId: V.value,
        title: J,
        description: "",
        actionType: en,
        emoji: null != et ? et : null,
        icon: null != ea ? ea : null
      },
      n = true !== er && V.value !== er,
      l = true !== eo,
      t = null != et || true !== es,
      i = {
        icon: null != es ? es : null,
        emoji: et
      };
    (n || l && t) && (l && (0, N.Lo)(er), (0, N.Wp)(V.value, i));
    let a = es !== ed;
    G(e, i, (et !== ec || a) && !n), R()
  }, [G, R, J, en, V, et, ea, es, ec, ed, er, eo]), ep = i.useCallback(() => {
    null == U || U(), R()
  }, [U, R]), eg = i.useCallback(e => {
    $(e), Q(A({
      channelId: null == V ? true : V.value,
      title: e,
      description: "",
      actionType: null != en ? en : true,
      emoji: null != et ? et : true
    }))
  }, [$, Q, V, en, et]), ej = i.useCallback(e => {
    Y(e), Q(A({
      channelId: null == e ? true : e.value,
      title: J,
      description: "",
      actionType: null != en ? en : true,
      emoji: null != et ? et : true
    }))
  }, [Y, Q, J, en, et]), ex = i.useCallback(e => {
    el(e), Q(A({
      channelId: null == V ? true : V.value,
      title: J,
      description: "",
      actionType: e,
      emoji: null != et ? et : true
    }))
  }, [el, Q, V, J, et]), eb = i.useCallback(e => Promise.resolve(x.ZP.getSelectableChannels(H).filter(n => !ee.has(n.channel.id) && (0, p.kb)(n.channel) && r()(e, n.channel.name)).map(e => ({
    value: e.channel.id,
    label: e.channel.name
  }))), [H, ee]), ef = i.useCallback(e => {
    if (null == e || null == H) return null;
    let n = j.Z.getChannel(e.value),
      l = b.Z.getGuild(H);
    if (null == n || null == l) return null;
    let i = (0, h.KS)(n, l);
    return null == i ? null : (0, t.jsx)(i, {
      size: "xs",
      color: "customColor",
      className: k.channelIcon
    })
  }, [H]), ey = i.useCallback(function(e) {
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
    ei(n), eu(e)
  }, []), eC = i.useCallback(() => null != es ? es : null, [es, et])(), eN = i.useCallback(e => {
    null != e && ey(e, null)
  }, [ey]), eS = null;
  eS = null != eC ? (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)("img", {
      src: eC,
      alt: "",
      "aria-hidden": true,
      className: k.__invalid_image,
      width: 24,
      height: 24
    }), (0, t.jsx)("div", {
      className: k.imageOverlay,
      children: (0, t.jsx)(c.vdY, {
        size: "md",
        color: "currentColor"
      })
    })]
  }) : null != et ? (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)(d.Z, {
      animated: null != (a = et.animated) && a,
      emojiId: et.id,
      emojiName: et.name
    }), (0, t.jsx)("div", {
      className: k.imageOverlay,
      children: (0, t.jsx)(c.vdY, {
        size: "md",
        color: "currentColor"
      })
    })]
  }) : (0, t.jsx)(c.FmF, {
    size: "md",
    color: "currentColor"
  });
  let eT = i.useMemo(() => [{
    text: P.intl.string(P.t["ETE/oC"]),
    onClick: R,
    variant: "secondary"
  }, {
    text: P.intl.string(P.t["R3BPH+"]),
    variant: "primary",
    onClick: ev,
    disabled: em || eh
  }], [ev, eh, em, R]);
  return (0, t.jsxs)(o.Modal, {
    title: P.intl.string(P.t.ncTLSo),
    transitionState: _,
    onClose: R,
    actions: eT,
    actionBarInput: null != L ? (0, t.jsx)(c.Avr, {
      text: P.intl.string(P.t.N86XcP),
      onClick: ep,
      variant: "critical"
    }) : true,
    children: [(0, t.jsxs)("div", {
      className: k.formGroup,
      children: [(0, t.jsxs)(c.Heading, {
        variant: "heading-md/semibold",
        color: "text-strong",
        children: [P.intl.string(P.t["j+fhOY"]), (0, t.jsx)(T.Z, {})]
      }), (0, t.jsx)(c.oil, {
        value: J,
        error: (null != (y = null == J ? true : J.length) ? y : 0) > 0 ? K.title.join(", ") : null,
        onChange: eg,
        placeholder: P.intl.string(P.t.oN1Sm2),
        maxLength: p.Z3
      })]
    }), (0, t.jsx)("div", {
      className: k.separator
    }), (0, t.jsxs)("div", {
      className: k.formGroup,
      children: [(0, t.jsxs)(c.Heading, {
        variant: "heading-md/semibold",
        color: "text-strong",
        children: [P.intl.string(P.t.jVDc5W), (0, t.jsx)(T.Z, {})]
      }), (0, t.jsx)(u.d, {
        value: V,
        renderOptionPrefix: ef,
        options: eb,
        onChange: ej
      }), (0, t.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: P.intl.string(P.t.cypQPz)
      })]
    }), (0, t.jsx)("div", {
      className: k.separator
    }), (0, t.jsxs)("div", {
      className: k.splitGroup,
      children: [(0, t.jsxs)("div", {
        children: [(0, t.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          color: "text-strong",
          children: P.intl.string(P.t.gs5rQm)
        }), (0, t.jsx)(c.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: P.intl.string(P.t.LjsoiT)
        })]
      }), (0, t.jsx)("div", {
        className: k.iconUploadContainer,
        children: (0, t.jsx)(c.yRy, {
          position: "bottom",
          renderPopout: e => {
            let n = e.closePopout,
              l = (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)(g.ZP, {
                  onChange: e => {
                    eN(e), n()
                  },
                  tabIndex: 0
                }), (0, t.jsx)(c.Text, {
                  variant: "text-sm/medium",
                  color: "none",
                  children: P.intl.string(P.t["2YKkdd"])
                })]
              }),
              i = (0, t.jsx)(c.yRy, {
                targetElementRef: F,
                position: "top",
                renderPopout: e => {
                  let l, {
                    closePopout: i
                  } = e;
                  return (0, t.jsx)(v.Z, {
                    closePopout: () => {
                      i(), n()
                    },
                    onSelectEmoji: (l = () => {
                      i(), n()
                    }, e => {
                      var n, t;
                      let {
                        emoji: i,
                        willClose: a
                      } = e;
                      if (null != i) ey(null, null == i.id ? {
                        id: null,
                        name: null != (n = i.optionallyDiverseSequence) ? n : "",
                        animated: false
                      } : {
                        id: i.id,
                        name: null != (t = i.originalName) ? t : i.name,
                        animated: i.animated
                      }), a && l()
                    }),
                    pickerIntention: I.Hz.COMMUNITY_CONTENT,
                    channel: q
                  })
                },
                children: e => (0, t.jsx)(c.Text, w(E({}, e), {
                  variant: "text-sm/medium",
                  color: "none",
                  ref: F,
                  children: P.intl.string(P.t["amsyN+"])
                }))
              });
            return (0, t.jsxs)(c.v2r, {
              navId: "set-image-for-action",
              "aria-label": "upload",
              onClose: () => false,
              onSelect: () => false,
              children: [(0, t.jsx)(c.sNh, {
                id: "emoji",
                label: i,
                icon: c.EO4
              }), (0, t.jsx)(c.sNh, {
                className: k.uploadMenuItem,
                id: "upload",
                label: l,
                icon: c.rG2
              }), null != eC || null != et ? (0, t.jsx)(c.sNh, {
                id: "clear",
                color: "danger",
                label: P.intl.string(P.t.ZCLmoR),
                icon: c.XHJ,
                action: () => {
                  ey(null)
                }
              }) : null]
            })
          },
          targetElementRef: z,
          children: e => (0, t.jsx)("div", w(E({}, e), {
            className: k.iconUpload,
            ref: z,
            children: eS
          }))
        })
      })]
    }), (0, t.jsx)("div", {
      className: k.separator
    }), (0, t.jsxs)("div", {
      className: k.formGroup,
      children: [(0, t.jsxs)(c.Heading, {
        variant: "heading-md/semibold",
        color: "text-strong",
        children: [P.intl.string(P.t.MIMVLa), (0, t.jsx)(T.Z, {})]
      }), (0, t.jsx)(c.FXm, {
        value: en,
        onChange: ex,
        options: null == q ? B : B.map(e => w(E({}, e), {
          disabled: !Z(e.value, q)
        }))
      }), null != en && K.actionType.length > 0 ? K.actionType.map(e => (0, t.jsx)(c.Text, {
        variant: "text-xs/normal",
        color: "text-feedback-critical",
        children: e
      }, e)) : null]
    })]
  })
}