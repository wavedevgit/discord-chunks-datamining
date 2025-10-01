/** Chunk was on 7590 **/
/** chunk id: 380716, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  default: () => M
}), require("./539854.js"), require("./388685.js"), require("./472816.js"), require("./794429.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk658722 = require("./658722.js"),
  r = require.n(Chunk658722),
  Chunk793030 = require("./793030.js"),
  Chunk399606 = require("./399606.js"),
  Chunk159691 = require("./159691.js"),
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

function P(e, n) {
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
    case g.oi.VIEW:
      return I.Uu(S.Plq.VIEW_CHANNEL, n);
    case g.oi.CHAT:
      if (S.TPd.GUILD_THREADS_ONLY.has(n.type)) return I.Uu(S.Plq.SEND_MESSAGES_IN_THREADS, n) || I.Uu(S.Plq.SEND_MESSAGES, n);
      return I.Uu(S.Plq.SEND_MESSAGES, n);
    default:
      returnfalse
  }
}

function w() {
  return {
    channelId: [],
    title: [],
    description: [],
    actionType: [],
    emoji: [],
    icon: []
  }
}

function G(e) {
  let n = w(),
    l = x.Z.getChannel(e.channelId);
  return (null == e.title || e.title.length < g.Wz) && n.title.push(_.intl.formatToPlainString(_.t.iu6AGh, {
    minLength: g.Wz
  })), null == e.actionType || null == l || Z(e.actionType, l) || n.actionType.push(function(e) {
    switch (e) {
      case g.oi.VIEW:
        return _.intl.string(_.t.lD7FOT);
      case g.oi.CHAT:
        return _.intl.string(_.t.fIF2U1);
      default:
        (0, C.vE)(e)
    }
  }(e.actionType)), n
}

function M(e) {
  var n, l, a, C, I;
  let {
    transitionState: M,
    onClose: D,
    guildId: U,
    action: A,
    onSave: R,
    onDelete: H
  } = e, z = i.useRef(null), L = i.useRef(null), [q] = i.useState(function(e) {
    if (null == e) return null;
    let n = x.Z.getChannel(e.channelId);
    return null == n ? null : {
      value: e.channelId,
      label: n.name
    }
  }(A)), [F, W] = i.useState(q), X = (0, s.e7)([x.Z], () => x.Z.getChannel(null == F ? true : F.value)), V = (null == X ? true : X.isMediaChannel()) === true, Y = i.useMemo(() => [{
    value: g.oi.VIEW,
    name: _.intl.string(_.t.jfieR0)
  }, {
    value: g.oi.CHAT,
    name: (null == X ? true : X.type) === S.d4z.GUILD_FORUM ? V ? _.intl.string(_.t["1EgDpK"]) : _.intl.string(_.t.x5Di7O) : _.intl.string(_.t["R+dC4O"])
  }], [null == X ? true : X.type, V]), [B, K] = i.useState(w()), [Q, J] = i.useState(null != (n = null == A ? true : A.title) ? n : ""), $ = (0, s.e7)([N.Z], () => {
    let e = N.Z.getSettings();
    if (null == e.newMemberActions) return new Set;
    let n = new Set(e.newMemberActions.map(e => e.channelId));
    return null != q && n.delete(q.value), n
  }), [ee, en] = i.useState(null == A ? null : null != (I = Y.find(e => e.value === A.actionType)) ? I : null), [el, et] = i.useState(null != (l = null == A ? true : A.emoji) ? l : null), ei = (0, s.e7)([N.Z], () => {
    var e;
    return null == (e = N.Z.getNewMemberAction(null == A ? true : A.channelId)) ? true : e.icon
  }), [ea, er] = i.useState(null != ei && null != F ? y.ZP.getNewMemberActionIconURL({
    channelId: F.value,
    icon: ei
  }) : null), eo = (0, p.Z)(ea), es = (0, p.Z)(el), eu = null == Q || 0 === Q.length || null == ee || null == F, ec = Object.values(B).flat().length > 0, ed = i.useCallback(() => {
    if (null == F || null == ee || Q.length <= 0) return;
    let e = {
        channelId: F.value,
        title: Q,
        description: "",
        actionType: ee.value,
        emoji: null != el ? el : null,
        icon: null != ei ? ei : null
      },
      n = ea !== eo || el !== es;
    R(e, null != ea ? ea : null, n), D()
  }, [R, D, Q, ee, F, el, ei, ea, eo, es]), em = i.useCallback(() => {
    null == H || H(), D()
  }, [H, D]), ep = i.useCallback(e => {
    J(e), K(G({
      channelId: null == F ? true : F.value,
      title: e,
      description: "",
      actionType: null == ee ? true : ee.value,
      emoji: null != el ? el : true
    }))
  }, [J, K, F, ee, el]), eh = i.useCallback(e => {
    W(e), K(G({
      channelId: null == e ? true : e.value,
      title: Q,
      description: "",
      actionType: null == ee ? true : ee.value,
      emoji: null != el ? el : true
    }))
  }, [W, K, Q, ee, el]), ev = i.useCallback(e => {
    en(e), K(G({
      channelId: null == F ? true : F.value,
      title: Q,
      description: "",
      actionType: null == e ? true : e.value,
      emoji: null != el ? el : true
    }))
  }, [en, K, F, Q, el]), eg = i.useCallback(e => Promise.resolve(f.ZP.getSelectableChannels(U).filter(n => !$.has(n.channel.id) && (0, g.kb)(n.channel) && r()(e, n.channel.name)).map(e => ({
    value: e.channel.id,
    label: e.channel.name
  }))), [U, $]), ej = i.useCallback(e => {
    if (null == e || null == U) return null;
    let n = x.Z.getChannel(e.value),
      l = b.Z.getGuild(U);
    if (null == n || null == l) return null;
    let i = (0, h.KS)(n, l);
    return null == i ? null : (0, t.jsx)(i, {
      size: "xs",
      color: "customColor",
      className: k.channelIcon
    })
  }, [U]), ex = i.useCallback(function(e) {
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
    et(n), er(e)
  }, []), ef = i.useCallback(() => null != ea ? ea : null, [ea, el])(), eb = i.useCallback(e => {
    null != e && ex(e, null)
  }, [ex]), ey = null;
  ey = null != ef ? (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)("img", {
      src: ef,
      alt: "",
      "aria-hidden": true,
      className: k.__invalid_image,
      width: 24,
      height: 24
    }), (0, t.jsx)("div", {
      className: k.imageOverlay,
      children: (0, t.jsx)(d.vdY, {
        size: "md",
        color: "currentColor"
      })
    })]
  }) : null != el ? (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)(m.Z, {
      animated: null != (a = el.animated) && a,
      emojiId: el.id,
      emojiName: el.name
    }), (0, t.jsx)("div", {
      className: k.imageOverlay,
      children: (0, t.jsx)(d.vdY, {
        size: "md",
        color: "currentColor"
      })
    })]
  }) : (0, t.jsx)(d.FmF, {
    size: "md",
    color: "currentColor"
  });
  let eC = i.useMemo(() => [{
    text: _.intl.string(_.t["ETE/oK"]),
    onClick: D,
    variant: "secondary"
  }, {
    text: _.intl.string(_.t.R3BPHx),
    variant: "primary",
    onClick: ed,
    disabled: eu || ec
  }], [ed, ec, eu, D]);
  return (0, t.jsxs)(o.IX, {
    transitionState: M,
    onClose: D,
    children: [(0, t.jsx)("div", {
      className: k.closeButton,
      children: (0, t.jsx)(u.PZ7, {
        onClick: D
      })
    }), (0, t.jsxs)("div", {
      className: k.container,
      children: [(0, t.jsxs)("div", {
        className: k.formGroup,
        children: [(0, t.jsxs)(d.X6q, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: [_.intl.string(_.t["j+fhOT"]), (0, t.jsx)(O.Z, {})]
        }), (0, t.jsx)(d.oil, {
          value: Q,
          error: (null != (C = null == Q ? true : Q.length) ? C : 0) > 0 ? B.title.join(", ") : null,
          onChange: ep,
          placeholder: _.intl.string(_.t.oN1Sm5),
          maxLength: g.Z3
        })]
      }), (0, t.jsx)("div", {
        className: k.separator
      }), (0, t.jsxs)("div", {
        className: k.formGroup,
        children: [(0, t.jsxs)(d.X6q, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: [_.intl.string(_.t.jVDc5e), (0, t.jsx)(O.Z, {})]
        }), (0, t.jsx)(d.VcW, {
          value: F,
          renderOptionPrefix: ej,
          options: eg,
          onChange: eh
        }), (0, t.jsx)(d.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: _.intl.string(_.t.cypQPz)
        })]
      }), (0, t.jsx)("div", {
        className: k.separator
      }), (0, t.jsxs)("div", {
        className: k.splitGroup,
        children: [(0, t.jsxs)("div", {
          children: [(0, t.jsx)(d.X6q, {
            variant: "heading-md/semibold",
            color: "header-primary",
            children: _.intl.string(_.t.gs5rQk)
          }), (0, t.jsx)(d.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: _.intl.string(_.t.LjsoiY)
          })]
        }), (0, t.jsx)("div", {
          className: k.iconUploadContainer,
          children: (0, t.jsx)(d.yRy, {
            position: "bottom",
            renderPopout: e => {
              let n = e.closePopout,
                l = (0, t.jsxs)(t.Fragment, {
                  children: [(0, t.jsx)(j.ZP, {
                    onChange: e => {
                      eb(e), n()
                    },
                    tabIndex: 0
                  }), (0, t.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    color: "none",
                    children: _.intl.string(_.t["2YKkdX"])
                  })]
                }),
                i = (0, t.jsx)(d.yRy, {
                  targetElementRef: z,
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
                        if (null != i) ex(null, null == i.id ? {
                          id: null,
                          name: null != (n = i.optionallyDiverseSequence) ? n : "",
                          animated: false
                        } : {
                          id: i.id,
                          name: null != (t = i.originalName) ? t : i.name,
                          animated: i.animated
                        }), a && l()
                      }),
                      pickerIntention: T.Hz.COMMUNITY_CONTENT,
                      channel: X
                    })
                  },
                  children: e => (0, t.jsx)(d.Text, P(E({}, e), {
                    variant: "text-sm/medium",
                    color: "none",
                    ref: z,
                    children: _.intl.string(_.t.amsyNz)
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
                  className: k.uploadMenuItem,
                  id: "upload",
                  label: l,
                  icon: d.rG2
                }), null != ef || null != el ? (0, t.jsx)(d.sNh, {
                  id: "clear",
                  color: "danger",
                  label: _.intl.string(_.t.ZCLmoa),
                  icon: d.XHJ,
                  action: () => {
                    ex(null)
                  }
                }) : null]
              })
            },
            targetElementRef: L,
            children: e => (0, t.jsx)("div", P(E({}, e), {
              className: k.iconUpload,
              ref: L,
              children: ey
            }))
          })
        })]
      }), (0, t.jsx)("div", {
        className: k.separator
      }), (0, t.jsxs)("div", {
        className: k.formGroup,
        children: [(0, t.jsxs)(d.X6q, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: [_.intl.string(_.t.MIMVLS), (0, t.jsx)(O.Z, {})]
        }), (0, t.jsx)(c.Gu, {
          withTransparentBackground: true,
          size: c.l7.NONE,
          value: null == ee ? true : ee.value,
          onChange: ev,
          options: null == X ? Y : Y.map(e => P(E({}, e), {
            disabled: !Z(e.value, X)
          }))
        }), null != ee && B.actionType.length > 0 ? B.actionType.map(e => (0, t.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "text-danger",
          children: e
        }, e)) : null]
      })]
    }), (0, t.jsx)(o.Go$, {
      actions: eC,
      leading: null != A ? (0, t.jsx)(d.Avr, {
        text: _.intl.string(_.t.N86XcH),
        onClick: em,
        variant: "critical"
      }) : true
    })]
  })
}