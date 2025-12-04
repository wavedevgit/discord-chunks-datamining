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
  Chunk159691 = require("./159691.js"),
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
  Chunk969632 = require("./969632.js"),
  Chunk580357 = require("./580357.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk185923 = require("./185923.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk353441 = require("./353441.js");

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
    case j.NewMemberActionTypes.VIEW:
      return N.Uu(O.Plq.VIEW_CHANNEL, n);
    case j.NewMemberActionTypes.CHAT:
      if (O.TPd.GUILD_THREADS_ONLY.has(n.type)) return N.Uu(O.Plq.SEND_MESSAGES_IN_THREADS, n) || N.Uu(O.Plq.SEND_MESSAGES, n);
      return N.Uu(O.Plq.SEND_MESSAGES, n);
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
    l = x.Z.getChannel(e.channelId);
  return (null == e.title || e.title.length < j.Wz) && n.title.push(k.intl.formatToPlainString(k.t.iu6AGk, {
    minLength: j.Wz
  })), null == e.actionType || null == l || Z(e.actionType, l) || n.actionType.push(function(e) {
    switch (e) {
      case j.NewMemberActionTypes.VIEW:
        return k.intl.string(k.t.lD7FOX);
      case j.NewMemberActionTypes.CHAT:
        return k.intl.string(k.t.fIF2Uy);
      default:
        (0, C.vE)(e)
    }
  }(e.actionType)), n
}

