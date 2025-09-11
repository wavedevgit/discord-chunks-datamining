/** Chunk was on 70127 **/
/** chunk id: 842332, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => p
}), require("./388685.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk544891 = require("./544891.js"),
  Chunk481060 = require("./481060.js"),
  Chunk466721 = require("./466721.js"),
  Chunk375954 = require("./375954.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
async function d(e) {
  try {
    var t, n;
    let r = await l.tn.post({
      url: c.ANM.AI_TITLE,
      body: {
        content: e
      },
      oldFormErrors: true,
      rejectWithError: false
    });
    return r.ok && null != (n = null == (t = r.body) ? true : t.title) ? n : null
  } catch (e) {
    return null
  }
}

function p(e) {
  let {
    parentChannel: t,
    parentMessageId: n,
    updateThreadSettings: l,
    threadSettings: c,
    textAreaState: p
  } = e, [h, f] = i.useState(false), [m, g] = i.useState(false), {
    enableAIFeatures: b
  } = o.C.useExperiment({
    location: "CreateThreadSidebar"
  }), y = i.useCallback(async () => {
    if (b) {
      f(true);
      try {
        let r = null;
        if (null != n) {
          var e;
          let i = s.Z.getMessage(t.id, n);
          r = null != (e = null == i ? true : i.content) ? e : null
        } else p.textValue.trim().length >= 10 && (r = p.textValue);
        if (null != r) {
          let e = await d(r);
          null != e && "" !== e.trim() && l({
            name: e
          })
        }
      } finally {
        f(false)
      }
    }
  }, [t.id, n, l, b, p.textValue]);
  i.useEffect(() => {
    g(false), f(false), t.id === c.parentChannelId && n !== c.parentMessageId && l({
      name: ""
    })
  }, [n, l, t.id, c.parentChannelId, c.parentMessageId]), i.useEffect(() => {
    (null == c.name || "" === c.name.trim()) && !m && b && null != n && (g(true), y())
  }, [t.id, n, l, c.name, m, b, y]);
  let _ = i.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
      if (b) return {
        icon: a.$2U,
        onClick: y,
        "aria-label": u.intl.string(u.t.ZF2oBg),
        disabled: e || h || null == n && p.textValue.trim().length < 10,
        tooltip: u.intl.string(u.t.ZF2oBg),
        loading: h
      }
    }, [b, y, h, n, p.textValue]),
    C = i.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
      return b ? (0, r.jsx)(a.ua7, {
        text: u.intl.string(u.t.ZF2oBg),
        children: t => {
          var i, l;
          return (0, r.jsx)(a.hU, (i = function(e) {
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
          }({}, t), l = l = {
            icon: a.$2U,
            variant: "secondary",
            size: "sm",
            "aria-label": u.intl.string(u.t.ZF2oBg),
            onClick: y,
            disabled: e || h || null == n && p.textValue.trim().length < 10,
            loading: h,
            type: "button"
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
          }), i))
        }
      }) : null
    }, [b, h, n, p.textValue, y]);
  return {
    isGeneratingAI: h,
    generateAIName: y,
    enableAIFeatures: b,
    renderAiGenerateButton: C,
    getThreadNameInputAccessory: _
  }
}