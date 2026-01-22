/** Chunk was on 47326 **/
/** chunk id: 950989, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => y
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

function y(e) {
  var n;
  let {
    transitionState: t,
    onClose: y,
    channelId: h,
    guildId: O,
    tag: k
  } = e, C = i.useRef(null), x = null != k, [N, P] = i.useState(null != (n = null == k ? true : k.name) ? n : ""), [w, S] = i.useState(null != k ? {
    id: k.emojiId,
    name: k.emojiName
  } : null), [A, E] = i.useState(null == k ? true : k.moderated), I = (0, a.bG)([m.Ay], () => (null == w ? true : w.id) != null ? m.Ay.getUsableCustomEmojiById(w.id) : null), D = (null == k ? true : k.name) !== N || (null == k ? true : k.emojiId) !== (null == w ? true : w.id) || (null == k ? true : k.emojiName) !== (null == w ? true : w.name) || A !== (null == k ? true : k.moderated), T = () => {
    if (null != N && D) {
      if (x) {
        p.A.updateForumTag({
          id: k.id,
          name: N,
          emojiId: null == w ? true : w.id,
          emojiName: null == w ? true : w.name,
          moderated: A
        }, h), y();
        return
      }
      p.A.createForumTag({
        name: N,
        emojiId: null == w ? true : w.id,
        emojiName: null == w ? true : w.name,
        moderated: A
      }, h), y()
    }
  }, R = i.useCallback(e => P(e), []), B = i.useRef(null);
  return (0, d.Ay)(() => {
    null != B.current && B.current.focus()
  }), (0, l.jsxs)(o.Modal, {
    title: x ? f.intl.string(f.t.zeVg5d) : f.intl.string(f.t["/jubeD"]),
    subtitle: f.intl.string(f.t["3v8kZH"]),
    transitionState: t,
    onClose: y,
    actions: [{
      variant: "secondary",
      text: f.intl.string(f.t["ETE/oC"]),
      onClick: () => {
        y()
      }
    }, {
      variant: "primary",
      text: f.intl.string(f.t["R3BPH+"]),
      onClick: T,
      disabled: 0 === N.length || !D,
      autoFocus: true
    }],
    actionBarInput: x ? (0, l.jsx)(r.Button, {
      variant: "critical-secondary",
      text: f.intl.string(f.t.huYSMr),
      onClick: () => {
        x && (p.A.deleteForumTag(h, k.id), y())
      }
    }) : true,
    children: [(0, l.jsx)("div", {
      className: j.Kf,
      children: (0, l.jsx)(r.ksK, {
        inputRef: B,
        maxLength: 20,
        value: N,
        placeholder: f.intl.string(f.t["5vpeb4"]),
        onChange: R,
        autoFocus: true,
        leading: {
          type: "emoji",
          button: (0, l.jsx)("div", {
            className: j.S0,
            children: (0, l.jsx)(r.YNO, {
              targetElementRef: C,
              renderPopout: e => {
                let {
                  closePopout: n
                } = e, t = b.Ay.getDefaultChannel(O);
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
                  onNavigateAway: y,
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
                  ref: C,
                  onClick: n => {
                    var t;
                    null == (t = e.onClick) || t.call(e, n)
                  },
                  active: o,
                  className: j.Z8,
                  tabIndex: 0,
                  renderButtonContents: null != w && (null != w.id || null != w.name) ? () => (0, l.jsx)(u.A, {
                    className: j.Zg,
                    emojiId: w.id,
                    emojiName: w.name,
                    animated: !!(null == I ? true : I.animated)
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
          e.key === g.dh.ENTER && N.length > 0 && (N.length > 0 && T(), e.preventDefault())
        },
        trailing: N.length > 0 || null != w ? {
          icon: r.aXh,
          onClick: () => {
            P(""), S(null)
          },
          "aria-label": f.intl.string(f.t.o8lsHe)
        } : true
      })
    }), (0, l.jsx)(r.hKd, {
      size: 16
    }), (0, l.jsx)(r.Checkbox, {
      checked: null != A && A,
      onChange: e => E(e || (null == k ? true : k.moderated) == null && true),
      label: f.intl.string(f.t["rMH+rt"]),
      labelType: "secondary"
    })]
  })
}