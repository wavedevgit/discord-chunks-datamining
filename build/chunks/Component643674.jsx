/** Chunk was on 39048 **/
/** chunk id: 643674, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk375499 = require("./375499.jsx"),
  Chunk937773 = require("./937773.jsx"),
  Chunk460760 = require("./460760.js"),
  Chunk555337 = require("./555337.js"),
  Chunk307731 = require("./307731.js"),
  Chunk985018 = require("./985018.jsx");
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
    } = e, _ = i.useRef(null), [O, v] = i.useState(false), y = (0, l.bG)([u.A], () => u.A.isGuildMetadataLoaded()), A = (0, r.jsx)(s.YNO, {
      targetElementRef: _,
      onRequestClose: () => {
        v(false)
      },
      shouldShow: O,
      position: "right",
      align: "top",
      animation: s.YNO.Animation.NONE,
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, r.jsx)(c.A, {
          pickerIntention: g.b_.COMMUNITY_CONTENT,
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
      children: () => (0, r.jsx)(o.A, {
        active: false,
        onClick: () => {
          v(true)
        },
        tabIndex: 0,
        renderButtonContents: null != d ? () => (0, r.jsx)(a.A, {
          emojiName: d,
          animated: false
        }) : null,
        ref: _
      })
    });
    return (0, r.jsx)(s.ksK, {
      placeholder: x,
      value: n,
      minLength: h,
      maxLength: b,
      defaultDirty: (null == n ? true : n.length) > 0,
      leading: {
        type: "emoji",
        button: A
      },
      onChange: e => {
        m(e)
      },
      clearable: {
        show: (null != (t = null == n ? true : n.length) ? t : 0) > 0 || null != d
      },
      onClear: f
    }, "text-input-".concat(j, "-").concat(y))
  },
  f = e => {
    let {
      reasonMinLength: t,
      reasonMaxLength: n,
      guildId: i,
      reasons: l
    } = e, a = [m.intl.string(m.t["9dhBGo"]), m.intl.string(m.t["8RmhKF"]), m.intl.string(m.t["2t0V83"]), m.intl.string(m.t.l8WqCR)], o = [];
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
      placeholder: a[e]
    }, l[e]), {
      onSetReason: t => {
        let n = [...l],
          r = Object.assign({}, l[e], {
            reason: t
          });
        n[e] = r, (0, d.MA)(i, n)
      },
      onSelectEmoji: t => {
        let n = [...l],
          r = Object.assign({}, l[e], {
            emoji_name: t.optionallyDiverseSequence
          });
        n[e] = r, (0, d.MA)(i, n)
      },
      onClearPressed: () => {
        let t = [...l],
          n = {
            reason: "",
            emoji_name: null
          };
        t[e] = n, (0, d.MA)(i, t)
      },
      reasonMinLength: t,
      reasonMaxLength: n
    }), "reasonListItem-" + e));
    return (0, r.jsx)(s.BJc, {
      gap: 16,
      children: o
    })
  }