/** Chunk was on 54569 **/
/** chunk id: 251632, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  default: () => w
}), require("./321073.js"), require("./896048.js"), require("./864466.js"), require("./443073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk475743 = require("./475743.js"),
  Chunk713654 = require("./713654.js"),
  Chunk937773 = require("./937773.jsx"),
  Chunk374084 = require("./374084.js"),
  Chunk946274 = require("./946274.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk808728 = require("./808728.js"),
  Chunk71393 = require("./71393.js"),
  Chunk486020 = require("./486020.js"),
  Chunk403362 = require("./403362.js"),
  Chunk488926 = require("./488926.js"),
  Chunk199940 = require("./199940.js"),
  Chunk132514 = require("./132514.js"),
  Chunk721228 = require("./721228.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk307731 = require("./307731.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk43079 = require("./43079.js");

function M(e) {
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

function O(e, n) {
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

function k(e, n) {
  switch (e) {
    case m.NewMemberActionTypes.VIEW:
      return b.MJ(C.xBc.VIEW_CHANNEL, n);
    case m.NewMemberActionTypes.CHAT:
      if (C.kvI.GUILD_THREADS_ONLY.has(n.type)) return b.MJ(C.xBc.SEND_MESSAGES_IN_THREADS, n) || b.MJ(C.xBc.SEND_MESSAGES, n);
      return b.MJ(C.xBc.SEND_MESSAGES, n);
    default:
      returnfalse
  }
}

function E() {
  return {
    channelId: [],
    title: [],
    description: [],
    actionType: [],
    emoji: [],
    icon: []
  }
}

function I(e) {
  let n = E(),
    l = g.A.getChannel(e.channelId);
  return (null == e.title || e.title.length < m.oc) && n.title.push(S.intl.formatToPlainString(S.t.iu6AGk, {
    minLength: m.oc
  })), null == e.actionType || null == l || k(e.actionType, l) || n.actionType.push(function(e) {
    switch (e) {
      case m.NewMemberActionTypes.VIEW:
        return S.intl.string(S.t.lD7FOX);
      case m.NewMemberActionTypes.CHAT:
        return S.intl.string(S.t.fIF2Uy);
      default:
        (0, v.xb)(e)
    }
  }(e.actionType)), n
}

function w(e) {
  var n, l, v, b, w, D;
  let {
    transitionState: P,
    onClose: _,
    guildId: R,
    action: H,
    onSave: G,
    onDelete: L
  } = e, F = i.useRef(null), W = i.useRef(null), J = null == H || null == g.A.getChannel(H.channelId) ? null : H.channelId, [U, Y] = i.useState(J), B = (0, r.bG)([g.A], () => g.A.getChannel(U)), V = (null == B ? true : B.isMediaChannel()) === true, z = i.useMemo(() => [{
    value: m.NewMemberActionTypes.VIEW,
    name: S.intl.string(S.t.jfieRw)
  }, {
    value: m.NewMemberActionTypes.CHAT,
    name: (null == B ? true : B.type) === C.rbe.GUILD_FORUM ? V ? S.intl.string(S.t["1EgDpA"]) : S.intl.string(S.t.x5Di7M) : S.intl.string(S.t["R+dC4C"])
  }], [null == B ? true : B.type, V]), [K, Q] = i.useState(E()), [X, Z] = i.useState(null != (n = null == H ? true : H.title) ? n : ""), q = (0, r.bG)([f.A], () => {
    let e = f.A.getSettings();
    if (null == e.newMemberActions) return new Set;
    let n = new Set(e.newMemberActions.map(e => e.channelId));
    return null != J && n.delete(J), n
  }), [$, ee] = i.useState(null == H ? null : null != (w = null == (D = z.find(e => e.value === H.actionType)) ? true : D.value) ? w : null), [en, el] = i.useState(null != (l = null == H ? true : H.emoji) ? l : null), et = (0, r.bG)([f.A], () => {
    var e;
    return null == (e = f.A.getNewMemberAction(null == H ? true : H.channelId)) ? true : e.icon
  }), ei = null == H ? true : H.channelId, ea = (0, r.bG)([f.A], () => f.A.getPendingDataForChannel(ei), [ei]), [er, eo] = i.useState(null != ea && null != ea.iconData ? ea.iconData : null != et && null != U ? j.Ay.getNewMemberActionIconURL({
    channelId: U,
    icon: et
  }) : null), es = (0, c.A)(en), ec = (0, c.A)(er), eu = null == X || 0 === X.length || null == $ || null == U, ed = Object.values(K).flat().length > 0, em = i.useCallback(() => {
    if (null == U || null == $ || X.length <= 0) return;
    let e = true !== ei && U !== ei,
      n = true !== ea,
      l = null != en || true !== er,
      t = {
        icon: null != er ? er : null,
        emoji: en
      };
    (e || n && l) && (n && (0, y.Rp)(ei), (0, y.J4)(U, t));
    let i = en !== es,
      a = er !== ec;
    G({
      channelId: U,
      title: X,
      description: "",
      actionType: $,
      emoji: null != en ? en : null,
      icon: null != et ? et : null
    }, t, (i || a) && !e), _()
  }, [G, _, X, $, U, en, et, er, es, ec, ei, ea]), eh = i.useCallback(() => {
    null == L || L(), _()
  }, [L, _]), eg = i.useCallback(e => {
    Z(e), Q(I({
      channelId: null != U ? U : true,
      title: e,
      description: "",
      actionType: null != $ ? $ : true,
      emoji: null != en ? en : true
    }))
  }, [Z, Q, U, $, en]), ex = i.useCallback(e => {
    Y(e), Q(I({
      channelId: e,
      title: X,
      description: "",
      actionType: null != $ ? $ : true,
      emoji: null != en ? en : true
    }))
  }, [Y, Q, X, $, en]), ep = i.useCallback(e => {
    ee(e), Q(I({
      channelId: null != U ? U : true,
      title: X,
      description: "",
      actionType: e,
      emoji: null != en ? en : true
    }))
  }, [ee, Q, U, X, en]), ej = i.useMemo(() => x.Ay.getSelectableChannels(R).filter(e => !q.has(e.channel.id) && (0, m.Rc)(e.channel)).map(e => {
    let n = p.A.getGuild(R),
      l = (0, u.gU)(e.channel, n);
    return {
      id: e.channel.id,
      value: e.channel.id,
      label: e.channel.name,
      leading: null != l ? l : true
    }
  }), [R, q]), ev = i.useCallback(function(e) {
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
    el(n), eo(e)
  }, []), eb = i.useCallback(() => null != er ? er : null, [er, en])(), ey = i.useCallback(e => {
    null != e && ev(e, null)
  }, [ev]), ef = null;
  ef = null != eb ? (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)("img", {
      src: eb,
      alt: "",
      "aria-hidden": true,
      className: T.__invalid_image,
      width: 24,
      height: 24
    }), (0, t.jsx)("div", {
      className: T.gu,
      children: (0, t.jsx)(o.R2l, {
        size: "md",
        color: "currentColor"
      })
    })]
  }) : null != en ? (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)(s.A, {
      animated: null != (b = en.animated) && b,
      emojiId: en.id,
      emojiName: en.name
    }), (0, t.jsx)("div", {
      className: T.gu,
      children: (0, t.jsx)(o.R2l, {
        size: "md",
        color: "currentColor"
      })
    })]
  }) : (0, t.jsx)(o.XGR, {
    size: "md",
    color: "currentColor"
  });
  let eA = i.useMemo(() => [{
    text: S.intl.string(S.t["ETE/oC"]),
    onClick: _,
    variant: "secondary"
  }, {
    text: S.intl.string(S.t["R3BPH+"]),
    variant: "primary",
    onClick: em,
    disabled: eu || ed
  }], [em, ed, eu, _]);
  return (0, t.jsxs)(a.Modal, {
    title: S.intl.string(S.t.ncTLSo),
    transitionState: P,
    onClose: _,
    actions: eA,
    actionBarInput: null != H ? (0, t.jsx)(o.QWc, {
      text: S.intl.string(S.t.N86XcP),
      onClick: eh,
      variant: "critical"
    }) : true,
    children: [(0, t.jsxs)("div", {
      className: T.eH,
      children: [(0, t.jsxs)(o.Heading, {
        variant: "heading-md/semibold",
        color: "text-strong",
        children: [S.intl.string(S.t["j+fhOY"]), (0, t.jsx)(A.A, {})]
      }), (0, t.jsx)(o.ksK, {
        value: X,
        error: (null != (v = null == X ? true : X.length) ? v : 0) > 0 ? K.title.join(", ") : null,
        onChange: eg,
        placeholder: S.intl.string(S.t.oN1Sm2),
        maxLength: m.kh
      })]
    }), (0, t.jsx)("div", {
      className: T.me
    }), (0, t.jsxs)("div", {
      className: T.eH,
      children: [(0, t.jsxs)(o.Heading, {
        variant: "heading-md/semibold",
        color: "text-strong",
        children: [S.intl.string(S.t.jVDc5W), (0, t.jsx)(A.A, {})]
      }), (0, t.jsx)(o.ZiE, {
        selectionMode: "single",
        value: null != U ? U : true,
        options: ej,
        onSelectionChange: ex
      }), (0, t.jsx)(o.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: S.intl.string(S.t.cypQPz)
      })]
    }), (0, t.jsx)("div", {
      className: T.me
    }), (0, t.jsxs)("div", {
      className: T.kE,
      children: [(0, t.jsxs)("div", {
        children: [(0, t.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          color: "text-strong",
          children: S.intl.string(S.t.gs5rQm)
        }), (0, t.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: S.intl.string(S.t.LjsoiT)
        })]
      }), (0, t.jsx)("div", {
        className: T.um,
        children: (0, t.jsx)(o.YNO, {
          position: "bottom",
          renderPopout: e => {
            let n = e.closePopout,
              l = (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)(h.Ay, {
                  onChange: e => {
                    ey(e), n()
                  },
                  tabIndex: 0
                }), (0, t.jsx)(o.Text, {
                  variant: "text-sm/medium",
                  color: "none",
                  children: S.intl.string(S.t["2YKkdd"])
                })]
              }),
              i = (0, t.jsx)(o.YNO, {
                targetElementRef: F,
                position: "top",
                renderPopout: e => {
                  let l, {
                    closePopout: i
                  } = e;
                  return (0, t.jsx)(d.A, {
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
                      if (null != i) ev(null, null == i.id ? {
                        id: null,
                        name: null != (n = i.optionallyDiverseSequence) ? n : "",
                        animated: false
                      } : {
                        id: i.id,
                        name: null != (t = i.originalName) ? t : i.name,
                        animated: i.animated
                      }), a && l()
                    }),
                    pickerIntention: N.b_.COMMUNITY_CONTENT,
                    channel: B
                  })
                },
                children: e => (0, t.jsx)(o.Text, O(M({}, e), {
                  variant: "text-sm/medium",
                  color: "none",
                  ref: F,
                  children: S.intl.string(S.t["amsyN+"])
                }))
              });
            return (0, t.jsxs)(o.W1t, {
              "data-menu-all-icons": true,
              navId: "set-image-for-action",
              "aria-label": "upload",
              onClose: () => false,
              onSelect: () => false,
              children: [(0, t.jsx)(o.Drp, {
                id: "emoji",
                void_label: i,
                icon: o.nm2
              }), (0, t.jsx)(o.Drp, {
                className: T.K8,
                id: "upload",
                void_label: l,
                icon: o.JMY
              }), null != eb || null != en ? (0, t.jsx)(o.Drp, {
                id: "clear",
                color: "danger",
                label: S.intl.string(S.t.ZCLmoR),
                icon: o.ucK,
                action: () => {
                  ev(null)
                }
              }) : null]
            })
          },
          targetElementRef: W,
          children: e => (0, t.jsx)("div", O(M({}, e), {
            className: T.JW,
            ref: W,
            children: ef
          }))
        })
      })]
    }), (0, t.jsx)("div", {
      className: T.me
    }), (0, t.jsxs)("div", {
      className: T.eH,
      children: [(0, t.jsxs)(o.Heading, {
        variant: "heading-md/semibold",
        color: "text-strong",
        children: [S.intl.string(S.t.MIMVLa), (0, t.jsx)(A.A, {})]
      }), (0, t.jsx)(o.z6M, {
        value: $,
        onChange: ep,
        options: null == B ? z : z.map(e => O(M({}, e), {
          disabled: !k(e.value, B)
        }))
      }), null != $ && K.actionType.length > 0 ? K.actionType.map(e => (0, t.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "text-feedback-critical",
        children: e
      }, e)) : null]
    })]
  })
}