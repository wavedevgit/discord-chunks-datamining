/** Chunk was on 7590 **/
/** chunk id: 380716, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  default: () => M
}), require("./539854.js"), require("./388685.js"), require("./472816.js"), require("./794429.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk399606 = require("./399606.js"),
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

function I(e, n) {
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

function P(e, n) {
  switch (e) {
    case m.NewMemberActionTypes.VIEW:
      return b.Uu(C.Plq.VIEW_CHANNEL, n);
    case m.NewMemberActionTypes.CHAT:
      if (C.TPd.GUILD_THREADS_ONLY.has(n.type)) return b.Uu(C.Plq.SEND_MESSAGES_IN_THREADS, n) || b.Uu(C.Plq.SEND_MESSAGES, n);
      return b.Uu(C.Plq.SEND_MESSAGES, n);
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

function k(e) {
  let n = w(),
    l = p.Z.getChannel(e.channelId);
  return (null == e.title || e.title.length < m.Wz) && n.title.push(T.intl.formatToPlainString(T.t.iu6AGk, {
    minLength: m.Wz
  })), null == e.actionType || null == l || P(e.actionType, l) || n.actionType.push(function(e) {
    switch (e) {
      case m.NewMemberActionTypes.VIEW:
        return T.intl.string(T.t.lD7FOX);
      case m.NewMemberActionTypes.CHAT:
        return T.intl.string(T.t.fIF2Uy);
      default:
        (0, x.vE)(e)
    }
  }(e.actionType)), n
}

function M(e) {
  var n, l, x, b, M, Z;
  let {
    transitionState: A,
    onClose: D,
    guildId: _,
    action: R,
    onSave: H,
    onDelete: L
  } = e, G = i.useRef(null), U = i.useRef(null), F = null == R || null == p.Z.getChannel(R.channelId) ? null : R.channelId, [W, z] = i.useState(F), V = (0, r.e7)([p.Z], () => p.Z.getChannel(W)), Y = (null == V ? true : V.isMediaChannel()) === true, q = i.useMemo(() => [{
    value: m.NewMemberActionTypes.VIEW,
    name: T.intl.string(T.t.jfieRw)
  }, {
    value: m.NewMemberActionTypes.CHAT,
    name: (null == V ? true : V.type) === C.d4z.GUILD_FORUM ? Y ? T.intl.string(T.t["1EgDpA"]) : T.intl.string(T.t.x5Di7M) : T.intl.string(T.t["R+dC4C"])
  }], [null == V ? true : V.type, Y]), [X, B] = i.useState(w()), [K, Q] = i.useState(null != (n = null == R ? true : R.title) ? n : ""), J = (0, r.e7)([y.Z], () => {
    let e = y.Z.getSettings();
    if (null == e.newMemberActions) return new Set;
    let n = new Set(e.newMemberActions.map(e => e.channelId));
    return null != F && n.delete(F), n
  }), [$, ee] = i.useState(null == R ? null : null != (Z = null == (M = q.find(e => e.value === R.actionType)) ? true : M.value) ? Z : null), [en, el] = i.useState(null != (l = null == R ? true : R.emoji) ? l : null), et = (0, r.e7)([y.Z], () => {
    var e;
    return null == (e = y.Z.getNewMemberAction(null == R ? true : R.channelId)) ? true : e.icon
  }), ei = null == R ? true : R.channelId, ea = (0, r.e7)([y.Z], () => y.Z.getPendingDataForChannel(ei), [ei]), [er, eo] = i.useState(null != ea && null != ea.iconData ? ea.iconData : null != et && null != W ? j.ZP.getNewMemberActionIconURL({
    channelId: W,
    icon: et
  }) : null), es = (0, c.Z)(en), ec = (0, c.Z)(er), eu = null == K || 0 === K.length || null == $ || null == W, ed = Object.values(X).flat().length > 0, em = i.useCallback(() => {
    if (null == W || null == $ || K.length <= 0) return;
    let e = true !== ei && W !== ei,
      n = true !== ea,
      l = null != en || true !== er,
      t = {
        icon: null != er ? er : null,
        emoji: en
      };
    (e || n && l) && (n && (0, f.Lo)(ei), (0, f.Wp)(W, t));
    let i = en !== es,
      a = er !== ec;
    H({
      channelId: W,
      title: K,
      description: "",
      actionType: $,
      emoji: null != en ? en : null,
      icon: null != et ? et : null
    }, t, (i || a) && !e), D()
  }, [H, D, K, $, W, en, et, er, es, ec, ei, ea]), eh = i.useCallback(() => {
    null == L || L(), D()
  }, [L, D]), ep = i.useCallback(e => {
    Q(e), B(k({
      channelId: null != W ? W : true,
      title: e,
      description: "",
      actionType: null != $ ? $ : true,
      emoji: null != en ? en : true
    }))
  }, [Q, B, W, $, en]), eg = i.useCallback(e => {
    z(e), B(k({
      channelId: e,
      title: K,
      description: "",
      actionType: null != $ ? $ : true,
      emoji: null != en ? en : true
    }))
  }, [z, B, K, $, en]), ev = i.useCallback(e => {
    ee(e), B(k({
      channelId: null != W ? W : true,
      title: K,
      description: "",
      actionType: e,
      emoji: null != en ? en : true
    }))
  }, [ee, B, W, K, en]), ej = i.useMemo(() => g.ZP.getSelectableChannels(_).filter(e => !J.has(e.channel.id) && (0, m.kb)(e.channel)).map(e => {
    let n = v.Z.getGuild(_),
      l = (0, u.KS)(e.channel, n);
    return {
      id: e.channel.id,
      value: e.channel.id,
      label: e.channel.name,
      leading: null != l ? l : true
    }
  }), [_, J]), ex = i.useCallback(function(e) {
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
    el(n), eo(e)
  }, []), eb = i.useCallback(() => null != er ? er : null, [er, en])(), ef = i.useCallback(e => {
    null != e && ex(e, null)
  }, [ex]), ey = null;
  ey = null != eb ? (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)("img", {
      src: eb,
      alt: "",
      "aria-hidden": true,
      className: O.__invalid_image,
      width: 24,
      height: 24
    }), (0, t.jsx)("div", {
      className: O.imageOverlay,
      children: (0, t.jsx)(o.vdY, {
        size: "md",
        color: "currentColor"
      })
    })]
  }) : null != en ? (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)(s.Z, {
      animated: null != (x = en.animated) && x,
      emojiId: en.id,
      emojiName: en.name
    }), (0, t.jsx)("div", {
      className: O.imageOverlay,
      children: (0, t.jsx)(o.vdY, {
        size: "md",
        color: "currentColor"
      })
    })]
  }) : (0, t.jsx)(o.FmF, {
    size: "md",
    color: "currentColor"
  });
  let eN = i.useMemo(() => [{
    text: T.intl.string(T.t["ETE/oC"]),
    onClick: D,
    variant: "secondary"
  }, {
    text: T.intl.string(T.t["R3BPH+"]),
    variant: "primary",
    onClick: em,
    disabled: eu || ed
  }], [em, ed, eu, D]);
  return (0, t.jsxs)(a.Modal, {
    title: T.intl.string(T.t.ncTLSo),
    transitionState: A,
    onClose: D,
    actions: eN,
    actionBarInput: null != R ? (0, t.jsx)(o.Avr, {
      text: T.intl.string(T.t.N86XcP),
      onClick: eh,
      variant: "critical"
    }) : true,
    children: [(0, t.jsxs)("div", {
      className: O.formGroup,
      children: [(0, t.jsxs)(o.Heading, {
        variant: "heading-md/semibold",
        color: "text-strong",
        children: [T.intl.string(T.t["j+fhOY"]), (0, t.jsx)(N.Z, {})]
      }), (0, t.jsx)(o.oil, {
        value: K,
        error: (null != (b = null == K ? true : K.length) ? b : 0) > 0 ? X.title.join(", ") : null,
        onChange: ep,
        placeholder: T.intl.string(T.t.oN1Sm2),
        maxLength: m.Z3
      })]
    }), (0, t.jsx)("div", {
      className: O.separator
    }), (0, t.jsxs)("div", {
      className: O.formGroup,
      children: [(0, t.jsxs)(o.Heading, {
        variant: "heading-md/semibold",
        color: "text-strong",
        children: [T.intl.string(T.t.jVDc5W), (0, t.jsx)(N.Z, {})]
      }), (0, t.jsx)(o.VcW, {
        selectionMode: "single",
        value: null != W ? W : true,
        options: ej,
        onSelectionChange: eg
      }), (0, t.jsx)(o.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: T.intl.string(T.t.cypQPz)
      })]
    }), (0, t.jsx)("div", {
      className: O.separator
    }), (0, t.jsxs)("div", {
      className: O.splitGroup,
      children: [(0, t.jsxs)("div", {
        children: [(0, t.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          color: "text-strong",
          children: T.intl.string(T.t.gs5rQm)
        }), (0, t.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: T.intl.string(T.t.LjsoiT)
        })]
      }), (0, t.jsx)("div", {
        className: O.iconUploadContainer,
        children: (0, t.jsx)(o.yRy, {
          position: "bottom",
          renderPopout: e => {
            let n = e.closePopout,
              l = (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)(h.ZP, {
                  onChange: e => {
                    ef(e), n()
                  },
                  tabIndex: 0
                }), (0, t.jsx)(o.Text, {
                  variant: "text-sm/medium",
                  color: "none",
                  children: T.intl.string(T.t["2YKkdd"])
                })]
              }),
              i = (0, t.jsx)(o.yRy, {
                targetElementRef: G,
                position: "top",
                renderPopout: e => {
                  let l, {
                    closePopout: i
                  } = e;
                  return (0, t.jsx)(d.Z, {
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
                    pickerIntention: S.Hz.COMMUNITY_CONTENT,
                    channel: V
                  })
                },
                children: e => (0, t.jsx)(o.Text, I(E({}, e), {
                  variant: "text-sm/medium",
                  color: "none",
                  ref: G,
                  children: T.intl.string(T.t["amsyN+"])
                }))
              });
            return (0, t.jsxs)(o.v2r, {
              navId: "set-image-for-action",
              "aria-label": "upload",
              onClose: () => false,
              onSelect: () => false,
              children: [(0, t.jsx)(o.sNh, {
                id: "emoji",
                label: i,
                icon: o.EO4
              }), (0, t.jsx)(o.sNh, {
                className: O.uploadMenuItem,
                id: "upload",
                label: l,
                icon: o.rG2
              }), null != eb || null != en ? (0, t.jsx)(o.sNh, {
                id: "clear",
                color: "danger",
                label: T.intl.string(T.t.ZCLmoR),
                icon: o.XHJ,
                action: () => {
                  ex(null)
                }
              }) : null]
            })
          },
          targetElementRef: U,
          children: e => (0, t.jsx)("div", I(E({}, e), {
            className: O.iconUpload,
            ref: U,
            children: ey
          }))
        })
      })]
    }), (0, t.jsx)("div", {
      className: O.separator
    }), (0, t.jsxs)("div", {
      className: O.formGroup,
      children: [(0, t.jsxs)(o.Heading, {
        variant: "heading-md/semibold",
        color: "text-strong",
        children: [T.intl.string(T.t.MIMVLa), (0, t.jsx)(N.Z, {})]
      }), (0, t.jsx)(o.FXm, {
        value: $,
        onChange: ev,
        options: null == V ? q : q.map(e => I(E({}, e), {
          disabled: !P(e.value, V)
        }))
      }), null != $ && X.actionType.length > 0 ? X.actionType.map(e => (0, t.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "text-feedback-critical",
        children: e
      }, e)) : null]
    })]
  })
}