/** Chunk was on 64982 **/
/** chunk id: 328159, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk318766 = require("./318766.jsx"),
  Chunk907040 = require("./907040.jsx"),
  Chunk456268 = require("./456268.js"),
  Chunk999382 = require("./999382.js"),
  Chunk185923 = require("./185923.js"),
  Chunk388032 = require("./388032.jsx");
let p = e => {
    var t;
    let {
      reason: n = "",
      emoji_name: d,
      onSetReason: m,
      onSelectEmoji: p,
      onClearPressed: f,
      reasonMinLength: h,
      reasonMaxLength: b,
      placeholder: x,
      position: j
    } = e, v = i.useRef(null), [_, C] = i.useState(false), O = (0, l.e7)([u.Z], () => u.Z.isGuildMetadataLoaded()), y = (0, r.jsx)(a.yRy, {
      targetElementRef: v,
      onRequestClose: () => {
        C(false)
      },
      shouldShow: _,
      position: "right",
      align: "top",
      animation: a.yRy.Animation.NONE,
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, r.jsx)(c.Z, {
          pickerIntention: g.Hz.COMMUNITY_CONTENT,
          closePopout: t,
          onSelectEmoji: e => {
            let {
              emoji: n,
              willClose: r
            } = e;
            null != n && p(n), r && t()
          }
        })
      },
      children: () => (0, r.jsx)(o.Z, {
        active: false,
        onClick: () => {
          C(true)
        },
        tabIndex: 0,
        renderButtonContents: null != d ? () => (0, r.jsx)(s.Z, {
          emojiName: d,
          animated: false
        }) : null,
        ref: v
      })
    });
    return (0, r.jsx)(a.oil, {
      placeholder: x,
      value: n,
      minLength: h,
      maxLength: b,
      defaultDirty: (null == n ? true : n.length) > 0,
      leading: {
        type: "emoji",
        button: y
      },
      onChange: e => {
        m(e)
      },
      clearable: {
        show: (null != (t = null == n ? true : n.length) ? t : 0) > 0 || null != d
      },
      onClear: f
    }, "text-input-".concat(j, "-").concat(O))
  },
  f = e => {
    let {
      reasonMinLength: t,
      reasonMaxLength: n,
      guildId: i,
      reasons: l
    } = e, s = [m.intl.string(m.t["9dhBGo"]), m.intl.string(m.t["8RmhKF"]), m.intl.string(m.t["2t0V83"]), m.intl.string(m.t.l8WqCR)], o = [];
    for (let e = 0; e < 4; e++) o.push((0, r.jsx)(p, function(e, t) {
      return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
      }), e
    }(function(e) {
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
      position: e,
      placeholder: s[e]
    }, l[e]), {
      onSetReason: t => {
        let n = [...l],
          r = Object.assign({}, l[e], {
            reason: t
          });
        n[e] = r, (0, d.P$)(i, n)
      },
      onSelectEmoji: t => {
        let n = [...l],
          r = Object.assign({}, l[e], {
            emoji_name: t.optionallyDiverseSequence
          });
        n[e] = r, (0, d.P$)(i, n)
      },
      onClearPressed: () => {
        let t = [...l],
          n = {
            reason: "",
            emoji_name: null
          };
        t[e] = n, (0, d.P$)(i, t)
      },
      reasonMinLength: t,
      reasonMaxLength: n
    }), "reasonListItem-" + e));
    return (0, r.jsx)(a.Kqy, {
      gap: 16,
      children: o
    })
  }