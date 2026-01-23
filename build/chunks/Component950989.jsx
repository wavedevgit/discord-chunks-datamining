/** Chunk was on 47326 **/
/** chunk id: 950989, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk964486 = require("./964486.js"),
  Chunk375499 = require("./375499.jsx"),
  Chunk937773 = require("./937773.jsx"),
  Chunk508675 = require("./508675.js"),
  Chunk808728 = require("./808728.js"),
  Chunk919577 = require("./919577.js"),
  Chunk307731 = require("./307731.js"),
  Chunk650583 = require("./650583.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk465161 = require("./465161.js");

function f(e) {
  var n;
  let {
    transitionState: t,
    onClose: f,
    channelId: h,
    guildId: O,
    tag: C
  } = e, k = i.useRef(null), x = null != C, [N, P] = i.useState(null != (n = null == C ? true : C.name) ? n : ""), [w, S] = i.useState(null != C ? {
    id: C.emojiId,
    name: C.emojiName
  } : null), [A, _] = i.useState(null == C ? true : C.moderated), E = (0, a.bG)([m.Ay], () => (null == w ? true : w.id) != null ? m.Ay.getUsableCustomEmojiById(w.id) : null), I = (null == C ? true : C.name) !== N || (null == C ? true : C.emojiId) !== (null == w ? true : w.id) || (null == C ? true : C.emojiName) !== (null == w ? true : w.name) || A !== (null == C ? true : C.moderated), D = () => {
    if (null != N && I) {
      if (x) {
        p.A.updateForumTag({
          id: C.id,
          name: N,
          emojiId: null == w ? true : w.id,
          emojiName: null == w ? true : w.name,
          moderated: A
        }, h), f();
        return
      }
      p.A.createForumTag({
        name: N,
        emojiId: null == w ? true : w.id,
        emojiName: null == w ? true : w.name,
        moderated: A
      }, h), f()
    }
  }, T = i.useCallback(e => P(e), []), B = i.useRef(null);
  return (0, d.Ay)(() => {
    null != B.current && B.current.focus()
  }), (0, l.jsxs)(o.Modal, {
    title: x ? b.intl.string(b.t.zeVg5d) : b.intl.string(b.t["/jubeD"]),
    subtitle: b.intl.string(b.t["3v8kZH"]),
    transitionState: t,
    onClose: f,
    actions: [{
      variant: "secondary",
      text: b.intl.string(b.t["ETE/oC"]),
      onClick: () => {
        f()
      }
    }, {
      variant: "primary",
      text: b.intl.string(b.t["R3BPH+"]),
      onClick: D,
      disabled: 0 === N.length || !I,
      autoFocus: true
    }],
    actionBarInput: x ? (0, l.jsx)(r.Button, {
      variant: "critical-secondary",
      text: b.intl.string(b.t.huYSMr),
      onClick: () => {
        x && (p.A.deleteForumTag(h, C.id), f())
      }
    }) : true,
    children: [(0, l.jsx)("div", {
      className: y.Kf,
      children: (0, l.jsx)(r.ksK, {
        inputRef: B,
        maxLength: 20,
        value: N,
        placeholder: b.intl.string(b.t["5vpeb4"]),
        onChange: T,
        autoFocus: true,
        leading: {
          type: "emoji",
          button: (0, l.jsx)("div", {
            className: y.S0,
            children: (0, l.jsx)(r.YNO, {
              targetElementRef: k,
              renderPopout: e => {
                let {
                  closePopout: n
                } = e, t = j.Ay.getDefaultChannel(O);
                return (0, l.jsx)(s.A, {
                  guildId: O,
                  closePopout: n,
                  onSelectEmoji: e => {
                    let {
                      emoji: t,
                      willClose: l
                    } = e;
                    null != t && S(null != t.id ? {
                      id: t.id,
                      name: t.name
                    } : {
                      id: true,
                      name: t.optionallyDiverseSequence
                    }), l && n()
                  },
                  pickerIntention: v.b_.COMMUNITY_CONTENT,
                  onNavigateAway: f,
                  channel: t
                })
              },
              position: "left",
              animation: r.YNO.Animation.NONE,
              align: "bottom",
              children: (e, n) => {
                var t, i;
                let {
                  isShown: o
                } = n;
                return (0, l.jsx)(c.A, (t = function(e) {
                  for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                      l = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                      return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), l.forEach(function(n) {
                      var l;
                      l = t[n], n in e ? Object.defineProperty(e, n, {
                        value: l,
                        enumerable: true,
                        configurable: true,
                        writable: true
                      }) : e[n] = l
                    })
                  }
                  return e
                }({}, e), i = i = {
                  ref: k,
                  onClick: n => {
                    var t;
                    null == (t = e.onClick) || t.call(e, n)
                  },
                  active: o,
                  className: y.Z8,
                  tabIndex: 0,
                  renderButtonContents: null != w && (null != w.id || null != w.name) ? () => (0, l.jsx)(u.A, {
                    className: y.Zg,
                    emojiId: w.id,
                    emojiName: w.name,
                    animated: !!(null == E ? true : E.animated)
                  }) : null
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    t.push.apply(t, l)
                  }
                  return t
                })(Object(i)).forEach(function(e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }), t))
              }
            })
          })
        },
        onKeyDown: e => {
          e.key === g.dh.ENTER && N.length > 0 && (N.length > 0 && D(), e.preventDefault())
        },
        trailing: N.length > 0 || null != w ? {
          icon: r.aXh,
          onClick: () => {
            P(""), S(null)
          },
          "aria-label": b.intl.string(b.t.o8lsHe)
        } : true
      })
    }), (0, l.jsx)(r.hKd, {
      size: 16
    }), (0, l.jsx)(r.Checkbox, {
      checked: null != A && A,
      onChange: e => _(e || (null == C ? true : C.moderated) == null && true),
      label: b.intl.string(b.t["rMH+rt"]),
      labelType: "secondary"
    })]
  })
}