function D(e) {
  var n, l, a, C, N, D;
  let {
    transitionState: _,
    onClose: R,
    guildId: G,
    action: H,
    onSave: U,
    onDelete: L
  } = e, F = i.useRef(null), z = i.useRef(null), [W] = i.useState(function(e) {
    if (null == e) return null;
    let n = x.Z.getChannel(e.channelId);
    return null == n ? null : {
      value: e.channelId,
      label: n.name
    }
  }(H)), [V, Y] = i.useState(W), q = (0, s.e7)([x.Z], () => x.Z.getChannel(null == V ? true : V.value)), X = (null == q ? true : q.isMediaChannel()) === true, B = i.useMemo(() => [{
    value: j.NewMemberActionTypes.VIEW,
    name: k.intl.string(k.t.jfieRw)
  }, {
    value: j.NewMemberActionTypes.CHAT,
    name: (null == q ? true : q.type) === O.d4z.GUILD_FORUM ? X ? k.intl.string(k.t["1EgDpA"]) : k.intl.string(k.t.x5Di7M) : k.intl.string(k.t["R+dC4C"])
  }], [null == q ? true : q.type, X]), [K, Q] = i.useState(M()), [J, $] = i.useState(null != (n = null == H ? true : H.title) ? n : ""), ee = (0, s.e7)([S.Z], () => {
    let e = S.Z.getSettings();
    if (null == e.newMemberActions) return new Set;
    let n = new Set(e.newMemberActions.map(e => e.channelId));
    return null != W && n.delete(W.value), n
  }), [en, el] = i.useState(null == H ? null : null != (D = null == (N = B.find(e => e.value === H.actionType)) ? true : N.value) ? D : null), [et, ei] = i.useState(null != (l = null == H ? true : H.emoji) ? l : null), ea = (0, s.e7)([S.Z], () => {
    var e;
    return null == (e = S.Z.getNewMemberAction(null == H ? true : H.channelId)) ? true : e.icon
  }), [er, eo] = i.useState(null != ea && null != V ? y.ZP.getNewMemberActionIconURL({
    channelId: V.value,
    icon: ea
  }) : null), es = (0, h.Z)(er), ec = (0, h.Z)(et), eu = null == J || 0 === J.length || null == en || null == V, ed = Object.values(K).flat().length > 0, em = i.useCallback(() => {
    if (null == V || null == en || J.length <= 0) return;
    let e = {
        channelId: V.value,
        title: J,
        description: "",
        actionType: en,
        emoji: null != et ? et : null,
        icon: null != ea ? ea : null
      },
      n = er !== es || et !== ec;
    U(e, null != er ? er : null, n), R()
  }, [U, R, J, en, V, et, ea, er, es, ec]), eh = i.useCallback(() => {
    null == L || L(), R()
  }, [L, R]), ep = i.useCallback(e => {
    $(e), Q(A({
      channelId: null == V ? true : V.value,
      title: e,
      description: "",
      actionType: null != en ? en : true,
      emoji: null != et ? et : true
    }))
  }, [$, Q, V, en, et]), ev = i.useCallback(e => {
    Y(e), Q(A({
      channelId: null == e ? true : e.value,
      title: J,
      description: "",
      actionType: null != en ? en : true,
      emoji: null != et ? et : true
    }))
  }, [Y, Q, J, en, et]), ej = i.useCallback(e => {
    el(e), Q(A({
      channelId: null == V ? true : V.value,
      title: J,
      description: "",
      actionType: e,
      emoji: null != et ? et : true
    }))
  }, [el, Q, V, J, et]), eg = i.useCallback(e => Promise.resolve(b.ZP.getSelectableChannels(G).filter(n => !ee.has(n.channel.id) && (0, j.kb)(n.channel) && r()(e, n.channel.name)).map(e => ({
    value: e.channel.id,
    label: e.channel.name
  }))), [G, ee]), ex = i.useCallback(e => {
    if (null == e || null == G) return null;
    let n = x.Z.getChannel(e.value),
      l = f.Z.getGuild(G);
    if (null == n || null == l) return null;
    let i = (0, p.KS)(n, l);
    return null == i ? null : (0, t.jsx)(i, {
      size: "xs",
      color: "customColor",
      className: I.channelIcon
    })
  }, [G]), eb = i.useCallback(function(e) {
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
    ei(n), eo(e)
  }, []), ef = i.useCallback(() => null != er ? er : null, [er, et])(), ey = i.useCallback(e => {
    null != e && eb(e, null)
  }, [eb]), eC = null;
  eC = null != ef ? (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)("img", {
      src: ef,
      alt: "",
      "aria-hidden": true,
      className: I.__invalid_image,
      width: 24,
      height: 24
    }), (0, t.jsx)("div", {
      className: I.imageOverlay,
      children: (0, t.jsx)(d.vdY, {
        size: "md",
        color: "currentColor"
      })
    })]
  }) : null != et ? (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)(m.Z, {
      animated: null != (a = et.animated) && a,
      emojiId: et.id,
      emojiName: et.name
    }), (0, t.jsx)("div", {
      className: I.imageOverlay,
      children: (0, t.jsx)(d.vdY, {
        size: "md",
        color: "currentColor"
      })
    })]
  }) : (0, t.jsx)(d.FmF, {
    size: "md",
    color: "currentColor"
  });
  let eN = i.useMemo(() => [{
    text: k.intl.string(k.t["ETE/oC"]),
    onClick: R,
    variant: "secondary"
  }, {
    text: k.intl.string(k.t["R3BPH+"]),
    variant: "primary",
    onClick: em,
    disabled: eu || ed
  }], [em, ed, eu, R]);
  return (0, t.jsxs)(o.IX, {
    transitionState: _,
    onClose: R,
    children: [(0, t.jsx)("div", {
      className: I.closeButton,
      children: (0, t.jsx)(u.PZ7, {
        onClick: R
      })
    }), (0, t.jsxs)("div", {
      className: I.container,
      children: [(0, t.jsxs)("div", {
        className: I.formGroup,
        children: [(0, t.jsxs)(d.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: [k.intl.string(k.t["j+fhOY"]), (0, t.jsx)(T.Z, {})]
        }), (0, t.jsx)(d.oil, {
          value: J,
          error: (null != (C = null == J ? true : J.length) ? C : 0) > 0 ? K.title.join(", ") : null,
          onChange: ep,
          placeholder: k.intl.string(k.t.oN1Sm2),
          maxLength: j.Z3
        })]
      }), (0, t.jsx)("div", {
        className: I.separator
      }), (0, t.jsxs)("div", {
        className: I.formGroup,
        children: [(0, t.jsxs)(d.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: [k.intl.string(k.t.jVDc5W), (0, t.jsx)(T.Z, {})]
        }), (0, t.jsx)(c.d, {
          value: V,
          renderOptionPrefix: ex,
          options: eg,
          onChange: ev
        }), (0, t.jsx)(d.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: k.intl.string(k.t.cypQPz)
        })]
      }), (0, t.jsx)("div", {
        className: I.separator
      }), (0, t.jsxs)("div", {
        className: I.splitGroup,
        children: [(0, t.jsxs)("div", {
          children: [(0, t.jsx)(d.Heading, {
            variant: "heading-md/semibold",
            color: "header-primary",
            children: k.intl.string(k.t.gs5rQm)
          }), (0, t.jsx)(d.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: k.intl.string(k.t.LjsoiT)
          })]
        }), (0, t.jsx)("div", {
          className: I.iconUploadContainer,
          children: (0, t.jsx)(d.yRy, {
            position: "bottom",
            renderPopout: e => {
              let n = e.closePopout,
                l = (0, t.jsxs)(t.Fragment, {
                  children: [(0, t.jsx)(g.ZP, {
                    onChange: e => {
                      ey(e), n()
                    },
                    tabIndex: 0
                  }), (0, t.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    color: "none",
                    children: k.intl.string(k.t["2YKkdd"])
                  })]
                }),
                i = (0, t.jsx)(d.yRy, {
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
                        if (null != i) eb(null, null == i.id ? {
                          id: null,
                          name: null != (n = i.optionallyDiverseSequence) ? n : "",
                          animated: false
                        } : {
                          id: i.id,
                          name: null != (t = i.originalName) ? t : i.name,
                          animated: i.animated
                        }), a && l()
                      }),
                      pickerIntention: P.Hz.COMMUNITY_CONTENT,
                      channel: q
                    })
                  },
                  children: e => (0, t.jsx)(d.Text, w(E({}, e), {
                    variant: "text-sm/medium",
                    color: "none",
                    ref: F,
                    children: k.intl.string(k.t["amsyN+"])
                  }))
                });
              return (0, t.jsxs)(d.v2r, {
                navId: "set-image-for-action",
                "aria-label": "upload",
                onClose: () => false,
                onSelect: () => false,
                children: [(0, t.jsx)(d.sNh, {
                  id: "emoji",
                  label: i,
                  icon: d.EO4
                }), (0, t.jsx)(d.sNh, {
                  className: I.uploadMenuItem,
                  id: "upload",
                  label: l,
                  icon: d.rG2
                }), null != ef || null != et ? (0, t.jsx)(d.sNh, {
                  id: "clear",
                  color: "danger",
                  label: k.intl.string(k.t.ZCLmoR),
                  icon: d.XHJ,
                  action: () => {
                    eb(null)
                  }
                }) : null]
              })
            },
            targetElementRef: z,
            children: e => (0, t.jsx)("div", w(E({}, e), {
              className: I.iconUpload,
              ref: z,
              children: eC
            }))
          })
        })]
      }), (0, t.jsx)("div", {
        className: I.separator
      }), (0, t.jsxs)("div", {
        className: I.formGroup,
        children: [(0, t.jsxs)(d.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: [k.intl.string(k.t.MIMVLa), (0, t.jsx)(T.Z, {})]
        }), (0, t.jsx)(d.FXm, {
          value: en,
          onChange: ej,
          options: null == q ? B : B.map(e => w(E({}, e), {
            disabled: !Z(e.value, q)
          }))
        }), null != en && K.actionType.length > 0 ? K.actionType.map(e => (0, t.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "text-feedback-critical",
          children: e
        }, e)) : null]
      })]
    }), (0, t.jsx)(o.Go$, {
      actions: eN,
      leading: null != H ? (0, t.jsx)(d.Avr, {
        text: k.intl.string(k.t.N86XcP),
        onClick: eh,
        variant: "critical"
      }) : true
    })]
  })
}