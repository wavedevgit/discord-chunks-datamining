/** Chunk was on 30485 **/
/** chunk id: 595953, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  A: () => N
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js"),
  Chunk536432 = require("./536432.js"),
  Chunk792348 = require("./792348.js"),
  Chunk674168 = require("./674168.jsx"),
  Chunk989799 = require("./989799.jsx"),
  Chunk69217 = require("./69217.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk443669 = require("./443669.js");

function I(t) {
  let {
    onSelect: e
  } = t, [i, r] = l.useState(false), a = (0, s.bG)([o.default], () => o.default.getCurrentUser()), T = d.Ay.canUseCustomCallSounds(a), A = l.useRef(null);

  function I(t) {
    T && (r(false), null == e || e(t))
  }
  return (0, n.jsx)(u.YNO, {
    targetElementRef: A,
    shouldShow: i,
    position: "left",
    onRequestClose: () => r(false),
    renderPopout: t => {
      let {
        closePopout: e
      } = t;
      return (0, n.jsx)(u.lGe, {
        children: (0, n.jsx)(c.A, {
          suppressPlaySound: true,
          shouldShowUpsell: false,
          guildId: null,
          channel: null,
          onClose: e,
          onSelect: I,
          gridNotice: T ? null : (0, n.jsx)(S.m, {}),
          analyticsSource: "call sounds edit setting"
        })
      })
    },
    children: t => {
      var e, l;
      return (0, n.jsx)(E.dT, (e = function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(i);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
            return Object.getOwnPropertyDescriptor(i, t).enumerable
          }))), n.forEach(function(e) {
            var n;
            n = i[e], e in t ? Object.defineProperty(t, e, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : t[e] = n
          })
        }
        return t
      }({}, t), l = l = {
        ref: A,
        onClick: () => {
          r(!i)
        },
        text: g.intl.string(g.t.uOe0Az),
        children: (0, n.jsx)(u.R2l, {
          size: "md",
          color: "currentColor",
          className: _.Wo
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l)) : (function(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          i.push.apply(i, n)
        }
        return i
      })(Object(l)).forEach(function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(l, t))
      }), e))
    }
  })
}

function O(t) {
  let {
    sound: e
  } = t, {
    previewSound: i
  } = (0, A.A)(e, null), l = 0 === (0, T.wH)() ? g.intl.string(g.t.OASXjt) : g.intl.formatToPlainString(g.t["/8fYO5"], {
    emojiName: e.emojiName,
    soundName: e.name
  });
  return (0, n.jsx)(E.dT, {
    onClick: i,
    text: l,
    children: (0, n.jsx)(u.HKD, {
      size: "md",
      color: "currentColor",
      className: _.wg
    })
  })
}

function N(t) {
  let {
    sound: e,
    isGlobal: i,
    onSelect: l
  } = t, s = null != e, o = null == e ? true : e.emojiId, d = null == e ? true : e.emojiName, T = s && (null != d || null != o);
  return (0, n.jsxs)("div", {
    className: _.D6,
    children: [(0, n.jsxs)("div", {
      className: _.kL,
      children: [T && (0, n.jsx)(a.A, {
        emojiId: o,
        emojiName: d,
        className: _.Zg
      }), (0, n.jsx)(u.Text, {
        variant: "text-xs/medium",
        color: "text-strong",
        className: _.dj,
        children: null == e ? g.intl.string(g.t.PoWNfe) : i ? g.intl.format(g.t.B6HU6O, {
          soundName: e.name,
          subtextHook: t => (0, n.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-default",
            tag: "span",
            children: t
          })
        }) : e.name
      }), s ? (0, n.jsx)(O, {
        sound: e
      }) : (0, n.jsx)(u.HKD, {
        size: "md",
        color: "currentColor",
        className: _.Gk
      })]
    }), (0, n.jsxs)("div", {
      className: _.kL,
      children: [(0, n.jsx)(I, {
        onSelect: l
      }), s && !i && (0, n.jsx)(E.dT, {
        onClick: () => l(null),
        text: g.intl.string(g.t.jmtcGA),
        children: (0, n.jsx)(u.ucK, {
          size: "md",
          color: r.A.unsafe_rawColors.RED_400.css,
          className: _.Wo
        })
      })]
    })]
  })
}