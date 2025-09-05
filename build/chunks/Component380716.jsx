/** Chunk was on 7590 **/
/** chunk id: 380716, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  default: () => D
}), require("./539854.js"), require("./388685.js"), require("./472816.js"), require("./794429.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk658722 = require("./658722.js"),
  r = require.n(Chunk658722),
  Chunk399606 = require("./399606.js"),
  Chunk146187 = require("./146187.jsx"),
  Chunk257465 = require("./257465.jsx"),
  Chunk369585 = require("./369585.jsx"),
  Chunk755721 = require("./755721.js"),
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
  Chunk319407 = require("./319407.js");

function P(e) {
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

function Z(e, n) {
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

function w(e, n) {
  switch (e) {
    case j.oi.VIEW:
      return N.Uu(T.Plq.VIEW_CHANNEL, n);
    case j.oi.CHAT:
      if (T.TPd.GUILD_THREADS_ONLY.has(n.type)) return N.Uu(T.Plq.SEND_MESSAGES_IN_THREADS, n) || N.Uu(T.Plq.SEND_MESSAGES, n);
      return N.Uu(T.Plq.SEND_MESSAGES, n);
    default:
      returnfalse
  }
}

function G() {
  return {
    channelId: [],
    title: [],
    description: [],
    actionType: [],
    emoji: [],
    icon: []
  }
}

function M(e) {
  let n = G(),
    l = f.Z.getChannel(e.channelId);
  return (null == e.title || e.title.length < j.Wz) && n.title.push(k.intl.formatToPlainString(k.t.iu6AGh, {
    minLength: j.Wz
  })), null == e.actionType || null == l || w(e.actionType, l) || n.actionType.push(function(e) {
    switch (e) {
      case j.oi.VIEW:
        return k.intl.string(k.t.lD7FOT);
      case j.oi.CHAT:
        return k.intl.string(k.t.fIF2U1);
      default:
        (0, I.vE)(e)
    }
  }(e.actionType)), n
}

function D(e) {
  var n, l, a, I, N;
  let {
    transitionState: D,
    onClose: U,
    guildId: A,
    action: R,
    onSave: H,
    onDelete: z
  } = e, L = i.useRef(null), q = i.useRef(null), [F] = i.useState(function(e) {
    if (null == e) return null;
    let n = f.Z.getChannel(e.channelId);
    return null == n ? null : {
      value: e.channelId,
      label: n.name
    }
  }(R)), [W, V] = i.useState(F), X = (0, o.e7)([f.Z], () => f.Z.getChannel(null == W ? true : W.value)), Y = (null == X ? true : X.isMediaChannel()) === true, B = i.useMemo(() => [{
    value: j.oi.VIEW,
    name: k.intl.string(k.t.jfieR0)
  }, {
    value: j.oi.CHAT,
    name: (null == X ? true : X.type) === T.d4z.GUILD_FORUM ? Y ? k.intl.string(k.t["1EgDpK"]) : k.intl.string(k.t.x5Di7O) : k.intl.string(k.t["R+dC4O"])
  }], [null == X ? true : X.type, Y]), [K, Q] = i.useState(G()), [J, $] = i.useState(null != (n = null == R ? true : R.title) ? n : ""), ee = (0, o.e7)([O.Z], () => {
    let e = O.Z.getSettings();
    if (null == e.newMemberActions) return new Set;
    let n = new Set(e.newMemberActions.map(e => e.channelId));
    return null != F && n.delete(F.value), n
  }), [en, el] = i.useState(null == R ? null : null != (N = B.find(e => e.value === R.actionType)) ? N : null), [et, ei] = i.useState(null != (l = null == R ? true : R.emoji) ? l : null), ea = (0, o.e7)([O.Z], () => {
    var e;
    return null == (e = O.Z.getNewMemberAction(null == R ? true : R.channelId)) ? true : e.icon
  }), [er, eo] = i.useState(null != ea && null != W ? C.ZP.getNewMemberActionIconURL({
    channelId: W.value,
    icon: ea
  }) : null), es = (0, h.Z)(er), eu = (0, h.Z)(et), ec = null == J || 0 === J.length || null == en || null == W, ed = Object.values(K).flat().length > 0, em = i.useCallback(() => {
    if (null == W || null == en || J.length <= 0) return;
    let e = {
        channelId: W.value,
        title: J,
        description: "",
        actionType: en.value,
        emoji: null != et ? et : null,
        icon: null != ea ? ea : null
      },
      n = er !== es || et !== eu;
    H(e, null != er ? er : null, n), U()
  }, [H, U, J, en, W, et, ea, er, es, eu]), ep = i.useCallback(() => {
    null == z || z(), U()
  }, [z, U]), eh = i.useCallback(e => {
    $(e), Q(M({
      channelId: null == W ? true : W.value,
      title: e,
      description: "",
      actionType: null == en ? true : en.value,
      emoji: null != et ? et : true
    }))
  }, [$, Q, W, en, et]), ev = i.useCallback(e => {
    V(e), Q(M({
      channelId: null == e ? true : e.value,
      title: J,
      description: "",
      actionType: null == en ? true : en.value,
      emoji: null != et ? et : true
    }))
  }, [V, Q, J, en, et]), eg = i.useCallback(e => {
    el(e), Q(M({
      channelId: null == W ? true : W.value,
      title: J,
      description: "",
      actionType: null == e ? true : e.value,
      emoji: null != et ? et : true
    }))
  }, [el, Q, W, J, et]), ej = i.useCallback(e => Promise.resolve(b.ZP.getSelectableChannels(A).filter(n => !ee.has(n.channel.id) && (0, j.kb)(n.channel) && r()(e, n.channel.name)).map(e => ({
    value: e.channel.id,
    label: e.channel.name
  }))), [A, ee]), ex = i.useCallback(e => {
    if (null == e || null == A) return null;
    let n = f.Z.getChannel(e.value),
      l = y.Z.getGuild(A);
    if (null == n || null == l) return null;
    let i = (0, v.KS)(n, l);
    return null == i ? null : (0, t.jsx)(i, {
      size: "xs",
      color: "customColor",
      className: E.channelIcon
    })
  }, [A]), ef = i.useCallback(function(e) {
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
    ei(n), eo(e)
  }, []), eb = i.useCallback(() => null != er ? er : null, [er, et])(), ey = i.useCallback(e => {
    null != e && ef(e, null)
  }, [ef]), eC = null;
  eC = null != eb ? (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)("img", {
      src: eb,
      alt: "",
      "aria-hidden": true,
      className: E.__invalid_image,
      width: 24,
      height: 24
    }), (0, t.jsx)("div", {
      className: E.imageOverlay,
      children: (0, t.jsx)(m.vdY, {
        size: "md",
        color: "currentColor"
      })
    })]
  }) : null != et ? (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)(p.Z, {
      animated: null != (a = et.animated) && a,
      emojiId: et.id,
      emojiName: et.name
    }), (0, t.jsx)("div", {
      className: E.imageOverlay,
      children: (0, t.jsx)(m.vdY, {
        size: "md",
        color: "currentColor"
      })
    })]
  }) : (0, t.jsx)(m.FmF, {
    size: "md",
    color: "currentColor"
  });
  let eI = i.useMemo(() => [{
    text: k.intl.string(k.t["ETE/oK"]),
    onClick: U,
    variant: "secondary"
  }, {
    text: k.intl.string(k.t.R3BPHx),
    variant: "primary",
    onClick: em,
    disabled: ec || ed
  }], [em, ed, ec, U]);
  return (0, t.jsxs)(u.I, {
    transitionState: D,
    onClose: U,
    children: [(0, t.jsx)("div", {
      className: E.closeButton,
      children: (0, t.jsx)(s.P, {
        onClick: U
      })
    }), (0, t.jsxs)("div", {
      className: E.container,
      children: [(0, t.jsxs)("div", {
        className: E.formGroup,
        children: [(0, t.jsxs)(m.X6q, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: [k.intl.string(k.t["j+fhOT"]), (0, t.jsx)(S.Z, {})]
        }), (0, t.jsx)(m.oil, {
          value: J,
          error: (null != (I = null == J ? true : J.length) ? I : 0) > 0 ? K.title.join(", ") : null,
          onChange: eh,
          placeholder: k.intl.string(k.t.oN1Sm5),
          maxLength: j.Z3
        })]
      }), (0, t.jsx)("div", {
        className: E.separator
      }), (0, t.jsxs)("div", {
        className: E.formGroup,
        children: [(0, t.jsxs)(m.X6q, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: [k.intl.string(k.t.jVDc5e), (0, t.jsx)(S.Z, {})]
        }), (0, t.jsx)(m.VcW, {
          value: W,
          renderOptionPrefix: ex,
          options: ej,
          onChange: ev
        }), (0, t.jsx)(m.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: k.intl.string(k.t.cypQPz)
        })]
      }), (0, t.jsx)("div", {
        className: E.separator
      }), (0, t.jsxs)("div", {
        className: E.splitGroup,
        children: [(0, t.jsxs)("div", {
          children: [(0, t.jsx)(m.X6q, {
            variant: "heading-md/semibold",
            color: "header-primary",
            children: k.intl.string(k.t.gs5rQk)
          }), (0, t.jsx)(m.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: k.intl.string(k.t.LjsoiY)
          })]
        }), (0, t.jsx)("div", {
          className: E.iconUploadContainer,
          children: (0, t.jsx)(m.yRy, {
            position: "bottom",
            renderPopout: e => {
              let n = e.closePopout,
                l = (0, t.jsxs)(t.Fragment, {
                  children: [(0, t.jsx)(x.ZP, {
                    onChange: e => {
                      ey(e), n()
                    },
                    tabIndex: 0
                  }), (0, t.jsx)(m.Text, {
                    variant: "text-sm/medium",
                    color: "none",
                    children: k.intl.string(k.t["2YKkdX"])
                  })]
                }),
                i = (0, t.jsx)(m.yRy, {
                  targetElementRef: L,
                  position: "top",
                  renderPopout: e => {
                    let l, {
                      closePopout: i
                    } = e;
                    return (0, t.jsx)(g.Z, {
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
                        if (null != i) ef(null, null == i.id ? {
                          id: null,
                          name: null != (n = i.optionallyDiverseSequence) ? n : "",
                          animated: false
                        } : {
                          id: i.id,
                          name: null != (t = i.originalName) ? t : i.name,
                          animated: i.animated
                        }), a && l()
                      }),
                      pickerIntention: _.Hz.COMMUNITY_CONTENT,
                      channel: X
                    })
                  },
                  children: e => (0, t.jsx)(m.Text, Z(P({}, e), {
                    variant: "text-sm/medium",
                    color: "none",
                    ref: L,
                    children: k.intl.string(k.t.amsyNz)
                  }))
                });
              return (0, t.jsxs)(m.v2r, {
                navId: "set-image-for-action",
                "aria-label": "upload",
                onClose: () => false,
                onSelect: () => false,
                children: [(0, t.jsx)(m.sNh, {
                  id: "emoji",
                  label: i,
                  icon: m.EO4
                }), (0, t.jsx)(m.sNh, {
                  className: E.uploadMenuItem,
                  id: "upload",
                  label: l,
                  icon: m.rG2
                }), null != eb || null != et ? (0, t.jsx)(m.sNh, {
                  id: "clear",
                  color: "danger",
                  label: k.intl.string(k.t.ZCLmoa),
                  icon: m.XHJ,
                  action: () => {
                    ef(null)
                  }
                }) : null]
              })
            },
            targetElementRef: q,
            children: e => (0, t.jsx)("div", Z(P({}, e), {
              className: E.iconUpload,
              ref: q,
              children: eC
            }))
          })
        })]
      }), (0, t.jsx)("div", {
        className: E.separator
      }), (0, t.jsxs)("div", {
        className: E.formGroup,
        children: [(0, t.jsxs)(m.X6q, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: [k.intl.string(k.t.MIMVLS), (0, t.jsx)(S.Z, {})]
        }), (0, t.jsx)(d.Gu, {
          withTransparentBackground: true,
          size: d.l7.NONE,
          value: null == en ? true : en.value,
          onChange: eg,
          options: null == X ? B : B.map(e => Z(P({}, e), {
            disabled: !w(e.value, X)
          }))
        }), null != en && K.actionType.length > 0 ? K.actionType.map(e => (0, t.jsx)(m.Text, {
          variant: "text-xs/normal",
          color: "text-danger",
          children: e
        }, e)) : null]
      })]
    }), (0, t.jsx)(c.G, {
      actions: eI,
      leading: null != R ? (0, t.jsx)(m.Avr, {
        text: k.intl.string(k.t.N86XcH),
        onClick: ep,
        variant: "critical"
      }) : true
    })]
  })
}